import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { triggerConfetti } from "../utils/confettiService.ts";

interface SilverPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const SilverPopup = ({ isOpen, onClose }: SilverPopupProps) => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<{
    text: string;
    type: "success" | "error";
  } | null>(null);
  const popupRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Get API base URL
  const API_BASE_URL =
    import.meta.env.VITE_API_BASE_URL;

  // Focus input when popup opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isOpen]);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Email validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      setMessage({ text: "Please enter a valid email address", type: "error" });
      return;
    }

    setIsSubmitting(true);
    setMessage(null);

    try {
      const response = await axios.post(
        `${API_BASE_URL}/founder/silver`,
        { email },
        {
          headers: { "Content-Type": "application/json" },
          timeout: 10000,
        }
      );

      if (response.data.success) {
        setMessage({
          text:
            response.data.message ||
            "🎉 Silver Founder application submitted! We'll review your application soon.",
          type: "success",
        });
        setEmail("");

        triggerConfetti();

        // Close popup after success
        setTimeout(() => {
          onClose();
        }, 3000);
      } else {
        setMessage({
          text:
            response.data.message || "Application failed. Please try again.",
          type: "error",
        });
      }
    } catch (error: any) {
      let errorMsg = "Application failed. Please try again.";

      if (error.response) {
        const errorData = error.response.data;
        if (errorData.code === "RATE_LIMIT_EXCEEDED") {
          errorMsg = `Rate limit exceeded. Please try again after ${errorData.retryAfter} seconds.`;
        } else if (error.status === 409) {
          errorMsg = "This email is already registered as a founder.";
        } else {
          errorMsg = errorData.message || errorMsg;
        }
      } else if (error.request) {
        errorMsg = "Network error. Please check your connection.";
      }

      setMessage({ text: errorMsg, type: "error" });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 animate-fade-in">
      <div
        ref={popupRef}
        className="relative bg-linear-to-br from-black/90 to-blue-950/80 border-2 border-blue-600/50 rounded-3xl p-6 md:p-8 max-w-md w-full mx-auto shadow-2xl"
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
          <div className="inline-flex items-center space-x-2 bg-blue-900/40 border border-blue-600/50 rounded-full px-4 py-2 mb-4">
            <span className="text-blue-200 text-sm font-bold tracking-widest">
              SILVER FOUNDER
            </span>
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">
            Apply for Silver Founder
          </h3>
          <p className="text-gray-300 text-sm">
            {isSubmitting
              ? "Submitting your application..."
              : "Enter your email to apply for Silver Founder status"}
          </p>
        </div>

        {/* Message Display */}
        {message && (
          <div
            className={`mb-4 p-3 rounded-lg ${
              message.type === "success"
                ? "bg-green-900/40 border border-green-500/50"
                : "bg-red-900/40 border border-red-500/50"
            }`}
          >
            <p
              className={`text-sm ${
                message.type === "success" ? "text-green-200" : "text-red-200"
              }`}
            >
              {message.text}
            </p>
          </div>
        )}

        {/* Email Input Section */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <input
              ref={inputRef}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="w-full bg-black/40 border-2 border-blue-600/30 rounded-xl py-4 px-4 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
              disabled={isSubmitting}
              required
            />
            <div className="absolute inset-y-0 right-3 flex items-center">
              <svg
                className="w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                />
              </svg>
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`cursor-pointer w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 group/btn relative overflow-hidden ${
              isSubmitting ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700" />
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                <span className="relative z-10">Submitting...</span>
              </>
            ) : (
              <>
                <span className="relative z-10">Apply for Silver Founder</span>
                <svg
                  className="w-4 h-4 relative z-10 group-hover/btn:translate-x-1 transition-transform duration-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </>
            )}
          </button>
        </form>

        {/* Footer Text */}
        <div className="text-center mt-6">
          <p className="text-gray-400 text-xs">
            By applying, you agree to our Terms and Privacy Policy
          </p>
        </div>
      </div>
    </div>
  );
};

export default SilverPopup;
