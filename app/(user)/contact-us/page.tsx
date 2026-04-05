import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-32 pb-20 flex items-center justify-center bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 px-6">
      <div className="w-full max-w-3xl">
        {/* Header */}
        <div className="mb-12 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter italic text-neutral-800">
            Contact <span className="text-amber-600">Us</span>
          </h1>
          <p className="mt-2 text-[10px] uppercase tracking-[0.4em] text-neutral-600 font-medium">
            Get in touch with Flash FC
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Email Card */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-amber-100 hover:border-amber-300 transition-all">
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="p-3 bg-amber-50 rounded-full">
                <Mail size={24} className="text-amber-600" />
              </div>
              <h2 className="text-xs uppercase tracking-wider font-bold text-neutral-500">Email</h2>
              <a
                href="mailto:info@fcflash.com"
                className="text-sm text-neutral-800 hover:text-amber-600 transition-colors break-all"
              >
                info@fcflash.com
              </a>
            </div>
          </div>

          {/* Phone Card */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-amber-100 hover:border-amber-300 transition-all">
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="p-3 bg-amber-50 rounded-full">
                <Phone size={24} className="text-amber-600" />
              </div>
              <h2 className="text-xs uppercase tracking-wider font-bold text-neutral-500">Phone</h2>
              <a
                href="tel:+254758844760"
                className="text-sm text-neutral-800 hover:text-amber-600 transition-colors"
              >
                +254 758 844 760
              </a>
            </div>
          </div>

          {/* Location Card */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-amber-100 hover:border-amber-300 transition-all">
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="p-3 bg-amber-50 rounded-full">
                <MapPin size={24} className="text-amber-600" />
              </div>
              <h2 className="text-xs uppercase tracking-wider font-bold text-neutral-500">Location</h2>
              <p className="text-sm text-neutral-800">
                Eastleigh, Nairobi<br />Kenya
              </p>
            </div>
          </div>
        </div>

        {/* Optional subtle note */}
        <p className="text-center text-[9px] uppercase tracking-widest text-neutral-500 mt-12">
          We look forward to hearing from you
        </p>
      </div>
    </main>
  );
}