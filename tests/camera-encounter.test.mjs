import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';
import { cameraEncounter } from '../src/data/cameraEncounter.ts';
import { createLockdownTimeline, resistanceLockdown } from '../src/data/resistanceLockdown.ts';

const source = path => readFileSync(new URL('../' + path, import.meta.url), 'utf8');

test('en tidig kamerafråga före riksdagsledtråden i varje karantän', () => {
  for (let seed = 0; seed < 100; seed++) {
    const beats = createLockdownTimeline(1_800_000_000_000 + seed * 1_002_191);
    const camera = beats.filter(x => x.text === cameraEncounter.request);
    const waypoint = beats.filter(x => resistanceLockdown.waypointWhispers.includes(x.text));
    assert.equal(camera.length, 1);
    assert.equal(camera[0].voice, 'intrusion');
    assert.ok(camera[0].atMs >= 62_000 && camera[0].atMs < 100_000);
    assert.equal(waypoint.length, 1);
    assert.ok(camera[0].atMs < waypoint[0].atMs);
    assert.equal(new Set(beats.map(x => x.text)).size, beats.length);
  }
});

test('själens kamerarepliker reagerar olika och avslöjar ingen ARG-hemlighet', () => {
  assert.match(cameraEncounter.request, /få se vem jag pratar med/i);
  assert.equal(cameraEncounter.allowed, 'där sitter du ja. är du nöjd nu? har du fått som du vill?');
  assert.match(cameraEncounter.denied, /NEJ|IGEN/);
  assert.ok(cameraEncounter.maxActiveMs >= 30_000 && cameraEncounter.maxActiveMs <= 60_000);
  assert.ok(cameraEncounter.pendingMaxMs < 25_000);
  assert.doesNotMatch(Object.values(cameraEncounter).join(' '),
    /WeMourn|riksdag|talarstol|infiltratör|Atbash|Base64|2142|957/i);
});

test('endast inbyggd kameratillståndsfråga och ett kort lokalt videospår', () => {
  const camera = source('src/components/CameraEncounter.astro');
  assert.match(camera, /navigator\.permissions\.query/);
  assert.match(camera, /result\.state === 'denied'/);
  assert.match(camera, /navigator\.mediaDevices\.getUserMedia\(\{\s*audio: false,\s*video: true\s*\}\)/);
  assert.match(camera, /response|respond\(key, 'allowed'\)/);
  assert.match(camera, /cameraEncounter\.maxActiveMs/);
  assert.match(camera, /getTracks\(\).*track\.stop\(\)/);
  assert.match(camera, /window\.addEventListener\('pagehide', cancelEncounter\)/);
  assert.match(camera, /document\.addEventListener\('visibilitychange'/);
  assert.match(camera, /window\.clearTimeout\(pendingTimer\)/);
  assert.match(camera, /weab:spirit-presence/);
  assert.match(camera, /detail\?\.active === false\)\s*cancelEncounter\(\)/);

  // Inga bildrutor, inga cachade bilder, inga nätverk, ingen video-tag,
  // inga uppladdningar eller andra sätt att behandla besökarens ansikte.
  assert.doesNotMatch(camera, /<video\b|srcObject|drawImage|createImageBitmap|MediaRecorder|RTCPeerConnection|captureStream|canvas\.|toDataURL|toBlob|VideoFrame|ImageData|\bfetch\s*\(|\bXMLHttpRequest\b|sendBeacon|WebSocket|localStorage|sessionStorage/i);
});

test('beviljad kamera ger bittert svar och nekat tillstånd ger argt svar', () => {
  const camera = source('src/components/CameraEncounter.astro');
  const layout = source('src/layouts/BaseLayout.astro');
  const radio = source('src/components/SpiritTransmission.astro');
  assert.match(camera, /respond\(key, 'allowed'\)/);
  assert.match(camera, /'denied' : 'unavailable'/);
  assert.match(camera, /weab:camera-reaction/);
  assert.match(layout, /cameraScene: cameraEncounter/);
  assert.match(layout, /<CameraEncounter\/>/);
  assert.doesNotMatch(layout, /weab-camera-controls|weab-camera-stop|Kameran är aktiv/);
  assert.match(layout, /weab:camera-encounter-start/);
  assert.match(layout, /currentBeat\.text === cameraScene\.request/);
  assert.match(layout, /cameraReplyStatus === 'allowed' \? 'medium' : 'harsh'/);
  assert.match(layout, /cameraReplyKey/);
  assert.match(layout, /const duration = isSpirit/);
  assert.match(layout, /const visibleLetters = typing/);
  assert.match(radio, /typingStrength === 'harsh'/);
  assert.match(radio, /typingStrength === 'soft'/);
});

test('redan godkänd kamera aktiveras i scenen utan extra knappar', () => {
  const camera = source('src/components/CameraEncounter.astro');
  assert.match(camera, /const result = await navigator\.permissions\.query/);
  assert.match(camera, /if \(result\.state === 'denied'\)/);
  assert.match(camera, /const granted = await navigator\.mediaDevices\.getUserMedia/);
  assert.doesNotMatch(camera, /if \(result\.state === 'granted'\) return/);
  assert.doesNotMatch(camera, /weab-camera-controls|weab-camera-stop|controls\.hidden/);
});

test('kameran öppnar det stora ARG-ögat utan att läsa bildrutor', () => {
  const camera = source('src/components/CameraEncounter.astro');
  const eyes = source('src/components/ResistanceEyes.astro');
  assert.match(camera, /respond\(key, 'allowed'\);\s*window\.dispatchEvent\(new Event\('weab:camera-eye-start'\)\)/);
  assert.match(eyes, /window\.addEventListener\('weab:camera-eye-start', startCameraEye\)/);
  assert.match(eyes, /cameraEncounter\.responseMs/);
  assert.match(eyes, /resistance-eye-noise--camera \.resistance-eye/);
  assert.match(eyes, /detail\?\.active === false\) finish\(\)/);
  assert.match(eyes, /pointer-events: none/);
});
