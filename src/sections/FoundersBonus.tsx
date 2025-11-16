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
      value: "~$300",
      requirements: "Free with early signup",
      gradient: "from-yellow-600/20 to-yellow-800/10",
      border: "border-yellow-600/40",
      badge: "🥉 BRONZE",
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
    },
  ];

  const addOns = [
    "📈 Referral Rewards: Earn money through referrals",
    "🎫 Early Access to Creator Marketplace: Test & sell exclusive content, workshops, and digital products",
    "💡 Beta Tester Role: Help shape future features & earn rewards for bug reports or feedback",
  ];

  return (
    <div className="w-full min-h-fit bg-linear-to-tl from-black via-black to-blue-950/50 px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
      {/* Header Section */}
      <div className="w-full text-center mb-16 lg:mb-10">
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white mb-4 tracking-tight">
          <img
            src="/img/logo.png"
            alt="TV-ish"
            className="inline-block h-[1.5em] align-middle mx-1 lg:-mt-10.75 md:-mt-7 sm:-mt-7 -mt-6 lg:-mr-5 md:-mr-3 sm:-mr-2 -mr-1 lg:-ml-6 md:-ml-4 sm:-ml-3 -ml-2"
          />{" "}
          <span className="text-blue-600 italic">Founder</span> Packages
        </h1>
        <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-10"></div>
      </div>

      {/* Founder Packages Grid */}
      <div className="w-full max-w-7xl mx-auto mb-16 lg:mb-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`group relative bg-linear-to-br from-black/60 to-black/40 border-2 rounded-3xl p-8 hover:border-blue-600/50 transition-all duration-500 cursor-pointer hover:scale-105 border-blue-900/30`}
            >
              {/* Package Badge */}
              <div className="text-center mb-6">
                <div className="inline-flex items-center space-x-2 bg-blue-900/30 border border-blue-600/40 rounded-full px-4 py-2 mb-4">
                  <span className="text-lg">{pkg.badge.split(" ")[0]}</span>
                  <span className="text-blue-200 text-sm font-bold tracking-widest">
                    {pkg.badge.split(" ")[1]}
                  </span>
                </div>

                <h2 className="text-2xl lg:text-4xl font-bold text-white mb-2">
                  {pkg.tier}
                </h2>
                <p className="text-2xl text-blue-400 font-semibold mb-2">
                  {pkg.subtitle}
                </p>
                <p className="text-sm text-gray-400 mb-4">{pkg.limit}</p>
              </div>

              {/* Perfect For */}
              <div className="bg-blue-900/30 border-l-4 border-blue-600 pl-6 rounded-r-lg p-2 mb-6">
                <p className="text-white text-sm font-bold text-left">
                  "Perfect for: {pkg.perfectFor}"
                </p>
              </div>

              {/* Includes */}
              <div className="space-y-4 mb-6">
                <h3 className="text-2xl font-bold text-white mb-3">
                  Includes:
                </h3>
                <ul className="space-y-3">
                  {pkg.includes.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="flex items-start space-x-3 text-gray-300 text-sm lg:text-base"
                    >
                      <span className="text-blue-400 mt-0.5 shrink-0">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Value & Requirements */}
              <div className="border-t border-blue-900/30 pt-6 space-y-3">
                {/* <div className="flex justify-between items-center">
                  <span className="text-gray-400 font-semibold">Value:</span>
                  <span className="text-white font-bold text-5xl">
                    {pkg.value}
                  </span>
                </div> */}
                <div className="bg-blue-600/20 rounded-lg p-3 border border-blue-900/20 mt-8">
                  <p className="text-blue-300 text-sm text-center font-semibold">
                    {pkg.requirements}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Optional Add-Ons */}
      <div className="w-full max-w-7xl mx-auto mb-16 lg:mb-20">
        <div className="relative group">
          {/* Animated Background Glow */}
          <div className="absolute -inset-4 bg-linear-to-r from-blue-600/20 to-blue-400/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700 -z-10"></div>

          {/* Main Container */}
          <div className="relative bg-linear-to-br from-black/80 to-blue-950/30 border-2 border-blue-900/30 rounded-3xl p-8 lg:p-10 backdrop-blur-sm overflow-hidden">
            {/* Floating Particles */}
            <div className="absolute top-4 right-6 w-3 h-3 bg-blue-500 rounded-full opacity-60 animate-ping"></div>
            <div className="absolute bottom-8 left-8 w-2 h-2 bg-blue-400 rounded-full opacity-40 animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-10 w-1 h-1 bg-blue-300 rounded-full opacity-30 animate-bounce delay-500"></div>

            {/* Header Section */}
            <div className="text-center mb-5 relative z-10">
              <div className="inline-flex items-center space-x-3 bg-linear-to-r from-blue-600 to-blue-600 rounded-full px-6 py-3 mb-6 shadow-lg">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                <span className="text-white text-sm font-bold tracking-widest">
                  OPTIONAL ADD-ONs FOR ALL TIERS
                </span>
              </div>
            </div>

            {/* Enhanced Add-Ons Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 relative z-10">
              {addOns.map((addOn, index) => (
                <div
                  key={index}
                  className="group/card relative bg-linear-to-br from-black/60 to-blue-950/20 border-2 border-blue-900/40 rounded-2xl p-6 lg:p-7 hover:border-blue-500/60 transition-all duration-500 hover:transform hover:scale-105 cursor-pointer overflow-hidden"
                >
                  {/* Card Background Effects */}
                  <div className="absolute inset-0 bg-linear-to-br from-blue-600/5 to-blue-400/3 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500"></div>

                  {/* Animated Corner Accents */}
                  <div className="absolute top-3 left-3 w-3 h-3">
                    <div className="w-full h-full border-t-2 border-l-2 border-blue-500 rounded-tl-lg opacity-0 group-hover/card:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="absolute bottom-3 right-3 w-3 h-3">
                    <div className="w-full h-full border-b-2 border-r-2 border-blue-500 rounded-br-lg opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 delay-150"></div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon Header */}
                    <div className="text-center mb-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-600/20 rounded-xl mb-3 group-hover/card:scale-110 transition-transform duration-300">
                        <span className="text-xl">{addOn.split(" ")[0]}</span>
                      </div>
                    </div>

                    {/* Text Content */}
                    <p className="text-gray-300 text-sm lg:text-base leading-relaxed text-center group-hover/card:text-white transition-colors duration-300 font-medium">
                      {addOn}
                    </p>
                  </div>

                  {/* Hover Shine Effect */}
                  <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover/card:translate-x-full transition-transform duration-1000"></div>
                </div>
              ))}
            </div>
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

export default FoundersBonus;
