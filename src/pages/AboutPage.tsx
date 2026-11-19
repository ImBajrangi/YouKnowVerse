import React from 'react';
import { 
  Award, 
  CheckCircle2, 
  Building, 
  GraduationCap,
  ShieldCheck,
  Lock
} from 'lucide-react';
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
    <div className="space-y-16 sm:space-y-24 pb-20 font-sans text-[#0B2D3A] select-none">
      
      {/* Editorial Minimalist Hero Header */}
      <section className="pt-8 sm:pt-14 px-4 sm:px-8 max-w-5xl mx-auto text-center space-y-4">
        <span className="px-3.5 py-1 rounded-full bg-[#EBF5F8] text-[#0082A6] text-xs font-bold uppercase tracking-wider">
          ABOUT YOUKNOWVERSE
        </span>
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0B2D3A] leading-[1.1]">
          Ethical Academic <br />
          <span className="font-serif italic font-normal text-[#2772A0]">Research Advisory</span>
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Headquartered in Mathura, Uttar Pradesh, guiding PhD candidates, Master's scholars, and faculty through doctoral synopses, empirical data modeling, and legitimate journal publication.
        </p>
      </section>

      {/* Visual University Network Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#CCDDEA] shadow-subtle">
          <UniversityNetworkGraphic />
        </div>
      </section>

      {/* Story & Heritage with Real Photography */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-5">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0082A6]">
              Mathura Heritage &amp; Pedigree
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B2D3A] leading-snug">
              Bridging University Research With Global Publishing Standards
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Serving prominent universities across Western Uttar Pradesh and India (GLA University, AMU, BHU, Delhi University, DBRAU Agra), we eliminate the anxiety of DRC formatting rejections and peer-review revisions through structured academic mentorship.
            </p>

            {/* Real WebP Campus & Center Photo */}
            <div className="relative overflow-hidden rounded-2xl border border-slate-200 shadow-xs">
              <img 
                src="/images/university-campus.webp" 
                alt="University research facilities and scholarly libraries in India" 
                className="w-full h-52 object-cover"
                loading="lazy"
              />
            </div>

            <div className="grid grid-cols-2 gap-4 pt-1 text-xs">
              <div className="p-4 rounded-2xl bg-white border border-[#CCDDEA] shadow-subtle space-y-1">
                <Building className="w-5 h-5 text-[#0082A6]" />
                <div className="font-bold text-[#0B2D3A]">Civil Lines, Mathura</div>
                <div className="text-[11px] text-slate-500">In-person consulting facility</div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-[#CCDDEA] shadow-subtle space-y-1">
                <GraduationCap className="w-5 h-5 text-[#0082A6]" />
                <div className="font-bold text-[#0B2D3A]">15+ Subject Mentors</div>
                <div className="text-[11px] text-slate-500">PhDs &amp; senior editors</div>
              </div>
            </div>
          </div>

          {/* Pillars of Academic Integrity */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#CCDDEA] shadow-subtle space-y-6">
            <h3 className="font-extrabold text-xl text-[#0B2D3A] border-b border-slate-100 pb-3">
              The Four Pillars of YouKnowVerse
            </h3>

            <div className="space-y-4">
              {[
                { title: 'Strict Zero-Ghostwriting Rule', desc: 'We do not author dissertations or fabricate papers for hire. We mentor, edit, analyze, and format scholarly manuscripts produced by scholars themselves.', icon: ShieldCheck },
                { title: 'Western UP University Expertise', desc: 'Intimate familiarity with doctoral review committee (DRC/RDC) guidelines at GLA Mathura, AMU, Dayalbagh Educational Institute, and Agra University.', icon: Award },
                { title: 'Transparent Milestone Pricing', desc: 'No predatory advance demands. Work proceeds in verifiable chapter stages with itemized milestone invoicing in Indian Rupees (₹).', icon: CheckCircle2 },
                { title: 'Confidentiality & Non-Disclosure', desc: 'Your proprietary research hypotheses, survey datasets, and patentable findings remain 100% protected under our standard Mutual NDA.', icon: Lock }
              ].map((p, idx) => {
                const IconComponent = p.icon;
                return (
                  <div key={idx} className="flex items-start gap-3.5">
                    <div className="w-8 h-8 rounded-xl bg-[#EBF5F8] text-[#0082A6] flex items-center justify-center shrink-0 mt-0.5">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-[#0B2D3A]">{p.title}</h4>
                      <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">{p.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership & Facility Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="relative rounded-3xl overflow-hidden border border-[#CCDDEA] shadow-premium">
          <img 
            src="/images/academic-team.webp" 
            alt="YouKnowVerse Senior Academic Mentors in Mathura" 
            className="w-full h-80 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B2D3A] via-[#0B2D3A]/40 to-transparent flex flex-col justify-end p-6 sm:p-10 text-white space-y-2">
            <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-[10px] font-bold uppercase tracking-wider self-start text-[#C4DEE3]">
              DIRECTORATE IN MATHURA
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Led by Experienced University Academicians &amp; Senior Editors
            </h3>
            <p className="text-xs sm:text-sm text-slate-200 max-w-2xl">
              Our core team brings together former department chairs, UGC-NET qualified researchers, and published authors with over 12 years of doctoral advisory experience.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="max-w-4xl mx-auto px-4 sm:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-[#CCDDEA] shadow-premium text-center space-y-5">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B2D3A]">
            Schedule an In-Person or Virtual Consultation
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto">
            Visit our Mathura center or connect virtually via Google Meet to review your doctoral thesis requirements.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              onClick={onOpenBooking}
              className="px-6 py-3 rounded-full bg-[#0082A6] hover:bg-[#006F8E] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-subtle"
            >
              Book Consultation Session
            </button>
            <button
              onClick={onOpenInquiry}
              className="px-6 py-3 rounded-full bg-[#F7F5ED] hover:bg-[#EBF5F8] text-[#0B2D3A] text-xs font-bold uppercase tracking-wider transition-all border border-[#CCDDEA]"
            >
              Submit Manuscript Draft
            </button>
            <button
              onClick={() => onNavigate('services')}
              className="px-6 py-3 rounded-full bg-white hover:bg-[#EBF5F8] text-[#0082A6] text-xs font-bold uppercase tracking-wider transition-all border border-[#CCDDEA]"
            >
              Explore Services
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
