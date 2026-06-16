"use client";

import { useEffect } from "react";

export function ScrollMotion() {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const revealItems = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));

    if (reduceMotion) {
      revealItems.forEach((item) => item.classList.add("is-visible"));
      return;
    }

    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px 18% 0px", threshold: 0.03 },
    );

    revealItems.forEach((item) => revealObserver.observe(item));

    const parallaxItems = Array.from(document.querySelectorAll<HTMLElement>("[data-parallax]"));
    let ticking = false;

    const updateParallax = () => {
      const scrollMax = document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = scrollMax > 0 ? window.scrollY / scrollMax : 0;
      document.documentElement.style.setProperty("--scroll-progress", `${scrollProgress}`);
      parallaxItems.forEach((item) => {
        const rect = item.getBoundingClientRect();
        const progress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
        const offset = (progress - 0.5) * 24;
        item.style.setProperty("--parallax-y", `${offset}px`);
      });
      ticking = false;
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(updateParallax);
    };

    updateParallax();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      revealObserver.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return null;
}
