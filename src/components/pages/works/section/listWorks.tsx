import React from "react";
import { project } from "@/data/works";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";

export const ListWorks = () => {
  return (
    <section className="w-full pt-8 pb-[7.25rem]">
      <div className="max-w-lg mx-auto">
        <div className="grid grid-cols-3 gap-6">
          {project.map((proj, index) => (
            <AspectRatio
              ratio={38 / 28}
              key={index}
              className="rounded-[0.625rem] overflow-hidden"
            >
              <Image
                src={proj.ImgSrc}
                alt={proj.Name}
                className="object-cover"
                fill
              />
            </AspectRatio>
          ))}
        </div>
      </div>
    </section>
  );
};
