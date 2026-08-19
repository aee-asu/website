"""
Build web copies of the approved chapter brand assets.

The logo artwork itself is never redrawn or recoloured - the only change is
turning the flat white background into transparency and trimming whitespace,
so the mark can sit on light and dark surfaces without a white box.

Run:  python scripts/prepare_brand.py
"""
import os

from PIL import Image

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(ROOT, "public", "images", "brand")
APP = os.path.join(ROOT, "src", "app")


def to_transparent(path: str) -> Image.Image:
    im = Image.open(path).convert("RGBA")
    px = im.load()
    assert px is not None
    for y in range(im.height):
        for x in range(im.width):
            r, g, b, _ = px[x, y]
            if r > 238 and g > 238 and b > 238:
                px[x, y] = (r, g, b, 0)
    return im.crop(im.getbbox() or (0, 0, im.width, im.height))


def save(im: Image.Image, name: str, width: int) -> None:
    os.makedirs(OUT, exist_ok=True)
    out = im.copy()
    out.thumbnail((width, width * 4), Image.LANCZOS)
    out.save(os.path.join(OUT, name), "PNG", optimize=True)
    print(f"{name:28s} {out.width}x{out.height}")


if __name__ == "__main__":
    lockup = to_transparent(os.path.join(ROOT, "AEE_ASU_Student_Chapter_Lockup_ASU_Registered.png"))
    save(lockup, "aee-asu-lockup.png", 1200)

    # square app icon: the AEE mark, centred on white with padding
    mark = to_transparent(os.path.join(ROOT, "AEE_Logo.jpg"))
    mark = mark.crop((0, 0, mark.width, int(mark.height * 0.74)))  # drop the wordmark line
    mark = mark.crop(mark.getbbox() or (0, 0, mark.width, mark.height))
    size, pad = 512, 56
    mark.thumbnail((size - pad * 2, size - pad * 2), Image.LANCZOS)
    icon = Image.new("RGBA", (size, size), (255, 255, 255, 255))
    icon.alpha_composite(mark, ((size - mark.width) // 2, (size - mark.height) // 2))
    icon.save(os.path.join(APP, "icon.png"), "PNG", optimize=True)
    icon.save(os.path.join(APP, "apple-icon.png"), "PNG", optimize=True)
    save(mark, "aee-mark.png", 512)
    print("icon.png / apple-icon.png  512x512")
