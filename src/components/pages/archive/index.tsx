import React from "react";
import { HeroSection } from "@/components/global/heroSection";
import { ArchiveSection } from "./section/archiveSection";

export const ArchivePage = () => {
  return (
    <>
      <HeroSection title="Archive" subtitle="Old days, but still alive." />
      <ArchiveSection />
    </>
  );
};
