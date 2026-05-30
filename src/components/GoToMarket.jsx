import React from 'react';

const GoToMarket = () => {
  return (
    <section className="py-24 md:py-36 px-6 md:px-24 bg-surface" id="go-to-market">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-16 md:mb-20">
          <div className="reveal mb-8">
             <span className="inline-block border-2 border-on-surface bg-transparent px-4 py-1 font-label-bold text-xs md:text-sm uppercase tracking-widest text-on-surface kinetic-border">
              Go-To-Market
            </span>
          </div>
          
          <div className="reveal" style={{ transitionDelay: '0.1s' }}>
            <h2 className="font-display-lg text-4xl sm:text-5xl md:text-7xl uppercase leading-[0.9] text-on-surface mb-6">
              PROOF FIRST. <span className="text-primary block sm:inline">NEGOTIATE FROM STRENGTH, NOT HOPE.</span>
            </h2>
            <p className="text-on-surface text-base md:text-lg leading-relaxed font-body-md opacity-90 max-w-4xl">
              We take a phased approach. In Phase 1, we secure private API deals with mid-size platforms—this is technically possible and benefits them as well. Then, backed by that data, we negotiate with Zomato and Swiggy.
            </p>
          </div>
        </div>

        {/* Phases Layout */}
        <div className="flex flex-col gap-8 md:gap-10">
          
          {/* Phase 1 - Full Width Box */}
          <div className="bg-surface-container rounded-3xl p-8 md:p-12 reveal">
            <span className="font-label-bold text-sm uppercase opacity-70 mb-4 block">Phase 1 — Month 0-9 · API Proof</span>
            <h3 className="font-display-lg text-3xl md:text-5xl uppercase mb-6 text-on-surface">ONDC + Regional platforms. Private agreements.</h3>
            <p className="text-on-surface text-base md:text-lg leading-relaxed font-body-md opacity-90 mb-8 max-w-4xl">
              ONDC is an open network—technical integration is possible. Rapido Food, Dunzo alternatives, and regional food apps have their APIs available and want us for growth. We sign private data-sharing agreements with 3 platforms. We launch the delivery partner app MVP. 1,000 partners, 2 cities, 500 orders/day.
            </p>
            <div className="flex flex-wrap gap-3">
              {['ONDC integration', 'Partner app MVP', '2 regional platform APIs', '1,000 verified partners', '500 orders/day target'].map((pill, i) => (
                <span key={i} className="inline-block border border-primary text-primary px-4 py-2 rounded-full font-label-bold text-sm bg-transparent hover:bg-primary/5 transition-colors">
                  {pill}
                </span>
              ))}
            </div>
          </div>

          {/* Grid for Phase 2 & 3 */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-10">
            
            {/* Phase 2 */}
            <div className="bg-surface-container rounded-3xl p-8 md:p-10 reveal" style={{ transitionDelay: '0.1s' }}>
              <span className="font-label-bold text-sm uppercase opacity-70 mb-4 block">Phase 2 — Month 9-18 · Scale + Data</span>
              <h3 className="font-display-lg text-3xl md:text-4xl uppercase mb-6 text-on-surface">Negotiate with data. Onboard mid-size platforms.</h3>
              <p className="text-on-surface text-base leading-relaxed font-body-md opacity-90 mb-8">
                Based on Phase 1 data: "We improved the fill rate by X and increased partners' income by Y%." Take this pitch to the city-level operations teams of Zepto and Instamart. They need overflow coverage—especially for Tier 2 expansion. 5,000 partners, 5 cities, B2B API revenue starts.
              </p>
              <div className="flex flex-wrap gap-3 mt-auto">
                {['Zepto partnership talks', '5K partners', '₹50L+ monthly revenue', 'Instamart overflow deal', 'B2B API launch'].map((pill, i) => (
                  <span key={i} className="inline-block border border-primary text-primary px-4 py-2 rounded-full font-label-bold text-xs bg-transparent hover:bg-primary/5 transition-colors">
                    {pill}
                  </span>
                ))}
              </div>
            </div>

            {/* Phase 3 */}
            <div className="bg-surface-container rounded-3xl p-8 md:p-10 reveal" style={{ transitionDelay: '0.2s' }}>
              <span className="font-label-bold text-sm uppercase opacity-70 mb-4 block">Phase 3 — Month 18+ · The Big Table</span>
              <h3 className="font-display-lg text-3xl md:text-4xl uppercase mb-6 text-on-surface">Zomato + Swiggy. We become a vendor, not a competitor.</h3>
              <p className="text-on-surface text-base leading-relaxed font-body-md opacity-90 mb-8">
                10,000+ verified partners, proven platform integration, and Series A numbers. There are two possible outcomes here: (1) Zomato and Swiggy enter into an enterprise deal with us for their overflow coverage. (2) They acquire us—just like UrbanPiper. Either way, the founders win.
              </p>
              <div className="flex flex-wrap gap-3 mt-auto">
                {['10K+ partner network', 'Series A raise', 'Enterprise API contracts', 'Acquisition-ready', '20+ cities'].map((pill, i) => (
                  <span key={i} className="inline-block border border-primary text-primary px-4 py-2 rounded-full font-label-bold text-xs bg-transparent hover:bg-primary/5 transition-colors">
                    {pill}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default GoToMarket;
