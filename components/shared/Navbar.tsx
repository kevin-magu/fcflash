"use client";
import React, { useState } from "react";
import Link from "next/link";

interface NavLink {
  name: string;
  href: string;
}

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const navLinks: NavLink[] = [
    { name: "Club", href: "/about-us" },
    { name: "Fixtures & Results", href: "fixtures-and-results" },
    { name: "Gallery", href: "/club-gallery" },
    { name: "Contacts", href: "contact-us" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-amber-200 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">
        
        <Link href="/" className="text-xl text-neutral-800 tracking-tighter hover:text-amber-600 transition-opacity font-black">
          FLASH FC
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-12">
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              href={link.href}
              className="text-[10px] uppercase tracking-[0.3em] font-semibold text-neutral-600 hover:text-amber-600 transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link href="/register" className="cursor-pointer">
            <button className="cursor-pointer bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-semibold text-[9px] px-6 py-2.5 rounded-full uppercase tracking-[0.2em] hover:shadow-[0_0_15px_rgba(250,204,21,0.5)] transition-all duration-300 border-none">
              Join Us
            </button>
          </Link>
        </div>

        {/* Mobile Button Toggle */}
        <button 
          className={`cursor-pointer md:hidden ${isOpen ? 'space-y-0' : 'space-y-1.5'}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className={`w-6 h-[1px] bg-neutral-800 transition-all ${isOpen ? 'rotate-45 translate-y-[1px]' : ''}`} />
          <div className={`w-6 h-[1px] bg-neutral-800 transition-all ${isOpen ? 'hidden' : ''}`} />
          <div className={`w-6 h-[1px] bg-neutral-800 transition-all ${isOpen ? '-rotate-45' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`md:hidden absolute top-20 left-0 w-full bg-white border-b border-amber-100 transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="flex flex-col p-6 gap-4">
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-sm uppercase text-neutral-700 tracking-widest font-bold hover:text-amber-600 transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link href="/register" className="cursor-pointer mt-2">
            <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-semibold text-[10px] px-6 py-2.5 rounded-full uppercase tracking-[0.2em] w-full hover:shadow-[0_0_15px_rgba(250,204,21,0.5)] transition-all duration-300 border-none">
              Join Us
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;