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
  /** Confirmed ISO timestamps with explicit UTC offset; omit if either time is unknown. */
  calendar?: { start: string; end: string };
  location: string;
  campus?: string;
  attendanceMode?: "in-person" | "hybrid";
  category: EventCategory;
  /** One or two sentences. Plain language, no marketing. */
  description: string;
  image?: string;
  imageAlt?: string;
  imageWidth?: number;
  imageHeight?: number;
  imageCaption?: string;
  registrationUrl?: string;
  /** Omit until confirmed. A missing URL never implies walk-in admission. */
  registrationNote?: string;
  speaker?: string;
  organization?: string;
  host?: string;
  /** Planned objectives must never be treated as verified past outcomes. */
  learningObjectives?: string[];
  arrivalNotes?: string;
  preparationNotes?: string;
  transportationNotes?: string;
  audience?: string;
  capacityNote?: string;
  /** Specific outstanding details, removed as the organizers confirm them. */
  pendingDetails?: string[];
  /** Subjects explicitly supported by the existing event description. */
  topics?: string[];
  recap?: string;
  learningOutcomes?: string[];
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
      "Officers met students at the Memorial Union and introduced the chapter's plans for the year.",
    image: "/images/events/taste-of-the-mu-2026.jpg",
    imageWidth: 2000,
    imageHeight: 1500,
    imageCaption: "Officers at the chapter's table in the Memorial Union.",
    imageAlt:
      "The chapter's table at Taste of the MU, with three officers behind it and chapter giveaways laid out across the front.",
    status: "published",
  },
  {
    slug: "student-organizations-open-house-2026",
    image: "/images/events/open-house-2026.jpg",
    imageWidth: 2268,
    imageHeight: 4032,
    imageCaption: "At the AEE table during the Student Organizations Open House on August 24, 2026.",
    imageAlt: "Two people stand beside the AEE table with chapter giveaways during an indoor student organization fair.",
    title: "Student Organizations Open House",
    date: "2026-08-24",
    time: "11:00 AM–2:00 PM",
    location: "Student Pavilion, 1st Floor",
    campus: "Tempe campus",
    category: "Community",
    description:
      "The chapter joined the fall organization fair to meet students interested in energy and introduce upcoming activities.",
    status: "published",
  },
  {
    slug: "asu-aep-solar-fab-tour-2026",
    title: "ASU AEP Solar Fab Tour",
    speaker: "Wardia Debray, Process Engineer",
    organization: "ASU AEP Solar Fab",
    host: "ASU AEP Solar Fab",
    href: "/events/asu-aep-solar-fab-tour-2026",
    topics: ["Photovoltaic fabrication", "Materials and processes"],
    date: "2026-09-11",
    time: "3:00–5:00 PM",
    location: "MTW Building, ASU",
    category: "Site Visit",
    description:
      "A behind-the-scenes tour of the ASU AEP Solar Fab led by Wardia Debray, Process Engineer, following how photovoltaic devices move through fabrication and the materials and processes behind solar technology.",
    image: "/images/events/solar-fab-tour-2026.jpg",
    imageWidth: 1800,
    imageHeight: 1350,
    imageCaption: "Students inside the fabrication facility during the solar-fab visit.",
    imageAlt:
      "Students in yellow cleanroom gowns, hair covers and face masks posing as a group inside a fabrication facility.",
    status: "published",
  },
  {
    slug: "applied-materials-industry-session-2026",
    title: "Applied Materials Industry Session",
    speaker: "Rony David Mathew",
    organization: "Applied Materials",
    topics: ["Semiconductor manufacturing", "Industry careers"],
    date: "2026-09-19",
    time: "11:00 AM–12:30 PM",
    location: "Creative Commons 202",
    category: "Industry",
    description:
      "Rony David Mathew of Applied Materials on semiconductor manufacturing, industry trends and careers in advanced technology, followed by questions from students.",
    image: "/images/events/applied-materials-2026.jpg",
    imageWidth: 1800,
    imageHeight: 1350,
    imageCaption: "Students listen during the Applied Materials industry session.",
    imageAlt:
      "A speaker presents next to a large screen while students listen from chairs and benches in an open, modern room.",
    status: "published",
  },
  {
    slug: "aee-ieee-hkn-town-hall-2026",
    calendar: { start: "2026-10-08T17:00:00-07:00", end: "2026-10-08T18:30:00-07:00" },
    title: "AEE × IEEE-HKN Town Hall & Mixer",
    registrationUrl: "https://sundevilcentral.eoss.asu.edu/hkn/rsvp_boot?id=407681",
    registrationNote: "Free. RSVP through IEEE-HKN on Sun Devil Central.",
    pendingDetails: ["Arrival instructions", "Audience and capacity"],
    date: "2026-10-08",
    time: "5:00–6:30 PM",
    location: "GWC 487",
    campus: "Tempe campus",
    category: "Community",
    description:
      "A town hall and mixer held jointly with IEEE-HKN. Come meet members of both organizations.",
    status: "published",
  },
  {
    slug: "leaps-microgrids-workshop-2026",
    calendar: { start: "2026-10-21T10:00:00-07:00", end: "2026-10-21T13:00:00-07:00" },
    title: "AEE × LEAPS Microgrid Workshop",
    registrationUrl: "https://cglink.me/22J/r415366",
    registrationNote: "Free. RSVP through Sun Devil Central.",
    pendingDetails: ["Arrival instructions", "Parking or transportation", "What to bring"],
    date: "2026-10-21",
    time: "10:00 AM–1:00 PM",
    location: "Santa Catalina Hall (SANCA), room 359",
    campus: "Polytechnic campus",
    attendanceMode: "in-person",
    host: "AEE × ASU LEAPS",
    audience: "ASU undergraduate and graduate students interested in energy, power systems, sustainability and emerging grid technologies.",
    category: "Workshop",
    description:
      "A hands-on workshop connecting classroom concepts with the design and operation of modern microgrids.",
    learningObjectives: ["Microgrids, energy storage and islanding", "Controls and technologies for managing distributed energy systems"],
    status: "published",
  },
  {
    slug: "aee-siemens-info-session-2026",
    calendar: { start: "2026-10-26T18:00:00-07:00", end: "2026-10-26T19:00:00-07:00" },
    title: "AEE × Siemens Info Session",
    date: "2026-10-26",
    time: "6:00–7:00 PM",
    location: "WCPH 190",
    campus: "Tempe campus",
    attendanceMode: "hybrid",
    organization: "Siemens",
    category: "Industry",
    description: "Siemens industry professionals discuss power protection relays and modern power systems, followed by career and internship information and student questions.",
    learningObjectives: ["How protection relays protect equipment and support system reliability", "Developments in power system monitoring, protection and automation", "Career paths, internships and skills valued in the industry"],
    audience: "Undergraduate and graduate students.",
    registrationUrl: "https://cglink.me/22J/r415810",
    registrationNote: "Free. RSVP through Sun Devil Central.",
    pendingDetails: ["Remote attendance instructions"],
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
      "An interactive session on data centers and their energy demand, led by Vladimir Abdelnour, a PhD student and the chapter's president at the time.",
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
    imageWidth: 1024,
    imageHeight: 768,
    imageCaption: "Participants, organizers and judges after the hackathon awards.",
    imageAlt:
      "Participants, organizers and judges of the 2026 ASU Energy Hackathon standing together at the front of the lecture hall after the awards.",
    status: "published",
    details: [
      { label: "Format", value: "24 hours, prototype-first" },
      { label: "Tracks", value: "AI, Software, Hardware, Efficiency" },
      { label: "With", value: "The IEEE student branch at ASU" },
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
