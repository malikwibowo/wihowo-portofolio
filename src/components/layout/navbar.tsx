"use client";

import React, { useState } from "react";
import { Equal, X } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
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
import { usePathname } from "next/navigation";

import { Button } from "../ui/button";

import Image from "next/image";
import { Footer } from "./footer";
import Link from "next/link";
import HoverImageBurst from "../global/hoverImageBurst";
import FadeInSection from "../animations/fadeInSection";

const imagesBurst = [
  "/assets/images/moments/malik/1.webp",
  "/assets/images/moments/malik/2.webp",
  "/assets/images/moments/malik/3.webp",
  "/assets/images/moments/malik/4.webp",
  "/assets/images/moments/malik/5.webp",
];

export const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const pathname = usePathname();

  // Split the pathname into segments and filter out empty strings
  const pathSegments = pathname.split("/").filter((segment) => segment);

  return (
    <FadeInSection delay={0.2} variant="top-to-bottom">
      <nav className="fixed bg-white top-0 w-full h-[4.5rem] z-99 pointer-events-auto">
        <div className="max-w-md mx-auto px-4 md:px-0 h-full">
          <div className="flex items-center justify-between gap-4 h-full">
            <Breadcrumb className="z-100">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <HoverImageBurst images={imagesBurst}>
                    <Link className="flex items-center gap-2" href="/">
                      <div className="w-8 h-8 rounded-full relative overflow-hidden">
                        <Image
                          fill
                          className="object-cover"
                          src="/assets/images/malikava.webp"
                          alt="Malik Avatar"
                        />
                      </div>
                      <p
                        className={`font-medium text-bodyMedium text-neutral-900 ${
                          pathname === "/" ? "inline" : "hidden"
                        } md:inline`}
                      >
                        malikwibowo
                      </p>
                    </Link>
                  </HoverImageBurst>
                </BreadcrumbItem>
                {pathSegments.length > 0 && (
                  <React.Fragment>
                    <BreadcrumbSeparator>
                      <svg
                        className="w-4 h-4"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.5 13.4987L10.5 2.49866"
                          stroke="#A5AAB3"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </BreadcrumbSeparator>
                    <BreadcrumbItem>
                      <Link href={`/${pathSegments[0]}`}>
                        {pathSegments.length === 1 ? (
                          <span>{pathSegments[0]}</span>
                        ) : (
                          <>
                            <span className="md:hidden">...</span>
                            <span className="hidden md:inline">
                              {pathSegments[0]}
                            </span>
                          </>
                        )}
                      </Link>
                    </BreadcrumbItem>
                  </React.Fragment>
                )}

                {pathSegments.slice(1).map((segment, index) => (
                  <React.Fragment key={index}>
                    <BreadcrumbSeparator>
                      <svg
                        className="w-4 h-4"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.5 13.4987L10.5 2.49866"
                          stroke="#A5AAB3"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </BreadcrumbSeparator>
                    <BreadcrumbItem>
                      <Link
                        href={`/${pathSegments.slice(0, index + 2).join("/")}`}
                      >
                        {segment}
                      </Link>
                    </BreadcrumbItem>
                  </React.Fragment>
                ))}
              </BreadcrumbList>
            </Breadcrumb>
            <div className="flex gap-2 items-center">
              <Drawer
                open={isDrawerOpen}
                onOpenChange={(open) => setIsDrawerOpen(open)} // Sync state with Drawer
                direction="top"
              >
                <DrawerTrigger asChild>
                  <Button
                    variant="outline"
                    size="sm"
                    className={`${isDrawerOpen ? "pointer-events-none" : ""}`}
                  >
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
                </DrawerTrigger>
                <DrawerContent className="top-[4.5rem] border-t border-t-gray-200">
                  <DrawerHeader className="sr-only">
                    <DrawerTitle>Are you absolutely sure?</DrawerTitle>
                  </DrawerHeader>
                  <Footer
                    onLinkClick={() => setIsDrawerOpen(false)}
                    variant="navbar"
                  />
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
    </FadeInSection>
  );
};
