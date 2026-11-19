import { CheckCircle2 } from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
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
      desc: 'Browse our service catalogue or submit an inquiry detailing your university, department guidelines, manuscript length, and target deadlines.',
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
      desc: 'Your assigned subject specialist and senior editor commence work in structured passes with continuous client communication.',
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
    <div className="space-y-16 pb-16 font-sans">
      {/* Hero */}
      <section className="bg-[#0B2D3A] text-white py-16 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto space-y-4 text-center">
          <Badge variant="gold">Institutional Process</Badge>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white">
            How Our Academic Advisory Works
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
            A transparent, ethical, step-by-step engagement model designed to give scholars absolute peace of mind and publication-grade results.
          </p>
        </div>
      </section>

      {/* Visual Pipeline Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <ResearchWorkflowGraphic />
      </section>

      {/* Steps Breakdown */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
        <div className="space-y-6">
          {steps.map(step => (
            <Card key={step.num} padding="lg" className="bg-white border border-slate-200">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                <div className="md:col-span-2 text-center md:text-left">
                  <span className="font-serif font-black text-4xl sm:text-5xl text-[#0B2D3A]/20 block">
                    {step.num}
                  </span>
                  <span className="text-[11px] font-bold text-[#0082A6] uppercase tracking-wider block mt-1">
                    Stage {step.num}
                  </span>
                </div>

                <div className="md:col-span-10 space-y-3">
                  <h3 className="font-serif font-bold text-lg sm:text-xl text-[#0B2D3A]">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {step.desc}
                  </p>

                  <div className="space-y-1.5 pt-2 border-t border-slate-100">
                    {step.bullets.map((b, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-8 text-center space-y-6">
        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0B2D3A]">
          Ready to Begin Your Research Project?
        </h3>
        <p className="text-xs sm:text-sm text-slate-600">
          Submit your requirements today or schedule a consultation with our academic panel.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button variant="gold" size="md" onClick={onOpenInquiry} className="text-xs font-bold">
            Start With a Free Inquiry
          </Button>
          <Button variant="secondary" size="md" onClick={onOpenBooking} className="text-xs">
            Schedule Scope Call
          </Button>
        </div>
      </section>
    </div>
  );
};
