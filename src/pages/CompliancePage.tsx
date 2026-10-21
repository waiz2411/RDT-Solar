import React from 'react';
import { ComplianceHub } from '../components/ComplianceHub';
import { 
  ShieldCheck, 
  FileCheck, 
  AlertOctagon, 
  CheckCircle2, 
  HelpCircle, 
  MessageCircle, 
  PhoneCall, 
  Award,
  Zap,
  Flame,
  Shield
} from 'lucide-react';
import { COMPANY_INFO } from '../data/servicesData';
import { Link } from 'react-router-dom';

export const CompliancePage: React.FC = () => {
  return (
    <div className="pt-28 pb-20 space-y-16">
      {/* Header */}
      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
          <ShieldCheck className="w-4 h-4" />
          <span>Statutory South African Certifications</span>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight">
          Certificates of Compliance (COC) Hub
        </h1>
        <p className="mt-4 text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
          Essential legal protection for property transfers, insurance claims, and household safety across Richards Bay & Zululand.
        </p>
      </div>

      {/* Main Compliance Hub Component */}
      <ComplianceHub />

      {/* Why Insurance Companies Reject Claims Section */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-red-500/30 bg-gradient-to-br from-[#160c14] via-[#0f172a] to-[#0a1120] shadow-2xl">
          <div className="flex items-start space-x-4 mb-8">
            <div className="p-3.5 rounded-2xl bg-red-500/20 text-red-400 flex-shrink-0">
              <AlertOctagon className="w-8 h-8" />
            </div>
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-red-400">
                Critical Insurance Warning for South African Homeowners
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
                Why Uncertified DIY or Illegal Work Nullifies Insurance
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm text-slate-300 leading-relaxed mb-8">
            <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800">
              <div className="text-amber-400 font-bold mb-2 flex items-center space-x-2">
                <Zap className="w-4 h-4" />
                <span>Electrical Fires & Surge Claims</span>
              </div>
              <p>
                If a home fire or power surge damages your appliances or structure, insurance assessors immediately demand a valid SANS 10142-1 Electrical COC. Without it, the claim is almost always repudiated.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800">
              <div className="text-cyan-400 font-bold mb-2 flex items-center space-x-2">
                <Flame className="w-4 h-4" />
                <span>Gas Explosion & Leak Damage</span>
              </div>
              <p>
                Under South African Pressure Equipment Regulations (PER), any fixed gas installation (hobs, geysers) installed by an unregistered person is illegal. RDT is an official LPGSA Registered Installer.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800">
              <div className="text-emerald-400 font-bold mb-2 flex items-center space-x-2">
                <Shield className="w-4 h-4" />
                <span>Electric Fence Burglary Liability</span>
              </div>
              <p>
                If an intruder breaches an electric fence that does not meet Department of Labour earthing and voltage regulations, or if a child or pet is harmed, the property owner is legally liable without an EFC certificate.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="text-white font-bold text-sm">Selling Your Richards Bay Property?</h4>
              <p className="text-xs text-slate-400">
                Conveyancing attorneys require all three certificates before the Deeds Office transfer can proceed. We inspect all 3 trades in a single visit!
              </p>
            </div>

            <a
              href={`https://wa.me/${COMPANY_INFO.contacts.tania.whatsappNumber}?text=Hi%20Dr.%20Tania,%20I'm%20selling%20my%20property%20in%20Richards%20Bay%20and%20need%20a%20full%20COC%20inspection%20(Electrical,%20Gas,%20Electric%20Fence).`}
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-6 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs flex items-center space-x-2 shadow-lg shadow-amber-500/20 whitespace-nowrap transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Book Property Transfer COC</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
