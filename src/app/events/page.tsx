import type { Metadata } from "next";
import Link from "next/link";
import { MotionReveal } from "@/components/MotionReveal";

export const metadata: Metadata = { title: "Events", description: "Salt & Serendipity club events and gatherings." };
export const dynamic = "force-dynamic";

const events = [
  {
    date: "2026-08-22",
    label: "Sat, Aug 22",
    title: "Good People Walk Club",
    tag: "Free · Easy first event",
    detail: "A coastal walk, coffee after, and simple intros for ambitious people who want more real-life plans on the calendar.",
    promise: "Leave with one new friend, one useful connection, and a better Saturday morning.",
    spots: "Open invite",
  },
  {
    date: "2026-08-26",
    label: "Wed, Aug 26",
    title: "Ship It Night",
    tag: "Work club · 12 seats",
    detail: "Bring the idea you keep talking about and spend 90 minutes moving it forward beside other people who are building too.",
    promise: "Walk out with one thing shipped, posted, emailed, booked, or launched.",
    spots: "Limited seats",
  },
  {
    date: "2026-09-05",
    label: "Sat, Sep 5",
    title: "The Serendipity Dinner",
    tag: "Curated dinner · 10 seats",
    detail: "A small coastal dinner for founders, creatives, operators, and people in their build-something era.",
    promise: "No stiff networking. Just smart people, good questions, and the kind of room where ideas get better.",
    spots: "Application-style invite",
  },
  {
    date: "2026-09-09",
    label: "Wed, Sep 9",
    title: "Coffee Shop Builders",
    tag: "Cowork · 16 seats",
    detail: "A focused midweek session at a coastal coffee shop for getting out of your apartment and back into motion.",
    promise: "Bring one goal. Leave with progress, accountability, and a few people to cheer it on.",
    spots: "Limited seats",
  },
  {
    date: "2026-09-19",
    label: "Sat, Sep 19",
    title: "Miles & Matcha",
    tag: "Walk/run · Free",
    detail: "Walk or easy run, then matcha/coffee after. Built for people who want health, ambition, and social life to stop living in separate tabs.",
    promise: "The easiest yes on the calendar: move your body, meet good people, get on with your day.",
    spots: "Open invite",
  },
  {
    date: "2026-09-23",
    label: "Wed, Sep 23",
    title: "The Ask Night",
    tag: "Connection night · 20 seats",
    detail: "Everyone brings one ask and one offer. Hiring, intros, feedback, cofounder energy, event ideas, creative help, whatever is real.",
    promise: "A practical room for making useful serendipity happen faster.",
    spots: "Limited seats",
  },
  {
    date: "2026-10-03",
    label: "Sat, Oct 3",
    title: "Bonfire & Big Ideas",
    tag: "Beach social · Open invite",
    detail: "A low-pressure coastal hang with one tiny rule: bring a friend and one thing you are excited to build next.",
    promise: "Good people, warm fire, easy conversations, and the kind of night that turns into a group chat.",
    spots: "Open invite",
  },
  {
    date: "2026-10-07",
    label: "Wed, Oct 7",
    title: "No More Notes App",
    tag: "Action night · 12 seats",
    detail: "For the ideas sitting in your Notes app. We pick one, simplify it, and take the first public step before the night ends.",
    promise: "Because momentum converts better than overthinking.",
    spots: "Limited seats",
  },
];

function getTodayInPacific() {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "America/Los_Angeles",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(new Date());

  const value = (type: string) => parts.find((part) => part.type === type)?.value;
  return [value("year"), value("month"), value("day")].join("-");
}

export default function EventsPage() {
  const today = getTodayInPacific();
  const upcomingEvents = events.filter((event) => event.date >= today);
  const featuredEvent = upcomingEvents[0];
  const remainingEvents = upcomingEvents.slice(1);

  return <>
    <section className="events-hero">
      <div className="shell">
        <MotionReveal>
          <p className="eyebrow">Salt &amp; Serendipity events</p>
          <h1>Make plans that<br /><span className="serif">move your life.</span></h1>
          <p>Coastal walks, work nights, dinners, and tiny rooms where ambitious people become real friends.</p>
          <div className="events-hero-actions">
            <Link className="button" href="/#join-list">Get invited</Link>
            <Link className="button button-ghost" href="/partners">Host with us</Link>
          </div>
        </MotionReveal>
      </div>
    </section>

    {featuredEvent ? <section className="events-feature-convert">
      <div className="shell">
        <MotionReveal className="events-feature-convert-card">
          <div>
            <p className="eyebrow">Next up · {featuredEvent.label}</p>
            <h2>{featuredEvent.title}</h2>
            <p>{featuredEvent.detail}</p>
          </div>
          <div className="events-feature-side">
            <span>{featuredEvent.tag}</span>
            <p>{featuredEvent.promise}</p>
            <b className="events-rsvp">RSVP coming soon</b>
            <Link className="events-list-link" href="/#join-list">Join the list for first access</Link>
          </div>
        </MotionReveal>
      </div>
    </section> : null}

    <section className="events-schedule events-schedule-first">
      <div className="shell">
        <MotionReveal className="events-section-head">
          <p className="eyebrow">Upcoming</p>
          <h2>Every other Saturday.<br /><span className="serif">Wednesdays in between.</span></h2>
        </MotionReveal>
        {remainingEvents.length > 0 ? <div className="events-list">
          {remainingEvents.map((event, index) => (
            <MotionReveal key={event.date + event.title} delay={Math.min(index * .03, .18)} className="events-row events-row-convert">
              <span>{event.label}</span>
              <div>
                <p className="events-tag">{event.tag}</p>
                <h3>{event.title}</h3>
                <p>{event.detail}</p>
                <p className="events-promise">{event.promise}</p>
              </div>
              <div className="events-row-action">
                <b>{event.spots}</b>
                <span>RSVP coming soon</span>
                <Link href="/#join-list">Get first access</Link>
              </div>
            </MotionReveal>
          ))}
        </div> : <MotionReveal className="events-empty"><p className="eyebrow">More soon</p><h3>New club dates are coming.</h3><p>Join the list on the homepage and we&apos;ll send the next plans when they land.</p><Link className="button" href="/#join-list">Join the list</Link></MotionReveal>}
      </div>
    </section>
  </>;
}
