import React from "react";
import certificateImg from "../assets/awards/award_certificate.jpg";
import globe from "../assets/awards/ip_award.png";
import hero from "../assets/awards/Photo.png";

const gallery = [
  {
    awardImg: hero,
    awardTitle: "Cash Award of 1Lac for National IP Award",
  },
  {
    awardImg: certificateImg,
    awardTitle: "Most innovative MSME of India 2023 Award",
  },
  {
    awardImg: globe,
    awardTitle: "National IP Award - Top Startup 2017",
  },
];

const Awards = () => {
  return (
    <>
      <h1 className="text-3xl text-center  mt-20 lg:mt-4 mb-3 p-8  md:text-6xl capitalize text-white">
        Allinnov Awards
      </h1>
      <div className="lg:grid lg:grid-cols-3 lg:p-0 p-4">
        {gallery.map((item) => (
          <div className="flex-col items-center justify-center ">
            <img
              class="w-76 h-36 mx-auto"
              src={item.awardImg}
              alt="awards"
            />
            <h1 className=" mx-auto text-xl text-center max-w-[15rem]  mb-9  mt-2 leading-relaxed text-gray-400">
              {item.awardTitle}
            </h1>
          </div>
        ))}
      </div>
    </>
  );
};

export default Awards;
