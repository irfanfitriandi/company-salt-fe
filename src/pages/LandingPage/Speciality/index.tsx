import { useState } from "react";
import { dummy } from "./dummy";
import ArrowPlainIcon from "components/Icons/ArrowPlain";

const Speciality = () => {
  const [content, setContent] = useState(2);
  const [hover, setHover] = useState("#D2D2D2");
  const [hover2, setHover2] = useState("#D2D2D2");

  return (
    <div id="speciality" className="bg-[#509FDD] py-9 px-5">
      <div className="bg-white py-10 px-8 flex flex-col lg:items-center">
        <div className="lg:w-[800px]">
          <h1 className="text-[#029FE4] font-semibold text-2xl lg:text-3xl">
            OUR SPECIALITY
          </h1>
          <p className="text-[#303030] py-2 text-sm lg:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            euismod libero vel leo auctor, in venenatis nulla consequat. Sed
            commodo nunc sit amet congue aliquam.
          </p>
          {dummy.map((data, idx) => (
            <div
              key={idx}
              className={`flex flex-col items-center py-4 ${
                content !== idx + 1 && `hidden`
              }`}
            >
              <img src={data.src} alt={data.title} />
              <div className="font-medium text-sm">{data.title}</div>
              <p className="text-center text-[#A7A7A7] py-2 text-sm lg:text-base">
                {data.content}
              </p>
              <div className="flex items-center justify-between w-full pt-11">
                <ArrowPlainIcon
                  className="cursor-pointer"
                  onMouseEnter={() => setHover("black")}
                  onMouseLeave={() => setHover("#D2D2D2")}
                  primary={hover}
                  onClick={
                    content !== 1
                      ? () => setContent(content - 1)
                      : () => setContent(dummy.length)
                  }
                />
                <div className="flex gap-2">
                  {dummy.map((_, ix) => (
                    <div
                      key={ix}
                      className={`w-2 h-2 rounded-full bg-[#DAF3FC] cursor-pointer ${
                        content === ix + 1 && `border-2 border-black bg-white`
                      } cursor-pointer`}
                      onClick={() => setContent(ix + 1)}
                    />
                  ))}
                </div>
                <ArrowPlainIcon
                  className="cursor-pointer transform -scale-x-100"
                  onMouseEnter={() => setHover2("black")}
                  onMouseLeave={() => setHover2("#D2D2D2")}
                  primary={hover2}
                  onClick={
                    content !== dummy.length
                      ? () => setContent(content + 1)
                      : () => setContent(1)
                  }
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Speciality;
