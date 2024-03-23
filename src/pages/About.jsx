import React, { useState } from "react";
import CustomMotion from "../components/CustomMotion";

const About = () => {
  return (
    <>
      <div className="">
        <section className="py-12 bg-black sm:pb-16 lg:pb-20 xl:pb-24">
          <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div className="relative">
              <div className="lg:w-2/3">
                <p className="text-sm font-normal tracking-widest text-gray-300 uppercase">
                  ALLINNOV ABOUT
                </p>
                <h1 className="mt-6 text-4xl font-normal text-white sm:mt-10 sm:text-5xl lg:text-6xl xl:text-8xl">
                  Let's
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500">
                    Understand <br />
                  </span>
                  what we <br /> Exactly do
                </h1>

                <div className="relative inline-flex items-center justify-center mt-8 sm:mt-12 group">
                  <div className="absolute transition-all duration-200 rounded-full -inset-px bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:shadow-lg group-hover:shadow-cyan-500/50"></div>
                  <a
                    href="#"
                    title=""
                    className="relative inline-flex items-center justify-center px-8 py-3 text-base font-normal text-white bg-black border border-transparent rounded-full"
                    role="button">
                    Get in Touch
                  </a>
                </div>

                <div>
                  <div className="inline-flex items-center pt-6 mt-8 border-t border-gray-800 sm:pt-10 sm:mt-14">
                    <svg
                      className="w-6 h-6"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke-width="1.5"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M13 7.00003H21M21 7.00003V15M21 7.00003L13 15L9 11L3 17"
                        stroke="url(#a)"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <defs>
                        <linearGradient
                          id="a"
                          x1="3"
                          y1="7.00003"
                          x2="22.2956"
                          y2="12.0274"
                          gradientUnits="userSpaceOnUse">
                          <stop
                            offset="0%"
                            styles="stop-color: var(--color-cyan-500)"
                          />
                          <stop
                            offset="100%"
                            styles="stop-color: var(--color-purple-500)"
                          />
                        </linearGradient>
                      </defs>
                    </svg>

                    <span className="ml-2 text-base font-normal text-white capitalize">
                      {" "}
                      Providing you the best service{" "}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-8 md:absolute md:mt-0 md:top-32 lg:top-0 md:right-0">
                <img
                  className="w-full max-w-xs mx-auto lg:max-w-lg xl:max-w-xl"
                  src="https://landingfoliocom.imgix.net/store/collection/dusk/images/hero/1/3d-illustration.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className=" bg-gray-50">
        <section className="pt-12 bg-gray-50 sm:pt-16">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className=" mx-auto text-center">
              <h1 className="text-3xl font-bold leading-tight  sm:text-4xl xl:text-5xl  ">
                Main Goal
              </h1>
              <CustomMotion>
                <p className="mt-4">
                  In this innovation and information era, we live on earth with
                  a variety of ideas, innovation and advises surrounding us and
                  reaching out to the tips of fingers in microseconds. Not all
                  that we see will suit all that we imagine or create; it is the
                  wisdom and proper guidance with choosing and imparting the apt
                  advise and solution that will fit your idea or creation /
                  innovation that will bring success to your doorstep. If your
                  product / service is unique, the solution that will fit your
                  product / service should also be unique and you’ve to be wise
                  enough to choose the right solution out of all available
                  solutions.
                </p>
                <p className="mt-4">
                  All that a business needs is the right guidance and support at
                  the right time. Our research and advisory services offer
                  tailor fit consultancy and support services in shaping you and
                  your idea to reach and rule the market by incorporating the
                  right tools; training; products, services, businesses and
                  innovation strategies, and funding for your concept / start-up
                  / business. With Allinnov’s love towards agriculture and
                  farming, our advisory services include customized organic
                  agriculture, agri-tech and automation related consultancy of
                  global standards for all your agricultural needs as well.
                </p>
              </CustomMotion>
            </div>
          </div>
        </section>
      </div>

      {/* about */}
    </>
  );
};
export default About;
