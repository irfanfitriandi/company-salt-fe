import HeroBg from "assets/bghero.webp";
import HeroShp from "assets/shape-hero.svg";
import ChevronDownIcon from "components/Icons/ChevronDown";

const Hero = () => {
  return (
    <div id="hero" className="w-full flex flex-col relative max-h-[85vh]">
      <img src={HeroBg} alt="Hero" />
      <img src={HeroShp} alt="Shape" className="w-full -mt-12 lg:-mt-[600px]" />
      <div className="text-white py-5 px-8 absolute bottom-0 pb-24 lg:pb-[150px]">
        <h1 className="font-semibold text-4xl lg:text-5xl w-64 lg:w-full">
          Discover Your Wonder
        </h1>
        <p className="lg:text-xl lg:w-[800px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </p>
      </div>
      <a href="#about" className="flex justify-center">
        <ChevronDownIcon className="flex items-center justify-center bg-white w-[40px] h-[40px] rounded-full shadow-md absolute -bottom-4 p-2 z-10 cursor-pointer" />
      </a>
    </div>
  );
};

export default Hero;
