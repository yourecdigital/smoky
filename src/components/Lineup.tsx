"use client";
import ScrollReveal from "./ScrollReveal";

const items = [
  { time: "20:00", name: "BMBSpaceKid", desc: "Разогрев · Саппорт", tag: null, main: false },
  { time: "21:00", name: "Special Guest", desc: "Сюрприз для тех, кто в теме", tag: "TBA", main: false },
  { time: "22:00", name: "Смоки Мо", desc: "Хедлайнер · Клаб-шоу", tag: "Headliner", main: true },
];

export default function Lineup() {
  return (
    <section id="lineup" className="py-24 px-8">
      <div className="text-center mb-16">
        <h2 className="tracking-[3px]"
            style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}>
          Лайн<span className="text-[var(--color-accent)]">ап</span>
        </h2>
        <p className="text-[var(--color-muted)] text-[.75rem] tracking-[4px] uppercase mt-2">Программа вечера</p>
      </div>

      <div className="max-w-[850px] mx-auto flex flex-col gap-0.5">
        {items.map((item, i) => (
          <ScrollReveal key={i} delay={i * 0.1} direction="left">
            <div className={`flex items-center gap-8 p-8 transition-all duration-500 cursor-default
                            max-md:flex-wrap max-md:gap-4
                            hover:bg-[rgba(232,73,29,.04)] hover:border-l-[var(--color-accent)] hover:translate-x-1
                            ${item.main
                              ? "border-l-[3px] border-l-[var(--color-accent)] bg-[rgba(232,73,29,.05)] border border-[rgba(232,73,29,.1)]"
                              : "border-l-[3px] border-l-transparent bg-white/[.02]"
                            }`}>
              <div className="text-[1.6rem] text-[var(--color-accent)] min-w-[75px]"
                   style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                {item.time}
              </div>
              <div>
                <h3 className="text-[1.2rem] uppercase tracking-[2px]"
                    style={{ fontFamily: "'Oswald', sans-serif" }}>
                  {item.name}
                </h3>
                <p className="text-[var(--color-muted)] text-[.8rem] mt-0.5">{item.desc}</p>
              </div>
              {item.tag && (
                <span className="ml-auto max-md:ml-0 px-3 py-1 border border-[var(--color-accent)]
                                 text-[var(--color-accent)] text-[.6rem] uppercase tracking-[2px]"
                      style={{ fontFamily: "'Oswald', sans-serif" }}>
                  {item.tag}
                </span>
              )}
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
