export const PhoneLink = () => {
  return (
    <a
      href="tel:07710981903"
      className="text-white items-center box-border caret-transparent gap-x-2.5 flex justify-start max-w-full gap-y-2.5 hover:text-yellow-500 hover:decoration-transparent hover:border-yellow-500"
    >
      <img
        src="https://c.animaapp.com/mhooxuovKXaEfR/assets/670f86de88858acaf330ddd9_phone.svg"
        alt=""
        className="box-border caret-transparent h-6 max-w-full w-6"
      />
      <div className="box-border caret-transparent">+1 (555) 123-4567</div>
    </a>
  );
};
