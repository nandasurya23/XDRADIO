/* eslint-disable @next/next/no-img-element */
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import clsx from "clsx";
import { event } from "../api/data/event";

const EventSlider = () => {
  const settings = {
    dots: true,
    speed: 500,
    arrows: false,
    autoplay: true,
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
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div
      className={clsx(
        "w-full bg-gradient-to-b from-dark to-prime-1 pt-32 pb-12"
      )}
    >
      <div className={clsx("container px-3 mx-auto")}>
        <div className={clsx("py-10")}>
          <Slider {...settings}>
            {event.map((items) => {
              return (
                <div key={items.id}>
                  <img
                    src={items.image}
                    alt=""
                    className={clsx("shadow-xl rounded-xl w-full  mx-auto")}
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
