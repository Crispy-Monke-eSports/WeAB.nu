import assert from 'node:assert/strict';
import test from 'node:test';
import {
  resistanceLockdown, createLockdownCookie, readLockdownExpiry
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
