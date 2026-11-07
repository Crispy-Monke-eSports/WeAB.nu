import assert from 'node:assert/strict';
import test from 'node:test';
import {
  resistanceMorse, morseTimeline, morseDurationMs,
  isMorseMarkActive
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

test('färginvertering är exakt aktiv på morseprickar och -streck, aldrig i pauserna', () => {
  const marks = morseTimeline('E E', 100);
  for (const time of [0, 50, 99, 800, 899]) {
    assert.equal(isMorseMarkActive(marks, time), true, 'mark on at ' + time);
  }
  for (const time of [-1, 100, 250, 799, 900, NaN]) {
    assert.equal(isMorseMarkActive(marks, time), false, 'mark off at ' + time);
  }
  const sos = morseTimeline('SOS', 100);
  assert.equal(isMorseMarkActive(sos, 800), true);
  assert.equal(isMorseMarkActive(sos, 1100), false);
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

test('Morse behåller sin avkodningsbara timing oberoende av vilken sida som visas', () => {
  const marks = morseTimeline();
  assert.ok(marks[0].atMs === 0);
  assert.equal(isMorseMarkActive(marks, 0), true);
  assert.equal(isMorseMarkActive(marks, morseDurationMs(marks)), false);
});
