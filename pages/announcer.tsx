/* eslint-disable @next/next/no-img-element */
import { clsx } from "clsx";
import React from "react";

const announcer = () => {
  return (
    <section
      className={clsx(
        "w-full bg-gradient-to-b from-dark to-prime-1 pt-32 pb-12 text-white"
      )}
    >
      <div className="container px-3 mx-auto">
        <h1 className="xd-prime-b font-bold text-center text-5xl text-prime-2">
          ANNOUNCER
        </h1>
        <div className="flex flex-wrap justify-around gap-20 items-center mt-10 fade">
          <img
            src="https://res.cloudinary.com/df82hir2r/image/upload/v1675343358/xdradio/announcer/a_wnf1ae.jpg"
            alt=""
            className="w-80 rounded-2xl hover:shadow-2xl hover:scale-105 duration-300 cursor-pointer"
          />
          <img
            src="https://res.cloudinary.com/df82hir2r/image/upload/v1675343357/xdradio/announcer/b_hfc9rv.jpg"
            alt=""
            className="w-80 rounded-2xl hover:shadow-2xl hover:scale-105 duration-300 cursor-pointer"
          />
          <img
            src="https://res.cloudinary.com/df82hir2r/image/upload/v1675343357/xdradio/announcer/c_zpustg.jpg"
            alt=""
            className="w-80 rounded-2xl hover:shadow-2xl hover:scale-105 duration-300 cursor-pointer"
          />
          <img
            src="https://res.cloudinary.com/df82hir2r/image/upload/v1675343357/xdradio/announcer/d_zwypvt.jpg"
            alt=""
            className="w-80 rounded-2xl hover:shadow-2xl hover:scale-105 duration-300 cursor-pointer"
          />
          <img
            src="https://res.cloudinary.com/df82hir2r/image/upload/v1675343357/xdradio/announcer/e_suhyoy.jpg"
            alt=""
            className="w-80 rounded-2xl hover:shadow-2xl hover:scale-105 duration-300 cursor-pointer"
          />
          <img
            src="https://res.cloudinary.com/df82hir2r/image/upload/v1675343357/xdradio/announcer/f_vuay1n.jpg"
            alt=""
            className="w-80 rounded-2xl hover:shadow-2xl hover:scale-105 duration-300 cursor-pointer"
          />
          <img
            src="https://res.cloudinary.com/df82hir2r/image/upload/v1675343357/xdradio/announcer/g_zfq8l5.jpg"
            alt=""
            className="w-80 rounded-2xl hover:shadow-2xl hover:scale-105 duration-300 cursor-pointer "
          />
        </div>
      </div>
    </section>
  );
};

export default announcer;
