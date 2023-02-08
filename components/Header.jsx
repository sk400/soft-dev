import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="">
        <Link className="text-[24px] font-bold font-[merriweather] " href={`/`}>
          SoftDev
        </Link>
      </div>
      <div className="flex space-x-3 sm:space-x-5 md:space-x-6 items-center">
        <Link href={`/`}>Home</Link>
        <Link href={`/blogs`}>Blogs</Link>
        <Link href={`/about`}>About</Link>
      </div>
    </div>
  );
};

export default Header;
