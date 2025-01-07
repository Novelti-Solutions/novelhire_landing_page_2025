"use client";

import ContactUsForm from "@/sections/contactus/contact-us-form";
import HeroPage from "@/sections/contactus/hero-page";
import Image from "next/image";
import Header from "@/components/header";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

const HeaderHeroSection = () => {
  return (
    <div className="relative z-10 ">
      {/* image1 */}
      <Image
        src="/features/bg-top.svg"
        alt="df"
        width={500}
        height={500}
        className="w-full h-48 -z-10  opacity-40 object-cover absolute top-0 left-0"
      />
      {/* image2 */}
      <Image
        src="/features/bg-bottom.svg"
        alt="df"
        width={500}
        height={500}
        className="w-full h-48 -z-10 opacity-40  object-cover absolute bottom-0 left-0"
      />

      <Header />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className={cn("flex flex-col mx-auto max-w-screen-xl py-16 md:justify-between lg:flex-row")}
      >
        <HeroPage
          caption={"Shape the Future of Talent Development Together"}
          title={"Connect with NovelHire"}
          content={
            "We’re here to answer any questions you may have about how NovelHire can transform your organization’s talent assessment and development process. "
          }
        />

        <ContactUsForm />
      </motion.div>
    </div>
  );
};

export default HeaderHeroSection;
