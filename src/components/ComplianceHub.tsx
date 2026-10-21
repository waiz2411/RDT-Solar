import React from 'react';
import { 
  ShieldCheck, 
  FileCheck, 
  Flame, 
  Zap, 
  ShieldAlert, 
  AlertTriangle, 
  CheckCircle2, 
  ExternalLink,
  MessageCircle
} from 'lucide-react';
import { COMPANY_INFO } from '../data/servicesData';

export const ComplianceHub: React.FC = () => {
  return (
    <section id="compliance" className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Background card container */}
      <div className="relative rounded-3xl p-8 sm:p-12 border border-slate-700/80 bg-gradient-to-br from-[#0c1326] via-[#101a33] to-[#0a1020] shadow-2xl overflow-hidden">
        {/* Glow decoration */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <ShieldCheck className="w-4 h-4" />
            <span>South African Statutory Standards</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Protect Your Home & Insurance: <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-200 to-cyan-400">
              The 3 Mandatory Domestic COCs
            </span>
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            In South Africa, insurance claims for house fires, lightning surges, gas leaks, or perimeter breaches are regularly repudiated if work was performed without legally registered Certificates of Compliance. RDT issues official, certified COCs for all three critical disciplines.
          </p>
        </div>

        {/* 3 Pillars of Compliance */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Pillar 1: Electrical COC */}
          <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-amber-500/40 transition-all">
            <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center mb-5">
              <Zap className="w-6 h-6" />
            </div>
            <div className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider mb-1">
              SANS 10142-1
            </div>
            <h3 className="text-lg font-bold text-white mb-2">
              Electrical Certificate of Compliance
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed mb-4">
              Mandatory by law under the Occupational Health and Safety Act. Required for property transfers, insurance validation, and post-solar installation sign-off.
            </p>
            <ul className="space-y-2 text-[11px] text-slate-400 border-t border-slate-800/80 pt-3">
              <li className="flex items-center space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                <span>Full distribution board verification</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                <span>Earth leakage & loop impedance test</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                <span>Valid for Deeds Office property transfer</span>
              </li>
            </ul>
          </div>

          {/* Pillar 2: LPG Gas COC */}
          <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 transition-all">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center mb-5">
              <Flame className="w-6 h-6" />
            </div>
            <div className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider mb-1">
              LPGSA Registered
            </div>
            <h3 className="text-lg font-bold text-white mb-2">
              Domestic LPG Gas Certificate
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed mb-4">
              Under Pressure Equipment Regulations (PER), all fixed gas appliances (geysers, hobs, fireplaces) must have a legal Gas COC issued by a registered LPGSA installer.
            </p>
            <ul className="space-y-2 text-[11px] text-slate-400 border-t border-slate-800/80 pt-3">
              <li className="flex items-center space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                <span>Pressure leak decay testing</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                <span>Safe clearance distances from drains/plugs</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                <span>LPGSA certified installer stamp</span>
              </li>
            </ul>
          </div>

          {/* Pillar 3: Electric Fence COC */}
          <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-emerald-500/40 transition-all">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-5">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider mb-1">
              SANS 10222-3 / EFC
            </div>
            <h3 className="text-lg font-bold text-white mb-2">
              Electric Fence System COC
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed mb-4">
              Electric fences must comply with Department of Labour regulations. An EFC certificate guarantees the energizer output, earthing system, and anti-tamper are safe and legal.
            </p>
            <ul className="space-y-2 text-[11px] text-slate-400 border-t border-slate-800/80 pt-3">
              <li className="flex items-center space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                <span>High-voltage earth spike verification</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                <span>Safe bracket heights & warning signs</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                <span>Mandatory for municipal property sales</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Warning Banner & Direct Contact */}
        <div className="p-6 rounded-2xl bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-transparent border border-amber-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-3">
            <AlertTriangle className="w-6 h-6 text-amber-400 flex-shrink-0" />
            <p className="text-xs text-slate-200">
              <strong className="text-white">Selling your home or need an inspection in Richards Bay?</strong> Get all your mandatory COCs inspected and signed off in a single convenient visit.
            </p>
          </div>
          <a
            href={`https://wa.me/${COMPANY_INFO.contacts.tania.whatsappNumber}?text=Hi%20Tania,%20I%20need%20a%20COC%20inspection%20(Electrical%20/%20Gas%20/%20Electric%20Fence)%20for%20my%20property%20in%20Richards%20Bay.`}
            target="_blank"
            rel="noopener noreferrer"
            className="whitespace-nowrap py-2.5 px-5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs flex items-center space-x-2 shadow-lg shadow-amber-500/20 transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Book A COC Inspection</span>
          </a>
        </div>
      </div>
    </section>
  );
};
