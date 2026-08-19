"""
Build optimized web copies of the selected chapter photos.

Reads originals from a local export of the chapter Google Drive, applies EXIF
rotation, strips all metadata, resizes, and writes progressive JPEGs into
public/images/. Originals are never modified.

Where it looks for the originals, in order:
  1. the DRIVE_DIR environment variable, if set
  2. the single folder inside _drive_raw/ (the usual case — unzip the Drive
     export in there and the folder can be named anything)
  3. _drive_raw/ itself

Paths in scripts/selection.json are relative to that folder, so a renamed
Drive folder needs no change here.

Setup (first time):
    pip install pillow pillow-heif

Run:
    python scripts/prepare_images.py
"""
import json
import os
import sys

from PIL import Image, ImageOps
import pillow_heif

pillow_heif.register_heif_opener()

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
RAW = os.path.join(ROOT, "_drive_raw")
OUT = os.path.join(ROOT, "public", "images")
SELECTION_FILE = os.path.join(ROOT, "scripts", "selection.json")


def find_source() -> str:
    """Locate this semester's Drive export, whatever it happens to be called."""
    from_env = os.environ.get("DRIVE_DIR")
    if from_env:
        return from_env

    if os.path.isdir(RAW):
        # scandir rather than isdir(join(...)): Google Drive folder names often
        # end in a space, and Windows silently strips a trailing space from the
        # end of a path, so isdir() on such a folder answers False.
        folders = sorted(
            entry.path for entry in os.scandir(RAW) if entry.is_dir()
        )
        if len(folders) == 1:
            return folders[0]
        if len(folders) > 1:
            sys.exit(
                "Found several folders in _drive_raw/:\n  "
                + "\n  ".join(os.path.basename(f) for f in folders)
                + "\nSet DRIVE_DIR to the one you mean, e.g.\n"
                '  DRIVE_DIR="_drive_raw/Fall 2026" python scripts/prepare_images.py'
            )
    return RAW


def process(source: str, src_rel: str, dest_rel: str, max_w: int) -> None:
    src = os.path.join(source, src_rel)
    dest = os.path.join(OUT, dest_rel)
    os.makedirs(os.path.dirname(dest), exist_ok=True)

    im = ImageOps.exif_transpose(Image.open(src)).convert("RGB")
    if im.width > max_w:
        h = round(im.height * max_w / im.width)
        im = im.resize((max_w, h), Image.LANCZOS)

    # Pasting into a fresh image drops every EXIF/GPS/ICC/XMP block, since the
    # new image carries none of the original's `info` dictionary.
    clean = Image.new("RGB", im.size)
    clean.paste(im)
    clean.save(dest, "JPEG", quality=82, optimize=True, progressive=True)

    print(f"{dest_rel:44s} {clean.width}x{clean.height}  {os.path.getsize(dest) // 1024} KB")


def main() -> None:
    source = find_source()
    print(f"source: {source}\n")

    selection = json.load(open(SELECTION_FILE, encoding="utf8"))
    missing = []
    for item in selection:
        if not os.path.exists(os.path.join(source, item["src"])):
            missing.append(item["src"])
            continue
        process(source, item["src"], item["dest"], item["maxWidth"])

    if missing:
        print(f"\nSkipped {len(missing)} file(s) not found under the source folder:")
        for name in missing:
            print(f"  {name}")
        print(
            "\nThese are from an earlier Drive export. Their optimized copies are\n"
            "already committed in public/images/, so the site is unaffected."
        )


if __name__ == "__main__":
    main()
