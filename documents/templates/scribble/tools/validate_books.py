#!/usr/bin/env python3
"""Check Scribble's BookFile format and conservative in-game layout limits."""
from __future__ import annotations

import argparse
import json
from pathlib import Path
import re
import sys

from book_to_pdf import validate_book

ROOT = Path(__file__).resolve().parents[1]
GENERAL = ROOT / "general"
COMPANIES = {
    "WeAB", "WeRule", "WeTravel", "WeTrade", "WeLove", "WeKill",
    "WeSort", "WeGamble", "WeBox", "WeLiveLaughLove",
}
CODE = re.compile(r"§[0-9a-fklmnor]", re.I)


def check_one(file: Path, strict_layout: bool, general: bool) -> list[str]:
    issues = []
    try:
        document = json.loads(file.read_text(encoding="utf-8"))
        validate_book(document)
    except (OSError, ValueError, UnicodeError) as error:
        return [f"{file}: {error}"]
    author = document["author"]
    if general:
        if author not in COMPANIES:
            issues.append(f"{file.name}: unknown company {author!r}")
        if file.name != f"{author}_Generell_Scribble.json":
            issues.append(f"{file.name}: filename and author do not agree")
        if len(document["pages"]) != 1:
            issues.append(f"{file.name}: general template should have one editable page")
    for i, raw in enumerate(document["pages"], 1):
        lines = CODE.sub("", raw).split("\n")
        longest = max((len(line) for line in lines), default=0)
        if strict_layout and (len(lines) > 13 or longest > 25):
            issues.append(
                f"{file.name} page {i}: {len(lines)} lines and {longest} max chars "
                "(heuristic in-game limit: 13 lines, about 25 chars)"
            )
        if general:
            plain = "\n".join(lines)
            if "[Dokumenttitel]" not in plain or "[Skriv här]" not in plain:
                issues.append(f"{file.name}: missing editable fields")
    return issues


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("files", nargs="*", type=Path)
    parser.add_argument("--strict-layout", action="store_true")
    args = parser.parse_args()
    general = not bool(args.files)
    files = args.files if args.files else sorted(GENERAL.glob("*.json"))
    errors = []
    if general and len(files) != 10:
        errors.append(f"Expected 10 general books, found {len(files)}")
    if general:
        other = [p.name for p in GENERAL.iterdir() if p.is_file() and p.suffix != ".json"]
        if other:
            errors.append(f"Unexpected files in general/: {other}")
    for file in files:
        errors += check_one(
            file, strict_layout=args.strict_layout or general, general=general
        )
    if errors:
        for issue in errors:
            print("FAIL:", issue, file=sys.stderr)
        raise SystemExit(1)
    print(f"OK: {len(files)} Scribble BookFile(s) validated.")


if __name__ == "__main__":
    main()
