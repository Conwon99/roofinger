import { Badge } from "@/components/Badge";

export const ExperienceImage = () => {
  return (
    <div className="relative self-start box-border caret-transparent overflow-hidden rounded-[20px]">
      <img
        src="/about-us-portrait.jpg"
        alt="About Image"
        className="box-border caret-transparent inline-block h-full max-w-full object-cover w-full scale-[1.03587px] md:scale-[1.03477px]"
      />
      <Badge />
    </div>
  );
};
