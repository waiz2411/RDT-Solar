import React from 'react';
import { 
  MapPin, 
  Navigation, 
  Clock, 
  Phone, 
  ExternalLink, 
  CheckCircle2, 
  ShieldCheck, 
  MessageCircle 
} from 'lucide-react';
import { COMPANY_INFO } from '../data/servicesData';

export const ServiceAreaMap: React.FC = () => {
  return (
    <section id="location" className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left Information & Suburbs Panel */}
        <div className="lg:col-span-5 glass-panel p-8 rounded-3xl border border-slate-700/80 flex flex-col justify-between">
          <div>
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-4">
              <MapPin className="w-3.5 h-3.5" />
              <span>Zululand Strategic Base</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-3">
              Based in Richards Bay, Serving All Surrounds
            </h3>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
              Our central headquarters at <strong>7 Octopus Arm, Richards Bay</strong> allows our equipped mobile units to deploy swiftly across all domestic estates and residential suburbs.
            </p>

            {/* Operating Hours */}
            <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 mb-6">
              <div className="flex items-center space-x-2 text-xs font-bold text-amber-400 uppercase tracking-wider mb-1">
                <Clock className="w-4 h-4" />
                <span>Operating Hours</span>
              </div>
              <p className="text-xs text-slate-200">{COMPANY_INFO.operatingHours}</p>
            </div>

            {/* Suburb Pills */}
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
              Covered Suburbs & Areas:
            </h4>
            <div className="flex flex-wrap gap-2 mb-8">
              {COMPANY_INFO.serviceAreas.map((area, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-full text-xs font-medium bg-slate-900 border border-slate-800 text-slate-300 hover:border-amber-500/40 transition-colors"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>

          {/* Quick Action Links */}
          <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row gap-3">
            <a
              href={COMPANY_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs flex items-center justify-center space-x-2 border border-slate-700 transition-all"
            >
              <Navigation className="w-4 h-4 text-cyan-400" />
              <span>Open Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-60" />
            </a>

            <a
              href={`tel:${COMPANY_INFO.contacts.rudi.phone}`}
              className="flex-1 py-3 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs flex items-center justify-center space-x-2 shadow-lg shadow-amber-500/20 transition-all"
            >
              <Phone className="w-4 h-4" />
              <span>Call 082 418 2687</span>
            </a>
          </div>
        </div>

        {/* Right Embedded Interactive Map / Visualizer */}
        <div className="lg:col-span-7 glass-panel rounded-3xl overflow-hidden border border-slate-700/80 shadow-2xl relative min-h-[420px] flex flex-col">
          {/* Map Header Overlay */}
          <div className="p-4 bg-slate-950/90 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center space-x-2.5">
              <span className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-xs font-mono font-bold text-white">
                Richards Bay GPS: 28.78° S, 32.04° E | 7 Octopus Arm
              </span>
            </div>
            <span className="text-[11px] text-amber-400 font-bold px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/20">
              Verified Business
            </span>
          </div>

          {/* Google Maps Embed iframe with dark styling container */}
          <div className="relative flex-1 w-full min-h-[380px] bg-slate-950">
            <iframe
              title="RDT We Do It All Google Maps Location"
              src="https://maps.google.com/maps?q=7%20Octopus%20Arm,%20Richards%20Bay&t=&z=14&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(100%)' }}
              allowFullScreen={false}
              loading="lazy"
              className="w-full h-full min-h-[380px]"
            />

            {/* Floating Location Card */}
            <div className="absolute bottom-6 left-6 right-6 sm:right-auto sm:max-w-sm p-4 rounded-2xl glass-panel border border-white/20 shadow-2xl backdrop-blur-xl">
              <div className="flex items-start space-x-3">
                <div className="p-2 rounded-xl bg-amber-500 text-slate-950 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm">RDT We Do It All</h4>
                  <p className="text-xs text-slate-300">7 Octopus Arm, Richards Bay, ZA</p>
                  <p className="text-[11px] text-emerald-400 font-semibold mt-1 flex items-center space-x-1">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>Rapid callouts across all Zululand suburbs</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
