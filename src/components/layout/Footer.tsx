import React from 'react';
import { GraduationCap, MapPin, Phone, Mail, MessageCircle, ShieldCheck } from 'lucide-react';

export interface FooterProps {
  onNavigate: (page: string, params?: Record<string, string>) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#061D26] text-slate-300 font-sans border-t border-[#134455] mt-auto select-none">
      {/* Upper Footer: Branding & Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6">
          {/* Column 1: Brand & Identity */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#0082A6] border border-[#86B9C7]/40 flex items-center justify-center shadow-xs">
                <GraduationCap className="w-6 h-6 text-[#C4DEE3]" />
              </div>
              <div>
                <span className="font-serif text-xl font-bold tracking-tight text-white">
                  AcademicPro <span className="text-[#86B9C7] text-sm uppercase">India</span>
                </span>
                <p className="text-xs text-[#C4DEE3]/80">Research Support • Academic Excellence • Your Success</p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-md">
              A premier academic research consultancy established in Mathura, Uttar Pradesh. Providing ethical, high-caliber guidance for PhD scholars, postgraduate researchers, and university faculty.
            </p>

            <div className="space-y-2 text-xs text-slate-300 pt-2">
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-[#86B9C7] shrink-0" />
                <span>Civil Lines, Mathura, Uttar Pradesh 281001, India</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#86B9C7] shrink-0" />
                <a href="tel:+919760498896" className="hover:text-white transition-colors">
                  +91 9760498896
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0" />
                <a 
                  href="https://wa.me/919760498896" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  WhatsApp: +91 9760498896 (Instant Support)
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#86B9C7] shrink-0" />
                <a href="mailto:support@academicproindia.com" className="hover:text-white transition-colors">
                  support@academicproindia.com
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Core Services */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm font-semibold uppercase tracking-wider text-[#86B9C7]">
              Services
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => onNavigate('service-detail', { slug: 'research-topic-guidance' })} className="hover:text-white transition-colors text-left">
                  Research Topic Guidance
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('service-detail', { slug: 'synopsis-review' })} className="hover:text-white transition-colors text-left">
                  Synopsis Review
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('service-detail', { slug: 'thesis-editing' })} className="hover:text-white transition-colors text-left">
                  Thesis Editing & Formatting
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('service-detail', { slug: 'research-paper-support' })} className="hover:text-white transition-colors text-left">
                  Research Paper Support
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('service-detail', { slug: 'publication-assistance' })} className="hover:text-white transition-colors text-left">
                  Publication Assistance
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('service-detail', { slug: 'literature-search-support' })} className="hover:text-white transition-colors text-left">
                  Literature Search & Matrix
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('service-detail', { slug: 'statistical-analysis-spss' })} className="hover:text-white transition-colors text-left">
                  Statistical Analysis & SPSS
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Navigation */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm font-semibold uppercase tracking-wider text-[#86B9C7]">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              <li><button onClick={() => onNavigate('home')} className="hover:text-white transition-colors">Home</button></li>
              <li><button onClick={() => onNavigate('about')} className="hover:text-white transition-colors">About AcademicPro</button></li>
              <li><button onClick={() => onNavigate('how-it-works')} className="hover:text-white transition-colors">How It Works</button></li>
              <li><button onClick={() => onNavigate('resources')} className="hover:text-white transition-colors">Research Blog & Guides</button></li>
              <li><button onClick={() => onNavigate('faq')} className="hover:text-white transition-colors">Frequently Asked Questions</button></li>
              <li><button onClick={() => onNavigate('contact')} className="hover:text-white transition-colors">Contact Mathura Office</button></li>
              <li><button onClick={() => onNavigate('quote-request')} className="hover:text-white transition-colors text-[#86B9C7]">Request a Free Quote</button></li>
            </ul>
          </div>

          {/* Column 4: Compliance & Policies */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm font-semibold uppercase tracking-wider text-[#86B9C7]">
              Ethics & Legal
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => onNavigate('policies', { tab: 'integrity' })} className="hover:text-white transition-colors text-left flex items-center gap-1.5 text-[#C4DEE3]">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#86B9C7]" />
                  <span>Academic Integrity Policy</span>
                </button>
              </li>
              <li><button onClick={() => onNavigate('policies', { tab: 'privacy' })} className="hover:text-white transition-colors">Privacy & NDA Policy</button></li>
              <li><button onClick={() => onNavigate('policies', { tab: 'terms' })} className="hover:text-white transition-colors">Terms and Conditions</button></li>
              <li><button onClick={() => onNavigate('policies', { tab: 'refund' })} className="hover:text-white transition-colors">Refund & Cancellation</button></li>
            </ul>
          </div>
        </div>

        {/* Ethical Statement Banner */}
        <div className="mt-10 p-4 rounded-2xl bg-[#0B2D3A] border border-[#134455] text-xs text-slate-300 flex flex-col sm:flex-row items-start sm:items-center gap-3">
          <div className="p-2 bg-[#061D26] text-[#86B9C7] rounded-xl shrink-0">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div className="flex-1 text-[11px] sm:text-xs leading-relaxed text-slate-300">
            <strong className="text-white">Strict Academic Ethics Pledge:</strong> AcademicPro India strictly adheres to university guidelines and UGC ethics norms. We do not write theses or research papers on behalf of scholars, nor do we fabricate empirical datasets or guarantee peer-reviewed journal acceptance. Our mission is to guide, critique, edit, and mentor researchers to author their own scholarly milestones ethically.
          </div>
        </div>

        {/* Bottom Bar: Copyright & Location */}
        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © 2026 AcademicPro India. All rights reserved. Mathura, Uttar Pradesh.
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <span>Designed for Academic Excellence</span>
            <span>•</span>
            <span>UGC & Scopus Ethical Guidance</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
