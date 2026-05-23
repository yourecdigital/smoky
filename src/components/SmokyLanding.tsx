"use client";

import { useEffect, useState } from "react";
import { assetPath } from "@/lib/assetPath";

const TARGET = new Date("2026-05-24T20:00:00+03:00").getTime();
const ZERO_TIME = { d: "00", h: "00", m: "00", s: "00" };

function getTimeLeft() {
  const d = Math.max(0, TARGET - Date.now());

  return {
    d: String(Math.floor(d / 864e5)).padStart(2, "0"),
    h: String(Math.floor((d % 864e5) / 36e5)).padStart(2, "0"),
    m: String(Math.floor((d % 36e5) / 6e4)).padStart(2, "0"),
    s: String(Math.floor((d % 6e4) / 1e3)).padStart(2, "0"),
  };
}

function VibeScenes() {
  return (
    <>
      <div className="vibe-card vc1">
        <div className="vc-scene">
          <svg viewBox="0 0 400 500" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="500" fill="#1a1410" />
            <rect x="30" y="300" width="340" height="200" fill="#151010" rx="0" />
            <ellipse cx="80" cy="310" rx="22" ry="22" fill="#252018" />
            <rect x="58" y="332" width="44" height="70" fill="#201a14" rx="6" />
            <ellipse cx="160" cy="300" rx="22" ry="22" fill="#282218" />
            <rect x="138" y="322" width="44" height="80" fill="#221c14" rx="6" />
            <rect x="140" y="322" width="42" height="30" fill="#2a2418" rx="4" />
            <ellipse cx="250" cy="315" rx="20" ry="20" fill="#252018" />
            <rect x="230" y="335" width="40" height="65" fill="#1e1812" rx="6" />
            <ellipse cx="330" cy="305" rx="21" ry="21" fill="#282218" />
            <rect x="309" y="326" width="42" height="75" fill="#231d14" rx="6" />
            <rect x="60" y="40" width="280" height="220" fill="none" stroke="#2a2018" strokeWidth="2" rx="8" />
            <path d="M60 40 Q200 -10 340 40" stroke="#2a2018" strokeWidth="3" fill="none" />
            <rect x="90" y="70" width="60" height="80" fill="#1d1812" rx="3" />
            <rect x="170" y="60" width="60" height="90" fill="#1d1812" rx="3" />
            <rect x="250" y="70" width="60" height="80" fill="#1d1812" rx="3" />
            <rect x="140" y="170" width="120" height="80" fill="#221c14" rx="4" />
            <text x="155" y="218" fill="rgba(232,73,29,.25)" fontFamily="sans-serif" fontSize="14" letterSpacing="2">
              РАМБОВ
            </text>
          </svg>
        </div>
        <div className="vc-txt">Дворы Рамбова</div>
      </div>

      <div className="vibe-card vc2">
        <div className="vc-scene">
          <svg viewBox="0 0 400 250" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="250" fill="#12100e" />
            <path
              d="M80 170 L100 130 L280 130 Q320 130 330 155 L340 170 Q340 190 320 190 L80 190 Q70 190 70 180Z"
              fill="rgba(212,168,70,.08)"
              stroke="rgba(212,168,70,.12)"
              strokeWidth="1"
            />
            <circle cx="130" cy="185" r="12" fill="rgba(212,168,70,.06)" stroke="rgba(212,168,70,.1)" />
            <circle cx="290" cy="185" r="12" fill="rgba(212,168,70,.06)" stroke="rgba(212,168,70,.1)" />
            <rect x="110" y="138" width="160" height="4" fill="rgba(212,168,70,.08)" rx="2" />
            <text x="140" y="105" fill="rgba(212,168,70,.2)" fontFamily="sans-serif" fontSize="18" letterSpacing="6">
              CLASSIC
            </text>
          </svg>
        </div>
        <div className="vc-txt">Спорт классик</div>
      </div>

      <div className="vibe-card vc3">
        <div className="vc-scene">
          <svg viewBox="0 0 400 250" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="250" fill="#0e0d10" />
            {[
              [50, 100, 80, ".12", "80;120;60;100;80", "100;60;120;80;100", "3s"],
              [95, 70, 110, ".16", "110;70;130;90;110", "70;110;50;90;70", "2.5s"],
              [140, 50, 130, ".2", "130;90;150;100;130", "50;90;30;80;50", "2.8s"],
              [185, 40, 140, ".24", "140;80;160;110;140", "40;100;20;70;40", "2.2s"],
              [230, 60, 120, ".18", "120;150;80;110;120", "60;30;100;70;60", "2.6s"],
              [275, 80, 100, ".14", "100;130;70;120;100", "80;50;110;60;80", "3.2s"],
              [320, 90, 90, ".1", "90;60;120;80;90", "90;120;60;100;90", "2.9s"],
            ].map(([x, y, height, opacity, values, yValues, dur]) => (
              <rect key={String(x)} x={x} y={y} width="28" height={height} fill={`rgba(232,73,29,${opacity})`} rx="3">
                <animate attributeName="height" values={String(values)} dur={String(dur)} repeatCount="indefinite" />
                <animate attributeName="y" values={String(yValues)} dur={String(dur)} repeatCount="indefinite" />
              </rect>
            ))}
            <line x1="40" y1="190" x2="360" y2="190" stroke="rgba(255,255,255,.04)" strokeWidth="1" />
          </svg>
        </div>
        <div className="vc-txt">Живой звук</div>
      </div>

      <div className="vibe-card vc4">
        <div className="vc-scene">
          <svg viewBox="0 0 400 250" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="250" fill="#110f0d" />
            <path d="M140 60 L160 40 L240 40 L260 60 L280 200 L200 180 L120 200Z" fill="rgba(232,73,29,.06)" stroke="rgba(232,73,29,.08)" strokeWidth="1" />
            <line x1="200" y1="40" x2="200" y2="180" stroke="rgba(232,73,29,.06)" strokeWidth="1" />
            <rect x="155" y="80" width="30" height="30" fill="rgba(232,73,29,.04)" rx="2" />
            <rect x="215" y="80" width="30" height="30" fill="rgba(232,73,29,.04)" rx="2" />
            <circle cx="200" cy="52" r="4" fill="rgba(232,73,29,.12)" />
            <circle cx="200" cy="70" r="3" fill="rgba(232,73,29,.08)" />
            <circle cx="200" cy="86" r="3" fill="rgba(232,73,29,.08)" />
            <text x="145" y="235" fill="rgba(232,73,29,.15)" fontFamily="sans-serif" fontSize="14" letterSpacing="6">
              CASUAL
            </text>
          </svg>
        </div>
        <div className="vc-txt">Кэжуал кру</div>
      </div>

      <div className="vibe-card vc5">
        <div className="vc-scene">
          <svg viewBox="0 0 400 250" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="250" fill="#0f0d0a" />
            <path d="M120 140 Q120 90 200 80 Q280 90 280 140 L120 140Z" fill="rgba(180,140,60,.07)" stroke="rgba(180,140,60,.1)" strokeWidth="1" />
            <path d="M100 140 L300 140 Q310 145 300 150 L100 150 Q90 145 100 140Z" fill="rgba(180,140,60,.1)" />
            <rect x="170" y="100" width="60" height="14" fill="rgba(180,140,60,.06)" rx="2" />
            <text x="175" y="112" fill="rgba(180,140,60,.15)" fontFamily="sans-serif" fontSize="9" letterSpacing="2">
              SAINT-P
            </text>
            <text x="120" y="210" fill="rgba(180,140,60,.1)" fontFamily="sans-serif" fontSize="28" letterSpacing="8">
              OLD SCHOOL
            </text>
          </svg>
        </div>
        <div className="vc-txt">Олдскул вайб</div>
      </div>
    </>
  );
}

export default function SmokyLanding() {
  const [preloaded, setPreloaded] = useState(false);
  const [time, setTime] = useState(ZERO_TIME);
  const heroBg = assetPath("/hero-bg.jpg");
  const poster = assetPath("/poster.jpg");

  useEffect(() => {
    const preloader = window.setTimeout(() => setPreloaded(true), 1000);

    setTime(getTimeLeft());
    const countdown = window.setInterval(() => setTime(getTimeLeft()), 1000);

    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("vis");
            observer.unobserve(entry.target);
          }
        }),
      { threshold: 0.12 }
    );

    document
      .querySelectorAll(".mani-in p,.mani-in .aline,.mani-in blockquote,.lu-item,.info-card,.vibe-card,.poster-frame")
      .forEach((element) => observer.observe(element));

    let lastY = 0;
    const onScroll = () => {
      const y = window.scrollY;
      document.getElementById("nav")?.classList.toggle("hide", y > lastY && y > 80);
      lastY = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    const particles = document.getElementById("pts");
    if (particles && particles.childElementCount === 0) {
      for (let i = 0; i < 15; i++) {
        const p = document.createElement("div");
        const size = 1 + Math.random() * 1.5;
        p.className = "p";
        p.style.cssText = `left:${Math.random() * 100}%;width:${size}px;height:${size}px;animation-duration:${10 + Math.random() * 15}s;animation-delay:${Math.random() * 8}s`;
        particles.appendChild(p);
      }
    }

    return () => {
      window.clearTimeout(preloader);
      window.clearInterval(countdown);
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div className={`preloader ${preloaded ? "done" : ""}`} id="pre">
        <div className="pre-line" />
        <div className="pre-txt">ЗАГРУЗКА</div>
      </div>

      <div className="particles" id="pts" />

      <nav id="nav">
        <div className="n-logo">FC/DC</div>
        <ul className="n-links">
          <li><a href="#about">Манифест</a></li>
          <li><a href="#vibe">Вайб</a></li>
          <li><a href="#lineup">Лайнап</a></li>
          <li><a href="#info">Инфо</a></li>
        </ul>
        <button className="n-btn" onClick={() => document.getElementById("cta")?.scrollIntoView({ behavior: "smooth" })}>Билеты</button>
      </nav>

      <section className="hero">
        <div className="hero-img" style={{ backgroundImage: `url("${heroBg}")` }} />
        <div className="hero-grad" />
        <div className="hero-noise" />
        <div className="hero-c">
          <div className="h-tag">Легендарный день города Ораниенбаум</div>
          <h1 className="h-title">СМОКИ<br /><span className="line2">МО</span></h1>
          <p className="h-sub">Для старой школы</p>
          <div className="h-date"><em>24</em> мая <span className="sep" /> начало <em>20:00</em></div>
          <a href="#cta" className="h-cta">Забрать билет</a>
        </div>
        <div className="hero-scroll"><span>Scroll</span><div className="scr-l" /></div>
      </section>

      <div className="divider" />
      <section className="cd-sec">
        <p className="cd-label">До начала</p>
        <div className="cd">
          <div className="cd-b"><div className="cd-n">{time.d}</div><div className="cd-u">дней</div></div>
          <div className="cd-b"><div className="cd-n">{time.h}</div><div className="cd-u">часов</div></div>
          <div className="cd-b"><div className="cd-n">{time.m}</div><div className="cd-u">минут</div></div>
          <div className="cd-b"><div className="cd-n">{time.s}</div><div className="cd-u">секунд</div></div>
        </div>
      </section>
      <div className="divider" />

      <section className="mani" id="about">
        <div className="mani-in">
          <h2>Город помнит.<br /><span>Город ждёт.</span></h2>
          <p>Ораниенбаум — не просто точка на карте. Каменные стены впитали столько историй, сколько не вместит ни один альбом. На Манежной улице старая школа собирается снова — как в те времена, когда рэп не знал компромиссов.</p>
          <div className="aline" />
          <p>Смоки Мо — голос питерских улиц с 2001 года. От «Кара-Тэ» до «Белого блюза», каждый альбом как удар — после которого мир уже не тот. Философия улиц, мистика белых ночей и бескомпромиссный флоу. Настоящий Петербург звучит именно так.</p>
          <blockquote>Я просто делаю рэп — он должен рушить все рамки</blockquote>
          <p>Один вечер. Один микрофон. Легенда на сцене. Это не концерт — это выход из темноты на свет, где каждый бар как выдох города, который слишком долго молчал.</p>
        </div>
      </section>

      <section className="vibe" id="vibe">
        <div className="vibe-head">
          <h2>Вайб <span>вечера</span></h2>
          <p>Sport classic &middot; Casual &middot; Old school</p>
        </div>
        <div className="vibe-grid"><VibeScenes /></div>
      </section>

      <section className="lineup" id="lineup">
        <div className="s-head"><h2>Лайн<span>ап</span></h2><p>Программа вечера</p></div>
        <div className="lu-grid">
          <div className="lu-item"><div className="lu-time">20:00</div><div className="lu-info"><h3>BMBSpaceKid</h3><p>Разогрев &middot; Саппорт</p></div></div>
          <div className="lu-item"><div className="lu-time">21:00</div><div className="lu-info"><h3>Special Guest</h3><p>Сюрприз для тех, кто в теме</p></div><div className="lu-tag">TBA</div></div>
          <div className="lu-item main"><div className="lu-time">22:00</div><div className="lu-info"><h3>Смоки Мо</h3><p>Хедлайнер &middot; Клаб-шоу</p></div><div className="lu-tag">Headliner</div></div>
        </div>
      </section>

      <section className="info" id="info">
        <div className="s-head"><h2>Детали <span>события</span></h2><p>Всё что нужно знать</p></div>
        <div className="info-grid">
          <div className="info-card"><h3>Где</h3><span className="big">Манежная, 8</span><p>Ораниенбаум, Ленинградская область. Историческое сердце города.</p></div>
          <div className="info-card"><h3>Когда</h3><span className="big">24.05</span><p>Суббота. Начало в 20:00. Двери за час до старта. Легенды не ждут.</p></div>
          <div className="info-card"><h3>Формат</h3><span className="big">21+</span><p>Только для взрослой аудитории. При поддержке BMBSpaceKid. Организатор — FC/DC.</p></div>
        </div>
      </section>

      <section className="poster-sec">
        <div className="poster-frame"><img src={poster} alt="Афиша Смоки Мо — Ораниенбаум 24.05" /></div>
      </section>

      <section className="cta" id="cta">
        <h2>Время пришло</h2>
        <p className="sub">Количество мест ограничено</p>
        <a href="#" className="cta-btn">Забрать билет</a>
      </section>

      <footer>
        <div className="fl"><span>FC/DC</span> &times; Ораниенбаум</div>
        <div className="fr">Ораниенбаум &middot; 24.05.2026 &middot; 21+</div>
      </footer>
    </>
  );
}
