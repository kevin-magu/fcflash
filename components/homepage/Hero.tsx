'use client';

import Image from 'next/image';
import flashFcLogo from '../../public/fcflash.png';
import Button from '../ui/Button';
import Link from 'next/link';


const VIDEO_SOURCES = [
  '/videos/hero-1.mp4',
  '/videos/hero-2.mp4',
  '/videos/hero-3.mp4',
];

export default function Hero() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6">
      
      {/* Video Grid Background */}
      <div className="absolute inset-0 -z-20 bg-neutral-950">
        {/* Responsive grid: 1 (mobile) → 2 (md) → 3 (lg) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full h-full">
          {VIDEO_SOURCES.map((videoPath, idx) => (
            <div 
              key={idx} 
              className={`relative overflow-hidden border-neutral-800/50 ${
                // Hide 2nd and 3rd videos on mobile to save bandwidth/layout
                idx > 0 ? 'hidden md:block' : '' 
              } ${idx === 1 ? 'md:border-x' : ''}`}
            >
              <video
                autoPlay
                loop
                muted
                playsInline
                // Use a poster image from your working GalleryGrid for better LCP
                poster={`/images/GalleryGrid/${idx + 1}.jpeg`}
                className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto object-cover -translate-x-1/2 -translate-y-1/2"
              >
                {/* Reference the string path directly */}
                <source src={videoPath} type="video/mp4" />
              </video>
            </div>
          ))}
        </div>
        
        {/* Dark overlay for text contrast */}
        <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]" />
      </div>
      
      {/* Content Section */}
      <div className="relative z-10 flex flex-col items-center">
        <Image 
          src={flashFcLogo}
          alt="Flash FC Logo"
          className="w-32 h-auto animate-float-subtle mb-8"
          priority
        />
        
        <section className="flex flex-col items-center text-center space-y-8">
          <h1 className="pr-2 text-4xl md:text-[100px] font-black leading-none tracking-tighter uppercase italic bg-linear-to-r from-white via-yellow-300 to-orange-400 bg-clip-text text-transparent">
            FLASH <span className="bg-none">FC</span>
          </h1>
          
          <span className="text-[10px] md:text-xs uppercase tracking-[0.5em] text-yellow-400/80 font-medium">
            Where legends are born
          </span>

          <p className="max-w-md text-neutral-200 text-sm md:text-base font-light leading-relaxed">
            We identify, develop, and create pathways for talented players to reach and succeed at the professional level.
          </p>

          <div className="pt-6 flex flex-col sm:flex-row items-center gap-4">
            <Link href="/register" className="cursor-pointer">
            <Button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold hover:scale-105 transition-transform duration-300 border-none px-8">
              Become a Sponsor
            </Button>
            </Link>
            
            <Link href="/about-us" className="cursor-pointer">
            <Button className="bg-transparent border border-white/30 text-white hover:bg-white hover:text-black transition-all duration-300 px-8">
              The Vision
            </Button>
            </Link>
          </div>
        </section>
      </div>

      {/* Footer info */}
      <div className="absolute bottom-12 w-full px-12 flex justify-between items-end z-10">
        <div className="flex flex-col gap-1">
          <span className="text-[8px] text-neutral-400 uppercase tracking-widest font-bold">Location</span>
          <span className="text-[10px] text-neutral-300 uppercase tracking-wider">Nairobi, Kenya</span>
        </div>
        
        <div className="flex flex-col gap-1 text-right">
          <span className="text-[8px] text-neutral-400 uppercase tracking-widest font-bold">Status</span>
          <span className="text-[10px] text-yellow-400 uppercase tracking-wider animate-pulse font-semibold">Pre-Season 2026</span>
        </div>
      </div>
    </main>
  );
}