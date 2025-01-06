import { Button } from "@/components/ui/button";
import { Goal } from "lucide-react";
import Image from "next/image";
import React from "react";

const Assessment = ({
  reverse = false,
  subheading = "Subheading",
  heading1 = "Heading 1",
  heading2 = "Heading 2",
  para = "This is a description paragraph.",
  buttonText = "Learn More",
  footer = [],
  img,
}) => {
  return (
    <div className="mx-auto max-w-screen-xl p-8 md:py-20 lg:py-20 bg-[#F9F7F7]">
     <div
        className={`flex justify-between items-center md:items-start gap-8 md:gap-40 flex-col md:flex-row ${reverse ? "md:flex-row-reverse" : ""}`}
      >
        {/* Content Section - Fixed width */}
        <div className="w-full md:w-1/2">
          <p className="tracking-widest uppercase text-xs font-semibold text-theme-primary mb-3">{subheading}</p>
          <h1 className="md:text-3xl text-2xl font-semibold text-theme-secondary mb-8">
            {heading1} <span className="text-theme-primary">{heading2}</span>
          </h1>
          <p className="text-base text-justify mb-8">{para}</p>
          <Button className="rounded-none">{buttonText}</Button>
        </div>

        {/* Image Section - Fixed dimensions */}
        <div className="w-full md:w-1/2">
          <div className="aspect-square w-full">
            {img ? (
              <Image
                src={img}
                width={600}
                height={600}
                alt="profile image"
                className="object-contain pl-10 pr-10 pt-10 pb-0 bg-rose-50"
                placeholder="blur"
                blurDataURL="/placeholder.png"
              />
            ) : (
              <div className="text-gray-500 h-full flex items-center justify-center">Image not available</div>
            )}
          </div>
        </div>
      </div>
      {footer.length > 0 && (
        <div className="flex justify-between items-center gap-4 flex-col md:flex-row">
          {footer.map((item, index) => (
            <p key={`${item}-${index}`} className="flex justify-center items-center gap-2 font-semibold">
              <Goal className="h-4 w-4 inline-block" />
              {item}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default Assessment;
