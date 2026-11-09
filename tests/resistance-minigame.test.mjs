import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';
import {
  resistanceLockdown,
  hasMinigameInvitationCookie,
  createMinigameInvitationCookie,
  createQuietCookie, createLockdownCookie, readQuietExpiry, readLockdownExpiry
} from '../src/data/resistanceLockdown.ts';

const source = path => readFileSync(new URL('../' + path, import.meta.url), 'utf8');

test('en järndörr följs av rak cellgång och en sidobro till det vita rummet', () => {
  const game = source('src/components/ResistanceMinigame.astro');
  assert.match(game, /RÄDDA DOM, RÄDDA DOM/);
  assert.doesNotMatch(game, /SAVE THEM, SAVE THEM/);
  assert.match(game, /let y = 31/);
  assert.match(game, /nextY === 2 && x === 10/);
  assert.match(game, /if \(!doorOpen\) \{\s*doorOpen = true/);
  assert.match(game, /stage = 'rooms';\s*x = 10;\s*y = 12/);
  assert.match(game, /\[\[3, 4\], \[5, 5\], \[3, 8\], \[6, 9\], \[14, 4\], \[16, 5\], \[15, 9\]\]/);
  assert.match(game, /for \(const row of \[4, 9\]\)/);
  assert.match(game, /ironDoor\(7 \* 16, row \* 16, 'side'\)/);
  assert.match(game, /ironDoor\(13 \* 16, row \* 16, 'side'\)/);
  assert.match(game, /redLight\(7 \* 16/);
  assert.match(game, /stone\(px, py, col, worldY\)/);
  assert.match(game, /py === 2 && px >= 13 && px <= 16/);
  assert.match(game, /!\(px >= 14 && py === 3\)/);
  assert.match(game, /col >= 13 && col <= 16 && row === 3/);
  assert.match(game, /ironDoor\(10 \* 16, doorY, 'end'\)/);
  assert.match(game, /x >= 17 && x <= 19 && y >= 2 && y <= 8/);
  assert.match(game, /\.save-game__frame \{ position: absolute; inset: 0; width: 100%; height: 100%; \}/);
  assert.match(game, /save-game__sr-only/);
  assert.match(game, /spiritVoice\['RÄDDA DOM, RÄDDA DOM'\]/);
  assert.match(game, /document\.addEventListener\('visibilitychange'/);
  assert.match(game, /@media \(prefers-reduced-motion: reduce\)/);
});

test('slutsekvensen sätter tyst cookieläge och återvänder hem', () => {
  const game = source('src/components/ResistanceMinigame.astro');
  const layout = source('src/layouts/BaseLayout.astro');
  const controller = source('src/components/ResistanceInterference.astro');
  assert.match(game, /createQuietCookie\(now, location\.protocol === 'https:'\)/);
  assert.match(game, /location\.assign\('\/'\)/);
  assert.match(game, /sessionStorage\.setItem\('weab:resistance:result:v1', '1'\)/);
  assert.match(layout, /location\.pathname === '\/' && root\.classList\.contains\('weab-quiet'\)/);
  assert.match(layout, /sessionStorage\.removeItem\('weab:resistance:result:v1'\)/);
  assert.match(layout, /link\.href = '\/RESULTAT\.txt'/);
  assert.match(layout, /link\.download = 'RESULTAT\.txt'/);
  assert.doesNotMatch(layout, /new Blob\(\['Utveckling behövs'/);
  assert.doesNotMatch(layout, /URL\.createObjectURL/);
  assert.match(layout, /root\.classList\.add\('weab-quiet'\)/);
  assert.match(layout, /root\.classList\.remove\('weab-quiet'\);\s*location\.reload/);
  assert.match(controller, /if \(chooseMinigame\(\)\)/);
  assert.match(controller, /phase === 'morse'/);
  assert.match(source('src/data/spiritVoice.json'), /"RÄDDA DOM, RÄDDA DOM"/);
  assert.match(source('src/data/spiritVoice.json'), /"DU MISSLYCKADES, DU MISSLYCKADES"/);
  assert.match(game, /document\.querySelectorAll<HTMLElement>\(selector\)/);
  assert.match(game, /const maxFragments = compactGraphics \? 16 : 28/);
  assert.match(game, /fragments\.children\.length >= maxFragments/);
  assert.match(game, /slice\.replaceChildren\(copy\)/);
  assert.doesNotMatch(game, /cloneNode\(true\)/);
  assert.match(game, /const baseDelay = compactGraphics \? 90 : 55/);
  assert.match(game, /fragmentTimer = window\.setTimeout\(distort,/);
  assert.match(game, /const minimum = compactGraphics \? 210 : 145/);
  assert.match(game, /panicTimer = window\.setTimeout\(panicBurst,/);
  assert.match(game, /prepareWebsitePieces\(\)/);
  assert.match(game, /image\.loading = 'lazy'/);
  const fetchSection = game.split('async function prepareWebsitePieces(): Promise<void> {')[1]
    .split('function trackSignal(): void {')[0];
  assert.match(fetchSection, /compactGraphics\s*\? \['\/', '\/koncernen\/', '\/verksamheter\/', '\/arena\/'\]/);
  assert.match(fetchSection, /'\/bolagsstyrning\/', '\/kontakt\/'/);
  assert.doesNotMatch(fetchSection, /'\/(?:nyheter|press)\/'/);
  assert.match(game, /const editorialPage = \/\^\\\/\(\?:nyheter\|press\)\(\?:\\\/\|\$\)\//);
  assert.match(game, /editorialPage\s*\? \['body > header', 'body > footer'\]/);
  assert.match(game, /if \(url\.origin !== location\.origin\) return null/);
  assert.match(game, /panicDurationMs = websiteStartMs \+ websiteMs \+ 650/);
  assert.match(game, /text: minigameFailureWebsiteLine, ageMs: 0, durationMs: websiteMs/);
  assert.match(game, /weab:spirit-panic-progress/);
  assert.match(source('src/components/SpiritTransmission.astro'), /return noiseLevel\(panicProgress > 0 \? \.10 \+ panicProgress \* \.22 : base\)/);
  assert.match(source('src/components/SpiritTransmission.astro'), /\.72 \+ panicProgress \* \.10/);
  assert.match(game, /Otillåten information delad, styrelsen meddelad\. Återställer/);
  assert.match(game, /root\.classList\.add\('weab-minigame-confirmed', 'weab-death-confirmed'\)/);
  assert.match(game, /\}, 3_200\)/);
  assert.match(game, /\/arena\//);
  assert.match(game, /save-game__fragment--suppressed/);
  assert.match(game, /elapsedSecond !== lastSecond/);
  assert.match(layout, /html\.weab-minigame-confirmed #weab-quarantine/);
  assert.match(source('src/data/spiritVoice.json'), /WeKill sköter produktionen, WeSort fördelar resurserna och WeBox tar hand om lagret/);
});

test('själens röst och brus fortsätter, med en andra låg röst nära bron', () => {
  const game = source('src/components/ResistanceMinigame.astro');
  const radio = source('src/components/SpiritTransmission.astro');
  assert.match(game, /function startMainVoice\(\)/);
  assert.match(game, /mainVoice = new Audio\('\/audio\/spirit\/' \+ entry\.file\)/);
  assert.match(game, /mainVoice\.loop = true/);
  assert.match(game, /function unlockAudio\(\)/);
  assert.match(game, /audioUnlocked = true/);
  assert.match(game, /weab:spirit-sustain/);
  assert.match(game, /spiritSignal\(true\)/);
  assert.match(game, /detail: \{ active, strength: 'harsh' \}/);
  assert.match(game, /backgroundVoice\.loop = true/);
  assert.match(game, /backgroundVoice\.volume = \.16/);
  assert.match(game, /y <= 6\) startBackgroundVoice\(\)/);
  assert.match(game, /stopBackgroundVoice\(\)/);
  assert.match(radio, /if \(presenceLive\) sustainBed\(typingStrength, 0\)/);
  assert.match(game, /for \(const gap of \[0, 2, 4\]\) pixel\(0, line \+ gap, 336, 1, '#010104'\)/);
  assert.match(game, /trackingTimer = window\.setTimeout\(trackSignal,/);
  assert.match(game, /const frame = ctx\.getImageData\(0, 0, 336, 240\)/);
  assert.match(game, /for \(const row of \[band \+ 1, band \+ 3\]\)/);
  assert.match(game, /ctx\.putImageData\(frame, 0, 0\)/);
  assert.match(game, /analogTimer = window\.setTimeout\(renderSignal,/);
  assert.match(game, /function proximityToWhiteRoom\(\): number/);
  assert.match(game, /\.35 \+ Math\.max\(0, \(12 - y\) \/ 10\) \* \.45/);
  assert.match(game, /const grain = \(Math\.random\(\) - \.5\) \* \(18 \+ proximity \* 15\)/);
  assert.match(game, /modal\.style\.setProperty\('--text-signal', String\(signal\)\)/);
  assert.match(game, /const rasterRow = canvas\.getBoundingClientRect\(\)\.height \/ canvas\.height/);
  assert.match(game, /--text-raster-offset/);
  assert.match(game, /mask-size: 100% calc\(var\(--raster-row\) \* 5\)/);
  assert.match(game, /--text-drift/);
  assert.match(game, /window\.clearTimeout\(analogTimer\)/);
  assert.match(game, /save-game__glyph/);
  assert.match(game, /button\.style\.setProperty\('--text-raster-offset', offsetFor\(button\)\)/);
  assert.match(game, /\.save-game__glyph \{[\s\S]*translateX\(var\(--text-drift, 0px\)\)/);
});

test('korridoren hålls som gång av svarta vägglinjer med schackgolv ända ut', () => {
  const game = source('src/components/ResistanceMinigame.astro');
  assert.match(game, /if \(nextX >= 5 && nextX <= 15 && nextY >= 3 && nextY <= 32\)/);
  assert.match(game, /stage === 'corridor' && \(col === 4 \|\| col === 16\)/);
  assert.match(game, /pixel\(px, py, 16, 16, '#050607'\)/);
  assert.match(game, /pixel\(0, doorY, 336, 16, '#163a3b'\)/);
  assert.match(game, /for \(let col = 0; col <= 20; col\+\+\)/);
  assert.match(game, /if \(col !== 10\) stone\(col \* 16, doorY, col, 2, true\)/);
  assert.match(game, /pixel\(4 \* 16 \+ 6, py \+ 4, 3, 8, '#595540'\)/);
  assert.match(game, /pixel\(16 \* 16 \+ 6, py \+ 4, 3, 8, '#595540'\)/);
});

test('återställningsadressen börjar med RÄDDA DOM och skriver över varje tidigare ARG-läge', () => {
  const game = source('src/components/ResistanceMinigame.astro');
  const controller = source('src/components/ResistanceInterference.astro');
  const layout = source('src/layouts/BaseLayout.astro');
  assert.doesNotMatch(game, /const launch = \(\) => window\.dispatchEvent\(new Event\('weab:save-game-start'\)\)/);
  assert.match(controller, /!morsePreview && !minigamePreview/);
  assert.match(controller, /const minigamePreview = params\.get\('previewMinigame'\) === '1'/);
  assert.match(controller, /params\.get\('previewMingame'\) === '1'/);
  assert.match(layout, /params\.get\('previewMingame'\) === '1' && !previewResetDone/);
  assert.match(layout, /previewResetDone = true;\s*document\.cookie = `\$\{lockCookieName\}=invite/);
  assert.match(layout, /localStorage\.removeItem\(lockNoticeKey\)/);
  assert.match(layout, /sessionStorage\.removeItem\(signalSessionKey\)/);
  assert.match(layout, /params\.get\('█̶̸'\) === '1'/);
  assert.match(layout, /root\.classList\.toggle\('weab-save-call', !playing\)/);
});

test('RESULTAT.txt är förgenererad med Base64 i åttateckensbitar mellan verkliga WeLiveLaughLove-meningar', () => {
  const lines = source('public/RESULTAT.txt').split('\n').filter(Boolean);
  const companyPage = source('src/data/companies.ts') + source('src/data/companyEditorial.ts') +
    source('src/pages/verksamheter/[slug].astro');
  assert.equal(lines.length, 13);
  const chunks = [];
  for (const [index, line] of lines.entries()) {
    const parts = /^ ([A-Za-z0-9+/=]{8}) (.*)$/.exec(line);
    assert.ok(parts, `Rad ${index + 1} ska börja med en separat åttateckensbit`);
    chunks.push(parts[1]);
    if (index < lines.length - 1) {
      assert.ok(parts[2].endsWith('.'), 'Texten efter varje bit ska vara en fullständig mening.');
      assert.ok(companyPage.includes(parts[2]), 'Mellantexten ska komma ordagrant från WeLiveLaughLoves sida.');
    } else assert.equal(parts[2], '');
  }
  assert.equal(Buffer.from(chunks.join(''), 'base64').toString('utf8'),
    '12 feburari 2048 02:12:\n\nresultat blev inte önskvärt biologiskt resultat.\n');
  assert.doesNotMatch(source('src/layouts/BaseLayout.astro'), /btoa\(|Buffer\.from\(/);
});

test('RÄDDA DOM förfas sparas i cookie och öppnar minispelet först vid klick', () => {
  const layout = source('src/layouts/BaseLayout.astro');
  const controller = source('src/components/ResistanceInterference.astro');
  const game = source('src/components/ResistanceMinigame.astro');
  assert.equal(resistanceLockdown.cookieName, 'weab_centralserver_lock_until');
  assert.equal(hasMinigameInvitationCookie('foo=1; weab_centralserver_lock_until=invite'), true);
  assert.equal(hasMinigameInvitationCookie('weab_centralserver_lock_until=invited'), false);
  assert.equal(hasMinigameInvitationCookie('foo=1'), false);
  assert.match(createMinigameInvitationCookie(true), /Path=\/; Max-Age=31536000; SameSite=Lax; Secure/);
  assert.match(createMinigameInvitationCookie(true), /^weab_centralserver_lock_until=invite;/);
  assert.match(controller, /document\.cookie = createMinigameInvitationCookie/);
  assert.match(controller, /window\.clearInterval\(intervalId\)/);
  assert.match(controller, /weab:save-game-invite/);
  assert.match(controller, /!document\.documentElement\.classList\.contains\('weab-save-call'\)/);
  assert.match(layout, /cookiePrefix \+ 'invite'/);
  assert.match(layout, /root\.classList\.toggle\('weab-save-call', !playing\)/);
  assert.match(layout, /html\.weab-save-call:not\(\.weab-save-call-ready\)/);
  assert.match(game, /window\.addEventListener\('weab:save-game-invite', beginInvitation\)/);
  assert.match(game, /function rewriteInvitationText\(\): void/);
  assert.match(game, /link\.href = '\/\?%E2%96%88%CC%B6%CC%B8=1'/);
  assert.match(game, /document\.title = 'RÄDDA DOM RÄDDA DOM'/);
  assert.match(game, /event\.stopImmediatePropagation\(\)/);
  assert.match(game, /window\.dispatchEvent\(new Event\('weab:save-game-start'\)\)/);
  assert.doesNotMatch(game, /clearMinigameInvitationCookie/);
  assert.match(game, /weab:spirit-presence/);
  assert.match(game, /weab:spirit-typing/);
  assert.match(game, /weab:spirit-burst/);
  assert.doesNotMatch(controller, /chooseMinigame\(\)[\s\S]{0,130}weab:save-game-start/);
});

test('inbjudningscookien försvinner endast efter klarat spel och avslutad WeAB-skärm', () => {
  const game = source('src/components/ResistanceMinigame.astro');
  const layout = source('src/layouts/BaseLayout.astro');
  const invite = game.split('function startFromInvitation(): void {')[1]
    .split("window.addEventListener('weab:save-game-invite'")[0];
  const playing = game.split("window.addEventListener('weab:save-game-start'")[1]
    .split('// Uttrycklig testadress')[0];
  const finalStart = game.indexOf("root.classList.add('weab-minigame-confirmed', 'weab-death-confirmed')");
  const finalStep = game.slice(finalStart, game.indexOf('}, panicDurationMs)', finalStart));
  assert.doesNotMatch(invite, /clearMinigameInvitationCookie/);
  assert.match(invite, /weab:spirit-typing/);
  assert.match(invite, /weab:spirit-presence/);
  assert.match(invite, /active: false/);
  assert.doesNotMatch(playing, /clearMinigameInvitationCookie/);
  assert.match(playing, /document\.cookie = createMinigameInvitationCookie/);
  assert.match(playing, /classList\.add\('weab-save-game-active'\)/);
  assert.match(layout, /if \(invited\) \{/);
  assert.match(layout, /classList\.toggle\('weab-save-call', !playing\)/);
  assert.match(game, /!hasMinigameInvitationCookie\(document\.cookie\)/);
  assert.match(game, /window\.addEventListener\('pageshow', event => \{/);
  assert.match(game, /event\.persisted && \(active \|\| hasMinigameInvitationCookie\(document\.cookie\)\)/);
  assert.match(finalStep, /window\.setTimeout\(\(\) => \{/);
  assert.match(finalStep, /document\.cookie = createQuietCookie/);
  assert.equal((finalStep.match(/document\.cookie =/g) ?? []).length, 1);
  assert.match(finalStep, /\}, 3_200\)/);
});

test('inbjudan, karantän och tystnad är ömsesidigt uteslutande lägen i en cookie', () => {
  const now = 1_800_000_000_000;
  const invite = createMinigameInvitationCookie().split(';')[0];
  const lock = createLockdownCookie(now, false).split(';')[0];
  const quiet = createQuietCookie(now, false).split(';')[0];
  assert.equal(new Set([invite, lock, quiet].map(value => value.split('=')[0])).size, 1);
  assert.equal(readLockdownExpiry(invite, now), null);
  assert.equal(readQuietExpiry(invite, now), null);
  assert.equal(hasMinigameInvitationCookie(lock), false);
  assert.equal(hasMinigameInvitationCookie(quiet), false);
  assert.equal(readLockdownExpiry(lock, now), now + 180_000);
  assert.equal(readQuietExpiry(quiet, now), now + 180_000);
});

test('minispelets radiobrus dämpas 30 procent och främre RÄDDA DOM-rösten förstärks 20 procent', () => {
  const radio = source('src/components/SpiritTransmission.astro');
  const game = source('src/components/ResistanceMinigame.astro');
  assert.match(radio, /classList\.contains\('weab-save-game-active'\) \? level \* \.7 : level/);
  assert.match(radio, /return noiseLevel\(panicProgress/);
  assert.match(radio, /master\.gain\.value = noiseLevel\(\.19\)/);
  assert.match(game, /const source = context\.createMediaElementSource\(mainVoice\)/);
  assert.match(game, /gain\.gain\.value = 1\.2/);
  assert.match(game, /backgroundVoice\.volume = \.16/);
});
