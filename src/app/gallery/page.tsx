import type { Metadata } from "next";
import Link from "next/link";

import { GalleryGrid } from "@/components/GalleryGrid";
import { JoinCTA } from "@/components/JoinCTA";
import { Reveal } from "@/components/Reveal";
import { gallery } from "@/data/gallery";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Gallery",
  description:
    "A visual archive of AEE at ASU — students, judges and prototypes from the chapter’s events.",
  path: "/gallery",
});

export default function GalleryPage() {
  return (
    <>
      <section className="shell pb-14 pt-16 md:pb-20 md:pt-24">
        <Reveal>
          <p className="label text-maroon">Gallery</p>
          <h1 className="display mt-10 max-w-[16ch] text-[clamp(2.5rem,7.5vw,6rem)] text-ink">
            What it actually looks like.
          </h1>
        </Reveal>
        <Reveal delay={80}>
          <p className="measure mt-10 text-lg leading-relaxed text-graphite md:text-xl">
            A selected archive rather than every photo we have. Right now it is almost entirely
            the 2026 ASU Energy Hackathon, because that is where the chapter&rsquo;s first year
            ended up. It will grow.
          </p>
        </Reveal>
      </section>

      <section className="shell rule-t pb-20 pt-12 md:pb-28">
        <GalleryGrid images={gallery} />

        <Reveal className="rule-t mt-16 pt-6">
          <p className="measure text-sm leading-relaxed text-ash">
            Photographs are from chapter events at Arizona State University. If you appear in one
            of these and would like it removed,{" "}
            <Link href="/join" className="link-underline text-graphite">
              get in touch
            </Link>{" "}
            and we will take it down.
          </p>
        </Reveal>
      </section>

      <JoinCTA />
    </>
  );
}
