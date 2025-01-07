"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";

const HomePage = ({ caption, title, subTitle, buttons, isReverse }) => {
  return (
    <div className="mx-auto max-w-screen-xl grid place-items-center h-auto p-8 lg:p-0 lg:min-h-[calc(100vh-4rem)]">
      <div
        className={cn(
          "flex justify-between flex-col",
          isReverse ? "lg:flex-row-reverse" : "lg:flex-row"
        )}
      >
        {/* section 1 */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex w-full items-center flex-col gap-4 lg:w-[40%] lg:items-start"
        >
          <span className="text-xs font-bold uppercase text-theme-mutedText">{caption}</span>
          <h2 className="text-2xl text-theme-primaryText  font-space text-center font-bold md:text-4xl lg:text-5xl lg:text-start lg:leading-tight">
            {title}
          </h2>

          <p className="text-sm text-theme-secondaryText md:text-base lg:text-lg">{subTitle}</p>

          {buttons && buttons}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex  w-full bg-gray-50 justify-center lg:w-[50%] "
        >
          {/* <video
              autoPlay
              muted
              loop
              //  className="w-3/4 h-[500px] object-cover"
              // controls
            >
              <source src="video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video> */}
          {/* 
            <iframe
              width={"100%"}
              height="315"
              className="rounded-xl shadow-lg"
              src="https://www.youtube.com/embed/PTXN_iDRFl8?si=xtHhGoSdMWGbmHaP"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe> */}
        </motion.div>
      </div>
    </div>
  );
};

export default HomePage;
