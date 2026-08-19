# AEE at ASU — chapter website

The public website for the **Association of Energy Engineers Student Chapter at Arizona State University®**.

It exists so that a student, a professor, an engineer at a utility or a prospective speaker can land on one page and understand within a minute what the chapter is, what it runs, who leads it and how to get involved.

Built with Next.js (App Router), TypeScript and Tailwind CSS. No database, no CMS, no login. All content lives in plain TypeScript files under `src/data/` that any officer can edit.

---

## Running it locally

You need [Node.js](https://nodejs.org) 20 or newer.

```bash
npm install
npm run dev
```

Then open <http://localhost:3000>.

| Command | What it does |
| --- | --- |
| `npm run dev` | Local development server with hot reload |
| `npm run build` | Production build — run this before pushing |
| `npm start` | Serve the production build locally |
| `npm run lint` | ESLint |
| `npm run typecheck` | TypeScript, without emitting files |

---

## Editing the site

Everything below is a normal text edit. Change the file, save, and the dev server updates instantly. Commit and push and the live site follows.

### Events — `src/data/events.ts`

Add an event by copying an existing block:

```ts
{
  slug: "grid-tour-2026",              // unique, lowercase, hyphens
  title: "SRP Grid Operations Tour",
  date: "2026-10-14",                  // always YYYY-MM-DD
  time: "2:00–4:00 PM",                // optional
  location: "Meet at ISTB4 lobby",
  campus: "Tempe campus",              // optional
  category: "Site Visit",
  description: "One or two plain sentences about what actually happens.",
  registrationUrl: "https://…",        // optional — adds a Register link
  status: "published",
},
```

Things worth knowing:

- **You never move events between lists.** The site compares each event's date to today and files it under Upcoming or Archive automatically. An event stays "upcoming" until the end of its own day.
- **`status: "draft"` hides an event completely.** Use it for anything not yet confirmed — it stays in the file as a note to yourself without appearing publicly.
- **Multi-day events** take an `endDate`. The date then renders as "April 18–19, 2026".
- **`featured: true`** promotes an event into the highlighted block on the homepage. Use it for one event at a time.
- **Categories** are fixed: Industry, Technical, Career, Research, Community, Site Visit, Workshop, Competition. To add another, add it to the `EventCategory` type at the top of the file.

### Photos — `scripts/selection.json`, then `src/data/gallery.ts`

The website never reads from the raw photo archive. Photos go through a small script that resizes them, strips every piece of embedded metadata (including GPS location) and writes an optimised copy into `public/images/`.

1. Unzip this semester's Drive export into `_drive_raw/` (git-ignored). The folder inside can be named anything — the script finds it. If you keep several semesters side by side, point at one explicitly:

   ```bash
   DRIVE_DIR="_drive_raw/Fall 2026" python scripts/prepare_images.py
   ```

2. Add a line to `scripts/selection.json`:

   ```json
   { "src": "Photos/IMG_1234.HEIC", "dest": "gallery/17-site-visit.jpg", "maxWidth": 1800 }
   ```

   `src` is relative to the Drive folder, so it survives the folder being renamed between semesters. Entries whose source file is not in the current export are skipped with a note — their optimised copies are already committed, so nothing breaks.

3. Run it:

   ```bash
   pip install pillow pillow-heif   # first time only
   python scripts/prepare_images.py
   ```

4. Add the photo to `src/data/gallery.ts` with its finished dimensions and **honest alt text** — describe what is in the frame for someone who cannot see it. Add `span: "wide"` to let a strong landscape image take two columns.

Keep the gallery curated. Twelve excellent photographs read far better than eighty average ones.

### Leadership — `src/data/leadership.ts`

```ts
export const officers: Officer[] = [
  { name: "Hithesh Rai Purushothama", role: "President" },
  …
];
```

`program` and `photo` are both optional and the layout is designed to look right without them. Do not add a headshot unless the person has agreed to it.

### Resources — `src/data/resources.ts`

Three lists: `chapterResources` (AEE, careers, learning), `researchResources` (finding a lab at ASU) and `howToStart` (the five-step guide). Each link takes a `title`, an `href` and an optional one-line `note`. Add the note when the destination is not obvious from its name — it is the difference between a sitemap and something useful.

### Chapter details — `src/data/site.ts`

Names, the social and joining links, the contact email and the top navigation. **Update `url` here** when the site gets its permanent address — canonical links, the sitemap and social previews all read from it.

### The six focus areas — `src/data/focusAreas.ts`

The numbered list on the homepage. Keep it at six; it is a piece of layout, not a taxonomy.

---

## How it is put together

```text
src/
  app/            one folder per page (about, events, research, gallery, join)
  components/     reusable pieces — header, footer, event row, gallery grid…
  data/           ← all editable content lives here
  lib/            date formatting and the upcoming/past event logic
  styles/         design tokens and base styles
public/images/    optimised, metadata-stripped web copies of photos and brand assets
scripts/          image and brand asset preparation
docs/             deployment notes
```

Pages are static: every route is pre-rendered at build time, so the site is fast and there is nothing to keep running.

### Design notes for whoever inherits this

- **Colour.** ASU maroon (`#8C1D40`) carries the identity and gold (`#FFC627`) is used only as an accent on dark surfaces — never as text on white, where it fails contrast. Everything else is ink, paper and hairline rules.
- **Type.** Newsreader for display statements, Inter for interface and body, IBM Plex Mono for labels and numbering. Three faces, used consistently.
- **Motion** is limited to a short fade-and-lift on scroll, and it turns itself off entirely for anyone with reduced-motion enabled.
- **Accessibility** is part of the design, not a later pass: semantic landmarks, one `<h1>` per page with no skipped levels, visible focus rings, a skip link, a keyboard-operable mobile menu and lightbox, and AA contrast throughout.

---

## Deploying

See [`DEPLOY.md`](./DEPLOY.md).

---

## What is deliberately not in this repository

The raw Google Drive archive — 2 GB of photographs, videos and chapter admin spreadsheets — is **not committed**, and `.gitignore` is set up to keep it that way. Only the finished, optimised images the site actually serves are tracked.

[`CONTENT_INVENTORY.md`](./CONTENT_INVENTORY.md) records what was in that archive, which files were selected, and the open questions an officer still needs to answer.
