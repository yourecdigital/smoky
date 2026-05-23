"use client";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [lastY, setLastY] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setHidden(y > lastY && y > 80);
      setLastY(y);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  });

  return (
    <nav
      className={`fixed top-0 w-full z-[100] px-6 py-3 flex justify-between items-center
        bg-[rgba(7,7,10,.8)] backdrop-blur-[20px] border-b border-[rgba(232,73,29,.08)]
        transition-transform duration-400 ${hidden ? "-translate-y-full" : ""}`}
    >
      <div className="text-[1.4rem] tracking-[4px] text-[var(--color-accent)]"
           style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
        FC/DC
      </div>

      <ul className="hidden md:flex gap-7 list-none">
        {[
          ["#about", "Манифест"],
          ["#vibe", "Вайб"],
          ["#lineup", "Лайнап"],
          ["#info", "Инфо"],
        ].map(([href, label]) => (
          <li key={href}>
            <a href={href}
               className="text-[var(--color-muted)] no-underline text-xs uppercase tracking-[2px]
                          hover:text-[var(--color-text)] transition-colors relative
                          after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-px
                          after:bg-[var(--color-accent)] after:transition-all hover:after:w-full">
              {label}
            </a>
          </li>
        ))}
      </ul>

      <button
        onClick={() => document.getElementById("cta")?.scrollIntoView({ behavior: "smooth" })}
        className="bg-transparent border border-[var(--color-accent)] text-[var(--color-accent)]
                   px-5 py-2 text-xs uppercase tracking-[3px] cursor-pointer transition-all
                   hover:bg-[var(--color-accent)] hover:text-white"
        style={{ fontFamily: "'Oswald', sans-serif" }}
      >
        Билеты
      </button>
    </nav>
  );
}
