export default function Hero() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6">
      
      {/* Background Aesthetic Detail: A very subtle radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-neutral-900/20 via-black to-black -z-10" />

      {/* Hero Content */}
      <section className="w-full max-w-5xl flex flex-col items-center text-center space-y-8">
        
        {/* Subtle Pre-heading */}
        <span className="text-[10px] md:text-xs uppercase tracking-[0.5em] text-neutral-500 font-medium">
          A New Era of Football
        </span>

        {/* Main Headline - Using Montserrat Black (900) */}
        <h1 className="text-6xl md:text-[120px] font-black leading-none tracking-tighter uppercase italic">
          FLASH <span className="text-neutral-800">FC</span>
        </h1>

        {/* Tagline */}
        <p className="max-w-md text-neutral-400 text-sm md:text-base font-light leading-relaxed">
          More than a club. A digital-first football collective designed for the next generation of athletes and fans.
        </p>

        {/* Primary CTA (Apple-style Button) */}
        <div className="pt-6 flex flex-col sm:flex-row items-center gap-4">
          <button className="bg-white text-black px-10 py-4 rounded-full text-[11px] font-bold uppercase tracking-widest hover:bg-neutral-200 transition-all active:scale-95">
            Become a Founder
          </button>
          <button className="text-white border border-white/10 px-10 py-4 rounded-full text-[11px] font-bold uppercase tracking-widest hover:bg-white/5 transition-all">
            The Vision
          </button>
        </div>
      </section>

      {/* Decorative Status Bar at the bottom */}
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