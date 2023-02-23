/* eslint-disable react/jsx-no-undef */
/* eslint-disable @next/next/no-img-element */
import { clsx } from "clsx";
import React from "react";
import ReactAudioPlayer from "react-audio-player";

const about = () => {
  return (
    <section
      className={clsx(
        "w-full bg-gradient-to-b from-prime-1 to-prime-4 pt-32 pb-12 text-white"
      )}
    >
      <div className="container px-3 mx-auto">
        <div className="flex flex-wrap  justify-between items-center">
          <div className="flex flex-col  w-full justify-between items-center  lg:flex-row">
            {/* PROFILE RADIO */}
            <div className="px-5 py-5 bg-prime-3 w-full rounded-2xl mx-0 lg:mx-5 mt-5 md:self-start  md:mt-0">
              <h1 className="text-xl xd-prime-b text-prime-2 font-semibold md:text-3xl">
                Profile <span className="text-white">Radio</span>
              </h1>
              <ReactAudioPlayer
                src="https://c4.siar.us:8940/stream"
                autoPlay
                controls={false}
              />
              <div className="xd-prime-r mt-3">
                <div className="flex flex-col">
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
                    Denpasar, Badung, Gianyar <br /> Bangli, Klungkung, <br />
                    Karangasem, Tabanan
                  </p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 w-full gap-5 mt-5 lg:mt-0">
              {/* Komposisi Music */}
              <div className="px-5 py-5 bg-prime-3 w-full rounded-2xl">
                <h1 className="text-xl xd-prime-b text-prime-2 font-semibold md:text-3xl">
                  Kompesisi <span className="text-white">Musik</span>
                </h1>
                <div className="xd-prime-r mt-3">
                  <div className="flex flex-col">
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
                    <p className="text-lg text-prime-2">Operation Time</p>
                    <p>5.30 am - 00.00 pm</p>
                  </div>
                  <div className="flex flex-col mt-3">
                    <p className="text-lg text-prime-2">Prime Time</p>
                    <p>15.00 pm - 20.00 pm</p>
                  </div>
                </div>
              </div>
              {/* Pendengar kami */}
              <div className="px-5 py-5 bg-prime-3 w-full rounded-2xl mt-5 md:mt-0">
                <h1 className="text-xl xd-prime-b text-prime-2 font-semibold md:text-3xl">
                  Pendengar <span className="text-white">Kami</span>
                </h1>
                <div className="xd-prime-r mt-3">
                  <div className="flex flex-col ">
                    <p className="text-lg text-prime-2">Usia</p>
                    <p>15 - 30 (Primary Target) 31 - 50 (Secondary Target)</p>
                  </div>
                  <div className="flex flex-col mt-3">
                    <p className="text-lg text-prime-2">Character</p>
                    <p>Creative, Fun, Cheerfull</p>
                  </div>
                  <div className="flex flex-col mt-3">
                    <p className="text-lg text-prime-2">Status</p>
                    <p>
                      Student (20 %), College (40 %), Entrepreneur (20 %), Labor
                      (20 %)
                    </p>
                  </div>
                  <div className="flex flex-col mt-3">
                    <p className="text-lg text-prime-2">Sex</p>
                    <p>Unisex</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default about;
