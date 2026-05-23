"use client";
import { useEffect, useRef } from "react";

export default function Particles() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const c = ref.current;
    if (!c) return;
    for (let i = 0; i < 15; i++) {
      const p = document.createElement("div");
      const size = 1 + Math.random() * 1.5;
      p.style.cssText = `
        position:absolute;background:var(--color-accent);border-radius:50%;opacity:0;
        animation:pFloat linear infinite;
        left:${Math.random() * 100}%;width:${size}px;height:${size}px;
        animation-duration:${10 + Math.random() * 15}s;
        animation-delay:${Math.random() * 8}s;
      `;
      c.appendChild(p);
    }
  }, []);

  return <div ref={ref} className="fixed inset-0 pointer-events-none z-0" />;
}
