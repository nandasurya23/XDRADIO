import Link from "next/link";

/* eslint-disable @next/next/no-img-element */
const Navbar = () => {
  return (
    <nav className=" box-border bg-dark px-3 py-5 fixed w-full z-50 ">
      <div className="w-11/12  mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-bold flex items-center">
          <img
            src="https://ik.imagekit.io/lshkgi0dm/logo/Logo_Dewata_Agung.png?ik-sdk-version=javascript-1.4.3&updatedAt=1670848742230"
            alt=""
            className="w-10"
          />
          <h2 className="mx-3">Dewata Agung Dupa</h2>
        </div>
        <ul className="text-white flex">
          <li className="mx-5 hover:text-prime-1 cursor-pointer">
            <Link href="/">Beranda</Link>
          </li>
          <li className="mx-5 hover:text-prime-1 cursor-pointer">
            <Link href="/catalog">Katalog</Link>
          </li>
          <li className="mx-5 hover:text-prime-1 cursor-pointer">
            <Link href="/contact">Hubungi kami</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
