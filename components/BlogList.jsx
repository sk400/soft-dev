import React from "react";
import BlogCard from "./BlogCard";

const BlogList = ({ posts }) => {
  return (
    <div className="l">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 ">
        {posts?.map((post) => (
          <BlogCard key={post?._id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default BlogList;
