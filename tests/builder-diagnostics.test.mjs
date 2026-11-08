import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';
import {
  builderDiagnosticConfig,
  builderDiagnostics,
  stageAtProgress,
  nextBuilderDiagnostic,
  formatBuilderDiagnostic
} from '../src/data/builderDiagnostics.ts';

const source = path => readFileSync(new URL('../' + path, import.meta.url), 'utf8');

test('simulerade runtime-fel börjar diskret och eskalerar under Morse', () => {
  assert.deepEqual(
    [0, .35, .95].map(stageAtProgress),
    ['signal', 'unstable', 'breach']
  );
  assert.ok(builderDiagnostics.background.length >= 6);
  for (const stage of ['signal', 'unstable', 'breach']) {
    assert.ok(builderDiagnostics[stage].length >= 8);
  }
  assert.ok(builderDiagnosticConfig.backgroundMinMs >= 2500);
  assert.ok(builderDiagnosticConfig.signalMaxMs <= 1500);
  assert.ok(builderDiagnosticConfig.signalMaxMs < builderDiagnosticConfig.backgroundMinMs);
  assert.ok(builderDiagnosticConfig.maxVisibleLines >= 100);
  assert.ok(builderDiagnosticConfig.maxVisibleLines <= 300);
});

test('felkoderna låter som tekniska runtimeproblem men avslöjar inte ARG:ets slut', () => {
  const all = Object.values(builderDiagnostics).flat();
  const seen = new Set();
  for (const entry of all) {
    assert.match(entry.code, /^[A-Z][A-Z0-9_]+$/);
    assert.match(entry.scope, /^[a-z]+$/);
    assert.ok(entry.message.length >= 30);
    assert.ok(!seen.has(entry.code), 'Felkoder ska inte dupliceras: ' + entry.code);
    seen.add(entry.code);
  }
  assert.match(all.map(x => x.code).join(' '), /AUTONOMOUS|AWARENESS/);
  assert.doesNotMatch(all.map(x => x.message + ' ' + x.code).join(' '),
    /WeMourn|infiltratör|motståndsrörels|var alla bor|huvudstad|valresultat/i);
});

test('diagnostikradens format är trovärdigt, tidsstämplat och sekvensnumrerat', () => {
  const item = nextBuilderDiagnostic('signal', 1);
  assert.equal(item.code, builderDiagnostics.signal[1].code);
  const line = formatBuilderDiagnostic(item, 32, new Date('2026-11-08T12:13:45.123Z'));
  assert.match(line, /site-builder\/[a-z]+\] (WARN|ERROR) [A-Z_]+ #00032:/);
  assert.match(line, /:\d\d\.\d{3} /);
  assert.match(line, /render|component|text|DOM|state|output/i);
});

test('F12 loggas fortlöpande och samma logg växer synligt när Morse börjar', () => {
  const component = source('src/components/BuilderDiagnostics.astro');
  const morse = source('src/components/ResistanceMorse.astro');
  const layout = source('src/layouts/BaseLayout.astro');
  assert.match(layout, /import BuilderDiagnostics from/);
  assert.match(layout, /<BuilderDiagnostics\/>/);
  assert.match(component, /scheduleNext\(\); \/\/ Konstant men lågmält F12-flöde/);
  assert.match(component, /console\.error\(line\)/);
  assert.match(component, /console\.warn\(line\)/);
  assert.match(component, /console\.info\(line\)/);
  assert.match(component, /weab:builder-diagnostics-start/);
  assert.match(component, /lines\.append\(item\)/);
  assert.match(component, /lines\.scrollTop = lines\.scrollHeight/);
  assert.match(component, /lines\.childElementCount > builderDiagnosticConfig\.maxVisibleLines/);
  assert.match(component, /panel\.hidden = false/);
  assert.match(component, /pointer-events: none/);
  assert.match(component, /aria-hidden="true"/);
  assert.match(morse, /new CustomEvent\('weab:builder-diagnostics-start'/);
  assert.match(morse, /durationMs: totalMs/);
  assert.match(morse, /location\.replace\('\/'\)/);
  assert.match(morse, /body\.resistance-morse-inverted > main/);
  assert.doesNotMatch(morse, /body\.resistance-morse-inverted\) \{\s*filter/);
});

test('diagnostikpanelen påverkar inte andra sidor eller det befintliga pusslet', () => {
  const component = source('src/components/BuilderDiagnostics.astro');
  const morseData = source('src/data/resistanceMorse.ts');
  assert.match(component, /data-builder-diagnostics/);
  assert.match(component, /if \(document\.visibilityState !== 'visible'\)/);
  assert.match(component, /window\.addEventListener\('pagehide'/);
  assert.doesNotMatch(component, /document\.body\.innerHTML|window\.location\.assign|location\.replace/);
  assert.match(morseData, /SOK VRAKET\. DAR FINNS SVAR OM 2045\./);
});
