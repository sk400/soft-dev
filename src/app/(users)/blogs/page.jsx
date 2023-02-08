import { BlogList } from "components";
import { client } from "lib/sanityClient";
import { groq } from "next-sanity";
import React from "react";

const query = groq`
*[_type=='post']{
  ...,
  author->,
  categories[]->{
    title
  }
} | order(_createdAt desc)

`;

const Page = async () => {
  const posts = await client.fetch(query);
  return (
    <>
      <div className="py-10">
        <BlogList posts={posts} />
      </div>
    </>
  );
};

export default Page;
