import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-white/[0.05] bg-black pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Main Footer Content: 4 Columns on Desktop */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="text-lg font-black tracking-tighter uppercase">
              Flash FC
            </Link>
            <p className="mt-4 text-[11px] leading-relaxed text-neutral-500 max-w-[200px] uppercase tracking-wider">
              The next generation of football, born in Eastleigh.
            </p>
          </div>

          {/* Column 2: Contact */}
          <div className="flex flex-col space-y-4">
            <h4 className="text-[10px] uppercase tracking-[0.3em] text-white font-bold">Contact</h4>
            <div className="flex flex-col space-y-2 text-[11px] text-neutral-400 font-medium">
              <a href="mailto:info@flashfc.com" className="hover:text-white transition-colors">info@flashfc.com</a>
              <a href="tel:+254700000000" className="hover:text-white transition-colors">+254 700 000 000</a>
            </div>
          </div>

          {/* Column 3: Social */}
          <div className="flex flex-col space-y-4">
            <h4 className="text-[10px] uppercase tracking-[0.3em] text-white font-bold">Follow</h4>
            <div className="flex flex-col space-y-2 text-[11px] text-neutral-400 font-medium">
              <Link href="#" className="hover:text-white transition-colors uppercase tracking-widest">Instagram</Link>
              <Link href="#" className="hover:text-white transition-colors uppercase tracking-widest">X / Twitter</Link>
              <Link href="#" className="hover:text-white transition-colors uppercase tracking-widest">YouTube</Link>
            </div>
          </div>

          {/* Column 4: Location */}
          <div className="flex flex-col space-y-4">
            <h4 className="text-[10px] uppercase tracking-[0.3em] text-white font-bold">Headquarters</h4>
            <p className="text-[11px] text-neutral-400 leading-relaxed uppercase tracking-wider">
              1st Avenue, Eastleigh<br />
              Nairobi, Kenya
            </p>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 border-t border-white/[0.03] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[9px] text-neutral-600 uppercase tracking-[0.2em]">
            © {currentYear} Flash Football Club. All Rights Reserved.
          </p>
          
          <div className="flex gap-6">
            <Link href="#" className="text-[9px] text-neutral-600 hover:text-white uppercase tracking-[0.2em] transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-[9px] text-neutral-600 hover:text-white uppercase tracking-[0.2em] transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;