import ContactUsForm from "@/sections/contactus/contact-us-form";
import Image from "next/image";
import Header from "@/components/header";
import { cn } from "@/lib/utils";
import HeroPage from "./hero-page";

const HeaderHeroSection = () => {
  return (
    <div className="relative z-10 ">
      {/* image1 */}
      <Image
        src="/features/bg-top.svg"
        alt="top"
        width={500}
        height={500}
        className="w-full h-36 -z-10  opacity-10 object-cover absolute top-0 left-0"
      />
      {/* image2 */}
      <Image
        src="/features/bg-bottom.svg"
        alt="bottom"
        width={500}
        height={500}
        className="w-full h-36 -z-10 opacity-10  object-cover absolute bottom-0 left-0"
      />

      <Header />
      <div
        className={cn(
          "flex flex-col mx-auto max-w-screen-xl  place-items-center h-auto p-8 lg:py-0 lg:min-h-[calc(100vh-4rem)]  md:justify-between lg:flex-row"
        )}
      >
        <HeroPage
          caption={
            "See How NovelHire Revolutionizes Talent Evaluation and Development"
          }
          title={"Experience AI-Driven Skill Assessments in Action"}
          content={
            "Ready to explore how NovelHire can elevate your organization’s hiring, onboarding, and employee development processes? Schedule a personalized demonstration to witness our AI-driven interviews and comprehensive Skill Gap Analysis in real time."
          }
        />
      </div>
    </div>
  );
};

export default HeaderHeroSection;
