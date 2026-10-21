import React, { useState } from 'react';
import { CORE_SERVICES, COMPANY_INFO } from '../data/servicesData';
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
  PhoneCall, 
  Shield, 
  Clock, 
  Award,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

export const ServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All 7 Services' },
    { id: 'electrical', label: 'Electrical & Solar' },
    { id: 'gas', label: 'LPG Domestic Gas' },
    { id: 'construction', label: 'Construction & Ceilings' },
    { id: 'plumbing', label: 'Plumbing & Drainage' },
    { id: 'security', label: 'Alarms & Electric Fencing' },
  ];

  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'electrical': return <Zap className="w-6 h-6 text-amber-400" />;
      case 'lpg-gas': return <Flame className="w-6 h-6 text-cyan-400" />;
      case 'solar-energy': return <Sun className="w-6 h-6 text-amber-400" />;
      case 'construction': return <Hammer className="w-6 h-6 text-emerald-400" />;
      case 'plumbing': return <Droplet className="w-6 h-6 text-sky-400" />;
      case 'security': return <ShieldAlert className="w-6 h-6 text-rose-400" />;
      case 'electric-fence': return <ShieldCheck className="w-6 h-6 text-amber-400" />;
      default: return <Sparkles className="w-6 h-6 text-amber-400" />;
    }
  };

  const filteredServices = CORE_SERVICES.filter((srv) => {
    if (selectedCategory === 'all') return true;
    if (selectedCategory === 'electrical') return srv.id === 'electrical' || srv.id === 'solar-energy';
    if (selectedCategory === 'gas') return srv.id === 'lpg-gas';
    if (selectedCategory === 'construction') return srv.id === 'construction';
    if (selectedCategory === 'plumbing') return srv.id === 'plumbing';
    if (selectedCategory === 'security') return srv.id === 'security' || srv.id === 'electric-fence';
    return true;
  });

  return (
    <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      {/* Header */}
      <div className="text-center max-w-4xl mx-auto">
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-4">
          <Award className="w-4 h-4" />
          <span>Full Domestic Service Catalog</span>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight">
          The 7 Certified Domestic Disciplines
        </h1>
        <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
          Every trade is personally supervised by Rudi Snyman and backed by official South African Certificates of Compliance. No middlemen, no subcontracting confusion.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`py-2 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              selectedCategory === cat.id
                ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20'
                : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Detailed Services Catalog */}
      <div className="space-y-12">
        {filteredServices.map((service, index) => (
          <div
            key={service.id}
            id={service.id}
            className="glass-panel rounded-3xl overflow-hidden border border-slate-700/80 p-6 sm:p-10 shadow-2xl scroll-mt-32"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Image & Badges */}
              <div className="lg:col-span-5 relative rounded-2xl overflow-hidden shadow-xl border border-slate-800 group h-72 sm:h-80">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />

                <div className="absolute top-4 left-4 flex items-center space-x-2">
                  <span className="px-3 py-1 rounded-full bg-slate-900/90 text-amber-400 font-mono text-xs font-bold border border-slate-700">
                    Trade 0{index + 1}
                  </span>
                  {service.cocIncluded && (
                    <span className="px-3 py-1 rounded-full bg-emerald-500 text-slate-950 text-xs font-black shadow-lg">
                      Official COC
                    </span>
                  )}
                </div>

                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider font-bold">
                    {service.category}
                  </span>
                  <div className="text-white font-bold text-sm mt-0.5">
                    {service.complianceBadge}
                  </div>
                </div>
              </div>

              {/* Comprehensive Service Details */}
              <div className="lg:col-span-7 flex flex-col justify-between space-y-5">
                <div>
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                      {getServiceIcon(service.id)}
                    </div>
                    <div>
                      <h2 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                        {service.name}
                      </h2>
                      <p className="text-xs text-amber-400 font-semibold">{service.tagline}</p>
                    </div>
                  </div>

                  <p className="text-slate-300 text-sm leading-relaxed mt-4 mb-5">
                    {service.description}
                  </p>

                  {/* Ideal For Badge */}
                  <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-xs mb-5 flex items-start space-x-2">
                    <Award className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-white">Recommended Application:</strong> {service.idealFor}
                    </span>
                  </div>

                  {/* Full Scope Checklist */}
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                    Technical Scope & Deliverables:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6">
                    {service.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start space-x-2 text-xs text-slate-200">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Direct Action Dispatch */}
                <div className="pt-4 border-t border-slate-800 flex flex-wrap gap-3">
                  <a
                    href={`https://wa.me/${COMPANY_INFO.contacts.tania.whatsappNumber}?text=Hi%20Dr.%20Tania,%20I'm%20requesting%20a%20quotation%20for:%20${encodeURIComponent(service.name)}%20in%20Richards%20Bay.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3 px-5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-xs flex items-center space-x-2 shadow-lg shadow-amber-500/20 transition-all"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Request WhatsApp Quote from Tania</span>
                  </a>

                  <a
                    href={`tel:${COMPANY_INFO.contacts.rudi.phone}`}
                    className="py-3 px-5 rounded-xl bg-slate-800 hover:bg-slate-750 text-slate-200 font-bold text-xs flex items-center space-x-2 border border-slate-700 transition-colors"
                  >
                    <PhoneCall className="w-4 h-4 text-cyan-400" />
                    <span>Call Rudi (Technical Consultation)</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Cross-Link Banner */}
      <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-blue-950/60 via-slate-900 to-slate-950 border border-slate-800 text-center space-y-4">
        <h3 className="text-2xl font-black text-white">
          Planning a Complete Home Remodel or Solar Switch?
        </h3>
        <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
          Save time and expense by packaging your domestic Electrical COC, Solar installation, and LPG Gas setup into a single streamlined site contract.
        </p>
        <div className="pt-2 flex justify-center gap-4">
          <Link
            to="/contact"
            className="py-3 px-6 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs transition-all shadow-lg"
          >
            Build Multi-Trade Custom Quote
          </Link>
          <Link
            to="/solar-calculator"
            className="py-3 px-6 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs border border-slate-700 transition-colors"
          >
            Calculate Solar Backup
          </Link>
        </div>
      </div>
    </div>
  );
};
