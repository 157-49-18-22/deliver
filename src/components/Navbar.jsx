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
          if (rect.top <= window.innerHeight * 0.4 && rect.bottom >= window.innerHeight * 0.4) {
            currentSection = section;
            break;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const navLinks = [
    { id: 'problem', label: 'Problem' },
    { id: 'solution', label: 'Solution' },
    { id: 'market', label: 'Market' },
    { id: 'seed-round', label: 'Seed Round' },
    { id: 'go-to-market', label: 'Go-To-Market' },
    { id: 'biz-model', label: 'Biz Model' },
    { id: 'founders', label: 'Founders' },
  ];

  const handleLinkClick = () => setIsOpen(false);

  return (
    <nav className={`fixed top-0 z-50 w-full flex justify-between items-center px-4 md:px-16 transition-all duration-500 overflow-visible py-2 ${scrolled ? 'bg-white/95 backdrop-blur-md h-24 md:h-28 shadow-md border-b-2 border-surface-variant' : 'bg-transparent h-24 md:h-32'}`}>
      <div className="flex items-center relative z-[60] ml-2 lg:ml-6 mt-1 overflow-visible shrink-0">
        <img alt="Deliver Unite Logo" className="h-20 md:h-24 lg:h-28 w-auto object-contain transition-all duration-500 scale-125 origin-left" src="/logo.png" />
      </div>

      {/* Desktop nav links */}
      <div className="hidden md:flex gap-3 sm:gap-5 lg:gap-8 xl:gap-10 items-center overflow-x-auto whitespace-nowrap px-2 md:px-4 flex-1 justify-center min-w-0" style={{ scrollbarWidth: 'none' }}>
        {navLinks.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            className={`font-display-lg uppercase transition-all tracking-wider text-sm sm:text-base xl:text-lg relative group shrink-0 ${activeSection === link.id
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

      <div className="hidden lg:block ml-4 relative z-[60] shrink-0">
        <button type="button" className="bg-primary text-white font-headline-md uppercase px-8 py-3 border-2 border-primary hover:bg-white hover:text-primary transition-all">
          GET STARTED
        </button>
      </div>

      {/* Mobile hamburger */}
      <button
        type="button"
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isOpen}
        className="md:hidden relative z-[60] text-on-surface p-2 -mr-1 shrink-0"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="material-symbols-outlined text-4xl drop-shadow-sm">{isOpen ? 'close' : 'menu'}</span>
      </button>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 bg-white/98 backdrop-blur-xl z-[55] flex flex-col items-center justify-center gap-6 transition-all duration-500 ease-in-out md:hidden ${isOpen ? 'opacity-100 visible pointer-events-auto' : 'opacity-0 invisible pointer-events-none'}`}
        aria-hidden={!isOpen}
      >
        {navLinks.map((link) => (
          <a
            key={link.id}
            onClick={handleLinkClick}
            className={`text-2xl font-display-lg uppercase tracking-widest transition-colors ${activeSection === link.id ? 'text-primary' : 'text-on-surface hover:text-primary/70'}`}
            href={`#${link.id}`}
          >
            {link.label}
          </a>
        ))}
        <button
          type="button"
          onClick={handleLinkClick}
          className="bg-primary text-white font-headline-md uppercase px-10 py-4 border-2 border-primary hover:bg-white hover:text-primary transition-all mt-8"
        >
          GET STARTED
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
