import React from 'react';

const BizModel = () => {
  return (
    <section className="py-24 md:py-36 px-6 md:px-24 bg-surface" id="biz-model">
      <div className="max-w-7xl mx-auto">
        
        {/* Part 1: Three Streams */}
        <div className="mb-24">
          <div className="reveal mb-8">
             <span className="inline-block border-2 border-on-surface bg-transparent px-4 py-1 font-label-bold text-xs md:text-sm uppercase tracking-widest text-on-surface kinetic-border">
              Biz Model
            </span>
          </div>
          
          <div className="reveal mb-16" style={{ transitionDelay: '0.1s' }}>
            <h2 className="font-display-lg text-4xl sm:text-5xl md:text-7xl uppercase leading-[0.9] text-on-surface mb-6">
              THREE STREAMS. ALL RECURRING. ALL DEFENSIBLE.
            </h2>
            <p className="text-on-surface text-base md:text-lg leading-relaxed font-body-md opacity-90 max-w-4xl">
              We are asset-light—no fleet, no dark stores, no inventory. A pure software + network play. Margins improve as partners and platforms scale.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {/* Card 1 */}
            <div className="group bg-primary text-white p-8 md:p-10 rounded-2xl reveal border-4 border-transparent hover:border-on-surface hover:hard-shadow transition-all duration-300">
              <span className="font-label-bold text-xs uppercase opacity-80 block mb-6 border-b border-white/20 pb-4">Stream 01 · Day 1</span>
              <h3 className="font-label-bold text-xl md:text-2xl mb-4">Platform API Fee</h3>
              <div className="font-display-lg text-5xl md:text-7xl mb-8">₹3-8</div>
              <p className="font-body-md text-sm md:text-base opacity-90 leading-relaxed">
                Per order routed through DeliverUnite. The platform pays. Low per-unit but high volume. 500 orders/day = ₹15K-40K/day revenue at the seed stage.
              </p>
            </div>

            {/* Card 2 */}
            <div className="group bg-primary text-white p-8 md:p-10 rounded-2xl reveal border-4 border-transparent hover:border-on-surface hover:hard-shadow transition-all duration-300" style={{ transitionDelay: '0.1s' }}>
              <span className="font-label-bold text-xs uppercase opacity-80 block mb-6 border-b border-white/20 pb-4">Stream 02 · Month 6</span>
              <h3 className="font-label-bold text-xl md:text-2xl mb-4">Partner Pro Subscription</h3>
              <div className="font-display-lg text-4xl md:text-6xl mb-8">₹199<br/><span className="text-2xl md:text-4xl text-white/80">PER MO.</span></div>
              <p className="font-body-md text-sm md:text-base opacity-90 leading-relaxed">
                Advanced features—priority order matching, earnings analytics, multi-city mode, guaranteed minimum orders. Optional, freemium conversion model.
              </p>
            </div>

            {/* Card 3 */}
            <div className="group bg-primary text-white p-8 md:p-10 rounded-2xl reveal border-4 border-transparent hover:border-on-surface hover:hard-shadow transition-all duration-300" style={{ transitionDelay: '0.2s' }}>
              <span className="font-label-bold text-xs uppercase opacity-80 block mb-6 border-b border-white/20 pb-4">Stream 03 · Month 6</span>
              <h3 className="font-label-bold text-xl md:text-2xl mb-4">Enterprise API License</h3>
              <div className="font-display-lg text-4xl md:text-6xl mb-8">₹2-10L<br/><span className="text-2xl md:text-4xl text-white/80">PER MO.</span></div>
              <p className="font-body-md text-sm md:text-base opacity-90 leading-relaxed">
                Full API integration, real-time partner availability data, and SLA-backed uptime. White-label option. Per-platform, per-city pricing. Sticky, high-margin contracts.
              </p>
            </div>
          </div>
        </div>

        {/* Part 2: Revenue Projection */}
        <div className="pt-16 border-t border-on-surface/10">
          <div className="reveal mb-8">
             <span className="inline-block border-2 border-on-surface bg-transparent px-4 py-1 font-label-bold text-xs md:text-sm uppercase tracking-widest text-on-surface kinetic-border">
              Biz Model
            </span>
          </div>
          
          <div className="reveal mb-16">
            <h2 className="font-display-lg text-4xl sm:text-5xl md:text-6xl uppercase leading-[0.9] text-on-surface">
              REVENUE PROJECTION — <span className="text-primary italic">CONSERVATIVE</span>
            </h2>
          </div>

          {/* Chart */}
          <div className="relative mb-20 max-w-5xl mx-auto px-4 md:px-0">
            {/* Grid lines */}
            <div className="absolute inset-0 left-24 md:left-32 grid grid-cols-5 pointer-events-none opacity-20 hidden md:grid">
              <div className="border-l border-on-surface h-full"></div>
              <div className="border-l border-on-surface h-full"></div>
              <div className="border-l border-on-surface h-full"></div>
              <div className="border-l border-on-surface h-full"></div>
              <div className="border-l border-on-surface h-full"></div>
            </div>

            <div className="flex flex-col gap-6 md:gap-8 relative z-10 font-label-bold text-sm md:text-base">
              {/* Row 1 */}
              <div className="flex items-center gap-4 group reveal" style={{ transitionDelay: '0.1s' }}>
                <div className="w-20 md:w-28 text-right opacity-70">Month 6</div>
                <div className="h-10 md:h-12 bg-surface-variant flex items-center justify-end px-4 rounded-r-md min-w-[80px]" style={{ width: '10%' }}>
                  <span className="opacity-80">₹12L/mo</span>
                </div>
              </div>

              {/* Row 2 */}
              <div className="flex items-center gap-4 group reveal" style={{ transitionDelay: '0.2s' }}>
                <div className="w-20 md:w-28 text-right opacity-70">Month 12</div>
                <div className="h-10 md:h-12 bg-surface-variant/80 flex items-center justify-end px-4 rounded-r-md min-w-[120px]" style={{ width: '25%' }}>
                  <span className="opacity-80">₹45L/mo</span>
                </div>
              </div>

              {/* Row 3 */}
              <div className="flex items-center gap-4 group reveal" style={{ transitionDelay: '0.3s' }}>
                <div className="w-20 md:w-28 text-right opacity-70">Month 18</div>
                <div className="h-10 md:h-12 bg-on-surface text-surface flex items-center justify-end px-4 rounded-r-md min-w-[160px]" style={{ width: '45%' }}>
                  <span className="font-label-bold">₹120L/mo</span>
                </div>
              </div>

              {/* Row 4 */}
              <div className="flex items-center gap-4 group reveal" style={{ transitionDelay: '0.4s' }}>
                <div className="w-20 md:w-28 text-right font-display-lg text-lg opacity-90">Month 24</div>
                <div className="h-10 md:h-14 bg-primary text-white flex items-center justify-end px-4 rounded-r-md min-w-[200px]" style={{ width: '85%' }}>
                  <span className="font-display-lg text-xl tracking-wider">₹450L/mo</span>
                </div>
              </div>
            </div>

            {/* X-Axis labels for desktop */}
            <div className="hidden md:flex absolute -bottom-8 left-32 right-0 justify-between font-label-bold text-xs opacity-50 px-2 pr-10">
              <span>₹0L/mo</span>
              <span>₹100L/mo</span>
              <span>₹200L/mo</span>
              <span>₹300L/mo</span>
              <span>₹400L/mo</span>
              <span>₹500L/mo</span>
            </div>
          </div>

          {/* Unit Economics footer */}
          <div className="bg-surface-container rounded-2xl p-6 md:p-8 reveal" style={{ transitionDelay: '0.5s' }}>
            <h4 className="font-display-lg text-xl md:text-2xl uppercase mb-3">Unit Economics — Healthy</h4>
            <p className="font-body-md text-sm md:text-base opacity-80 leading-relaxed">
              <strong>CAC:</strong> ₹200-400/partner (referral-led, driver communities). <strong>LTV:</strong> ₹3,000-8,000 (Pro sub × 18 months + API share). <strong>LTV:CAC</strong> = 8-20x. Platform API = zero CAC, pure margin.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default BizModel;
