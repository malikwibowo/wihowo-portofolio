import React from "react";
import { ThingsCard } from "../components/thingsCard";

import { thingsData } from "@/data/things";

export const ThingsSection = () => {
  return (
    <section className="w-full pt-8 pb-[7.25rem]">
      <div className="max-w-md mx-auto px-4 md:px-0">
        <div className="flex flex-col gap-16">
          {thingsData.map((thing, index) => (
            <ThingsCard data={thing} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
