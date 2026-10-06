import Link from "next/link";

import { DocumentaryFigure, NotebookSectionHeading, ParticipationLinks } from "@/components/notebook/Notebook";
import { PastEventRecord } from "@/components/notebook/PastEventRecord";
import { UpcomingEventBrief } from "@/components/notebook/UpcomingEventBrief";
import styles from "@/components/notebook/Notebook.module.css";
import { focusAreas } from "@/data/focusAreas";
import { gallery } from "@/data/gallery";
import { arizonaStats, nationalStats, type Stat } from "@/data/landscape";
import { links, site } from "@/data/site";
import { featuredEvent, pastEvents, upcomingEvents } from "@/lib/events";
import { formatDate } from "@/lib/date";

export const revalidate = 3600;

function StatRecord({ stat }: { stat: Stat }) {
  return <li className={styles.stat}>
    <p className={styles.statValue}>{stat.value}{stat.unit ? ` ${stat.unit}` : ""}</p>
    <p className={styles.statBody}>{stat.body}</p>
    <p className={styles.statSource}><a className={styles.textLink} href={stat.sourceUrl}>{stat.source} ↗</a> · {stat.asOf}</p>
  </li>;
}

export default function HomePage() {
  const now = new Date();
  const next = upcomingEvents(now)[0];
  const past = pastEvents(now);
  const recent = past.slice(0, 2);
  const feature = featuredEvent(now);
  const selected = feature && !recent.some(event => event.slug === feature.slug) ? feature : undefined;
  // Curated, existing photograph linked to its actual event; never a decorative stand-in.
  const leadEvent = past.find(event => event.slug === "asu-aep-solar-fab-tour-2026");
  const leadPhoto = gallery.find(photo => photo.src === "/images/gallery/19-solar-fab-sample.jpg");

  return <div className={styles.page}>
    <div className={`${styles.shell} ${styles.opening}`}>
      <section className={styles.intro} aria-labelledby="chapter-title">
        <p className={styles.identity}>{site.shortName} · Association of Energy Engineers</p>
        <h1 id="chapter-title">We&rsquo;re the energy club <span>at ASU.</span></h1>
        <p className={styles.promise}>We visit engineering facilities, meet industry engineers, and run technical workshops. Open to all majors—no experience needed.</p>
        <p className={styles.membership}>Any major, no dues. <Link className={styles.textLink} href="/join">Join AEE</Link></p>
      </section>

      <section id="upcoming" className={styles.next} aria-labelledby="next-event-heading">
        <h2 id="next-event-heading" className={styles.tab}>Next event</h2>
        {next ? <UpcomingEventBrief event={next} compact /> : <div className={styles.empty}>
          <p>Nothing on the calendar right now. Discord is the fastest way to hear about the next one.</p>
          <a className={`${styles.textLink} ${styles.actionLink}`} href={links.discord}>Join the Discord ↗</a>
        </div>}
        <Link href="/events#upcoming" className={`${styles.textLink} ${styles.actionLink}`}>All upcoming events <span aria-hidden>&nbsp;→</span></Link>
      </section>

      {leadPhoto && leadEvent && <div className={styles.lead}>
        <DocumentaryFigure src={leadPhoto.src} alt={leadPhoto.alt} width={leadPhoto.width} height={leadPhoto.height} priority
          sizes="(min-width: 1360px) 730px, (min-width: 1024px) 56vw, (min-width: 768px) calc(100vw - 80px), calc(100vw - 48px)"
          caption={<><strong>{leadEvent.title} · {formatDate(leadEvent.date)}</strong><span>Students examining samples inside the solar fab.</span><br /><Link className={styles.textLink} href={`/events#${leadEvent.slug}`}>View event record <span aria-hidden>&nbsp;→</span></Link></>} />
      </div>}
    </div>

    <section className={`${styles.shell} ${styles.section}`}>
      <NotebookSectionHeading label="Recent events" title="Where we’ve been" aside={<Link className={`${styles.textLink} ${styles.actionLink}`} href="/events#past-events">All past events →</Link>} />
      {recent.length ? <ul className={styles.records}>{recent.map(event => <li key={event.slug}><PastEventRecord event={event} preview /></li>)}</ul> : <p>Event records will appear here after our next event.</p>}
      <p className={styles.statSource}><Link className={`${styles.textLink} ${styles.actionLink}`} href="/partner">Interested in hosting a visit or session? Partner with AEE <span aria-hidden>&nbsp;→</span></Link></p>
    </section>

    {selected && <section className={`${styles.shell} ${styles.section}`}>
      <NotebookSectionHeading label="Selected event" title="Inside a chapter event" />
      <PastEventRecord event={selected} preview />
    </section>}

    <section className={`${styles.shell} ${styles.section}`}>
      <NotebookSectionHeading label="What we explore" title="Energy isn’t one major." />
      <p className={styles.introText}>Industry talks, technical workshops and site visits across power systems, semiconductors, solar, batteries and data centers. Our members come from engineering, sustainability, business, computing, science and policy.</p>
      <ul className={styles.focusGrid}>{focusAreas.map(area => <li key={area.number}><h3>{area.title}</h3><p>{area.description}</p></li>)}</ul>
      <div className={styles.links}>
        <Link href="/about" className={`${styles.textLink} ${styles.actionLink}`}>More about the chapter →</Link>
        <Link href="/research" className={`${styles.textLink} ${styles.actionLink}`}>Explore research at ASU →</Link>
      </div>
    </section>

    <section className={`${styles.shell} ${styles.section}`}>
      <NotebookSectionHeading label="Arizona energy context" title="The questions behind the visits" />
      <p className={styles.introText}>Arizona&rsquo;s power systems, manufacturing and growing energy demand shape the questions we bring to our events. These dated figures give context; follow the sources for the underlying data.</p>
      <details className={styles.context}>
        <summary>Explore the energy context</summary>
        <h3>Arizona</h3><ul>{arizonaStats.map(stat => <StatRecord key={stat.value + stat.source} stat={stat} />)}</ul>
        <h3>And beyond</h3><ul>{nationalStats.map(stat => <StatRecord key={stat.value + stat.source} stat={stat} />)}</ul>
        <p className={styles.statSource}>Figures are as published on the dates shown. They move quickly, and we re-check them each semester. If you spot one that has gone stale, tell us and we&rsquo;ll fix it.</p>
      </details>
    </section>
    <ParticipationLinks
      industryTitle="Bring students closer to your engineering."
      industryDescription="Host a site visit, give a technical talk, or lead a workshop for ASU students interested in energy, manufacturing, and infrastructure."
      industryAction="Discuss an event with AEE"
    />
  </div>;
}
