import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, Inter, Newsreader } from "next/font/google";

import { JsonLd } from "@/components/JsonLd";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { site } from "@/data/site";
import { organizationSchema, websiteSchema } from "@/lib/seo";
import "@/styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-newsreader",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500"],
  variable: "--font-plex-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.shortName} | Association of Energy Engineers`,
    template: `%s | ${site.shortName}`,
  },
  description: site.description,
  applicationName: site.legalName,
  keywords: [
    "AEE at ASU",
    "Association of Energy Engineers",
    "Arizona State University student chapter",
    "energy engineering",
    "power systems",
    "energy student organization",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: site.legalName,
    title: `${site.shortName} | Association of Energy Engineers`,
    description: site.description,
    url: site.url,
    locale: "en_US",
    images: [
      {
        url: "/images/og/og-default.jpg",
        width: 1200,
        height: 630,
        alt: `${site.legalName} — students at work during the ASU Energy Hackathon`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.shortName} | Association of Energy Engineers`,
    description: site.description,
    images: ["/images/og/og-default.jpg"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${newsreader.variable} ${plexMono.variable}`}
    >
      <body className="min-h-screen bg-paper antialiased">
        <JsonLd data={organizationSchema()} />
        <JsonLd data={websiteSchema()} />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-6 focus:top-6 focus:z-[70] focus:bg-ink focus:px-5 focus:py-3 focus:text-paper"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
