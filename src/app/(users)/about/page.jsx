import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-8 sm:py-24 mx-auto flex flex-col max-w-xl">
          <div className=" mx-auto">
            <div className="flex flex-col justify-center mt-10">
              <div className=" text-center  ">
                <div className="flex flex-col items-center text-center justify-center">
                  <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">
                    <Link
                      className="text-[24px] font-bold font-[merriweather] "
                      href={`/`}
                    >
                      SoftDev
                    </Link>
                  </h2>
                  <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                  <p className="text-base">
                    A unique blog about web2, web3, and unconventional carriers.
                  </p>
                </div>
              </div>
              <div className="    mt-4 pt-4  text-center ">
                <p className="leading-relaxed text-lg mb-4 font-medium">
                  The SoftDev blog is developed by Saumyakant (Sk), A fullstack
                  webdeveloper and freelance developer who works worldwide. He
                  also works in Upwork, Fiverr.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
