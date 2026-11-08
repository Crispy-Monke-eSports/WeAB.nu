import assert from 'node:assert/strict';
import test from 'node:test';
import {
  resistanceSignal, signalPhases, createSignalOrder, createSignalSchedule,
  advanceSignalSchedule, phaseDurationMs, isSignalSchedule
} from '../src/data/resistanceSignal.ts';

test('alla sex händelser blandas; Morse får ligga först och är alltid sist när den inträffar', () => {
  assert.deepEqual(signalPhases, ['title', 'disobey', 'fullscreen', 'eyes', 'redirect', 'morse']);
  const noShuffle = createSignalOrder(() => 0.999999);
  assert.deepEqual(noShuffle, ['title', 'disobey', 'fullscreen', 'eyes', 'redirect', 'morse']);
  const draws = [0, 0.999, 0.999, 0.999, 0.999];
  assert.deepEqual(createSignalOrder(() => draws.shift() ?? 0.999), ['morse']);
  assert.deepEqual(createSignalSchedule(() => 0).queue.at(-1), 'morse');
  for (let seed = 1; seed < 80; seed++) {
    let n = seed;
    const order = createSignalOrder(() => {
      n = (n * 1664525 + 1013904223) >>> 0;
      return n / 4294967296;
    });
    assert.equal(order.at(-1), 'morse');
    assert.equal(order.filter(phase => phase === 'morse').length, 1);
    assert.equal(new Set(order).size, order.length);
    assert.ok(order.length >= 1 && order.length <= 6);
    assert.ok(order.every(phase => signalPhases.includes(phase)));
  }
});

test('första slumpade effekten inträffar efter 30–70 sekunders aktiv läsning', () => {
  const early = createSignalSchedule(() => 0);
  const late = createSignalSchedule(() => 0.999);
  assert.equal(early.nextAtMs, 30_000);
  assert.ok(late.nextAtMs >= 30_000 && late.nextAtMs < 70_000);
  assert.equal(early.activeMs, 0);
  assert.ok(isSignalSchedule(early));
  assert.ok(isSignalSchedule(late));
});

test('minst 20 sekunders paus EFTER varje icke-terminal händelse, oavsett ordning', () => {
  let schedule = {
    activeMs: 30_000, nextAtMs: 30_000,
    queue: ['redirect', 'fullscreen', 'eyes', 'disobey', 'title', 'morse']
  };
  assert.ok(isSignalSchedule(schedule));
  for (const phase of ['redirect', 'fullscreen', 'eyes', 'disobey', 'title']) {
    assert.equal(schedule.queue[0], phase);
    const start = schedule.nextAtMs;
    const duration = phaseDurationMs(phase);
    const advanced = advanceSignalSchedule({ ...schedule, activeMs: start }, () => 0);
    assert.equal(advanced.nextAtMs - start - duration, resistanceSignal.minBetweenEventsMs);
    assert.ok(advanced.nextAtMs - start - duration >= 20_000);
    schedule = advanced;
  }
  assert.deepEqual(schedule.queue, ['morse']);
  assert.throws(() => advanceSignalSchedule(schedule), /Ingen nästa fas efter Morse/);
});

test('pauserna varierar och ett 404-sidbyte behåller de återstående händelserna', () => {
  const previous = { activeMs: 80_000, nextAtMs: 80_000, queue: ['redirect', 'title', 'morse'] };
  const earliest = advanceSignalSchedule(previous, () => 0);
  const latest = advanceSignalSchedule(previous, () => 0.99999);
  assert.deepEqual(earliest.queue, ['title', 'morse']);
  assert.ok(latest.nextAtMs > earliest.nextAtMs);
  assert.ok(earliest.nextAtMs - previous.activeMs >= 20_000);
  assert.deepEqual(JSON.parse(JSON.stringify(earliest)), earliest);
  assert.ok(isSignalSchedule(earliest));
});

test('sessionsdata avvisas om ordningen är korrupt, återupprepad eller har händelser efter Morse', () => {
  assert.equal(isSignalSchedule(null), false);
  assert.equal(isSignalSchedule({ activeMs: NaN, nextAtMs: 0, queue: ['morse'] }), false);
  assert.equal(isSignalSchedule({ activeMs: 0, nextAtMs: -5, queue: ['morse'] }), false);
  assert.equal(isSignalSchedule({ activeMs: 0, nextAtMs: 5, queue: [] }), false);
  assert.equal(isSignalSchedule({ activeMs: 0, nextAtMs: 5, queue: ['morse', 'title'] }), false);
  assert.equal(isSignalSchedule({ activeMs: 0, nextAtMs: 5, queue: ['title', 'title', 'morse'] }), false);
  assert.equal(isSignalSchedule({ activeMs: 0, nextAtMs: 5, queue: ['other', 'morse'] }), false);
  assert.equal(isSignalSchedule({ activeMs: 0, nextAtMs: 5, queue: ['morse'] }), true);
});

test('alla vanliga effekter behålls och koordinat-404 fortsätter vara tillgänglig', () => {
  assert.equal(resistanceSignal.targetPath, '/31-66--351/');
  assert.equal(phaseDurationMs('title'), 950);
  assert.equal(phaseDurationMs('disobey'), 1500);
  assert.equal(phaseDurationMs('fullscreen'), 4150);
  assert.equal(phaseDurationMs('eyes'), 3300);
  assert.equal(phaseDurationMs('redirect'), 0);
  assert.equal(phaseDurationMs('morse'), 0);
});

test('ögonen kan komma före Morse men aldrig efter terminalfasen', () => {
  let seenEyes = false;
  let skippedEyes = false;
  for (let seed = 1; seed < 200; seed++) {
    let state = seed;
    const queue = createSignalOrder(() => {
      state = (state * 1664525 + 1013904223) >>> 0;
      return state / 4294967296;
    });
    assert.equal(queue.at(-1), 'morse');
    assert.ok(queue.filter(phase => phase === 'eyes').length <= 1);
    if (queue.includes('eyes')) seenEyes = true;
    else skippedEyes = true;
  }
  assert.ok(seenEyes, 'minst vissa sessioner får ögonen');
  assert.ok(skippedEyes, 'ögonen är sporadiska');
});
