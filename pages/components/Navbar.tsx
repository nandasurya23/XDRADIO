import clsx from "clsx";
import Link from "next/link";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";

/* eslint-disable @next/next/no-img-element */
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <section className={clsx("box-border bg-dark px-3 py-5 fixed w-full z-50")}>
      <div
        className={clsx(
          "mx-auto flex flex-wrap w-full justify-between items-center",
          "md:w-11/12 md:flex-nowrap "
        )}
      >
        <div className={clsx("text-white text-xl font-bold flex items-center")}>
          <img
            src="https://ik.imagekit.io/lshkgi0dm/logo/Logo_Dewata_Agung.png?ik-sdk-version=javascript-1.4.3&updatedAt=1670848742230"
            alt=""
            className={clsx("w-10")}
          />
          <h2 className={clsx("mx-3 text-sm ", "md:text-lg")}>
            Dewata Agung Dupa
          </h2>
        </div>
        <FiMenu
          className={clsx("block h-6 w-6 cursor-pointer", "md:hidden")}
          color="white"
          onClick={() => setOpen(!open)}
        />
        <nav
          className={`${
            open ? "block" : "hidden"
          } md:flex md:items-center md:w-auto`}
        >
          <ul
            className={clsx(
              "text-white mt-5 space-y-3",
              "md:space-y-0 md:mt-0 md:flex"
            )}
          >
            <li className={clsx("mx-5 hover:text-prime-1 cursor-pointer")}>
              <Link href="/">Beranda</Link>
            </li>
            <li className={clsx("mx-5 hover:text-prime-1 cursor-pointer")}>
              <Link href="/catalog">Katalog</Link>
            </li>
            <li className={clsx("mx-5 hover:text-prime-1 cursor-pointer")}>
              <Link href="/contact">Hubungi kami</Link>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default Navbar;
