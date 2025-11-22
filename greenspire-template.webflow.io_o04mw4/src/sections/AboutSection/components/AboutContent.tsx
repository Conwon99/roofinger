import { AboutStats } from "@/sections/AboutSection/components/AboutStats";

export const AboutContent = () => {
  return (
    <div className="box-border caret-transparent">
      <div className="box-border caret-transparent gap-x-7 flex blur-0 flex-col justify-between gap-y-7 md:gap-x-10 md:flex-row md:gap-y-10">
        <div className="box-border caret-transparent">
          <div className="font-medium box-border caret-transparent leading-[22px]">
            About Us
          </div>
        </div>
        <div className="box-border caret-transparent gap-x-[18px] flex flex-col max-w-[842px] gap-y-[18px] md:gap-x-5 md:gap-y-5">
          <div className="text-[22px] font-medium box-border caret-transparent leading-[30px] md:text-[28px] md:leading-9">
            At{" "}
            <span className="text-[22px] italic box-border caret-transparent leading-[30px] font-playfair_display md:text-[28px] md:leading-9">
              Greenspire{" "}
            </span>
            we’ve been turning ordinary yards into thriving landscapes since
            2015, with 1,200+ completed projects.{" "}
            <span className="text-neutral-400 text-[22px] box-border caret-transparent leading-[30px] md:text-[28px] md:leading-9">
              We take pride in delivering tailored solutions that match your
              space, style, and schedule.
            </span>
          </div>
          <div className="text-[15px] box-border caret-transparent leading-6 md:text-base">
            Every successful outdoor transformation begins with a thoughtful
            conversation. During this first stage, our team takes the time to
            understand your goals, preferences, and pain points — whether you’re
            struggling with uneven growth, overgrown hedges, patchy turf, or a
            garden that simply needs a fresh start.
          </div>
        </div>
      </div>
      <AboutStats />
    </div>
  );
};
