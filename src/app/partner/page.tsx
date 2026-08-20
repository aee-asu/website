import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { links, site } from "@/data/site";

export const metadata: Metadata = {
  title: "Partner with us",
  description:
    "How companies, labs, utilities, startups and ASU alumni can work with the Association of Energy Engineers Student Chapter at Arizona State University — speaking, mentoring, hosting a visit, setting a challenge or supporting an event.",
  alternates: { canonical: "/partner" },
};

/** Prefilled so a first email already carries what we need to reply properly. */
const mailto = `mailto:${links.email}?subject=${encodeURIComponent(
  "Working with AEE at ASU",
)}&body=${encodeURIComponent(
  "Who you are and what your organization does:\n\nWhat you have in mind:\n\nRough timing:\n\n",
)}`;

const ways = [
  {
    label: "Speak",
    body: "An hour in a room with students who chose to be there. Talks land best when they are about the actual work — what the problem was, what you tried, what it cost.",
  },
  {
    label: "Run a training session",
    body: "Hands-on beats slides. Past sessions have covered energy efficiency auditing and microgrid design, with equipment on the table.",
  },
  {
    label: "Host a visit",
    body: "A plant, a control room, a lab, a site. Students see more in ninety minutes on site than in a semester of coursework.",
  },
  {
    label: "Set a challenge",
    body: "Give our hackathon a real problem from your work. You get a weekend of prototypes against it; the students get a brief that is not hypothetical.",
  },
  {
    label: "Judge or mentor",
    body: "Two days in April, or a single evening. Mentoring is the part students consistently rate highest.",
  },
  {
    label: "Support an event",
    body: "Prizes, food, materials, travel for a site visit. Small amounts go a long way at student-organization scale.",
  },
  {
    label: "Recruit",
    body: "Internships, co-ops, graduate roles, thesis projects. We pass an opening to the members it fits rather than blanket-posting it.",
  },
  {
    label: "Something else",
    body: "The chapter is young and most of what it does started as somebody's suggestion. If you have one, send it.",
  },
];

const limits = [
  "Put your name or logo on this site, or call you a sponsor or partner anywhere public, without asking you first.",
  "Pass member contact details to anyone. If you have a role to fill, we will take it to the members it suits.",
  "Promise numbers we cannot stand behind. Ask what turnout has been for a format and we will tell you honestly.",
];

export default function PartnerPage() {
  return (
    <>
      <section className="shell pb-14 pt-16 md:pb-20 md:pt-24">
        <Reveal>
          <p className="label text-maroon">Partner with us</p>
          <h1 className="display mt-10 max-w-[16ch] text-[clamp(2.5rem,7.5vw,6rem)] text-ink">
            Bring us a real problem.
          </h1>
        </Reveal>
        <Reveal delay={80}>
          <p className="measure mt-10 text-lg leading-relaxed text-graphite md:text-xl">
            This page is for companies, utilities, startups, national labs, ASU faculty and alumni
            who want to work with the chapter. One email reaches the officers directly — there is
            no form to fill in and nobody to get past.
          </p>
        </Reveal>
      </section>

      {/* ------------------------------------------------------ Primary action */}
      <section className="shell pb-20 md:pb-28">
        <Reveal>
          <a
            href={mailto}
            className="group block bg-ink px-7 py-12 text-paper transition-colors hover:bg-maroon md:px-14 md:py-16"
          >
            <span className="label text-gold">The direct route</span>
            <span className="display mt-6 block break-words text-[clamp(1.375rem,4.5vw,3.25rem)]">
              {links.email}
            </span>
            <span className="mt-6 flex flex-wrap items-baseline justify-between gap-4">
              <span className="max-w-[52ch] leading-relaxed text-mist">
                Tell us who you are, what you have in mind and roughly when. An officer replies —
                we are students, so allow a few days in term time.
              </span>
              <span
                aria-hidden
                className="text-2xl transition-transform duration-300 group-hover:translate-x-2"
              >
                →
              </span>
            </span>
          </a>
        </Reveal>
      </section>

      {/* -------------------------------------------------------------- Ways in */}
      <section className="shell pb-20 md:pb-28">
        <SectionHeading
          number="01"
          eyebrow="Ways in"
          title="What working with us looks like"
          intro={
            <p>
              None of this is a package or a tier. Pick whatever fits what you can actually give —
              an afternoon is worth as much to us as a cheque.
            </p>
          }
        />

        <ul className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {ways.map((way, index) => (
            <li key={way.label}>
              <Reveal delay={index * 50}>
                <div className="rule-t pt-6">
                  <h3 className="text-xl text-ink">{way.label}</h3>
                  <p className="mt-3 max-w-[34ch] text-sm leading-relaxed text-graphite">
                    {way.body}
                  </p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </section>

      {/* ------------------------------------------------------ Who you reach */}
      <section className="bg-bone">
        <div className="shell py-20 md:py-28">
          <SectionHeading
            number="02"
            eyebrow="Who you would be reaching"
            title="A young chapter that runs things"
          />

          <div className="mt-12 grid gap-10 md:grid-cols-12">
            <Reveal className="md:col-span-6">
              <div className="measure space-y-5 text-[1.0625rem] leading-relaxed text-graphite md:text-lg">
                <p>
                  Members are undergraduate, master&rsquo;s and PhD students, mostly from the Ira A.
                  Fulton Schools of Engineering but also from sustainability, business, computing
                  and policy. Sessions run on the Tempe campus, and we have taken groups out to the
                  Polytechnic campus for lab work.
                </p>
                <p>
                  In our first spring we ran a speaker session roughly every fortnight and closed
                  the year with a two-day energy hackathon across four tracks, held with the IEEE
                  and ASME student branches. Several sessions were co-hosted with other chapters,
                  which is usually the right way to reach more students.
                </p>
                <p>
                  We are a registered student organization — not a consultancy, and not an arm of
                  the university. Everything is run by students around their coursework.
                </p>
              </div>
            </Reveal>

            <Reveal delay={80} className="md:col-span-5 md:col-start-8">
              <h3 className="label text-maroon">What we will not do</h3>
              <ul className="mt-6">
                {limits.map((limit) => (
                  <li
                    key={limit}
                    className="rule-t py-4 text-[1.0625rem] leading-relaxed text-graphite"
                  >
                    {limit}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------- Other routes */}
      <section className="shell py-20 md:py-28">
        <SectionHeading
          number="03"
          eyebrow="Other routes"
          title="If email is not your thing"
          intro={
            <p>
              {site.plainName} is on LinkedIn, and everything we run is posted to Instagram — both
              reach the same officers. Students looking to join should start on the{" "}
              <Link href="/join" className="link-underline text-ink">
                Join page
              </Link>{" "}
              instead.
            </p>
          }
        />
        <Reveal delay={60}>
          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4">
            <a href={links.linkedin} className="link-underline text-lg text-ink">
              LinkedIn ↗
            </a>
            <a href={links.instagram} className="link-underline text-lg text-ink">
              Instagram ↗
            </a>
            <a href={`mailto:${links.email}`} className="link-underline text-lg text-ink">
              {links.email}
            </a>
          </div>
        </Reveal>
      </section>

      <Reveal>
        <figure>
          <Image
            src="/images/gallery/15-discussion.jpg"
            alt="Students seated around a shared table mid-discussion, papers and a laptop between them."
            width={1800}
            height={2400}
            sizes="100vw"
            className="h-[46vh] w-full object-cover object-center md:h-[62vh]"
          />
        </figure>
      </Reveal>
    </>
  );
}
