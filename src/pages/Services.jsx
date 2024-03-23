import React from "react";

import CustomMotion from "../components/CustomMotion";
import { IoIosArrowForward } from "react-icons/io";

const Services = () => {
  return (
    <div className="font-primary">
      <section className="py-12 bg-gray-50 sm:py-16 lg:py-20">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold leading-tight  sm:text-4xl xl:text-5xl  ">
              Service We Provide
            </h2>
            <div className=" flex justify-center">
              <hr className="mt-7 mb-10 border-purple-500 w-28 border-9" />
            </div>
            <p className="mt-4 text-base leading-7 text-gray-600 sm:mt-8 font-pj">
              Think Innovation, Think Allinnov – Think Business, That’s What We
              Make your buisness Do
            </p>
          </div>

          <div className="grid grid-cols-1 mt-10 text-center sm:mt-16 sm:grid-cols-2 sm:gap-x-12 gap-y-12 md:grid-cols-2 md:gap-0 xl:mt-24">
            {service.map((item) => (
              <>
                <CustomMotion>
                  <div className="md:p-8 lg:p-14 ">
                    <svg
                      className="mx-auto "
                      width="46"
                      height="46"
                      viewBox="0 0 46 46"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M45 29V23C45 10.85 35.15 1 23 1C10.85 1 1 10.85 1 23V29"
                        stroke="#5D3FD3"
                        stroke-width="2"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M13 29H1V41C1 43.209 2.791 45 5 45H13V29Z"
                        fill="#5D3FD3"
                        stroke="#5D3FD3"
                        stroke-width="2"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M45 29H33V45H41C43.209 45 45 43.209 45 41V29Z"
                        fill="#5D3FD3"
                        stroke="#5D3FD3"
                        stroke-width="2"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <h3 className="flex items-center justify-center  mt-12 text-xl font-bold text-gray-900 font-pj">
                      {item.serviceHeading}
                      <button>
                        <a href="#">
                          <IoIosArrowForward className="ml-2 hover:text-purple-500" />
                        </a>
                      </button>
                    </h3>

                    <p className="mt-5 text-base text-gray-600 font-pj">
                      {item.serviceName}
                    </p>
                  </div>
                </CustomMotion>
              </>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;

const service = [
  {
    serviceIcon: "icon",
    serviceHeading: "CONCEPT TO PRODUCT",
    serviceName: "Product Design and Product Development",
  },
  {
    serviceIcon: "icon",

    serviceHeading: "PRODUCT TO BUSINESS",
    serviceName: "Business Regn. - Website & Web Appln. - Mobile App Design",
  },
  {
    serviceIcon: "icon",

    serviceHeading: "BUSINESS LEGAL & STRATEGY",
    serviceName:
      "Business Formation - Mergers - Franchising - Division - Employment - IP - Tax and Compliances - Funding, Training & Mentoring",
  },
  {
    serviceIcon: "icon",

    serviceHeading: "INVINIP",
    serviceName: "PatVest - PatVest-Up",
  },
];
