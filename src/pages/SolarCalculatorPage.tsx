import React from 'react';
import { SolarCalculator } from '../components/SolarCalculator';
import { 
  Sun, 
  BatteryCharging, 
  Zap, 
  ShieldCheck, 
  Sparkles, 
  Clock, 
  AlertTriangle, 
  CheckCircle2, 
  MessageCircle,
  PhoneCall
} from 'lucide-react';
import { COMPANY_INFO } from '../data/servicesData';
import { Link } from 'react-router-dom';

export const SolarCalculatorPage: React.FC = () => {
  return (
    <div className="pt-28 pb-20 space-y-16">
      {/* Page Header */}
      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-4">
          <Sun className="w-4 h-4" />
          <span>Richards Bay Energy Resilience</span>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight">
          Solar PV & Load-Shedding Sizing Engine
        </h1>
        <p className="mt-4 text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
          Tailored for KwaZulu-Natal coastal sun exposure. Calculate your solar array, lithium battery bank, and load-shedding survival stage in seconds.
        </p>
      </div>

      {/* Main Calculator Component */}
      <SolarCalculator />

      {/* South Africa Load-Shedding Stages Reference */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-slate-700/80 shadow-2xl">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400">
              Load-Shedding Resilience Blueprint
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
              How RDT Solar Systems Handle Grid Blackouts
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-2">
              Unlike cheap non-certified inverters that fail during consecutive outages, our Sunsynk and Deye hybrid configurations maintain constant domestic uptime.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800">
              <div className="text-xs font-mono font-bold text-emerald-400 uppercase mb-1">
                Stage 1 — 2 Outages
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Essential Coverage</h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Powers all internal and external LED lighting, high-speed WiFi routers, TV, DSTV/Netflix, and home alarm systems with zero interruption.
              </p>
              <div className="text-[11px] text-emerald-400 font-semibold flex items-center space-x-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>100% Battery Autonomous</span>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800">
              <div className="text-xs font-mono font-bold text-amber-400 uppercase mb-1">
                Stage 3 — 4 Outages
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Comfort Coverage</h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Maintains full essential power PLUS domestic refrigerators, upright freezers, microwaves, laptop chargers, and garage doors.
              </p>
              <div className="text-[11px] text-amber-400 font-semibold flex items-center space-x-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Continuous Food Protection</span>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800">
              <div className="text-xs font-mono font-bold text-cyan-400 uppercase mb-1">
                Stage 6 & Multi-Day
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Complete Grid Immunity</h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Coupled with a domestic LPG gas geyser installed by RDT, heavy heating loads are offloaded, allowing your battery to run aircon & full household loads 24/7.
              </p>
              <div className="text-[11px] text-cyan-400 font-semibold flex items-center space-x-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Zero Load-Shedding Stress</span>
              </div>
            </div>
          </div>

          {/* Site Inspection CTA */}
          <div className="mt-8 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-3">
              <div className="p-2.5 rounded-xl bg-amber-500/20 text-amber-400">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-white font-bold text-sm">Need Rudi to Inspect Your DB Board?</h4>
                <p className="text-xs text-slate-400">
                  We verify your roof angles, phase connection (Single Phase / 3-Phase), and provide an on-site quote.
                </p>
              </div>
            </div>

            <a
              href={`https://wa.me/${COMPANY_INFO.contacts.tania.whatsappNumber}?text=Hi%20Tania,%20I%20would%20like%20to%20book%20a%20free%20solar%20site%20assessment%20for%20our%20home%20in%20Richards%20Bay.`}
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-6 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs flex items-center space-x-2 shadow-lg shadow-amber-500/20 transition-all whitespace-nowrap"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Book A Solar Site Inspection</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
