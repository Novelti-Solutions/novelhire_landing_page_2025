import Header from "@/components/header";
import HomePage from "@/components/home-page";
import { Button } from "@/components/ui/button";
import { ChevronRight, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const HeaderHeroSection = () => {
  return (
    <div className="relative z-10 bg-gradient-to-br  from-blue-200  to-fuchsia-100 ">
      {/* image1 */}
      <Image
        src="/features/bg-top.svg"
        alt="top"
        width={500}
        height={500}
        className="w-full h-48 -z-10  opacity-10 object-cover absolute top-0"
      />
      {/* image2 */}
      <Image
        src="/features/bg-bottom.svg"
        alt="bottom"
        width={500}
        height={500}
        className="w-full h-48 -z-10 opacity-10  object-cover absolute bottom-0"
      />

      <Header />
      <HomePage
        caption="Features"
        title="Discover the Features That Power Smarter Hiring"
        subTitle="From advanced assessments to collaborative tools, NovelHire equips you with everything you need to hire better, faster, and more confidently."
        buttons={
          <div className="flex items-center mt-4 gap-4">
            <Link href="/usecases" className="text-sm  font-semibold uppercase">
              <Button
                variant="outline"
                className="uppercase hover:bg-transparent bg-transparent border-theme-primary rounded-none"
              >
                <User />
                Usecases
              </Button>
            </Link>
            <Link
              href="/requestdemo"
              className="text-sm font-semibold uppercase"
            >
              <Button className=" bg-theme-primary rounded-none	uppercase hover:bg-theme-secondary">
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
