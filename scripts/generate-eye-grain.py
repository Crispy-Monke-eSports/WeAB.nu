#!/usr/bin/env python3
"""Reproducible analog grain for the original, CSS-drawn ARG eye; no photo asset."""

import random
import struct
import zlib
from pathlib import Path

size = 128
randomizer = random.Random(2051)
rows = []
for y in range(size):
    row = bytearray([0])  # PNG filter 0
    for x in range(size):
        grain = randomizer.randrange(40, 225)
        if randomizer.randrange(40) == 0:
            grain = 236
        row.extend((grain, grain, grain, 80 + randomizer.randrange(80)))
    rows.append(row)


def chunk(label, data):
    return (
        struct.pack(">I", len(data))
        + label
        + data
        + struct.pack(">I", zlib.crc32(label + data) & 0xFFFFFFFF)
    )


root = Path(__file__).resolve().parent.parent
image = (
    b"\x89PNG\r\n\x1a\n"
    + chunk(b"IHDR", struct.pack(">IIBBBBB", size, size, 8, 6, 0, 0, 0))
    + chunk(b"IDAT", zlib.compress(b"".join(rows), 9))
    + chunk(b"IEND", b"")
)
for directory in (root / "public/images", root / "src/assets/images"):
    directory.mkdir(parents=True, exist_ok=True)
    path = directory / "arg-eye-grain.png"
    path.write_bytes(image)
    print(path)
