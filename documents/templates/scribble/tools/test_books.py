"""Regression tests for book validity, PDF text parity and independent pagination."""
from __future__ import annotations

import json
from pathlib import Path
import tempfile
import unittest

from pypdf import PdfReader
from book_to_pdf import make_pdf, validate_book
from compare_texts import compare
from check_title import MAX_SIGNED_BOOK_TITLE_LENGTH, title_length, validate_title
from validate_books import check_one

ROOT = Path(__file__).resolve().parents[1]


class ScribbleTests(unittest.TestCase):
    def test_valid_signed_book_title_in_java(self):
        self.assertEqual(MAX_SIGNED_BOOK_TITLE_LENGTH, 15)
        self.assertEqual(validate_title("Järnfarmsolycka"), 15)
        self.assertEqual(title_length("ä"), 1)
        self.assertEqual(validate_title("Olycka vid farm"), 15)

    def test_reject_too_long_title_and_invalid_text(self):
        for title in ("Järnfarmsolyckan", " ", " Titel", "Titel ", "Rad\\nbyte", "§cTitel", "a\\u0308"):
            with self.subTest(title=title):
                with self.assertRaises(ValueError):
                    validate_title(title)
        self.assertEqual(title_length("📕"), 2)  # Java uses UTF-16 code units.

    def test_general_templates(self):
        files = sorted((ROOT / "general").glob("*.json"))
        self.assertEqual(len(files), 10)
        self.assertEqual(
            len({json.loads(p.read_text(encoding="utf-8"))["author"] for p in files}), 10
        )
        for path in files:
            with self.subTest(path=path.name):
                self.assertFalse(check_one(path, strict_layout=True, general=True))
                source = json.loads(path.read_text(encoding="utf-8"))
                with tempfile.TemporaryDirectory() as tmp:
                    pdf = Path(tmp) / "test.pdf"
                    make_pdf(source, pdf)
                    self.assertTrue(compare(path, pdf))
                    self.assertEqual(len(PdfReader(str(pdf)).pages), 1)

    def test_book_pages_are_not_pdf_pages(self):
        book = {
            "author": "WeKill",
            "pages": [
                "§c§lWeKill§r\n§8------------------§r\n\n§lProjektanteckning§r\n\n"
                "Samma text utan förkortning, med tydliga faktauppgifter.",
                "Arbetet fortsätter den 2026-11-04 i en separat Minecraft-sida.",
                "Sista anteckningen innehåller svenska å, ä och ö samt datum.",
            ],
        }
        with tempfile.TemporaryDirectory() as tmp:
            json_path = Path(tmp) / "from_game.json"
            json_path.write_text(json.dumps(book, ensure_ascii=False), encoding="utf-8")
            pdf_path = Path(tmp) / "document.pdf"
            make_pdf(book, pdf_path)
            self.assertTrue(compare(json_path, pdf_path))
            self.assertLess(len(PdfReader(str(pdf_path)).pages), len(book["pages"]))

    def test_game_player_author_and_brand(self):
        book = {"author": "ExamplePlayer", "pages": [
            "§c§lWeKill§r\n\n§lAnteckning§r\nTexten bevaras."
        ]}
        with tempfile.TemporaryDirectory() as tmp:
            pdf = Path(tmp) / "game.pdf"
            make_pdf(book, pdf)
            self.assertIn("WeKill", PdfReader(str(pdf)).pages[0].extract_text())

    def test_author_is_not_a_company_without_override(self):
        book = {"author": "ExamplePlayer", "pages": ["Rapport: [Fyll i]"]}
        with tempfile.TemporaryDirectory() as tmp:
            with self.assertRaises(ValueError):
                make_pdf(book, Path(tmp) / "fail.pdf")
            make_pdf(book, Path(tmp) / "ok.pdf", company="WeBox")

    def test_reject_unknown_json_keys(self):
        with self.assertRaises(ValueError):
            validate_book({"author": "WeBox", "pages": ["X"], "title": "Not allowed"})

    def test_reject_obfuscation(self):
        with self.assertRaises(ValueError):
            validate_book({"author": "WeBox", "pages": ["§kObfuscated"]})


if __name__ == "__main__":
    unittest.main()
