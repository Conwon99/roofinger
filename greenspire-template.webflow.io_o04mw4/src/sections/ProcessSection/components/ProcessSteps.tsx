import { ProcessCard } from "@/sections/ProcessSection/components/ProcessCard";

export const ProcessSteps = () => {
  return (
    <div className="box-border caret-transparent gap-x-[18px] flex flex-col max-w-[752px] gap-y-[18px] md:gap-x-5 md:gap-y-5">
      <ProcessCard
        imageUrl="https://c.animaapp.com/mhnzg6knJo6lE7/assets/689ceb404059bc07faa1156d_Process_(4).webp"
        imageAlt="Process 04"
        title="01. Discover & Diagnose"
        description="We start by understanding your needs and evaluating your outdoor space through a free consultation in-person or virtual."
      />
      <ProcessCard
        imageUrl="https://c.animaapp.com/mhnzg6knJo6lE7/assets/689ceaeabc9c3fa0a1c3b23a_man-installing-grass-turfs-inside-backyard-garden_1.webp"
        imageAlt="Process 01"
        title="02. Tailored Planning"
        description="Based on your goals and property, we create a customized service plan that fits your schedule, preferences garden type."
      />
      <ProcessCard
        imageUrl="https://c.animaapp.com/mhnzg6knJo6lE7/assets/689ceaea4a0e5dd46c3b3976_road-landscapers-uniform-cutting-grass-park-using-lawn-mower_(1)_1.webp"
        imageAlt="Process 02"
        title="03. Professional Execution"
        description="Our experienced team arrives on time with the right tools to deliver expert care — from mowing to planting and more."
      />
      <ProcessCard
        imageUrl="https://c.animaapp.com/mhnzg6knJo6lE7/assets/689ceaebe08a5ab992ba28f6_digital-tablet-is-hands-professional-gardener-is-lawn_1.webp"
        imageAlt="Process 03"
        title="04. Support & Maintenance"
        description="We don’t stop after the first visit. We offer regular maintenance, seasonal care, and check-ins to keep your garden thriving year-round."
      />
    </div>
  );
};
