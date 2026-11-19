import React from 'react';
import { Check, X, ShieldAlert, ShieldCheck } from 'lucide-react';

export const JournalComparisonGraphic: React.FC = () => {
  return (
    <div className="w-full bg-white rounded-3xl border border-[#D6E6EB] overflow-hidden shadow-subtle select-none">
      <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[#D6E6EB]">
        {/* Left: The Predatory Scam Trap (Red) */}
        <div className="p-6 bg-rose-50/40 space-y-4">
          <div className="flex items-center gap-2.5 border-b border-rose-200/60 pb-3">
            <div className="p-2 rounded-xl bg-rose-100 text-rose-700">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-serif font-bold text-sm text-rose-900">
                Predatory & Cloned Journal Traps
              </h4>
              <span className="text-[10px] text-rose-600 font-semibold uppercase tracking-wider">
                Rejected by UGC & University DRCs
              </span>
            </div>
          </div>

          <div className="space-y-2.5 text-xs text-rose-950">
            <div className="flex items-start gap-2">
              <X className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
              <span><strong>Guaranteed Acceptance:</strong> Claims publication within 48-72 hours for a fee.</span>
            </div>
            <div className="flex items-start gap-2">
              <X className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
              <span><strong>Fake Metrics:</strong> Inventions like "Universal Impact Factor" or "Global Cite Score".</span>
            </div>
            <div className="flex items-start gap-2">
              <X className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
              <span><strong>Bogus Indexing:</strong> Cloned websites hijacking legitimate ISSNs.</span>
            </div>
            <div className="flex items-start gap-2">
              <X className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
              <span><strong>Career Risk:</strong> Immediate PhD disqualification and faculty API rollback.</span>
            </div>
          </div>
        </div>

        {/* Right: AcademicPro Verified Publishing */}
        <div className="p-6 bg-[#C4DEE3]/15 space-y-4">
          <div className="flex items-center gap-2.5 border-b border-[#86B9C7]/40 pb-3">
            <div className="p-2 rounded-xl bg-[#0082A6]/10 text-[#0082A6]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-serif font-bold text-sm text-[#0B2D3A]">
                AcademicPro Ethical Guidance
              </h4>
              <span className="text-[10px] text-[#0082A6] font-semibold uppercase tracking-wider">
                100% Genuine Scopus & UGC-CARE List
              </span>
            </div>
          </div>

          <div className="space-y-2.5 text-xs text-[#0B2D3A]">
            <div className="flex items-start gap-2">
              <Check className="w-4 h-4 text-[#0082A6] shrink-0 mt-0.5" />
              <span><strong>Verified Portals:</strong> Direct cross-checks on Scopus.com, Clarivate WoS, and UGC-CARE.</span>
            </div>
            <div className="flex items-start gap-2">
              <Check className="w-4 h-4 text-[#0082A6] shrink-0 mt-0.5" />
              <span><strong>Blind Peer-Review:</strong> Genuine scholarly evaluation adhering to COPE guidelines.</span>
            </div>
            <div className="flex items-start gap-2">
              <Check className="w-4 h-4 text-[#0082A6] shrink-0 mt-0.5" />
              <span><strong>Reviewer Rebuttal Letters:</strong> Point-by-point professional response structuring.</span>
            </div>
            <div className="flex items-start gap-2">
              <Check className="w-4 h-4 text-[#0082A6] shrink-0 mt-0.5" />
              <span><strong>Lifelong Pedigree:</strong> Permanent, recognized research publications for doctoral viva.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
