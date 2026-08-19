import Image from "next/image";
import Link from "next/link";

import { EventRow } from "@/components/EventRow";
import { JoinCTA } from "@/components/JoinCTA";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { focusAreas } from "@/data/focusAreas";
import { links, site } from "@/data/site";
import { featuredEvent, upcomingEvents } from "@/lib/events";
import { formatDate } from "@/lib/date";

export default function HomePage() {
  const upcoming = upcomingEvents().slice(0, 3);
  const feature = featuredEvent();

  return (
    <>
      {/* ------------------------------------------------------------- Hero */}
      <section className="shell pb-14 pt-16 md:pb-20 md:pt-24">
        <Reveal>
          <p className="label text-maroon">{site.legalName}</p>
        </Reveal>

        <Reveal delay={60}>
          <h1 className="display mt-10 text-[clamp(2.75rem,8.5vw,7.5rem)] text-ink">
            Energy is changing.
            <br />
            <span className="text-maroon">Come understand what comes next.</span>
          </h1>
        </Reveal>

        <div className="mt-12 grid gap-10 md:grid-cols-12 md:items-end">
          <Reveal delay={120} className="md:col-span-7">
            <p className="measure text-lg leading-relaxed text-graphite md:text-xl">
              We are the student chapter of the Association of Energy Engineers at ASU. We run
              workshops, speaker sessions, site visits and competitions for students who want to
              understand how energy systems actually work — and work on them.
            </p>
          </Reveal>

          <Reveal delay={180} className="flex flex-wrap items-center gap-4 md:col-span-5 md:justify-end">
            <Link
              href="/join"
              className="inline-flex items-center gap-3 bg-ink px-7 py-4 text-[1.0625rem] text-paper transition-colors hover:bg-maroon"
            >
              Join AEE
              <span aria-hidden>→</span>
            </Link>
            <Link href="/events" className="inline-flex items-center py-4 text-[1.0625rem] text-ink">
              <span className="link-underline">See what&rsquo;s happening</span>
            </Link>
          </Reveal>
        </div>
      </section>

      <Reveal className="shell">
        <figure>
          <div className="overflow-hidden bg-bone">
            <Image
              src="/images/hero/hero-workroom.jpg"
              alt="A full lecture hall of students working at laptops along tiered benches during the 2026 ASU Energy Hackathon, with others standing and talking in the aisle."
              width={2600}
              height={1950}
              priority
              sizes="(min-width: 1536px) 88rem, 100vw"
              className="w-full"
            />
          </div>
          <figcaption className="label mt-4 flex flex-wrap justify-between gap-4 text-ash">
            <span>ASU Energy Hackathon · EDC 117, Tempe campus</span>
            <span>April 2026</span>
          </figcaption>
        </figure>
      </Reveal>

      {/* ---------------------------------------------------------- Mission */}
      <section className="shell py-20 md:py-32">
        <div className="grid gap-10 md:grid-cols-12">
          <Reveal className="md:col-span-4">
            <p className="label text-maroon">01 / What we are</p>
          </Reveal>
          <Reveal delay={60} className="md:col-span-8">
            <p className="display text-[clamp(1.6rem,3.4vw,2.5rem)] leading-[1.24] text-ink">
              Energy is not one discipline. It is power systems and buildings and batteries and
              chemistry and software and money and policy, all at once.
            </p>
            <div className="measure mt-8 space-y-5 text-[1.0625rem] leading-relaxed text-graphite md:text-lg">
              <p>
                AEE at ASU brings together students from engineering, sustainability, business,
                computing, science and policy around that reality. The chapter exists to close the
                gap between what you learn in a course and what the people running Arizona&rsquo;s
                energy systems deal with on a Tuesday.
              </p>
              <p>
                In practice that means technical workshops, speakers from industry and research,
                lab and site visits, competitions, and the kind of introductions that are hard to
                make on your own.
              </p>
            </div>
            <Link href="/about" className="link-underline mt-8 inline-block text-ink">
              More about the chapter
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ----------------------------------------------------- Focus areas */}
      <section className="shell pb-20 md:pb-32">
        <SectionHeading
          number="02"
          eyebrow="What we explore"
          title={
            <>
              Six areas the chapter
              <br className="hidden md:block" /> programs around.
            </>
          }
        />

        <ul className="mt-16 grid gap-x-10 gap-y-0 md:grid-cols-2">
          {focusAreas.map((area, index) => (
            <li key={area.number}>
              <Reveal delay={(index % 2) * 60} className="rule-t py-8 md:py-10">
                <div className="flex items-baseline gap-5">
                  <span className="label text-maroon">{area.number}</span>
                  <h3 className="display text-[1.75rem] text-ink md:text-[2.125rem]">
                    {area.title}
                  </h3>
                </div>
                <p className="mt-4 max-w-[46ch] leading-relaxed text-graphite">
                  {area.description}
                </p>
                <p className="label mt-5 text-ash">{area.topics.join(" · ")}</p>
              </Reveal>
            </li>
          ))}
        </ul>
      </section>

      {/* ------------------------------------------------- Full-bleed break */}
      <Reveal>
        <figure className="relative">
          <Image
            src="/images/hero/courtyard-lunch.jpg"
            alt="Looking down into a planted ASU courtyard where students eat lunch around a fountain and picnic tables between hackathon sessions."
            width={2400}
            height={1800}
            sizes="100vw"
            className="h-[52vh] w-full object-cover md:h-[68vh]"
          />
          <figcaption className="shell label mt-4 text-ash">
            Between sessions · Tempe campus
          </figcaption>
        </figure>
      </Reveal>

      {/* ----------------------------------------------- What's happening */}
      <section className="shell py-20 md:py-32">
        <SectionHeading
          number="03"
          eyebrow="What's happening"
          title="Coming up"
          aside={
            <Link href="/events" className="link-underline text-ink">
              All events
            </Link>
          }
        />

        {upcoming.length > 0 ? (
          <ul className="mt-14 rule-t">
            {upcoming.map((event) => (
              <EventRow key={event.slug} event={event} />
            ))}
          </ul>
        ) : (
          <div className="rule-t mt-14 py-12">
            <p className="measure text-lg leading-relaxed text-graphite">
              Nothing on the calendar this minute. The fastest way to hear about the next session
              is Discord, or the chapter roster on Sun Devil Central.
            </p>
            <div className="mt-6 flex flex-wrap gap-6">
              <a href={links.discord} className="link-underline text-ink">
                Join the Discord
              </a>
              <Link href="/events" className="link-underline text-ink">
                See past events
              </Link>
            </div>
          </div>
        )}
      </section>

      {/* ------------------------------------------------- Selected moment */}
      {feature ? (
        <section className="bg-bone">
          <div className="shell py-20 md:py-32">
            <SectionHeading
              number="04"
              eyebrow="From the chapter"
              title="The chapter’s flagship event, so far"
            />

            <div className="mt-14 grid gap-10 md:grid-cols-12 md:gap-12">
              <Reveal className="md:col-span-7">
                <div className="overflow-hidden bg-mist">
                  <Image
                    src={feature.image ?? "/images/events/hackathon-2026-group.jpg"}
                    alt={feature.imageAlt ?? feature.title}
                    width={1024}
                    height={768}
                    sizes="(min-width: 768px) 55vw, 100vw"
                    className="w-full"
                  />
                </div>
              </Reveal>

              <Reveal delay={80} className="md:col-span-5">
                <p className="label text-maroon">{feature.category}</p>
                <h3 className="display mt-4 text-[clamp(1.875rem,4vw,2.75rem)] text-ink">
                  {feature.title}
                </h3>
                <p className="label mt-4 text-ash">
                  {formatDate(feature.date, feature.endDate)} · {feature.location}
                </p>
                <p className="mt-6 leading-relaxed text-graphite">{feature.description}</p>

                {feature.details ? (
                  <dl className="mt-8">
                    {feature.details.map((detail) => (
                      <div
                        key={detail.label}
                        className="rule-t flex justify-between gap-6 py-3 text-sm"
                      >
                        <dt className="label text-ash">{detail.label}</dt>
                        <dd className="text-right text-ink">{detail.value}</dd>
                      </div>
                    ))}
                  </dl>
                ) : null}

                <div className="mt-8 flex flex-wrap gap-6">
                  <Link href="/gallery" className="link-underline text-ink">
                    See the archive
                  </Link>
                  <Link href="/events" className="link-underline text-ink">
                    Past events
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      ) : null}

      {/* --------------------------------------------------------- Research */}
      <section className="shell py-20 md:py-32">
        <div className="grid gap-10 md:grid-cols-12">
          <Reveal className="md:col-span-6">
            <p className="label text-maroon">05 / Research</p>
            <h2 className="display mt-8 text-[clamp(2rem,5vw,3.25rem)] text-ink">
              ASU runs one of the largest energy research operations in the country.
            </h2>
          </Reveal>

          <Reveal delay={80} className="md:col-span-6 md:col-start-7">
            <div className="measure space-y-5 text-[1.0625rem] leading-relaxed text-graphite md:text-lg">
              <p>
                Grid and power systems, solar and photovoltaics, batteries and storage, power
                electronics, energy materials — most of it within a short walk of each other on
                the Tempe campus.
              </p>
              <p>
                Most students never find it, because nobody explains where to look or how to
                write the email. We put the directories, the funded programs and the actual first
                steps in one place.
              </p>
            </div>
            <Link
              href="/research"
              className="mt-10 inline-flex items-center gap-3 bg-ink px-7 py-4 text-[1.0625rem] text-paper transition-colors hover:bg-maroon"
            >
              Explore research at ASU
              <span aria-hidden>→</span>
            </Link>
          </Reveal>
        </div>
      </section>

      <JoinCTA />
    </>
  );
}
