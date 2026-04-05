"use client";

import React, { useState } from "react";
import { Search, Calendar, Trophy } from "lucide-react";

export default function FixturesResultsPage() {
  const [activeTab, setActiveTab] = useState<"fixtures" | "results">("fixtures");
  const [searchTerm, setSearchTerm] = useState("");

  // Placeholder data – will be replaced with real data later
  const fixtures:any = []; // empty for now
  const results:any = [];   // empty for now

  const filteredFixtures = fixtures.filter((item:any) =>
    item.homeTeam.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.awayTeam.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredResults = results.filter((item:any) =>
    item.homeTeam.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.awayTeam.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const showEmptyState = (type: string) => (
    <div className="col-span-full flex flex-col items-center justify-center py-16 text-center">
      <div className="bg-neutral-50 rounded-full p-4 mb-4">
        {type === "fixtures" ? (
          <Calendar size={32} className="text-amber-400" />
        ) : (
          <Trophy size={32} className="text-amber-400" />
        )}
      </div>
      <h3 className="text-lg font-semibold text-neutral-800 mb-1">No {type} yet</h3>
      <p className="text-sm text-neutral-500">List will be updated soon.</p>
    </div>
  );

  return (
    <main className="min-h-screen bg-white py-24 px-6 font-montserrat">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="mb-10">
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-neutral-800">
            Fixtures & <span className="text-amber-600">Results</span>
          </h1>
          <div className="w-16 h-0.5 bg-amber-500 mt-3" />
        </div>

        {/* Toggle Buttons + Search */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10">
          <div className="flex gap-2 bg-neutral-100 rounded-full p-1 w-fit">
  <button
    onClick={() => setActiveTab("fixtures")}
    className={`px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wide transition-all ${
      activeTab === "fixtures"
        ? "bg-gradient-to-r from-yellow-400 to-orange-500 text-black shadow-sm"
        : "text-neutral-600 hover:text-neutral-900"
    }`}
  >
    Upcoming
  </button>
  <button
    onClick={() => setActiveTab("results")}
    className={`px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wide transition-all ${
      activeTab === "results"
        ? "bg-gradient-to-r from-yellow-400 to-orange-500 text-black shadow-sm"
        : "text-neutral-600 hover:text-neutral-900"
    }`}
  >
    Results
  </button>
</div>

          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400" size={18} />
            <input
              type="text"
              placeholder={`Search ${activeTab === "fixtures" ? "fixtures" : "results"}...`}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white border border-neutral-200 rounded-full py-2.5 pl-11 pr-4 text-sm text-neutral-800 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all"
            />
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activeTab === "fixtures" ? (
            filteredFixtures.length > 0 ? (
              filteredFixtures.map((fixture:any, idx:any) => (
                // Fixture card (not shown because empty array)
                <div key={idx}>Fixture card</div>
              ))
            ) : (
              showEmptyState("fixtures")
            )
          ) : (
            filteredResults.length > 0 ? (
              filteredResults.map((result:any, idx:any) => (
                // Result card (not shown because empty array)
                <div key={idx}>Result card</div>
              ))
            ) : (
              showEmptyState("results")
            )
          )}
        </div>
      </div>
    </main>
  );
}