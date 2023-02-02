/* eslint-disable @next/next/no-img-element */
import React, { lazy, Suspense, useEffect, useState } from "react";
const ReactPlayer = lazy(() => import("react-player"));
import dynamic from "next/dynamic";

import clsx from "clsx";
const HeroSection = () => {
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    setPlaying(true);
  }, []);
  return (
    <div
      className={clsx("w-full bg-prime-1 font-XDPrime text-white pt-10 pb-20")}
    >
      <div className={clsx("container mx-auto")}>
        <div
          className={clsx(
            "flex flex-col mx-auto items-center px-3 ",
            "md:flex md:flex-row"
          )}
        >
          <div className={clsx(" w-full h-96 rounded-md")}>
            <Suspense fallback={<div>Loading...</div>}>
              <ReactPlayer
                url="https://youtu.be/mnT33cOpDd8"
                playing={playing}
                loop
                width="100%"
                height="100%"
              />
            </Suspense>
          </div>
          <div className={clsx("flex flex-col w-11/12 mx-8 font-XDPrime")}>
            <h1 className="text-2xl italic  font-black md:text-5xl tracking-wider">
              XD RADIO YUDHA
            </h1>
            <p className="text-justify text-lg font-medium tracking-wide mt-3 italic">
              Your Extra Ordinary Music Station
            </p>
            <p className="text-justify text-lg mt-8">
              Holaa XD People !! XD Radio dengan Station Call “Your Extra
              Ordinary Music Station” akan selalu menemani kamu dengan Playlist
              yang bakal bikin suasana Good Mood dan kamu akan selalu Merasa
              Bahwa HARI INI IS A GOOD DAY !!
            </p>
            <p className="text-justify text-lg ">
              So What You Waiting For , Come Test Our Wave !!!!
            </p>

            <div className={clsx("flex justify-start items-center")}>
              <button
                className={clsx(
                  "mt-10 px-5 py-3 rounded-xl bg-gradient-to-br from-prime-2 to-prime-1 text-white w-full text-base tracking-wider shadow-xl font-bold",
                  "md:w-3/4 md:text-xl",
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
              <audio src="http://c4.siar.us:8940/stream"></audio>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// export default HeroSection;
export default dynamic(() => Promise.resolve(HeroSection), { ssr: false });
