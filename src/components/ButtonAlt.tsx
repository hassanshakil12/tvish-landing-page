import { useState, useEffect } from "react";

interface ButtonProps {
  name: string;
  href?: string;
}

const ButtonAlt = ({ name, href = "#signup" }: ButtonProps) => {
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

  return (
    <button
      onClick={handleClick}
      className="cursor-pointer bg-transparent border-2 border-blue-600 hover:bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105"
    >
      ⚡ {name}
    </button>
  );
};

export default ButtonAlt;
