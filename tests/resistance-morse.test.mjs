import assert from 'node:assert/strict';
import test from 'node:test';
import {
  resistanceMorse, morseTimeline, morseDurationMs,
  morseStartDelayMs, isValidMorseTrigger
} from '../src/data/resistanceMorse.ts';

test('Morse kodar SOS med korrekta signal- och bokstavspauser', () => {
  const marks = morseTimeline('SOS', 100);
  assert.deepEqual(marks.map(({atMs, durationMs, symbol})=>[atMs,durationMs,symbol]), [
    [0,100,'.'],[200,100,'.'],[400,100,'.'],
    [800,300,'-'],[1200,300,'-'],[1600,300,'-'],
    [2200,100,'.'],[2400,100,'.'],[2600,100,'.']
  ]);
  assert.equal(morseDurationMs(marks),2700);
});

test('ord avdelas med sju enheter och decimalpunkt är morsekodad', () => {
  assert.deepEqual(morseTimeline('E E', 100), [
    { atMs: 0, durationMs: 100, symbol: '.' },
    { atMs: 800, durationMs: 100, symbol: '.' }
  ]);
  assert.equal(morseTimeline('.', 100).length, 6);
});

test('meddelandet leder till vraket och innehåller inga påhittade exakta koordinater', () => {
  assert.equal(resistanceMorse.message, 'SOK VRAKET. DAR FINNS SVAR OM 2045.');
  const marks = morseTimeline();
  assert.ok(marks.length > 70);
  assert.ok(morseDurationMs(marks) > 25_000);
  assert.ok(morseDurationMs(marks) < 60_000);
  assert.throws(() => morseTimeline('Hej!', 100), /Okänt Morse-tecken/);
  assert.throws(() => morseTimeline('A', 0), /Ogiltig Morse-enhet/);
});

test('Morse startar tidigast 22 sekunder EFTER att 404 öppnats', () => {
  assert.equal(morseStartDelayMs(() => 0), 22_000);
  assert.equal(morseStartDelayMs(() => 0.9999), 33_998);
  assert.ok(morseStartDelayMs(() => 0) >= 20_000);
});

test('404-signalen får bara köras en gång med en färsk sessionsmarkering', () => {
  const now = 1_000_000;
  assert.equal(isValidMorseTrigger(String(now), now), true);
  assert.equal(isValidMorseTrigger(String(now - resistanceMorse.triggerLifetimeMs + 1), now), true);
  assert.equal(isValidMorseTrigger(String(now - resistanceMorse.triggerLifetimeMs), now), false);
  assert.equal(isValidMorseTrigger(null, now), false);
  assert.equal(isValidMorseTrigger('not-a-timestamp', now), false);
  assert.equal(isValidMorseTrigger(String(now + 1), now), false);
});
