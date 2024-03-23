import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const TextAnimationX = ({ children }) => {
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
          hidden: { opacity: 0, x: -75 },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        animate={mainControl}
        transition={{ duration: 1, delay: 0.75, ease: [0, 0.55, 0.45, 1] }}>
        {children}
      </motion.div>
    </div>
  );
};

export default TextAnimationX;
