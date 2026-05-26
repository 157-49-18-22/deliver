import React from 'react';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-6 md:px-24 bg-inverse-surface py-24 overflow-hidden">
      <div className="absolute inset-0 grid-bg"></div>
      <div className="relative z-10 max-w-6xl">
        <div className="inline-block bg-primary text-white px-4 py-1 mb-6 font-label-bold uppercase tracking-widest kinetic-border">Introducing Maydiv Infotech</div>
        <h1 className="font-display-lg text-6xl md:text-9xl text-white leading-[0.9] uppercase mb-8">
          THE OS FOR <br/>
          <span className="text-primary italic">DELIVERY PARTNERS.</span>
        </h1>
        <p className="font-headline-md text-xl md:text-2xl text-white/80 uppercase tracking-[0.2em] mb-12 max-w-4xl mx-auto">
          WE DON'T BUILD THE FLEET. WE PROVIDE THE INTELLIGENCE THAT RUNS IT.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button className="bg-primary text-white font-headline-lg px-12 py-6 border-2 border-on-surface hard-shadow-white hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all uppercase italic">
            JOIN THE REVOLUTION
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
