/* eslint-disable @next/next/no-img-element */
import { RiFacebookCircleLine } from "react-icons/ri";
import { AiOutlineInstagram } from "react-icons/ai";
import { SiTiktok } from "react-icons/si";

const Footer = () => {
  return (
    <section>
      <footer className="bg-dark w-full px-3 box-border">
        <div className="w-11/12 px-3 mx-auto py-10">
          <div className="flex flex-col justify-between items-center md:flex md:flex-row">
            <div className="flex flex-col justify-center md:w-full">
              <img
                src="https://ik.imagekit.io/lshkgi0dm/logo/Logo_Dewata_Agung.png?ik-sdk-version=javascript-1.4.3&updatedAt=1670848742230"
                alt=""
                className="w-20 mx-auto md:mx-20"
              />
              <div className="font-Poppins text-sm text-justify  text-white font-semibold mt-5 md:text-base md:text-left">
                <p>Jl. Gunung Raung no 1 Selat, Samplangan, Gianyar</p>
              </div>
            </div>
            <div className="flex flex-col w-full font-Poppins text-white mt-5 md:mt-0">
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
            <div className="flex flex-col font-Poppins text-white w-full mt-5 md:w-1/2 md:mt-0">
              <h1 className="text-xl font-semibold">Temukan Kami</h1>
              <div className="flex items-center justify-start mt-5">
                <RiFacebookCircleLine className="mr-2" />
                <p className="text-lg">DewataAgungDupa</p>
              </div>
              <div className="flex items-center justify-start mt-5">
                <AiOutlineInstagram className="mr-2" />
                <p className="text-lg">DewataAgungDupa</p>
              </div>
              <div className="flex items-center justify-start mt-5">
                <SiTiktok className="mr-2" />
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
