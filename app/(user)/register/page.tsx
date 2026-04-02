import React from 'react';
import Button from '@/components/ui/Button'; 
import { User, Camera, ChevronDown } from 'lucide-react';
import { registerUser } from './actions';

export default function Register() {
  return (
    <main className="min-h-screen pt-32 pb-20 flex items-center justify-center bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 px-6">
      <div className="w-full max-w-2xl">
        
        {/* Header Section */}
        <div className="mb-12 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter italic text-neutral-800">
            Join the <span className="text-amber-600">Squad</span>
          </h1>
          <p className="mt-2 text-[10px] uppercase tracking-[0.4em] text-neutral-600 font-medium">
            Official Registration Portal
          </p>
        </div>

        <form action={registerUser} className="space-y-10">
          
          {/* 1. Role Selection */}
          <div className="space-y-4">
            <label className="text-[10px] uppercase tracking-widest text-neutral-600 font-bold ml-1">
              I am registering as
            </label>
            <div className="relative">
              <select name='role' className="w-full appearance-none bg-white border border-amber-200 p-3 rounded-xl text-sm outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-all cursor-pointer tracking-wide text-neutral-800">
                <option value="player">Player</option>
                <option value="official">Official</option>
                <option value="sponsor">Sponsor</option>
              </select>
              <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-amber-500 pointer-events-none" />
            </div>
          </div>

          {/* 2. Personal Information Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-[9px] uppercase tracking-widest text-neutral-600 font-bold ml-1">Real Name</label>
              <input name='name' type="text" placeholder="John Doe" className="w-full bg-white border border-amber-200 p-3 rounded-xl text-sm outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-all placeholder:text-neutral-400 text-neutral-800" />
            </div>

            <div className="space-y-2">
              <label className="text-[9px] uppercase tracking-widest text-neutral-600 font-bold ml-1">Gender</label>
              <div className="relative">
                <select name='gender' className="w-full appearance-none bg-white border border-amber-200 p-3 rounded-xl text-sm outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-all cursor-pointer text-neutral-800">
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other / Prefer not to say</option>
                </select>
                <ChevronDown size={14} className="absolute right-4 top-1/2 -translate-y-1/2 text-amber-500 pointer-events-none" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[9px] uppercase tracking-widest text-neutral-600 font-bold ml-1">Date of Birth</label>
              <input name='dob' type="date" className="w-full bg-white border border-amber-200 p-3 rounded-xl text-sm outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-all text-neutral-800" />
            </div>

            <div className="space-y-2">
              <label className="text-[9px] uppercase tracking-widest text-neutral-600 font-bold ml-1">Phone Number</label>
              <input name='phone' type="tel" placeholder="+254..." className="w-full bg-white border border-amber-200 p-3 rounded-xl text-sm outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-all placeholder:text-neutral-400 text-neutral-800" />
            </div>
          </div>

          {/* 3. Contact Info */}
          <div className="space-y-2">
            <label className="text-[9px] uppercase tracking-widest text-neutral-600 font-bold ml-1">Email Address</label>
            <input name='email' type="email" placeholder="name@domain.com" className="w-full bg-white border border-amber-200 p-3 rounded-xl text-sm outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-all placeholder:text-neutral-400 text-neutral-800" />
          </div>

          {/* 4. Passport Photo Upload */}
          <div className="space-y-4">
            <label className="text-[10px] uppercase tracking-widest text-neutral-600 font-bold ml-1">Identity Verification</label>
            <div className="group relative w-full h-32 border-2 border-dashed border-amber-300 rounded-2xl flex flex-col items-center justify-center hover:border-amber-500 transition-all cursor-pointer bg-white/50 hover:bg-white/80">
              <input name='photo' type="file" className="absolute inset-0 opacity-0 cursor-pointer" accept="image/*" />
              <Camera size={24} className="text-amber-500 group-hover:text-amber-600 transition-colors mb-2" />
              <span className="text-[10px] uppercase tracking-widest text-amber-600 font-bold">Upload Passport Photo</span>
            </div>
          </div>

          {/* Action Button */}
          <div className="pt-6">
            <div className='flex justify-center align-middle'>
                <Button className="w-50% bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-semibold hover:shadow-[0_0_15px_rgba(250,204,21,0.5)] transition-all duration-300 border-none py-3 text-sm cursor-pointer">
                Submit Application
                </Button>
            </div>
            <p className="text-[9px] text-center mt-6 text-neutral-600 uppercase tracking-widest leading-relaxed">
              By submitting, you agree to the Flash FC <br /> code of conduct and privacy standards.
            </p>
          </div>

        </form>
      </div>
    </main>
  );
}