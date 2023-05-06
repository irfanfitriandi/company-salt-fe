import ArrowIcon from "components/Icons/Arrow";
import { dummy } from "./constant";
import { useState } from "react";

const About = () => {
  const [about, setAbout] = useState(1);
  const [hover, setHover] = useState(false);
  const [hover2, setHover2] = useState(false);

  return (
    <div
      id="about"
      className="bg-white relative p-11 flex justify-center items-center lg:h-[70vh]"
    >
      {dummy.map((data, idx) => (
        <div
          key={idx}
          className={`space-y-16 lg:w-[700px] ${about !== idx + 1 && `hidden`}`}
        >
          <div>
            <h1 className="text-[#029FE4] font-semibold text-4xl lg:text-5xl">
              {data.header}
            </h1>
            <h3 className="font-medium pt-2 text-lg lg:pt-4 lg:text-xl">
              {data.title}
            </h3>
            <p className="pt-1 text-sm lg:pt-2 lg:text-lg">{data.paragraph}</p>
          </div>
          <div className="flex items-center justify-between">
            <div className="text-2xl">
              {idx + 1}{" "}
              <span className="text-[#C0C0C0] text-base">/ {dummy.length}</span>
            </div>
            <div className="flex -space-x-1 cursor-pointer">
              <ArrowIcon
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                primary={hover ? "#1BA0E1" : "#F1F1F1"}
                secondary={hover ? "#FFFFFF" : "#B6B6B6"}
                onClick={
                  about !== 1
                    ? () => setAbout(about - 1)
                    : () => setAbout(dummy.length)
                }
              />
              <ArrowIcon
                className="transform -scale-x-100"
                onMouseEnter={() => setHover2(true)}
                onMouseLeave={() => setHover2(false)}
                primary={hover2 ? "#1BA0E1" : "#F1F1F1"}
                secondary={hover2 ? "#FFFFFF" : "#B6B6B6"}
                onClick={
                  about !== dummy.length
                    ? () => setAbout(about + 1)
                    : () => setAbout(1)
                }
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default About;
