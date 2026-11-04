#!/usr/bin/env python3
"""Export ten paired general Scribble books and A4 PDFs with text parity checks."""
from __future__ import annotations

import argparse
from pathlib import Path
import shutil

from book_to_pdf import make_pdf, read_book
from compare_texts import compare

ROOT = Path(__file__).resolve().parents[1]
GENERAL = ROOT / "general"


def main() -> None:
    p = argparse.ArgumentParser(description=__doc__)
    p.add_argument("destination", type=Path, help="Directory for .json + .pdf pairs")
    args = p.parse_args()
    books = sorted(GENERAL.glob("*.json"))
    if len(books) != 10:
        raise SystemExit(f"Expected ten general book templates, found {len(books)}")
    args.destination.mkdir(parents=True, exist_ok=True)
    for source in books:
        book = read_book(source)
        json_out = args.destination / source.name
        pdf_out = args.destination / f"{source.stem}.pdf"
        if json_out.resolve() != source.resolve():
            shutil.copyfile(source, json_out)
        make_pdf(book, pdf_out)
        if not compare(json_out, pdf_out):
            raise SystemExit(f"Text parity mismatch for {source.name}")
        print(f"OK: {json_out.name} + {pdf_out.name}")
    print("Exported ten book/PDF pairs; page counts are independent.")


if __name__ == "__main__":
    main()
