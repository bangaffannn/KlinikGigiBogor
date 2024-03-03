import React from 'react';

function PromotionCard({ imageUrl, headline }) {
  return (
    <div className="px-4 py-2 mt-10 w-auto h-[240px] rounded-xl overflow-hidden shadow-lg bg-primary flex justify-center items-center">
      <img src={imageUrl} alt="Promotion" />
      <div>
        <div className="font-bold text-4xl text-green-800 leading-1">{headline}</div>
      </div>
    </div>
  );
}

export default PromotionCard;
