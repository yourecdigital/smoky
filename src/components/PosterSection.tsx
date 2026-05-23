"use client";
import ScrollReveal from "./ScrollReveal";
import Image from "next/image";
import { assetPath } from "@/lib/assetPath";

export default function PosterSection() {
  return (
    <section className="py-24 px-8 text-center">
      <ScrollReveal>
        <div className="max-w-[500px] mx-auto relative p-[8px]"
             style={{ background: "linear-gradient(135deg, var(--color-accent), var(--color-gold), var(--color-accent))" }}>
          <Image
            src={assetPath("/poster.svg")}
            alt="Афиша Смоки Мо — Ораниенбаум 24.05"
            width={500}
            height={700}
            className="w-full block contrast-[1.05]"
            priority={false}
          />
          <div className="absolute inset-0"
               style={{ boxShadow: "0 25px 60px rgba(0,0,0,.6), 0 0 100px rgba(232,73,29,.1)" }} />
        </div>
      </ScrollReveal>
    </section>
  );
}
