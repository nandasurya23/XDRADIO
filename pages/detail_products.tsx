/* eslint-disable @next/next/no-img-element */
export default function detail_products() {
  return (
    <>
      <section className="w-11/12 px-3 mx-auto font-Poppins py-28 md:py-24">
        <div className="text-center text-2xl font-bold mt-5 md:text-4xl">
          <h1>Produk</h1>
        </div>
        <div className="flex flex-col md:flex md:flex-row mt-10">
          <img
            src="https://ik.imagekit.io/lshkgi0dm/dupa-large.png?ik-sdk-version=javascript-1.4.3&updatedAt=1670334356709"
            alt=""
            className="mr-5 shadow-xl rounded-md mx-auto"
          />
          <div className="flex flex-col space-y-5">
            <p className="text-base text-justify mt-4 font-medium md:text-lg md:text-left md:mt-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              quam velit, vulputate eu pharetra nec, mattis ac neque. Duis
              vulputate commodo lectus, ac blandit elit tincidunt id. Sed
              rhoncus, tortor sed eleifend tristique, tortor mauris molestie
              elit, et lacinia ipsum quam nec dui. Quisque nec mauris sit amet
              elit iaculis pretium sit amet quis magna. Aenean velit odio,
              elementum in tempus ut, vehicula eu diam. Pellentesque rhoncus
              aliquam mattis.{" "}
            </p>
            <hr />
            <div className="flex justify-between items-center">
              <p>Harga :</p>
              <span>Rp 20.000</span>
            </div>
            <hr />
            <div className="flex justify-between items-center">
              <p>Lama :</p>
              <span>2 jam</span>
            </div>
            <hr />
            <div className="flex justify-between items-center">
              <p>Aroma :</p>
              <span>Harum</span>
            </div>
            <hr />
            <div className="flex flex-row justify-between mt-5">
              <button className="px-3 py-3 bg-gradient-to-br from-yellow-1 to-yellow-2 w-full rounded-md md:w-1/2">
                Pesan Sekarang
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
