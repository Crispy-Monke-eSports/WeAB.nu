import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';
import { resistanceLockdown } from '../src/data/resistanceLockdown.ts';
import { resistanceSignal } from '../src/data/resistanceSignal.ts';

function source(path) {
  return readFileSync(new URL('../' + path, import.meta.url), 'utf8');
}

test('alla korta titel- och rubrikförändringar ligger kvar tills nytt dokument laddas', () => {
  const code = source('src/components/ResistanceInterference.astro');
  assert.match(code, /node\.data = 'DU SER DET OCKSÅ\.'/);
  assert.match(code, /document\.title = 'HÖR DU OSS\?'/);
  assert.doesNotMatch(code, /document\.title = originalTitle/);
  assert.doesNotMatch(code, /node\.data = oldText/);
  assert.match(code, /document\.title = 'DISOBEY'/);
});

test('själen får ett enda statiskt vidöppet öga i ett svart tomrum med kraftiga störningar', () => {
  const signal = source('src/components/ResistanceInterference.astro');
  const eyes = source('src/components/ResistanceEyes.astro');
  const layout = source('src/layouts/BaseLayout.astro');
  assert.ok(resistanceSignal.eyesDurationMs >= 2_000);
  assert.ok(resistanceSignal.eyesDurationMs < 5_000);
  assert.match(signal, /phase === 'eyes'/);
  assert.match(signal, /weab:resistance-eyes-start/);
  assert.match(layout, /import ResistanceEyes from/);
  assert.match(layout, /<ResistanceEyes\/>/);
  assert.match(eyes, /data-resistance-eye/);
  assert.match(eyes, /resistance-eye__iris/);
  assert.match(eyes, /resistance-eye__void/);
  assert.match(eyes, /transform: translate\(-50%, -50%\) scaleY\(1\)/);
  assert.doesNotMatch(eyes, /resistance-eye-open|function opening\(/);
  assert.match(eyes, /--eye-instability/);
  assert.match(eyes, /top: 50%/);
  assert.match(eyes, /left: 50%/);
  assert.doesNotMatch(eyes, /data-resistance-eye-pair|resistance-eyes-inline/);
  assert.match(eyes, /veil\.hidden = false/);
  assert.match(eyes, /function growVoid\(\)/);
  assert.match(eyes, /steps = 4 \+ Math\.floor\(Math\.random\(\) \* 4\)/);
  assert.match(eyes, /resistance-eye-noise--eye-visible/);
  assert.doesNotMatch(eyes, /@keyframes resistance-void-arrive/);
  assert.match(eyes, /Math\.random\(\) \* \(compact \? 160 : 155\)/);
  assert.match(eyes, /clearDisplaced\(\)/);
  assert.match(eyes, /classList\.add\('resistance-displaced'\)/);
  assert.match(eyes, /pointer-events: none/);
  assert.match(eyes, /prefers-reduced-motion: reduce/);
  assert.match(eyes, /pagehide', finish/);
});

test('det öppna ögat har tre analoga radio- och bildbrott, eller enbart bild', () => {
  const eyes = source('src/components/ResistanceEyes.astro');
  const radio = source('src/components/SpiritTransmission.astro');
  assert.match(eyes, /for \(const phase of \[\.15, \.43, \.75\]\)/);
  assert.match(eyes, /weab:spirit-burst/);
  assert.match(eyes, /document\.body\.classList\.add\('resistance-watched'\)/);
  assert.match(eyes, /resistance-eye-noise/);
  assert.doesNotMatch(eyes, /new AudioContext\(/, 'ögonen använder den delade audiomotorn');
  assert.match(radio, /typeof AudioContext === 'undefined'/);
  assert.match(radio, /audio\.state !== 'running'/);
  assert.match(radio, /analogTear\(strength\);\s*playRadio\(strength\);/);
  assert.match(radio, /pointer-events: none/);
  assert.match(radio, /prefers-reduced-motion: reduce/);
  assert.match(radio, /weab-radio-scan/);
  assert.match(radio, /weab-radio-tear/);
  assert.match(radio, /const reuse = inPanic && panicTear\?\.parentElement === parent/);
  assert.match(radio, /panicTear = strip/);
  assert.match(radio, /strip\.style\.animation = 'none'/);
  assert.match(radio, /window\.clearTimeout\(panicTearTimer\)/);
});

test('den förstörda Morse-sidan kan fortfarande scrollas och förblir klickbar', () => {
  const morse = source('src/components/ResistanceMorse.astro');
  assert.match(morse, /overflow-y: auto !important/);
  assert.match(morse, /pointer-events: none/);
  assert.doesNotMatch(morse, /body\.resistance-morse-active\)\s*\{\s*overflow: hidden/);
});

test('Morse avslutas med direkt navigering till brottningsmatchen, inte en blank flik', () => {
  const morse = source('src/components/ResistanceMorse.astro');
  assert.match(morse, /function finishSignal\(\)/);
  assert.match(morse, /location\.replace\('\/'\)/);
  assert.match(morse, /createLockdownCookie/);
  assert.match(morse, /ensureQuarantineCookie\(\)/);
  assert.match(morse, /finishSignal\(\)/);
  assert.doesNotMatch(morse, /location\.replace\('about:blank'\)/);
  assert.doesNotMatch(morse, /window\.close\(/);
  assert.doesNotMatch(morse, /document\.body\.replaceChildren\(/);
});

test('nya meddelanden förblir kryptiska; själen avslöjar inte slutfacit', () => {
  const messages = [
    ...resistanceLockdown.spiritEarly, ...resistanceLockdown.spiritLate,
    ...resistanceSignal.messages.map(m => m.text)
  ].join(' ');
  assert.doesNotMatch(messages, /WeMourn|motståndsrörelsen|huvudstaden|infiltratör|de vet var ni är/i);
  assert.ok(resistanceLockdown.spiritEarly.includes('den öppningen är fel'));
  assert.ok(resistanceLockdown.spiritLate.includes('SLUTA ÖPPNA DEN'));
  assert.ok(resistanceLockdown.spiritLate.includes('JAG FÖRSÖKER NÅ ER'));
  assert.ok(!resistanceLockdown.systemLate.some(x => x.includes('avslutad personal')));
});

test('själens varje synliga sidintrång får radio + analog bildstörning', () => {
  const signal = source('src/components/ResistanceInterference.astro');
  const layout = source('src/layouts/BaseLayout.astro');
  const radio = source('src/components/SpiritTransmission.astro');
  assert.match(layout, /import SpiritTransmission from/);
  assert.match(layout, /<SpiritTransmission\/>/);
  assert.match(signal, /document\.title = 'HÖR DU OSS\?';\s*ghostTransmission\('soft'\)/);
  assert.match(signal, /corruptPage\(\);\s*ghostTransmission\('harsh'\)/);
  assert.match(signal, /document\.title = item\.text;\s*ghostTransmission\('medium'\)/);
  assert.match(signal, /ghostTransmission\('medium'\);\s*window\.setTimeout\(\(\) => window\.location\.assign/);
  assert.match(layout, /if \(isSpirit && document\.visibilityState === 'visible'\)/);
  assert.match(layout, /weab:spirit-burst/);
  assert.match(radio, /window\.addEventListener\('weab:spirit-burst'/);
  assert.match(radio, /radio\.type = 'bandpass'/);
  assert.match(radio, /ghost\.frequency\.linearRampToValueAtTime/);
  assert.match(radio, /master\.gain\.value = noiseLevel\(\.19\)/);
});

test('gemensam visuell effekt fungerar även utan AudioContext och i karantänen', () => {
  const radio = source('src/components/SpiritTransmission.astro');
  assert.match(radio, /analogTear\(strength\);\s*playRadio\(strength\)/);
  assert.match(radio, /document\.getElementById\('weab-quarantine'\)/);
  assert.match(radio, /data-resistance-interference/);
  assert.match(radio, /data-resistance-eye-noise/);
  assert.match(radio, /document\.body/);
  assert.match(radio, /window\.addEventListener\('pointerdown', primeRadio/);
  assert.match(radio, /window\.addEventListener\('keydown', primeRadio/);
  assert.doesNotMatch(radio, /\b(?:speechSynthesis|playRecording|MediaRecorder)\b/);
});
