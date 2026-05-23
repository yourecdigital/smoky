"use client";
import { assetPath } from "@/lib/assetPath";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Poster bg */}
      <div
        className="absolute inset-0 bg-center bg-cover bg-no-repeat brightness-[.35] contrast-[1.1] saturate-[.8]"
        style={{ backgroundImage: `url("${assetPath("/poster.svg")}")` }}
      />

      {/* Gradients */}
      <div className="absolute inset-0"
           style={{
             background: `
               linear-gradient(0deg, var(--color-bg) 0%, transparent 30%),
               linear-gradient(180deg, rgba(7,7,10,.6) 0%, transparent 40%),
               radial-gradient(ellipse at 50% 40%, rgba(232,73,29,.12) 0%, transparent 60%)
             `
           }} />

      {/* Noise */}
      <div className="absolute inset-0 opacity-[.06]"
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.7' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")` }} />

      {/* Content */}
      <div className="relative z-2 text-center px-8 max-w-[900px]">
        <div
          className="inline-flex items-center gap-2 px-6 py-2 border border-[rgba(232,73,29,.4)]
                     bg-[rgba(232,73,29,.06)] text-[var(--color-accent)] text-[.7rem] uppercase
                     tracking-[5px] mb-10 backdrop-blur-[8px] opacity-0 animate-[fadeUp_.8s_ease_.6s_forwards]"
        >
          <span className="w-1.5 h-1.5 bg-[var(--color-accent)] rounded-full animate-[pulse_2s_infinite]" />
          Легендарный день города Ораниенбаум
        </div>

        <h1
          className="leading-[.82] tracking-[-2px] opacity-0 animate-[titleIn_1.2s_ease_.9s_forwards]"
          style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(5rem, 16vw, 14rem)" }}
        >
          СМОКИ<br />
          <span className="text-[var(--color-accent)]"
                style={{ textShadow: "0 0 80px rgba(232,73,29,.35), 0 4px 30px rgba(0,0,0,.5)" }}>
            МО
          </span>
        </h1>

        <p
          className="text-[var(--color-gold)] uppercase tracking-[8px] mt-6 opacity-0 animate-[fadeUp_.8s_ease_1.4s_forwards]"
          style={{ fontFamily: "'Oswald', sans-serif", fontSize: "clamp(.9rem, 2.5vw, 1.5rem)" }}
        >
          Для старой школы
        </p>

        <div
          className="inline-flex items-center gap-6 mt-10 tracking-[6px] opacity-0 animate-[fadeUp_.8s_ease_1.7s_forwards]"
          style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(1.2rem, 3vw, 2rem)" }}
        >
          <em className="not-italic text-[var(--color-accent)]">24</em> мая
          <span className="w-[30px] h-px bg-[var(--color-accent)]" />
          начало <em className="not-italic text-[var(--color-accent)]">20:00</em>
        </div>

        <div
          className="mt-10 opacity-0 animate-[fadeUp_.8s_ease_2s_forwards]"
        >
          <a href="#cta"
             className="group relative inline-block px-14 py-4 bg-[var(--color-accent)] text-white
                        uppercase tracking-[4px] no-underline overflow-hidden transition-all duration-400
                        hover:bg-[var(--color-accent2)] hover:tracking-[6px] hover:shadow-[0_0_40px_rgba(232,73,29,.3)]"
             style={{ fontFamily: "'Oswald', sans-serif", fontSize: "1rem" }}
          >
            Забрать билет
            <span className="absolute top-0 left-[-100%] w-full h-full
                             bg-gradient-to-r from-transparent via-white/15 to-transparent
                             group-hover:left-full transition-[left] duration-600" />
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-10 z-2 flex flex-col items-center gap-2 opacity-0 animate-[fadeUp_.8s_ease_2.4s_forwards]"
      >
        <span className="text-[.65rem] tracking-[4px] uppercase text-[var(--color-muted)]">Scroll</span>
        <div className="w-px bg-gradient-to-b from-[var(--color-accent)] to-transparent animate-[scrPulse_2s_infinite]" />
      </div>
    </section>
  );
}
