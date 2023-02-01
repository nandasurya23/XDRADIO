import clsx from "clsx";
import { articel } from "../api/data/articel";
import ReadMore from "../components/Readmore";

/* eslint-disable @next/next/no-img-element */

interface articel {
  description: string;
}
const Articels = () => {
  return (
    <section className="bg-prime-1">
      <div className={clsx("container font-XDPrime px-3 mx-auto py-10")}>
        <h1
          className={clsx(
            "text-2xl font-bold  text-center py-5 text-prime-2 mb-5",
            "md:text-4xl"
          )}
        >
          Let’s Explore The World
        </h1>
        <div className={clsx("grid grid-cols-1 gap-5 ", "md:grid-cols-3")}>
          {articel.map((item) => {
            return (
              <div
                className={clsx(
                  "flex flex-row bg-dark rounded-md px-3 py-3 hover:scale-95 ease-in-out transition-transform duration-200 shadow-xl",
                  "md:flex-col"
                )}
                key={item.id}
              >
                <img
                  src={item.image}
                  alt=""
                  className={clsx("object-contain w-24 ", "md:w-96 md:mx-auto")}
                />
                <div
                  className={clsx(
                    "flex flex-col space-y-2 self-center bg-dark text-white px-3 py-3 rounded-b-xl"
                  )}
                >
                  <span className={clsx("text-lg font-medium")}>
                    {item.title}
                  </span>
                  <ReadMore description={item.slug} />
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
