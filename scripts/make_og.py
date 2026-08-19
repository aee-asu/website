"""
Build the 1200x630 social preview image.

Composites a real chapter photograph, a dark scrim and the approved chapter
lockup. Re-run after changing the headline or the source photograph.

Fonts are read from a local path so the script does not depend on the network;
point FONT_DIR at any directory holding Inter.ttf and Newsreader.ttf.
"""
import os

from PIL import Image, ImageDraw, ImageFont

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
FONT_DIR = os.environ.get("FONT_DIR", os.path.join(ROOT, "scripts", "fonts"))
W, H = 1200, 630

photo = Image.open(os.path.join(ROOT, "public", "images", "hero", "hero-workroom.jpg")).convert("RGB")
scale = max(W / photo.width, H / photo.height)
photo = photo.resize((round(photo.width * scale), round(photo.height * scale)), Image.LANCZOS)
left = (photo.width - W) // 2
photo = photo.crop((left, 0, left + W, H))

# Dark scrim, heavier at the bottom where the type sits.
scrim = Image.new("L", (1, H))
for y in range(H):
    scrim.putpixel((0, y), int(150 + 95 * (y / H) ** 1.5))
overlay = Image.new("RGB", (W, H), (11, 11, 12))
canvas = Image.composite(overlay, photo, scrim.resize((W, H)))

draw = ImageDraw.Draw(canvas)
serif = ImageFont.truetype(os.path.join(FONT_DIR, "Newsreader.ttf"), 68)
sans = ImageFont.truetype(os.path.join(FONT_DIR, "Inter.ttf"), 25)

# Chapter lockup on its own white plate — the mark is never recoloured.
lockup = Image.open(os.path.join(ROOT, "public", "images", "brand", "aee-asu-lockup.png")).convert("RGBA")
lockup.thumbnail((330, 330), Image.LANCZOS)
plate = Image.new("RGBA", (lockup.width + 56, lockup.height + 44), (255, 255, 255, 255))
plate.alpha_composite(lockup, (28, 22))
canvas.paste(plate.convert("RGB"), (72, 68))

draw.text((72, 372), "Energy is changing.", font=serif, fill=(255, 255, 255))
draw.text((72, 446), "Come understand what comes next.", font=serif, fill=(255, 198, 39))
draw.text(
    (72, 548),
    "Association of Energy Engineers Student Chapter at Arizona State University",
    font=sans,
    fill=(217, 214, 209),
)

out = os.path.join(ROOT, "public", "images", "og", "og-default.jpg")
os.makedirs(os.path.dirname(out), exist_ok=True)
canvas.save(out, "JPEG", quality=88, optimize=True, progressive=True)
print(out, os.path.getsize(out) // 1024, "KB")
