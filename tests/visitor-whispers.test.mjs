import assert from 'node:assert/strict';
import test from 'node:test';
import { readFileSync } from 'node:fs';
import {
  detectDevice, detectBrowser, collectVisitorClues,
  visitorWhisperOptions, selectVisitorWhisper, parseNetworkClues,
  lookupNetworkClues, networkWhisperOptions, geoCities, geoRegions, geoProviders
} from '../src/data/visitorWhispers.ts';

const source = path => readFileSync(new URL('../' + path, import.meta.url), 'utf8');
const base = {
  device: null, browser: null, fullScreen: false,
  language: null, width: 0, portrait: false, scrolled: false,
  returnedToTab: false, touchScreen: false, darkMode: false,
  reducedMotion: false, offline: false
};

test('säkra enhets- och webbläsaridentifieringar, utan påhittade leverantörer', () => {
  assert.equal(detectDevice('Mozilla/5.0 (iPhone; CPU iPhone OS 18_0 like Mac OS X)'), 'iPhone');
  assert.equal(detectDevice('Mozilla/5.0 (iPad; CPU OS 17_0 like Mac OS X)'), 'iPad');
  assert.equal(detectDevice('Mozilla/5.0 (Linux; Android 15; Pixel)'), 'Android');
  assert.equal(detectDevice('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)'), null);
  assert.equal(detectBrowser('Mozilla/5.0 Firefox/128.0'), 'Firefox');
  assert.equal(detectBrowser('Mozilla/5.0 Chrome/131.0.0.0 Safari/537.36'), 'Chrome');
  assert.equal(detectBrowser('Mozilla/5.0 Edg/131.0 Chrome/131.0 Safari/537.36'), 'Edge');
  assert.equal(detectBrowser('Mozilla/5.0 OPR/103.0 Chrome/131.0'), 'Opera');
  assert.equal(detectBrowser('Mozilla/5.0 Version/17.5 Safari/605.1.15'), 'Safari');
  assert.equal(detectBrowser('Unknown/1.2'), null);
});

test('personliga skräckrepliker grundas i verkligt observerade webbläsarfakta', () => {
  const phone = visitorWhisperOptions({ ...base, device: 'iPhone', browser: 'Safari' });
  assert.ok(phone.some(x => /IPHONE/.test(x)));
  assert.ok(phone.some(x => /SAFARI/.test(x)));
  assert.ok(phone.every(x => !/CHROME|FIREFOX|HELskärm/i.test(x)));

  const chrome = visitorWhisperOptions({ ...base, browser: 'Chrome', fullScreen: true });
  assert.ok(chrome.some(x => /CHROME-FLIK ÄR I HELSKÄRM/.test(x)));
  const notFull = visitorWhisperOptions({ ...base, browser: 'Chrome', fullScreen: false });
  assert.ok(!notFull.some(x => /HELSKÄRM/.test(x)));

  const tab = visitorWhisperOptions({ ...base, returnedToTab: true, scrolled: true });
  assert.ok(tab.some(x => /KOM TILLBAKA/.test(x)));
  assert.ok(tab.some(x => /SKROLLADE/.test(x)));

  const narrow = visitorWhisperOptions({ ...base, width: 393 });
  assert.ok(narrow.some(x => /393 PIXLAR/.test(x)));
  assert.ok(!visitorWhisperOptions(base).some(x => /PIX(L|LAR)|CHROME|IPHONE|SAFARI|FIREFOX/.test(x)));
  assert.ok(visitorWhisperOptions({ ...base, reducedMotion: true }).some(x => /RÖRA SIG MINDRE/.test(x)));
  assert.ok(visitorWhisperOptions({ ...base, offline: true }).some(x => /WEBBLÄSARE SÄGER ATT DU ÄR FRÅNKOPPLAD/.test(x)));
});

test('nätuppslaget används bara i besökarens flik utan IP i repliker eller lagring', () => {
  const moduleCode = source('src/data/visitorWhispers.ts');
  const transmission = source('src/components/SpiritTransmission.astro');
  const sayings = visitorWhisperOptions({
    ...base, device: 'iPhone', browser: 'Chrome', fullScreen: true,
    width: 1200, darkMode: true, returnedToTab: true
  }).join(' ');
  assert.doesNotMatch(sayings, /BAHNHOF|INTERNETLEVERANTÖR|OPERATÖR|IP-ADRESS|POSITION|ADRESS/i);
  assert.match(moduleCode, /https:\/\/ipwho\.is\/\?fields=success,country_code,city,region,connection\.isp,connection\.org/);
  assert.doesNotMatch(moduleCode, /\bXMLHttpRequest\b|\bsendBeacon\s*\(|\bgeolocation\b|\bwebsocket\b/i);
  assert.doesNotMatch(moduleCode, /\blocalStorage\b|\bsessionStorage\b|document\.cookie/i);
  assert.match(transmission, /weab:visitor-whisper/);
  assert.match(transmission, /collectVisitorClues\(window, document, returnedToTab\), detail\.index, networkClues/);
  assert.equal(selectVisitorWhisper(base, 0), selectVisitorWhisper(base, 0));
});

test('endast svenska, kända orter och operatörer blir försiktigt formulerade repliker', () => {
  const clues = parseNetworkClues({ success: true, ip: '192.0.2.1',
    country_code: 'SE', city: 'Stockholm', region: 'Stockholm County',
    connection: { isp: 'Telia Company AB', network: '192.0.2.0/24' },
    location: { lat: 59, lon: 18 } });
  assert.deepEqual(clues, { city: 'Stockholm', region: 'Stockholm', provider: 'Telia' });
  const lines = networkWhisperOptions(clues);
  assert.deepEqual(lines, [
    'ÄR DU I STOCKHOLM? JAG VILL BARA PRATA!',
    'ÄR DU NÅGONSTANS I STOCKHOLM? JAG FÖRSÖKER NÅ DIG.',
    'JAG VERKAR BEHÖVA GÅ VIA TELIA FÖR ATT NÅ DIG.'
  ]);
  assert.equal(selectVisitorWhisper(base, 0, clues), lines[0]);
  assert.equal(selectVisitorWhisper(base, 2, clues), lines[2]);
  assert.ok(lines.every(x => !/192\.0\.2|59|18|COMPANY|192|ABONNEMANG/.test(x)));
  assert.equal(parseNetworkClues({ success: true, country_code: 'NO', city: 'Stockholm' }), null);
  assert.deepEqual(parseNetworkClues({ success: true, country_code: 'SE',
    city: 'Evil<script>', region: 'Fake County', connection: { isp: 'Unknown Inc' } }),
    { city: null, region: null, provider: null });
  assert.deepEqual(parseNetworkClues({ success: true, country_code: 'SE',
    city: 'Gothenburg', region: 'Scania', connection: { isp: 'Hi3G Access AB' } }),
    { city: 'Göteborg', region: 'Skåne', provider: 'Tre' });
  assert.deepEqual(parseNetworkClues({ success: true, country_code: 'SE',
    connection: { isp: 'Unknown Inc', org: 'Bahnhof AB' } }),
    { city: null, region: null, provider: 'Bahnhof' });
  assert.equal(parseNetworkClues({ success: false, country_code: 'SE' }), null);
  assert.equal(geoProviders.length, 15);
  assert.ok(geoCities.length >= 30 && geoRegions.length === 22);
});

test('Stockholm, Jönköping, Malmö, Kalmar, Göteborg och Uppsala har korrekta ortsrepliker', () => {
  for (const city of ['Stockholm', 'Jönköping', 'Malmö', 'Kalmar', 'Göteborg', 'Uppsala']) {
    const record = parseNetworkClues({ success: true, country_code: 'SE', city });
    assert.equal(record.city, city);
    assert.equal(networkWhisperOptions(record)[0],
      `ÄR DU I ${city.toLocaleUpperCase('sv-SE')}? JAG VILL BARA PRATA!`);
  }
});

test('Värnamo fungerar både som ort och som API-region utan länspåstående', () => {
  const record = parseNetworkClues({ success: true, country_code: 'SE',
    city: 'Värnamo', region: 'Värnamo' });
  assert.deepEqual(record, { city: 'Värnamo', region: 'Värnamo', provider: null });
  assert.deepEqual(networkWhisperOptions(record), [
    'ÄR DU I VÄRNAMO? JAG VILL BARA PRATA!',
    'ÄR DU NÅGONSTANS I VÄRNAMO? JAG FÖRSÖKER NÅ DIG.'
  ]);
  for (const label of ['Värnamo County', 'Varnamo Municipality',
    'Municipality of Värnamo', 'Region: Värnamo, Sweden']) {
    assert.equal(parseNetworkClues({ success: true, country_code: 'SE',
      region: label }).region, 'Värnamo', label);
  }
  assert.equal(parseNetworkClues({ success: true, country_code: 'SE',
    region: 'Värnamoborg' }).region, null);
});

test('nätuppslag hanterar 429, timeout och CORS utan att fördröja lokala repliker', async () => {
  let requests = 0;
  assert.equal(await lookupNetworkClues(async (url, init) => {
    requests++;
    assert.equal(url, 'https://ipwho.is/?fields=success,country_code,city,region,connection.isp,connection.org');
    assert.equal(init.credentials, 'omit');
    assert.equal(init.referrerPolicy, 'no-referrer');
    assert.equal(init.cache, 'no-store');
    assert.ok(init.signal);
    return { ok: false, status: 429 };
  }), null);
  assert.equal(requests, 1);
  assert.equal(await lookupNetworkClues(async () => { throw new TypeError('CORS'); }), null);
  assert.deepEqual(await lookupNetworkClues(async () => ({ ok: true, json: async () => ({
    success: true, country_code: 'SE', city: 'Malmö', connection: { isp: 'Bahnhof AB' }
  }) })), { city: 'Malmö', region: null, provider: 'Bahnhof' });
});

test('webbläsarens fullskärmsläge hämtas endast med verifierbart API', () => {
  const fakeWindow = {
    navigator: { userAgent: 'Firefox/128.0', language: 'sv-SE', maxTouchPoints: 0 },
    innerWidth: 1111, innerHeight: 800, scrollY: 0,
    matchMedia: query => ({ matches: query === '(prefers-color-scheme: dark)' })
  };
  const ordinary = collectVisitorClues(fakeWindow, { fullscreenElement: null });
  assert.equal(ordinary.fullScreen, false);
  assert.equal(ordinary.browser, 'Firefox');
  assert.equal(ordinary.language, 'svenska');
  assert.equal(ordinary.width, 1111);
  assert.equal(ordinary.darkMode, true);
  assert.equal(ordinary.reducedMotion, false);
  assert.equal(ordinary.offline, false);
  const offline = collectVisitorClues({
    ...fakeWindow,
    navigator: { ...fakeWindow.navigator, onLine: false },
    matchMedia: query => ({ matches: query === '(prefers-reduced-motion: reduce)' })
  }, { fullscreenElement: null });
  assert.equal(offline.offline, true);
  assert.equal(offline.reducedMotion, true);
  const fullscreen = collectVisitorClues(fakeWindow, { fullscreenElement: {} });
  assert.equal(fullscreen.fullScreen, true);
});

test('en slumpad tresekunders textkapning ersätter och återställer sidan', () => {
  const phase = source('src/components/ResistanceInterference.astro');
  const signal = source('src/data/resistanceSignal.ts');
  assert.match(phase, /function runWhisper\(\)/);
  assert.match(phase, /new CustomEvent\('weab:visitor-whisper'/);
  assert.match(phase, /corruptPage\(city \? city\.toLocaleUpperCase\('sv-SE'\) : warning\)/);
  assert.match(phase, /ghostTransmission\('harsh'\)/);
  assert.match(phase, /restoreText\(\)/);
  assert.match(phase, /resistance-personalized/);
  assert.match(phase, /resistanceSignal\.personalDurationMs/);
  assert.match(phase, /phase === 'whisper'/);
  assert.match(signal, /personalDurationMs: 3_000/);
});

test('en känd stad kapar även driftmeddelandet och driver ljud- och bildstörning', () => {
  const phase = source('src/components/ResistanceInterference.astro');
  const transmission = source('src/components/SpiritTransmission.astro');
  assert.match(phase, /body > aside, body > header, body > main, body > footer/);
  assert.match(phase, /new CustomEvent\('weab:visitor-city', \{ detail: cityDetail \}\)/);
  assert.match(transmission, /if \(detail && networkClues\?\.city\) detail\.city = networkClues\.city/);
  assert.match(phase, /corruptPage\(city \? city\.toLocaleUpperCase\('sv-SE'\) : warning\)/);
  assert.match(phase, /spoken\(warning, resistanceSignal\.personalDurationMs, 'desperate'\)/);
  assert.match(phase, /\[580, 1_210, 1_840, 2_470\]/);
  assert.match(phase, /new CustomEvent\('weab:spirit-sustain'/);
  assert.match(phase, /restoreText\(\)/);
  assert.match(phase, /resistance-city-overrun/);
  assert.match(phase, /@media \(prefers-reduced-motion: reduce\)/);
});

test('enstaka karantänrader kan tilltala just denna besökares webbläsare', () => {
  const layout = source('src/layouts/BaseLayout.astro');
  assert.match(layout, /beats\.indexOf\(currentBeat\) % 13 === 2/);
  assert.match(layout, /weab:visitor-whisper/);
  assert.match(layout, /personalizedBeatKey/);
  assert.match(layout, /personalizedBeatText/);
  assert.match(layout, /latestIntrusion = personalizedBeatText/);
  assert.match(layout, /const visibleLetters = typing/);
  assert.match(layout, /updateTypingSound\(/);
});
