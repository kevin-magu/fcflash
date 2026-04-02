import React from 'react';
import Image from 'next/image'; // Next.js image optimization

// Declaration of our image data structure
interface GalleryImage {
  id: number;
  src: string;
  alt: string;
}

// Mocking the 6 images. Update the 'src' to match your actual file names in /public/images/
const images: GalleryImage[] = [
  { id: 1, src: '/images/GalleryGrid/3.jpeg', alt: 'Flash FC Locker room' },
  { id: 2, src: '/images/GalleryGrid/1.jpeg', alt: 'Flash FC Player in action' },
  { id: 3, src: '/images/GalleryGrid/4.jpeg', alt: 'Flash FC Training session' },
 
];

const GalleryGrid: React.FC = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-6 md:py-32">
      
      {/* Section Header */}
      <div className="flex flex-col items-center md:items-start mb-12">
        <h2 className="text-[10px] uppercase tracking-[0.4em] text-neutral-500 font-medium mb-2">
          Inside the Club
        </h2>
        <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">
          The <span className="text-neutral-700 italic">Vision</span>
        </h3>
      </div>

      {/* The Grid: 1 col mobile, 2 tablet, 3 desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {images.map((image) => (
          <div 
            key={image.id} 
            className="group relative w-full aspect-[3/4] overflow-hidden bg-neutral-900 rounded-xl"
          >
            {/* The Next.js Image Component 
              'fill' makes it take the parent's aspect-[3/4] size
              'object-cover' ensures the image isn't stretched
            */}
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-[1.5s] ease-[--ease-apple] group-hover:scale-105"
              priority={image.id <= 2} // Load the first two immediately, lazy load the rest
            />
            
            {/* Subtle overlay gradient for depth (Apple style) */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-[--ease-apple]" />
          </div>
        ))}
      </div>
      
    </section>
  );
};

export default GalleryGrid;