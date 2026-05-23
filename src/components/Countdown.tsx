"use client";
import { useEffect, useState } from "react";

const TARGET = new Date("2026-05-24T20:00:00+03:00").getTime();

function calc() {
  const d = Math.max(0, TARGET - Date.now());
  return {
    d: Math.floor(d / 864e5),
    h: Math.floor((d % 864e5) / 36e5),
    m: Math.floor((d % 36e5) / 6e4),
    s: Math.floor((d % 6e4) / 1e3),
  };
}

function Block({ n, label }: { n: number; label: string }) {
  return (
    <div className="bg-white/[.03] border border-white/[.04] backdrop-blur-[6px] px-5 py-6 min-w-[90px] text-center">
      <div className="leading-none text-[var(--color-accent)]"
           style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(2.8rem, 7vw, 4.5rem)" }}>
        {String(n).padStart(2, "0")}
      </div>
      <div className="text-[.65rem] tracking-[3px] uppercase text-[var(--color-muted)] mt-1">{label}</div>
    </div>
  );
}

export default function Countdown() {
  const [t, setT] = useState(calc);
  useEffect(() => { const id = setInterval(() => setT(calc), 1000); return () => clearInterval(id); }, []);

  return (
    <section className="py-20 px-8 text-center">
      <p className="text-[.75rem] tracking-[8px] uppercase text-[var(--color-muted)] mb-10"
         style={{ fontFamily: "'Oswald', sans-serif" }}>
        До начала
      </p>
      <div className="flex justify-center gap-[clamp(.8rem,3vw,2.5rem)] flex-wrap">
        <Block n={t.d} label="дней" />
        <Block n={t.h} label="часов" />
        <Block n={t.m} label="минут" />
        <Block n={t.s} label="секунд" />
      </div>
    </section>
  );
}
