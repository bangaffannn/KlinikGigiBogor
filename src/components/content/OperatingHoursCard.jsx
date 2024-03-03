import React from "react";

function OperatingHoursCard(props) {
  return (
    <div className="w-full rounded overflow-hidden">
      <ul className="flex flex-col mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-2">
        {props.operatingHours.map((item, index) => (
          <li
            key={index}
            className="text-gray-700 text-base mb-4 flex justify-start items-center"
          >
            <strong className="px-4 py-2 bg-primary rounded-lg mr-2 cursor-pointer">
              {item.day}:
            </strong>
            <span className="">{item.hours}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default OperatingHoursCard;
