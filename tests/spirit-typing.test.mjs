import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';
import {
  spiritTyping,
  spiritTypingDurationMs,
  revealSpiritText
} from '../src/data/spiritTyping.ts';

const source = path => readFileSync(new URL('../' + path, import.meta.url), 'utf8');

test('själens text kommer fram stegvis och fortsätter vid rätt tecken efter sidbyte', () => {
  const text = 'jag försöker nå er';
  const duration = spiritTypingDurationMs(text, 8_000);
  assert.ok(duration > 700 && duration <= 5_400);
  assert.equal(revealSpiritText(text, 0, duration), '');
  const partial = revealSpiritText(text, duration * .51, duration);
  assert.ok(partial.length > 0 && partial.length < text.length);
  assert.equal(partial, revealSpiritText(text, duration * .51, duration));
  assert.equal(revealSpiritText(text, duration + 5, duration), text);
  assert.equal(revealSpiritText(text, duration * 5, duration), text);
});

test('karantänrepliken hinns med innan nästa replik även sent i förloppet', () => {
  const text = 'JAG FÖRSÖKER NÅ ER INNAN DET ÄR FÖR SENT';
  assert.ok(spiritTypingDurationMs(text, 2_100) <=
    2_100 - spiritTyping.nextBeatMarginMs);
  assert.ok(spiritTypingDurationMs(text, 7_000) >
    spiritTypingDurationMs(text, 2_100));
  assert.equal(spiritTypingDurationMs('', 1_000) >= 0, true);
});

test('huvudlayouten skriver texten gradvis med kontinuerliga ljud- och bildhändelser', () => {
  const layout = source('src/layouts/BaseLayout.astro');
  const radio = source('src/components/SpiritTransmission.astro');
  assert.match(layout, /spiritTypingFrameMs: spiritTyping\.frameMs/);
  assert.match(layout, /const visibleLetters = typing/);
  assert.match(layout, /visibleLetters \+ '▌'/);
  assert.match(layout, /showSystem\(latestSystem, displayed\)/);
  assert.match(layout, /updateTypingSound\(typing && document\.visibilityState === 'visible'/);
  assert.match(layout, /return typing \|\| reacting/);
  assert.match(layout, /root\.classList\.toggle\('weab-spirit-typing'/);
  assert.match(layout, /if \(document\.readyState === 'loading'\) return/);
  assert.match(radio, /weab:spirit-typing/);
  assert.match(radio, /source\.loop = true/);
  assert.match(radio, /typingScreenTear\(\)/);
  assert.match(radio, /stopTypingAudio\(\)/);
  assert.match(radio, /DynamicsCompressor/);
  assert.match(radio, /master\.gain\.value = \.19/);
  assert.match(radio, /gate\.gain\.setTargetAtTime\(typingStrength === 'harsh'/);
  assert.match(radio, /window\.clearTimeout\(typingVisualTimer\)/);
});

test('WeAB:s egna systemmeddelanden startar inte radiobrus eller skrivning', () => {
  const layout = source('src/layouts/BaseLayout.astro');
  assert.match(layout, /const isSpirit = reacting \|\|/);
  assert.match(layout, /const duration = isSpirit/);
  assert.match(layout, /if \(isSpirit && document\.visibilityState === 'visible'\)/);
  assert.match(layout, /updateTypingSound\(false, '', 'soft'\)/);
});

test('byggdiagnostiken är fri text på vänster sida som rullar utan ram eller panelrubrik', () => {
  const component = source('src/components/BuilderDiagnostics.astro');
  assert.match(component, /left: clamp\(14px, 3\.5vw, 65px\)/);
  assert.match(component, /top: clamp\(92px, 15vh, 180px\)/);
  assert.match(component, /background: transparent/);
  assert.match(component, /border: 0/);
  assert.match(component, /box-shadow: none/);
  assert.doesNotMatch(component, /builder-diagnostics__heading/);
  assert.doesNotMatch(component, /builder-diagnostics__status/);
  assert.match(component, /lines\.scrollTop = lines\.scrollHeight/);
  assert.match(component, /builderDiagnosticConfig\.maxVisibleLines/);
  assert.match(component, /pointer-events: none/);
});
