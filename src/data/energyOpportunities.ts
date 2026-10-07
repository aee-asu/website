/** Selected third-party opportunities, separate from AEE chapter events. */
export type EnergyOpportunity = {
  title: string;
  date: string;
  time: string;
  location: string;
  host: string;
  description: string;
  sourceUrl: string;
};

export const energyOpportunities: EnergyOpportunity[] = [
  {
    title: "Renewable energy storage challenges with Ryan Milcarek",
    date: "2026-10-14",
    time: "Noon–1:00 PM",
    location: "Online",
    host: "ASU Fulton Schools of Engineering",
    description:
      "An interactive webinar on how several days of low wind and solar generation affect storage needs, grid reliability and renewable generation siting. Milcarek will discuss historical grid-load and weather data from Arizona, the Pacific Northwest and the Northeast, followed by a live Q&A.",
    sourceUrl:
      "https://innercircle.engineering.asu.edu/2026/10/explore-renewable-energy-storage-challenges-with-ryan-milcarek-oct-14/",
  },
];
