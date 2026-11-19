import { 
  Award, 
  CheckCircle2, 
  MessageCircle
} from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';

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
    <div className="space-y-16 pb-16 font-sans">
      {/* Hero */}
      <section className="bg-[#071E46] text-white py-16 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto space-y-4 text-center">
          <Badge variant="gold">About AcademicPro India</Badge>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white">
            Dedicated to Ethical Academic Excellence
          </h1>
          <p className="font-serif text-lg text-slate-200 italic max-w-2xl mx-auto">
            "Your Research Journey, Our Professional Guidance."
          </p>
          <p className="text-xs sm:text-sm text-slate-300 max-w-3xl mx-auto leading-relaxed pt-2">
            Established in Mathura, Uttar Pradesh, AcademicPro India was founded to provide undergraduate students, postgraduate scholars, PhD candidates, and faculty with premier, ethically compliant research guidance and editorial support.
          </p>
        </div>
      </section>

      {/* Story & Heritage */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <Badge variant="navy">Our Foundation & Roots</Badge>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#071E46]">
              Rooted in Mathura, Serving Scholars Across India
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Mathura and Western Uttar Pradesh have emerged as major centers of higher education, with institutions like GLA University, Central Institute for Research on Goats (CIRG), Dr. B. R. Ambedkar University, Aligarh Muslim University, and Banaras Hindu University in close proximity.
            </p>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Despite high researcher dedication, scholars frequently struggle with nuanced DRC formatting standards, statistical modeling in SPSS/R, and navigating the complexities of Scopus and UGC-CARE indexation. AcademicPro India was established to bridge this critical gap through structured mentorship, rigorous editorial reviews, and transparent methodologies.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <Button variant="gold" size="sm" onClick={onOpenBooking} className="text-xs font-bold">
                Book Consultation with Academic Lead
              </Button>
              <Button variant="outline" size="sm" onClick={() => onNavigate('contact')} className="text-xs">
                Visit Mathura Office
              </Button>
            </div>
          </div>

          <div className="bg-white rounded-3xl border border-[#E2E8F0] p-6 sm:p-8 shadow-subtle space-y-4">
            <h3 className="font-serif font-bold text-lg text-[#071E46] border-b border-slate-100 pb-3 flex items-center gap-2">
              <Award className="w-5 h-5 text-[#D6A52B]" />
              <span>Core Institutional Commitments</span>
            </h3>

            <div className="space-y-3 text-xs text-slate-700">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 block">Strict Non-Ghostwriting Policy</strong>
                  <span>We never author research papers or theses on behalf of scholars. We empower you to write your own scholarship through substantive developmental critique.</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 block">Zero Fabrication Guarantee</strong>
                  <span>We never generate synthetic survey results, simulate fake statistical findings, or invent non-existent citations.</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 block">Legitimate Peer-Review Navigation</strong>
                  <span>We guide researchers toward verified UGC-CARE, Scopus, and WoS journals and reject all predatory and cloned journal solicitations.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Consulting Team */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
        <div className="text-center space-y-2 max-w-xl mx-auto">
          <Badge variant="navy">Academic Advisory Panel</Badge>
          <h2 className="font-serif text-3xl font-bold text-[#071E46]">
            Experienced Research Consultants
          </h2>
          <p className="text-xs text-slate-500">
            Our editorial and methodological team brings decades of combined university research and peer-review experience.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <Card padding="md" className="bg-white space-y-3 border border-slate-200">
            <div className="w-12 h-12 rounded-2xl bg-[#071E46] text-[#D6A52B] font-serif font-bold text-lg flex items-center justify-center">
              VU
            </div>
            <div>
              <h4 className="font-serif font-bold text-base text-[#071E46]">Dr. Vivek Upadhyay</h4>
              <p className="text-xs text-[#D6A52B] font-semibold">Director & Chief Academic Advisor</p>
              <p className="text-xs text-slate-500 mt-1">Ph.D. in Management & Economics. Over 15 years guiding doctoral scholars and managing university research publications.</p>
            </div>
          </Card>

          <Card padding="md" className="bg-white space-y-3 border border-slate-200">
            <div className="w-12 h-12 rounded-2xl bg-[#071E46] text-[#D6A52B] font-serif font-bold text-lg flex items-center justify-center">
              AM
            </div>
            <div>
              <h4 className="font-serif font-bold text-base text-[#071E46]">Dr. Ananya Mishra</h4>
              <p className="text-xs text-[#D6A52B] font-semibold">Lead Research Methodologist</p>
              <p className="text-xs text-slate-500 mt-1">Specialist in quantitative research, empirical sampling frameworks, SEM-PLS modeling, and SPSS/R statistical analysis.</p>
            </div>
          </Card>

          <Card padding="md" className="bg-white space-y-3 border border-slate-200">
            <div className="w-12 h-12 rounded-2xl bg-[#071E46] text-[#D6A52B] font-serif font-bold text-lg flex items-center justify-center">
              SD
            </div>
            <div>
              <h4 className="font-serif font-bold text-base text-[#071E46]">Prof. S. N. Dwivedi</h4>
              <p className="text-xs text-[#D6A52B] font-semibold">Senior Academic Language Editor</p>
              <p className="text-xs text-slate-500 mt-1">Former University Department Head and peer-reviewer. Expert in academic tone refinement, chapter cohesion, and referencing.</p>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-8 text-center space-y-6">
        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#071E46]">
          Ready to Discuss Your Academic Milestones?
        </h3>
        <p className="text-xs sm:text-sm text-slate-600">
          Visit our Mathura center or connect with our research panel virtually via Google Meet or WhatsApp.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button variant="gold" size="md" onClick={onOpenInquiry} className="text-xs font-bold">
            Submit Your Inquiry
          </Button>
          <a
            href="https://wa.me/919760498896"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#25D366] text-white font-semibold text-xs"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Chat on WhatsApp (+91 9760498896)</span>
          </a>
        </div>
      </section>
    </div>
  );
};
