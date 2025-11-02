import React from "react";
import { Header, HeroBackground } from "../components";

const HeroSection = () => {
  return (
    <div className="w-full h-[100vh] bg-black">
      <Header />
      <HeroBackground />
    </div>
  );
};

export default HeroSection;
