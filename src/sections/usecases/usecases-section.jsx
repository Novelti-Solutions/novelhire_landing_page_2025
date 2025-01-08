"use client";

import TabsComponent from "@/components/tab-component/tabs-component";
import { usecasesTabData } from "../../../data";
import { Goal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";

const usecaseFooterData = [
  "Automate scheduling and test delivery",
  "Evaluate candidates at scale with reliable assessments.",
  "Identify top performers using data-driven insights.",
];

const UsecasesSection = () => {
  return (
    <section className="mx-auto max-w-screen-xl p-8 md:py-10 lg:py-10 py-10">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        viewport={{ once: true }}
        className="flex justify-center items-start flex-col cursor-pointer"
      >
        <p className="uppercase tracking-widest font-semibold mb-4 text-theme-mutedText">Novelhire usecases</p>
        <h1 className="text-2xl md:text-3xl md:w-[30%] text-theme-primaryText font-semibold mb-10">
          Reduce time-to-hire while maintaining high hiring standards.
        </h1>
        <TabsComponent data={usecasesTabData} />
      </motion.div>
    </section>
  );
};

export default UsecasesSection;
