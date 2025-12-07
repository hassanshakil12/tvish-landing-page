import type { MouseEvent } from "react";
import { useState, useEffect } from "react";
import {
  SilverPopup,
  GoldInfoPopup,
  PackageCard,
  AddOnCard,
} from "../components";

const FoundersBonus = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isSilverPopupOpen, setIsSilverPopupOpen] = useState(false);
  const [isGoldPopupOpen, setIsGoldPopupOpen] = useState(false);

  const packages = [
    {
      title: "Bronze",
      tier: "🥉 Bronze Founder",
      subtitle: "The Early Adopter",
      limit: "(For the first 1,000 creators)",
      perfectFor:
        "Independent filmmakers, vloggers, musicians, or podcasters just starting to monetize.",
      includes: [
        "Founders Badge on your profile & videos",
        "90 days, 90/10 revenue split",
        "Priority listing in the 'New Creator' section on launch week",
        "Access to advanced analytics dashboard (early beta)",
        "Invitation to the private TV-ish Chat Room",
        "Name featured on the official 'Founders Wall' landing page",
      ],
      value: "~$350",
      requirements: "Free with early signup",
      gradient: "from-yellow-600/20 to-yellow-800/10",
      border: "border-yellow-600/40",
      badge: "🥉 BRONZE",
      button: {
        type: "link" as const,
        text: "Claim Bronze Founder",
        href: "#signup",
      },
    },
    {
      title: "Silver",
      tier: "🥈 Silver Founder",
      subtitle: "The Builder",
      limit: "(For top 500 verified creators)",
      perfectFor:
        "Mid-level creators, filmmakers, or influencers ready to grow their audience and income.",
      includes: [
        "6 months 90/10 revenue split",
        "Free onboarding audit includes content feedback + monetization setup guidance",
        "$150 TV-ish ad credit for promoting your channel or videos",
        "Exclusive referral code",
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
      title: "Gold",
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
        "Access to private 'Founders Summit'",
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

  useEffect(() => {
    const checkScreenSize = () => {
      const mobile = window.innerWidth < 1280;
      setIsMobile(mobile);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Smooth scroll function for Bronze package
  const handleBronzeRedirect = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    const targetId = isMobile ? "signup-mobile" : "signup";
    const element = document.getElementById(targetId);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      setTimeout(() => {
        element.setAttribute("tabindex", "-1");
        element.focus();
        element.removeAttribute("tabindex");
      }, 1000);
    } else {
      const fallbackElement = document.getElementById("signup");
      if (fallbackElement) {
        fallbackElement.scrollIntoView({ behavior: "smooth" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  };

  // Handle Silver button click
  const handleSilverButtonClick = () => {
    setIsSilverPopupOpen(true);
  };

  // Handle Gold button click
  const handleGoldInterest = () => {
    setIsGoldPopupOpen(true);
  };

  return (
    <div className="w-full min-h-fit bg-linear-to-tl from-black via-black to-blue-950/50 px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
      {/* Silver Popup */}
      <SilverPopup
        isOpen={isSilverPopupOpen}
        onClose={() => setIsSilverPopupOpen(false)}
      />

      {/* Gold Info Popup */}
      <GoldInfoPopup
        isOpen={isGoldPopupOpen}
        onClose={() => setIsGoldPopupOpen(false)}
      />

      {/* Header Section */}
      <div className="w-full text-center mb-12 lg:mb-16">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white mb-4 tracking-tight">
          <img
            src="/img/logo.png"
            alt="TV-ish"
            className="inline-block h-[1.5em] align-middle mx-1 lg:-mt-10.75 md:-mt-7 sm:-mt-7 -mt-6 lg:-mr-5 md:-mr-3 sm:-mr-2 -mr-1 lg:-ml-6 md:-ml-4 sm:-ml-3 -ml-2"
          />{" "}
          <span className="text-secondary-blue italic">Founder</span> Packages
        </h1>
        <div className="w-24 h-1 bg-secondary-blue mx-auto rounded-full mb-6"></div>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Exclusive benefits for our founding creators. Choose your path and
          grow with us.
        </p>
      </div>

      {/* Founder Packages Grid */}
      <div className="w-full max-w-7xl mx-auto mb-16 lg:mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
          {packages.map((pkg, index) => (
            <PackageCard
              key={index}
              pkg={pkg}
              isMobile={isMobile}
              onBronzeClick={handleBronzeRedirect}
              onSilverClick={handleSilverButtonClick}
              onGoldClick={handleGoldInterest}
            />
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
                <AddOnCard key={index} addOn={addOn} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Decoration */}
      <div className="w-full flex justify-center mt-12 lg:mt-16">
        <div className="w-32 h-1 bg-linear-to-r from-transparent via-secondary-blue to-transparent rounded-full"></div>
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
