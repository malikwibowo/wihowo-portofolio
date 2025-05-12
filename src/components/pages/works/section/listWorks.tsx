import React from "react";
import { project } from "@/data/works";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import FadeInSection from "@/components/animations/fadeInSection";

export interface ProjectData {
  imgSrc: string;
  year: string;
  name: string;
  desc: string;
  categories: string[];
  url?: string;
}

export const ListWorks = () => {
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
              className="rounded-[0.625rem] overflow-hidden"
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
    </section>
  );
};
