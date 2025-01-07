"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";
import { Button } from "../ui/button";
import { Goal } from "lucide-react";

const TabsComponent = ({ data }) => {
  const [active, setActive] = useState(0);

  return (
    <>
      <div className="w-full">
        <div className="w-full flex justify-center items-center flex-wrap">
          {data.map((tab, index) => {
            return (
              <div
                key={tab.id}
                className={cn(
                  "flex-1 flex justify-center  items-center px-10 py-4 gap-4",
                  active === index ? "border-t border-l border-r" : "border-b"
                )}
                onClick={() => setActive(index)}
              >
                <span className={active === index ? "text-theme-accentPurpleLight" : "text-theme-primaryText"}>{tab.symbol}</span>

                <h6 className={`text-md ${active === index ? "text-theme-accentPurpleLight" : "text-theme-primaryText"} text-theme-primaryText`}>
                  {tab.title}
                </h6>
              </div>
            );
          })}
        </div>
        <div className="p-2 mt-10">{data[active].content}</div>
      </div>
      {data[active]?.keyPoints.length > 0 && (
        <div className="w-full flex justify-between items-center gap-4 flex-col md:flex-row mt-10">
          {data[active]?.keyPoints.map((item, index) => (
            <Button variant="ghost" key={`${item}-${index}`} className="text-wrap text-theme-primaryText">
              <Goal className="h-4 w-4" />
              {item}
            </Button>
          ))}
        </div>
      )}
    </>
  );
};

export default TabsComponent;
