import React from "react";
import { FaStar } from "react-icons/fa";

function Testimonial({ name, position, comment }) {
  const numberOfStars = 5;

  return (
    <div className="mt-4 max-w-lg w-full bg-white shadow-md rounded-lg overflow-hidden mx-auto border">
      <div className="px-4 py-2 rounded-md border">
          <div className="text-left">
            <div className="flex mb-2">
              {Array.from({ length: numberOfStars }).map((_, starIndex) => (
                <FaStar key={starIndex} className="text-yellow-500" />
              ))}
            </div>
            <p className="text-xl font-semibold text-gray-800">{name}</p>
            <p className="text-sm text-gray-600">{position}</p>
            <p className="text-gray-700 text-base mt-4">{comment}</p>
          </div>
        </div>
    </div>
  );
}

export default Testimonial;
