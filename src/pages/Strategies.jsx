import React from "react";
import StrategyPiont from "../components/StrategyPiont";
import { motion } from "framer-motion";
import Container from "../components/Container";
import FlexContainer from "../components/FlexContainer";
const points = [
  "Product Based",
  "Budget Based",
  "Technology Based",
  "Market Research Based",
  "Target Customer Based",
  "Target Market Based",
  "Innovation Quality Based",
  "Customer-Consumer Relationship ",
  "Market Penetration Plan Based",
  "Competition Based",
  "Potential Counterfeit Prediction Based",
  "Client Category Based",
];

const Strategies = () => {
  const fadeInAnimation = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * index,
      },
    }),
  };
  return (
    <div className="p-3">
      <h1 className="text-3xl text-center  mt-36 lg:mt-4 mb-3 p-8  md:text-6xl capitalize text-white">
        our strategy
      </h1>

      <div className="divider divider-primary w-56 flex mx-auto"></div>
      <p className="max-w-2xl mx-auto text-center mb-9  mt-2 text-base leading-relaxed text-gray-300">
        At Allinnov, we apply unique strategies that will fit aptly fit every
        single innovation the right way it would have to be taken ahead and our
        strategies are
      </p>

      <FlexContainer>
        <div className="lg:grid lg:grid-cols-3 md:grid md:grid-cols-2 md:gap-8">
          {points.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeInAnimation}
              initial="initial"
              viewport={{
                once: true,
              }}
              custom={index}
              whileInView="animate"
              className="mb-5  ">
              <StrategyPiont text={item} />
            </motion.div>
          ))}
        </div>
      </FlexContainer>
    </div>
  );
};

export default Strategies;
