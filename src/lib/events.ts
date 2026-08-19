import { events, type ChapterEvent } from "@/data/events";

/**
 * An event counts as past only once its final day is over, so a same-day event
 * stays "upcoming" until midnight. Dates are treated as local calendar dates.
 */
function endOf(event: ChapterEvent): Date {
  const [y, m, d] = (event.endDate ?? event.date).split("-").map(Number);
  return new Date(y, m - 1, d, 23, 59, 59);
}

function published(list: ChapterEvent[]): ChapterEvent[] {
  return list.filter((event) => event.status === "published");
}

export function upcomingEvents(now: Date = new Date()): ChapterEvent[] {
  return published(events)
    .filter((event) => endOf(event) >= now)
    .sort((a, b) => a.date.localeCompare(b.date));
}

export function pastEvents(now: Date = new Date()): ChapterEvent[] {
  return published(events)
    .filter((event) => endOf(event) < now)
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function featuredEvent(now: Date = new Date()): ChapterEvent | undefined {
  return published(events).find((event) => event.featured) ?? pastEvents(now)[0];
}
