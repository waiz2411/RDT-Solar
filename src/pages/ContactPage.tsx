import React from 'react';
import { QuoteBuilder } from '../components/QuoteBuilder';
import { ServiceAreaMap } from '../components/ServiceAreaMap';
import { 
  Phone, 
  MessageCircle, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  UserCheck, 
  Mail,
  Navigation
} from 'lucide-react';
import { COMPANY_INFO } from '../data/servicesData';

export const ContactPage: React.FC = () => {
  return (
    <div className="pt-28 pb-20 space-y-16">
      {/* Header */}
      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-4">
          <Phone className="w-4 h-4" />
          <span>Direct Owner Communication</span>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight">
          Connect With Dr. Tania & Rudi
        </h1>
        <p className="mt-4 text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
          Need a site visit, emergency electrical repair, gas COC, or solar quotation in Richards Bay? We respond promptly.
        </p>
      </div>

      {/* Dual Direct Contact Cards */}
      <div className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Dr. Tania Snyman */}
        <div className="glass-panel p-8 rounded-3xl border border-slate-700/80 shadow-2xl relative overflow-hidden flex flex-col justify-between">
          <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />
          <div>
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-5">
              <MessageCircle className="w-6 h-6" />
            </div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400">
              General Inquiries & Bookings
            </span>
            <h3 className="text-2xl font-black text-white mt-1">Dr. Tania Snyman</h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-2 mb-6">
              Contact Tania for general quotes, COC inspection bookings, invoice inquiries, and project scheduling.
            </p>
          </div>

          <div className="space-y-3 pt-4 border-t border-slate-800">
            <a
              href={`https://wa.me/${COMPANY_INFO.contacts.tania.whatsappNumber}?text=Hi%20Dr.%20Tania,%20I'm%20reaching%20out%20from%20your%20website%20for%20assistance.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-slate-950 font-bold text-xs flex items-center justify-center space-x-2 shadow-lg shadow-emerald-500/20 transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp: {COMPANY_INFO.contacts.tania.phoneDisplay}</span>
            </a>
            <a
              href={`tel:${COMPANY_INFO.contacts.tania.phone}`}
              className="w-full py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-750 text-slate-200 font-semibold text-xs flex items-center justify-center space-x-2 border border-slate-700"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>Direct Call: {COMPANY_INFO.contacts.tania.phoneDisplay}</span>
            </a>
          </div>
        </div>

        {/* Rudi Snyman */}
        <div className="glass-panel p-8 rounded-3xl border border-slate-700/80 shadow-2xl relative overflow-hidden flex flex-col justify-between">
          <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />
          <div>
            <div className="w-12 h-12 rounded-2xl bg-amber-500/20 text-amber-400 flex items-center justify-center mb-5">
              <Phone className="w-6 h-6" />
            </div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400">
              Technical Lead & On-Site Diagnostics
            </span>
            <h3 className="text-2xl font-black text-white mt-1">Rudi Snyman</h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-2 mb-6">
              Contact Rudi directly for technical site assessments, load calculations, emergency callouts, and field execution.
            </p>
          </div>

          <div className="space-y-3 pt-4 border-t border-slate-800">
            <a
              href={`tel:${COMPANY_INFO.contacts.rudi.phone}`}
              className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs flex items-center justify-center space-x-2 shadow-lg shadow-amber-500/20 transition-all"
            >
              <Phone className="w-4 h-4" />
              <span>Direct Call: {COMPANY_INFO.contacts.rudi.phoneDisplay}</span>
            </a>
            <a
              href={`https://wa.me/${COMPANY_INFO.contacts.rudi.whatsappNumber}?text=Hi%20Rudi,%20I%20need%20technical%20advice%20for%20my%20property%20in%20Richards%20Bay.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-750 text-slate-200 font-semibold text-xs flex items-center justify-center space-x-2 border border-slate-700"
            >
              <MessageCircle className="w-4 h-4 text-amber-400" />
              <span>WhatsApp: {COMPANY_INFO.contacts.rudi.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Custom Quote Builder */}
      <QuoteBuilder />

      {/* Geographic Base & Map */}
      <ServiceAreaMap />
    </div>
  );
};
