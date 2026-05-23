"use client";
import ScrollReveal from "./ScrollReveal";

export default function Manifesto() {
  return (
    <section id="about" className="relative py-32 px-8 overflow-hidden">
      {/* Background text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none whitespace-nowrap tracking-[10px] text-[rgba(232,73,29,.025)]"
           style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(3rem, 14vw, 11rem)" }}>
        ОРАНИЕНБАУМ
      </div>

      <div className="max-w-[750px] mx-auto relative">
        <h2 className="tracking-[3px] mb-12 leading-[1.1]"
            style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(2.2rem, 5vw, 3.8rem)" }}>
          Город помнит.<br />
          <span className="text-[var(--color-accent)]">Город ждёт.</span>
        </h2>

        <ScrollReveal>
          <p className="text-[clamp(.9rem,1.3vw,1.05rem)] leading-[2] text-white/60 mb-8">
            Ораниенбаум — не просто точка на карте. Каменные стены впитали столько историй, сколько не вместит ни один альбом. На Манежной улице старая школа собирается снова — как в те времена, когда рэп не знал компромиссов.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="w-[50px] h-[2px] my-10 bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-gold)]" />
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <p className="text-[clamp(.9rem,1.3vw,1.05rem)] leading-[2] text-white/60 mb-8">
            Смоки Мо — голос питерских улиц с 2001 года. От «Кара-Тэ» до «Белого блюза», каждый альбом как удар — после которого мир уже не тот. Философия улиц, мистика белых ночей и бескомпромиссный флоу. Настоящий Петербург звучит именно так.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2} direction="left">
          <blockquote className="border-l-2 border-[var(--color-accent)] pl-6 my-10 italic text-[var(--color-gold)] tracking-[1px] text-lg"
                      style={{ fontFamily: "'Oswald', sans-serif" }}>
            Я просто делаю рэп — он должен рушить все рамки
          </blockquote>
        </ScrollReveal>

        <ScrollReveal delay={0.25}>
          <p className="text-[clamp(.9rem,1.3vw,1.05rem)] leading-[2] text-white/60">
            Один вечер. Один микрофон. Легенда на сцене. Это не концерт — это выход из темноты на свет, где каждый бар как выдох города, который слишком долго молчал.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
