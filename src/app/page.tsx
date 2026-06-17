import Image from "next/image";
import Link from "next/link";
import { CommunityForm } from "@/components/CommunityForm";
import { HeroMedia } from "@/components/HeroMedia";
import { MotionReveal } from "@/components/MotionReveal";

export default function Home() {
  return <>
    <section className="hero cute-hero">
      <HeroMedia />
      <div className="hero-content">
        <MotionReveal><p className="eyebrow">Salt &amp; Serendipity · California</p></MotionReveal>
        <MotionReveal delay={.08}><h1>Show up.<br /><span className="serif">See what happens.</span></h1></MotionReveal>
        <MotionReveal delay={.16}><p>A coastal club for low-pressure plans, good people, and opportunities you only find by being there.</p></MotionReveal>
        <MotionReveal delay={.22} className="hero-actions"><Link className="button button-light" href="/events">Events</Link><Link className="button button-ghost" href="/partners">Partners</Link></MotionReveal>
      </div>
    </section>

    <section className="cute-belief">
      <div className="shell cute-belief-grid">
        <MotionReveal><p className="eyebrow">The club</p><h2>Action first.<br /><span className="serif">Serendipity after.</span></h2></MotionReveal>
        <MotionReveal delay={.08}><p>Salt is the effort. Serendipity is the story that starts because you showed up. We keep it simple: good places, good people, real life.</p></MotionReveal>
      </div>
    </section>

    <section className="cute-feature">
      <div className="shell cute-feature-grid">
        <MotionReveal className="cute-feature-image"><Image src="/images/events/summer-social-june-21.png" alt="Salt and Serendipity Summer Social flyer" fill sizes="(min-width: 800px) 46vw, 100vw" className="object-contain" /></MotionReveal>
        <MotionReveal delay={.08} className="cute-feature-copy"><p className="eyebrow">Next event</p><h2>Summer Social</h2><p>Sunday, June 21 · Moonlight Beach · Encinitas. Yard games, good people, BYO drinks, and beach attire encouraged.</p><Link className="button" href="/events">See details</Link></MotionReveal>
      </div>
    </section>

    <section className="cute-list">
      <div className="shell cute-list-card">
        <MotionReveal><p className="eyebrow">Join the list</p><h2>Get the next invite.</h2><p>No spam. Just events, club updates, and the occasional little nudge to go do something fun.</p></MotionReveal>
        <MotionReveal delay={.08}><CommunityForm /></MotionReveal>
      </div>
    </section>

    <section className="cute-cta">
      <div className="shell"><MotionReveal><p className="eyebrow">Partners</p><h2>Have a cute idea<br /><span className="serif">for the club?</span></h2><p>For venues, brands, creators, founders, and people who know a good thing when they see one.</p><Link className="button button-ghost" href="/partners">Partner inquiry</Link></MotionReveal></div>
    </section>
  </>;
}
