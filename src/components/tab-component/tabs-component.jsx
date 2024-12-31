"use client";

import { useState } from "react";
import { tabData } from "../../../data";
import { cn } from "@/lib/utils";

const TabsComponent = () => {
  const [active, setActive] = useState(0);

  return (
    <div className="w-full">
      <div className="w-full flex justify-center items-center">
        {tabData.map((tab, index) => {
          return (
            <div
              key={tab.id}
              className={cn("w-60 flex justify-center items-center px-10 py-4 gap-4", active === index ? "border-t border-l border-r" : "border-b")}
              onClick={() => setActive(index)}
            >
              {tab.symbol}
              <h6 className="text-md">{tab.title}</h6>
            </div>
          );
        })}
      </div>
      <div className="p-2 mt-10">{tabData[active].content}</div>
    </div>
  );
};

export default TabsComponent;
