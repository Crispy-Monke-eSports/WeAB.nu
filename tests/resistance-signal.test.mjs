import assert from 'node:assert/strict';
import test from 'node:test';
import {
  resistanceSignal, signalPhases, createSignalOrder, createSignalSchedule,
  advanceSignalSchedule, phaseDurationMs, isSignalSchedule, chooseMinigame,
  nextSignalTarget
} from '../src/data/resistanceSignal.ts';

test('minispelet ersätter whisper vid tre av tio dragningar, inte ett åttonde kösteg', () => {
  assert.equal(resistanceSignal.minigameChance, .30);
  for (let i = 0; i < 10; i++) assert.equal(chooseMinigame(() => (i + .5) / 10), i < 3);
  assert.equal(chooseMinigame(() => NaN), false);
  assert.equal(signalPhases.length, 7);
});

test('alla sju händelser blandas; Morse får ligga först och är alltid sist när den inträffar', () => {
  assert.deepEqual(signalPhases, ['title', 'disobey', 'fullscreen', 'eyes', 'whisper', 'redirect', 'morse']);
  const noShuffle = createSignalOrder(() => 0.999999);
  assert.deepEqual(noShuffle, ['title', 'disobey', 'fullscreen', 'eyes', 'whisper', 'redirect', 'morse']);
  const draws = [0, 0.999, 0.999, 0.999, 0.999, 0.999];
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
    assert.ok(order.length >= 1 && order.length <= 7);
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
    target: null,
    queue: ['redirect', 'fullscreen', 'eyes', 'whisper', 'disobey', 'title', 'morse']
  };
  assert.ok(isSignalSchedule(schedule));
  for (const phase of ['redirect', 'fullscreen', 'eyes', 'whisper', 'disobey', 'title']) {
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
  const previous = { activeMs: 80_000, nextAtMs: 80_000, target: 'game', queue: ['redirect', 'title', 'morse'] };
  const earliest = advanceSignalSchedule(previous, () => 0);
  const latest = advanceSignalSchedule(previous, () => 0.99999);
  assert.deepEqual(earliest.queue, ['title', 'morse']);
  assert.equal(earliest.target, 'game');
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
  assert.equal(isSignalSchedule({ activeMs: 0, nextAtMs: 5, target: null, queue: ['morse'] }), true);
  assert.equal(isSignalSchedule({ activeMs: 0, nextAtMs: 5, target: 'wrong', queue: ['morse'] }), false);
});

test('nästa terminala förlopp växlar garanterat, utan att förutsäga de andra störningarna', () => {
  assert.equal(nextSignalTarget(null), null);
  assert.equal(nextSignalTarget('game'), 'quarantine');
  assert.equal(nextSignalTarget('quarantine'), 'game');
  let otherPhasesSeen = false;
  for (let seed = 1; seed <= 150; seed++) {
    let value = seed;
    const random = () => ((value = (value * 1664525 + 1013904223) >>> 0) / 4294967296);
    const game = createSignalSchedule(random, nextSignalTarget('quarantine'));
    assert.ok(game.queue.indexOf('whisper') < game.queue.indexOf('morse'));
    assert.equal(game.queue.at(-1), 'morse');
    assert.equal(game.target, 'game');
    if (game.queue[0] !== 'whisper') otherPhasesSeen = true;
    const quarantine = createSignalSchedule(random, nextSignalTarget('game'));
    assert.equal(quarantine.target, 'quarantine');
    assert.equal(quarantine.queue.at(-1), 'morse');
    assert.ok(isSignalSchedule(game));
    assert.ok(isSignalSchedule(quarantine));
  }
  assert.ok(otherPhasesSeen);
});

test('alla vanliga effekter behålls och koordinat-404 fortsätter vara tillgänglig', () => {
  assert.equal(resistanceSignal.targetPath, '/31-66--351/');
  assert.equal(phaseDurationMs('title'), 950);
  assert.equal(phaseDurationMs('disobey'), 1500);
  assert.equal(phaseDurationMs('fullscreen'), 11450);
  assert.equal(phaseDurationMs('eyes'), 3300);
  assert.equal(phaseDurationMs('whisper'), 3000);
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

test('fönsterbaserad textkapning är ett självständigt slumpat steg före Morse', () => {
  let found = false;
  let skipped = false;
  for (let n = 0; n < 350; n++) {
    let seed = n + 1;
    const queue = createSignalOrder(() => {
      seed = (seed * 1664525 + 1013904223) >>> 0;
      return seed / 4294967296;
    });
    if (queue.includes('whisper')) found = true;
    else skipped = true;
    assert.equal(queue.filter(phase => phase === 'whisper').length <= 1, true);
    assert.equal(queue.at(-1), 'morse');
  }
  assert.ok(found, 'några besök får en personlig kapning');
  assert.ok(skipped, 'Morse kan komma först');
});
