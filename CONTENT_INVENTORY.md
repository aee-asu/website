# Content inventory

## Launch-readiness content — 6 October 2026

Added a Solar Fab Field Note using the existing event record and three existing chapter photographs. Specific source mapping and limits are in `docs/launch-readiness-2026-10-06.md`. Its three observations are bounded to the recorded fabrication theme and visible samples, equipment and attire; no new process identification, numerical claim, quote or attendee testimony was added. Deeper technical takeaways await organizer input.

LEAPS and mixer logistics remain unconfirmed. The user said they will supply them soon. Pending details are explicit in event listings; do not infer attendance requirements or exact meeting locations from general lab information.

## Speaker name correction — 6 October 2026

Corrected the Applied Materials event speaker and description from “Rony Mathews” to **Rony David Mathew**, supplied by the user and corroborated by his [public professional profile](https://in.linkedin.com/in/rony-david-mathew-) and an indexed [AEE chapter announcement](https://www.linkedin.com/posts/association-of-energy-engineers-aee-at-asu_aeeasu-appliedmaterials-semiconductors-activity-7505768737439023105-WGLY). The announcement corroborates the name and affiliation; it has not been established as the same September event, so no date, role or session-content changes were inferred from it.

What was found in the chapter's Google Drive archive, what was used on the website, and what still needs a decision from an officer.

## Implementation reconciliation — 5 October 2026

The historical open-items section below predates newer commits. Current code is the implementation record:

- `src/app/hackathon/page.tsx` publishes sponsor names and records chapter confirmation for public listing in August 2026. Its current sponsor list is OpenVPP, BKPK, Collide.io, Lovable, SRP and eSeed Challenge (Prescott Student Venture Fund). The older statement below that no sponsors are published is stale. No new sponsor claim or logo was added during this audit.
- `src/data/leadership.ts` now includes the treasurer's portrait. The older “no portrait yet” note is stale; this audit did not independently renew photo consent.
- September solar-fab and Applied Materials event photographs are now also rendered in past-event rows. Existing files and alt text are reused. Speaker and organization fields are extracted from descriptions already published; no learning outcomes or attendance numbers were invented.
- The user will provide RSVP URLs later for the October calendar. Until supplied, listings explicitly say RSVP details have not been posted and link to an attendance inquiry. Exact LEAPS arrival/transport/preparation details and learning goals remain unknown.
- The data-center headline now preserves the published 6.7–12% forecast range for 2028 rather than displaying only its upper bound. Source: the linked Berkeley Lab article, checked 5 October 2026. Coal copy no longer claims a fuel disappeared while displaying an 8% share.

See `docs/launch-audit-2026-10-05.md` for the review, roadmap and validation scope. Historical source notes below are retained rather than treated as fresh verification.

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

**Every photograph in the original archive is from 18–19 April 2026** (confirmed from EXIF capture timestamps). All of it is the ASU Energy Hackathon. There was no photography of tabling, the Spring 2026 speaker series, or any other chapter activity.

A second, much smaller export followed on 19 August 2026 — `_drive_raw/Tabling 19/`, three frames from the chapter's table at Taste of the MU. Two are published: one in the gallery, one on the event itself. They are the first images on the site that are not the hackathon.

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
| `Photos/IMG_9738.HEIC` | Gallery + Events page break | `public/images/gallery/02-judge-review.jpg` |
| `Photos/IMG_9744.HEIC` | Gallery + About page break | `public/images/gallery/03-team-table.jpg` |
| `Photos/_DSC7439.JPG` | Gallery | `public/images/gallery/04-opening-session.jpg` |
| `Photos/8FA75E40-…_1_105_c.jpeg` | Gallery | `public/images/gallery/05-challenge-team.jpg` |
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

Fall 2026 events, from two zips supplied by the president (`AEE Solar Fab tour.zip`, 111 photos, and `AEE X AMAT Talk.zip`, 10 photos), unpacked to `_drive_raw/Fall 2026 Events/`. The four `good_*` files in the Solar Fab zip were already marked as picks.

| Source file | Website use | Destination |
| --- | --- | --- |
| `AEE Solar Fab tour/Image (94).jpg` | Event image | `public/images/events/solar-fab-tour-2026.jpg` |
| `AEE X AMAT Talk/Photo Sep 19 2026, 11 55 22.jpg` | Event image | `public/images/events/applied-materials-2026.jpg` |
| `AEE Solar Fab tour/Image (93).jpg` | Gallery | `public/images/gallery/18-solar-fab-group.jpg` |
| `AEE Solar Fab tour/good_1.heic` | Gallery | `public/images/gallery/19-solar-fab-sample.jpg` |
| `AEE Solar Fab tour/good_3.heic` | Gallery | `public/images/gallery/20-solar-fab-cleanroom.jpg` |
| `AEE Solar Fab tour/good_4.JPG` | Gallery | `public/images/gallery/21-solar-fab-briefing.jpg` |
| `AEE X AMAT Talk/Photo Sep 19 2026, 11 13 13.jpg` | Gallery | `public/images/gallery/22-applied-materials-talk.jpg` |
| `AEE X AMAT Talk/Photo Sep 19 2026, 11 13 03.jpg` | Gallery | `public/images/gallery/23-applied-materials-audience.jpg` |

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
| Spring 2026 sessions — dates, times, rooms, speakers | Screenshots of the chapter's Instagram (@aee_asu) posts, supplied by the president |

---

## 5. Open items for an officer

1. **Spring 2026 speaker series.** Mostly resolved. The president supplied screenshots of the chapter's own Instagram (@aee_asu) posts, which corroborate date, time, room and speaker for six sessions — four of the deck's six, plus three events the deck never listed (a founders/CEOs discussion on 4 March, a data-centres session on 25 March, and a project life cycle talk on 16 April). Those are now in the `events` array as published. Corrections the posts forced: battery startups was **19 February, not 18**, and the LEAPS visit was at the **Polytechnic** campus, not Tempe.

   Still `draftEvents`, because no post covers them: the **4 February introduction session** and the **1 April grid cybersecurity** session.

   Every speaker is named. Serhii Kaminsky (SorbiForce), Manas Pathak (Grid8, EarthEn), Wayne Dobberpuhl (Nexus Integrated Solutions) and Tino Rosas were named and pictured by the chapter in its own public posts. Kris Saunders (Power48), Victor Atlasman (WattEV) and Vladimir Abdelnour — the PhD student and then chapter president who led the data-centres session — appear on the president's direct confirmation, since the 11 February graphic gave surnames only and the Instagram caption alone was not taken as consent to a permanent credit.

2. **Sponsors and supporters.** The `/hackathon` page deliberately names none of them. The planning document lists OpenVPP, Collide.io, Phoenix Contact, Lovable, Kemabonta Ventures, Grid8 and ASU Venture Devils as confirmed hackathon sponsors, and names APS and BKPK as track challenge providers. **None of this is currently published** — describing an organisation as a sponsor or partner on a public page deserves a second check first. Decide whether to add a supporters line to the hackathon entry.

3. **Winning teams.** The chapter context document names Team Ruby (APS AI for Energy), tll;dr (Collide AI for Energy) and GridSense (Software for Energy) as winners. Not published — worth confirming spellings and that the students are happy to be named.

   Three gallery photographs **do** show winning teams, and their alt text now says so (`08-award-group`, `09-certificate`, `10-award-software`). No team or individual is named. `05-challenge-team` shows the team from one of the challenge-setting companies — identified by the president as Collide.io, and deliberately not named on the site while the sponsor question is open.

4. **Photograph consent.** Every published photograph was taken at a large open event on campus, and several show identifiable faces at close range. This is normal for a student organisation, but the Gallery page carries a takedown note pointing at the contact page. If the chapter has a photo-release policy, this is the place to apply it.

5. **Officer photographs.** Degree programs are published (source: the officers' ASU iSearch directory entries, supplied by the president). Portraits for the president, vice president and advisor were supplied by the president and processed by `scripts/prepare_headshots.py` into square, metadata-free copies under `public/images/officers/`. **The treasurer has no portrait yet** — that row falls back to initials, which is a supported state, not a bug. Officers' personal ASU email addresses and their unrelated lab/employment titles are deliberately **not** published; the chapter address is the public contact.

   Worth confirming: each officer and the advisor is happy with the specific photograph used, since two came from other profiles rather than from the person directly.

6. **Domain.** Resolved — `src/data/site.ts` sets `url: "https://www.aeeasu.com"`, the live address. Canonical URLs, the sitemap and social previews all read from it, and it is baked in at build time, so any future change needs a redeploy.

7. **Chapter email.** `aeeasustudentchapter@gmail.com` is published on the Events, Join and footer areas, as supplied. The only address found in the archive itself was the founding president's personal ASU address, which is deliberately not published.

8. **Channels published.** Sun Devil Central, Instagram, Discord, LinkedIn and the chapter email. All were supplied directly rather than found in the archive.
