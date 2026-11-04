#!/usr/bin/env python3
"""Render a Scribble 1.6+ BookFile as a branded, reflowed A4 PDF.

PDF pagination is independent of Minecraft pagination. All semantic text
remains in the same order. Formatting codes and purely decorative rulers
are presentation, not source prose.
"""
from __future__ import annotations

import argparse
from dataclasses import dataclass
from html import escape
import json
from pathlib import Path
import re
import sys

try:
    from reportlab.lib import colors
    from reportlab.lib.pagesizes import A4
    from reportlab.lib.styles import ParagraphStyle
    from reportlab.pdfbase import pdfmetrics
    from reportlab.pdfbase.ttfonts import TTFont
    from reportlab.platypus import HRFlowable, Paragraph, SimpleDocTemplate
except ImportError as error:
    raise SystemExit(
        "Install PDF dependencies: pip install -r documents/templates/scribble/requirements.txt"
    ) from error

COMPANY_COLORS = {
    "WeAB": "#00BCD4", "WeRule": "#00BCD4", "WeTravel": "#2563EB",
    "WeTrade": "#4DAA27", "WeLove": "#D65A98", "WeKill": "#C62828",
    "WeSort": "#E66A00", "WeGamble": "#D4A017", "WeBox": "#8E44AD",
    "WeLiveLaughLove": "#79A83B",
}
MC_COLORS = {
    "0": "#000000", "1": "#0000AA", "2": "#008800", "3": "#00AAAA",
    "4": "#AA0000", "5": "#AA00AA", "6": "#B8860B", "7": "#AAAAAA",
    "8": "#666666", "9": "#305AD5", "a": "#55AA33", "b": "#00AFC5",
    "c": "#CC3333", "d": "#DD66BB", "e": "#C99B11", "f": "#FFFFFF",
}
RULER = re.compile(r"^[-_─━=]{3,}$")
METADATA = re.compile(r"^[^:\n]{1,26}:\s*.+$")


@dataclass(frozen=True)
class TextSpan:
    text: str
    bold: bool = False
    italic: bool = False
    underline: bool = False
    strike: bool = False
    color: str | None = None


@dataclass(frozen=True)
class RichLine:
    spans: tuple[TextSpan, ...]
    visible: str
    heading: bool


def validate_book(book: object) -> None:
    if not isinstance(book, dict) or set(book) != {"author", "pages"}:
        raise ValueError("Expected exactly author and pages at the top level")
    author, pages = book["author"], book["pages"]
    if not isinstance(author, str) or not author.strip() or len(author) > 64:
        raise ValueError("Invalid author")
    if not isinstance(pages, list) or not 1 <= len(pages) <= 100:
        raise ValueError("Book must contain 1–100 pages")
    for i, page in enumerate(pages, 1):
        if not isinstance(page, str) or len(page) > 1024:
            raise ValueError(f"Page {i}: not a string or exceeds 1,024 characters")
        if re.search(r"§(?:[^0-9a-fklmnor]|$)", page, re.I):
            raise ValueError(f"Page {i}: unsupported or truncated § code")
        if "§k" in page.lower():
            raise ValueError(
                f"Page {i}: obfuscated §k text cannot be represented faithfully in PDF"
            )


def read_book(path: Path) -> dict:
    book = json.loads(path.read_text(encoding="utf-8"))
    validate_book(book)
    return book


def extract_lines(book: dict) -> list[RichLine | None]:
    """Decode Minecraft formatting; retain blank lines, but not book page breaks."""
    result: list[RichLine | None] = []
    for page in book["pages"]:
        bold = italic = underline = strike = False
        color: str | None = None
        spans: list[TextSpan] = []
        chars: list[str] = []
        current_style = None

        def flush_chars():
            nonlocal chars
            if chars:
                b, i, u, s, c = current_style
                spans.append(TextSpan("".join(chars), b, i, u, s, c))
                chars = []

        def flush_line():
            nonlocal spans
            flush_chars()
            plain = "".join(span.text for span in spans)
            if plain:
                heading = bool(spans and spans[0].bold and len(plain.strip()) <= 96)
                result.append(RichLine(tuple(spans), plain, heading))
            else:
                result.append(None)
            spans = []

        index = 0
        while index < len(page):
            ch = page[index]
            if ch == "§" and index + 1 < len(page):
                flush_chars()
                code = page[index + 1].lower()
                if code == "r":
                    color = None
                    bold = italic = underline = strike = False
                elif code in MC_COLORS:
                    color = MC_COLORS[code]
                    bold = italic = underline = strike = False
                elif code == "l":
                    bold = True
                elif code == "o":
                    italic = True
                elif code == "n":
                    underline = True
                elif code == "m":
                    strike = True
                index += 2
                current_style = None
                continue
            if ch == "\n":
                flush_line()
                index += 1
                current_style = None
                continue
            style = (bold, italic, underline, strike, color)
            if chars and style != current_style:
                flush_chars()
            current_style = style
            chars.append(ch)
            index += 1
        if chars or spans:
            flush_line()
    return result


def semantic_text(book: dict) -> str:
    """Book text, excluding § formatting and standalone decorative separator lines."""
    return " ".join(
        line.visible.strip() for line in extract_lines(book)
        if line is not None and not RULER.fullmatch(line.visible.strip())
    )


def normalize_text(value: str) -> str:
    return " ".join(value.split())


def detect_company(book: dict, override: str | None = None) -> str:
    if override is not None:
        if override not in COMPANY_COLORS:
            raise ValueError(f"Unknown company: {override}")
        return override
    for line in extract_lines(book):
        if line is not None and line.visible.strip():
            if line.visible.strip() in COMPANY_COLORS:
                return line.visible.strip()
            break
    if book["author"] in COMPANY_COLORS:
        return book["author"]
    raise ValueError(
        "Cannot identify a WeAB company: supply --company for a game-exported book"
    )


def register_fonts() -> str:
    font_bundles = [
        ("/usr/share/fonts/truetype/dejavu",
         "DejaVuSans.ttf", "DejaVuSans-Bold.ttf",
         "DejaVuSans-Oblique.ttf", "DejaVuSans-BoldOblique.ttf"),
        ("/usr/share/fonts/truetype/liberation2",
         "LiberationSans-Regular.ttf", "LiberationSans-Bold.ttf",
         "LiberationSans-Italic.ttf", "LiberationSans-BoldItalic.ttf"),
        ("/usr/share/fonts/truetype/liberation",
         "LiberationSans-Regular.ttf", "LiberationSans-Bold.ttf",
         "LiberationSans-Italic.ttf", "LiberationSans-BoldItalic.ttf"),
    ]
    for folder, regular, bold, italic, bold_italic in font_bundles:
        paths = [Path(folder, name) for name in (regular, bold, italic, bold_italic)]
        if not all(path.is_file() for path in paths):
            continue
        for name, path in zip(
            ("WeSans", "WeSans-Bold", "WeSans-Italic", "WeSans-BoldItalic"), paths
        ):
            pdfmetrics.registerFont(TTFont(name, str(path)))
        pdfmetrics.registerFontFamily(
            "WeSans", normal="WeSans", bold="WeSans-Bold",
            italic="WeSans-Italic", boldItalic="WeSans-BoldItalic",
        )
        return "WeSans"
    raise FileNotFoundError("No DejaVu Sans or Liberation Sans TTF fonts found")


def markup(spans: tuple[TextSpan, ...]) -> str:
    fragments = []
    for span in spans:
        fragment = escape(span.text, quote=False)
        if span.underline:
            fragment = f"<u>{fragment}</u>"
        if span.strike:
            fragment = f"<strike>{fragment}</strike>"
        if span.italic:
            fragment = f"<i>{fragment}</i>"
        if span.bold:
            fragment = f"<b>{fragment}</b>"
        # Never print white text on white paper; preserve text legibility.
        if span.color and span.color != "#FFFFFF":
            fragment = f'<font color="{span.color}">{fragment}</font>'
        fragments.append(fragment)
    return "".join(fragments)


def make_pdf(book: dict, output: Path, company: str | None = None) -> None:
    validate_book(book)
    company = detect_company(book, company)
    font = register_fonts()
    accent = COMPANY_COLORS[company]
    styles = {
        "masthead": ParagraphStyle(
            "WeMasthead", fontName=font+"-Bold", fontSize=12, leading=17,
            textColor=colors.HexColor(accent), spaceAfter=8,
        ),
        "title": ParagraphStyle(
            "WeTitle", fontName=font+"-Bold", fontSize=20, leading=27,
            textColor=colors.HexColor("#1E2933"), spaceBefore=7, spaceAfter=15,
        ),
        "heading": ParagraphStyle(
            "WeHeading", fontName=font+"-Bold", fontSize=12.4, leading=18,
            textColor=colors.HexColor("#203440"), spaceBefore=14, spaceAfter=6,
            keepWithNext=True,
        ),
        "metadata": ParagraphStyle(
            "WeMetadata", fontName=font, fontSize=9.5, leading=15,
            textColor=colors.HexColor("#334955"), spaceAfter=3,
        ),
        "body": ParagraphStyle(
            "WeBody", fontName=font, fontSize=10.5, leading=17,
            textColor=colors.HexColor("#243340"), spaceAfter=10,
        ),
    }
    content: list = []
    pending: list[RichLine] = []
    first_nonempty = True
    seen_title = False

    def flush():
        nonlocal pending
        if pending:
            content.append(Paragraph(
                " ".join(markup(line.spans) for line in pending),
                styles["body"],
            ))
            pending = []

    for line in extract_lines(book):
        if line is None:
            flush()
            continue
        visible = line.visible.strip()
        if not visible:
            flush()
            continue
        if RULER.fullmatch(visible):
            flush()
            content.append(HRFlowable(
                width="100%", thickness=1.35, color=colors.HexColor(accent),
                spaceBefore=4, spaceAfter=9,
            ))
            continue
        if first_nonempty and visible == company:
            flush()
            content.append(Paragraph(escape(visible), styles["masthead"]))
            first_nonempty = False
            continue
        first_nonempty = False
        if METADATA.match(visible):
            flush()
            content.append(Paragraph(markup(line.spans), styles["metadata"]))
            continue
        if line.heading:
            flush()
            content.append(Paragraph(
                markup(line.spans), styles["title" if not seen_title else "heading"]
            ))
            seen_title = True
            continue
        pending.append(line)
    flush()

    output.parent.mkdir(parents=True, exist_ok=True)
    document = SimpleDocTemplate(
        str(output), pagesize=A4, leftMargin=53, rightMargin=53,
        topMargin=67, bottomMargin=60,
        title="WeAB-dokument", author=book["author"], pageCompression=1,
    )

    def draw_brand(canvas, doc):
        canvas.saveState()
        width, height = A4
        canvas.setFillColor(colors.HexColor(accent))
        canvas.rect(doc.leftMargin, height-39,
                    width-doc.leftMargin-doc.rightMargin, 2.5, stroke=0, fill=1)
        canvas.setStrokeColor(colors.HexColor("#DCE3E8"))
        canvas.setLineWidth(0.5)
        canvas.line(doc.leftMargin, 46, width-doc.rightMargin, 46)
        canvas.restoreState()

    document.build(content, onFirstPage=draw_brand, onLaterPages=draw_brand)


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("input", type=Path, help="Scribble .json file")
    parser.add_argument("output", type=Path, help="A4 .pdf output")
    parser.add_argument(
        "--company", choices=sorted(COMPANY_COLORS),
        help="Company when Scribble author is a game player name",
    )
    args = parser.parse_args()
    if args.input.suffix.lower() != ".json" or args.output.suffix.lower() != ".pdf":
        parser.error("Expected .json input and .pdf output")
    book = read_book(args.input)
    make_pdf(book, args.output, company=args.company)
    print(
        f"Created {args.output} from {len(book['pages'])} Scribble pages "
        "(independently reflowed to A4)"
    )


if __name__ == "__main__":
    try:
        main()
    except (ValueError, OSError) as error:
        print(f"ERROR: {error}", file=sys.stderr)
        sys.exit(1)
