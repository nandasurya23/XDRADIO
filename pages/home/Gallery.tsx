/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import clsx from "clsx";
import Slider from "react-slick";
import { gallery } from "../api/data/gallery";

const Gallery = () => {
  const settings = {
    dots: true,
    speed: 500,
    arrows: false,
    lazyload: true,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    customPaging: (i: any) => {
      return (
        <img
          src={gallery[i].dotImage}
          alt={`dot-image-${i}`}
          className="w-20 h-8 slick-thumb"
        />
      );
    },
    dotsClass: "slick-dots slick-thumb",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };
  return (
    <section className="bg-prime-5 xd-prime-b text-white pt-20 pb-20">
      <div className="container mx-auto">
        <div className="text-2xl text-center pt-5 font-semibold space-y-3 md:text-3xl">
          <h1 className="text-prime-2"> XD GALLERY</h1>
          <h1 className="text-white">Expose Your Good Mood and Creativity</h1>
        </div>
        <div className={clsx("pt-2 pb-10 mt-10")}>
          <Slider {...settings}>
            {gallery.map((items) => {
              return (
                <div
                  key={items.id}
                  className="flex items-center px-3 outline-none"
                >
                  <Image
                    src={items.image}
                    alt=""
                    className={clsx(
                      "w-full object-contain object-center mx-auto rounded-2xl"
                    )}
                    width={800}
                    height={0}
                  />
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
