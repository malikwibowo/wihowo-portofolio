import Image from "next/image";
import React from "react";

export interface ThingsCardProps {
  title: string;
  description: string;
  imgSrc: string;
  category: string;
}

interface ThingsCardComponentProps {
  data: ThingsCardProps;
}

export const ThingsCard: React.FC<ThingsCardComponentProps> = ({ data }) => {
  const { title, description, imgSrc, category } = data;

  return (
    <div className="grid grid-cols-2 gap-6">
      <div className="aspect-square w-full relative rounded-xl overflow-hidden">
        <Image src={imgSrc} alt={title} fill className="object-cover" />
      </div>
      <div className="flex flex-col py-8 gap-6">
        <span className="text-bodyMedium text-gray-600">{category}</span>
        <div className="flex flex-col gap-1">
          <span className="text-bodyMedium font-medium">{title}</span>
          <p className="text-bodyMedium text-gray-600 whitespace-pre-line">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};
