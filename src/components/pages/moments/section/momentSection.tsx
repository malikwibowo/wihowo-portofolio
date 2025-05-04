"use client";

import React from "react";
import Image from "next/image";

import { momentsData } from "@/data/moments";

export const MomentSection = () => {
  return (
    <section className="w-full pt-8 pb-[7.25rem]">
      <div className="max-w-lg mx-auto px-4 md:px-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
          {momentsData.map((data, index) => (
            <div
              key={index}
              className="flex items-center justify-center w-full aspect-square p-8 bg-[#fafafa] overflow-hidden"
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
    </section>
  );
};
