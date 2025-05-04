import React from "react";
import { ClauseContent } from "./section/clause";
import { ProjectHeroData, ProjectHeroSection } from "../components/projectHero";

const data: ProjectHeroData = {
  title: "Clause",
  subtitle:
    "Clause is a platform to manage the end-to-end contract lifecycle with collaborative application.",
  category: ["User Interface", "Visual Design", "Animation"],
  year: "2024",
};

export const ClausePage = () => {
  return (
    <>
      <ProjectHeroSection props={data} />
      <ClauseContent />
    </>
  );
};
