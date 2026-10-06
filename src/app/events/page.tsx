import type { Metadata } from "next";
import Link from "next/link";

import { JsonLd } from "@/components/JsonLd";
import { NotebookSectionHeading, ParticipationLinks } from "@/components/notebook/Notebook";
import { PastEventRecord } from "@/components/notebook/PastEventRecord";
import { UpcomingEventBrief } from "@/components/notebook/UpcomingEventBrief";
import styles from "@/components/notebook/Notebook.module.css";
import type { ChapterEvent } from "@/data/events";
import { links } from "@/data/site";
import { pastEvents, upcomingEvents } from "@/lib/events";
import { eventSchema, pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Events",
  description: "Upcoming sessions, workshops, site visits and competitions from AEE at ASU — and an archive of what the chapter has already run.",
  path: "/events",
});
export const revalidate = 3600;

function groupBySemester(events: ChapterEvent[]) {
  const groups = new Map<string, ChapterEvent[]>();
  for (const event of events) {
    const month = Number(event.date.slice(5, 7));
    const semester = month >= 8 ? "Fall" : month >= 5 ? "Summer" : "Spring";
    const label = `${semester} ${event.date.slice(0, 4)}`;
    groups.set(label, [...(groups.get(label) ?? []), event]);
  }
  return [...groups];
}

export default function EventsPage() {
  const now = new Date();
  const upcoming = upcomingEvents(now);
  const past = pastEvents(now);

  return <div className={styles.page}>
    {[...upcoming, ...past].map(event => <JsonLd key={event.slug} data={eventSchema(event)} />)}
    <section className={`${styles.shell} ${styles.pageIntro}`}>
      <p className={styles.identity}>Events</p>
      <h1 className={styles.pageTitle}>Come to one thing.</h1>
      <p className={styles.introText}>You don&rsquo;t have to be a member or have an energy background to get involved. Check each listing for attendance details before heading over. All times are Arizona time.</p>
      <nav aria-label="Event sections" className={styles.pageNav}>
        <a href="#upcoming" className={`${styles.textLink} ${styles.actionLink}`}>Upcoming events ↓</a>
        <a href="#past-events" className={`${styles.textLink} ${styles.actionLink}`}>Past events ↓</a>
      </nav>
    </section>

    <section id="upcoming" className={`${styles.shell} ${styles.section} ${styles.upcomingSection}`}>
      <NotebookSectionHeading label="Upcoming" title={upcoming.length ? "On the calendar" : "Nothing scheduled right now"} />
      {upcoming.length ? <ul>{upcoming.map(event => <li key={event.slug}><UpcomingEventBrief event={event} /></li>)}</ul> : <div className={styles.empty}>
        <p>We&rsquo;re either between semesters or still confirming things. The next date always goes up in Discord first.</p>
        <a className={`${styles.textLink} ${styles.actionLink}`} href={links.discord}>Join the Discord ↗</a>
      </div>}
    </section>

    <section id="past-events" className={`${styles.archive} ${styles.section}`}>
      <div className={styles.shell}>
        <NotebookSectionHeading label="Past events" title="The event record" aside={<Link className={`${styles.textLink} ${styles.actionLink}`} href="/gallery">Photo archive →</Link>} />
        {past.length ? groupBySemester(past).map(([semester, events]) => <section key={semester} className={styles.semester} aria-label={semester}>
          <h3 className={styles.semesterTitle}>{semester}</h3>
          <ul className={styles.records}>{events.map(event => <li key={event.slug}><PastEventRecord event={event} headingLevel={4} /></li>)}</ul>
        </section>) : <p>The archive starts once this semester&rsquo;s events are behind us.</p>}
      </div>
    </section>
    <ParticipationLinks />
  </div>;
}
