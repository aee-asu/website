import type { ChapterEvent } from "@/data/events";
import { formatDate } from "@/lib/date";
import { AttendanceAction, EventMetadata } from "./Notebook";
import styles from "./Notebook.module.css";

export function UpcomingEventBrief({ event, compact = false }: { event: ChapterEvent; compact?: boolean }) {
  return <article id={compact ? `next-${event.slug}` : event.slug} className={`${styles.brief} ${compact ? styles.compact : ""}`} data-event-mode="upcoming">
    <div>
      <p className={styles.date}><time dateTime={event.date}>{formatDate(event.date, event.endDate)}</time></p>
      <h3 className={styles.eventTitle}>{event.title}</h3>
      <EventMetadata event={event} upcoming />
    </div>
    <AttendanceAction event={event} />
    {!compact && <div className={styles.briefBody}>
      <h4>{event.category === "Community" ? "About the event" : "Session focus"}</h4>
      <p>{event.description}</p>
      {event.learningObjectives?.length ? <div className={styles.notes}><h4>What you&rsquo;ll explore</h4><ul className={styles.points}>{event.learningObjectives.map(objective => <li key={objective}>{objective}</li>)}</ul></div> : null}
      {event.arrivalNotes && <div className={styles.notes}><h4>Arrival</h4><p>{event.arrivalNotes}</p></div>}
      {event.transportationNotes && <div className={styles.notes}><h4>Getting there</h4><p>{event.transportationNotes}</p></div>}
      {event.preparationNotes && <div className={styles.notes}><h4>Preparation</h4><p>{event.preparationNotes}</p></div>}
      {event.audience && <div className={styles.notes}><h4>Who it&rsquo;s for</h4><p>{event.audience}</p></div>}
      {event.capacityNote && <div className={styles.notes}><h4>Capacity</h4><p>{event.capacityNote}</p></div>}
      {event.pendingDetails?.length ? <div className={styles.notes}><h4>Details still being confirmed</h4><ul className={styles.points}>{event.pendingDetails.map(detail => <li key={detail}>{detail}</li>)}</ul></div> : null}
    </div>}
  </article>;
}
