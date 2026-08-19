import type { ReactNode } from "react";

import { Reveal } from "@/components/Reveal";

type SectionHeadingProps = {
  /** Two-digit section number, e.g. "02". */
  number?: string;
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  /** Rendered at the far right on wide screens — usually a link. */
  aside?: ReactNode;
  as?: "h1" | "h2" | "h3";
};

export function SectionHeading({
  number,
  eyebrow,
  title,
  intro,
  aside,
  as: Tag = "h2",
}: SectionHeadingProps) {
  return (
    <Reveal className="rule-t pt-6 md:pt-8">
      <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-3">
        <p className="label text-ash">
          {number ? <span className="text-maroon">{number}</span> : null}
          {number && eyebrow ? <span className="mx-2">/</span> : null}
          {eyebrow}
        </p>
        {aside ? <div className="label">{aside}</div> : null}
      </div>

      <Tag className="display mt-8 text-[clamp(2rem,5.2vw,3.5rem)] text-ink">{title}</Tag>

      {intro ? (
        <div className="measure mt-6 text-[1.0625rem] leading-relaxed text-graphite md:text-lg">
          {intro}
        </div>
      ) : null}
    </Reveal>
  );
}
