import FadeInSection from "@/components/animations/fadeInSection";
import React from "react";

export const HeroSection = () => {
  return (
    <section className="w-full pt-[13rem] pb-[11.5rem]">
      <div className="max-w-md mx-auto px-4 md:px-0 h-full">
        <div className="flex justify-center h-full flex-col gap-1">
          <FadeInSection delay={0.4}>
            <p>Hi, salam kenal!</p>
            <h1 className="text-h1">
              <span className="font-medium">Malik Wibowo,</span> UI/UX Designer
            </h1>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
};
