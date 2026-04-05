import React from 'react';
import Button from '../ui/Button';
import Link from 'next/link';

const AboutSection: React.FC = () => {
  return (
    <section className="w-full max-w-6xl mx-auto px-6 py-0 md:py-4 flex flex-col items-center justify-center bg-white text-neutral-900">
      
      <div className="space-y-8">
        {/* Minimalist Location Indicator — light/dark neutral */}
        <div className="flex items-center justify-center gap-3">
          <div className="w-1.5 h-1.5 rounded-full bg-neutral-400 animate-pulse" />
          <span className="text-[10px] uppercase tracking-[0.4em] text-neutral-500 font-bold">
            Eastleigh, Nairobi — Kenya
          </span>
        </div>

        {/* Bright, legible paragraph — dark text on white */}
        <p className="text-2xl md:text-2xl text-neutral-800 font-medium md:text-center leading-relaxed md:leading-normal tracking-tight">
          Founded in the heart of Eastleigh, Flash FC is a professional football club driven by a commitment to excellence. We focus on developing elite talent and playing a fast, precise style of football. Our goal is simple: to elevate the standard of the game in Kenya and compete on the global stage.
        </p>

        {/* Subtle separator line — light grey */}
        <div className="w-12 h-[1px] bg-neutral-300 mx-auto mt-12" />
      </div>
      
      <div className='flex justify-center align-center'>
        <Link href="/about-us" className="cursor-pointer">
        <Button className="bg-black text-white hover:bg-neutral-800 border border-neutral-200 mt-6">
          Read More
        </Button>
        </Link>
      </div>
    </section>
  );
};

export default AboutSection;