import React from 'react';

const Founders = () => {               
  return (
    <section className="py-24 md:py-36 px-6 md:px-24 bg-surface" id="founders">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-12">
          <h2 className="font-display-lg text-4xl sm:text-5xl md:text-6xl text-on-surface mb-6">
            Founders Behind MAYDIV INFOTECH
          </h2>
          <p className="text-on-surface text-base md:text-lg leading-relaxed font-body-md opacity-90 max-w-5xl">
            <strong>Divyanshu Shahi</strong> and <strong>Mayank Varshney</strong> are the Co-Founders of MAYDIV INFOTECH, a fast-growing startup focused on building innovative digital products, scalable software solutions, and next-generation technology platforms.
          </p>
        </div>

        {/* Founders Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          
          {/* Divyanshu Card */}
          <div className="bg-[#ff4500] rounded-3xl p-6 md:p-8 flex flex-col sm:flex-row gap-6 items-center sm:items-start reveal transition-transform hover:scale-[1.02]">
            <img 
              src="/Security.jpg" 
              alt="Divyanshu Shahi" 
              className="w-32 h-32 md:w-40 md:h-40 xl:w-48 xl:h-48 object-cover rounded-2xl flex-shrink-0 bg-black/10"
            />
            <p className="text-white font-body-md text-sm md:text-base leading-relaxed opacity-95">
              <strong>Divyanshu Shahi</strong> specializes in product strategy, business development, startup growth, and technology execution. He is actively involved in creating scalable business models, managing operations, and driving innovation within the company.
            </p>
          </div>

          {/* Mayank Card */}
          <div className="bg-[#ff4500] rounded-3xl p-6 md:p-8 flex flex-col sm:flex-row gap-6 items-center sm:items-start reveal transition-transform hover:scale-[1.02]" style={{ transitionDelay: '0.1s' }}>
            <img 
              src="/Integration.png" 
              alt="Mayank Varshney" 
              className="w-32 h-32 md:w-40 md:h-40 xl:w-48 xl:h-48 object-cover rounded-2xl flex-shrink-0 bg-black/10"
            />
            <p className="text-white font-body-md text-sm md:text-base leading-relaxed opacity-95">
              <strong>Mayank Varshney</strong> focuses on operational growth, strategic planning, and technology management, helping transform ideas into practical and scalable solutions. Together, they are building MAYDIV INFOTECH as a modern technology startup capable of solving real-world problems across industries.
            </p>
          </div>

        </div>

        {/* Vision Middle Text */}
        <div className="mb-12 reveal" style={{ transitionDelay: '0.2s' }}>
          <p className="text-on-surface text-base md:text-lg leading-relaxed font-body-md opacity-90 max-w-5xl">
            With a vision to create impactful technology for the future, both founders are leading MAYDIV INFOTECH with a strong focus on innovation, execution, and real-world problem solving. Their mission is to build startups and digital ecosystems that solve large-scale industry challenges through technology-driven solutions.
          </p>
        </div>

        {/* Startup Vision Pills */}
        <div className="mb-12 reveal" style={{ transitionDelay: '0.3s' }}>
          <h3 className="font-display-lg text-2xl md:text-3xl uppercase mb-6 text-on-surface">
            THEIR STARTUP VISION IS CENTERED AROUND:
          </h3>
          <div className="flex flex-wrap gap-4">
            <span className="inline-block border-2 border-primary rounded-full px-6 py-2 font-body-md text-sm md:text-base text-white bg-primary">
              Building scalable tech products
            </span>
            <span className="inline-block border-2 border-primary rounded-full px-6 py-2 font-body-md text-sm md:text-base text-white bg-primary">
              Creating innovative startup ecosystems
            </span>
            <span className="inline-block border-2 border-primary rounded-full px-6 py-2 font-body-md text-sm md:text-base text-white bg-primary">
              Solving operational challenges through software
            </span>
            <span className="inline-block border-2 border-primary rounded-full px-6 py-2 font-body-md text-sm md:text-base text-white bg-primary">
              Developing future-ready platforms powered by technology
            </span>
          </div>
        </div>

        {/* Bottom Callout */}
        <div className="bg-[#ff4500] text-white rounded-3xl p-8 md:p-10 reveal" style={{ transitionDelay: '0.4s' }}>
          <p className="font-body-md text-base md:text-lg leading-relaxed opacity-95">
            One of their major startup concepts <strong>Deliver Unite</strong> reflects this vision by aiming to simplify and unify delivery partner operations across multiple platforms through a single technology infrastructure layer. Under their leadership, MAYDIV INFOTECH is positioning itself as a technology-first startup focused on innovation, scalability, and long-term impact in the Indian startup ecosystem.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Founders;
