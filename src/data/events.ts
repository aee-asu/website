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
  /** Set when an event has a page of its own, e.g. the hackathon. */
  href?: string;
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
      "Come find our table, meet the officers and ask what we're doing this year. No commitment, just come talk to us.",
    image: "/images/events/taste-of-the-mu-2026.jpg",
    imageAlt:
      "The chapter's table at Taste of the MU, with three officers behind it and chapter giveaways laid out across the front.",
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
      "The big fall org fair. We'll be there the whole time, so it's an easy first stop if you're new to ASU and want in on the energy side of campus.",
    status: "published",
  },

  /* ---------------------------------------------------------------- Spring 2026 */
  {
    slug: "arizona-energy-startups-2026",
    title: "The Arizona Energy Scene for Startups",
    date: "2026-02-11",
    time: "5:00 PM",
    location: "Engineering Center G, Room 305",
    campus: "Tempe campus",
    category: "Industry",
    description:
      "Kris Saunders, a partner at Power48 who previously led Extend EV, and Victor Atlasman, Director of Engineering and Product Development at WattEV, on the Arizona energy startup scene — infrastructure, heavy-duty EV charging and megawatt systems.",
    status: "published",
  },
  {
    slug: "battery-startups-2026",
    title: "Battery Startups Information Session",
    date: "2026-02-19",
    time: "5:00 PM",
    location: "Durham 107",
    campus: "Tempe campus",
    category: "Industry",
    description:
      "Serhii Kaminsky, founder of SorbiForce, on opportunities in battery startups, followed by open discussion and Q&A.",
    status: "published",
  },
  {
    slug: "microgrids-leaps-visit-2026",
    title: "Microgrids & LEAPS Testbed Visit",
    date: "2026-02-25",
    time: "4:00–6:00 PM",
    location: "LEAPS Lab",
    campus: "Polytechnic campus",
    category: "Site Visit",
    description:
      "A deep dive into microgrid design followed by a hands-on build and testing session at the LEAPS Lab, run with the IEEE Student Branch at ASU. A free bus ran from Tempe.",
    status: "published",
  },
  {
    slug: "battery-energy-founders-2026",
    title: "Battery & Energy Founders and CEOs Discussion",
    date: "2026-03-04",
    time: "4:00–6:00 PM",
    location: "Durham Hall 105",
    campus: "Tempe campus",
    category: "Industry",
    description:
      "Serhii Kaminsky (founder and CEO, SorbiForce) and Manas Pathak (founder and CEO, Grid8 and EarthEn) on energy innovation, startup leadership and building companies in the industry.",
    status: "published",
  },
  {
    slug: "energy-efficiency-training-2026",
    title: "Energy Efficiency Discussion & Hands-on Training",
    date: "2026-03-18",
    time: "4:00–6:00 PM",
    location: "Durham 108",
    campus: "Tempe campus",
    category: "Workshop",
    description:
      "Wayne Dobberpuhl, Executive Vice President for Energy at Nexus Integrated Solutions, on energy efficiency in practice, with hands-on training. Hosted with the IEEE Student Branch at ASU.",
    status: "published",
  },
  {
    slug: "data-centers-info-session-2026",
    title: "Interactive Information Session: Data Centers",
    date: "2026-03-25",
    time: "5:00–6:00 PM",
    location: "Durham Hall 105",
    campus: "Tempe campus",
    category: "Technical",
    description:
      "An interactive session on data centres and their energy demand, led by Vladimir Abdelnour, a PhD student and the chapter's president at the time.",
    status: "published",
  },
  {
    slug: "project-life-cycle-2026",
    title: "Understanding Project Life Cycle",
    date: "2026-04-16",
    time: "5:30–6:30 PM",
    location: "ECG 320",
    campus: "Tempe campus",
    category: "Career",
    description:
      "Tino Rosas, an energy engineer and project management professional, on how large energy and construction projects get from idea to reality.",
    status: "published",
  },
  {
    slug: "asu-energy-hackathon-2026",
    title: "ASU Energy Hackathon",
    href: "/hackathon",
    date: "2026-04-18",
    endDate: "2026-04-19",
    location: "EDC 117",
    campus: "Tempe campus",
    category: "Competition",
    featured: true,
    description:
      "Our 24-hour energy hackathon. Four tracks, real challenge statements from industry, mentors on the floor overnight, and judging Sunday morning.",
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
 * The two Spring 2026 sessions that the chapter's Instagram does not corroborate.
 * Every other session in the planning deck was confirmed from a post and moved
 * into `events` above. Confirm one of these happened, fill in the room, time and
 * speaker, then switch it to "published".
 */
export const draftEvents: ChapterEvent[] = [
  {
    slug: "introduction-session-2026",
    title: "Introduction Session",
    date: "2026-02-04",
    location: "Tempe campus",
    category: "Community",
    description: "Session from the chapter's Spring 2026 planning deck.",
    status: "draft",
  },
  {
    slug: "grid-cybersecurity-2026",
    title: "Grid Cybersecurity Talk & Training",
    date: "2026-04-01",
    location: "Tempe campus",
    category: "Technical",
    description: "Session from the chapter's Spring 2026 planning deck.",
    status: "draft",
  },
];
