import { events, type ChapterEvent } from "../data/events";

/**
 * An event counts as past only once its final day is over, so a same-day event
 * stays "upcoming" until midnight in America/Phoenix, independent of server TZ.
 */
function chapterDate(now: Date): string {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Phoenix", year: "numeric", month: "2-digit", day: "2-digit",
  }).formatToParts(now);
  const part = (type: string) => parts.find((value) => value.type === type)!.value;
  return `${part("year")}-${part("month")}-${part("day")}`;
}

export function isPastEvent(event: ChapterEvent, now: Date = new Date()): boolean {
  return (event.endDate ?? event.date) < chapterDate(now);
}

function published(list: ChapterEvent[]): ChapterEvent[] {
  return list.filter((event) => event.status === "published");
}

export function upcomingEvents(now: Date = new Date()): ChapterEvent[] {
  return published(events)
    .filter((event) => !isPastEvent(event, now))
    .sort((a, b) => a.date.localeCompare(b.date));
}

export function pastEvents(now: Date = new Date()): ChapterEvent[] {
  return published(events)
    .filter((event) => isPastEvent(event, now))
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function featuredEvent(now: Date = new Date()): ChapterEvent | undefined {
  const past = pastEvents(now);
  return past.find((event) => event.featured) ?? past[0];
}
