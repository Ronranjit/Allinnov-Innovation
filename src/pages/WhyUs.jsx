import React from "react";

import { IoIosCheckmarkCircle } from "react-icons/io";
// import AllinnovService2 from "./AllinnovService2";

const why = [
  { text: "8+ years of market experience" },
  {
    text: "We offer you an all-in-one bundle of support services from Creation to Protection and commercialization of an innovation.",
  },
  { text: "Global intelligence on market and marketability" },
  { text: "Expert professionals tailoring your solutions" },
  { text: "Diverse domain expertise" },
  { text: "Customer experience driven value system" },
];

const WhyUs = () => {
  return (
    <div className="bg-gray-50">
      <div className="text-center">
        <h2 className="text-3xl font-bold leading-tight  sm:text-4xl xl:text-5xl  ">
          Why Allinnov
        </h2>
        <div className=" flex justify-center">
          <hr className="mt-7 mb-10 border-purple-500 w-28 border-9" />
        </div>
      </div>
      <section className="py-12  sm:py-16 lg:py-5">
        <div className="px-2 mx-auto max-w-7xl sm:px-2 lg:px-8">
          <div className="grid grid-cols-1 mt-2 text-center sm:mt-16 sm:grid-cols-2 sm:gap-x-12 gap-y-12 md:grid-cols-3 md:gap-0 xl:mt-24">
            {why.map((item) => (
              <>
                <div className="md:p-8 lg:p-14">
                  <div className="flex items-center justify-center ">
                    <IoIosCheckmarkCircle
                      size={50}
                      className=" text-green-200"
                    />
                  </div>
                  <h3 className="mt-12 lg:text-xl md:font-bold text-gray-500 font-pj">
                    {item.text}
                  </h3>
                </div>
              </>
            ))}
          </div>
        </div>
      </section>
      {/* <div className="bg-border">yes</div> */}
      {/* service2 */}
      {/* <AllinnovService2 /> */}
      {/* service2 */}
    </div>
  );
};

export default WhyUs;
