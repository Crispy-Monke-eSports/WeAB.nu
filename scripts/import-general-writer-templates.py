#!/usr/bin/env python3
"""Import ONLY the ten general Writer templates from the WeAB v2.3 ZIP.

Copies each .ott byte-for-byte, validates its SHA-256 and never imports examples,
PDFs, or company-specific templates.
"""
from __future__ import annotations

import argparse
import hashlib
import io
from pathlib import Path
import sys
import zipfile

SOURCE_DIR = "01_Generella_mallar_OTT"
TARGET_DIR = Path(__file__).resolve().parents[1] / "documents" / "templates" / "general"

FILES = {
    "WeAB": ("01_WeAB_Generell_v2.3.ott", "0eac0eab526681d90654af628b97c235a0aabdf51aa08b03da94f00b69c86244"),
    "WeRule": ("02_WeRule_Generell_v2.3.ott", "5e7fe6a919aafffaa7a8483fb2b01e8b32726d8549d610946b0a07ca01e7d223"),
    "WeTravel": ("03_WeTravel_Generell_v2.3.ott", "0540e77cbf33efc29f77b54fb4d04c4c1cd803c386c6511d376a125497538091"),
    "WeTrade": ("04_WeTrade_Generell_v2.3.ott", "8ee6c1c6d1ede28997238af151e3cd44691bc238b2f878690d523d9ac6c6d4b9"),
    "WeLove": ("05_WeLove_Generell_v2.3.ott", "df28f95d8a413df8b2cd14d50a5a8a7af88067cf1d1122216f5ac58c81409678"),
    "WeKill": ("06_WeKill_Generell_v2.3.ott", "5fc3dc8ad976fe8f203860d1fff469bbc4532a154ed641e3468a7f65d9b7d5da"),
    "WeSort": ("07_WeSort_Generell_v2.3.ott", "3f9f4de47407cce2fd1221d9edb96a2fc71dbc9d83e03ff25b08a1c1b2a23f66"),
    "WeGamble": ("08_WeGamble_Generell_v2.3.ott", "42708c47080c26c90f9b7e9701ee7f3779e353932d60138e690687a9ac63b0e4"),
    "WeBox": ("09_WeBox_Generell_v2.3.ott", "f666ad6b43ea18ec46b7b82c02709b848015bf5fcfffbc8876397cc21ccc276f"),
    "WeLiveLaughLove": ("10_WeLiveLaughLove_Generell_v2.3.ott", "05b3d6ef38a7d8ea9ae569f53fc1467ef35f6853a81cc04bec62c460fee32e53"),
}


def verify(company: str, data: bytes, expected_sha256: str) -> None:
    digest = hashlib.sha256(data).hexdigest()
    if digest != expected_sha256:
        raise ValueError(f"{company}: SHA-256 mismatch: {digest}")
    if not zipfile.is_zipfile(io.BytesIO(data)):
        raise ValueError(f"{company}: not a valid ODF ZIP package")
    with zipfile.ZipFile(io.BytesIO(data)) as document:
        required = {"mimetype", "content.xml", "META-INF/manifest.xml"}
        missing = required - set(document.namelist())
        if missing:
            raise ValueError(f"{company}: missing ODF entries: {sorted(missing)}")
        mimetype = document.read("mimetype")
        if mimetype != b"application/vnd.oasis.opendocument.text-template":
            raise ValueError(f"{company}: unexpected ODF mimetype: {mimetype!r}")
        corrupt_member = document.testzip()
        if corrupt_member is not None:
            raise ValueError(f"{company}: corrupt ODF member: {corrupt_member}")


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("archive", nargs="?", type=Path, help="Original v2.3 ZIP archive")
    parser.add_argument("--check", action="store_true", help="Only validate already imported files")
    args = parser.parse_args()
    if not args.check and args.archive is None:
        parser.error("Provide the v2.3 ZIP archive, or use --check")
    if args.check:
        if not TARGET_DIR.is_dir():
            raise FileNotFoundError(f"Missing directory: {TARGET_DIR}")
        expected = {company + ".ott" for company in FILES}
        actual = {item.name for item in TARGET_DIR.iterdir() if item.name != "README.md"}
        if actual != expected:
            raise ValueError(
                f"Expected exactly ten general templates; "
                f"missing={sorted(expected - actual)}, extra={sorted(actual - expected)}"
            )
        for company, (_, checksum) in FILES.items():
            path = TARGET_DIR / (company + ".ott")
            if not path.is_file():
                raise FileNotFoundError(f"Missing: {path}")
            verify(company, path.read_bytes(), checksum)
            print(f"OK {path.relative_to(TARGET_DIR.parent.parent.parent)}")
        return 0

    with zipfile.ZipFile(args.archive) as source:
        names = {
            name for name in source.namelist()
            if name.startswith(SOURCE_DIR + "/") and name.endswith(".ott")
        }
        expected = {f"{SOURCE_DIR}/{filename}" for filename, _ in FILES.values()}
        if names != expected:
            raise ValueError(f"Expected exactly 10 general templates; missing={expected - names}, extra={names - expected}")
        verified: dict[str, bytes] = {}
        for company, (filename, checksum) in FILES.items():
            data = source.read(f"{SOURCE_DIR}/{filename}")
            verify(company, data, checksum)
            verified[company] = data

    TARGET_DIR.mkdir(parents=True, exist_ok=True)
    for company, data in verified.items():
        path = TARGET_DIR / f"{company}.ott"
        path.write_bytes(data)
        print(f"Imported: {path.name} ({len(data)} bytes)")
    print("Imported exactly 10 general templates; no specialized templates or examples.")
    return 0


if __name__ == "__main__":
    try:
        sys.exit(main())
    except (OSError, ValueError, zipfile.BadZipFile) as error:
        print(f"ERROR: {error}", file=sys.stderr)
        sys.exit(1)
