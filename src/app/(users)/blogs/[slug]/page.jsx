import { client } from "lib/sanityClient";
import { groq } from "next-sanity";
import { PortableText } from "@portabletext/react";
import { RichTextComponents } from "components/RichTextComponents";

const getData = async () => {
  const query = groq`
  *[_type=='post']{
    slug
  }
  `;

  const data = await client.fetch(query);

  const allSlugs = data?.map((item) => item?.slug?.current);

  return allSlugs;
};

export const revalidate = 10;

export async function generateStaticParams() {
  const allSlugs = await getData();
  return allSlugs?.map((slug) => ({ slug: slug }));
}

const page = async ({ params: { slug } }) => {
  const query = groq`
  *[_type=='post' && slug.current==$slug][0]{
    ...,
    author->,
      categories[]->,
      
  }
    
  `;

  const postDetails = await client.fetch(query, { slug });

  return (
    <article className="py-7 max-w-5xl">
      <span className="tracking-widest text-xs title-font font-thin text-white mb-3 bg-[#283A61] py-1 px-1.5 rounded-sm text-center">
        {postDetails?.categories[0].title}
      </span>
      <PortableText value={postDetails?.body} components={RichTextComponents} />
    </article>
  );
};

export default page;
