import React from 'react';

const MarketSize = () => {
  return (
    <section className="py-24 md:py-36 px-6 md:px-24 bg-surface" id="market">
      <div className="max-w-7xl mx-auto">
      
        {/* Tag on Top */}
        <div className="reveal mb-12">
           <span className="inline-block border-2 border-on-surface bg-transparent px-4 py-1 font-label-bold text-xs md:text-sm uppercase tracking-widest text-on-surface kinetic-border">
            MARKET SIZE
          </span>
        </div>

        {/* Image and Description - Top Section */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center mb-16 md:mb-24">
          
          {/* Left Side - Image */}
          <div className="reveal relative">
            {/* Background shape accent like in PDF */}
            <div className="absolute -inset-4 bg-surface-variant/50 rounded-3xl -z-10 translate-y-4 translate-x-4"></div>
            <img 
              src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=800" 
              alt="Market Expansion" 
              className="w-full h-auto object-cover rounded-2xl grayscale border-2 border-on-surface"
            />
          </div>

          {/* Right Side - Copy */}
          <div className="reveal" style={{ transitionDelay: '0.1s' }}>
            <h2 className="font-display-lg text-4xl md:text-6xl uppercase leading-[0.9] text-on-surface mb-6">
              INDIA Q-COMMERCE:<br/>
              <span className="block mt-2">$12.97B BY 2029.</span>
              <span className="block mt-2">DELIVERY PARTNERS NEEDED.</span>
            </h2>
            <p className="text-on-surface text-base md:text-lg leading-relaxed font-body-md opacity-90 max-w-lg">
              This market isn't just growing for the platforms—the delivery workforce also needs to triple to serve it. Our TAM (Total Addressable Market) lies in the delivery partner coordination layer.
            </p>
          </div>
        </div>

        {/* 3 Columns - TAM SAM SOM */}
        <div className="grid lg:grid-cols-3 gap-6 md:gap-8">
          
          <div className="group p-6 md:p-8 border-4 border-on-surface hard-shadow flex flex-col min-h-[220px] bg-primary text-white hover:bg-on-surface hover:border-primary hover:hard-shadow-primary transition-all duration-300 reveal text-left">
            <span className="font-label-bold text-sm mb-2 opacity-90">TAM</span>
            <h3 className="font-display-lg text-5xl mb-4">₹4,200<span className="text-3xl font-headline-md uppercase">CR</span></h3>
            <p className="font-label-bold text-xs uppercase opacity-90 leading-snug">
              Delivery coordination software market India — est. 2% of $7.6B Q-com GMV as ops cost
            </p>
          </div>

          <div className="group p-6 md:p-8 border-4 border-on-surface hard-shadow flex flex-col min-h-[220px] bg-primary text-white hover:bg-on-surface hover:border-primary hover:hard-shadow-primary transition-all duration-300 reveal text-left" style={{ transitionDelay: '0.1s' }}>
            <span className="font-label-bold text-sm mb-2 opacity-90">SAM</span>
            <h3 className="font-display-lg text-5xl mb-4">₹840<span className="text-3xl font-headline-md uppercase">CR</span></h3>
            <p className="font-label-bold text-xs uppercase opacity-90 leading-snug">
              Partner-facing app + platform API layer — Tier 1 + Tier 2 cities, addressable in 3 yrs
            </p>
          </div>

          <div className="group p-6 md:p-8 border-4 border-on-surface hard-shadow flex flex-col min-h-[220px] bg-primary text-white hover:bg-on-surface hover:border-primary hover:hard-shadow-primary transition-all duration-300 reveal text-left" style={{ transitionDelay: '0.2s' }}>
            <span className="font-label-bold text-sm mb-2 opacity-90">SOM</span>
            <h3 className="font-display-lg text-5xl mb-4">₹42<span className="text-3xl font-headline-md uppercase">CR</span></h3>
            <p className="font-label-bold text-xs uppercase opacity-90 leading-snug">
              Year 2 target — 3 cities, 10K partners, platform API revenue + partner subscriptions
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default MarketSize;
