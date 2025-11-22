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
        <div className="box-border caret-transparent">4.9/5 ratings</div>
        <img
          src="https://c.animaapp.com/mhooxuovKXaEfR/assets/676a53ca4f4b1c3ac340da1c_star-01.svg"
          alt="Hover Icon"
          className="box-border caret-transparent inline-block h-[30px] max-w-full w-full mt-2.5"
        />
      </div>
    </div>
  );
};
