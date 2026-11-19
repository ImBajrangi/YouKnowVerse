import React from 'react';
import { 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Clock, 
  Compass, 
  FileCheck, 
  BookOpen, 
  Award, 
  Search, 
  BarChart3, 
  MapPin, 
  MessageCircle, 
  Star, 
  ChevronRight,
  HelpCircle,
  DollarSign,
  Sparkles,
  GraduationCap
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { CacheStore } from '../lib/cacheStore';
import { ManuscriptAuditGraphic } from '../components/graphics/ManuscriptAuditGraphic';
import { ResearchWorkflowGraphic } from '../components/graphics/ResearchWorkflowGraphic';
import { JournalComparisonGraphic } from '../components/graphics/JournalComparisonGraphic';
import { BeforeAfterPreviewGraphic } from '../components/graphics/BeforeAfterPreviewGraphic';
import { UniversityNetworkGraphic } from '../components/graphics/UniversityNetworkGraphic';

export interface HomePageProps {
  onNavigate: (page: string, params?: Record<string, string>) => void;
  onOpenBooking: () => void;
  onOpenInquiry: (serviceId?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenBooking,
  onOpenInquiry,
}) => {
  const services = CacheStore.getServices();
  const testimonials = CacheStore.getTestimonials();
  const faqs = CacheStore.getFAQs().slice(0, 5);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Compass': return <Compass className="w-5 h-5 text-[#0082A6]" />;
      case 'FileCheck': return <FileCheck className="w-5 h-5 text-[#0082A6]" />;
      case 'BookOpen': return <BookOpen className="w-5 h-5 text-[#0082A6]" />;
      case 'GraduationCap': return <GraduationCap className="w-5 h-5 text-[#0082A6]" />;
      case 'Award': return <Award className="w-5 h-5 text-[#0082A6]" />;
      case 'Search': return <Search className="w-5 h-5 text-[#0082A6]" />;
      case 'BarChart3': return <BarChart3 className="w-5 h-5 text-[#0082A6]" />;
      default: return <BookOpen className="w-5 h-5 text-[#0082A6]" />;
    }
  };

  return (
    <div className="space-y-14 sm:space-y-20 pb-16 font-sans">
      {/* SECTION 1: HERO WITH GRAPHICAL AUDIT HUD */}
      <section className="relative bg-gradient-to-b from-[#061D26] via-[#0B2D3A] to-[#061D26] text-white pt-12 sm:pt-20 pb-16 sm:pb-24 px-4 sm:px-8 overflow-hidden select-none">
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#0082A6_1px,transparent_1px)] [background-size:24px_24px]" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content (6 Cols): Clean, Punchy Typography */}
            <div className="lg:col-span-6 space-y-5 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#134455] border border-[#86B9C7]/40 text-xs text-[#C4DEE3]">
                <MapPin className="w-3.5 h-3.5 text-[#86B9C7]" />
                <span>Premier Research Consultancy • Mathura, UP</span>
              </div>

              <h1 className="font-serif text-3xl sm:text-5xl font-extrabold tracking-tight leading-[1.12] text-white">
                Your Research Journey <br />
                <span className="text-[#86B9C7] italic font-serif">Starts Here.</span>
              </h1>

              <p className="font-serif text-base sm:text-xl text-[#C4DEE3] font-medium">
                Professional Academic Guidance for PhD Scholars, Researchers & Faculty.
              </p>

              {/* Graphical Value Chips */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1 text-xs">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-white/10 border border-[#86B9C7]/30 text-slate-200">
                  <Sparkles className="w-3.5 h-3.5 text-[#86B9C7]" />
                  <span>Topic & Gap Scoping</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-white/10 border border-[#86B9C7]/30 text-slate-200">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Synopsis Review</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-white/10 border border-[#86B9C7]/30 text-slate-200">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#C4DEE3]" />
                  <span>Thesis Editing</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-white/10 border border-[#86B9C7]/30 text-slate-200">
                  <Award className="w-3.5 h-3.5 text-[#86B9C7]" />
                  <span>Scopus Publication</span>
                </span>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
                <Button
                  variant="teal"
                  size="lg"
                  icon={<ArrowRight className="w-4 h-4" />}
                  iconPosition="right"
                  onClick={() => onNavigate('services')}
                  className="w-full sm:w-auto text-sm font-bold shadow-lg"
                >
                  Explore Services
                </Button>

                <Button
                  variant="secondary"
                  size="lg"
                  onClick={onOpenBooking}
                  className="w-full sm:w-auto text-sm bg-white/10 text-white hover:bg-white/20 border-white/20"
                >
                  Book Consultation
                </Button>

                <a
                  href="https://wa.me/919760498896"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#25D366] text-white font-semibold text-sm hover:bg-[#20BD5A] transition-colors"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>WhatsApp (+91 9760498896)</span>
                </a>
              </div>
            </div>

            {/* Right: Rich Interactive Visual Graphic HUD (6 Cols) */}
            <div className="lg:col-span-6">
              <ManuscriptAuditGraphic />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: TRUST INDICATORS & STATS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card padding="md" className="bg-white text-center space-y-1 border border-[#D6E6EB]">
            <div className="w-10 h-10 rounded-2xl bg-[#0082A6]/10 border border-[#0082A6]/20 flex items-center justify-center mx-auto text-[#0082A6]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div className="font-serif font-bold text-2xl text-[#0B2D3A]">98.8%</div>
            <div className="font-semibold text-xs text-[#0B2D3A]">DRC Defense Approval</div>
            <p className="text-[11px] text-[#3D6170]">Unanimous first-pass clearance</p>
          </Card>

          <Card padding="md" className="bg-white text-center space-y-1 border border-[#D6E6EB]">
            <div className="w-10 h-10 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center mx-auto text-emerald-600">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div className="font-serif font-bold text-2xl text-emerald-700">100%</div>
            <div className="font-semibold text-xs text-[#0B2D3A]">Confidentiality Guarantee</div>
            <p className="text-[11px] text-[#3D6170]">Encrypted vault & mutual NDAs</p>
          </Card>

          <Card padding="md" className="bg-white text-center space-y-1 border border-[#D6E6EB]">
            <div className="w-10 h-10 rounded-2xl bg-[#C4DEE3]/40 border border-[#86B9C7]/50 flex items-center justify-center mx-auto text-[#0082A6]">
              <Clock className="w-5 h-5" />
            </div>
            <div className="font-serif font-bold text-2xl text-[#0082A6]">99.4%</div>
            <div className="font-semibold text-xs text-[#0B2D3A]">On-Time Milestone Delivery</div>
            <p className="text-[11px] text-[#3D6170]">Guaranteed university timelines</p>
          </Card>

          <Card padding="md" className="bg-white text-center space-y-1 border border-[#D6E6EB]">
            <div className="w-10 h-10 rounded-2xl bg-[#C4DEE3]/30 border border-[#86B9C7]/40 flex items-center justify-center mx-auto text-[#0082A6]">
              <DollarSign className="w-5 h-5" />
            </div>
            <div className="font-serif font-bold text-2xl text-[#0B2D3A]">450+</div>
            <div className="font-semibold text-xs text-[#0B2D3A]">Active Research Scholars</div>
            <p className="text-[11px] text-[#3D6170]">PhD, Master's & faculty scholars</p>
          </Card>
        </div>
      </section>

      {/* SECTION 3: INTER-INSTITUTIONAL UNIVERSITY NETWORK GRAPHIC */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <UniversityNetworkGraphic />
      </section>

      {/* SECTION 4: 6 CORE SERVICES GRID (Visual & Card-Optimized) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <Badge variant="teal">Core Service Modules</Badge>
          <h2 className="font-serif text-3xl font-bold text-[#0B2D3A]">
            Expert Academic Support Services
          </h2>
          <p className="text-xs text-[#3D6170]">
            Select a research module to view deliverables, timeline, and custom quotation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.slice(0, 6).map(service => (
            <div
              key={service.id}
              className="bg-white rounded-3xl border border-[#D6E6EB] p-5 shadow-subtle hover:border-[#0082A6]/50 transition-colors flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-2xl bg-[#0082A6]/10 border border-[#0082A6]/20 flex items-center justify-center">
                    {getServiceIcon(service.icon)}
                  </div>
                  <Badge variant="ice" size="sm">
                    {service.starting_price || 'Quote based'}
                  </Badge>
                </div>

                <div>
                  <h3 className="font-serif font-bold text-base text-[#0B2D3A]">
                    {service.title}
                  </h3>
                  <p className="text-xs text-[#3D6170] mt-1 line-clamp-2 leading-relaxed">
                    {service.short_description}
                  </p>
                </div>

                {/* Micro visual pills */}
                <div className="p-2.5 rounded-2xl bg-[#C4DEE3]/20 border border-[#86B9C7]/30 space-y-1.5 text-[11px]">
                  {service.key_deliverables.slice(0, 3).map((d, i) => (
                    <div key={i} className="flex items-center gap-1.5 text-[#0B2D3A]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#0082A6] shrink-0" />
                      <span className="truncate">{d}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="pt-3 border-t border-[#D6E6EB]/60 flex items-center justify-between">
                <button
                  onClick={() => onNavigate('service-detail', { slug: service.slug })}
                  className="text-xs font-semibold text-[#0082A6] hover:text-[#0B2D3A] transition-colors inline-flex items-center gap-1"
                >
                  <span>Details</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>

                <Button
                  variant="teal"
                  size="sm"
                  onClick={() => onOpenInquiry(service.id)}
                  className="text-xs font-bold"
                >
                  Get Assistance
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 5: 4-STAGE VISUAL RESEARCH WORKFLOW (GRAPHICAL PIPELINE) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-6">
        <div className="text-center space-y-2 max-w-xl mx-auto">
          <Badge variant="cyan">Visual Pipeline</Badge>
          <h2 className="font-serif text-3xl font-bold text-[#0B2D3A]">
            Our Research Advisory Workflow
          </h2>
          <p className="text-xs text-[#3D6170]">
            From initial gap discovery to university DRC approval and peer-reviewed publication.
          </p>
        </div>

        <ResearchWorkflowGraphic />
      </section>

      {/* SECTION 6: BEFORE VS. AFTER VISUAL TRANSFORMATION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-6">
        <div className="text-center space-y-2 max-w-xl mx-auto">
          <Badge variant="teal">Quality Benchmark</Badge>
          <h2 className="font-serif text-3xl font-bold text-[#0B2D3A]">
            See The Editorial Transformation
          </h2>
          <p className="text-xs text-[#3D6170]">
            Compare a raw draft against an AcademicPro polished dissertation excerpt.
          </p>
        </div>

        <BeforeAfterPreviewGraphic />
      </section>

      {/* SECTION 7: JOURNAL COMPARISON INFOGRAPHIC (PREDATORY VS. INDEXED) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-6">
        <div className="text-center space-y-2 max-w-xl mx-auto">
          <Badge variant="navy">Academic Integrity Protocol</Badge>
          <h2 className="font-serif text-3xl font-bold text-[#0B2D3A]">
            Protect Your Doctoral Credentials
          </h2>
          <p className="text-xs text-[#3D6170]">
            How we protect researchers from fake cloned journals and ensure legitimate UGC-CARE/Scopus indexing.
          </p>
        </div>

        <JournalComparisonGraphic />
      </section>

      {/* SECTION 8: VERIFIED SCHOLAR FEEDBACK */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
        <div className="text-center space-y-2 max-w-xl mx-auto">
          <Badge variant="ice">Verified Testimonials</Badge>
          <h2 className="font-serif text-3xl font-bold text-[#0B2D3A]">
            Trusted by Indian Scholars
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map(t => (
            <Card key={t.id} padding="md" className="bg-white space-y-3 flex flex-col justify-between border border-[#D6E6EB]">
              <div className="space-y-2">
                <div className="flex items-center gap-1 text-[#0082A6]">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <p className="text-xs text-[#3D6170] italic leading-relaxed">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-3 border-t border-[#D6E6EB]/60 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#0B2D3A] text-[#C4DEE3] font-bold text-xs flex items-center justify-center shrink-0">
                  {t.avatar_initials}
                </div>
                <div className="min-w-0 text-xs">
                  <div className="font-bold text-[#0B2D3A] truncate">{t.author_name}</div>
                  <div className="text-[10px] text-[#3D6170] truncate">{t.university}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* SECTION 9: FREQUENTLY ASKED QUESTIONS */}
      <section className="max-w-4xl mx-auto px-4 sm:px-8 space-y-6">
        <div className="text-center space-y-2">
          <Badge variant="teal">Transparency</Badge>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0B2D3A]">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map(item => (
            <Card key={item.id} padding="md" className="bg-white space-y-1.5 border border-[#D6E6EB]">
              <h3 className="font-serif font-bold text-xs sm:text-sm text-[#0B2D3A] flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-[#0082A6] shrink-0" />
                <span>{item.question}</span>
              </h3>
              <p className="text-xs text-[#3D6170] leading-relaxed pl-6">
                {item.answer}
              </p>
            </Card>
          ))}
        </div>

        <div className="text-center pt-2">
          <Button variant="outline" size="sm" onClick={() => onNavigate('faq')} className="text-xs">
            View All FAQs & Policy Details →
          </Button>
        </div>
      </section>

      {/* SECTION 10: FINAL CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-[#0B2D3A] text-white rounded-3xl p-8 sm:p-12 text-center space-y-5 shadow-premium border border-[#134455]">
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-white">
            Let's Turn Your Research Goals Into Reality!
          </h2>
          <p className="text-xs sm:text-sm text-[#C4DEE3] max-w-xl mx-auto">
            Connect with our Mathura research coordinators today for expert, ethical guidance on your synopsis, thesis, or journal paper.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button
              variant="teal"
              size="lg"
              onClick={() => onOpenInquiry()}
              className="w-full sm:w-auto text-xs font-bold"
            >
              Start Your Research Journey
            </Button>
            <a
              href="https://wa.me/919760498896"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#25D366] text-white font-bold text-xs hover:bg-[#20BD5A] transition-colors"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Contact Us on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
