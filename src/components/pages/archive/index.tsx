import React from "react";
import { HeroSection } from "@/components/global/heroSection";
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
      <HeroSection title="Archive" subtitle="Old days, but still alive." />
      <ArchiveSection data={data} />
    </>
  );
};
