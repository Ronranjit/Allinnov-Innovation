import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ScrollZoom = ({ children }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 0.6], [0.4, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  return (
    <motion.div
      whileHover="hover"
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      ref={ref}>
      {children}
    </motion.div>
  );
};

export default ScrollZoom;
