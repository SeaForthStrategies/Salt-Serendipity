"use client";

import Link from "next/link";
import { useState } from "react";
import { Logo } from "./Logo";

const links = [["Home", "/"], ["Events", "/events"], ["Partners", "/partners"]];

export function Header() {
  const [open, setOpen] = useState(false);

  return <>
    <div className="announcement">Built for action · Open to serendipity</div>
    <header className="site-header">
      <button aria-label="Toggle navigation" aria-expanded={open} onClick={() => setOpen(!open)} className="header-menu">
        <span className="menu-icon"><i /><i /></span><span className="menu-label">Menu</span>
      </button>
      <Logo />
      <div className="header-actions"><Link href="/">Home</Link><Link href="/events">Events</Link><Link href="/partners">Partners</Link></div>
      {open && <nav className="menu-drawer">
        <p>Salt &amp; Serendipity</p>
        {links.map(([label, href], index) => <Link onClick={() => setOpen(false)} key={href} href={href}><span>0{index + 1}</span>{label}<b>↗</b></Link>)}
      </nav>}
    </header>
  </>;
}
