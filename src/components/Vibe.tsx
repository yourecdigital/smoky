"use client";
import ScrollReveal from "./ScrollReveal";

const cards = [
  { title: "Дворы Рамбова", label: "РАМБОВ", cls: "row-span-2", bg: "from-[#1a1410] to-[#0d0806]", overlay: "rgba(232,73,29,.6)" },
  { title: "Спорт классик", label: "CLASSIC", cls: "", bg: "from-[#12100e] to-[#0a0808]", overlay: "rgba(212,168,70,.5)" },
  { title: "Живой звук", label: "LIVE", cls: "", bg: "from-[#0e0d10] to-[#08070a]", overlay: "rgba(232,73,29,.5)" },
  { title: "Кэжуал кру", label: "CASUAL", cls: "", bg: "from-[#110f0d] to-[#0a0906]", overlay: "rgba(232,73,29,.4)" },
  { title: "Олдскул вайб", label: "OLD SCHOOL", cls: "", bg: "from-[#0f0d0a] to-[#080706]", overlay: "rgba(180,140,60,.4)" },
];

export default function Vibe() {
  return (
    <section id="vibe" className="py-24 px-8"
             style={{ background: "linear-gradient(180deg, var(--color-bg) 0%, #0c0806 50%, var(--color-bg) 100%)" }}>
      <div className="text-center mb-16">
        <h2 className="tracking-[3px]"
            style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}>
          Вайб <span className="text-[var(--color-accent)]">вечера</span>
        </h2>
        <p className="text-[var(--color-muted)] text-[.75rem] tracking-[4px] uppercase mt-2">
          Sport classic · Casual · Old school
        </p>
      </div>

      <div className="max-w-[1100px] mx-auto grid grid-cols-3 grid-rows-[250px_250px] gap-2 max-md:grid-cols-2 max-md:grid-rows-none max-md:auto-rows-[180px]">
        {cards.map((c, i) => (
          <ScrollReveal key={i} delay={i * 0.08} direction="scale" className={c.cls}>
            <div className={`group relative h-full overflow-hidden bg-gradient-to-br ${c.bg}
                            flex items-end p-6 cursor-default`}>
              {/* Label watermark */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <span className="text-white/[.06] tracking-[6px] select-none"
                      style={{ fontFamily: "sans-serif", fontSize: "clamp(1.5rem, 4vw, 3rem)", fontWeight: 700 }}>
                  {c.label}
                </span>
              </div>

              {/* Hover gradient */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-70 transition-opacity duration-400"
                   style={{ background: `linear-gradient(0deg, ${c.overlay}, transparent)` }} />

              {/* Title */}
              <span className="relative z-2 text-white text-[.85rem] uppercase tracking-[3px]
                               opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0
                               transition-all duration-400"
                    style={{ fontFamily: "'Oswald', sans-serif" }}>
                {c.title}
              </span>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
