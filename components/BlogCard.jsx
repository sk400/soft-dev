import { urlFor } from "lib/sanityClient";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogCard = ({ post }) => {
  return (
    <>
      <Link href={`/blogs/${post?.slug?.current}`}>
        <div className="p-2">
          <div className="rounded-lg overflow-hidden relative transition-transform hover:scale-105 hover:shadow-xl cursor-pointer  ">
            <div className="relative h-[200px]">
              <Image
                src={urlFor(post?.mainImage).url()}
                alt="image"
                className="object-cover object-center"
                fill
              />
            </div>

            <div className=" py-2">
              <span className="tracking-widest text-xs title-font font-thin text-white mb-3 bg-[#283A61] py-1 px-1.5 rounded-sm text-center">
                {post?.categories[0].title}
              </span>
              <h1 className="title-font text-xl font-bold text-gray-900 mb-3">
                {post?.title}
              </h1>
              <p className="leading-relaxed mb-3 text-sm">
                {post?.description?.substring(0, 100)}...
              </p>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default BlogCard;
