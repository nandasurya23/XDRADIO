/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */
import clsx from "clsx";
import { useRouter } from "next/router";
import { products } from "../api/data/products";

export default function detail() {
  const { query } = useRouter();
  const { slug } = query;
  const product = products.find((x) => x.slug === slug);

  if (!product) {
    return <div>Product Tidak ditemukan</div>;
  }

  return (
    <>
      <section
        className={clsx("w-11/12 px-3 mx-auto font-Poppins py-28 ", "md:py-24")}
      >
        <div
          className={clsx("text-center text-2xl font-bold mt-5", "md:text-4xl")}
        >
          <h1>Produk</h1>
        </div>
        <div className={clsx("flex flex-col  mt-10", "md:flex-row")}>
          <img
            src={product.image}
            alt=""
            className={clsx("mr-5 shadow-xl rounded-md w-80")}
          />
          <div
            className={clsx("flex flex-col space-y-5 w-full", "md:self-center")}
          >
            <p
              className={clsx(
                "text-base text-justify mt-4 font-semibold",
                "md:text-3xl md:text-left md:mt-0"
              )}
            >
              {product.title}
            </p>
            <hr />
            <div
              className={clsx(
                "flex justify-between items-center font-medium text-base",
                "md:text-lg"
              )}
            >
              <p>Harga :</p>
              <span>{product.price}</span>
            </div>
            <hr />
            <div
              className={clsx(
                "flex justify-between items-center font-medium text-base",
                "md:text-lg"
              )}
            >
              <p>Lama :</p>
              <span>{product.duration}</span>
            </div>
            <hr />
            <div
              className={clsx(
                "flex justify-between items-center font-medium text-base",
                "md:text-lg"
              )}
            >
              <p>Aroma :</p>
              <span>{product.scent}</span>
            </div>
            <hr />

            <div className={clsx("flex flex-row justify-between mt-5")}>
              <button
                className={clsx(
                  "px-3 py-3 bg-gradient-to-br from-yellow-1 to-yellow-2 w-full rounded-md",
                  "md:w-1/2"
                )}
              >
                <a
                  href="https://wa.me/082146426737"
                  target="_blank"
                  rel="noreferrer"
                >
                  Pesan Sekarang
                </a>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
