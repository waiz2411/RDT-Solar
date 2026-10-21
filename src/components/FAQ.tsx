import React, { useState } from 'react';
import { FREQUENT_QUESTIONS } from '../data/servicesData';
import { ChevronDown, HelpCircle, ShieldCheck } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <div className="text-center mb-14">
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-4">
          <HelpCircle className="w-4 h-4" />
          <span>Clear Answers for Homeowners</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
          Frequently Asked Questions
        </h2>
        <p className="mt-3 text-slate-300 text-sm">
          Everything you need to know about domestic COCs, solar resilience, and our Richards Bay services.
        </p>
      </div>

      <div className="space-y-4">
        {FREQUENT_QUESTIONS.map((item, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className="glass-card rounded-2xl border border-slate-800/80 overflow-hidden transition-all"
            >
              <button
                onClick={() => toggle(idx)}
                className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
              >
                <span className="font-bold text-sm sm:text-base text-white">
                  {item.question}
                </span>
                <div
                  className={`w-7 h-7 rounded-full bg-slate-800 flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                    isOpen ? 'rotate-180 bg-amber-500 text-slate-950' : 'text-slate-400'
                  }`}
                >
                  <ChevronDown className="w-4 h-4" />
                </div>
              </button>

              {isOpen && (
                <div className="px-5 pb-6 sm:px-6 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 pt-4">
                  {item.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
