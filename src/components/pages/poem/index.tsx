"use client";

import { PortableText } from "next-sanity";
import React from "react";
import { PoetryProps } from "@/types/sanity.types";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import FadeInSection from "@/components/animations/fadeInSection";

export const PoemsPage = ({
  data,
  prevPoem,
  nextPoem,
}: {
  data: PoetryProps;
  prevPoem: PoetryProps | null;
  nextPoem: PoetryProps | null;
}) => {
  console.log("prev", prevPoem);

  console.log("next", nextPoem);

  return (
    <>
      <section className="w-full pt-[7.25rem] pb-16 md:pt-[11.75rem] md:pb-[7.25rem]">
        <div className="max-w-md mx-auto px-4 md:px-0">
          <FadeInSection
            delay={0.4}
            className="flex flex-col gap-12 text-gray-600"
          >
            <div className="flex flex-col gap-3">
              <h1 className="text-h1 font-medium text-gray-900">
                {data.title}
              </h1>
              <PortableText value={data.content ?? []} />
            </div>
            <div className="flex flex-row gap-8">
              {prevPoem ? (
                <Button variant="secondary" size="icon" asChild>
                  <Link href={`/writings/${prevPoem.slug}`}>
                    <ArrowLeft />
                  </Link>
                </Button>
              ) : (
                <Button variant="secondary" size="icon" disabled>
                  <ArrowLeft />
                </Button>
              )}

              {nextPoem ? (
                <Button variant="secondary" size="icon" asChild>
                  <Link href={`/writings/${nextPoem.slug}`}>
                    <ArrowRight />
                  </Link>
                </Button>
              ) : (
                <Button variant="secondary" size="icon" disabled>
                  <ArrowRight />
                </Button>
              )}
            </div>
          </FadeInSection>
        </div>
      </section>
    </>
  );
};
