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
      {/* SECTION 1: HERO (SOLID PEACOCK NAVY, NO EXAGGERATED GRADIENTS, PICTURE-FRIENDLY) */}
      <section className="bg-[#0B2D3A] text-white py-10 sm:py-16 px-4 sm:px-8 border-b border-[#134455] select-none">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left Content (7 Cols): Crisp native typography */}
            <div className="lg:col-span-7 space-y-4 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 text-xs font-medium text-[#86B9C7]">
                <MapPin className="w-3.5 h-3.5" />
                <span>Civil Lines, Mathura, Uttar Pradesh • Trusted Research Consultancy</span>
              </div>

              <h1 className="text-2xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
                Your Research Journey, <br className="hidden sm:block" />
                <span className="text-[#86B9C7]">Our Professional Guidance.</span>
              </h1>

              <p className="text-sm sm:text-base text-[#C4DEE3] max-w-xl leading-relaxed mx-auto lg:mx-0">
                End-to-end academic support for PhD scholars, postgraduate students, and faculty. Get expert direction on topic identification, synopsis defense, thesis refinement, and verified journal submissions.
              </p>

              {/* Direct Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
                <Button
                  variant="teal"
                  size="md"
                  icon={<ArrowRight className="w-4 h-4" />}
                  iconPosition="right"
                  onClick={() => onNavigate('services')}
                  className="w-full sm:w-auto font-semibold shadow-sm"
                >
                  Explore Services
                </Button>

                <Button
                  variant="outline"
                  size="md"
                  onClick={onOpenBooking}
                  className="w-full sm:w-auto text-white border-[#86B9C7]/50 hover:bg-white/10"
                >
                  Book 1-on-1 Consultation
                </Button>

                <a
                  href="https://wa.me/919760498896"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#25D366] text-white font-semibold text-xs hover:bg-[#20BD5A] transition-colors"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>WhatsApp (+91 9760498896)</span>
                </a>
              </div>

              {/* Key Trust Highlights */}
              <div className="pt-3 border-t border-[#134455] flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-xs text-[#C4DEE3]">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Strict Confidentiality & NDA</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#86B9C7]" />
                  <span>No Ghostwriting (100% Ethical)</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-[#C4DEE3]" />
                  <span>Fixed Timeline Delivery</span>
                </span>
              </div>
            </div>

            {/* Right: High-Res Real Academic Imagery with Concentric Frame */}
            <div className="lg:col-span-5">
              <div className="bg-[#134455]/40 border border-[#86B9C7]/30 rounded-3xl p-3 sm:p-4 shadow-xl space-y-3">
                <div className="relative overflow-hidden rounded-2xl border border-[#86B9C7]/20">
                  <img 
                    src="/images/hero-scholar.webp" 
                    alt="PhD scholars and academic researchers working in university library" 
                    className="w-full h-56 sm:h-64 object-cover"
                    loading="eager"
                  />
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 bg-[#0B2D3A]/90 backdrop-blur-xs p-2.5 rounded-xl border border-white/10 flex items-center justify-between text-xs text-white">
                    <div>
                      <div className="font-bold text-xs text-[#C4DEE3]">DRC Defense Ready</div>
                      <div className="text-[11px] text-slate-300">Empirical & Methodological Rigor</div>
                    </div>
                    <span className="font-mono font-bold text-xs px-2 py-0.5 rounded bg-[#0082A6] text-white">
                      98.8% Pass Rate
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2 text-center text-xs">
                  <div className="p-2 rounded-xl bg-[#0B2D3A] border border-[#86B9C7]/20">
                    <div className="font-bold text-white text-sm">450+</div>
                    <div className="text-[10px] text-[#C4DEE3]">Scholars Guided</div>
                  </div>
                  <div className="p-2 rounded-xl bg-[#0B2D3A] border border-[#86B9C7]/20">
                    <div className="font-bold text-emerald-400 text-sm">100%</div>
                    <div className="text-[10px] text-[#C4DEE3]">Ethical Standards</div>
                  </div>
                  <div className="p-2 rounded-xl bg-[#0B2D3A] border border-[#86B9C7]/20">
                    <div className="font-bold text-white text-sm">Mathura</div>
                    <div className="text-[10px] text-[#C4DEE3]">Research Hub</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: TRUST METRICS & CREDENTIALS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          <Card padding="sm" className="bg-white text-center space-y-1 border border-[#D6E6EB]">
            <div className="w-8 h-8 rounded-xl bg-[#0082A6]/10 flex items-center justify-center mx-auto text-[#0082A6]">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div className="font-bold text-xl text-[#0B2D3A]">98.8%</div>
            <div className="font-semibold text-xs text-[#0B2D3A]">DRC Defense Clearance</div>
            <p className="text-[11px] text-[#3D6170]">First-pass university approvals</p>
          </Card>

          <Card padding="sm" className="bg-white text-center space-y-1 border border-[#D6E6EB]">
            <div className="w-8 h-8 rounded-xl bg-emerald-50 flex items-center justify-center mx-auto text-emerald-600">
              <CheckCircle2 className="w-4 h-4" />
            </div>
            <div className="font-bold text-xl text-emerald-700">100%</div>
            <div className="font-semibold text-xs text-[#0B2D3A]">NDA Confidentiality</div>
            <p className="text-[11px] text-[#3D6170]">Encrypted manuscript handling</p>
          </Card>

          <Card padding="sm" className="bg-white text-center space-y-1 border border-[#D6E6EB]">
            <div className="w-8 h-8 rounded-xl bg-[#C4DEE3]/40 flex items-center justify-center mx-auto text-[#0082A6]">
              <Clock className="w-4 h-4" />
            </div>
            <div className="font-bold text-xl text-[#0082A6]">99.4%</div>
            <div className="font-semibold text-xs text-[#0B2D3A]">On-Time Milestone Rate</div>
            <p className="text-[11px] text-[#3D6170]">Adherence to academic schedules</p>
          </Card>

          <Card padding="sm" className="bg-white text-center space-y-1 border border-[#D6E6EB]">
            <div className="w-8 h-8 rounded-xl bg-[#C4DEE3]/30 flex items-center justify-center mx-auto text-[#0082A6]">
              <Users className="w-4 h-4" />
            </div>
            <div className="font-bold text-xl text-[#0B2D3A]">450+</div>
            <div className="font-semibold text-xs text-[#0B2D3A]">Scholars Supported</div>
            <p className="text-[11px] text-[#3D6170]">PhD, Master's & faculty</p>
          </Card>
        </div>
      </section>

      {/* SECTION 3: CORE SERVICES (PICTURE-FRIENDLY CARDS WITH WEBP THUMBNAILS) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-[#D6E6EB] pb-3">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-[#0B2D3A]">
              Primary Research Advisory Services
            </h2>
            <p className="text-xs text-[#3D6170] mt-0.5">
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
              className="bg-white rounded-3xl border border-[#D6E6EB] p-4 sm:p-5 shadow-subtle hover:border-[#0082A6] transition-colors flex flex-col justify-between space-y-3.5"
            >
              <div className="space-y-3">
                {/* Real WebP Image Header (Concentric: Outer 24px, p-4/p-5 -> inner 16px) */}
                <div className="relative overflow-hidden rounded-2xl border border-[#D6E6EB]">
                  <img
                    src={serviceImageMap[service.slug] || '/images/hero-scholar.webp'}
                    alt={service.title}
                    className="w-full h-36 object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-2.5 right-2.5 bg-[#0B2D3A]/90 text-[#C4DEE3] text-[11px] font-semibold px-2 py-0.5 rounded-lg border border-white/10">
                    {service.starting_price || 'Custom Quote'}
                  </div>
                </div>

                <div>
                  <h3 className="font-bold text-base text-[#0B2D3A]">
                    {service.title}
                  </h3>
                  <p className="text-xs text-[#3D6170] mt-1 line-clamp-2 leading-relaxed">
                    {service.short_description}
                  </p>
                </div>
              </div>

              {/* Bottom Card Actions */}
              <div className="pt-3 border-t border-[#D6E6EB]/60 flex items-center justify-between">
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

      {/* SECTION 4: 4-STAGE VISUAL RESEARCH WORKFLOW (GRAPHICAL PIPELINE) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-[#0B2D3A]">
            Our Research Advisory Workflow
          </h2>
          <p className="text-xs text-[#3D6170] mt-0.5">
            Transparent milestones from research gap scoping to final publication support.
          </p>
        </div>

        <ResearchWorkflowGraphic />
      </section>

      {/* SECTION 5: REAL PHOTO HIGHLIGHT — MATHURA RESEARCH CENTER & CONSULTATIONS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-white rounded-3xl border border-[#D6E6EB] p-5 sm:p-8 shadow-subtle">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* Visual Photography Duo (6 Cols) */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-3">
              <div className="overflow-hidden rounded-2xl border border-[#D6E6EB]">
                <img 
                  src="/images/consultation-meeting.webp" 
                  alt="Personal one-to-one academic advisory session in Mathura" 
                  className="w-full h-44 sm:h-52 object-cover"
                  loading="lazy"
                />
              </div>
              <div className="overflow-hidden rounded-2xl border border-[#D6E6EB]">
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
              <h2 className="text-xl sm:text-2xl font-bold text-[#0B2D3A]">
                Personalized Mentorship Built on Academic Integrity
              </h2>
              <p className="text-xs sm:text-sm text-[#3D6170] leading-relaxed">
                Whether you prefer in-person consultation at our Civil Lines office in Mathura or real-time online video sessions, AcademicPro India pairs you with subject-matter specialists in your exact discipline.
              </p>

              <div className="space-y-2 pt-1 text-xs text-[#0B2D3A]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0082A6] shrink-0" />
                  <span>Interactive Chapter-by-Chapter Feedback</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0082A6] shrink-0" />
                  <span>SPSS & R Statistical Analysis Verification</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0082A6] shrink-0" />
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

      {/* SECTION 6: BEFORE VS. AFTER EDITORIAL TRANSFORMATION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-[#0B2D3A]">
            Editorial Quality Benchmark
          </h2>
          <p className="text-xs text-[#3D6170] mt-0.5">
            Compare an unrefined draft against an AcademicPro publication-grade excerpt.
          </p>
        </div>

        <BeforeAfterPreviewGraphic />
      </section>

      {/* SECTION 7: JOURNAL COMPARISON INFOGRAPHIC */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-[#0B2D3A]">
            Academic Integrity Protocol
          </h2>
          <p className="text-xs text-[#3D6170] mt-0.5">
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
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-[#0B2D3A]">
              Verified Feedback from Scholars
            </h2>
            <p className="text-xs text-[#3D6170]">
              Genuine reviews from researchers across central and state universities.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {testimonials.map(t => (
            <Card key={t.id} padding="sm" className="bg-white space-y-2.5 flex flex-col justify-between border border-[#D6E6EB]">
              <div className="space-y-1.5">
                <div className="flex items-center gap-1 text-[#0082A6]">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <p className="text-xs text-[#3D6170] italic leading-relaxed">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-2.5 border-t border-[#D6E6EB]/60 flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-full bg-[#0B2D3A] text-[#C4DEE3] font-bold text-xs flex items-center justify-center shrink-0">
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

      {/* SECTION 10: FREQUENTLY ASKED QUESTIONS */}
      <section className="max-w-4xl mx-auto px-4 sm:px-8 space-y-4">
        <div className="text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-[#0B2D3A]">
            Frequently Asked Questions
          </h2>
          <p className="text-xs text-[#3D6170] mt-0.5">
            Transparent answers regarding methodology, timelines, and academic ethics.
          </p>
        </div>

        <div className="space-y-2.5">
          {faqs.map(item => (
            <Card key={item.id} padding="sm" className="bg-white space-y-1 border border-[#D6E6EB]">
              <h3 className="font-bold text-xs sm:text-sm text-[#0B2D3A] flex items-center gap-2">
                <HelpCircle className="w-3.5 h-3.5 text-[#0082A6] shrink-0" />
                <span>{item.question}</span>
              </h3>
              <p className="text-xs text-[#3D6170] leading-relaxed pl-5.5">
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

      {/* SECTION 11: FINAL DIRECT CTA (SOLID, CLEAN, HIGH-IMPACT) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-[#0B2D3A] text-white rounded-3xl p-6 sm:p-10 text-center space-y-4 shadow-xl border border-[#134455]">
          <h2 className="text-xl sm:text-3xl font-bold text-white">
            Ready to Accelerate Your Research Milestones?
          </h2>
          <p className="text-xs sm:text-sm text-[#C4DEE3] max-w-lg mx-auto leading-relaxed">
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
