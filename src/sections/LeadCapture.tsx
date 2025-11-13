import { ButtonAlt } from "../components";

const LeadCapture = () => {
  return (
    <div className="w-full min-h-fit bg-linear-to-tr from-black via-black to-red-950/50 px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
      {/* Header Section */}
      <div className="w-full text-center mb-16 lg:mb-10">
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white mb-4 tracking-tight">
          The <span className="text-red-600 italic">Founders</span> Program
        </h1>
        <div className="w-24 h-1 bg-red-600 mx-auto rounded-full mb-10"></div>
        <p className="text-2xl sm:text-3xl lg:text-4xl text-red-200 font-bold leading-relaxed from-red-400 to-red-600 bg-clip-text italic">
          "Only 1,000 Founders Will Shape the Future."
        </p>
      </div>

      {/* Content Section */}
      <div className="w-full max-w-[80vw] mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
          {/* Text Content */}
          <div className="flex-1 space-y-6 lg:space-y-8">
            <div className="space-y-6">
              <p className="text-xl sm:text-2xl lg:text-3xl text-gray-200 leading-relaxed">
                Join the Founders Program and lock in{" "}
                <span className="text-white font-bold italic">
                  1 year perks
                </span>
                , exclusive exposure, and{" "}
                <span className="text-red-600 font-bold italic">
                  0% platform fees at launch
                </span>
                .
              </p>

              <div className="bg-red-900/30 border-l-4 border-red-600 pl-6 py-6 rounded-r-lg">
                <p className="text-2xl sm:text-3xl lg:text-4xl text-white font-bold italic mb-3">
                  "Founders aren't just users — they're pioneers."
                </p>
                <p className="text-xl text-red-200 font-semibold">
                  Helping define the new creator economy from day one.
                </p>
              </div>
            </div>

            {/* CTA Section */}
            <div className="space-y-4 pt-6">
              <div className="flex justify-start">
                <ButtonAlt name="Claim Founder Status Now" />
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="flex-1">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/img/lead_capture_poster.png"
                alt="TV-ish Founders Program - Shape the Future of Streaming"
                className="w-full h-auto rounded-2xl"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/75 to-transparent flex items-end"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Decoration */}
      <div className="w-full flex justify-center mt-16 lg:mt-24">
        <div className="w-32 h-1 bg-linear-to-r from-transparent via-red-600 to-transparent rounded-full"></div>
      </div>
    </div>
  );
};

export default LeadCapture;
