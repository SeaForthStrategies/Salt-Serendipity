import Link from "next/link";
import { Logo } from "./Logo";

const instagramUrl = "https://www.instagram.com/abbylehrrr";

export function Footer() {
  return <footer className="site-footer">
    <div className="footer-main">
      <div><Logo light /><p className="footer-quote">Do the work.<br />Stay in motion.<br /><em>Be open to what happens next.</em></p></div>
      <div className="footer-nav"><p>Explore</p><Link href="/community">The Club</Link><Link href="/events">Events</Link><Link href="/story">Our Story</Link><Link href="/contact">Contact</Link></div>
      <div className="footer-nav"><p>Social</p><a href={instagramUrl} target="_blank" rel="noreferrer">Instagram ↗</a><a href="#">TikTok ↗</a><a href="#">Pinterest ↗</a></div>
    </div>
    <div className="footer-bottom"><a href={instagramUrl} target="_blank" rel="noreferrer">Founded by Abby Lehr ↗</a><span>Oceanside, California</span><span>© 2026 Salt &amp; Serendipity</span></div>
  </footer>;
}
