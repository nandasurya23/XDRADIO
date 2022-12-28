/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable @next/next/no-img-element */

import clsx from "clsx";
import { FiMapPin } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { ImWhatsapp } from "react-icons/im";
const Contact_Us = () => {
  return (
    <div
      className={clsx("bg-gradient-to-br from-prime-2 to-prime-1 font-Poppins")}
    >
      <div className={clsx("w-11/12 px-3 mx-auto pt-20")}>
        <div className={clsx("text-center text-white py-5")}>
          <h1 className={clsx("text-4xl font-semibold tracking-wider")}>
            Hubungi Kami
          </h1>
          <p className={clsx("mt-2")}>Dewata Agung Dupa</p>
          <div
            className={clsx("w-1/5 bg-white p-1 mx-auto rounded-full mt-4")}
          ></div>
        </div>
        <div className={clsx("py-5")}>
          <div
            className={clsx(
              "p-5 rounded-xl bg-dark w-full font-Poppins text-white text-center mx-auto ",
              "md:w-1/4"
            )}
          >
            <FiMapPin size={70} className={clsx("mx-auto my-5")} />
            <a
              href="https://maps.app.goo.gl/xpcT3aPa1pQMsm1u8?g_st=ic"
              target="_blank"
            >
              Jl. Gunung Raung no 1 Selat, Samplangan, Gianyar
            </a>
            <a href="mailto:dewataagung1103@gmail.com" target="_blank">
              <div
                className={clsx(
                  "flex flex-row items-center justify-center my-5"
                )}
              >
                <HiOutlineMail size={20} className="mr-3" />
                <p>dewataagung1103@gmail.com</p>
              </div>
            </a>
            <a
              href="https://wa.me/082146426737?text=Halo Kak saya mau pesan ini "
              target="_blank"
            >
              <div
                className={clsx(
                  "my-4 flex flex-row items-center justify-center"
                )}
              >
                <ImWhatsapp size={20} className={clsx("mr-3")} />
                <p>082146426737</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact_Us;
