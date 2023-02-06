/* eslint-disable react/jsx-no-undef */
/* eslint-disable @next/next/no-img-element */
import { clsx } from "clsx";
import React from "react";
import Image from "next/image";

const about = () => {
  return (
    <section
      className={clsx(
        "w-full bg-gradient-to-b from-dark to-prime-1 pt-32 pb-12 text-white"
      )}
    >
      <div className="container px-3 mx-auto">
        <div className="flex flex-wrap justify-between items-center">
          <div className="flex flex-col justify-between w-full items-center rounded-2xl bg-prime-3 lg:flex-row lg:self-start lg:w-auto lg:mt-0">
            {/* PROFILE RADIO */}
            <div className="px-5 py-5 bg-prime-3  w-full rounded-2xl mt-5 md:self-start md:w-auto md:mt-0">
              <h1 className="text-xl xd-prime-b text-prime-2 font-semibold md:text-3xl">
                Profile <span className="text-white">Radio</span>
              </h1>
              <div className="xd-prime-r mt-3">
                <div className="flex flex-col ">
                  <p className="text-lg text-prime-2">Badan Hukum</p>
                  <p>PT . Radio Suara Yudha</p>
                </div>
                <div className="flex flex-col mt-3">
                  <p className="text-lg text-prime-2">Station Radio</p>
                  <p>XD Radio</p>
                </div>
                <div className="flex flex-col mt-3">
                  <p className="text-lg text-prime-2">Station Call</p>
                  <p>Your Extra Ordinary Music Station</p>
                </div>
                <div className="flex flex-col mt-3">
                  <p className="text-lg text-prime-2">Frequnsi</p>
                  <p>90.2 Fm</p>
                </div>
                <div className="flex flex-col mt-3">
                  <p className="text-lg text-prime-2">Alamat</p>
                  <p>Jln. Tukad Badung No 135 Denpasar</p>
                </div>
                <div className="flex flex-col mt-3">
                  <p className="text-lg text-prime-2">Telp</p>
                  <p>+62 831-1422-6818</p>
                </div>
                <div className="flex flex-col mt-3">
                  <p className="text-lg text-prime-2">Email</p>
                  <p>xdradio@primakara.ac.id</p>
                </div>
                <div className="flex flex-col mt-3">
                  <p className="text-lg text-prime-2">Website</p>
                  <p>xdradiofm.com</p>
                </div>
                <div className="flex flex-col mt-3">
                  <p className="text-lg text-prime-2">Tema Radio</p>
                  <p>Digital , Creative , Lifestyle</p>
                </div>
                <div className="flex flex-col mt-3">
                  <p className="text-lg text-prime-2">Area Jangkauan</p>
                  <p>
                    Denpasar, Badung, Gianyar,
                    <br />
                    Bangli, Klungkung, Karangasem,
                    <br />
                    Tabanan
                  </p>
                </div>
              </div>
            </div>
            {/* Komposisi Music */}
            <div className="px-5 py-5 bg-prime-3  w-full rounded-2xl mt-5 md:self-start md:w-auto md:mt-0">
              <h1 className="text-xl xd-prime-b text-prime-2 font-semibold md:text-3xl">
                Kompesisi <span className="text-white">Musik</span>
              </h1>
              <div className="xd-prime-r mt-3">
                <div className="flex flex-col ">
                  <p className="text-lg text-prime-2">Lagu Mancanegara</p>
                  <p>
                    45 <span>%</span>
                  </p>
                </div>
                <div className="flex flex-col mt-3">
                  <p className="text-lg text-prime-2">Lagu Indonesia</p>
                  <p>
                    40 <span>%</span>
                  </p>
                </div>
                <div className="flex flex-col mt-3">
                  <p className="text-lg text-prime-2">Lagu Korea</p>
                  <p>
                    15 <span>%</span>
                  </p>
                </div>
                <div className="flex flex-col mt-3">
                  <p className="text-lg text-prime-2">On Air Aura</p>
                  <p>Cherfull & Fun</p>
                </div>
                <div className="flex flex-col mt-3">
                  <p className="text-lg text-prime-2">Operation Time</p>
                  <p>5.30 am - 00.00 pm</p>
                </div>
                <div className="flex flex-col mt-3">
                  <p className="text-lg text-prime-2">Prime Time</p>
                  <p>15.00 pm - 20.00 pm</p>
                </div>
              </div>
            </div>
          </div>

          {/* RATE CARD */}
          <div className="px-5 py-5 bg-prime-3  w-full rounded-2xl mt-10  md:self-start md:w-auto lg:mt-0">
            <h1 className="text-xl xd-prime-b text-prime-2 font-semibold md:text-3xl">
              Rate <span className="text-white">Card</span>
            </h1>
            <Image
              src="https://res.cloudinary.com/df82hir2r/image/upload/v1675678774/xdradio/programs/RATE_CARD_tofqmp.jpg"
              alt=""
              className=" w-full lg:w-96 mx-auto object-cover  mt-3 rounded"
              width={800}
              height={0}
            />
            <button className="bg-gradient-to-br from-prime-2 to-prime-1 mt-3 px-3 py-1 w-full tracking-wider xd-prime-b rounded-2xl md:w-1/2">
              Download
            </button>
            <h1 className="text-xl xd-prime-b text-prime-2 font-semibold md:text-3xl mt-10">
              Pendengar <span className="text-white">Kami</span>
            </h1>
            <div className="xd-prime-r mt-3">
              <div className="flex flex-col ">
                <p className="text-lg text-prime-2">Usia</p>
                <p>
                  15 - 30 (Primary Target) <br />
                  31 - 50 (Secondary Target)
                </p>
              </div>
              <div className="flex flex-col mt-3">
                <p className="text-lg text-prime-2">Character</p>
                <p>Creative, Fun, Cheerfull</p>
              </div>
              <div className="flex flex-col mt-3">
                <p className="text-lg text-prime-2">Status</p>
                <p>
                  Student, College, Entrepreneur, <br />
                  Labor
                </p>
              </div>
              <div className="flex flex-col mt-3">
                <p className="text-lg text-prime-2">Pelajar</p>
                <p>
                  20 <span>%</span>
                </p>
              </div>
              <div className="flex flex-col mt-3">
                <p className="text-lg text-prime-2">Mahasiswa</p>
                <p>
                  50 <span>%</span>
                </p>
              </div>
              <div className="flex flex-col mt-3">
                <p className="text-lg text-prime-2">Karyawan</p>
                <p>
                  20 <span>%</span>
                </p>
              </div>
              <div className="flex flex-col mt-3">
                <p className="text-lg text-prime-2">Lain - Lain</p>
                <p>
                  10 <span>%</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default about;
