import React from 'react';
import { ChevronRight } from 'lucide-react'; 

export default function Login() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-black px-6">
      <div className="w-full max-w-[380px] space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-black uppercase tracking-tighter italic">
            Flash <span className="text-neutral-800">FC</span>
          </h1>
          <p className="text-[10px] uppercase tracking-[0.3em] text-white font-medium">
            Authorized Access Only
          </p>
        </div>

        {/* Login Form */}
        <form className="space-y-6">
          <div className="space-y-4">
            <input 
              type="email" 
              placeholder="Squad Email"
              className="w-full bg-transparent border-b border-white/10 p-3 text-sm outline-none focus:border-white transition-colors placeholder:text-neutral-700 tracking-wide"
            />
            <input 
              type="password" 
              placeholder="Password"
              className="w-full bg-transparent border-b border-white/10 p-3 text-sm outline-none focus:border-white transition-colors placeholder:text-neutral-700 tracking-wide"
            />
          </div>

          <button className="w-full cursor-pointer group flex items-center gap-2 justify-center bg-white text-black px-6 py-4 rounded-full text-[11px] font-bold uppercase tracking-widest hover:bg-neutral-200 transition-all">
            <span className='text-center'>Sign In</span>
            <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </form>

        {/* Footer Links */}
        <div className="flex justify-center gap-8 pt-4">
          <button className="text-[9px] uppercase tracking-widest text-neutral-600 hover:text-white transition-colors">
            Forgot Password?
          </button>
          <button className="text-[9px] uppercase tracking-widest text-neutral-600 hover:text-white transition-colors">
            Request Access
          </button>
        </div>

      </div>
    </main>
  );
}