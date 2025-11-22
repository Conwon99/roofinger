export type FeatureCardProps = {
  iconSrc: string;
  title: string;
  description: string;
  variant: string;
  iconVariant: string;
};

export const FeatureCard = (props: FeatureCardProps) => {
  return (
    <div
      className={`bg-neutral-100 box-border caret-transparent gap-x-4 flex basis-[0%] flex-col grow justify-between max-w-none gap-y-4 p-6 rounded-lg md:max-w-xs md:p-7 ${props.variant}`}
    >
      <div
        className={`text-cyan-950 items-center bg-white box-border caret-transparent flex h-10 justify-center w-10 overflow-hidden rounded-[50%] md:h-12 md:w-12 ${props.variant}`}
      >
        <div
          className={`items-center box-border caret-transparent flex h-5 justify-center w-5 before:accent-auto before:caret-transparent before:text-cyan-950 before:table before:text-sm before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-5 before:list-outside before:list-disc before:pointer-events-auto before:text-left before:indent-[0px] before:normal-case before:visible before:border-separate before:font-geist after:accent-auto after:caret-transparent after:clear-both after:text-cyan-950 after:table after:text-sm after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-5 after:list-outside after:list-disc after:pointer-events-auto after:text-left after:indent-[0px] after:normal-case after:visible after:border-separate after:font-geist ${props.iconVariant}`}
        >
          <img
            src={props.iconSrc}
            alt="Icon"
            className="box-border caret-transparent h-full w-full"
          />
        </div>
      </div>
      <div
        className={`box-border caret-transparent gap-x-2 flex flex-col gap-y-2 ${props.variant}`}
      >
        <div
          className={`text-xl font-medium box-border caret-transparent leading-6 md:text-2xl md:leading-8 ${props.variant}`}
        >
          {props.title}
        </div>
        <div
          className={`text-gray-700 box-border caret-transparent ${props.variant}`}
        >
          <div className="text-[15px] box-border caret-transparent leading-6 md:text-base">
            {props.description}
          </div>
        </div>
      </div>
    </div>
  );
};
