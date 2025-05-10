"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Dialog, DialogContent, DialogOverlay } from "@/components/ui/dialog";
import { momentsData } from "@/data/moments";

export const MomentSection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [imageDimensions, setImageDimensions] = useState({
    width: 0,
    height: 0,
  });
  const [scale, setScale] = useState(1);

  const handleOpen = (imgSrc: string) => {
    setSelectedImage(imgSrc);
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    setSelectedImage(null);
    setImageDimensions({ width: 0, height: 0 });
    setScale(1);
  };

  const handleImageLoad = (img: HTMLImageElement) => {
    setImageDimensions({
      width: img.naturalWidth,
      height: img.naturalHeight,
    });
  };

  const toggleZoom = () => {
    setScale((prevScale) => (prevScale === 1 ? 1.5 : 1));
  };

  return (
    <section className="w-full pt-8 pb-[7.25rem]">
      <div className="max-w-lg mx-auto px-4 md:px-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
          {momentsData.map((data, index) => (
            <div
              key={index}
              onClick={() => handleOpen(data.imgSrc)}
              className="cursor-pointer flex items-center justify-center w-full aspect-square p-8 bg-[#fafafa] overflow-hidden"
            >
              <div className="relative w-full h-full">
                <Image
                  src={data.imgSrc}
                  alt=""
                  className="object-contain"
                  fill
                />
              </div>
            </div>
          ))}
        </div>
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
            {selectedImage && selectedImage.split("/").pop()}{" "}
          </div>
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-bodyMedium font-medium">
            Click anywhere to close
          </div>
        </DialogOverlay>
        <DialogContent
          onClick={(e) => {
            if (!(e.target as HTMLElement).closest("img")) {
              handleClose();
            }
          }}
          onPointerDownOutside={handleClose}
          className="flex items-center justify-center p-0 border-none shadow-none max-w-fit max-h-fit bg-transparent z-[101] focus-visible:outline-0"
        >
          {selectedImage && (
            <div
              className="relative transition-transform duration-300 overflow-hidden"
              style={{
                width: `${imageDimensions.width}px`,
                height: `${imageDimensions.height}px`,
                transform: `scale(${scale})`,
                cursor: scale === 1 ? "zoom-in" : "zoom-out",
              }}
              onClick={toggleZoom}
            >
              <Image
                src={selectedImage}
                alt="Zoomed"
                fill
                className="object-contain w-full h-full"
                onLoadingComplete={handleImageLoad}
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};
