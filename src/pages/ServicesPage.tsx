import React from 'react';
import { 
  Compass, 
  FileCheck, 
  BookOpen, 
  GraduationCap, 
  Award, 
  Search, 
  BarChart3, 
  CheckCircle2, 
  ShieldCheck
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
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

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Compass': return <Compass className="w-6 h-6 text-[#D6A52B]" />;
      case 'FileCheck': return <FileCheck className="w-6 h-6 text-[#D6A52B]" />;
      case 'BookOpen': return <BookOpen className="w-6 h-6 text-[#D6A52B]" />;
      case 'GraduationCap': return <GraduationCap className="w-6 h-6 text-[#D6A52B]" />;
      case 'Award': return <Award className="w-6 h-6 text-[#D6A52B]" />;
      case 'Search': return <Search className="w-6 h-6 text-[#D6A52B]" />;
      case 'BarChart3': return <BarChart3 className="w-6 h-6 text-[#D6A52B]" />;
      default: return <BookOpen className="w-6 h-6 text-[#D6A52B]" />;
    }
  };

  return (
    <div className="space-y-12 pb-16 font-sans">
      {/* Header Banner */}
      <section className="bg-[#071E46] text-white py-14 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto space-y-4 text-center">
          <Badge variant="gold">Academic Service Portfolio</Badge>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white">
            Ethical Academic Research & Advisory Services
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
            From initial research area formulation and synopsis defense preparation to full dissertation editing and legitimate journal publication guidance.
          </p>
        </div>
      </section>

      {/* Visual Workflow Infographic */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-4">
        <div className="text-center space-y-1">
          <Badge variant="gold">Service Delivery Pipeline</Badge>
          <h2 className="font-serif font-bold text-2xl text-[#071E46]">How We Deliver Your Milestones</h2>
        </div>
        <ResearchWorkflowGraphic />
      </section>

      {/* Services List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map(s => (
            <Card key={s.id} padding="lg" className="bg-white space-y-6 flex flex-col justify-between border border-slate-200">
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#071E46]/5 border border-[#071E46]/10 flex items-center justify-center">
                    {getServiceIcon(s.icon)}
                  </div>
                  <Badge variant={s.pricing_model === 'per_page' ? 'blue' : 'gold'} size="sm">
                    {s.pricing_model === 'per_page' ? 'Word-Based' : `Starting at ${s.starting_price || 'Quote'}`}
                  </Badge>
                </div>

                <div>
                  <h2 className="font-serif font-bold text-xl text-[#071E46]">
                    {s.title}
                  </h2>
                  <p className="text-xs text-slate-500 font-medium italic mt-1">
                    "{s.tagline}"
                  </p>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    {s.full_description}
                  </p>
                </div>

                {/* Key Deliverables */}
                <div className="space-y-2 pt-2 border-t border-slate-100">
                  <span className="text-[11px] font-bold text-[#071E46] uppercase tracking-wider block">
                    Core Deliverables Included:
                  </span>
                  <ul className="space-y-1.5 text-xs text-slate-700">
                    {s.key_deliverables.map((del, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#D6A52B] shrink-0 mt-0.5" />
                        <span className="leading-snug">{del}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Ideal For */}
                <div className="p-3 rounded-2xl bg-[#F5F7FB] border border-[#E2E8F0] space-y-1 text-xs">
                  <span className="font-bold text-[#071E46] text-[11px] block">Ideal For:</span>
                  <ul className="space-y-1 text-slate-600 text-[11px]">
                    {s.ideal_for.map((target, idx) => (
                      <li key={idx}>• {target}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                <button
                  onClick={() => onNavigate('service-detail', { slug: s.slug })}
                  className="text-xs font-semibold text-[#071E46] hover:text-[#D6A52B] transition-colors"
                >
                  View Full Workflow & Details →
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
                    variant="gold"
                    size="sm"
                    onClick={() => onOpenInquiry(s.id)}
                    className="text-xs font-bold"
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
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-4">
        <div className="text-center space-y-1">
          <Badge variant="navy">Verification Protocol</Badge>
          <h2 className="font-serif font-bold text-2xl text-[#071E46]">Protecting Scholars From Predatory Journals</h2>
        </div>
        <JournalComparisonGraphic />
      </section>

      {/* Ethical Statement Callout */}
      <section className="max-w-4xl mx-auto px-4 sm:px-8">
        <div className="p-6 rounded-3xl bg-[#04122B] text-white border border-white/10 space-y-3">
          <div className="flex items-center gap-2 text-amber-300 font-serif font-bold text-base">
            <ShieldCheck className="w-5 h-5 text-[#D6A52B]" />
            <span>Academic Integrity & Non-Fabrication Notice</span>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            All services offered by AcademicPro India comply strictly with UGC guidelines, institutional DRC requirements, and Committee on Publication Ethics (COPE) norms. We provide substantive editorial critique, statistical advice, literature synthesis, and formatting compliance to help researchers produce authentic scholarship.
          </p>
        </div>
      </section>
    </div>
  );
};
