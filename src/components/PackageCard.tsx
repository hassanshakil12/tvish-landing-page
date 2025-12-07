import type { MouseEvent } from "react";

interface PackageCardProps {
  pkg: {
    title: string;
    tier: string;
    subtitle: string;
    limit: string;
    perfectFor: string;
    includes: string[];
    value: string;
    requirements: string;
    gradient: string;
    border: string;
    badge: string;
    note?: string;
    button?: {
      type: "link" | "popup";
      text: string;
      href?: string;
    };
  };
  isMobile: boolean;
  onBronzeClick: (e: MouseEvent<HTMLAnchorElement>) => void;
  onSilverClick: () => void;
  onGoldClick: () => void;
}

const PackageCard = ({
  pkg,
  onBronzeClick,
  onSilverClick,
  onGoldClick,
}: PackageCardProps) => {
  return (
    <div
      className={`group relative bg-linear-to-br from-black/60 to-black/40 border-2 rounded-3xl p-6 lg:p-8 hover:border-blue-600/50 transition-all duration-500 cursor-pointer hover:scale-105 border-blue-900/30 h-full flex flex-col ${
        pkg.note ? "relative" : ""
      }`}
    >
      {/* Invite Only Note for Gold */}
      {pkg.note && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
          <div className="bg-yellow-500 text-black px-4 py-1 rounded-full text-sm font-bold shadow-lg border-2 border-yellow-300">
            {pkg.note}
          </div>
        </div>
      )}

      {/* Package Badge */}
      <div className="text-center mb-6">
        <div className="inline-flex items-center space-x-2 bg-blue-900/30 border border-blue-600/40 rounded-full px-4 py-2 mb-4">
          <span className="text-lg">{pkg.badge.split(" ")[0]}</span>
          <span className="text-blue-200 text-sm font-bold tracking-widest">
            {pkg.badge.split(" ")[1]}
          </span>
        </div>

        <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-white mb-2 leading-tight">
          {pkg.tier}
        </h2>
        <p className="text-xl lg:text-2xl text-secondary-blue font-semibold mb-2">
          {pkg.subtitle}
        </p>
        <p className="text-sm text-gray-400 mb-4">{pkg.limit}</p>
      </div>

      {/* Perfect For */}
      <div className="bg-blue-900/30 border-l-4 border-blue-600 pl-4 lg:pl-6 rounded-r-lg p-3 mb-6">
        <p className="text-white text-sm font-bold text-left leading-relaxed">
          "Perfect for: {pkg.perfectFor}"
        </p>
      </div>

      {/* Includes */}
      <div className="space-y-4 mb-6 grow">
        <h3 className="text-xl font-bold text-white mb-3">
          Includes{" "}
          {pkg.title === "Gold"
            ? "Silver+"
            : pkg.title === "Silver"
            ? "Bronze+"
            : ""}
        </h3>
        <ul className="space-y-3">
          {pkg.includes.map((item, itemIndex) => (
            <li
              key={itemIndex}
              className="flex items-start space-x-3 text-gray-300 text-sm lg:text-base"
            >
              <span className="text-blue-400 mt-0.5 shrink-0">•</span>
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Value & Requirements */}
      <div className="border-t border-blue-900/30 pt-6 space-y-3 mt-auto">
        <div className="bg-blue-600/20 rounded-lg p-3 border border-blue-900/20">
          <p className="text-blue-300 text-sm text-center font-semibold leading-tight">
            {pkg.requirements}
          </p>
        </div>

        {/* Action Button */}
        <div className="mt-4">
          {pkg.title === "Bronze" && pkg.button?.type === "link" ? (
            <a
              href={pkg.button.href}
              onClick={onBronzeClick}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 group/btn relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"></div>
              <span className="relative z-10">{pkg.button.text}</span>
              <svg
                className="w-4 h-4 relative z-10 group-hover/btn:translate-x-1 transition-transform duration-200"
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
            </a>
          ) : pkg.title === "Silver" ? (
            <button
              onClick={onSilverClick}
              className="cursor-pointer w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 group/btn relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"></div>
              <span className="relative z-10">Apply for Silver Founder</span>
              <svg
                className="w-4 h-4 relative z-10 group-hover/btn:scale-110 transition-transform duration-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </button>
          ) : pkg.title === "Gold" ? (
            <button
              onClick={onGoldClick}
              className="cursor-pointer w-full bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 group/btn relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"></div>
              <span className="relative z-10">Learn More</span>
              <svg
                className="w-4 h-4 relative z-10 group-hover/btn:scale-110 transition-transform duration-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default PackageCard;
