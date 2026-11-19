import React from 'react';
import { 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles, 
  Award, 
  FileCheck, 
  BarChart, 
  BookmarkCheck
} from 'lucide-react';

export const ManuscriptAuditGraphic: React.FC = () => {
  return (
    <div className="relative w-full max-w-lg mx-auto select-none">
      {/* Decorative ambient gradient backdrop */}
      <div className="absolute -inset-1 bg-gradient-to-r from-[#D6A52B]/30 via-[#102F60] to-[#071E46] rounded-3xl blur-xl opacity-50" />

      {/* Main Glassmorphic Container: Concentric Outer 24px with p-5 */}
      <div className="relative bg-[#071E46]/95 border border-[#D6A52B]/40 rounded-3xl p-5 sm:p-6 shadow-2xl backdrop-blur-md text-white space-y-4">
        {/* Top Status Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-3">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-[#102F60] border border-[#D6A52B]/50 flex items-center justify-center text-[#D6A52B]">
              <Award className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-serif font-bold text-white flex items-center gap-1.5">
                <span>Academic Rigor Audit</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              </div>
              <div className="text-[10px] text-slate-300 font-mono">DRC/RDC Evaluation Engine</div>
            </div>
          </div>
          <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
            VERIFIED ETHICAL
          </span>
        </div>

        {/* Circular Dial & Metric Trio */}
        <div className="grid grid-cols-12 gap-3 items-center">
          {/* Dial SVG (5 cols) */}
          <div className="col-span-5 flex flex-col items-center justify-center p-3 rounded-2xl bg-[#04122B]/80 border border-white/10">
            <div className="relative w-20 h-20 flex items-center justify-center">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                {/* Background circle */}
                <path
                  className="text-slate-800"
                  strokeWidth="3.2"
                  stroke="currentColor"
                  fill="none"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                {/* Golden progress stroke */}
                <path
                  className="text-[#D6A52B]"
                  strokeDasharray="98, 100"
                  strokeWidth="3.2"
                  strokeLinecap="round"
                  stroke="currentColor"
                  fill="none"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
              </svg>
              <div className="absolute text-center">
                <span className="text-sm font-serif font-bold text-white">98.4</span>
                <span className="text-[9px] text-[#D6A52B] block font-mono -mt-1">%</span>
              </div>
            </div>
            <span className="text-[10px] font-medium text-slate-300 mt-1">RDC Ready Score</span>
          </div>

          {/* Quick Metrics Bar (7 cols) */}
          <div className="col-span-7 space-y-2">
            {/* Metric 1: Similarity */}
            <div className="p-2 rounded-xl bg-[#102F60]/60 border border-white/10">
              <div className="flex justify-between items-center text-[10px]">
                <span className="text-slate-300 flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-emerald-400" />
                  <span>Similarity Index</span>
                </span>
                <span className="font-mono font-bold text-emerald-400">3.8% (Safe)</span>
              </div>
              <div className="w-full h-1.5 bg-slate-800 rounded-full mt-1.5 overflow-hidden">
                <div className="h-full bg-emerald-500 rounded-full w-[12%]" />
              </div>
            </div>

            {/* Metric 2: Citation Compliance */}
            <div className="p-2 rounded-xl bg-[#102F60]/60 border border-white/10">
              <div className="flex justify-between items-center text-[10px]">
                <span className="text-slate-300 flex items-center gap-1">
                  <BookmarkCheck className="w-3 h-3 text-[#D6A52B]" />
                  <span>APA 7th Referencing</span>
                </span>
                <span className="font-mono font-bold text-[#D6A52B]">100% Audit</span>
              </div>
              <div className="w-full h-1.5 bg-slate-800 rounded-full mt-1.5 overflow-hidden">
                <div className="h-full bg-[#D6A52B] rounded-full w-[100%]" />
              </div>
            </div>

            {/* Metric 3: Empirical Rigor */}
            <div className="p-2 rounded-xl bg-[#102F60]/60 border border-white/10">
              <div className="flex justify-between items-center text-[10px]">
                <span className="text-slate-300 flex items-center gap-1">
                  <BarChart className="w-3 h-3 text-blue-400" />
                  <span>SPSS/R Method Rigor</span>
                </span>
                <span className="font-mono font-bold text-blue-300">Verified</span>
              </div>
              <div className="w-full h-1.5 bg-slate-800 rounded-full mt-1.5 overflow-hidden">
                <div className="h-full bg-blue-500 rounded-full w-[94%]" />
              </div>
            </div>
          </div>
        </div>

        {/* Visual Tracked Changes Mini-Mockup */}
        <div className="p-3 rounded-2xl bg-[#04122B]/90 border border-white/10 space-y-2">
          <div className="flex items-center justify-between text-[10px] text-slate-400 font-mono">
            <span className="flex items-center gap-1">
              <FileCheck className="w-3 h-3 text-[#D6A52B]" />
              <span>manuscript_chapter2_v3.docx</span>
            </span>
            <span className="text-emerald-400">Tracked Edits Applied</span>
          </div>

          <div className="font-mono text-[10px] leading-relaxed p-2 rounded-lg bg-[#071E46] border border-white/5 space-y-1">
            <div className="text-slate-400">
              "...the empirical sampling framework was <span className="line-through text-rose-400 bg-rose-950/40 px-1 rounded">haphazardly gathered</span> <span className="text-emerald-300 bg-emerald-950/50 px-1 rounded font-semibold">stratified across 4 western UP districts</span> with G*Power verification (p &lt; 0.001)..."
            </div>
          </div>
        </div>

        {/* Bottom Floating Badges */}
        <div className="flex items-center justify-between pt-1 text-[10px] text-slate-300 font-medium border-t border-white/10">
          <span className="flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-[#D6A52B]" />
            <span>Scopus & UGC-CARE Ready</span>
          </span>
          <span className="flex items-center gap-1 text-emerald-300">
            <CheckCircle2 className="w-3 h-3 text-emerald-400" />
            <span>100% Defense Clearance</span>
          </span>
        </div>
      </div>
    </div>
  );
};
