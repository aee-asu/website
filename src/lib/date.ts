const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

function parts(iso: string) {
  const [y, m, d] = iso.split("-").map(Number);
  return { y, m: m - 1, d };
}

/** "April 18, 2026" — or "April 18–19, 2026" when an end date is given. */
export function formatDate(iso: string, endIso?: string): string {
  const a = parts(iso);
  if (!endIso) return `${MONTHS[a.m]} ${a.d}, ${a.y}`;

  const b = parts(endIso);
  if (a.y === b.y && a.m === b.m) return `${MONTHS[a.m]} ${a.d}–${b.d}, ${a.y}`;
  if (a.y === b.y) return `${MONTHS[a.m]} ${a.d} – ${MONTHS[b.m]} ${b.d}, ${a.y}`;
  return `${MONTHS[a.m]} ${a.d}, ${a.y} – ${MONTHS[b.m]} ${b.d}, ${b.y}`;
}

/** The stacked date used on event rows: { month: "APR", day: "18" }. */
export function formatDateStack(iso: string): { month: string; day: string } {
  const a = parts(iso);
  return { month: MONTHS[a.m].slice(0, 3).toUpperCase(), day: String(a.d) };
}

export function formatYear(iso: string): string {
  return iso.slice(0, 4);
}
