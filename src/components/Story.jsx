import React from "react";

export default function Story({ img, name, isStory }) {
  return (
    <div className="flex items-center justify-center flex-col">
      <img
        src={img}
        alt={name}
        className={` border p-1 w-20 h-20  border-gray-300 rounded-full ${
          isStory ? "border-2 border-red-500" : ""
        }`}
      />
      <span className="text-xs mt-1 dark:text-gray-200">{name}</span>
    </div>
  );
}
