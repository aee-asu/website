# Launch readiness — 6 October 2026

## Completed locally

- Final student/industry homepage copy was already implemented. Homepage source remains unchanged in this phase (SHA-256 `FE4972537127D8110682C2E0CD89F965531AC3CC9E74C95B4C60F07873C0C087`). Structure is frozen.
- Partnership page names five formats: site visits, technical talks, workshops, career opportunities and student projects. There is one primary email contact in the page content, with a prefilled subject/body; global footer contact links are retained.
- Solar Fab Field Note: `/events/asu-aep-solar-fab-tour-2026`, backed by `src/data/fieldNotes.ts` and the reusable `src/app/events/[slug]/page.tsx`. Three existing photos, host/speaker/date/location and three source-bounded observations. No quote or specific process-performance claim invented. The note is linked from the event data and listed in the sitemap. Metadata uses the actual sample-handling photograph.
- Upcoming briefs support transportation, audience, capacity and pending-details fields alongside existing arrival/preparation/objectives/RSVP fields. LEAPS and mixer missing details are explicit. Missing logistics are not considered resolved.
- Student and physical-device test procedure: `docs/phone-test.md`.

## Content provenance

The Solar Fab date, host, speaker and fabrication theme come from the existing published event record in `src/data/events.ts`. Observations about sample handling, attire, work areas and equipment come from visual inspection of the existing chapter photographs `19-solar-fab-sample.jpg`, `20-solar-fab-cleanroom.jpg` and `21-solar-fab-briefing.jpg`. Original selections and source archives are recorded in `CONTENT_INVENTORY.md`.

These observations are not a transcript or independently confirmed technical learning outcomes. Await organizer input for 2–3 deeper takeaways, material/process identification and any publishable participant quote. No new assets or dependencies were added.

## Validation

Build, lint, TypeScript and event data/boundary checks passed. All nine routes at 390/768/1366/1920 passed before the final Field Note photo-order refinement; final rerun evidence is in `.qa/launch-readiness-final/report.json`. No homepage CSS or structure was changed. The final production-build preview is http://localhost:3674.

Additional content checks in `.qa/launch-readiness/content-checks.json` verify all five partnership headings, one page-content email action, valid prefilled address/subject/body, three Field Note photos, no fabricated quote, canonical/social metadata and honest LEAPS missing-details text. No form is present; email delivery itself was not tested. No messages were sent.

Local Vercel Analytics script 404s are separately recorded, as in earlier testing. Deployment analytics collection/dashboard verification is still pending. Local metadata checks do not establish how third-party social apps cache/render the live card.

## User-supplied test findings

The user reported Chrome emulation with iPhone 13 and Galaxy S9+ screen/touch profiles. Live-site pages loaded without layout breakage; finding the next event required roughly 12–13.5 screens. An earlier unpublished redesign showed the next event on the first screen but lacked RSVP information. These are user-reported checks of earlier versions, not measurements of this exact build, independent first-year participants or real-iPhone Safari testing.

## Release status

The user subsequently authorized publishing this version now and treating the missing logistics, deeper content and manual testing as follow-up work. Missing details remain explicit on the site. Do not infer or fabricate them.

Follow-up work:

1. Confirmed RSVP URLs, arrival point, transport/parking if applicable, preparation, audience/capacity and LEAPS objectives.
2. Field Note factual review and deeper verified technical takeaways.
3. Independent 2–3 student task-test findings; real iPhone/Android production checks follow release.
4. Final release checks, scoped commit and push to `aee-asu/website` main (configured to deploy on Vercel), then production analytics/email/metadata/device verification.

Another editing session was mentioned. User subsequently assigned ownership here and said they would stop the others. Preserve unrelated `DECK.md`, SRP image folder, deck scripts and pre-existing `.gitignore` work; do not stage these blindly with the website release.
