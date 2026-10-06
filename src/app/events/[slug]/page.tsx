import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { DocumentaryFigure, EventMetadata, TechnicalTopics } from "@/components/notebook/Notebook";
import styles from "@/components/notebook/Notebook.module.css";
import { events } from "@/data/events";
import { fieldNotes } from "@/data/fieldNotes";
import { gallery } from "@/data/gallery";
import { formatDate } from "@/lib/date";
import { pageMeta } from "@/lib/seo";

export const dynamicParams = false;

function getRecord(slug: string) {
  const note = fieldNotes.find(note => note.eventSlug === slug);
  const event = events.find(event => event.slug === slug && event.status === "published");
  if (!note || !event) notFound();
  return { note, event };
}

export function generateStaticParams() {
  return fieldNotes.filter(note => events.some(event => event.slug === note.eventSlug && event.status === "published"))
    .map(note => ({ slug: note.eventSlug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { event, note } = getRecord((await params).slug);
  const meta = pageMeta({ title: `${event.title} — Field Note`, description: note.introduction, path: `/events/${event.slug}` });
  const photo = gallery.find(photo => photo.src === note.photographs[0]?.src);
  return {
    ...meta,
    openGraph: { ...meta.openGraph, type: "article", ...(photo ? { images: [{ url: photo.src, width: photo.width, height: photo.height, alt: photo.alt }] } : {}) },
    twitter: { ...meta.twitter, ...(photo ? { images: [photo.src] } : {}) },
  };
}

export default async function FieldNotePage({ params }: { params: Promise<{ slug: string }> }) {
  const { note, event } = getRecord((await params).slug);
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
