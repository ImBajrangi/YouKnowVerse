import React from 'react';
import { 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Clock, 
  MapPin, 
  MessageCircle, 
  Star, 
  ChevronRight,
  HelpCircle,
  Users
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { CacheStore } from '../lib/cacheStore';
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
    <div className="space-y-12 sm:space-y-16 pb-16 font-sans">
      {/* SECTION 1: HERO (CLEAN, AIRY, HIGH-CONVERTING LIGHT HERO WITH CRISP TYPOGRAPHY) */}
      <section className="bg-white border-b border-slate-200/90 py-12 sm:py-16 px-4 sm:px-8 select-none">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content (7 Cols): High-impact, clear message */}
            <div className="lg:col-span-7 space-y-4 text-center lg:text-left">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EBF5F8] border border-[#C4DEE3] text-xs font-semibold text-[#0082A6]">
                <MapPin className="w-3.5 h-3.5" />
                <span>Civil Lines, Mathura, UP • Premier Research Consultancy</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0F172A] leading-[1.15]">
                Your Research Journey, <br />
                <span className="text-[#0082A6]">Our Professional Guidance.</span>
              </h1>

              <p className="text-sm sm:text-base text-slate-600 max-w-xl leading-relaxed mx-auto lg:mx-0">
                Ethical, end-to-end guidance for PhD scholars, postgraduate researchers, and faculty. We assist in research topic feasibility, synopsis defense, thesis line-editing, and verified Scopus publication.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
                <Button
                  variant="teal"
                  size="lg"
                  icon={<ArrowRight className="w-4 h-4" />}
                  iconPosition="right"
                  onClick={() => onNavigate('services')}
                  className="w-full sm:w-auto font-semibold shadow-xs"
                >
                  Explore Services
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  onClick={onOpenBooking}
                  className="w-full sm:w-auto border-slate-300 text-slate-700 hover:bg-slate-50"
                >
                  Book 1-on-1 Consultation
                </Button>

                <a
                  href="https://wa.me/919760498896"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#25D366] text-white font-semibold text-xs hover:bg-[#20BD5A] transition-colors shadow-xs"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>WhatsApp (+91 9760498896)</span>
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-xs text-slate-600">
                <span className="flex items-center gap-1.5 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Strict Non-Ghostwriting Guarantee</span>
                </span>
                <span className="flex items-center gap-1.5 font-medium">
                  <ShieldCheck className="w-4 h-4 text-[#0082A6]" />
                  <span>Encrypted Manuscript NDA</span>
                </span>
                <span className="flex items-center gap-1.5 font-medium">
                  <Clock className="w-4 h-4 text-blue-600" />
                  <span>Fixed Timeline Milestones</span>
                </span>
              </div>
            </div>

            {/* Right: High-Res Real Academic Imagery in Clean Concentric Container */}
            <div className="lg:col-span-5">
              <div className="bg-slate-50 border border-slate-200/90 rounded-3xl p-3 sm:p-4 shadow-sm space-y-3">
                <div className="relative overflow-hidden rounded-2xl border border-slate-200">
                  <img 
                    src="/images/hero-scholar.webp" 
                    alt="PhD scholars reviewing empirical literature and methodology" 
                    className="w-full h-56 sm:h-64 object-cover"
                    loading="eager"
                  />
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 bg-white/95 backdrop-blur-xs p-2.5 rounded-xl border border-slate-200 shadow-sm flex items-center justify-between text-xs text-slate-800">
                    <div>
                      <div className="font-bold text-xs text-[#0F172A]">DRC Defense Ready</div>
                      <div className="text-[11px] text-slate-500">Methodology & Empirical Verification</div>
                    </div>
                    <span className="font-mono font-bold text-xs px-2 py-0.5 rounded bg-[#EBF5F8] text-[#0082A6] border border-[#C4DEE3]">
                      98.8% Pass Rate
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2 text-center text-xs">
                  <div className="p-2.5 rounded-xl bg-white border border-slate-200">
                    <div className="font-bold text-[#0F172A] text-sm">450+</div>
                    <div className="text-[10px] text-slate-500">Scholars Guided</div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white border border-slate-200">
                    <div className="font-bold text-emerald-600 text-sm">100%</div>
                    <div className="text-[10px] text-slate-500">Ethical Scope</div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white border border-slate-200">
                    <div className="font-bold text-[#0082A6] text-sm">Mathura</div>
                    <div className="text-[10px] text-slate-500">Research Hub</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: TRUST STATS (CRISP WHITE CARDS) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          <Card padding="sm" className="bg-white text-center space-y-1 border border-slate-200">
            <div className="w-8 h-8 rounded-xl bg-[#EBF5F8] text-[#0082A6] flex items-center justify-center mx-auto">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div className="font-bold text-xl text-[#0F172A]">98.8%</div>
            <div className="font-semibold text-xs text-[#0F172A]">Defense Clearance</div>
            <p className="text-[11px] text-slate-500">Unanimous DRC approvals</p>
          </Card>

          <Card padding="sm" className="bg-white text-center space-y-1 border border-slate-200">
            <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-4 h-4" />
            </div>
            <div className="font-bold text-xl text-emerald-700">100%</div>
            <div className="font-semibold text-xs text-[#0F172A]">Confidentiality</div>
            <p className="text-[11px] text-slate-500">Mutual non-disclosure pact</p>
          </Card>

          <Card padding="sm" className="bg-white text-center space-y-1 border border-slate-200">
            <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mx-auto">
              <Clock className="w-4 h-4" />
            </div>
            <div className="font-bold text-xl text-[#0082A6]">99.4%</div>
            <div className="font-semibold text-xs text-[#0F172A]">On-Time Milestones</div>
            <p className="text-[11px] text-slate-500">Guaranteed university timelines</p>
          </Card>

          <Card padding="sm" className="bg-white text-center space-y-1 border border-slate-200">
            <div className="w-8 h-8 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center mx-auto">
              <Users className="w-4 h-4" />
            </div>
            <div className="font-bold text-xl text-[#0F172A]">450+</div>
            <div className="font-semibold text-xs text-[#0F172A]">Scholars Guided</div>
            <p className="text-[11px] text-slate-500">PhD, Master's & faculty</p>
          </Card>
        </div>
      </section>

      {/* SECTION 3: 6 PRIMARY SERVICES WITH PICTURE THUMBNAILS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-slate-200 pb-3">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-[#0F172A]">
              Primary Research Advisory Services
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Ethical guidance, substantive editing, and publication consulting tailored to Indian university norms.
            </p>
          </div>
          <button
            onClick={() => onNavigate('services')}
            className="text-xs font-semibold text-[#0082A6] hover:underline flex items-center gap-1 shrink-0"
          >
            <span>View All Services</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.slice(0, 6).map(service => (
            <div
              key={service.id}
              className="bg-white rounded-3xl border border-slate-200 p-4 sm:p-5 shadow-xs hover:border-[#0082A6] transition-colors flex flex-col justify-between space-y-3.5"
            >
              <div className="space-y-3">
                {/* Real WebP Image Header (Concentric: Outer 24px, p-4 -> inner 16px) */}
                <div className="relative overflow-hidden rounded-2xl border border-slate-200">
                  <img
                    src={serviceImageMap[service.slug] || '/images/hero-scholar.webp'}
                    alt={service.title}
                    className="w-full h-36 object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-2.5 right-2.5 bg-white/95 text-[#0082A6] text-[11px] font-bold px-2 py-0.5 rounded-lg border border-slate-200 shadow-xs">
                    {service.starting_price || 'Custom Quote'}
                  </div>
                </div>

                <div>
                  <h3 className="font-bold text-base text-[#0F172A]">
                    {service.title}
                  </h3>
                  <p className="text-xs text-slate-600 mt-1 line-clamp-2 leading-relaxed">
                    {service.short_description}
                  </p>
                </div>
              </div>

              {/* Bottom Card Actions */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => onNavigate('service-detail', { slug: service.slug })}
                  className="text-xs font-semibold text-[#0082A6] hover:underline flex items-center gap-1"
                >
                  <span>Learn Scope</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>

                <Button
                  variant="teal"
                  size="sm"
                  onClick={() => onOpenInquiry(service.id)}
                  className="text-xs font-semibold"
                >
                  Get Assistance
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 4: 4-STAGE VISUAL RESEARCH WORKFLOW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-[#0F172A]">
            Our Research Advisory Workflow
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Transparent milestones from gap scoping to university defense and peer-reviewed publishing.
          </p>
        </div>

        <ResearchWorkflowGraphic />
      </section>

      {/* SECTION 5: MATHURA RESEARCH CENTER & CONSULTATIONS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-white rounded-3xl border border-slate-200 p-5 sm:p-8 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* Visual Photography Duo (6 Cols) */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-3">
              <div className="overflow-hidden rounded-2xl border border-slate-200">
                <img 
                  src="/images/consultation-meeting.webp" 
                  alt="Personal one-to-one academic advisory session in Mathura" 
                  className="w-full h-44 sm:h-52 object-cover"
                  loading="lazy"
                />
              </div>
              <div className="overflow-hidden rounded-2xl border border-slate-200">
                <img 
                  src="/images/academic-team.webp" 
                  alt="AcademicPro senior research review committee" 
                  className="w-full h-44 sm:h-52 object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Content (6 Cols) */}
            <div className="lg:col-span-6 space-y-3">
              <span className="text-xs font-semibold text-[#0082A6] uppercase tracking-wide">
                Mathura Academic Center
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#0F172A]">
                Personalized Mentorship Built on Academic Integrity
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Whether you prefer in-person consultation at our Civil Lines office in Mathura or real-time online video sessions, AcademicPro India pairs you with subject-matter specialists in your exact discipline.
              </p>

              <div className="space-y-2 pt-1 text-xs text-[#0F172A]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Interactive Chapter-by-Chapter Feedback</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>SPSS & R Statistical Analysis Verification</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Pre-Viva Mock Question Preparation</span>
                </div>
              </div>

              <div className="pt-2">
                <Button
                  variant="teal"
                  size="sm"
                  onClick={onOpenBooking}
                  className="text-xs"
                >
                  Schedule Your 1-on-1 Session
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: BEFORE VS. AFTER EDITORIAL BENCHMARK */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-[#0F172A]">
            Editorial Quality Benchmark
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Compare an unrefined raw draft against an AcademicPro polished publication excerpt.
          </p>
        </div>

        <BeforeAfterPreviewGraphic />
      </section>

      {/* SECTION 7: JOURNAL COMPARISON INFOGRAPHIC */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-[#0F172A]">
            Academic Integrity Protocol
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Learn how we protect scholars from predatory publisher traps and verify Scopus and UGC-CARE indexation.
          </p>
        </div>

        <JournalComparisonGraphic />
      </section>

      {/* SECTION 8: UNIVERSITY NETWORK */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <UniversityNetworkGraphic />
      </section>

      {/* SECTION 9: VERIFIED TESTIMONIALS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-[#0F172A]">
            Verified Feedback from Scholars
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Genuine reviews from researchers across central and state universities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {testimonials.map(t => (
            <Card key={t.id} padding="sm" className="bg-white space-y-2.5 flex flex-col justify-between border border-slate-200">
              <div className="space-y-1.5">
                <div className="flex items-center gap-1 text-[#0082A6]">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <p className="text-xs text-slate-700 italic leading-relaxed">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-2.5 border-t border-slate-100 flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-full bg-[#EBF5F8] text-[#0082A6] font-bold text-xs flex items-center justify-center shrink-0 border border-[#C4DEE3]">
                  {t.avatar_initials}
                </div>
                <div className="min-w-0 text-xs">
                  <div className="font-bold text-[#0F172A] truncate">{t.author_name}</div>
                  <div className="text-[10px] text-slate-500 truncate">{t.university}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* SECTION 10: FREQUENTLY ASKED QUESTIONS */}
      <section className="max-w-4xl mx-auto px-4 sm:px-8 space-y-4">
        <div className="text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-[#0F172A]">
            Frequently Asked Questions
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Transparent answers regarding methodology, timelines, and academic ethics.
          </p>
        </div>

        <div className="space-y-2.5">
          {faqs.map(item => (
            <Card key={item.id} padding="sm" className="bg-white space-y-1 border border-slate-200">
              <h3 className="font-bold text-xs sm:text-sm text-[#0F172A] flex items-center gap-2">
                <HelpCircle className="w-3.5 h-3.5 text-[#0082A6] shrink-0" />
                <span>{item.question}</span>
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed pl-5.5">
                {item.answer}
              </p>
            </Card>
          ))}
        </div>

        <div className="text-center pt-2">
          <Button variant="outline" size="sm" onClick={() => onNavigate('faq')} className="text-xs">
            View All FAQs & Ethics Rules →
          </Button>
        </div>
      </section>

      {/* SECTION 11: FINAL DIRECT CTA (SOLID, GROUNDED OCEAN NAVY FINISH) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-[#0B2D3A] text-white rounded-3xl p-6 sm:p-10 text-center space-y-4 shadow-sm border border-[#134455]">
          <h2 className="text-xl sm:text-3xl font-bold text-white">
            Ready to Accelerate Your Research Milestones?
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-lg mx-auto leading-relaxed">
            Connect with our Mathura research coordinators today for a transparent assessment of your synopsis, thesis draft, or journal paper.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button
              variant="teal"
              size="md"
              onClick={() => onOpenInquiry()}
              className="w-full sm:w-auto text-xs font-bold"
            >
              Request a Custom Quote
            </Button>
            <a
              href="https://wa.me/919760498896"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#25D366] text-white font-bold text-xs hover:bg-[#20BD5A] transition-colors"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Direct WhatsApp (+91 9760498896)</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
