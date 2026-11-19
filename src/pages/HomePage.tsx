import React from 'react';
import { 
  GraduationCap, 
  Compass, 
  FileCheck, 
  BookOpen, 
  Award, 
  Search, 
  BarChart3, 
  ShieldCheck, 
  Clock, 
  DollarSign, 
  CheckCircle2, 
  ArrowRight, 
  MessageCircle, 
  MapPin, 
  Star,
  ChevronRight,
  HelpCircle
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { CacheStore } from '../lib/cacheStore';

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
    <div className="space-y-16 sm:space-y-24 pb-16 font-sans">
      {/* SECTION 1: HERO */}
      <section className="relative bg-gradient-to-b from-[#071E46] via-[#0B2452] to-[#071E46] text-white pt-16 sm:pt-24 pb-20 sm:pb-28 px-4 sm:px-8 overflow-hidden select-none">
        {/* Subtle geometric background grid */}
        <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#D6A52B_1px,transparent_1px)] [background-size:24px_24px]" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content (7 Cols) */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* Location & Academic Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#102F60] border border-[#D6A52B]/30 text-xs text-amber-200">
                <MapPin className="w-3.5 h-3.5 text-[#D6A52B]" />
                <span>Premier Academic Research Consultancy • Mathura, Uttar Pradesh</span>
              </div>

              {/* Headline */}
              <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] text-white">
                Your Research Journey <br />
                <span className="text-[#D6A52B] italic font-serif">Starts Here.</span>
              </h1>

              {/* Subheading */}
              <p className="font-serif text-lg sm:text-2xl text-slate-200 font-medium leading-snug">
                Professional Academic Research Support for Students, Scholars & Researchers.
              </p>

              {/* Supporting Text */}
              <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed mx-auto lg:mx-0">
                Get expert, ethical guidance for research topic identification, synopsis reviews, thesis editing, peer-reviewed paper structuring, and legitimate journal publication assistance.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
                <Button
                  variant="gold"
                  size="lg"
                  icon={<ArrowRight className="w-4 h-4" />}
                  iconPosition="right"
                  onClick={() => onNavigate('services')}
                  className="w-full sm:w-auto text-sm font-bold shadow-lg"
                >
                  Explore Our Services
                </Button>

                <Button
                  variant="secondary"
                  size="lg"
                  onClick={onOpenBooking}
                  className="w-full sm:w-auto text-sm"
                >
                  Book a Consultation
                </Button>

                <a
                  href="https://wa.me/919760498896?text=Hello%20AcademicPro%20India%2C%20I%20would%20like%20to%20inquire%20about%20research%20guidance."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#25D366] text-white font-semibold text-sm hover:bg-[#20BD5A] transition-colors shadow-sm"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>WhatsApp Hotline</span>
                </a>
              </div>

              {/* Academic Integrity Pledge Pill */}
              <div className="pt-3 flex items-center justify-center lg:justify-start gap-4 text-xs text-slate-300">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>100% Ethical Research Support</span>
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#D6A52B]" />
                  <span>Strict NDA Confidentiality</span>
                </span>
              </div>
            </div>

            {/* Right Card / Visual (5 Cols) */}
            <div className="lg:col-span-5">
              <div className="bg-[#0B2452]/90 border border-white/15 rounded-3xl p-6 sm:p-8 shadow-elevated space-y-6 backdrop-blur-xs">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#071E46] border border-[#D6A52B]/40 flex items-center justify-center text-[#D6A52B]">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-serif font-bold text-base text-white">AcademicPro Registry</h3>
                      <p className="text-[11px] text-slate-300">Verified Research Support Metrics</p>
                    </div>
                  </div>
                  <Badge variant="gold" size="sm">UGC & Scopus Aligned</Badge>
                </div>

                {/* Key Pillars */}
                <div className="space-y-3.5 text-xs">
                  <div className="p-3 rounded-2xl bg-[#071E46]/60 border border-white/10 flex items-start gap-3">
                    <div className="p-2 rounded-xl bg-[#102F60] text-[#D6A52B] shrink-0">
                      <Compass className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-semibold text-white">Doctoral Topic & Gap Scoping</div>
                      <div className="text-[11px] text-slate-300 mt-0.5">Novel problem formulation with contemporary literature validation.</div>
                    </div>
                  </div>

                  <div className="p-3 rounded-2xl bg-[#071E46]/60 border border-white/10 flex items-start gap-3">
                    <div className="p-2 rounded-xl bg-[#102F60] text-[#D6A52B] shrink-0">
                      <BookOpen className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-semibold text-white">Full Thesis & Chapter Editing</div>
                      <div className="text-[11px] text-slate-300 mt-0.5">Line-by-line language refinement, APA/IEEE reference audit.</div>
                    </div>
                  </div>

                  <div className="p-3 rounded-2xl bg-[#071E46]/60 border border-white/10 flex items-start gap-3">
                    <div className="p-2 rounded-xl bg-[#102F60] text-[#D6A52B] shrink-0">
                      <Award className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-semibold text-white">Legitimate Journal Publication</div>
                      <div className="text-[11px] text-slate-300 mt-0.5">UGC-CARE, Scopus Q1-Q4 matching and reviewer rebuttal letters.</div>
                    </div>
                  </div>
                </div>

                {/* Quick Consultation CTA */}
                <Button
                  variant="gold"
                  fullWidth
                  onClick={onOpenBooking}
                  className="text-xs font-bold py-2.5"
                >
                  Schedule Initial Research Discussion
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: TRUST INDICATORS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-white rounded-3xl border border-[#E2E8F0] shadow-subtle p-6 sm:p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="space-y-1">
              <div className="w-10 h-10 rounded-2xl bg-[#F5F7FB] border border-[#E2E8F0] flex items-center justify-center mx-auto text-[#071E46]">
                <ShieldCheck className="w-5 h-5 text-[#D6A52B]" />
              </div>
              <div className="font-serif font-bold text-base text-[#071E46]">Expert Guidance</div>
              <p className="text-xs text-slate-500">Subject specialists & senior academic editors</p>
            </div>

            <div className="space-y-1">
              <div className="w-10 h-10 rounded-2xl bg-[#F5F7FB] border border-[#E2E8F0] flex items-center justify-center mx-auto text-[#071E46]">
                <ShieldCheck className="w-5 h-5 text-emerald-600" />
              </div>
              <div className="font-serif font-bold text-base text-[#071E46]">Confidentiality</div>
              <p className="text-xs text-slate-500">100% private file vault & institutional NDAs</p>
            </div>

            <div className="space-y-1">
              <div className="w-10 h-10 rounded-2xl bg-[#F5F7FB] border border-[#E2E8F0] flex items-center justify-center mx-auto text-[#071E46]">
                <Clock className="w-5 h-5 text-blue-600" />
              </div>
              <div className="font-serif font-bold text-base text-[#071E46]">On-Time Delivery</div>
              <p className="text-xs text-slate-500">Guaranteed milestone-based completion dates</p>
            </div>

            <div className="space-y-1">
              <div className="w-10 h-10 rounded-2xl bg-[#F5F7FB] border border-[#E2E8F0] flex items-center justify-center mx-auto text-[#071E46]">
                <DollarSign className="w-5 h-5 text-[#D6A52B]" />
              </div>
              <div className="font-serif font-bold text-base text-[#071E46]">Affordable Pricing</div>
              <p className="text-xs text-slate-500">Transparent quotes tailored to scholar budgets</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: SERVICES GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-10">
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <Badge variant="navy">Core Research Modules</Badge>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#071E46]">
            Comprehensive Academic Support Services
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            Every research service is delivered by senior doctoral mentors and academic editors adhering strictly to university guidelines and publication ethics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.slice(0, 6).map(service => (
            <div
              key={service.id}
              className="bg-white rounded-3xl border border-[#E2E8F0] p-6 shadow-subtle hover:border-[#CBD5E1] transition-colors flex flex-col justify-between space-y-5"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#071E46]/5 border border-[#071E46]/10 flex items-center justify-center">
                  {getServiceIcon(service.icon)}
                </div>

                <div>
                  <h3 className="font-serif font-bold text-lg text-[#071E46]">
                    {service.title}
                  </h3>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    {service.short_description}
                  </p>
                </div>

                {/* Deliverables snippet */}
                <div className="space-y-2 pt-2 border-t border-slate-100">
                  <span className="text-[11px] font-bold text-[#071E46] uppercase tracking-wider block">
                    Key Deliverables:
                  </span>
                  <ul className="space-y-1.5 text-xs text-slate-600">
                    {service.key_deliverables.slice(0, 3).map((d, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#D6A52B] shrink-0 mt-0.5" />
                        <span className="leading-tight">{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                <button
                  onClick={() => onNavigate('service-detail', { slug: service.slug })}
                  className="text-xs font-semibold text-[#071E46] hover:text-[#D6A52B] transition-colors inline-flex items-center gap-1"
                >
                  <span>Learn More</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>

                <Button
                  variant="gold"
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

        <div className="text-center pt-2">
          <Button
            variant="outline"
            onClick={() => onNavigate('services')}
            className="text-xs font-semibold"
          >
            View All Services & Methodology Support →
          </Button>
        </div>
      </section>

      {/* SECTION 4: HOW IT WORKS */}
      <section className="bg-[#071E46] text-white py-16 sm:py-20 px-4 sm:px-8 select-none">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <Badge variant="gold">Simple 4-Step Process</Badge>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
              How AcademicPro India Works
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              A transparent, disciplined path from initial inquiry to final research deliverable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: '01',
                title: 'Select Your Service',
                desc: 'Browse our academic guidance modules or submit an open inquiry detailing your discipline, university, and specific challenges.'
              },
              {
                step: '02',
                title: 'Submit Requirements',
                desc: 'Provide your draft synopsis, chapter samples, university guidelines, and target deadlines via our encrypted client portal.'
              },
              {
                step: '03',
                title: 'Discuss Scope & Pricing',
                desc: 'Receive a transparent milestone quotation. Schedule a 1-on-1 consultation to finalize expectations and project timeline.'
              },
              {
                step: '04',
                title: 'Receive Deliverables',
                desc: 'Access tracked changes manuscripts, statistical reports, and editorial certificates with 14 days of post-delivery review.'
              }
            ].map(item => (
              <div key={item.step} className="bg-[#0B2452] p-6 rounded-3xl border border-white/10 space-y-3 relative">
                <div className="text-3xl font-serif font-black text-[#D6A52B]/40">
                  {item.step}
                </div>
                <h3 className="font-serif font-bold text-base text-white">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: WHY CHOOSE ACADEMICPRO INDIA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-10">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <Badge variant="navy">Our Distinctions</Badge>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#071E46]">
            Why Scholars Trust AcademicPro India
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Founded in Mathura, Uttar Pradesh, we bridge the gap between rigorous academic standards and accessible, ethical researcher support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: 'Personalized Academic Mentorship',
              desc: 'We match you with domain experts in your exact subject discipline, rather than generic copywriters.'
            },
            {
              title: 'Transparent Communication',
              desc: 'Direct communication via dedicated project threads, phone calls, and direct WhatsApp consultations.'
            },
            {
              title: 'Confidential Document Handling',
              desc: 'Strict NDAs, private encrypted storage, and absolute intellectual property confidentiality for all unpublished manuscripts.'
            },
            {
              title: 'Defined Project Timelines',
              desc: 'Clear milestone deadlines agreed upon upfront, ensuring you never miss university DRC or journal submission cutoffs.'
            },
            {
              title: 'Research-Focused Expertise',
              desc: 'Specialized focus on UGC-CARE, Scopus, and WoS indexing guidelines, statistical rigor, and defensible research methodology.'
            },
            {
              title: 'Affordable & Flexible Pricing',
              desc: 'Quotation-based pricing with milestone payments designed for the realities of Indian research scholar stipends.'
            }
          ].map((item, idx) => (
            <Card key={idx} padding="md" className="bg-white space-y-2 border border-slate-200">
              <div className="w-8 h-8 rounded-xl bg-[#071E46]/5 text-[#071E46] flex items-center justify-center font-serif font-bold text-sm">
                {idx + 1}
              </div>
              <h3 className="font-serif font-bold text-base text-[#071E46]">{item.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* SECTION 6: OUR RESEARCH PROCESS WORKFLOW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-[#F8FAFD] rounded-3xl border border-[#E2E8F0] p-8 sm:p-12 space-y-8">
          <div className="text-center space-y-2 max-w-xl mx-auto">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#071E46]">
              Our Rigorous Editorial & Research Workflow
            </h3>
            <p className="text-xs text-slate-500">
              How our senior editorial board ensures institutional compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
            <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-2">
              <span className="font-bold text-[#D6A52B]">Phase 1: Diagnostic Intake</span>
              <p className="text-slate-600">Review university DRC/RDC guidelines, target citation manual, and initial manuscript weaknesses.</p>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-2">
              <span className="font-bold text-[#D6A52B]">Phase 2: Substantive Review</span>
              <p className="text-slate-600">Line-by-line developmental review, methodology audit, and empirical data validation.</p>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-2">
              <span className="font-bold text-[#D6A52B]">Phase 3: Senior Editor QA</span>
              <p className="text-slate-600">Cross-verification of reference integrity, academic tone harmonization, and formatting checks.</p>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-2">
              <span className="font-bold text-[#D6A52B]">Phase 4: Post-Delivery Defense</span>
              <p className="text-slate-600">14-day clarification window and viva advisory notes to prepare you for committee questioning.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: TESTIMONIALS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-10">
        <div className="text-center space-y-2 max-w-xl mx-auto">
          <Badge variant="navy">Verified Feedback</Badge>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#071E46]">
            Trusted by Researchers Across India
          </h2>
          <p className="text-xs text-slate-500">
            Real feedback from PhD scholars, university faculty, and postgraduate students.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map(t => (
            <Card key={t.id} padding="md" className="bg-white space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center gap-1 text-[#D6A52B]">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-xs text-slate-700 italic leading-relaxed">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#071E46] text-[#D6A52B] font-bold text-xs flex items-center justify-center shrink-0">
                  {t.avatar_initials}
                </div>
                <div className="min-w-0">
                  <div className="font-bold text-xs text-[#071E46] truncate">{t.author_name}</div>
                  <div className="text-[11px] text-slate-500 truncate">{t.role_title}</div>
                  <div className="text-[10px] text-slate-400 truncate">{t.university}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* SECTION 8: FAQ */}
      <section className="max-w-4xl mx-auto px-4 sm:px-8 space-y-8">
        <div className="text-center space-y-2">
          <Badge variant="navy">Answers & Clarity</Badge>
          <h2 className="font-serif text-3xl font-bold text-[#071E46]">
            Frequently Asked Questions
          </h2>
          <p className="text-xs text-slate-500">
            Transparent details on ethical boundaries, turnaround times, and pricing.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map(item => (
            <Card key={item.id} padding="md" className="bg-white space-y-2">
              <h3 className="font-serif font-bold text-sm sm:text-base text-[#071E46] flex items-start gap-2">
                <HelpCircle className="w-4 h-4 text-[#D6A52B] shrink-0 mt-0.5" />
                <span>{item.question}</span>
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed pl-6">
                {item.answer}
              </p>
            </Card>
          ))}
        </div>

        <div className="text-center pt-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => onNavigate('faq')}
            className="text-xs"
          >
            Read All Frequently Asked Questions →
          </Button>
        </div>
      </section>

      {/* SECTION 9: FINAL CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-[#071E46] text-white rounded-3xl p-8 sm:p-14 text-center space-y-6 shadow-premium border border-[#102F60] relative overflow-hidden">
          <div className="max-w-2xl mx-auto space-y-3 relative z-10">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
              Let's Turn Your Research Goals Into Reality!
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Whether you are preparing a doctoral synopsis, revising a 300-page dissertation, or responding to journal peer-review queries, our Mathura-based academic team is ready to guide you.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button
                variant="gold"
                size="lg"
                onClick={() => onOpenInquiry()}
                className="w-full sm:w-auto text-sm font-bold"
              >
                Start Your Research Journey
              </Button>

              <a
                href="https://wa.me/919760498896"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#25D366] text-white font-bold text-sm hover:bg-[#20BD5A] transition-colors"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Contact Us on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
