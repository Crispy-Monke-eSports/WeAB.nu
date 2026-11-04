#!/usr/bin/env python3
"""Ensure WeRule's citizenship OTT and a filled Writer copy fit on one A4 page.

Requires LibreOffice Writer and pypdf. Checks actual PDF pagination, rather
than inferring layout correctness from the ZIP/XML structure alone.
"""
from __future__ import annotations

from pathlib import Path
import shutil
import subprocess
import tempfile
import xml.etree.ElementTree as ET
import zipfile

from pypdf import PdfReader

ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "documents/templates/companies/WeRule/Medborgarskapsbevis.ott"
TEXT_NS = "urn:oasis:names:tc:opendocument:xmlns:text:1.0"
MANIFEST_NS = "urn:oasis:names:tc:opendocument:xmlns:manifest:1.0"
EXAMPLE_FIELDS = {
    "citizen_name": "RavenHamster",
    "decision_date": "2026-11-04",
    "citizenship_start_date": "2026-11-04",
    "decision_reference": "WR-MED-2026-204",
    "certificate_number": "WR-BEV-2026-204-RH",
    "issued_by": "Store W",
}


def make_filled_odt(source: Path, output: Path) -> None:
    with zipfile.ZipFile(source) as archive:
        members = {item.filename: archive.read(item.filename) for item in archive.infolist()}
        info = archive.infolist()

    content = ET.fromstring(members["content.xml"])
    seen = set()
    for field in content.iter(f"{{{TEXT_NS}}}text-input"):
        name = field.attrib.get(f"{{{TEXT_NS}}}description", "").split(" | ")[0]
        if name not in EXAMPLE_FIELDS:
            continue
        for child in list(field):
            field.remove(child)
        field.text = EXAMPLE_FIELDS[name]
        seen.add(name)
    if seen != set(EXAMPLE_FIELDS):
        raise AssertionError(f"Missing Writer inputs: {set(EXAMPLE_FIELDS) - seen}")
    members["content.xml"] = ET.tostring(content, encoding="utf-8", xml_declaration=True)
    members["mimetype"] = b"application/vnd.oasis.opendocument.text"
    manifest = ET.fromstring(members["META-INF/manifest.xml"])
    for entry in manifest.iter(f"{{{MANIFEST_NS}}}file-entry"):
        if entry.get(f"{{{MANIFEST_NS}}}full-path") == "/":
            entry.set(f"{{{MANIFEST_NS}}}media-type", "application/vnd.oasis.opendocument.text")
    members["META-INF/manifest.xml"] = ET.tostring(manifest, encoding="utf-8", xml_declaration=True)
    with zipfile.ZipFile(output, "w") as archive:
        for item in info:
            archive.writestr(item, members[item.filename])


def check_pdf(source: Path, destination: Path, label: str) -> None:
    executable = shutil.which("libreoffice") or shutil.which("soffice")
    if executable is None:
        raise RuntimeError("LibreOffice Writer is required to test actual pagination")
    output_dir = destination / "pdf"
    output_dir.mkdir(exist_ok=True)
    profile_dir = destination / ("profile_" + label)
    command = [
        executable, f"-env:UserInstallation={profile_dir.as_uri()}", "--headless",
        "--convert-to", "pdf:writer_pdf_Export", "--outdir", str(output_dir), str(source),
    ]
    result = subprocess.run(command, check=True, capture_output=True, text=True, timeout=120)
    output = output_dir / (source.stem + ".pdf")
    if not output.is_file():
        raise AssertionError(f"LibreOffice did not write PDF for {label}: {result.stdout} {result.stderr}")
    reader = PdfReader(str(output))
    if len(reader.pages) != 1:
        raise AssertionError(f"{label}: expected one A4 page, got {len(reader.pages)}")
    page = reader.pages[0]
    if not (590 < float(page.mediabox.width) < 600 and 840 < float(page.mediabox.height) < 845):
        raise AssertionError(f"{label}: incorrect paper format")
    text = page.extract_text() or ""
    required = ["Bevis om medborgarskap", "Utfärdat av", "Medborgarhandläggare"]
    if label == "filled":
        required += list(EXAMPLE_FIELDS.values())
    if missing := [value for value in required if value not in text]:
        raise AssertionError(f"{label}: missing visible text: {missing}")
    print(f"OK: {label} Writer export: one A4 page with all required fields")


def main() -> None:
    with tempfile.TemporaryDirectory(prefix="werule-ott-layout-") as dirname:
        tmp = Path(dirname)
        check_pdf(SOURCE, tmp, "blank")
        filled = tmp / "test_filled.odt"
        make_filled_odt(SOURCE, filled)
        check_pdf(filled, tmp, "filled")


if __name__ == "__main__":
    main()
