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
  const postersToShow = posters.slice(0, 24);

  return (
    <div className="w-full h-screen bg-black overflow-hidden relative">
      {/* Grid Background */}
      <div className="w-full h-full">
        {/* Mobile: 3 columns × 3 rows = 9 posters */}
        <div className="grid grid-rows-3 grid-cols-3 w-full h-full sm:hidden">
          {postersToShow.slice(0, 9).map((src, i) => (
            <div key={i} className="relative w-full h-full">
              <img
                src={src}
                alt={`Featured content ${i + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
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
                alt={`Featured content ${i + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
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
                alt={`Featured content ${i + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
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
                alt={`Featured content ${i + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
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
                alt={`Featured content ${i + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
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
                alt={`Featured content ${i + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Gradient Overlay with Content */}
      <div className="absolute inset-0 bg-linear-to-t from-black via-black/90 to-transparent flex items-end pb-8 sm:pb-12 md:pb-16 lg:pb-20">
        <div className="text-center px-4 w-full max-w-6xl mx-auto">
          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold mb-4 sm:mb-5 md:mb-6 text-white tracking-tight leading-tight">
            The <span className="text-red-600 italic">Revolution</span> in Streaming
            <br className="hidden sm:block" />
            is Coming.
          </h1>

          {/* Sub Headline */}
          <blockquote className="text-2xl sm:text-3xl lg:text-4xl text-red-200 font-bold mb-4 sm:mb-5 md:mb-6 leading-relaxed from-red-400 to-red-600 bg-clip-text italic">
            "Be the First to Create. <br className="hidden xs:block" />
            Get Paid from Day One."
          </blockquote>

          {/* Description */}
          <p className="text-xl sm:text-2xl lg:text-3xl text-gray-200 leading-relaxed mb-6 sm:mb-8 md:mb-10 max-w-4xl mx-auto ">
            <span className="text-red-600 font-bold italic">TV-ish</span> is the
            new home for creators who want{" "}
            <span className="text-white font-bold italic">
              freedom, fairness, and control.
            </span>{" "}
            Upload, stream, and monetize your content instantly — no waiting, no
            gatekeepers.
          </p>

          {/* CTA Button */}
          <div className="transform scale-75 xs:scale-90 sm:scale-100">
            <Button name="Claim Your Founder Spot" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBackground;
