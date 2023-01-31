/* eslint-disable @next/next/no-img-element */
import React, { lazy, Suspense } from "react";
const ReactPlayer = lazy(() => import("react-player"));

import clsx from "clsx";
const HeroSection = () => {
  return (
    <div
      className={clsx(
        "w-full pb-10 bg-gradient-to-br from-dark to-prime-1 font-XDPrime text-white"
      )}
    >
      <div className={clsx("container px-3 mx-auto")}>
        <h1 className={clsx("pt-36", "md:pt-32")}></h1>
        <div
          className={clsx(
            "flex flex-col mx-auto items-center px-3 mt-5",
            "md:flex md:flex-row"
          )}
        >
          <div className={clsx("px-3 ")}>
            <Suspense fallback={<div>Loading...</div>}>
              <ReactPlayer url="https://youtu.be/mnT33cOpDd8" playing loop />
            </Suspense>
          </div>
          <div className={clsx("flex flex-col mx-8 font-XDPrime")}>
            <h1 className="text-2xl italic  font-bold md:text-5xl">
              XD RADIO YUDHA
            </h1>
            <p className="text-justify text-lg mt-8">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Pariatur, optio ipsam totam perspiciatis molestias quam dolorum
              impedit veniam aliquid dolore corporis numquam laborum, aspernatur
              officiis aperiam repellat incidunt dolores hic.
            </p>

            <div className={clsx("flex justify-start items-center")}>
              <button
                className={clsx(
                  "mt-10 px-5 py-3 rounded-xl bg-gradient-to-b from-prime-2 to-prime-1 text-white w-full text-base tracking-wider shadow-xl font-bold",
                  "md:w-full md:text-xl",
                  "hover:scale-105 ease-in-out transition-transform"
                )}
              >
                <a
                  href="https://wa.me/082146426737"
                  target="_blank"
                  rel="noreferrer"
                >
                  Streaming Radio 90.2 FM
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
