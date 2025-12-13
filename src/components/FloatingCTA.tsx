import { useState, useEffect } from "react";

interface ButtonProps {
  name: string;
  href?: string;
}

const FloatingCTA = ({ name, href = "#signup" }: ButtonProps) => {
  const [isVisible, setIsVisible] = useState(false);
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
      const fallbackElement = document.getElementById(href.replace("#", ""));
      if (fallbackElement) {
        fallbackElement.scrollIntoView({ behavior: "smooth" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  };

  useEffect(() => {
    const checkVisibility = () => {
      const signup = document.getElementById("signup");
      const signupMobile = document.getElementById("signup-mobile");

      const isElementInView = (el: HTMLElement | null) => {
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top < window.innerHeight && rect.bottom > 0;
      };

      const onSignupInView =
        isElementInView(signup) || isElementInView(signupMobile);

      if (onSignupInView) {
        setIsVisible(false);
      } else {
        setIsVisible(window.pageYOffset > 10);
      }
    };

    window.addEventListener("scroll", checkVisibility);
    checkVisibility();

    return () => window.removeEventListener("scroll", checkVisibility);
  }, []);

  return (
    <button
      onClick={handleClick}
      className={`group fixed z-50 text-white font-bold cursor-pointer transition-all duration-500 ease-out bottom-28 right-4 sm:bottom-28 sm:right-6 md:bottom-28 md:right-6 lg:bottom-28 lg:right-6 ${
        isVisible
          ? "opacity-100 scale-100"
          : "opacity-0 scale-95 pointer-events-none"
      }`}
      style={{
        transitionProperty: "transform, opacity, bottom, left, right, scale",
      }}
    >
      {/* Main Button Container */}
      <div className="relative">
        {/* Animated Border */}
        <div
          className={`absolute -inset-0.5 sm:-inset-1 bg-linear-to-r from-blue-600 to-purple-600 rounded-lg sm:rounded-xl blur opacity-75 group-hover:opacity-100 group-hover:from-blue-500 group-hover:to-purple-500 transition-all duration-300`}
        ></div>

        <div className="relative bg-white px-4 py-3 sm:px-5 sm:py-3 md:px-6 md:py-3 rounded-lg sm:rounded-xl shadow-xl sm:shadow-2xl border-2 border-gray-200 group-hover:border-gray-300 group-hover:bg-gray-50 group-hover:scale-105 active:scale-95 transition-all duration-300">
          <span className="flex items-center justify-center space-x-2 sm:space-x-3">
            <span className="text-sm sm:text-base text-black font-semibold whitespace-nowrap">
              {name}
            </span>
            <svg
              className={`w-4 h-4 sm:w-5 sm:h-5 transform transition-transform duration-300 invert-100 group-hover:translate-x-1`}
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
          className={`absolute -top-1 -right-1 sm:-top-1 sm:-right-1 w-2 h-2 bg-yellow-400 rounded-full transition-opacity duration-300 opacity-75 group-hover:opacity-100 group-hover:animate-ping`}
        ></div>
        <div
          className={`absolute -bottom-1 -left-1 sm:-bottom-1 sm:-left-1 w-1.5 h-1.5 bg-green-400 rounded-full transition-opacity duration-300 delay-150 opacity-75 group-hover:opacity-100 group-hover:animate-ping`}
        ></div>
      </div>

      {/* Subtle Glow */}
      <div
        className={`absolute inset-0 bg-blue-400/20 rounded-lg sm:rounded-xl blur-lg -z-10 transition-all duration-300 group-hover:bg-blue-400/30`}
      ></div>
    </button>
  );
};

export default FloatingCTA;
