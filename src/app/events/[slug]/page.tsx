import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { JsonLd } from "@/components/JsonLd";
import { AttendanceAction, DocumentaryFigure, EventMetadata, TechnicalTopics } from "@/components/notebook/Notebook";
import styles from "@/components/notebook/Notebook.module.css";
import { energyOpportunities, type EnergyOpportunity } from "@/data/energyOpportunities";
import { events, type ChapterEvent } from "@/data/events";
import { fieldNotes } from "@/data/fieldNotes";
import { gallery } from "@/data/gallery";
import { formatDate } from "@/lib/date";
import { isPastEvent } from "@/lib/events";
import { eventSchema, pageMeta } from "@/lib/seo";

export const dynamicParams = false;

function getRecord(slug: string) {
  const event = events.find(event => event.slug === slug && event.status === "published");
  if (event && event.href !== "/hackathon") {
    return { kind: "chapter" as const, event, note: fieldNotes.find(note => note.eventSlug === slug) };
  }
  const opportunity = energyOpportunities.find(item => item.slug === slug);
  if (opportunity) return { kind: "outside" as const, opportunity };
  notFound();
}

export function generateStaticParams() {
  return [
    ...events.filter(event => event.status === "published" && event.href !== "/hackathon").map(event => ({ slug: event.slug })),
    ...energyOpportunities.map(item => ({ slug: item.slug })),
  ];
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const record = getRecord((await params).slug);
  if (record.kind === "outside") {
    const { opportunity } = record;
    return pageMeta({ title: opportunity.title, description: opportunity.description, path: `/events/${opportunity.slug}` });
  }
  const { event, note } = record;
  if (!note) return pageMeta({ title: event.title, description: event.description, path: `/events/${event.slug}` });
  const meta = pageMeta({ title: `${event.title} — Field Note`, description: note.introduction, path: `/events/${event.slug}` });
  const photo = gallery.find(photo => photo.src === note.photographs[0]?.src);
  return {
    ...meta,
    openGraph: { ...meta.openGraph, type: "article", ...(photo ? { images: [{ url: photo.src, width: photo.width, height: photo.height, alt: photo.alt }] } : {}) },
    twitter: { ...meta.twitter, ...(photo ? { images: [photo.src] } : {}) },
  };
}

function ChapterEventPage({ event }: { event: ChapterEvent }) {
  const past = isPastEvent(event);
  return <article className={styles.page}>
    <JsonLd data={eventSchema(event)} />
    <div className={`${styles.shell} py-8 md:py-12`}>
      <Link href={`/events#${event.slug}`} className={`${styles.textLink} ${styles.actionLink}`}>← All chapter events</Link>
      <header className="mt-6 max-w-[70ch]">
        <p className={styles.tab}>{past ? "Chapter event record" : "Upcoming chapter event"}</p>
        <h1 className={`${styles.pageTitle} mt-5`}>{event.title}</h1>
        <p className={`${styles.date} mt-5`}><time dateTime={event.date}>{formatDate(event.date, event.endDate)}</time></p>
        <EventMetadata event={event} upcoming />
        <TechnicalTopics topics={event.topics} />
        <p className="mt-6 text-graphite">{event.recap ?? event.description}</p>
      </header>
      {!past && <AttendanceAction event={event} />}
      {event.image && event.imageAlt && <div className="mt-8 max-w-[900px]">
        <DocumentaryFigure src={event.image} alt={event.imageAlt} width={event.imageWidth ?? 1200} height={event.imageHeight ?? 900}
          caption={event.imageCaption ?? event.imageAlt} sizes="(min-width: 1024px) 900px, calc(100vw - 48px)" />
      </div>}
      {event.learningObjectives?.length && !past ? <section className="mt-10 rule-t pt-6 max-w-[70ch]">
        <h2 className={styles.sectionTitle}>What you&rsquo;ll explore</h2>
        <ul className={`${styles.points} mt-5`}>{event.learningObjectives.map(item => <li key={item}>{item}</li>)}</ul>
      </section> : null}
      {event.learningOutcomes?.length ? <section className="mt-10 rule-t pt-6 max-w-[70ch]">
        <h2 className={styles.sectionTitle}>Verified learning outcomes</h2>
        <ul className={`${styles.points} mt-5`}>{event.learningOutcomes.map(item => <li key={item}>{item}</li>)}</ul>
      </section> : null}
      <footer className="mt-10 rule-t pt-6"><Link href="/events" className={`${styles.textLink} ${styles.actionLink}`}>All events →</Link></footer>
    </div>
  </article>;
}

function OutsideEventPage({ opportunity }: { opportunity: EnergyOpportunity }) {
  return <article className={styles.page}>
    <div className={`${styles.shell} py-8 md:py-12`}>
      <Link href="/events#asu-opportunities" className={`${styles.textLink} ${styles.actionLink}`}>← Around ASU</Link>
      <header className="mt-6 max-w-[70ch]">
        <p className={styles.tab}>Around ASU</p>
        <h1 className={`${styles.pageTitle} mt-5`}>{opportunity.title}</h1>
        <p className={`${styles.date} mt-5`}><time dateTime={opportunity.date}>{formatDate(opportunity.date)}</time></p>
        <dl className={styles.metadata}>
          <div><dt>Time</dt><dd>{opportunity.time} · Arizona time</dd></div>
          <div><dt>Where</dt><dd>{opportunity.location}</dd></div>
          <div><dt>Host</dt><dd>{opportunity.host}</dd></div>
        </dl>
        <p className="mt-6 text-graphite">{opportunity.description}</p>
      </header>
      <div className="mt-8 max-w-[70ch]">
        <a className={styles.button} href={opportunity.sourceUrl}>Original ASU listing ↗</a>
        <p className="mt-4 text-sm text-graphite">Hosted by {opportunity.host}. Check the original listing for registration and any changes. AEE at ASU is sharing this opportunity.</p>
      </div>
      <footer className="mt-10 rule-t pt-6"><Link href="/events" className={`${styles.textLink} ${styles.actionLink}`}>All events →</Link></footer>
    </div>
  </article>;
}

export default async function EventPage({ params }: { params: Promise<{ slug: string }> }) {
  const record = getRecord((await params).slug);
  if (record.kind === "outside") return <OutsideEventPage opportunity={record.opportunity} />;
  if (!record.note) return <ChapterEventPage event={record.event} />;
  const { note, event } = record;
  const leadEntry = note.photographs[0];
  const leadPhoto = gallery.find(photo => photo.src === leadEntry?.src);
  return <article className={styles.page}>
    <div className={`${styles.shell} py-8 md:py-12`}>
      <Link href={`/events#${event.slug}`} className={`${styles.textLink} ${styles.actionLink}`}>← Back to event records</Link>
      <header className="mt-6 max-w-[70ch]">
        <p className={styles.tab}>Field Note</p>
        <h1 className={`${styles.pageTitle} mt-5`}>{event.title}</h1>
        <p className={`${styles.date} mt-5`}><time dateTime={event.date}>{formatDate(event.date)}</time></p>
        <EventMetadata event={event} />
        <TechnicalTopics topics={event.topics} />
        <p className="mt-6 text-graphite">{event.description}</p>
      </header>

      {leadPhoto && <div className="mt-8 max-w-[900px]">
        <DocumentaryFigure {...leadPhoto} caption={leadEntry.caption} sizes="(min-width: 1024px) 900px, calc(100vw - 48px)" />
      </div>}

      <section className="mt-10 rule-t pt-6" aria-labelledby="observations-heading">
        <h2 id="observations-heading" className={styles.sectionTitle}>What the visit made visible</h2>
        <p className="mt-4 max-w-[65ch] text-graphite">Three observations from the chapter&rsquo;s event record and photographs.</p>
        <ol className="mt-8 grid gap-8 md:grid-cols-3">
          {note.observations.map(observation => <li key={observation.title}>
            <h3 className="text-lg font-semibold">{observation.title}</h3>
            <p className="mt-3 max-w-[60ch] text-graphite">{observation.body}</p>
          </li>)}
        </ol>
      </section>

      <section className="mt-10 rule-t pt-6" aria-labelledby="photo-heading">
        <h2 id="photo-heading" className={styles.sectionTitle}>Inside the visit</h2>
        <div className="mt-8 grid items-start gap-8 md:grid-cols-2">
          {note.photographs.slice(1).map(entry => {
            const photo = gallery.find(photo => photo.src === entry.src);
            if (!photo) return null;
            return <div key={entry.src} className={photo.height > photo.width ? "max-w-[420px]" : ""}>
              <DocumentaryFigure {...photo} caption={entry.caption}
                sizes="(min-width: 768px) 45vw, calc(100vw - 48px)" />
            </div>;
          })}
        </div>
      </section>

      {note.quote && <blockquote className="mt-10 rule-t pt-6 max-w-[65ch]"><p>{note.quote.text}</p><footer className="mt-3 text-sm text-graphite">{note.quote.attribution}</footer></blockquote>}

      <footer className="mt-10 rule-t pt-6">
        <p className="max-w-[65ch] text-sm text-graphite">Recorded by AEE at ASU from the chapter&rsquo;s September 2026 event record and photo archive.</p>
        <nav aria-label="Continue exploring" className={styles.links}>
          <Link href="/events#upcoming" className={`${styles.textLink} ${styles.actionLink}`}>Find the next event →</Link>
          <Link href="/research" className={`${styles.textLink} ${styles.actionLink}`}>Explore related research at ASU →</Link>
          <Link href="/partner" className={`${styles.textLink} ${styles.actionLink}`}>Host a visit for students →</Link>
        </nav>
      </footer>
    </div>
  </article>;
}
