#!/usr/bin/env python3
"""Check suggested Minecraft Java Edition book-signing titles (max 15 UTF-16 units).

This is a signing-screen constraint, not part of Scribble's JSON BookFile.
It does not check the book's cover text or force the document headline shorter.
"""
from __future__ import annotations

import argparse
import sys
import unicodedata

MAX_SIGNED_BOOK_TITLE_LENGTH = 15


def title_length(title: str) -> int:
    """Count UTF-16 code units (matching Java's String length semantics)."""
    return len(title.encode("utf-16-le")) // 2


def validate_title(title: str) -> int:
    if not isinstance(title, str):
        raise ValueError("Book title must be a string")
    if not title or title != title.strip():
        raise ValueError("Book title must be nonempty and have no outer whitespace")
    if not unicodedata.is_normalized("NFC", title):
        raise ValueError("Use NFC-normalized characters (e.g. single ä, not a + combining mark)")
    if any(unicodedata.category(ch)[0] == "C" for ch in title):
        raise ValueError("Book title must not contain control or format characters")
    if "§" in title:
        raise ValueError("Minecraft book signing titles must not contain § formatting codes")
    length = title_length(title)
    if length > MAX_SIGNED_BOOK_TITLE_LENGTH:
        raise ValueError(
            f"Book title is {length} characters; maximum is "
            f"{MAX_SIGNED_BOOK_TITLE_LENGTH} for Minecraft Java Edition"
        )
    return length


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("title", help="Book title to suggest when signing")
    args = parser.parse_args()
    try:
        length = validate_title(args.title)
    except ValueError as error:
        print(f"INVALID: {error}", file=sys.stderr)
        return 1
    print(f"OK: {args.title!r} ({length}/{MAX_SIGNED_BOOK_TITLE_LENGTH} characters)")
    print("Check visual width and legibility in Minecraft before signing.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
