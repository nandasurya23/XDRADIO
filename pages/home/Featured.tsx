/* eslint-disable @next/next/no-img-element */

import clsx from "clsx";
import { FaStar } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { BsFillBagFill } from "react-icons/bs";
import { MdOutlineMiscellaneousServices } from "react-icons/md";

const Featured = () => {
  return (
    <div className={clsx("w-11/12 px-3 mx-auto mt-10")}>
      <div
        className={clsx(
          "flex flex-col justify-around space-y-6 items-center ",
          "md:flex-row md:space-y-0"
        )}
      >
        <div className={clsx("flex flex-col items-center text-center")}>
          <FaStar size={40} />
          <h1 className={clsx("font-Poppins text-lg font-semibold mt-4")}>
            Harga & Kualitas Terbaik
          </h1>
        </div>

        <div className={clsx("flex flex-col items-center text-center")}>
          <FaShoppingCart size={40} />
          <h1 className={clsx("font-Poppins text-lg font-semibold mt-4")}>
            Pilihan Varian Beragam
          </h1>
        </div>

        <div className={clsx("flex flex-col items-center text-center")}>
          <MdOutlineMiscellaneousServices size={40} />
          <h1 className={clsx("font-Poppins text-lg font-semibold mt-4")}>
            Pelayanan Prima
          </h1>
        </div>
        <div className={clsx("flex flex-col items-center text-center")}>
          <BsFillBagFill size={40} />
          <h1 className={clsx("font-Poppins text-lg font-semibold mt-4")}>
            Tersedia Di Berbagai Marketplace
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Featured;
