import React, { useState, useEffect } from 'react';

const techItems = [
  {
    title: 'Autonomous System',
    content:
      'The 4Exchai platform operates through autonomous smart contracts that execute predefined logic without manual control, ensuring reliability and system integrity.',
    icon: '🤖',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'Immutable Rules',
    content:
      'Once deployed, the smart contract logic cannot be modified by developers or third parties, guaranteeing consistent and predictable platform behavior.',
    icon: '🔒',
    color: 'from-purple-500 to-pink-500'
  },
  {
    title: 'On-Chain Transparency',
    content:
      'All transactions and system activities are permanently recorded on the blockchain and can be independently verified by anyone at any time.',
    icon: '👁️',
    color: 'from-green-500 to-emerald-500'
  },
  {
    title: 'Full Automation',
    content:
      'Trading logic, reward distribution, and platform interactions are fully automated through smart contracts, enabling uninterrupted 24/7 operation.',
    icon: '⚡',
    color: 'from-yellow-500 to-orange-500'
  },
  {
    title: 'Decentralized Architecture',
    content:
      '4Exchai runs on decentralized blockchain networks, eliminating centralized control and reducing the risk of manipulation or downtime.',
    icon: '🌐',
    color: 'from-indigo-500 to-blue-500'
  },
  {
    title: 'Global Accessibility',
    content:
      'The platform is accessible worldwide and operates entirely online, allowing participants to interact with the system without geographical limitations.',
    icon: '📡',
    color: 'from-red-500 to-rose-500'
  },
];

const Technology1 = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % techItems.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handleItemClick = (index) => {
    setActiveIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section className="relative container mx-auto mb-20 px-4 lg:px-[115px] py-20">
      
      {/* Header */}
      <div className="relative flex flex-col items-center gap-6 max-w-[900px] mx-auto text-center mb-16">
        <div className="relative">
          <div className="absolute inset-0 bg-blue-500/30 rounded-2xl blur-xl animate-pulse-ring" />
          <div className="relative flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 shadow-xl animate-float-up">
            📘
          </div>
        </div>

        <h2 className="text-4xl lg:text-6xl font-bold leading-tight">
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
            Core Technology
          </span>
          <br />
          <span className="text-white">Powering 4Exchai</span>
        </h2>

        <p className="text-lg lg:text-xl text-gray-300 max-w-3xl leading-relaxed">
          4Exchai is built on advanced blockchain infrastructure combining smart contracts,
          automation, and AI-driven logic to ensure secure and transparent system operation.
        </p>

        <div className="flex items-center gap-2 text-sm text-gray-400">
          <div className={`w-2 h-2 rounded-full ${isAutoPlaying ? 'bg-green-400 animate-pulse' : 'bg-gray-600'}`} />
          <span>{isAutoPlaying ? 'Auto-cycling features' : 'Paused'}</span>
        </div>
      </div>

      {/* Desktop View */}
      <div className="hidden lg:block">
        <div className="glass-card rounded-3xl p-10 max-w-[1200px] mx-auto shadow-2xl">
          <div className="flex gap-8">
            <div className="flex flex-col gap-3 w-[280px]">
              {techItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => handleItemClick(index)}
                  className={`group relative text-left px-5 py-4 rounded-xl transition-all duration-300 ${
                    activeIndex === index
                      ? 'tech-item-active scale-105 shadow-lg'
                      : 'hover:bg-white/5 opacity-60 hover:opacity-100'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="text-2xl">{item.icon}</div>
                    <span className="font-semibold text-gray-200">{item.title}</span>
                  </div>
                </button>
              ))}
            </div>

            <div className="flex-1">
              <div key={activeIndex} className="animate-slide-in">
                <div className={`text-7xl mb-6 bg-gradient-to-br ${techItems[activeIndex].color} w-24 h-24 rounded-2xl flex items-center justify-center`}>
                  {techItems[activeIndex].icon}
                </div>

                <h3 className="text-4xl font-bold mb-6 text-white">
                  {techItems[activeIndex].title}
                </h3>

                <p className="text-xl text-gray-300 leading-relaxed max-w-[600px] mb-8">
                  {techItems[activeIndex].content}
                </p>

                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-full text-sm text-blue-300">
                    Blockchain Verified
                  </span>
                  <span className="px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-full text-sm text-purple-300">
                    Automated
                  </span>
                  <span className="px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-full text-sm text-green-300">
                    Secure by Design
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div className="lg:hidden space-y-4">
        {techItems.map((item, index) => (
          <div key={index} className="glass-card rounded-2xl p-6 shadow-lg">
            <div className={`text-4xl w-16 h-16 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4`}>
              {item.icon}
            </div>
            <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
            <p className="text-sm text-gray-300 leading-relaxed">{item.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Technology1;
