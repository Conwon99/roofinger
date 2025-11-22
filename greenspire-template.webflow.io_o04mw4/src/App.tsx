import { Navbar } from "@/sections/Navbar";
import { Hero } from "@/sections/Hero";
import { LogoSection } from "@/sections/LogoSection";
import { AboutSection } from "@/sections/AboutSection";
import { CoreValuesSection } from "@/sections/CoreValuesSection";
import { ServicesSection } from "@/sections/ServicesSection";
import { WhyUsSection } from "@/sections/WhyUsSection";
import { GallerySection } from "@/sections/GallerySection";
import { ProcessSection } from "@/sections/ProcessSection";
import { TestimonialsSection } from "@/sections/TestimonialsSection";
import { EmptySection } from "@/sections/EmptySection";
import { FooterSection } from "@/sections/FooterSection";

export const App = () => {
  return (
    <body className="text-emerald-950 text-sm not-italic normal-nums font-normal accent-auto bg-neutral-100 box-border caret-transparent block tracking-[normal] leading-5 list-outside list-disc min-h-full pointer-events-auto text-start indent-[0px] normal-case visible border-separate font-geist">
      <div className="box-border caret-transparent">
        <Navbar />
        <Hero />
        <LogoSection />
        <AboutSection />
        <CoreValuesSection />
        <ServicesSection />
        <WhyUsSection />
        <GallerySection />
        <ProcessSection />
        <TestimonialsSection />
        <EmptySection
          variant="bg-white py-[60px] md:py-[100px]"
          showContent={true}
          showGrid={true}
        />
        <EmptySection
          variant="py-[60px] md:py-[100px]"
          showContent={true}
          showGrid={true}
          showList={true}
        />
        <EmptySection variant="bg-[url('https://cdn.prod.website-files.com/689a8e2467db11e41193d52c/689be794d41c5a61335c5bb2_Serene%20Sunset%20Landscape%202.webp')] bg-cover bg-center py-20 md:py-[118px]" />
        <FooterSection />
      </div>
    </body>
  );
};
