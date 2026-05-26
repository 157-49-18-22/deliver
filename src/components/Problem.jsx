import React from 'react';

const Problem = () => {
  return (
    <section className="py-20 md:py-32 px-4 md:px-24 bg-surface relative" id="problem">
      <div className="max-w-7xl mx-auto">
        <div className="reveal text-center md:text-left">
          <h2 className="font-display-lg text-4xl md:text-7xl lg:text-8xl uppercase mb-12 md:mb-16 inline-block relative">
            THE PROBLEM
            <span className="absolute -bottom-4 left-0 w-full h-4 bg-primary -z-10"></span>
          </h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-10 md:gap-16">
          <div className="reveal">
            <div className="bg-on-surface text-white p-6 md:p-10 border-4 border-on-surface hard-shadow-primary h-full">
              <h3 className="font-display-lg text-2xl md:text-4xl text-primary mb-6 md:mb-8 uppercase italic">THE EFFICIENCY GAP</h3>
              <p className="font-headline-md text-lg md:text-2xl mb-10 leading-snug">"Delivery partners spend nearly 35% of their time without receiving any order"</p>
              <div className="space-y-6">
                <div className="flex items-start gap-6 bg-white/5 p-6 border-l-8 border-primary">
                  <span className="material-symbols-outlined text-4xl text-primary">warning</span>
                  <div>
                    <p className="font-display-lg text-xl uppercase">Teen apps, teen phones, ek income</p>
                    <p className="font-body-md opacity-60">Complexity reduces partner productivity and increases burnout.</p>
                  </div>
                </div>
                <div className="flex items-start gap-6 bg-white/5 p-6 border-l-8 border-primary">
                  <span className="material-symbols-outlined text-4xl text-primary">schedule</span>
                  <div>
                    <p className="font-display-lg text-xl uppercase">Supply-Demand Mismatch</p>
                    <p className="font-body-md opacity-60">Peak hours mein partners nahi milte, off-peak mein partners idle rehte hain.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="reveal" style={{transitionDelay: '0.2s'}}>
            <div className="bg-white p-6 md:p-10 border-4 border-on-surface hard-shadow h-full flex flex-col justify-between">
              <div>
                <h3 className="font-display-lg text-2xl md:text-4xl mb-6 md:mb-8 uppercase">CORE INSIGHT</h3>
                <div className="grid grid-cols-2 gap-8 mb-10">
                  <div className="border-b-4 border-on-surface pb-4">
                    <span className="text-6xl font-display-lg text-primary">₹102</span>
                    <p className="font-label-bold uppercase opacity-60">Avg Earning / Hour</p>
                  </div>
                  <div className="border-b-4 border-on-surface pb-4">
                    <span className="text-6xl font-display-lg text-primary">23%</span>
                    <p className="font-label-bold uppercase opacity-60">Work 8+ Hrs / Day</p>
                  </div>
                </div>
              </div>
              <div className="bg-surface-container p-8 border-2 border-on-surface italic">
                <p className="font-headline-md text-2xl">"Just like UrbanPiper integrated restaurants, Deliver Unite is integrating the supply side."</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
