# Content inventory

What was found in the chapter's Google Drive archive, what was used on the website, and what still needs a decision from an officer.

Source archive: `AEE Student Club -20260819T074531Z-1-001.zip` (2.0 GB, 488 files)
Working copy: `_drive_raw/` — **git-ignored, never committed.** The original zip is untouched.

---

## 1. Summary of the archive

| Folder | Contents |
| --- | --- |
| `Photos/` | 448 files — 354 stills, 85 videos, 33 camera raw (DNG) |
| `insta post/` | 15 files, a hand-picked subset already used on Instagram (duplicates of `Photos/`) |
| `Presentations/` | 3 decks — chapter overview, hackathon deck, sponsor deck |
| `Problem Statements/` | 6 hackathon challenge documents |
| `LOGOs/` | 1 file — an ASU energy faculty/labs list (misfiled; no logos in here) |
| root | 15 spreadsheets and documents — registrations, judges, sponsors, scoring, budgeting |

**Every photograph in the archive is from 18–19 April 2026** (confirmed from EXIF capture timestamps). All of it is the ASU Energy Hackathon. There is no photography of tabling, the Spring 2026 speaker series, or any other chapter activity.

Videos (1.5 GB, 85 files) were not used and are not in the repository.

---

## 2. Photograph selection

354 stills → 135 unique frames after perceptual-hash de-duplication (iPhone burst sequences collapsed) → **21 published images**.

Selection criteria: sharp, well composed, people visibly doing something, no near-duplicates, no accidental frames, no private/social settings.

Processing applied to every published image (`scripts/prepare_images.py`):
- EXIF rotation baked in, then **all EXIF/GPS/ICC/XMP metadata stripped**
- resized to a sensible maximum width
- re-encoded as progressive JPEG, quality 82

| Source file | Website use | Destination |
| --- | --- | --- |
| `Photos/IMG_9741.HEIC` | Homepage hero | `public/images/hero/hero-workroom.jpg` |
| `Photos/IMG_3398.HEIC` | Homepage full-bleed break | `public/images/hero/courtyard-lunch.jpg` |
| `Photos/DFCD2144-…_1_105_c.jpeg` | Featured event, homepage | `public/images/events/hackathon-2026-group.jpg` |
| `Photos/IMG_9771.HEIC` | Event archive imagery | `public/images/events/hackathon-2026-awards.jpg` |
| `Photos/5ef534fc-…jpg` | Event archive imagery | `public/images/events/hackathon-2026-demo.jpg` |
| `Photos/IMG_9731.HEIC` | Gallery | `public/images/gallery/01-teams-working.jpg` |
| `Photos/IMG_9738.HEIC` | Gallery + Events page break | `public/images/gallery/02-mentor-review.jpg` |
| `Photos/IMG_9744.HEIC` | Gallery + About page break | `public/images/gallery/03-team-table.jpg` |
| `Photos/_DSC7439.JPG` | Gallery | `public/images/gallery/04-opening-session.jpg` |
| `Photos/8FA75E40-…_1_105_c.jpeg` | Gallery | `public/images/gallery/05-organizers.jpg` |
| `Photos/IMG_9745.HEIC` | Gallery | `public/images/gallery/06-judges.jpg` |
| `Photos/IMG_9763.HEIC` | Gallery | `public/images/gallery/07-award-hardware.jpg` |
| `Photos/IMG_9777.HEIC` | Gallery | `public/images/gallery/08-award-group.jpg` |
| `Photos/IMG_4012.JPEG` | Gallery | `public/images/gallery/09-certificate.jpg` |
| `Photos/IMG_9829.HEIC` | Gallery | `public/images/gallery/10-award-software.jpg` |
| `Photos/5bbed7ae-…JPG` | Gallery | `public/images/gallery/11-team-laptops.jpg` |
| `Photos/6430584a-…JPG` | Gallery | `public/images/gallery/12-demo-laptop.jpg` |
| `Photos/8867ec0a-…JPG` | Gallery | `public/images/gallery/13-hardware-parts.jpg` |
| `Photos/fe4a9a0c-…JPG` | Gallery | `public/images/gallery/14-solar-prototype.jpg` |
| `Photos/f2385a9c-…JPG` | Gallery | `public/images/gallery/15-discussion.jpg` |
| `Photos/151b7101-…jpg` | Gallery + Join page break | `public/images/gallery/16-huddle.jpg` |

The full mapping is machine-readable in `scripts/selection.json`.

### Deliberately excluded

- **All videos** — 1.5 GB, no current use on the site.
- **DNG raw files** — no browser use; JPEG siblings exist for all of them.
- **Social/after-party photographs** (e.g. a bar/pool-table frame with drinks visible) — not appropriate for a public student-organization page.
- **Screenshots and admin captures** — `Test 1.png`, `Test 2.png` (unrelated chat screenshots), `Form .png`, `Club re register .png` (contains internal registration data).
- The best whole-room group photograph exists **only at 1024 × 768** — it was shared through a compression step before it reached the Drive. It is used at a contained size on the homepage rather than as the hero for that reason. **If anyone still has the original, it would be a meaningful upgrade.**

---

## 3. Brand assets

| Source file | Use | Destination |
| --- | --- | --- |
| `AEE_ASU_Student_Chapter_Lockup_ASU_Registered.png` | Header, footer, social image | `public/images/brand/aee-asu-lockup.png` |
| `AEE_Logo.jpg` (mark only) | Favicon / app icon | `src/app/icon.png`, `src/app/apple-icon.png` |
| `AEE_ASU_Student_Chapter_logo.png` | Not used — same lockup without the ® | — |

The artwork is **never recoloured or redrawn**. The only change is the flat white background being made transparent and the surrounding whitespace trimmed (`scripts/prepare_brand.py`). On dark sections the lockup sits on its own white plate rather than being knocked out to white.

No ASU university logo or sunburst is used anywhere on the site.

---

## 4. Copy sources

Everything factual on the site traces to a document in the archive:

| Claim on the site | Source |
| --- | --- |
| Chapter purpose and mission | `AEE_ASU_2026_2027_Constitution_Merged.docx`, Art. I §3; `Club re register .png` (registered Sun Devil Central mission text) |
| Membership terms, dues, associate members | Constitution, Art. III |
| AEE founded 1977, 20,000+ members, 100+ countries, CEM/CEA | `Presentations/AEE Student Club.pptx`, slides 1–2 |
| Hackathon date, venue, format, four tracks | `ASU_Energy_Hackathon_Planning_Document.docx` |
| Partner clubs: IEEE, ASME, Robotics | Same planning document, header |
| Officers and advisor | Provided directly, corroborated by `Club re register .png` |
| Fall 2026 events | Provided directly |

---

## 5. Open items for an officer

1. **Spring 2026 speaker series.** The chapter deck lists six sessions between 4 February and 1 April 2026 (introduction session, Arizona energy startups, battery startups, microgrids + LEAPS visit, energy-efficiency training, grid cybersecurity), each with named speakers. That deck is a *plan*, and no photographs or notes confirm which sessions ran. They are in `src/data/events.ts` as `draftEvents` and **do not appear on the site**. Confirm which happened, move them into the `events` array with `status: "published"`, and add speaker names only where the speaker is happy to be named.

2. **Sponsors and supporters.** The planning document lists OpenVPP, Collide.io, Phoenix Contact, Lovable, Kemabonta Ventures, Grid8 and ASU Venture Devils as confirmed hackathon sponsors, and names APS and BKPK as track challenge providers. **None of this is currently published** — describing an organisation as a sponsor or partner on a public page deserves a second check first. Decide whether to add a supporters line to the hackathon entry.

3. **Winning teams.** The chapter context document names Team Ruby (APS AI for Energy), tll;dr (Collide AI for Energy) and GridSense (Software for Energy) as winners. Not published — worth confirming spellings and that the students are happy to be named.

4. **Photograph consent.** Every published photograph was taken at a large open event on campus, and several show identifiable faces at close range. This is normal for a student organisation, but the Gallery page carries a takedown note pointing at the contact page. If the chapter has a photo-release policy, this is the place to apply it.

5. **Officer photographs and programs.** Leadership is typographic only — no headshots and no degree programs, because neither was verified. Add them in `src/data/leadership.ts` when available.

6. **Domain.** `src/data/site.ts` currently sets `url: "https://aeeasu.org"` as a placeholder. Canonical URLs, the sitemap and social previews all read from it — update it once the real address exists.

7. **Chapter email.** `aeeasustudentchapter@gmail.com` is published on the Events, Join and footer areas, as supplied. The only address found in the archive itself was the founding president's personal ASU address, which is deliberately not published.

8. **Channels published.** Sun Devil Central, Instagram, Discord, LinkedIn and the chapter email. All were supplied directly rather than found in the archive.
