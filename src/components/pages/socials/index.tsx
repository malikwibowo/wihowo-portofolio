import React from "react";
import { HeroSection } from "@/components/global/heroSection";
import { SocialSection } from "@/components/pages/socials/section/socialSection";
import { client } from "@/sanity/client";
import { SocialProps } from "@/types/sanity.types";

const POSTS_QUERY = `*[_type == "social"] | order(title asc){
  _id,
  title,
  socials[]{
    name,
    link,
    href,
    "imgSrc": imgSrc.asset->url
  }
}`;
const options = { next: { revalidate: 30 } };

export const Socialspage = async () => {
  const data = await client.fetch<SocialProps[]>(POSTS_QUERY, {}, options);

  return (
    <>
      <HeroSection title="We made handshake" subtitle="Maybe," />
      <SocialSection data={data} />
    </>
  );
};
