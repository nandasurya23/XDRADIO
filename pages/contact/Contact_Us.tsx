/* eslint-disable @next/next/no-img-element */
const Contact_Us = () => {
  return (
    <div className="bg-gradient-to-br from-prime-2 to-prime-1 font-Poppins">
      <div className="w-11/12 px-3 mx-auto pt-20">
        <div className="text-center text-white py-5">
          <h1 className="text-4xl font-semibold tracking-wider">
            Hubungi Kami
          </h1>
          <p className="mt-2">Dewata Agung Dupa</p>
          <div className="w-1/5 bg-white p-1 mx-auto rounded-full mt-4"></div>
        </div>
        <div className="py-5">
          <div className="p-5 rounded-xl bg-dark w-1/5 font-Poppins text-white text-center mx-auto">
            <img
              src="https://ik.imagekit.io/lshkgi0dm/icons/maps.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1670931352846"
              alt=""
              className="mx-auto"
            />
            <p className="mt-5">
              Jl. Gunung Raung no 1 Selat, Samplangan, Gianyar
            </p>
            <p>081136187292</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact_Us;
