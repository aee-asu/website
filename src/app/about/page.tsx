import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { JoinCTA } from "@/components/JoinCTA";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { advisor, officers, type Officer } from "@/data/leadership";
import { links, site } from "@/data/site";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "About",
  description:
    "What the Association of Energy Engineers is, what the ASU student chapter does, and who can take part.",
  path: "/about",
});

const activities = [
  {
    title: "Technical workshops",
    body: "Hands-on sessions on the things energy work actually requires — auditing, measurement, modelling, tooling.",
  },
  {
    title: "Speakers and panels",
    body: "Engineers, founders and researchers talking about work they are doing now, with time for real questions.",
  },
  {
    title: "Site and lab visits",
    body: "Going to see the systems and the labs rather than only reading about them.",
  },
  {
    title: "Competitions and projects",
    body: "Hackathons and student projects with industry challenge statements and judges from the field.",
  },
  {
    title: "Careers",
    body: "Company sessions, resume and interview help, and introductions to people who hire in energy.",
  },
  {
    title: "Research pathways",
    body: "Helping students find labs, faculty and funded programs at ASU — see Research & Resources.",
  },
];

/** First and last initial, for anyone who has not supplied a portrait yet. */
function initialsOf(name: string): string {
  const words = name.split(" ").filter(Boolean);
  const first = words[0]?.[0] ?? "";
  const last = words.length > 1 ? words[words.length - 1][0] : "";
  return `${first}${last}`;
}

function OfficerRow({ officer, marker }: { officer: Officer; marker: string }) {
  return (
    <div className="rule-t grid gap-4 py-8 md:grid-cols-12 md:items-center">
      <p className="label text-ash md:col-span-1">{marker}</p>

      <div className="flex items-center gap-5 md:col-span-7">
        {officer.photo ? (
          <Image
            src={officer.photo}
            alt=""
            width={320}
            height={320}
            sizes="80px"
            className="h-16 w-16 shrink-0 bg-bone object-cover md:h-[4.5rem] md:w-[4.5rem]"
          />
        ) : (
          <span
            aria-hidden
            className="label flex h-16 w-16 shrink-0 items-center justify-center bg-bone text-ash md:h-[4.5rem] md:w-[4.5rem]"
          >
            {initialsOf(officer.name)}
          </span>
        )}

        <div>
          <h3 className="display text-[1.875rem] text-ink md:text-[2.25rem]">{officer.name}</h3>
          {officer.program ? (
            <p className="mt-1.5 text-sm leading-relaxed text-ash">{officer.program}</p>
          ) : null}
        </div>
      </div>

      <p className="label text-maroon md:col-span-4 md:text-right">{officer.role}</p>
    </div>
  );
}

export default function AboutPage() {
  return (
    <>
      <section className="shell pb-16 pt-16 md:pb-24 md:pt-24">
        <Reveal>
          <p className="label text-maroon">About</p>
          <h1 className="display mt-10 max-w-[16ch] text-[clamp(2.5rem,7.5vw,6rem)] text-ink">
            A student chapter, run by students, about how energy works.
          </h1>
        </Reveal>
        <Reveal delay={80}>
          <p className="measure mt-10 text-lg leading-relaxed text-graphite md:text-xl">
            {site.legalName} is a registered student organization at Arizona State University and
            the ASU student chapter of the Association of Energy Engineers.
          </p>
        </Reveal>
      </section>

      {/* ------------------------------------------------------------ What AEE is */}
      <section className="shell pb-20 md:pb-28">
        <div className="grid gap-10 md:grid-cols-12">
          <Reveal className="rule-t pt-6 md:col-span-4">
            <p className="label text-maroon">01 / The organization</p>
          </Reveal>
          <Reveal delay={60} className="rule-t pt-6 md:col-span-8">
            <h2 className="display text-[clamp(1.75rem,3.6vw,2.5rem)] text-ink">
              What AEE is
            </h2>
            <div className="measure mt-6 space-y-5 text-[1.0625rem] leading-relaxed text-graphite md:text-lg">
              <p>
                The Association of Energy Engineers is a professional body founded in 1977, with
                more than 20,000 members across over 100 countries. It is best known for its
                certifications — the Certified Energy Manager and Certified Energy Auditor among
                them — and for chapters that bring working energy professionals together locally.
              </p>
              <p>
                Its members are electrical, mechanical, chemical, industrial and nuclear engineers,
                along with economists and analysts. If IEEE is the professional home for
                electrical engineering, AEE is the equivalent for energy.
              </p>
              <p>
                Arizona has its own professional AEE chapter, which is a useful thing to know
                about while you are still a student.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-6">
              <a href={links.aeeCenter} className="link-underline text-ink">
                aeecenter.org ↗
              </a>
              <Link href="/research#aee" className="link-underline text-ink">
                AEE membership and scholarships
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* --------------------------------------------------------- The chapter */}
      <section className="bg-bone">
        <div className="shell py-20 md:py-28">
          <div className="grid gap-10 md:grid-cols-12">
            <Reveal className="md:col-span-4">
              <p className="label text-maroon">02 / The chapter</p>
            </Reveal>
            <Reveal delay={60} className="md:col-span-8">
              <h2 className="display text-[clamp(1.75rem,3.6vw,2.5rem)] text-ink">
                What we are building at ASU
              </h2>
              <div className="measure mt-6 space-y-5 text-[1.0625rem] leading-relaxed text-graphite md:text-lg">
                <p>
                  The chapter&rsquo;s purpose is to build a student-facing energy community at ASU
                  that connects students with energy industry professionals, technical learning,
                  career opportunities, competitions, hackathons, workshops and professional
                  development.
                </p>
                <p>
                  It started with a large first year — a flagship hackathon, a speaker series and
                  a set of industry relationships — and is now being rebuilt around a broader
                  definition of energy than efficiency alone. Power and grid, renewables and
                  storage, buildings, data centers, materials and manufacturing, markets and
                  policy: the chapter should be a place where a first-year undergraduate and a
                  fourth-year PhD student can both find something worth their evening.
                </p>
                <p>
                  We are not trying to be the largest club on campus. We are trying to be the one
                  where the energy conversation at ASU actually happens.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------ Programming */}
      <section className="shell py-20 md:py-28">
        <SectionHeading
          number="03"
          eyebrow="Programming"
          title="What we run"
          intro="Formats vary by semester and by who is willing to come talk to us. These are the constants."
        />

        <ul className="mt-14 grid gap-x-10 md:grid-cols-2 lg:grid-cols-3">
          {activities.map((activity, index) => (
            <li key={activity.title}>
              <Reveal delay={(index % 3) * 60} className="rule-t py-7">
                <h3 className="text-xl text-ink">{activity.title}</h3>
                <p className="mt-3 max-w-[38ch] leading-relaxed text-graphite">{activity.body}</p>
              </Reveal>
            </li>
          ))}
        </ul>
      </section>

      {/* -------------------------------------------------------------- Who joins */}
      <section className="shell pb-20 md:pb-28">
        <div className="grid gap-10 md:grid-cols-12">
          <Reveal className="rule-t pt-6 md:col-span-4">
            <p className="label text-maroon">04 / Membership</p>
          </Reveal>
          <Reveal delay={60} className="rule-t pt-6 md:col-span-8">
            <h2 className="display text-[clamp(1.75rem,3.6vw,2.5rem)] text-ink">
              Who can take part
            </h2>
            <div className="measure mt-6 space-y-5 text-[1.0625rem] leading-relaxed text-graphite md:text-lg">
              <p>
                Membership is open to any enrolled ASU student, undergraduate or graduate, in any
                major. There are no dues. You do not need prior energy coursework — a lot of the
                most useful people in the room come from computing, business, policy and the
                sciences.
              </p>
              <p>
                ASU alumni, faculty, staff and industry professionals can take part as
                non-voting associate members: speaking, mentoring, judging and advising.
              </p>
            </div>
            <Link
              href="/join"
              className="mt-8 inline-flex items-center gap-3 bg-ink px-7 py-4 text-[1.0625rem] text-paper transition-colors hover:bg-maroon"
            >
              How to join
              <span aria-hidden>→</span>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ------------------------------------------------------------ Leadership */}
      <section className="shell pb-20 md:pb-28">
        <SectionHeading number="05" eyebrow="Leadership" title="Who runs the chapter" />

        <ul className="mt-14">
          {officers.map((officer, index) => (
            <li key={officer.name}>
              <Reveal delay={index * 50}>
                <OfficerRow officer={officer} marker={String(index + 1).padStart(2, "0")} />
              </Reveal>
            </li>
          ))}
          <li>
            <Reveal delay={officers.length * 50}>
              <OfficerRow officer={advisor} marker="—" />
            </Reveal>
          </li>
        </ul>

        <Reveal className="rule-t mt-6 pt-6">
          <p className="measure text-sm leading-relaxed text-ash">
            Officer positions turn over each year. If you want one, the way in is to show up,
            take on something small and do it well — that is how everyone currently listed got
            here.
          </p>
        </Reveal>
      </section>

      <Reveal>
        <figure>
          <Image
            src="/images/gallery/03-team-table.jpg"
            alt="Students gathered around one end of a lecture-hall bench in discussion with laptops open in front of them."
            width={2000}
            height={1500}
            sizes="100vw"
            className="h-[46vh] w-full object-cover md:h-[62vh]"
          />
        </figure>
      </Reveal>

      <JoinCTA />
    </>
  );
}
