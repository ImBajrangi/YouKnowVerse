import React, { useState } from 'react';
import { CheckCircle2, AlertCircle } from 'lucide-react';

export const BeforeAfterPreviewGraphic: React.FC = () => {
  const [view, setView] = useState<'after' | 'before'>('after');

  return (
    <div className="w-full bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-subtle p-5 sm:p-6 space-y-4 select-none">
      {/* Header & Toggle */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-slate-100 pb-3">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#D6A52B]">
            Interactive Manuscript Inspection
          </span>
          <h3 className="font-serif font-bold text-base sm:text-lg text-[#071E46]">
            Before vs. After Editorial Transformation
          </h3>
        </div>

        {/* Pill Toggle: Concentric Inner 8px */}
        <div className="inline-flex p-1 rounded-xl bg-slate-100 border border-slate-200 text-xs">
          <button
            onClick={() => setView('before')}
            className={`px-3 py-1.5 rounded-lg font-medium transition-colors ${
              view === 'before'
                ? 'bg-rose-600 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Raw Draft (Before)
          </button>
          <button
            onClick={() => setView('after')}
            className={`px-3 py-1.5 rounded-lg font-bold transition-colors ${
              view === 'after'
                ? 'bg-[#071E46] text-[#D6A52B] shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            AcademicPro Polish (After)
          </button>
        </div>
      </div>

      {/* Simulated Document Preview */}
      <div className="relative p-5 rounded-2xl border font-serif transition-colors text-xs leading-relaxed bg-[#FDFBF7]">
        {view === 'before' ? (
          <div className="space-y-3 font-sans">
            <div className="flex items-center gap-2 text-rose-700 font-semibold text-xs border-b border-rose-200 pb-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>Issues: Non-academic language, informal phrasing, inconsistent in-text citations</span>
            </div>

            <div className="space-y-2 text-slate-600 font-serif italic text-xs sm:text-sm">
              <p>
                "In this research, we asked a bunch of people about microfinance in Mathura and Agra districts. Sharma (2019) says microfinance is good for poor women, but according to another paper by Gupta et al in 2021, it has a lot of problems with high interest rates. We found that most women said they were happy with the loans."
              </p>
            </div>

            <div className="pt-2 flex flex-wrap gap-2 text-[10px] font-sans">
              <span className="px-2 py-0.5 rounded bg-rose-100 text-rose-800 font-semibold">❌ Informal Vocabulary</span>
              <span className="px-2 py-0.5 rounded bg-rose-100 text-rose-800 font-semibold">❌ Unspecified Methodology</span>
              <span className="px-2 py-0.5 rounded bg-rose-100 text-rose-800 font-semibold">❌ Non-Standard Citation Style</span>
            </div>
          </div>
        ) : (
          <div className="space-y-3 font-sans">
            <div className="flex items-center gap-2 text-emerald-800 font-semibold text-xs border-b border-emerald-200 pb-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>AcademicPro Refinement: Defensible scholarly syntax, precise empirical framing, APA 7th compliance</span>
            </div>

            <div className="space-y-2 text-slate-800 font-serif text-xs sm:text-sm leading-relaxed">
              <p>
                "The empirical investigation deployed a stratified sampling framework across four districts in Western Uttar Pradesh ($N = 384$). While foundational scholarship demonstrates the affirmative role of microfinance institutions in augmenting rural female socioeconomic autonomy (Sharma, 2019, pp. 45–52), contemporary critical evaluations highlight operational friction stemming from predatory compounding interest schedules (Gupta &amp; Verma, 2021). The regression analysis confirmed a statistically significant positive correlation between institutional micro-credit tenure and household capital accumulation ($\beta = 0.42, p &lt; 0.001$)."
              </p>
            </div>

            <div className="pt-2 flex flex-wrap gap-2 text-[10px] font-sans">
              <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold">✓ APA 7th Standardized</span>
              <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold">✓ Statistical Notation ($p &lt; 0.001$)</span>
              <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold">✓ Ready for Viva Defense</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
