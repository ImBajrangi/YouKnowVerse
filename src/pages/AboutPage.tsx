import { 
  Award, 
  CheckCircle2, 
  MessageCircle,
  Building,
  GraduationCap
} from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { UniversityNetworkGraphic } from '../components/graphics/UniversityNetworkGraphic';

export interface AboutPageProps {
  onNavigate: (page: string) => void;
  onOpenBooking: () => void;
  onOpenInquiry: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onNavigate,
  onOpenBooking,
  onOpenInquiry,
}) => {
  return (
    <div className="space-y-14 pb-16 font-sans">
      {/* Hero */}
      <section className="bg-[#0B2D3A] text-white py-14 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto space-y-4 text-center">
          <Badge variant="gold">Institutional Identity</Badge>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white">
            Ethical Academic Research Advisory
          </h1>
          <p className="font-serif text-base sm:text-lg text-slate-200 italic max-w-xl mx-auto">
            "Your Research Journey, Our Professional Guidance."
          </p>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Headquartered in Mathura, Uttar Pradesh, guiding PhD candidates, Master's scholars, and faculty through doctoral synopses, empirical data modeling, and legitimate journal publication.
          </p>
        </div>
      </section>

      {/* Visual University Network Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <UniversityNetworkGraphic />
      </section>

      {/* Story & Heritage with Visual Badges */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <Badge variant="navy">Mathura Heritage</Badge>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0B2D3A]">
              Bridging University Research With Global Publishing
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Serving prominent universities across Western Uttar Pradesh and India (GLA University, AMU, BHU, Delhi University, DBRAU Agra), we eliminate the anxiety of DRC formatting rejections and peer-review revisions through structured academic mentorship.
            </p>

            <div className="grid grid-cols-2 gap-3 pt-2 text-xs">
              <div className="p-3 rounded-2xl bg-white border border-slate-200 shadow-subtle space-y-1">
                <Building className="w-5 h-5 text-[#0082A6]" />
                <div className="font-bold text-[#0B2D3A]">Civil Lines, Mathura</div>
                <div className="text-[11px] text-slate-500">In-person consulting facility</div>
              </div>

              <div className="p-3 rounded-2xl bg-white border border-slate-200 shadow-subtle space-y-1">
                <GraduationCap className="w-5 h-5 text-emerald-600" />
                <div className="font-bold text-[#0B2D3A]">15+ Subject Mentors</div>
                <div className="text-[11px] text-slate-500">PhDs & senior editors</div>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-3">
              <Button variant="gold" size="sm" onClick={onOpenBooking} className="text-xs font-bold">
                Book Consultation with Academic Lead
              </Button>
              <Button variant="outline" size="sm" onClick={() => onNavigate('contact')} className="text-xs">
                Visit Mathura Office
              </Button>
            </div>
          </div>

          {/* Graphical Commitments Card */}
          <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-subtle space-y-4">
            <h3 className="font-serif font-bold text-base text-[#0B2D3A] border-b border-slate-100 pb-3 flex items-center gap-2">
              <Award className="w-5 h-5 text-[#0082A6]" />
              <span>Core Institutional Commitments</span>
            </h3>

            <div className="space-y-3 text-xs text-slate-700">
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 block">Strict Non-Ghostwriting Policy:</strong>
                  <span className="text-slate-600">We do not write papers or theses for scholars. We provide developmental critique and line editing to help you author your own work.</span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 block">Zero Fabrication Guarantee:</strong>
                  <span className="text-slate-600">We never fabricate survey respondents, simulate synthetic statistical data, or falsify citations.</span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 block">Legitimate Peer-Review Navigation:</strong>
                  <span className="text-slate-600">We guide researchers only toward verified UGC-CARE, Scopus, and WoS indexed journals.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advisory Panel */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-6">
        <div className="text-center space-y-1 max-w-xl mx-auto">
          <Badge variant="navy">Academic Advisory Panel</Badge>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0B2D3A]">
            Experienced Research Consultants
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          <Card padding="md" className="bg-white space-y-2 border border-slate-200">
            <div className="w-10 h-10 rounded-2xl bg-[#0B2D3A] text-[#0082A6] font-serif font-bold text-base flex items-center justify-center">
              VU
            </div>
            <div>
              <h4 className="font-serif font-bold text-sm text-[#0B2D3A]">Dr. Vivek Upadhyay</h4>
              <p className="text-[11px] text-[#0082A6] font-semibold">Director & Chief Academic Advisor</p>
              <p className="text-[11px] text-slate-500 mt-1">Ph.D. in Management & Economics. 15+ years guiding doctoral candidates in institutional research.</p>
            </div>
          </Card>

          <Card padding="md" className="bg-white space-y-2 border border-slate-200">
            <div className="w-10 h-10 rounded-2xl bg-[#0B2D3A] text-[#0082A6] font-serif font-bold text-base flex items-center justify-center">
              AM
            </div>
            <div>
              <h4 className="font-serif font-bold text-sm text-[#0B2D3A]">Dr. Ananya Mishra</h4>
              <p className="text-[11px] text-[#0082A6] font-semibold">Lead Research Methodologist</p>
              <p className="text-[11px] text-slate-500 mt-1">Specialist in quantitative research, sampling models, SEM-PLS, and SPSS/R statistical analysis.</p>
            </div>
          </Card>

          <Card padding="md" className="bg-white space-y-2 border border-slate-200">
            <div className="w-10 h-10 rounded-2xl bg-[#0B2D3A] text-[#0082A6] font-serif font-bold text-base flex items-center justify-center">
              SD
            </div>
            <div>
              <h4 className="font-serif font-bold text-sm text-[#0B2D3A]">Prof. S. N. Dwivedi</h4>
              <p className="text-[11px] text-[#0082A6] font-semibold">Senior Academic Language Editor</p>
              <p className="text-[11px] text-slate-500 mt-1">Peer-reviewer and department chair. Expert in academic tone, chapter cohesion, and APA referencing.</p>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-8 text-center space-y-4">
        <h3 className="font-serif text-2xl font-bold text-[#0B2D3A]">
          Ready to Discuss Your Academic Milestones?
        </h3>
        <p className="text-xs text-slate-600">
          Visit our Mathura center or connect virtually via Google Meet or WhatsApp.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button variant="gold" size="sm" onClick={onOpenInquiry} className="text-xs font-bold">
            Submit Free Inquiry
          </Button>
          <a
            href="https://wa.me/919760498896"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#25D366] text-white font-semibold text-xs"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Chat on WhatsApp (+91 9760498896)</span>
          </a>
        </div>
      </section>
    </div>
  );
};
