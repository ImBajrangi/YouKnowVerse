import React, { useState } from 'react';
import { 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Clock, 
  MapPin, 
  MessageCircle, 
  Star, 
  HelpCircle,
  Users,
  Sliders,
  Send,
  Sparkles,
  PhoneCall
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

  // Interactive Calculator State
  const [calcService, setCalcService] = useState<'thesis' | 'paper' | 'synopsis' | 'spss'>('thesis');
  const [calcWords, setCalcWords] = useState<number>(15000);
  const [calcUrgency, setCalcUrgency] = useState<'standard' | 'priority'>('standard');

  const calculatePrice = () => {
    let basePerWord = 1.0;
    if (calcService === 'thesis') basePerWord = 1.10;
    if (calcService === 'paper') basePerWord = 1.35;
    if (calcService === 'synopsis') return calcUrgency === 'priority' ? 12500 : 9500;
    if (calcService === 'spss') return calcUrgency === 'priority' ? 10500 : 7500;

    const base = calcWords * basePerWord;
    return calcUrgency === 'priority' ? Math.round(base * 1.25) : Math.round(base);
  };

  const getEstimatedDays = () => {
    if (calcService === 'synopsis') return calcUrgency === 'priority' ? '4-5 Days' : '7-9 Days';
    if (calcService === 'spss') return calcUrgency === 'priority' ? '3-4 Days' : '5-7 Days';
    if (calcWords > 30000) return calcUrgency === 'priority' ? '12-16 Days' : '18-24 Days';
    return calcUrgency === 'priority' ? '6-8 Days' : '10-14 Days';
  };

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
    <div className="space-y-12 sm:space-y-16 pb-16 font-sans text-slate-800">
      {/* SECTION 1: HERO - PICTURE-RICH WITH OCEAN BLUE & CLOUDY SKY DUAL SHOWCASE */}
      <section className="bg-white border-b border-slate-200/90 pt-8 sm:pt-12 pb-12 sm:pb-16 px-4 sm:px-8 select-none">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left 7 Cols: Punchy, Clear, Mind-Grabbing Value Proposition */}
            <div className="lg:col-span-7 space-y-5 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#CCDDEA] text-[#103852] text-xs font-semibold">
                <MapPin className="w-3.5 h-3.5 text-[#2772A0]" />
                <span>Civil Lines, Mathura, UP • Premier Academic Consultancy</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0F2C3D] leading-[1.16]">
                Your Research Journey, <br />
                <span className="text-[#2772A0]">Our Professional Guidance.</span>
              </h1>

              <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Doctoral thesis line-editing, Scopus &amp; UGC-CARE publication assistance, synopsis review, and SPSS data modeling for India's scholars and university researchers.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
                <Button
                  variant="ocean"
                  size="lg"
                  icon={<ArrowRight className="w-4 h-4" />}
                  iconPosition="right"
                  onClick={() => onNavigate('services')}
                  className="w-full sm:w-auto font-semibold shadow-xs"
                >
                  Explore 6 Core Services
                </Button>

                <Button
                  variant="cloudy"
                  size="lg"
                  onClick={onOpenBooking}
                  className="w-full sm:w-auto font-semibold"
                >
                  Book 1-on-1 Consultation
                </Button>

                <a
                  href="https://wa.me/919760498896?text=Hello%20YouKnowVerse%2C%20I%20would%20like%20to%20discuss%20my%20academic%20research%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#25D366] text-white font-semibold text-xs hover:bg-[#20BD5A] transition-colors shadow-xs"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>WhatsApp (+91 9760498896)</span>
                </a>
              </div>

              {/* 4 Clean Verified Trust Indicators */}
              <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 border-t border-slate-100">
                <div className="flex items-center gap-2 text-xs text-slate-700">
                  <ShieldCheck className="w-4 h-4 text-[#2772A0] shrink-0" />
                  <span className="font-medium">100% Defense Clearance</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="font-medium">Scopus &amp; UGC-CARE Verified</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-700">
                  <Users className="w-4 h-4 text-[#2772A0] shrink-0" />
                  <span className="font-medium">Strict Confidentiality</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-700">
                  <Clock className="w-4 h-4 text-[#2772A0] shrink-0" />
                  <span className="font-medium">Guaranteed On-Time</span>
                </div>
              </div>
            </div>

            {/* Right 5 Cols: Signature Dual-Card Showcase (Ocean Blue & Cloudy Sky with Real Photos) */}
            <div className="lg:col-span-5 space-y-4">
              {/* Card 1: Solid Ocean Blue Card (#2772A0) */}
              <div className="bg-[#2772A0] text-white rounded-3xl p-5 shadow-sm space-y-3.5 border border-[#1E5C82]">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold tracking-wider uppercase text-[#CCDDEA] text-[11px]">
                    Doctoral Thesis Refinement
                  </span>
                  <span className="bg-[#1E5C82] px-2.5 py-0.5 rounded-full text-[10px] font-semibold text-white">
                    DRC Defense Standard
                  </span>
                </div>

                <div className="grid grid-cols-12 gap-3.5 items-center">
                  <div className="col-span-7 space-y-1.5">
                    <h3 className="font-bold text-lg leading-snug">
                      PhD Thesis Editing &amp; Formatting
                    </h3>
                    <p className="text-xs text-[#CCDDEA] leading-relaxed">
                      Substantive line edits, APA 7th reference audits, and university compliance formatting.
                    </p>
                    <div className="pt-1 flex items-center gap-2 text-[11px] text-white/90">
                      <span>✓ 10–14 Day Turnaround</span>
                      <span>•</span>
                      <span>✓ From ₹1.10/word</span>
                    </div>
                  </div>

                  {/* Real WebP Photo Inset */}
                  <div className="col-span-5">
                    <img 
                      src="/images/hero-scholar.webp" 
                      alt="Doctoral scholar conducting research" 
                      className="w-full h-24 sm:h-28 object-cover rounded-2xl border border-white/20 shadow-xs"
                      loading="eager"
                    />
                  </div>
                </div>

                <div className="pt-1 flex items-center justify-between border-t border-white/15">
                  <span className="text-[11px] text-[#CCDDEA]">100% Clearance Record</span>
                  <button 
                    onClick={() => onNavigate('service-detail', { slug: 'thesis-editing' })}
                    className="text-xs font-semibold text-white hover:underline flex items-center gap-1"
                  >
                    <span>View Thesis Deliverables</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>

              {/* Card 2: Solid Cloudy Sky Card (#CCDDEA) */}
              <div className="bg-[#CCDDEA] text-[#103852] rounded-3xl p-5 shadow-xs space-y-3.5 border border-[#B0C8DA]">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold tracking-wider uppercase text-[#2772A0] text-[11px]">
                    Research Mentorship
                  </span>
                  <span className="bg-white/70 px-2.5 py-0.5 rounded-full text-[10px] font-semibold text-[#103852]">
                    1-on-1 Mathura &amp; Virtual
                  </span>
                </div>

                <div className="grid grid-cols-12 gap-3.5 items-center">
                  <div className="col-span-7 space-y-1.5">
                    <h3 className="font-bold text-lg text-[#103852] leading-snug">
                      Scopus &amp; UGC-CARE Guidance
                    </h3>
                    <p className="text-xs text-slate-700 leading-relaxed">
                      Target journal scope evaluation, reviewer rebuttal drafting, and empirical SPSS data analysis.
                    </p>
                    <div className="pt-1 flex items-center gap-2 text-[11px] font-medium text-[#103852]">
                      <span>✓ Zero Predatory Journals</span>
                      <span>•</span>
                      <span>✓ Defense Clearance</span>
                    </div>
                  </div>

                  {/* Real WebP Photo Inset */}
                  <div className="col-span-5">
                    <img 
                      src="/images/consultation-meeting.webp" 
                      alt="Academic consultation with mentor" 
                      className="w-full h-24 sm:h-28 object-cover rounded-2xl border border-[#B0C8DA] shadow-xs"
                      loading="eager"
                    />
                  </div>
                </div>

                <div className="pt-1 flex items-center justify-between border-t border-[#B0C8DA]/70">
                  <span className="text-[11px] text-[#2772A0] font-medium">Mathura Office or Google Meet</span>
                  <button 
                    onClick={onOpenBooking}
                    className="text-xs font-bold text-[#2772A0] hover:underline flex items-center gap-1"
                  >
                    <span>Schedule 1-on-1 Session</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 2: CORE SPECIALIZED SERVICES (PICTURE-RICH GRID) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-[#2772A0]">
              Complete Academic Ecosystem
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F2C3D]">
              Specialized Research Services
            </h2>
          </div>
          <Button 
            variant="outline" 
            size="sm" 
            onClick={() => onNavigate('services')}
            className="self-start sm:self-auto text-xs"
          >
            View All Services &amp; Pricing →
          </Button>
        </div>

        {/* 6 Visual Cards with Real Photography */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.slice(0, 6).map((srv) => (
            <Card 
              key={srv.id} 
              padding="none" 
              className="bg-white border border-slate-200/90 shadow-xs flex flex-col justify-between overflow-hidden group hover:border-[#2772A0] transition-colors"
            >
              <div>
                {/* Real WebP Service Photo Header */}
                <div className="relative h-44 w-full overflow-hidden bg-slate-100">
                  <img 
                    src={serviceImageMap[srv.slug] || '/images/thesis-editing.webp'} 
                    alt={srv.title} 
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute top-3 right-3 bg-white/95 px-2.5 py-1 rounded-lg text-[11px] font-bold text-[#2772A0] shadow-xs">
                    {srv.starting_price || srv.pricing_model}
                  </div>
                </div>

                {/* Service Details */}
                <div className="p-5 space-y-3">
                  <h3 className="font-bold text-base text-[#0F2C3D]">
                    {srv.title}
                  </h3>
                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {srv.short_description}
                  </p>

                  {/* 3 Deliverables */}
                  <div className="space-y-1.5 pt-1 text-xs">
                    {srv.key_deliverables.slice(0, 3).map((item: string, idx: number) => (
                      <div key={idx} className="flex items-center gap-2 text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span className="line-clamp-1">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="p-5 pt-0 flex items-center justify-between gap-2 border-t border-slate-100 mt-2">
                <button
                  onClick={() => onNavigate('service-detail', { slug: srv.slug })}
                  className="text-xs font-semibold text-[#2772A0] hover:underline"
                >
                  Service Details →
                </button>
                <Button 
                  variant="ocean" 
                  size="sm" 
                  onClick={() => onOpenInquiry(srv.id)}
                  className="text-xs"
                >
                  Quick Inquire
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* SECTION 3: VISUAL 4-STEP RESEARCH WORKFLOW GRAPHIC */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-1.5">
          <div className="text-xs font-bold uppercase tracking-wider text-[#2772A0]">
            Transparent Milestone Progression
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F2C3D]">
            How YouKnowVerse Guides Your Research
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            A structured four-step methodology ensuring academic integrity, university compliance, and timely defense.
          </p>
        </div>

        <ResearchWorkflowGraphic />
      </section>

      {/* SECTION 4: INTERACTIVE QUICK-QUOTE CALCULATOR (WARM LINEN & CLOUDY SKY CARD) */}
      <section className="max-w-5xl mx-auto px-4 sm:px-8">
        <div className="bg-[#F7F5ED] rounded-3xl border border-[#CCDDEA] p-6 sm:p-8 shadow-xs space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#CCDDEA]/80 pb-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#2772A0]">
                Instant Transparency
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-[#0F2C3D]">
                Estimate Your Academic Service Quotation
              </h2>
              <p className="text-xs text-slate-600 mt-0.5">
                Calculate live estimates with zero hidden costs, clear timelines, and direct WhatsApp routing.
              </p>
            </div>
            <div className="inline-flex items-center gap-1.5 text-xs text-[#2772A0] font-semibold bg-[#CCDDEA] px-3 py-1.5 rounded-xl self-start sm:self-auto">
              <Sliders className="w-3.5 h-3.5" />
              <span>Live Indian Rupee (₹) Pricing</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            {/* Left 7 Cols: Interactive Controls */}
            <div className="md:col-span-7 space-y-5">
              {/* Service Selection */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-[#0F2C3D] uppercase tracking-wider">
                  Select Required Academic Module
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { id: 'thesis', label: 'PhD Thesis Line-Editing' },
                    { id: 'paper', label: 'Research Paper Support' },
                    { id: 'synopsis', label: 'Synopsis / Proposal Review' },
                    { id: 'spss', label: 'Statistical Analysis (SPSS)' },
                  ].map((s) => (
                    <button
                      key={s.id}
                      onClick={() => setCalcService(s.id as any)}
                      className={`p-2.5 rounded-xl text-xs font-semibold text-left transition-colors border ${
                        calcService === s.id
                          ? 'bg-[#2772A0] text-white border-[#1E5C82] shadow-xs'
                          : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                      }`}
                    >
                      {s.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Word count slider (for thesis / paper) */}
              {(calcService === 'thesis' || calcService === 'paper') && (
                <div className="space-y-2 bg-white p-4 rounded-2xl border border-slate-200">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-slate-700">Estimated Manuscript Word Count:</span>
                    <span className="font-mono font-bold text-sm text-[#2772A0]">
                      {calcWords.toLocaleString()} words
                    </span>
                  </div>
                  <input
                    type="range"
                    min={2000}
                    max={60000}
                    step={1000}
                    value={calcWords}
                    onChange={(e) => setCalcWords(parseInt(e.target.value))}
                    className="w-full accent-[#2772A0] cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400">
                    <span>2,000 words (Paper excerpt)</span>
                    <span>30,000 words (Monograph)</span>
                    <span>60,000 words (Full PhD Thesis)</span>
                  </div>
                </div>
              )}

              {/* Urgency Toggle */}
              <div className="flex items-center justify-between bg-white p-3.5 rounded-2xl border border-slate-200 text-xs">
                <div>
                  <span className="font-bold text-slate-800">Turnaround Speed</span>
                  <p className="text-[11px] text-slate-500">
                    {calcUrgency === 'priority' ? 'Expedited review with priority team allocation' : 'Standard academic review timeframe'}
                  </p>
                </div>
                <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl">
                  <button
                    onClick={() => setCalcUrgency('standard')}
                    className={`px-3 py-1 rounded-lg text-xs font-semibold ${
                      calcUrgency === 'standard' ? 'bg-white text-[#2772A0] shadow-xs' : 'text-slate-600'
                    }`}
                  >
                    Standard
                  </button>
                  <button
                    onClick={() => setCalcUrgency('priority')}
                    className={`px-3 py-1 rounded-lg text-xs font-semibold ${
                      calcUrgency === 'priority' ? 'bg-[#2772A0] text-white shadow-xs' : 'text-slate-600'
                    }`}
                  >
                    Priority (+25%)
                  </button>
                </div>
              </div>
            </div>

            {/* Right 5 Cols: Live Estimated Output Box */}
            <div className="md:col-span-5 bg-white rounded-3xl p-6 border border-[#CCDDEA] shadow-xs space-y-4 text-center">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#2772A0]">
                Estimated Service Investment
              </span>
              <div className="text-3xl sm:text-4xl font-extrabold text-[#0F2C3D]">
                ₹{calculatePrice().toLocaleString('en-IN')}
              </div>

              <div className="space-y-1.5 text-xs text-slate-600 border-t border-b border-slate-100 py-3">
                <div className="flex justify-between">
                  <span>Estimated Delivery:</span>
                  <span className="font-semibold text-slate-900">{getEstimatedDays()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Revisions Included:</span>
                  <span className="font-semibold text-slate-900">2 Rounds (DRC Compliant)</span>
                </div>
                <div className="flex justify-between">
                  <span>Confidentiality:</span>
                  <span className="font-semibold text-emerald-700">Strict NDA Guaranteed</span>
                </div>
              </div>

              <div className="space-y-2 pt-1">
                <a
                  href={`https://wa.me/919760498896?text=Hello%20YouKnowVerse%2C%20I%20used%20the%20website%20calculator.%20Service%3A%20${calcService}%2C%20Words%3A%20${calcWords}%2C%20Estimated%20Quote%3A%20%E2%82%B9${calculatePrice()}%20(${getEstimatedDays()}).%20Please%20confirm%20availability.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#25D366] text-white font-bold text-xs hover:bg-[#20BD5A] transition-colors shadow-xs"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Quotation to WhatsApp</span>
                </a>

                <Button
                  variant="outline"
                  size="sm"
                  fullWidth
                  onClick={() => onOpenInquiry(calcService === 'thesis' ? 'srv-003' : 'srv-004')}
                  className="text-xs"
                >
                  Formal Quotation Request
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: BEFORE VS. AFTER EDITORIAL QUALITY BENCHMARK */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-[#2772A0]">
            Editorial Standards
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#0F2C3D]">
            Editorial Quality Benchmark
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Compare an unrefined raw draft against an YouKnowVerse polished publication excerpt.
          </p>
        </div>

        <BeforeAfterPreviewGraphic />
      </section>

      {/* SECTION 6: ACADEMIC INTEGRITY (PREDATORY VS. VERIFIED SCOPUS) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-[#2772A0]">
            Ethical Publishing Protocol
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#0F2C3D]">
            Academic Integrity &amp; Journal Protection
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Learn how YouKnowVerse shields doctoral scholars from predatory publisher traps and confirms legitimate Scopus &amp; UGC-CARE indexation.
          </p>
        </div>

        <JournalComparisonGraphic />
      </section>

      {/* SECTION 7: UNIVERSITY NETWORK */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <UniversityNetworkGraphic />
      </section>

      {/* SECTION 8: VERIFIED SCHOLAR TESTIMONIALS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-[#2772A0]">
            Authentic Outcomes
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#0F2C3D]">
            Verified Feedback from Doctoral Candidates
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Real outcomes from PhD and Master's scholars across Indian universities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <Card key={t.id} padding="md" className="bg-white space-y-3 flex flex-col justify-between border border-slate-200/90 shadow-xs">
              <div className="space-y-2">
                <div className="flex items-center gap-1 text-amber-500">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-500" />
                  ))}
                </div>
                <p className="text-xs text-slate-700 italic leading-relaxed">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                <div>
                  <div className="font-bold text-[#0F2C3D]">{t.author_name}</div>
                  <div className="text-[11px] text-slate-500">{t.university}</div>
                </div>
                <span className="text-[10px] font-semibold text-[#2772A0] bg-[#CCDDEA] px-2 py-0.5 rounded">
                  {t.service_name}
                </span>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* SECTION 9: FREQUENTLY ASKED QUESTIONS */}
      <section className="max-w-4xl mx-auto px-4 sm:px-8 space-y-4">
        <div className="text-center space-y-1">
          <span className="text-xs font-bold uppercase tracking-wider text-[#2772A0]">
            Scholar Help Center
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#0F2C3D]">
            Frequently Asked Questions
          </h2>
          <p className="text-xs text-slate-500">
            Honest answers regarding methodology, pricing, timelines, and academic integrity.
          </p>
        </div>

        <div className="space-y-2.5 pt-2">
          {faqs.map((faq) => (
            <div key={faq.id} className="bg-white rounded-2xl border border-slate-200/90 p-4 space-y-1.5 shadow-xs">
              <div className="flex items-start gap-2.5">
                <HelpCircle className="w-4 h-4 text-[#2772A0] shrink-0 mt-0.5" />
                <h3 className="font-bold text-sm text-[#0F2C3D]">
                  {faq.question}
                </h3>
              </div>
              <p className="text-xs text-slate-600 pl-6 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center pt-2">
          <Button variant="outline" size="sm" onClick={() => onNavigate('faq')} className="text-xs">
            View All FAQs &amp; Ethics Protocol →
          </Button>
        </div>
      </section>

      {/* SECTION 10: GROUNDED CALL TO ACTION (SOLID OCEAN BLUE BANNER WITH CLOUDY SKY ACCENTS) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-[#2772A0] text-white rounded-3xl p-6 sm:p-10 text-center space-y-4 shadow-sm border border-[#1E5C82]">
          <div className="inline-flex items-center gap-1.5 bg-[#1E5C82] text-[#CCDDEA] px-3 py-1 rounded-full text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Mathura Office Open Monday – Saturday, 9:30 AM to 6:30 PM IST</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Ready to Complete Your Academic Milestones?
          </h2>

          <p className="text-xs sm:text-sm text-[#CCDDEA] max-w-xl mx-auto leading-relaxed">
            Consult directly with senior academic editors in Mathura, UP, or book an online session to discuss your thesis, synopsis, or research paper.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button
              variant="cloudy"
              size="lg"
              onClick={onOpenBooking}
              className="w-full sm:w-auto font-bold shadow-xs"
            >
              Book In-Person or Video Consultation
            </Button>

            <a
              href="https://wa.me/919760498896?text=Hello%20YouKnowVerse%2C%20I%20would%20like%20to%20discuss%20my%20academic%20research%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#25D366] text-white font-bold text-sm hover:bg-[#20BD5A] transition-colors shadow-xs"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>WhatsApp: +91 9760498896</span>
            </a>

            <a
              href="tel:+919760498896"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#1E5C82] text-white font-medium text-xs hover:bg-[#184968] transition-colors"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Call +91 9760498896</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
