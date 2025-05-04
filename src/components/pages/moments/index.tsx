import React from "react";
import { HeroSection } from "@/components/global/heroSection";
import { MomentSection } from "./section/momentSection";

export const MomentsPage = () => {
  return (
    <>
      <HeroSection title="Moments" subtitle="Using my camera to take" />
      <MomentSection />
    </>
  );
};
