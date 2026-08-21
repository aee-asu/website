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
    run: "Challenges from APS and Collide.io",
    body: "Forecasting, optimization and decision support. Anywhere a model can do something a spreadsheet can't.",
    challenges: [
      "APS: build an AI solution for predictive and spatially aware grid applications.",
      "Collide.io: AI-driven solutions for energy systems, using machine learning and forecasting.",
    ],
  },
  {
    name: "Software for Energy",
    run: "Sponsored by OpenVPP",
    body: "Tools for the people who run energy systems: monitoring, dispatch, markets, reporting.",
    challenges: [
      "OpenVPP: design intelligent orchestration for electric vehicles as flexible grid assets.",
    ],
  },
  {
    name: "Hardware for Energy",
    run: "Partner club: IEEE",
    body: "Something you can put on a table. Sensing, power electronics, storage, a rig that runs.",
    challenges: [
      "Battery Lie Detector: measure the true usable capacity and state of health of a lithium-ion cell, rather than trusting the label.",
      "Energy Debt Tracker: a solar-powered ESP32 system tracking energy harvested against energy consumed, adapting across surplus, balanced and deficit states.",
    ],
  },
  {
    name: "Energy Efficiency",
    run: "Sponsored by BKPK",
    body: "Buildings and industry: auditing, retrofits, controls, and the boring savings that add up.",
    challenges: [
      "BKPK: design a high-efficiency bidirectional DC-DC converter connecting a high-voltage battery system to an 800 V DC data center bus.",
    ],
  },
];

/*
  Who backed the 2026 hackathon. Confirmed by the chapter directly rather than
  read off Devpost — the Devpost logo grid also carried AEE and the IEEE student
  branch, who were organizers rather than sponsors, alongside several names that
  did not end up backing the event.

  SRP is on this list although it does not appear on Devpost; confirmed by the
  chapter as a hackathon sponsor.

  Names only, no logos: logos need brand assets and separate permission. Every
  name here was confirmed as cleared for public listing in August 2026. The
  Partner page promises we will not call anyone a sponsor in public without
  asking first — before adding a name, get that confirmation.
*/
const sponsors2026 = [
  "OpenVPP",
  "BKPK",
  "Collide.io",
  "Lovable",
  "SRP",
  "eSeed Challenge, powered by the Prescott Student Venture Fund",
];

const judgingCriteria = [
  "Technical execution",
  "Problem relevance",
  "Quality of prototype",
  "Interdisciplinary integration",
  "Energy sector insight",
];

const facts = [
  { label: "When", value: "18–19 April 2026, from 10:00 AM Saturday" },
  { label: "Where", value: "EDC 117, ASU Tempe campus" },
  { label: "Participants", value: "123" },
  { label: "Format", value: "24 hours, prototype-first, overnight room closure" },
  { label: "Teams", value: "Two to four people" },
  { label: "Tracks", value: "Four, with six industry challenge statements" },
  { label: "Prizes", value: "$4,000+ across five challenges" },
  { label: "Run with", value: "The IEEE student branch at ASU" },
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
            the industry. Students from any major build something that works, then defend it to
            judges on Sunday morning. We ran the first one in April 2026 with the IEEE student
            branch at ASU.
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
                Teams pick a track and work against a challenge statement written by someone who
                deals with that problem for a living. You don&rsquo;t need to show up with a team
                or an idea.
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
                    <p className="label mt-2 text-maroon">{track.run}</p>
                    <p className="mt-3 max-w-[40ch] leading-relaxed text-graphite">{track.body}</p>
                    <ul className="mt-5 space-y-3">
                      {track.challenges.map((challenge) => (
                        <li
                          key={challenge}
                          className="max-w-[44ch] border-l-2 border-maroon pl-4 text-[0.9375rem] leading-relaxed text-ink"
                        >
                          {challenge}
                        </li>
                      ))}
                    </ul>
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
                alt="A team demonstrating their prototype on a laptop during the hackathon."
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
                alt="Awards being presented at the front of the room at the end of the hackathon."
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

      {/* ------------------------------------------------- Judging and backers */}
      <section className="shell py-20 md:py-28">
        <SectionHeading
          number="03"
          eyebrow="The 2026 event"
          title="How it was judged, and who backed it"
          intro={
            <p>
              Twelve judges, from utilities, energy startups, venture funds and ASU labs, working
              to five published criteria. Everything here is a record of the 2026 hackathon rather
              than a standing arrangement.
            </p>
          }
        />

        <div className="mt-14 grid gap-12 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-6">
            <h3 className="label text-maroon">Judged on</h3>
            <ul className="mt-6">
              {judgingCriteria.map((criterion) => (
                <li key={criterion} className="rule-t py-4 text-[1.0625rem] text-ink">
                  {criterion}
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-5 md:col-start-8">
            <h3 className="label text-maroon">Sponsors</h3>
            <ul className="mt-6">
              {sponsors2026.map((sponsor) => (
                <li key={sponsor} className="rule-t py-4 text-[1.0625rem] leading-snug text-ink">
                  {sponsor}
                </li>
              ))}
            </ul>
            <p className="mt-6 max-w-[40ch] text-sm leading-relaxed text-ash">
              Prizes, challenge statements, mentors and food. Run with the IEEE student
              branch. If you want to be on this list next time, the{" "}
              <Link href="/partner" className="link-underline text-graphite">
                partner page
              </Link>{" "}
              says how.
            </p>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------ Next time */}
      <section className="bg-bone">
        <div className="shell py-20 md:py-28">
          <SectionHeading number="04" eyebrow="The next one" title="How to be part of it" />

          <div className="mt-12 grid gap-10 md:grid-cols-12">
            <Reveal className="md:col-span-6">
              <h3 className="display text-[1.5rem] text-ink md:text-[1.75rem]">If you study here</h3>
              <p className="measure mt-4 leading-relaxed text-graphite">
                Dates for the next hackathon go on the{" "}
                <Link href="/events" className="link-underline text-ink">
                  events page
                </Link>{" "}
                and into the chapter Discord first. Any major, any year &mdash; the strongest
                teams in 2026 were the mixed ones.
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
