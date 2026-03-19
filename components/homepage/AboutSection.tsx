import React from 'react';
import Button from '../ui/Button';

// Functional component declaration for the About Section
const AboutSection: React.FC = () => {
  return (
    <section className="w-full max-w-4xl mx-auto px-6 py-24 flex flex-col items-center justify-center text-center">
      
      <div className="space-y-8">
        {/* Minimalist Location Indicator */}
        <div className="flex items-center justify-center gap-3">
          <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
          <span className="text-[10px] uppercase tracking-[0.4em] text-neutral-400 font-bold">
            Eastleigh, Nairobi — Kenya
          </span>
        </div>

        {/* The Well-Lit, Legible Paragraph */}
        <p className="text-2xl md:text-4xl text-white font-medium leading-relaxed md:leading-normal tracking-tight">
          Founded in the heart of Eastleigh, Flash FC is a professional football club driven by a commitment to excellence. We focus on developing elite talent and playing a fast, precise style of football. Our goal is simple: to elevate the standard of the game in Kenya and compete on the global stage.
        </p>

        {/* Subtle separator line (Apple design staple) */}
        <div className="w-12 h-[1px] bg-white/20 mx-auto mt-12" />
      </div>
        <div className='flex justify-center align-center'>
            <Button className="bg-white text-black hover:bg-neutral-900  hover:text-white border border-white/20 mt-6">
                View Squad & officials
            </Button>
        </div>
    </section>
  );
};

export default AboutSection;