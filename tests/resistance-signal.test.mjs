import assert from 'node:assert/strict';
import test from 'node:test';
import {
  resistanceSignal, signalPhases, createSignalSchedule,
  advanceSignalSchedule, phaseDurationMs,
  isSignalSchedule, isSignalOnCooldown
} from '../src/data/resistanceSignal.ts';

test('första titelstörningen inträffar efter 30–70 sekunders aktivt besök', () => {
  const earliest = createSignalSchedule(() => 0);
  const latest = createSignalSchedule(() => 0.999);
  assert.deepEqual(earliest, {
    activeMs: 0, nextPhase: 'title', nextAtMs: 30_000
  });
  assert.ok(latest.nextAtMs >= 30_000 && latest.nextAtMs < 70_000);
  assert.ok(isSignalSchedule(earliest));
});

test('hela kedjan har minst 20 sekunders PAUS EFTER varje föregående händelse', () => {
  let schedule = createSignalSchedule(() => 0);
  assert.deepEqual(signalPhases, ['title', 'disobey', 'fullscreen', 'redirect']);
  const expectedDurations = [950, 1500, 4150];
  const startTimes = [schedule.nextAtMs];
  for (let i = 0; i < expectedDurations.length; i++) {
    const previousPhase = schedule.nextPhase;
    const previousStart = schedule.nextAtMs;
    const duration = phaseDurationMs(previousPhase);
    assert.equal(duration, expectedDurations[i]);
    schedule = advanceSignalSchedule({ ...schedule, activeMs: previousStart }, () => 0);
    startTimes.push(schedule.nextAtMs);
    const pause = schedule.nextAtMs - (previousStart + duration);
    assert.equal(pause, resistanceSignal.minBetweenEventsMs);
    assert.ok(pause >= 20_000);
  }
  assert.equal(schedule.nextPhase, 'redirect');
  assert.equal(startTimes.length, 4);
  assert.ok(startTimes.every((time, i) => i === 0 || time > startTimes[i - 1]));
});

test('pauserna varierar men sjunker aldrig under 20 sekunder', () => {
  for (const phase of ['title', 'disobey', 'fullscreen']) {
    const base = { activeMs: 80_000, nextAtMs: 80_000, nextPhase: phase };
    const short = advanceSignalSchedule(base, () => 0);
    const long = advanceSignalSchedule(base, () => 0.9999);
    assert.ok(short.nextAtMs >= 80_000 + phaseDurationMs(phase) + 20_000);
    assert.ok(long.nextAtMs > short.nextAtMs);
    assert.ok(long.nextAtMs <= 80_000 + phaseDurationMs(phase) + 34_000);
  }
});

test('förhandsvisning kan starta tidigt utan att ta bort pauserna', () => {
  const preview = { activeMs: 1_000, nextPhase: 'title', nextAtMs: 1_000 };
  const next = advanceSignalSchedule(preview, () => 0);
  assert.equal(next.nextPhase, 'disobey');
  assert.ok(next.nextAtMs - preview.nextAtMs - resistanceSignal.titleDurationMs >= 20_000);
});

test('sessionschemat kan valideras och återupptas efter sidbyte', () => {
  const first = createSignalSchedule(() => 0);
  const second = advanceSignalSchedule({ ...first, activeMs: first.nextAtMs }, () => 0.5);
  const recovered = JSON.parse(JSON.stringify(second));
  assert.ok(isSignalSchedule(recovered));
  assert.deepEqual(recovered, second);
  assert.equal(isSignalSchedule(null), false);
  assert.equal(isSignalSchedule({ activeMs: NaN }), false);
  assert.equal(isSignalSchedule({ activeMs: 1, nextAtMs: 3, nextPhase: 'unknown' }), false);
  assert.equal(isSignalSchedule({ activeMs: 1, nextAtMs: -5, nextPhase: 'title' }), false);
  assert.throws(
    () => advanceSignalSchedule({ activeMs: 1, nextAtMs: 1, nextPhase: 'redirect' }),
    /ingen nästa fas/
  );
});

test('15 minuters spärr kvarstår efter genomförd omdirigering', () => {
  const now = 1_800_000;
  assert.equal(isSignalOnCooldown(now, now - 1000), true);
  assert.equal(isSignalOnCooldown(now, now - resistanceSignal.cooldownMs + 1), true);
  assert.equal(isSignalOnCooldown(now, now - resistanceSignal.cooldownMs), false);
  assert.equal(isSignalOnCooldown(now, null), false);
  assert.equal(isSignalOnCooldown(now, Number.NaN), false);
});

test('koordinatadressen leder till tunneln, inte det separata vraket', () => {
  assert.equal(resistanceSignal.targetPath, '/31-66--351/');
  assert.deepEqual(resistanceSignal.messages.map(message => message.text),
    ['HÖR DU OSS?', 'VI ÄR FORTFARANDE HÄR.', 'HITTA OSS.']);
  assert.equal(phaseDurationMs('fullscreen'), 4150);
});
