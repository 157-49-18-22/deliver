import React from 'react';

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full border-b-4 border-on-surface bg-surface flex justify-between items-center px-6 md:px-24 h-24">
      <div className="flex items-center">
        <img alt="Deliver Unite Logo" className="h-10 md:h-14 w-auto object-contain" src="https://lh3.googleusercontent.com/aida/ADBb0uiJDczV-OUZzTOCOtLJxZpvJLDyMhQ7mg773Nvk4LPGhsI-Uk4zHOacB94v5vsn5oKMIUQ5LZfv3-VFgs3YvI5h9HBPvJy7rZLVXLpHqhvFOlfrqEiHw9HzSyK0oIxFqJgE62w0C8rfTazrsqLdpnWwPgqSqSojCsk9kY8XI9d5wYRkZGyi11aGo0wPhKlXvD3GCjQmBmabbMwWmz_qnI2WHVIJVOdQYADQR157PIni7a2Yku29PXEnYts"/>
      </div>
      <div className="hidden lg:flex gap-12 items-center">
        <a className="text-on-surface font-label-bold uppercase hover:text-primary transition-colors tracking-tighter" href="#problem">Problem</a>
        <a className="text-on-surface font-label-bold uppercase hover:text-primary transition-colors tracking-tighter" href="#solution">Solution</a>
        <a className="text-on-surface font-label-bold uppercase hover:text-primary transition-colors tracking-tighter" href="#market">Market</a>
        <a className="text-on-surface font-label-bold uppercase hover:text-primary transition-colors tracking-tighter" href="#gtm">Roadmap</a>
      </div>
      <button className="bg-primary text-white font-headline-md uppercase px-8 py-3 border-2 border-on-surface hard-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
        GET STARTED
      </button>
    </nav>
  );
};

export default Navbar;
