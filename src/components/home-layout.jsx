import React from "react";
import Header from "./header";
import HomePage from "./home-page";
import Footer from "./footer";
import { Button } from "./ui/button";
import { ChevronRight, User } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const HomeLayout = ({ children }) => {
  return (
    <div>
      <div className="bg-gradient-to-br     from-fuchsia-50 to-fuchsia-200">
        <div className="relative z-10 w-full">
          <Image
            src="/grid-square.svg"
            alt="top"
            width={500}
            height={500}
            className="w-full h-full  opacity-40 -z-10 object-cover absolute top-0"
          />

          <Header />
          <HomePage
            caption="NovelHire Talent Solutions"
            title="Interviews Reimagined"
            subTitle="Effortlessly identify, evaluate, and onboard top technical talent with cutting-edge tools and data-driven insights."
            buttons={
              <div className="flex items-center mt-4 gap-4">
                <Link
                  href="/features"
                  className="text-sm  font-semibold uppercase"
                >
                  <Button
                    variant="outline"
                    className="uppercase hover:bg-transparent bg-transparent border-black rounded-none"
                  >
                    <User />
                    Features
                  </Button>
                </Link>
                <Link
                  href="/requestdemo"
                  className="text-sm font-semibold uppercase"
                >
                  <Button className="bg-gradient-to-b from-theme-primary to-theme-secondary rounded-none	uppercase">
                    request demo
                    <ChevronRight />
                  </Button>
                </Link>
              </div>
            }
          />
        </div>
      </div>

      <main className="bg-[#f9f7f7]">{children}</main>
      {/* <Footer /> */}
      <Footer />
    </div>
  );
};

export default HomeLayout;
