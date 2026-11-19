import React from 'react';
import { 
  CheckCircle2, 
  ShieldCheck,
  ChevronRight
} from 'lucide-react';
import { CacheStore } from '../lib/cacheStore';
import { ResearchWorkflowGraphic } from '../components/graphics/ResearchWorkflowGraphic';
import { JournalComparisonGraphic } from '../components/graphics/JournalComparisonGraphic';

export interface ServicesPageProps {
  onNavigate: (page: string, params?: Record<string, string>) => void;
  onOpenBooking: () => void;
  onOpenInquiry: (serviceId?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onNavigate,
  onOpenBooking,
  onOpenInquiry,
}) => {
  const services = CacheStore.getServices();

  const serviceImageMap: Record<string, string> = {
    'research-topic-guidance': '/images/topic-guidance.webp',
    'synopsis-review': '/images/synopsis-review.webp',
    'thesis-editing': '/images/thesis-editing.webp',
    'research-paper-support': '/images/research-paper.webp',
    'publication-assistance': '/images/publication-assistance.webp',
    'literature-search-support': '/images/literature-search.webp',
    'statistical-analysis-spss': '/images/topic-guidance.webp',
  };

  return (
    <div className="space-y-16 sm:space-y-24 pb-20 font-sans text-[#0B2D3A] select-none">
      
      {/* Editorial Minimalist Hero Header */}
      <section className="pt-8 sm:pt-14 px-4 sm:px-8 max-w-5xl mx-auto text-center space-y-4">
        <span className="px-3.5 py-1 rounded-full bg-[#EBF5F8] text-[#0082A6] text-xs font-bold uppercase tracking-wider">
          ACADEMIC SERVICES CATALOG
        </span>
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0B2D3A] leading-[1.1]">
          Ethical Research &amp; <br />
          <span className="font-serif italic font-normal text-[#2772A0]">Advisory Modules</span>
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto leading-relaxed">
          From initial research problem formulation and synopsis defense preparation to full dissertation editing and verified Scopus publication guidance.
        </p>
      </section>

      {/* Visual Workflow Infographic */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-4">
        <div className="text-center space-y-1 max-w-xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-wider text-[#0082A6]">
            Milestone Architecture
          </span>
          <h2 className="font-extrabold text-2xl text-[#0B2D3A]">
            Service Delivery Milestones
          </h2>
          <p className="text-xs text-slate-500">
            A transparent four-step workflow from proposal to publication.
          </p>
        </div>
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#CCDDEA] shadow-subtle">
          <ResearchWorkflowGraphic />
        </div>
      </section>

      {/* Services List with Pictures & Concentric Geometry */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-3 border-b border-[#CCDDEA] pb-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#0082A6]">
              Comprehensive Catalog
            </span>
            <h2 className="font-extrabold text-2xl sm:text-3xl text-[#0B2D3A]">
              Available Advisory Modules
            </h2>
          </div>
          <p className="text-xs text-slate-500 max-w-xs">
            Select a module to view complete deliverables, pricing models, and timeline scope.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map(s => (
            <div 
              key={s.id} 
              className="bg-white rounded-3xl p-6 border border-[#CCDDEA] shadow-subtle flex flex-col justify-between space-y-5 hover:border-[#0082A6] transition-colors"
            >
              <div className="space-y-4">
                {/* Visual Image Header */}
                <div className="relative overflow-hidden rounded-2xl border border-slate-200">
                  <img
                    src={serviceImageMap[s.slug] || '/images/hero-scholar.webp'}
                    alt={s.title}
                    className="w-full h-48 object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-3 right-3 bg-[#0082A6] text-white text-xs font-bold px-3 py-1 rounded-full shadow-xs">
                    {s.starting_price || 'Custom Quote'}
                  </div>
                </div>

                <div>
                  <h3 className="font-extrabold text-xl text-[#0B2D3A]">
                    {s.title}
                  </h3>
                  <p className="text-xs text-[#2772A0] font-semibold mt-0.5">
                    "{s.tagline}"
                  </p>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    {s.full_description}
                  </p>
                </div>

                {/* Key Deliverables */}
                <div className="space-y-2 pt-3 border-t border-slate-100">
                  <span className="text-[11px] font-bold text-[#0B2D3A] uppercase tracking-wider block">
                    Core Deliverables Included:
                  </span>
                  <ul className="space-y-1.5 text-xs text-slate-700">
                    {s.key_deliverables.slice(0, 4).map((del, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#0082A6] shrink-0 mt-0.5" />
                        <span className="leading-snug">{del}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                <button
                  onClick={() => onNavigate('service-detail', { slug: s.slug })}
                  className="text-xs font-bold text-[#0082A6] hover:text-[#006F8E] flex items-center gap-1"
                >
                  <span>View Full Details</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>

                {/* Creatively Joined Action Duo Pill */}
                <div className="inline-flex items-center p-1 rounded-full bg-[#F7F5ED] border border-[#CCDDEA] shadow-2xs">
                  <button
                    onClick={onOpenBooking}
                    className="px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#0B2D3A] hover:text-[#0082A6] hover:bg-white transition-colors"
                  >
                    Consult
                  </button>
                  <button
                    onClick={() => onOpenInquiry(s.id)}
                    className="px-4 py-1.5 rounded-full text-xs font-bold bg-[#0082A6] hover:bg-[#006F8E] text-white shadow-xs transition-colors"
                  >
                    Request Quote
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Journal Publishing Protection Infographic */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-4">
        <div className="text-center space-y-1 max-w-xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-wider text-[#0082A6]">
            Academic Rigor
          </span>
          <h2 className="font-extrabold text-2xl text-[#0B2D3A]">
            Protecting Scholars From Predatory Journals
          </h2>
          <p className="text-xs text-slate-500">
            Our strict protocol verifies legitimate indexing in UGC-CARE, Scopus, and Web of Science.
          </p>
        </div>
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#CCDDEA] shadow-subtle">
          <JournalComparisonGraphic />
        </div>
      </section>

      {/* Ethical Statement Banner */}
      <section className="max-w-4xl mx-auto px-4 sm:px-8">
        <div className="p-6 rounded-3xl bg-[#0B2D3A] text-white border border-[#C4DEE3]/20 shadow-premium space-y-3">
          <div className="flex items-center gap-2 text-[#C4DEE3] font-bold text-sm">
            <ShieldCheck className="w-5 h-5 text-[#0082A6]" />
            <span>Academic Integrity &amp; Non-Fabrication Guarantee</span>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            All services offered by YouKnowVerse comply strictly with UGC guidelines, institutional DRC requirements, and Committee on Publication Ethics (COPE) norms. We provide substantive editorial critique, statistical advice, literature synthesis, and formatting compliance to help researchers produce authentic scholarship.
          </p>
        </div>
      </section>

    </div>
  );
};
