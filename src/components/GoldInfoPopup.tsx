// components/GoldInfoPopup.tsx
import { useEffect, useRef } from "react";

interface GoldInfoPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const GoldInfoPopup = ({ isOpen, onClose }: GoldInfoPopupProps) => {
  const popupRef = useRef<HTMLDivElement>(null);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        popupRef.current &&
        !popupRef.current.contains(e.target as Node) &&
        isOpen
      ) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 animate-fade-in">
      <div
        ref={popupRef}
        className="relative bg-linear-to-br from-black/90 to-yellow-950/80 border-2 border-yellow-500/50 rounded-3xl p-6 md:p-8 max-w-md w-full mx-auto shadow-2xl"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="cursor-pointer absolute top-4 right-4 text-gray-400 hover:text-white transition-colors duration-200 hover:scale-110 transform z-10"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Popup Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center space-x-2 bg-yellow-900/40 border border-yellow-500/50 rounded-full px-4 py-2 mb-4">
            <span className="text-yellow-200 text-sm font-bold tracking-widest">
              GOLD FOUNDER
            </span>
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">
            Gold Founder Program
          </h3>
          <p className="text-gray-300 text-sm">
            Invite-only program for top creators
          </p>
        </div>

        <div className="text-center mb-6">
          <p className="text-yellow-200 text-lg font-semibold mb-4">
            🚫 Invite Only
          </p>
          <p className="text-gray-300 text-sm mb-4">
            The Gold Founder program is exclusively by invitation. Our team
            actively scouts for exceptional creators who align with our vision.
          </p>
          <p className="text-gray-400 text-xs mb-4">
            If you believe you should be considered, please ensure your profile
            and content are public and showcase your best work.
          </p>
          <div className="bg-yellow-900/30 rounded-lg p-3 border border-yellow-700/30">
            <p className="text-yellow-200 text-xs font-semibold">
              We review applications based on content quality, audience
              engagement, and alignment with TV-ish values.
            </p>
          </div>
        </div>

        {/* Footer Text */}
        <div className="text-center mt-6">
          <p className="text-gray-400 text-xs">
            We'll reach out directly to selected creators
          </p>
        </div>
      </div>
    </div>
  );
};

export default GoldInfoPopup;
