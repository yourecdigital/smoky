export default function Footer() {
  return (
    <footer className="px-8 py-10 border-t border-white/[.04] flex justify-between items-center flex-wrap gap-4 max-md:flex-col max-md:text-center">
      <div className="tracking-[3px] text-[var(--color-muted)]"
           style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.1rem" }}>
        <span className="text-[var(--color-accent)]">FC/DC</span> &times; Ораниенбаум
      </div>
      <div className="text-[.65rem] text-white/20 tracking-[2px] uppercase">
        Ораниенбаум · 24.05.2026 · 21+
      </div>
    </footer>
  );
}
