"use client";

import { motion, useScroll, useSpring } from "motion/react";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 130, damping: 28, mass: 0.2 });
  return <motion.div className="scroll-progress" style={{ scaleX }} aria-hidden="true" />;
}
