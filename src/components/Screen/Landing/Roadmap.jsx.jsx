// src/components/Roadmap.jsx
import React from "react";
import { motion } from "framer-motion";

const phases = [
  { phase: "Phase 1", desc: "Platform launch and core AI deployment." },
  { phase: "Phase 2", desc: "AI optimization and multi-market expansion." },
  { phase: "Phase 3", desc: "Advanced analytics and ecosystem growth." },
  { phase: "Phase 4", desc: "Global scaling and long-term sustainability." },
];

const Roadmap = () => {
  return (
    <section className="py-20 bg-rich-black">
      <div className="max-w-5xl mx-auto px-6">
        <motion.h2
          className="text-4xl lg:text-6xl font-bold text-center mb-16 gradient-text"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Roadmap
        </motion.h2>

        <div className="space-y-6">
          {phases.map((p, i) => (
            <motion.div
              key={i}
              className="bg-space-cadet/80 border border-delft-blue rounded-2xl p-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              <h3 className="text-ecru font-semibold mb-2">{p.phase}</h3>
              <p className="text-beaver text-sm">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
