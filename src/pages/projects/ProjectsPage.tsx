import { Navbar } from "@/pages/projects/sections/Navbar";
import { Hero } from "@/pages/projects/sections/Hero";
import { ProjectsGrid } from "@/pages/projects/sections/ProjectsGrid";
import { CTASection } from "@/pages/projects/sections/CTASection";

export const ProjectsPage = () => {
  return (
    <div className="text-neutral-600 text-lg not-italic normal-nums font-medium accent-auto bg-white box-border caret-transparent block tracking-[normal] leading-[27px] list-outside list-disc min-h-full pointer-events-auto text-start indent-[0px] normal-case visible border-separate font-manrope">
      <Navbar />
      <Hero />
      <ProjectsGrid />
      <CTASection />
    </div>
  );
};

