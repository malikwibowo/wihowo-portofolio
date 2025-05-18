import React from "react";
import { HeroSection } from "@/components/global/heroSection";
import { MomentSection } from "./section/momentSection";
import { client } from "@/sanity/client";
import { MomentProps } from "@/types/sanity.types";

const POSTS_QUERY = `*[_type == "moment"] | order(_createdAt asc){
  _id,
  title,
  "imgSrc": imgSrc.asset->url,
}`;
const options = { next: { revalidate: 30 } };

export const MomentsPage = async () => {
  const data = await client.fetch<MomentProps[]>(POSTS_QUERY, {}, options);

  return (
    <>
      <HeroSection title="Moments" subtitle="Using my camera to take" />
      <MomentSection data={data} />
    </>
  );
};
