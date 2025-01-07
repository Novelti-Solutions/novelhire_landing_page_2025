"use client";

import Image from "next/image";
import { motion } from "motion/react";
const products = [
  {
    id: 1,
    src: "/features/prod1.svg",
    title: "Collaborative Hiring Tools",
    content:
      "Bring your hiring team together with tools for sharing feedback and discussing candidates in real-time. Ensure everyone is aligned before making critical decisions.",
  },
  {
    id: 2,
    src: "/features/prod2.svg",
    title: "Seamless Candidate Experience",
    content:
      "Deliver a smooth and engaging experience for candidates, from test invitations to feedback. Leave a lasting impression that reflects your company’s values.",
  },
  {
    id: 3,
    src: "/features/prod3.svg",
    title: "ATS Integration",
    content:
      "Integrate NovelHire with your Applicant Tracking System (ATS) to streamline your hiring pipeline. Keep all candidate data in one place without extra hassle.",
  },
];
const TeamProductivity = () => {
  return (
    <section className="bg-white">
      <div className="mx-auto  max-w-screen-xl p-8 md:py-10 lg:py-10 py-10">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} className="flex items-center flex-col gap-4 ">
          <span className="text-xs font-bold uppercase text-theme-mutedText">Content Section</span>
          <h2 className="text-2xl text-theme-primaryText text-center font-semibold md:text-4xl lg:text-5xl lg:text-start lg:leading-tight">
            Enhanced your team <span className="text-theme-secondary">productivity</span>
          </h2>

          <p className="text-sm text-theme-secondaryText  md:text-base lg:text-lg">Provide insights into team performance and engagement</p>
        </motion.div>

        <motion.div initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1,delay:0.6 }} className="flex my-8 justify-evenly items-center lg:items-start flex-col lg:flex-row">
          {products.map((prod) => {
            return (
              <div key={prod.id} className="flex flex-col w-80 items-start gap-2">
                <Image src={prod.src} alt="prod" width={250} height={250} className="w-full h-80" />
                <h3 className="text-xl font-semibold text-theme-primaryText">{prod.title}</h3>
                <p className="text-sm text-theme-secondaryText">{prod.content}</p>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default TeamProductivity;
