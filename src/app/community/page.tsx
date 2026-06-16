import type { Metadata } from "next";
import Image from "next/image";
import { CommunityForm } from "@/components/CommunityForm";
import { MotionReveal } from "@/components/MotionReveal";

export const metadata: Metadata = { title: "The Club", description: "Join the Salt & Serendipity club." };

export default function CommunityPage() {
  return <>
    <section className="page-hero"><div className="shell"><p className="eyebrow">The Club</p><h1>Join the club.<br /><span className="serif">See what happens next.</span></h1><p>Interesting people, thoughtful plans, and more chances to put yourself in the path of possibility.</p></div></section>
    <section className="community-panel">
      <MotionReveal className="community-copy"><p className="eyebrow">Get on the list</p><h2>Show up. Stay open. <span className="serif">Meet what comes next.</span></h2><p>Get first access to new drops, small dinners, coastal plans, spontaneous additions, and the occasional very useful introduction.</p><CommunityForm /></MotionReveal>
      <div className="community-image"><Image src="/images/del-mar-dinner.jpg" alt="Friends gathering over dinner" fill sizes="(min-width:768px) 50vw,100vw" className="object-cover" /></div>
    </section>
    <section className="statement"><div className="shell"><MotionReveal><p className="eyebrow">The community code</p><h2>Show up. Stay curious.<br /><span className="serif">Bring someone good.</span></h2></MotionReveal></div></section>
  </>;
}
