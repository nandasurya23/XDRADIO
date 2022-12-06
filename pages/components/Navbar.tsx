const Navbar = () => {
  return (
    <nav className=" box-border bg-dark px-3 py-5 fixed w-full z-50 ">
      <div className="w-11/12  mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">
          <h1>Logo</h1>
        </div>
        <ul className="text-white flex">
          <li className="mx-5 hover:text-prime-1 cursor-pointer">Beranda</li>
          <li className="mx-5 hover:text-prime-1 cursor-pointer">Katalog</li>
          <li className="mx-5 hover:text-prime-1 cursor-pointer">
            Hubungi Kami
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
