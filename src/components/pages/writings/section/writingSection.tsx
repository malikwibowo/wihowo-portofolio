import React from "react";
import { WritingsItem } from "../components/writingsItem";

import { writingsData, poetryData } from "@/data/writings";
import FadeInSection from "@/components/animations/fadeInSection";

export const WritingSection = () => {
  return (
    <section className="w-full pt-8 pb-[7.25rem]">
      <div className="max-w-md mx-auto px-4 md:px-0">
        <FadeInSection delay={1} className="flex flex-col gap-6">
          {writingsData.map((data, index) => (
            <WritingsItem data={data} key={index} />
          ))}
          {poetryData.map((data, index) => (
            <WritingsItem data={data} key={index} />
          ))}
        </FadeInSection>
      </div>
    </section>
  );
};
