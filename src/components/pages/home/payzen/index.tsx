import React from "react";
import { PayzenContent } from "./section/payzenContent";
import { ProjectHeroData, ProjectHeroSection } from "../components/projectHero";

const data: ProjectHeroData = {
  title: "Payzen",
  subtitle:
    "Payzen is a HR App with the goal to simplifies payroll processing with automated salary calculations, tax compliance, and instant payouts.",
  category: ["User Interface", "User Experience", "Visual Design"],
  year: "2025",
};

export const PayzenPage = () => {
  return (
    <>
      <ProjectHeroSection props={data} />
      <PayzenContent />
    </>
  );
};
