import Preloader from "@/components/Preloader";
import Particles from "@/components/Particles";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Countdown from "@/components/Countdown";
import Manifesto from "@/components/Manifesto";
import Vibe from "@/components/Vibe";
import Lineup from "@/components/Lineup";
import Info from "@/components/Info";
import PosterSection from "@/components/PosterSection";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

function Divider() {
  return (
    <div className="h-px mx-auto max-w-[600px]"
         style={{ background: "linear-gradient(90deg, transparent, rgba(232,73,29,.2), transparent)" }} />
  );
}

export default function Home() {
  return (
    <>
      <Preloader />
      <Particles />
      <Navbar />
      <Hero />
      <Divider />
      <Countdown />
      <Divider />
      <Manifesto />
      <Vibe />
      <Lineup />
      <Info />
      <PosterSection />
      <CTA />
      <Footer />
    </>
  );
}
