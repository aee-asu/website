import type { MetadataRoute } from "next";

import { energyOpportunities } from "@/data/energyOpportunities";
import { events } from "@/data/events";
import { site } from "@/data/site";

const routes = [
  { path: "", priority: 1 },
  { path: "/about", priority: 0.8 },
  { path: "/events", priority: 0.8 },
  { path: "/hackathon", priority: 0.9 },
  { path: "/research", priority: 0.8 },
  { path: "/gallery", priority: 0.6 },
  { path: "/join", priority: 0.9 },
  { path: "/partner", priority: 0.8 },
];

const eventRoutes = [
  ...events.filter(event => event.status === "published" && event.href !== "/hackathon")
    .map(event => ({ path: event.href ?? `/events/${event.slug}`, priority: 0.7 })),
  ...energyOpportunities.map(item => ({ path: `/events/${item.slug}`, priority: 0.6 })),
];

/*
  `lastModified` is deliberately omitted. The only value available at build time
  is "now", which would tell search engines that every page changed on every
  deploy — a worse signal than no signal at all.
*/
export default function sitemap(): MetadataRoute.Sitemap {
  return [...routes, ...eventRoutes].map((route) => ({
    url: `${site.url}${route.path}`,
    changeFrequency: route.path === "/events" ? "weekly" : "monthly",
    priority: route.priority,
  }));
}
