import { Navbar } from "@/pages/about/sections/Navbar";
import { Hero } from "@/pages/about/sections/Hero";
import { AboutSection } from "@/pages/about/sections/AboutSection";
import { ValuesSection } from "@/pages/about/sections/ValuesSection";
import { TeamSection } from "@/pages/about/sections/TeamSection";
import { Footer } from "@/pages/about/sections/Footer";

export const AboutPage = () => {
  return (
    <div className="text-neutral-600 text-lg not-italic normal-nums font-medium accent-auto bg-white box-border caret-transparent block tracking-[normal] leading-[27px] list-outside list-disc min-h-full pointer-events-auto text-start indent-[0px] normal-case visible border-separate font-manrope">
      <Navbar />
      <Hero />
      <AboutSection />
      <ValuesSection />
      <TeamSection />
      <Footer />
    </div>
  );
};

