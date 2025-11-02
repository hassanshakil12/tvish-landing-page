import { ButtonAlt } from "../components";

const WhyJoinNow = () => {
  return (
    <>
      <div className="w-full bg-linear-to-bl from-black via-black to-red-950 min-h-screen bg-black px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        {/* Header Section */}
        <div className="w-full text-center mb-16 lg:mb-24">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white mb-4 tracking-tight">
            Why Join <span className="text-red-600">TV-ish Now?</span>
          </h1>
          <div className="w-24 h-1 bg-red-600 mx-auto rounded-full"></div>
          <p className="text-xl sm:text-2xl lg:text-3xl text-gray-300 mt-8 max-w-4xl mx-auto leading-relaxed">
            This is your moment to shape the future of creator-led streaming
          </p>
        </div>

        {/* Main Content */}
        <div className="w-full max-w-[80vw] mx-auto">
          {/* Benefits Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16 lg:mb-20">
            {[
              {
                icon: "🚀",
                title: "Early Access Advantage",
                description:
                  "Get exclusive tools and submission opportunities before public launch",
                features: [
                  "First access to new features",
                  "Priority submission slots",
                  "Beta testing opportunities",
                ],
              },
              {
                icon: "🎯",
                title: "Influence the Platform",
                description:
                  "Help shape the future of creator-led streaming with your feedback",
                features: [
                  "Direct input on features",
                  "Help define community guidelines",
                  "Shape the creator experience",
                ],
              },
              {
                icon: "⭐",
                title: "Be Seen First",
                description:
                  "Gain premium visibility in the first wave of featured creators",
                features: [
                  "Launch day spotlight",
                  "Featured creator status",
                  "Newsletter prominence",
                ],
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className="group relative bg-linear-to-br from-black/50 to-black/30 border border-white/10 rounded-2xl p-8 hover:border-red-500/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/10"
              >
                {/* Background Glow */}
                <div className="absolute inset-0 bg-linear-to-br from-red-500/5 to-red-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>

                {/* Icon */}
                <div className="text-4xl mb-6 text-center group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white text-center mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-300 text-lg text-center mb-6 leading-relaxed">
                  {benefit.description}
                </p>

                {/* Features */}
                <ul className="space-y-3">
                  {benefit.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-gray-400 group-hover:text-gray-300 transition-colors duration-300"
                    >
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Value Reinforcer */}
          <div className="relative mb-16 lg:mb-20">
            <div className="absolute inset-0 bg-linear-to-r from-red-900/10 to-red-800/5 rounded-2xl blur-lg"></div>
            <div className="relative bg-linear-to-r from-red-900/20 to-red-800/10 border-2 border-red-600/20 rounded-2xl p-8 lg:p-12 text-center">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6">
                  Join a Growing Community of Visionaries
                </h2>
                <p className="text-xl sm:text-2xl text-gray-300 leading-relaxed mb-6">
                  "Be part of the movement redefining how media is made and
                  shared.
                  <span className="text-red-600 font-semibold">
                    {" "}
                    Together, we're building a platform
                  </span>
                  where creators truly own their stories and connect directly
                  with their audience."
                </p>
                <div className="flex flex-wrap justify-center gap-4 mt-8">
                  <span className="bg-red-900/30 px-4 py-2 rounded-lg text-red-200 font-semibold">
                    🎬 500+ Creators Joined
                  </span>
                  <span className="bg-red-900/30 px-4 py-2 rounded-lg text-red-200 font-semibold">
                    🌍 50+ Countries
                  </span>
                  <span className="bg-red-900/30 px-4 py-2 rounded-lg text-red-200 font-semibold">
                    🚀 Growing Daily
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-8">
              Ready to Make Your Mark?
            </h3>
            <p className="text-lg sm:text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Choose your path and join creators who are taking control of their
              creative future
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-6 mb-12">
              <ButtonAlt name="Join the Creator Movement" />
            </div>

            {/* Urgency Note */}
            <div className="inline-flex items-center space-x-4 bg-red-900/20 border border-red-600/30 rounded-xl px-6 py-3">
              <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
              <p className="text-red-200 font-medium text-lg">
                ✨ Limited spots available for early creators
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

export default WhyJoinNow;
