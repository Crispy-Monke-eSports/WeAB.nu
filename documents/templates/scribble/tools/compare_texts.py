#!/usr/bin/env python3
"""Verify that a Scribble JSON book and its PDF contain identical semantic text."""
from __future__ import annotations

import argparse
from difflib import unified_diff
from pathlib import Path
import sys

from pypdf import PdfReader
from book_to_pdf import normalize_text, read_book, semantic_text


def get_pdf_text(pdf_path: Path) -> str:
    reader = PdfReader(str(pdf_path))
    return " ".join(
        page.extract_text(extraction_mode="plain") or "" for page in reader.pages
    )


def compare(book_path: Path, pdf_path: Path) -> bool:
    book = normalize_text(semantic_text(read_book(book_path)))
    pdf = normalize_text(get_pdf_text(pdf_path))
    return book == pdf


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("book", type=Path, help="Scribble BookFile .json")
    parser.add_argument("pdf", type=Path, help="Rendered document .pdf")
    args = parser.parse_args()
    book = normalize_text(semantic_text(read_book(args.book)))
    pdf = normalize_text(get_pdf_text(args.pdf))
    if book != pdf:
        print("ERROR: Book and PDF do not contain identical semantic text.", file=sys.stderr)
        difference = unified_diff(
            book.split(" "), pdf.split(" "),
            fromfile="Scribble JSON", tofile="PDF", lineterm="",
        )
        for index, line in enumerate(difference):
            if index >= 90:
                break
            print(line, file=sys.stderr)
        raise SystemExit(1)
    print("OK: PDF and Scribble JSON contain identical semantic text in order.")


if __name__ == "__main__":
    main()
