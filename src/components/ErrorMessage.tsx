import { useEffect, useState } from "react";

interface ErrorMessageProps {
  message: string;
  type: "success" | "error";
  onClose?: () => void;
  autoClose?: boolean;
  duration?: number;
}

const ErrorMessage = ({
  message,
  type,
  onClose,
  autoClose = true,
  duration = 5000,
}: ErrorMessageProps) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (autoClose) {
      const timer = setTimeout(() => {
        setIsVisible(false);
        onClose?.();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [autoClose, duration, onClose]);

  if (!isVisible) return null;

  const isSuccess = type === "success";
  const bgColor = isSuccess
    ? "bg-green-900/90 border-green-500"
    : "bg-red-900/90 border-red-500";
  const iconBg = isSuccess ? "bg-green-500" : "bg-red-500";
  const iconText = isSuccess ? "✓" : "!";

  return (
    <div
      className={`${bgColor} border-l-4 text-white p-4 rounded-lg shadow-lg mb-2 animate-slide-in max-w-md`}
    >
      <div className="flex items-center">
        <div
          className={`${iconBg} w-8 h-8 rounded-full flex items-center justify-center mr-3 shrink-0`}
        >
          <span className="text-white font-bold">{iconText}</span>
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-bold truncate">
            {isSuccess ? "Success!" : "Error"}
          </p>
          <p className="text-sm opacity-90 wrap-break-word">{message}</p>
        </div>
        {onClose && (
          <button
            onClick={onClose}
            className="ml-3 text-white/70 hover:text-white focus:outline-none"
            aria-label="Close message"
          >
            ✕
          </button>
        )}
      </div>
    </div>
  );
};

export default ErrorMessage;
