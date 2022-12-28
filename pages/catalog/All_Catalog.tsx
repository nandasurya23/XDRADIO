/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
import clsx from "clsx";
import Link from "next/link";
import { useState } from "react";
import { IoMdSearch } from "react-icons/io";

import { products } from "../api/data/products";

const All_Catalog = () => {
  const [query, setQuery] = useState("");

  return (
    <div className={clsx("w-11/12 px-3 mx-auto font-Poppins")}>
      <div
        className={clsx(
          "flex justify-between items-center flex-col py-5 ",
          "md:flex md:flex-row"
        )}
      >
        <h1
          className={clsx(
            "pt-32 text-xl font-bold tracking-wide ",
            "md:pt-20 md:text-3xl"
          )}
        >
          KATALOG
        </h1>
        <div className={clsx("pt-10 ", "md:pt-20")}>
          <div
            className={clsx(
              "bg-gray rounded-full flex items-center cursor-pointer"
            )}
          >
            <input
              placeholder="Cari Katalog..."
              type="text"
              className={clsx(
                "px-5 py-3  bg-gray rounded-full text-base focus:outline-none"
              )}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button className={clsx("bg-gray rounded-full py-3 px-5")}>
              <IoMdSearch />
            </button>
          </div>
        </div>
      </div>
      {/* All Product */}
      <div
        className={clsx(
          "grid grid-cols-1 gap-10 pt-2 pb-8",
          "md:grid-cols-2",
          "lg:grid-cols-4"
        )}
      >
        {products
          .filter((item: { title: string }) =>
            item.title.toLowerCase().includes(query)
          )
          .map(
            (item: {
              title: string;
              id: React.Key;
              image: string;
              price: number;
              duration: string;
              scent: string;
              stock: number;
            }) => {
              return (
                <Link href={`catalog/${item.title}`}>
                  <div
                    key={item.id}
                    className={clsx(
                      "flex flex-col bg-gray font-Poppins rounded-xl cursor-pointer hover:scale-105 duration-200 transition-all shadow-xl"
                    )}
                  >
                    <img
                      src={item.image}
                      className={clsx("rounded-t-xl shadow-xl")}
                    />
                    <div
                      className={clsx(
                        "flex flex-col space-y-3 bg-gray px-3 py-5"
                      )}
                    >
                      <h2
                        className={clsx(
                          "text-sm font-semibold",
                          "md:text-base"
                        )}
                      >
                        {item.title}
                      </h2>
                      <span
                        className={clsx("text-sm font-medium", "md:text-base")}
                      >
                        Rp{" "}
                        {item.price
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                      </span>

                      <span
                        className={clsx("text-sm font-medium", "md:text-base")}
                      >
                        Lama : {item.duration}
                      </span>
                      <span
                        className={clsx("text-sm font-medium", "md:text-base")}
                      >
                        Aroma : {item.scent}
                      </span>
                    </div>
                    <div
                      className={clsx(
                        "px-5 py-2 font-medium bg-gradient-to-br from-yellow-2 to-prime-1 text-center text-white rounded-b-xl"
                      )}
                    >
                      <p>
                        Stok{" "}
                        {item.stock
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                      </p>
                    </div>
                  </div>
                </Link>
              );
            }
          )}
      </div>
    </div>
  );
};

export default All_Catalog;
