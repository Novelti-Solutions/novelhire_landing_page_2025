"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { ChevronRight, MenuIcon, User } from "lucide-react";
import { Drawer, DrawerContent } from "./ui/drawer";
import { useBoolean } from "@/hooks/use-boolean";
import ThemeDrawer from "./theme-drawer";

const Header = () => {
  const { value, onTrue, onFalse } = useBoolean();
  return (
    <>
      <div className="hidden  items-center justify-between py-4 px-16 lg:flex">
        <div className="flex items-center gap-12">
          <Link href="/">
            <Image
              src="/logo.svg"
              alt="logo"
              width={120}
              height={200}
              className="h-8 w-auto object-contain"
            />
          </Link>

          <div>
            <ul className="flex gap-8">
              <li>
                <Link
                  href="/features"
                  className="text-sm font-semibold uppercase text-theme-secondaryText"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="/usecases"
                  className="text-sm uppercase text-theme-secondaryText"
                >
                  usecases
                </Link>
              </li>
              <li>
                <Link
                  href="/requestdemo"
                  className="text-sm font-semibold uppercase text-theme-secondaryText"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/contactus"
                  className="text-sm uppercase text-theme-secondaryText"
                >
                  help
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            className="uppercase hover:bg-transparent bg-transparent rounded-none border-black"
          >
            <User />
            Sign in
          </Button>

          {process.env.NODE_ENV === "development" && <ThemeDrawer />}

          <Link href="/requestdemo" className="text-sm font-semibold uppercase">
            <Button className="bg-gradient-to-b from-theme-primary to-theme-secondary rounded-none	uppercase">
              request demo
              <ChevronRight />
            </Button>
          </Link>
        </div>
      </div>

      <div className="flex items-center justify-between p-4 lg:hidden">
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="logo"
            width={120}
            height={200}
            className="h-8 w-auto object-contain"
          />
        </Link>
        <Button onClick={onTrue} variant="outline" size="icon">
          <MenuIcon />
        </Button>
      </div>

      <Drawer open={value} onClose={onFalse}>
        <DrawerContent>
          <ul className="my-2 flex flex-col items-center gap-2">
            <Link href="/" className="w-full">
              <Button
                variant="ghost"
                className="w-full text-sm font-semibold uppercase"
              >
                Home
              </Button>
            </Link>
            <Link href="/features" className="w-full">
              <Button
                variant="ghost"
                className="w-full text-sm font-semibold uppercase"
              >
                Features
              </Button>
            </Link>
            <Link href="/usecases" className="w-full">
              <Button
                variant="ghost"
                className="w-full text-sm font-semibold uppercase"
              >
                usecases
              </Button>
            </Link>

            <Link href="/requestdemo" className="w-full">
              <Button
                variant="ghost"
                className="w-full text-sm font-semibold uppercase"
              >
                Pricing
              </Button>
            </Link>
            <Link href="/contactus" className="w-full">
              <Button
                variant="ghost"
                className="w-full text-sm font-semibold uppercase"
              >
                Help
              </Button>
            </Link>
          </ul>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;
