import React from "react";
import { ArchiveItem } from "../components/archiveItem";
import FadeInSection from "@/components/animations/fadeInSection";
import { ArchiveProps } from "@/types/sanity.types";

export const ArchiveSection = ({ data }: { data: ArchiveProps[] }) => {
  return (
    <section className="w-full pt-8 pb-[7.25rem]">
      <div className="max-w-md mx-auto px-4 md:px-0">
        <FadeInSection delay={1} className="flex flex-col gap-6">
          {data.map((data, index) => (
            <ArchiveItem data={data} key={index} />
          ))}
        </FadeInSection>
      </div>
    </section>
  );
};
