import React, { useState } from 'react';
import { 
  Sun, 
  BatteryCharging, 
  Zap, 
  ShieldCheck, 
  Sparkles, 
  MessageCircle, 
  TrendingUp, 
  Clock, 
  Flame,
  CheckCircle2
} from 'lucide-react';
import { COMPANY_INFO } from '../data/servicesData';
import confetti from 'canvas-confetti';

export const SolarCalculator: React.FC = () => {
  const [monthlyBill, setMonthlyBill] = useState<number>(3500);
  const [coverageLevel, setCoverageLevel] = useState<'essential' | 'full' | 'offgrid'>('full');
  const [hasGasGeyser, setHasGasGeyser] = useState<boolean>(true);

  // Dynamic calculations based on South African domestic electricity tariffs (approx R3.20 - R3.80/kWh)
  const calculateSystem = () => {
    let kwPanels = 0;
    let inverterKw = 5;
    let batteryKwh = 5.12;
    let stageImmunity = 'Stage 6';
    let backupHours = 8;
    let monthlySavings = Math.round(monthlyBill * 0.75);

    if (monthlyBill < 2500) {
      kwPanels = coverageLevel === 'essential' ? 3.3 : coverageLevel === 'full' ? 4.4 : 5.5;
      inverterKw = 5;
      batteryKwh = coverageLevel === 'essential' ? 5.12 : 10.24;
      backupHours = 10;
    } else if (monthlyBill < 5000) {
      kwPanels = coverageLevel === 'essential' ? 5.5 : coverageLevel === 'full' ? 6.6 : 8.8;
      inverterKw = coverageLevel === 'offgrid' ? 8 : 5;
      batteryKwh = coverageLevel === 'essential' ? 5.12 : coverageLevel === 'full' ? 10.24 : 14.3;
      backupHours = 12;
    } else {
      kwPanels = coverageLevel === 'essential' ? 7.7 : coverageLevel === 'full' ? 9.9 : 12.5;
      inverterKw = coverageLevel === 'essential' ? 8 : 10;
      batteryKwh = coverageLevel === 'essential' ? 10.24 : coverageLevel === 'full' ? 15.36 : 20.48;
      backupHours = 16;
    }

    if (hasGasGeyser) {
      // With LPG gas geyser, battery drain is 35% lower!
      monthlySavings = Math.round(monthlyBill * 0.82);
    }

    const fiveYearSavings = monthlySavings * 60;

    return {
      kwPanels: kwPanels.toFixed(1),
      inverterKw,
      batteryKwh: batteryKwh.toFixed(1),
      stageImmunity,
      backupHours,
      monthlySavings,
      fiveYearSavings,
    };
  };

  const sys = calculateSystem();

  const handleWhatsAppShare = () => {
    confetti({
      particleCount: 75,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#f59e0b', '#0ea5e9', '#10b981'],
    });

    const msg = `Hi Dr. Tania and Rudi, I generated a Solar & Load-Shedding Estimate on your website:
• Monthly Eskom Bill: R${monthlyBill.toLocaleString('en-ZA')}
• Backup Level: ${coverageLevel.toUpperCase()}
• LPG Geyser Integration: ${hasGasGeyser ? 'YES' : 'NO'}
• Suggested System: ${sys.kwPanels}kW Solar Array, ${sys.inverterKw}kW Inverter, ${sys.batteryKwh}kWh LiFePO4 Battery.
Can you please provide a free site inspection & tailored quotation for our Richards Bay home?`;

    const encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/${COMPANY_INFO.contacts.tania.whatsappNumber}?text=${encoded}`, '_blank');
  };

  return (
    <section id="solar-calculator" className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Glow Backdrops */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-4">
          <Sun className="w-4 h-4" />
          <span>Interactive Sizing Engine</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
          Solar & Load-Shedding <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-cyan-400">
            Savings Calculator
          </span>
        </h2>
        <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
          Calculate your exact solar PV capacity, lithium battery backup, and estimated monthly savings for your Richards Bay home. 100% SANS certified with electrical COC included.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Interactive Control Panel */}
        <div className="lg:col-span-7 glass-panel p-6 sm:p-8 rounded-3xl border border-slate-700/80 shadow-2xl">
          {/* Bill Slider */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-3">
              <label className="text-sm font-semibold text-slate-200 flex items-center space-x-2">
                <Zap className="w-4 h-4 text-amber-400" />
                <span>Current Monthly Eskom Bill</span>
              </label>
              <span className="text-2xl font-black text-amber-400 font-mono">
                R {monthlyBill.toLocaleString('en-ZA')}
              </span>
            </div>
            <input
              type="range"
              min="1500"
              max="12000"
              step="250"
              value={monthlyBill}
              onChange={(e) => setMonthlyBill(Number(e.target.value))}
              className="w-full h-3 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-500 hover:accent-amber-400 transition-all"
            />
            <div className="flex justify-between text-[11px] text-slate-400 mt-2 font-mono">
              <span>R1,500/mo</span>
              <span>R6,000/mo</span>
              <span>R12,000+/mo</span>
            </div>
          </div>

          {/* Backup Priority Mode */}
          <div className="mb-8">
            <label className="text-sm font-semibold text-slate-200 block mb-3">
              Select Your Power Reliability Goal:
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                {
                  id: 'essential',
                  label: 'Essentials',
                  sub: 'Lights, WiFi, TV, Fridge, Alarms',
                },
                {
                  id: 'full',
                  label: 'Full Comfort',
                  sub: '+ Aircon, Microwave, Laundry',
                },
                {
                  id: 'offgrid',
                  label: 'Max Autonomy',
                  sub: 'Near 100% Grid Freedom',
                },
              ].map((lvl) => (
                <button
                  key={lvl.id}
                  onClick={() => setCoverageLevel(lvl.id as any)}
                  className={`p-3.5 rounded-2xl text-left border transition-all ${
                    coverageLevel === lvl.id
                      ? 'bg-amber-500/15 border-amber-500 text-white shadow-lg shadow-amber-500/10'
                      : 'bg-slate-900/60 border-slate-850 text-slate-300 hover:border-slate-700'
                  }`}
                >
                  <div className="font-bold text-sm text-white mb-1 flex items-center justify-between">
                    <span>{lvl.label}</span>
                    {coverageLevel === lvl.id && (
                      <CheckCircle2 className="w-4 h-4 text-amber-400" />
                    )}
                  </div>
                  <div className="text-[11px] text-slate-400 leading-snug">{lvl.sub}</div>
                </button>
              ))}
            </div>
          </div>

          {/* LPG Gas Geyser Synergy Toggle */}
          <div className="p-4 rounded-2xl bg-cyan-950/30 border border-cyan-800/40 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2.5 rounded-xl bg-cyan-500/20 text-cyan-400">
                <Flame className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">Include LPG Domestic Gas Geyser?</h4>
                <p className="text-xs text-slate-300">
                  Reduces battery load by 40% — certified LPGSA installation by RDT.
                </p>
              </div>
            </div>
            <button
              onClick={() => setHasGasGeyser(!hasGasGeyser)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                hasGasGeyser
                  ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                  : 'bg-slate-800 text-slate-400 border border-slate-700'
              }`}
            >
              {hasGasGeyser ? 'INCLUDED' : 'OPTIONAL'}
            </button>
          </div>
        </div>

        {/* Right Result Blueprint Card */}
        <div className="lg:col-span-5 glass-panel p-6 sm:p-8 rounded-3xl border border-amber-500/30 bg-gradient-to-b from-[#111c38] to-[#0a1124] shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-3 bg-amber-500/20 text-amber-300 font-mono text-[10px] font-bold rounded-bl-2xl uppercase tracking-wider border-b border-l border-amber-500/30">
            Richards Bay Specification
          </div>

          <div className="flex items-center space-x-2 text-amber-400 text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-4 h-4" />
            <span>Recommended System Architecture</span>
          </div>

          <h3 className="text-2xl font-black text-white mb-6">
            RDT Stage 6 Solar Blueprint
          </h3>

          {/* Sizing Grid */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
              <div className="flex items-center space-x-2 text-slate-400 text-xs mb-1">
                <Sun className="w-4 h-4 text-amber-400" />
                <span>Solar PV Array</span>
              </div>
              <div className="text-2xl font-black text-white font-mono">
                {sys.kwPanels} <span className="text-xs text-amber-400 font-sans">kW</span>
              </div>
              <div className="text-[11px] text-slate-400 mt-1">Tier-1 Monocrystalline</div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
              <div className="flex items-center space-x-2 text-slate-400 text-xs mb-1">
                <Zap className="w-4 h-4 text-amber-400" />
                <span>Smart Inverter</span>
              </div>
              <div className="text-2xl font-black text-white font-mono">
                {sys.inverterKw} <span className="text-xs text-amber-400 font-sans">kW</span>
              </div>
              <div className="text-[11px] text-slate-400 mt-1">Hybrid SANS Certified</div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
              <div className="flex items-center space-x-2 text-slate-400 text-xs mb-1">
                <BatteryCharging className="w-4 h-4 text-cyan-400" />
                <span>Lithium Storage</span>
              </div>
              <div className="text-2xl font-black text-white font-mono">
                {sys.batteryKwh} <span className="text-xs text-cyan-400 font-sans">kWh</span>
              </div>
              <div className="text-[11px] text-slate-400 mt-1">LiFePO4 6000+ Cycles</div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
              <div className="flex items-center space-x-2 text-slate-400 text-xs mb-1">
                <Clock className="w-4 h-4 text-emerald-400" />
                <span>Outage Runtime</span>
              </div>
              <div className="text-2xl font-black text-white font-mono">
                {sys.backupHours}+ <span className="text-xs text-emerald-400 font-sans">Hrs</span>
              </div>
              <div className="text-[11px] text-slate-400 mt-1">Stage 6 Load-Shedding Safe</div>
            </div>
          </div>

          {/* Financial ROI Summary */}
          <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 mb-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-slate-300">Estimated Monthly Savings:</span>
              <span className="text-lg font-black text-amber-400 font-mono">
                ~ R {sys.monthlySavings.toLocaleString('en-ZA')} / mo
              </span>
            </div>
            <div className="flex items-center justify-between text-xs border-t border-amber-500/20 pt-2">
              <span className="text-slate-400">5-Year Cumulative Power Savings:</span>
              <span className="font-bold text-white font-mono">
                R {sys.fiveYearSavings.toLocaleString('en-ZA')}
              </span>
            </div>
          </div>

          {/* Legal Compliance Guarantee */}
          <div className="flex items-center space-x-2 text-[11px] text-slate-300 mb-6 bg-slate-900/60 p-2.5 rounded-xl border border-slate-800">
            <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
            <span>Includes official SANS 10142-1 Electrical COC signed by licensed installer.</span>
          </div>

          {/* WhatsApp Action Button */}
          <button
            onClick={handleWhatsAppShare}
            className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-300 text-slate-950 font-black text-sm flex items-center justify-center space-x-2 shadow-xl shadow-amber-500/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <MessageCircle className="w-5 h-5" />
            <span>WhatsApp This Estimate to Dr. Tania & Rudi</span>
          </button>
        </div>
      </div>
    </section>
  );
};
