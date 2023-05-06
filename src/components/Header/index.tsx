import BurgerIcon from "components/Icons/Burger";
import LogoIcon from "components/Icons/Logo";
import { useState } from "react";

const NAV_MENU = [
  {
    title: "Who We Are",
    nav: "#about",
  },
  {
    title: "Our Values",
    nav: "#values",
  },
  {
    title: "The Perks",
    nav: "#speciality",
  },
];

const Header = () => {
  const [nav, setNav] = useState(false);
  
  return (
    <header className="flex justify-between items-center h-[60px] bg-white px-8">
      <LogoIcon primary="#4097DB" secondary="#1C4B70" />
      <div className="relative">
        <BurgerIcon />
        {/* <div className="flex flex-col absolute z-20 whitespace-nowrap -left-20 top-10 bg-white rounded-lg py-1 px-3 gap-2">
          {NAV_MENU.map((data, idx) => (
            <a href={data.nav} key={idx}>
              {data.title}
            </a>
          ))}
        </div> */}
      </div>
    </header>
  );
};

export default Header;
