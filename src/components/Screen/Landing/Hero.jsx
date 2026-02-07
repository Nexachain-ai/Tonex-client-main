import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Globe, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { LandingRouters } from "../../../constants/routes";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen bg-rich-black overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
        <div className="min-h-screen flex flex-col items-center justify-center text-center py-24">
          {/* Top Label */}
          <motion.span
            className="uppercase tracking-widest text-xs text-beaver mb-6"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            The AI Trading Platform
          </motion.span>

          {/* Main Heading */}
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight max-w-4xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <span className="text-beaver">AI Automation</span>{" "}
            <span className="gradient-text">and Smart Agents</span>
            <br />
            <span className="text-beaver">for Transparent Digital Markets</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="mt-8 text-lg md:text-xl text-beaver max-w-2xl leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            4Exchai leverages intelligent automation and blockchain-based smart
            contracts to enable verifiable, decentralized market participation
            without manual control.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="mt-10 flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <button
              className="group bg-gradient-to-r from-[#bfc0c8] via-[#cbcbd2] to-[#d8d9df] 
             text-[#20253C] font-bold py-4 px-8 rounded-xl text-lg 
             flex items-center gap-3 justify-center 
             hover:brightness-105 transition-all"
              onClick={() => navigate(LandingRouters.USER_REGISTER)}
            >
              Get Started
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              className="border-2 border-ecru text-ecru font-bold py-4 px-8 rounded-xl text-lg bg-space-cadet/50"
              onClick={() => navigate(LandingRouters.USER_LOGIN)}
            >
              Explore Platform
            </button>
          </motion.div>

          {/* Trust / Feature Row */}
          <motion.div
            className="mt-14 flex flex-wrap justify-center gap-8 text-ecru text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4" />
              Smart Contract Secured
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4" />
              AI-Driven Automation
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4" />
              Global & Decentralized
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
