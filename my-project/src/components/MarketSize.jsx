import React from 'react';

const MarketSize = () => {
  return (
    <section className="py-32 px-6 md:px-24 bg-surface" id="market">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24 reveal">
          <h2 className="font-display-lg text-6xl md:text-8xl uppercase mb-4">MARKET SIZE</h2>
          <p className="font-headline-md tracking-widest text-primary">THE TRILLION RUPEE OPPORTUNITY</p>
        </div>
        <div className="grid lg:grid-cols-3 gap-8 md:gap-10">
          <div className="group p-8 md:p-12 border-4 border-on-surface hard-shadow text-center reveal flex flex-col justify-center min-h-[250px] md:min-h-[300px] bg-primary text-white hover:bg-on-surface hover:border-primary hover:hard-shadow-primary transition-all duration-300">
            <h3 className="font-display-lg text-2xl text-on-surface group-hover:text-primary transition-colors mb-2 uppercase">TAM</h3>
            <span className="text-6xl font-display-lg">₹4,200<span className="text-4xl text-on-surface group-hover:text-primary transition-colors font-headline-md">cr</span></span>
            <p className="font-headline-md uppercase text-sm mt-3 opacity-90 group-hover:opacity-70 transition-opacity">Total Addressable Market</p>
          </div>
          <div className="group p-8 md:p-12 border-4 border-on-surface hard-shadow text-center reveal flex flex-col justify-center min-h-[250px] md:min-h-[300px] bg-primary text-white hover:bg-on-surface hover:border-primary hover:hard-shadow-primary transition-all duration-300" style={{transitionDelay: '0.1s'}}>
            <h3 className="font-display-lg text-xl md:text-2xl text-on-surface group-hover:text-primary transition-colors mb-2 uppercase">SAM</h3>
            <span className="text-5xl md:text-6xl font-display-lg">₹840<span className="text-2xl md:text-4xl text-on-surface group-hover:text-primary transition-colors font-headline-md">cr</span></span>
            <p className="font-headline-md uppercase text-xs md:text-sm mt-3 opacity-90 group-hover:opacity-70 transition-opacity">Serviceable Market</p>
          </div>
          <div className="group p-8 md:p-12 border-4 border-on-surface hard-shadow text-center reveal flex flex-col justify-center min-h-[250px] md:min-h-[300px] bg-primary text-white hover:bg-on-surface hover:border-primary hover:hard-shadow-primary transition-all duration-300" style={{transitionDelay: '0.2s'}}>
            <h3 className="font-display-lg text-xl md:text-2xl text-on-surface group-hover:text-primary transition-colors mb-2 uppercase">SOM</h3>
            <span className="text-5xl md:text-6xl font-display-lg">₹42<span className="text-2xl md:text-4xl text-on-surface group-hover:text-primary transition-colors font-headline-md">cr</span></span>
            <p className="font-headline-md uppercase text-xs md:text-sm mt-3 opacity-90 group-hover:opacity-70 transition-opacity">Target (First 24 Months)</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketSize;
