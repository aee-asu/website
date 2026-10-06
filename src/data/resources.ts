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

/** Verified against official program pages on October 6, 2026. */
export const fundingOpportunities = [
  {
    title: "FURI — undergraduate research",
    deadline: "October 14, 2026, at 5 p.m.",
    href: "https://students.engineering.asu.edu/furi/",
    eligibility: "Full-time Fulton undergraduates in good academic standing, from their second ASU semester onward. Online students may apply.",
    note: "Spring 2027 faculty-mentored research: $1,500 stipend per funded semester and eligibility to request up to $400 for supplies. Find a Fulton faculty mentor before preparing your application.",
  },
  {
    title: "MORE — master's research",
    deadline: "October 14, 2026 — check the program for the submission time",
    href: "https://students.engineering.asu.edu/graduate/research/more/",
    eligibility: "Fulton master's students in good academic standing, from their second ASU semester onward. Academic and employment eligibility rules apply.",
    note: "Spring 2027 research with a Fulton faculty mentor: one semester of funding, a $1,500 stipend and eligibility to request up to $400 for supplies. Review restrictions on existing assistantships with the program team.",
  },
  {
    title: "ASU–TSMC Accelerated Master's Pathway",
    deadline: "October 14, 2026, by 11:59 p.m.",
    href: "https://innercircle.engineering.asu.edu/2026/09/help-solve-challenges-in-semiconductor-manufacturing-design-and-materials-apply-by-oct-14/",
    eligibility: "Fulton students in good academic standing who are currently in the master's year of an Accelerated Master's program — the +1 year of a 4+1.",
    note: "Upon project completion, TSMC provides a $7,500 taxable student stipend and a $1,140 faculty payment. Projects run for one semester with a Fulton faculty mentor; the project topic must stay the same. Priority areas include solar energy, batteries, power electronics and semiconductor materials. Requirements include a completed project and final report, a semiconductor industry portfolio, a TSMC Day presentation and engagement with TSMC staff. Questions: more@asu.edu.",
  },
];

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
        title: "MORE — Master’s Opportunity for Research in Engineering",
        href: "https://students.engineering.asu.edu/graduate/research/more/",
        note: "Faculty-mentored research for eligible Fulton master's students. Review the program's academic and employment eligibility requirements before applying.",
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
        href: "https://impactarizona.asu.edu/amped-advanced-materials-processes-and-energy-devices-stc/",
        note: "Science and technology center covering energy devices and the materials inside them.",
      },
    ],
  },
  {
    number: "03",
    area: "Buildings & Efficiency",
    centers: [
      {
        name: "ASU Energy Efficiency Center — ITAC@ASU",
        href: "https://eec.asu.edu/",
        note: "A DOE-funded Industrial Training and Assessment Center. Students help conduct free, one-day energy assessments for qualifying small and medium-sized manufacturers and other eligible facilities, identifying energy, waste and productivity improvements while learning measurement, analysis and technical reporting.",
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
    gap: "Data-center energy research also spans multiple ASU units. The ASU–DCX MARVEL research announcement in Recent work below connects reactor-grid interactions, AI workloads and thermal-to-electric systems.",
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
 * Recent energy work from official ASU News, Engineering News and school reports.
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
    title: "DOE recognizes ASU students' industrial energy assessments",
    href: "https://news.asu.edu/20261005-science-and-technology-doe-lauds-student-program-provides-energy-audits-state-businesses",
    date: "October 5, 2026",
    note: "Patrick Phelan's ITAC team trains students through free, one-day assessments for eligible businesses. The report covers facility visits, measurement equipment, utility analysis and technical reporting — practical work connecting energy efficiency with manufacturing.",
  },
  {
    title: "Can game theory save the grid?",
    href: "https://news.engineering.asu.edu/2026/09/can-game-theory-save-the-grid/",
    date: "September 25, 2026",
    note: "Margaret Garcia and Paul Grogan are starting an NSF-funded study of how private solar, battery and water-reuse decisions affect shared infrastructure. The project will model reliability, affordability and utility incentives.",
  },
  {
    title: "Continuous power for extreme environments",
    href: "https://news.engineering.asu.edu/2026/09/continuous-power-for-extreme-environments/",
    date: "September 8, 2026",
    note: "Nick Rolston's Army-funded project investigates radiation damage and recovery in semiconductor materials for radiovoltaic power. This is foundational materials research toward long-lived remote power sources, not a deployed power system.",
  },
  {
    title: "ASU awarded DOE Genesis Mission grant for grid reliability research",
    href: "https://news.asu.edu/20260722-science-and-technology-asu-awarded-doe-genesis-mission-grant-electrical-grid-reliability",
    date: "July 22, 2026",
    note: "Karen Fisher-Vanden will lead an ASU team developing AI-assisted scenario planning for grid resilience. The announced project will assess demand changes, new technologies and extreme weather with national-lab and university collaborators.",
  },
  {
    title: "Advancing solar cell technology through materials research",
    href: "https://semte.engineering.asu.edu/news/advancing-solar-cell-technology-through-materials-research/",
    date: "June 12, 2026",
    note: "Feng Yan's lab studies thin-film and tandem solar cells, including perovskites. The team uses machine learning to narrow fabrication conditions and guide experiments on semiconductor materials and device performance.",
  },
  {
    title: "Supercharged science to drive battery breakthroughs",
    href: "https://news.engineering.asu.edu/2026/02/supercharged-science-to-drive-battery-breakthroughs/",
    date: "February 19, 2026",
    note: "Xin Xu's SEEN Lab received a DOE Early Career award to study ion behavior under extreme electric fields. The research could inform batteries and fuel cells; the article describes research goals, not a finished battery product.",
  },
  {
    title: "Unlocking the next generation of solar energy",
    href: "https://news.engineering.asu.edu/2025/12/unlocking-the-next-generation-of-solar-energy/",
    date: "December 19, 2025",
    note: "ASU spinout Beyond Silicon, co-founded by Jason Yu and Zachary Holman, is developing perovskite-on-silicon tandem cells. The report connects device architecture with manufacturing compatibility and the company's commercialization work.",
  },
  {
    title: "ASU's LEAPS lab marks a decade of energy impact",
    href: "https://news.asu.edu/20251212-science-and-technology-asus-leaps-lab-marks-decade-energy-impact",
    date: "December 12, 2025",
    note: "Nathan Johnson's LEAPS team reviews a decade of microgrid development, energy planning and workforce training. Projects include tribal electrification in Arizona and work supporting mini-grid development in Fiji.",
  },
  {
    title: "ASU and DCX selected to study microreactor power for data centers",
    href: "https://news.asu.edu/20251209-science-and-technology-us-department-energy-selects-asu-and-dcx-pioneer-new-ways-power",
    date: "December 9, 2025",
    note: "A DOE MARVEL selection announcement outlines planned work on reactor-grid interactions, AI load modeling and thermal-to-electric optimization. It does not report an operating ASU nuclear-powered data center.",
  },
  {
    title: "Building a blueprint for rural energy resilience",
    href: "https://news.engineering.asu.edu/2025/08/building-a-blueprint-for-rural-energy-resilience/",
    date: "August 12, 2025",
    note: "Kristen Parrish and LEAPS researchers are supporting a Hopi Utilities Corporation and BoxPower project combining solar, battery storage and existing diesel generation. The report describes design and sizing work, with operation still prospective at publication.",
  },
  {
    title: "Turning up the light: Plants, semiconductors and fuel production",
    href: "https://news.asu.edu/20250418-science-and-technology-turning-light-plants-semiconductors-and-fuel-production",
    date: "April 18, 2025",
    note: "Gary Moore's group studied how illumination changes hydrogen-forming reactions on a coated semiconductor. The reported ACS Catalysis study connects light intensity, reaction conditions and solar-fuel production.",
  },
  {
    title: "ASU technical innovation enables more reliable and less expensive electricity",
    href: "https://news.asu.edu/20250417-science-and-technology-asu-technical-innovation-enables-more-reliable-and-less-expensive",
    date: "April 17, 2025",
    note: "James Nelson's LEAPS team demonstrated ACES energy controls at AZ DEMA's Papago Park site. ASU reports lower utility bills and better performance during simulated outages at that demonstration site, with SRP supporting the project.",
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
    "A four-year business or related degree, plus five years of experience.",
    "A two-year energy management associate degree plus six years, another two-year associate degree plus eight years, or no degree plus ten years of related experience.",
  ],
  facts: [
    { label: "Exam", value: "About 130 questions, four hours" },
    { label: "Application and exam", value: "$500, plus $250 to retake" },
    { label: "Preparatory seminar", value: "Required, typically $2,000–$5,000" },
    { label: "Credentials AEE offers", value: "31" },
    { label: "Certified since 1981", value: "More than 33,000 professionals" },
  ],
};
