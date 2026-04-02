import React from 'react';
import Link from 'next/link';
import { Instagram, Twitter, Youtube, Mail, Phone, MapPin, Music2 } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-gradient-to-br from-amber-100 via-yellow-50 to-orange-100 pt-16 pb-8 text-neutral-800 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Subtle pattern overlay (matching NextMatch) */}
        <div className="relative">
          <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #d97706 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
          
          {/* Main Footer Content: 4 Columns on Desktop */}
          <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
            
            {/* Column 1: Brand */}
            <div className="col-span-2 md:col-span-1">
              <Link href="/" className="text-lg font-black tracking-tighter uppercase text-neutral-800 hover:text-amber-600 transition-colors">
                Flash FC
              </Link>
              <p className="mt-4 text-[11px] leading-relaxed text-neutral-600 max-w-[200px] uppercase tracking-wider">
                The next generation of football, born in Eastleigh.
              </p>
            </div>

            {/* Column 2: Contact */}
            <div className="flex flex-col space-y-4">
              <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-neutral-700">Contact</h4>
              <div className="flex flex-col space-y-3 text-[11px] text-neutral-600 font-medium">
                <a href="mailto:info@flashfc.com" className="flex items-center gap-2 hover:text-amber-600 transition-colors">
                  <Mail size={14} strokeWidth={1.5} />
                  <span>info@flashfc.com</span>
                </a>
                <a href="tel:+254700000000" className="flex items-center gap-2 hover:text-amber-600 transition-colors">
                  <Phone size={14} strokeWidth={1.5} />
                  <span>+254 758 844 760</span>
                </a>
              </div>
            </div>

            {/* Column 3: Social */}
            <div className="flex flex-col space-y-4">
              <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-neutral-700">Follow</h4>
              <div className="flex flex-col space-y-3 text-[11px] text-neutral-600 font-medium">
                <Link href="#" className="flex items-center gap-2 hover:text-amber-600 transition-colors uppercase tracking-widest">
                  <Instagram size={14} strokeWidth={1.5} />
                  <span>Instagram</span>
                </Link>
                <Link href="#" className="flex items-center gap-2 hover:text-amber-600 transition-colors uppercase tracking-widest">
                  <Twitter size={14} strokeWidth={1.5} />
                  <span>X / Twitter</span>
                </Link>
                <Link href="#" className="flex items-center gap-2 hover:text-amber-600 transition-colors uppercase tracking-widest">
                  <Youtube size={14} strokeWidth={1.5} />
                  <span>YouTube</span>
                </Link>
                <Link href="https://www.tiktok.com/@fcflash5" className="flex items-center gap-2 hover:text-amber-600 transition-colors uppercase tracking-widest">
                  <Music2 size={14} strokeWidth={1.5} />
                  <span>Tiktok</span>
                </Link>
              </div>
            </div>

            {/* Column 4: Location */}
            <div className="flex flex-col space-y-4">
              <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-neutral-700">Headquarters</h4>
              <div className="flex items-start gap-2 text-[11px] text-neutral-600 leading-relaxed uppercase tracking-wider">
                <MapPin size={14} strokeWidth={1.5} className="mt-0.5 flex-shrink-0" />
                <p>
                 Eastleigh Nairobi, Kenya
                  
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 border-t border-amber-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[9px] text-neutral-600 uppercase tracking-[0.2em]">
            © {currentYear} Flash Football Club. All Rights Reserved.
          </p>
          
          <div className="flex gap-6">
            <Link href="#" className="text-[9px] text-neutral-600 hover:text-amber-600 uppercase tracking-[0.2em] transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-[9px] text-neutral-600 hover:text-amber-600 uppercase tracking-[0.2em] transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;