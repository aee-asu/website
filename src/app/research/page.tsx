import type { Metadata } from "next";
import Link from "next/link";

import { JoinCTA } from "@/components/JoinCTA";
import { ResourceList } from "@/components/ResourceList";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import {
  certificationPath,
  certifications,
  chapterResources,
  emailTemplate,
  energyAtASU,
  howToStart,
  recentWork,
  researchResources,
} from "@/data/resources";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Research & Resources",
  description:
    "How to find energy research, faculty and funded programs at ASU — plus AEE membership, careers and energy learning resources.",
  path: "/research",
});

export default function ResearchPage() {
  return (
    <>
      <section className="shell pb-14 pt-16 md:pb-20 md:pt-24">
        <Reveal>
          <p className="label text-maroon">Research &amp; Resources</p>
          <h1 className="display mt-10 max-w-[18ch] text-[clamp(2.5rem,7vw,5.5rem)] text-ink">
            Who at ASU works on energy, and how to reach them.
          </h1>
        </Reveal>
        <Reveal delay={80}>
          <p className="measure mt-10 text-lg leading-relaxed text-graphite md:text-xl">
            ASU lists 56 research centers and doesn&rsquo;t say which of them are about energy.
            The university&rsquo;s own energy pages don&rsquo;t map to how anyone actually
            thinks about the field. So we went through them, sorted the energy ones into the
            six areas we work on, and named the centers. Then the part everyone gets stuck on:
            the email.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <nav aria-label="On this page" className="rule-t mt-12 flex flex-wrap gap-x-8 gap-y-3 pt-6">
            <a href="#by-area" className="link-underline label text-ink">
              Who works on what
            </a>
            <a href="#recent" className="link-underline label text-ink">
              Recent work
            </a>
            <a href="#research-at-asu" className="link-underline label text-ink">
              Directories &amp; funding
            </a>
            <a href="#how-to-start" className="link-underline label text-ink">
              How to start
            </a>
            <a href="#certifications" className="link-underline label text-ink">
              Certifications
            </a>
            <a href="#chapter-resources" className="link-underline label text-ink">
              AEE, careers &amp; learning
            </a>
          </nav>
        </Reveal>
      </section>

      {/* --------------------------------------------- The six areas, mapped */}
      <section id="by-area" className="shell scroll-mt-28 pb-20 md:pb-28">
        <SectionHeading
          number="01"
          eyebrow="Who works on what"
          title="Our six areas, and the ASU centers behind each"
          intro={
            <p>
              The same six areas the chapter programs around, matched to the centers at ASU that
              do the work. Where nothing at ASU maps to one of them we say so, rather than
              stretching a listing to fit &mdash; an empty square tells you something too.
            </p>
          }
        />

        <ul className="mt-14">
          {energyAtASU.map((area, index) => (
            <li key={area.number}>
              <Reveal delay={(index % 2) * 60}>
                <div className="rule-t grid gap-6 py-10 md:grid-cols-12 md:gap-8">
                  <div className="flex items-baseline gap-4 md:col-span-4">
                    <span className="label text-maroon">{area.number}</span>
                    <h3 className="display text-[1.5rem] text-ink md:text-[1.875rem]">
                      {area.area}
                    </h3>
                  </div>

                  <div className="md:col-span-8">
                    <ul className="space-y-6">
                      {area.centers.map((center) => (
                        <li key={area.number + center.name}>
                          <a href={center.href} className="link-underline text-[1.0625rem] text-ink">
                            {center.name} &#8599;
                          </a>
                          <p className="mt-2 max-w-[54ch] text-[0.9375rem] leading-relaxed text-graphite">
                            {center.note}
                          </p>
                        </li>
                      ))}
                    </ul>

                    {area.gap ? (
                      <p className="mt-7 max-w-[54ch] border-l-2 border-maroon pl-5 text-[0.9375rem] leading-relaxed text-ash">
                        {area.gap}
                      </p>
                    ) : null}
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </section>

      {/* ------------------------------------------------------- Recent work */}
      <section id="recent" className="bg-bone">
        <div className="shell scroll-mt-28 py-20 md:py-28">
          <SectionHeading
            number="02"
            eyebrow="Recent work"
            title="These are live places, not an org chart"
            intro={
              <p>
                A few things out of ASU labs recently, so the list above reads as people rather
                than institutions. All from ASU News.
              </p>
            }
          />

          <ul className="mt-14">
            {recentWork.map((item, index) => (
              <li key={item.href}>
                <Reveal delay={(index % 2) * 60}>
                  <a href={item.href} className="group rule-t grid gap-3 py-7 md:grid-cols-12 md:gap-8">
                    <p className="label text-ash md:col-span-2">{item.date}</p>
                    <h3 className="text-[1.0625rem] leading-snug text-ink transition-colors group-hover:text-maroon md:col-span-6 md:text-lg">
                      {item.title} &#8599;
                    </h3>
                    <p className="text-[0.9375rem] leading-relaxed text-graphite md:col-span-4">
                      {item.note}
                    </p>
                  </a>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ------------------------------------------ Directories & funding */}
      <section id="research-at-asu" className="shell scroll-mt-28 pb-8 pt-20 md:pb-12 md:pt-28">
        <SectionHeading
          number="03"
          eyebrow="Directories and funding"
          title="Where to search, and what pays"
          intro={
            <p>
              The directories are how you find a specific person. The funding programs are what
              turn helping out in a lab into a paid position with a deadline attached.
            </p>
          }
        />

        <div className="mt-12">
          {researchResources.map((group, index) => (
            <ResourceList key={group.id} group={group} index={index} />
          ))}
        </div>
      </section>

      {/* ---------------------------------------------------- How to start */}
      <section id="how-to-start" className="scroll-mt-28 bg-ink text-paper on-dark">
        <div className="shell py-20 md:py-28">
          <Reveal>
            <p className="label text-gold">04 / How to start</p>
            <h2 className="display mt-8 max-w-[20ch] text-[clamp(2rem,5vw,3.5rem)]">
              Five steps, in the order we&rsquo;d actually do them.
            </h2>
          </Reveal>

          <ol className="mt-16">
            {howToStart.map((step, index) => (
              <li key={step.step}>
                <Reveal delay={index * 60}>
                  <div className="rule-t grid gap-4 py-8 md:grid-cols-12 md:gap-8">
                    <p className="label text-gold md:col-span-1">{step.step}</p>
                    <h3 className="text-xl leading-snug text-paper md:col-span-6 md:text-2xl">
                      {step.title}
                    </h3>
                    <p className="leading-relaxed text-mist md:col-span-5">{step.body}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>

          <Reveal className="rule-t mt-10 pt-8">
            <h3 className="label text-gold">Step four, written out</h3>
            <p className="measure mt-4 text-[0.9375rem] leading-relaxed text-mist">
              Nobody stalls on steps one to three. They stall here, because &ldquo;send a short,
              specific email&rdquo; is a restatement of the problem rather than help. So:
            </p>
            <pre className="mt-6 max-w-[62ch] overflow-x-auto whitespace-pre-wrap rounded-none border border-[color:var(--rule-invert)] p-6 font-mono text-[0.8125rem] leading-relaxed text-mist">
              {emailTemplate}
            </pre>
            <p className="measure mt-6 text-sm leading-relaxed text-ash">
              Replace every bracket. The specific paper is the part that matters &mdash; it is the
              difference between an email that gets answered and one that reads as a mass send.
              Still stuck? Bring the draft to an event or drop it in Discord. Somebody there has
              sent this email before.
            </p>
          </Reveal>
        </div>
      </section>

      {/* -------------------------------------------------- Certifications */}
      <section id="certifications" className="shell scroll-mt-28 py-20 md:py-28">
        <SectionHeading
          number="05"
          eyebrow="Certifications"
          title="What the letters after an energy professional's name mean"
          intro={
            <p>
              AEE is a certifying body before it is anything else. If you meet someone in this
              industry with initials after their name, they are usually AEE&rsquo;s. Worth knowing
              what they are, and worth knowing early which one you can actually go for.
            </p>
          }
        />

        <ul className="mt-14">
          {certifications.map((cert, index) => (
            <li key={cert.abbr}>
              <Reveal delay={(index % 2) * 60}>
                <div className="rule-t grid gap-4 py-8 md:grid-cols-12 md:gap-8">
                  <div className="md:col-span-3">
                    <p className="display text-[1.75rem] text-ink md:text-[2.125rem]">
                      {cert.abbr}
                    </p>
                    <p className="mt-1 max-w-[24ch] text-sm leading-relaxed text-ash">
                      {cert.name}
                    </p>
                  </div>
                  <div className="md:col-span-9">
                    <p className="max-w-[62ch] leading-relaxed text-graphite">{cert.body}</p>
                    <p className="label mt-3 text-ash">{cert.who}</p>
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>

        {/* The honest part. */}
        <Reveal className="mt-16">
          <div className="bg-bone p-8 md:p-12">
            <h3 className="display text-[clamp(1.5rem,3.4vw,2.25rem)] text-ink">
              You almost certainly cannot sit the CEM yet. That is normal.
            </h3>
            <div className="measure mt-6 space-y-5 text-[1.0625rem] leading-relaxed text-graphite">
              <p>
                Every route to the CEM needs a completed degree <em>and</em> years of professional
                experience on top of it:
              </p>
              <ul className="space-y-3">
                {certificationPath.routes.map((route) => (
                  <li key={route} className="rule-t pt-3 text-[1rem]">
                    {route}
                  </li>
                ))}
              </ul>
              <p>
                So when someone tells an undergraduate to &ldquo;go get your CEM,&rdquo; they have
                not checked. What exists for people in your position is{" "}
                <strong className="font-normal text-ink">
                  EMIT, the Energy Manager In Training credential
                </strong>
                , for applicants who do not yet meet the CEM experience requirement. It holds for
                six years, which is meant to be enough time to earn the experience and convert.
              </p>
              <p>
                The useful move as a student is not the exam. It is the experience clock: internships,
                a co-op, facilities work, an energy job of any kind. That is the part that takes
                years, and it is the part you can start now.
              </p>
            </div>

            <dl className="mt-10 grid gap-x-10 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
              {certificationPath.facts.map((fact) => (
                <div key={fact.label} className="rule-t pt-4">
                  <dt className="label text-ash">{fact.label}</dt>
                  <dd className="mt-2 text-[1.0625rem] leading-snug text-ink">{fact.value}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
              <a href={certificationPath.becomingCem} className="link-underline text-ink">
                Becoming a CEM &#8599;
              </a>
              <a href={certificationPath.handbook} className="link-underline text-ink">
                CEM candidate handbook (PDF) &#8599;
              </a>
            </div>

            <p className="measure mt-8 text-sm leading-relaxed text-ash">
              Fees and eligibility routes change. These were taken from AEE&rsquo;s own candidate
              handbook and are worth re-checking against it before you plan around them.
            </p>
          </div>
        </Reveal>
      </section>

      {/* --------------------------------------------- Chapter / careers */}
      <section id="chapter-resources" className="shell scroll-mt-28 py-20 md:py-28">
        <SectionHeading
          number="06"
          eyebrow="AEE, careers & learning"
          title="Beyond the university"
          intro={
            <p>
              Joining the chapter and joining AEE itself are two different things. Both are worth
              doing, and the student rate for the national organization is cheap.
            </p>
          }
        />

        <div className="mt-12">
          {chapterResources.map((group, index) => (
            <ResourceList key={group.id} group={group} index={index} />
          ))}
        </div>

        <Reveal className="rule-t mt-6 pt-6">
          <p className="text-sm text-ash">
            Something missing or a link gone stale?{" "}
            <Link href="/join" className="link-underline text-graphite">
              Tell us
            </Link>{" "}
            and we&rsquo;ll fix it.
          </p>
        </Reveal>
      </section>

      <JoinCTA />
    </>
  );
}
