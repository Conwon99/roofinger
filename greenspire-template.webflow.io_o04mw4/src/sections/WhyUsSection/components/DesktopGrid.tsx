import { FeatureCard } from "@/sections/WhyUsSection/components/FeatureCard";
import { useEffect, useRef, useState } from "react";

export const DesktopGrid = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [translateX, setTranslateX] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const section = containerRef.current.closest('section');
      if (!section) return;

      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY;

      // Calculate scroll progress through the section (0 to 1)
      const scrollStart = sectionTop - windowHeight;
      const scrollEnd = sectionTop + sectionHeight - windowHeight;
      const scrollProgress = Math.max(0, Math.min(1, (scrollY - scrollStart) / (scrollEnd - scrollStart)));

      // Calculate horizontal translation
      // Each group is 656px wide (max-w-[656px]) with 16px margin-right (mr-4)
      // Total width for 4 groups: (656 + 16) * 4 = 2688px
      // We want to scroll from 0 to show all 4 groups
      // Max translate should be -(totalWidth - containerWidth)
      const containerWidth = 656; // max-w-[656px]
      const groupWidth = 656; // w-full within 656px container
      const groupMargin = 16; // mr-4 = 16px
      const totalWidth = (groupWidth + groupMargin) * 4 - groupMargin; // Last group has no margin
      const maxTranslate = -(totalWidth - containerWidth);
      const translate = scrollProgress * maxTranslate;

      setTranslateX(translate);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial calculation

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      role="region"
      aria-label="carousel"
      className="relative bg-transparent box-border caret-transparent clear-both hidden opacity-0 text-center mt-10 md:block md:blur-0 md:opacity-100 md:mt-14"
      ref={containerRef}
    >
      <div className="relative box-border caret-transparent max-w-[656px] mx-auto overflow-hidden">
        <div 
          className="relative box-border caret-transparent h-full text-nowrap z-[1] will-change-transform"
          style={{ transform: `translateX(${translateX}px)` }}
        >
        <div
          aria-label="1 of 4"
          role="group"
          className="relative box-border caret-transparent inline-block h-full text-left align-bottom w-[656px] mr-4 md:align-top"
        >
          <div className="box-border caret-transparent gap-x-4 flex flex-col gap-y-4 md:flex-row">
            <FeatureCard
              iconSrc="https://c.animaapp.com/mhnzg6knJo6lE7/assets/icon-11.svg"
              title="Modern Tools & Techniques"
              description="Clean, sharp edges that enhance your curb appeal and keep your landscape looking polished."
              variant=""
              iconVariant=""
            />
            <div className="box-border caret-transparent basis-auto grow-0 shrink-0 h-[250px] min-h-0 min-w-0 overflow-hidden rounded-lg md:basis-[0%] md:grow md:shrink md:h-[348px] md:min-h-[auto] md:min-w-[auto]">
              <img
                src="https://c.animaapp.com/mhnzg6knJo6lE7/assets/689be7db8c35ee39a62e391c_Frame_1707483177-1.webp"
                sizes="100vw"
                alt="Why Choose 03"
                className="box-border caret-transparent inline-block h-full max-w-full object-cover w-full"
              />
            </div>
          </div>
        </div>
        <div
          aria-label="2 of 4"
          role="group"
          className="relative box-border caret-transparent inline-block h-full text-left align-bottom w-[656px] mr-4 md:align-top"
        >
          <div className="box-border caret-transparent gap-x-4 flex flex-col gap-y-4 md:flex-row">
            <FeatureCard
              iconSrc="https://c.animaapp.com/mhnzg6knJo6lE7/assets/icon-12.svg"
              title="Reliable & On-Time Service"
              description="Our team values your time and ensures every visit is punctual, efficient, and completed"
              variant=""
              iconVariant=""
            />
            <div className="box-border caret-transparent basis-auto grow-0 shrink-0 h-[250px] min-h-0 min-w-0 overflow-hidden rounded-lg md:basis-[0%] md:grow md:shrink md:h-[348px] md:min-h-[auto] md:min-w-[auto]">
              <img
                src="https://c.animaapp.com/mhnzg6knJo6lE7/assets/689be7dc0e82c9747e04d929_Frame_1707483181.webp"
                sizes="100vw"
                alt="Why Choose 04"
                className="box-border caret-transparent inline-block h-full max-w-full object-cover w-full"
              />
            </div>
          </div>
        </div>
        <div
          aria-label="3 of 4"
          role="group"
          className="relative box-border caret-transparent inline-block h-full text-left align-bottom w-[656px] mr-4 md:align-top"
        >
          <div className="box-border caret-transparent gap-x-4 flex flex-col gap-y-4 md:flex-row">
            <FeatureCard
              iconSrc="https://c.animaapp.com/mhnzg6knJo6lE7/assets/icon-13.svg"
              title="Tailored Lawn & Garden Solutions"
              description="Clean, sharp edges that enhance your curb appeal and keep your landscape looking polished."
              variant=""
              iconVariant=""
            />
            <div className="box-border caret-transparent basis-auto grow-0 shrink-0 h-[250px] min-h-0 min-w-0 overflow-hidden rounded-lg md:basis-[0%] md:grow md:shrink md:h-[348px] md:min-h-[auto] md:min-w-[auto]">
              <img
                src="https://c.animaapp.com/mhnzg6knJo6lE7/assets/689be7db508671ff14a55e63_Frame_1707483177.webp"
                sizes="100vw"
                alt="Why Choose 02"
                className="box-border caret-transparent inline-block h-full max-w-full object-cover w-full"
              />
            </div>
          </div>
        </div>
        <div
          aria-label="4 of 4"
          role="group"
          className="relative box-border caret-transparent inline-block h-full text-left align-bottom w-[656px] mr-4 md:align-top"
        >
          <div className="box-border caret-transparent gap-x-4 flex flex-col gap-y-4 md:flex-row">
            <FeatureCard
              iconSrc="https://c.animaapp.com/mhnzg6knJo6lE7/assets/icon-14.svg"
              title="Fully Licensed & Insured"
              description="Clean, sharp edges that enhance your curb appeal and keep your landscape looking polished."
              variant=""
              iconVariant=""
            />
            <div className="box-border caret-transparent basis-auto grow-0 shrink-0 h-[250px] min-h-0 min-w-0 overflow-hidden rounded-lg md:basis-[0%] md:grow md:shrink md:h-[348px] md:min-h-[auto] md:min-w-[auto]">
              <img
                src="https://c.animaapp.com/mhnzg6knJo6lE7/assets/689be7db9ca063b79e3a1722_Frame_1707483178.webp"
                alt="Why Choose 01"
                className="box-border caret-transparent inline-block h-full max-w-full object-cover w-full"
              />
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};
