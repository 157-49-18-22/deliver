import React from 'react';

const ContactForm = () => {
  return (
    <section className="relative py-20 px-4 md:px-12 lg:px-20 bg-transparent" id="invest">
      <div className="max-w-[1000px] mx-auto reveal">
        <div className="flex flex-col md:flex-row gap-12">
          
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-4">
              <div className="block h-[2px] w-8 md:w-12 bg-primary"></div>
              <div className="bg-primary text-white px-3 md:px-5 py-1.5 md:py-2 font-label-bold text-xs md:text-sm uppercase tracking-widest skew-x-[-12deg] shadow-md">
                <span className="skew-x-[12deg] inline-block">Join The Vision</span>
              </div>
            </div>

            <h2 className="font-display-lg text-4xl md:text-6xl text-on-surface uppercase mb-6 drop-shadow-sm leading-none">
              <span className="text-primary italic">INVEST</span> IN<br/> THE FUTURE
            </h2>
            <p className="font-body-md text-base md:text-lg text-on-surface/80 mb-8 max-w-lg">
              We are revolutionizing the delivery partner ecosystem. Join us on this journey and be part of the intelligence that runs the fleet. Fill out the form, and our team will get in touch with you.
            </p>
          </div>

          <div className="w-full md:w-1/2">
            <div className="bg-[#FCF8F5]/90 backdrop-blur-md p-8 md:p-10 border border-gray-200 shadow-[8px_8px_0px_#1a1a1a]">
              <form action="https://formspree.io/f/mjgdwrgo" method="POST" className="flex flex-col gap-6">
                
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="font-label-bold uppercase text-xs tracking-wider text-on-surface">Full Name</label>
                  <input type="text" id="name" name="name" required className="w-full bg-white border-2 border-gray-300 p-3 font-body-md focus:border-primary focus:outline-none transition-colors" placeholder="John Doe" />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="font-label-bold uppercase text-xs tracking-wider text-on-surface">Email Address</label>
                  <input type="email" id="email" name="email" required className="w-full bg-white border-2 border-gray-300 p-3 font-body-md focus:border-primary focus:outline-none transition-colors" placeholder="john@example.com" />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className="font-label-bold uppercase text-xs tracking-wider text-on-surface">Phone Number</label>
                  <input type="tel" id="phone" name="phone" className="w-full bg-white border-2 border-gray-300 p-3 font-body-md focus:border-primary focus:outline-none transition-colors" placeholder="+1 (555) 000-0000" />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="font-label-bold uppercase text-xs tracking-wider text-on-surface">Message</label>
                  <textarea id="message" name="message" required rows="4" className="w-full bg-white border-2 border-gray-300 p-3 font-body-md focus:border-primary focus:outline-none transition-colors resize-none" placeholder="Tell us about your investment interest..."></textarea>
                </div>

                <button type="submit" className="mt-2 w-full bg-primary text-white font-headline-md text-base md:text-lg px-8 py-4 shadow-[5px_5px_0px_#1a1a1a] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all uppercase flex items-center justify-center gap-4 border-2 border-on-surface cursor-pointer">
                  SUBMIT INTEREST <span className="material-symbols-outlined font-bold">arrow_forward</span>
                </button>
                
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactForm;
