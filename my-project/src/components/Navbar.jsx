import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 z-50 w-full flex justify-between items-center px-4 md:px-24 transition-all duration-300 ${scrolled ? 'bg-black/95 backdrop-blur-md h-20 shadow-xl border-b-2 border-on-surface' : 'bg-transparent h-20 md:h-24'}`}>
      <div className={`flex items-center px-3 md:px-4 py-2 rounded-lg relative z-[60] transition-colors ${scrolled ? 'bg-transparent' : 'backdrop-blur-sm bg-black/20'}`}>
        <img alt="Deliver Unite Logo" className="h-6 md:h-14 w-auto object-contain brightness-0 invert" src="https://lh3.googleusercontent.com/aida/ADBb0uiJDczV-OUZzTOCOtLJxZpvJLDyMhQ7mg773Nvk4LPGhsI-Uk4zHOacB94v5vsn5oKMIUQ5LZfv3-VFgs3YvI5h9HBPvJy7rZLVXLpHqhvFOlfrqEiHw9HzSyK0oIxFqJgE62w0C8rfTazrsqLdpnWwPgqSqSojCsk9kY8XI9d5wYRkZGyi11aGo0wPhKlXvD3GCjQmBmabbMwWmz_qnI2WHVIJVOdQYADQR157PIni7a2Yku29PXEnYts"/>
      </div>
      
      {/* Desktop Links */}
      <div className="hidden lg:flex gap-12 items-center">
        <a className="text-white font-label-bold uppercase hover:text-primary transition-colors tracking-tighter drop-shadow-md" href="#problem">Problem</a>
        <a className="text-white font-label-bold uppercase hover:text-primary transition-colors tracking-tighter drop-shadow-md" href="#solution">Solution</a>
        <a className="text-white font-label-bold uppercase hover:text-primary transition-colors tracking-tighter drop-shadow-md" href="#market">Market</a>
        <a className="text-white font-label-bold uppercase hover:text-primary transition-colors tracking-tighter drop-shadow-md" href="#gtm">Roadmap</a>
      </div>
      
      <div className="hidden lg:block">
        <button className="bg-primary text-white font-headline-md uppercase px-8 py-3 border-2 border-primary hover:bg-white hover:text-primary transition-all">
          GET STARTED
        </button>
      </div>

      {/* Mobile Toggle */}
      <button 
        className="lg:hidden relative z-[60] text-white p-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="material-symbols-outlined text-4xl drop-shadow-lg">{isOpen ? 'close' : 'menu'}</span>
      </button>

      {/* Mobile Dropdown / Fullscreen */}
      <div className={`fixed inset-0 bg-black/95 backdrop-blur-xl z-50 flex flex-col items-center justify-center gap-8 transition-transform duration-500 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'} lg:hidden`}>
         <a onClick={() => setIsOpen(false)} className="text-white text-4xl font-display-lg uppercase tracking-widest hover:text-primary transition-colors" href="#problem">Problem</a>
         <a onClick={() => setIsOpen(false)} className="text-white text-4xl font-display-lg uppercase tracking-widest hover:text-primary transition-colors" href="#solution">Solution</a>
         <a onClick={() => setIsOpen(false)} className="text-white text-4xl font-display-lg uppercase tracking-widest hover:text-primary transition-colors" href="#market">Market</a>
         <a onClick={() => setIsOpen(false)} className="text-white text-4xl font-display-lg uppercase tracking-widest hover:text-primary transition-colors" href="#gtm">Roadmap</a>
         
         <button className="bg-primary text-white font-headline-md uppercase px-10 py-4 border-2 border-primary hover:bg-white hover:text-primary transition-all mt-8">
            GET STARTED
         </button>
      </div>
    </nav>
  );
};

export default Navbar;
