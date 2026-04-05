import React from "react";
import { Image as ImageIcon } from "lucide-react";

// Hardcoded placeholder images – replace with your own URLs later
// Using high-quality Unsplash placeholders (free, no attribution needed for demo)
const placeholderImages = Array.from({ length: 8 }, (_, i) => ({
  id: i,
  url: `images/GalleryGrid/${i + 1}.jpeg`, // random LoremFlickr style
  alt: `Gallery image ${i + 1}`,
}));

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-white py-24 px-6 font-montserrat">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="mb-10">
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-neutral-800">
            Gallery
          </h1>
          <div className="w-16 h-0.5 bg-amber-500 mt-3" />
          <p className="mt-4 text-neutral-600 text-sm">
            Moments from matches, training, and club events.
          </p>
        </div>

        {/* Responsive Grid – 1 to 4 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {placeholderImages.map((image) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-2xl bg-neutral-100 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="aspect-[4/3]">
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              {/* Optional subtle overlay – remove if you prefer no text */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
            </div>
          ))}
        </div>

        {/* Future DB note (subtle) */}
        <p className="text-center text-xs text-neutral-400 mt-12 uppercase tracking-wider">
          More photos will be added soon
        </p>
      </div>
    </main>
  );
}