import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ['problem', 'solution', 'market', 'seed-round', 'go-to-market', 'biz-model', 'founders'];
      let currentSection = '';

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Adjust threshold - if top quarter is within view
          if (rect.top <= window.innerHeight * 0.4 && rect.bottom >= window.innerHeight * 0.4) {
            currentSection = section;
            break;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'problem', label: 'Problem' },
    { id: 'solution', label: 'Solution' },
    { id: 'market', label: 'Market' },
    { id: 'seed-round', label: 'Seed Round' },
    { id: 'go-to-market', label: 'Go-To-Market' },
    { id: 'biz-model', label: 'Biz Model' },
    { id: 'founders', label: 'Founders' },
  ];

  return (
    <nav className={`fixed top-0 z-50 w-full flex justify-between items-center px-4 md:px-16 transition-all duration-500 overflow-visible py-2 ${scrolled ? 'bg-white/95 backdrop-blur-md h-24 md:h-28 shadow-md border-b-2 border-surface-variant' : 'bg-transparent h-24 md:h-32'}`}>
      <div className="flex items-center relative z-[60] ml-2 lg:ml-6 mt-1 overflow-visible">
        <img alt="Deliver Unite Logo" className="h-20 md:h-24 lg:h-28 w-auto object-contain transition-all duration-500 scale-125 origin-left" src="/logo.png" />
      </div>

      {/* Desktop Links */}
      <div className="flex gap-3 sm:gap-5 lg:gap-8 xl:gap-10 items-center overflow-x-auto whitespace-nowrap px-2 md:px-4 w-full justify-center" style={{ scrollbarWidth: 'none' }}>
        {navLinks.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            className={`font-display-lg uppercase transition-all tracking-wider text-sm sm:text-base xl:text-lg relative group ${activeSection === link.id
              ? 'text-primary'
              : 'text-on-surface hover:text-primary'
              }`}
          >
            {link.label}
            <span className={`absolute -bottom-1 left-0 h-[2px] bg-primary transition-all duration-300 ${activeSection === link.id ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
          </a>
        ))}
      </div>

      <div className="hidden lg:block ml-4 relative z-[60]">
        <button className="bg-primary text-white font-headline-md uppercase px-8 py-3 border-2 border-primary hover:bg-white hover:text-primary transition-all">
          GET STARTED
        </button>
      </div>

      {/* Mobile Toggle */}
      <button
        className="hidden relative z-[60] text-on-surface p-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="material-symbols-outlined text-4xl drop-shadow-sm">{isOpen ? 'close' : 'menu'}</span>
      </button>

      {/* Mobile Dropdown / Fullscreen */}
      <div className={`fixed inset-0 bg-white/95 backdrop-blur-xl z-50 flex flex-col items-center justify-center gap-6 transition-transform duration-500 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'} hidden`}>
        {navLinks.map((link) => (
          <a
            key={link.id}
            onClick={() => setIsOpen(false)}
            className={`text-3xl font-display-lg uppercase tracking-widest transition-colors ${activeSection === link.id ? 'text-primary' : 'text-on-surface hover:text-primary/70'}`}
            href={`#${link.id}`}
          >
            {link.label}
          </a>
        ))}
        <button className="bg-primary text-white font-headline-md uppercase px-10 py-4 border-2 border-primary hover:bg-white hover:text-primary transition-all mt-8">
          GET STARTED
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
