import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { links } from "@/data/site";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Host a visit, talk or workshop",
  description:
    "Host a site visit, give a technical talk, run a workshop, share career opportunities or collaborate on a student project with AEE at ASU. Contact the chapter officers directly.",
  path: "/partner",
});

/** Prefilled so a first email already carries what we need to reply properly. */
const mailto = `mailto:${links.email}?subject=${encodeURIComponent(
  "Working with AEE at ASU",
)}&body=${encodeURIComponent(
  "Who you are and what your organization does:\n\nWhat you have in mind:\n\nRough timing:\n\n",
)}`;

const ways = [
  {
    label: "Host a site visit",
    body: "Show students a facility, lab, control room or engineering site. Tell us what they can see, any access requirements and the group size you can accommodate.",
  },
  {
    label: "Give a technical talk",
    body: "Walk through a real engineering problem, the decisions your team made and what you learned. Suggest a topic and speaker; we can discuss the format and student questions.",
  },
  {
    label: "Run a workshop",
    body: "Help students work through a method, tool or piece of equipment. Tell us the learning goal, prerequisites and what participants would need to bring.",
  },
  {
    label: "Share career opportunities",
    body: "Send internships, co-ops or graduate roles with a role description, eligibility, application link and deadline. The officers can share relevant opportunities with members.",
  },
  {
    label: "Collaborate on a student project",
    body: "Bring a scoped engineering question or project idea. Include the expected time commitment, available support and any data or access constraints so we can discuss a realistic student contribution.",
  },
];

const limits = [
  "Put your name or logo on this site, or call you a sponsor or partner anywhere public, without asking you first.",
  "Pass member contact details to anyone. If you have a role to fill, we'll take it to the members it suits.",
  "Promise numbers we can't stand behind. Ask what turnout has actually been for a format and we'll tell you.",
];

export default function PartnerPage() {
  return (
    <>
      <section className="shell pb-14 pt-16 md:pb-20 md:pt-24">
        <Reveal>
          <p className="label text-maroon">Industry and the chapter</p>
          <h1 className="display mt-10 max-w-[16ch] text-[clamp(2.5rem,7.5vw,6rem)] text-ink">
            Bring students closer to your engineering.
          </h1>
        </Reveal>
        <Reveal delay={80}>
          <p className="measure mt-10 text-lg leading-relaxed text-graphite md:text-xl">
            Host a site visit, give a technical talk, run a workshop, share career opportunities
            or collaborate on a student project. Email the chapter officers with what you have
            in mind and roughly when.
          </p>
        </Reveal>
      </section>

      {/* ------------------------------------------------------ Primary action */}
      <section className="shell pb-20 md:pb-28">
        <Reveal>
          <a
            href={mailto}
            className="on-dark group block bg-ink px-7 py-12 text-paper transition-colors hover:bg-maroon md:px-14 md:py-16"
          >
            <span className="label text-gold">Contact the chapter</span>
            <span className="display mt-6 block text-[clamp(2rem,4.5vw,3.25rem)]">Email the officers</span>
            <span className="mt-4 block break-all text-sm md:text-base">{links.email}</span>
            <span className="mt-6 flex flex-wrap items-baseline justify-between gap-4">
              <span className="max-w-[52ch] leading-relaxed text-mist">
                Tell us who you are, what you have in mind and roughly when. An officer will
                reply. We&rsquo;re students, so give us a few days during the semester.
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

      <nav aria-label="Industry destinations" className="shell flex flex-wrap gap-6 pb-10">
        <Link href="/events#past-events" className="link-underline">See past industry sessions</Link>
        <a href="#recruit" className="link-underline">Share a role with members</a>
        <Link href="/about#leadership" className="link-underline">Meet the leadership</Link>
      </nav>

      {/* -------------------------------------------------------------- Ways in */}
      <section className="shell pb-20 md:pb-28">
        <SectionHeading
          number="01"
          eyebrow="Five ways to contribute"
          title="What you can bring"
          intro={
            <p>
              Choose a format that fits your work. These details help the officers plan the
              next step with you.
            </p>
          }
        />

        <ul className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {ways.map((way, index) => (
            <li key={way.label} id={way.label === "Share career opportunities" ? "recruit" : undefined} className="scroll-mt-28">
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
            title="Who&rsquo;s actually in the room"
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
                  In our first spring we ran a speaker session roughly every couple of weeks and
                  closed the year with a two-day energy hackathon across four tracks, held with the
                  IEEE and ASME student branches. Several sessions were co-hosted with other chapters,
                  which is usually the right way to reach more students.
                </p>
                <p>
                  We&rsquo;re a registered student organization. Not a consultancy, and not part of
                  the university administration. Everything is run by students around their
                  coursework.
                </p>
              </div>
            </Reveal>

            <Reveal delay={80} className="md:col-span-5 md:col-start-8">
              <h3 className="label text-maroon">What we won&rsquo;t do</h3>
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

      <Reveal className="shell pb-20 md:pb-28">
        <figure className="md:grid md:grid-cols-12">
          <div className="md:col-span-5 lg:col-span-4 md:col-start-8 lg:col-start-9">
            <Image
              src="/images/gallery/15-discussion.jpg"
              alt="Students seated around a shared table mid-discussion, papers and a laptop between them."
              width={1800}
              height={2400}
              sizes="(min-width: 1024px) 32vw, (min-width: 768px) 40vw, 100vw"
              className="w-full bg-bone"
            />
            <figcaption className="label mt-4 flex flex-wrap justify-between gap-4 text-ash">
              <span>ASU Energy Hackathon</span>
              <span>April 2026</span>
            </figcaption>
          </div>
        </figure>
      </Reveal>
    </>
  );
}
