import Assessment from "@/sections/features/assessment";
import Header from "@/components/header";
import HomePage from "@/components/home-page";
import { Button } from "@/components/ui/button";
import { ChevronRight, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const HeaderHeroSection = () => {
  return (
    <div className="relative z-10 bg-gradient-to-br from-pink-200 via-blue-50 to-pink-200 ">
      {/* image1 */}
      <Image src="/features/bg-top.svg" alt="df" width={500} height={500} className="w-full h-48 -z-10  opacity-40 object-cover absolute top-0" />
      {/* image2 */}
      <Image
        src="/features/bg-bottom.svg"
        alt="df"
        width={500}
        height={500}
        className="w-full h-48 -z-10 opacity-40  object-cover absolute bottom-0"
      />

      <Header />
      <HomePage
        isReverse
        caption="usecases"
        title="Discover How NovelHire Transforms Technical Hiring"
        subTitle="From startups to enterprises, NovelHire helps organizations streamline hiring, reduce bias, and build high-performing teams."
        buttons={
          <div className="flex items-center mt-4 gap-4">
            <Link href="/usecases" className="text-sm  font-semibold uppercase">
              <Button variant="outline" className="uppercase hover:bg-transparent bg-transparent border-black rounded-none">
                <User />
                Usecases
              </Button>
            </Link>
            <Link href="/requestdemo" className="text-sm font-semibold uppercase">
              <Button className="bg-gradient-to-b from-theme-primary to-theme-secondary rounded-none	uppercase hover:bg-theme-secondary">
                request demo
                <ChevronRight />
              </Button>
            </Link>
          </div>
        }
      />
    </div>
  );
};

export default HeaderHeroSection;
