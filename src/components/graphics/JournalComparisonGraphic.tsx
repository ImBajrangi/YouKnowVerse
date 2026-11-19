import React from 'react';
import { Check, X, ShieldAlert, ShieldCheck } from 'lucide-react';

export const JournalComparisonGraphic: React.FC = () => {
  return (
    <div className="w-full bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs select-none font-sans">
      <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-200">
        {/* Left: The Predatory Scam Trap (Red) */}
        <div className="p-5 sm:p-6 bg-rose-50/40 space-y-3.5">
          <div className="flex items-center gap-2.5 border-b border-rose-200/60 pb-3">
            <div className="p-2 rounded-xl bg-rose-100 text-rose-700">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-rose-900">
                Predatory & Cloned Journal Traps
              </h4>
              <span className="text-[10px] text-rose-600 font-semibold uppercase tracking-wider">
                Rejected by UGC & University DRCs
              </span>
            </div>
          </div>

          <div className="space-y-2 text-xs text-rose-950">
            <div className="flex items-start gap-2">
              <X className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
              <span><strong>Guaranteed Acceptance:</strong> Claims publication within 48–72 hours for a fee.</span>
            </div>
            <div className="flex items-start gap-2">
              <X className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
              <span><strong>Fake Metrics:</strong> Inventions like "Universal Impact Factor" or "Global Cite Score".</span>
            </div>
            <div className="flex items-start gap-2">
              <X className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
              <span><strong>Cloned Portals:</strong> Fake mirror websites hijacking legitimate print ISSNs.</span>
            </div>
            <div className="flex items-start gap-2">
              <X className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
              <span><strong>Doctoral Viva Risk:</strong> Immediate thesis disqualification and academic integrity penalty.</span>
            </div>
          </div>
        </div>

        {/* Right: YouKnowVerse Verified Publishing (Emerald / Teal) */}
        <div className="p-5 sm:p-6 bg-[#EBF5F8]/40 space-y-3.5">
          <div className="flex items-center gap-2.5 border-b border-[#C4DEE3] pb-3">
            <div className="p-2 rounded-xl bg-[#EBF5F8] text-[#0082A6] border border-[#C4DEE3]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-[#0F172A]">
                YouKnowVerse Ethical Guidance
              </h4>
              <span className="text-[10px] text-[#0082A6] font-semibold uppercase tracking-wider">
                100% Verified Scopus & UGC-CARE List
              </span>
            </div>
          </div>

          <div className="space-y-2 text-xs text-slate-800">
            <div className="flex items-start gap-2">
              <Check className="w-4 h-4 text-[#0082A6] shrink-0 mt-0.5" />
              <span><strong>Live Index Verification:</strong> Direct cross-checks on Scopus.com, Clarivate WoS, and UGC-CARE.</span>
            </div>
            <div className="flex items-start gap-2">
              <Check className="w-4 h-4 text-[#0082A6] shrink-0 mt-0.5" />
              <span><strong>Double-Blind Peer Review:</strong> Adherence to COPE international editorial benchmarks.</span>
            </div>
            <div className="flex items-start gap-2">
              <Check className="w-4 h-4 text-[#0082A6] shrink-0 mt-0.5" />
              <span><strong>Reviewer Rebuttal Letters:</strong> Point-by-point professional response structuring.</span>
            </div>
            <div className="flex items-start gap-2">
              <Check className="w-4 h-4 text-[#0082A6] shrink-0 mt-0.5" />
              <span><strong>Doctoral Credential Security:</strong> Permanent, recognized DOI papers recognized for doctoral viva.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
