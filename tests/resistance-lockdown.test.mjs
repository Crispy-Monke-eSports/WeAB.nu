import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';
import {
  resistanceLockdown, createLockdownCookie, readLockdownExpiry,
  createQuietCookie, readQuietExpiry,
  getLockdownBeat, getLockdownStatus, createLockdownTimeline
} from '../src/data/resistanceLockdown.ts';

test('minispelets tysta läge använder samma cookie utan att öppna karantänen', () => {
  const now = 1_800_000_000_000;
  const cookie = createQuietCookie(now, true);
  assert.match(cookie, /^weab_centralserver_lock_until=quiet\.1800000180000;/);
  assert.match(cookie, /Max-Age=180; Path=\/; SameSite=Lax; Secure/);
  assert.equal(readQuietExpiry(cookie, now), now + 180_000);
  assert.equal(readLockdownExpiry(cookie, now), null);
  assert.equal(readQuietExpiry(cookie, now + 180_000), null);
  assert.equal(readQuietExpiry(createLockdownCookie(now, false), now), null);
});

test('karantänens slutmeddelande följs av tre minuter utan nya intrång', () => {
  const layout = readFileSync(new URL('../src/layouts/BaseLayout.astro', import.meta.url), 'utf8');
  const confirmed = layout.split('function showConfirmed(now, until) {')[1]
    .split('function applyLockdown() {')[0];
  assert.match(confirmed, /const quietStartsAt = \(until \|\| timelineExpiry \|\| now\) \+ exitMessageMs/);
  assert.match(confirmed, /const quietUntil = Math\.trunc\(quietStartsAt \+ quietDurationMs\)/);
  assert.match(confirmed, /document\.cookie = `\$\{lockCookieName\}=quiet\.\$\{quietUntil\}`/);
  assert.match(confirmed, /secondsLeft > 0/);
  assert.ok(confirmed.indexOf('showSystem(exitMessage') < confirmed.indexOf('document.cookie ='));
  assert.match(layout, /until <= now \+ quietDurationMs \? until : 0/);
});
import { createSignalSchedule, isSignalSchedule } from '../src/data/resistanceSignal.ts';

test('Morse aktiverar en sidövergripande cookie-spärr på exakt tre minuter', () => {
  const now = 1_800_000_000_000;
  const cookie = createLockdownCookie(now, true);
  assert.match(cookie, /^weab_centralserver_lock_until=1800000180000;/);
  assert.match(cookie, /Max-Age=180/);
  assert.match(cookie, /Path=\//);
  assert.match(cookie, /SameSite=Lax/);
  assert.match(cookie, /Secure/);
  assert.equal(resistanceLockdown.durationMs, 180_000);
  assert.equal(resistanceLockdown.quietDurationMs, 180_000);
  assert.equal(readLockdownExpiry(cookie, now), now + 180_000);
  assert.equal(readLockdownExpiry(cookie, now + 179_999), now + 180_000);
});

test('cookies fungerar även lokalt och gäller oberoende av sidans URL', () => {
  const now = 1_800_000_000_000;
  const cookie = createLockdownCookie(now, false);
  assert.ok(!cookie.includes('Secure'));
  const header = 'theme=dark; ' + cookie.split(';')[0] + '; another=1';
  assert.equal(readLockdownExpiry(header, now + 5_000), now + 180_000);
  assert.equal(readLockdownExpiry(header, now + 180_000), null);
});

test('gamla, korrupta och orimligt framtida cookies låser aldrig webbplatsen', () => {
  const now = 1_800_000_000_000;
  const name = resistanceLockdown.cookieName;
  for (const value of ['invalid', 'NaN', '-1', '0', String(now - 1),
    String(now + 180_001), 'Infinity', '1.2']) {
    assert.equal(readLockdownExpiry(name + '=' + value, now), null, value);
  }
  assert.equal(readLockdownExpiry('', now), null);
  assert.equal(readLockdownExpiry('unrelated=123', now), null);
});

test('när spärren har gått ut går det att skapa en helt ny slumpad session', () => {
  const first = createSignalSchedule(() => 0);
  const second = createSignalSchedule(() => 0.999);
  assert.ok(isSignalSchedule(first));
  assert.ok(isSignalSchedule(second));
  assert.notDeepEqual(first.queue, second.queue);
  assert.equal(first.activeMs, 0);
  assert.equal(second.activeMs, 0);
  assert.ok(second.nextAtMs >= 30_000 && second.nextAtMs < 70_000);
});

test('slumpad tidslinje har aldrig upprepade meddelanden och varierar mellan låsningar', () => {
  const base = 1_800_000_000_000;
  const timelines = [];
  for (let seed = 0; seed < 80; seed++) {
    const timeline = createLockdownTimeline(base + seed * 1_002_191);
    timelines.push(timeline);
    assert.ok(timeline.length >= 22 && timeline.length <= 40, 'antal händelser');
    assert.equal(timeline[0].atMs, 0);
    assert.equal(timeline[0].voice, 'system');
    assert.equal(new Set(timeline.map(b => b.text)).size, timeline.length, 'inga upprepade rader');
    const spiritCount = timeline.filter(b => b.voice === 'intrusion').length;
    const systemCount = timeline.filter(b => b.voice === 'system').length;
    assert.ok(spiritCount > systemCount * 2, 'själen försöker ta över oftare');
    const gaps = timeline.slice(1).map((beat, i) => beat.atMs - timeline[i].atMs);
    assert.ok(new Set(gaps).size >= 10, 'regelbundna intervall är förbjudna');
    assert.ok(gaps.every(gap => gap >= 2_000 && gap < 12_000), 'varierade men rimliga pauser');
    assert.ok(timeline.at(-1).atMs < resistanceLockdown.durationMs);
  }
  assert.deepEqual(createLockdownTimeline(base), createLockdownTimeline(base),
    'alla flikar ska få samma ordning för samma cookie-sluttid');
  assert.notDeepEqual(timelines[0], timelines[1], 'ny karantän får nytt förlopp');
});

test('samma glitchepisod eskalerar och kan återupptas mitt i förloppet', () => {
  const t = createLockdownTimeline(1_800_000_180_000);
  assert.equal(getLockdownBeat(-100, t), t[0]);
  assert.equal(getLockdownBeat(0, t), t[0]);
  for (const beat of t) {
    assert.deepEqual(getLockdownBeat(beat.atMs, t), beat);
  }
  assert.equal(getLockdownBeat(179_999, t), t.at(-1));
  assert.ok(t.filter(b => b.atMs > 150_000).length >= 5);
});

test('dödsbekräftelsen visas vid tre minuter och först därefter återkommer sidan', () => {
  const until = 1_800_000_180_000;
  assert.equal(getLockdownStatus(until, until - 1), 'locked');
  assert.equal(getLockdownStatus(until, until), 'confirmed');
  assert.equal(getLockdownStatus(until, until + resistanceLockdown.exitMessageMs - 1), 'confirmed');
  assert.equal(getLockdownStatus(until, until + resistanceLockdown.exitMessageMs), 'available');
  assert.equal(getLockdownStatus(null, until), 'available');
  assert.equal(resistanceLockdown.exitMessage, 'Dödsfall bekräftat. Återtar anslutning...');
  assert.ok(resistanceLockdown.exitMessageMs >= 2_000 && resistanceLockdown.exitMessageMs <= 5_000);
});

test('själen antyder talarstolens hemlighet utan att avslöja bok eller plats', () => {
  const early = resistanceLockdown.spiritEarly;
  const late = resistanceLockdown.spiritLate;
  assert.ok(early.includes('de räknade röster där en gång'));
  assert.ok(early.includes('inte alla ord försvann'));
  assert.ok(late.includes('de tog rösterna. inte huset'));
  assert.ok(late.includes('salen är kvar. besluten är borta'));
  assert.equal(resistanceLockdown.waypointWhispers.length, 2);
  // En riktad viskning ska hjälpa spelaren till riksdagen,
  // men inte avslöja gömstället inuti den eller kodlagren.
  assert.ok(resistanceLockdown.waypointWhispers.every(x =>
    /huvudstaden/.test(x) && /sal/.test(x) &&
    /beslut|röst/.test(x)));
  const spoken = [...early, ...late, ...resistanceLockdown.waypointWhispers].join(' ');
  assert.doesNotMatch(spoken,
    /podium|podiet|riksdag|talarstol|atbash|base64|2142|957|Felvänd avskrift/i);
});

test('minst en riktad riksdagsledtråd kommer under varje treminuterskarantän', () => {
  const options = new Set(resistanceLockdown.waypointWhispers);
  const observed = new Set();
  for (let seed = 0; seed < 120; seed++) {
    const timeline = createLockdownTimeline(1_800_000_000_000 + seed * 1_002_191);
    const hints = timeline.filter(beat => options.has(beat.text));
    assert.equal(hints.length, 1, 'exakt en väganvisning per karantän');
    assert.equal(hints[0].voice, 'intrusion');
    assert.ok(hints[0].atMs >= 130_000 && hints[0].atMs < 180_000,
      'väganvisningen visas ungefär mitt i karantänen');
    observed.add(hints[0].text);
    assert.equal(new Set(timeline.map(b => b.text)).size, timeline.length);
  }
  assert.deepEqual(observed, options, 'båda varianterna ska användas');
});

test('HTML-layoutens faktiska karantän respekterar och visar ledtråden', () => {
  const layout = readFileSync(new URL('../src/layouts/BaseLayout.astro', import.meta.url), 'utf8');
  assert.match(layout, /lockWaypointWhispers: resistanceLockdown\.waypointWhispers/);
  assert.match(layout, /const waypoint = timeline\.find\(beat =>/);
  assert.match(layout, /beat\.voice === 'intrusion' && beat\.atMs >= 130_000/);
  assert.match(layout, /waypoint\.text = lockWaypointWhispers\[/);
  assert.match(layout, /!lockWaypointWhispers\.includes\(latestIntrusion\)/,
    'personliga webbläsarrepliker får inte skriva över riksdagsledtråden');
});
