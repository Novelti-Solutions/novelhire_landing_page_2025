'use client'

import React from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { useThemeColor } from '../contexts/theme-context';

const ThemeDrawer = () => {
  const { currentTheme, changeTheme, availableThemes } = useThemeColor();
  return (
    <div className="w-fit inline-block">
      <Drawer>
        <DrawerTrigger asChild>
          <Button variant="outline">Open Drawer</Button>
        </DrawerTrigger>

        <DrawerContent>
          <div className="mx-auto w-full max-w-sm">
            <DrawerHeader>
              <DrawerTitle>Change Theme</DrawerTitle>
              <DrawerDescription>we can change the theme of the site from here</DrawerDescription>
            </DrawerHeader>

            <div className="space-x-4">
              {availableThemes.map((theme) => (
                <Button
                  key={theme}
                  variant={currentTheme === theme ? "default" : "outline"}
                  className="capitalize"
                  onClick={() => changeTheme(theme)}
                >
                  {theme}
                </Button>
              ))}
            </div>

            <DrawerFooter>
              <DrawerClose asChild>
                <Button variant="outline">Close</Button>
              </DrawerClose>
            </DrawerFooter>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default ThemeDrawer;
