import React from "react";
import { HeroSection } from "@/components/global/heroSection";
import { ListWorks } from "@/components/pages/works/section/listWorks";

export const Workspage = () => {
  return (
    <>
      <HeroSection title="Collection of Design Work" subtitle="2020-2025" />
      <ListWorks />
    </>
  );
};
