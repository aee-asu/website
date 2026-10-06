# Google Calendar links

Upcoming event briefs and the homepage next-event block offer a secondary "Add to Google Calendar" link. RSVP remains the primary action. No dependencies, Google API credentials, OAuth access or calendar writes are required by the website.

Implementation follows Google's documented prefilled-event links: https://developers.google.com/workspace/calendar/api/concepts/inviting-attendees-to-events#provide_a_link_for_users_to_add_the_event (checked October 6, 2026).

Maintain confirmed `calendar.start` and `calendar.end` ISO timestamps with explicit offsets in `src/data/events.ts`, alongside the display date/time. Arizona events use `-07:00`. Omit `calendar` when either time is unknown; never guess duration. `src/lib/calendar.ts` converts to UTC timestamps and specifies America/Phoenix for both event time zones. Draft, missing, invalid, offset-free or reversed ranges do not create links. Tests cover the three October events including evening events whose UTC date is the following day, invalid inputs and URL encoding.

The description includes the RSVP URL, a link back to current site details, and the limitation that this is an independent copy. Calendar saving does not register attendance and copies do not automatically synchronize with website changes. Users review/save within Google Calendar; signed-out users sign in there. No invitations or emails are sent by the website. A shared subscribable chapter calendar is a separate future feature.
