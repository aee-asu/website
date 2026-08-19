import type { Metadata } from "next";
import Image from "next/image";

import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { links } from "@/data/site";

export const metadata: Metadata = {
  title: "Join",
  description:
    "Join the Association of Energy Engineers Student Chapter at Arizona State University — on Sun Devil Central, Discord and Instagram.",
  alternates: { canonical: "/join" },
};

const community = [
  {
    href: links.discord,
    label: "Discord",
    role: "The community",
    body: "Where the conversation happens between events — questions, project talk, links people find, and the first place a new date gets posted.",
  },
  {
    href: links.instagram,
    label: "Instagram",
    role: "Public updates",
    body: "Event announcements and photos. Follow this if you want to keep an eye on the chapter without committing to anything.",
  },
  {
    href: links.linkedin,
    label: "LinkedIn",
    role: "The professional side",
    body: "Chapter updates aimed at industry, and the easiest way to stay connected to the chapter once you graduate.",
  },
];

export default function JoinPage() {
  return (
    <>
      <section className="shell pb-14 pt-16 md:pb-20 md:pt-24">
        <Reveal>
          <p className="label text-maroon">Join</p>
          <h1 className="display mt-10 max-w-[15ch] text-[clamp(2.5rem,7.5vw,6rem)] text-ink">
            One link, and you are in.
          </h1>
        </Reveal>
        <Reveal delay={80}>
          <p className="measure mt-10 text-lg leading-relaxed text-graphite md:text-xl">
            Open to every enrolled ASU student, undergraduate or graduate, in any major. No dues,
            no application, no prior energy coursework.
          </p>
        </Reveal>
      </section>

      {/* ---------------------------------------------------- Primary action */}
      <section className="shell pb-20 md:pb-28">
        <Reveal>
          <a
            href={links.join}
            className="group block bg-ink px-7 py-12 text-paper transition-colors hover:bg-maroon md:px-14 md:py-16"
          >
            <span className="label text-gold">Step one — the only required one</span>
            <span className="display mt-6 block text-[clamp(2rem,5.5vw,4rem)]">
              Join on Sun Devil Central
            </span>
            <span className="mt-6 flex flex-wrap items-baseline justify-between gap-4">
              <span className="max-w-[52ch] leading-relaxed text-mist">
                This is ASU&rsquo;s official student organization system. Adding yourself to the
                roster is what makes you a member of the chapter — it takes about a minute and
                uses your ASURITE login.
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

      {/* -------------------------------------------------------- Community */}
      <section className="shell pb-20 md:pb-28">
        <SectionHeading
          number="02"
          eyebrow="Then"
          title="Join the community"
          intro={
            <p>
              The roster makes you a member. These are where being a member is actually worth
              something — you can join both without joining the chapter first, but do the roster
              anyway.
            </p>
          }
        />

        <ul className="mt-12">
          {community.map((channel, index) => (
            <li key={channel.label}>
              <Reveal delay={index * 70}>
                <a
                  href={channel.href}
                  className="group rule-t grid gap-4 py-10 md:grid-cols-12 md:gap-8"
                >
                  <p className="label text-maroon md:col-span-3">{channel.role}</p>
                  <h3 className="display text-[2rem] text-ink transition-colors group-hover:text-maroon md:col-span-4 md:text-[2.5rem]">
                    {channel.label}
                    <span
                      aria-hidden
                      className="ml-3 inline-block text-lg text-ash transition-transform duration-300 group-hover:translate-x-1"
                    >
                      ↗
                    </span>
                  </h3>
                  <p className="leading-relaxed text-graphite md:col-span-5">{channel.body}</p>
                </a>
              </Reveal>
            </li>
          ))}
        </ul>
      </section>

      {/* ----------------------------------------------------------- Contact */}
      <section className="bg-bone">
        <div className="shell py-20 md:py-28">
          <div className="grid gap-10 md:grid-cols-12">
            <Reveal className="md:col-span-4">
              <p className="label text-maroon">03 / Contact</p>
            </Reveal>
            <Reveal delay={60} className="md:col-span-8">
              <h2 className="display text-[clamp(1.75rem,4vw,2.75rem)] text-ink">
                Not a student? Still useful.
              </h2>
              <div className="measure mt-6 space-y-5 text-[1.0625rem] leading-relaxed text-graphite md:text-lg">
                <p>
                  Engineers, researchers, founders, recruiters and ASU alumni are welcome as
                  non-voting associate members — speaking, mentoring, judging, hosting a site
                  visit or supporting an event.
                </p>
                <p>
                  If you have something specific in mind, email is the fastest route. Otherwise
                  the social links below all reach the officers.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-x-8 gap-y-4">
                <a href={`mailto:${links.email}`} className="link-underline text-lg text-ink">
                  {links.email}
                </a>
                <a href={links.instagram} className="link-underline text-lg text-ink">
                  Instagram ↗
                </a>
                <a href={links.discord} className="link-underline text-lg text-ink">
                  Discord ↗
                </a>
                <a href={links.linkedin} className="link-underline text-lg text-ink">
                  LinkedIn ↗
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <Reveal>
        <figure>
          <Image
            src="/images/gallery/16-huddle.jpg"
            alt="Participants and a mentor huddled around a laptop at a chapter event, with a volunteer taking notes beside them."
            width={1200}
            height={1600}
            sizes="100vw"
            className="h-[46vh] w-full object-cover object-center md:h-[62vh]"
          />
        </figure>
      </Reveal>
    </>
  );
}
