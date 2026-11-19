import React from 'react';
import { GraduationCap, MapPin, Phone, MessageCircle, ShieldCheck } from 'lucide-react';

export interface FooterProps {
  onNavigate: (page: string, params?: Record<string, string>) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-white text-slate-600 font-sans border-t border-[#CCDDEA] mt-auto select-none pt-14 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        
        {/* Brand Header & Tagline */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-100 pb-8">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#0082A6] text-white flex items-center justify-center shadow-xs">
              <GraduationCap className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="text-xl font-black tracking-tight text-[#0B2D3A]">
                YouKnow<span className="font-serif italic font-normal text-[#2772A0]">Verse</span>
              </span>
              <p className="text-[11px] text-slate-400">Research Support • Academic Excellence • Your Success</p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
            <MapPin className="w-3.5 h-3.5 text-[#0082A6]" />
            <span>Civil Lines, Mathura, Uttar Pradesh 281001, India</span>
          </div>
        </div>

        {/* 4 Clean Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-xs leading-relaxed">
          
          {/* Column 1: About */}
          <div className="space-y-3">
            <h4 className="font-extrabold text-sm uppercase tracking-wider text-[#0B2D3A]">About</h4>
            <p className="text-slate-500 text-xs leading-relaxed">
              YouKnowVerse helps PhD scholars and university researchers turn complex investigations into defense-cleared academic milestones.
            </p>
            <div className="pt-1 space-y-1.5 text-slate-600">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-slate-400" />
                <a href="tel:+919760498896" className="hover:text-[#0082A6] font-semibold">+91 9760498896</a>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                <a href="https://wa.me/919760498896" target="_blank" rel="noopener noreferrer" className="hover:text-[#0082A6] font-semibold">
                  WhatsApp Support
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Services */}
          <div className="space-y-3">
            <h4 className="font-extrabold text-sm uppercase tracking-wider text-[#0B2D3A]">Services</h4>
            <ul className="space-y-2 text-slate-600">
              <li><button onClick={() => onNavigate('service-detail', { slug: 'thesis-editing' })} className="hover:text-[#0082A6] transition-colors">PhD Thesis Line-Editing</button></li>
              <li><button onClick={() => onNavigate('service-detail', { slug: 'publication-assistance' })} className="hover:text-[#0082A6] transition-colors">Scopus &amp; UGC-CARE Publishing</button></li>
              <li><button onClick={() => onNavigate('service-detail', { slug: 'synopsis-review' })} className="hover:text-[#0082A6] transition-colors">Synopsis &amp; RDC Review</button></li>
              <li><button onClick={() => onNavigate('service-detail', { slug: 'statistical-analysis-spss' })} className="hover:text-[#0082A6] transition-colors">Statistical Analysis (SPSS/R)</button></li>
              <li><button onClick={() => onNavigate('service-detail', { slug: 'research-paper-support' })} className="hover:text-[#0082A6] transition-colors">Research Paper Support</button></li>
              <li><button onClick={() => onNavigate('service-detail', { slug: 'literature-search-support' })} className="hover:text-[#0082A6] transition-colors">Literature Matrix Discovery</button></li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div className="space-y-3">
            <h4 className="font-extrabold text-sm uppercase tracking-wider text-[#0B2D3A]">Resources</h4>
            <ul className="space-y-2 text-slate-600">
              <li><button onClick={() => onNavigate('resources')} className="hover:text-[#0082A6] transition-colors">Research Blog &amp; Guides</button></li>
              <li><button onClick={() => onNavigate('faq')} className="hover:text-[#0082A6] transition-colors">Frequently Asked Questions</button></li>
              <li><button onClick={() => onNavigate('quote-request')} className="hover:text-[#0082A6] transition-colors font-semibold text-[#0082A6]">Quotation Calculator</button></li>
              <li><button onClick={() => onNavigate('how-it-works')} className="hover:text-[#0082A6] transition-colors">How Advisory Works</button></li>
            </ul>
          </div>

          {/* Column 4: Ethics & Legal */}
          <div className="space-y-3">
            <h4 className="font-extrabold text-sm uppercase tracking-wider text-[#0B2D3A]">Ethics &amp; Legal</h4>
            <ul className="space-y-2 text-slate-600">
              <li>
                <button onClick={() => onNavigate('policies', { tab: 'integrity' })} className="hover:text-[#0082A6] transition-colors text-emerald-700 font-semibold flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Academic Integrity Policy</span>
                </button>
              </li>
              <li><button onClick={() => onNavigate('policies', { tab: 'privacy' })} className="hover:text-[#0082A6] transition-colors">Privacy &amp; NDA Policy</button></li>
              <li><button onClick={() => onNavigate('policies', { tab: 'terms' })} className="hover:text-[#0082A6] transition-colors">Terms of Service</button></li>
              <li><button onClick={() => onNavigate('policies', { tab: 'refund' })} className="hover:text-[#0082A6] transition-colors">Refund &amp; Cancellation</button></li>
            </ul>
          </div>

        </div>

        {/* Ethical Statement Banner */}
        <div className="p-4 rounded-2xl bg-[#EBF5F8] border border-[#CCDDEA] text-xs text-slate-700 flex items-start gap-3">
          <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
          <div className="text-[11px] leading-relaxed">
            <strong className="text-[#0B2D3A]">Strict Academic Integrity Pledge:</strong> YouKnowVerse strictly adheres to UGC regulations and COPE international publication ethics. We do not write dissertations on behalf of scholars, nor do we fabricate empirical datasets or guarantee peer-reviewed journal acceptance. Our mission is to guide, critique, edit, and mentor scholars to author their own defense-ready research ethically.
          </div>
        </div>

        {/* Bottom Row */}
        <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © 2026 YouKnowVerse. All rights reserved. Mathura, Uttar Pradesh, India.
          </div>
          <div className="flex items-center gap-3 text-slate-600">
            <span>UGC-CARE &amp; Scopus Standards</span>
            <span>•</span>
            <span>Zero Ghostwriting</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
