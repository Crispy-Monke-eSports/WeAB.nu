#!/usr/bin/env python3
"""Check WeRule's citizenship certificate Scribble/Writer template parity.

The Writer template is authoritative; Scribble reflows text without changing words.
Stamp artwork and other graphical objects do not exist in Scribble JSON.
"""
from __future__ import annotations

import json
from pathlib import Path
import re
import sys
import xml.etree.ElementTree as ET
import zipfile

ROOT = Path(__file__).resolve().parents[2]
WRITER = ROOT / "companies" / "WeRule" / "Medborgarskapsbevis.ott"
SCRIBBLE = ROOT / "scribble" / "companies" / "WeRule" / "Medborgarskapsbevis.json"
FORMATTING = re.compile(r"§[0-9a-fklmnor]", flags=re.IGNORECASE)
EXPECTED_FIELDS = {
    "citizen_name", "decision_date", "citizenship_start_date",
    "decision_reference", "certificate_number", "issued_by",
}


def normalized(text: str) -> str:
    return " ".join(text.split())


def check() -> None:
    with zipfile.ZipFile(WRITER) as document:
        if document.testzip() is not None:
            raise ValueError("Corrupt LibreOffice Writer template")
        if document.read("mimetype") != b"application/vnd.oasis.opendocument.text-template":
            raise ValueError("Writer source is not an OTT template")
        root = ET.fromstring(document.read("content.xml"))

    paragraphs = [
        "".join(node.itertext()).strip()
        for node in root.iter()
        if node.tag.rsplit("}", 1)[-1] in {"p", "h"}
        and "".join(node.itertext()).strip()
    ]
    fields = {
        node.attrib.get("{urn:oasis:names:tc:opendocument:xmlns:text:1.0}description", "").split(" | ")[0]
        for node in root.iter()
        if node.tag.rsplit("}", 1)[-1] == "text-input"
    }
    if fields != EXPECTED_FIELDS:
        raise ValueError(f"Writer fields mismatch: {fields ^ EXPECTED_FIELDS}")

    book = json.loads(SCRIBBLE.read_text(encoding="utf-8"))
    if set(book) != {"author", "pages"} or book["author"] != "WeRule":
        raise ValueError("Expected a WeRule Scribble BookFile with only author/pages")
    pages = book["pages"]
    if not isinstance(pages, list) or not 1 <= len(pages) <= 100:
        raise ValueError("Scribble book must have 1–100 pages")
    for index, page in enumerate(pages, 1):
        if not isinstance(page, str) or len(page) > 1024:
            raise ValueError(f"Scribble page {index} has invalid size")
        text = FORMATTING.sub("", page)
        if "§" in text:
            raise ValueError(f"Scribble page {index} has an unsupported formatting code")
        lines = text.split("\n")
        if len(lines) > 13 or any(len(line) > 25 for line in lines):
            raise ValueError(f"Scribble page {index} exceeds conservative game layout limits")

    original_text = normalized(" ".join(paragraphs))
    scribble_text = normalized(" ".join(FORMATTING.sub("", p) for p in pages))
    if original_text != scribble_text:
        raise ValueError("Scribble contains different words or order than the Writer template")

    for placeholder, count in {
        "[Medborgarens namn]": 1,
        "[ÅÅÅÅ-MM-DD]": 2,
        "[Beslutsreferens]": 1,
        "[Bevisnummer]": 1,
        "[Utfärdarens namn]": 1,
    }.items():
        if scribble_text.count(placeholder) != count:
            raise ValueError(f"Incorrect Scribble input placeholder: {placeholder}")
    print(f"OK: WeRule citizenship Writer/Scribble text parity; {len(pages)} pages and six inputs")


if __name__ == "__main__":
    try:
        check()
    except (OSError, ValueError, KeyError, zipfile.BadZipFile, ET.ParseError) as error:
        print(f"ERROR: {error}", file=sys.stderr)
        raise SystemExit(1)
