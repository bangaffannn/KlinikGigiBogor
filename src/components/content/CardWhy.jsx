import React from "react";

const CardWhy = ({ icon, description }) => {
  return (
    <div className="px-4 py-2 rounded-lg bg-primary hover:scale-110 transition-all duration-300 ease-in-out">
      <div className="flex justify-start items-center">
        <div className="text-gray-500">{icon}</div>
        <p className="text-gray-900">{description}</p>
      </div>
    </div>
  );
};

export default CardWhy;
