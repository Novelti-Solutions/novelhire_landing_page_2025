import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const Content = ({ title, subTitle, buttons }) => {
  return (
    <div className="flex justify-between flex-col lg:flex-row">
      <div className="lg:w-1/3">
        <Image
          src="/home/smart.svg"
          width={500}
          height={500}
          alt="smart"
          className="h-auto lg:h-96 w-full object-contain object-left"
        />
      </div>

      <div className="lg:w-2/3 flex flex-col p-12 gap-8 bg-white">
        <h3 className="text-xl lg:text-2xl text-theme-primaryText font-medium">
          {title}
        </h3>
        <p className="text-sm lg:text-base text-theme-secondaryText">{subTitle}</p>
        {buttons}
      </div>
    </div>
  );
};

export default Content;
