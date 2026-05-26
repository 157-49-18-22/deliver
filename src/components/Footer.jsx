import React from 'react';

const Footer = () => {
  return (
    <>
      {/* CALL TO ACTION (CINEMATIC) */}
      <section className="py-48 px-6 md:px-24 bg-on-surface text-surface text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://lh3.googleusercontent.com/aida-public/AB6AXuDM5Z-sXbPs7IYmHu8081Fia_xiAso66_Yt4QoUrlMfrnvxZQrgNQEMbEELy9gCvOVLCZzyecB51-9k5Iv8ZTG-erQjJeNL5yB2hqRx7dpvu-YY36m32nqaxlkUXjI0hKdDvYEuAeZXAIGCCGKsFTqYWhwz_giS8h7SopLWjYkBzee0PuxzlnjQxcI6nE0r_1fkhy13ERX3h4sm4K1h6tdO1wQ3i1BaVGpfpNGpRVsCtVSjFKmVka7ejTi1Pyr9cUEvDo96BQQpvlEJ')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-on-surface via-on-surface/90 to-on-surface"></div>
        <div className="max-w-5xl mx-auto relative z-10">
          <h2 className="font-display-lg text-8xl md:text-[10rem] uppercase mb-12 leading-[0.8] reveal">THANK YOU!</h2>
          <p className="font-display-lg text-3xl text-primary mb-16 uppercase tracking-[0.3em] reveal italic" style={{ transitionDelay: '0.1s' }}>REIMAGINING THE FUTURE, ONE IDEA AT A TIME.</p>
          <p className="font-headline-md text-2xl max-w-3xl mx-auto mb-16 opacity-80 leading-relaxed reveal" style={{ transitionDelay: '0.2s' }}>
            Deliver Unite operates as a scalable software and network infrastructure company with improving margins as the partner and platform network grows.
          </p>
          <div className="flex flex-col md:flex-row gap-6 max-w-2xl mx-auto reveal" style={{ transitionDelay: '0.3s' }}>
            <input className="flex-1 bg-white text-on-surface border-4 border-on-surface p-6 font-display-lg text-2xl uppercase focus:ring-0 focus:border-primary placeholder:text-on-surface/30" placeholder="WORK EMAIL" type="email" />
            <button className="bg-primary text-white font-display-lg text-3xl px-12 py-6 border-4 border-on-surface hard-shadow-white active:translate-y-1 transition-all uppercase italic">
              GET STARTED
            </button>
          </div>
          <p className="mt-20 font-label-bold uppercase tracking-widest opacity-40">MAYDIV INFOTECH PRIVATE LIMITED</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-inverse-surface text-white w-full border-t-8 border-primary">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 px-6 md:px-24 py-20 max-w-7xl mx-auto">
          <div className="flex flex-col items-center md:items-start gap-6">
            <img className="h-10 brightness-0 invert" alt="Deliver Unite Logo Footer" src="https://lh3.googleusercontent.com/aida/ADBb0uiJDczV-OUZzTOCOtLJxZpvJLDyMhQ7mg773Nvk4LPGhsI-Uk4zHOacB94v5vsn5oKMIUQ5LZfv3-VFgs3YvI5h9HBPvJy7rZLVXLpHqhvFOlfrqEiHw9HzSyK0oIxFqJgE62w0C8rfTazrsqLdpnWwPgqSqSojCsk9kY8XI9d5wYRkZGyi11aGo0wPhKlXvD3GCjQmBmabbMwWmz_qnI2WHVIJVOdQYADQR157PIni7a2Yku29PXEnYts" />
            <p className="font-label-bold uppercase opacity-60 tracking-widest">© 2026 DELIVER UNITE. DISRUPTING INFRASTRUCTURE.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-12">
            <a className="font-display-lg text-xl uppercase hover:text-primary transition-all italic" href="#problem">The Problem</a>
            <a className="font-display-lg text-xl uppercase hover:text-primary transition-all italic" href="#solution">The Solution</a>
            <a className="font-display-lg text-xl uppercase hover:text-primary transition-all italic" href="#market">Market</a>
            <a className="font-display-lg text-xl uppercase hover:text-primary transition-all italic" href="#">Privacy</a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
