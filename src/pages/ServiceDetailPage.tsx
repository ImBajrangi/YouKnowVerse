import { 
  CheckCircle2, 
  ArrowLeft, 
  Clock, 
  DollarSign, 
  Calendar, 
  ShieldCheck, 
  MessageCircle,
  ChevronRight
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
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
    <div className="space-y-12 pb-16 font-sans">
      {/* Top Breadcrumb & Hero */}
      <section className="bg-[#0B2D3A] text-white py-12 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto space-y-4">
          <button
            onClick={() => onNavigate('services')}
            className="inline-flex items-center gap-2 text-xs text-slate-300 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Services</span>
          </button>

          <div className="space-y-2">
            <Badge variant="gold" size="sm">Academic Guidance Module</Badge>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              {service.title}
            </h1>
            <p className="font-serif text-base sm:text-lg text-slate-200 italic max-w-2xl">
              "{service.tagline}"
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left & Middle (2 Cols): Details & Workflow */}
          <div className="lg:col-span-2 space-y-8">
            {/* Overview */}
            <Card padding="lg" className="bg-white space-y-4 border border-slate-200">
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#0B2D3A]">
                Service Overview & Academic Value
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {service.full_description}
              </p>

              {/* Target Audience */}
              <div className="p-4 rounded-2xl bg-[#F7F5ED] border border-[#D6E6EB] space-y-2">
                <span className="font-bold text-xs text-[#0B2D3A]">Who Benefits Most From This Service:</span>
                <ul className="space-y-1 text-xs text-slate-600">
                  {service.ideal_for.map((aud, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <ChevronRight className="w-3.5 h-3.5 text-[#0082A6] shrink-0" />
                      <span>{aud}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>

            {/* Key Deliverables */}
            <Card padding="lg" className="bg-white space-y-4 border border-slate-200">
              <h3 className="font-serif text-xl font-bold text-[#0B2D3A]">
                Included Deliverables
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {service.key_deliverables.map((del, i) => (
                  <div key={i} className="p-3 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-2.5 text-xs text-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="leading-snug">{del}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Interactive Before & After Transformation Graphic */}
            <BeforeAfterPreviewGraphic />

            {/* 4-Step Editorial & Delivery Workflow */}
            <Card padding="lg" className="bg-white space-y-6 border border-slate-200">
              <h3 className="font-serif text-xl font-bold text-[#0B2D3A]">
                Our 4-Stage Execution Workflow
              </h3>

              <div className="space-y-4">
                {service.workflow_steps.map(wf => (
                  <div key={wf.step} className="flex items-start gap-4 p-4 rounded-2xl border border-slate-100 bg-[#F7F5ED]">
                    <div className="w-8 h-8 rounded-full bg-[#0B2D3A] text-[#0082A6] font-bold text-xs flex items-center justify-center shrink-0">
                      0{wf.step}
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-sm text-[#0B2D3A]">{wf.title}</h4>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">{wf.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Right Sidebar (1 Col): Pricing, Timelines & Action Card */}
          <div className="space-y-6">
            <Card padding="lg" className="bg-white space-y-5 border border-slate-200 sticky top-24">
              <h3 className="font-serif font-bold text-lg text-[#0B2D3A] border-b border-slate-100 pb-3">
                Service Parameters
              </h3>

              <div className="space-y-3 text-xs">
                <div className="flex justify-between items-center py-1 border-b border-slate-100">
                  <span className="text-slate-500 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#0082A6]" />
                    <span>Estimated Turnaround:</span>
                  </span>
                  <span className="font-bold text-slate-800">{service.estimated_days}</span>
                </div>

                <div className="flex justify-between items-center py-1 border-b border-slate-100">
                  <span className="text-slate-500 flex items-center gap-1.5">
                    <DollarSign className="w-3.5 h-3.5 text-[#0082A6]" />
                    <span>Pricing Model:</span>
                  </span>
                  <span className="font-bold text-slate-800 capitalize">
                    {service.pricing_model === 'per_page' ? 'Per Word / Page' : 'Custom Quotation'}
                  </span>
                </div>

                <div className="flex justify-between items-center py-1">
                  <span className="text-slate-500">Starting Price:</span>
                  <span className="font-bold text-base text-emerald-700">
                    {service.starting_price || 'Quote on Scope'}
                  </span>
                </div>
              </div>

              {/* CTAs */}
              <div className="space-y-2.5 pt-2">
                <Button
                  variant="gold"
                  fullWidth
                  onClick={() => onOpenInquiry(service.id)}
                  className="text-xs font-bold py-2.5"
                >
                  Request Customized Quote
                </Button>

                <Button
                  variant="secondary"
                  fullWidth
                  icon={<Calendar className="w-3.5 h-3.5" />}
                  onClick={onOpenBooking}
                  className="text-xs"
                >
                  Book 1-on-1 Consultation
                </Button>

                <a
                  href={`https://wa.me/919760498896?text=Hello%20AcademicPro%20India%2C%20I%20am%20interested%20in%20${encodeURIComponent(service.title)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-[#25D366]/10 text-emerald-800 hover:bg-[#25D366]/20 font-semibold text-xs transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp Academic Specialist</span>
                </a>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-[11px] text-slate-500 space-y-1">
                <div className="font-semibold text-slate-700 flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Confidentiality Guarantee</span>
                </div>
                <p>Protected by Non-Disclosure Agreement (NDA) and secure private storage.</p>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};
