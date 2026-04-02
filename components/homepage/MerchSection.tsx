import React from 'react';
import { ShoppingCart, Phone } from 'lucide-react';

const MerchSection = () => {
  const products = [
    {
      id: 1,
      name: "Home Kit 26/27",
      price: "KSH 2,500",
      image: "images/merch/t-shirts/t-shirt-1.png", // Replace with your T-shirt images
      tag: "Authentic"
    },
    {
      id: 2,
      name: "Training Jersey",
      price: "KSH 1,800",
      image: "images/merch/t-shirts/t-shirt-1.png",
      tag: "Performance"
    },
    {
      id: 3,
      name: "Streetwear Tee",
      price: "KSH 1,500",
      image: "images/merch/t-shirts/t-shirt-1.png",
      tag: "Lifestyle"
    }
  ];

  return (
    <section className="py-20 px-6 bg-white border-t border-neutral-100">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section (Matching your previous style) */}
        <div className="flex flex-col items-center md:items-start mb-16">
          <h2 className="text-[10px] uppercase tracking-[0.4em] text-neutral-500 font-medium mb-2">
            Supporter Gear
          </h2>
          <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">
            The <span className="text-neutral-700 italic">Threads</span>
          </h3>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-neutral-200">
          {products.map((item) => (
            <div 
              key={item.id} 
              className="group relative border-neutral-200 md:border-r last:border-r-0 border-b md:border-b-0 overflow-hidden"
            >
              {/* Image Container - No Border Radius */}
              <div className="aspect-6/5 bg-neutral-50 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-full object-cover  hover:grayscale-0 transition-all duration-700 ease-in-out scale-100 group-hover:scale-105"
                />
                <span className="absolute top-4 left-4 text-[10px] uppercase tracking-widest bg-black text-white px-2 py-1">
                  {item.tag}
                </span>
              </div>

              {/* Product Info */}
              <div className="p-6 bg-white">
                <div className="flex justify-between items-end">
                  <div>
                    <h4 className="text-xl font-bold uppercase tracking-tighter mb-1">{item.name}</h4>
                    <p className="text-neutral-500 font-mono text-sm">{item.price}</p>
                  </div>
                </div>
                
                {/* CTA - Fixed Phone Link */}
                <a 
                  href="tel:+254758844760" 
                  className="mt-6 flex items-center justify-center w-full bg-black text-white py-4 text-xs uppercase tracking-[0.2em] font-bold hover:bg-neutral-800 transition-colors"
                >
                  <Phone size={14} className="mr-2" />
                  Order via Call
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Support Info */}
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.2em] text-neutral-900">
          <p>Countrywide Delivering Available</p>
          <p className="mt-2 md:mt-0 italic">Secure your colors</p>
        </div>
      </div>
    </section>
  );
};

export default MerchSection;