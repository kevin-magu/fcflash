import React from 'react';

const PartnersSection = () => {
  // Add new partners here - they will automatically populate the grid
  const partners = [
    { name: "Sponsor One", logo: "/images/sponsors-and-partners/bulsho-logo.png", url: "https://sponsor1.com" },
    { name: "Sponsor Two", logo: "/images/sponsors-and-partners/green-globe.png", url: "https://sponsor2.com" },
   // { name: "Sponsor Three", logo: "/images/GalleryGrid/3.jpeg", url: "https://sponsor3.com" },
   // { name: "Sponsor Four", logo: "/images/GalleryGrid/4.jpeg", url: "https://sponsor4.com" },
  ];

  return (
    <section className="py-20 px-6 bg-white border-t border-neutral-100">
      <div className="max-w-7xl mx-auto">
        
        {/* Header - Matching your exact style */}
        <div className="flex flex-col items-center md:items-start mb-16">
          <h2 className="text-[10px] uppercase tracking-[0.4em] text-neutral-500 font-medium mb-2">
            Collaborations
          </h2>
          <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">
            Our <span className="text-neutral-700 italic">Partners</span>
          </h3>
        </div>

        {/* Partners Grid */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-12 md:gap-20">
          {partners.map((partner, index) => (
            <a 
              key={index}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group transition-transform duration-300 hover:scale-110"
              title={partner.name}
            >
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border border-neutral-400 hover:grayscale-0 transition-all">
                <img 
                  src={partner.logo} 
                  alt={partner.name} 
                  className="w-full h-full object-cover"
                />
              </div>
            </a>
          ))}

          {/* Become a Partner Button (Integrated into the grid) */}
          <button className="w-24 h-24 md:w-32 md:h-32 rounded-full border-2 border-dashed border-neutral-200 flex flex-col items-center justify-center text-center p-2 hover:border-black hover:bg-neutral-50 transition-all group">
            <span className="text-[8px] md:text-[10px] font-bold uppercase tracking-widest leading-tight group-hover:text-black text-neutral-800">
              Become a<br/>Partner
            </span>
            <span className="mt-1 text-lg font-light text-neutral-300 group-hover:text-black">+</span>
          </button>
        </div>

      </div>
    </section>
  );
};

export default PartnersSection;