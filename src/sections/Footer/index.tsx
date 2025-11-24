import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <section className="text-white bg-cyan-950 box-border caret-transparent pt-[60px] pb-7 md:pt-[100px] md:pb-10">
      <div className="box-border caret-transparent max-w-[1204px] mx-auto px-5 md:px-8">
        <div className="box-border caret-transparent gap-x-6 flex flex-wrap justify-between gap-y-6 md:gap-x-8 md:gap-y-8">
          <div className="box-border caret-transparent flex flex-col gap-y-4">
            <div className="text-white text-lg font-semibold box-border caret-transparent mb-2">
              GN Roofing & Scaffolding Services
            </div>
            <p className="text-white/80 text-sm box-border caret-transparent max-w-xs">
              Family-run, fully-insured roofing and scaffolding specialists serving Ayrshire and surrounding areas.
            </p>
            <div className="box-border caret-transparent flex gap-x-4 mt-4">
              <a
                href="https://www.facebook.com/garynixonrooofing"
                target="_blank"
                rel="noopener noreferrer"
                className="items-center bg-white/10 box-border caret-transparent flex h-10 justify-center w-10 rounded-[50%] hover:bg-white/20 transition-colors"
                aria-label="Facebook"
              >
                <svg
                  className="box-border caret-transparent h-5 w-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>
          <div className="box-border caret-transparent flex flex-col gap-y-3">
            <div className="text-white text-base font-semibold box-border caret-transparent mb-2">
              Quick Links
            </div>
            <Link to="/" className="text-white/80 text-sm box-border caret-transparent hover:text-white hover:decoration-transparent">
              Home
            </Link>
            <Link to="/about" className="text-white/80 text-sm box-border caret-transparent hover:text-white hover:decoration-transparent">
              About
            </Link>
            <Link to="/services" className="text-white/80 text-sm box-border caret-transparent hover:text-white hover:decoration-transparent">
              Services
            </Link>
            <Link to="/projects" className="text-white/80 text-sm box-border caret-transparent hover:text-white hover:decoration-transparent">
              Projects
            </Link>
            <Link to="/contact" className="text-white/80 text-sm box-border caret-transparent hover:text-white hover:decoration-transparent">
              Contact
            </Link>
          </div>
          <div className="box-border caret-transparent flex flex-col gap-y-3">
            <div className="text-white text-base font-semibold box-border caret-transparent mb-2">
              Contact Us
            </div>
            <a href="tel:07710981903" className="text-white/80 text-sm box-border caret-transparent hover:text-white hover:decoration-transparent">
              07710 981903
            </a>
            <a href="mailto:garynixon2@gmail.com" className="text-white/80 text-sm box-border caret-transparent hover:text-white hover:decoration-transparent">
              garynixon2@gmail.com
            </a>
            <div className="text-white/80 text-sm box-border caret-transparent mt-2">
              Serving Ayrshire & Surrounding Areas, Scotland
            </div>
          </div>
        </div>
        <div className="box-border caret-transparent border-t border-white/20 mt-10 pt-6 text-center">
          <p className="text-white/60 text-sm box-border caret-transparent">
            © {new Date().getFullYear()} GN Roofing & Scaffolding services LTD. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};
