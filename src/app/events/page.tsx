import type { Metadata } from "next";
import Image from "next/image";
import Script from "next/script";
import { MotionReveal } from "@/components/MotionReveal";

export const metadata: Metadata = {
  title: "Beach & Brainstorm | Salt & Serendipity Events",
  description: "Beach & Brainstorm is an approved-RSVP Salt & Serendipity gathering in Encinitas for ideas, connections, and possibility.",
};

export default function EventsPage() {
  return <>
    <Script id="luma-checkout" src="https://embed.lu.ma/checkout-button.js" strategy="afterInteractive" />

    <section className="event-drop-hero">
      <div className="event-drop-shell">
        <MotionReveal className="event-drop-art-wrap">
          <Image src="/images/beach-brainstorm.png" alt="Beach and Brainstorm Salt & Serendipity event artwork" width={1254} height={1254} priority />
        </MotionReveal>

        <MotionReveal className="event-drop-copy" delay={0.08}>
          <p className="eyebrow">Salt &amp; Serendipity presents</p>
          <h1>Beach &amp;<br /><span>Brainstorm</span></h1>
          <p className="event-drop-lede">A curated beach hang for people building things, chasing ideas, and wanting to meet the kind of people who make life more interesting.</p>

          <div className="event-drop-details" aria-label="Event details">
            <span>Oct 3</span>
            <span>2-5 PM</span>
            <span>Encinitas</span>
            <span>Approved RSVP required</span>
          </div>

          <a
            href="https://luma.com/event/evt-OpbQUFayugU1hjL"
            className="luma-checkout--button event-drop-button"
            data-luma-action="checkout"
            data-luma-event-id="evt-OpbQUFayugU1hjL"
          >
            Register for Event
          </a>
        </MotionReveal>
      </div>
    </section>

    <section className="event-drop-note">
      <div className="shell">
        <MotionReveal className="event-drop-note-grid">
          <div>
            <p className="eyebrow">The vibe</p>
            <h2>Ideas. Connections. Possibilities.</h2>
          </div>
          <p>Bring the thing you are thinking about, building, launching, changing, or trying to figure out. We&apos;ll keep it easy, social, and intentional so the right conversations have room to happen.</p>
        </MotionReveal>
      </div>
    </section>
  </>;
}
