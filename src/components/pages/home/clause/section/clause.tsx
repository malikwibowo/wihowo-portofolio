import FadeInSection from "@/components/animations/fadeInSection";
import ImageWrapper from "@/components/pages/home/components/imageWrapper";
import React from "react";

export const ClauseContent = () => {
  return (
    <div className="pt-8 pb-[7.25rem]">
      <div className="max-w-lg mx-auto px-4 md:px-0">
        <FadeInSection delay={1.2} className="w-full flex flex-col gap-6">
          <video
            className="w-full h-auto"
            autoPlay
            muted
            loop
            preload="auto"
            playsInline
          >
            <source
              src="/assets/images/works/clause/clause.webm"
              type="video/webm"
            />
          </video>
          <ImageWrapper src="/assets/images/works/clause/clause1.webp" />
          <ImageWrapper src="/assets/images/works/clause/clause2.webp" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ImageWrapper src="/assets/images/works/clause/clause3.webp" />
            <ImageWrapper src="/assets/images/works/clause/clause4.webp" />
          </div>

          <ImageWrapper src="/assets/images/works/clause/clause5.webp" />
          <ImageWrapper src="/assets/images/works/clause/clause6.webp" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ImageWrapper src="/assets/images/works/clause/clause7.webp" />
            <ImageWrapper src="/assets/images/works/clause/clause8.webp" />
          </div>
          <ImageWrapper src="/assets/images/works/clause/clause9.webp" />
          <ImageWrapper src="/assets/images/works/clause/clause10.webp" />
        </FadeInSection>
      </div>
    </div>
  );
};
