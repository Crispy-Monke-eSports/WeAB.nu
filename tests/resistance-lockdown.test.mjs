import assert from 'node:assert/strict';
import test from 'node:test';
import {
  resistanceLockdown, createLockdownCookie, readLockdownExpiry,
  getLockdownBeat, getLockdownStatus, createLockdownTimeline
} from '../src/data/resistanceLockdown.ts';
import { createSignalSchedule, isSignalSchedule } from '../src/data/resistanceSignal.ts';

test('Morse aktiverar en sidövergripande cookie-spärr på exakt fem minuter', () => {
  const now = 1_800_000_000_000;
  const cookie = createLockdownCookie(now, true);
  assert.match(cookie, /^weab_centralserver_lock_until=1800000300000;/);
  assert.match(cookie, /Max-Age=300/);
  assert.match(cookie, /Path=\//);
  assert.match(cookie, /SameSite=Lax/);
  assert.match(cookie, /Secure/);
  assert.equal(resistanceLockdown.durationMs, 300_000);
  assert.equal(readLockdownExpiry(cookie, now), now + 300_000);
  assert.equal(readLockdownExpiry(cookie, now + 299_999), now + 300_000);
});

test('cookies fungerar även lokalt och gäller oberoende av sidans URL', () => {
  const now = 1_800_000_000_000;
  const cookie = createLockdownCookie(now, false);
  assert.ok(!cookie.includes('Secure'));
  const header = 'theme=dark; ' + cookie.split(';')[0] + '; another=1';
  assert.equal(readLockdownExpiry(header, now + 5_000), now + 300_000);
  assert.equal(readLockdownExpiry(header, now + 300_000), null);
});

test('gamla, korrupta och orimligt framtida cookies låser aldrig webbplatsen', () => {
  const now = 1_800_000_000_000;
  const name = resistanceLockdown.cookieName;
  for (const value of ['invalid', 'NaN', '-1', '0', String(now - 1),
    String(now + 300_001), 'Infinity', '1.2']) {
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
    assert.ok(timeline.length >= 27 && timeline.length <= 65, 'antal händelser');
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
  const t = createLockdownTimeline(1_800_000_300_000);
  assert.equal(getLockdownBeat(-100, t), t[0]);
  assert.equal(getLockdownBeat(0, t), t[0]);
  for (const beat of t) {
    assert.deepEqual(getLockdownBeat(beat.atMs, t), beat);
  }
  assert.equal(getLockdownBeat(299_999, t), t.at(-1));
  assert.ok(t.filter(b => b.atMs > 200_000).length >= 10);
});

test('dödsbekräftelsen visas vid fem minuter och först därefter återkommer sidan', () => {
  const until = 1_800_000_300_000;
  assert.equal(getLockdownStatus(until, until - 1), 'locked');
  assert.equal(getLockdownStatus(until, until), 'confirmed');
  assert.equal(getLockdownStatus(until, until + resistanceLockdown.exitMessageMs - 1), 'confirmed');
  assert.equal(getLockdownStatus(until, until + resistanceLockdown.exitMessageMs), 'available');
  assert.equal(getLockdownStatus(null, until), 'available');
  assert.equal(resistanceLockdown.exitMessage, 'Dödsfall bekräftat. Återtar anslutning...');
  assert.ok(resistanceLockdown.exitMessageMs >= 2_000 && resistanceLockdown.exitMessageMs <= 5_000);
});
