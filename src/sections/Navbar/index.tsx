import { NavbarContainer } from "@/sections/Navbar/components/NavbarContainer";

export const Navbar = () => {
  return (
    <div className="fixed backdrop-blur-sm bg-white box-border caret-transparent flex justify-center w-full z-[100] px-5 py-4 top-0 md:px-8 md:py-6">
      <NavbarContainer />
    </div>
  );
};
