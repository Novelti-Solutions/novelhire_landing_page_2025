import { Button } from "@/components/ui/button";
import { Facebook, Instagram, MapPin, Twitter } from "lucide-react";
import Link from "next/link";
import React from "react";

const HeroPage = ({ isReverse, title, caption, content }) => {
  return (
    <div className="flex w-full flex-col items-center gap-6 text-center lg:w-[40%] lg:items-start lg:text-start">
      <span className="text-xs font-bold uppercase">{caption}</span>
      <h2 className="font-mono text-3xl font-bold md:text-5xl lg:text-6xl">
        {title}
      </h2>

      <p className="text-sm font-semibold md:text-base lg:text-lg">{content}</p>
      {/* address location */}
      <div className="flex flex-col gap-3 lg:flex-row">
        <div className="flex flex-col items-center space-y-4 lg:items-start">
          <div className="flex gap-2 font-semibold">
            <MapPin />
            <span>Address</span>
          </div>
          <p className="text-base text-muted-foreground">
            No 14, Old Madras Road,Bengaluru - 560049
          </p>
        </div>

        <div className="flex flex-col items-center space-y-4 lg:items-start">
          <div className="flex gap-2 font-semibold">
            <MapPin />
            <span>Support</span>
          </div>
          <p className="text-nowrap text-sm font-semibold text-muted-foreground">
            Email :{" "}
            <span className="text-theme-primary">hello@novelhire.com</span>
          </p>
          <Button
            size="lg"
            className="rounded-full bg-theme-primary hover:bg-theme-primary"
          >
            <Link
              href="https://help.novelhire.com/portal/en/signin"
              target="_blank"
              className="inline-flex items-center hover:opacity-80"
            >
              Report Issue
            </Link>
          </Button>
        </div>
      </div>

      <span>
        <span className="text-red-500">*</span>
        Our social media pages.
      </span>

      <div className="flex gap-2">
        <Button variant="outline" size="icon">
          <Link
            href="https://www.facebook.com/profile.php?id=61558057150364"
            target="_blank"
            className="inline-flex items-center hover:opacity-80"
          >
            <Facebook className="h-6 w-6" />
          </Link>
        </Button>
        <Button variant="outline" size="icon">
          <Link
            href="https://twitter.com/novelhire"
            target="_blank"
            className="inline-flex items-center hover:opacity-80"
          >
            <Twitter className="h-6 w-6" />
          </Link>
        </Button>
        <Button variant="outline" size="icon">
          <Link
            href="https://www.instagram.com/novelhire/"
            target="_blank"
            className="inline-flex items-center hover:opacity-80"
          >
            <Instagram className="h-6 w-6" />
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default HeroPage;
