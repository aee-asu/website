import type { Metadata } from "next";
import Link from "next/link";

import { JsonLd } from "@/components/JsonLd";
import { NotebookSectionHeading, ParticipationLinks } from "@/components/notebook/Notebook";
import { PastEventRecord } from "@/components/notebook/PastEventRecord";
import { UpcomingEventBrief } from "@/components/notebook/UpcomingEventBrief";
import styles from "@/components/notebook/Notebook.module.css";
import { energyOpportunities } from "@/data/energyOpportunities";
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
  const phoenixToday = new Intl.DateTimeFormat("en-CA", { timeZone: "America/Phoenix", year: "numeric", month: "2-digit", day: "2-digit" }).format(now);
  const outsideOpportunities = energyOpportunities.filter(item => item.date >= phoenixToday);

  return <div className={styles.page}>
    {[...upcoming, ...past].map(event => <JsonLd key={event.slug} data={eventSchema(event)} />)}
    <section className={`${styles.shell} ${styles.pageIntro}`}>
      <p className={styles.identity}>Events</p>
      <h1 className={styles.pageTitle}>Come to one thing.</h1>
      <p className={styles.introText}>You don&rsquo;t have to be a member or have an energy background to get involved. Check each listing for attendance details before heading over. All times are Arizona time.</p>
      <nav aria-label="Event sections" className={styles.pageNav}>
        <a href="#upcoming" className={`${styles.textLink} ${styles.actionLink}`}>Upcoming events ↓</a>
        <a href="#asu-opportunities" className={`${styles.textLink} ${styles.actionLink}`}>Around ASU ↓</a>
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

    <section id="asu-opportunities" className={`${styles.shell} ${styles.section} ${styles.upcomingSection}`}>
      <NotebookSectionHeading label="Around ASU" title="Energy beyond the chapter" />
      <p className={styles.introText}>Selected energy events from other ASU groups. These are not hosted by AEE; check the organizer&rsquo;s page for the latest details and registration.</p>
      {outsideOpportunities.length > 0 && <ul>{outsideOpportunities.map(item => <li key={item.sourceUrl}>
        <article className={styles.brief}>
          <div>
            <p className={styles.date}><time dateTime={item.date}>{new Intl.DateTimeFormat("en-US", { timeZone: "UTC", month: "long", day: "numeric", year: "numeric" }).format(new Date(`${item.date}T12:00:00Z`))}</time></p>
            <h3 className={styles.eventTitle}>{item.title}</h3>
            <dl className={styles.metadata}>
              <div><dt>Time</dt><dd>{item.time} (Arizona time)</dd></div>
              <div><dt>Where</dt><dd>{item.location}</dd></div>
              <div><dt>Host</dt><dd>{item.host}</dd></div>
            </dl>
          </div>
          <div className={styles.attendance}><a className={`${styles.textLink} ${styles.actionLink}`} href={item.sourceUrl}>Details and registration ↗</a></div>
          <div className={styles.briefBody}><p>{item.description}</p></div>
        </article>
      </li>)}</ul>}
      <p className={styles.statSource}>We also watch <a className={styles.textLink} href="https://innercircle.engineering.asu.edu/tag/events/">Fulton Inner Circle events ↗</a> for relevant opportunities.</p>
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
