import type { Metadata } from "next";
import { JotformEmbed } from "@/components/JotformEmbed";

export const metadata: Metadata = {
  title: "Partners",
  description: "Partner with Salt & Serendipity.",
};

export default function PartnersPage() {
  return <>
    <section className="page-hero partners-hero">
      <div className="shell">
        <p className="eyebrow">Partners</p>
        <h1>Build with the <span className="serif">club.</span></h1>
        <p>For brands, founders, venues, creators, and community builders who want to make something people actually show up for.</p>
      </div>
    </section>

    <section className="partners-form-section cute-partners-section">
      <div className="shell partners-form-shell">
        <div className="cute-partners-card">
          <div className="cute-partners-intro">
            <p className="eyebrow">Partner inquiry</p>
            <h2>Tell us the idea.</h2>
            <p>Events, pop-ups, brand moments, venue collabs, creator ideas, and anything that puts good people in the same place.</p>
          </div>
          <div className="cute-jotform-card">
            <JotformEmbed />
          </div>
        </div>
      </div>
    </section>
  </>;
}
