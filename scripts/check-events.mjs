import assert from 'node:assert/strict';
import ts from 'typescript';
import { readFileSync } from 'node:fs';
import { createRequire } from 'node:module';

// Compile the real selector dependency graph in memory, without a test dependency.
const require = createRequire(import.meta.url);
const cache = new Map();
function load(path) {
  if (cache.has(path)) return cache.get(path);
  const source = ts.transpileModule(readFileSync(new URL(path, import.meta.url), 'utf8'), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
  }).outputText;
  const compiled = {exports:{}};
  new Function('require','module','exports',source)(
    id => id === '../data/events' ? load('../src/data/events.ts') : id === '../data/site' ? load('../src/data/site.ts') : require(id), compiled, compiled.exports,
  );
  cache.set(path,compiled.exports);
  return compiled.exports;
}
const {events} = load('../src/data/events.ts');
const {googleCalendarUrl} = load('../src/lib/calendar.ts');
const calendarEvents = events.filter(event => event.calendar);
const expectedDates = ['20261009T000000Z/20261009T013000Z', '20261021T170000Z/20261021T200000Z', '20261027T010000Z/20261027T020000Z'];
calendarEvents.forEach((event, index) => {
  const url = new URL(googleCalendarUrl(event));
  assert.equal(url.origin, 'https://calendar.google.com');
  assert.equal(url.searchParams.get('dates'), expectedDates[index]);
  assert.equal(url.searchParams.get('stz'), 'America/Phoenix');
  assert.equal(url.searchParams.get('etz'), 'America/Phoenix');
  assert.equal(url.searchParams.get('text'), event.title);
  assert.ok(url.searchParams.get('details').includes(event.registrationUrl));
  assert.ok(url.searchParams.get('details').includes(`https://www.aeeasu.com/events/${event.slug}`));
  assert.ok(url.searchParams.get('location').includes(event.location));
});
const calendarExample = calendarEvents[0];
assert.equal(googleCalendarUrl({...calendarExample, calendar:undefined}), undefined);
assert.equal(googleCalendarUrl({...calendarExample, status:'draft'}), undefined);
for (const calendar of [{start:'invalid',end:'invalid'}, {start:'2026-10-08T17:00:00',end:'2026-10-08T18:00:00'}, {start:calendarExample.calendar.end,end:calendarExample.calendar.start}]) {
  assert.equal(googleCalendarUrl({...calendarExample, calendar}), undefined);
}
assert.equal(new URL(googleCalendarUrl({...calendarExample, title:'A&B + PV / 储能'})).searchParams.get('text'), 'A&B + PV / 储能');
const {isPastEvent,upcomingEvents,pastEvents,featuredEvent} = load('../src/lib/events.ts');
const single = events.find(e=>e.slug==='aee-ieee-hkn-town-hall-2026');
const multi = events.find(e=>e.endDate);
assert.equal(isPastEvent(single,new Date('2026-10-09T06:59:59.999Z')),false);
assert.equal(isPastEvent(single,new Date('2026-10-09T07:00:00Z')),true);
assert.equal(isPastEvent(multi,new Date('2026-04-20T06:59:59Z')),false);
assert.equal(isPastEvent(multi,new Date('2026-04-20T07:00:00Z')),true);
assert.equal(featuredEvent(new Date('2026-01-01T12:00:00Z')),undefined);
const now = new Date('2026-10-05T19:00:00Z');
assert.equal(upcomingEvents(now)[0].slug,single.slug);
assert.ok(isPastEvent(featuredEvent(now),now));
const draft = {...single,slug:'test-draft',status:'draft'};
events.push(draft);
assert.ok(!upcomingEvents(now).includes(draft));
events.pop();
assert.equal(upcomingEvents(now).length+pastEvents(now).length,events.filter(e=>e.status==='published').length);
assert.equal(new Set(events.map(e=>e.slug)).size,events.length);
for (const event of events) {
  assert.match(event.date,/^\d{4}-\d{2}-\d{2}$/);
  assert.ok(!event.endDate || event.endDate >= event.date);
  assert.ok(!event.image || event.imageAlt);
}
console.log('Event checks passed: Phoenix midnight, multi-day cutoff, drafts, ordering, retrospective and data integrity.');
