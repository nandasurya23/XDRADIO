/* eslint-disable react/jsx-no-undef */
/* eslint-disable @next/next/no-img-element */
import React, { lazy, Suspense, useEffect, useState } from "react";
const ReactPlayer = lazy(() => import("react-player"));
import dynamic from "next/dynamic";
import ReactAudioPlayer from "react-audio-player";

import clsx from "clsx";
const HeroSection = () => {
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    setPlaying(true);
  }, []);

  return (
    <div
      className={clsx(
        "w-full bg-prime-1 text-white pt-5 pb-5",
        "md:pt-10 md:pb-20"
      )}
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
                config={{
                  youtube: {
                    playerVars: {
                      showinfo: 0,
                    },
                  },
                }}
              />
            </Suspense>
          </div>
          <div
            className={clsx(
              "flex flex-col w-11/12 text-center mx-8",
              "md:text-left"
            )}
          >
            <h1
              className={clsx(
                "text-2xl xd-prime-eb text-prime-2 mt-5 italic font-extrabold tracking-wider",
                "md:text-5xl md:mt-0"
              )}
            >
              XD RADIO YUDHA
            </h1>
            <p className="text-lg xd-prime-b italic font-bold tracking-wide mt-3">
              Your Extra Ordinary Music Station
            </p>
            <p className="text-sm mt-8 xd-prime-r md:text-base">
              XD Radio dengan Station Call “Your Extra Ordinary Music Station”
              akan selalu mmenemani kamu dengan Playlist yang bakal bikin
              suasana Good Mood dan kamu akan selalu Merasa Bahwa HARI INI IS A
              GOOD DAY !!
            </p>
            <p className="text-sm mt-8 xd-prime-r md:text-base">
              So What You Waiting For , Come Test Our Wave !!!!
            </p>

            <div className={clsx("flex justify-start items-center")}>
              <button
                className={clsx(
                  "mt-10 px-5 py-3 rounded-xl bg-gradient-to-br from-prime-2 to-prime-3 text-white w-full text-base tracking-wider shadow-xl xd-prime-b font-bold",
                  "md:w-3/4 md:text-xl",
                  "hover:scale-105 ease-in-out transition-transform"
                )}
              >
                <a
                  href="https://c4.siar.us:8940/stream"
                  target="_blank"
                  rel="noreferrer"
                >
                  Streaming Radio 90.2 FM
                </a>
              </button>
              <ReactAudioPlayer
                src="https://c4.siar.us:8940/stream"
                autoPlay
                controls={false}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// export default HeroSection;
export default dynamic(() => Promise.resolve(HeroSection), { ssr: false });
