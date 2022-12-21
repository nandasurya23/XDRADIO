/* eslint-disable @next/next/no-img-element */
import { RiFacebookCircleLine } from "react-icons/ri";
import { AiOutlineInstagram } from "react-icons/ai";
import { SiTiktok } from "react-icons/si";
import { BiCopyright } from "react-icons/bi";
import clsx from "clsx";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className={clsx("bg-dark w-full px-3 box-border")}>
        <div className={clsx("w-11/12 px-3 mx-auto py-10")}>
          <div
            className={clsx(
              "flex flex-col justify-between items-center",
              " md:flex-row"
            )}
          >
            <div className={clsx("flex flex-col justify-center", "md:w-full")}>
              <img
                src="https://ik.imagekit.io/lshkgi0dm/logo/Logo_Dewata_Agung.png?ik-sdk-version=javascript-1.4.3&updatedAt=1670848742230"
                alt=""
                className={clsx("w-20 mx-auto", "md:mx-20")}
              />
              <div
                className={clsx(
                  "font-Poppins text-sm text-justify  text-white font-semibold mt-5",
                  "md:text-base md:text-left"
                )}
              >
                <p>Jl. Gunung Raung no 1 Selat, Samplangan, Gianyar</p>
              </div>
            </div>
            <div
              className={clsx(
                "flex flex-col w-full font-Poppins text-white mt-5 ",
                "md:mt-0"
              )}
            >
              <h1 className={clsx("text-xl font-semibold")}>Main Menu</h1>
              <ul className={clsx("mt-3")}>
                <li className={clsx("my-3 hover:text-prime-1 cursor-pointer")}>
                  <Link href="/">Beranda</Link>
                </li>
                <li className={clsx("my-3 hover:text-prime-1 cursor-pointer")}>
                  <Link href="/catalog">Katalog</Link>
                </li>
                <li className={clsx("my-3 hover:text-prime-1 cursor-pointer")}>
                  <Link href="/contact">Hubungi kami</Link>
                </li>
              </ul>
            </div>
            <div
              className={clsx(
                "flex flex-col font-Poppins text-white w-full mt-5 ",
                "md:w-1/2 md:mt-0"
              )}
            >
              <h1 className={clsx("text-xl font-semibold")}>Temukan Kami</h1>
              <a
                href="https://www.facebook.com/profile.php?id=100087486210259"
                target="_blank"
                rel="noreferrer"
              >
                <div className={clsx("flex items-center justify-start mt-5")}>
                  <RiFacebookCircleLine className={clsx("mr-2")} />
                  <p className={clsx("text-lg")}>Dewata Agung</p>
                </div>
              </a>

              <a
                href="https://www.instagram.com/dewataagung_/"
                target="_blank"
                rel="noreferrer"
              >
                <div className={clsx("flex items-center justify-start mt-5")}>
                  <AiOutlineInstagram className="mr-2" />
                  <p className={clsx("text-lg")}>dewataagung_</p>
                </div>
              </a>

              <a
                href="https://www.tiktok.com/@_dewata_agung"
                target="_blank"
                rel="noreferrer"
              >
                <div className={clsx("flex items-center justify-start mt-5")}>
                  <SiTiktok className={clsx("mr-2")} />
                  <p className={clsx("text-lg")}>@_dewata_agung</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </footer>
      <div
        className={clsx("flex items-center justify-center font-Poppins my-3")}
      >
        <BiCopyright size={30} />
        <p className={clsx("text-lg font-semibold ml-2 ")}>Dewata Agung Dupa</p>
      </div>
    </>
  );
};

export default Footer;
