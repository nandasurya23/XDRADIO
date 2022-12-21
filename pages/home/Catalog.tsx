import clsx from "clsx";
import { catalog } from "../api/data/catalog";
import Link from "next/link";

/* eslint-disable @next/next/no-img-element */
const Catalog = () => {
  return (
    <div className={clsx("w-11/12 px-3 mx-auto py-10")}>
      <h1
        className={clsx(
          "text-2xl font-Poppins font-semibold text-center py-5",
          "md:text-4xl"
        )}
      >
        Katalog
      </h1>
      <div className={clsx("grid grid-cols-1 gap-5 ", "md:grid-cols-4")}>
        {catalog.map((item) => {
          return (
            <div
              className={clsx(
                "flex flex-row bg-gray rounded-xl ",
                "md:flex-col"
              )}
              key={item.id}
            >
              <img
                src={item.image}
                alt=""
                className={clsx("object-contain rounded-xl w-24 ", "md:w-full")}
              />
              <div
                className={clsx(
                  "flex flex-col space-y-2 self-center bg-gray px-3 py-3 rounded-b-xl",
                  "md:flex-row md:items-center md:justify-between md:space-y-0 md:self-stretch"
                )}
              >
                <span className={clsx("text-base font-medium")}>
                  {item.title}
                </span>
                <img src={item.star} alt="" className={clsx("w-20")} />
              </div>
            </div>
          );
        })}
      </div>
      <Link href="/catalog">
        <div className="flex justify-center items-center">
          <button className="mt-10 px-5 py-4 rounded-xl bg-gradient-to-b from-prime-2 to-dark text-white font-semibold w-full text-base tracking-wider md:w-1/4 md:text-xl">
            Lihat Selengkapnya
          </button>
        </div>
      </Link>
    </div>
  );
};

export default Catalog;
