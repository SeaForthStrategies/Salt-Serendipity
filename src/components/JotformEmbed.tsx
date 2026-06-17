"use client";

import { useEffect, useRef } from "react";

export function JotformEmbed() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    mount.innerHTML = "";
    const script = document.createElement("script");
    script.src = "https://www.jotform.com/jsform/261671452906056";
    script.async = true;
    mount.appendChild(script);

    return () => {
      mount.innerHTML = "";
    };
  }, []);

  return <div ref={mountRef} className="jotform-embed" aria-label="Salt and Serendipity partner inquiry form" />;
}
