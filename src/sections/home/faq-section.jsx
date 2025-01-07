"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useState } from "react";
import useFetch from "@/hooks/use-fetch";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

const payload = {
  query: {
    isDeleted: false,
    isActive: true,
    catid: 14, // general
  },
  options: {
    sort: {
      createdAt: 1,
    },
    select: ["id", "question", "answer"],
    page: 1,
    paginate: 10,
  },
  isCountOnly: false,
};
const FAQSection = () => {
  // custom hook
  const { data, loading, error } = useFetch("/guest/help_articles/list", "POST", payload);

  //   states
  const [currentAccordion, setCurrentAccordion] = useState(null);

  return (
    <div className=" p-8 md:py-10 lg:py-10">
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} className="flex flex-col items-center justify-between lg:flex-row mx-auto max-w-screen-xl">
        <div className="flex items-center flex-col gap-2  lg:items-start">
          <span className="text-xs font-bold uppercase text-theme-mutedText">FAQ Section</span>
          <h2 className="text-2xl text-theme-primaryText  font-space text-center font-bold md:text-4xl lg:text-5xl lg:text-start lg:leading-tight">
            Frequently asked <span className="text-theme-secondary">questions</span>
          </h2>

          <p className="text-sm font-semibold text-theme-secondaryText  md:text-base lg:text-base">Everything you need to know about Spark</p>
        </div>
        <div className="flex flex-col items-center lg:items-start  gap-4">
          <h4 className="text-sm text-theme-secondaryText">Still have a questions in mind? contact us directly!</h4>
          <div>
            <Button className="rounded-none">Contact us</Button>
          </div>
        </div>
      </motion.div>

      {/* Loading State */}
      {loading && <div className="my-4 border-2 p-4 text-center text-gray-500">Loading FAQs...</div>}

      {/* Error State */}
      {error && (
        <div className="my-4 border-2 p-4 text-center text-red-500">Error loading FAQs: {error.message || "An unexpected error occurred."}</div>
      )}

      {/* No Data State */}
      {!loading && !error && (!data || data.length === 0) && (
        <div className="my-4 border-2 p-4 text-center text-gray-500">No FAQs available at the moment.</div>
      )}

      {!loading && !error && data && data.length > 0 && (
        <motion.div   initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 ,delay:0.6}}>
        <Accordion type="single" value={currentAccordion} onValueChange={setCurrentAccordion} collapsible className="mx-auto max-w-screen-xl ">
          <div className="grid my-8 gap-x-4 grid-cols-12">
            {data?.map(({ id, question, answer }) => (
              <AccordionItem key={id} value={id} className={cn("col-span-12", "lg:col-span-6", "px-4", "bg-white")}>
                <AccordionTrigger className="hover:no-underline text-theme-primaryText">{question}</AccordionTrigger>
                <AccordionContent className="text-theme-secondaryText">{answer}</AccordionContent>
              </AccordionItem>
            ))}
          </div>
        </Accordion>
        </motion.div>
      )}
    </div>
  );
};

export default FAQSection;
