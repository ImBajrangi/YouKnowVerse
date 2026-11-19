import React from 'react';
import { 
  CheckCircle2, 
  ShieldCheck,
  ChevronRight
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
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
    'statistical-analysis-spss': '/images/research-paper.webp',
  };

  return (
    <div className="space-y-12 pb-16 font-sans">
      {/* Header Banner (Clean Solid Peacock Navy, Native Fonts) */}
      <section className="bg-[#0B2D3A] text-white py-10 sm:py-14 px-4 sm:px-8 border-b border-[#134455]">
        <div className="max-w-7xl mx-auto space-y-3 text-center">
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Ethical Academic Research & Advisory Services
          </h1>
          <p className="text-xs sm:text-sm text-[#C4DEE3] max-w-2xl mx-auto leading-relaxed">
            From initial research area formulation and synopsis defense preparation to full dissertation editing and verified journal publication guidance.
          </p>
        </div>
      </section>

      {/* Visual Workflow Infographic */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-3">
        <div>
          <h2 className="font-bold text-xl text-[#0B2D3A]">Service Delivery Milestones</h2>
          <p className="text-xs text-[#3D6170]">Transparent four-step workflow from proposal to publication.</p>
        </div>
        <ResearchWorkflowGraphic />
      </section>

      {/* Services List with Pictures */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-6">
        <div>
          <h2 className="font-bold text-xl text-[#0B2D3A]">Available Advisory Modules</h2>
          <p className="text-xs text-[#3D6170]">Select a module to view complete deliverables, pricing models, and timeline scope.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map(s => (
            <Card key={s.id} padding="md" className="bg-white space-y-4 flex flex-col justify-between border border-[#D6E6EB]">
              <div className="space-y-3">
                {/* Real WebP Image Header */}
                <div className="relative overflow-hidden rounded-2xl border border-[#D6E6EB]">
                  <img
                    src={serviceImageMap[s.slug] || '/images/hero-scholar.webp'}
                    alt={s.title}
                    className="w-full h-44 object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-2.5 right-2.5 bg-[#0B2D3A]/90 text-[#C4DEE3] text-xs font-semibold px-2.5 py-1 rounded-lg border border-white/10">
                    {s.starting_price || 'Custom Quote'}
                  </div>
                </div>

                <div>
                  <h3 className="font-bold text-lg text-[#0B2D3A]">
                    {s.title}
                  </h3>
                  <p className="text-xs text-[#3D6170] font-medium mt-0.5">
                    "{s.tagline}"
                  </p>
                  <p className="text-xs text-[#0B2D3A] mt-2 leading-relaxed">
                    {s.full_description}
                  </p>
                </div>

                {/* Key Deliverables */}
                <div className="space-y-1.5 pt-2 border-t border-[#D6E6EB]/60">
                  <span className="text-[11px] font-bold text-[#0B2D3A] uppercase tracking-wider block">
                    Core Deliverables Included:
                  </span>
                  <ul className="space-y-1 text-xs text-[#0B2D3A]">
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
              <div className="pt-3 border-t border-[#D6E6EB]/60 flex flex-wrap items-center justify-between gap-3">
                <button
                  onClick={() => onNavigate('service-detail', { slug: s.slug })}
                  className="text-xs font-semibold text-[#0082A6] hover:underline flex items-center gap-1"
                >
                  <span>View Full Workflow</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>

                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={onOpenBooking}
                    className="text-xs"
                  >
                    Discuss Scope
                  </Button>
                  <Button
                    variant="teal"
                    size="sm"
                    onClick={() => onOpenInquiry(s.id)}
                    className="text-xs font-semibold"
                  >
                    Request Quote
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Journal Publishing Protection Infographic */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-3">
        <div>
          <h2 className="font-bold text-xl text-[#0B2D3A]">Protecting Scholars From Predatory Journals</h2>
          <p className="text-xs text-[#3D6170]">Our strict protocol verifies legitimate indexing in UGC-CARE, Scopus, and Web of Science.</p>
        </div>
        <JournalComparisonGraphic />
      </section>

      {/* Ethical Statement Callout */}
      <section className="max-w-4xl mx-auto px-4 sm:px-8">
        <div className="p-5 rounded-3xl bg-[#061D26] text-white border border-[#134455] space-y-2">
          <div className="flex items-center gap-2 text-[#86B9C7] font-bold text-sm">
            <ShieldCheck className="w-4 h-4 text-[#0082A6]" />
            <span>Academic Integrity & Non-Fabrication Guarantee</span>
          </div>
          <p className="text-xs text-[#C4DEE3] leading-relaxed">
            All services offered by AcademicPro India comply strictly with UGC guidelines, institutional DRC requirements, and Committee on Publication Ethics (COPE) norms. We provide substantive editorial critique, statistical advice, literature synthesis, and formatting compliance to help researchers produce authentic scholarship.
          </p>
        </div>
      </section>
    </div>
  );
};
