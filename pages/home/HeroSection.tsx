/* eslint-disable @next/next/no-img-element */
const HeroSection = () => {
  return (
    <div className="w-full pb-10 bg-gradient-to-br from-prime-1 to-prime-2 font-Poppins text-center text-white">
      <div className="w-11/12 px-3 mx-auto">
        <h1 className="pt-32 text-5xl font-bold">
          Selamat Datang di Dewata Agung Dupa
        </h1>
        <p className="text-3xl font-medium mt-5">Selamat Berbelanja</p>
        <div className="w-1/5 bg-white p-1 mx-auto rounded-full mt-4"></div>
        <div className="flex mx-auto items-center px-3 mt-5">
          <div className="px-3">
            <img
              src="https://ik.imagekit.io/lshkgi0dm/il-large.png?ik-sdk-version=javascript-1.4.3&updatedAt=1670249239142"
              alt=""
              className="w-11/12"
            />
          </div>
          <div className="flex flex-col mx-8 font-Poppins">
            <p className="text-justify text-lg leading-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              quam velit, vulputate eu pharetra nec, mattis ac neque. Duis
              vulputate commodo lectus, ac blandit elit tincidunt id. Sed
              rhoncus, tortor sed eleifend tristique, tortor mauris molestie
              elit, et lacinia ipsum quam nec dui.
            </p>
            <div className="flex justify-start items-center">
              <button className="mt-10 px-5 py-3 rounded-xl bg-gradient-to-b from-yellow-1 to-yellow-2 text-dark font-semibold w-1/2 text-xl tracking-wider">
                Info Selengkapnya
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
