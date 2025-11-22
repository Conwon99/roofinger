import { TestimonialCard } from "@/sections/TestimonialsSection/components/TestimonialCard";

export const TestimonialsCarousel = () => {
  return (
    <div
      role="region"
      aria-label="carousel"
      className="relative bg-transparent box-border caret-transparent clear-both blur-0 opacity-100 text-center transform-none mt-20 md:opacity-0 md:translate-y-[10.0%] md:mt-[60px]"
    >
      <div className="relative box-border caret-transparent h-full max-w-[440px] text-nowrap z-[1] inset-x-0">
        <TestimonialCard
          ariaLabel="1 of 3"
          imageUrl="https://c.animaapp.com/mhnzg6knJo6lE7/assets/689be7b1e59289b18b36117d_man-casual-suit-standing-countryside-setting_1.webp"
          imageAlt="Team Member 03"
          iconUrl="https://c.animaapp.com/mhnzg6knJo6lE7/assets/icon-15.svg"
          testimonialText='"They trimmed all the hedges around my house with precision and cleaned up everything afterward.'
          authorName="Daniel Harper"
        />
        <TestimonialCard
          ariaLabel="2 of 3"
          imageUrl="https://c.animaapp.com/mhnzg6knJo6lE7/assets/689be7b111fbac9a5c6a7f1e_elegant-young-fashion-man-suit-portrait-businessman-jacket_1.webp"
          imageAlt="Team Member 01"
          iconUrl="https://c.animaapp.com/mhnzg6knJo6lE7/assets/icon-16.svg"
          testimonialText="I use their seasonal cleanup service every few months, and they never disappoint. They leave my yard spotless."
          authorName="Srihas Kapoor"
        />
        <TestimonialCard
          ariaLabel="3 of 3"
          imageUrl="https://c.animaapp.com/mhnzg6knJo6lE7/assets/689be7b1327a6090847f798d_portrait-confident-young-businessman-with-his-arms-crossed_1.webp"
          imageAlt="Team Member 02"
          iconUrl="https://c.animaapp.com/mhnzg6knJo6lE7/assets/icon-16.svg"
          testimonialText="I didn’t know what plants to choose or where to start. Their design team helped me pick the right layout and flowers."
          authorName="Michael Reyes"
        />
      </div>
      <div className="absolute text-white text-[11px] bottom-[-47px] box-border caret-transparent h-10 z-[5] m-auto pt-2.5 inset-x-0 md:text-sm md:z-[2] md:bottom-0">
        <div
          aria-label="Show slide 1 of 3"
          role="button"
          className="relative text-[11px] bg-neutral-800 box-border caret-transparent inline-block h-[11px] w-[11px] mb-[5.5px] mx-[3px] rounded-[100%] md:text-sm md:h-3.5 md:w-3.5 md:mb-[7px]"
        ></div>
        <div
          aria-label="Show slide 2 of 3"
          role="button"
          className="relative text-[11px] bg-neutral-800/40 box-border caret-transparent inline-block h-[11px] w-[11px] mb-[5.5px] mx-[3px] rounded-[100%] md:text-sm md:h-3.5 md:w-3.5 md:mb-[7px]"
        ></div>
        <div
          aria-label="Show slide 3 of 3"
          role="button"
          className="relative text-[11px] bg-neutral-800/40 box-border caret-transparent inline-block h-[11px] w-[11px] mb-[5.5px] mx-[3px] rounded-[100%] md:text-sm md:h-3.5 md:w-3.5 md:mb-[7px]"
        ></div>
      </div>
    </div>
  );
};
