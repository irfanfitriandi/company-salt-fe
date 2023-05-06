import LogoIcon from "components/Icons/Logo";
import BgFooter from "assets/bg-footer.svg";
import VIcon from "components/Icons/VDown";

const Footer = () => {
  return (
    <div
      className="min-h-[80vh] py-9 px-8"
      style={{
        backgroundImage: `url(${BgFooter})`,
        backgroundSize: `cover`,
      }}
    >
      <LogoIcon primary="white" secondary="white" />
      <div className="bg-white p-7 mt-8 flex flex-col lg:items-center justify-center">
        <div className="py-1 px-2 border w-full lg:w-[300px] text-[#00537C] font-semibold flex justify-between items-center cursor-pointer">
          Technology Department
          <VIcon />
        </div>
        <p className="text-[#25A0D8] pt-10 text-lg w-[180px]">
          Jl. Lembong No 8 Kel. Braga Kec. Sumur Bandung, Kota Bandung, Jawa
          Barat
        </p>
      </div>
      <div className="flex flex-col gap-4 pt-7 text-white text-lg lg:text-xl">
        <a href="#about">Who We Are</a>
        <a href="#values">Our Values</a>
        <a href="#speciality">The Perks</a>
      </div>
    </div>
  );
};

export default Footer;
