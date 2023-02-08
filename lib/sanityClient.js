import ImageUrlBuilder from "@sanity/image-url";
import { createClient, groq } from "next-sanity";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION;

export const client = createClient({
  projectId,
  dataset,
  apiVersion, // https://www.sanity.io/docs/api-versioning
  useCdn: true, // server-side is statically generated, the CDN is only necessary beneficial if queries are called on-demand
});

const builder = ImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
