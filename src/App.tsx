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
import { ScrollToTopButton, ActionButton } from "./components";

const App = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="w-full h-full bg-black selection:bg-blue-600/30">
        <ScrollToTopButton />
        <ActionButton name="Sign up now" />
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
