"use client";

import React, { useState, useEffect } from "react";
// import { project } from "@/data/works";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import FadeInSection from "@/components/animations/fadeInSection";
import { Dialog, DialogContent, DialogOverlay } from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { WorksProps } from "@/types/sanity.types";
import { DialogTitle } from "@radix-ui/react-dialog";

export interface ProjectData {
  imgSrc: string;
  year: string;
  name: string;
  desc: string;
  categories: string[];
  url?: string;
}

export const ListWorks = ({ project }: { project: WorksProps[] }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);
  const [isOpen, setIsOpen] = useState(false);
  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);

  useEffect(() => {
    if (isOpen && carouselApi) {
      carouselApi.scrollTo(selectedImageIndex);
    }
  }, [isOpen, carouselApi, selectedImageIndex]);

  useEffect(() => {
    if (!carouselApi) return;

    const updateSelectedIndex = () => {
      setSelectedImageIndex(carouselApi.selectedScrollSnap());
    };

    setSelectedImageIndex(carouselApi.selectedScrollSnap());
    carouselApi.on("select", updateSelectedIndex);

    return () => {
      carouselApi.off("select", updateSelectedIndex);
    };
  }, [carouselApi]);

  const handleOpen = (index: number) => {
    setSelectedImageIndex(index);
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    setSelectedImageIndex(0);
  };

  return (
    <section className="w-full pt-8 pb-[7.25rem]">
      <div className="max-w-lg mx-auto px-4 md:px-0">
        <FadeInSection
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
          delay={1}
          stagger={0.15}
        >
          {project.map((proj, index) => (
            <AspectRatio
              ratio={38 / 28}
              key={index}
              className="rounded-[0.625rem] overflow-hidden cursor-pointer"
              onClick={() => handleOpen(index)}
            >
              <Image
                src={proj.imgSrc ? proj.imgSrc : ""}
                alt={proj.name ? proj.name : "Project Image"}
                className="object-cover scale-[1.025] hover:scale-100 transition-transform duration-700 ease-in-out"
                fill
              />
            </AspectRatio>
          ))}
        </FadeInSection>
      </div>

      <Dialog
        open={isOpen}
        onOpenChange={(open) => {
          setIsOpen(open);
          if (!open) handleClose();
        }}
      >
        <DialogOverlay className="w-screen h-screen  bg-white z-100 fixed">
          <div className="absolute top-8 left-1/2 -translate-x-1/2 text-bodyMedium font-medium">
            {project[selectedImageIndex]?.name || ""}
          </div>
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-bodyMedium font-medium">
            Click anywhere to close
          </div>
        </DialogOverlay>
        <DialogContent
          onPointerDownOutside={handleClose}
          className="flex items-center justify-center p-0 border-none shadow-none max-w-fit max-h-fit bg-transparent z-[101] focus-visible:outline-0"
        >
          <DialogTitle className="sr-only"></DialogTitle>
          <Carousel
            setApi={setCarouselApi}
            className="relative flex items-center justify-center aspect-[50/37] max-w-full w-[50rem] px-4 md:px-0"
          >
            <CarouselContent className="w-full">
              {project.map((proj, index) => (
                <CarouselItem
                  className="relative aspect-[50/37] w-full max-h-[75vh]"
                  key={index}
                >
                  <Image
                    src={proj.imgSrc ? proj.imgSrc : ""}
                    alt={proj.name ? proj.name : ""}
                    fill
                    className="object-cover"
                    quality={100}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselNext />
            <CarouselPrevious />
          </Carousel>
        </DialogContent>
      </Dialog>
    </section>
  );
};
