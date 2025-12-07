// components/TimerUnit.tsx
interface TimerUnitProps {
  value: number;
  label: string;
  color: string;
  index: number;
}

const TimerUnit = ({ value, label }: TimerUnitProps) => {
  const isDay = label === "DAYS";
  const maxValue = isDay ? 365 : label === "HOURS" ? 24 : 60;

  return (
    <div className="group/time-unit cursor-pointer perspective-1000">
      {/* 3D Flip Container */}
      <div className="relative w-full h-24 lg:h-28 transform-style-preserve-3d transition-all duration-700 group-hover/time-unit:rotate-y-180">
        {/* Front Side */}
        <div className="absolute inset-0 backface-hidden bg-linear-to-br from-black/90 to-blue-950/60 border-2 border-blue-700/40 rounded-2xl p-4 transform rotate-y-0">
          {/* Animated Background Pulse */}
          <div className="absolute inset-0 bg-linear-to-r from-blue-500/10 to-blue-600/5 rounded-2xl opacity-0 group-hover/time-unit:opacity-100 transition-opacity duration-500"></div>

          {/* Glowing Orb */}
          <div className="absolute top-2 right-2 w-3 h-3 bg-blue-500 rounded-full opacity-60 animate-ping"></div>

          {/* Main Content */}
          <div className="relative z-10">
            <div className="text-2xl lg:text-3xl font-bold text-white font-mono mb-1 drop-shadow-lg bg-linear-to-r from-white to-blue-200 bg-clip-text">
              {value.toString().padStart(2, "0")}
            </div>
            <div className="text-xs lg:text-sm text-gray-300 font-semibold tracking-widest uppercase bg-linear-to-r from-gray-300 to-blue-300 bg-clip-text">
              {label}
            </div>
          </div>

          {/* Corner Accents */}
          <div className="absolute top-2 left-2 w-2 h-2 bg-linear-to-r from-blue-400 to-blue-500 rounded-full opacity-0 group-hover/time-unit:opacity-100 transition-opacity duration-300"></div>
          <div className="absolute bottom-2 right-2 w-2 h-2 bg-linear-to-r from-blue-400 to-blue-500 rounded-full opacity-0 group-hover/time-unit:opacity-100 transition-opacity duration-300 delay-150"></div>
        </div>

        {/* Back Side - Revealed on Hover */}
        <div className="absolute inset-0 backface-hidden bg-linear-to-br from-blue-600 to-blue-700 border-2 border-blue-400/60 rounded-2xl p-4 transform rotate-y-180">
          {/* Sparkle Effect */}
          <div className="absolute inset-0 overflow-hidden rounded-2xl">
            <div className="absolute top-0 left-1/4 w-1 h-1 bg-white rounded-full animate-sparkle"></div>
            <div className="absolute bottom-2 right-3 w-1 h-1 bg-white rounded-full animate-sparkle delay-300"></div>
          </div>

          {/* Back Content */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full">
            <div className="text-lg lg:text-xl font-bold text-white font-mono mb-1">
              {value.toString().padStart(2, "0")}
            </div>
            <div className="text-xs text-white/80 font-semibold tracking-widest uppercase">
              {label}
            </div>
            {/* Mini Progress Ring */}
            <div className="absolute bottom-1 w-6 h-1 bg-white/30 rounded-full overflow-hidden">
              <div
                className="h-full bg-white rounded-full animate-pulse"
                style={{
                  width: `${(value / maxValue) * 100}%`,
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Glow Effect */}
      <div className="absolute inset-0 bg-linear-to-r from-blue-500/20 to-blue-600/10 rounded-2xl blur-md opacity-0 group-hover/time-unit:opacity-100 transition-all duration-500 -z-10 scale-110"></div>
    </div>
  );
};

export default TimerUnit;
