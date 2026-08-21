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
    id: "knowledge-enterprise",
    title: "Knowledge Enterprise",
    intro:
      "ASU's research arm. Most students never touch any of this, which is the reason it is worth listing.",
    links: [
      {
        title: "Knowledge Enterprise — for students",
        href: "https://research.asu.edu/resources/for-students/",
        note: "The student-facing entry point to ASU's research operation.",
      },
      {
        title: "ASU Funding Search",
        href: "https://funding.asu.edu/",
        note: "Searchable database of funding opportunities, including ones open to students.",
      },
      {
        title: "ASU Core Research Facilities",
        href: "https://cores.research.asu.edu/",
        note: "Shared instruments and labs, Solar Fab among them. Worth knowing what exists before you ask to use it.",
      },
      {
        title: "Skysong Innovations",
        href: "https://skysonginnovations.com/inventors/",
        note: "Where ASU research becomes patents and companies. Relevant if what you build turns into something.",
      },
      {
        title: "ASU Entrepreneurship",
        href: "https://entrepreneurship.asu.edu/",
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

/**
 * The six focus areas from data/focusAreas.ts, mapped to the ASU centers that
 * actually work on each one.
 *
 * This is the part of the Research page that nobody else has assembled. ASU
 * publishes a list of 56 research centers with no indication which are about
 * energy; the university's own energy pages do not map to how a student thinks
 * about the field. So we did it.
 *
 * Keep `area` in step with data/focusAreas.ts. Where ASU has no center working
 * on one of our areas, say so plainly rather than stretching a listing to fit —
 * the empty square is useful information too.
 */

export type EnergyCenter = {
  name: string;
  href: string;
  /** What it is, in one line. Type of center first — students do not know what an ERC is. */
  note: string;
};

export type AreaResearch = {
  /** Matches the `number` and `title` in data/focusAreas.ts. */
  number: string;
  area: string;
  centers: EnergyCenter[];
  /** Shown when ASU has no dedicated center for the area. */
  gap?: string;
};

export const energyAtASU: AreaResearch[] = [
  {
    number: "01",
    area: "Power & Grid",
    centers: [
      {
        name: "Power Systems Engineering Research Center (PSERC)",
        href: "https://engineering.asu.edu/research-themes/climate-technology/pserc/",
        note: "An NSF industry–university center headquartered here, spanning a dozen universities and around thirty member utilities and system operators. If you want to work on the grid, this is the front door.",
      },
      {
        name: "Center of Excellence for Energy",
        href: "https://coe.engineering.asu.edu/",
        note: "The umbrella for energy work across Fulton, and the home of the energy faculty directory below.",
      },
    ],
  },
  {
    number: "02",
    area: "Renewables & Storage",
    centers: [
      {
        name: "Quantum Energy and Sustainable Solar Technologies (QESST)",
        href: "https://engineering.asu.edu/research-centers/erc/quantum-energy-sustainable-solar-technologies/",
        note: "An Engineering Research Center funded jointly by the NSF and the Department of Energy, working on photovoltaic efficiency, cost and sustainability.",
      },
      {
        name: "Solar Fab",
        href: "https://cores.research.asu.edu/solar-fab/about",
        note: "A shared core facility at MacroTechnology Works — a converted semiconductor plant in the ASU Research Park — where full-size silicon cells are actually made.",
      },
      {
        name: "AMPED — Advanced Materials, Processes and Energy Devices",
        href: "https://neweconomy.asu.edu/amped/",
        note: "Science and technology center covering energy devices and the materials inside them.",
      },
    ],
  },
  {
    number: "03",
    area: "Buildings & Efficiency",
    centers: [
      {
        name: "ASU Energy Efficiency Center",
        href: "https://engineering.asu.edu/research-themes/competitive-manufacturing/asu-energy-efficiency-center/",
        note: "The closest center on campus to what AEE certifies people to do — industrial assessment, measurement and efficiency work.",
      },
      {
        name: "EPIXC",
        href: "https://engineering.asu.edu/research-themes/climate-technology/epixc/",
        note: "A DOE Clean Energy Manufacturing Innovation Institute, led from ASU, on electrifying industrial process heat.",
      },
    ],
  },
  {
    number: "04",
    area: "AI & Data Centers",
    centers: [
      {
        name: "PSERC",
        href: "https://engineering.asu.edu/research-themes/climate-technology/pserc/",
        note: "Load forecasting and grid planning — where the data center question lands as an engineering problem rather than a headline.",
      },
    ],
    gap: "No ASU center is dedicated to this yet, which is worth noticing: it is the fastest-moving thing in Arizona energy and the research structure has not caught up. Right now the work sits inside power systems groups.",
  },
  {
    number: "05",
    area: "Materials & Manufacturing",
    centers: [
      {
        name: "ASU Center for Semiconductor Microelectronics",
        href: "https://engineering.asu.edu/research-themes/national-security/acme/",
        note: "Semiconductor research, in a state that has become a national center of gravity for it.",
      },
      {
        name: "Center for Carbon-Efficient and Advanced Manufacturing",
        href: "https://engineering.asu.edu/research-centers/asu-centers/camms/",
        note: "Materials and structures, with the carbon cost of making them treated as part of the problem.",
      },
      {
        name: "Global Hydrogen Production Technologies Center",
        href: "https://engineering.asu.edu/research-centers/asu-centers/global-hydrogen-production-technologies-center/",
        note: "Hydrogen production, which is materials and catalysis work as much as it is energy work.",
      },
      {
        name: "Center for Negative Carbon Emissions",
        href: "https://engineering.asu.edu/research-themes/climate-technology/center-for-negative-carbon-emissions/",
        note: "Direct air capture and carbon removal.",
      },
    ],
  },
  {
    number: "06",
    area: "Markets, Policy & Startups",
    centers: [
      {
        name: "ASU LightWorks",
        href: "https://globalfutures.asu.edu/lightworks/",
        note: "Energy work inside the Global Futures Laboratory, where the framing is systems and policy rather than devices.",
      },
    ],
    gap: "This one sits outside Fulton almost entirely. Look to Global Futures, the School of Sustainability and the Thunderbird and W. P. Carey schools rather than to an engineering center.",
  },
];

/**
 * The email in step four, written out. Students stall at this step more than
 * any other, and "send a short, specific email" is not advice — it is a
 * restatement of the problem.
 */
export const emailTemplate = `Subject: Undergraduate interested in your work on [topic]

Dear Professor [name],

I'm a [year] in [major] at ASU. I read your [year] paper on [specific
paper] and was interested in [one specific thing from it].

I've done [relevant coursework, project or skill — MATLAB, Python, lab
work, CAD, anything real]. I have about [n] hours a week this semester
and I'm looking for research experience.

Would you have time for a short meeting, or is there someone in your
group I should talk to?

Thank you,
[name], [ASURITE email], [phone]`;

/**
 * Recent energy work out of ASU labs, from ASU News.
 *
 * The point of this list is not the science. It is to show a student that the
 * centers above are live places doing things this year, with names attached —
 * a directory of center homepages reads as an org chart, and an org chart does
 * not make anyone want to send an email.
 *
 * Re-check each semester and drop anything older than about eighteen months.
 */
export const recentWork = [
  {
    title: "Supercharged science to drive battery breakthroughs",
    href: "https://news.asu.edu/b/20260226-supercharged-science-drive-battery-breakthroughs",
    date: "February 2026",
    note: "Xin Xu's SEEN Lab — solid state ionics and electroceramics — on a Department of Energy Early Career award.",
  },
  {
    title: "ASU's LEAPS lab marks a decade of energy impact",
    href: "https://news.asu.edu/20251212-science-and-technology-asus-leaps-lab-marks-decade-energy-impact",
    date: "December 2025",
    note: "Ten years of solar and energy systems work in one lab.",
  },
  {
    title: "ASU technical innovation enables more reliable and less expensive electricity",
    href: "https://news.asu.edu/20250417-science-and-technology-asu-technical-innovation-enables-more-reliable-and-less-expensive",
    date: "April 2025",
    note: "Grid reliability and cost — the PSERC end of the field.",
  },
  {
    title: "Turning up the light: Plants, semiconductors and fuel production",
    href: "https://news.asu.edu/20250418-science-and-technology-turning-light-plants-semiconductors-and-fuel-production",
    date: "April 2025",
    note: "Semiconductors and photochemistry aimed at making fuel.",
  },
];


/**
 * AEE's certifications, explained for people who cannot sit most of them yet.
 *
 * This is the one subject where the chapter has something to say that no other
 * student organization on campus does — AEE *is* a certifying body, and the
 * letters after an energy professional's name are usually AEE's. Students are
 * routinely told to "get certified" by people who have not checked whether
 * that is possible for them. Mostly it is not, and saying so plainly is more
 * useful than a list of credentials nobody can apply for.
 *
 * Deliberately no salary figures here. The numbers in circulation come from
 * content-marketing sites rather than a survey anyone can inspect, and the
 * rule in data/landscape.ts applies to this file too.
 */

export type Certification = {
  abbr: string;
  name: string;
  /** What the person holding it actually does. */
  body: string;
  /** Who it is for, in career terms. */
  who: string;
};

export const certifications: Certification[] = [
  {
    abbr: "CEM",
    name: "Certified Energy Manager",
    body: "AEE's flagship. A CEM works out how a building, plant or campus uses energy and how to make it use less, across electrical, mechanical, process and building systems at once. Usually the person leading an organization's energy strategy rather than one specialty inside it.",
    who: "Facility and energy managers, engineers running efficiency programs.",
  },
  {
    abbr: "CEA",
    name: "Certified Energy Auditor",
    body: "Audits commercial and industrial facilities — occupancy, operations, maintenance, code compliance — and produces the survey, the risk analysis and an investment-grade case for what to change.",
    who: "Anyone whose job is finding the savings before someone else funds them.",
  },
  {
    abbr: "CMVP",
    name: "Certified Measurement & Verification Professional",
    body: "Proves the savings were real. Sets up the measurement so that money spent on efficiency, water, demand management or renewables can be checked afterwards instead of assumed.",
    who: "The discipline behind performance contracts and utility programs.",
  },
  {
    abbr: "CBCP",
    name: "Certified Building Commissioning Professional",
    body: "Commissioning: confirming a building's systems were designed, installed and tested to do what the owner actually needs, and bringing older buildings back up to that standard.",
    who: "Construction, retrofit and building systems work.",
  },
  {
    abbr: "CEP",
    name: "Certified Energy Procurement Professional",
    body: "Buying and selling energy. Markets, contracts and rate structures rather than equipment.",
    who: "The commercial side — procurement, supply, energy trading.",
  },
];

/**
 * The eligibility reality. Sourced from AEE's own CEM candidate handbook.
 * Re-check before each academic year; fees and routes change.
 */
export const certificationPath = {
  handbook: "https://www.aeecenter.org/wp-content/uploads/2024/03/CEMHandbook-2.13.pdf",
  becomingCem: "https://www.aeecenter.org/certified-energy-manager/becoming-a-cem/",
  routes: [
    "A four-year engineering or architecture degree, or a PE or RA license, plus three years of energy engineering or management experience.",
    "A four-year physics, earth science, environmental science or technology degree, plus four years of experience.",
    "A four-year business or other degree, plus five years of experience.",
  ],
  facts: [
    { label: "Exam", value: "About 130 questions, four hours" },
    { label: "Application and exam", value: "$500, plus $250 to retake" },
    { label: "Preparatory seminar", value: "Required, typically $2,000–$5,000" },
    { label: "Credentials AEE offers", value: "31" },
    { label: "Certified since 1981", value: "More than 33,000 professionals" },
  ],
};
