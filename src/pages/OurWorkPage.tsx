import React, { useState } from 'react';
import { RealWorkShowcase } from '../components/RealWorkShowcase';
import { 
  Truck, 
  MapPin, 
  ShieldCheck, 
  Award, 
  ChevronLeft, 
  ChevronRight, 
  MessageCircle, 
  PhoneCall,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { COMPANY_INFO } from '../data/servicesData';
import { Link } from 'react-router-dom';

export const OurWorkPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'solar' | 'ceilings' | 'electrical' | 'fencing'>('all');

  const projects = [
    {
      title: "Solar PV & Battery System",
      suburb: "Meerensee, Richards Bay",
      category: "solar",
      image: "https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=1000&q=80",
      description: "8kW Sunsynk Hybrid Inverter paired with 10.24kWh LiFePO4 battery bank and 12 Tier-1 monocrystalline panels. Stage 6 immunity.",
      badge: "SANS 10142-1 Certified"
    },
    {
      title: "Ceiling Revamp & Drywall Room Divisions",
      suburb: "Birdswood, Richards Bay",
      category: "ceilings",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80",
      description: "Complete removal of storm-damaged ceiling, replacement with plastered Rhino board, integrated warm LED downlights, and acoustic drywall divider.",
      badge: "Master Craftsmanship"
    },
    {
      title: "Domestic LPG Gas Geyser & Hob Installation",
      suburb: "Arboretum, Richards Bay",
      category: "all",
      image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1000&q=80",
      description: "Installation of high-efficiency outdoor gas geyser with copper manifolds, dual gas bottle cage, and official LPGSA Certificate of Compliance.",
      badge: "LPGSA Registered"
    },
    {
      title: "Distribution Board (DB) Neaten & Surge Arrestor",
      suburb: "Veldenvlei, Richards Bay",
      category: "electrical",
      image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1000&q=80",
      description: "Old fuse box replaced with modern Schneider DB board, earth leakage, lightning surge arrestors, and certified Electrical COC.",
      badge: "Full Electrical COC"
    },
    {
      title: "High-Voltage Wall-Top Electric Fencing",
      suburb: "Brackenham, Richards Bay",
      category: "fencing",
      image: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1000&q=80",
      description: "8-strand Nemtek wall-top electric fencing with anti-tamper loop monitoring, dedicated battery backup, and Electric Fence System COC.",
      badge: "EFC COC Compliant"
    },
    {
      title: "Paving, Foundation & Structural Revamping",
      suburb: "7 Octopus Arm Base, Richards Bay",
      category: "all",
      image: "/images/rudi-onsite-truck.jpeg",
      description: "On-site preparation, paving, and fleet operations supervised directly by Rudi Snyman.",
      badge: "Owner-Supervised"
    }
  ];

  const filteredProjects = activeTab === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeTab || p.category === 'all');

  return (
    <div className="pt-28 pb-20 space-y-16">
      {/* Header */}
      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4">
          <Truck className="w-4 h-4" />
          <span>Richards Bay Project Portfolio</span>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight">
          Real Local Work. Guaranteed Excellence.
        </h1>
        <p className="mt-4 text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
          See the authentic quality delivered by Rudi Snyman and our Richards Bay field team across all 7 domestic disciplines.
        </p>
      </div>

      {/* Main Real Work Component with Before/After Slider */}
      <RealWorkShowcase />

      {/* Gallery Filter & Grid */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {[
            { id: 'all', label: 'All Projects' },
            { id: 'solar', label: 'Solar & Inverters' },
            { id: 'ceilings', label: 'Ceilings & Revamping' },
            { id: 'electrical', label: 'Electrical & DB' },
            { id: 'fencing', label: 'Electric Fencing' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`py-2 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === tab.id
                  ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((proj, idx) => (
            <div
              key={idx}
              className="glass-card rounded-3xl overflow-hidden border border-slate-800/80 group flex flex-col justify-between"
            >
              <div className="relative h-60 overflow-hidden">
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                <div className="absolute top-4 left-4 bg-slate-900/90 text-amber-400 text-xs font-mono font-bold px-3 py-1 rounded-full border border-slate-700">
                  {proj.badge}
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-xs font-semibold text-slate-300 flex items-center space-x-1">
                  <MapPin className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                  <span>{proj.suburb}</span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">{proj.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                    {proj.description}
                  </p>
                </div>

                <a
                  href={`https://wa.me/${COMPANY_INFO.contacts.tania.whatsappNumber}?text=Hi%20Tania,%20I'm%20interested%20in%20a%20similar%20project%20to:%20${encodeURIComponent(proj.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold flex items-center justify-center space-x-2 border border-slate-700 transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>Inquire About This Work</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
