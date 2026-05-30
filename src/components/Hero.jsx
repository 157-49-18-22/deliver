import React from 'react';

const Hero = () => {
  return (
    <section className="relative min-h-0 md:min-h-screen w-full bg-[#FCF8F5] flex flex-col justify-start md:justify-center px-4 md:px-12 lg:px-20 pt-28 md:pt-36 pb-6 md:pb-20 overflow-hidden" id="hero">
      
      {/* Background styling for light theme */}
      <div className="absolute inset-0 bg-[#FCF8F5] z-0">
         <div className="absolute inset-0 opacity-50 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto w-full flex flex-col md:flex-row gap-6 md:gap-4 items-center mb-5 md:mb-16">
        
        {/* Left Content — mobile bg scoped here only (behind headline, not cards) */}
        <div className="flex flex-col items-start text-left z-20 w-full md:w-1/2 xl:pl-8 relative">
          
          {/* Mobile: blurred scooter — visible but soft behind headline */}
          <div className="absolute inset-0 md:hidden pointer-events-none z-0 overflow-hidden" aria-hidden="true">
            <img
              src="/right.png"
              alt=""
              className="hero-mobile-bg-sharp absolute -right-10 top-4 w-[130%] max-w-none h-[400px] object-contain object-right-top opacity-50 scale-105"
            />
            <img
              src="/right.png"
              alt=""
              className="hero-mobile-bg-blur absolute -right-8 top-2 w-[125%] max-w-none h-[400px] object-contain object-right-top opacity-100 scale-110"
            />
            <div
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(105deg, rgba(252,248,245,0.97) 0%, rgba(252,248,245,0.82) 32%, rgba(252,248,245,0.45) 58%, rgba(252,248,245,0.15) 100%)',
              }}
            />
          </div>

          <div className="relative z-10 w-full">
          
          {/* Orange Speed Stripes Behind Text */}
          <div className="absolute -left-4 md:-left-12 lg:-left-32 top-0 sm:top-4 flex flex-col gap-[6px] z-[-1] opacity-70">
            <div className="h-[3px] w-16 md:w-24 bg-primary rounded-r-full"></div>
            <div className="h-[3px] w-32 md:w-48 bg-primary rounded-r-full"></div>
            <div className="h-[3px] w-12 md:w-16 bg-primary rounded-r-full"></div>
            <div className="h-[3px] w-24 md:w-32 bg-primary rounded-r-full"></div>
          </div>

          <div className="flex items-center gap-2 mb-4 md:mb-6">
             <div className="block h-[2px] w-8 md:w-12 bg-primary"></div>
             <div className="bg-primary text-white px-3 md:px-5 py-1.5 md:py-2 font-label-bold text-xs md:text-sm uppercase tracking-widest skew-x-[-12deg] shadow-md">
               <span className="skew-x-[12deg] inline-block">Introducing Maydiv Infotech</span>
             </div>
          </div>
          
          <div className="max-md:relative max-md:w-full max-md:py-2 max-md:pr-1 max-md:-ml-1 max-md:rounded-sm max-md:bg-[#FCF8F5]/50 max-md:backdrop-blur-sm max-md:mb-1">
            <h1 className="font-display-lg text-[2.35rem] leading-[0.92] sm:text-6xl md:text-[5.5rem] xl:text-[7rem] text-on-surface md:leading-[0.9] uppercase mb-4 md:mb-6 drop-shadow-sm max-md:[text-shadow:0_0_20px_#FCF8F5,0_2px_4px_rgba(28,27,27,0.15)]">
              THE OS FOR <br/>
              <span className="text-primary italic block mt-1 md:mt-4 text-[2.6rem] sm:text-[4.5rem] md:text-[5.5rem] xl:text-[7.5rem] max-md:[text-shadow:0_0_16px_#FCF8F5,0_1px_3px_rgba(28,27,27,0.12)]">DELIVERY PARTNERS.</span>
            </h1>
          </div>
          
          <div className="flex gap-4 items-center justify-start mb-6 md:mb-10 w-full border-l-4 border-primary pl-4 md:pl-6 py-2">
            <p className="font-headline-md text-xs sm:text-base md:text-xl text-on-surface/80 uppercase tracking-wide md:tracking-widest max-w-2xl leading-relaxed">
              WE DON'T BUILD THE FLEET.<br className="block" /> WE PROVIDE THE INTELLIGENCE THAT RUNS IT.
            </p>
          </div>
          
          <button type="button" className="w-full md:w-auto bg-primary text-white font-headline-md text-base md:text-xl px-8 md:px-12 py-4 md:py-5 shadow-[5px_5px_0px_#1a1a1a] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all uppercase flex items-center justify-center gap-4 group cursor-pointer border-2 border-on-surface">
            JOIN THE REVOLUTION <span className="material-symbols-outlined font-bold group-hover:translate-x-2 transition-transform">arrow_forward</span>
          </button>
          </div>
        </div>

        {/* Right Content - Scooter Image (desktop/tablet only) */}
        <div className="hidden md:flex relative z-10 w-1/2 justify-center pointer-events-none">
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
      
      {/* Bottom Features Pill — solid bg so mobile hero image never shows through */}
      <div className="relative z-30 w-full max-w-[1300px] mx-auto bg-white rounded-2xl md:rounded-3xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] p-4 md:p-8 border border-gray-100 mt-4 md:mt-auto isolate">
        <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-2 md:divide-x-2 divide-gray-100 w-full">
          
          <div className="flex items-center gap-4 md:gap-5 px-0 md:px-4 w-full justify-start border-b md:border-b-0 border-gray-100 pb-4 md:pb-0">
             <span className="material-symbols-outlined text-primary text-[2.5rem] md:text-5xl shrink-0">speed</span>
             <div>
                <h3 className="font-label-bold text-on-surface uppercase text-sm md:text-base mb-1 tracking-wider whitespace-nowrap">Smarter Routes</h3>
                <p className="font-body-md text-on-surface/60 text-xs md:text-sm block">Deliver more in less time.</p>
             </div>
          </div>
          
          <div className="flex items-center gap-4 md:gap-5 px-0 md:px-4 w-full justify-start border-b md:border-b-0 border-gray-100 pb-4 md:pb-0">
             <span className="material-symbols-outlined text-primary text-[2.5rem] md:text-5xl shrink-0">trending_up</span>
             <div>
                <h3 className="font-label-bold text-on-surface uppercase text-sm md:text-base mb-1 tracking-wider whitespace-nowrap">Higher Earnings</h3>
                <p className="font-body-md text-on-surface/60 text-xs md:text-sm block">More efficiency, more income.</p>
             </div>
          </div>
          
          <div className="flex items-center gap-4 md:gap-5 px-0 md:px-4 w-full justify-start border-b md:border-b-0 border-gray-100 pb-4 md:pb-0">
             <span className="material-symbols-outlined text-primary text-[2.5rem] md:text-5xl shrink-0">gpp_good</span>
             <div>
                <h3 className="font-label-bold text-on-surface uppercase text-sm md:text-base mb-1 tracking-wider whitespace-nowrap">Safer Deliveries</h3>
                <p className="font-body-md text-on-surface/60 text-xs md:text-sm block">Real-time tracking & support.</p>
             </div>
          </div>
          
          <div className="flex items-center gap-4 md:gap-5 px-0 md:px-4 w-full justify-start">
             <span className="material-symbols-outlined text-primary text-[2.5rem] md:text-5xl shrink-0">group</span>
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
