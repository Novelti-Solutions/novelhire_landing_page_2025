import CoursouselComponent from "@/components/courousel-component";
import TabsComponent from "@/components/tab-component/tabs-component";
import React from "react";
import { usecasesTabData } from "../../../data";
import { Goal } from "lucide-react";
import { Button } from "@/components/ui/button";

const usecaseFooterData = [
  "Automate scheduling and test delivery",
  "Evaluate candidates at scale with reliable assessments.",
  "Identify top performers using data-driven insights.",
];

const UsecasesSection = () => {
  return (
    <section className="mx-auto max-w-screen-xl p-8 md:py-10 lg:py-10 py-10">
      <div className="flex justify-center items-start flex-col cursor-pointer">
        <p className="uppercase tracking-widest font-semibold mb-4">Novelhire usecases</p>
        <h1 className="text-2xl md:text-3xl md:w-[30%] text-[#172554] font-semibold mb-10">
          Reduce time-to-hire while maintaining high hiring standards.
        </h1>
        <TabsComponent data={usecasesTabData} />
        <div className="w-full flex justify-between items-center gap-4 flex-col md:flex-row mt-10">
          {usecaseFooterData.map((item, index) => (
            <Button variant="ghost" key={`${item}-${index}`} className="text-wrap">
              <Goal className="h-4 w-4" />
              {item}
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UsecasesSection;
