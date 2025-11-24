import { ReviewCard } from "@/sections/ReviewsSection/components/ReviewCard";

export const ReviewsSection = () => {
  return (
    <section className="box-border caret-transparent py-[70px] md:py-[140px]">
      <div className="box-border caret-transparent max-w-[1540px] mx-auto px-[15px] md:px-[30px] before:accent-auto before:caret-transparent before:text-neutral-600 before:table before:text-lg before:not-italic before:normal-nums before:font-medium before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-[27px] before:list-outside before:list-disc before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-manrope after:accent-auto after:caret-transparent after:clear-both after:text-neutral-600 after:table after:text-lg after:not-italic after:normal-nums after:font-medium after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-[27px] after:list-outside after:list-disc after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-manrope">
        <div className="box-border caret-transparent text-center mb-[30px] md:mb-[50px]">
          <h2 className="text-gray-900 text-4xl font-bold box-border caret-transparent leading-[43.2px] md:text-[56px] md:leading-[67.2px]">
            What Our Customers Say
          </h2>
        </div>
        <div className="box-border caret-transparent gap-x-[30px] grid auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] gap-y-[30px] md:grid-cols-[1fr_1fr] md:gap-y-[30px] lg:grid-cols-[1fr_1fr_1fr_1fr]">
          <ReviewCard
            author="Customer Review"
            text="Came and fixed a problem some other roofing company's couldn't, neat&tidy job!"
            isRecommendation={false}
          />
          <ReviewCard
            author="Ryan Jeffries"
            text="GN Roofing and scaffolding services went over and beyond to provide us 5 star service. Our roof looks brand new after demossing the front and back. Couldn't recommend their service enough and will be using them in the future. Thanks 👍"
            isRecommendation={true}
          />
          <ReviewCard
            author="Alan Miller"
            text="Have used Gary a few times now and you will not be disappointed, first class service, on time, very tidy and workmanship second to none, top guy"
            isRecommendation={true}
          />
          <ReviewCard
            author="Georgina Kane"
            text="I have used this company to build and dismantle scaffolding for me. All I can say is they provide a fast and effective service. Highly skilled and reliable. I Defo would recommend and use again in the future."
            isRecommendation={true}
          />
        </div>
      </div>
    </section>
  );
};


