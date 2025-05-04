import Image from "next/image";
import React from "react";
import { Minus } from "lucide-react";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import Link from "next/link";

export interface ProjectData {
  imgSrc: string;
  year: string;
  name: string;
  desc: string;
  categories: string[];
  url?: string;
}

interface WorkCardProps {
  project: ProjectData;
}

export const WorkCard: React.FC<WorkCardProps> = ({ project }) => {
  const { imgSrc, year, name, desc, categories, url } = project;

  return (
    <Link href={url ? url : "#"}>
      <div className="flex flex-col gap-8 w-full">
        <AspectRatio
          ratio={64 / 43}
          className="rounded-[0.625rem] overflow-hidden"
        >
          <Image src={imgSrc} alt={name} className="object-cover" fill />
        </AspectRatio>

        <div className="grid grid-cols-[1.4fr_4.7fr] gap-6">
          <div>
            <span className="text-bodyMedium font-medium">{year}</span>
          </div>
          <div className="flex flex-col gap-3 max-w-[24rem]">
            <span className="text-bodyMedium font-medium">{name}</span>
            <p className="text-bodyMedium">{desc}</p>
            <div className="flex gap-2 items-center">
              <Minus className="text-gray-400" />
              {categories.map((category, index) => (
                <span key={index} className="text-bodySmall text-gray-600">
                  {category}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
