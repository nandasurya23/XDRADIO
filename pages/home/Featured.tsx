/* eslint-disable @next/next/no-img-element */

const Featured = () => {
  return (
    <div className="w-11/12 px-3 mx-auto mt-10">
      <div className="flex flex-col justify-between space-y-6 items-center md:flex md:flex-row md:space-y-0">
        <div className="flex flex-col items-center mx-5">
          <div className="flex items-center">
            <img
              src="https://ik.imagekit.io/lshkgi0dm/icons/star-icon.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1670326672053"
              alt=""
              className="mx-2 w-5"
            />
            <h1 className="font-Poppins text-lg font-semibold">
              Harga Dan Kualitas Terbaik
            </h1>
          </div>
          <p className="text-center font-Poppins text-base font-normal mt-2 w-full mx-auto md:w-1/2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam
            velit, vulputate eu pharetra nec, mattis ac neque Duis vulputate
            commodo lectus, ac blandit elit tincidunt id.
          </p>
        </div>

        <div className="flex flex-col items-center mx-5">
          <div className="flex items-center">
            <img
              src="https://ik.imagekit.io/lshkgi0dm/icons/chart.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1670326672053"
              alt=""
              className="mx-2 w-5"
            />
            <h1 className="font-Poppins text-lg font-semibold">
              Harga Dan Kualitas Terbaik
            </h1>
          </div>

          <p className="text-center font-Poppins text-base font-normal mt-2 w-full mx-auto md:w-1/2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam
            velit, vulputate eu pharetra nec, mattis ac neque Duis vulputate
            commodo lectus, ac blandit elit tincidunt id.
          </p>
        </div>

        <div className="flex flex-col items-center mx-5">
          <div className="flex items-center">
            <img
              src="https://ik.imagekit.io/lshkgi0dm/icons/bag.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1670326672053"
              alt=""
              className="mx-2 w-5"
            />
            <h1 className="font-Poppins text-lg font-semibold">
              Harga Dan Kualitas Terbaik
            </h1>
          </div>

          <p className="text-center font-Poppins text-base font-normal mt-2 w-full mx-auto md:w-1/2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam
            velit, vulputate eu pharetra nec, mattis ac neque Duis vulputate
            commodo lectus, ac blandit elit tincidunt id.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Featured;
