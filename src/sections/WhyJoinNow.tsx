const WhyJoinNow = () => {
  const benefits = [
    {
      icon: "🎬",
      title: "Early Access to TV-ish Studio Tools",
      description:
        "Get immediate access to analytics, payouts, and customizable channels before public launch",
    },
    {
      icon: "💰",
      title: "Lifetime 90/10 Revenue Split",
      description:
        "Keep 90% of your earnings forever as a Silver & Gold founder",
    },
    {
      icon: "⭐",
      title: "Exclusive Homepage Feature at Launch",
      description: "We showcase you to thousands of viewers on our launch day",
    },
    {
      icon: "🎉",
      title: "Launch Event Invite",
      description:
        "Join the private Founders Livestream + exclusive merch drop",
    },
    {
      icon: "🏆",
      title: "Your Name on the Founders Wall",
      description: "Immortalized as one of the first 1,000 pioneers",
    },
  ];

  return (
    <div className="w-full min-h-fit bg-linear-to-bl from-black via-black to-red-950/50 px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
      {/* Header Section */}
      <div className="w-full text-center mb-16 lg:mb-10">
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white mb-4 tracking-tight">
          Why Join <span className="text-red-600 italic">Before</span> Launch?
        </h1>
        <div className="w-24 h-1 bg-red-600 mx-auto rounded-full mb-10"></div>
      </div>

      {/* Benefits Grid */}
      <div className="w-full max-w-[80vw] mx-auto mb-16 lg:mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-5 gap-6 lg:gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group relative bg-linear-to-br from-black/80 to-red-950/40 border-2 border-red-900/40 rounded-3xl p-6 hover:border-red-500/60 transition-all duration-700 hover:transform hover:scale-105 cursor-pointer overflow-hidden"
            >
              {/* Icon Container with Enhanced Effects */}
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-red-500/20 rounded-full blur-lg group-hover:blur-xl transition-all duration-500 scale-0 group-hover:scale-100"></div>
                <div className="text-5xl text-center transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 relative z-10">
                  {benefit.icon}
                </div>
              </div>

              {/* Content with Enhanced Typography */}
              <div className="relative z-10">
                <h3 className="text-xl lg:text-2xl font-bold text-white text-center mb-4 leading-tight bg-linear-to-r from-white to-gray-300 bg-clip-text group-hover:from-red-400 group-hover:to-red-200 transition-all duration-500">
                  {benefit.title}
                </h3>
                <p className="text-base lg:text-lg text-gray-300 text-center leading-relaxed group-hover:text-white transition-colors duration-500 font-medium">
                  {benefit.description}
                </p>
              </div>

              {/* Pulse Animation for Attention */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-red-500 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-500"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Decoration */}
      <div className="w-full flex justify-center mt-16 lg:mt-24">
        <div className="w-32 h-1 bg-linear-to-r from-transparent via-red-600 to-transparent rounded-full"></div>
      </div>
    </div>
  );
};

export default WhyJoinNow;
