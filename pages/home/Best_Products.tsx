/* eslint-disable @next/next/no-img-element */
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import clsx from "clsx";
import { best_products } from "../api/data/best_products";

const Best_Products = () => {
  const settings = {
    speed: 500,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 4,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
    <div className={clsx("w-full bg-gradient-to-br from-dark to-prime-1")}>
      <div className={clsx("w-11/12 px-3 mx-auto")}>
        <h1
          className={clsx(
            "text-center font-Poppins text-2xl font-semibold text-white tracking-wide pt-5 ",
            "md:text-4xl"
          )}
        >
          Produk Unggulan
        </h1>
        <div className={clsx("py-10")}>
          <Slider {...settings}>
            {best_products.map((items) => {
              return (
                <div key={items.id}>
                  <img
                    src={items.image}
                    alt=""
                    className={clsx("shadow-lg rounded-xl")}
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

export default Best_Products;
