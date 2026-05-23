import type { Metadata } from "next";
import { Inter, Oswald, Bebas_Neue } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin", "cyrillic"], variable: "--font-inter" });
const oswald = Oswald({ subsets: ["latin", "cyrillic"], variable: "--font-oswald" });
const bebas = Bebas_Neue({ weight: "400", subsets: ["latin"], variable: "--font-bebas" });
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const owner = process.env.GITHUB_REPOSITORY?.split("/")[0] ?? "yourecdigital";

export const metadata: Metadata = {
  metadataBase: new URL(`https://${owner}.github.io`),
  title: "СМОКИ МО — Ораниенбаум 24.05",
  description: "Легендарный день города Ораниенбаум для старой школы. Смоки Мо — клаб-шоу. 24 мая, 20:00, Манежная 8.",
  openGraph: {
    title: "СМОКИ МО — Ораниенбаум 24.05",
    description: "Легендарный день города Ораниенбаум для старой школы",
    images: [`${basePath}/poster.jpg`],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={`${inter.variable} ${oswald.variable} ${bebas.variable}`}>
      <body>{children}</body>
    </html>
  );
}
