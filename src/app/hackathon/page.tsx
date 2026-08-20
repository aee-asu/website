import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { JoinCTA } from "@/components/JoinCTA";
import { JsonLd } from "@/components/JsonLd";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { events } from "@/data/events";
import { links } from "@/data/site";
import { eventSchema, pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "ASU Energy Hackathon",
  description:
    "The ASU Energy Hackathon is a 24-hour, prototype-first competition run by the Association of Energy Engineers student chapter at Arizona State University, across four tracks: AI, software, hardware and energy efficiency.",
  path: "/hackathon",
});

const DEVPOST = "https://asu-energy-hackathon.devpost.com";

const tracks = [
  {
    name: "AI for Energy",
    body: "Forecasting, optimisation and decision support — anywhere a model can do something a spreadsheet cannot.",
  },
  {
    name: "Software for Energy",
    body: "Tools for the people who run energy systems: monitoring, dispatch, markets, reporting.",
  },
  {
    name: "Hardware for Energy",
    body: "Something you can put on a table. Sensing, power electronics, storage, a working rig.",
  },
  {
    name: "Energy Efficiency",
    body: "Buildings and industry — auditing, retrofits, controls, and the unglamorous savings that add up.",
  },
];

const facts = [
  { label: "When", value: "18–19 April 2026, from 10:00 AM Saturday" },
  { label: "Where", value: "EDC 117, ASU Tempe campus" },
  { label: "Format", value: "24 hours, prototype-first, overnight room closure" },
  { label: "Tracks", value: "Four, with industry challenge statements" },
  { label: "Run with", value: "IEEE, ASME and Robotics at ASU" },
  { label: "Food", value: "Lunch Saturday, brunch during judging Sunday" },
];

export default function HackathonPage() {
  const hackathon = events.find((event) => event.slug === "asu-energy-hackathon-2026");

  return (
    <>
      {hackathon ? <JsonLd data={eventSchema(hackathon, "/hackathon")} /> : null}

      <section className="shell pb-14 pt-16 md:pb-20 md:pt-24">
        <Reveal>
          <p className="label text-maroon">Competition</p>
          <h1 className="display mt-10 max-w-[14ch] text-[clamp(2.5rem,7.5vw,6rem)] text-ink">
            ASU Energy Hackathon
          </h1>
        </Reveal>
        <Reveal delay={80}>
          <p className="measure mt-10 text-lg leading-relaxed text-graphite md:text-xl">
            Twenty-four hours, four tracks, and real challenge statements from people working in
            the industry. Students from any major build something that works, then defend it in
            front of judges on Sunday morning. The chapter ran the first one in April 2026 with
            the IEEE, ASME and Robotics student organizations.
          </p>
        </Reveal>
      </section>

      <Reveal>
        <figure>
          <Image
            src="/images/events/hackathon-2026-group.jpg"
            alt="Participants, organizers and judges of the 2026 ASU Energy Hackathon standing together at the front of the lecture hall after the awards."
            width={1024}
            height={768}
            sizes="100vw"
            priority
            className="h-[46vh] w-full object-cover object-center md:h-[64vh]"
          />
        </figure>
      </Reveal>

      {/* ------------------------------------------------------------- The facts */}
      <section className="shell py-20 md:py-28">
        <SectionHeading number="01" eyebrow="The 2026 event" title="How it ran" />

        <dl className="mt-12 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {facts.map((fact, index) => (
            <Reveal key={fact.label} delay={index * 50}>
              <div className="rule-t pt-5">
                <dt className="label text-ash">{fact.label}</dt>
                <dd className="mt-3 text-[1.0625rem] leading-relaxed text-ink">{fact.value}</dd>
              </div>
            </Reveal>
          ))}
        </dl>
      </section>

      {/* ---------------------------------------------------------------- Tracks */}
      <section className="bg-bone">
        <div className="shell py-20 md:py-28">
          <SectionHeading
            number="02"
            eyebrow="Tracks"
            title="Four ways in"
            intro={
              <p>
                Teams declare a track and work against a challenge statement written by someone
                who deals with that problem for a living. You do not need to arrive with a team or
                an idea.
              </p>
            }
          />

          <ul className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2">
            {tracks.map((track, index) => (
              <li key={track.name}>
                <Reveal delay={index * 60}>
                  <div className="rule-t pt-6">
                    <h3 className="display text-[1.5rem] text-ink md:text-[1.75rem]">
                      {track.name}
                    </h3>
                    <p className="mt-3 max-w-[40ch] leading-relaxed text-graphite">{track.body}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ----------------------------------------------------------- Two pictures */}
      <section className="shell py-20 md:py-28">
        <div className="grid gap-6 md:grid-cols-2">
          <Reveal>
            <figure>
              <Image
                src="/images/events/hackathon-2026-demo.jpg"
                alt="A team demonstrating their prototype on a laptop to a judge during the hackathon."
                width={1200}
                height={1600}
                sizes="(min-width: 768px) 50vw, 100vw"
                className="h-full w-full object-cover"
              />
            </figure>
          </Reveal>
          <Reveal delay={80}>
            <figure>
              <Image
                src="/images/events/hackathon-2026-awards.jpg"
                alt="Organizers presenting awards at the front of the room at the end of the hackathon."
                width={1800}
                height={2400}
                sizes="(min-width: 768px) 50vw, 100vw"
                className="h-full w-full object-cover"
              />
            </figure>
          </Reveal>
        </div>
        <Reveal>
          <p className="measure mt-8 text-sm leading-relaxed text-ash">
            More from the weekend is in the{" "}
            <Link href="/gallery" className="link-underline text-ink">
              gallery
            </Link>
            , and the 2026 submissions are on{" "}
            <a href={DEVPOST} className="link-underline text-ink">
              Devpost ↗
            </a>
            .
          </p>
        </Reveal>
      </section>

      {/* ------------------------------------------------------------ Next time */}
      <section className="bg-bone">
        <div className="shell py-20 md:py-28">
          <SectionHeading number="03" eyebrow="The next one" title="How to be part of it" />

          <div className="mt-12 grid gap-10 md:grid-cols-12">
            <Reveal className="md:col-span-6">
              <h3 className="display text-[1.5rem] text-ink md:text-[1.75rem]">If you study here</h3>
              <p className="measure mt-4 leading-relaxed text-graphite">
                Dates for the next hackathon go on the{" "}
                <Link href="/events" className="link-underline text-ink">
                  events page
                </Link>{" "}
                and to the chapter Discord first. Any major, any year — the strongest teams in 2026
                were the mixed ones.
              </p>
            </Reveal>

            <Reveal delay={80} className="md:col-span-5 md:col-start-8">
              <h3 className="display text-[1.5rem] text-ink md:text-[1.75rem]">
                If you work in the industry
              </h3>
              <p className="measure mt-4 leading-relaxed text-graphite">
                Set a challenge statement, judge, mentor for an evening, or back the prize fund.{" "}
                <Link href="/partner" className="link-underline text-ink">
                  Partner with us
                </Link>{" "}
                sets out what that looks like, or write to{" "}
                <a href={`mailto:${links.email}`} className="link-underline text-ink">
                  {links.email}
                </a>
                .
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <JoinCTA />
    </>
  );
}
