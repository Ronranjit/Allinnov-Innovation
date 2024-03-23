import React from "react";
import Tick from "./Tick";

const StrategyPiont = ({ text }) => {
  return (
    <section className="relative inline-flex items-center justify-center  group cursor-pointer">
      <div className="absolute transition-all duration-200 rounded-full -inset-px  group-hover:shadow-lg group-hover:shadow-[#691ed8] "></div>

      <div className="flex items-center  gap-2 capitalize mb-2  w-50  md:w-72 lg:w-80 p-1 px-2 rounded-2xl bg-white/10 backdrop-blur-lg text-white">
        <Tick />
        {text}
      </div>
    </section>
  );
};

export default StrategyPiont;
