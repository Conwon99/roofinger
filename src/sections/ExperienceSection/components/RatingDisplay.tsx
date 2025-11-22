export const RatingDisplay = () => {
  return (
    <div className="text-gray-900 items-start box-border caret-transparent gap-x-2.5 flex flex-col justify-start gap-y-2.5 mb-5 md:items-center md:gap-x-[30px] md:flex-row md:gap-y-[30px] md:mb-[50px]">
      <div className="box-border caret-transparent">
        <img
          src="https://c.animaapp.com/mhooxuovKXaEfR/assets/670f8dc8c0ba7d9b8ac89b96_avatar-02.avif"
          alt="Avatar Image"
          className="box-border caret-transparent inline-block h-[50px] max-w-full w-[50px] rounded-[50%] md:h-20 md:w-20"
        />
        <img
          src="https://c.animaapp.com/mhooxuovKXaEfR/assets/670f8dc8937c24dab0e92bc3_avatar-01.avif"
          alt="Avatar Image"
          className="box-border caret-transparent inline-block h-[50px] ml-[-15px] max-w-full w-[50px] rounded-[50%] md:h-20 md:ml-[-30px] md:w-20"
        />
        <img
          src="https://c.animaapp.com/mhooxuovKXaEfR/assets/670f8dc8b234a105e6acd6d3_avatar-03.avif"
          alt="Avatar Image"
          className="box-border caret-transparent inline-block h-[50px] ml-[-15px] max-w-full w-[50px] rounded-[50%] md:h-20 md:ml-[-30px] md:w-20"
        />
      </div>
      <div className="box-border caret-transparent">
        <div className="box-border caret-transparent">5/5 ratings</div>
        <div className="box-border caret-transparent flex items-center gap-x-1 mt-2.5">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className="box-border caret-transparent h-5 w-5 text-yellow-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
      </div>
    </div>
  );
};
