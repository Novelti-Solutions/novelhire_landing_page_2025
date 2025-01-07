"use client";

import Image from "next/image";

import { motion } from "motion/react";

const TimelineItem = ({ number, leftContent, rightContent, isLast }) => (
  <div className="relative  last:mb-0">
    <div className="absolute hidden md:block lg:block left-1/2 -top-10 bottom-0 w-[2px] bg-gray-200 -translate-x-1/2" />

    <div className="flex items-center gap-3 flex-col md:flex-row lg:flex-row pb-20 justify-center relative">
      {/* Left Content */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 * number}}
        className="w-full md:w-1/2 lg:w-1/2  text-right"
      >
        {leftContent && <Image src={leftContent?.path} alt={number} width={500} height={500} layout="responsive" />}
      </motion.div>

      {/* Number circle */}
      <div className="flex-shrink-0 hidden md:flex lg:flex w-12 h-12 rounded-full bg-indigo-500	 text-white  items-center justify-center font-semibold text-lg z-10 shadow-sm">
        {number}
      </div>

      {/* Right Content */}
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1, delay: 0.3 * number }} className="w-full md:w-1/2 lg:w-1/2">
        {rightContent && (
          <div className=" p-4 flex flex-col gap-3 ">
            <h3 className="text-xl md:text-2xl lg:text-2xl text-theme-primary font-semibold">{rightContent.title}</h3>
            <p className="text-muted-foreground font-semibold">{rightContent.description}</p>
            <span>{rightContent.caption}</span>
          </div>
        )}
      </motion.div>
    </div>
  </div>
);

export default TimelineItem;
