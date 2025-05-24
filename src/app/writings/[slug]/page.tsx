import { PoemsPage } from "@/components/pages/poem";
import { client } from "@/sanity/client";
import { PoetryProps } from "@/types/sanity.types";

export default async function Poems({ params }: { params: { slug: string } }) {
  const { slug } = params;

  const POSTS_QUERY_POETRY = `*[_type == "poetry" && slug.current == "${slug}"][0]`;
  const data = await client.fetch<PoetryProps>(POSTS_QUERY_POETRY);

  if (!data) {
    return <div>Poem not found</div>;
  }
  const { _createdAt } = data;
  const PREV_QUERY = `*[_type == "poetry" && _createdAt < "${_createdAt}"] | order(_createdAt desc)[0] {
    "slug": slug.current
  }`;
  const prevPoem = await client.fetch<PoetryProps>(PREV_QUERY);

  const NEXT_QUERY = `*[_type == "poetry" && _createdAt > "${_createdAt}"] | order(_createdAt asc)[0] {
    "slug": slug.current
  }`;
  const nextPoem = await client.fetch<PoetryProps>(NEXT_QUERY);

  return <PoemsPage data={data} prevPoem={prevPoem} nextPoem={nextPoem} />;
}
