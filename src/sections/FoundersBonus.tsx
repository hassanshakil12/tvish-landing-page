import { Button } from "../components";

const FoundersBonus = () => {
  return (
    <>
      <div className="w-full min-h-screen bg-black px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        {/* Header Section */}
        <div className="w-full text-center mb-16 lg:mb-24">
          <div className="relative inline-block">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white mb-4 tracking-tight">
              Sign Up Before{" "}
              <span className="text-red-600 relative">December 10, 2025</span>
            </h1>
          </div>
          <div className="w-24 h-1 bg-red-600 mx-auto rounded-full"></div>
          <p className="text-2xl sm:text-3xl lg:text-4xl text-red-200 mt-8 font-bold bg-linear-to-r from-red-400 to-red-600 bg-clip-text">
            Unlock the Exclusive Founder's Package
          </p>
        </div>

        {/* Main Content */}
        <div className="w-full max-w-[80vw] mx-auto">
          {/* Limited Time Banner */}
          <div className="relative mb-12 lg:mb-16">
            <div className="absolute inset-0 bg-linear-to-r from-red-900/20 to-red-800/10 rounded-2xl blur-lg"></div>
            <div className="relative bg-linear-to-r from-red-900/30 to-red-800/20 border-2 border-red-600/30 rounded-2xl p-8 shadow-2xl">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="flex-1 text-center sm:text-left">
                  <div className="inline-flex items-center px-4 py-2 bg-red-600 rounded-full mb-4">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse mr-2"></div>
                    <span className="text-white text-sm font-bold tracking-wider">
                      LIMITED TIME OFFER
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl text-white font-bold mb-2">
                    ⚡ Founder's Bonus Ends Soon
                  </h2>
                  <p className="text-lg text-red-200">
                    Join before{" "}
                    <span className="text-white font-semibold">
                      December 10, 2025
                    </span>{" "}
                    to secure your exclusive perks
                  </p>
                </div>
                <div className="shrink-0">
                  <div className="bg-black/50 border-2 border-red-500/50 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-white">🎁</div>
                    <div className="text-red-300 font-semibold text-sm mt-1">
                      FOUNDER'S PACKAGE
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Perks Grid */}
          <div className="mb-12 lg:mb-16">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-center mb-12">
              Your <span className="text-red-600">Founder's Package</span>{" "}
              Includes:
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  icon: "🎁",
                  title: "Creator Launch Toolkit",
                  description:
                    "Professional pitch deck, production checklist, and social media promo templates",
                  gradient: "from-red-500/10 to-red-600/10",
                },
                {
                  icon: "⭐",
                  title: "Featured Creator Spotlight",
                  description:
                    "Prime platform placement during our official launch period",
                  gradient: "from-orange-500/10 to-red-500/10",
                },
                {
                  icon: "📰",
                  title: "Showcase Newsletter Feature",
                  description:
                    "Spotlight in our inaugural Creator Spotlight edition",
                  gradient: "from-purple-500/10 to-red-500/10",
                },
                {
                  icon: "🚀",
                  title: "Early Access Priority",
                  description:
                    "First access to new features and submission opportunities",
                  gradient: "from-blue-500/10 to-red-500/10",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="group relative bg-linear-to-br from-black/50 to-black/30 border border-white/10 rounded-2xl p-6 hover:border-red-500/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/10"
                >
                  {/* Background Glow */}
                  <div
                    className={`absolute inset-0 bg-linear-to-br ${feature.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`}
                  ></div>

                  <div className="flex items-start space-x-4">
                    <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-white mb-3">
                        {feature.title}
                      </h4>
                      <p className="text-gray-300 text-lg leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Value Proposition */}
          <div className="bg-linear-to-r from-black via-red-950/20 to-black border-l-4 border-red-600 rounded-r-2xl p-8 mb-12">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6">
                Why This Matters for Creators
              </h3>
              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-6">
                The Founder's Package isn't just about early access—it's about
                establishing your presence from day one in a platform built
                specifically for creative independence and direct audience
                connection.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-red-300 font-semibold">
                <span className="bg-red-900/30 px-4 py-2 rounded-lg">
                  🚀 Launch Advantage
                </span>
                <span className="bg-red-900/30 px-4 py-2 rounded-lg">
                  ⭐ Premium Visibility
                </span>
                <span className="bg-red-900/30 px-4 py-2 rounded-lg">
                  💎 Exclusive Resources
                </span>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="mb-8">
              <Button name="Claim Your Founder's Bonus Now" />
            </div>

            {/* Urgency Element */}
            <div className="inline-flex items-center space-x-4 bg-red-900/20 border border-red-600/30 rounded-xl px-6 py-3">
              <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
              <p className="text-red-200 font-medium text-lg">
                ⏰ Offer expires December 10, 2025 - Don't miss out!
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Decoration */}
        <div className="w-full flex justify-center mt-20 lg:mt-28">
          <div className="w-32 h-1 bg-linear-to-r from-transparent via-red-600 to-transparent rounded-full"></div>
        </div>
      </div>
    </>
  );
};

export default FoundersBonus;
