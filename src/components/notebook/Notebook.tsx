import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

import type { ChapterEvent } from "@/data/events";
import { links } from "@/data/site";
import { googleCalendarUrl } from "@/lib/calendar";
import styles from "./Notebook.module.css";

export function NotebookSectionHeading({ label, title, aside }: { label: string; title: string; aside?: ReactNode }) {
  return <div className={styles.sectionHeading}>
    <span className={styles.tab}>{label}</span>
    <div className={styles.headingLine}><h2 className={styles.sectionTitle}>{title}</h2>{aside}</div>
  </div>;
}

export function EventMetadata({ event, upcoming = false }: { event: ChapterEvent; upcoming?: boolean }) {
  return <dl className={styles.metadata}>
    {upcoming && <div><dt>Time</dt><dd>{event.time ? `${event.time} · Arizona time` : "Time to be announced"}</dd></div>}
    <div><dt>Location</dt><dd>{event.location}{event.campus ? ` · ${event.campus}` : ""}</dd></div>
    {event.host && <div><dt>Host</dt><dd>{event.host}</dd></div>}
    {event.attendanceMode && <div><dt>Format</dt><dd>{event.attendanceMode === "hybrid" ? "Hybrid" : "In person"}</dd></div>}
    {event.speaker && <div><dt>Speaker</dt><dd>{event.speaker}</dd></div>}
    {event.organization && event.organization !== event.host && <div><dt>With</dt><dd>{event.organization}</dd></div>}
  </dl>;
}

type DocumentaryFigureProps = {
  src: string; alt: string; width: number; height: number;
  caption: ReactNode; sizes: string; priority?: boolean;
};
export function DocumentaryFigure({ src, alt, width, height, caption, sizes, priority = false }: DocumentaryFigureProps) {
  return <figure className={styles.figure}>
    <Image src={src} alt={alt} width={width} height={height} sizes={sizes} priority={priority} className={styles.photo} />
    <figcaption className={styles.caption}>{caption}</figcaption>
  </figure>;
}

export function TechnicalTopics({ topics }: { topics?: string[] }) {
  if (!topics?.length) return null;
  return <ul className={styles.topics} aria-label="Topics covered">{topics.map(topic => <li key={topic}>{topic}</li>)}</ul>;
}

export function AttendanceAction({ event }: { event: ChapterEvent }) {
  const calendarUrl = googleCalendarUrl(event);
  return <div className={styles.attendance}>
    {event.registrationUrl ? <a className={styles.button} href={event.registrationUrl} aria-label={`RSVP for ${event.title}`}>RSVP <span aria-hidden>&nbsp;↗</span></a> : <>
      <p>{event.registrationNote ?? "RSVP details have not been posted."}</p>
      <a className={`${styles.textLink} ${styles.actionLink}`} href={`mailto:${links.email}?subject=${encodeURIComponent(`Attendance: ${event.title}`)}`}>Ask about attending <span aria-hidden>&nbsp;→</span></a>
    </>}
    {event.registrationUrl && event.registrationNote && <p>{event.registrationNote}</p>}
    {calendarUrl && <div>
      <a className={`${styles.textLink} ${styles.actionLink}`} href={calendarUrl} target="_blank" rel="noopener noreferrer" aria-label={`Add ${event.title} to Google Calendar (opens in a new tab)`}>Add to Google Calendar <span aria-hidden>&nbsp;↗</span></a>
      <p>Calendar reminder only. RSVP separately.</p>
    </div>}
  </div>;
}

export function ParticipationLinks({
  industryTitle = "Bring us something.",
  industryDescription = "Want to speak, host a visit, or run a session?",
  industryAction = "Work with the chapter",
}: { industryTitle?: string; industryDescription?: string; industryAction?: string } = {}) {
  return <section className={styles.shell} aria-label="Take part">
    <div className={styles.participation}>
      <div><h2>Come to one thing.</h2><p>Any major, no dues. You don&rsquo;t need an energy background. Just be interested.</p>
        <Link className={`${styles.textLink} ${styles.actionLink}`} href="/join">Join AEE at ASU <span aria-hidden>&nbsp;→</span></Link></div>
      <div><h2>{industryTitle}</h2><p>{industryDescription}</p>
        <Link className={`${styles.textLink} ${styles.actionLink}`} href="/partner">{industryAction} <span aria-hidden>&nbsp;→</span></Link></div>
    </div>
  </section>;
}
