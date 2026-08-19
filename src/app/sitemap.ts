import type { MetadataRoute } from "next";

import { site } from "@/data/site";

const routes = [
  { path: "", priority: 1 },
  { path: "/about", priority: 0.8 },
  { path: "/events", priority: 0.8 },
  { path: "/research", priority: 0.8 },
  { path: "/gallery", priority: 0.6 },
  { path: "/join", priority: 0.9 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map((route) => ({
    url: `${site.url}${route.path}`,
    lastModified,
    changeFrequency: route.path === "/events" ? "weekly" : "monthly",
    priority: route.priority,
  }));
}
