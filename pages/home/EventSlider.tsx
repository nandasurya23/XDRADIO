/* eslint-disable react/jsx-no-undef */
/* eslint-disable @next/next/no-img-element */
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import clsx from "clsx";
import { event } from "../api/data/event";
import Image from "next/image";

const EventSlider = () => {
  const settings = {
    speed: 500,
    arrows: false,
    autoplay: true,
    lazyload: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
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
    <div
      className={clsx(
        "w-full bg-gradient-to-b from-dark to-prime-1 pt-20 pb-5",
        "md:pt-32 md:pb-12"
      )}
    >
      <div className={clsx("container px-3 mx-auto")}>
        <div className={clsx("py-10")}>
          <Slider {...settings}>
            {event.map((items) => {
              return (
                <div key={items.id}>
                  <Image
                    src={items.image}
                    alt=""
                    className={clsx("rounded-2xl w-full  mx-auto")}
                    width={800}
                    height={0}
                  />
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default EventSlider;
