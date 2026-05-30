import React from 'react';

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full bg-[#FCF8F5] flex flex-col justify-center px-4 md:px-12 lg:px-20 pt-36 pb-20 overflow-hidden" id="hero">
      
      {/* Background styling for light theme */}
      <div className="absolute inset-0 bg-[#FCF8F5] z-0">
         <div className="absolute inset-0 opacity-50 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent"></div>
      </div>
      
      <div className="relative z-10 max-w-[1440px] mx-auto w-full flex flex-row gap-4 items-center mb-16">
        
        {/* Left Content */}
        <div className="flex flex-col items-start text-left z-20 w-1/2 xl:pl-8 relative">
          
          {/* Orange Speed Stripes Behind Text */}
          <div className="absolute -left-12 sm:-left-32 top-0 sm:top-4 flex flex-col gap-[6px] z-[-1] opacity-70">
            <div className="h-[3px] w-24 bg-primary rounded-r-full"></div>
            <div className="h-[3px] w-48 bg-primary rounded-r-full"></div>
            <div className="h-[3px] w-16 bg-primary rounded-r-full"></div>
            <div className="h-[3px] w-32 bg-primary rounded-r-full"></div>
          </div>

          <div className="flex items-center gap-2 mb-6">
             <div className="block h-[2px] w-12 bg-primary"></div>
             <div className="bg-primary text-white px-5 py-2 font-label-bold text-sm uppercase tracking-widest skew-x-[-12deg] shadow-md">
               <span className="skew-x-[12deg] inline-block">Introducing Maydiv Infotech</span>
             </div>
          </div>
          
          <h1 className="font-display-lg text-[3.5rem] sm:text-6xl md:text-[5.5rem] xl:text-[7rem] text-on-surface leading-[0.9] uppercase mb-6 drop-shadow-sm">
            THE OS FOR <br/>
            <span className="text-primary italic block mt-2 md:mt-4 text-[4rem] sm:text-[4.5rem] md:text-[5.5rem] xl:text-[7.5rem]">DELIVERY PARTNERS.</span>
          </h1>
          
          <div className="flex gap-4 items-center justify-start mb-10 w-full border-l-4 border-primary pl-6 py-2">
            <p className="font-headline-md text-sm sm:text-base md:text-xl text-on-surface/80 uppercase tracking-widest max-w-2xl leading-relaxed">
              WE DON'T BUILD THE FLEET.<br className="block" /> WE PROVIDE THE INTELLIGENCE THAT RUNS IT.
            </p>
          </div>
          
          <button className="bg-primary text-white font-headline-md text-xl px-12 py-5 shadow-[5px_5px_0px_#1a1a1a] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all uppercase flex items-center justify-center gap-4 group cursor-pointer border-2 border-on-surface">
            JOIN THE REVOLUTION <span className="material-symbols-outlined font-bold group-hover:translate-x-2 transition-transform">arrow_forward</span>
          </button>
        </div>

        {/* Right Content - Scooter Image (Mix Blend Multiply to remove white bg) */}
        <div className="relative z-10 w-1/2 flex justify-center pointer-events-none relative">
          <img 
            src="/right.png" 
            alt="Delivery Partner Platform Scooter" 
            className="w-[130%] xl:w-[140%] max-w-none h-auto object-contain mix-blend-multiply relative translate-x-0 xl:translate-x-4"
            style={{ 
              filter: 'contrast(1.05) brightness(0.98)',
              WebkitMaskImage: 'radial-gradient(ellipse at 40% 50%, black 60%, transparent 85%)',
              maskImage: 'radial-gradient(ellipse at 40% 50%, black 60%, transparent 85%)'
            }}
          />
        </div>
      </div>
      
      {/* Bottom Features Pill */}
      <div className="relative z-30 w-full max-w-[1300px] mx-auto bg-white rounded-3xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] p-8 border border-gray-100 mt-auto">
        <div className="flex flex-row justify-between gap-2 divide-x-2 divide-gray-100 w-full">
          
          <div className="flex items-center gap-5 px-4 w-full justify-start">
             <span className="material-symbols-outlined text-primary text-[2.5rem] md:text-5xl">speed</span>
             <div>
                <h3 className="font-label-bold text-on-surface uppercase text-sm md:text-base mb-1 tracking-wider whitespace-nowrap">Smarter Routes</h3>
                <p className="font-body-md text-on-surface/60 text-xs md:text-sm block">Deliver more in less time.</p>
             </div>
          </div>
          
          <div className="flex items-center gap-5 px-4 border-none border-gray-100 w-full justify-start">
             <span className="material-symbols-outlined text-primary text-[2.5rem] md:text-5xl">trending_up</span>
             <div>
                <h3 className="font-label-bold text-on-surface uppercase text-sm md:text-base mb-1 tracking-wider whitespace-nowrap">Higher Earnings</h3>
                <p className="font-body-md text-on-surface/60 text-xs md:text-sm block">More efficiency, more income.</p>
             </div>
          </div>
          
          <div className="flex items-center gap-5 px-4 border-none border-gray-100 w-full justify-start">
             <span className="material-symbols-outlined text-primary text-[2.5rem] md:text-5xl">gpp_good</span>
             <div>
                <h3 className="font-label-bold text-on-surface uppercase text-sm md:text-base mb-1 tracking-wider whitespace-nowrap">Safer Deliveries</h3>
                <p className="font-body-md text-on-surface/60 text-xs md:text-sm block">Real-time tracking & support.</p>
             </div>
          </div>
          
          <div className="flex items-center gap-5 px-4 border-none border-gray-100 w-full justify-start">
             <span className="material-symbols-outlined text-primary text-[2.5rem] md:text-5xl">group</span>
             <div>
                <h3 className="font-label-bold text-on-surface uppercase text-sm md:text-base mb-1 tracking-wider whitespace-nowrap">Stronger Together</h3>
                <p className="font-body-md text-on-surface/60 text-xs md:text-sm block">One platform. One network.</p>
             </div>
          </div>

        </div>
      </div>
      
    </section>
  );
};

export default Hero;
