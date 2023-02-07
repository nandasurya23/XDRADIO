import { clsx } from "clsx";
import React from "react";

const xd_rate = () => {
  return (
    <section
      className={clsx(
        "w-full bg-gradient-to-b from-prime-1 to-prime-4 pt-32 pb-12 text-white"
      )}
    >
      <div className="container px-3 mx-auto">
        <div className="grid grid-cols-1 w-full gap-5 mt-5 md:grid-cols-2 lg:mt-0">
          {/* Spot */}
          <div className="px-5 py-5 bg-prime-3 w-full rounded-2xl">
            <h1 className="text-xl xd-prime-b text-prime-2 font-semibold md:text-3xl">
              SPOT
            </h1>
            <div className="xd-prime-r mt-3">
              <div className="flex flex-col">
                <div className="flex flex-row items-center">
                  <p className="text-lg text-prime-2">Prime Time</p>{" "}
                  <span className="text-white mx-1">60s</span>
                </div>
                <p>
                  Rp. <span>130,000</span>
                </p>
              </div>
              <div className="flex flex-col mt-3">
                <div className="flex flex-row items-center">
                  <p className="text-lg text-prime-2">Reguler Time</p>{" "}
                  <span className="text-white mx-1">60s</span>
                </div>
                <p>
                  Rp. <span>100,000</span>
                </p>
              </div>
              <div className="flex flex-col mt-3">
                <div className="flex flex-row items-center">
                  <p className="text-lg text-prime-2">Time Signal</p>{" "}
                  <span className="text-white mx-1">60s</span>
                </div>
                <p>
                  Rp. <span>170,000</span>
                </p>
              </div>
              <div className="flex flex-col mt-3">
                <div className="flex flex-row items-center">
                  <p className="text-lg text-prime-2">Insert</p>{" "}
                  <span className="text-white mx-1">60s</span>
                </div>
                <p>
                  Rp. <span>130,000</span>
                </p>
              </div>
            </div>
            <h1 className="text-xl xd-prime-b text-prime-2 font-semibold md:text-3xl mt-5">
              ADLIBS
            </h1>
            <div className="xd-prime-r mt-3">
              <div className="flex flex-col">
                <div className="flex flex-row items-center">
                  <p className="text-lg text-prime-2">Prime Time</p>{" "}
                  <span className="text-white mx-1">60s</span>
                </div>
                <p>
                  Rp. <span>130,000</span>
                </p>
              </div>
              <div className="flex flex-col mt-3">
                <div className="flex flex-row items-center">
                  <p className="text-lg text-prime-2">Reguler Time</p>{" "}
                  <span className="text-white mx-1">60s</span>
                </div>
                <p>
                  Rp. <span>100,000</span>
                </p>
              </div>
            </div>
          </div>
          {/* TALK SHOW */}
          <div className="px-5 py-5 bg-prime-3 w-full rounded-2xl mt-5 md:mt-0">
            <h1 className="text-xl xd-prime-b text-prime-2 font-semibold md:text-3xl">
              Talkshow
            </h1>
            <div className="flex flex-row xd-prime-r font-normal items-center mt-2">
              <p className="text-lg text-white">Talkshow</p>{" "}
              <span className="text-prime-2 mx-1">`Full Blocking`</span>
            </div>
            <div className="xd-prime-r mt-3">
              <div className="flex flex-col">
                <p className="text-lg text-prime-2">On Your Spot</p>
                <p>
                  Rp. <span>3,550,000</span>
                </p>
              </div>
              <div className="flex flex-col mt-3">
                <p className="text-lg text-prime-2">On XD Station</p>
                <p>
                  Rp. <span>1,700,000</span>
                </p>
              </div>
            </div>
            <div className="flex flex-row xd-prime-r font-normal items-center mt-4">
              <p className="text-lg text-white">Talkshow</p>{" "}
              <span className="text-prime-2 mx-1">`Semi Blocking`</span>
            </div>
            <div className="xd-prime-r mt-3">
              <div className="flex flex-col">
                <p className="text-lg text-prime-2">On Your Spot</p>
                <p>
                  Rp. <span>2,250,000</span>
                </p>
              </div>
              <div className="flex flex-col mt-3">
                <p className="text-lg text-prime-2">On XD Station</p>
                <p>
                  Rp. <span>1,300,000</span>
                </p>
              </div>
            </div>
            <h1 className="text-xl xd-prime-b text-prime-2 font-semibold md:text-3xl mt-4">
              Production
            </h1>
            <div className="flex flex-col xd-prime-r">
              <div className="flex flex-row items-center">
                <p className="text-lg text-prime-2">Prime Time</p>{" "}
                <span className="text-white mx-1">60s</span>
              </div>
              <p>
                Rp. <span>500,000</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default xd_rate;
