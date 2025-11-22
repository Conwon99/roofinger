import { Link } from "react-router-dom";

export const NavActions = () => {
  return (
    <div className="items-center box-border caret-transparent flex basis-auto grow-0 shrink-0 justify-end justify-self-end md:basis-[0%] md:grow md:shrink md:mr-0 md:ml-auto">
      <div className="items-center box-border caret-transparent gap-x-1 hidden min-h-0 min-w-0 gap-y-1 md:flex md:min-h-[auto] md:min-w-[auto] md:gap-x-3">
        <a
          href="tel:07710981903"
          className="text-white items-center box-border caret-transparent gap-x-2.5 flex justify-start max-w-full gap-y-2.5 mr-2 whitespace-nowrap hover:text-yellow-500 hover:decoration-transparent hover:border-yellow-500"
        >
          <img
            src="https://c.animaapp.com/mhooxuovKXaEfR/assets/670f86de88858acaf330ddd9_phone.svg"
            alt=""
            className="box-border caret-transparent h-6 max-w-full w-6"
          />
          <div className="box-border caret-transparent text-sm font-medium md:text-base">07710 981903</div>
        </a>
        <div className="box-border caret-transparent min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]">
          <div className="box-border caret-transparent flex">
            <Link
              to="/contact"
              className="text-gray-900 items-center bg-yellow-500 box-border caret-transparent gap-x-3 flex max-w-full min-h-0 min-w-0 gap-y-3 text-center border px-4 py-2 rounded-[100px] border-solid border-transparent md:min-h-[auto] md:min-w-[auto] hover:bg-white hover:border-yellow-600"
            >
              <div className="relative box-border caret-transparent min-h-0 min-w-0 overflow-hidden md:min-h-[auto] md:min-w-[auto]">
                <div className="box-border caret-transparent">
                  <div className="relative text-sm font-medium box-border caret-transparent leading-5 z-[2] md:text-base md:leading-6">
                    Get a free estimate
                  </div>
                </div>
                <div className="absolute box-border caret-transparent w-full">
                  <div className="relative text-sm font-medium box-border caret-transparent leading-5 z-[2] md:text-base md:leading-6">
                    Get a free estimate
                  </div>
                </div>
              </div>
              <div className="box-border caret-transparent min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]">
                <div className="items-center box-border caret-transparent flex h-4 justify-center w-4 before:accent-auto before:caret-transparent before:text-gray-900 before:table before:text-sm before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-5 before:list-outside before:list-disc before:min-h-0 before:min-w-0 before:pointer-events-auto before:text-center before:indent-[0px] before:normal-case before:visible before:border-separate before:font-geist before:md:min-h-[auto] before:md:min-w-[auto] after:accent-auto after:caret-transparent after:clear-both after:text-gray-900 after:table after:text-sm after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-5 after:list-outside after:list-disc after:min-h-0 after:min-w-0 after:pointer-events-auto after:text-center after:indent-[0px] after:normal-case after:visible after:border-separate after:font-geist after:md:min-h-[auto] after:md:min-w-[auto]">
                  <img
                    src="https://c.animaapp.com/mhnzg6knJo6lE7/assets/icon-2.svg"
                    alt="Icon"
                    className="box-border caret-transparent h-2 w-3"
                  />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div
        aria-label="menu"
        role="button"
        className="relative text-white text-2xl box-border caret-transparent block float-right min-h-[auto] min-w-[auto] p-3 md:text-emerald-950 md:hidden md:min-h-0 md:min-w-0 md:p-[18px]"
      >
        <div className="text-white box-border caret-transparent invert-[1] w-6 md:text-emerald-950 md:w-[30px]">
          <img
            src="https://c.animaapp.com/mhnzg6knJo6lE7/assets/icon-3.svg"
            alt="Icon"
            className="text-white box-border caret-transparent h-full w-full md:text-emerald-950"
          />
        </div>
      </div>
    </div>
  );
};

