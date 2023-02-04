/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
import { clsx } from "clsx";
import React from "react";
import { detail_annoucer } from "./api/data/detail_announcer";
import Image from "next/image";

const announcer = () => {
  return (
    <section
      className={clsx(
        "w-full bg-gradient-to-b from-dark to-prime-1 pt-32 pb-12 text-white"
      )}
    >
      <div className="container px-3 mx-auto">
        <h1 className="xd-prime-b font-bold text-center text-3xl md:text-5xl text-prime-2">
          ANNOUNCER
        </h1>
        <div className="flex flex-wrap justify-around gap-10 md:gap-20 items-center mt-10 fade">
          {detail_annoucer.map((items) => {
            return (
              <div
                className="group relative block overflow-hidden rounded-md transition-all duration-500"
                key={items.id}
              >
                <a href="#">
                  <Image
                    src={items.image}
                    alt=""
                    className="w-52 md:w-80 rounded-2xl hover:shadow-2xl hover:scale-105 duration-300 cursor-pointer"
                    width={800}
                    height={0}
                  />
                </a>
                <div className="absolute -bottom-52 group-hover:bottom-2 right-2 left-2 transition-all duration-500 bg-prime-3 dark:bg-slate-900 p-4 rounded shadow dark:shadow-gray-700">
                  <a
                    href="#"
                    className="hover:text-prime-2 text-sm md:text-xl transition duration-500 font-normal"
                  >
                    {items.instagram}
                  </a>
                  <p className="text-sm mt-3">{items.date}</p>
                  <p className="text-sm mt-3">{items.genre}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default announcer;
