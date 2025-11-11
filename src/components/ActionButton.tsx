import { useState, useEffect, useRef } from "react";

interface ButtonProps {
  name: string;
  href?: string;
}

const ActionButton = ({ name, href = "#signup" }: ButtonProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolling, setIsScrolling] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [dragPosition, setDragPosition] = useState({ x: 0, y: 0 });
  const [startPosition, setStartPosition] = useState({ x: 0, y: 0 });
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleClick = () => {
    const element = document.getElementById(href.replace("#", ""));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Touch and drag handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    const touch = e.touches[0];
    setStartPosition({
      x: touch.clientX - dragPosition.x,
      y: touch.clientY - dragPosition.y,
    });
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;

    const touch = e.touches[0];
    const newX = touch.clientX - startPosition.x;
    const newY = touch.clientY - startPosition.y;

    // Constrain to screen boundaries
    const maxX = window.innerWidth - (isExpanded ? 200 : 60);
    const maxY = window.innerHeight - 100;

    setDragPosition({
      x: Math.max(0, Math.min(newX, maxX)),
      y: Math.max(0, Math.min(newY, maxY)),
    });

    // Expand if dragged significantly
    if (!isExpanded && Math.abs(newX) > 30) {
      setIsExpanded(true);
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);

    // If not expanded and not moved much, trigger click
    if (
      !isExpanded &&
      Math.abs(dragPosition.x) < 10 &&
      Math.abs(dragPosition.y) < 10
    ) {
      handleClick();
    }

    // Snap back to edge after a delay if not intentionally moved
    setTimeout(() => {
      if (!isExpanded) {
        setDragPosition({ x: 0, y: 0 });
      }
    }, 1500);
  };

  // Reset position on scroll
  useEffect(() => {
    if (!isDragging) {
      setDragPosition({ x: 0, y: 0 });
      setIsExpanded(false);
    }
  }, [isScrolling, isDragging]);

  // Improved scroll visibility logic
  useEffect(() => {
    const checkScrollPosition = () => {
      const targetElement = document.getElementById(href.replace("#", ""));
      if (!targetElement) return;

      const rect = targetElement.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate how much of the target element is visible
      const elementTop = rect.top;
      const elementBottom = rect.bottom;

      // Show button when target is above viewport, hide when it enters viewport
      // Using a larger threshold for smoother transition
      const isTargetApproaching = elementTop < windowHeight * 1.2;
      const isTargetFullyInView =
        elementTop < windowHeight * 0.3 && elementBottom > windowHeight * 0.1;

      if (isTargetFullyInView) {
        setIsVisible(false);
      } else if (isTargetApproaching) {
        // Start fading out as target approaches
        setIsVisible(elementTop > windowHeight * 0.5);
      } else {
        setIsVisible(true);
      }
    };

    // Initial check
    checkScrollPosition();

    // Improved scroll handling with debouncing
    let scrollTimeout: number | undefined;
    let ticking = false;

    const handleScroll = () => {
      setIsScrolling(true);

      if (!ticking) {
        requestAnimationFrame(() => {
          checkScrollPosition();
          ticking = false;
        });
        ticking = true;
      }

      // Clear previous timeout
      clearTimeout(scrollTimeout);
      // Set timeout to mark scrolling as ended
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 100);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Also check on resize
    window.addEventListener("resize", checkScrollPosition, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", checkScrollPosition);
      clearTimeout(scrollTimeout);
    };
  }, [href]);

  // Check if mobile/tablet
  const isMobile = typeof window !== "undefined" && window.innerWidth < 1024;

  return (
    <button
      ref={buttonRef}
      onClick={!isMobile ? handleClick : undefined}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className={`fixed bottom-30 right-8 z-50 group cursor-pointer overflow-visible transition-all duration-700 ease-in-out ${
        isVisible
          ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
          : "opacity-0 translate-y-8 scale-95 pointer-events-none"
      } ${
        isScrolling
          ? "transition-all duration-300"
          : "transition-all duration-700"
      } ${isMobile ? "active:scale-95" : ""}`}
      style={
        isMobile && isExpanded
          ? {
              transform: `translate(${dragPosition.x}px, ${dragPosition.y}px)`,
              right: "auto",
            }
          : isMobile
          ? {
              transform: `translateX(${dragPosition.x}px)`,
              right: "-20px", // Peek from the right edge
            }
          : {}
      }
    >
      {/* Main Ticket Container */}
      <div
        className={`relative bg-linear-to-br from-amber-50 via-yellow-50 to-amber-100 border-2 border-amber-700 rounded-lg shadow-2xl transform transition-all duration-500 group-hover:scale-105 group-hover:-rotate-1 ${
          isMobile
            ? isExpanded
              ? "px-6 py-4"
              : "px-3 py-4 pr-6 -mr-2" // Compact when peeked
            : "px-8 py-6"
        }`}
      >
        {/* Mobile Peek Indicator */}
        {isMobile && !isExpanded && (
          <div className="absolute left-2 top-1/2 transform -translate-y-1/2">
            <div className="w-2 h-2 bg-amber-600 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-amber-600 rounded-full animate-pulse animation-delay-300 mt-1"></div>
            <div className="w-2 h-2 bg-amber-600 rounded-full animate-pulse animation-delay-600 mt-1"></div>
          </div>
        )}

        {/* Torn Paper Edges - Hidden on mobile peek */}
        {(!isMobile || isExpanded) && (
          <>
            <div className="absolute -left-2 top-1/4 w-4 h-8 bg-white border border-amber-800 rounded-r-full"></div>
            <div className="absolute -left-2 bottom-1/4 w-4 h-8 bg-white border border-amber-800 rounded-r-full"></div>
            <div className="absolute -right-2 top-1/4 w-4 h-8 bg-white border border-amber-800 rounded-l-full"></div>
            <div className="absolute -right-2 bottom-1/4 w-4 h-8 bg-white border border-amber-800 rounded-l-full"></div>
          </>
        )}

        {/* Perforation Dots - Hidden on mobile peek */}
        {(!isMobile || isExpanded) && (
          <>
            <div className="absolute left-0 top-1/4 -ml-1 w-2 h-2 bg-amber-800 rounded-full"></div>
            <div className="absolute left-0 bottom-1/4 -ml-1 w-2 h-2 bg-amber-800 rounded-full"></div>
            <div className="absolute right-0 top-1/4 -mr-1 w-2 h-2 bg-amber-800 rounded-full"></div>
            <div className="absolute right-0 bottom-1/4 -mr-1 w-2 h-2 bg-amber-800 rounded-full"></div>
          </>
        )}

        {/* Ticket Border */}
        <div className="absolute inset-1 border border-amber-600 rounded-md pointer-events-none"></div>

        {/* Golden Corner Accents - Hidden on mobile peek */}
        {(!isMobile || isExpanded) && (
          <>
            <div className="absolute -top-1 -left-1 w-4 h-4 bg-linear-to-br from-yellow-400 to-amber-600 rounded-sm rotate-45"></div>
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-linear-to-br from-yellow-400 to-amber-600 rounded-sm rotate-45"></div>
            <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-linear-to-br from-yellow-400 to-amber-600 rounded-sm rotate-45"></div>
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-linear-to-br from-yellow-400 to-amber-600 rounded-sm rotate-45"></div>
          </>
        )}

        {/* Main Content */}
        <div
          className={`relative text-center ${
            isMobile && !isExpanded ? "opacity-0" : "opacity-100"
          } transition-opacity duration-300`}
        >
          {/* Movie Theater Style Text */}
          <div className="space-y-2">
            <div
              className={`text-amber-900 font-bold tracking-widest uppercase font-serif italic ${
                isMobile ? "text-lg" : "text-xl"
              }`}
            >
              {isMobile && !isExpanded ? "→" : name}
            </div>

            {/* Decorative Line - Hidden on mobile peek */}
            {(!isMobile || isExpanded) && (
              <div className="flex items-center justify-center space-x-2">
                <div className="w-6 h-0.5 bg-amber-600"></div>
                <div className="w-2 h-2 bg-amber-600 rotate-45"></div>
                <div className="w-6 h-0.5 bg-amber-600"></div>
              </div>
            )}

            {/* Showtime Text - Hidden on mobile peek */}
            {(!isMobile || isExpanded) && (
              <div className="text-amber-700 font-mono text-sm tracking-wide">
                NOW SHOWING
              </div>
            )}
          </div>
        </div>

        {/* Vintage Stamp Effect - Hidden on mobile peek */}
        {(!isMobile || isExpanded) && (
          <div className="absolute -bottom-2 -right-2 w-8 h-8 sm:w-10 sm:h-10 bg-red-600 rounded-full border-2 border-amber-800 opacity-90 group-hover:rotate-12 transition-transform duration-300">
            <div className="absolute inset-1 border border-amber-200 rounded-full"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-amber-50 text-xs font-bold">GO!</span>
            </div>
          </div>
        )}

        {/* Price Tag - Hidden on mobile peek */}
        {(!isMobile || isExpanded) && (
          <div className="absolute -top-2 -left-4 bg-green-700 px-2 py-1 rounded-lg border border-amber-800 rotate-12">
            <span className="text-amber-50 text-xs font-bold">FREE</span>
          </div>
        )}

        {/* Hover Sparkle Effects */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute top-2 left-4 w-1.5 h-1.5 bg-yellow-300 rounded-full animate-ping"></div>
          <div className="absolute bottom-2 right-6 w-1 h-1 bg-yellow-300 rounded-full animate-ping animation-delay-300"></div>
        </div>

        {/* Glowing Effect on Hover */}
        <div className="absolute -inset-4 bg-linear-to-r from-yellow-200 via-amber-200 to-yellow-200 rounded-xl opacity-0 group-hover:opacity-40 blur-lg transition-all duration-500 -z-10"></div>
      </div>

      {/* Floating Particles on Hover */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-1 h-1 bg-amber-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-opacity duration-300"></div>
        <div className="absolute bottom-0 right-1/4 w-1 h-1 bg-amber-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce animation-delay-200 transition-opacity duration-300"></div>
      </div>

      {/* Subtle Shadow */}
      <div className="absolute inset-0 bg-amber-900/20 rounded-xl blur-sm -z-20 group-hover:bg-amber-900/30 transition-colors duration-300"></div>

      {/* Drag Instruction for Mobile */}
      {isMobile && !isExpanded && (
        <div className="absolute -left-24 top-1/2 transform -translate-y-1/2 bg-black/80 text-white px-2 py-1 rounded-lg text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Drag to open ←
        </div>
      )}
    </button>
  );
};

export default ActionButton;
