import { useState, useEffect } from "react";

interface ButtonProps {
  name: string;
  href?: string;
}

const FloatingCTA = ({ name, href = "#signup" }: ButtonProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [shouldRender, setShouldRender] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      const mobile = window.innerWidth < 1280;
      setIsMobile(mobile);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const handleClick = () => {
    const targetId = isMobile ? "signup-mobile" : href.replace("#", "");

    const element = document.getElementById(targetId);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      // Fallback to original href if mobile target not found
      const fallbackElement = document.getElementById(href.replace("#", ""));
      if (fallbackElement) {
        fallbackElement.scrollIntoView({ behavior: "smooth" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;

      // Move to right immediately on any scroll
      setIsScrolled(scrollY > 1); // Reduced threshold for immediate movement

      // Check if we're in the signup section - use mobile target if on mobile
      const targetId = isMobile ? "signup-mobile" : href.replace("#", "");
      const signupElement = document.getElementById(targetId);

      if (signupElement) {
        const signupRect = signupElement.getBoundingClientRect();
        const isInSignupSection =
          signupRect.top < window.innerHeight && signupRect.bottom > 0;

        setIsVisible(!isInSignupSection);

        // Only remove from DOM after fade out animation completes
        if (isInSignupSection) {
          setTimeout(() => setShouldRender(false), 300);
        } else {
          setShouldRender(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Initial check
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [href, isMobile]);

  if (!shouldRender) return null;

  return (
    <button
      onClick={handleClick}
      className={`group fixed z-50 text-white font-bold cursor-pointer transition-all duration-500 ease-out ${
        isVisible
          ? "opacity-100 scale-100"
          : "opacity-0 scale-95 pointer-events-none"
      } ${
        isScrolled
          ? "bottom-28 right-4 sm:bottom-28 sm:right-6 md:bottom-28 md:right-6 lg:bottom-28 lg:right-6 translate-x-0"
          : "bottom-8 left-1/2 transform -translate-x-1/2"
      }`}
      style={{
        transitionProperty: "transform, opacity, bottom, left, right, scale",
      }}
    >
      {/* Main Button Container */}
      <div className="relative">
        {/* Animated Border */}
        <div
          className={`absolute -inset-0.5 sm:-inset-1 bg-linear-to-r from-blue-600 to-purple-600 rounded-lg sm:rounded-xl blur opacity-75 group-hover:opacity-100 group-hover:from-blue-500 group-hover:to-purple-500 transition-all duration-300 ${
            isVisible ? "animate-pulse" : ""
          }`}
        ></div>

        {/* Button Content */}
        <div className="relative bg-linear-to-br from-blue-700 via-blue-600 to-blue-800 px-4 py-3 sm:px-5 sm:py-3 md:px-6 md:py-3 rounded-lg sm:rounded-xl shadow-xl sm:shadow-2xl border-2 border-blue-400/50 group-hover:border-blue-300 group-hover:from-blue-600 group-hover:to-blue-700 group-hover:scale-105 active:scale-95 transition-all duration-300">
          <span className="flex items-center justify-center space-x-2 sm:space-x-3">
            <span className="text-sm sm:text-base bg-linear-to-r from-white to-blue-100 bg-clip-text text-transparent whitespace-nowrap">
              {name}
            </span>
            <svg
              className={`w-4 h-4 sm:w-5 sm:h-5 transform transition-transform duration-300 ${
                isScrolled ? "translate-x-0" : "group-hover:translate-x-1"
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </span>
        </div>

        {/* Floating Particles */}
        <div
          className={`absolute -top-1 -right-1 sm:-top-1 sm:-right-1 w-2 h-2 bg-yellow-400 rounded-full transition-opacity duration-300 ${
            isVisible
              ? "opacity-75 group-hover:opacity-100 group-hover:animate-ping"
              : "opacity-0"
          }`}
        ></div>
        <div
          className={`absolute -bottom-1 -left-1 sm:-bottom-1 sm:-left-1 w-1.5 h-1.5 bg-green-400 rounded-full transition-opacity duration-300 delay-150 ${
            isVisible
              ? "opacity-75 group-hover:opacity-100 group-hover:animate-ping"
              : "opacity-0"
          }`}
        ></div>
      </div>

      {/* Subtle Glow */}
      <div
        className={`absolute inset-0 bg-blue-400/20 rounded-lg sm:rounded-xl blur-lg -z-10 transition-all duration-300 ${
          isVisible ? "group-hover:bg-blue-400/30" : "opacity-0"
        }`}
      ></div>
    </button>
  );
};

export default FloatingCTA;
