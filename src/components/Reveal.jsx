/* eslint-disable no-unused-vars */
import { motion, useInView, useReducedMotion } from "motion/react";
import { useRef } from "react";

export default function Reveal({
  children,
  delay = 0,
  y = 16,
  duration = 0.6,
  amount = 0.6,
}) {
  const ref = useRef(null);
  const prefersReducedMotion = useReducedMotion();

  const isInView = useInView(ref, {
    amount,
    margin: "0px 0px -10% 0px",
  });

  if (prefersReducedMotion) return <div ref={ref}>{children}</div>;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ duration, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}
