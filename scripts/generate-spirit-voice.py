#!/usr/bin/env python3
"""Deterministic Swedish eSpeak NG speech with baked-in analog/digital damage.

Requires espeak-ng and ffmpeg on PATH. No network, user data or cloud service.
"""

import hashlib
import io
import json
import math
import random
import re
import subprocess
import wave
from array import array
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "public/audio/spirit"
MANIFEST = ROOT / "src/data/spiritVoice.json"
RENDER_VERSION = "offline-corruption-v1"


def profile_for(text, early, late, warnings, camera):
    if text == "HÖR DU OSS?":
        return "weak"
    if (
        text == "DISOBEY"
        or text in warnings
        or text in (camera["denied"], camera["ignored"], camera["unavailable"])
    ):
        return "desperate"
    if text == camera["request"]:
        return "weak"
    if text == camera["allowed"]:
        return "broken"
    if text in early and text not in late:
        return "weak"
    if text in late and text.isupper():
        return "desperate"
    return "broken"


def corrupt_voice(pcm_bytes, rate, text, marks, profile):
    """Sample-hold, detuned echo, syllabic repeats, dropouts and shortwave hiss.

    Process AFTER word alignment without changing sample count: timestamps
    remain coordinates in the actual final recording, even within silences.
    """
    dry = array("h")
    dry.frombytes(pcm_bytes)
    count = len(dry)
    randomizer = random.Random(
        int.from_bytes(hashlib.sha256(text.encode()).digest()[:8])
    )
    amount = {"weak": 0.55, "broken": 0.82, "desperate": 1.0}[profile]
    held = array("f", [0]) * count
    segment = max(1, int(rate * 0.064))
    for i in range(0, count, segment):
        width = {"weak": 3, "broken": 5, "desperate": 7}[
            profile
        ] + randomizer.randrange(3)
        for at in range(i, min(count, i + segment), width):
            # Syllable fragments replay from the same word, never another word.
            value = dry[at]
            for j in range(at, min(count, at + width, i + segment)):
                held[j] = value

    # Two short local repeats and gaps in each LONG utterance; indices remain fixed.
    if count > rate * 1.2 and profile != "weak":
        for from_char, to_char, start_ms, end_ms in marks:
            start = int(rate * start_ms / 1000)
            end = int(rate * end_ms / 1000)
            if end - start < rate * 0.24 or randomizer.random() > 0.78 * amount:
                continue
            center = start + int((end - start) * 0.57)
            fragment = max(1, int(rate * 0.037))
            for j in range(center, min(center + fragment, end, count)):
                held[j] = held[j - fragment]

    # Narrow-band noise during *every* spoken attempt, including word pauses.
    # A small noise seed reused with a different phase avoids allocating millions
    # of random objects while retaining deterministic, crackling modulation.
    hiss = [randomizer.uniform(-1, 1) for _ in range(2048)]
    delay = int(rate * 0.026)
    output = array("h")
    peak = 0
    for i in range(count):
        t = i / rate
        drift = 0.92 + 0.08 * math.sin(t * 19.5)
        doubled = held[i - delay] if i >= delay else 0
        # The delayed layer carries a few distorted harmonics, not intelligible
        # speech from another utterance.
        voice = (
            held[i] * (0.76 - amount * 0.08) + doubled * (0.17 + amount * 0.06)
        ) * drift
        dropout = (i // max(1, int(rate * 0.37))) % 4 == 3 and (
            i % max(1, int(rate * 0.37))
        ) < int(rate * 0.052 * amount)
        if dropout:
            voice *= 0.12 if profile == "desperate" else 0.34
        radio = hiss[(i * 37 + i // 107) % len(hiss)] * (1800 + 1550 * amount)
        radio *= (0.72 + 0.28 * math.sin(t * 25.1 + 0.4)) * (
            1.75 if (i // max(1, int(rate * 0.19))) % 9 == 7 else 1.0
        )
        # A mild peak-limited overdrive is stable across platforms. No transient
        # can clip or create a jumpscare on its own.
        edge = min(1.0, i / (rate * 0.03), (count - 1 - i) / (rate * 0.04))
        sample = int(19500 * edge * math.tanh((voice + radio) / 15800))
        peak = max(peak, abs(sample))
        output.append(sample)
    assert len(output) == count and peak < 20000
    return output.tobytes()


js = """import {resistanceLockdown as l} from './src/data/resistanceLockdown.ts';
import {resistanceSignal as s} from './src/data/resistanceSignal.ts';
import {cameraEncounter as c} from './src/data/cameraEncounter.ts';
import {visitorWhisperOptions as v, geoCities, geoRegions, geoProviders} from './src/data/visitorWhispers.ts';
const clues={device:null,browser:null,fullScreen:false,language:null,width:0,portrait:false,scrolled:false,returnedToTab:false,touchScreen:false,darkMode:false,reducedMotion:false,offline:false};
const warnings=new Set();
for(const device of [null,'iPhone','iPad','Android']) for(const browser of [null,'Chrome','Firefox','Safari','Edge','Opera']) for(const language of [null,'svenska','engelska']) for(const flag of ['fullScreen','portrait','scrolled','returnedToTab','touchScreen','darkMode','reducedMotion','offline','none']) { const x={...clues,device,browser,language}; if(flag!=='none')x[flag]=true; v(x).forEach(t=>warnings.add(t)); }
console.log(JSON.stringify({texts:[...new Set([...l.spiritEarly,...l.spiritLate,...l.waypointWhispers,...Object.values(c).filter(x=>typeof x==='string'),...s.messages.map(x=>x.text),'DISOBEY','DU SER DET OCKSÅ.',...warnings,'JAG SER ATT DU LÄSER. SNÄLLA HJÄLP MIG.'])],warnings:[...warnings],cities:geoCities,regions:geoRegions,providers:geoProviders,early:l.spiritEarly,late:l.spiritLate,camera:c}));"""
data = json.loads(
    subprocess.check_output(
        ["node", "--experimental-strip-types", "--input-type=module", "-e", js],
        cwd=ROOT,
    )
)
texts = data["texts"]
warnings = set(data["warnings"])
OUT.mkdir(parents=True, exist_ok=True)
previous = json.loads(MANIFEST.read_text()) if MANIFEST.exists() else {}
manifest = {}
fragments = {}


def render(text, profile, folder=""):
    name = (
        hashlib.sha256((RENDER_VERSION + ":" + text).encode()).hexdigest()[:16] + ".ogg"
    )
    path = folder + name
    key = "@fragment/" + folder + text if folder else text
    # Content-addressed recordings already on disk do not need another encode.
    # Keep the existing Ogg bytes; FFmpeg container metadata need not be stable.
    existing = previous.get(key)
    if existing and existing.get("file") == path and (OUT / path).is_file():
        if folder:
            manifest[key] = existing
        return existing
    cached = fragments.get(path) if folder else None
    if cached:
        return cached
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
    processed = corrupt_voice(frames, rate, text, marks, profile)
    (OUT / folder).mkdir(parents=True, exist_ok=True)
    subprocess.run(
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
            "highpass=f=290,lowpass=f=2850,acompressor=threshold=0.14:ratio=2:attack=8:release=90",
            "-c:a",
            "libvorbis",
            "-q:a",
            "2",
            str(OUT / path),
        ],
        input=processed,
        check=True,
    )
    entry = {
        "file": path,
        "durationMs": round(len(frames) / (rate * 2) * 1000),
        "words": marks,
        "profile": profile,
    }
    if folder:
        fragments[path] = entry
        manifest[key] = entry
    return entry


for text in texts:
    manifest[text] = render(
        text, profile_for(text, data["early"], data["late"], warnings, data["camera"])
    )


def compose(parts):
    text = " ".join(fragment for fragment, _ in parts)
    entries = [render(fragment, "desperate", folder) for fragment, folder in parts]
    words = []
    at_ms = 0
    at_char = 0
    for fragment, entry in zip((part[0] for part in parts), entries):
        for start, end, begin, finish in entry["words"]:
            words.append(
                [start + at_char, end + at_char, begin + at_ms, finish + at_ms]
            )
        at_ms += entry["durationMs"]
        at_char += len(fragment) + 1
    manifest[text] = {
        "file": "",
        "parts": [entry["file"] for entry in entries],
        "durationMs": at_ms,
        "words": words,
        "profile": "desperate",
    }


for city in data["cities"]:
    compose(
        [
            ("ÄR DU I", "fragments/"),
            (city.upper() + "?", "cities/"),
            ("JAG VILL BARA PRATA!", "fragments/"),
        ]
    )
for region in data["regions"]:
    compose(
        [
            ("ÄR DU NÅGONSTANS I", "fragments/"),
            (region.upper() + "?", "regions/"),
            ("JAG FÖRSÖKER NÅ DIG.", "fragments/"),
        ]
    )
for provider in data["providers"]:
    compose(
        [
            ("JAG VERKAR BEHÖVA GÅ VIA", "fragments/"),
            (provider.upper(), "isps/"),
            ("FÖR ATT NÅ DIG.", "fragments/"),
        ]
    )
MANIFEST.write_text(
    json.dumps(manifest, ensure_ascii=False, separators=(",", ":")) + "\n"
)
for old in previous.values():
    filename = old.get("file", "")
    if filename not in {item["file"] for item in manifest.values()} and re.fullmatch(
        r"[0-9a-f]{16}\.ogg", filename
    ):
        (OUT / filename).unlink(missing_ok=True)
print(
    f"Generated {len(manifest)} entries, {sum(p.stat().st_size for p in OUT.rglob('*.ogg')) // 1024} KiB"
)
