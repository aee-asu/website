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
      "How electricity gets made, moved and paid for, and what it takes to keep the Arizona grid up in August.",
    topics: ["Grid reliability", "Utilities", "Transmission", "Distributed energy"],
  },
  {
    number: "02",
    title: "Renewables & Storage",
    description:
      "Solar and batteries, and the problems that show up once you try to run a whole system on them.",
    topics: ["Solar & PV", "Battery systems", "Storage economics", "Interconnection"],
  },
  {
    number: "03",
    title: "Buildings & Efficiency",
    description:
      "Auditing, measurement and controls. It's what AEE's certifications are built on, and it's usually the cheapest energy you can save.",
    topics: ["Energy audits", "HVAC & controls", "Measurement", "Retrofits"],
  },
  {
    number: "04",
    title: "AI & Data Centers",
    description:
      "Data centers are showing up faster than new generation can. Forecasting, siting, cooling, and what all of it means for Phoenix.",
    topics: ["Load growth", "Forecasting", "Cooling", "Siting"],
  },
  {
    number: "05",
    title: "Materials & Manufacturing",
    description:
      "Semiconductors, power electronics, and the materials work that sets the ceiling on how efficient a device can be.",
    topics: ["Semiconductors", "Power electronics", "Energy materials", "Fabrication"],
  },
  {
    number: "06",
    title: "Markets, Policy & Startups",
    description:
      "Rate design, regulation, and the companies being built around them, including the ones getting started here in Arizona.",
    topics: ["Energy markets", "Regulation", "Startups", "Finance"],
  },
];
