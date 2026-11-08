import assert from 'node:assert/strict';
import test from 'node:test';
import { readFileSync } from 'node:fs';
import {
  detectDevice, detectBrowser, collectVisitorClues,
  visitorWhisperOptions, selectVisitorWhisper
} from '../src/data/visitorWhispers.ts';

const source = path => readFileSync(new URL('../' + path, import.meta.url), 'utf8');
const base = {
  device: null, browser: null, fullScreen: false,
  language: null, width: 0, portrait: false, scrolled: false,
  returnedToTab: false, touchScreen: false, darkMode: false
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
});

test('inga externa uppslag, identifierare, cookies eller datalagring används', () => {
  const moduleCode = source('src/data/visitorWhispers.ts');
  const transmission = source('src/components/SpiritTransmission.astro');
  const sayings = visitorWhisperOptions({
    ...base, device: 'iPhone', browser: 'Chrome', fullScreen: true,
    width: 1200, darkMode: true, returnedToTab: true
  }).join(' ');
  assert.doesNotMatch(sayings, /BAHNHOF|INTERNETLEVERANTÖR|OPERATÖR|IP-ADRESS|POSITION|ADRESS/i);
  assert.doesNotMatch(moduleCode, /\bfetch\s*\(|\bXMLHttpRequest\b|\bsendBeacon\s*\(|\bgeolocation\b|\bwebsocket\b/i);
  assert.doesNotMatch(moduleCode, /\blocalStorage\b|\bsessionStorage\b|document\.cookie/i);
  assert.match(transmission, /weab:visitor-whisper/);
  assert.match(transmission, /collectVisitorClues\(window, document, returnedToTab\)/);
  assert.equal(selectVisitorWhisper(base, 0), selectVisitorWhisper(base, 0));
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
  const fullscreen = collectVisitorClues(fakeWindow, { fullscreenElement: {} });
  assert.equal(fullscreen.fullScreen, true);
});

test('en slumpad tresekunders textkapning ersätter och återställer sidan', () => {
  const phase = source('src/components/ResistanceInterference.astro');
  const signal = source('src/data/resistanceSignal.ts');
  assert.match(phase, /function runWhisper\(\)/);
  assert.match(phase, /new CustomEvent\('weab:visitor-whisper'/);
  assert.match(phase, /corruptPage\(warning\)/);
  assert.match(phase, /ghostTransmission\('harsh'\)/);
  assert.match(phase, /restoreText\(\)/);
  assert.match(phase, /resistance-personalized/);
  assert.match(phase, /resistanceSignal\.personalDurationMs/);
  assert.match(phase, /phase === 'whisper'/);
  assert.match(signal, /personalDurationMs: 3_000/);
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
