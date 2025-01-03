import React from "react";
import Header from "./header";
import HomePage from "./home-page";
import Footer from "./footer";
import { Button } from "./ui/button";
import { ChevronRight, User } from "lucide-react";
import Link from "next/link";

const HomeLayout = ({ children }) => {
  return (
    <div>
      <div className="bg-gradient-to-br   from-fuchsia-50 to-fuchsia-200">
        <div className="bg-[url('/grid-square.svg')]    bg-cover bg-center  w-full">
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
                    className="uppercase hover:bg-transparent bg-transparent border-theme-primary rounded-none"
                  >
                    <User />
                    Features
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
      </div>

      <main className="bg-[#f9f7f7]">{children}</main>
      {/* <Footer /> */}
      <Footer />
    </div>
  );
};

export default HomeLayout;
