import { Link } from "react-router-dom";
import { ServiceCard } from "@/sections/ServicesSection/components/ServiceCard";

export const ServicesSection = () => {
  return (
    <section className="box-border caret-transparent pt-[70px] md:pt-[140px]">
      <div className="box-border caret-transparent max-w-[1200px] mx-auto px-[15px] md:px-[30px] before:accent-auto before:caret-transparent before:text-neutral-600 before:table before:text-lg before:not-italic before:normal-nums before:font-medium before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-[27px] before:list-outside before:list-disc before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-manrope after:accent-auto after:caret-transparent after:clear-both after:text-neutral-600 after:table after:text-lg after:not-italic after:normal-nums after:font-medium after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-[27px] after:list-outside after:list-disc after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-manrope">
        <div className="box-border caret-transparent text-center mb-[30px] md:mb-[50px]">
          <h2 className="text-gray-900 text-4xl font-bold box-border caret-transparent leading-[43.2px] md:text-[56px] md:leading-[67.2px]">
            Our Services
          </h2>
        </div>
        <div className="box-border caret-transparent gap-x-[30px] grid auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] gap-y-[30px] md:grid-cols-[1fr_1fr_1fr_1fr]">
          <ServiceCard
            href="/service/roof-installations"
            iconUrl="https://c.animaapp.com/mhqqhnhjBr0jWt/assets/670f922acd8bf79374aa2c10_service-01.svg"
            iconAlt="Service Icon"
            title="New Roof Installations"
            description="High-quality and durable roofing solutions for residential and commercial properties, providing long-lasting protection and aesthetic appeal. Includes a 20-year guarantee."
          />
          <ServiceCard
            href="/service/roof-repairs"
            iconUrl="https://c.animaapp.com/mial13ktyN5Jkh/assets/670f922a6c5c1d8102612221_service-02.svg"
            iconAlt="Service Icon"
            title="Roof Repairs"
            description="Prompt and reliable roof repair services to fix leaks, damage, and wear, extending the life of your roof and maintaining its integrity."
          />
          <ServiceCard
            href="/service/roof-inspections"
            iconUrl="https://c.animaapp.com/mial13ktyN5Jkh/assets/670f922a0e27a271e441091e_service-03.svg"
            iconAlt="Service Icon"
            title="Roof Inspections"
            description="Comprehensive inspections to identify potential issues early, ensuring your roof remains safe, durable, and up to code."
          />
          <ServiceCard
            href="/service/gutter-installations"
            iconUrl="https://c.animaapp.com/mial13ktyN5Jkh/assets/670f922ca00205c2937593ea_service-04.svg"
            iconAlt="Service Icon"
            title="Gutter Installations"
            description="Durable and efficient gutter systems are designed to protect your home by directing water away from the roof and foundation."
          />
        </div>
        <div className="box-border caret-transparent text-center mt-[40px] mx-auto md:mt-[60px]">
          <Link
            to="/services"
            className="text-gray-900 text-sm font-bold bg-yellow-500 box-border caret-transparent inline-block leading-[19.6px] border border-yellow-500 px-5 py-2 rounded-[50px] border-solid md:text-lg md:leading-[25.2px] md:px-[30px] md:py-3 hover:text-white hover:bg-gray-900 hover:border-gray-900 hover:decoration-transparent"
          >
            View more services
          </Link>
        </div>
      </div>
    </section>
  );
};
