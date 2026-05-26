import React from 'react';

const Details = () => {
  return (
    <>
      <section className="py-32 px-6 md:px-24 bg-surface-container border-y-4 border-on-surface">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display-lg text-5xl md:text-7xl uppercase mb-16 reveal">MARKET TAILWINDS</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 border-2 border-on-surface hard-shadow reveal">
              <h4 className="font-display-lg text-2xl text-primary mb-4 uppercase">Q-COMMERCE BOOM</h4>
              <p className="font-body-md">Rapid growth in 10-minute delivery is creating unprecedented demand for optimized supply.</p>
            </div>
            <div className="bg-white p-8 border-2 border-on-surface hard-shadow reveal" style={{transitionDelay: '0.1s'}}>
              <h4 className="font-display-lg text-2xl text-primary mb-4 uppercase">GIG WORKER SCALE</h4>
              <p className="font-body-md">India's gig workforce is expected to reach 2.35 crore by 2030, all needing better income tools.</p>
            </div>
            <div className="bg-white p-8 border-2 border-on-surface hard-shadow reveal" style={{transitionDelay: '0.2s'}}>
              <h4 className="font-display-lg text-2xl text-primary mb-4 uppercase">ONDC DISRUPTION</h4>
              <p className="font-body-md">The Open Network for Digital Commerce is democratizing logistics and breaking platform silos.</p>
            </div>
            <div className="bg-white p-8 border-2 border-on-surface hard-shadow reveal" style={{transitionDelay: '0.3s'}}>
              <h4 className="font-display-lg text-2xl text-primary mb-4 uppercase">PROVEN PLAYBOOK</h4>
              <p className="font-body-md">Success stories like UrbanPiper prove that middle-layer infrastructure is where true value scales.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 px-6 md:px-24 bg-surface">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display-lg text-6xl md:text-8xl uppercase mb-16 text-center reveal">COMPETITIVE LANDSCAPE</h2>
          <div className="overflow-x-auto border-4 border-on-surface hard-shadow reveal">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="table-header">
                  <th className="table-cell">FEATURE</th>
                  <th className="table-cell">SHADOWFAX</th>
                  <th className="table-cell">PORTER</th>
                  <th className="table-cell">WEFAST</th>
                  <th className="table-cell bg-primary text-white border-primary">DELIVER UNITE</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                <tr>
                  <td className="table-cell font-display-lg uppercase">Fleet Ownership</td>
                  <td className="table-cell">Managed</td>
                  <td className="table-cell">Managed</td>
                  <td className="table-cell">Open</td>
                  <td className="table-cell font-bold text-primary">INFRASTRUCTURE ONLY</td>
                </tr>
                <tr>
                  <td className="table-cell font-display-lg uppercase">API Aggregation</td>
                  <td className="table-cell">No</td>
                  <td className="table-cell">No</td>
                  <td className="table-cell">No</td>
                  <td className="table-cell font-bold text-primary">YES</td>
                </tr>
                <tr>
                  <td className="table-cell font-display-lg uppercase">Cross-Platform Sync</td>
                  <td className="table-cell">Limited</td>
                  <td className="table-cell">No</td>
                  <td className="table-cell">No</td>
                  <td className="table-cell font-bold text-primary">FULL</td>
                </tr>
                <tr>
                  <td className="table-cell font-display-lg uppercase">Idle Time Focus</td>
                  <td className="table-cell">Internal Only</td>
                  <td className="table-cell">Partial</td>
                  <td className="table-cell">No</td>
                  <td className="table-cell font-bold text-primary">CORE MISSION</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-16 bg-on-surface text-white p-12 border-4 border-on-surface hard-shadow-primary reveal">
            <h3 className="font-display-lg text-3xl mb-6 uppercase text-primary italic">UrbanPiper Proof Point</h3>
            <p className="font-headline-md text-2xl leading-relaxed">"UrbanPiper became the standard for restaurant integration. We are building that same standard for delivery supply. Integration is the ultimate competitive advantage."</p>
          </div>
        </div>
      </section>

      <section className="py-32 px-6 md:px-24 bg-inverse-surface text-white" id="gtm">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display-lg text-6xl md:text-8xl uppercase text-primary mb-24 italic reveal">ROADMAP TO SCALE</h2>
          <div className="space-y-12">
            <div className="grid lg:grid-cols-12 gap-0 border-4 border-white hard-shadow-primary reveal">
              <div className="lg:col-span-2 bg-primary flex items-center justify-center p-8 lg:border-r-4 border-white">
                <span className="font-display-lg text-8xl text-white">01</span>
              </div>
              <div className="lg:col-span-10 p-10 bg-on-surface">
                <h3 className="font-display-lg text-4xl text-primary mb-6 uppercase">PHASE 1: INFRASTRUCTURE &amp; PROOF</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <ul className="space-y-3 font-label-bold uppercase">
                    <li className="flex gap-4"><span className="text-primary">▶</span> API Aggregation Layer Dev</li>
                    <li className="flex gap-4"><span className="text-primary">▶</span> First-Mover Platform Tie-ups</li>
                  </ul>
                  <ul className="space-y-3 font-label-bold uppercase">
                    <li className="flex gap-4"><span className="text-primary">▶</span> Beta Launch (100 Partners)</li>
                    <li className="flex gap-4"><span className="text-primary">▶</span> Private API Security Audit</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="grid lg:grid-cols-12 gap-0 border-4 border-white hard-shadow-primary reveal" style={{transitionDelay: '0.1s'}}>
              <div className="lg:col-span-2 bg-primary flex items-center justify-center p-8 lg:border-r-4 border-white">
                <span className="font-display-lg text-8xl text-white">02</span>
              </div>
              <div className="lg:col-span-10 p-10 bg-on-surface">
                <h3 className="font-display-lg text-4xl text-primary mb-6 uppercase">PHASE 2: NETWORK SCALE + DATA</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <ul className="space-y-3 font-label-bold uppercase">
                    <li className="flex gap-4"><span className="text-primary">▶</span> Mass Partner Onboarding</li>
                    <li className="flex gap-4"><span className="text-primary">▶</span> Dynamic Load Balancing</li>
                  </ul>
                  <ul className="space-y-3 font-label-bold uppercase">
                    <li className="flex gap-4"><span className="text-primary">▶</span> Tier-1 City Expansion</li>
                    <li className="flex gap-4"><span className="text-primary">▶</span> Real-time Supply Analytics</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-12 gap-0 border-4 border-white hard-shadow-primary reveal" style={{transitionDelay: '0.2s'}}>
              <div className="lg:col-span-2 bg-primary flex items-center justify-center p-8 lg:border-r-4 border-white">
                <span className="font-display-lg text-8xl text-white">03</span>
              </div>
              <div className="lg:col-span-10 p-10 bg-on-surface">
                <h3 className="font-display-lg text-4xl text-primary mb-6 uppercase">PHASE 3: THE UNIFIED OS</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <ul className="space-y-3 font-label-bold uppercase">
                    <li className="flex gap-4"><span className="text-primary">▶</span> Global Logistics Integration</li>
                    <li className="flex gap-4"><span className="text-primary">▶</span> Predictive Supply Models</li>
                  </ul>
                  <ul className="space-y-3 font-label-bold uppercase">
                    <li className="flex gap-4"><span className="text-primary">▶</span> Standard for Urban Logistics</li>
                    <li className="flex gap-4"><span className="text-primary">▶</span> Cross-Market Tech Licensing</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 px-6 md:px-24 bg-surface overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display-lg text-6xl md:text-8xl uppercase mb-20 reveal">BUSINESS MODEL</h2>
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-10">
              <div className="bg-white p-10 border-4 border-on-surface hard-shadow-primary reveal">
                <h3 className="font-display-lg text-3xl text-primary mb-4 uppercase">Platform API Fee</h3>
                <p className="font-body-lg italic">"Pay-as-you-scale transaction model"</p>
                <p className="font-body-md mt-4 opacity-70">Scalable fees for every successfully coordinated delivery through our integration layer.</p>
              </div>
              <div className="bg-white p-10 border-4 border-on-surface hard-shadow-primary reveal" style={{transitionDelay: '0.1s'}}>
                <h3 className="font-display-lg text-3xl text-primary mb-4 uppercase">Partner Pro Subscription</h3>
                <p className="font-body-lg italic">"Value-added tools for higher yield"</p>
                <p className="font-body-md mt-4 opacity-70">Premium features for delivery partners to maximize daily earnings and minimize downtime.</p>
              </div>
            </div>
            <div className="reveal" style={{transitionDelay: '0.2s'}}>
              <div className="bg-on-surface text-white p-10 border-4 border-on-surface hard-shadow h-full">
                <h3 className="font-display-lg text-3xl text-primary mb-10 uppercase italic">UNIT ECONOMICS</h3>
                <div className="space-y-8">
                  <div className="flex justify-between items-center border-b-2 border-white/20 pb-4">
                    <span className="font-label-bold uppercase text-lg">Partner CAC</span>
                    <span className="font-display-lg text-3xl text-primary">₹140</span>
                  </div>
                  <div className="flex justify-between items-center border-b-2 border-white/20 pb-4">
                    <span className="font-label-bold uppercase text-lg">Partner LTV (12M)</span>
                    <span className="font-display-lg text-3xl text-primary">₹2,800</span>
                  </div>
                  <div className="flex justify-between items-center border-b-2 border-white/20 pb-4">
                    <span className="font-label-bold uppercase text-lg">Payback Period</span>
                    <span className="font-display-lg text-3xl text-primary">&lt; 2 Months</span>
                  </div>
                  <div className="mt-10 p-6 bg-white/5 border border-white/20">
                    <p className="font-body-md opacity-60">"Aggressive growth forecast based on current market idle time reduction targets."</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 px-6 md:px-24 bg-primary text-white border-y-8 border-on-surface">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5 reveal">
              <h2 className="font-display-lg text-6xl md:text-8xl uppercase mb-8 leading-none">INVESTMENT ASK</h2>
              <div className="font-display-lg mb-6 flex items-baseline gap-4 tracking-tighter">
                <span className="text-9xl md:text-[10rem] leading-none">₹2</span>
                <span className="text-4xl md:text-5xl uppercase tracking-normal">Crore</span>
              </div>
              <div className="inline-block bg-white text-primary px-6 py-2 font-display-lg text-2xl uppercase italic kinetic-border">Seed Round</div>
            </div>
            <div className="lg:col-span-7 reveal" style={{transitionDelay: '0.1s'}}>
              <div className="bg-white text-on-surface p-10 border-4 border-on-surface hard-shadow">
                <div className="grid md:grid-cols-2 gap-12">
                  <div>
                    <h3 className="font-display-lg text-3xl mb-8 text-primary uppercase">USE OF FUNDS</h3>
                    <ul className="space-y-6 font-display-lg uppercase text-xl">
                      <li className="flex justify-between border-b-4 border-surface-variant pb-2"><span>Product &amp; Tech</span><span>50%</span></li>
                      <li className="flex justify-between border-b-4 border-surface-variant pb-2"><span>Operations</span><span>20%</span></li>
                      <li className="flex justify-between border-b-4 border-surface-variant pb-2"><span>GTM &amp; Sales</span><span>20%</span></li>
                      <li className="flex justify-between border-b-4 border-surface-variant pb-2"><span>Reserves</span><span>10%</span></li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-display-lg text-3xl mb-8 text-primary uppercase">MILESTONES</h3>
                    <ul className="space-y-6 font-label-bold uppercase">
                      <li className="flex gap-4 items-start"><span className="text-primary text-2xl leading-none">●</span> <span>Partner count: 50,000+ Active</span></li>
                      <li className="flex gap-4 items-start"><span className="text-primary text-2xl leading-none">●</span> <span>Expansion to 5 Tier-1 Cities</span></li>
                      <li className="flex gap-4 items-start"><span className="text-primary text-2xl leading-none">●</span> <span>5 Platform Integrations Complete</span></li>
                      <li className="flex gap-4 items-start"><span className="text-primary text-2xl leading-none">●</span> <span>Series A Readiness in 18 Months</span></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 px-6 md:px-24 bg-surface">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display-lg text-6xl md:text-8xl uppercase mb-20 text-center reveal italic">WHY NOW?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-10 border-4 border-on-surface hard-shadow bg-white reveal">
              <div className="text-primary font-display-lg text-5xl mb-4">$12.97B</div>
              <p className="font-display-lg text-xl uppercase mb-4">The Market Gap</p>
              <p className="font-body-md opacity-70">Zero solutions currently exist for the delivery boy's efficiency. Fragmented landscape is ripe for aggregation.</p>
            </div>
            <div className="p-10 border-4 border-on-surface hard-shadow bg-white reveal" style={{transitionDelay: '0.1s'}}>
              <div className="text-primary font-display-lg text-5xl mb-4">PROVEN</div>
              <p className="font-display-lg text-xl uppercase mb-4">Playbook Standard</p>
              <p className="font-body-md opacity-70">Supply-side integration is a validated model in other verticals. We are the first to bring it to Indian logistics.</p>
            </div>
            <div className="p-10 border-4 border-on-surface hard-shadow bg-white reveal" style={{transitionDelay: '0.2s'}}>
              <div className="text-primary font-display-lg text-5xl mb-4">PEAK</div>
              <p className="font-display-lg text-xl uppercase mb-4">Demand Surge</p>
              <p className="font-body-md opacity-70">Q-commerce and D2C growth are creating massive supply demand that can only be solved through tech intelligence.</p>
            </div>
            <div className="p-10 border-4 border-on-surface hard-shadow bg-white reveal" style={{transitionDelay: '0.3s'}}>
              <div className="text-primary font-display-lg text-5xl mb-4">EXIT</div>
              <p className="font-display-lg text-xl uppercase mb-4">Strategic Value</p>
              <p className="font-body-md opacity-70">Multiple strategic exit routes through logistics giants, q-commerce leaders, or tech infrastructure IPO.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Details;
