import Link from "next/link";
import Image from "next/image";

import type { ChapterEvent } from "@/data/events";
import { links } from "@/data/site";
import { formatDate, formatDateStack } from "@/lib/date";

/**
 * One event, as an editorial row rather than a card: date block, title and
 * facts, category on the right. Rows stack into a ruled list.
 */
export function EventRow({ event, past = false }: { event: ChapterEvent; past?: boolean }) {
  const { month, day } = formatDateStack(event.date);

  return (
    <li id={event.slug} className="rule-b group scroll-mt-28">
      <div className="grid grid-cols-[3rem_minmax(0,1fr)] gap-x-5 gap-y-4 py-8 md:grid-cols-12 md:gap-x-8 md:py-10">
        <div className="md:col-span-2">
          <p className={past ? "text-ash" : "text-ink"}>
            <span className="label block">{month}</span>
            <span className="display block text-[2.5rem] leading-none">{day}</span>
          </p>
          <p className="label mt-2 text-ash">{event.date.slice(0, 4)}</p>
        </div>

        <div className="min-w-0 md:col-span-7">
          <h3 className="display text-[1.75rem] text-ink md:text-[2rem]">
            {event.href ? (
              <Link href={event.href} className="transition-colors hover:text-maroon">
                {event.title}
                <span aria-hidden className="ml-3 inline-block text-lg text-ash">
                  →
                </span>
              </Link>
            ) : (
              event.title
            )}
          </h3>
          <p className="measure mt-3 leading-relaxed text-graphite">{past ? event.recap ?? event.description : event.description}</p>
          {event.speaker ? <p className="mt-3 text-sm text-graphite"><span className="font-medium text-ink">With </span>{event.speaker}{event.organization ? ` · ${event.organization}` : ""}</p> : null}
          {event.learningOutcomes?.length ? <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-graphite">{event.learningOutcomes.map((outcome) => <li key={outcome}>{outcome}</li>)}</ul> : null}
          {past && event.image && event.imageAlt ? (
            <Image src={event.image} alt={event.imageAlt} width={1200} height={900}
              sizes="(min-width: 1536px) 720px, (min-width: 768px) 58vw, 80vw"
              className="mt-5 h-auto w-full bg-bone" />
          ) : null}

          <dl className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm text-graphite">
            <div className="flex gap-2">
              <dt className="sr-only">Date</dt>
              <dd>
                <time dateTime={event.date}>{formatDate(event.date, event.endDate)}</time>
              </dd>
            </div>
            {event.time ? (
              <div className="flex gap-2">
                <dt className="sr-only">Time</dt>
                <dd>{event.time} (Arizona time)</dd>
              </div>
            ) : null}
            <div className="flex gap-2">
              <dt className="sr-only">Location</dt>
              <dd>
                {event.location}
                {event.campus ? `, ${event.campus}` : ""}
              </dd>
            </div>
          </dl>
        </div>

        <div className="col-start-2 md:col-span-3 md:col-start-auto md:text-right">
          <p className="label text-maroon">{event.category}</p>
          {!past && event.registrationUrl ? (
            <a
              href={event.registrationUrl}
              className="link-underline mt-4 inline-block text-[0.9375rem] text-ink"
            >
              Register
            </a>
          ) : null}
          {!past && !event.registrationUrl ? (
            <div className="mt-4 text-sm leading-relaxed text-graphite">
              <p>{event.registrationNote ?? "RSVP details have not been posted."}</p>
              <a href={`mailto:${links.email}?subject=${encodeURIComponent(`Attendance: ${event.title}`)}`} className="link-underline mt-3 inline-block text-ink">Ask about attending</a>
            </div>
          ) : null}
        </div>
      </div>
    </li>
  );
}
