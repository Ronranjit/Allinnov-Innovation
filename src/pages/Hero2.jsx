import React from "react";
import innovation from "../assets/images/Object_6_(glassy).png";
import pish from "../assets/images/phishing attack.png";
import ring from "../assets/images/glossy_5.png";

const Hero2 = () => {
  return (
    <div>
      <div className="lg:flex space-x-5 items-center p-20">
        <div>
          {/* <h1 className="lg:text-8xl text-3xl text-white capitalize text-center">
            let's <br /> turn your idea <br />{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500">
              into a real world
            </span>
          </h1> */}
          <div className="card ">
            <h1 className="text-8xl text-white capitalize">About</h1>
            <div className="divider divider-primary "></div>
            <p className="text-white max-w-xl">
              Allinnov democratizes the global intellectual property, innovation
              and business ecosystems to be affordable and accessible to every
              single creator on earth. We are a one stop destiny for all your
              innovation, intellectual property and business dreams right from
              ideation until monetization. Here we hand hold your creation from
              its base of ideation unto the success as a product, a business and
              an asset following the most economic practices with utmost quality
              and customer satisfaction.
            </p>
          </div>
        </div>
        <div>
          <img
            className=""
            width={600}
            src={innovation}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Hero2;
