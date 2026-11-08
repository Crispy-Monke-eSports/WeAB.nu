import assert from 'node:assert/strict';
import { readFileSync, statSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import test from 'node:test';
import { morseTimeline, morseDurationMs, isMorseMarkActive } from '../src/data/resistanceMorse.ts';
import { resistanceLockdown } from '../src/data/resistanceLockdown.ts';

const source = path => readFileSync(new URL('../' + path, import.meta.url), 'utf8');
const loop = new URL('../public/audio/spirit/interference-loop.ogg', import.meta.url);

test('lokalt genererad, tolv sekunder lång Ogg-loop laddas vid störningar men inte vid vanligt besök', () => {
  const library = source('src/data/corruptionAudio.ts');
  const radio = source('src/components/SpiritTransmission.astro');
  const generator = source('scripts/generate-corruption-loop.py');
  assert.ok(statSync(loop).size > 20_000 && statSync(loop).size < 250_000);
  assert.equal(readFileSync(loop).toString('ascii', 0, 4), 'OggS');
  assert.match(generator, /SECONDS = 12/);
  assert.match(library, /loadCorruptionLoop/);
  assert.match(radio, /weab:spirit-burst'[\s\S]*sustainBed\(strength/);
  assert.match(radio, /weab:spirit-sustain/);
  assert.match(radio, /weab:spirit-typing/);
  assert.match(radio, /source\.loop = true/);
  assert.match(radio, /stopBed\(\)/);
  assert.match(radio, /window\.addEventListener\('pagehide'/);
});

test('bruset ligger kvar medan röd karantäntext syns och stannar när bara systemet syns', () => {
  const layout = source('src/layouts/BaseLayout.astro');
  const radio = source('src/components/SpiritTransmission.astro');
  assert.match(layout, /updateSpiritPresence\(isSpirit && document\.visibilityState === 'visible'\)/);
  assert.match(layout, /updateSpiritPresence\(false\)/);
  assert.match(radio, /presenceLive = Boolean/);
  assert.match(radio, /if \(typingLive \|\| presenceLive/);
  assert.match(radio, /if \(presenceLive\) sustainBed/);
  assert.match(radio, /else \{\s*bedDeadline = 0;\s*stopBed\(\)/);
  assert.ok(resistanceLockdown.systemEarly.every(x => !x.startsWith('weab:spirit-')));
  assert.doesNotMatch(layout, /weab:spirit-presence[^]*voice: 'system'/);
});

test('Morse behåller exakt samma avkodningsbara signal men får samma störningsloop', () => {
  const morse = source('src/components/ResistanceMorse.astro');
  const marks = morseTimeline();
  assert.equal(morseDurationMs(marks), 32_775); // Skydda hela signalens längd.
  assert.ok(isMorseMarkActive(marks, marks[0].atMs));
  assert.ok(!isMorseMarkActive(marks, marks[0].atMs + marks[0].durationMs));
  assert.match(morse, /void loadCorruptionLoop\(context\)/);
  assert.match(morse, /marks\.forEach\(\(mark, i\) =>/);
  assert.match(morse, /texture\.stop\(ends \+ \.08\)/);
  assert.match(morse, /isMorseMarkActive\(marks, elapsed\)/);
  assert.match(morse, /fallbackVisualOnly\(\)/);
  assert.match(morse, /pointer-events: none/);
});

test('längre visuellt bildbrott och en kort efterbild påverkar inte ARG-klockan eller rörelseläge', () => {
  const radio = source('src/components/SpiritTransmission.astro');
  const eyes = source('src/components/ResistanceEyes.astro');
  assert.match(radio, /weab-analog-residue/);
  assert.match(radio, /const residueParent = quarantine \? parent : document\.body/);
  assert.match(radio, /5_200 : 4_600/);
  assert.match(radio, /prefers-reduced-motion: reduce/);
  assert.match(radio, /pointer-events: none/);
  assert.match(eyes, /resistanceSignal\.eyesDurationMs \+ 1_700/);
  assert.match(eyes, /finishTimer = window\.setTimeout\(finish, resistanceSignal\.eyesDurationMs\)/);
});

test('loopens ljud har begränsade toppar och hörbart material hela inspelningen',
  { skip: spawnSync('ffmpeg', ['-version']).status !== 0 && 'FFmpeg saknas' }, () => {
    const decoded = spawnSync('ffmpeg', ['-v', 'error', '-i', loop.pathname,
      '-f', 's16le', '-ar', '22050', '-ac', '1', 'pipe:1'], { maxBuffer: 1024 * 1024 });
    assert.equal(decoded.status, 0);
    const samples = new Int16Array(decoded.stdout.buffer, decoded.stdout.byteOffset,
      Math.floor(decoded.stdout.length / 2));
    assert.ok(Math.abs(samples.length / 22050 - 12) < .1);
    for (let second = 1; second < 11; second += 2) {
      const slice = samples.slice(second * 22050, (second + 1) * 22050);
      const rms = Math.sqrt(slice.reduce((total, x) => total + x * x, 0) / slice.length);
      assert.ok(rms > 400 && rms < 12000, `sekund ${second}: ${rms}`);
      assert.ok(Math.max(...slice.slice(0, 10000).map(Math.abs)) < 27000);
    }
  });
