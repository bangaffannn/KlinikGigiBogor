import React from 'react';

const Card = ({ icon, title, description }) => {
  return (
    <div className="bg-primary rounded-2xl shadow-lg p-6 hover:scale-105 transition-all duration-300 ease-in-out">
      <div className="flex items-center mb-4">
        <div className="mr-2 text-green-800">{icon}</div>
        <h2 className="text-xl font-bold text-green-800">{title}</h2>
      </div>
      <p className="text-green-800 text-justify">{description}</p>
    </div>
  );
};

export default Card;