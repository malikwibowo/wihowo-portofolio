import React from "react";
import { ThingsCard } from "../components/thingsCard";

import { thingsData } from "@/data/things";
import FadeInSection from "@/components/animations/fadeInSection";

export const ThingsSection = () => {
  return (
    <section className="w-full pt-8 pb-[7.25rem]">
      <div className="max-w-md mx-auto px-4 md:px-0">
        <FadeInSection delay={1} className="flex flex-col gap-12 md:gap-16">
          {thingsData.map((thing, index) => (
            <ThingsCard data={thing} key={index} />
          ))}
        </FadeInSection>
      </div>
    </section>
  );
};
