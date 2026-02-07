import React from "react";
import { motion } from "framer-motion";
import { Coins, Globe, Building2, Leaf, Cpu } from "lucide-react";

const items = [
  {
    icon: Coins,
    title: "Digital Asset Markets",
    desc: "AI-driven execution across major blockchain-based assets using smart contracts for transparent and automated participation.",
  },
  {
    icon: Globe,
    title: "Global Market Strategies",
    desc: "Algorithmic logic designed to operate across international financial markets with data-backed decision models.",
  },
  {
    icon: Building2,
    title: "Asset Intelligence",
    desc: "Advanced analytics applied to real-world asset models, enabling structured and data-informed participation.",
  },
  {
    icon: Leaf,
    title: "Sustainable Ventures",
    desc: "Automation and analytics supporting sustainable and long-term ecosystem-oriented initiatives.",
  },
];

const Ecosystem = () => {
  return (
    <section className="relative py-20 bg-rich-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="gradient-text">4Exchai Ecosystem</span>
          </h2>
          <p className="text-beaver text-lg leading-relaxed">
            A multi-layered ecosystem built on AI automation, smart contracts,
            and decentralized infrastructure — designed to support diverse
            market participation through a unified platform.
          </p>
        </motion.div>

        {/* Ecosystem Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={i}
              className="bg-space-cadet/80 border border-delft-blue rounded-2xl p-6 text-center backdrop-blur-sm"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-chamoisee/20 flex items-center justify-center">
                <item.icon className="w-7 h-7 text-ecru" />
              </div>
              <h3 className="text-ecru font-semibold mb-2">
                {item.title}
              </h3>
              <p className="text-beaver text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Context */}
        <motion.div
          className="mt-16 max-w-4xl mx-auto text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <div className="bg-space-cadet/60 border border-delft-blue rounded-2xl p-6">
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 rounded-xl bg-chamoisee/20 flex items-center justify-center">
                <Cpu className="w-6 h-6 text-ecru" />
              </div>
            </div>
            <p className="text-beaver text-sm leading-relaxed">
              All components of the 4Exchai ecosystem are connected through
              autonomous smart contracts. Execution logic, data flow, and system
              interactions are handled programmatically, ensuring consistency,
              transparency, and uninterrupted operation without centralized
              control.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Ecosystem;
