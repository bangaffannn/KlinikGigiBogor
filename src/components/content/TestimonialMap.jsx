import React from "react";
import { FaStar } from "react-icons/fa";

function TestimonialMap() {
  const testimonials = [
    {
      name: "Laveria Laraswati",
      position: "Pasien",
      comment:
        "Dokternya ramah, penjelasanya mudah dimengerti, enak buat konsultasi. Dental assistantnya juga baik banget, nenangin saya yang ketakutan cabut gigi. Harga perawatan dan tindakan tergolong murah, sangat recomended.",
    },
    {
      name: "Bryan Christianus Handoyo",
      position: "Pasien",
      comment:
        "Dokter Gigi Irma Wiyanti memang dokter gigi terbaik di Bogor, saya dirawat dengan nyaman dan profesional oleh dokter disana ketika saya melakukan perawatan saraf gigi. semoga semakin sukses kedepannya ya.",
    },
    // Add more testimonials as needed
    {
      name: "Resti Monika",
      position: "Pasien",
      comment:
        "Pertama kali scaling disini, dokternya baik, ramah, cepet jg ngerjainnya.. ga perlu antri karena sdh daftar sebelumnya via WA..",
    },
    {
      name: "Nisrina Ariandini",
      position: "Pasien",
      comment:
        "Pertama kali berobat gigi disini karena gigi bolong yg sudah parah, enak sih berobat disini, ga terlalu antri, pelayanannya juga cepat. Untuk pengobatan pertama/tambal sementara kena biaya 150rb",
    },
    {
      name: "Weth Gura",
      position: "Pasien",
      comment:
        "Wah perawatan gigi berlubang yang saya dapatkan di Dokter Gigi Irma Wiyanti itu bagus banget lho, pelayanannya bagus dan saya nyaman ketika dalam perawatan. emang dokter gigi Irma the best deh!",
    },
    {
      name: "Keni Astuti",
      position: "Pasien",
      comment:
        "Recommended berobat disini. Pelayanannya cepat, dokternya ramah dan komunikatif.",
    },
  ];

  return (
    <div id="testimoni" className="container mx-auto py-8 mb-10">
      <div className="flex justify-center items-center">
        <h1 className="w-full text-center font-bold px-8 py-2 text-md rounded-full bg-accent border border-tertiary text-center mb-6">
          Testimonial
        </h1>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <div key={index}>
            <Testimonial
              name={testimonial.name}
              position={testimonial.position}
              comment={testimonial.comment}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default TestimonialMap;

function Testimonial({ name, position, comment }) {
  const numberOfStars = 5;

  return (
    <div className="w-full h-full bg-white shadow-md rounded-lg overflow-hidden border">
      <div className="px-4 py-2 border-b">
        <div className="flex mb-2">
          {Array.from({ length: numberOfStars }).map((_, starIndex) => (
            <FaStar key={starIndex} className="text-yellow-500" />
          ))}
        </div>
        <p className="text-xl font-semibold text-gray-800">{name}</p>
        <p className="text-sm text-gray-600">{position}</p>
      </div>
      <div className="px-4 py-3">
        <p className="text-gray-700 text-base">{comment}</p>
      </div>
    </div>
  );
}
