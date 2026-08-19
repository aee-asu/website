/**
 * Chapter-wide constants. Anything that appears in more than one place —
 * names, links, navigation — lives here.
 */

export const site = {
  /** Formal name. Use this in metadata, the footer and any legal context. */
  legalName:
    "Association of Energy Engineers Student Chapter at Arizona State University®",
  /** Short name for body copy and navigation. */
  shortName: "AEE at ASU®",
  /** Short name without the registered mark, for running prose. */
  plainName: "AEE at ASU",
  tagline: "Association of Energy Engineers",
  description:
    "A student chapter at Arizona State University for people who want to work on real energy problems — power systems, storage, buildings, data centers, materials, markets and policy.",
  /** Production address. Feeds canonical URLs, the sitemap and social previews.
   *  Update this the moment a custom domain is added in Vercel. */
  url: "https://www.aeeasu.com",
  campus: "Tempe, Arizona",
  founded: "2026",
} as const;

export const links = {
  join: "https://sundevilcentral.eoss.asu.edu/AEEASU/club_signup",
  instagram: "https://www.instagram.com/aee_asu/",
  discord: "https://discord.gg/qvDFyk3tS",
  linkedin:
    "https://www.linkedin.com/company/association-of-energy-engineers-aee-at-asu",
  aeeCenter: "https://www.aeecenter.org/",
  email: "aeeasustudentchapter@gmail.com",
} as const;

export const nav = [
  { href: "/about", label: "About" },
  { href: "/events", label: "Events" },
  { href: "/research", label: "Research & Resources" },
  { href: "/gallery", label: "Gallery" },
] as const;
