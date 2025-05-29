import React from "react";
import FadeInSection from "../animations/fadeInSection";

export interface HeroData {
  title: string;
  subtitle: string;
}

export const HeroSection = (props: HeroData) => {
  const { title, subtitle } = props;

  return (
    <section className="w-full pt-[7.25rem] pb-16 md:pt-[11.75rem] md:pb-[7.25rem]">
      <div className="max-w-md mx-auto px-4 md:px-0">
        <div className="flex flex-col gap-1">
          <FadeInSection delay={0.4}>
            <span className="text-bodyMedium text-gray-600">{subtitle}</span>
            <h1 className="text-h1 font-medium">{title}</h1>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
};
