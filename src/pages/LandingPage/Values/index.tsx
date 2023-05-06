import { dummy } from "./constant";
import ValuesIluss from "assets/values-illustration.svg";

const Values = () => {
  return (
    <div id="values" className="bg-[#F8F8F8] relative pt-14 px-6 flex flex-col justify-center items-center overflow-x-clip">
      <div className="lg:w-[800px] flex flex-col items-center">
        <h1 className="text-[#029FE4] font-semibold text-4xl lg:text-5xl">
          Our Core Values
        </h1>
        <p className="text-[#777777] pt-6">
          Ridiculus laoreet libero pretium et, sit vel elementum convallis
          fames. Sit suspendisse etiam eget egestas. Aliquet odio et lectus
          etiam sit.
          <br />
          <br />
          In mauris rutrum ac ut volutpat, ornare nibh diam. Montes, vitae, nec
          amet enim.
        </p>
      </div>
      {dummy.map((data, idx) => (
        <div key={idx} className="flex gap-4 pt-9 lg:w-[800px]">
          <div className="mt-4 w-10 h-0 border border-black" />
          <div>
            <h3 className="text-2xl lg:text-3xl">{data.title}</h3>
            <p className="text-[#777777] pt-1">{data.content}</p>
          </div>
        </div>
      ))}
      <img
        src={ValuesIluss}
        alt="Values-Ilustration"
        className="pt-8 ml-12 lg:pl-[1000px]"
      />
    </div>
  );
};

export default Values;
