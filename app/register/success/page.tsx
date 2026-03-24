import React from 'react';
import Link from 'next/link';
import { CheckCircle } from 'lucide-react';

export default function SuccessPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-black px-6 text-center">
      <CheckCircle size={64} className="text-white mb-8" strokeWidth={1} />
      <h1 className="text-4xl font-black uppercase tracking-tighter italic mb-4">Application Received</h1>
      <p className="text-neutral-500 uppercase tracking-[0.3em] text-[10px] mb-12">
        Welcome to the Flash FC lineage. <br /> Our officials will review your profile shortly.
      </p>
      <Link href="/" className="bg-white text-black px-12 py-4 rounded-full text-[10px] font-bold uppercase tracking-widest hover:scale-105 transition-transform">
        Return to HQ
      </Link>
    </main>
  );
}