import { clsx } from "clsx";
import React from "react";
import { gallery } from "./api/data/gallery";
import Image from "next/image";
import ReactAudioPlayer from "react-audio-player";

const Gallery = () => {
  return (
    <section className={clsx("w-full bg-prime-5 pt-32 pb-12 text-white")}>
      <div className="container px-3 mx-auto">
        <div className="text-xl text-center pt-5 font-semibold space-y-3 md:text-3xl">
          <h1 className="text-prime-2"> XD GALLERY</h1>
          <ReactAudioPlayer
            src="https://c4.siar.us:8068/stream"
            autoPlay
            controls={false}
          />
        </div>
        <div className="grid grid-cols-1 gap-5 mt-10 md:grid-cols-2 md:gap-10">
          {gallery.map((items) => {
            return (
              <div
                key={items.id}
                className="flex items-center px-3 outline-none"
              >
                <Image
                  src={items.image}
                  alt=""
                  className={clsx("w-full mx-auto rounded-xl")}
                  width={800}
                  height={0}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
