/**
 * Every event on the site comes from this file. No database, no CMS.
 *
 * To add an event: copy an entry, give it a unique `slug`, and put it anywhere
 * in the array — the site sorts by date and decides "upcoming" vs "past" from
 * today's date, so nothing has to be moved between lists as time passes.
 *
 * `status: "draft"` keeps an entry out of the public site entirely. Use it for
 * events that are still being confirmed.
 */

export type EventCategory =
  | "Industry"
  | "Technical"
  | "Career"
  | "Research"
  | "Community"
  | "Site Visit"
  | "Workshop"
  | "Competition";

export type ChapterEvent = {
  slug: string;
  title: string;
  /** ISO date, YYYY-MM-DD. For multi-day events this is the start date. */
  date: string;
  /** ISO date of the final day. Omit for single-day events. */
  endDate?: string;
  /** Free text, e.g. "5:00–8:00 PM". Omit if times are not settled. */
  time?: string;
  location: string;
  campus?: string;
  category: EventCategory;
  /** One or two sentences. Plain language, no marketing. */
  description: string;
  image?: string;
  imageAlt?: string;
  registrationUrl?: string;
  /** Pulls the event out onto the homepage and the top of the archive. */
  featured?: boolean;
  status: "published" | "draft";
  /** Short factual detail lines shown on featured entries. */
  details?: { label: string; value: string }[];
};

export const events: ChapterEvent[] = [
  /* ---------------------------------------------------------------- Fall 2026 */
  {
    slug: "taste-of-the-mu-2026",
    title: "Taste of the MU",
    date: "2026-08-19",
    time: "5:00–8:00 PM",
    location: "Memorial Union, 2nd Floor",
    campus: "Tempe campus",
    category: "Community",
    description:
      "Come find our table, meet the officers and ask what the chapter is doing this year. No commitment — turn up and talk.",
    status: "published",
  },
  {
    slug: "student-organizations-open-house-2026",
    title: "Student Organizations Open House",
    date: "2026-08-24",
    time: "11:00 AM–2:00 PM",
    location: "Student Pavilion, 1st Floor",
    campus: "Tempe campus",
    category: "Community",
    description:
      "The big fall org fair. We will be there the whole time — a good first stop if you are new to ASU and want in on the energy side of campus.",
    status: "published",
  },

  /* ---------------------------------------------------------------- Spring 2026 */
  {
    slug: "asu-energy-hackathon-2026",
    title: "ASU Energy Hackathon",
    date: "2026-04-18",
    endDate: "2026-04-19",
    location: "EDC 117",
    campus: "Tempe campus",
    category: "Competition",
    featured: true,
    description:
      "A 24-hour, prototype-first energy hackathon hosted by the chapter, run across four tracks with industry challenge statements, mentors on the floor and judging on Sunday morning.",
    image: "/images/events/hackathon-2026-group.jpg",
    imageAlt:
      "Participants, organizers and judges of the 2026 ASU Energy Hackathon standing together at the front of the lecture hall after the awards.",
    status: "published",
    details: [
      { label: "Format", value: "24 hours, prototype-first" },
      { label: "Tracks", value: "AI, Software, Hardware, Efficiency" },
      { label: "With", value: "IEEE, ASME and Robotics at ASU" },
    ],
  },
];

/**
 * Sessions from the chapter's Spring 2026 speaker series. They are kept here as
 * drafts because the schedule comes from a planning deck rather than a record of
 * what was held. Confirm a session happened, then switch it to "published" —
 * and add the speaker to the description if you want them credited.
 */
export const draftEvents: ChapterEvent[] = [
  {
    slug: "grid-cybersecurity-2026",
    title: "Grid Cybersecurity Talk & Training",
    date: "2026-04-01",
    location: "Tempe campus",
    category: "Technical",
    description: "Session from the chapter's Spring 2026 series.",
    status: "draft",
  },
  {
    slug: "energy-efficiency-training-2026",
    title: "Energy Efficiency Hands-on Training",
    date: "2026-03-18",
    location: "Tempe campus",
    category: "Workshop",
    description: "Session from the chapter's Spring 2026 series.",
    status: "draft",
  },
  {
    slug: "microgrids-leaps-visit-2026",
    title: "Microgrids & LEAPS Lab Visit",
    date: "2026-02-25",
    location: "Tempe campus",
    category: "Site Visit",
    description: "Session from the chapter's Spring 2026 series.",
    status: "draft",
  },
  {
    slug: "battery-startups-2026",
    title: "Battery Startups",
    date: "2026-02-18",
    location: "Tempe campus",
    category: "Industry",
    description: "Session from the chapter's Spring 2026 series.",
    status: "draft",
  },
  {
    slug: "arizona-energy-startups-2026",
    title: "The Arizona Energy Scene for Startups",
    date: "2026-02-11",
    location: "Tempe campus",
    category: "Industry",
    description: "Session from the chapter's Spring 2026 series.",
    status: "draft",
  },
  {
    slug: "introduction-session-2026",
    title: "Introduction Session",
    date: "2026-02-04",
    location: "Tempe campus",
    category: "Community",
    description: "Session from the chapter's Spring 2026 series.",
    status: "draft",
  },
];
