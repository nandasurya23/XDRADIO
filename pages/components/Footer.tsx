/* eslint-disable @next/next/no-img-element */
import { RiFacebookCircleLine } from "react-icons/ri";
import { AiOutlineInstagram } from "react-icons/ai";
import { SiTwitter } from "react-icons/si";
import { BiCopyright } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <footer className={clsx("bg-dark w-full px-3 box-border xd-prime-b")}>
        <div className={clsx("container px-3 mx-auto py-10")}>
          <div
            className={clsx(
              "flex flex-col justify-between items-center",
              " md:flex-row"
            )}
          >
            <div className={clsx("flex flex-col justify-center", "md:w-full")}>
              <Image
                src="https://res.cloudinary.com/df82hir2r/image/upload/v1675135466/xdradio/18_utaonl.png"
                alt=""
                className={clsx("w-20 mx-auto", "md:mx-20")}
                width={800}
                height={0}
              />
              <div
                className={clsx(
                  " text-sm text-justify  text-white font-bold mt-5",
                  "md:text-base md:text-left"
                )}
              >
                <p>Jln. Tukad Badung No 135 Denpasar</p>
              </div>
              <a
                href="https://wa.me/6283114226818"
                target="_blank"
                rel="noreferrer"
                className="text-white"
              >
                <div className={clsx("flex items-center justify-start mt-5")}>
                  <FaWhatsapp size={20} className={clsx("mr-2")} />
                  <p className={clsx("text-lg")}>083114226818</p>
                </div>
              </a>
            </div>
            <div
              className={clsx(
                "flex flex-col w-full text-white mt-5 ",
                "md:mt-0"
              )}
            >
              <h1 className={clsx("text-xl font-bold")}>Main Menu</h1>
              <ul className={clsx("mt-0")}>
                <li className={clsx("my-3 hover:text-prime-2 cursor-pointer")}>
                  <Link href="/">Home</Link>
                </li>
                <li className={clsx("my-3 hover:text-prime-2 cursor-pointer")}>
                  <Link href="/program">Program</Link>
                </li>
                <li className={clsx("my-3 hover:text-prime-2 cursor-pointer")}>
                  <Link href="/announcer">Announcer</Link>
                </li>
                <li className={clsx("my-3 hover:text-prime-2 cursor-pointer")}>
                  <Link href="/gallery">Gallery</Link>
                </li>
                <li className={clsx("my-3 hover:text-prime-2 cursor-pointer")}>
                  <Link href="/about">About US</Link>
                </li>
              </ul>
            </div>
            <div
              className={clsx(
                "flex flex-col text-white w-full mt-5 ",
                "md:w-1/2 md:mt-0"
              )}
            >
              <h1 className={clsx("text-xl font-bold")}>Find US</h1>
              <a
                href="https://www.facebook.com/profile.php?id=100087486210259"
                target="_blank"
                rel="noreferrer"
              >
                <div className={clsx("flex items-center justify-start mt-5")}>
                  <RiFacebookCircleLine size={20} className={clsx("mr-2")} />
                  <p className={clsx("text-lg")}>XDRADIOBALI</p>
                </div>
              </a>

              <a
                href="https://www.instagram.com/xdradiobali"
                target="_blank"
                rel="noreferrer"
              >
                <div className={clsx("flex items-center justify-start mt-5")}>
                  <AiOutlineInstagram size={20} className="mr-2" />
                  <p className={clsx("text-lg")}>XDRADIOBALI</p>
                </div>
              </a>

              <a
                href="https://www.tiktok.com/@_dewata_agung"
                target="_blank"
                rel="noreferrer"
              >
                <div className={clsx("flex items-center justify-start mt-5")}>
                  <SiTwitter size={20} className={clsx("mr-2")} />
                  <p className={clsx("text-lg")}>XDRADIOBALI</p>
                </div>
              </a>
              <a
                href="https://www.tiktok.com/@_dewata_agung"
                target="_blank"
                rel="noreferrer"
              >
                <div className={clsx("flex items-center justify-start mt-5")}>
                  <MdEmail size={20} className={clsx("mr-2")} />
                  <p className={clsx("text-lg")}>xdradio@primakara.ac.id</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </footer>
      <div className={clsx("flex items-center justify-center my-3")}>
        <BiCopyright size={30} />
        <p className={clsx(" text-sm md:text-lg font-semibold ml-2 ")}>
          @2022 XD RADIO YUDHA BALI 90.2 FM Your Extra Ordinary Music Station
        </p>
      </div>
    </>
  );
};

export default Footer;
