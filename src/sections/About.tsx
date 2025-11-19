const About = () => {
  const features = [
    {
      icon: "💰",
      title: "Fair Pay, No Delays",
      description: "Get your revenue instantly through AVOD, SVOD, or PPV.",
    },
    {
      icon: "🌍",
      title: "Built for All Creators",
      description:
        "Filmmakers, podcasters, musicians, gamers, educators — your voice belongs here.",
    },
    {
      icon: "🎥",
      title: "Freedom to Create",
      description: "No algorithms burying your art; your fans see YOU first.",
    },
  ];

  return (
    <div className="w-full min-h-fit bg-linear-to-br from-black via-black to-blue-950/50 px-4 sm:px-6 lg:px-8 py-12 lg:py-24">
      {/* Header Section */}
      <div className="w-full text-center mb-16 lg:mb-10">
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white mb-4 tracking-tight">
          What Makes{" "}
          <img
            src="/img/logo.png"
            alt="TV-ish"
            className="inline-block h-[1.5em] align-middle mx-1 lg:-mt-10.75 md:-mt-7 sm:-mt-7 -mt-6 lg:-mr-5 md:-mr-3 sm:-mr-2 -mr-1 lg:-ml-6 md:-ml-4 sm:-ml-3 -ml-2"
          />{" "}
          <span className="text-blue-600 italic">Different?</span>
        </h1>
        <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-10"></div>
        <p className="text-2xl sm:text-3xl lg:text-4xl text-blue-200 font-bold leading-relaxed from-blue-400 to-blue-600 bg-clip-text italic">
          "We built TV-ish for creators — Not corporations."
        </p>
      </div>

      {/* Main Content Section */}
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 lg:gap-12 items-center mx-auto">
          {/* Text Content */}
          <div className="text-center">
            <p className="text-xl sm:text-2xl lg:text-3xl text-gray-200 leading-relaxed mb-6 sm:mb-8 md:mb-10 max-w-4xl mx-auto ">
              You keep more of your{" "}
              <span className="text-blue-600 font-bold italic">revenue</span>,
              own your{" "}
              <span className="text-white font-bold italic">
                rights, and connect
              </span>{" "}
              directly with your audience.
            </p>
          </div>
        </div>

        <div className="w-full mb-16 lg:mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-linear-to-br from-black/60 to-blue-950/30 border border-blue-900/30 rounded-2xl p-8 hover:border-blue-600/50 transition-all duration-500 hover:transform hover:scale-105 cursor-pointer"
              >
                <div className="text-center mb-6">
                  <div className="text-4xl lg:text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-lg lg:text-xl text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Decoration */}
      <div className="w-full flex justify-center mt-16 lg:mt-24">
        <div className="w-32 h-1 bg-linear-to-r from-transparent via-blue-600 to-transparent rounded-full"></div>
      </div>
    </div>
  );
};

export default About;
