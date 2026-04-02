import React from 'react';

const NextMatch: React.FC = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-24 md:py-6">
      {/* Vibrant gradient background + subtle pattern */}
      <div className="relative rounded-3xl overflow-hidden bg-linear-to-br from-amber-50 via-yellow-50 to-orange-50 shadow-xl">
        {/* Minimalist pattern overlay (barely visible, adds texture) */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #d97706 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
        
        <div className="relative z-10 p-8 md:p-12">
          {/* Container: Stack on mobile, side-by-side on md+ screens */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-12 md:gap-16">
            
            {/* Left Column: Anchored Heading */}
            <div className="shrink-0 md:w-1/3">
              <h2 className="text-[10px] uppercase tracking-[0.4em] text-amber-700 font-medium mb-2">
                Upcoming Fixture
              </h2>
              <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-neutral-800">
                Next <span className="text-amber-600 italic">Match</span>
              </h3>
              {/* Vibrant accent line (optional, adds energy) */}
              <div className="w-12 h-0.5 bg-amber-500 mt-4 hidden md:block" />
            </div>

            {/* Right Column: Match Details Card */}
            <div className="w-full md:w-2/3 md:border-l md:border-amber-200 md:pl-16 pt-8 md:pt-0">
              <div className="flex flex-col space-y-8">
                
                {/* The Matchup */}
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                  <div className="flex items-center gap-4 text-3xl md:text-4xl font-black uppercase tracking-tighter">
                    <span className="text-neutral-800">Flash FC</span>
                    <span className="text-amber-500 font-light text-xl italic">VS</span>
                    <span className="text-neutral-500">City Stars</span>
                  </div>
                  
                  {/* Uncomment if you want a vibrant button later */}
                  {/* <button className="text-[9px] uppercase tracking-widest font-bold border border-amber-300 px-4 py-2 hover:bg-amber-500 hover:text-white transition-colors w-fit">
                    Get Tickets
                  </button> */}
                </div>

                {/* Match Meta Data (Time, Date, Location) */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-10 text-[10px] uppercase tracking-[0.2em] text-neutral-600 font-medium">
                  
                  <div className="flex items-center gap-2.5">
                    <div className="w-1.5 h-1.5 bg-amber-400 rounded-full" />
                    <span>Sat, 28 Mar 2026</span>
                  </div>
                  
                  <div className="flex items-center gap-2.5">
                    <div className="w-1.5 h-1.5 bg-amber-400 rounded-full" />
                    <span>15:00 EAT</span>
                  </div>
                  
                  <div className="flex items-center gap-2.5">
                    <div className="w-1.5 h-1.5 bg-amber-400 rounded-full" />
                    <span>Nyayo Stadium, Nairobi</span>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default NextMatch;