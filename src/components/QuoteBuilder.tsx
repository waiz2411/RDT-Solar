import React, { useState } from 'react';
import { CORE_SERVICES, COMPANY_INFO } from '../data/servicesData';
import { 
  CheckSquare, 
  Square, 
  Send, 
  MessageCircle, 
  Sparkles, 
  Phone, 
  ShieldCheck, 
  Calendar,
  MapPin,
  User
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const QuoteBuilder: React.FC = () => {
  const [selectedServices, setSelectedServices] = useState<string[]>([
    'solar-energy',
    'electrical'
  ]);
  const [clientName, setClientName] = useState<string>('');
  const [suburb, setSuburb] = useState<string>('Meerensee');
  const [urgency, setUrgency] = useState<string>('Standard (Within 2-3 Days)');
  const [notes, setNotes] = useState<string>('');

  const toggleService = (id: string) => {
    setSelectedServices(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const handleSendQuote = (recipient: 'tania' | 'rudi') => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.7 },
      colors: ['#f59e0b', '#06b6d4', '#10b981', '#3b82f6'],
    });

    const chosenServiceNames = CORE_SERVICES
      .filter(s => selectedServices.includes(s.id))
      .map(s => `• ${s.name}`)
      .join('\n');

    const targetContact = recipient === 'tania' 
      ? COMPANY_INFO.contacts.tania 
      : COMPANY_INFO.contacts.rudi;

    const message = `Hello ${targetContact.name}, I am requesting a quote via your website:
Name: ${clientName || 'Homeowner'}
Location: ${suburb}, Richards Bay
Timeline: ${urgency}

Services Requested:
${chosenServiceNames || '• General Consultation'}

Additional Details: ${notes || 'Please contact me to discuss a site visit and estimate.'}`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${targetContact.whatsappNumber}?text=${encoded}`, '_blank');
  };

  return (
    <section id="quote-builder" className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-slate-700/80 shadow-2xl relative overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-4 h-4" />
            <span>Interactive Multi-Trade Estimator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Build Your Custom Package
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base">
            Select one or multiple services. Bundle your electrical COC with solar or LPG gas for unified project delivery in Richards Bay.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Services Checklist */}
          <div className="lg:col-span-7 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-2">
              1. Choose Required Services ({selectedServices.length} Selected):
            </h4>

            {CORE_SERVICES.map((srv) => {
              const isSelected = selectedServices.includes(srv.id);
              return (
                <div
                  key={srv.id}
                  onClick={() => toggleService(srv.id)}
                  className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-center justify-between ${
                    isSelected
                      ? 'bg-amber-500/10 border-amber-500 text-white shadow-md shadow-amber-500/10'
                      : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center space-x-3.5">
                    <div className="text-amber-400">
                      {isSelected ? (
                        <CheckSquare className="w-5 h-5 text-amber-400" />
                      ) : (
                        <Square className="w-5 h-5 text-slate-500" />
                      )}
                    </div>
                    <div>
                      <h5 className="font-bold text-sm sm:text-base text-white">
                        {srv.name}
                      </h5>
                      <span className="text-xs text-slate-400">{srv.complianceBadge}</span>
                    </div>
                  </div>

                  {srv.cocIncluded && (
                    <span className="hidden sm:inline-flex text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                      COC Sign-off
                    </span>
                  )}
                </div>
              );
            })}
          </div>

          {/* Contact & Dispatch Card */}
          <div className="lg:col-span-5 glass-panel p-6 sm:p-8 rounded-3xl border border-slate-700 bg-slate-900/90 shadow-xl space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-1">
              2. Your Richards Bay Property Details:
            </h4>

            {/* Client Name */}
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1.5 flex items-center space-x-1.5">
                <User className="w-3.5 h-3.5 text-amber-400" />
                <span>Your Name:</span>
              </label>
              <input
                type="text"
                placeholder="e.g. Johan Smith"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-amber-400"
              />
            </div>

            {/* Suburb Selector */}
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1.5 flex items-center space-x-1.5">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                <span>Richards Bay Suburb / Area:</span>
              </label>
              <select
                value={suburb}
                onChange={(e) => setSuburb(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-cyan-400"
              >
                {COMPANY_INFO.serviceAreas.map((area, idx) => (
                  <option key={idx} value={area} className="bg-slate-900">
                    {area}
                  </option>
                ))}
              </select>
            </div>

            {/* Urgency */}
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1.5 flex items-center space-x-1.5">
                <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                <span>Urgency / Preferred Timeline:</span>
              </label>
              <select
                value={urgency}
                onChange={(e) => setUrgency(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-emerald-400"
              >
                <option value="Urgent / Emergency (Today)">🚨 Urgent Emergency (Today)</option>
                <option value="Within 2-3 Days">⚡ Standard (Within 2-3 Days)</option>
                <option value="Within 1-2 Weeks">📅 Within 1-2 Weeks</option>
                <option value="Planning / Quote Phase">💡 Planning & Quotation Phase</option>
              </select>
            </div>

            {/* Optional Notes */}
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1.5">
                Specific Notes or Scope (Optional):
              </label>
              <textarea
                rows={2}
                placeholder="e.g. Need solar sizing for 4 bedroom house + gas geyser COC"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full px-4 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-amber-400 resize-none"
              />
            </div>

            {/* Dual WhatsApp Buttons */}
            <div className="pt-3 border-t border-slate-800 space-y-2.5">
              <button
                onClick={() => handleSendQuote('tania')}
                className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-xs flex items-center justify-center space-x-2 shadow-lg shadow-amber-500/20 transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Quote to Dr. Tania (Bookings)</span>
              </button>

              <button
                onClick={() => handleSendQuote('rudi')}
                className="w-full py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs flex items-center justify-center space-x-2 border border-slate-700 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-cyan-400" />
                <span>WhatsApp Quote to Rudi (Technical)</span>
              </button>
            </div>

            <p className="text-[11px] text-center text-slate-400">
              Direct connection to the business owners. Zero spam.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
