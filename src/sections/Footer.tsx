const Footer = () => {
  return (
    <>
      <div className="w-full bg-linear-to-br from-black via-black to-red-950 px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="w-full max-w-[80vw] mx-auto">
          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-12 lg:mb-16">
            {/* Philosophy Section */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-3 h-3 bg-red-600 rounded-full animate-pulse"></div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  Our <span className="text-red-600">Philosophy</span>
                </h3>
              </div>

              <div className="bg-black/40 border-l-4 border-red-600 rounded-r-xl p-6">
                <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-4">
                  TV-ish is built on{" "}
                  <span className="text-white font-semibold">
                    creative freedom, empowerment, excellence,
                  </span>{" "}
                  and{" "}
                  <span className="text-white font-semibold">
                    diversity of thought.
                  </span>
                </p>
                <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
                  We believe in stories that{" "}
                  <span className="text-red-600">
                    inspire, connect, and create change.
                  </span>
                </p>
              </div>

              {/* Values Grid */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                {[
                  {
                    icon: "🎨",
                    value: "Creative Freedom",
                    color: "from-purple-500/10 to-red-500/10",
                  },
                  {
                    icon: "⚡",
                    value: "Empowerment",
                    color: "from-blue-500/10 to-red-500/10",
                  },
                  {
                    icon: "⭐",
                    value: "Excellence",
                    color: "from-yellow-500/10 to-red-500/10",
                  },
                  {
                    icon: "🌍",
                    value: "Diversity",
                    color: "from-green-500/10 to-red-500/10",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-linear-to-br from-black/50 to-black/30 border border-white/5 rounded-xl p-4 text-center group hover:border-red-500/20 transition-all duration-300"
                  >
                    <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <p className="text-white text-sm font-medium">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Trust & Policy Section */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-3 h-3 bg-red-600 rounded-full"></div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  Our <span className="text-red-600">Promise</span>
                </h3>
              </div>

              {/* No-Spam Policy */}
              <div className="bg-linear-to-r from-red-900/20 to-red-800/10 border-2 border-red-600/20 rounded-2xl p-6 lg:p-8">
                <div className="flex items-center justify-center mb-4">
                  <div className="bg-red-600 text-white px-4 py-1 rounded-full text-sm font-bold tracking-wide">
                    NO-SPAM POLICY
                  </div>
                </div>
                <p className="text-2xl sm:text-3xl text-white font-bold text-center mb-4">
                  🤝 Just Value, No Noise
                </p>
                <p className="text-lg text-gray-300 text-center leading-relaxed">
                  <span className="text-red-600 font-semibold">
                    No spam. No fluff.
                  </span>{" "}
                  Just meaningful updates about opportunities that matter to
                  you.
                </p>
              </div>

              {/* Trust Indicators */}
              <div className="space-y-4 mt-8">
                <div className="flex items-center space-x-4 p-4 bg-black/30 rounded-xl border border-white/5">
                  <div className="text-2xl">🔒</div>
                  <div>
                    <h4 className="text-white font-semibold">
                      Respect for Your Time
                    </h4>
                    <p className="text-gray-400 text-sm">
                      Only relevant, creator-focused communications
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-black/30 rounded-xl border border-white/5">
                  <div className="text-2xl">🎯</div>
                  <div>
                    <h4 className="text-white font-semibold">
                      Quality Over Quantity
                    </h4>
                    <p className="text-gray-400 text-sm">
                      Curated opportunities that actually help you grow
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-red-900/20 pt-8 lg:pt-12">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              {/* Brand */}
              <div className="text-center lg:text-left">
                <h4 className="text-2xl font-bold text-white mb-2">
                  TV-<span className="text-red-600">ish</span>
                </h4>
                <p className="text-gray-400 text-sm">
                  Stream bold. Share loud. Be seen
                </p>
              </div>

              {/* Copyright */}
              <div className="text-center">
                <p className="text-gray-500 text-sm">
                  © 2025 TV-ish. Built with ❤️ for creators worldwide.
                </p>
              </div>

              {/* Social Proof */}
              <div className="text-center lg:text-right">
                <div className="flex items-center space-x-2 text-gray-400 text-sm">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span>Trusted by 500+ creators globally</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
