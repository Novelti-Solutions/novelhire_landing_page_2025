"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import { CheckCircle, ChevronRight, User } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const HomePage = () => {
  return (
    <div className="mx-auto max-w-screen-xl p-8 md:py-10 lg:py-10">
      <section className="py-10">
        <div className={cn("flex gap-8  flex-col justify-between lg:flex-row")}>
          {/* section 1 */}
          <div className="flex w-full items-center flex-col gap-4 lg:w-[40%] lg:items-start">
            <span className="text-xs font-bold uppercase text-muted-foreground">
              NovelHire Talent Solutions
            </span>
            <h2 className="text-2xl font-space text-center font-bold md:text-4xl lg:text-5xl lg:text-start lg:leading-tight">
              Interviews Reimagined
            </h2>

            <p className="text-sm text-blue-950 text-muted-foreground md:text-base lg:text-lg">
              Effortlessly identify, evaluate, and onboard top technical talent
              with cutting-edge tools and data-driven insights.
            </p>

            <div className="flex items-center mt-4 gap-4">
              <Button
                variant="outline"
                className="uppercase bg-transparent border-blue-950"
              >
                <User />
                Features
              </Button>

              <Button className=" bg-blue-950	 uppercase hover:bg-theme-secondary">
                <Link
                  href="/requestdemo"
                  className="text-sm font-semibold uppercase"
                >
                  request demo
                </Link>
                <ChevronRight />
              </Button>
            </div>
          </div>

          <div className="flex  w-full justify-center lg:w-[40%] ">
            <video
              autoPlay
              muted
              loop
              //  className="w-3/4 h-[500px] object-cover"
              // controls
            >
              <source src="video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            {/* 
            <iframe
              width={"100%"}
              height="315"
              className="rounded-xl shadow-lg"
              src="https://www.youtube.com/embed/PTXN_iDRFl8?si=xtHhGoSdMWGbmHaP"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
