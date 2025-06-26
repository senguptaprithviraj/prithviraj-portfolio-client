import { motion, MotionProps } from "framer-motion";
import { ReactNode } from "react";

interface FadeTransitionProps extends MotionProps {
  children: ReactNode;
}

export const FadeTransition = ({ children, ...props }: FadeTransitionProps) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    transition={{ duration: 0.3 }}
    {...props}
  >
    {children}
  </motion.div>
);
