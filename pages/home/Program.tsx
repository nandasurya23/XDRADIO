/* eslint-disable @next/next/no-img-element */
import clsx from "clsx";
import React from "react";
import Slider from "react-slick";
import { annoucer } from "../api/data/annoucer";
import Image from "next/image";

const Program = () => {
  const settings = {
    speed: 500,
    arrows: false,
    lazyload: true,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 4,
    slidesToScroll: 2,
    initialSlide: 0,
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
    <section className="bg-prime-5 md:pt-10">
      <div className="container px-3 mx-auto xd-prime-b pb-5 md:pb-20">
        <div className="text-2xl text-center pt-10 font-semibold space-y-3 md:text-3xl">
          <h1 className="text-prime-2">ANNOUNCER</h1>
          <h1 className="text-white">XD Radio Yudha</h1>
        </div>
      </div>
      <div className={clsx("container md:-mt-10 px-3 mx-auto")}>
        <div className={clsx("pt-2 pb-10 px-5 bg-prime-3/50 rounded-2xl")}>
          <Slider {...settings}>
            {annoucer.map((items) => {
              return (
                <div key={items.id} className="flex items-center">
                  <Image
                    src={items.image}
                    alt=""
                    className={clsx(
                      "w-60 object-contain object-center mx-auto",
                      "md:w-full"
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

export default Program;
