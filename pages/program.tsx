/* eslint-disable @next/next/no-img-element */
import { clsx } from "clsx";
import React from "react";
import Image from "next/image";
import ReactAudioPlayer from "react-audio-player";

const program = () => {
  return (
    <section className={clsx("w-full bg-prime-5 pt-32 pb-12 text-white")}>
      <div className="container px-3 mx-auto">
        <h1 className="text-prime-2 xd-prime-b font-bold text-xl md:text-3xl">
          XD Radio <span className="text-white">Program</span>
          <ReactAudioPlayer
            src="https://c4.siar.us:8068/stream"
            autoPlay
            controls={false}
          />
        </h1>
        <div className="grid grid-cols-1 gap-4">
          <div className="flex items-center justify-between ">
            <div className="bg-prime-3 flex flex-col items-center px-3 py-3 rounded-xl mt-5 lg:flex-row">
              <Image
                src="https://res.cloudinary.com/df82hir2r/image/upload/v1675678521/xdradio/programs/p1_mwns2s.jpg"
                alt=""
                className=" w-full lg:w-96 mx-auto object-cover rounded mr-5"
                width={800}
                height={0}
              />
              <div className="px-3 py-3 self-start space-y-4">
                <h3 className="xd-prime-b font-bold text-xl md:text-3xl text-prime-2">
                  Sunset N Chill <br />
                  <span className="text-white">
                    Monday - Friday 05.00 - 06.00 pm
                  </span>
                </h3>
                <p className="text-sm text-justify md:text-base xd-prime-r leading-normal">
                  Program yang akan nemenin waktu XD People dengan playlist yang
                  asik untuk nemenin kalian Sore ini untuk menjaga good mood
                  kamu setelah beraktifitas . XD Radio juga bakal bagiin
                  informasi hypbeast yang sangat cocok buat para XD People, dan
                  juga kalian bisa titip salam maupun request ke IG xdradio,
                  nanti pasti bakal di bacain sama kakak - kakak announcer XD
                  Radio <br />
                  So Ditunggu Request dan salam-nya Ya
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between ">
            <div className="bg-prime-3 flex flex-col items-center px-3 py-3 rounded-xl mt-5 lg:flex-row">
              <Image
                src="https://res.cloudinary.com/df82hir2r/image/upload/v1675678499/xdradio/programs/p7_tk8zto.jpg"
                alt=""
                className=" w-full lg:w-96 mx-auto object-cover rounded mr-5"
                width={800}
                height={0}
              />
              <div className="px-3 py-3 self-start space-y-4">
                <h3 className="xd-prime-b font-bold text-xl md:text-3xl text-prime-2">
                  SASENGEMPAL <br />
                  “Sareng - Sareng Ngalih Timpal” <br />
                  <span className="text-white">Thursday 03.00 - 04.00 pm</span>
                </h3>
                <p className="text-sm text-justify md:text-base xd-prime-r leading-normal">
                  Program ini menjawab para semeton xd people di bali sebagai
                  program Exclusif dari xd radio yang bertemakan Balinese Style,
                  dengan membagikan informasi digital, kreatif, dan lifestyle di
                  bali , dan yang paling di tunggu tentunya Playlist dari
                  musisi-musisi bali, juga ada segment Sapal yaitu Sapa - Sapa
                  Timpal,, so Stay Tune On Program SasengempaL.
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between ">
            <div className="bg-prime-3 flex flex-col items-center px-3 py-3 rounded-xl mt-5 lg:flex-row">
              <Image
                src="https://res.cloudinary.com/df82hir2r/image/upload/v1675922526/xdradio/programs/2_new_1_pghrxf.jpg"
                alt=""
                className=" w-full lg:w-96 mx-auto object-cover rounded mr-5"
                width={800}
                height={0}
              />
              <div className="px-3 py-3 self-start space-y-4">
                <h3 className="xd-prime-b font-bold text-xl md:text-3xl text-prime-2">
                  Extraordinary Morning
                  <br />
                  <span className="text-white">
                    Monday - Friday 10.00 - 11.00 am
                  </span>
                </h3>
                <p className="text-sm text-justify md:text-base xd-prime-r leading-normal">
                  Extraordinary Morning adalah Program yang akan menemani XD
                  People semua dalam memulai aktifitas kalian , dimulai dengan
                  konten kreatif nan menarik, info cuaca terkini, informasi
                  uptodate seputar digital, kreatif, dan lifestyle, juga
                  playlist yang akan bantu ngebangun mood kamu dalam memulai
                  hari - hari XD People, So Stay Tune Ya.
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between ">
            <div className="bg-prime-3 flex flex-col items-center px-3 py-3 rounded-xl mt-5 lg:flex-row">
              <Image
                src="https://res.cloudinary.com/df82hir2r/image/upload/v1675678740/xdradio/programs/p3_wnin3g.jpg"
                alt=""
                className=" w-full lg:w-96 mx-auto object-cover rounded mr-5"
                width={800}
                height={0}
              />
              <div className="px-3 py-3 self-start space-y-4">
                <h3 className="xd-prime-b font-bold text-xl md:text-3xl text-prime-2">
                  HANTU <br />
                  ‘Hapaan Tuh’ <br />
                  <span className="text-white">
                    Monday - Friday 08.00 - 09.00 pm
                  </span>
                </h3>
                <p className="text-sm text-justify md:text-base xd-prime-r leading-normal">
                  Program Hantu ialah program spesial yang khusus disuguhkan
                  untuk menemani malam xd people semua, yang dimana di program
                  ini tiap harinya akan selalu mengangkat tema yang berbeda, so
                  bagi xd people yang mungkin ingin menambah wawasan sambil
                  denger Playlist Keren bisa staytune di Program Hantu “Hapaan
                  Tuh”
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between ">
            <div className="bg-prime-3 flex flex-col items-center px-3 py-3 rounded-xl mt-5 lg:flex-row">
              <Image
                src="https://res.cloudinary.com/df82hir2r/image/upload/v1675922524/xdradio/programs/5new_1_codkbg.jpg"
                alt=""
                className=" w-full lg:w-96 mx-auto object-cover rounded mr-5"
                width={800}
                height={0}
              />
              <div className="px-3 py-3 self-start space-y-4">
                <h3 className="xd-prime-b font-bold text-xl md:text-3xl text-prime-2">
                  Startup Your Weekend
                  <br />
                  <span className="text-white">Saturday 9.00 - 12.00 am</span>
                </h3>
                <p className="text-sm text-justify md:text-base xd-prime-r leading-normal">
                  Program yang khusus untuk nemenin sabtu pagi XD people semua ,
                  dengan konten kreatif, update cuaca, tips dan informasi
                  menarik seputar digital kreatif and lifestyle, juga playlist
                  yang cocok buat nemenin waktu weekend kalian, soo ditunggu ya
                  request lagu dan titip salam dari XD people semua,, <br />
                  Lets Enjoy Your Weekend With XD Radio
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between ">
            <div className="bg-prime-3 flex flex-col items-center px-3 py-3 rounded-xl mt-5 lg:flex-row">
              <Image
                src="https://res.cloudinary.com/df82hir2r/image/upload/v1675678499/xdradio/programs/p4_s1vatx.jpg"
                alt=""
                className=" w-full lg:w-96 mx-auto object-cover rounded mr-5"
                width={800}
                height={0}
              />
              <div className="px-3 py-3 self-start space-y-4">
                <h3 className="xd-prime-b font-bold text-xl md:text-3xl text-prime-2">
                  Music Corner
                  <br />
                  <span className="text-white">Sunday 05.00 - 07.00 pm</span>
                </h3>
                <p className="text-sm text-justify md:text-base xd-prime-r leading-normal">
                  Program khusus yang nemenin XD People dengan playlist
                  bertema-kan “all genre” musik namun bukan hanya mendengarkan
                  musik - musik keren tapi di program ini kita akan membahas
                  seputar band musik dan genre musik,Jadi ditunggu Request Band
                  yang ingin dibahas juga request lagu nya, <br />
                  Start Your Mood On Music Corner
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between ">
            <div className="bg-prime-3 flex flex-col items-center px-3 py-3 rounded-xl mt-5 lg:flex-row">
              <Image
                src="https://res.cloudinary.com/df82hir2r/image/upload/v1675678523/xdradio/programs/p6_x0rkp4.jpg"
                alt=""
                className=" w-full lg:w-96 mx-auto object-cover rounded mr-5"
                width={800}
                height={0}
              />
              <div className="px-3 py-3 self-start space-y-4">
                <h3 className="xd-prime-b font-bold text-xl md:text-3xl text-prime-2">
                  Asian Nite
                  <br />
                  <span className="text-white">Friday 07.00 - 09.00 pm</span>
                </h3>
                <p className="text-sm text-justify md:text-base xd-prime-r leading-normal">
                  Program Exclusive Asian yang menghadirkan musik - musik dari
                  musisi asal asia dan juga membahas seputar musisinya ,jadi
                  kalian para pencinta Asia dan yang Asian Pride banget Stay
                  Tune <br />
                  Enjoy Your Asia with XD Radio
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default program;
