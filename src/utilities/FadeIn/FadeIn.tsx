import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type FadeInType = {
  children: React.ReactNode;
  delay?: number;
};
const FadeIn = ({ children, delay = 0 }: FadeInType) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 80 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;
