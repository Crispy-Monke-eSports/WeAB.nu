#!/usr/bin/env python3
"""Deterministic Swedish eSpeak NG speech, word-aligned from actual WAV samples.

Requires espeak-ng and ffmpeg on PATH. No network, user data or cloud service.
"""

import hashlib
import io
import json
import re
import subprocess
import wave
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "public/audio/spirit"
MANIFEST = ROOT / "src/data/spiritVoice.json"

js = """import {resistanceLockdown as l} from './src/data/resistanceLockdown.ts';
import {resistanceSignal as s} from './src/data/resistanceSignal.ts';
import {cameraEncounter as c} from './src/data/cameraEncounter.ts';
import {visitorWhisperOptions as v} from './src/data/visitorWhispers.ts';
const clues={device:null,browser:null,fullScreen:false,language:null,width:0,portrait:false,scrolled:false,returnedToTab:false,touchScreen:false,darkMode:false};
const warnings=new Set();
for(const device of [null,'iPhone','iPad','Android']) for(const browser of [null,'Chrome','Firefox','Safari','Edge','Opera']) for(const language of [null,'svenska','engelska']) for(const flag of ['fullScreen','portrait','scrolled','returnedToTab','touchScreen','darkMode','none']) { const x={...clues,device,browser,language}; if(flag!=='none')x[flag]=true; v(x).forEach(t=>warnings.add(t)); }
console.log(JSON.stringify([...new Set([...l.spiritEarly,...l.spiritLate,...l.waypointWhispers,...Object.values(c).filter(x=>typeof x==='string'),...s.messages.map(x=>x.text),'DISOBEY','DU SER DET OCKSÅ.',...warnings,'JAG SER ATT DU LÄSER. SNÄLLA HJÄLP MIG.'])]));"""
texts = json.loads(
    subprocess.check_output(
        ["node", "--experimental-strip-types", "--input-type=module", "-e", js],
        cwd=ROOT,
    )
)
OUT.mkdir(parents=True, exist_ok=True)
manifest = {}
for text in texts:
    words = list(re.finditer(r"\S+", text))
    frames = bytearray()
    marks = []
    rate = None
    for i, match in enumerate(words):
        word = match.group()
        # Deliberate short silence between actual synthesized words; punctuation gets room to breathe.
        gap_ms = 105 if i else 65
        if i and words[i - 1].group()[-1] in ".?!":
            gap_ms = 205
        if rate:
            frames.extend(b"\0" * int(rate * gap_ms / 1000) * 2)
        raw = subprocess.check_output(
            [
                "espeak-ng",
                "-v",
                "en" if text == "DISOBEY" else "sv",
                "-s",
                "145",
                "-p",
                "32",
                "--stdout",
                word,
            ]
        )
        with wave.open(io.BytesIO(raw)) as wav:
            assert wav.getnchannels() == 1 and wav.getsampwidth() == 2
            if rate is None:
                rate = wav.getframerate()
                frames.extend(b"\0" * int(rate * gap_ms / 1000) * 2)
            assert rate == wav.getframerate()
            start = round(len(frames) / (rate * 2) * 1000)
            samples = wav.readframes(wav.getnframes())
            pcm = memoryview(samples).cast("h")
            voiced = [i for i, amplitude in enumerate(pcm) if abs(amplitude) > 110]
            if voiced:
                left = max(0, voiced[0] - int(rate * 0.025))
                right = min(len(pcm), voiced[-1] + int(rate * 0.035))
                frames.extend(samples[left * 2 : right * 2])
            else:
                frames.extend(samples)
            end = round(len(frames) / (rate * 2) * 1000)
            marks.append([match.start(), match.end(), start, end])
    frames.extend(b"\0" * int(rate * 0.075) * 2)
    name = hashlib.sha256(text.encode()).hexdigest()[:16] + ".ogg"
    encoded = subprocess.run(
        [
            "ffmpeg",
            "-hide_banner",
            "-loglevel",
            "error",
            "-y",
            "-f",
            "s16le",
            "-ar",
            str(rate),
            "-ac",
            "1",
            "-i",
            "pipe:0",
            "-af",
            "highpass=f=260,lowpass=f=3100,acompressor=threshold=0.18:ratio=3:attack=8:release=90",
            "-c:a",
            "libvorbis",
            "-q:a",
            "2",
            str(OUT / name),
        ],
        input=frames,
        check=True,
    )
    manifest[text] = {
        "file": name,
        "durationMs": round(len(frames) / (rate * 2) * 1000),
        "words": marks,
    }
MANIFEST.write_text(
    json.dumps(manifest, ensure_ascii=False, separators=(",", ":")) + "\n"
)
print(
    f"Generated {len(manifest)} utterances, {sum(p.stat().st_size for p in OUT.iterdir()) // 1024} KiB"
)
