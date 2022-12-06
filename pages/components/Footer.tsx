/* eslint-disable @next/next/no-img-element */

const Footer = () => {
  return (
    <section>
      <footer className="bg-dark w-full px-3 box-border">
        <div className="w-11/12 px-3 mx-auto py-10">
          <div className="flex justify-between items-center">
            <div className="flex flex-col justify-center ">
              <img
                src="https://ik.imagekit.io/lshkgi0dm/il.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1670247427684"
                alt=""
              />
              <div className="font-Poppins text-base text-white font-semibold">
                <p>Jl. Gunung Raung no 1 Selat, Samplangan, Gianyar</p>
              </div>
            </div>
            <div className="flex flex-col font-Poppins text-white">
              <h1 className="text-xl font-semibold">Main Menu</h1>
              <ul className="mt-3">
                <li className="my-3 hover:text-prime-1 cursor-pointer">
                  Beranda
                </li>
                <li className="my-3 hover:text-prime-1 cursor-pointer">
                  Katalog
                </li>
                <li className="my-3 hover:text-prime-1 cursor-pointer">
                  Hubungi Kami
                </li>
              </ul>
            </div>
            <div className="flex flex-col font-Poppins text-white">
              <h1 className="text-xl font-semibold">Temukan Kami</h1>
              <div className="flex items-center justify-center mt-5">
                <img
                  src="https://ik.imagekit.io/lshkgi0dm/icons/fb.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1670338903565"
                  alt=""
                  className="mr-2 w-6"
                />
                <p className="text-lg">DewataAgungDupa</p>
              </div>
              <div className="flex items-center justify-center mt-5">
                <img
                  src="https://ik.imagekit.io/lshkgi0dm/icons/ig.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1670338903565"
                  alt=""
                  className="mr-2 w-8"
                />
                <p className="text-lg">DewataAgungDupa</p>
              </div>
              <div className="flex items-center justify-center mt-5">
                <img
                  src="https://ik.imagekit.io/lshkgi0dm/icons/tiktok.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1670338903565"
                  alt=""
                  className="mr-2 w-8"
                />
                <p className="text-lg">DewataAgungDupa</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="flex items-center justify-center font-Poppins my-3">
        <img
          src="https://ik.imagekit.io/lshkgi0dm/icons/copyright.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1670339349440"
          alt=""
        />
        <p className="text-lg font-semibold ml-2 ">Dewata Agung Dupa</p>
      </div>
    </section>
  );
};

export default Footer;
