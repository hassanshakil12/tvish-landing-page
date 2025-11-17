import type { MouseEvent } from 'react';

const FoundersBonus = () => {
  const packages = [
    {
      tier: "🥉 Bronze Founder",
      subtitle: "The Early Adopter",
      limit: "(For the first 1,000 creators)",
      perfectFor:
        "Independent filmmakers, vloggers, musicians, or podcasters just starting to monetize.",
      includes: [
        "Founders Badge on your profile & videos",
        "90 days with 0% platform fees (keep 100% of revenue)",
        "Priority listing in the 'New Creator' section on launch week",
        "Access to advanced analytics dashboard (early beta)",
        "Invitation to the private TV-ish Creator Discord",
        "Name featured on the official 'Founders Wall' landing page",
      ],
      value: "~$350",
      requirements: "Free with early signup",
      gradient: "from-yellow-600/20 to-yellow-800/10",
      border: "border-yellow-600/40",
      badge: "🥉 BRONZE",
      button: {
        type: "link",
        text: "Claim Bronze Founder",
        href: "#signup",
      },
    },
    {
      tier: "🥈 Silver Founder",
      subtitle: "The Builder",
      limit: "(For top 500 verified creators)",
      perfectFor:
        "Mid-level creators, filmmakers, or influencers ready to grow their audience and income.",
      includes: [
        "180 days 0% platform fees",
        "1 year 90/10 revenue split",
        "Free onboarding audit includes content feedback + monetization setup guidance",
        "$100 TV-ish ad credit for promoting your channel or videos",
        "Exclusive referral code (earn 5% from referrals for 1 year)",
        "Invite to Founders Launch Event (virtual or in-person)",
      ],
      requirements:
        "Free for early creators who upload 3+ videos before launch",
      value: "~$750",
      gradient: "from-gray-400/20 to-gray-600/10",
      border: "border-gray-500/40",
      badge: "🥈 SILVER",
      button: {
        type: "popup",
        text: "Apply for Silver Founder",
      },
    },
    {
      tier: "🥇 Gold Founder",
      subtitle: "The Visionary",
      limit: "(Invite-Only: 100 creators maximum)",
      perfectFor:
        "Established creators, production teams, or media entrepreneurs who want to help shape TV-ish's creator economy.",
      includes: [
        "1 year Founder Status + 1 year 90/10 revenue split",
        "Dedicated Partner Manager for brand deals & collaboration opportunities",
        "Free feature in the 'Founder Spotlight' series",
        "Co-creator opportunities – early access to beta tools, new features, and creator investment options",
        "Exclusive NFT Founder Certificate verifying your role as a platform pioneer",
        "Access to private 'Founders Summit' (annual retreat)",
        "Complimentary TV-ish Merchandise Kit",
      ],
      value: "$2,000+",
      requirements: "Limited to top creators chosen by the TV-ish team",
      gradient: "from-yellow-500/20 to-yellow-700/10",
      border: "border-yellow-500/40",
      badge: "🥇 GOLD",
      note: "Invite Only",
    },
  ];

  const addOns = [
    "📈 Referral Rewards: Earn money through referrals",
    "🎫 Early Access to Creator Marketplace: Test & sell exclusive content, workshops, and digital products",
    "💡 Beta Tester Role: Help shape future features & earn rewards for bug reports or feedback",
  ];

  // Smooth scroll function for Bronze package
  const handleBronzeRedirect = (e: MouseEvent<HTMLAnchorElement>) => {
  e.preventDefault();
  const target = document.querySelector("#signup");
  if (target) {
    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setTimeout(() => {
      target.setAttribute("tabindex", "-1");
      (target as HTMLElement).focus();
      target.removeAttribute("tabindex");
    }, 1000);
  }
};

  // Function to handle Silver button click
  const handleSilverButtonClick = () => {
    // Create and show login popup
    const popup = document.createElement("div");
    popup.className =
      "fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4";
    popup.innerHTML = `
      <div class="relative bg-linear-to-br from-black/90 to-blue-950/80 border-2 border-blue-600/50 rounded-3xl p-6 md:p-8 max-w-md w-full mx-auto shadow-2xl animate-fade-in">
        <!-- Close Button -->
        <button class="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors duration-200 hover:scale-110 transform z-10">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
        
        <!-- Popup Header -->
        <div class="text-center mb-6">
          <div class="inline-flex items-center space-x-2 bg-blue-900/40 border border-blue-600/50 rounded-full px-4 py-2 mb-4">
            <span class="text-blue-200 text-sm font-bold tracking-widest">SILVER FOUNDER</span>
          </div>
          <h3 class="text-2xl font-bold text-white mb-2">Apply for Silver Founder</h3>
          <p class="text-gray-300 text-sm">Enter your email to become a silver founder</p>
        </div>

        <!-- Email Input Section -->
        <div class="space-y-4">
          <div class="relative">
            <input 
              type="email" 
              placeholder="Enter your email address"
              class="w-full bg-black/40 border-2 border-blue-600/30 rounded-xl py-4 px-4 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
            />
            <div class="absolute inset-y-0 right-3 flex items-center">
              <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"/>
              </svg>
            </div>
          </div>

          <button class="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 group/btn relative overflow-hidden">
            <div class="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"></div>
            <span class="relative z-10">Register for Silver</span>
            <svg 
              class="w-4 h-4 relative z-10 group-hover/btn:translate-x-1 transition-transform duration-200" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>

        <!-- Footer Text -->
        <div class="text-center mt-6">
          <p class="text-gray-400 text-xs">By continuing, you agree to our Terms and Privacy Policy</p>
        </div>
      </div>
    `;

    // Add close functionality
    const closeButton = popup.querySelector("button");
    const closePopup = () => {
      popup.style.opacity = "0";
      popup.style.transform = "scale(0.95)";
      setTimeout(() => {
        if (document.body.contains(popup)) {
          document.body.removeChild(popup);
        }
      }, 300);
    };

    if (closeButton) {
      closeButton.addEventListener("click", closePopup);
    }

    // Add backdrop click to close
    popup.addEventListener("click", (e) => {
      if (e.target === popup) {
        closePopup();
      }
    });

    // Add keyboard escape to close
    const handleEscape = (e: { key: string }) => {
      if (e.key === "Escape") {
        closePopup();
        document.removeEventListener("keydown", handleEscape);
      }
    };
    document.addEventListener("keydown", handleEscape);

    document.body.appendChild(popup);

    // Add entrance animation
    setTimeout(() => {
      popup.style.opacity = "1";
    }, 10);

    // Cleanup event listener when popup closes
    popup.addEventListener("transitionend", () => {
      if (!document.body.contains(popup)) {
        document.removeEventListener("keydown", handleEscape);
      }
    });
  };

  // Function to handle Gold package interest
  const handleGoldInterest = () => {
    const popup = document.createElement("div");
    popup.className =
      "fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4";
    popup.innerHTML = `
      <div class="relative bg-linear-to-br from-black/90 to-yellow-950/80 border-2 border-yellow-500/50 rounded-3xl p-6 md:p-8 max-w-md w-full mx-auto shadow-2xl animate-fade-in">
        <!-- Close Button -->
        <button class="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors duration-200 hover:scale-110 transform z-10">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
        
        <!-- Popup Header -->
        <div class="text-center mb-6">
          <div class="inline-flex items-center space-x-2 bg-yellow-900/40 border border-yellow-500/50 rounded-full px-4 py-2 mb-4">
            <span class="text-yellow-200 text-sm font-bold tracking-widest">GOLD FOUNDER</span>
          </div>
          <h3 class="text-2xl font-bold text-white mb-2">Gold Founder Program</h3>
          <p class="text-gray-300 text-sm">Invite-only program for top creators</p>
        </div>

        <div class="text-center mb-6">
          <p class="text-yellow-200 text-lg font-semibold mb-4">🚫 Invite Only</p>
          <p class="text-gray-300 text-sm mb-4">
            The Gold Founder program is exclusively by invitation. Our team actively scouts for exceptional creators who align with our vision.
          </p>
          <p class="text-gray-400 text-xs">
            If you believe you should be considered, please ensure your profile and content are public and showcase your best work.
          </p>
        </div>

        <!-- Footer Text -->
        <div class="text-center mt-6">
          <p class="text-gray-400 text-xs">We'll reach out directly to selected creators</p>
        </div>
      </div>
    `;

    // Add close functionality (same as Silver popup)
    const closeButton = popup.querySelector("button");
    const closePopup = () => {
      popup.style.opacity = "0";
      popup.style.transform = "scale(0.95)";
      setTimeout(() => {
        if (document.body.contains(popup)) {
          document.body.removeChild(popup);
        }
      }, 300);
    };

    if (closeButton) {
      closeButton.addEventListener("click", closePopup);
    }

    popup.addEventListener("click", (e) => {
      if (e.target === popup) {
        closePopup();
      }
    });

    const handleEscape = (e: { key: string }) => {
      if (e.key === "Escape") {
        closePopup();
        document.removeEventListener("keydown", handleEscape);
      }
    };
    document.addEventListener("keydown", handleEscape);

    document.body.appendChild(popup);

    setTimeout(() => {
      popup.style.opacity = "1";
    }, 10);

    popup.addEventListener("transitionend", () => {
      if (!document.body.contains(popup)) {
        document.removeEventListener("keydown", handleEscape);
      }
    });
  };

  return (
    <div className="w-full min-h-fit bg-linear-to-tl from-black via-black to-blue-950/50 px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
      {/* Header Section */}
      <div className="w-full text-center mb-12 lg:mb-16">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white mb-4 tracking-tight">
          <img
            src="/img/logo.png"
            alt="TV-ish"
            className="inline-block h-[1.2em] sm:h-[1.3em] lg:h-[1.5em] align-middle mx-1 lg:-mt-2 md:-mt-1 sm:-mt-1 -mt-1 lg:-mr-2 md:-mr-1 sm:-mr-1 -mr-1 lg:-ml-3 md:-ml-2 sm:-ml-1 -ml-1"
          />{" "}
          <span className="text-blue-600 italic">Founder</span> Packages
        </h1>
        <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Exclusive benefits for our founding creators. Choose your path and
          grow with us.
        </p>
      </div>

      {/* Founder Packages Grid */}
      <div className="w-full max-w-7xl mx-auto mb-16 lg:mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
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
                <p className="text-xl lg:text-2xl text-blue-400 font-semibold mb-2">
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
                <h3 className="text-xl font-bold text-white mb-3">Includes:</h3>
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

                {/* Action Button for Bronze and Silver */}
                {pkg.button ? (
                  <div className="mt-4">
                    {pkg.button.type === "link" ? (
                      <a
                        href={pkg.button.href}
                        onClick={handleBronzeRedirect}
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
                    ) : (
                      <button
                        onClick={handleSilverButtonClick}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 group/btn relative overflow-hidden"
                      >
                        <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"></div>
                        <span className="relative z-10">{pkg.button.text}</span>
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
                    )}
                  </div>
                ) : (
                  // Gold package button (no button in data, but we add one)
                  <div className="mt-4">
                    <button
                      onClick={handleGoldInterest}
                      className="w-full bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 group/btn relative overflow-hidden"
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
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Optional Add-Ons */}
      <div className="w-full max-w-7xl mx-auto mb-16 lg:mb-20">
        <div className="relative group">
          <div className="absolute -inset-2 sm:-inset-4 bg-linear-to-r from-blue-600/20 to-blue-400/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700 -z-10"></div>

          <div className="relative bg-linear-to-br from-black/80 to-blue-950/30 border-2 border-blue-900/30 rounded-3xl p-6 lg:p-8 xl:p-10 backdrop-blur-sm overflow-hidden">
            <div className="absolute top-4 right-6 w-3 h-3 bg-blue-500 rounded-full opacity-60 animate-ping"></div>
            <div className="absolute bottom-8 left-8 w-2 h-2 bg-blue-400 rounded-full opacity-40 animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-10 w-1 h-1 bg-blue-300 rounded-full opacity-30 animate-bounce delay-500"></div>

            <div className="text-center mb-6 relative z-10">
              <div className="inline-flex items-center space-x-3 bg-linear-to-r from-blue-600 to-blue-600 rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-6 shadow-lg">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                <span className="text-white text-xs sm:text-sm font-bold tracking-widest">
                  OPTIONAL ADD-ONs FOR ALL TIERS
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 relative z-10">
              {addOns.map((addOn, index) => (
                <div
                  key={index}
                  className="group/card relative bg-linear-to-br from-black/60 to-blue-950/20 border-2 border-blue-900/40 rounded-2xl p-5 lg:p-6 xl:p-7 hover:border-blue-500/60 transition-all duration-500 hover:transform hover:scale-105 cursor-pointer overflow-hidden"
                >
                  <div className="absolute inset-0 bg-linear-to-br from-blue-600/5 to-blue-400/3 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500"></div>

                  <div className="absolute top-3 left-3 w-3 h-3">
                    <div className="w-full h-full border-t-2 border-l-2 border-blue-500 rounded-tl-lg opacity-0 group-hover/card:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="absolute bottom-3 right-3 w-3 h-3">
                    <div className="w-full h-full border-b-2 border-r-2 border-blue-500 rounded-br-lg opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 delay-150"></div>
                  </div>

                  <div className="relative z-10">
                    <div className="text-center mb-4">
                      <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-blue-600/20 rounded-xl mb-3 group-hover/card:scale-110 transition-transform duration-300">
                        <span className="text-lg sm:text-xl">
                          {addOn.split(" ")[0]}
                        </span>
                      </div>
                    </div>

                    <p className="text-gray-300 text-sm sm:text-base leading-relaxed text-center group-hover/card:text-white transition-colors duration-300 font-medium">
                      {addOn}
                    </p>
                  </div>

                  <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover/card:translate-x-full transition-transform duration-1000"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Decoration */}
      <div className="w-full flex justify-center mt-12 lg:mt-16">
        <div className="w-32 h-1 bg-linear-to-r from-transparent via-blue-600 to-transparent rounded-full"></div>
      </div>

      {/* Add CSS for smooth animations */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fade-in {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default FoundersBonus;
