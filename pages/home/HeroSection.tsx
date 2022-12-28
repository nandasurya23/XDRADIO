/* eslint-disable @next/next/no-img-element */
import clsx from "clsx";
const HeroSection = () => {
  return (
    <div
      className={clsx(
        "w-full pb-10 bg-gradient-to-br from-prime-2 via-prime-1 to-yellow-1 font-Poppins text-center text-white"
      )}
    >
      <div className={clsx("w-11/12 px-3 mx-auto")}>
        <h1
          className={clsx("pt-36 text-2xl font-bold md:text-5xl", "md:pt-32")}
        >
          Selamat Datang di Dewata Agung Dupa
        </h1>
        <p className={clsx("text-xl font-medium mt-5 ", "md:text-3xl")}>
          Selamat Berbelanja
        </p>
        <div
          className={clsx(
            "w-1/2 bg-white p-1 mx-auto rounded-full mt-4 ",
            "md:w-1/5"
          )}
        ></div>
        <div
          className={clsx(
            "flex flex-col mx-auto items-center px-3 mt-5",
            "md:flex md:flex-row"
          )}
        >
          <div className={clsx("px-3")}>
            <img
              src="https://ik.imagekit.io/lshkgi0dm/logo/Logo_Dewata_Agung.png?ik-sdk-version=javascript-1.4.3&updatedAt=1670848742230 "
              alt=""
              className={clsx("object-contain mx-auto")}
            />
          </div>
          <div className={clsx("flex flex-col mx-8 font-Poppins")}>
            <p className="text-justify text-lg">
              Kami menyediakan berbagai macam pilihan dupa mulai dari aroma,
              kemasan serta waktu nyala dupa yang sesuai dengan kebutuhan anda.
              Selain itu, kami juga menyediakan berbagai kebutuhan industri dupa
              seperti serbuk dupa, pengharum dupa, dupa mentah, label, dan
              kemasan dupa. Kami sudah berpengalaman sebagai penyedia dupa dan
              beragai kebutuhan industri dupa yang selalu memberikan kepuasan
              kepada konsumen melalui layanan yang mudah, ramah, efektif dan
              efisien.
            </p>

            <div className={clsx("flex justify-start items-center")}>
              <button
                className={clsx(
                  "mt-10 px-5 py-3 rounded-xl bg-gradient-to-b from-prime-2 to-dark text-white font-semibold w-full text-base tracking-wider",
                  "md:w-1/2 md:text-xl",
                  "hover:scale-105 ease-in-out transition-transform"
                )}
              >
                <a
                  href="https://wa.me/082146426737"
                  target="_blank"
                  rel="noreferrer"
                >
                  Info Selengkapnya
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
