"use client";
import { useEffect, useState } from "react";

export default function Preloader() {
  const [visible, setVisible] = useState(true);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const startExit = setTimeout(() => setLeaving(true), 1200);
    const remove = setTimeout(() => setVisible(false), 2000);

    return () => {
      clearTimeout(startExit);
      clearTimeout(remove);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center gap-4
        transition-opacity duration-700 ${leaving ? "opacity-0 pointer-events-none" : "opacity-100"}`}
    >
      <div className="h-[2px] bg-[var(--color-accent)] animate-[preGrow_1.2s_ease-in-out_infinite_alternate]" />
      <span
        className="font-[var(--font-bebas)] text-xl tracking-[12px] text-[var(--color-muted)]"
        style={{ fontFamily: "'Bebas Neue', sans-serif" }}
      >
        ЗАГРУЗКА
      </span>
    </div>
  );
}
