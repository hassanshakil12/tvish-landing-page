import React from "react";
import {
  HeroSection,
  About,
  LeadCapture,
  FoundersBonus,
  WhyJoinNow,
  Signup,
  Footer,
} from "./sections";

const App = () => {
  return (
    <>
      <div className="w-full h-full bg-black">
        <HeroSection />
        <About />
        <LeadCapture />
        <FoundersBonus />
        <WhyJoinNow />
        <Signup />
        <Footer />
      </div>
    </>
  );
};

export default App;
