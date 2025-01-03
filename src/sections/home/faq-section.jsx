"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState } from "react";
import useFetch from "@/hooks/use-fetch";
import { cn } from "@/lib/utils";

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
  const { data, loading, error } = useFetch(
    "/guest/help_articles/list",
    "POST",
    payload
  );

  //   states
  const [currentAccordion, setCurrentAccordion] = useState(null);

  console.log(currentAccordion);

  return (
    <>
      <div className="flex flex-col items-center justify-between lg:flex-row mx-auto max-w-screen-xl p-8 md:py-10 lg:py-10">
        <div className="flex items-center flex-col gap-4  lg:items-start">
          <span className="text-xs font-bold uppercase text-muted-foreground">
            FAQ Section
          </span>
          <h2 className="text-2xl text-theme-primary  font-space text-center font-bold md:text-4xl lg:text-5xl lg:text-start lg:leading-tight">
            Frequently asked <span className="text-fuchsia-950">questions</span>
          </h2>

          <p className="text-sm text-blue-950  md:text-base lg:text-lg">
            Everything you need to know about Spark
          </p>
        </div>
        <div className="flex flex-col items-center lg:items-start  gap-4">
          <h4 className="text-sm">
            Still have a questions in mind? contact us directly!
          </h4>
          <div>
            <Button className="rounded-none">Contact us</Button>
          </div>
        </div>
      </div>
      <Accordion
        type="single"
        value={currentAccordion}
        onValueChange={setCurrentAccordion}
        collapsible
        className="mx-auto max-w-screen-xl p-8 md:py-10 lg:py-10"
      >
        <div className="grid my-12 gap-x-4 grid-cols-12">
          {data.map(({ id, question, answer }) => (
            <AccordionItem
              key={id}
              value={id}
              className={cn("col-span-12", "lg:col-span-6", "px-4", "bg-white")}
            >
              <AccordionTrigger className="hover:no-underline">
                {question}
              </AccordionTrigger>
              <AccordionContent>{answer}</AccordionContent>
            </AccordionItem>
          ))}
        </div>
      </Accordion>
    </>
  );
};

export default FAQSection;
