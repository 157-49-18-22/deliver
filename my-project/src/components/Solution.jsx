import React from 'react';

const Solution = () => {
  return (
    <section className="py-20 md:py-32 px-4 md:px-24 bg-on-surface text-surface relative" id="solution">
      <div className="max-w-7xl mx-auto">
        <div className="reveal">
          <h2 className="font-display-lg text-4xl md:text-7xl lg:text-8xl uppercase text-primary italic mb-12 md:mb-20 text-center">THE SOLUTION</h2>
        </div>
        <div className="grid lg:grid-cols-3 gap-8 md:gap-10">
          <div className="bg-surface text-on-surface p-8 md:p-10 border-4 border-primary hard-shadow reveal">
            <div className="w-16 md:w-20 h-16 md:h-20 bg-primary/10 flex items-center justify-center mb-6 border-2 border-primary">
              <span className="material-symbols-outlined text-4xl md:text-5xl text-primary">api</span>
            </div>
            <h3 className="font-display-lg text-2xl md:text-3xl mb-4 uppercase">Private API Agreement</h3>
            <p className="font-body-lg opacity-80">The critical infrastructure layer enabling real-time data sync between fragmented delivery platforms.</p>
          </div>
          <div className="bg-surface text-on-surface p-10 border-4 border-primary hard-shadow reveal" style={{transitionDelay: '0.1s'}}>
            <div className="w-20 h-20 bg-primary/10 flex items-center justify-center mb-8 border-2 border-primary">
              <span className="material-symbols-outlined text-5xl text-primary">smartphone</span>
            </div>
            <h3 className="font-display-lg text-3xl mb-4 uppercase">Delivery Partner App</h3>
            <p className="font-body-lg opacity-80">Unified interface for gig workers to access multiple streams, optimize routes, and track total yield.</p>
          </div>
          <div className="bg-surface text-on-surface p-10 border-4 border-primary hard-shadow reveal" style={{transitionDelay: '0.2s'}}>
            <div className="w-20 h-20 bg-primary/10 flex items-center justify-center mb-8 border-2 border-primary">
              <span className="material-symbols-outlined text-5xl text-primary">analytics</span>
            </div>
            <h3 className="font-display-lg text-3xl mb-4 uppercase">Platform Dashboard</h3>
            <p className="font-body-lg opacity-80">Enterprise-grade visibility for platforms to monitor and secure on-demand workforce supply.</p>
          </div>
        </div>
        <div className="mt-20 bg-primary text-white p-12 border-4 border-white hard-shadow reveal text-center">
          <p className="font-display-lg text-3xl md:text-4xl uppercase italic">"Asset-light: No fleet ownership, no inventory, no dark stores."</p>
        </div>
      </div>
    </section>
  );
};

export default Solution;
