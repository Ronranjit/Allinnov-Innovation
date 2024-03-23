import React from "react";
import CustomMotion from "../components/CustomMotion";
import ContainerHero from "../components/ContainerHero";
import GlassCard from "../components/GlassCard";

const data = [
  {
    title: "product design",
    description:
      "A project is just a proof of concept, a product is the proof of your innovation’s value proposition.At Allinnov, our product design solution providers follow European standards in designing your products to suit the international consumer expectations at economic prices. Get your valued innovation the perfect blend of impact through its visual appearance with our exclusive product design service that will reach the market with due protection of its legal rights as well.",
    subtitle: "Our product design services include",
    points: [
      "pencil sketching",
      "Clay modelling",
      "3D Modelling",
      "3D Printing",
      "3D Scanning",
      "Material Selection",
      "Innovation Quality Based",
      "Design for Manufacture ",
    ],
  },
  {
    title: "product development",
    description:
      "A project is just a proof of concept, a product is the proof of your innovation’s value proposition.At Allinnov, our product design solution providers follow European standards in designing your products to suit the international consumer expectations at economic prices. Get your valued innovation the perfect blend of impact through its visual appearance with our exclusive product design service that will reach the market with due protection of its legal rights as well.",
    subtitle: "Our product development experts specialize in",
    points: [
      "pencil sketching",
      "Clay modelling",
      "3D Modelling",
      "3D Printing",
      "3D Scanning",
      "Material Selection",
      "Innovation Quality Based",
      "Design for Manufacture and other allied solutions",
    ],
  },
];

const ConceptToproduct = () => {
  return (
    <div>
      <div className="concept-hero mb-9">
        <div>
          <div>
            <CustomMotion>
              <h1 className="text-8xl text-center capitalize  md:text-[7rem] text-black ">
                concept to product
              </h1>
            </CustomMotion>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-3xl font-bold leading-tight capitalize  sm:text-4xl xl:text-5xl flex justify-center ">
          let's understand this
        </h2>
        <div className=" flex justify-center">
          <hr className="mt-7 mb-10 border-purple-500 lg:w-28 border-9" />
        </div>
        <p className="text-center text-2xl mb-6 p-4">
          You may have created a highly purposeful product but studies say that
          buyer’s decision is majorly impacted by the look, appearance and
          ergonomics of a product along with a product’s purpose and it is
          highly essential that a good innovation reaches the market in its best
          appearance and performance.
        </p>
      </div>
      <div className="colla p-5">
        {data.map((item) => (
          <div className="mb-4">
            <details
              tabIndex={0}
              className=" collapse-open bg-base-300  outline-none hover:outline-none rounded-3xl border-none active:outline-offset-0 cursor-pointer">
              <summary className="collapse-title  text-2xl uppercase font-semibold text-indigo-600">
                {item.title}
              </summary>
              <div className="collapse-content font-bold ">
                <CustomMotion>
                  <p className="text-gray-700 mb-9">{item.description}</p>
                  <h4 className="capitalize">{item.subtitle}</h4>
                  <div>
                    <ul className="lg:grid lg:grid-cols-4  p-7 list-disc">
                      {item.points.map((point) => (
                        <li className="mb-2 ">{point}</li>
                      ))}
                    </ul>
                  </div>
                </CustomMotion>
              </div>
            </details>
          </div>
        ))}
      </div>
      {/* <GlassCard /> */}
    </div>
  );
};

export default ConceptToproduct;
