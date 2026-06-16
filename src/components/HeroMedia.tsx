"use client";

import Image from "next/image";
import { useState } from "react";

export function HeroMedia() {
  const [videoReady, setVideoReady] = useState(false);

  return <div className="hero-media">
    <Image
      src="/images/california-club-hero.jpg"
      alt="Friends on the California coast at golden hour"
      fill
      priority
      sizes="100vw"
      className="object-cover object-center"
    />
    <video
      aria-hidden="true"
      autoPlay
      loop
      muted
      playsInline
      preload="metadata"
      onCanPlay={() => setVideoReady(true)}
      className={videoReady ? "is-ready" : ""}
    >
      <source src="/videos/salt-serendipity-hero.mp4" type="video/mp4" />
    </video>
  </div>;
}
