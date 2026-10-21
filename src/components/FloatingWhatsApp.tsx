import React, { useState } from 'react';
import { MessageCircle, Phone, X, ShieldCheck, ChevronRight, Sparkles } from 'lucide-react';
import { COMPANY_INFO } from '../data/servicesData';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Expanded Concierge Card */}
      {isOpen && (
        <div className="mb-4 w-80 sm:w-88 rounded-3xl p-5 glass-panel border border-slate-700 bg-[#0c1429] shadow-2xl backdrop-blur-2xl animate-in fade-in slide-in-from-bottom-5 duration-300">
          <div className="flex items-start justify-between pb-3 border-b border-slate-800">
            <div className="flex items-center space-x-3">
              <div className="relative w-10 h-10 rounded-xl overflow-hidden border border-amber-400/40 bg-slate-900 flex items-center justify-center">
                <img
                  src="/images/rdt-logo.jpeg"
                  alt="RDT"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
                <span className="text-amber-400 font-black text-xs absolute">RDT</span>
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">RDT Direct Concierge</h4>
                <div className="flex items-center space-x-1 text-[11px] text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>Online | Richards Bay</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <p className="text-xs text-slate-300 my-3 leading-relaxed">
            Choose who you would like to connect with for immediate assistance:
          </p>

          <div className="space-y-2">
            {/* Dr. Tania */}
            <a
              href={`https://wa.me/${COMPANY_INFO.contacts.tania.whatsappNumber}?text=Hi%20Dr.%20Tania,%20I'm%20reaching%20out%20from%20the%20RDT%20website%20for%20information%20and%20pricing.`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-2xl bg-slate-900/90 hover:bg-slate-850 border border-slate-800 hover:border-emerald-500/50 transition-all flex items-center justify-between group"
            >
              <div className="flex items-center space-x-3">
                <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white group-hover:text-emerald-400 transition-colors">
                    Dr. Tania Snyman
                  </div>
                  <div className="text-[10px] text-slate-400">
                    Bookings, Inquiries & Quotes
                  </div>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-emerald-400 transition-transform group-hover:translate-x-0.5" />
            </a>

            {/* Rudi */}
            <a
              href={`https://wa.me/${COMPANY_INFO.contacts.rudi.whatsappNumber}?text=Hi%20Rudi,%20I'm%20looking%20for%20technical%20advice%20/%20site%20visit%20for%20my%20home%20in%20Richards%20Bay.`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-2xl bg-slate-900/90 hover:bg-slate-850 border border-slate-800 hover:border-amber-500/50 transition-all flex items-center justify-between group"
            >
              <div className="flex items-center space-x-3">
                <div className="w-9 h-9 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white group-hover:text-amber-400 transition-colors">
                    Rudi Snyman
                  </div>
                  <div className="text-[10px] text-slate-400">
                    Technical Lead & On-Site
                  </div>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-amber-400 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>

          {/* Urgent Emergency Call Button */}
          <div className="mt-3 pt-3 border-t border-slate-800">
            <a
              href={`tel:${COMPANY_INFO.contacts.rudi.phone}`}
              className="w-full py-2 px-3 rounded-xl bg-slate-800 hover:bg-slate-750 text-slate-200 text-xs font-bold flex items-center justify-center space-x-2 border border-slate-700"
            >
              <Phone className="w-3.5 h-3.5 text-cyan-400" />
              <span>Urgent Callout: {COMPANY_INFO.contacts.rudi.phoneDisplay}</span>
            </a>
          </div>
        </div>
      )}

      {/* Floating Trigger Pill */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2.5 py-3 px-4 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-slate-950 font-black text-xs shadow-2xl shadow-emerald-500/40 border border-white/20 transition-all hover:scale-105 active:scale-95"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
        </span>
        <MessageCircle className="w-4 h-4 text-slate-950" />
        <span className="tracking-wide">Chat on WhatsApp</span>
      </button>
    </div>
  );
};
