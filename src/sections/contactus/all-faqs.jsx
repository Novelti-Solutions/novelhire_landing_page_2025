"use client";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import useFetch from "@/hooks/use-fetch";
import useListSearchFetch from "@/hooks/use-list-search-fetch";
import { cn } from "@/lib/utils";
import { Briefcase, Building, School, User } from "lucide-react";
import { useState } from "react";
import { useEffect } from "react";
import { motion } from "motion/react";

// categories
const Categories = [
  {
    id: 14,
    name: "General",
    icon: (isActive) => <User className={cn(isActive ? "text-theme-primary" : "")} />,
  },
  {
    id: 15,
    name: "Companies",
    icon: (isActive) => <Building className={cn(isActive ? "text-theme-primary" : "")} />,
  },
  {
    id: 16,
    name: "Recruiters",
    icon: (isActive) => <Briefcase className={cn(isActive ? "text-theme-primary" : "")} />,
  },
  {
    id: 17,
    name: "Colleges",
    icon: (isActive) => <School className={cn(isActive ? "text-theme-primary" : "")} />,
  },
];

// payload
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
const AllFaqs = () => {
  //   states
  const [currentAccordion, setCurrentAccordion] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [currentCategory, setCurrentCategory] = useState({
    id: 14,
    name: "General",
    icon: (isActive) => <User className={cn(isActive ? "text-theme-primary" : "")} />,
  });

  // custom hook for search and list
  const { data, loading, error } = useListSearchFetch(
    inputValue,
    inputValue ? "/guest/help_articles/search" : "/guest/help_articles/list",
    {
      ...payload,
      query: {
        ...payload.query,
        catid: currentCategory.id,
        ...(inputValue ? { query: inputValue } : {}),
      },
    },

    // dependicies
    inputValue,
    currentCategory.id
  );

  //    categorychange
  const handleChangeCategory = (obj) => {
    setCurrentCategory(obj);
  };

  return (
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1,delay:0.6 }} className="mx-auto max-w-screen-md my-10">
      <div  className="flex flex-col items-center gap-4">
        <Badge variant="outline" className="rounded-full">
          NovelHire
        </Badge>
        <h3 className="text-xl font-semibold md:text-3xl lg:text-5xl">Frequently Asked Questions</h3>
        <p className="text-sm text-muted-foreground">
          All Plans come with a <span className="text-sm font-bold text-black">14-day</span> free trial period.
        </p>
      </div>

      <div className="my-4 flex w-full justify-center">
        <Input value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="Search Faq" className="w-1/2 py-5" />
      </div>

      <div className="flex flex-wrap justify-center gap-2">
        {Categories.map((category) => {
          return (
            <Button
              size="lg"
              variant="outline"
              onClick={() => handleChangeCategory(category)}
              className={cn("w-5/12 justify-start py-6 text-xs md:text-sm lg:text-base", category.id === currentCategory.id ? "bg-gray-100" : "")}
              key={category.id}
            >
              {category.icon(category.id === currentCategory.id)} {category.name}
            </Button>
          );
        })}
      </div>

      <div className="my-4 px-8">
        <h3 className="px-5 text-sm font-semibold md:text-lg lg:text-xl">{currentCategory.name}:</h3>

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

        {/* Render Data */}
        {!loading && !error && data && data.length > 0 && (
          <Accordion type="single" value={currentAccordion} onValueChange={setCurrentAccordion} collapsible className="w-full">
            {data.map(({ id, question, answer }) => (
              <AccordionItem key={id} value={id} className="px-4">
                <AccordionTrigger className="hover:no-underline">{question}</AccordionTrigger>
                <AccordionContent>{answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        )}
      </div>
    </motion.div>
  );
};

export default AllFaqs;
