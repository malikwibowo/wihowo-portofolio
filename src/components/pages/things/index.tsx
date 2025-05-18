import React from "react";
import { HeroSection } from "@/components/global/heroSection";
import { ThingsSection } from "@/components/pages/things/section/thingsSection";
import { client } from "@/sanity/client";
import { ThingProps } from "@/types/sanity.types";

const POSTS_QUERY = `*[_type == "thing"] | order(_createdAt asc){
  _id,
  title,
  "imgSrc": imgSrc.asset->url,
  description,
  category,
}`;
const options = { next: { revalidate: 30 } };

export const Thingspage = async () => {
  const data = await client.fetch<ThingProps[]>(POSTS_QUERY, {}, options);

  return (
    <>
      <HeroSection title="My favourite things" subtitle="A collection of" />
      <ThingsSection data={data} />
    </>
  );
};
