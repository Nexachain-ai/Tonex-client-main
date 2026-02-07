import React, { useState } from "react";
import Hero from "../../components/Screen/Landing/Hero";

import Technology1 from "../../components/Screen/Landing/Technology1";
import Faq1 from "../../components/Screen/Landing/Faq1";
import HowItWorks from "../../components/Screen/Landing/HowItWorks";
import Ecosystem from "../../components/Screen/Landing/Ecosystem";
import BusinessPlan from "../../components/Screen/Landing/BusinessPlan";
import Roadmap from "../../components/Screen/Landing/Roadmap.jsx";
import Security from "../../components/Screen/Landing/Security.jsx";

const LandingPage = () => {
  return (
    <>
      <div className="min-h-screen bg-[#0C0C0C] text-white">
        {/* <Header /> */}
        <div className="pt-20 lg:pt-[60px]">
          <Hero />
          <div className="px-4 lg:px-0">
            <HowItWorks />
            <Ecosystem />
            <BusinessPlan />
            <Security />
        
            <Technology1 />
         <Faq1 />
          </div>
        </div>
        {/* <Footer /> */}
      </div>
      {/* {isClicked && <Login handleClick={handleClick} />} */}
    </>
  );
};

export default LandingPage;
