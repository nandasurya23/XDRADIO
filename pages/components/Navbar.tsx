import clsx from "clsx";
import Link from "next/link";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { FiRadio } from "react-icons/fi";

/* eslint-disable @next/next/no-img-element */
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <section
      className={clsx(
        "box-border bg-prime-1/50 px-3 py-5 fixed w-full z-50 shadow-xl "
      )}
    >
      <div
        className={clsx(
          "mx-auto flex container justify-between items-center",
          " md:flex-nowrap "
        )}
      >
        <div className={clsx("text-white text-xl font-bold flex items-center")}>
          <img
            src="https://res.cloudinary.com/df82hir2r/image/upload/v1675135466/xdradio/18_utaonl.png"
            alt=""
            className={clsx("w-10 md:w-20")}
          />
        </div>
        <FiMenu
          className={clsx("block h-6 w-6 cursor-pointer", "md:hidden")}
          color="white"
          onClick={() => setOpen(!open)}
        />
        <nav
          className={`${
            open ? "block" : "hidden"
          } md:flex  md:items-center md:w-auto`}
        >
          <ul
            className={clsx(
              "text-white font-XDPrime font-medium mt-5 space-y-3",
              "md:space-y-0 md:mt-0 md:flex"
            )}
          >
            <li className={clsx("mx-5 hover:text-prime-2 cursor-pointer")}>
              <Link href="/">Home</Link>
            </li>
            <li className={clsx("mx-5 hover:text-prime-2 cursor-pointer")}>
              <Link href="/catalog">Program</Link>
            </li>
            <li className={clsx("mx-5 hover:text-prime-2 cursor-pointer")}>
              <Link href="/contact">Announcer</Link>
            </li>
            <li className={clsx("mx-5 hover:text-prime-2 cursor-pointer")}>
              <Link href="/contact">Gallery</Link>
            </li>
            <li className={clsx("mx-5 hover:text-prime-2 cursor-pointer")}>
              <Link href="/contact">About US</Link>
            </li>
          </ul>
        </nav>
        <div className="hidden md:block">
          <FiRadio
            color="white"
            size={40}
            className="cursor-pointer hover:scale-105 ease-in-out transition-transform"
          />
        </div>
      </div>
    </section>
  );
};

export default Navbar;
