import { urlFor } from "lib/sanityClient";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogCard = ({ post }) => {
  return (
    <>
      <Link href={`/blogs/${post?._id}`}>
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
              <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                {post?.categories[0].title}
              </h2>
              <h1 className="title-font text-xl font-bold text-gray-900 mb-3">
                {post?.title}
              </h1>
              <p className="leading-relaxed mb-3">
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
