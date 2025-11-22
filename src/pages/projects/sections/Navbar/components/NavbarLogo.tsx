import { Link } from "react-router-dom";

export const NavbarLogo = () => {
  return (
    <Link
      to="/"
      aria-label="home"
      className="relative text-zinc-800 box-border caret-transparent block float-left justify-self-start mr-auto hover:decoration-transparent"
    >
      <img
        src="https://c.animaapp.com/mhoZXGO8nLxn9A/assets/67a317271f522bf735b96b50_roofinger.svg"
        alt="Roofinger logo"
        className="box-border caret-transparent inline-block h-[26px] max-w-full w-[132px] md:h-9"
      />
    </Link>
  );
};

