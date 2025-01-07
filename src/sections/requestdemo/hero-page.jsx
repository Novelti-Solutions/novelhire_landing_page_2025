"use client";

import React from "react";
import { motion } from "motion/react";

const HeroPage = ({ isReverse, title, caption, content }) => {
  return (
    <div className="flex flex-col gap-4 text-center">
      <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} className="text-xs font-bold uppercase text-theme-mutedText">
        {caption}
      </motion.span>
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="font-mono text-3xl font-bold md:text-5xl lg:text-6xl text-theme-primaryText"
      >
        {title}
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="text-sm font-semibold md:text-base lg:text-lg text-theme-secondaryText"
      >
        {content}
      </motion.p>
    </div>
  );
};

export default HeroPage;
