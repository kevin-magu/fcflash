import React from "react";
import { Users, Shield, Star } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white py-24 px-6 font-montserrat">
      <div className="max-w-4xl mx-auto">
        {/* Header – minimal, starts at top */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-neutral-800">
            About <span className="text-amber-600">Flash FC</span>
          </h1>
          <div className="w-16 h-0.5 bg-amber-500 mt-3" />
        </div>

        {/* Main story – extended from your paragraph */}
        <div className="space-y-6 text-neutral-700 leading-relaxed">
          <p className="text-base md:text-lg">
            Founded in the heart of Eastleigh, Flash FC is a professional football club driven by a commitment to excellence. We focus on developing elite talent and playing a fast, precise style of football. Our goal is simple: to elevate the standard of the game in Kenya and compete on the global stage.
          </p>
          <p className="text-base md:text-lg">
            We believe in nurturing raw potential through disciplined training and a culture of respect. Every player who joins us is given the tools to succeed both on and off the pitch. Our approach blends modern tactics with a deep understanding of local football traditions.
          </p>
          <p className="text-base md:text-lg">
            Flash FC is more than a club. It is a community where ambition meets opportunity. We work closely with families, schools, and local organisations to create a sustainable pathway for young athletes.
          </p>
        </div>

        {/* Officials, players and sponsors section */}
        <div className="mt-16 border-t border-neutral-200 pt-10">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-neutral-800 flex items-center gap-3">
            <Users className="text-amber-500" size={28} />
            Officials, Players and Sponsors
          </h2>
          <p className="text-neutral-500 text-sm mt-2 mb-6">The people and partners behind Flash FC</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Officials placeholder */}
            <div className="bg-neutral-50 rounded-xl p-5 border border-neutral-100">
              <div className="flex items-center gap-2 mb-3">
                <Shield size={18} className="text-amber-500" />
                <h3 className="font-semibold text-neutral-800">Officials</h3>
              </div>
              <p className="text-sm text-neutral-500">List will be updated soon.</p>
            </div>
            
            {/* Players placeholder */}
            <div className="bg-neutral-50 rounded-xl p-5 border border-neutral-100">
              <div className="flex items-center gap-2 mb-3">
                <Users size={18} className="text-amber-500" />
                <h3 className="font-semibold text-neutral-800">Players</h3>
              </div>
              <p className="text-sm text-neutral-500">List will be updated soon.</p>
            </div>
            
            {/* Sponsors placeholder */}
            <div className="bg-neutral-50 rounded-xl p-5 border border-neutral-100">
              <div className="flex items-center gap-2 mb-3">
                <Star size={18} className="text-amber-500" />
                <h3 className="font-semibold text-neutral-800">Sponsors</h3>
              </div>
              <p className="text-sm text-neutral-500">List will be updated soon.</p>
            </div>
          </div>
        </div>

        {/* Optional closing note */}
        <div className="mt-12 text-center text-xs text-neutral-400 uppercase tracking-wider">
          Join us as we write the next chapter of Kenyan football.
        </div>
      </div>
    </main>
  );
}