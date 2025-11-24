import { Link } from "react-router-dom";

export const Logo = () => {
  return (
    <div className="box-border caret-transparent ml-0 md:ml-8">
      <Link
        to="/"
      aria-label="home"
        className="relative text-gray-900 box-border caret-transparent block h-10 max-h-10 overflow-hidden md:h-14 md:max-h-14"
      >
        <img
          src="/logo.png"
          alt="GN Roofing & Scaffolding Logo"
          className="box-border caret-transparent inline-block h-full max-w-full object-contain"
        />
      </Link>
    </div>
  );
};
