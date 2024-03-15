import React from "react";
import OperatingHoursCard from "./content/OperatingHoursCard.jsx";
import CardWhy from "./content/CardWhy.jsx";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import Img1 from "../assets/dentist-3.png";

const data = [
  { description: "Scaling (Pembersihan karang gigi)" },
  { description: "Perawatan Orthodonsia (Kawat gigi)" },
  { description: "Tambal gigi" },
  { description: "Crown (Mahkota jaket)" },
  { description: "Perawatan syaraf gigi" },
  { description: "Behel gigi" },
  { description: "Veneer gigi" },
  { description: "Bleaching gigi (Memutihkan gigi)" },
  { description: "Implan" },
  { description: "Perawatan gigi anak" },
  { description: "Gigi tiruan" },
  { description: "Crown gigi" },
  { description: "Pencabutan gigi" },
];

const operatingHours = [
  { day: "Senin", hours: "09:00 - 12:00 WIB" },
  { day: "Selasa", hours: ["09:00 - 12:00 WIB dan 17:00 - 20:00 WIB"] },
  { day: "Rabu", hours: "09:00 - 12:00 WIB" },
  { day: "Kamis", hours: "09:00 - 12:00 WIB" },
  { day: "Jum'at", hours: ["09:00 - 12:00 WIB dan 17:00 - 20:00 WIB"] },
  { day: "Sabtu", hours: ["09:00 - 12:00 WIB dan 17:00 - 20:00 WIB"] },
  { day: "Minggu", hours: "09:00 - 12:00 WIB" },
];

const CardArray = ({ data }) => {
  return (
    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {data.map((item, index) => (
        <div key={index} className="text-center md:text-left">
          {/* Apply text-center class for small screens and text-left for medium and larger screens */}
          <CardWhy description={item.description} />
        </div>
      ))}
    </div>
  );
};

export default function Layanan() {
  return (
    <section id="layanan" className="container mx-auto mt-10">
      <div className="flex flex-col md:flex-row justify-center items-center gap-8">
        <img src={Img1} alt="image" className="w-full md:w-auto" />
        <div className="text-center md:text-left">
          <h1 className="text-center font-bold px-8 py-2 text-md rounded-full bg-accent border border-tertiary">
            Layanan kami
          </h1>
          <p className="mt-4">
            Kami siap membantu masalah kesehatan gigi Anda. Pilih perawatanmu
            sekarang!
          </p>
          <CardArray data={data} />
        </div>
      </div>
      <div className="mt-8 flex flex-col justify-center items-center">
        <h1 className="w-full text-center font-bold px-8 py-2 text-md rounded-full bg-accent border border-tertiary">
          Jam Operasional
        </h1>
        <div>
          <OperatingHoursCard operatingHours={operatingHours} />
        </div>
      </div>
      <div
        id="reservasi"
        className="flex justify-center items-center mt-10 gap-x-2"
      >
        <a
          href="https://drgirmawiyanti.digman.co.id/register"
          className="text-underline text-tertiary cursor-pointer"
        >
          Registrasi sekarang
        </a>
        <IoIosArrowDroprightCircle className="text-tertiary" />
      </div>
    </section>
  );
}
