import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { footerData } from "../../data";
import GradientCircle from "./gradient-circle";
import { Button } from "./ui/button";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="relative grid grid-cols-12 gap-5 bg-black md:gap-2">
      {/* column 1  */}
      <div className="col-span-12 flex flex-col items-start justify-between gap-10 p-10 md:col-span-2">
        <Image width={200} height={200} src="./logodark.svg" alt="Novelsync" className="mb-6" />
        <div>
          <h3 className="text mb-1 text-xl font-semibold text-white">About NovelHire</h3>
          <p className="text-sm leading-5 text-muted-foreground">
            NovelHire is a premier AI-based Skill Assessment Platform focused on empowering organizations through targeted employee development.
          </p>
        </div>

        <Button variant="primary" className="rounded-none bg-theme-primary hover:bg-theme-secondary text-white">
          Request Demo
          <ChevronRight />
        </Button>
      </div>
      <div className="absolute left-[17%] right-0 top-0 hidden h-full w-[1px] bg-gray-700 md:flex" />
      {/* color 2  */}
      <div className="col-span-12 flex w-full flex-col items-center justify-between gap-4 p-10 md:col-span-10 md:p-10 md:pl-20">
        <div className="grid-col-2 grid w-full gap-10 text-white md:grid-cols-4">
          {Object.keys(footerData).map((key) => {
            return (
              <div key={key} className="flex flex-col items-start justify-center gap-5">
                <p className="text-sm font-semibold capitalize">{key}</p>
                {footerData[key].map((item) => {
                  return (
                    <span key={item.title} className="items-flex flex gap-2">
                      <p className="text-sm capitalize text-muted-foreground">{item.title}</p>
                      {item.isNew && (
                        <span className="flex items-center gap-1">
                          <GradientCircle /> <p className="text-sm text-white">New</p>
                        </span>
                      )}
                    </span>
                  );
                })}
              </div>
            );
          })}
        </div>
        <div className="flex w-full flex-col items-center justify-between gap-5 md:flex-row">
          <span className="text-xs text-muted-foreground">{`@${year} NovelSync All Rights Reserved`}</span>
          <span className="flex gap-10">
            <Link className="text-xs text-muted-foreground" href="/privacypolicy">
              Privacy Policy
            </Link>
            <Link className="text-xs text-muted-foreground" href="/termsandcondition">
              Terms of Service
            </Link>
            <Link className="text-xs text-muted-foreground" href="/cookies">
              Cookies Settings
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
