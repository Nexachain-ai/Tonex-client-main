import React from "react";
import { motion } from "framer-motion";
import { Wallet, Cpu, TrendingUp, ShieldCheck, Globe, BarChart3 } from "lucide-react";

const steps = [
  {
    title: "Connect Wallet",
    desc: "Securely connect your supported blockchain wallet to interact directly with the 4Exchai smart contract system.",
    icon: Wallet,
  },
  {
    title: "Activate AI Contract",
    desc: "Select and activate an AI-driven smart contract that governs automated trading logic on-chain.",
    icon: Cpu,
  },
  {
    title: "Automated Market Execution",
    desc: "AI agents continuously analyze market data and execute actions automatically without manual intervention.",
    icon: TrendingUp,
  },
  {
    title: "On-Chain Transparency",
    desc: "All actions and results are processed by immutable smart contracts and recorded publicly on the blockchain.",
    icon: ShieldCheck,
  },
  {
    title: "Global Accessibility",
    desc: "Participate from anywhere in the world with uninterrupted access to decentralized infrastructure.",
    icon: Globe,
  },
  {
    title: "Verifiable Platform Activity",
    desc: "Trading volume, interactions, and system activity can be independently verified via blockchain explorers.",
    icon: BarChart3,
  },
];

const HowItWorks = () => {
  return (
    <section className="relative py-20 bg-rich-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Heading */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="gradient-text">How 4Exchai Operates</span>
          </h2>
          <p className="text-beaver text-lg leading-relaxed">
            A decentralized workflow powered by smart contracts, automation,
            and AI-driven logic — designed for transparency, security, and
            continuous operation.
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="bg-space-cadet/80 border border-delft-blue rounded-2xl p-6 text-center backdrop-blur-sm"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-chamoisee/20 flex items-center justify-center">
                <step.icon className="w-7 h-7 text-ecru" />
              </div>
              <h3 className="text-xl font-semibold text-ecru mb-2">
                {step.title}
              </h3>
              <p className="text-beaver text-sm leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Note */}
        <motion.div
          className="mt-16 text-center max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-beaver text-sm leading-relaxed">
            The 4Exchai ecosystem is designed to operate without centralized
            control. Smart contracts execute predefined logic autonomously,
            ensuring predictable behavior, verifiable data, and uninterrupted
            system availability.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
