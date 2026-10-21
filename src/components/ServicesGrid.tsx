import React, { useState } from 'react';
import { CORE_SERVICES, COMPANY_INFO, ServiceItem } from '../data/servicesData';
import { 
  Zap, 
  Flame, 
  Sun, 
  Hammer, 
  Droplet, 
  ShieldAlert, 
  ShieldCheck, 
  CheckCircle2, 
  MessageCircle, 
  ArrowUpRight,
  Shield,
  PhoneCall
} from 'lucide-react';

export const ServicesGrid: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  const [activeCard, setActiveCard] = useState<string | null>(null);

  const getIcon = (id: string) => {
    switch (id) {
      case 'electrical': return <Zap className="w-5 h-5 text-amber-400" />;
      case 'lpg-gas': return <Flame className="w-5 h-5 text-cyan-400" />;
      case 'solar-energy': return <Sun className="w-5 h-5 text-amber-400" />;
      case 'construction': return <Hammer className="w-5 h-5 text-emerald-400" />;
      case 'plumbing': return <Droplet className="w-5 h-5 text-sky-400" />;
      case 'security': return <ShieldAlert className="w-5 h-5 text-rose-400" />;
      case 'electric-fence': return <ShieldCheck className="w-5 h-5 text-amber-400" />;
      default: return <Shield className="w-5 h-5 text-amber-400" />;
    }
  };

  const filteredServices = filter === 'all' 
    ? CORE_SERVICES 
    : filter === 'coc'
    ? CORE_SERVICES.filter(s => s.cocIncluded)
    : CORE_SERVICES;

  return (
    <section id="services" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Glow elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>The 7 Certified Disciplines</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Comprehensive Domestic Services, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-cyan-400">
              Zero Subcontractor Hassle
            </span>
          </h2>
          <p className="mt-3 text-slate-300 max-w-2xl text-sm sm:text-base">
            Every trade is managed under one roof in Richards Bay. Fully compliant with South African SANS standards, LPGSA regulations, and municipal building codes.
          </p>
        </div>

        {/* Filter Toggle */}
        <div className="flex items-center space-x-2 bg-slate-900/90 p-1.5 rounded-2xl border border-slate-800 self-start md:self-end">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              filter === 'all'
                ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            All 7 Services
          </button>
          <button
            onClick={() => setFilter('coc')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center space-x-1.5 ${
              filter === 'coc'
                ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>COC Certified Trades</span>
          </button>
        </div>
      </div>

      {/* 7 Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredServices.map((service, index) => {
          const isLarge = index === 0 || index === 2; // Solar & Electrical get prominent visual treatment
          return (
            <div
              key={service.id}
              id={service.id}
              onMouseEnter={() => setActiveCard(service.id)}
              onMouseLeave={() => setActiveCard(null)}
              className={`glass-card glass-card-hover rounded-3xl overflow-hidden flex flex-col justify-between group transition-all duration-300 ${
                isLarge ? 'md:col-span-2 lg:col-span-1 border-slate-700/80' : 'border-slate-800/80'
              }`}
            >
              {/* Card Image Banner */}
              <div className="relative h-56 sm:h-64 w-full overflow-hidden">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1424] via-[#0d1424]/40 to-transparent" />

                {/* Top Badges */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <div className="px-3 py-1 rounded-full bg-slate-900/90 backdrop-blur-md border border-slate-700 text-xs font-mono font-bold text-amber-400">
                    Trade 0{index + 1}
                  </div>
                  {service.cocIncluded && (
                    <div className="px-3 py-1 rounded-full bg-emerald-500/90 backdrop-blur-md text-slate-950 text-xs font-black flex items-center space-x-1 shadow-lg shadow-emerald-500/30">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>COC Included</span>
                    </div>
                  )}
                </div>

                {/* Category & Service Tag */}
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-cyan-400 font-mono">
                    {service.category}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight mt-1">
                    {service.name}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Bullet Highlights */}
                  <div className="space-y-2.5 mb-6">
                    {service.features.slice(0, 4).map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start space-x-2.5 text-xs text-slate-200">
                        <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Info & WhatsApp Trigger */}
                <div className="pt-5 border-t border-slate-800">
                  <div className="flex items-center justify-between text-xs mb-4">
                    <span className="text-slate-400">Standard:</span>
                    <span className="font-semibold text-slate-200 px-2 py-0.5 rounded bg-slate-800/80 border border-slate-700">
                      {service.complianceBadge}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <a
                      href={`https://wa.me/${COMPANY_INFO.contacts.tania.whatsappNumber}?text=Hi%20Dr.%20Tania,%20I'm%20looking%20for%20a%20quote%20on:%20${encodeURIComponent(service.name)}%20in%20Richards%20Bay.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2.5 px-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs flex items-center justify-center space-x-1.5 transition-all shadow-md shadow-amber-500/20"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>WhatsApp Tania</span>
                    </a>
                    <a
                      href={`tel:${COMPANY_INFO.contacts.rudi.phone}`}
                      className="py-2.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs flex items-center justify-center space-x-1.5 border border-slate-700 transition-colors"
                    >
                      <PhoneCall className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Call Rudi</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
