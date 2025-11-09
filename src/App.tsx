import { useEffect } from "react";
import {
  HeroSection,
  About,
  LeadCapture,
  FoundersBonus,
  WhyJoinNow,
  Signup,
  Footer,
} from "./sections";
import { ScrollToTopButton } from "./components";

const App = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="w-full h-full bg-black selection:bg-red-600/30">
        <ScrollToTopButton />
        <HeroSection />
        <About />
        <LeadCapture />
        <WhyJoinNow />
        <FoundersBonus />
        <Signup />
        <Footer />
      </div>
    </>
  );
};

export default App;
