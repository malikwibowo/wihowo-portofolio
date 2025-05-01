import Image from "next/image";
import React from "react";
import { Minus } from "lucide-react";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";

// Define the type for the project data
export interface ProjectData {
  ImgSrc: string; // Path to the image
  Year: string; // Year of the project
  Name: string; // Project name
  Desc: string; // Project description
  Categories: string[]; // List of categories
}

// Accept props in the component
interface WorkCardProps {
  project: ProjectData;
}

export const WorkCard: React.FC<WorkCardProps> = ({ project }) => {
  const { ImgSrc, Year, Name, Desc, Categories } = project;

  return (
    <div className="flex flex-col gap-8 w-full">
      <AspectRatio
        ratio={64 / 43}
        className="rounded-[0.625rem] overflow-hidden"
      >
        <Image src={ImgSrc} alt={Name} className="object-cover" fill />
      </AspectRatio>

      <div className="grid grid-cols-[1.4fr_4.7fr] gap-6">
        <div>
          <span className="text-bodyMedium font-medium">{Year}</span>
        </div>
        <div className="flex flex-col gap-3 max-w-[24rem]">
          <span className="text-bodyMedium font-medium">{Name}</span>
          <p className="text-bodyMedium">{Desc}</p>
          <div className="flex gap-2 items-center">
            <Minus className="text-gray-400" />
            {Categories.map((category, index) => (
              <span key={index} className="text-bodySmall text-gray-600">
                {category}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
