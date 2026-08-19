/**
 * The six areas the chapter programs around. Keep the list at six — it is a
 * navigational device on the homepage, not a taxonomy.
 */

export type FocusArea = {
  number: string;
  title: string;
  description: string;
  topics: string[];
};

export const focusAreas: FocusArea[] = [
  {
    number: "01",
    title: "Power & Grid",
    description:
      "How electricity actually gets made, moved and paid for — and what keeps the Arizona grid standing up in August.",
    topics: ["Grid reliability", "Utilities", "Transmission", "Distributed energy"],
  },
  {
    number: "02",
    title: "Renewables & Storage",
    description:
      "Solar, batteries and the engineering problems that show up once you try to run a system on them.",
    topics: ["Solar & PV", "Battery systems", "Storage economics", "Interconnection"],
  },
  {
    number: "03",
    title: "Buildings & Efficiency",
    description:
      "Auditing, measurement and controls — the work behind AEE's own certifications, and the fastest energy you can save.",
    topics: ["Energy audits", "HVAC & controls", "Measurement", "Retrofits"],
  },
  {
    number: "04",
    title: "AI & Data Centers",
    description:
      "New load arriving faster than new generation. Forecasting, siting, cooling, and what data centers mean for Phoenix.",
    topics: ["Load growth", "Forecasting", "Cooling", "Siting"],
  },
  {
    number: "05",
    title: "Materials & Manufacturing",
    description:
      "Semiconductors, power electronics and the materials work that decides how efficient a device can get.",
    topics: ["Semiconductors", "Power electronics", "Energy materials", "Fabrication"],
  },
  {
    number: "06",
    title: "Markets, Policy & Startups",
    description:
      "Rate design, regulation and the companies being built around them — including the ones started here.",
    topics: ["Energy markets", "Regulation", "Startups", "Finance"],
  },
];
