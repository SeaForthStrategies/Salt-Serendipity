import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MotionReveal } from "@/components/MotionReveal";

export const metadata: Metadata = { title: "Events", description: "Salt & Serendipity club events and gatherings." };

const clubFormats = [
  { title: "Walk Before Work", detail: "A coastal walk, strong coffee, and a few useful conversations before the inbox wakes up.", meta: "Coastal mornings", image: "/images/california-club-hero.jpg" },
  { title: "Founder Dinners", detail: "Small tables, smart people, and honest conversations about what everyone is building next.", meta: "Del Mar evenings", image: "/images/del-mar-dinner.jpg" },
  { title: "Ship It Sessions", detail: "Focused working sessions for moving the idea from the notes app into real life.", meta: "Monthly work club", image: "/images/del-mar-dinner.jpg" },
  { title: "Sunset Socials", detail: "Low-pressure drinks with founders, creatives, runners, and people who make things happen.", meta: "Golden hour", image: "/images/california-club-hero.jpg" },
];

export default function EventsPage() {
  return <>
    <section className="page-hero"><div className="shell"><p className="eyebrow">Club calendar</p><h1>Plans worth<br /><span className="serif">showing up for.</span></h1><p>Small, intentional gatherings for people already in motion. Come for the plan. Stay open to what happens next.</p></div></section>

    <section className="featured-event"><div className="shell featured-event-grid">
      <MotionReveal className="featured-event-image"><Image src="/images/events/summer-social-june-21.png" alt="Salt and Serendipity Summer Social event flyer" fill priority sizes="(min-width: 900px) 60vw, 100vw" className="object-contain" /></MotionReveal>
      <MotionReveal delay={.08} className="featured-event-copy">
        <p className="eyebrow">Next up · June 21, 2026</p>
        <h2>First Day of <span className="serif">Summer Social.</span></h2>
        <p>Good people, sunshine, music, yard games, and a little serendipity at Moonlight Beach.</p>
        <dl><div><dt>When</dt><dd>Sunday, June 21 · 1:00 PM until whenever</dd></div><div><dt>Where</dt><dd>Moonlight Beach · Encinitas, California</dd></div><div><dt>Bring</dt><dd>Your own drinks, food, snacks, or something to share</dd></div><div><dt>Wear</dt><dd>Beach attire encouraged</dd></div></dl>
        <a className="button button-light" href="https://partiful.com/e/HPcVEQLhwDnpFr5b4m4B" target="_blank" rel="noreferrer">RSVP on Partiful ↗</a>
      </MotionReveal>
    </div></section>

    <section className="section-space"><div className="shell">
      <MotionReveal className="section-head"><div><p className="eyebrow">Club formats</p><h2 className="section-title">More ways to<br /><span className="serif">find your people.</span></h2></div><p>Recurring concepts we are building for the club. Join the list to hear when the next one lands.</p></MotionReveal>
      <div className="club-format-grid">
        {clubFormats.map((event, index) => <MotionReveal key={event.title} delay={index * .06} className="club-format-card">
          <div className="club-format-image"><Image src={event.image} alt="" fill sizes="(min-width: 900px) 25vw, 50vw" className="object-cover" /></div>
          <div className="club-format-copy"><span>0{index + 1} · Recurring format</span><h3>{event.title}</h3><p>{event.detail}</p><b>{event.meta}</b></div>
        </MotionReveal>)}
      </div>
    </div></section>

    <section className="motion-bridge"><div className="shell"><MotionReveal><p className="eyebrow">The club rule</p><h2>Say yes before you know<br /><span className="serif">exactly how it ends.</span></h2><Link className="button button-ghost mt-8" href="/community">Join the club</Link></MotionReveal></div></section>
  </>;
}
