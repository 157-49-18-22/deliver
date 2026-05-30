import React from 'react';

const stats = [
  {
    value: '11.2M',
    label: 'Gig delivery workers India 2024',
    source: 'NITI Aayog · BCG',
  },
  {
    value: '$7.6B',
    label: 'India Q-commerce GMV FY2025',
    source: 'Eternal Ltd. Report',
  },
  {
    value: '40%',
    label: 'CAGR projected to 2030',
    source: 'Mordor Intelligence',
  },
  {
    value: '$100M',
    label: 'UrbanPiper valuation doing RESTAURANT side',
    source: 'Jan 2022 — comparable',
  },
];

const SeedRound = () => {
  return (
    <section className="py-24 md:py-36 px-6 md:px-24 bg-surface" id="seed-round">
      <div className="max-w-7xl mx-auto">

        {/* Tag */}
        <div className="reveal mb-8 md:mb-10">
          <span className="inline-block border-2 border-on-surface bg-transparent px-4 py-1 font-label-bold text-xs md:text-sm uppercase tracking-widest text-on-surface kinetic-border">
            SEED ROUND 2026
          </span>
        </div>

        {/* Top Two-Column Layout */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start mb-16 md:mb-24">

          {/* Left: Big Bold Headline */}
          <div className="reveal">
            <h2 className="font-display-lg text-5xl sm:text-7xl md:text-8xl uppercase leading-[0.9] text-on-surface">
              ONE DELIVERY BOY{' '}
              <span className="block">SINGLE PLATFORM</span>
              <span className="block text-primary italic">ONE APP.</span>
            </h2>
          </div>

          {/* Right: Description */}
          <div className="reveal" style={{ transitionDelay: '0.1s' }}>
            <div className="border-2 border-on-surface p-6 md:p-8 bg-surface-container">
              <p className="text-on-surface text-base md:text-lg leading-relaxed font-body-lg">
                India has <strong>11.2 million delivery workers.</strong> They work on platforms
                like Zomato, Swiggy, and Blinkit, often managing multiple apps on separate
                phones. Deliver Unite is a neutral super-app that brings all platform orders
                into one place. It helps delivery partners increase income and helps platforms
                improve fill rates. We act as the infrastructure layer between both sides.
              </p>
            </div>
          </div>
        </div>

        {/* Stat Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="group p-6 md:p-8 border-4 border-on-surface hard-shadow bg-primary text-white flex flex-col justify-between reveal hover:bg-on-surface hover:border-primary hover:hard-shadow-primary transition-all duration-300 min-h-[180px] md:min-h-[220px]"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div>
                <span className="font-display-lg text-3xl md:text-5xl block leading-none mb-2 group-hover:text-primary transition-colors">
                  {stat.value}
                </span>
                <p className="font-label-bold text-xs md:text-sm uppercase leading-snug opacity-95 group-hover:opacity-80 transition-opacity">
                  {stat.label}
                </p>
              </div>
              <p className="font-label-bold text-[10px] md:text-xs uppercase opacity-70 mt-4 group-hover:opacity-50 transition-opacity">
                {stat.source}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SeedRound;
