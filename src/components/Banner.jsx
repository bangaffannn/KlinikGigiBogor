import React from "react";
import Card from "./content/Card.jsx";
import Img1 from "../assets/dentist-4.png";

import { MdOutlineHealthAndSafety } from "react-icons/md";
import { GiAchievement } from "react-icons/gi";
import { FaSquarePhone } from "react-icons/fa6";
import { FaRegSmile } from "react-icons/fa";

const data = [
  {
    icon: <GiAchievement />,
    title: "Pelayanan",
    description:
      "Kami memiliki komitmen untuk selalu menyediakan pelayanan terbaik.",
  },
  {
    icon: <FaSquarePhone />,
    title: "Konsultasi",
    description:
      "Kami selalu terbuka untuk menjadi solusi dalam setiap permasalahan gigi anda.",
  },
  {
    icon: <FaRegSmile />,
    title: "Kepuasan Konsumen",
    description:
      "Kami selalu memastikan kepuasan konsumen karena hal tersebut menjadi ukuran keberhasilan pelayanan kami",
  },
  // Add more data objects as needed
];

const CardArray = ({ data }) => {
  return (
    <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {data.map((item, index) => (
        <Card
          key={index}
          icon={item.icon}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  );
};

export default function Banner() {
  return (
    <section id="banner" className="m-10">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-center items-center gap-x-20">
          <div className="flex flex-col md:ml-6">
            {/* HEADLINE */}
            <h1 className="font-bold font-sans text-3xl md:text-5xl text-center md:text-left leading-[1.2]">
              <span className="inline-block mr-2">Perawatan Gigi Terbaik</span>
              <span className="inline-block mr-2">
                Dengan Pelayanan Terbaik
              </span>
              <span className="inline-block">Hanya Untuk Kamu!</span>
            </h1>
            {/* BUTTON */}
            <a
              href="https://drgirmawiyanti.digman.co.id/register"
              className="mt-8 border text-center border-tertiary text-tertiary hover:bg-primary hover:border-primary hover:text-white px-4 py-2 rounded-full transition-all duration-300 ease-in-out"
            >
              Registrasi sekarang
            </a>
          </div>
          <div className="relative flex justify-center items-center">
            <div className="absolute right-12 md:right-auto md:left-0 w-[200px] h-[200px] md:w-[320px] md:h-[320px] rounded-full bg-accent"></div>
            <img
              className="z-10 w-[300px] md:w-[640px] h-auto rounded-full"
              src={Img1}
              alt="image"
            />
          </div>
        </div>
        <div>
          <CardArray data={data} />
        </div>
        <h1 className="mt-20 font-sans text-lg md:text-xl text-center mx-4 md:mx-20">
          "Kesehatan{" "}
          <span className="text-2xl md:text-3xl font-bold text-secondary">
            gigi dan mulut
          </span>{" "}
          adalah salah satu kunci untuk{" "}
          <span className="text-2xl md:text-3xl font-bold text-secondary">
            hidup yang sehat dan bahagia.{" "}
          </span>
          Kami percaya bahwa setiap senyuman memiliki kekuatan untuk mengubah
          hidup, dan{" "}
          <span className="text-2xl md:text-3xl font-bold text-secondary">
            kami berkomitmen untuk membantu Anda
          </span>{" "}
          mencapai senyuman yang sehat dan menawan."
        </h1>
      </div>
    </section>
  );
}
