import React, { useState } from 'react';
import { 
  CheckCircle2, 
  MapPin, 
  Phone, 
  ShieldCheck, 
  Sparkles, 
  Truck, 
  UserCheck,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { COMPANY_INFO } from '../data/servicesData';

export const RealWorkShowcase: React.FC = () => {
  const [sliderPos, setSliderPos] = useState<number>(50);

  return (
    <section id="real-work" className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4">
          <Truck className="w-4 h-4" />
          <span>Authentic Richards Bay Field Operations</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
          Real Local Work. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-cyan-400">
            Owner-Supervised Precision.
          </span>
        </h2>
        <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
          We don't outsource to unknown subcontractors. Rudi Snyman and the dedicated RDT team personally supervise and execute your installation to guarantee compliance, safety, and longevity.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
        {/* Real Fleet Photo Highlight */}
        <div className="lg:col-span-7 relative group">
          <div className="relative rounded-3xl overflow-hidden border border-slate-700/80 shadow-2xl bg-slate-900">
            <img
              src="/images/rudi-onsite-truck.jpeg"
              alt="RDT Team and Rudi Snyman on site in Richards Bay"
              className="w-full h-[420px] sm:h-[480px] object-cover group-hover:scale-[1.02] transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

            {/* Overlay Badge */}
            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl glass-panel border border-white/10 backdrop-blur-md">
              <div className="flex items-center space-x-2 text-amber-400 text-xs font-bold font-mono uppercase tracking-wider mb-1">
                <MapPin className="w-4 h-4 text-amber-400" />
                <span>On-Site Execution — Richards Bay, ZA</span>
              </div>
              <h4 className="text-white font-bold text-base sm:text-lg">
                RDT Branded Fleet & Field Crew In Action
              </h4>
              <p className="text-xs text-slate-300 mt-1">
                Paving, structural prep, and home revamping supervised personally by Rudi Snyman.
              </p>
            </div>
          </div>
        </div>

        {/* Story & Local Trust Points */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-6 rounded-3xl bg-slate-900/80 border border-slate-800">
            <div className="flex items-center space-x-3 mb-3">
              <div className="p-2.5 rounded-xl bg-amber-500/20 text-amber-400">
                <UserCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-white font-bold text-base">Direct Owner Accountability</h4>
                <p className="text-xs text-slate-400">Rudi & Dr. Tania Snyman</p>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              When you call RDT, you speak directly with the owners. Dr. Tania ensures prompt communication, transparent quotes, and scheduled appointments, while Rudi leads technical diagnostics and on-site implementation.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-slate-900/80 border border-slate-800">
            <div className="flex items-center space-x-3 mb-3">
              <div className="p-2.5 rounded-xl bg-cyan-500/20 text-cyan-400">
                <Truck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-white font-bold text-base">Fully Equipped Mobile Fleet</h4>
                <p className="text-xs text-slate-400">Richards Bay, Empangeni & Zululand</p>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Our branded service vehicles carry specialized tools, testing instruments for electrical and gas leak detection, and high-quality materials so most issues are solved on the first visit.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-slate-900/80 border border-slate-800">
            <div className="flex items-center space-x-3 mb-3">
              <div className="p-2.5 rounded-xl bg-emerald-500/20 text-emerald-400">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-white font-bold text-base">Guaranteed Workmanship</h4>
                <p className="text-xs text-slate-400">Zero Shortcuts, Full Safety</p>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Whether installing a high-voltage electric fence, rewiring a distribution board, or revamping a ceiling, we follow strict South African SANS building and electrical standards.
            </p>
          </div>
        </div>
      </div>

      {/* Interactive Before & After Transformation Demo */}
      <div className="glass-panel p-6 sm:p-10 rounded-3xl border border-slate-700/80">
        <div className="max-w-2xl mb-8">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400">
            Visual Proof of Quality
          </span>
          <h3 className="text-2xl sm:text-3xl font-black text-white mt-1">
            Home Revamping & Modernization Standard
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-2">
            Drag the slider below to view the architectural transformation: from aging structure to modern ceiling finish with integrated LED lighting.
          </p>
        </div>

        <div className="relative w-full h-[360px] sm:h-[440px] rounded-2xl overflow-hidden select-none border border-slate-700 shadow-xl">
          {/* "After" Image (Modern Revamped Room) */}
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80"
            alt="After Renovation - Modern Ceiling and divisions"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute top-4 right-4 bg-emerald-500/90 text-slate-950 font-black text-xs px-3 py-1.5 rounded-lg shadow-lg">
            AFTER: RDT Revamp & Ceilings
          </div>

          {/* "Before" Image Clipped */}
          <div
            className="absolute inset-y-0 left-0 overflow-hidden"
            style={{ width: `${sliderPos}%` }}
          >
            <img
              src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1400&q=80"
              alt="Before Renovation - Needs Work"
              className="absolute inset-0 w-full h-full object-cover max-w-none"
              style={{ width: '100%', minWidth: '100%' }}
            />
            <div className="absolute top-4 left-4 bg-slate-900/90 text-amber-400 font-black text-xs px-3 py-1.5 rounded-lg shadow-lg border border-slate-700">
              BEFORE: Damaged & Outdated
            </div>
          </div>

          {/* Slider Divider Bar */}
          <div
            className="absolute inset-y-0 w-1 bg-white shadow-2xl cursor-ew-resize flex items-center justify-center"
            style={{ left: `${sliderPos}%` }}
          >
            <div className="w-8 h-8 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center shadow-lg -translate-x-1/2">
              <ChevronLeft className="w-3.5 h-3.5 -mr-1" />
              <ChevronRight className="w-3.5 h-3.5 -ml-1" />
            </div>
          </div>

          {/* Slider Touch/Mouse Input Overlay */}
          <input
            type="range"
            min="0"
            max="100"
            value={sliderPos}
            onChange={(e) => setSliderPos(Number(e.target.value))}
            className="absolute inset-0 opacity-0 cursor-ew-resize w-full h-full z-10"
          />
        </div>
      </div>
    </section>
  );
};
