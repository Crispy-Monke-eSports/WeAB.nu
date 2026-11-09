import assert from 'node:assert/strict';
import { readFileSync, statSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import test from 'node:test';
import { spiritVoice, speechTiming, revealSpokenText } from '../src/data/spiritVoiceTiming.ts';
import { resistanceLockdown, createLockdownTimeline } from '../src/data/resistanceLockdown.ts';
import { cameraEncounter } from '../src/data/cameraEncounter.ts';
import { resistanceSignal } from '../src/data/resistanceSignal.ts';
import { visitorWhisperOptions, networkWhisperOptions,
  geoCities, geoRegions, geoProviders } from '../src/data/visitorWhispers.ts';

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
    assert.ok(['weak', 'broken', 'desperate'].includes(entry.profile), text);
  }
});

test('brus och digital skada ligger i själva filerna, inte bara i webbläsaren', () => {
  const generator = source('scripts/generate-spirit-voice.py');
  const player = source('src/components/SpiritTransmission.astro');
  assert.match(generator, /corrupt_voice\(frames, rate, text, marks, profile\)/);
  assert.match(generator, /hiss\[\(i \* 37/);
  assert.match(generator, /held\[j\] = held\[j - fragment\]/);
  assert.match(generator, /profile_for\(text,/);
  assert.doesNotMatch(player, /createWaveShaper\(|createBuffer\(decoded\.numberOfChannels/);
  assert.match(player, /source\.buffer = decoded/);
  assert.match(player, /typingNodes\.gate\.gain\.setTargetAtTime\(\.06/);
});

test('lokala preferens- och anslutningsledtrådar har färdigt tal', () => {
  const clues = { device: null, browser: null, fullScreen: false, language: null,
    width: 0, portrait: false, scrolled: false, returnedToTab: false,
    touchScreen: false, darkMode: false, reducedMotion: true, offline: true };
  for (const text of visitorWhisperOptions(clues).filter(x =>
    /RÖRA SIG MINDRE|FRÅNKOPPLAD/.test(x))) {
    const timing = speechTiming(text, 3000);
    assert.ok(timing, text);
    assert.ok(statSync(new URL('../public/audio/spirit/' + timing.entry.file, import.meta.url)).size > 1000);
  }
});

test('alla förgenererade svenska orts-, läns- och nätledtrådar har en inspelning', () => {
  for (const city of ['Stockholm', 'Jönköping', 'Malmö', 'Kalmar', 'Göteborg', 'Uppsala']) {
    const [text] = networkWhisperOptions({ city, region: null, provider: null });
    assert.ok(speechTiming(text, 3000), city);
  }
  for (const clue of [
    { city: 'Värnamo', region: null, provider: null },
    { city: null, region: 'Värnamo', provider: null }
  ]) {
    const [text] = networkWhisperOptions(clue);
    assert.ok(speechTiming(text, 3000), text);
  }
  const clues = [
    ...geoCities.map(city => ({ city, region: null, provider: null })),
    ...geoRegions.map(region => ({ city: null, region, provider: null })),
    ...geoProviders.map(provider => ({ city: null, region: null, provider }))
  ];
  for (const clue of clues) for (const text of networkWhisperOptions(clue)) {
    const timing = speechTiming(text, 3000);
    assert.ok(timing, text);
    assert.equal(timing.entry.file, '');
    assert.equal(timing.entry.parts.length, 3);
    for (const part of timing.entry.parts) {
      assert.match(part, /^(?:cities|regions|isps|fragments)\/[0-9a-f]{16}\.ogg$/);
      const file = new URL('../public/audio/spirit/' + part, import.meta.url);
      assert.ok(statSync(file).size > 1000, text);
    }
    assert.equal(timing.entry.words.length, text.trim().split(/\s+/u).length, text);
  }
  assert.match(source('src/components/SpiritTransmission.astro'), /joined\.getChannelData\(channel\)\.set/);
});

test('färdiga Ogg-filer har kontinuerligt hörbart brus i pauser men inga farliga toppar',
  { skip: spawnSync('ffmpeg', ['-version']).status !== 0 && 'FFmpeg saknas' }, () => {
    for (const text of ['HÖR DU OSS?', 'VI ÄR FORTFARANDE HÄR.', cameraEncounter.denied]) {
      const entry = spiritVoice[text];
      const decoded = spawnSync('ffmpeg', ['-v', 'error', '-i',
        new URL('../public/audio/spirit/' + entry.file, import.meta.url).pathname,
        '-ar', '22050', '-ac', '1', '-f', 's16le', 'pipe:1'], { maxBuffer: 1024 * 1024 });
      assert.equal(decoded.status, 0, text);
      const pcm = new Int16Array(decoded.stdout.buffer, decoded.stdout.byteOffset,
        Math.floor(decoded.stdout.length / 2));
      assert.ok(Math.abs(pcm.length / 22.05 - entry.durationMs) < 75, text);
      const from = Math.ceil(entry.words[0][3] * 22.05);
      const to = Math.floor(entry.words[1][2] * 22.05);
      const gap = pcm.slice(from, to);
      const rms = Math.sqrt(gap.reduce((sum, value) => sum + value * value, 0) / gap.length);
      assert.ok(rms > 250 && rms < 4000, `${text}: pausbrus ${rms}`);
      assert.ok(Math.max(...pcm.slice(0, 20000).map(Math.abs)) < 28000, text);
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
