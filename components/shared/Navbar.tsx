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
    { name: "Club", href: "#" },
    { name: "Fixtures & Results", href: "#" },
    { name: "Gallery", href: "#" },
    { name: "Contacts", href: "#" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/20 bg-black/60 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">
        
        <Link href="/" className="text-xl font-black tracking-tighter hover:opacity-70 transition-opacity">
          FLASH FC
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-12">
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              href={link.href}
              className="text-[10px] uppercase tracking-[0.3em] font-semibold text-white hover:text-neutral-500 transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <button className="bg-neutral-900 border border-white/10 text-white text-[9px] font-bold px-6 py-2.5 rounded-full uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all">
            Join Us
          </button>
        </div>

        {/* Mobile Button Toggle */}
        <button 
          className={`md:hidden ${isOpen ? 'space-y-0' : 'space-y-1.5'}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className={`w-6 h-[1px] bg-white  transition-all ${isOpen ? 'rotate-45 translate-y-[1px]' : ''}`} />
          <div className={`w-6 h-[1px] bg-white  transition-all ${isOpen ? 'hidden' : ''}`} />
          <div className={`w-6 h-[1px] bg-white  transition-all ${isOpen ? '-rotate-45' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`md:hidden absolute top-16 left-0 w-full bg-white border-b border-white/5 transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="flex flex-col p-6 gap-4">
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-sm uppercase text-black tracking-widest font-bold"
            >
              {link.name}
            </Link>

          ))}
          <button className="bg-neutral-900 border border-white/10 text-white text-[9px] font-bold px-6 py-2.5 rounded-full uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all">
            Join Us
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;