import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { EventRow } from "@/components/EventRow";
import { JoinCTA } from "@/components/JoinCTA";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { links } from "@/data/site";
import { pastEvents, upcomingEvents } from "@/lib/events";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Upcoming sessions, workshops, site visits and competitions from AEE at ASU — and an archive of what the chapter has already run.",
  alternates: { canonical: "/events" },
};

export default function EventsPage() {
  const upcoming = upcomingEvents();
  const past = pastEvents();

  return (
    <>
      <section className="shell pb-14 pt-16 md:pb-20 md:pt-24">
        <Reveal>
          <p className="label text-maroon">Events</p>
          <h1 className="display mt-10 max-w-[14ch] text-[clamp(2.5rem,7.5vw,6rem)] text-ink">
            Come to one thing.
          </h1>
        </Reveal>
        <Reveal delay={80}>
          <p className="measure mt-10 text-lg leading-relaxed text-graphite md:text-xl">
            Everything is open to any ASU student. You do not need to be a member first, and you
            do not need to know anything about energy to turn up.
          </p>
        </Reveal>
      </section>

      {/* --------------------------------------------------------- Upcoming */}
      <section className="shell pb-20 md:pb-28">
        <SectionHeading
          number="01"
          eyebrow="Upcoming"
          title={upcoming.length > 0 ? "On the calendar" : "Nothing scheduled right now"}
        />

        {upcoming.length > 0 ? (
          <ul className="rule-t mt-12">
            {upcoming.map((event) => (
              <EventRow key={event.slug} event={event} />
            ))}
          </ul>
        ) : (
          <Reveal className="rule-t mt-12 py-12">
            <p className="measure text-lg leading-relaxed text-graphite">
              Between semesters, or between confirmations. Discord is where the next date gets
              announced first — usually a week or two before it lands here.
            </p>
            <div className="mt-8 flex flex-wrap gap-6">
              <a href={links.discord} className="link-underline text-ink">
                Join the Discord ↗
              </a>
              <a href={links.instagram} className="link-underline text-ink">
                Follow on Instagram ↗
              </a>
              <a href={links.linkedin} className="link-underline text-ink">
                LinkedIn ↗
              </a>
            </div>
          </Reveal>
        )}
      </section>

      {/* ------------------------------------------------------------- Past */}
      <section className="bg-bone">
        <div className="shell py-20 md:py-28">
          <SectionHeading
            number="02"
            eyebrow="Archive"
            title="What we have run"
            aside={
              <Link href="/gallery" className="link-underline text-ink">
                Photo archive
              </Link>
            }
          />

          {past.length > 0 ? (
            <ul className="rule-t mt-12">
              {past.map((event) => (
                <EventRow key={event.slug} event={event} past />
              ))}
            </ul>
          ) : (
            <p className="rule-t mt-12 py-12 text-graphite">
              The archive starts once this semester&rsquo;s events are behind us.
            </p>
          )}
        </div>
      </section>

      {/* ------------------------------------------------------- Suggest one */}
      <section className="shell py-20 md:py-28">
        <div className="grid gap-10 md:grid-cols-12">
          <Reveal className="rule-t pt-6 md:col-span-4">
            <p className="label text-maroon">03 / Bring us something</p>
          </Reveal>
          <Reveal delay={60} className="rule-t pt-6 md:col-span-8">
            <h2 className="display text-[clamp(1.75rem,3.6vw,2.5rem)] text-ink">
              Want to speak, host a visit, or run a session?
            </h2>
            <p className="measure mt-6 text-[1.0625rem] leading-relaxed text-graphite md:text-lg">
              We are actively looking for engineers, researchers and founders willing to spend an
              hour with students, and for teams willing to host a site or lab visit. Students with
              a workshop they want to teach are equally welcome — that is often the best session of
              the semester.
            </p>
            <div className="mt-8 flex flex-wrap gap-6">
              <a href={`mailto:${links.email}`} className="link-underline text-ink">
                {links.email}
              </a>
              <a href={links.instagram} className="link-underline text-ink">
                Instagram ↗
              </a>
              <a href={links.linkedin} className="link-underline text-ink">
                LinkedIn ↗
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <Reveal>
        <figure>
          <Image
            src="/images/gallery/02-mentor-review.jpg"
            alt="A mentor leans over a bench to review a team's work on a laptop while other participants continue working nearby."
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
