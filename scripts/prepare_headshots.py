"""
Build square, metadata-free officer portraits for the About page.

Headshots arrive one at a time and from anywhere — a phone, an ASU profile
page, a LinkedIn export — so unlike prepare_images.py this script takes an
explicit list of source files rather than reading a Drive export.

Each entry names a source, a destination and either a focal point or an
explicit crop box. The focal point is where the face sits in the frame as a
fraction of width and height, because a plain centre crop beheads anyone
photographed off-centre or standing tall in a landscape photo. A box is for
sources that need an exact rectangle — an avatar with a circular white mask,
for instance, where the only clean square is well off centre.

Every portrait is then converted to the site's two-tone monochrome. The sources
arrive from anywhere — a studio, a garden, an office — and side by side those
backgrounds fight each other and the page. One tonal treatment makes four
unrelated photographs read as one set, and it alters nobody's face.

Sources are never modified and never committed; only the square output under
public/images/officers/ is tracked.

Setup (first time):
    pip install pillow

Run:
    python scripts/prepare_headshots.py
"""
import os

from PIL import Image, ImageOps

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(ROOT, "public", "images", "officers")

#: Longest edge of a finished portrait. They are shown small, so this is
#: generous enough for a 2x display without carrying a large file. Sources
#: smaller than this are left at their own size rather than upscaled.
SIZE = 640

#: Duotone endpoints, matching --color-ink and --color-bone in globals.css.
SHADOW = (0x1a, 0x1a, 0x1c)
HIGHLIGHT = (0xf4, 0xf2, 0xef)

#: src is relative to the repository root. focus is (x, y) as a fraction of the
#: source, marking roughly the centre of the head; box is (left, top, side) in
#: source pixels. Crops are chosen so the head fills a similar share of every
#: frame — matching head scale does more for a uniform row than matching size.
PORTRAITS = [
    {
        # Cropped in tight: the source is a full-length photo in a garden, and
        # at this size the planting behind him competes with the face.
        "src": "_drive_raw/Tabling 19/WhatsApp Image 2026-08-19 at 23.05.42.jpeg",
        "dest": "akash-jay-makhija.jpg",
        "box": (95, 40, 260),
    },
    {
        # A 16:9 profile photo, so the head sits small and high in the frame.
        "src": "hithesh-purushothama-ambassador-1920x1080-1-1024x576.jpeg",
        "dest": "hithesh-rai-purushothama.jpg",
        "box": (297, 52, 430),
    },
    {
        "src": "1703047682656.jpg",
        "dest": "nick-rolston.jpg",
        "focus": (0.50, 0.45),
    },
    {
        # Screenshot of a circular avatar: the white mask cuts the corners, so
        # this is the largest square inside it that contains no mask at all.
        "src": "Rdura.png",
        "dest": "rudra-patel.jpg",
        "box": (70, 44, 140),
    },
]


def square(im: Image.Image, focus: tuple[float, float]) -> Image.Image:
    """Largest square crop that keeps the focal point centred where it can."""
    side = min(im.width, im.height)
    fx, fy = focus

    left = round(im.width * fx - side / 2)
    top = round(im.height * fy - side / 2)
    # Keep the crop inside the frame; a focal point near an edge slides back in.
    left = max(0, min(left, im.width - side))
    top = max(0, min(top, im.height - side))

    return im.crop((left, top, left + side, top + side))


def monochrome(im: Image.Image) -> Image.Image:
    """The site's two-tone treatment, so four unrelated photos match."""
    gray = ImageOps.grayscale(im)
    # Normalise the tonal range first, or a bright studio shot and a dim office
    # one stay obviously different even in monochrome.
    gray = ImageOps.autocontrast(gray, cutoff=1)
    return ImageOps.colorize(gray, black=SHADOW, white=HIGHLIGHT)


def process(entry: dict) -> None:
    src = os.path.join(ROOT, entry["src"])
    if not os.path.exists(src):
        print(f"  skipped, source not found: {entry['src']}")
        return

    im = ImageOps.exif_transpose(Image.open(src)).convert("RGB")
    if "box" in entry:
        left, top, side = entry["box"]
        im = im.crop((left, top, left + side, top + side))
    else:
        im = square(im, entry["focus"])

    if im.width > SIZE:
        im = im.resize((SIZE, SIZE), Image.LANCZOS)
    im = monochrome(im)

    # A fresh canvas carries none of the original's info dictionary, so every
    # EXIF/GPS/ICC/XMP block is left behind.
    clean = Image.new("RGB", im.size)
    clean.paste(im)

    os.makedirs(OUT, exist_ok=True)
    dest = os.path.join(OUT, entry["dest"])
    clean.save(dest, "JPEG", quality=84, optimize=True, progressive=True)
    print(f"  {entry['dest']:32s} {clean.width}x{clean.height}  {os.path.getsize(dest) // 1024} KB")


def main() -> None:
    print(f"writing to {os.path.relpath(OUT, ROOT)}")
    for entry in PORTRAITS:
        process(entry)


if __name__ == "__main__":
    main()
