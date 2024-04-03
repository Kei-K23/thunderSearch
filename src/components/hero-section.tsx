import React from "react";
import IntroSection from "./intro-section";
import SearchBox from "./search-box";

const HeroSection = () => {
  return (
    <div className="max-w-[600px] mx-auto space-y-6">
      <IntroSection />
      <SearchBox />
    </div>
  );
};

export default HeroSection;
