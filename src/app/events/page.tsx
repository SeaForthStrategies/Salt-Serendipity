import type { Metadata } from "next";
import Image from "next/image";
import { MotionReveal } from "@/components/MotionReveal";

export const metadata: Metadata = { title: "Events", description: "Salt & Serendipity club events and gatherings." };

const upcomingEvents = [
  {
    "date": "Sat, Aug 8",
    "title": "Summer Send-Off Social",
    "detail": "Beach hang, yard games, BYO drinks, and easy summer energy."
  },
  {
    "date": "Wed, Aug 12",
    "title": "Ship It Night",
    "detail": "A casual midweek work session for finally moving the idea forward."
  },
  {
    "date": "Sat, Aug 22",
    "title": "Good People Walk Club",
    "detail": "Coastal walk, coffee after, and low-pressure introductions."
  },
  {
    "date": "Wed, Aug 26",
    "title": "Coffee Shop Builders",
    "detail": "Bring your laptop, your current project, and one thing you need help with."
  },
  {
    "date": "Sat, Sep 5",
    "title": "The Serendipity Dinner",
    "detail": "A small table for founders, creators, and people building cool things."
  },
  {
    "date": "Wed, Sep 9",
    "title": "The Yes Night",
    "detail": "A simple social built around saying yes to one new conversation."
  },
  {
    "date": "Sat, Sep 19",
    "title": "Run, Coffee, Connect",
    "detail": "Walk or run option, then coffee and quick intros."
  },
  {
    "date": "Wed, Sep 23",
    "title": "Coastal Cowork Club",
    "detail": "A pretty place, focused work, and a little momentum."
  },
  {
    "date": "Sat, Oct 3",
    "title": "Bonfire & Big Ideas",
    "detail": "Beach bonfire, casual hangs, and everyone brings one idea."
  },
  {
    "date": "Wed, Oct 7",
    "title": "Ship It Night",
    "detail": "Midweek accountability for people who are tired of only talking about it."
  }
];

export default function EventsPage() {
  return <>
    <section className="events-hero">
      <div className="shell">
        <MotionReveal>
          <p className="eyebrow">Club calendar</p>
          <h1>Come for the plan.<br /><span className="serif">Stay for the story.</span></h1>
          <p>Simple coastal events for good people who like doing things in real life.</p>
        </MotionReveal>
      </div>
    </section>

    <section className="events-feature">
      <div className="shell events-feature-card">
        <MotionReveal className="events-flyer">
          <Image src="/images/events/summer-social-june-21.png" alt="Salt and Serendipity Summer Social event flyer" fill priority sizes="(min-width: 900px) 44vw, 100vw" className="object-contain" />
        </MotionReveal>
        <MotionReveal delay={.08} className="events-feature-copy">
          <p className="eyebrow">Next up · June 21</p>
          <h2>Summer Social</h2>
          <p>Moonlight Beach in Encinitas. Yard games, good people, BYO drinks, snacks, and beach attire encouraged.</p>
          <a className="button" href="https://partiful.com/e/HPcVEQLhwDnpFr5b4m4B" target="_blank" rel="noreferrer">RSVP on Partiful</a>
        </MotionReveal>
      </div>
    </section>

    <section className="events-schedule">
      <div className="shell">
        <MotionReveal className="events-section-head">
          <p className="eyebrow">Starting in August</p>
          <h2>Every other Saturday.<br /><span className="serif">Wednesdays in between.</span></h2>
        </MotionReveal>
        <div className="events-list">
          {upcomingEvents.map((event, index) => (
            <MotionReveal key={event.date + event.title} delay={Math.min(index * .03, .18)} className="events-row">
              <span>{event.date}</span>
              <div>
                <h3>{event.title}</h3>
                <p>{event.detail}</p>
              </div>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  </>;
}
