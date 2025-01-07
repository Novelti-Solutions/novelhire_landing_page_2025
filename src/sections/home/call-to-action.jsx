import { Button } from "@/components/ui/button";
import React from "react";

const CallToAction = () => {
  return (
    <div
      className={`h-80 p-5 bg-white md:py-10 lg:py-10 py-10 w-full flex justify-center items-center gap-5 bg-[url("/illustration.svg")] flex-col bg-cover bg-center`}
    >
      <p className="md:text-xs text-xs font-bold uppercase text-theme-mutedText text-center">
        Get started with novelhire!
      </p>
      <h1 className="md:text-5xl text-3xl font-bold  text-center text-theme-primaryText">
        Start Hiring Smarter Today!
      </h1>
      <p className="text-xl text-theme-secondaryText">
        Experience a better way to hire with NovelHire’s streamlined process and
        data-driven tools.
      </p>
      <Button className="mt-5 bg-theme-secondary">
        Request Demo
      </Button>
    </div>
  );
};

export default CallToAction;
