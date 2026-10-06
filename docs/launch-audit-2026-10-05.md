# AEE public-launch audit — 5 October 2026

## Assessment before implementation

The visual system is coherent; the information priorities are not. The site reads as a thoughtful energy publication but makes visitors work too hard to see the chapter's next activity and recent industry exposure. Preserve Next.js, the editorial serif, restrained ASU palette, authentic photos, thin rules and typed content. Improve attendance logistics, evidence and navigation before adding decoration.

Reviewed all eight page routes, shared components, data modules, styling, metadata, image preparation workflow and existing QA scripts. Baseline screenshots: `.qa/launch-before/`, at 390, 768, 1366 and 1920px. These are local review artifacts, not committed assets. Persona observations are expert walkthroughs, not user-research findings.

Measured at 390 × 844: homepage height 13,134px; Coming up heading starts at 7,841px. Reproduced mobile menu retaining body overflow:hidden after resizing to desktop. Baseline captured before edits; validation results will be appended after implementation.

## Persona walkthroughs

| Visitor | First five seconds | Questions / hard to find | Trust evidence | Likely action / visibility |
| --- | --- | --- | --- | --- |
| First-year student | Energy club at ASU; welcoming tone | What do I actually do this week? Is a fab visit for beginners? Must I register? | Real visits, clear eligibility, named officers | Join is obvious; attending a specific event takes too much scrolling |
| Industry engineer | Student-led chapter with a composed site | What subjects fit? Who handles logistics? What has a similar guest done here? | Applied Materials session, solar-fab visit, dated hackathon record | Partner nav and email are clear; evidence is separated from the pitch |
| Recruiter | Interdisciplinary energy audience | Which skills/projects can I assess? How do I share a role? | Working prototypes and specific technical learning, not generic industry statistics | Recruit appears late in Partner's eight-option grid; no direct jump |
| Existing member | Familiar chapter homepage | Next date, campus, exact arrival point, RSVP and transport | Calendar consistency and practical instructions | Events nav is clear; homepage next-event information is buried |

## Visual and creative review

The site does not exhibit the usual generic SaaS problems: there is no card-shadow wall, neon palette, animated gradient hero, stock icon grid or testimonial carousel. Serif statements, real photography and rules are genuinely useful. The risk is a different template: oversized editorial statements and the same numbered, ruled section pattern repeated almost everywhere.

- Home: the natural 4:3 hero becomes roughly a thousand pixels tall on a large display. Nine statistics plus a courtyard photo precede the calendar. These have more prominence than the activity a member came to find.
- Events: stacked month/day/year, a repeated full date, description, logistics and category make every mobile row tall. Dates and attendance instructions should lead. Use the existing event photos as evidence, not decorative cards.
- Partner: the large serif email breaks the final character onto another line at 390px. Use a clear action heading and a smaller readable address. Eight equal-weight ways to help hide recruiting.
- About: leadership comes after four long sections. A leadership jump is more useful than another heading treatment. Portraits and roles are credible; don't invent bios or add empty profile buttons.
- Gallery: real work is persuasive, but its long single-column mobile feed lacks event context/navigation. Captions are tiny uppercase labels and the intro understates newer fab/session photographs.
- Research: useful mappings and an email template earn this route its place. Its exceptionally long page needs the existing anchor navigation retained; the skeptical voice sometimes becomes dismissive of the university or reader.
- Footer: the JoinCTA and full footer repeat four channels and create an extended dark tail. Consolidate later, once attendance improvements are verified.
- Type: Newsreader, Inter and Plex Mono form a deliberate system. Keep three roles, but reduce unused font weights/styles and increase 11px labels. Long prose is capped; long URLs and numerals still need wrapping tests.
- Motion: dozens of reveal wrappers are unnecessary for reading. Content must remain visible if JavaScript is enabled but hydration fails. No page transitions are needed.

Recommended direction: **Engineering field notes from ASU**. Treat every activity as an observation of a real system: dated photograph, system/component annotation, engineering question, people involved and one technical takeaway. Maroon identifies chapter actions; gold highlights an actual node or measurement on dark diagrams. Schematics should explain a photographed system, not fill background space. Keep the editorial type and restrained grids. A solar-fab process sketch tied to a visit is more distinctive than another hero illustration.

## Engineering review

Strong: eight straightforward App Router pages; only Next/React runtime dependencies; server-rendered content with small interactive islands; centralized event/site/resource data; reusable rows/headings; semantic landmarks, skip link, focus styles; image dimensions and Next image formats; meaningful alt text; canonical/Open Graph/Twitter metadata, sitemap and safe JSON-LD serialization; drafts filtered from event selectors; hourly revalidation already exists.

Fragile: server-local event cutoff varies with deployment timezone; featured selection can pick an upcoming event for a retrospective; featured fallback uses an unrelated hackathon photo and label; menu focus loop excludes the close toggle and breakpoint changes leave scrolling locked; tablet panel offset differs from header height; CSS hides content before hydration succeeds; structured event data claims free admission and available tickets without event-specific evidence; registration link can remain on past rows. No framework replacement or new UI dependency is justified.

Content is only partly centralized: page-local partner options, hackathon facts and general prose are reasonable at this size, but README's claim that all content lives in data is inaccurate. Event speakers/companies live inside descriptions; recaps and learning outcomes have no fields. QA scripts are ignored, fragmented and sometimes print success unconditionally. Add a reproducible, asserting route/interaction check.

## Content findings

- Preserve “Any major, no dues” and the concrete microgrid, battery, fabrication and data-center subjects.
- Hero repeats the formal identity already in the eyebrow; replace the paragraph with practical programming and the user's see → understand → meet positioning.
- “A microgrids workshop at the LEAPS Lab” adds almost nothing beyond its title. Organizer must supply learning goals, exact room, preparation, RSVP and travel guidance.
- “Everything is open” may conflict with site-visit capacity or safety restrictions. Say membership is not required and defer event-specific requirements to each listing.
- “do the roster anyway,” “Nobody stalls on steps one to three,” and “not checked” sound scolding. “Most students never find it” and “the honest reason the chapter exists” are unsupported rhetorical flourishes.
- Past tabling descriptions still invite people to events that ended. Use past tense. Hackathon content mixes recap and future instructions; distinguish the 2026 record from next-event guidance.
- Gallery intro is stale relative to the Fall 2026 photographs.
- Partner says “two days in April” as if the next program is fixed, and calls the chapter “new.” Remove implied scheduling commitments.
- National data-center headline shows only the forecast's upper bound. Berkeley Lab gives a 6.7–12% range for 2028: https://newscenter.lbl.gov/2025/01/15/berkeley-lab-report-evaluates-increase-in-electricity-demand-from-data-centers/ . Coal copy says an entire fuel left the mix while the displayed value remains 8%; remove that contradiction.
- CONTENT_INVENTORY is stale: hackathon code records August confirmation for public sponsor names; the inventory says none are published. Treasurer portrait also now exists. Preserve published evidence and annotate the discrepancy, without inventing renewed consent.
- Final source verification found a factual error in Research: “Every route” to CEM does not require a degree; AEE lists a ten-year experience-only route. Corrected the blanket claim, included associate/experience pathways, and clarified that EMIT requires training, application and the CEM exam. Primary source checked 5 October: https://www.aeecenter.org/certified-energy-manager/becoming-a-cem/ . AMPED's failed old URL was replaced with its current official ASU page.

## Prioritized roadmap

Each row states the problem, consequence, concrete fix, ownership and effort. Implemented status is recorded at the end.

| Priority | Problem and consequence | Specific fix | Files/components | Effort |
| --- | --- | --- | --- | --- |
| P0 | Menu breakpoint/focus behavior can block navigation | Include close toggle in focus loop; close/unlock at desktop; align tablet panel | SiteHeader.tsx | Small |
| P0 | Event cutoff depends on server timezone | Compare Phoenix calendar dates; test midnight and multi-day boundaries | lib/events.ts; scripts/check-events.mjs | Small |
| P0 | Hydration failure can hide reading content | Keep content visible by default; use optional entrance animation | Reveal.tsx; globals.css | Small |
| P0 | Published event lacks attendance requirements | Show unknown RSVP honestly with inquiry link; obtain actual RSVP, exact LEAPS arrival point and transport details | data/events.ts; EventRow.tsx | Small code / organizer input |
| P0 | Event schema invents free tickets/in-stock status | Remove unsupported commerce/performer fields; link unique event anchors | lib/seo.ts; EventRow.tsx | Small |
| P1 | Calendar starts nine screens down | Move existing upcoming section under hero; clarify hero programming | app/page.tsx | Medium |
| P1 | Past events don't show their existing evidence | Render approved archive photos and optional speaker/organization/recap/outcome fields; use only documented details | events.ts; EventRow.tsx | Medium |
| P1 | Featured logic assumes every story is the hackathon | Restrict retrospective to past; generic link/title; no unrelated fallback image | lib/events.ts; app/page.tsx | Small |
| P1 | Long routes hide destinations | Add upcoming/past and leadership/contact jumps; clarify partner label; surface recruiter path | events/about/join/partner pages; site.ts | Small |
| P1 | Small labels, broken email wrapping and mobile lightbox controls | Raise labels to 12px; separate email/action; 44px controls and stacked lightbox footer | globals.css; GalleryGrid.tsx; partner/page.tsx | Small |
| P1 | Stale/scolding copy and contradictory statistics weaken credibility | Targeted copy edits; retain actual technical content; display forecast range | landscape.ts; affected pages | Small |
| P1 | No reproducible release check | Assert all routes, anchors, images, console, breakpoints, menu/lightbox, no-JS and date cases | scripts/check-site.mjs; package.json | Medium |
| P1 | Provenance/docs no longer match code | Reconcile known differences; document ISR, data ownership and outstanding event input | README.md; CONTENT_INVENTORY.md; memory | Small |
| P2 | Repeated JoinCTA/footer dominates page endings | Consolidate channels into footer; keep one task-specific CTA per route | JoinCTA.tsx; SiteFooter.tsx | Medium |
| P2 | Font variants and oversized imagery cost bandwidth | Remove unused weights/styles after measurement; constrain hackathon group image; measure production Web Vitals on phones | layout.tsx; hackathon/page.tsx; image sizes | Medium |
| P2 | No event-specific destination/calendar export | Add event detail pages and Phoenix-time calendar downloads once start/end and registration fields are confirmed | data/events.ts; app/events/[slug]; lib/seo.ts | Medium |
| P2 | Long archive/research pages will grow | Add semester/category navigation and gallery event grouping; avoid filtering UI until list size warrants it | events/gallery/research pages | Medium |
| P2 | Source claims need durable review dates | Add last-checked metadata and semester review ownership for resources/statistics; verify blocked external URLs manually | resources.ts; landscape.ts; CONTENT_INVENTORY.md | Medium |
| P3 | Strong activities lack a recognizable publication format | Build engineering field-note stories with annotated photos and approved technical takeaways | future event/story templates | Large |
| P3 | Industry geography is invisible | Create a curated Arizona energy/semiconductor map linked to actual visits and talks | future industry/map route | Large |
| P3 | Recruiters cannot see student work clearly | Build an opt-in project atlas with problem, method, result, artifact and student-approved contact | future projects data/route | Large |
| P3 | Workshop learning disappears after the room empties | Publish versioned lab notebooks and repeatable exercises | future learning route | Large |
| P3 | Annual credibility depends on scattered photos | Publish a semester engineering review based on recorded attendance, programs and artifacts | future annual-review route | Large |

## Five ambitious directions for the next year

1. **Field Notes:** each visit pairs one real system photograph with a process diagram, an engineering question and a student-written explanation reviewed by the host.
2. **Arizona systems map:** utilities, fabs, solar, storage and data centers connected to chapter coverage; mark visited, studied and proposed separately.
3. **Student project atlas:** prototypes with measured results, limitations, repositories and opt-in contributor profiles; a credible recruiting destination.
4. **Open workshop notebooks:** reproducible microgrid, battery and efficiency exercises with equipment lists and safety/host requirements supplied by instructors.
5. **Semester engineering review:** an editorial issue showing what members investigated, built and learned, supported by actual records rather than vanity counters.

## Implemented changes and release evidence

Completed the safe P0 fixes for navigation, Phoenix date handling, readable content without hydration and unsupported event commerce markup. Attendance completeness remains open: the user said RSVP URLs will be supplied later. The public fallback is an explicit missing-details message and a subject-prefilled email link; it does not imply walk-in access.

Implemented P1 calendar placement and hero positioning; compact mobile date columns; approved archive photography; optional speaker/organization/recap/learning fields (only existing speaker facts populated); past-only featured stories; generic story links without unrelated fallback photographs; event/leadership/contact/recruiting anchors; clearer industry navigation; 12px labels; readable partner email; 44px menu/lightbox controls; stacked mobile lightbox caption; targeted copy/statistics fixes; corrected CEM eligibility; reproducible checks and project memory. Corrected the inventory's known implementation discrepancies while preserving its historical records.

No new dependency, framework change, invented partner, invented learning outcome, commit, push or deployment. Existing `.gitignore`, presentation scripts, DECK.md and SRP folder changes were preserved as unrelated work.

### Verification

| Check | Result |
| --- | --- |
| `npm run lint` | Passed on final source |
| `npm run typecheck` | Passed on final source |
| `npm run build` | Passed; eight page routes plus metadata routes generated; Home/Events retain hourly ISR |
| `BASE_URL=http://localhost:3667 npm run check:site` | Passed 32 route/viewport combinations: eight routes × 390/768/1366/1920; internal links/fragments, image decoding, titles/descriptions/canonicals, one h1, 404, legacy redirect, sitemap and robots |
| Browser console | No page errors, console errors or warnings in the production route sweep |
| Keyboard and interaction checks | Skip link, menu focus loop/Escape, same-route close, desktop resize unlock, tablet offset; gallery arrows/Escape/focus return; extra lightbox focus-loop check passed |
| Script failure / reduced motion | All routes inspected with reduced motion; home content stays readable with JS disabled and with JS requests blocked |
| `npm run check:events` | Passed: Phoenix midnight (including fractional last second), multi-day final day, drafts, chronological selection, featured retrospective and slug/date/image integrity |
| Additional breakpoints | All eight routes passed horizontal-overflow checks at 320 and 1024px |
| Final Research correction | Rebuilt final source; targeted content/link/layout/screenshots passed at 390/768/1366/1920 on port 3668 after the CEM/AMPED edit |
| `git diff --check` | Passed; Windows CRLF normalization notices only |
| Outbound URLs | 53 checked: 47 initial successful HTTP responses, five AEE URLs returned 403 to automated requests, old AMPED failed. Official ASU AMPED replacement was found via search but returned 522 in direct verification; still requires follow-up. AEE's CEM page was readable through web retrieval and supports the corrected eligibility copy. HTTP success is not proof of login flow or destination content correctness. |

The comparable mobile **Coming up heading** moved from **7,841px to 818px**, roughly 90% earlier. The section begins at 743px. Homepage remains long (~12,944px at 390px); prioritization improved, but the long statistics section and repeated footer/JoinCTA are still P2 candidates.

Evidence: `.qa/launch-before/`, `.qa/launch-production/report.json`, `external-links.json`, `extra-checks.json`, route screenshots and final Research screenshots. The first harness iterations exposed test assumptions (lazy image timing, null fragment-navigation responses, CSS uppercase labels); those assertions were corrected and the production suite then passed. An extra-width run waiting for network idle timed out on Gallery; the targeted layout check uses document/font readiness, while image loading was verified in the main suite.

Scope limits: desktop Chromium emulation, not physical iOS/Android/Safari or a screen-reader audit; no measured field Core Web Vitals or load/security audit; no authenticated Sun Devil Central registration, actual email send or RSVP submission. Performance observations are architectural/image-payload observations, not claimed LCP scores. Largest original web JPEGs are about 0.53–0.69 MB, with Next serving optimized variants.

### Remaining launch input

1. Supply RSVP URL(s) and identify which October event each belongs to (`src/data/events.ts`, small).
2. Confirm LEAPS exact arrival point, campus travel/transport, preparation and learning goals (`src/data/events.ts`, small once supplied).
3. Verify the AMPED destination after ASU's gateway issue and manually open the automated-request-blocked AEE links (`src/data/resources.ts`, small).

Preview of the final production build: http://localhost:3668 . The audit is implemented locally and has not been published.
