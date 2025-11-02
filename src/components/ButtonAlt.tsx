import React from "react";

const ButtonAlt = ({ name }: { name: string }) => {
  return (
    <button className="cursor-pointer bg-transparent border-2 border-red-600 hover:bg-red-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105">
      {name}
    </button>
  );
};

export default ButtonAlt;
