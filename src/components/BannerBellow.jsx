import React from "react";
import Img1 from "../assets/dentist-5.png";
import GoogleReview from '../assets/GoogleReview.png'

export default function BannerBelow() {
  return (
    <section className="py-10 md:py-20">
      <div className="container mx-auto">
        <PromotionCard
          imageUrl={Img1}
          headline="Mari #RawatGigiKita Dengan Periksa Gigi Secara Rutin!"
        />
      </div>
    </section>
  );
}

function PromotionCard({ imageUrl, headline }) {
  return (
    <div className="max-w-screen-lg mx-auto p-6 md:p-10 bg-primary rounded-xl shadow-xl flex flex-col md:flex-row items-center">
      <div className="md:w-1/2 mr-0 md:mr-10 mb-6 md:mb-0">
        <img
          src={imageUrl}
          alt="Promotion"
          className="w-full h-auto md:max-h-80 object-cover rounded-lg"
        />
      </div>
      <div className="md:w-1/2">
        <h2 className="text-2xl md:text-3xl font-bold text-green-900 mb-4">
          {headline}
        </h2>
        <p className="text-base text-green-800 text-justify leading-relaxed">
          "Jaga senyum ceriamu dengan rutin memeriksa gigi! Mari rawat kesehatan
          mulut dan gigi bersama-sama untuk senyum yang indah dan berkilau
          setiap hari."
        </p>
        <a href="https://g.co/kgs/Myaym6B"><img className="w-36 h-auto shadow-lg mt-4 hover:scale-110 transition duration-300 ease-in-out" src={GoogleReview} alt="five star google review" /></a>
      </div>
    </div>
  );
}
