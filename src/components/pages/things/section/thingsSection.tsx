import React from "react";
import { ThingsCard } from "../components/thingsCard";
import FadeInSection from "@/components/animations/fadeInSection";
import { ThingProps } from "@/types/sanity.types";

export const ThingsSection = ({ data }: { data: ThingProps[] }) => {
  return (
    <section className="w-full pt-8 pb-[7.25rem]">
      <div className="max-w-md mx-auto px-4 md:px-0">
        <FadeInSection delay={1} className="flex flex-col gap-12 md:gap-16">
          {data.map((thing, index) => (
            <ThingsCard data={thing} key={index} />
          ))}
        </FadeInSection>
      </div>
    </section>
  );
};
