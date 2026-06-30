"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function Reveal({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function Counter({ value, label }: { value: string; label: string }) {
  return (
    <Reveal className="bg-[#080d15] p-7 md:p-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.65 }}
        className="font-metric text-4xl font-black tracking-tight text-white md:text-5xl"
      >
        {value}
      </motion.div>
      <div className="mt-2 text-sm font-medium text-white/58">{label}</div>
    </Reveal>
  );
}
