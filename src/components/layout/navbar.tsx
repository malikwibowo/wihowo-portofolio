"use client";

import React, { useState } from "react";
import { Equal, Slash, X } from "lucide-react";
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
} from "@/components/ui/drawer";

import { Button } from "../ui/button";

import Image from "next/image";
import MalikAva from "@/assets/images/malikava.png";
import { Footer } from "./footer";
import Link from "next/link";
import HoverImageBurst from "../global/hoverImageBurst";

const imagesBurst = [
  "/assets/images/moments/malik/1.webp",
  "/assets/images/moments/malik/2.webp",
  "/assets/images/moments/malik/3.webp",
  "/assets/images/moments/malik/4.webp",
  "/assets/images/moments/malik/5.webp",
];

export const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerToggle = (event: React.MouseEvent) => {
    event.stopPropagation();
    setIsDrawerOpen((prev) => !prev);
  };

  return (
    <nav className="fixed bg-white top-0 w-full h-[4.5rem] z-99 pointer-events-auto">
      <div className="max-w-md mx-auto px-4 md:px-0 h-full">
        <div className="flex items-center justify-between gap-4 h-full">
          <Breadcrumb className="z-100">
            <BreadcrumbList>
              <HoverImageBurst images={imagesBurst}>
                <BreadcrumbItem className="flex items-center gap-2">
                  <Image
                    className="w-8 h-8"
                    src={MalikAva}
                    alt="Malik Avatar"
                  />
                  malikwibowo
                </BreadcrumbItem>
              </HoverImageBurst>
              <BreadcrumbSeparator>
                <Slash />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">home</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <div className="flex gap-2 items-center">
            <Drawer
              open={isDrawerOpen}
              onOpenChange={(open) => setIsDrawerOpen(open)}
              direction="top"
            >
              <Button variant="outline" size="sm" onClick={handleDrawerToggle}>
                {isDrawerOpen ? (
                  <>
                    <X className="w-4 h-4" />
                    <span>Close</span>
                  </>
                ) : (
                  <>
                    <Equal className="w-4 h-4" />
                    <span>Menu</span>
                  </>
                )}
              </Button>
              <DrawerContent className="top-[4.5rem] border-t border-t-gray-200">
                <DrawerHeader className="sr-only">
                  <DrawerTitle>Are you absolutely sure?</DrawerTitle>
                </DrawerHeader>
                <Footer />
              </DrawerContent>
            </Drawer>
            <Button variant="default" size="sm" asChild>
              <Link href="/contact">
                <span>Contact</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
