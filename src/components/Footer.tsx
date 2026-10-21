import React from 'react';
import { COMPANY_INFO, CORE_SERVICES } from '../data/servicesData';
import { 
  MapPin, 
  Phone, 
  MessageCircle, 
  ShieldCheck, 
  Clock, 
  ChevronRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-slate-950 border-t border-slate-850 pt-16 pb-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-850">
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="w-12 h-12 rounded-xl overflow-hidden border border-white/20 bg-slate-900 flex items-center justify-center">
                <img
                  src="/images/rdt-logo.jpeg"
                  alt="RDT Logo"
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
                <span className="text-amber-400 font-bold text-xs absolute">RDT</span>
              </div>
              <div>
                <span className="text-lg font-black text-white tracking-tight group-hover:text-amber-400 transition-colors">
                  RDT
                </span>
                <span className="text-sm font-bold text-slate-300 ml-1.5 uppercase">
                  We Do It All
                </span>
                <p className="text-[11px] text-amber-400 font-mono">
                  Richards Bay Multi-Trade Specialists
                </p>
              </div>
            </Link>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Your certified single-source contractor for domestic solar installations, electrical COCs, LPG domestic gas, structural revamping, plumbing, and high-voltage perimeter security across Zululand.
            </p>

            <div className="pt-2 text-slate-400 space-y-1.5">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <span>7 Octopus Arm, Richards Bay, KwaZulu-Natal, 3900, ZA</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>Mon – Fri: 07:00 – 17:30 | 24/7 Emergency Response</span>
              </div>
            </div>
          </div>

          {/* Quick Page Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Website Pages
            </h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-amber-400 transition-colors flex items-center space-x-1.5">
                  <ChevronRight className="w-3 h-3 text-slate-600" />
                  <span>Home & 3D Visualizer</span>
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-amber-400 transition-colors flex items-center space-x-1.5">
                  <ChevronRight className="w-3 h-3 text-slate-600" />
                  <span>All 7 Certified Services</span>
                </Link>
              </li>
              <li>
                <Link to="/solar-calculator" className="hover:text-amber-400 transition-colors flex items-center space-x-1.5">
                  <ChevronRight className="w-3 h-3 text-slate-600" />
                  <span>Solar & Load-Shedding Calculator</span>
                </Link>
              </li>
              <li>
                <Link to="/compliance-coc" className="hover:text-amber-400 transition-colors flex items-center space-x-1.5">
                  <ChevronRight className="w-3 h-3 text-slate-600" />
                  <span>Legal South Africa COCs</span>
                </Link>
              </li>
              <li>
                <Link to="/our-work" className="hover:text-amber-400 transition-colors flex items-center space-x-1.5">
                  <ChevronRight className="w-3 h-3 text-slate-600" />
                  <span>Our Work & Fleet Showcase</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-amber-400 transition-colors flex items-center space-x-1.5">
                  <ChevronRight className="w-3 h-3 text-slate-600" />
                  <span>Contact & Richards Bay Base</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* South Africa Compliance Badges */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Certifications & Standards
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li className="flex items-center space-x-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>SANS 10142-1 Electrical</span>
              </li>
              <li className="flex items-center space-x-2">
                <ShieldCheck className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>LPGSA Registered Gas</span>
              </li>
              <li className="flex items-center space-x-2">
                <ShieldCheck className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>Electric Fence System COC</span>
              </li>
              <li className="flex items-center space-x-2">
                <ShieldCheck className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span>SABS / PIRB Plumbing</span>
              </li>
              <li className="flex items-center space-x-2">
                <ShieldCheck className="w-4 h-4 text-rose-400 flex-shrink-0" />
                <span>Home Insurance Approved</span>
              </li>
            </ul>
          </div>

          {/* Direct Contacts */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Direct Contact
            </h4>
            <div className="space-y-2.5">
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                <div className="text-[11px] font-bold text-white">Dr. Tania Snyman</div>
                <div className="text-[10px] text-slate-400 mb-1">Bookings & Client Relations</div>
                <a
                  href={`https://wa.me/${COMPANY_INFO.contacts.tania.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:text-emerald-300 font-mono font-bold flex items-center space-x-1"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>{COMPANY_INFO.contacts.tania.phoneDisplay}</span>
                </a>
              </div>

              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                <div className="text-[11px] font-bold text-white">Rudi Snyman</div>
                <div className="text-[10px] text-slate-400 mb-1">Technical Lead & Operations</div>
                <a
                  href={`tel:${COMPANY_INFO.contacts.rudi.phone}`}
                  className="text-amber-400 hover:text-amber-300 font-mono font-bold flex items-center space-x-1"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>{COMPANY_INFO.contacts.rudi.phoneDisplay}</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-slate-400 text-[11px] gap-4">
          <p>© {new Date().getFullYear()} RDT We Do It All. 7 Octopus Arm, Richards Bay, South Africa.</p>
          <div className="flex items-center space-x-4">
            <Link to="/services" className="hover:text-white transition-colors">Services</Link>
            <span>•</span>
            <Link to="/solar-calculator" className="hover:text-white transition-colors">Solar Sizing</Link>
            <span>•</span>
            <Link to="/compliance-coc" className="hover:text-white transition-colors">COCs</Link>
            <span>•</span>
            <a href={COMPANY_INFO.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Google Maps</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
