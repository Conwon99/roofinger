import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { ExperienceSection } from "@/sections/ExperienceSection";
import { ServicesSection } from "@/sections/ServicesSection";
import { ProjectsSection } from "@/sections/ProjectsSection";
import { VideoSection } from "@/sections/VideoSection";
import { FAQSection } from "@/sections/FAQSection";
import { Footer } from "@/sections/Footer";

export const HomePage = () => {
  return (
    <div className="text-neutral-600 text-lg not-italic normal-nums font-medium accent-auto bg-white box-border caret-transparent block tracking-[normal] leading-[27px] list-outside list-disc min-h-full pointer-events-auto text-start indent-[0px] normal-case visible border-separate font-manrope">
      <Header />
      <Hero />
      <ExperienceSection />
      <ServicesSection />
      <ProjectsSection />
      <VideoSection />
      <FAQSection />
      <Footer />
    </div>
  );
};




