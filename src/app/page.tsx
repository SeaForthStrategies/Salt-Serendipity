import Image from "next/image";
import Link from "next/link";
import { CommunityForm } from "@/components/CommunityForm";
import { HeroMedia } from "@/components/HeroMedia";
import { MotionReveal } from "@/components/MotionReveal";

export default function Home() {
  return <>
    <section className="hero">
      <HeroMedia />
      <div className="hero-content">
        <MotionReveal><p className="eyebrow">Salt &amp; Serendipity · California</p></MotionReveal>
        <MotionReveal delay={.08}><h1>Built for action.<br /><span className="serif">Open to serendipity.</span></h1></MotionReveal>
        <MotionReveal delay={.16}><p>Put in the work. Stay open to what comes next.</p></MotionReveal>
        <MotionReveal delay={.22} className="hero-actions"><Link className="button button-light" href="/community">Join the club</Link><Link className="button button-ghost" href="/story">The story</Link></MotionReveal>
      </div>
    </section>

    <section className="duality">
      <MotionReveal className="duality-card duality-salt">
        <p className="eyebrow">01 · Salt</p>
        <h2>Salt is <span className="serif">the work.</span></h2>
        <p>The early mornings. The long runs. The risks. The missed shots. The lessons learned the hard way. The discipline to keep showing up when nobody is watching.</p>
        <div className="duality-list"><span>Effort</span><span>Discipline</span><span>Consistency</span><span>Courage</span></div>
      </MotionReveal>
      <MotionReveal delay={.08} className="duality-card duality-serendipity">
        <p className="eyebrow">02 · Serendipity</p>
        <h2>Serendipity is what <span className="serif">happens next.</span></h2>
        <p>The unexpected connection. The new experience. The breakthrough. The opportunity that appeared because you were already there.</p>
        <div className="duality-list"><span>Opportunity</span><span>Connection</span><span>Possibility</span><span>Surprise</span></div>
      </MotionReveal>
    </section>

    <section className="motion-bridge">
      <div className="shell">
        <MotionReveal><p className="eyebrow">03 · Motion is the bridge</p><h2>You cannot plan serendipity.<br /><span className="serif">You can put yourself in its path.</span></h2></MotionReveal>
        <MotionReveal delay={.1} className="motion-actions"><span>Took the meeting.</span><span>Started the project.</span><span>Booked the flight.</span><span>Joined the club.</span><span>Went to the event.</span><span>Said yes.</span></MotionReveal>
      </div>
    </section>

    <section className="editorial-split">
      <div className="editorial-image"><Image src="/images/california-club-hero.jpg" alt="Friends spending time along the Southern California coast" fill sizes="(min-width:768px) 50vw, 100vw" className="object-cover object-right" /></div>
      <MotionReveal className="editorial-copy"><p className="eyebrow">The path of possibility</p><h2>Opportunity tends to find people who are <span className="serif">already moving.</span></h2><p>The best opportunities rarely arrive announced. They appear while you are building. While you are exploring. While you are becoming.</p><Link href="/story" className="button button-light mt-8 self-start">Read our story</Link></MotionReveal>
    </section>

    <section className="manifesto">
      <div className="shell manifesto-grid">
        <MotionReveal><p className="eyebrow">Salt &amp; Serendipity feels like</p></MotionReveal>
        <MotionReveal delay={.05}><p>Booking the flight before you know exactly how the trip will work out.</p></MotionReveal>
        <MotionReveal delay={.1}><p>Waking up before sunrise to run by the ocean.</p></MotionReveal>
        <MotionReveal delay={.15}><p>Grabbing coffee with someone interesting because you never know where the conversation might lead.</p></MotionReveal>
        <MotionReveal delay={.2}><p>Saying yes before you are completely ready.</p></MotionReveal>
      </div>
    </section>

    <section className="section-space tide-section">
      <div className="shell">
        <MotionReveal className="section-head"><div><p className="eyebrow">Club calendar</p><h2 className="section-title">Plans worth<br /><span className="serif">showing up for.</span></h2></div><Link className="button button-ghost" href="/events">View events</Link></MotionReveal>
        <div className="event-list">
          {["Coastal walks before the inbox wakes up.", "Small dinners with people building interesting things.", "Focused sessions for starting the thing.", "Low-pressure sunset plans with the club."].map((item, index) => <MotionReveal key={item} delay={index * .05} className="event-line"><span>0{index + 1}</span><p>{item}</p></MotionReveal>)}
        </div>
      </div>
    </section>

    <section className="community-panel">
      <MotionReveal className="community-copy"><p className="eyebrow">The Club</p><h2>Put yourself in the path of <span className="serif">possibility.</span></h2><p>A California club for founders, creatives, runners, explorers, and people who believe the best stories begin when you decide to participate.</p><CommunityForm /></MotionReveal>
      <div className="community-image"><Image src="/images/del-mar-dinner.jpg" alt="California community dinner" fill sizes="(min-width:768px) 50vw,100vw" className="object-cover" /></div>
    </section>

    <section className="closing-belief"><div className="shell"><MotionReveal><p>Salt is the effort.</p><p>Serendipity is what happens because of it.</p><h2>Luck favors <span className="serif">motion.</span></h2></MotionReveal></div></section>
  </>;
}
