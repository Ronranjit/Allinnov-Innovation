import React from "react";
import CustomMotion from "../components/CustomMotion";
import Services from "./Services";
import WhyUs from "./WhyUs";
import Stats from "./Stats";
import Accordian from "./Accordian";
import CardProgram from "../components/CardProgram";
import HoverDevCards from "../components/HoverDevCards";
import { Carousel } from "../components/Carousel";

const Home = () => {
  return (
    <div>
      <div className="Allinnov-hero">
        <div>
          <div>
            <CustomMotion>
              <h1 className="text-8xl text-center  md:text-[7rem] text-black">
                R&D And <br /> Advisory Services
              </h1>
            </CustomMotion>
          </div>
        </div>
      </div>

      {/* <CardProgram /> */}
      <HoverDevCards />
      <Services />
      <Accordian />
      <WhyUs />
      <Stats />
    </div>
  );
};

export default Home;
