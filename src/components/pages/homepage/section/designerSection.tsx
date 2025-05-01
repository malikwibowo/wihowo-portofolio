import { WorkCard } from "@/components/global/workCard";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { project } from "@/data/works";

export const DesignerSection = () => {
  return (
    <section className="w-full pt-4">
      <div className="max-w-md mx-auto h-full">
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
        <div className="flex flex-col gap-16 mt-14">
          {project.map((proj, index) => (
            <WorkCard key={index} project={proj} />
          ))}
        </div>
        <div className="w-full h-[0.0625rem] bg-gray-200 mt-[7.25rem]"></div>
      </div>
    </section>
  );
};
