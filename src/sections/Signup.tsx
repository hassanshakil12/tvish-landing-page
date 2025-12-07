import { useState, useEffect, useCallback, useMemo } from "react";
import axios from "axios";
import { ErrorMessage, TimerUnit } from "../components";
import { triggerConfetti } from "../utils/confettiService";

// Define the API base URL
const API_BASE_URL =
  import.meta.env.VITE_BASE_URL || "http://localhost:3000/api";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface ApiResponse {
  success: boolean;
  message: string;
  data?: {
    id: string;
    email: string;
    tier: string;
    createdAt: string;
  };
}

// Email validation regex
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// Timer units configuration
const TIMER_UNITS = [
  { label: "DAYS", color: "from-blue-600 to-blue-700" },
  { label: "HOURS", color: "from-blue-500 to-blue-600" },
  { label: "MINUTES", color: "from-blue-400 to-blue-500" },
  { label: "SECONDS", color: "from-blue-300 to-blue-400" },
];

const Signup = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [founderCount, setFounderCount] = useState(0);
  const [disableForm, setDisableForm] = useState(false);

  // Calculate time left
  const calculateTimeLeft = useCallback(() => {
    const targetDate = new Date("February 15, 2026 00:00:00").getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference > 0) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      return { days, hours, minutes, seconds };
    }
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }, []);

  // Fetch founder count
  const fetchFounderCount = useCallback(async () => {
    try {
      const { data } = await axios.get(`${API_BASE_URL}/founder/count`);
      if (data.success) {
        const count = data.data || 580;
        setFounderCount(count);

        // Disable form if founder count is >= 1000
        if (count >= 1000) {
          setDisableForm(true);
        }
      }
    } catch (error) {
      console.error("Error fetching founder count:", error);
    }
  }, []);

  // Calculate progress percentage
  const progressPercentage = useMemo(() => {
    const maxFounders = 1000;
    return Math.min(100, Math.round((founderCount / maxFounders) * 100));
  }, [founderCount]);

  // Calculate remaining slots
  const remainingSlots = useMemo(() => {
    return Math.max(0, 1000 - founderCount);
  }, [founderCount]);

  // Check if progress is 90% or above
  const isHighDemand = useMemo(() => {
    return progressPercentage >= 90;
  }, [progressPercentage]);

  // Timer effect
  useEffect(() => {
    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    fetchFounderCount();

    return () => clearInterval(timer);
  }, [calculateTimeLeft, fetchFounderCount]);

  // Handle error messages
  const handleError = useCallback((error: any) => {
    if (error.response) {
      const errorData = error.response.data;
      if (errorData.code === "RATE_LIMIT_EXCEEDED") {
        return `Rate limit exceeded. Please try again after ${errorData.retryAfter} seconds.`;
      } else if (error.status === 400) {
        return "Invalid email format. Please check your email.";
      } else if (error.status === 409) {
        return "This email is already registered as a founder.";
      } else {
        return errorData.message || "Registration failed. Please try again.";
      }
    } else if (error.request) {
      return "Network error. Please check your connection and try again.";
    } else {
      return "An unexpected error occurred. Please try again.";
    }
  }, []);

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Check if founder count has reached 1000
    if (founderCount >= 1000) {
      setErrorMessage(
        "All founder spots have been filled. Registration is closed."
      );
      return;
    }

    // Reset messages
    setSuccessMessage("");
    setErrorMessage("");

    // Email validation
    if (!EMAIL_REGEX.test(email)) {
      setErrorMessage("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await axios.post<ApiResponse>(
        `${API_BASE_URL}/founder/bronze`,
        { email },
        {
          headers: { "Content-Type": "application/json" },
          timeout: 10000,
        }
      );

      if (response.data.success) {
        setSuccessMessage(
          response.data.message ||
            "🎉 Successfully registered as Bronze Founder!"
        );
        setEmail("");
        setFounderCount((prev) => prev + 1);
        triggerConfetti();

        // Clear success message after 5 seconds
        setTimeout(() => setSuccessMessage(""), 5000);
      } else {
        setErrorMessage(
          response.data.message || "Registration failed. Please try again."
        );
      }
    } catch (error: any) {
      setErrorMessage(handleError(error));
      console.error("Registration error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Timer values array
  const timerValues = useMemo(
    () => [timeLeft.days, timeLeft.hours, timeLeft.minutes, timeLeft.seconds],
    [timeLeft]
  );

  const isButtonDisabled = () => {
    if (founderCount >= 1000) return true;
    if (isSubmitting) return true;
    if (disableForm) return true;
    if (email.trim() === "") return true;
    return false;
  };

  return (
    <div
      id="signup"
      className="w-full min-h-fit bg-linear-to-br from-black via-black to-blue-950/50 px-4 sm:px-6 lg:px-8 py-12 lg:py-20 relative overflow-hidden"
    >
      {/* Success/Error Messages */}
      {(successMessage || errorMessage) && (
        <div className="fixed top-4 right-4 z-50">
          {successMessage && (
            <ErrorMessage
              message={successMessage}
              type="success"
              onClose={() => setSuccessMessage("")}
              autoClose
            />
          )}
          {errorMessage && (
            <ErrorMessage
              message={errorMessage}
              type="error"
              onClose={() => setErrorMessage("")}
            />
          )}
        </div>
      )}

      {/* Header Section */}
      <div className="w-full text-center mb-16 lg:mb-10">
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white mb-4 tracking-tight">
          Launch Day is{" "}
          <span className="text-secondary-blue italic">Coming</span>
        </h1>
        <div className="w-24 h-1 bg-secondary-blue mx-auto rounded-full mb-10"></div>
        <p className="text-2xl sm:text-3xl lg:text-4xl text-secondary-blue font-bold leading-relaxed from-blue-400 to-blue-600 bg-clip-text italic">
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
              <div className="absolute -inset-4 bg-linear-to-r from-blue-600/20 to-blue-400/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700 -z-10"></div>

              {/* Main Timer Container */}
              <div className="relative bg-linear-to-br from-black/60 to-blue-950/30 border-2 border-blue-900/40 rounded-3xl p-8 lg:p-10 backdrop-blur-sm overflow-hidden">
                {/* Floating Particles */}
                <div className="absolute bottom-6 left-6 w-2 h-2 bg-blue-400 rounded-full opacity-40 animate-pulse delay-1000"></div>

                {/* Timer Grid with Enhanced Design */}
                <div className="grid grid-cols-4 gap-3 lg:gap-4 mb-8 relative z-10">
                  {TIMER_UNITS.map((unit, index) => (
                    <TimerUnit
                      key={unit.label}
                      value={timerValues[index]}
                      label={unit.label}
                      color={unit.color}
                      index={index}
                    />
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
                  @keyframes slide-in {
                    from {
                      transform: translateX(100%);
                      opacity: 0;
                    }
                    to {
                      transform: translateX(0);
                      opacity: 1;
                    }
                  }
                  .animate-sparkle {
                    animation: sparkle 2s ease-in-out infinite;
                  }
                  .animate-slide-in {
                    animation: slide-in 0.3s ease-out;
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
                    <span
                      className={`font-bold text-sm lg:text-base px-3 py-1 rounded-full ${
                        isHighDemand
                          ? "text-red-400 bg-red-900/30"
                          : "text-blue-400 bg-blue-900/30"
                      }`}
                    >
                      {progressPercentage}%
                    </span>
                  </div>

                  {/* Animated Progress Bar */}
                  <div className="relative" id="signup-mobile">
                    <div className="w-full bg-gray-800 rounded-full h-3 overflow-hidden">
                      <div className="relative">
                        <div
                          className={`h-3 rounded-full transition-all duration-1000 ease-out shadow-lg relative overflow-hidden ${
                            isHighDemand
                              ? "bg-linear-to-r from-red-600 via-red-500 to-red-400 shadow-red-500/30"
                              : "bg-linear-to-r from-blue-600 via-blue-500 to-blue-400 shadow-blue-500/30"
                          }`}
                          style={{ width: `${progressPercentage}%` }}
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
                            percent <= progressPercentage
                              ? isHighDemand
                                ? "bg-red-500"
                                : "bg-blue-500"
                              : "bg-gray-600"
                          } transition-all duration-500`}
                        ></div>
                      ))}
                    </div>

                    {/* High Demand Message */}
                    {isHighDemand && remainingSlots > 0 && (
                      <div className="mt-3 text-center">
                        <p className="text-red-400 text-sm font-semibold animate-pulse">
                          ⚠️ Only {remainingSlots} founder slot
                          {remainingSlots !== 1 ? "s" : ""} left!
                        </p>
                      </div>
                    )}

                    {founderCount >= 1000 && (
                      <div className="mt-3 text-center">
                        <p className="text-red-400 text-sm font-semibold">
                          🚫 All founder spots have been filled. Registration is
                          closed.
                        </p>
                      </div>
                    )}
                  </div>

                  <p className="text-gray-400 text-center text-sm lg:text-base">
                    ✨ Join{" "}
                    <span className="text-secondary-blue font-semibold">
                      {founderCount.toLocaleString()}+ creators
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
            <div className="absolute -top-8 -right-8 w-16 h-16 bg-blue-500/10 rounded-full border border-blue-500/20 animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-blue-400/10 rounded-full border border-blue-400/20 animate-pulse delay-700"></div>

            {/* Form Container with Enhanced Effects */}
            <div className="relative">
              {/* Outer Glow */}
              <div className="absolute -inset-6 bg-linear-to-r from-blue-600/30 to-blue-400/20 rounded-3xl blur-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-500 -z-20"></div>

              {/* Inner Container */}
              <div className="relative bg-linear-to-br from-black/80 via-black/60 to-blue-950/40 border-2 border-blue-600/40 rounded-3xl p-8 lg:p-10 shadow-2xl shadow-blue-500/20 backdrop-blur-sm overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute top-0 left-0 w-32 h-32 bg-blue-500 rounded-full blur-2xl"></div>
                  <div className="absolute bottom-0 right-0 w-24 h-24 bg-blue-400 rounded-full blur-2xl"></div>
                </div>

                {/* Form Header with Creative Design */}
                <div className="text-center relative z-10">
                  <div className="inline-flex items-center space-x-3 bg-linear-to-r from-blue-600 to-blue-600 rounded-full px-6 py-3 mb-6 shadow-lg">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    <span className="text-white text-sm font-bold tracking-widest">
                      {founderCount >= 1000
                        ? "FOUNDER REGISTRATION CLOSED"
                        : "ENTER EMAIL TO — LOCK YOUR FOUNDERS SPOT"}
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
                      <span>Email:</span>
                    </label>
                    <div className="relative">
                      <div className="absolute -inset-1 bg-linear-to-r from-blue-600 to-blue-400 rounded-2xl blur opacity-0 group-hover/input:opacity-30 transition-opacity duration-300 -z-10"></div>
                      <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="your.creative@studio.com"
                        className={`w-full bg-black/70 border-2 rounded-2xl px-6 py-4 text-white placeholder-gray-500 focus:outline-none focus:ring-4 transition-all duration-300 text-lg backdrop-blur-sm ${
                          founderCount >= 1000
                            ? "border-red-500/30 focus:border-red-600 focus:ring-red-500/30 cursor-not-allowed"
                            : "border-white/10 focus:border-blue-600 focus:ring-blue-500/30"
                        }`}
                        required
                        disabled={isSubmitting || founderCount >= 1000}
                      />
                    </div>
                  </div>

                  {/* Enhanced Submit Button */}
                  <button
                    type="submit"
                    disabled={isButtonDisabled()}
                    className={`cursor-pointer w-full relative overflow-hidden group/btn text-white font-bold py-4 px-8 rounded-2xl transition-all duration-500 transform hover:scale-105 shadow-2xl flex items-center justify-center space-x-3 text-lg ${
                      founderCount >= 1000
                        ? "bg-gray-700 hover:bg-gray-700 shadow-gray-500/20 cursor-not-allowed"
                        : "bg-linear-to-r from-blue-600 via-blue-500 to-blue-600 hover:from-blue-600 hover:via-blue-500 hover:to-blue-600 hover:shadow-blue-500/40"
                    } ${
                      isSubmitting || founderCount >= 1000
                        ? "opacity-50 cursor-not-allowed"
                        : ""
                    }`}
                  >
                    {/* Button Shine Effect */}
                    {founderCount < 1000 && (
                      <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000"></div>
                    )}

                    {/* Button Content */}
                    {founderCount >= 1000 ? (
                      <span className="relative">Registration Closed</span>
                    ) : isSubmitting ? (
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
        <div className="w-32 h-1 bg-linear-to-r from-transparent via-secondary-blue to-transparent rounded-full"></div>
      </div>
    </div>
  );
};

export default Signup;
