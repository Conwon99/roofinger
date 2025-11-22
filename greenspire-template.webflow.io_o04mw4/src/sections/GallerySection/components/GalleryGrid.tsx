export const GalleryGrid = () => {
  return (
    <div className="box-border caret-transparent gap-x-[18px] grid auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] gap-y-[18px] mt-10 md:gap-x-5 md:grid-cols-[1fr_1fr_1fr] md:gap-y-5 md:mt-14">
      <div className="relative box-border caret-transparent blur-0 col-end-[span_1] col-start-[span_1] row-end-[span_1] row-start-[span_1] h-[400px] overflow-hidden rounded-lg md:row-end-[span_2] md:row-start-[span_2] md:h-auto md:rounded-xl">
        <img
          src="https://c.animaapp.com/mhnzg6knJo6lE7/assets/689be7cda5c20067dc918b39_untitled-design-10_1.webp"
          sizes="100vw"
          alt="Gallery 03"
          className="box-border caret-transparent inline-block h-full max-w-full object-cover w-full scale-[1.1px]"
        />
      </div>
      <div className="relative box-border caret-transparent blur-0 h-[277px] overflow-hidden rounded-lg md:rounded-xl">
        <img
          src="https://c.animaapp.com/mhnzg6knJo6lE7/assets/689be7cdfed4b7aafcb5ff59_flowering-plants-garden_1.webp"
          sizes="100vw"
          alt="Gallery 02"
          className="box-border caret-transparent inline-block h-full max-w-full object-cover w-full scale-[1.1px]"
        />
      </div>
      <div className="relative box-border caret-transparent blur-0 h-[277px] overflow-hidden rounded-lg md:rounded-xl">
        <img
          src="https://c.animaapp.com/mhnzg6knJo6lE7/assets/689be7cd8c3e10dd212c074c_garden-with-bench-flowers-bench_1.webp"
          sizes="100vw"
          alt="Gallery 01"
          className="box-border caret-transparent inline-block h-full max-w-full object-cover w-full scale-[1.1px]"
        />
      </div>
      <div className="relative box-border caret-transparent blur-0 col-end-[span_1] col-start-[span_1] row-end-[span_1] row-start-[span_1] h-[277px] overflow-hidden rounded-lg md:col-end-[span_2] md:col-start-[span_2] md:rounded-xl">
        <img
          src="https://c.animaapp.com/mhnzg6knJo6lE7/assets/689be7cd867c2dca769bf19c_flowering-plants-garden_1-1.webp"
          sizes="100vw"
          alt="Gallery 04"
          className="box-border caret-transparent inline-block h-full max-w-full object-cover w-full scale-[1.1px]"
        />
      </div>
    </div>
  );
};
