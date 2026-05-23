"use client";
import ScrollReveal from "./ScrollReveal";

const cards = [
  { title: "Где", big: "Манежная, 8", text: "Ораниенбаум, Ленинградская область. Историческое сердце города." },
  { title: "Когда", big: "24.05", text: "Суббота. Начало в 20:00. Двери за час до старта. Легенды не ждут." },
  { title: "Формат", big: "21+", text: "Только для взрослой аудитории. Организатор — FC/DC." },
];

export default function Info() {
  return (
    <section id="info" className="py-24 px-8">
      <div className="text-center mb-16">
        <h2 className="tracking-[3px]"
            style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}>
          Детали <span className="text-[var(--color-accent)]">события</span>
        </h2>
        <p className="text-[var(--color-muted)] text-[.75rem] tracking-[4px] uppercase mt-2">Всё что нужно знать</p>
      </div>

      <div className="max-w-[1000px] mx-auto grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-5">
        {cards.map((c, i) => (
          <ScrollReveal key={i} delay={i * 0.1}>
            <div className="group p-10 bg-white/[.02] border border-white/[.04] relative overflow-hidden
                            transition-all duration-500 hover:border-[rgba(232,73,29,.2)] hover:-translate-y-1">
              {/* Top line */}
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-[var(--color-accent)] to-transparent
                              scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

              <h3 className="text-[.85rem] uppercase tracking-[4px] mb-4 text-[var(--color-accent)]"
                  style={{ fontFamily: "'Oswald', sans-serif" }}>
                {c.title}
              </h3>
              <span className="block mb-2 text-[var(--color-text)]"
                    style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "2.2rem" }}>
                {c.big}
              </span>
              <p className="text-white/55 leading-[1.8] text-[.9rem]">{c.text}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
