"use client";
import { Search, Calendar, Clock, MapPin, Plus,Edit, CheckCircle, XCircle, Loader2,  } from "lucide-react";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { getFixtures, updateFixtureStatus } from "@/actions/admin/fixtures";
import { set } from "zod";

export default function fixturesPage() {
  const [fixtures, setFixtures] = useState<any[]>([]);
  const [query, setQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [loading, setLoading] = useState(true);

  //  load data helper
  const fetchData = async (search = "") => {
    setIsSearching(true);
    const data = await getFixtures(search);
    setFixtures(data);
    setIsSearching(false);
    setLoading(false);
  };

  // Debounced search logic
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      fetchData(query);
    }, 400);
    return () => clearTimeout(delayDebounceFn);
  }, [query]);

  const handleStatusChange = async (id: string, status: "COMPLETED" | "CANCELLED") => {
    //optimistic UI update : chnage it locally first for instant feedback

    setFixtures((prev) => 
      prev.map((f) => (f.id === id ? { ...f, status } : f))
    );
    await updateFixtureStatus(id, status);
  };
  
  


  return (
    <main className="min-h-screen bg-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10">
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-neutral-800">
            Fixtures
          </h1>
          <p className="mt-2 text-xs uppercase tracking-wider text-neutral-500">
            Manage live match data
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-10">
          <div className="relative flex-1 max-w-full md:max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400" size={18} />
            <input
              type="text"
              placeholder="Search by team or stadium..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full bg-white/80 backdrop-blur-sm border border-amber-200 rounded-2xl py-3 pl-11 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all"
            />
            {isSearching && (
              <Loader2 className="absolute right-4 top-1/2 -translate-y-1/2 animate-spin text-amber-500" size={16} />
            )}
          </div>

          <Link href="/admin/fixtures/new" className="px-6 py-3 flex items-center justify-center gap-2 text-xs uppercase tracking-wider font-medium text-neutral-600 hover:text-amber-600 border border-amber-200 rounded-2xl bg-white/40 transition-all">
            <Plus size={14} /> New Fixture
          </Link>
        </div>

        {loading ? (
          <div className="flex justify-center py-20">
            <Loader2 className="animate-spin text-amber-500" size={40} />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {fixtures.map((fixture) => (
              <div key={fixture.id} className="bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 rounded-2xl shadow-sm border border-amber-200 hover:shadow-md transition-all overflow-hidden">
                <div className="p-5">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-lg font-black uppercase tracking-tighter text-neutral-800">{fixture.homeTeam}</span>
                    <span className="text-xs font-bold text-amber-600 px-2 py-0.5 bg-white/60 rounded-full">VS</span>
                    <span className="text-lg font-black uppercase tracking-tighter text-neutral-600">{fixture.awayTeam}</span>
                  </div>

                  <div className="space-y-2 text-xs text-neutral-600">
                    <div className="flex items-center gap-2">
                      <Calendar size={14} className="text-amber-500" />
                      <span>{new Date(fixture.date).toLocaleDateString("en-GB", { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' })}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={14} className="text-amber-500" />
                      <span>{fixture.time} EAT</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={14} className="text-amber-500" />
                      <span className="truncate">{fixture.location}</span>
                    </div>
                  </div>
                  
                  {/* Status Badge */}
                  <div className="mt-4">
                    <span className={`text-[10px] font-bold uppercase px-2 py-1 rounded-md ${
                      fixture.status === 'COMPLETED' ? 'bg-green-100 text-green-700' : 
                      fixture.status === 'CANCELLED' ? 'bg-red-100 text-red-700' : 'bg-amber-100 text-amber-700'
                    }`}>
                      {fixture.status}
                    </span>
                  </div>
                </div>

                <div className="flex border-t border-amber-200 divide-x divide-amber-200">
                  <Link href={`/admin/fixtures/edit/${fixture.id}`} className="flex-1 py-3 flex items-center justify-center gap-2 text-xs uppercase tracking-wider font-medium text-neutral-600 hover:text-amber-600 hover:bg-white/30 transition-all">
                    <Edit size={14} /> Edit
                  </Link>
                  
                  {fixture.status === 'UPCOMING' && (
                    <>
                      <button 
                        onClick={() => handleStatusChange(fixture.id, "COMPLETED")}
                        className="flex-1 py-3 flex items-center justify-center gap-2 text-xs uppercase tracking-wider font-medium text-neutral-600 hover:text-green-600 hover:bg-white/30 transition-all"
                      >
                        <CheckCircle size={14} /> Complete
                      </button>
                      <button 
                        onClick={() => handleStatusChange(fixture.id, "CANCELLED")}
                        className="flex-1 py-3 flex items-center justify-center gap-2 text-xs uppercase tracking-wider font-medium text-neutral-600 hover:text-red-500 hover:bg-white/30 transition-all"
                      >
                        <XCircle size={14} /> Cancel
                      </button>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
        
        {fixtures.length === 0 && !loading && (
          <div className="text-center py-20 text-neutral-400 uppercase tracking-widest text-sm">
            No fixtures found
          </div>
        )}
      </div>
    </main>
  );
}