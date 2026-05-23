"use client";

export default function CTA() {
  return (
    <section id="cta" className="py-32 px-8 text-center relative overflow-hidden">
      <div className="absolute inset-0"
           style={{ background: "radial-gradient(ellipse at center, rgba(232,73,29,.06) 0%, transparent 65%)" }} />

      <h2 className="relative tracking-[4px]"
          style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(2.5rem, 7vw, 5rem)" }}>
        Время пришло
      </h2>
      <p className="relative text-[var(--color-muted)] text-[.8rem] tracking-[4px] uppercase mb-12">
        Количество мест ограничено
      </p>
      <a href="#"
         className="group relative inline-block px-16 py-5 bg-[var(--color-accent)] text-white
                    uppercase tracking-[5px] no-underline overflow-hidden transition-all duration-400
                    hover:bg-[var(--color-accent2)] hover:tracking-[7px] hover:shadow-[0_0_50px_rgba(232,73,29,.25)]"
         style={{ fontFamily: "'Oswald', sans-serif", fontSize: "1.1rem" }}>
        Забрать билет
        <span className="absolute top-0 left-[-100%] w-full h-full
                         bg-gradient-to-r from-transparent via-white/12 to-transparent
                         group-hover:left-full transition-[left] duration-600" />
      </a>
    </section>
  );
}
