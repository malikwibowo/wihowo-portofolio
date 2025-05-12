import FadeInSection from "@/components/animations/fadeInSection";
import { RoundedDivider } from "@/components/global/roundedDivider";
import React from "react";

export interface ProjectHeroData {
  title: string;
  subtitle: string;
  category: string[];
  year: string;
}

export const ProjectHeroSection = ({ props }: { props: ProjectHeroData }) => {
  const { title, subtitle, category, year } = props;

  return (
    <section className="w-full pt-[11.75rem] pb-16">
      <div className="max-w-md mx-auto px-4 md:px-0">
        <div className="flex flex-col gap-10">
          <FadeInSection delay={0.6} className="flex flex-col gap-6">
            <h1 className="text-h1 font-medium">{title}</h1>
            <div className="flex items-center justify-between border-y border-y-gray-200 py-3">
              <div className="flex items-center gap-2">
                {category.map((cat, index) => (
                  <div className="flex items-center gap-2" key={index}>
                    {index !== 0 && <RoundedDivider />}
                    <span key={index} className="text-bodyMedium text-gray-600">
                      {cat}
                    </span>
                  </div>
                ))}
              </div>
              <span className="text-bodyMedium text-gray-600">{year}</span>
            </div>
            <span className="text-bodyMedium text-gray-600 mt-4">
              {subtitle}
            </span>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
};
