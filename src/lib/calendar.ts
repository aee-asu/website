import type { ChapterEvent } from "../data/events";
import { site } from "../data/site";

/** Google creates a personal copy, not a subscription or an event registration. */
export function googleCalendarUrl(event: ChapterEvent): string | undefined {
  if (event.status !== "published" || !event.calendar) return undefined;
  const { start, end } = event.calendar;
  const offsetTimestamp = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:Z|[+-]\d{2}:\d{2})$/;
  if (![start, end].every(value => offsetTimestamp.test(value) && Number.isFinite(Date.parse(value))) || Date.parse(end) <= Date.parse(start)) return undefined;
  const stamp = (value: string) => new Date(value).toISOString().replace(/[-:]/g, "").replace(/\.\d{3}Z$/, "Z");
  const details = [
    event.description,
    event.registrationUrl ? `RSVP: ${event.registrationUrl}` : "Check the event page for registration details.",
    `Latest details: ${site.url}${event.href ?? `/events/${event.slug}`}`,
    "Saving this event does not register you. This calendar copy will not update automatically; check the event page before attending.",
  ].join("\n\n");
  const params = new URLSearchParams({
    action: "TEMPLATE", text: event.title, dates: `${stamp(start)}/${stamp(end)}`,
    stz: "America/Phoenix", etz: "America/Phoenix",
    location: [event.location, event.campus].filter(Boolean).join(" · "), details,
  });
  return `https://calendar.google.com/calendar/r/eventedit?${params}`;
}
