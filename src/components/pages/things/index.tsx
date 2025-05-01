import React from "react";
import { HeroSection } from "@/components/global/heroSection";
import { ThingsSection } from "@/components/pages/things/section/thingsSection";

export const Thingspage = () => {
  return (
    <>
      <HeroSection title="My favourite things" subtitle="A collection of" />
      <ThingsSection />
    </>
  );
};
