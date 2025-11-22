import { RatingDisplay } from "@/sections/ExperienceSection/components/RatingDisplay";

export const ExperienceContent = () => {
  return (
    <div className="box-border caret-transparent gap-x-[30px] flex flex-col justify-between gap-y-[30px] md:gap-x-[50px] md:gap-y-[50px]">
      <div className="box-border caret-transparent">
        <h2 className="text-gray-900 text-4xl font-bold box-border caret-transparent leading-[43.2px] mb-2.5 md:text-[56px] md:leading-[67.2px]">
          Years of industry experience
        </h2>
        <p className="box-border caret-transparent mt-2.5 mb-5 md:mt-5 md:mb-[50px]">
          With a team of qualified professionals, we offer a comprehensive range of roofing and scaffolding services throughout Ayrshire. From roof repairs and new installations to fascias, soffits, guttering and scaffolding, we tailor our services to meet your needs. All new roofs come with a 20-year guarantee and include free scaffolding.
        </p>
        <a
          href="/about"
          className="text-yellow-500 text-sm bg-gray-900 box-border caret-transparent inline-block leading-[19.6px] text-center border border-gray-900 px-5 py-2 rounded-[50px] border-solid md:text-lg md:leading-[25.2px] md:px-[30px] md:py-3 hover:text-gray-900 hover:bg-yellow-500 hover:decoration-transparent"
        >
          More about us
        </a>
      </div>
      <div className="box-border caret-transparent mt-8 md:mt-10">
        <RatingDisplay />
        <div className="box-border caret-transparent mt-5 md:mt-5 p-4 bg-slate-100 rounded-lg md:p-5">
          <p className="text-gray-700 text-base italic box-border caret-transparent leading-6 md:text-lg md:leading-7">
            "Have used Gary a few times now and you will not be disappointed, first class service, on time, very tidy and workmanship second to none, top guy"
          </p>
          <p className="text-gray-900 text-sm font-semibold box-border caret-transparent mt-3 md:text-base">
            - Alan Miller
          </p>
        </div>
        <p className="box-border caret-transparent mt-5 md:mt-5">
          We deliver reliable roofing and scaffolding solutions backed by professional expertise, ensuring top-quality results with British Standard approved materials. Fully insured and committed to customer satisfaction.
        </p>
      </div>
    </div>
  );
};
