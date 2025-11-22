import { ServiceCard } from "@/sections/ServicesSection/components/ServiceCard";

export const ServicesGrid = () => {
  return (
    <div className="box-border caret-transparent gap-x-4 grid auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto_auto] gap-y-4 mt-10 mb-7 md:flex md:auto-cols-auto md:grid-cols-none md:grid-rows-none md:mt-14 md:mb-10">
      <ServiceCard
        imageUrl="https://c.animaapp.com/mhnzg6knJo6lE7/assets/689be7a4efd6b86fbd09a288_young-man-safety-mask-gloves-shaping-bushes_1.webp"
        imageAlt="Service Image 03"
        iconUrl="https://c.animaapp.com/mhnzg6knJo6lE7/assets/icon-9.svg"
        title="Fertilization & Weed Control"
        description="We've been turning ordinary yards into thriving, beautiful landscapes since 2015."
        linkHref="/service"
        linkText="See Details"
        arrowIconUrl="https://c.animaapp.com/mhnzg6knJo6lE7/assets/icon-2.svg"
        variant="md:w-[24%]"
      />
      <ServiceCard
        imageUrl="https://c.animaapp.com/mhnzg6knJo6lE7/assets/689be7a4943731ac2b54af99_worker-is-cutting-grass-with-hose_1.webp"
        imageAlt="Service Image 02"
        iconUrl="https://c.animaapp.com/mhnzg6knJo6lE7/assets/icon-10.svg"
        title="Lawn Mowing"
        description="We’ve been turning ordinary yards into thriving, beautiful landscapes since 2015."
        linkHref="/service"
        linkText="See Details"
        arrowIconUrl="https://c.animaapp.com/mhnzg6knJo6lE7/assets/icon-2.svg"
        variant="md:w-[24%]"
      />
      <ServiceCard
        imageUrl="https://c.animaapp.com/mhnzg6knJo6lE7/assets/689be7a45a6d9a817a36a223_young-man-safety-mask-gloves-shaping-bushes_2.webp"
        imageAlt="Service Image 01"
        iconUrl="https://c.animaapp.com/mhnzg6knJo6lE7/assets/icon-9.svg"
        title="Hedge Trimming"
        description="We’ve been turning ordinary yards into thriving, beautiful landscapes since 2015."
        linkHref="/service"
        linkText="See Details"
        arrowIconUrl="https://c.animaapp.com/mhnzg6knJo6lE7/assets/icon-2.svg"
        variant="md:w-[24%]"
      />
    </div>
  );
};
