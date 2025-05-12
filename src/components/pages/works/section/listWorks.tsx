"use client";

import React, { useState } from "react";
import { project } from "@/data/works";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import FadeInSection from "@/components/animations/fadeInSection";
import { Dialog, DialogContent, DialogOverlay } from "@/components/ui/dialog";
import { ArrowRight, ArrowLeft } from "lucide-react";

export interface ProjectData {
  imgSrc: string;
  year: string;
  name: string;
  desc: string;
  categories: string[];
  url?: string;
}

export const ListWorks = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null
  );
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = (index: number) => {
    setSelectedImageIndex(index);
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    setSelectedImageIndex(null);
  };

  const handleNext = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((prevIndex) =>
        prevIndex === project.length - 1 ? 0 : prevIndex! + 1
      );
    }
  };

  const handlePrev = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((prevIndex) =>
        prevIndex === 0 ? project.length - 1 : prevIndex! - 1
      );
    }
  };

  return (
    <section className="w-full pt-8 pb-[7.25rem]">
      <div className="max-w-lg mx-auto px-4 md:px-0">
        <FadeInSection
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
          delay={1}
        >
          {project.map((proj, index) => (
            <AspectRatio
              ratio={38 / 28}
              key={index}
              className="rounded-[0.625rem] overflow-hidden cursor-pointer"
              onClick={() => handleOpen(index)}
            >
              <Image
                src={proj.imgSrc}
                alt={proj.name}
                className="object-cover"
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
        <DialogOverlay className="w-screen h-screen bg-white z-100 fixed">
          <div className="absolute top-8 left-1/2 -translate-x-1/2 text-bodyMedium font-medium">
            {selectedImageIndex !== null
              ? project[selectedImageIndex].name
              : ""}
          </div>
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-bodyMedium font-medium">
            Click anywhere to close
          </div>
        </DialogOverlay>
        <DialogContent
          onPointerDownOutside={handleClose}
          className="flex items-center justify-center p-0 border-none shadow-none max-w-fit max-h-fit bg-transparent z-[101] focus-visible:outline-0"
        >
          {selectedImageIndex !== null && (
            <div className="relative flex items-center justify-center">
              <button
                onClick={handlePrev}
                className="absolute -left-20 flex items-center justify-center z-10 w-12 h-12 rounded-full bg-gray-50 hover:bg-gray-200 transition-colors cursor-pointer"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <div className="relative transition-transform duration-300 overflow-hidden w-[50rem] h-[37rem]">
                <Image
                  src={project[selectedImageIndex].imgSrc}
                  alt={project[selectedImageIndex].name}
                  fill
                  className="objet-cover"
                />
              </div>
              <button
                onClick={handleNext}
                className="absolute -right-20 flex items-center justify-center z-10 w-12 h-12 rounded-full bg-gray-50 hover:bg-gray-200 transition-colors cursor-pointer"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};
