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

    /hackathon used to redirect here too. It is a page of its own now, which is
    what anyone following an old link was looking for in the first place.
  */
  async redirects() {
    return [
      { source: "/benchmarking", destination: "/research", permanent: true },
    ];
  },
};

export default nextConfig;
