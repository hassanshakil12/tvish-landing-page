import React from "react";
import { Button } from "./";

const HeroBackground = () => {
  const posters = [
    "/img/poster_01.jpg",
    "/img/poster_02.jpg",
    "/img/poster_03.jpg",
    "/img/poster_04.jpg",
    "/img/poster_05.jpg",
    "/img/poster_06.jpg",
    "/img/poster_07.jpg",
    "/img/poster_08.jpg",
    "/img/poster_09.jpg",
    "/img/poster_10.jpg",
    "/img/poster_11.jpg",
    "/img/poster_12.jpg",
    "/img/poster_13.jpg",
    "/img/poster_14.jpg",
    "/img/poster_15.jpg",
    "/img/poster_16.jpg",
    "/img/poster_17.jpg",
    "/img/poster_18.jpg",
    "/img/poster_19.jpg",
    "/img/poster_20.jpg",
    "/img/poster_21.jpg",
    "/img/poster_22.jpg",
    "/img/poster_23.jpg",
    "/img/poster_24.jpg",
  ];

  // Show only the posters needed for exactly 3 rows
  const postersToShow = posters.slice(0, 24); // Maximum for 2xl: 3×8=24

  return (
    <>
      <div className="w-full h-screen bg-black overflow-hidden">
        <div className="w-full h-full relative">
          {/* Mobile: 3 columns × 3 rows = 9 posters */}
          <div className="grid grid-rows-3 grid-cols-3 w-full h-full sm:hidden">
            {postersToShow.slice(0, 9).map((src, i) => (
              <div key={i} className="relative w-full h-full">
                <img
                  src={src}
                  alt={`poster_${i + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* Small: 4 columns × 3 rows = 12 posters */}
          <div className="hidden sm:grid md:hidden grid-rows-3 grid-cols-4 w-full h-full">
            {postersToShow.slice(0, 12).map((src, i) => (
              <div key={i} className="relative w-full h-full">
                <img
                  src={src}
                  alt={`poster_${i + 1}`}
                  className="w-full h-full object-cover "
                />
              </div>
            ))}
          </div>

          {/* Medium: 5 columns × 3 rows = 15 posters */}
          <div className="hidden md:grid lg:hidden grid-rows-3 grid-cols-5 w-full h-full">
            {postersToShow.slice(0, 15).map((src, i) => (
              <div key={i} className="relative w-full h-full">
                <img
                  src={src}
                  alt={`poster_${i + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* Large: 6 columns × 3 rows = 18 posters */}
          <div className="hidden lg:grid xl:hidden grid-rows-3 grid-cols-6 w-full h-full">
            {postersToShow.slice(0, 18).map((src, i) => (
              <div key={i} className="relative w-full h-full">
                <img
                  src={src}
                  alt={`poster_${i + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* XL: 7 columns × 3 rows = 21 posters */}
          <div className="hidden xl:grid 2xl:hidden grid-rows-3 grid-cols-7 w-full h-full">
            {postersToShow.slice(0, 21).map((src, i) => (
              <div key={i} className="relative w-full h-full">
                <img
                  src={src}
                  alt={`poster_${i + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* 2XL: 8 columns × 3 rows = 24 posters */}
          <div className="hidden 2xl:grid grid-rows-3 grid-cols-8 w-full h-full">
            {postersToShow.slice(0, 24).map((src, i) => (
              <div key={i} className="relative w-full h-full">
                <img
                  src={src}
                  alt={`poster_${i + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Gradient Overlay with Content */}
        <div className="absolute bottom-0 left-0 w-full h-[80vh] bg-gradient-to-t from-black via-black/70 to-transparent flex justify-center items-center">
          <div className="text-center px-4 w-full max-w-6xl mx-auto">
            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 sm:mb-5 md:mb-6 text-white tracking-tight drop-shadow-[0_4px_20px_rgba(255,0,0,0.7)] leading-tight">
              TV-ish: Where Stories Take Center Stage
            </h1>
            <p className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl text-red-200 mb-6 sm:mb-8 md:mb-10 max-w-4xl mx-auto leading-relaxed font-medium">
              Stream bold. Share loud. Be seen
            </p>
            <div className="transform scale-75 xs:scale-90 sm:scale-100">
              <Button name="Join The Waitlist" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroBackground;
