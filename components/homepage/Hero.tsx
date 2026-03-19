import Image from 'next/image';
import flashFcLogo from '../../public/fcflash.png';
import Button from '../ui/Button';

export default function Hero() {
  return (
    <main className="relative min-h-[96vh] flex flex-col items-center justify-center overflow-hidden px-6">
      
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-neutral-900/20 via-black to-black -z-10" />
      <Image 
        src={flashFcLogo}
        alt="Flash FC Logo"
        className="w-32 h-auto"
        priority
      />
      <section className="w-full max-w-5xl flex flex-col items-center text-center space-y-8">
        
        

        <h1 className="text-6xl md:text-[120px] font-black leading-none tracking-tighter uppercase italic">
          FLASH <span className="text-neutral-600">FC</span>
        </h1>
        <span className="text-[10px] md:text-xs uppercase tracking-[0.5em] text-white font-medium">
          Where legends are born
        </span>

        <p className="max-w-md text-neutral-400 text-sm md:text-base font-light leading-relaxed">
          We identify, develop, and create pathways for talented players to reach and succeed at the professional level.
        </p>

        <div className="pt-6 flex flex-col sm:flex-row items-center gap-4">
          {/* Solid Style */}
          <Button className="bg-white text-black hover:bg-neutral-200">
            Become a Founder
          </Button>
          
          {/* Outline Style */}
          <Button className="bg-transparent border border-white/60 text-white hover:bg-white/5">
            The Vision
          </Button>
        </div>

      </section>

      <div className="absolute bottom-12 w-full px-12 flex justify-between items-end">
        <div className="flex flex-col gap-1">
          <span className="text-[8px] text-neutral-600 uppercase tracking-widest font-bold">Location</span>
          <span className="text-[10px] text-neutral-400 uppercase tracking-wider">Nairobi, Kenya</span>
        </div>
        
        <div className="flex flex-col gap-1 text-right">
          <span className="text-[8px] text-neutral-600 uppercase tracking-widest font-bold">Status</span>
          <span className="text-[10px] text-white uppercase tracking-wider animate-pulse">Pre-Season 2026</span>
        </div>
      </div>

    </main>
  );
}