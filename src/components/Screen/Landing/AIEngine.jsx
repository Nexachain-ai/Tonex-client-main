// src/components/AIEngine.jsx
import React from "react";
import { motion } from "framer-motion";
import { Cpu, BarChart3, Shield, Clock } from "lucide-react";

const items = [
  {
    icon: Cpu,
    title: "AI Decision Engine",
    desc: "Advanced algorithms analyze market signals and execute actions automatically.",
  },
  {
    icon: BarChart3,
    title: "Data-Driven Analysis",
    desc: "Real-time data processing across multiple markets for informed execution.",
  },
  {
    icon: Shield,
    title: "Risk Controls",
    desc: "Built-in safeguards and contract rules reduce operational risk.",
  },
  {
    icon: Clock,
    title: "24/7 Automation",
    desc: "Always-on monitoring and execution without manual intervention.",
  },
];

const AIEngine = () => {
  return (
    <section className="relative py-20 bg-rich-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="gradient-text">AI Trading Engine</span>
          </h2>
          <p className="text-beaver text-lg">
            Intelligent automation designed for transparent, contract-based
            execution.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={i}
              className="bg-space-cadet/80 border border-delft-blue rounded-2xl p-6 text-center backdrop-blur-sm"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-chamoisee/20 flex items-center justify-center">
                <item.icon className="w-7 h-7 text-ecru" />
              </div>
              <h3 className="text-xl font-semibold text-ecru mb-2">
                {item.title}
              </h3>
              <p className="text-beaver text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIEngine;
