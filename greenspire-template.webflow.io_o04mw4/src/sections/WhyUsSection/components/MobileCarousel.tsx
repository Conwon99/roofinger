import { FeatureCard } from "@/sections/WhyUsSection/components/FeatureCard";

export const MobileCarousel = () => {
  return (
    <div
      role="region"
      aria-label="carousel"
      className="relative bg-transparent box-border caret-transparent clear-both block blur-0 opacity-100 text-center mt-10 md:hidden md:opacity-0 md:mt-14"
    >
      <div className="relative box-border caret-transparent h-full max-w-[656px] text-nowrap z-[1] inset-x-0">
        <div
          aria-label="1 of 4"
          role="group"
          className="relative box-border caret-transparent inline-block h-full text-left align-bottom w-full mr-4 md:align-top"
        >
          <div className="box-border caret-transparent gap-x-4 flex flex-col gap-y-4 md:flex-row">
            <FeatureCard
              iconSrc="https://c.animaapp.com/mhnzg6knJo6lE7/assets/icon-11.svg"
              title="Modern Tools & Techniques"
              description="Clean, sharp edges that enhance your curb appeal and keep your landscape looking polished."
              variant=""
              iconVariant=""
            />
            <div className="box-border caret-transparent basis-auto grow-0 shrink-0 h-[250px] min-h-[auto] min-w-[auto] overflow-hidden rounded-lg md:basis-[0%] md:grow md:shrink md:h-[348px] md:min-h-0 md:min-w-0">
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
          className="relative box-border caret-transparent inline-block h-full text-left align-bottom w-full mr-4 md:align-top"
        >
          <div className="box-border caret-transparent gap-x-4 flex flex-col gap-y-4 md:flex-row">
            <FeatureCard
              iconSrc="https://c.animaapp.com/mhnzg6knJo6lE7/assets/icon-12.svg"
              title="Reliable & On-Time Service"
              description="Our team values your time and ensures every visit is punctual, efficient, and completed"
              variant=""
              iconVariant=""
            />
            <div className="box-border caret-transparent basis-auto grow-0 shrink-0 h-[250px] min-h-[auto] min-w-[auto] overflow-hidden rounded-lg md:basis-[0%] md:grow md:shrink md:h-[348px] md:min-h-0 md:min-w-0">
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
          className="relative box-border caret-transparent inline-block h-full text-left align-bottom w-full mr-4 md:align-top"
        >
          <div className="box-border caret-transparent gap-x-4 flex flex-col gap-y-4 md:flex-row">
            <FeatureCard
              iconSrc="https://c.animaapp.com/mhnzg6knJo6lE7/assets/icon-13.svg"
              title="Tailored Lawn & Garden Solutions"
              description="Clean, sharp edges that enhance your curb appeal and keep your landscape looking polished."
              variant=""
              iconVariant=""
            />
            <div className="box-border caret-transparent basis-auto grow-0 shrink-0 h-[250px] min-h-[auto] min-w-[auto] overflow-hidden rounded-lg md:basis-[0%] md:grow md:shrink md:h-[348px] md:min-h-0 md:min-w-0">
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
          className="relative box-border caret-transparent inline-block h-full text-left align-bottom w-full mr-4 md:align-top"
        >
          <div className="box-border caret-transparent gap-x-4 flex flex-col gap-y-4 md:flex-row">
            <FeatureCard
              iconSrc="https://c.animaapp.com/mhnzg6knJo6lE7/assets/icon-14.svg"
              title="Fully Licensed & Insured"
              description="Clean, sharp edges that enhance your curb appeal and keep your landscape looking polished."
              variant=""
              iconVariant=""
            />
            <div className="box-border caret-transparent basis-auto grow-0 shrink-0 h-[250px] min-h-[auto] min-w-[auto] overflow-hidden rounded-lg md:basis-[0%] md:grow md:shrink md:h-[348px] md:min-h-0 md:min-w-0">
              <img
                src="https://c.animaapp.com/mhnzg6knJo6lE7/assets/689be7db9ca063b79e3a1722_Frame_1707483178.webp"
                alt="Why Choose 01"
                className="box-border caret-transparent inline-block h-full max-w-full object-cover w-full"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute text-white text-[11px] bottom-[-47px] box-border caret-transparent h-10 z-[5] m-auto pt-2.5 inset-x-0 md:text-sm md:z-[2] md:bottom-0">
        <div
          aria-label="Show slide 1 of 4"
          role="button"
          className="relative text-[11px] bg-neutral-800 box-border caret-transparent inline-block h-[11px] w-[11px] mb-[5.5px] mx-[3px] rounded-[100%] md:text-sm md:h-3.5 md:w-3.5 md:mb-[7px]"
        ></div>
        <div
          aria-label="Show slide 2 of 4"
          role="button"
          className="relative text-[11px] bg-neutral-800/40 box-border caret-transparent inline-block h-[11px] w-[11px] mb-[5.5px] mx-[3px] rounded-[100%] md:text-sm md:h-3.5 md:w-3.5 md:mb-[7px]"
        ></div>
        <div
          aria-label="Show slide 3 of 4"
          role="button"
          className="relative text-[11px] bg-neutral-800/40 box-border caret-transparent inline-block h-[11px] w-[11px] mb-[5.5px] mx-[3px] rounded-[100%] md:text-sm md:h-3.5 md:w-3.5 md:mb-[7px]"
        ></div>
        <div
          aria-label="Show slide 4 of 4"
          role="button"
          className="relative text-[11px] bg-neutral-800/40 box-border caret-transparent inline-block h-[11px] w-[11px] mb-[5.5px] mx-[3px] rounded-[100%] md:text-sm md:h-3.5 md:w-3.5 md:mb-[7px]"
        ></div>
      </div>
    </div>
  );
};
