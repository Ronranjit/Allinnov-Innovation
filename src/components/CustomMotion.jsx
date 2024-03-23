import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const CustomMotion = ({ children, yAxis, xAxis, yVisible, xVisible }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControl = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControl.start("visible");
    }
  }, [isInView]);
  return (
    <div
      ref={ref}
      className="overflow-hidden relative">
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControl}
        transition={{ duration: 0.5, delay: 0.75, ease: [0, 0.55, 0.45, 1] }}>
        {children}
      </motion.div>
    </div>
  );
};

export default CustomMotion;
