import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "bw7rsy6e",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: true,
});
