import React from "react";
import { WritingsItem } from "../components/writingsItem";
import { PoetryItem } from "../components/poetryItem";

import FadeInSection from "@/components/animations/fadeInSection";
import { PoetryProps, WritingProps } from "@/types/sanity.types";

export const WritingSection = ({
  dataWriting,
  poetryData,
}: {
  dataWriting: WritingProps[];
  poetryData: PoetryProps[];
}) => {
  return (
    <section className="w-full pt-8 pb-[7.25rem]">
      <div className="max-w-md mx-auto px-4 md:px-0">
        <FadeInSection delay={1} className="flex flex-col gap-6">
          {dataWriting.map((data, index) => (
            <WritingsItem data={data} key={index} />
          ))}
          {poetryData.map((data, index) => (
            <PoetryItem data={data} key={index} />
          ))}
        </FadeInSection>
      </div>
    </section>
  );
};
