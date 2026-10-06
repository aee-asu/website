import Link from "next/link";
import type { ChapterEvent } from "@/data/events";
import { formatDate } from "@/lib/date";
import { DocumentaryFigure, EventMetadata, TechnicalTopics } from "./Notebook";
import styles from "./Notebook.module.css";

export function PastEventRecord({ event, preview = false, headingLevel = 3 }: { event: ChapterEvent; preview?: boolean; headingLevel?: 3 | 4 }) {
  const Heading = headingLevel === 4 ? "h4" : "h3";
  const hasImage = Boolean(event.image && event.imageAlt);
  return <article id={preview ? undefined : event.slug} className={`${styles.record} ${hasImage ? "" : styles.textRecord}`} data-event-mode="past">
    <div className={styles.recordHeader}>
      <p className={styles.date}><time dateTime={event.date}>{formatDate(event.date, event.endDate)}</time><span className={styles.category}> · {event.category}</span></p>
      <Heading className={styles.eventTitle}>{event.title}</Heading>
      <EventMetadata event={event} />
    </div>
    {event.image && event.imageAlt && <div className={styles.recordFigure}>
      <DocumentaryFigure src={event.image} alt={event.imageAlt} width={event.imageWidth ?? 1200} height={event.imageHeight ?? 900}
        sizes="(min-width: 1360px) 515px, (min-width: 768px) 42vw, calc(100vw - 48px)"
        caption={event.imageCaption ?? event.imageAlt} />
    </div>}
    <div className={styles.recordBody}>
      <p>{event.recap ?? event.description}</p>
      <TechnicalTopics topics={event.topics} />
      {!preview && event.learningOutcomes?.length ? <div><h5>Verified learning outcomes</h5><ul className={styles.points}>{event.learningOutcomes.map(outcome => <li key={outcome}>{outcome}</li>)}</ul></div> : null}
      {event.details?.length ? <dl className={styles.facts}>{event.details.map(detail => <div key={detail.label}><dt>{detail.label}</dt><dd>{detail.value}</dd></div>)}</dl> : null}
      {preview || event.href ? <div className={styles.recordAction}><Link className={`${styles.textLink} ${styles.actionLink}`} href={event.href ?? `/events#${event.slug}`}>{event.href ? "Read the event story" : "View event record"}<span aria-hidden>&nbsp;→</span></Link></div> : null}
    </div>
  </article>;
}
