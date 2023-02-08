import React from "react";
import { groq } from "next-sanity";

const query = groq`
*[_type==]
`;

const TopContainer = () => {
  return (
    <div className="w-full h-[250px] font-[merriweather] flex justify-center items-center">
      <div className="flex flex-col items-center">
        <h1 className="font-bold text-3xl ">The SoftDev blog</h1>
        <h3 className="text-lg font-normal mt-4">
          A unique blog about web2, web3, and unconventional carriers.
        </h3>
      </div>
    </div>
  );
};

export default TopContainer;
