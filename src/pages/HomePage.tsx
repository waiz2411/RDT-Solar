import React from 'react';
import { Hero } from '../components/Hero';
import { InteractiveHome3D } from '../components/InteractiveHome3D';
import { ServicesGrid } from '../components/ServicesGrid';
import { SolarCalculator } from '../components/SolarCalculator';
import { ComplianceHub } from '../components/ComplianceHub';
import { RealWorkShowcase } from '../components/RealWorkShowcase';
import { ServiceAreaMap } from '../components/ServiceAreaMap';
import { QuoteBuilder } from '../components/QuoteBuilder';
import { FAQ } from '../components/FAQ';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Sun, Truck, PhoneCall, Sparkles } from 'lucide-react';
import { COMPANY_INFO } from '../data/servicesData';

export const HomePage: React.FC = () => {
  return (
    <div className="space-y-12 sm:space-y-20 pb-16">
      {/* Hero Section */}
      <Hero />

      {/* 3D Interactive Home Model */}
      <section id="visualizer-3d" className="py-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-28">
        <InteractiveHome3D />
      </section>

      {/* Services Preview Grid */}
      <ServicesGrid />

      {/* Multi-Page Explore Strip */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-slate-700 bg-gradient-to-r from-[#0c1429] via-[#111e3d] to-[#0c1429] shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-xl">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400">
              Need In-Depth Technical Information?
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white mt-1">
              Explore Our Dedicated Resource Pages
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-2">
              Browse detailed equipment specifications for all 7 trades, calculate your solar load-shedding savings, or read our South Africa COC compliance guide.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              to="/services"
              className="py-3 px-5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs flex items-center space-x-1.5 shadow-lg shadow-amber-500/20 transition-all"
            >
              <span>View All 7 Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              to="/solar-calculator"
              className="py-3 px-5 rounded-xl bg-slate-800 hover:bg-slate-750 text-white font-bold text-xs flex items-center space-x-1.5 border border-slate-700 transition-colors"
            >
              <Sun className="w-4 h-4 text-amber-400" />
              <span>Full Solar Calculator</span>
            </Link>

            <Link
              to="/compliance-coc"
              className="py-3 px-5 rounded-xl bg-slate-800 hover:bg-slate-750 text-white font-bold text-xs flex items-center space-x-1.5 border border-slate-700 transition-colors"
            >
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>COC Guide</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Solar Calculator Preview */}
      <SolarCalculator />

      {/* Statutory South Africa COC Standards */}
      <ComplianceHub />

      {/* Real Field Work & Fleet Showcase */}
      <RealWorkShowcase />

      {/* Geographic Base & Map */}
      <ServiceAreaMap />

      {/* Multi-Trade Quote Generator */}
      <QuoteBuilder />

      {/* FAQ Accordion */}
      <FAQ />
    </div>
  );
};
