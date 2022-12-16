/* eslint-disable @next/next/no-img-element */

import Link from "next/link";

const All_Catalog = () => {
  return (
    <div className="w-11/12 px-3 mx-auto font-Poppins">
      <div className="flex justify-between items-center flex-col py-5 md:flex md:flex-row">
        <h1 className="pt-32 text-xl font-bold tracking-wide md:pt-20 md:text-3xl">
          KATALOG
        </h1>
        <div className="pt-10 md:pt-20">
          <div className="bg-gray rounded-full flex items-center cursor-pointer">
            <input
              placeholder="Cari Katalog..."
              className="px-5 py-3  bg-gray rounded-full text-base focus:outline-none"
            />
            <div className="bg-gray rounded-full py-3 px-5">
              <img
                src="https://ik.imagekit.io/lshkgi0dm/icons/search.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1670512634286"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      {/* All Product */}
      <div className="grid grid-cols-1 gap-10 pt-2 pb-8 md:grid md:grid-cols-4">
        <Link href="/detail_products">
          <div className="flex flex-col bg-gray font-Poppins rounded-xl cursor-pointer hover:scale-105 duration-200 transition-all shadow-xl">
            <div className="">
              <img
                src="https://ik.imagekit.io/lshkgi0dm/data/1.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1671184314687"
                alt=""
                className="object-contain rounded-xl"
              />
            </div>
            <div className="flex flex-row justify-between items-center bg-gray px-3 py-5 rounded-b-xl">
              <h2 className="text-base font-medium">Dupa Bulat</h2>
              <span className="text-base font-medium">Rp 20.000</span>
            </div>
          </div>
        </Link>

        <div className="flex flex-col bg-gray font-Poppins rounded-xl cursor-pointer hover:scale-105 duration-200 transition-all shadow-xl">
          <div className="">
            <img
              src="https://ik.imagekit.io/lshkgi0dm/data/2.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1671184314687"
              alt=""
              className="object-contain rounded-xl"
            />
          </div>
          <div className="flex flex-row justify-between items-center bg-gray px-3 py-5 rounded-b-xl">
            <h2 className="text-base font-medium">Dupa Bulat</h2>
            <span className="text-base font-medium">Rp 20.000</span>
          </div>
        </div>

        <div className="flex flex-col bg-gray font-Poppins rounded-xl cursor-pointer hover:scale-105 duration-200 transition-all shadow-xl">
          <div className="">
            <img
              src="https://ik.imagekit.io/lshkgi0dm/data/3.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1671184314687"
              alt=""
              className="object-contain rounded-xl"
            />
          </div>
          <div className="flex flex-row justify-between items-center bg-gray px-3 py-5 rounded-b-xl">
            <h2 className="text-base font-medium">Dupa Bulat</h2>
            <span className="text-base font-medium">Rp 20.000</span>
          </div>
        </div>

        <div className="flex flex-col bg-gray font-Poppins rounded-xl cursor-pointer hover:scale-105 duration-200 transition-all shadow-xl">
          <div className="">
            <img
              src="https://ik.imagekit.io/lshkgi0dm/data/4.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1671184314687"
              alt=""
              className="object-contain rounded-xl"
            />
          </div>
          <div className="flex flex-row justify-between items-center bg-gray px-3 py-5 rounded-b-xl">
            <h2 className="text-base font-medium">Dupa Bulat</h2>
            <span className="text-base font-medium">Rp 20.000</span>
          </div>
        </div>

        <div className="flex flex-col bg-gray font-Poppins rounded-xl cursor-pointer hover:scale-105 duration-200 transition-all shadow-xl">
          <div className="">
            <img
              src="https://ik.imagekit.io/lshkgi0dm/data/5.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1671184314687"
              alt=""
              className="object-contain rounded-xl"
            />
          </div>
          <div className="flex flex-row justify-between items-center bg-gray px-3 py-5 rounded-b-xl">
            <h2 className="text-base font-medium">Dupa Bulat</h2>
            <span className="text-base font-medium">Rp 20.000</span>
          </div>
        </div>

        <div className="flex flex-col bg-gray font-Poppins rounded-xl cursor-pointer hover:scale-105 duration-200 transition-all shadow-xl">
          <div className="">
            <img
              src="https://ik.imagekit.io/lshkgi0dm/data/1.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1671184314687"
              alt=""
              className="object-contain rounded-xl"
            />
          </div>
          <div className="flex flex-row justify-between items-center bg-gray px-3 py-5 rounded-b-xl">
            <h2 className="text-base font-medium">Dupa Bulat</h2>
            <span className="text-base font-medium">Rp 20.000</span>
          </div>
        </div>

        <div className="flex flex-col bg-gray font-Poppins rounded-xl cursor-pointer hover:scale-105 duration-200 transition-all shadow-xl">
          <div className="">
            <img
              src="https://ik.imagekit.io/lshkgi0dm/data/2.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1671184314687"
              alt=""
              className="object-contain rounded-xl"
            />
          </div>
          <div className="flex flex-row justify-between items-center bg-gray px-3 py-5 rounded-b-xl">
            <h2 className="text-base font-medium">Dupa Bulat</h2>
            <span className="text-base font-medium">Rp 20.000</span>
          </div>
        </div>

        <div className="flex flex-col bg-gray font-Poppins rounded-xl cursor-pointer hover:scale-105 duration-200 transition-all shadow-xl">
          <div className="">
            <img
              src="https://ik.imagekit.io/lshkgi0dm/data/3.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1671184314687"
              alt=""
              className="object-contain rounded-xl"
            />
          </div>
          <div className="flex flex-row justify-between items-center bg-gray px-3 py-5 rounded-b-xl">
            <h2 className="text-base font-medium">Dupa Bulat</h2>
            <span className="text-base font-medium">Rp 20.000</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default All_Catalog;
