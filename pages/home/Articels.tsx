/* eslint-disable react/jsx-no-undef */
import clsx from "clsx";
import { articel } from "../api/data/articel";
import Image from "next/image";

/* eslint-disable @next/next/no-img-element */
const Articels = () => {
  return (
    <section className="bg-prime-5">
      <div className={clsx("container px-3 mx-auto py-10")}>
        <h1
          className={clsx(
            "text-2xl xd-prime-b font-bold  text-center py-5 text-prime-2 mb-5",
            "md:text-3xl"
          )}
        >
          Let’s Explore The World
        </h1>
        <div className={clsx("grid grid-cols-1 gap-10 ", "md:grid-cols-3")}>
          {articel.map((item) => {
            return (
              <div
                className={clsx(
                  "flex flex-row bg-prime-3 rounded-xl hover:scale-95 ease-in-out transition-transform duration-200 shadow-xl",
                  "md:flex-col"
                )}
                key={item.id}
              >
                <Image
                  src={item.image}
                  alt=""
                  className={clsx(
                    "object-center object-cover w-40 rounded-xl ",
                    "md:w-full md:mx-auto"
                  )}
                  width={800}
                  height={0}
                />
                <div
                  className={clsx(
                    "flex flex-col xd-prime-r space-y-2 self-center bg-prime-3 text-white px-5 md:px-3 py-5 rounded-b-xl"
                  )}
                >
                  <span className={clsx("text-sm font-medium", "md:text-lg")}>
                    {item.title}
                  </span>
                  <p className="text-xs md:text-sm font-normal">{item.slug}</p>
                  <a
                    href={item.link}
                    target="_blank"
                    className="text-center"
                    rel="noreferrer"
                  >
                    <button className="underline text-sm md:text-lg cursor-pointer">
                      Read More
                    </button>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Articels;
