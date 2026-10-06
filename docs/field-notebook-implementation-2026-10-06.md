# Field Notebook implementation — 6 October 2026

Implemented the approved direction on `/` and `/events` only. Existing fonts, colors, photography, event facts and routes are retained. No dependencies added. No commit, push or deployment.

## Changes

- Home: compact chapter introduction and three-part positioning; early next event; contextual solar-fab photograph; two recent event records; a selected event without duplication; condensed technical focus areas; all nine sourced statistics in a native disclosure; compact participation links.
- Events: practical upcoming briefs followed by photographic past-event records grouped by semester. Date, time and location precede descriptions. Missing RSVP links remain explicitly unavailable with a chapter contact link.
- Four reusable files under `src/components/notebook/`: CSS-module styling, shared primitives, upcoming briefs and past records. Thin rules, maroon tabs, gold indexing accents and natural-aspect photography.
- Additive event fields support confirmed hosts, planned objectives, arrival/preparation notes, technical topics and image dimensions/captions. No outcomes, logistics or RSVP URLs invented.

SHA-256 comparison against the task-start snapshot confirms the only modified existing application files are `src/app/page.tsx`, `src/app/events/page.tsx` and `src/data/events.ts`. Every other existing `src` file and both dependency manifests are unchanged. Earlier launch-audit edits remain intact.

## Verification

Production build, lint, TypeScript, event-boundary tests and whitespace checks pass. Final production preview: http://localhost:3671.

| Width | Home and Events | Other six routes | Result |
| --- | --- | --- | --- |
| 390px | Pass | Pass | No overflow; next-event date starts at 439px, time/location end at 555px |
| 768px | Pass | Pass | Single-column opening and two-column records pass |
| 1366px | Pass | Pass | Desktop opening and archive pass |
| 1920px | Pass | Pass | Constrained content width and natural photo proportions pass |

All 32 route/viewport combinations pass. Internal links, anchors, metadata, image loading, keyboard navigation/menu/gallery and no-JavaScript reading were checked. Targeted tests cover disclosure operation and all nine statistics, photo proportions, heading order, metadata before descriptions, no RSVP actions on past records, and sticky-header anchor clearance.

Evidence: `.qa/notebook-final/report.json`, `.qa/notebook-final-details/report.json`, `.qa/notebook-final/` screenshots and `.qa/notebook-source-before.json`. Targeted reusable test: `scripts/check-notebook.mjs` with `BASE_URL` and `QA_OUT` overrides.

## Regressions and limits

No new functional or visible layout regression found. Of 24 unchanged-route screenshot comparisons, 21 are pixel-identical. Gallery at 768/1366/1920 has photo-raster differences; paired visual inspection shows unchanged layout, framing and captions with different image sharpness. Gallery source/assets were not changed. An isolated 768px capture matches baseline exactly; responsive-image selection/cache variation is the likely cause, not a confirmed root cause.

The pre-existing Vercel Analytics script returns a local 404 under `next start`. Reports retain this separately; all other console errors and page exceptions fail checks. No unexpected browser errors. Local checks do not establish deployed analytics behavior or revalidate external services. Coverage is Chromium, not physical devices or Safari.

RSVP URLs remain pending from the user. Unconfirmed transport, preparation and workshop outcomes remain unpopulated.
