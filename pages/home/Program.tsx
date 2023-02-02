/* eslint-disable @next/next/no-img-element */
import clsx from "clsx";
import React from "react";
import Slider from "react-slick";
import { annoucer } from "../api/data/annoucer";
import Image from "next/image";

const Program = () => {
  const settings = {
    dots: true,
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
    <section className="bg-prime-1">
      <div className="container px-3 mx-auto font-XDPrime pb-20">
        <div className="text-3xl text-center font-bold text-prime-2 space-y-3">
          <h1>Meet Our Announcer On</h1>
          <h1>PROGRAM XD RADIO YUDHA 90.2 FM</h1>
        </div>
      </div>
      <div className={clsx("container px-3 mx-auto")}>
        <div className={clsx("pt-2 pb-10")}>
          <Slider {...settings}>
            {annoucer.map((items) => {
              return (
                <div key={items.id} className="flex items-center">
                  <Image
                    src={items.image}
                    alt=""
                    className={clsx(
                      "w-full object-contain object-center mx-auto"
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
