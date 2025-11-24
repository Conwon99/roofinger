import { ContactCard } from "@/pages/contact/sections/HeroSection/components/ContactCard";

export const ContactInfoCards = () => {
  return (
    <div className="box-border caret-transparent gap-x-5 grid auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] gap-y-5 mb-10 md:gap-x-[50px] md:grid-cols-[1fr_1fr_1fr] md:gap-y-[50px] md:mb-[70px]">
      <ContactCard
        variant="bg-yellow-500"
        iconSrc="https://c.animaapp.com/mhqqiiyn5JzZir/assets/67a43fa6cdc6190922f4a6ed_location-dark.svg"
        iconAlt="Location dark"
        title="Visit our location"
        content="Serving Ayrshire & Surrounding Areas, Scotland"
      />
      <ContactCard
        variant="bg-gray-900"
        iconSrc="https://c.animaapp.com/mhqqiiyn5JzZir/assets/67108bda6761bcf051e210eb_envelope.svg"
        iconAlt=""
        title="Email support"
        titleClassName="text-white text-xl font-bold box-border caret-transparent leading-6 mb-2.5 md:text-2xl md:leading-[28.8px]"
        content="garynixon2@gmail.com"
        contentClassName="text-white box-border caret-transparent block underline hover:text-neutral-600 hover:decoration-transparent hover:border-neutral-600"
        isLink={true}
        linkHref="mailto:garynixon2@gmail.com"
      />
      <ContactCard
        variant="bg-slate-200"
        iconSrc="https://c.animaapp.com/mhqqiiyn5JzZir/assets/67a4386d06c59bfc5ccc1f63_phone-dark.svg"
        iconAlt="Phone dark"
        title="Talk to us directly"
        content="07710 981903"
        contentClassName="box-border caret-transparent block underline hover:text-yellow-500 hover:decoration-transparent hover:border-yellow-500"
        isLink={true}
        linkHref="tel:07710981903"
      />
    </div>
  );
};

