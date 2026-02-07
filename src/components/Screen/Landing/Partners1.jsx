import React, { useState, useEffect } from "react";

const Partners1 = () => {
  const [selected, setSelected] = useState("total");
  const [animatedStats, setAnimatedStats] = useState({
    accounts: 0,
    totalUSD: 0,
  });
  const [copiedAddress, setCopiedAddress] = useState(null);

  /* ===== PLATFORM ACTIVITY DATA (4EXCHAI) ===== */
  const statsData = {
    total: {
      accounts: 3475770,
      accountsChange: "+225",
      totalUSD: 1471629306,
      usdChange: "+3,920",
      icon: "🌐",
      color: "from-blue-500 to-cyan-500",
    },
    eth: {
      accounts: 1230000,
      accountsChange: "+150",
      totalUSD: 750000000,
      usdChange: "+2,100",
      icon: "⟠",
      color: "from-purple-500 to-indigo-500",
    },
    tron: {
      accounts: 980000,
      accountsChange: "+60",
      totalUSD: 450000000,
      usdChange: "+1,200",
      icon: "⚡",
      color: "from-red-500 to-orange-500",
    },
    busd: {
      accounts: 1265770,
      accountsChange: "+15",
      totalUSD: 271629306,
      usdChange: "+620",
      icon: "💰",
      color: "from-yellow-500 to-green-500",
    },
  };

  /* ===== SMART CONTRACT ADDRESSES ===== */
  const contracts = [
    {
      label: "ETH",
      value: "0x5acc84e5C26885e1D43f88c6C11598667FB97",
      network: "Ethereum Network",
      color: "from-purple-500 to-indigo-500",
    },
    {
      label: "TRON",
      value: "TREbhaFEYekP1uCtLRdJLBXz4D5vzzgBVp",
      network: "TRON Blockchain",
      color: "from-red-500 to-orange-500",
    },
    {
      label: "BUSD",
      value: "0x5acc84e5C26885e1D43f88c6C11598667FB97",
      network: "BSC (BEP20)",
      color: "from-yellow-500 to-green-500",
    },
  ];

  /* ===== COUNTER ANIMATION ===== */
  useEffect(() => {
    const targetAccounts = statsData[selected].accounts;
    const targetUSD = statsData[selected].totalUSD;

    const duration = 1000;
    const steps = 60;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      const easeOut = 1 - Math.pow(1 - progress, 3);

      setAnimatedStats({
        accounts: Math.floor(targetAccounts * easeOut),
        totalUSD: Math.floor(targetUSD * easeOut),
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        setAnimatedStats({
          accounts: targetAccounts,
          totalUSD: targetUSD,
        });
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [selected]);

  const formatNumber = (num) =>
    num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");

  const copyToClipboard = (text, index) => {
    navigator.clipboard.writeText(text);
    setCopiedAddress(index);
    setTimeout(() => setCopiedAddress(null), 2000);
  };

  return (
    <section className="relative py-20 overflow-hidden" id="about">
      <div className="relative container mx-auto md:px-4 lg:px-[115px] space-y-16">

        {/* HEADER */}
        <div className="flex flex-col items-center gap-6 max-w-4xl mx-auto text-center">
          <div className="relative animate-float-stats">
            <div className="absolute inset-0 bg-blue-500/30 rounded-2xl blur-xl animate-pulse-glow" />
            <div className="relative flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 shadow-2xl">
              📊
            </div>
          </div>

          <h2 className="text-4xl lg:text-6xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Platform Activity Overview
            </span>
            <br />
            <span className="text-white">Recorded on Blockchain</span>
          </h2>

          <p className="text-lg lg:text-xl text-gray-300 max-w-2xl">
            4Exchai operates through AI-driven trading systems and smart contracts.
            All activity is transparent, verifiable, and publicly recorded on-chain.
          </p>
        </div>

        {/* STATS */}
        <div className="max-w-6xl mx-auto space-y-6 animate-slide-up">
          <div className="glass-card rounded-3xl md:p-8 p-2 lg:p-10 shadow-2xl overflow-hidden relative">
            <div className="absolute inset-0 shimmer-bg pointer-events-none" />

            {/* SELECTOR */}
            <div className="flex justify-center mb-10">
              <div className="glass-card rounded-full p-1.5 inline-flex gap-1 overflow-x-auto">
                {Object.keys(statsData).map((item) => (
                  <button
                    key={item}
                    onClick={() => setSelected(item)}
                    className={`px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 ${
                      selected === item
                        ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white"
                        : "text-gray-400 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <span className="text-xl">{statsData[item].icon}</span>
                      <span className="capitalize">{item}</span>
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* VALUES */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-4">
                <p className="text-gray-400">Active Accounts</p>
                <h3 className={`text-5xl font-bold bg-gradient-to-r ${statsData[selected].color} bg-clip-text text-transparent`}>
                  {formatNumber(animatedStats.accounts)}
                </h3>
                <p className="text-sm text-gray-400">
                  Total registered participants interacting with AI trading contracts
                </p>
              </div>

              <div className="space-y-4">
                <p className="text-gray-400">Processed Trading Volume (USD)</p>
                <h3 className={`text-5xl font-bold bg-gradient-to-r ${statsData[selected].color} bg-clip-text text-transparent`}>
                  ${formatNumber(animatedStats.totalUSD)}
                </h3>
                <p className="text-sm text-gray-400">
                  Total value processed through smart contracts
                </p>
              </div>
            </div>
          </div>

          {/* CONTRACTS */}
          <div className="glass-card rounded-3xl p-6 lg:p-10 shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-6">
              Official Smart Contract Addresses
            </h3>

            <div className="space-y-4">
              {contracts.map((contract, index) => (
                <div
                  key={index}
                  className="glass-card rounded-2xl p-6 flex flex-col lg:flex-row justify-between gap-4"
                >
                  <div>
                    <h4 className="text-lg font-semibold text-white">
                      {contract.label}
                    </h4>
                    <p className="text-sm text-gray-400">{contract.network}</p>
                    <p className="text-xs text-gray-500 mt-1 font-mono truncate">
                      {contract.value}
                    </p>
                  </div>

                  <button
                    onClick={() => copyToClipboard(contract.value, index)}
                    className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition"
                  >
                    {copiedAddress === index ? "Copied ✓" : "Copy Address"}
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-6 glass-card rounded-xl p-4 border-l-4 border-green-500">
              <p className="text-sm text-gray-300">
                Smart contracts are automated, immutable, and operate without manual control.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners1;
