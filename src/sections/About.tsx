import React from "react";
import { Button } from "../components";

const About = () => {
  return (
    <>
      <div className="w-full min-h-screen bg-gradient-to-br from-black via-black to-red-950 px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        {/* Header Section */}
        <div className="w-full text-center mb-12 lg:mb-20">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white mb-4 tracking-tight">
            What is <span className="text-red-600">TV-ish?</span>
          </h1>
          <div className="w-24 h-1 bg-red-600 mx-auto rounded-full"></div>
        </div>

        {/* Content Section */}
        <div className="w-full max-w-[80vw] mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
            {/* Image Section */}
            <div className="flex-1">
              <div className="relative rounded-lg overflow-hidden">
                <img
                  src="/img/about_poster.png"
                  alt="TV-ish Platform Showcase"
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </div>
            </div>

            {/* Text Content */}
            <div className="flex-1 space-y-6 lg:space-y-8">
              <div className="space-y-4">
                <p className="text-lg sm:text-xl lg:text-2xl text-gray-200 leading-relaxed">
                  <span className="text-red-600 font-semibold">TV-ish</span> is
                  a{" "}
                  <span className="text-white font-bold">
                    creator-first streaming platform
                  </span>{" "}
                  transforming how storytellers connect with audiences. Built
                  for independent filmmakers, studios, and video producers,
                  TV-ish gives creators the tools, freedom, and visibility to
                  share their stories directly with the world.
                </p>

                <div className="bg-red-900/30 border-l-4 border-red-600 pl-6 py-4 rounded-r-lg">
                  <p className="text-xl sm:text-2xl lg:text-3xl text-white font-bold italic">
                    "No gatekeepers. No algorithms deciding your fate."
                  </p>
                  <p className="text-lg text-red-200 mt-2 font-medium">
                    Just creative freedom, real connection, and a community that
                    celebrates every voice.
                  </p>
                </div>
              </div>

              {/* Features List */}
              <div className="space-y-4">
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                  Why Creators{" "}
                  <span className="text-red-600">Choose TV-ish</span>
                </h3>

                <ul className="space-y-4">
                  {[
                    {
                      icon: "🎬",
                      title: "Full Creative Control",
                      description:
                        "Complete ownership and freedom over your work",
                    },
                    {
                      icon: "🚀",
                      title: "Direct Discovery",
                      description:
                        "Get discovered based on talent, not algorithms",
                    },
                    {
                      icon: "🌍",
                      title: "Global Community",
                      description:
                        "Connect with audiences worldwide who value creativity",
                    },
                  ].map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-start space-x-4 p-4 bg-black/40 rounded-xl hover:bg-black/60 transition-all duration-300 group cursor-pointer"
                    >
                      <div className="text-2xl group-hover:scale-110 transition-transform duration-300">
                        {feature.icon}
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-white mb-1">
                          {feature.title}
                        </h4>
                        <p className="text-gray-300 text-lg">
                          {feature.description}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Button */}
              <div className="pt-4">
                <Button name="Join The Waitlist" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Decoration */}
        <div className="w-full flex justify-center mt-16 lg:mt-24">
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent rounded-full"></div>
        </div>
      </div>
    </>
  );
};

export default About;
