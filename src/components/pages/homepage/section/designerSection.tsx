import { WorkCard } from "@/components/global/workCard";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { staticProject } from "@/data/staticProject";

export const DesignerSection = () => {
  return (
    <section className="w-full pt-4 pb-[7.25rem]">
      <div className="max-w-md mx-auto px-4 md:px-0 h-full">
        <div className="w-full h-[0.0625rem] bg-gray-200 mb-4"></div>
        <div className="flex flex-col gap-6">
          <h2 className="text-bodyMedium font-medium">Designer</h2>
          <p className="text-bodyMedium">
            Currently working at{" "}
            <Button variant="link" className="px-0 underline" asChild>
              <Link href={"https://dipainhouse.com"} target="_blank">
                Dipainhouse
              </Link>
            </Button>{" "}
            — with specializes in User Interface Design.
          </p>
        </div>
        <div className="flex flex-col gap-16 lg:gap-60 mt-14 relative">
          {staticProject.slice(0, 2).map((proj, index) => (
            <WorkCard key={index} project={proj} />
          ))}
        </div>
      </div>
    </section>
  );
};
