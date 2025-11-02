import { useState } from "react";
import { FaGoogle, FaFacebook, FaLinkedin } from "react-icons/fa";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      // Handle success
    }, 2000);
  };

  return (
    <>
      <div
        id="signup"
        className="w-full min-h-screen bg-linear-to-tl from-black via-black to-red-950 px-4 sm:px-6 lg:px-8 py-12 lg:py-20 relative overflow-hidden"
      >
        {/* Animated Background Elements */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-red-600/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-red-500/3 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-red-400/2 rounded-full blur-3xl animate-pulse delay-500"></div>

        {/* Header Section */}
        <div className="w-full text-center mb-16 lg:mb-24">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white mb-4 tracking-tight">
            Be The{" "}
            <span className="relative">
              <span className="text-red-600 relative z-10">First</span>
            </span>
          </h1>
          <div className="w-24 h-1 bg-red-600 mx-auto rounded-full"></div>
          <p className="text-xl sm:text-2xl lg:text-3xl text-gray-300 mt-8 max-w-4xl mx-auto leading-relaxed">
            Join the elite group of creators who get{" "}
            <span className="text-red-600 font-semibold">first access</span> to
            our submission platform
          </p>
        </div>

        {/* Main Content */}
        <div className="w-full max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 lg:gap-24 items-start">
            {/* Left Content - Enhanced Benefits */}
            <div className="space-y-8">
              {/* Main Benefit Card */}
              <div className="relative group">
                <div className="absolute -inset-4 bg-linear-to-r from-red-600/10 to-red-400/5 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-linear-to-br from-black/60 to-black/40 border-2 border-red-600/20 rounded-2xl p-8 backdrop-blur-sm">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="text-4xl">🎯</div>
                    <div>
                      <h3 className="text-3xl font-bold text-white">
                        Priority Submission Access
                      </h3>
                      <p className="text-red-300 text-lg">
                        Skip the line, be seen first
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-red-600/10 rounded-xl border border-red-600/20">
                      <div className="text-2xl font-bold text-white">24h</div>
                      <div className="text-red-300 text-sm">Early Access</div>
                    </div>
                    <div className="text-center p-4 bg-red-600/10 rounded-xl border border-red-600/20">
                      <div className="text-2xl font-bold text-white">2x</div>
                      <div className="text-red-300 text-sm">Faster Review</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Benefits Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  {
                    icon: "⚡",
                    title: "Instant Notification",
                    description: "Be the first to know when we launch",
                  },
                  {
                    icon: "🎁",
                    title: "Exclusive Resources",
                    description: "Get creator toolkit before anyone else",
                  },
                  {
                    icon: "👑",
                    title: "Founder Status",
                    description: "Earn early adopter recognition",
                  },
                  {
                    icon: "💬",
                    title: "Direct Support",
                    description: "Priority access to our team",
                  },
                ].map((benefit, index) => (
                  <div
                    key={index}
                    className="bg-linear-to-br from-black/40 to-black/20 border border-white/5 rounded-xl p-6 group hover:border-red-500/30 hover:transform hover:scale-105 transition-all duration-300"
                  >
                    <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                      {benefit.icon}
                    </div>
                    <h4 className="text-xl font-bold text-white mb-2">
                      {benefit.title}
                    </h4>
                    <p className="text-gray-400 text-sm">
                      {benefit.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Progress Bar */}
              <div className="bg-black/30 border border-white/5 rounded-2xl p-6">
                <div className="flex justify-between text-white mb-3">
                  <span className="font-semibold">
                    Waitlist Spots Filling Fast
                  </span>
                  <span className="text-white">68%</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-3">
                  <div
                    className="bg-linear-to-r from-red-600 to-red-500 h-3 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: "68%" }}
                  ></div>
                </div>
                <p className="text-gray-400 text-sm mt-3">
                  Join 500+ creators who already secured their spot
                </p>
              </div>
            </div>

            {/* Right Content - Enhanced Signup Form */}
            <div className="relative">
              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-red-500 rounded-full opacity-20 animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-red-400 rounded-full opacity-30 animate-bounce delay-500"></div>

              <div className="relative">
                <div className="absolute -inset-6 bg-linear-to-r from-red-600/20 to-red-400/10 rounded-3xl blur-2xl opacity-60"></div>
                <div className="relative bg-linear-to-br from-black/80 to-black/60 border-2 border-red-600/30 rounded-3xl p-10 lg:p-12 shadow-2xl shadow-red-500/10 backdrop-blur-sm">
                  {/* Form Header */}
                  <div className="text-center mb-10">
                    <div className="inline-flex items-center space-x-2 px-6 py-3 bg-linear-to-r from-red-600 to-red-600 rounded-full mb-6 shadow-lg">
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                      <span className="text-white text-sm font-bold tracking-widest">
                        LIMITED SPOTS AVAILABLE
                      </span>
                    </div>
                    <h3 className="text-4xl font-bold text-white mb-4 bg-linear-to-r from-white to-red-200 bg-clip-text">
                      Secure Your Spot
                    </h3>
                    <p className="text-xl text-gray-300">
                      Join the inner circle of launch creators
                    </p>
                  </div>

                  {/* Enhanced Email Form */}
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="relative">
                      <label
                        htmlFor="email"
                        className="block text-white font-semibold text-lg mb-4"
                      >
                        Your Professional Email:
                      </label>
                      <div className="relative">
                        <input
                          type="email"
                          id="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="your.best@studio.com"
                          className="w-full bg-black/50 border-2 border-white/10 rounded-2xl px-6 py-5 text-white placeholder-gray-500 focus:outline-none focus:border-red-600 focus:ring-4 focus:ring-red-500/20 transition-all duration-300 text-lg"
                          required
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`cursor-pointer w-full bg-linear-to-r from-red-600 to-red-600 hover:from-red-600 hover:to-red-600 text-white font-bold py-5 px-8 rounded-2xl transition-all duration-300 transform hover:scale-102 shadow-2xl hover:shadow-red-500/30 flex items-center justify-center space-x-4 text-lg ${
                        isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                      }`}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          <span>Securing Your Spot...</span>
                        </>
                      ) : (
                        <>
                          <span>Register Now</span>
                        </>
                      )}
                    </button>
                  </form>

                  {/* Enhanced Social Signup */}
                  <div className="mt-10">
                    <div className="flex items-center mb-6">
                      <div className="flex-1 h-px bg-linear-to-r from-transparent to-gray-700"></div>
                      <span className="px-4 text-gray-500 text-sm font-semibold">
                        QUICK JOIN WITH
                      </span>
                      <div className="flex-1 h-px bg-linear-to-r from-gray-700 to-transparent"></div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {[
                        {
                          name: "Google",
                          icon: <FaGoogle className="text-red-600" />,
                          color: "from-red-500/10 to-red-600/10",
                          border: "hover:border-red-600",
                        },
                        {
                          name: "Facebook",
                          icon: <FaFacebook className="text-red-600" />,
                          color: "from-red-500/10 to-red-600/10",
                          border: "hover:border-red-600",
                        },
                        {
                          name: "LinkedIn",
                          icon: <FaLinkedin className="text-red-600" />,
                          color: "from-red-400/10 to-red-500/10",
                          border: "hover:border-red-600",
                        },
                      ].map((social, index) => (
                        <button
                          key={index}
                          className={`cursor-pointer flex items-center justify-center space-x-3 border-2 border-white/5 rounded-xl py-4 px-4 transition-all duration-300 transform hover:scale-105 bg-linear-to-r ${social.color} ${social.border} backdrop-blur-sm`}
                        >
                          <span className="text-2xl">{social.icon}</span>
                          <span className="text-white font-semibold">
                            {social.name}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Trust Badges */}
                  <div className="mt-8 text-center">
                    <div className="flex flex-wrap justify-center gap-6 text-gray-400 text-sm">
                      <div className="flex items-center space-x-2">
                        <span>🔒</span>
                        <span>No Spam Ever</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span>⚡</span>
                        <span>Instant Access</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span>🎯</span>
                        <span>Priority Review</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Bottom Decoration */}
        <div className="w-full flex justify-center mt-20 lg:mt-28 relative z-10">
          <div className="w-48 h-1 bg-linear-to-r from-transparent via-red-600 to-transparent rounded-full shadow-lg shadow-red-600/20"></div>
        </div>
      </div>
    </>
  );
};

export default Signup;
