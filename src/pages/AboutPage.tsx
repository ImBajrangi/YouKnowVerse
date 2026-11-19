import React from 'react';
import { 
  Award, 
  CheckCircle2, 
  Building, 
  GraduationCap
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { UniversityNetworkGraphic } from '../components/graphics/UniversityNetworkGraphic';

export interface AboutPageProps {
  onNavigate: (page: string) => void;
  onOpenBooking: () => void;
  onOpenInquiry: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onNavigate,
  onOpenBooking,
}) => {
  return (
    <div className="space-y-12 pb-16 font-sans">
      {/* Hero Banner (Clean Solid Peacock Navy, Native Fonts) */}
      <section className="bg-[#0B2D3A] text-white py-10 sm:py-14 px-4 sm:px-8 border-b border-[#134455]">
        <div className="max-w-7xl mx-auto space-y-3 text-center">
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Ethical Academic Research Advisory
          </h1>
          <p className="text-sm sm:text-base text-[#86B9C7] font-medium max-w-xl mx-auto">
            "Your Research Journey, Our Professional Guidance."
          </p>
          <p className="text-xs sm:text-sm text-[#C4DEE3] max-w-2xl mx-auto leading-relaxed">
            Headquartered in Mathura, Uttar Pradesh, guiding PhD candidates, Master's scholars, and faculty through doctoral synopses, empirical data modeling, and legitimate journal publication.
          </p>
        </div>
      </section>

      {/* Visual University Network Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <UniversityNetworkGraphic />
      </section>

      {/* Story & Heritage with Real Photography */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <span className="text-xs font-semibold text-[#0082A6] uppercase tracking-wide">
              Mathura Heritage & Pedigree
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-[#0B2D3A]">
              Bridging University Research With Global Publishing
            </h2>
            <p className="text-xs sm:text-sm text-[#3D6170] leading-relaxed">
              Serving prominent universities across Western Uttar Pradesh and India (GLA University, AMU, BHU, Delhi University, DBRAU Agra), we eliminate the anxiety of DRC formatting rejections and peer-review revisions through structured academic mentorship.
            </p>

            {/* Real WebP Campus & Center Photo */}
            <div className="relative overflow-hidden rounded-2xl border border-slate-200">
              <img 
                src="/images/university-campus.webp" 
                alt="University research facilities and scholarly libraries in India" 
                className="w-full h-48 object-cover"
                loading="lazy"
              />
            </div>

            <div className="grid grid-cols-2 gap-3 pt-1 text-xs">
              <div className="p-3 rounded-2xl bg-white border border-slate-200 shadow-subtle space-y-1">
                <Building className="w-5 h-5 text-[#0082A6]" />
                <div className="font-bold text-[#0B2D3A]">Civil Lines, Mathura</div>
                <div className="text-[11px] text-[#3D6170]">In-person consulting facility</div>
              </div>

              <div className="p-3 rounded-2xl bg-white border border-slate-200 shadow-subtle space-y-1">
                <GraduationCap className="w-5 h-5 text-[#0082A6]" />
                <div className="font-bold text-[#0B2D3A]">15+ Subject Mentors</div>
                <div className="text-[11px] text-[#3D6170]">PhDs & senior editors</div>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-3">
              <Button variant="teal" size="sm" onClick={onOpenBooking} className="text-xs font-semibold">
                Book Consultation with Academic Lead
              </Button>
              <Button variant="outline" size="sm" onClick={() => onNavigate('contact')} className="text-xs">
                Visit Mathura Office
              </Button>
            </div>
          </div>

          {/* Institutional Commitments with Real Team Photo */}
          <div className="bg-white rounded-3xl border border-slate-200 p-5 sm:p-6 shadow-subtle space-y-4">
            <div className="overflow-hidden rounded-2xl border border-slate-200">
              <img 
                src="/images/academic-team.webp" 
                alt="AcademicPro advisory editorial board and peer reviewers" 
                className="w-full h-48 object-cover"
                loading="lazy"
              />
            </div>

            <h3 className="font-bold text-base text-[#0B2D3A] border-b border-slate-200/60 pb-2 flex items-center gap-2">
              <Award className="w-5 h-5 text-[#0082A6]" />
              <span>Core Institutional Commitments</span>
            </h3>

            <div className="space-y-2.5 text-xs text-[#0B2D3A]">
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#0B2D3A] block">Strict Non-Ghostwriting Policy:</strong>
                  <span className="text-[#3D6170]">We do not write papers or theses for scholars. We provide developmental critique and line editing to help you author your own work.</span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#0B2D3A] block">Zero Fabrication Guarantee:</strong>
                  <span className="text-[#3D6170]">We never fabricate survey respondents, simulate synthetic statistical data, or falsify citations.</span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#0B2D3A] block">Legitimate Peer-Review Navigation:</strong>
                  <span className="text-[#3D6170]">We guide researchers only toward verified UGC-CARE, Scopus, and WoS indexed journals.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
