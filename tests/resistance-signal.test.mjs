import assert from 'node:assert/strict';
import test from 'node:test';
import {
  resistanceSignal, createSignalSchedule,
  isSignalSchedule, isSignalOnCooldown
} from '../src/data/resistanceSignal.ts';

test('den tidiga signalen inträffar efter 100–210 sekunders aktiv läsning', () => {
  const schedule = createSignalSchedule(() => 0);
  assert.equal(schedule.minorAtMs, 30_000);
  assert.equal(schedule.breachAtMs, 100_000);
  assert.equal(schedule.activeMs, 0);
  assert.equal(schedule.minorShown, false);
  assert.ok(isSignalSchedule(schedule));
  const latest = createSignalSchedule(() => 0.799);
  assert.ok(latest.breachAtMs >= 100_000 && latest.breachAtMs < 210_000);
});

test('den långsammare variationen inträffar inom 225–320 sekunder', () => {
  const schedule = createSignalSchedule(() => 0.99);
  assert.ok(schedule.breachAtMs >= 225_000 && schedule.breachAtMs < 320_000);
  assert.ok(schedule.breachAtMs > schedule.minorAtMs);
});

test('korrupta eller ofullständiga sessionsdata accepteras inte', () => {
  assert.equal(isSignalSchedule(null), false);
  assert.equal(isSignalSchedule({ activeMs: NaN }), false);
  assert.equal(isSignalSchedule({
    activeMs: 100, minorAtMs: 50, breachAtMs: 40, minorShown: false
  }), false);
});

test('15 minuters spärr gäller efter genomfört intrång', () => {
  const now = 1_800_000;
  assert.equal(isSignalOnCooldown(now, now - 1000), true);
  assert.equal(isSignalOnCooldown(now, now - resistanceSignal.cooldownMs + 1), true);
  assert.equal(isSignalOnCooldown(now, now - resistanceSignal.cooldownMs), false);
  assert.equal(isSignalOnCooldown(now, null), false);
  assert.equal(isSignalOnCooldown(now, Number.NaN), false);
});

test('tunneln är ledtråden; vraket förekommer inte i adress eller meddelanden', () => {
  assert.equal(resistanceSignal.targetPath, '/31-66--351/');
  assert.deepEqual(resistanceSignal.messages.map(message => message.text),
    ['HÖR DU OSS?', 'VI ÄR FORTFARANDE HÄR.', 'HITTA OSS.']);
  assert.ok(resistanceSignal.messages.every(message => message.durationMs >= 1000));
});
