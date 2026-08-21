import type { Metadata } from "next";
import Link from "next/link";

import { JoinCTA } from "@/components/JoinCTA";
import { ResourceList } from "@/components/ResourceList";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { chapterResources, howToStart, researchResources } from "@/data/resources";
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
            Everything useful, in one place.
          </h1>
        </Reveal>
        <Reveal delay={80}>
          <p className="measure mt-10 text-lg leading-relaxed text-graphite md:text-xl">
            Two questions we get constantly: how do I get into a lab, and where do I look for
            energy work. Neither answer is a secret, it&rsquo;s just spread across a dozen
            different university pages. So we collected it here and marked the ones worth your
            time.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <nav aria-label="On this page" className="rule-t mt-12 flex flex-wrap gap-x-8 gap-y-3 pt-6">
            <a href="#research-at-asu" className="link-underline label text-ink">
              Research at ASU
            </a>
            <a href="#how-to-start" className="link-underline label text-ink">
              How to start
            </a>
            <a href="#chapter-resources" className="link-underline label text-ink">
              AEE, careers &amp; learning
            </a>
          </nav>
        </Reveal>
      </section>

      {/* ------------------------------------------------ Research at ASU */}
      <section id="research-at-asu" className="shell scroll-mt-28 pb-8 md:pb-12">
        <SectionHeading
          number="01"
          eyebrow="Research at ASU"
          title="Finding a lab"
          intro={
            <p>
              There&rsquo;s a lot of energy research at ASU: grid and power systems,
              photovoltaics, batteries and storage, power electronics, energy materials, fuel
              cells. The directories below are how you find the people doing it, and the programs
              under them are what pays students to help.
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
            <p className="label text-gold">02 / How to start</p>
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

          <Reveal className="rule-t mt-6 pt-6">
            <p className="measure text-sm leading-relaxed text-ash">
              Stuck on step four? Bring the draft to an event or drop it in Discord. Somebody
               there has sent that email before.
            </p>
          </Reveal>
        </div>
      </section>

      {/* --------------------------------------------- Chapter / careers */}
      <section id="chapter-resources" className="shell scroll-mt-28 py-20 md:py-28">
        <SectionHeading
          number="03"
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
