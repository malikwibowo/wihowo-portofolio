import { ThingProps } from "@/types/sanity.types";
import Image from "next/image";
import React from "react";

export const ThingsCard = ({ data }: { data: ThingProps }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
      <div className="aspect-square w-full relative rounded-xl overflow-hidden">
        <Image
          src={data.imgSrc ? data.imgSrc : ""}
          alt={data.title ? data.title : ""}
          fill
          className="object-cover"
        />
      </div>
      <div className="flex flex-col py-1 md:py-8 gap-2 md:gap-6">
        <span className="text-bodyMedium text-gray-600">{data.category}</span>
        <div className="flex flex-col gap-1">
          <span className="text-bodyMedium font-medium">{data.title}</span>
          <p className="text-bodyMedium text-gray-600 whitespace-pre-line">
            {data.description}
          </p>
        </div>
      </div>
    </div>
  );
};
