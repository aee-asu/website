import Link from "next/link";

import type { ChapterEvent } from "@/data/events";
import { formatDate, formatDateStack } from "@/lib/date";

/**
 * One event, as an editorial row rather than a card: date block, title and
 * facts, category on the right. Rows stack into a ruled list.
 */
export function EventRow({ event, past = false }: { event: ChapterEvent; past?: boolean }) {
  const { month, day } = formatDateStack(event.date);

  return (
    <li className="rule-b group">
      <div className="grid gap-x-8 gap-y-4 py-8 md:grid-cols-12 md:py-10">
        <div className="md:col-span-2">
          <p className={past ? "text-ash" : "text-ink"}>
            <span className="label block">{month}</span>
            <span className="display block text-[2.5rem] leading-none">{day}</span>
          </p>
          <p className="label mt-2 text-ash">{event.date.slice(0, 4)}</p>
        </div>

        <div className="md:col-span-7">
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
          <p className="measure mt-3 leading-relaxed text-graphite">{event.description}</p>

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
                <dd>{event.time}</dd>
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

        <div className="md:col-span-3 md:text-right">
          <p className="label text-maroon">{event.category}</p>
          {event.registrationUrl ? (
            <a
              href={event.registrationUrl}
              className="link-underline mt-4 inline-block text-[0.9375rem] text-ink"
            >
              Register
            </a>
          ) : null}
        </div>
      </div>
    </li>
  );
}
