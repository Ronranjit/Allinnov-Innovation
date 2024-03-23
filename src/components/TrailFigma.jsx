// src/components/Slider.js
import React, { useState, useEffect } from "react";
import Star from "./Star";
import propic from "../assets/profile/joseph-gonzalez-iFgRcqHznqg-unsplash.jpg";
import BackgrounGlow from "./BackgrounGlow";

const userReviews = [
  {
    userText: `“You made it so simple. My new site is so much faster
    and easier to work with than my old site. I just choose
    the page, make he change.”`,
    userName: "virat",
    userImg: propic,
  },
  {
    userText: `“You made it so simple. My new site is so much faster
    and easier to work with than my old site. I just choose
    the page, make he change.”`,
    userName: "virat",
    userImg: propic,
  },
  {
    userText: `“You made it so simple. My new site is so much faster
    and easier to work with than my old site. I just choose
    the page, make he change.”`,
    userName: "virat",
    userImg: propic,
  },
];

const TrailFigma = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  const showSlide = (index) => {
    const newTransformValue = -index * 100 + "%";
    return { transform: `translateX(${newTransformValue})` };
  };

  return (
    <div className="relative">
      <h1 className="text-3xl text-center  mt-52 lg:mt-4 mb-3 p-8  md:text-6xl capitalize text-white">
        Our happy clients say about us
      </h1>
      <div className=" bg-[#691ed8] lg:h-[31.25rem] lg:w-[31.25rem] h-[20rem] w-[20rem] rounded-full blur-[12rem] absolute right-[0rem] top-[-0rem]"></div>

      <div className=" p-6 lg:mt-0   mx-auto  rounded shadow-md  ">
        <div className=" relative slider-container lg:w-[60rem] lg:h-[25rem] mx-auto rounded-2xl overflow-hidden   lg:p-0 p-5 bg-white/10 backdrop-blur-lg ">
          <div
            className="slider"
            style={showSlide(currentIndex)}>
            {userReviews.map((item) => (
              <div className="slide">
                <>
                  <div class="flex flex-col overflow-hidden ">
                    <div class="flex flex-col justify-between flex-1 p-6  lg:py-8 lg:px-7">
                      <div class="flex-1 ">
                        <div className="flex justify-center">
                          <Star />
                        </div>

                        <blockquote class="flex-1 mt-8">
                          <p class="text-2xl max-w-lg mx-auto text-center leading-relaxed text-white font-pj">
                            {item.userText}
                          </p>
                        </blockquote>
                      </div>

                      <div class="flex-col justify-center text-center items-center mt-8">
                        <div className="avatar">
                          <div className="w-20 rounded-full ring ring-ghost ring-offset-base-100 ring-offset-2">
                            <img src={item.userImg} />
                          </div>
                        </div>
                        <div class="ml-4 flex justify-center">
                          <p class=" text-2xl font-normal  text-white ">
                            {item.userName}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrailFigma;
