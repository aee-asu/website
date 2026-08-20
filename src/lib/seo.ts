import type { Metadata } from "next";

import type { ChapterEvent } from "@/data/events";
import { links, site } from "@/data/site";

/**
 * Per-page metadata.
 *
 * Next.js inherits `openGraph` from the root layout as a whole object rather
 * than merging it field by field, so a page that sets only `title` and
 * `description` still advertises the homepage's title, description and URL to
 * anything that reads Open Graph. Every page therefore states its own, and
 * this builds the full set so no field can be dropped by accident.
 */
export function pageMeta({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  /** Route path, e.g. "/events". */
  path: string;
}): Metadata {
  const shared = `${title} | ${site.shortName}`;

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: site.legalName,
      locale: "en_US",
      title: shared,
      description,
      url: path,
      images: [
        {
          url: "/images/og/og-default.jpg",
          width: 1200,
          height: 630,
          alt: `${site.legalName} — students at work during the ASU Energy Hackathon`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: shared,
      description,
      images: ["/images/og/og-default.jpg"],
    },
  };
}

/** ASU's campuses sit in different cities, which matters for event markup. */
export function cityFor(campus?: string): string {
  return campus?.startsWith("Polytechnic") ? "Mesa" : "Tempe";
}

export function postalAddress(campus?: string) {
  return {
    "@type": "PostalAddress",
    addressLocality: cityFor(campus),
    addressRegion: "AZ",
    addressCountry: "US",
  };
}

/**
 * The chapter as a linked-data entity. Everything here is already stated in
 * plain English somewhere on the site — this only makes it machine-readable.
 */
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${site.url}/#organization`,
    name: site.legalName,
    alternateName: [site.plainName, "Association of Energy Engineers Student Chapter at ASU"],
    url: site.url,
    logo: `${site.url}/images/brand/aee-asu-lockup.png`,
    image: `${site.url}/images/og/og-default.jpg`,
    description: site.description,
    email: links.email,
    foundingDate: site.founded,
    address: postalAddress(),
    parentOrganization: {
      "@type": "Organization",
      name: "Association of Energy Engineers",
      url: links.aeeCenter,
    },
    sameAs: [links.instagram, links.linkedin, links.join],
  };
}

/**
 * Event markup for the archive and anything upcoming. Only fields the data
 * actually carries are emitted — a guessed end time or a made-up postal address
 * is worse than an absent one, since this is what search engines quote.
 */
export function eventSchema(event: ChapterEvent, path = "/events") {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: event.title,
    description: event.description,
    startDate: event.date,
    endDate: event.endDate ?? event.date,
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    url: `${site.url}${path}`,
    isAccessibleForFree: true,
    location: {
      "@type": "Place",
      name: [event.location, event.campus].filter(Boolean).join(", "),
      address: postalAddress(event.campus),
    },
    organizer: { "@id": `${site.url}/#organization` },
    performer: { "@id": `${site.url}/#organization` },
  };

  if (event.image) schema.image = `${site.url}${event.image}`;
  if (event.registrationUrl) schema.offers = {
    "@type": "Offer",
    url: event.registrationUrl,
    price: 0,
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
  };

  return schema;
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    url: site.url,
    name: site.legalName,
    alternateName: site.plainName,
    description: site.description,
    inLanguage: "en-US",
    publisher: { "@id": `${site.url}/#organization` },
  };
}
