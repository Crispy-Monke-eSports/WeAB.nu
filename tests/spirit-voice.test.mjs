import assert from 'node:assert/strict';
import { readFileSync, statSync } from 'node:fs';
import test from 'node:test';
import { spiritVoice, speechTiming, revealSpokenText } from '../src/data/spiritVoiceTiming.ts';
import { resistanceLockdown, createLockdownTimeline } from '../src/data/resistanceLockdown.ts';
import { cameraEncounter } from '../src/data/cameraEncounter.ts';
import { resistanceSignal } from '../src/data/resistanceSignal.ts';

const source = path => readFileSync(new URL('../' + path, import.meta.url), 'utf8');

test('alla fasta själsrepliker har riktiga, individuella Ogg-filer och mätta ordgränser', () => {
  const phrases = [...resistanceLockdown.spiritEarly, ...resistanceLockdown.spiritLate,
    ...resistanceLockdown.waypointWhispers, ...Object.values(cameraEncounter).filter(x => typeof x === 'string'),
    ...resistanceSignal.messages.map(x => x.text), 'DISOBEY', 'HÖR DU OSS?'];
  for (const text of phrases) {
    const entry = spiritVoice[text];
    assert.ok(entry, text);
    const path = new URL('../public/audio/spirit/' + entry.file, import.meta.url);
    assert.ok(statSync(path).size > 1000, text);
    assert.equal(readFileSync(path).toString('ascii', 0, 4), 'OggS');
    let last = 0;
    for (const [from, to, start, end] of entry.words) {
      assert.ok(start >= last && end > start && end <= entry.durationMs, text);
      assert.ok(text.slice(from, to).trim(), text);
      last = end;
    }
    assert.equal(entry.words.length, text.trim().split(/\s+/u).length, text);
  }
});

test('text följer ljudets ord, tystnad och återupptagen position utan att dra tillbaka tecken', () => {
  const text = 'HÖR DU OSS?';
  const timing = speechTiming(text, 1_150);
  assert.ok(timing);
  const { entry, durationMs } = timing;
  const scaled = ms => ms * durationMs / entry.durationMs;
  assert.equal(revealSpokenText(text, scaled(entry.words[1][2] - 1), durationMs, entry), 'HÖR');
  assert.equal(revealSpokenText(text, scaled((entry.words[1][2] + entry.words[1][3]) / 2), durationMs, entry).startsWith('HÖR D'), true);
  let previous = '';
  for (let age = 0; age <= durationMs + 50; age += 10) {
    const visible = revealSpokenText(text, age, durationMs, entry);
    assert.ok(visible.startsWith(previous));
    previous = visible;
  }
  assert.equal(revealSpokenText(text, durationMs, durationMs, entry), text);
  assert.equal(speechTiming('DIN RUTA ÄR 1234 PIXLAR BRED.', 3000), null);
});

test('ljudet har ingen rösträtt över femminuterklockan, systemmeddelanden eller kamera', () => {
  for (let seed = 0; seed < 10; seed++) {
    const timeline = createLockdownTimeline(1_800_000_300_000 + seed * 4001);
    for (let i = 0; i < timeline.length; i++) {
      const beat = timeline[i];
      if (beat.voice === 'system') continue;
      const available = (timeline[i + 1]?.atMs ?? 300_000) - beat.atMs - 170;
      assert.ok(speechTiming(beat.text, available).durationMs <= available);
    }
    assert.equal(timeline.find(x => resistanceLockdown.waypointWhispers.includes(x.text)).atMs >= 130_000, true);
  }
  assert.ok(resistanceLockdown.systemEarly.every(x => !spiritVoice[x]));
  assert.match(source('src/components/SpiritTransmission.astro'), /window\.addEventListener\('pagehide'/);
  assert.match(source('src/components/SpiritTransmission.astro'), /voiceAbort\?\.abort\(\)/);
  assert.match(source('src/layouts/BaseLayout.astro'), /updateSpiritVoice\(isSpirit \? latestIntrusion : ''/);
  assert.doesNotMatch(source('src/components/SpiritTransmission.astro'), /mute-button|volume-slider|speechSynthesis/);
});
