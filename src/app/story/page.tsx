import type { Metadata } from "next";
import Image from "next/image";
import { MotionReveal } from "@/components/MotionReveal";

export const metadata: Metadata = { title: "Our Story", description: "Salt is the effort. Serendipity is what happens because of it." };

export default function StoryPage() {
  return <>
    <section className="page-hero"><div className="shell"><p className="eyebrow">Our story</p><h1>Salt is the effort.<br /><span className="serif">Serendipity is what happens next.</span></h1><p>Built for people willing to put in the work and stay open to what comes next.</p></div></section>
    <div className="page-image"><Image src="/images/california-club-hero.jpg" alt="Friends along the Southern California coast" fill priority sizes="100vw" className="object-cover" /></div>
    <article className="story-copy">
      <MotionReveal><h2>Salt is <span className="serif">the work.</span></h2><p>The early mornings. The long runs. The risks. The missed shots. The conversations that went nowhere. The lessons learned the hard way. The discipline to keep showing up when nobody is watching.</p></MotionReveal>
      <MotionReveal><h2>Serendipity is what <span className="serif">happens next.</span></h2><p>Most people call it luck. But the people who seem to find it most often are usually already in motion. They showed up. Took the meeting. Started the project. Booked the flight. Joined the club. Sent the message.</p></MotionReveal>
      <MotionReveal><h2>Motion is <span className="serif">the bridge.</span></h2><p>Serendipity cannot be planned. But you can put yourself where it is more likely to find you. Build. Create. Explore. Meet new people. Say yes before you are completely ready.</p></MotionReveal>
      <MotionReveal><h2>Ambitious without being flashy.<br /><span className="serif">Optimistic without being naive.</span></h2><p>Not hustle culture. Not self-help culture. Not manifestation culture. Just people willing to show up, take chances, start new things, and trust that opportunity tends to find those who are already moving.</p></MotionReveal>
    </article>
  </>;
}
