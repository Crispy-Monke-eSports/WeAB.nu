#!/usr/bin/env python3
"""Generate the shared, loopable ARG shortwave interference without external audio assets."""

from array import array
from pathlib import Path
import math
import random
import subprocess

ROOT = Path(__file__).resolve().parent.parent
TARGET = ROOT / "public/audio/spirit/interference-loop.ogg"
RATE = 22_050
SECONDS = 12
randomizer = random.Random(0x2051A66)
frames = array("h")
hold = 0.0
for i in range(RATE * SECONDS):
    t = i / RATE
    if i % (4 + (i // (RATE // 9)) % 4) == 0:
        hold = randomizer.uniform(-1, 1)
    flutter = 0.71 + 0.26 * math.sin(t * 19.4) + 0.08 * math.sin(t * 52.3)
    carrier = math.sin(2 * math.pi * 612 * t + 0.65 * math.sin(t * 15.3))
    crackle = 1.5 if i // (RATE // 13) % 17 in (4, 11) else 1
    raw = hold * 0.37 * flutter * crackle + carrier * 0.055 * flutter
    # Quiet, smooth splice: 12 seconds of varied material, no periodic click.
    edge = min(1, i / (RATE * 0.055), (RATE * SECONDS - 1 - i) / (RATE * 0.07))
    frames.append(int(18500 * edge * math.tanh(raw * 1.8)))

TARGET.parent.mkdir(parents=True, exist_ok=True)
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
        str(RATE),
        "-ac",
        "1",
        "-i",
        "pipe:0",
        "-af",
        "highpass=f=290,lowpass=f=2950,acompressor=threshold=0.16:ratio=3:attack=6:release=120",
        "-c:a",
        "libvorbis",
        "-q:a",
        "3",
        str(TARGET),
    ],
    input=frames.tobytes(),
    check=True,
)
print(f"{TARGET.relative_to(ROOT)}: {TARGET.stat().st_size} bytes, {SECONDS}s")
