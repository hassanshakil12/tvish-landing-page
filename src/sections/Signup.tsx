import { useState, useEffect } from "react";

const FFOUNDESignup = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 24,
    hours: 23,
    minutes: 52,
    seconds: 17,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(
        (prev: { days: any; hours: any; minutes: any; seconds: any }) => {
          const { days, hours, minutes, seconds } = prev;

          if (seconds > 0) {
            return { ...prev, seconds: seconds - 1 };
          } else if (minutes > 0) {
            return { ...prev, minutes: minutes - 1, seconds: 59 };
          } else if (hours > 0) {
            return { ...prev, hours: hours - 1, minutes: 59, seconds: 59 };
          } else if (days > 0) {
            return {
              ...prev,
              days: days - 1,
              hours: 23,
              minutes: 59,
              seconds: 59,
            };
          }
          return prev;
        }
      );
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      // Handle success
    }, 2000);
  };

  return (
    <div
      id="signup"
      className="w-full min-h-fit bg-linear-to-br from-black via-black to-red-950/50 px-4 sm:px-6 lg:px-8 py-12 lg:py-20 relative overflow-hidden"
    >
      {/* Header Section */}
      <div className="w-full text-center mb-16 lg:mb-10">
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white mb-4 tracking-tight">
          Launch Day is <span className="text-red-600 italic">Coming</span>
        </h1>
        <div className="w-24 h-1 bg-red-600 mx-auto rounded-full mb-10"></div>
        <p className="text-2xl sm:text-3xl lg:text-4xl text-red-200 font-bold leading-relaxed from-red-400 to-red-600 bg-clip-text italic">
          "The world's first truly creator-first streaming platform goes live
          soon. <br /> Don't just watch history — be part of it."
        </p>
      </div>

      {/* Main Content */}
      <div className="w-full max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left Content - Enhanced Countdown Timer */}
          <div className="space-y-8">
            {/* Countdown Timer with Creative Design */}
            <div className="relative group">
              {/* Animated Background Glow */}
              <div className="absolute -inset-4 bg-linear-to-r from-red-600/20 to-red-400/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700 -z-10"></div>

              {/* Main Timer Container */}
              <div className="relative bg-linear-to-br from-black/60 to-red-950/30 border-2 border-red-900/40 rounded-3xl p-8 lg:p-10 backdrop-blur-sm overflow-hidden">
                {/* Floating Particles */}
                {/* <div className="absolute top-4 right-4 w-3 h-3 bg-red-500 rounded-full opacity-60 animate-ping"></div> */}
                <div className="absolute bottom-6 left-6 w-2 h-2 bg-red-400 rounded-full opacity-40 animate-pulse delay-1000"></div>

                {/* Timer Grid with Enhanced Design */}
                <div className="grid grid-cols-4 gap-3 lg:gap-4 mb-8 relative z-10">
                  {[
                    {
                      value: timeLeft.days,
                      label: "DAYS",
                      color: "from-red-600 to-red-700",
                    },
                    {
                      value: timeLeft.hours,
                      label: "HOURS",
                      color: "from-red-500 to-red-600",
                    },
                    {
                      value: timeLeft.minutes,
                      label: "MINUTES",
                      color: "from-red-400 to-red-500",
                    },
                    {
                      value: timeLeft.seconds,
                      label: "SECONDS",
                      color: "from-red-300 to-red-400",
                    },
                  ].map((unit, index) => (
                    <div
                      key={index}
                      className="group/time-unit cursor-pointer perspective-1000"
                    >
                      {/* 3D Flip Container */}
                      <div className="relative w-full h-24 lg:h-28 transform-style-preserve-3d transition-all duration-700 group-hover/time-unit:rotate-y-180">
                        {/* Front Side */}
                        <div className="absolute inset-0 backface-hidden bg-linear-to-br from-black/90 to-red-950/60 border-2 border-red-700/40 rounded-2xl p-4 transform rotate-y-0">
                          {/* Animated Background Pulse */}
                          <div className="absolute inset-0 bg-linear-to-r from-red-500/10 to-red-600/5 rounded-2xl opacity-0 group-hover/time-unit:opacity-100 transition-opacity duration-500"></div>

                          {/* Glowing Orb */}
                          <div className="absolute top-2 right-2 w-3 h-3 bg-red-500 rounded-full opacity-60 animate-ping"></div>

                          {/* Main Content */}
                          <div className="relative z-10">
                            <div className="text-2xl lg:text-3xl font-bold text-white font-mono mb-1 drop-shadow-lg bg-linear-to-r from-white to-red-200 bg-clip-text">
                              {unit.value.toString().padStart(2, "0")}
                            </div>
                            <div className="text-xs lg:text-sm text-gray-300 font-semibold tracking-widest uppercase bg-linear-to-r from-gray-300 to-red-300 bg-clip-text">
                              {unit.label}
                            </div>
                          </div>

                          {/* Corner Accents */}
                          <div className="absolute top-2 left-2 w-2 h-2 bg-linear-to-r from-red-400 to-red-500 rounded-full opacity-0 group-hover/time-unit:opacity-100 transition-opacity duration-300"></div>
                          <div className="absolute bottom-2 right-2 w-2 h-2 bg-linear-to-r from-red-400 to-red-500 rounded-full opacity-0 group-hover/time-unit:opacity-100 transition-opacity duration-300 delay-150"></div>
                        </div>

                        {/* Back Side - Revealed on Hover */}
                        <div className="absolute inset-0 backface-hidden bg-linear-to-br from-red-600 to-red-700 border-2 border-red-400/60 rounded-2xl p-4 transform rotate-y-180">
                          {/* Sparkle Effect */}
                          <div className="absolute inset-0 overflow-hidden rounded-2xl">
                            <div className="absolute top-0 left-1/4 w-1 h-1 bg-white rounded-full animate-sparkle"></div>
                            <div className="absolute bottom-2 right-3 w-1 h-1 bg-white rounded-full animate-sparkle delay-300"></div>
                          </div>

                          {/* Back Content */}
                          <div className="relative z-10 flex flex-col items-center justify-center h-full">
                            <div className="text-lg lg:text-xl font-bold text-white font-mono mb-1">
                              {unit.value.toString().padStart(2, "0")}
                            </div>
                            <div className="text-xs text-white/80 font-semibold tracking-widest uppercase">
                              {unit.label}
                            </div>
                            {/* Mini Progress Ring */}
                            <div className="absolute bottom-1 w-6 h-1 bg-white/30 rounded-full overflow-hidden">
                              <div
                                className="h-full bg-white rounded-full animate-pulse"
                                style={{
                                  width: `${
                                    (unit.value /
                                      (unit.label === "DAYS"
                                        ? 14
                                        : unit.label === "HOURS"
                                        ? 24
                                        : 60)) *
                                    100
                                  }%`,
                                }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Floating Glow Effect */}
                      <div className="absolute inset-0 bg-linear-to-r from-red-500/20 to-red-600/10 rounded-2xl blur-md opacity-0 group-hover/time-unit:opacity-100 transition-all duration-500 -z-10 scale-110"></div>

                      {/* Connection Lines */}
                      {index < 3 && (
                        <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 z-20">
                          <div className="w-4 lg:w-6 h-0.5 bg-linear-to-r from-red-500 to-red-400 rounded-full opacity-60 group-hover/time-unit:opacity-100 transition-opacity duration-300"></div>
                          <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full opacity-0 group-hover/time-unit:opacity-100 animate-ping"></div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                <style>{`
                  @keyframes sparkle {
                    0%,
                    100% {
                      opacity: 0;
                      transform: scale(0);
                    }
                    50% {
                      opacity: 1;
                      transform: scale(1);
                    }
                  }
                  .animate-sparkle {
                    animation: sparkle 2s ease-in-out infinite;
                  }
                  .perspective-1000 {
                    perspective: 1000px;
                  }
                  .transform-style-preserve-3d {
                    transform-style: preserve-3d;
                  }
                  .backface-hidden {
                    backface-visibility: hidden;
                  }
                  .rotate-y-0 {
                    transform: rotateY(0deg);
                  }
                  .rotate-y-180 {
                    transform: rotateY(180deg);
                  }
                `}</style>

                {/* Enhanced Progress Section */}
                <div className="space-y-4 relative z-10">
                  <div className="flex justify-between items-center">
                    <span className="text-white font-semibold text-sm lg:text-base">
                      🚀 Founder Spots Remaining
                    </span>
                    <span className="text-red-400 font-bold text-sm lg:text-base bg-red-900/30 px-3 py-1 rounded-full">
                      42%
                    </span>
                  </div>

                  {/* Animated Progress Bar */}
                  <div className="relative">
                    <div className="w-full bg-gray-800 rounded-full h-3 overflow-hidden">
                      <div className="relative">
                        <div
                          className="bg-linear-to-r from-red-600 via-red-500 to-red-400 h-3 rounded-full transition-all duration-1000 ease-out shadow-lg shadow-red-500/30 relative overflow-hidden"
                          style={{ width: "42%" }}
                        >
                          {/* Progress Bar Shine */}
                          <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
                        </div>
                      </div>
                    </div>

                    {/* Progress Dots */}
                    <div className="flex justify-between mt-2">
                      {[0, 25, 50, 75, 100].map((percent) => (
                        <div
                          key={percent}
                          className={`w-2 h-2 rounded-full ${
                            percent <= 42 ? "bg-red-500" : "bg-gray-600"
                          } transition-all duration-500`}
                        ></div>
                      ))}
                    </div>
                  </div>

                  <p className="text-gray-400 text-center text-sm lg:text-base">
                    ✨ Join{" "}
                    <span className="text-red-400 font-semibold">
                      580+ creators
                    </span>{" "}
                    who secured their Founder status
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Creative Signup Form */}
          <div className="relative group">
            {/* Floating Orbital Elements */}
            <div className="absolute -top-8 -right-8 w-16 h-16 bg-red-500/10 rounded-full border border-red-500/20 animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-red-400/10 rounded-full border border-red-400/20 animate-pulse delay-700"></div>

            {/* Form Container with Enhanced Effects */}
            <div className="relative">
              {/* Outer Glow */}
              <div className="absolute -inset-6 bg-linear-to-r from-red-600/30 to-red-400/20 rounded-3xl blur-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-500 -z-20"></div>

              {/* Inner Container */}
              <div className="relative bg-linear-to-br from-black/80 via-black/60 to-red-950/40 border-2 border-red-600/40 rounded-3xl p-8 lg:p-10 shadow-2xl shadow-red-500/20 backdrop-blur-sm overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute top-0 left-0 w-32 h-32 bg-red-500 rounded-full blur-2xl"></div>
                  <div className="absolute bottom-0 right-0 w-24 h-24 bg-red-400 rounded-full blur-2xl"></div>
                </div>

                {/* Form Header with Creative Design */}
                <div className="text-center mb-5 relative z-10">
                  <div className="inline-flex items-center space-x-3 bg-linear-to-r from-red-600 to-red-600 rounded-full px-6 py-3 mb-6 shadow-lg">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    <span className="text-white text-sm font-bold tracking-widest">
                      ENTER EMAIL TO — LOCK YOUR FOUNDERS SPOT
                    </span>
                  </div>
                </div>

                {/* Enhanced Email Form */}
                <form
                  onSubmit={handleSubmit}
                  className="space-y-6 relative z-10"
                >
                  <div className="relative group/input">
                    <label
                      htmlFor="email"
                      className="text-white font-semibold text-lg mb-3 flex items-center space-x-2"
                    >
                      <span>Professional Email:</span>
                    </label>
                    <div className="relative">
                      <div className="absolute -inset-1 bg-linear-to-r from-red-600 to-red-400 rounded-2xl blur opacity-0 group-hover/input:opacity-30 transition-opacity duration-300 -z-10"></div>
                      <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="your.creative@studio.com"
                        className="w-full bg-black/70 border-2 border-white/10 rounded-2xl px-6 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-red-600 focus:ring-4 focus:ring-red-500/30 transition-all duration-300 text-lg backdrop-blur-sm"
                        required
                      />
                    </div>
                  </div>

                  {/* Enhanced Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`cursor-pointer w-full relative overflow-hidden group/btn bg-linear-to-r from-red-600 via-red-500 to-red-600 hover:from-red-600 hover:via-red-500 hover:to-red-600 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-500 transform hover:scale-105 shadow-2xl hover:shadow-red-500/40 flex items-center justify-center space-x-3 text-lg ${
                      isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                  >
                    {/* Button Shine Effect */}
                    <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000"></div>

                    {/* Button Content */}
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span className="relative">
                          Securing Your Legacy...
                        </span>
                      </>
                    ) : (
                      <>
                        <span className="text-xl">⚡</span>
                        <span className="relative">Claim Founder Status</span>
                      </>
                    )}
                  </button>
                </form>
              </div>
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

export default Signup;
