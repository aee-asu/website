import Link from "next/link";

import { Reveal } from "@/components/Reveal";
import { links } from "@/data/site";

const channels = [
  {
    href: links.join,
    label: "Sun Devil Central",
    note: "Officially join the student organization. This is the one that counts.",
  },
  {
    href: links.discord,
    label: "Discord",
    note: "Where the day-to-day conversation happens — questions, project talk, event chatter.",
  },
  {
    href: links.instagram,
    label: "Instagram",
    note: "Public updates, event posts and photos from what we have been doing.",
  },
  {
    href: links.linkedin,
    label: "LinkedIn",
    note: "The professional side — worth following if you are job-hunting or want to stay in touch after graduating.",
  },
];

export function JoinCTA() {
  return (
    <section className="on-dark bg-ink text-paper">
      <div className="shell py-20 md:py-28">
        <Reveal>
          <p className="label text-gold">Join</p>
          <h2 className="display mt-8 max-w-[18ch] text-[clamp(2.25rem,6vw,4.5rem)]">
            You do not need an energy background. You need to be interested.
          </h2>
          <p className="measure mt-8 text-lg leading-relaxed text-mist">
            Undergraduates, graduate students and PhD students from any major are welcome —
            engineering, sustainability, business, computing, science, policy. Show up to one
            thing and see whether it is for you.
          </p>
        </Reveal>

        <Reveal delay={80}>
          <Link
            href="/join"
            className="mt-12 inline-flex items-center gap-4 bg-paper px-8 py-5 text-lg text-ink transition-colors hover:bg-gold"
          >
            Join AEE at ASU
            <span aria-hidden>→</span>
          </Link>
        </Reveal>

        <ul className="mt-20 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {channels.map((channel, index) => (
            <li key={channel.label}>
              <Reveal delay={index * 70}>
                <a href={channel.href} className="group block rule-t pt-6">
                  <span className="flex items-baseline justify-between gap-4">
                    <span className="text-xl text-paper transition-colors group-hover:text-gold">
                      {channel.label}
                    </span>
                    <span
                      aria-hidden
                      className="text-ash transition-transform duration-300 group-hover:translate-x-1 group-hover:text-gold"
                    >
                      ↗
                    </span>
                  </span>
                  <span className="mt-3 block max-w-[34ch] pr-6 text-sm leading-relaxed text-mist">
                    {channel.note}
                  </span>
                </a>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
