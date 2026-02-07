import React, { useState } from "react";
import { LandingRouters } from "../../../constants/routes";
import { useNavigate } from "react-router-dom";

const faqData = [
  {
    question: "Why choose 4Exchai instead of manual trading?",
    answer: [
      "AI-powered agents analyze markets and execute trades automatically.",
      "No need for constant monitoring or manual decision-making.",
      "Designed to reduce emotional and human trading errors.",
      "Users participate through transparent, contract-based mechanisms.",
      "Suitable for beginners and experienced participants alike.",
    ],
    icon: "🤖",
    color: "from-green-500 to-emerald-500",
  },
  {
    question: "How does the 4Exchai platform work?",
    answer: [
      "4Exchai operates using intelligent AI trading agents.",
      "Trades are executed automatically based on data-backed strategies.",
      "Smart contracts ensure transparency and predefined execution rules.",
      "The platform removes intermediaries and manual processes.",
    ],
    icon: "⚙️",
    color: "from-teal-500 to-green-500",
  },
  {
    question: "What makes 4Exchai secure?",
    answer: [
      "Contract-based operations reduce centralized control.",
      "Transactions follow predefined smart contract logic.",
      "User participation is recorded transparently on the blockchain.",
      "Security-first infrastructure with continuous monitoring.",
    ],
    icon: "🛡️",
    color: "from-emerald-500 to-lime-500",
  },
  {
    question: "How can I start using 4Exchai?",
    answer: [
      "Create an account on the 4Exchai platform.",
      "Connect a supported wallet for transactions.",
      "Choose a participation package that suits you.",
      "AI trading agents begin operating automatically.",
    ],
    icon: "🚀",
    color: "from-green-400 to-teal-500",
  },
  {
    question: "Do I remain in control of my participation?",
    answer: [
      "Yes, users maintain full control over their accounts.",
      "Participation rules are enforced automatically via contracts.",
      "No hidden conditions or manual intervention.",
      "Transparency is maintained at every step.",
    ],
    icon: "🔐",
    color: "from-lime-500 to-green-600",
  },
];

const Faq1 = () => {
  const navigate = useNavigate();
  const [openIndex, setOpenIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative container mx-auto lg:px-[115px] py-20" id="faq">
      {/* Header */}
      <div className="relative flex flex-col items-center gap-6 max-w-[800px] mx-auto text-center mb-16">
        <div className="relative animate-float-question">
          <div className="absolute inset-0 bg-chamoisee/30 rounded-2xl blur-xl animate-pulse-glow" />
          <div className="relative flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-chamoisee to-ecru shadow-2xl">
            {/* <span className="text-3xl">❓</span> */}
          </div>
        </div>

        <h2 className="text-4xl lg:text-6xl font-bold leading-tight">
          <span className="gradient-text">Frequently Asked</span>
          <br />
          <span className="text-ecru">Questions</span>
        </h2>

        <p className="text-lg lg:text-xl text-beaver max-w-2xl">
          Everything you need to know about{" "}
          <span className="text-ecru font-semibold">4Exchai</span>.  
          Still need help?{" "}
          <span className="text-chamoisee cursor-pointer hover:underline">
            Contact our support team
          </span>
        </p>
      </div>

      {/* FAQ ITEMS */}
      <div className="relative max-w-[900px] mx-auto">
        <div className="flex flex-col gap-4">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;
            const isHovered = hoveredIndex === index;

            return (
              <div
                key={index}
                className="relative"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div
                  onClick={() => toggleFAQ(index)}
                  className={`relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-300 ${
                    isOpen
                      ? "bg-space-cadet border border-chamoisee shadow-xl scale-[1.02]"
                      : "glass-card hover:bg-white/5 hover:scale-[1.01]"
                  }`}
                >
                  <div className="flex items-start gap-4 p-6 lg:p-8">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-2xl`}
                    >
                      {item.icon}
                    </div>

                    <div className="flex-1">
                      <h3 className="text-lg lg:text-xl font-semibold text-ecru leading-relaxed">
                        {item.question}
                      </h3>
                    </div>

                    <button className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                      +
                    </button>
                  </div>

                  {isOpen && (
                    <div className="px-6 lg:px-8 pb-6">
                      <div className="mb-6 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                      <div className="space-y-3">
                        {item.answer.map((line, idx) => (
                          <div
                            key={idx}
                            className="flex items-start gap-3 text-beaver"
                          >
                            <span className="text-chamoisee">✔</span>
                            <span>{line}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <div className="glass-card rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-ecru mb-3">
              Still have questions?
            </h3>
            <p className="text-beaver mb-6">
              Our support team is available to help you anytime.
            </p>
            <button
              className="px-8 py-3 bg-gradient-to-r from-chamoisee to-ecru rounded-full font-semibold text-space-cadet hover:opacity-90 transition"
              onClick={() => navigate(LandingRouters.USER_REGISTER)}
            >
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq1;
