import React from "react";
import { Equal, Slash } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

import { Button } from "../ui/button";

import Image from "next/image";
import MalikAva from "@/assets/images/malikava.png";
import { Footer } from "./footer";

export const Navbar = () => {
  return (
    <nav className="fixed bg-white top-0 w-full h-[4.5rem] z-99">
      <div className="max-w-md mx-auto px-4 md:px-0 h-full">
        <div className="flex items-center justify-between gap-4 h-full">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="flex items-center gap-2">
                <Image className="w-8 h-8" src={MalikAva} alt="Malik Avatar" />
                malikwibowo
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <Slash />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">home</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <div className="flex gap-2 items-center">
            <Drawer direction="top">
              <DrawerTrigger>
                <Button variant="outline" size="sm">
                  <Equal className="w-4 h-4" />
                  <span>Menu</span>
                </Button>
              </DrawerTrigger>
              <DrawerContent className="top-[4.5rem] border-t border-t-gray-200">
                <DrawerHeader className="sr-only">
                  <DrawerTitle>Are you absolutely sure?</DrawerTitle>
                </DrawerHeader>
                <Footer />
              </DrawerContent>
            </Drawer>
            <Button variant="default" size="sm">
              <span>Contact</span>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
