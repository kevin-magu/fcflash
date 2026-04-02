"use client";

import React, { useState, useEffect } from "react";
import Button from "@/components/ui/Button";
import { Calendar, Clock, MapPin, Home, Flag } from "lucide-react";
import { createFixture } from "../../actions";

export default function NewFixture() {
  const [fixtureType, setFixtureType] = useState<"home" | "away">("home");
  const [homeTeam, setHomeTeam] = useState("Flash FC");
  const [awayTeam, setAwayTeam] = useState("");

  // Update teams when fixtureType changes
  useEffect(() => {
    if (fixtureType === "home") {
      setHomeTeam("Flash FC");
      setAwayTeam("");
    } else {
      setAwayTeam("Flash FC");
      setHomeTeam("");
    }
  }, [fixtureType]);

  // Manual override for the free team input
  const handleHomeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (fixtureType === "home") return;
    setHomeTeam(e.target.value);
  };

  const handleAwayChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (fixtureType === "away") return;
    setAwayTeam(e.target.value);
  };

  return (
    <main className="min-h-screen pt-20 pb-20 flex items-center justify-center bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 px-6">
      <div className="w-full max-w-2xl">
        
        {/* Header Section */}
        <div className="mb-12 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter italic text-neutral-800">
            New <span className="text-amber-600">Fixture</span>
          </h1>
          <p className="mt-2 text-[10px] uppercase tracking-[0.4em] text-neutral-600 font-medium">
            Schedule Upcoming Match
          </p>
        </div>

        {/* Use action directly – no onSubmit */}
        <form action={createFixture} className="space-y-10">
          {/* Hidden inputs ensure the correct team names are always submitted */}
          <input type="hidden" name="homeTeam" value={homeTeam} />
          <input type="hidden" name="awayTeam" value={awayTeam} />

          {/* 1. Home / Away Toggle */}
          <div className="space-y-4">
            <label className="text-[10px] uppercase tracking-widest text-neutral-600 font-bold ml-1">
              Match Type
            </label>
            <div className="flex gap-4">
              <button
                type="button"
                onClick={() => setFixtureType("home")}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm uppercase tracking-wider font-medium transition-all ${
                  fixtureType === "home"
                    ? "bg-gradient-to-r from-yellow-400 to-orange-500 text-black shadow-sm"
                    : "bg-white border border-amber-200 text-neutral-600 hover:border-amber-300"
                }`}
              >
                <Home size={16} />
                Home
              </button>
              <button
                type="button"
                onClick={() => setFixtureType("away")}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm uppercase tracking-wider font-medium transition-all ${
                  fixtureType === "away"
                    ? "bg-gradient-to-r from-yellow-400 to-orange-500 text-black shadow-sm"
                    : "bg-white border border-amber-200 text-neutral-600 hover:border-amber-300"
                }`}
              >
                <Flag size={16} />
                Away
              </button>
            </div>
          </div>

          {/* 2. Teams (Home & Away) – visible inputs (some disabled) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-[9px] uppercase tracking-widest text-neutral-600 font-bold ml-1">
                Home Team
              </label>
              <input
                type="text"
                value={homeTeam}
                onChange={handleHomeChange}
                disabled={fixtureType === "home"}
                placeholder={fixtureType === "home" ? "Flash FC" : "Enter home team"}
                className={`w-full bg-white border border-amber-200 p-3 rounded-xl text-sm outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-all placeholder:text-neutral-400 text-neutral-800 ${
                  fixtureType === "home" ? "bg-neutral-50 text-neutral-600 cursor-not-allowed" : ""
                }`}
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-[9px] uppercase tracking-widest text-neutral-600 font-bold ml-1">
                Away Team
              </label>
              <input
                type="text"
                value={awayTeam}
                onChange={handleAwayChange}
                disabled={fixtureType === "away"}
                placeholder={fixtureType === "away" ? "Flash FC" : "Enter away team"}
                className={`w-full bg-white border border-amber-200 p-3 rounded-xl text-sm outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-all placeholder:text-neutral-400 text-neutral-800 ${
                  fixtureType === "away" ? "bg-neutral-50 text-neutral-600 cursor-not-allowed" : ""
                }`}
                required
              />
            </div>
          </div>

          {/* 3. Date, Time, Location – uncontrolled inputs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-[9px] uppercase tracking-widest text-neutral-600 font-bold ml-1 flex items-center gap-2">
                <Calendar size={12} className="text-amber-500" />
                Date
              </label>
              <input
                name="date"
                type="date"
                className="w-full bg-white border border-amber-200 p-3 rounded-xl text-sm outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-all text-neutral-800"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-[9px] uppercase tracking-widest text-neutral-600 font-bold ml-1 flex items-center gap-2">
                <Clock size={12} className="text-amber-500" />
                Time
              </label>
              <input
                name="time"
                type="time"
                className="w-full bg-white border border-amber-200 p-3 rounded-xl text-sm outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-all text-neutral-800"
                required
              />
            </div>

            <div className="space-y-2 md:col-span-2">
              <label className="text-[9px] uppercase tracking-widest text-neutral-600 font-bold ml-1 flex items-center gap-2">
                <MapPin size={12} className="text-amber-500" />
                Location
              </label>
              <input
                name="location"
                type="text"
                placeholder="e.g., Nyayo Stadium, Nairobi"
                className="w-full bg-white border border-amber-200 p-3 rounded-xl text-sm outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-all placeholder:text-neutral-400 text-neutral-800"
                required
              />
            </div>
          </div>

          {/* Action Button */}
          <div className="pt-6">
            <div className="flex justify-center">
              <Button type="submit" className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-semibold hover:shadow-[0_0_15px_rgba(250,204,21,0.5)] transition-all duration-300 border-none py-3 px-8 text-sm cursor-pointer">
                Create Fixture
              </Button>
            </div>
            <p className="text-[9px] text-center mt-6 text-neutral-600 uppercase tracking-widest leading-relaxed">
              Fixture will appear on the schedule after creation.
            </p>
          </div>
        </form>
      </div>
    </main>
  );
}