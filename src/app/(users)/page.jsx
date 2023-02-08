import { BlogList, TopContainer } from "components";
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

// const getLastIndex = () => Math.floor(Math.random() * 3);

const Page = async () => {
  const posts = await client.fetch(query);

  const featuredPosts = posts?.slice(0, 3);
  console.log(featuredPosts);

  return (
    <>
      <TopContainer />
      <div className="l">
        <h1 className="text-2xl font-bold mb-5">Featured posts</h1>
      </div>
      <BlogList posts={featuredPosts} />
    </>
  );
};

export default Page;