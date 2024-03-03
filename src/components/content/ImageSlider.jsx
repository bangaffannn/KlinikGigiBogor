import React, { useState } from "react";
import Img1 from "../../assets/asian-female-1.jpg";
import Img2 from "../../assets/asian-female-2.jpg";
import Img3 from "../../assets/asian-female-3.jpg";

const images = [
  { src: Img1 },
  { src: Img2 },
  { src: Img3 },
  // Add more image paths as needed
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative">
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white text-2xl"
        onClick={prevSlide}
      >
        &#8249;
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white text-2xl"
        onClick={nextSlide}
      >
        &#8250;
      </button>
      <div className="flex justify-center items-center p-12">
        <img
          src={images[currentIndex].src}
          alt={`Slide ${currentIndex + 1}`}
          className="max-w-full max-h-full rounded-3xl"
          style={{ minWidth: "800px", maxHeight: "400px" }} // Contoh batasan lebar dan tinggi
        />
      </div>
    </div>
  );
};

export default ImageSlider;
