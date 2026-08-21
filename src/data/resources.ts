/**
 * Link directories for the Research & Resources page.
 * Every link is checked by hand — add a `note` when the destination is not
 * self-explanatory from its title.
 */

export type ResourceLink = {
  title: string;
  href: string;
  note?: string;
};

export type ResourceGroup = {
  id: string;
  title: string;
  intro?: string;
  links: ResourceLink[];
};

export const chapterResources: ResourceGroup[] = [
  {
    id: "aee",
    title: "AEE",
    intro:
      "The chapter sits inside a professional body with its own certifications, chapters and student programs.",
    links: [
      {
        title: "Join AEE at ASU",
        href: "https://sundevilcentral.eoss.asu.edu/AEEASU/club_signup",
        note: "Sun Devil Central — the official student organization roster.",
      },
      {
        title: "Association of Energy Engineers",
        href: "https://www.aeecenter.org/",
        note: "The parent organization. Founded 1977; certifications include the CEM and CEA.",
      },
      {
        title: "AEE Student & Young Professional Membership",
        href: "https://www.aeecenter.org/membership/young-professionals/",
      },
      {
        title: "AEE Arizona Chapter",
        href: "https://www.aeecenter.org/listing/arizona-chapter/",
        note: "The professional chapter in our state. Worth knowing about while you're still a student.",
      },
      {
        title: "AEE Foundation Scholarships",
        href: "https://aeefoundation.org/apply-for-a-scholarship/",
      },
    ],
  },
  {
    id: "careers",
    title: "Careers",
    links: [
      { title: "ASU CareerLink", href: "https://career.asu.edu/careerlink" },
      {
        title: "Fulton Schools Career Center",
        href: "https://career.engineering.asu.edu/",
      },
    ],
  },
  {
    id: "learn",
    title: "Learn & explore",
    intro: "Two sources worth reading before your first energy interview.",
    links: [
      {
        title: "EIA Energy Explained",
        href: "https://www.eia.gov/energyexplained/",
        note: "Plain-language explanations of how each part of the energy system works.",
      },
      {
        title: "Arizona Energy Profile — EIA",
        href: "https://www.eia.gov/states/AZ/analysis/",
        note: "What Arizona actually generates, consumes and imports.",
      },
    ],
  },
];

export const researchResources: ResourceGroup[] = [
  {
    id: "find-research",
    title: "Find research",
    intro: "Start here if you don't know which lab you want yet.",
    links: [
      {
        title: "ASU UResearch",
        href: "https://provost.asu.edu/uresearch",
        note: "The university's front door for undergraduate research.",
      },
      { title: "ASU Research", href: "https://www.asu.edu/research" },
      {
        title: "ASU Research Experts Directory",
        href: "https://asu.elsevierpure.com/",
        note: "Search faculty by topic and read what they have actually published.",
      },
      {
        title: "Fulton Engineering Undergraduate Research",
        href: "https://students.engineering.asu.edu/undergraduate/research/",
      },
    ],
  },
  {
    id: "fulton-programs",
    title: "Fulton programs & funding",
    links: [
      {
        title: "FURI — Fulton Undergraduate Research Initiative",
        href: "https://students.engineering.asu.edu/furi/",
        note: "Funded semester-long undergraduate projects with a faculty mentor.",
      },
      {
        title: "SURI — Summer Research Initiative",
        href: "https://students.engineering.asu.edu/graduate/research/suri/",
      },
      {
        title: "NSF Research Experiences for Undergraduates",
        href: "https://www.nsf.gov/funding/initiatives/reu",
        note: "Paid summer research, at ASU or at any host institution in the country.",
      },
      {
        title: "Experiential Learning Grant",
        href: "https://students.engineering.asu.edu/scholarships-funding/experiential-learning-grant/",
      },
      {
        title: "Grand Challenges Scholars Program",
        href: "https://gcsp.engineering.asu.edu/",
      },
    ],
  },
  {
    id: "graduate",
    title: "Graduate students",
    links: [
      {
        title: "Graduate Research & Teaching Assistantships",
        href: "https://graduate.asu.edu/graduate-appointments-and-assistantships",
      },
      {
        title: "Graduate Funding Opportunities",
        href: "https://graduate.asu.edu/current-students/funding-opportunities",
      },
    ],
  },
  {
    id: "energy-research",
    title: "Energy research at ASU",
    links: [
      {
        title: "ASU Energy Faculty Directory",
        href: "https://coe.engineering.asu.edu/asu-energy-faculty/",
        note: "The single most useful page on this list. Sorted by energy research area.",
      },
      {
        title: "ASU LightWorks",
        href: "https://globalfutures.asu.edu/lightworks/",
      },
    ],
  },
  {
    id: "facilities",
    title: "Facilities",
    links: [
      {
        title: "ASU Core Research Facilities",
        href: "https://cores.research.asu.edu/",
        note: "Shared instruments and labs — useful to know what exists before you ask to use them.",
      },
    ],
  },
];

export const howToStart = [
  {
    step: "01",
    title: "Pick something you actually want to learn about",
    body: "Not the area you think looks best. You will be reading papers in it for a semester.",
  },
  {
    step: "02",
    title: "Search the Energy Faculty Directory or the Research Experts Directory",
    body: "Find three or four faculty whose work overlaps with that area.",
  },
  {
    step: "03",
    title: "Read their research pages and one recent paper",
    body: "You don't need to understand all of it. You just need to be able to say what it's about.",
  },
  {
    step: "04",
    title: "Send a short, specific email",
    body: "Who you are, what you have read of theirs, what you can do and how much time you have. Five sentences.",
  },
  {
    step: "05",
    title: "Watch FURI, SURI, UResearch and CareerLink",
    body: "The deadlines come around every semester, and most students miss them because nobody told them the dates.",
  },
];
