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
            Deliver Unite is an asset-light business with no fleet ownership, inventory, or dark stores. It operates as a scalable software and network infrastructure company with improving margins as the partner and platform network grows.
          </p>

          {/* Contact Row */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-8 md:gap-16 reveal mt-12" style={{ transitionDelay: '0.3s' }}>
            <a href="mailto:operations@maydiv.com" className="flex items-center gap-3 text-white hover:text-primary transition-colors group">
              <span className="material-symbols-outlined text-primary text-3xl">mail</span>
              <span className="font-label-bold text-base md:text-lg uppercase tracking-widest">operations@maydiv.com</span>
            </a>
            <a href="mailto:operation@maydiv.com" className="flex items-center gap-3 text-white hover:text-primary transition-colors group">
              <span className="material-symbols-outlined text-primary text-3xl">language</span>
              <span className="font-label-bold text-base md:text-lg uppercase tracking-widest">operation@maydiv.com</span>
            </a>
            <a href="tel:+919220438999" className="flex items-center gap-3 text-white hover:text-primary transition-colors group">
              <span className="material-symbols-outlined text-primary text-3xl">phone</span>
              <span className="font-label-bold text-base md:text-lg uppercase tracking-widest">+91-9220438999</span>
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-inverse-surface text-white w-full border-t-8 border-primary">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 px-6 md:px-24 py-20 max-w-7xl mx-auto">
          <div className="flex flex-col items-center md:items-start gap-4">
            <img className="h-32 md:h-40 xl:h-[12rem] w-auto scale-125 md:scale-150 origin-center md:origin-left" alt="Deliver Unite Logo Footer" src="/logo.png" />
            <p className="font-label-bold uppercase opacity-60 tracking-widest text-xs mt-6">© 2026 DELIVER UNITE. DISRUPTING INFRASTRUCTURE.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            <a className="font-display-lg text-base md:text-xl uppercase hover:text-primary transition-all italic relative group" href="#problem">Problem<span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary group-hover:w-full transition-all duration-300"></span></a>
            <a className="font-display-lg text-base md:text-xl uppercase hover:text-primary transition-all italic relative group" href="#solution">Solution<span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary group-hover:w-full transition-all duration-300"></span></a>
            <a className="font-display-lg text-base md:text-xl uppercase hover:text-primary transition-all italic relative group" href="#market">Market<span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary group-hover:w-full transition-all duration-300"></span></a>
            <a className="font-display-lg text-base md:text-xl uppercase hover:text-primary transition-all italic relative group" href="#seed-round">Seed Round<span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary group-hover:w-full transition-all duration-300"></span></a>
            <a className="font-display-lg text-base md:text-xl uppercase hover:text-primary transition-all italic relative group" href="#go-to-market">Go-To-Market<span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary group-hover:w-full transition-all duration-300"></span></a>
            <a className="font-display-lg text-base md:text-xl uppercase hover:text-primary transition-all italic relative group" href="#biz-model">Biz Model<span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary group-hover:w-full transition-all duration-300"></span></a>
            <a className="font-display-lg text-base md:text-xl uppercase hover:text-primary transition-all italic relative group" href="#founders">Founders<span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary group-hover:w-full transition-all duration-300"></span></a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
