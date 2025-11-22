import { NavbarContainer } from "@/sections/Navbar/components/NavbarContainer";

export const Navbar = () => {
  return (
    <div className="fixed backdrop-blur-sm bg-neutral-950/10 box-border caret-transparent flex justify-center w-full z-[100] px-5 py-4 top-0 md:px-8">
      <NavbarContainer />
    </div>
  );
};
