import React from "react";
import { WritingsItem } from "../components/writingsItem";

import { writingsData, poetryData } from "@/data/writings";

export const WritingSection = () => {
  return (
    <section className="w-full pt-8 pb-[7.25rem]">
      <div className="max-w-md mx-auto px-4 md:px-0">
        <div className="flex flex-col gap-6">
          {writingsData.map((data, index) => (
            <WritingsItem data={data} key={index} />
          ))}
          {poetryData.map((data, index) => (
            <WritingsItem data={data} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
