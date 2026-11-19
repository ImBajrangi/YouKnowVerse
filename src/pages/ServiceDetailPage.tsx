import React from 'react';
import { 
  CheckCircle2, 
  ArrowLeft, 
  Clock, 
  Calendar, 
  ShieldCheck, 
  MessageCircle,
  ChevronRight
} from 'lucide-react';
import { CacheStore } from '../lib/cacheStore';
import { BeforeAfterPreviewGraphic } from '../components/graphics/BeforeAfterPreviewGraphic';

export interface ServiceDetailPageProps {
  slug: string;
  onNavigate: (page: string, params?: Record<string, string>) => void;
  onOpenBooking: () => void;
  onOpenInquiry: (serviceId?: string) => void;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({
  slug,
  onNavigate,
  onOpenBooking,
  onOpenInquiry,
}) => {
  const service = CacheStore.getServiceBySlug(slug) || CacheStore.getServices()[0];

  return (
    <div className="space-y-16 sm:space-y-24 pb-20 font-sans text-[#0B2D3A] select-none">
      
      {/* Editorial Minimalist Hero Header */}
      <section className="pt-8 sm:pt-14 px-4 sm:px-8 max-w-5xl mx-auto space-y-4">
        <button
          onClick={() => onNavigate('services')}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0082A6] hover:text-[#006F8E] transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to All Services</span>
        </button>

        <div className="space-y-2">
          <span className="px-3.5 py-1 rounded-full bg-[#EBF5F8] text-[#0082A6] text-xs font-bold uppercase tracking-wider inline-block">
            ACADEMIC GUIDANCE MODULE
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#0B2D3A] leading-[1.1]">
            {service.title}
          </h1>
          <p className="font-serif italic font-normal text-lg sm:text-xl text-[#2772A0]">
            "{service.tagline}"
          </p>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* Left & Middle (2 Cols): Details & Workflow */}
          <div className="lg:col-span-2 space-y-8">
            {/* Overview */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#CCDDEA] shadow-subtle space-y-5">
              <h2 className="font-extrabold text-xl sm:text-2xl text-[#0B2D3A]">
                Service Overview &amp; Academic Scope
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {service.full_description}
              </p>

              {/* Target Audience */}
              <div className="p-4 rounded-2xl bg-[#F7F5ED] border border-slate-200/80 space-y-2">
                <span className="font-bold text-xs text-[#0B2D3A]">Who Benefits Most From This Service:</span>
                <ul className="space-y-1.5 text-xs text-slate-700">
                  {service.ideal_for.map((aud, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <ChevronRight className="w-3.5 h-3.5 text-[#0082A6] shrink-0" />
                      <span>{aud}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Key Deliverables */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#CCDDEA] shadow-subtle space-y-5">
              <h3 className="font-extrabold text-xl text-[#0B2D3A]">
                Included Deliverables
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {service.key_deliverables.map((del, i) => (
                  <div key={i} className="p-3.5 rounded-2xl bg-[#F7F5ED] border border-slate-200/80 flex items-start gap-2.5 text-xs text-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-[#0082A6] shrink-0 mt-0.5" />
                    <span className="leading-snug">{del}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Before & After Transformation Graphic */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#CCDDEA] shadow-subtle space-y-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#0082A6]">Quality Transformation</span>
                <h3 className="font-extrabold text-xl text-[#0B2D3A]">
                  Editorial &amp; Academic Transformation
                </h3>
                <p className="text-xs text-slate-500">
                  Slide or toggle to inspect how raw scholar drafts are elevated into publication-grade submissions.
                </p>
              </div>
              <BeforeAfterPreviewGraphic />
            </div>

            {/* Multi-step Workflow */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#CCDDEA] shadow-subtle space-y-5">
              <h3 className="font-extrabold text-xl text-[#0B2D3A]">
                Structured Execution Workflow
              </h3>
              <div className="space-y-4">
                {service.workflow_steps.map(step => (
                  <div key={step.step} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-[#EBF5F8] text-[#0082A6] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                      {step.step}
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-[#0B2D3A]">{step.title}</h4>
                      <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Sticky Action & Pricing Box */}
          <div className="lg:col-span-1 space-y-6 lg:sticky lg:top-24">
            <div className="bg-white rounded-3xl p-6 border border-[#CCDDEA] shadow-premium space-y-5">
              <div className="border-b border-slate-100 pb-4">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Investment Scope</span>
                <div className="text-3xl font-black text-[#0B2D3A] mt-1">
                  {service.starting_price || 'Custom Quote'}
                </div>
                <span className="text-[11px] text-[#0082A6] font-semibold block mt-0.5">
                  {service.pricing_model === 'per_page' ? 'Calculated on verified word count' : 'Transparent fixed milestone'}
                </span>
              </div>

              <div className="space-y-3 text-xs text-slate-700">
                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-[#0082A6]" />
                  <span>Timeline: <strong>{service.estimated_days}</strong></span>
                </div>
                <div className="flex items-center gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-[#0082A6]" />
                  <span>Includes 14-day revision support</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Calendar className="w-4 h-4 text-[#0082A6]" />
                  <span>Immediate slot allocation</span>
                </div>
              </div>

              <div className="space-y-2 pt-2">
                <button
                  onClick={() => onOpenInquiry(service.id)}
                  className="w-full py-3.5 rounded-full bg-[#0082A6] hover:bg-[#006F8E] text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-subtle"
                >
                  Request Official Scope Quote
                </button>
                <button
                  onClick={onOpenBooking}
                  className="w-full py-3 rounded-full bg-[#F7F5ED] hover:bg-[#EBF5F8] text-[#0B2D3A] text-xs font-semibold uppercase tracking-wider transition-colors border border-[#CCDDEA]"
                >
                  Book 30-Min Discussion
                </button>
              </div>

              <div className="pt-3 border-t border-slate-100 text-center">
                <a
                  href={`https://wa.me/919760498896?text=Hello%20YouKnowVerse%2C%20I%20am%20interested%20in%20learning%20more%20about%20your%20${encodeURIComponent(service.title)}%20service.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-emerald-700 font-bold hover:underline"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                  <span>Ask Direct Questions on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
