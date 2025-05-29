import React from "react";
import FadeInSection from "@/components/animations/fadeInSection";
import { ArchiveSection } from "./section/archiveSection";
import { client } from "@/sanity/client";
import { ArchiveProps } from "@/types/sanity.types";

const POSTS_QUERY = `*[_type == "archive"] | order(_createdAt asc){
  _id,
  title,
  "imgSrc": imgSrc.asset->url,
  url
}`;
const options = { next: { revalidate: 30 } };

export const ArchivePage = async () => {
  const data = await client.fetch<ArchiveProps[]>(POSTS_QUERY, {}, options);

  return (
    <>
      <section className="w-full pt-[7.25rem] pb-16 md:pt-[11.75rem] md:pb-8">
        <div className="max-w-md mx-auto px-4 md:px-0">
          <div className="flex flex-col gap-1">
            <FadeInSection delay={0.4}>
              <span className="text-bodyMedium text-gray-600">
                Old days, but still alive.
              </span>
            </FadeInSection>
            <FadeInSection delay={0.6}>
              <h1 className="text-h1 font-medium">Archive</h1>
            </FadeInSection>
          </div>
        </div>
      </section>
      <ArchiveSection data={data} />
    </>
  );
};
