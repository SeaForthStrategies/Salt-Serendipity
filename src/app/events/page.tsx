import type { Metadata } from "next";
import Link from "next/link";
import { MotionReveal } from "@/components/MotionReveal";

export const metadata: Metadata = { title: "Events", description: "Salt & Serendipity club events and gatherings." };
export const dynamic = "force-dynamic";

const events = [
  {
    date: "2026-10-03",
    label: "Sat, Oct 3",
    title: "Beach & Brainstorm",
    tag: "Beach circles · 30-40 people",
    detail: "A sunset beach meetup for founders, business owners, creators, marketers, developers, freelancers, and people with ideas. Request to RSVP by sharing what you are building, what you are good at, and what you need help with.",
    promise: "Leave with new ideas, feedback, potential collaborators, and at least one useful introduction.",
    serendipity: "When you arrive, you get a quiet 'you should find...' prompt for 1-2 people we think you should meet.",
    spots: "Request to RSVP",
  },
  {
    date: "2026-10-15",
    label: "Thu, Oct 15",
    title: "The Happy Hour",
    tag: "Curated room · 40-60 people",
    detail: "Not a networking happy hour. A curated San Diego room of interesting people across tech, fitness, hospitality, fashion, media, startups, and creative work.",
    promise: "Expand your social and professional circle without walking into a room full of people handing out business cards.",
    serendipity: "Everyone receives three initials at arrival. Somewhere in the room are three people specifically selected for them to meet.",
    spots: "Request to RSVP",
  },
  {
    date: "2026-11-01",
    label: "Sun, Nov 1",
    title: "Run Into Someone",
    tag: "Run/walk club · 40-60 people",
    detail: "A Salt & Serendipity run club designed around meeting people, not pace. Choose the 3-mile run or 1.5-mile walk, rotate groups, then finish together at coffee or brunch.",
    promise: "Movement, community, and meeting new people without the pressure of a formal social event.",
    serendipity: "Your starting group is intentionally selected around something you all have in common. At coffee, we reveal it.",
    spots: "Request to RSVP",
  },
  {
    date: "2026-11-14",
    label: "Sat, Nov 14",
    title: "Build Something Together",
    tag: "Team challenge · 25-40 people",
    detail: "Guests request to attend by sharing their skills: design, marketing, engineering, sales, photography, content, finance, operations, and more. Then we form teams and give each group 90 minutes to create a business people would actually use.",
    promise: "Meet people by actually working with them instead of making small talk. You immediately discover who you click with creatively.",
    serendipity: "Nobody knows their team ahead of time. The room is mixed intentionally, then the magic happens live.",
    spots: "Request to RSVP",
  },
  {
    date: "2026-11-25",
    label: "Wed, Nov 25",
    title: "The Dinner Table",
    tag: "One table · 20-30 people",
    detail: "An intimate Salt & Serendipity dinner with one table, curated guests, and no sitting only with whoever you came with. Each course introduces a different real conversation question.",
    promise: "Create actual friendships instead of collecting contacts.",
    serendipity: "Seating changes once during the evening based on who we think should meet.",
    spots: "Request to RSVP",
  },
  {
    date: "2026-12-12",
    label: "Sat, Dec 12",
    title: "Give & Get",
    tag: "Hidden matches · 35-50 people",
    detail: "Everyone submits two things before the event: something they can give and something they need. We curate the room around where people's strengths and needs overlap.",
    promise: "Everyone should leave having either helped someone or gotten meaningful help themselves.",
    serendipity: "Nobody gets a directory. You discover the hidden matches throughout the room.",
    spots: "Request to RSVP",
  },
  {
    date: "2026-12-27",
    label: "Sun, Dec 27",
    title: "The Reset Club",
    tag: "Year-end reset · 25-40 people",
    detail: "Coffee, music, notebooks, planning, and vision boards, structured around accountability and connection instead of just pretty Pinterest boards.",
    promise: "Leave with actual direction for 2027 and people who can be part of it.",
    serendipity: "Everyone gets a 2027 connection chosen for them based on goals, projects, and the life they are building next.",
    spots: "Request to RSVP",
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
          <p>Curated gatherings where the right people end up in the same place, and what happens next is serendipity.</p>
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
            <p className="events-serendipity">{featuredEvent.serendipity}</p>
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
          <h2>Request to RSVP.<br /><span className="serif">We curate the room.</span></h2>
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
                <p className="events-serendipity">{event.serendipity}</p>
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
