/* eslint-disable @next/next/no-img-element */
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
    <div className="w-full bg-gradient-to-br from-prime-1 to-yellow-2 mt-10">
      <div className="w-11/12 px-3 mx-auto">
        <h1 className="text-center font-Poppins text-4xl font-semibold text-white tracking-wide pt-5">
          Produk Unggulan
        </h1>
        <div className="mt-10">
          <Slider {...settings}>
            <div className="p-[30px]">
              <img
                src="https://ik.imagekit.io/lshkgi0dm/x1-products.png?ik-sdk-version=javascript-1.4.3&updatedAt=1670329873992"
                alt=""
                className="shadow-lg rounded-xl"
              />
            </div>

            <div className="p-[30px]">
              <img
                src="https://ik.imagekit.io/lshkgi0dm/x1-products.png?ik-sdk-version=javascript-1.4.3&updatedAt=1670329873992"
                alt=""
                className="shadow-lg rounded-xl"
              />
            </div>

            <div className="p-[30px]">
              <img
                src="https://ik.imagekit.io/lshkgi0dm/x1-products.png?ik-sdk-version=javascript-1.4.3&updatedAt=1670329873992"
                alt=""
                className="shadow-lg rounded-xl"
              />
            </div>

            <div className="p-[30px]">
              <img
                src="https://ik.imagekit.io/lshkgi0dm/x1-products.png?ik-sdk-version=javascript-1.4.3&updatedAt=1670329873992"
                alt=""
                className="shadow-lg rounded-xl"
              />
            </div>

            <div className="p-[30px]">
              <img
                src="https://ik.imagekit.io/lshkgi0dm/x1-products.png?ik-sdk-version=javascript-1.4.3&updatedAt=1670329873992"
                alt=""
                className="shadow-lg rounded-xl"
              />
            </div>

            <div className="p-[30px]">
              <img
                src="https://ik.imagekit.io/lshkgi0dm/x1-products.png?ik-sdk-version=javascript-1.4.3&updatedAt=1670329873992"
                alt=""
                className="shadow-lg rounded-xl"
              />
            </div>

            <div className="p-[30px]">
              <img
                src="https://ik.imagekit.io/lshkgi0dm/x1-products.png?ik-sdk-version=javascript-1.4.3&updatedAt=1670329873992"
                alt=""
                className="shadow-lg rounded-xl"
              />
            </div>

            <div className="p-[30px]">
              <img
                src="https://ik.imagekit.io/lshkgi0dm/x1-products.png?ik-sdk-version=javascript-1.4.3&updatedAt=1670329873992"
                alt=""
                className="shadow-lg rounded-xl"
              />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Best_Products;
