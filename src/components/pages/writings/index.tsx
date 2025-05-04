import React from "react";
import { HeroSection } from "@/components/global/heroSection";
import { WritingSection } from "@/components/pages/writings/section/writingSection";

export const WritingsPage = () => {
  return (
    <>
      <HeroSection title="Writing" subtitle="Exploring things," />
      <WritingSection />
    </>
  );
};
