/** Selected third-party opportunities, separate from AEE chapter events. */
export type EnergyOpportunity = {
  slug: string;
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
    slug: "ryan-milcarek-energy-storage-webinar-2026",
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
  {
    slug: "careers-sustainability-data-centers-2026",
    title: "Careers in Sustainability, Data Centers, and Community Engagement",
    date: "2026-11-13",
    time: "9:00 AM–Noon",
    location: "Walton Center for Planetary Health, room 107, Tempe campus",
    host: "Arizona State University",
    description:
      "Three panels of industry leaders, public officials and nonprofit professionals on how data centers intersect with sustainability, resource use and local communities, and on career paths across these fields: building the data center ecosystem (power, projects, circularity and innovation); sustainability at scale (energy, water and responsible growth); and community engagement in practice. Free and open to students, faculty, staff and the public.",
    sourceUrl: "https://asuevents.asu.edu/event/careers-sustainability-data-centers-and-community-engagement",
  },
];
