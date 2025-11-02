import { ButtonAlt } from "../components";

const LeadCapture = () => {
  return (
    <>
      <div className="w-full min-h-screen bg-linear-to-tr from-black via-black to-red-950 px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        {/* Header Section */}
        <div className="w-full text-center mb-12 lg:mb-20">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white mb-4 tracking-tight">
            Join the <span className="text-red-600">Creator Waitlist</span>
          </h1>
          <div className="w-24 h-1 bg-red-600 mx-auto rounded-full"></div>
        </div>

        {/* Content Section */}
        <div className="w-full max-w-[80vw] mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
            {/* Text Content */}
            <div className="flex-1 space-y-6 lg:space-y-8">
              <div className="space-y-4">
                <p className="text-lg sm:text-xl lg:text-2xl text-gray-200 leading-relaxed">
                  Be the first to access submission openings, early creator
                  perks, and tools designed to help your work stand out.
                </p>

                <div className="bg-red-900/30 border-l-4 border-red-600 pl-6 py-4 rounded-r-lg">
                  <p className="text-xl sm:text-2xl lg:text-3xl text-white font-bold italic">
                    "More than a platform. A movement."
                  </p>
                  <p className="text-lg text-red-200 mt-2 font-medium">
                    For creators who believe in owning their stories and shaping
                    the future of media.
                  </p>
                </div>

                <p className="text-lg sm:text-xl lg:text-2xl text-gray-200 leading-relaxed">
                  Whether you're an{" "}
                  <span className="text-white font-bold">
                    established creator
                  </span>{" "}
                  or just starting your journey, TV-ish provides the foundation
                  for your stories to thrive.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="space-y-4 pt-4">
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                  Ready to{" "}
                  <span className="text-red-600">Join the Movement?</span>
                </h3>

                <div className="flex flex-col sm:flex-row gap-4 flex-wrap">
                  <ButtonAlt name="Get Early Access Perks" />
                </div>
              </div>
            </div>

            {/* Image Section */}
            <div className="flex-1">
              <div className="relative rounded-lg overflow-hidden">
                <img
                  src="/img/lead_capture_poster.png" // You can use a different image here
                  alt="Join TV-ish Creator Waitlist"
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Decoration */}
        <div className="w-full flex justify-center mt-16 lg:mt-24">
          <div className="w-32 h-1 bg-linear-to-r from-transparent via-red-600 to-transparent rounded-full"></div>
        </div>
      </div>
    </>
  );
};

export default LeadCapture;
