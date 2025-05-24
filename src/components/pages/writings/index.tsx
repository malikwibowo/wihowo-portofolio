import React from "react";
import { HeroSection } from "@/components/global/heroSection";
import { WritingSection } from "@/components/pages/writings/section/writingSection";
import { client } from "@/sanity/client";
import { PoetryProps, WritingProps } from "@/types/sanity.types";

const POSTS_QUERY_WRITING = `*[_type == "writing"] | order(_createdAt asc){
  _id,
  title,
  "imgSrc": imgSrc.asset->url,
  date,
  readMinutes,
  url,
}`;

const POSTS_QUERY_POETRY = `*[_type == "poetry"] | order(_createdAt asc){
  _id,
  title,
  date,
  category,
  content,
  "slug": slug.current
}`;

const options = { next: { revalidate: 30 } };

export const WritingsPage = async () => {
  const [dataWriting, dataPoetry] = await Promise.all([
    client.fetch<WritingProps[]>(POSTS_QUERY_WRITING, {}, options),
    client.fetch<PoetryProps[]>(POSTS_QUERY_POETRY, {}, options),
  ]);

  return (
    <>
      <HeroSection title="Writing" subtitle="Exploring things," />
      <WritingSection dataWriting={dataWriting} poetryData={dataPoetry} />
    </>
  );
};
