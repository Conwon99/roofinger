import { TestimonialsCarousel } from "@/sections/TestimonialsSection/components/TestimonialsCarousel";

export const TestimonialsSection = () => {
  return (
    <section className="box-border caret-transparent overflow-hidden py-[60px] md:overflow-visible md:py-[100px]">
      <div className="box-border caret-transparent h-auto md:h-[2000px]">
        <div className="static box-border caret-transparent flex flex-col overflow-visible top-[75px] md:sticky md:overflow-hidden">
          <div className="box-border caret-transparent">
            <div className="box-border caret-transparent max-w-[1204px] mx-auto px-5 md:px-8">
              <div className="box-border caret-transparent">
                <div className="items-start box-border caret-transparent gap-x-7 flex flex-col justify-between gap-y-7 md:items-end md:gap-x-10 md:flex-row md:gap-y-10">
                  <div className="items-start box-border caret-transparent gap-x-4 flex blur-0 flex-col max-w-none gap-y-4 md:max-w-[555px]">
                    <div className="box-border caret-transparent border border-neutral-200 px-3 py-1 rounded-[1000px] border-solid">
                      <div className="font-medium box-border caret-transparent leading-[22px]">
                        Testimonials
                      </div>
                    </div>
                    <h2 className="text-3xl font-medium box-border caret-transparent tracking-[-0.52px] leading-[35px] md:text-[52px] md:leading-[62px]">
                      Stories That Prove Why Our{" "}
                      <span className="text-3xl italic box-border caret-transparent leading-[35px] font-playfair_display md:text-[52px] md:leading-[62px]">
                        Work Matters
                      </span>
                    </h2>
                  </div>
                  <div className="box-border caret-transparent blur-0 max-w-none md:max-w-[360px]">
                    <div className="text-gray-700 box-border caret-transparent">
                      <div className="text-[15px] box-border caret-transparent leading-6 md:text-base">
                        We’re a trusted part of our patients’ lives. Their
                        stories reflect our commitment to compassionate care.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="box-border caret-transparent">
                  <TestimonialsCarousel />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
