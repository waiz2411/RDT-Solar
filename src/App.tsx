import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { ScrollToTop } from './components/ScrollToTop';

// Pages
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { SolarCalculatorPage } from './pages/SolarCalculatorPage';
import { CompliancePage } from './pages/CompliancePage';
import { OurWorkPage } from './pages/OurWorkPage';
import { ContactPage } from './pages/ContactPage';

export function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-[#070b16] text-slate-100 flex flex-col font-sans selection:bg-amber-500 selection:text-slate-950">
        {/* Persistent Navigation */}
        <Navbar />

        {/* Dynamic Route Pages */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/solar-calculator" element={<SolarCalculatorPage />} />
            <Route path="/compliance-coc" element={<CompliancePage />} />
            <Route path="/our-work" element={<OurWorkPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>

        {/* Persistent Footer */}
        <Footer />

        {/* Floating Concierge WhatsApp Widget */}
        <FloatingWhatsApp />
      </div>
    </BrowserRouter>
  );
}

export default App;
