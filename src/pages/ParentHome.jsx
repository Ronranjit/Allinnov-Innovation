import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import ParentCard from "../components/ParentCard";
import ScrollZoom from "../components/ScrollZoom";
import ReachUs from "./ReachUs";
import Strategies from "./Strategies";
import TrailFigma from "../components/TrailFigma";
import Awards from "./Awards";
import Hero2 from "./Hero2";
import TextAnimationX from "../components/TextAnimationX";
import CustomMotion from "../components/CustomMotion";

const ParentHome = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  return (
    <div className="home1-bg ">
      <div className=" bg-[#691ed8] lg:h-[31.25rem] lg:w-[31.25rem] h-[20rem] w-[20rem] rounded-full blur-[12rem] absolute right-[0rem] top-[-7rem]"></div>
      <div className="">
        <div className="">
          <div className="flex justify-center py-8">
            <div className="glass badge badge-ghost rounded-2xl px-2 bg-indigo-700 mb-3 text-white uppercase border-none   letter">
              Allinnov
            </div>
          </div>
          <TextAnimationX>
            <h1 className="  text-3xl text-center   p-8  md:text-6xl lg:text-8xl capitalize text-white">
              Allinnov research <br />
              and development Private Limited
            </h1>
          </TextAnimationX>

          <CustomMotion>
            <div className="px-3">
              <p className="  max-w-[60rem] text-center container  text-gray-300 shadow-xl  p-7 ">
                Allinnov democratizes the global intellectual property,
                innovation and business ecosystems to be affordable and
                accessible to every single creator on earth. We are a one stop
                destiny for all your innovation, intellectual property and
                business dreams right from ideation until monetization. Here we
                hand hold your creation from its base of ideation unto the
                success as a product, a business and an asset following the most
                economic practices with utmost quality and customer
                satisfaction.
              </p>
            </div>
          </CustomMotion>
        </div>
      </div>
      <Hero2 />
      <ScrollZoom>
        <ReachUs />
      </ScrollZoom>
      <Strategies />
      <ScrollZoom>
        <ParentCard />
      </ScrollZoom>
      <TrailFigma />
      <Awards />
    </div>
  );
};

export default ParentHome;
