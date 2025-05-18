import React from "react";
import { HeroSection } from "@/components/global/heroSection";
import { ListWorks } from "@/components/pages/works/section/listWorks";
import { client } from "@/sanity/client";
import { WorksProps } from "@/types/sanity.types";

const POSTS_QUERY = `*[_type == "works"]{ _id, "imgSrc": imgSrc.asset->url, year, name, desc, categories, url }`;
const options = { next: { revalidate: 30 } };

export const Workspage = async () => {
  const data = await client.fetch<WorksProps[]>(POSTS_QUERY, {}, options);

  return (
    <>
      <HeroSection title="Collection of Design Work" subtitle="2020-2025" />
      <ListWorks project={data} />
    </>
  );
};
