import { archiveData } from "@/data/archive";
import React from "react";
import { ArchiveItem } from "../components/archiveItem";

export const ArchiveSection = () => {
  return (
    <section className="w-full pt-8 pb-[7.25rem]">
      <div className="max-w-md mx-auto px-4 md:px-0">
        <div className="flex flex-col gap-6">
          {archiveData.map((data, index) => (
            <ArchiveItem data={data} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
