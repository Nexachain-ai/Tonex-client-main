import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Lock, Eye, Cpu, CheckCircle } from "lucide-react";

const items = [
  {
    icon: ShieldCheck,
    title: "Blockchain Verified",
    desc: "Every transaction and system action is permanently recorded on the blockchain and can be independently verified.",
  },
  {
    icon: Lock,
    title: "Immutable Smart Contracts",
    desc: "Once deployed, contract logic cannot be modified, ensuring fixed rules and long-term platform integrity.",
  },
  {
    icon: Eye,
    title: "Complete Transparency",
    desc: "All contract interactions, balances, and results remain publicly accessible at all times.",
  },
  {
    icon: Cpu,
    title: "Fully Automated Execution",
    desc: "AI logic and smart contracts operate without human intervention or centralized control.",
  },
];

const Security = () => {
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
            <span className="gradient-text">Security & Transparency</span>
          </h2>
          <p className="text-beaver text-lg leading-relaxed">
            4Exchai is designed with security-first architecture, combining
            immutable smart contracts, on-chain verification, and fully
            automated execution to eliminate trust-based risks.
          </p>
        </motion.div>

        {/* Security Cards */}
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

        {/* Bottom Assurance */}
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
                <CheckCircle className="w-6 h-6 text-ecru" />
              </div>
            </div>
            <p className="text-beaver text-sm leading-relaxed">
              The platform operates without administrators, manual overrides,
              or hidden permissions. All rules are enforced by code and secured
              by blockchain consensus.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Security;
