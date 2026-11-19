import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { ResearchWorkflowGraphic } from '../components/graphics/ResearchWorkflowGraphic';

export interface HowItWorksPageProps {
  onNavigate?: (page: string) => void;
  onOpenBooking: () => void;
  onOpenInquiry: () => void;
}

export const HowItWorksPage: React.FC<HowItWorksPageProps> = ({
  onOpenBooking,
  onOpenInquiry,
}) => {
  const steps = [
    {
      num: '01',
      title: 'Select Your Service & Submit Your Requirements',
      desc: 'Browse our service catalog or submit an inquiry detailing your university, department guidelines, manuscript length, and target deadlines.',
      bullets: [
        'Upload your draft synopsis, thesis chapters, or raw data securely',
        'Specify institutional formatting guidelines (e.g., DU, AMU, BHU, GLA)',
        'Receive instant unique Inquiry ID for tracking'
      ]
    },
    {
      num: '02',
      title: 'Diagnostic Review & Transparent Scope Quotation',
      desc: 'Our academic directors evaluate your materials and formulate a transparent scope document with itemized deliverables and milestone pricing.',
      bullets: [
        'No hidden costs or arbitrary price escalation',
        'Milestone-based payment options for PhD scholars',
        'Optional 30-minute consultation call to calibrate expectations'
      ]
    },
    {
      num: '03',
      title: 'Collaborative Execution & Milestone Reviews',
      desc: 'Your assigned subject specialist and senior editor commence work in structured passes with continuous scholar communication.',
      bullets: [
        'Tracked changes in MS Word showing every stylistic correction',
        'Direct project messaging thread with your assigned consultant',
        'Interim chapter reviews to align with supervisor recommendations'
      ]
    },
    {
      num: '04',
      title: 'Final Delivery, Defense Notes & 14-Day Revision',
      desc: 'Receive your polished deliverables, clean printable copies, formatting checklists, and editorial verification certificates.',
      bullets: [
        'Downloadable directly from your private Client Workspace vault',
        '14 days of complimentary post-delivery clarification and revision',
        'Advisory notes to prepare you for DRC/RDC viva questioning'
      ]
    }
  ];

  return (
    <div className="space-y-16 sm:space-y-24 pb-20 font-sans text-[#0B2D3A] select-none">
      
      {/* Editorial Hero Header */}
      <section className="pt-8 sm:pt-14 px-4 sm:px-8 max-w-5xl mx-auto text-center space-y-4">
        <span className="px-3.5 py-1 rounded-full bg-[#EBF5F8] text-[#0082A6] text-xs font-bold uppercase tracking-wider">
          STRUCTURED RESEARCH PROTOCOL
        </span>
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0B2D3A] leading-[1.1]">
          How Our Academic <br />
          <span className="font-serif italic font-normal text-[#2772A0]">Advisory Works</span>
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto leading-relaxed">
          A transparent, ethical, step-by-step engagement model designed to give scholars absolute peace of mind and publication-grade results.
        </p>
      </section>

      {/* Visual Pipeline Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#CCDDEA] shadow-subtle">
          <ResearchWorkflowGraphic />
        </div>
      </section>

      {/* Steps Breakdown */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-6">
        {steps.map(step => (
          <div 
            key={step.num} 
            className="bg-white rounded-3xl p-6 sm:p-8 border border-[#CCDDEA] shadow-subtle hover:border-[#0082A6] transition-colors"
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
              <div className="md:col-span-2 text-center md:text-left">
                <span className="font-serif font-black text-4xl sm:text-5xl text-[#0082A6]/30 block">
                  {step.num}
                </span>
                <span className="text-[11px] font-bold text-[#0082A6] uppercase tracking-wider block mt-1">
                  Stage {step.num}
                </span>
              </div>

              <div className="md:col-span-10 space-y-3">
                <h3 className="font-extrabold text-xl text-[#0B2D3A]">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {step.desc}
                </p>

                <div className="pt-2 grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {step.bullets.map((b, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-700 bg-[#F7F5ED] p-3 rounded-2xl border border-slate-200/80">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#0082A6] shrink-0 mt-0.5" />
                      <span className="leading-snug">{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Bottom CTA Banner */}
      <section className="max-w-4xl mx-auto px-4 sm:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-[#CCDDEA] shadow-premium text-center space-y-5">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B2D3A]">
            Ready to Begin Your Research Journey?
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto">
            Book an introductory 30-minute mentoring session or request a confidential milestone quotation for your thesis.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              onClick={onOpenBooking}
              className="px-6 py-3 rounded-full bg-[#0082A6] hover:bg-[#006F8E] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-subtle"
            >
              Book Advisory Session
            </button>
            <button
              onClick={onOpenInquiry}
              className="px-6 py-3 rounded-full bg-[#F7F5ED] hover:bg-[#EBF5F8] text-[#0B2D3A] text-xs font-bold uppercase tracking-wider transition-all border border-[#CCDDEA]"
            >
              Submit Manuscript Draft
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
