import React from 'react';

// Functional component declaration for the Next Match Section
const NextMatch: React.FC = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-24 md:py-32">
      
      {/* Container: Stack on mobile, side-by-side on md+ screens */}
      <div className="flex flex-col md:flex-row items-start md:items-center gap-12 md:gap-16">
        
        {/* Left Column: Anchored Heading (Matching the Gallery style) */}
        <div className="flex-shrink-0 md:w-1/3">
          <h2 className="text-[10px] uppercase tracking-[0.4em] text-neutral-500 font-medium mb-2">
            Upcoming Fixture
          </h2>
          <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">
            Next <span className="text-neutral-700 italic">Match</span>
          </h3>
        </div>

        {/* Right Column: Match Details Card */}
        <div className="w-full md:w-2/3 border-t border-white/10 md:border-t-0 md:border-l md:pl-16 pt-8 md:pt-0">
          <div className="flex flex-col space-y-8">
            
            {/* The Matchup */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div className="flex items-center gap-4 text-3xl md:text-4xl font-black uppercase tracking-tighter">
                <span className="text-white">Flash FC</span>
                <span className="text-neutral-700 font-light text-xl italic">VS</span>
                <span className="text-neutral-400">City Stars</span>
              </div>
              
              {/* Optional CTA 
              <button className="text-[9px] uppercase tracking-widest font-bold border border-white/20 px-4 py-2 hover:bg-white hover:text-black transition-colors w-fit">
                Get Tickets
              </button> */}
            </div>

            {/* Match Meta Data (Time, Date, Location) */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-10 text-[10px] uppercase tracking-[0.2em] text-neutral-500 font-medium">
              
              <div className="flex items-center gap-2.5">
                <div className="w-1.5 h-1.5 bg-white/20 rounded-full" />
                <span>Sat, 28 Mar 2026</span>
              </div>
              
              <div className="flex items-center gap-2.5">
                <div className="w-1.5 h-1.5 bg-white/20 rounded-full" />
                <span>15:00 EAT</span>
              </div>
              
              <div className="flex items-center gap-2.5">
                <div className="w-1.5 h-1.5 bg-white/20 rounded-full" />
                <span>Nyayo Stadium, Nairobi</span>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default NextMatch;