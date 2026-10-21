import React from 'react';
import { 
  ShieldCheck, 
  Sun, 
  Zap, 
  Flame, 
  Wrench, 
  ArrowRight, 
  MessageCircle, 
  Phone, 
  MapPin, 
  CheckCircle2, 
  Box,
  Sparkles
} from 'lucide-react';
import { COMPANY_INFO } from '../data/servicesData';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Dynamic Background Mesh Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-amber-500/15 via-blue-600/10 to-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Verification Pill */}
        <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-slate-900/90 border border-slate-700/80 backdrop-blur-md shadow-xl mb-6">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
          <span className="text-xs font-semibold text-slate-200">
            Richards Bay's Premier Multi-Trade Contractor
          </span>
          <span className="text-slate-600">•</span>
          <span className="text-xs font-mono font-bold text-amber-400">7 Certified Trades</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.08] mb-6">
          Complete Domestic Engineering. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-cyan-400">
            Certified Excellence.
          </span>{' '}
          <br className="hidden sm:inline" />
          <span className="text-white text-3xl sm:text-5xl lg:text-6xl font-extrabold">
            One Trusted Team.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
          From <strong className="text-amber-400 font-semibold">Solar & Electrical COCs</strong> to{' '}
          <strong className="text-cyan-400 font-semibold">LPG Gas</strong>, Roofs, Ceilings, Plumbing, and High-Voltage Electric Fences across Richards Bay & Zululand. Owner-supervised by Rudi & Tania Snyman.
        </p>

        {/* Call to Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="#visualizer-3d"
            className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-300 text-slate-950 font-black text-sm flex items-center justify-center space-x-2 shadow-xl shadow-amber-500/25 transition-all hover:scale-105 active:scale-95"
          >
            <Box className="w-5 h-5" />
            <span>Explore In Interactive 3D</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </a>

          <a
            href="#solar-calculator"
            className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-slate-900/90 hover:bg-slate-800 text-white font-bold text-sm flex items-center justify-center space-x-2 border border-slate-700 backdrop-blur-md transition-all hover:border-cyan-400"
          >
            <Sun className="w-5 h-5 text-amber-400" />
            <span>Solar & Load-Shedding Calculator</span>
          </a>

          <a
            href={`https://wa.me/${COMPANY_INFO.contacts.tania.whatsappNumber}?text=Hi%20Tania,%20I'm%20visiting%20your%20website%20and%20would%20like%20to%20request%20a%20free%20consultation.`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-4 rounded-2xl bg-emerald-600/90 hover:bg-emerald-500 text-white font-bold text-sm flex items-center justify-center space-x-2 shadow-lg shadow-emerald-600/20 transition-all"
          >
            <MessageCircle className="w-5 h-5" />
            <span>WhatsApp Tania</span>
          </a>
        </div>

        {/* Quick Value Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-6 border-t border-slate-800/80">
          <div className="p-4 rounded-2xl bg-slate-900/50 border border-slate-800/80 backdrop-blur-sm">
            <div className="text-2xl sm:text-3xl font-black text-amber-400 font-mono">100%</div>
            <div className="text-xs text-slate-300 font-semibold mt-0.5">COC Compliant</div>
            <div className="text-[10px] text-slate-400">SANS 10142-1 & LPGSA</div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900/50 border border-slate-800/80 backdrop-blur-sm">
            <div className="text-2xl sm:text-3xl font-black text-cyan-400 font-mono">7 Trades</div>
            <div className="text-xs text-slate-300 font-semibold mt-0.5">Single Contractor</div>
            <div className="text-[10px] text-slate-400">No Subcontractor Delays</div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900/50 border border-slate-800/80 backdrop-blur-sm">
            <div className="text-2xl sm:text-3xl font-black text-emerald-400 font-mono">Stage 6</div>
            <div className="text-xs text-slate-300 font-semibold mt-0.5">Outage Resilience</div>
            <div className="text-[10px] text-slate-400">Sunsynk & LiFePO4 Systems</div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900/50 border border-slate-800/80 backdrop-blur-sm">
            <div className="text-2xl sm:text-3xl font-black text-white font-mono">Richards Bay</div>
            <div className="text-xs text-slate-300 font-semibold mt-0.5">Local Zululand Base</div>
            <div className="text-[10px] text-slate-400">7 Octopus Arm, ZA</div>
          </div>
        </div>
      </div>
    </section>
  );
};
