import React from 'react';
import Button from '@/components/ui/Button'; 
import { User, Camera, ChevronDown } from 'lucide-react';
import { registerUser } from './actions';

export default function Register() {
  return (
    <main className="min-h-screen pt-32 pb-20 flex items-center justify-center bg-black px-6">
      <div className="w-full max-w-2xl">
        
        {/* Header Section */}
        <div className="mb-12 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter italic">
            Join the <span className="text-neutral-800">Squad</span>
          </h1>
          <p className="mt-2 text-[10px] uppercase tracking-[0.4em] text-text font-medium">
            Official Registration Portal
          </p>
        </div>

        <form action={registerUser} className="space-y-10">
          
          {/* 1. Role Selection (The "Identity" Step) */}
          <div className="space-y-4">
            <label className="text-[10px] uppercase tracking-widest text-neutral-400 font-bold ml-1">
              I am registering as
            </label>
            <div className="relative">
              <select name='role' className="w-full appearance-none bg-neutral-900 border border-white/5 p-3 rounded-xl text-sm outline-none focus:border-white transition-all cursor-pointer tracking-wide">
                <option value="player">Player</option>
                <option value="official">Official</option>
                <option value="sponsor">Sponsor</option>
              </select>
              <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-500 pointer-events-none" />
            </div>
          </div>

          {/* 2. Personal Information Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-[9px] uppercase tracking-widest text-neutral-400 font-bold ml-1">Real Name</label>
              <input name='name' type="text" placeholder="John Doe" className="w-full bg-neutral-900 border border-white/5 p-3 rounded-xl text-sm outline-none focus:border-white transition-all placeholder:text-neutral-800" />
            </div>

            <div className="space-y-2">
              <label className="text-[9px] uppercase tracking-widest text-neutral-400 font-bold ml-1">Gender</label>
              <div className="relative">
                <select name='gender' className="w-full appearance-none bg-neutral-900 border border-white/5 p-3 rounded-xl text-sm outline-none focus:border-white transition-all cursor-pointer">
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other / Prefer not to say</option>
                </select>
                <ChevronDown size={14} className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-600 pointer-events-none" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[9px] uppercase tracking-widest text-neutral-400 font-bold ml-1">Date of Birth</label>
              <input name='dob' type="date" className="w-full bg-neutral-900 border border-white/5 p-3 rounded-xl text-sm outline-none focus:border-white transition-all text-neutral-400" />
            </div>

            <div className="space-y-2">
              <label className="text-[9px] uppercase tracking-widest text-neutral-400 font-bold ml-1">Phone Number</label>
              <input name='phone' type="tel" placeholder="+254..." className="w-full bg-neutral-900 border border-white/5 p-3 rounded-xl text-sm outline-none focus:border-white transition-all placeholder:text-neutral-800" />
            </div>
          </div>

          {/* 3. Contact Info */}
          <div className="space-y-2">
            <label className="text-[9px] uppercase tracking-widest text-neutral-400 font-bold ml-1">Email Address</label>
            <input name='email' type="email" placeholder="name@domain.com" className="w-full bg-neutral-900 border border-white/5 p-3 rounded-xl text-sm outline-none focus:border-white transition-all placeholder:text-neutral-800" />
          </div>

          {/* 4. Passport Photo Upload (The "Apple" Minimalist File Input) */}
          <div className="space-y-4">
            <label className="text-[10px] uppercase tracking-widest text-neutral-400 font-bold ml-1">Identity Verification</label>
            <div className="group relative w-full h-32 border-2 border-dashed border-white/5 rounded-2xl flex flex-col items-center justify-center hover:border-white/20 transition-all cursor-pointer bg-white/[0.01]">
              <input name='photo' type="file" className="absolute inset-0 opacity-0 cursor-pointer" accept="image/*" />
              <Camera size={24} className="text-neutral-600 group-hover:text-white transition-colors mb-2" />
              <span className="text-[10px] uppercase tracking-widest text-neutral-600 font-bold">Upload Passport Photo</span>
            </div>
          </div>

          {/* Action Button */}
          <div className="pt-6">
            <div className='flex justify-center align-middle'>
                <Button className="w-50% text-black hover:bg-neutral-600 hover:text-white bg-white py-3 text-sm cursor-pointer shadow-2xl shadow-white/5">
                Submit Application
                </Button>
            </div>
            <p className="text-[9px] text-center mt-6 text-white uppercase tracking-widest leading-relaxed">
              By submitting, you agree to the Flash FC <br /> code of conduct and privacy standards.
            </p>
          </div>

        </form>
      </div>
    </main>
  );
}