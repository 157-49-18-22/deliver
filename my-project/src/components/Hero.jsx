import React, { useState, useEffect } from 'react';

const Hero = () => {
  const images = [
    'https://images.unsplash.com/photo-1617195737496-bc30194e3a19?auto=format&fit=crop&q=80&w=2000',
    'https://images.unsplash.com/photo-1580674285054-bed31e145f59?auto=format&fit=crop&q=80&w=2000',
    'https://images.unsplash.com/photo-1596280036104-58e11a37c050?auto=format&fit=crop&q=80&w=2000'
  ];

  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setBgIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 4000); // changes every 4 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 md:px-24 py-24 overflow-hidden">
      {/* Background Images Slider */}
      {images.map((img, i) => (
        <div 
          key={i}
          className={`absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ease-in-out ${bgIndex === i ? 'opacity-100 scale-105 z-0' : 'opacity-0 scale-100 -z-10'}`}
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70 z-0"></div>
      
      <div className="absolute inset-0 grid-bg opacity-30 z-0"></div>
      
      <div className="relative z-10 max-w-6xl w-full flex flex-col items-center mt-12 md:mt-0">
        <div className="inline-block bg-primary text-white px-3 md:px-4 py-1 mb-6 font-label-bold text-xs md:text-sm uppercase tracking-widest kinetic-border">Introducing Maydiv Infotech</div>
        <h1 className="font-display-lg text-4xl sm:text-7xl md:text-9xl text-white leading-[0.9] uppercase mb-6 md:mb-8 text-center px-2">
          THE OS FOR <br/>
          <span className="text-primary italic text-[2.7rem] sm:text-7xl md:text-9xl block mt-2">DELIVERY PARTNERS.</span>
        </h1>
        <p className="font-headline-md text-sm sm:text-lg md:text-2xl text-white/90 uppercase tracking-[0.1em] md:tracking-[0.2em] mb-10 max-w-4xl mx-auto px-4 leading-relaxed">
          WE DON'T BUILD THE FLEET. WE PROVIDE THE INTELLIGENCE THAT RUNS IT.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="bg-primary text-white font-headline-lg text-lg md:text-xl px-8 md:px-12 py-4 md:py-6 border-2 border-on-surface hard-shadow-white hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all uppercase italic">
            JOIN THE REVOLUTION
          </button>
        </div>
      </div>

      {/* Slider dots */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-4 z-20">
        {images.map((_, i) => (
          <button 
            key={i}
            onClick={() => setBgIndex(i)}
            className={`h-3 rounded-full transition-all duration-300 ${bgIndex === i ? 'bg-primary w-8' : 'bg-white/50 w-3 hover:bg-white'}`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
