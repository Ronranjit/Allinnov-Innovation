import React from "react";
import { backInOut, motion } from "framer-motion";
const ParentCard = () => {
  return (
    <div>
      <section className="grid h-screen mb-8 place-content-center  px-4">
        <div className="mx-auto w-fit">
          <Card />
        </div>
      </section>
    </div>
  );
};

const Card = () => {
  return (
    <div>
      <h1 className="text-3xl text-center mt-44 lg:mt-4 mb-6 p-8  md:text-6xl capitalize text-white">
        explore our service
      </h1>
      <div className="lg:grid lg:grid-cols-2 grid grid-cols-1 gap-20 ">
        <motion.div
          whileHover="hover"
          variants={{
            hover: {
              scale: 1.05,
            },
          }}
          transition={{
            duration: 1,
            ease: backInOut,
          }}
          className="relative w-52  h-80 sm:w-72 mx-auto md:w-96 shrink-0 overflow-hidden rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 p-8">
          <div className="relative z-10 text-white">
            <div className="badge badge-ghost glass mb-3 text-white uppercase letter">
              Allinnov
            </div>
            <span className="flex justify-center  my-2  text-center font-black">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6">
                  <path d="M11.584 2.376a.75.75 0 0 1 .832 0l9 6a.75.75 0 1 1-.832 1.248L12 3.901 3.416 9.624a.75.75 0 0 1-.832-1.248l9-6Z" />
                  <path
                    fillRule="evenodd"
                    d="M20.25 10.332v9.918H21a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1 0-1.5h.75v-9.918a.75.75 0 0 1 .634-.74A49.109 49.109 0 0 1 12 9c2.59 0 5.134.202 7.616.592a.75.75 0 0 1 .634.74Zm-7.5 2.418a.75.75 0 0 0-1.5 0v6.75a.75.75 0 0 0 1.5 0v-6.75Zm3-.75a.75.75 0 0 1 .75.75v6.75a.75.75 0 0 1-1.5 0v-6.75a.75.75 0 0 1 .75-.75ZM9 12.75a.75.75 0 0 0-1.5 0v6.75a.75.75 0 0 0 1.5 0v-6.75Z"
                    clipRule="evenodd"
                  />
                  <path d="M12 7.875a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25Z" />
                </svg>
              </div>
            </span>
            <p className="uppercase text-2xl sm:text-3xl text-center mt-4">
              intellectual property service
            </p>
          </div>
          <button className="letter absolute bottom-4 left-4 right-4 z-20 rounded border-2 border-white bg-white py-2 text-center uppercase text-neutral-600 backdrop-blur hover:bg-white/30 hover:text-white glass">
            Visit site
          </button>
        </motion.div>
        {/* second */}
        <motion.div
          whileHover="hover"
          variants={{
            hover: {
              scale: 1.05,
            },
          }}
          transition={{
            duration: 1,
            ease: backInOut,
          }}
          className="relative h-80 w-52 sm:w-72 mx-auto md:w-96  shrink-0 overflow-hidden rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 p-8">
          <div className="relative z-10 text-white">
            <div className="badge badge-ghost glass mb-3 text-white uppercase letter">
              Allinnov
            </div>
            <span className="flex justify-center  my-2  text-center font-black">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6">
                  <path d="M11.584 2.376a.75.75 0 0 1 .832 0l9 6a.75.75 0 1 1-.832 1.248L12 3.901 3.416 9.624a.75.75 0 0 1-.832-1.248l9-6Z" />
                  <path
                    fillRule="evenodd"
                    d="M20.25 10.332v9.918H21a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1 0-1.5h.75v-9.918a.75.75 0 0 1 .634-.74A49.109 49.109 0 0 1 12 9c2.59 0 5.134.202 7.616.592a.75.75 0 0 1 .634.74Zm-7.5 2.418a.75.75 0 0 0-1.5 0v6.75a.75.75 0 0 0 1.5 0v-6.75Zm3-.75a.75.75 0 0 1 .75.75v6.75a.75.75 0 0 1-1.5 0v-6.75a.75.75 0 0 1 .75-.75ZM9 12.75a.75.75 0 0 0-1.5 0v6.75a.75.75 0 0 0 1.5 0v-6.75Z"
                    clipRule="evenodd"
                  />
                  <path d="M12 7.875a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25Z" />
                </svg>
              </div>
            </span>
            <p className="uppercase text-2xl sm:text-3xl text-center mt-4">
              r&d and advisory service
            </p>
          </div>
          <button className="letter absolute bottom-4 left-4 right-4 z-20 rounded border-2 border-white bg-white py-2 text-center uppercase text-neutral-600 backdrop-blur hover:bg-white/30 hover:text-white glass">
            Visit site
          </button>
        </motion.div>
        {/* second */}
      </div>
    </div>
  );
};

export default ParentCard;
