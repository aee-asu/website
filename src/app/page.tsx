import Image from "next/image";
import Link from "next/link";

import { EventRow } from "@/components/EventRow";
import { JoinCTA } from "@/components/JoinCTA";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { focusAreas } from "@/data/focusAreas";
import { arizonaStats, nationalStats, type Stat } from "@/data/landscape";
import { links, site } from "@/data/site";
import { featuredEvent, upcomingEvents } from "@/lib/events";
import { formatDate } from "@/lib/date";

/** Same reason as the events page: the upcoming list is date-dependent. */
export const revalidate = 3600;

/** One sourced figure. The source line is not optional — see data/landscape.ts. */
function StatRow({ stat }: { stat: Stat }) {
  return (
    <div className="rule-t grid gap-4 py-8 md:grid-cols-12 md:gap-8 md:py-10">
      <p className="display flex items-baseline gap-2 text-[clamp(2.5rem,6vw,3.75rem)] leading-none text-ink md:col-span-4">
        {stat.value}
        {stat.unit ? <span className="text-[0.45em] text-maroon">{stat.unit}</span> : null}
      </p>
      <div className="md:col-span-8">
        <p className="max-w-[52ch] leading-relaxed text-graphite">{stat.body}</p>
        <p className="label mt-4 text-ash">
          <a href={stat.sourceUrl} className="link-underline">
            {stat.source} ↗
          </a>
          <span className="mx-2">·</span>
          {stat.asOf}
        </p>
      </div>
    </div>
  );
}

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
            We&rsquo;re the energy club
            <br />
            <span className="text-maroon">at ASU.</span>
          </h1>
        </Reveal>

        <div className="mt-12 grid gap-10 md:grid-cols-12 md:items-end">
          <Reveal delay={120} className="md:col-span-7">
            <p className="measure text-lg leading-relaxed text-graphite md:text-xl">
              Officially: the ASU student chapter of the Association of Energy Engineers. In
              practice we bring in people who work in energy, run workshops, get out to see real
              sites, and throw a hackathon in the spring. Any major, no dues. Come to one thing
              and see if it&rsquo;s for you.
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
              Energy isn&rsquo;t one major. It&rsquo;s power systems, buildings, batteries,
              chemistry, software, markets and policy, and most of the interesting problems sit
              where those overlap.
            </p>
            <div className="measure mt-8 space-y-5 text-[1.0625rem] leading-relaxed text-graphite md:text-lg">
              <p>
                So our members come from engineering, sustainability, business, computing, science
                and policy. You learn plenty in class about how energy is supposed to work. This
                is where you find out what people in the industry are dealing with right now.
              </p>
              <p>
                That looks like workshops, speakers from industry and from ASU labs, site and lab
                visits, competitions, and meeting people you&rsquo;d have a hard time emailing
                cold.
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
          eyebrow="What we cover"
          title={
            <>
              Six areas we keep
              <br className="hidden md:block" /> coming back to.
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

      {/* ------------------------------------------------------ The landscape */}
      <section className="bg-bone">
        <div className="shell py-20 md:py-32">
          <SectionHeading
            number="03"
            eyebrow="Why now"
            title="The numbers moving underneath all of this"
            intro={
              <p>
                We put this here because it&rsquo;s the honest reason the chapter exists. Arizona
                is one of the places where the next decade of the grid gets decided, and it is
                happening while you&rsquo;re in school. Every figure below is sourced and dated
                &mdash; click through and check us.
              </p>
            }
          />

          <p className="label mt-16 text-maroon">Arizona</p>
          <ul className="mt-6">
            {arizonaStats.map((stat, index) => (
              <li key={stat.value + stat.source}>
                <Reveal delay={(index % 2) * 60}>
                  <StatRow stat={stat} />
                </Reveal>
              </li>
            ))}
          </ul>

          <p className="label mt-16 text-maroon">And beyond</p>
          <ul className="mt-6">
            {nationalStats.map((stat, index) => (
              <li key={stat.value + stat.source}>
                <Reveal delay={(index % 2) * 60}>
                  <StatRow stat={stat} />
                </Reveal>
              </li>
            ))}
          </ul>

          <Reveal className="rule-t mt-10 pt-6">
            <p className="measure text-sm leading-relaxed text-ash">
              Figures are as published on the dates shown. They move quickly, and we re-check them
              each semester. If you spot one that has gone stale, tell us and we&rsquo;ll fix it.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ------------------------------------------------- Full-bleed break */}
      <Reveal>
        <figure className="relative">
          <Image
            src="/images/hero/courtyard-lunch.jpg"
            alt="Looking down into a planted courtyard where students eat around a fountain and picnic tables during the lunch laid on for the 2026 ASU Energy Hackathon."
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
          number="04"
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
              Nothing on the calendar right now. Discord is the fastest way to hear about the next
              one, or add yourself to the roster on Sun Devil Central.
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
              number="05"
              eyebrow="From the chapter"
              title="The biggest thing we’ve done so far"
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
                  {feature.href ? (
                    <Link href={feature.href} className="link-underline text-ink">
                      About the hackathon
                    </Link>
                  ) : null}
                  <Link href="/gallery" className="link-underline text-ink">
                    See the photos
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
            <p className="label text-maroon">06 / Research</p>
            <h2 className="display mt-8 text-[clamp(2rem,5vw,3.25rem)] text-ink">
              There&rsquo;s a lot of energy research at ASU. Most students never find it.
            </h2>
          </Reveal>

          <Reveal delay={80} className="md:col-span-6 md:col-start-7">
            <div className="measure space-y-5 text-[1.0625rem] leading-relaxed text-graphite md:text-lg">
              <p>
                Grid and power systems, solar, batteries and storage, power electronics, energy
                materials. Most of it is within a short walk on the Tempe campus.
              </p>
              <p>
                Nobody really explains where to look or how to write the email, so we put the
                directories, the funded programs and the first steps in one place.
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
