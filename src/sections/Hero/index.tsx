import { HeroContent } from "@/sections/Hero/components/HeroContent";

export const Hero = () => {
  return (
    <section className="relative bg-[url('/hero-bg.jpg')] bg-no-repeat bg-cover box-border caret-transparent h-screen w-full bg-[position:0px_0px] pt-[140px] md:pt-[100px]">
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/70 via-gray-900/40 to-transparent"></div>
      <div className="relative z-10 box-border caret-transparent flex flex-col h-full justify-end max-w-[1204px] mx-auto pb-[90px] px-5 md:px-8">
        <HeroContent />
      </div>
    </section>
  );
};
