import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Do not auto-generate AGENTS.md / CLAUDE.md into the repository root.
  agentRules: false,
  images: {
    formats: ["image/avif", "image/webp"],
  },

  /*
    Routes from the previous aeeasu.com site. Anything already shared, whether
    in a Discord message, an email to a sponsor or a QR code on a printed
    flyer, should land somewhere sensible rather than on a 404.
  */
  async redirects() {
    return [
      { source: "/hackathon", destination: "/events", permanent: true },
      { source: "/benchmarking", destination: "/research", permanent: true },
    ];
  },
};

export default nextConfig;
