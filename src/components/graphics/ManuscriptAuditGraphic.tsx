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
      {/* Clean Solid Container: Concentric Outer 24px with p-5 */}
      <div className="relative bg-[#0B2D3A] border border-[#86B9C7]/30 rounded-3xl p-5 sm:p-6 shadow-xl text-white space-y-4">
        {/* Top Status Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-3">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-[#134455] border border-[#86B9C7]/50 flex items-center justify-center text-[#C4DEE3]">
              <Award className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-serif font-bold text-white flex items-center gap-1.5">
                <span>Academic Rigor Audit</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#0082A6] animate-pulse" />
              </div>
              <div className="text-[10px] text-[#C4DEE3] font-mono">DRC/RDC Evaluation Engine</div>
            </div>
          </div>
          <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-[#0082A6]/25 text-[#C4DEE3] border border-[#0082A6]/50">
            VERIFIED ETHICAL
          </span>
        </div>

        {/* Circular Dial & Metric Trio */}
        <div className="grid grid-cols-12 gap-3 items-center">
          {/* Dial SVG (5 cols) */}
          <div className="col-span-5 flex flex-col items-center justify-center p-3 rounded-2xl bg-[#061D26]/90 border border-[#86B9C7]/20">
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
                {/* Teal progress stroke */}
                <path
                  className="text-[#0082A6]"
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
                <span className="text-[9px] text-[#86B9C7] block font-mono -mt-1">%</span>
              </div>
            </div>
            <span className="text-[10px] font-medium text-[#C4DEE3] mt-1">RDC Ready Score</span>
          </div>

          {/* Quick Metrics Bar (7 cols) */}
          <div className="col-span-7 space-y-2">
            {/* Metric 1: Similarity */}
            <div className="p-2 rounded-xl bg-[#134455]/70 border border-[#86B9C7]/20">
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
            <div className="p-2 rounded-xl bg-[#134455]/70 border border-[#86B9C7]/20">
              <div className="flex justify-between items-center text-[10px]">
                <span className="text-slate-300 flex items-center gap-1">
                  <BookmarkCheck className="w-3 h-3 text-[#86B9C7]" />
                  <span>APA 7th Referencing</span>
                </span>
                <span className="font-mono font-bold text-[#86B9C7]">100% Audit</span>
              </div>
              <div className="w-full h-1.5 bg-slate-800 rounded-full mt-1.5 overflow-hidden">
                <div className="h-full bg-[#0082A6] rounded-full w-[100%]" />
              </div>
            </div>

            {/* Metric 3: Empirical Rigor */}
            <div className="p-2 rounded-xl bg-[#134455]/70 border border-[#86B9C7]/20">
              <div className="flex justify-between items-center text-[10px]">
                <span className="text-slate-300 flex items-center gap-1">
                  <BarChart className="w-3 h-3 text-[#C4DEE3]" />
                  <span>SPSS/R Method Rigor</span>
                </span>
                <span className="font-mono font-bold text-[#C4DEE3]">Verified</span>
              </div>
              <div className="w-full h-1.5 bg-slate-800 rounded-full mt-1.5 overflow-hidden">
                <div className="h-full bg-[#86B9C7] rounded-full w-[94%]" />
              </div>
            </div>
          </div>
        </div>

        {/* Visual Tracked Changes Mini-Mockup */}
        <div className="p-3 rounded-2xl bg-[#061D26]/90 border border-[#86B9C7]/20 space-y-2">
          <div className="flex items-center justify-between text-[10px] text-slate-400 font-mono">
            <span className="flex items-center gap-1">
              <FileCheck className="w-3 h-3 text-[#86B9C7]" />
              <span className="text-[#C4DEE3]">manuscript_chapter2_v3.docx</span>
            </span>
            <span className="text-emerald-400">Tracked Edits Applied</span>
          </div>

          <div className="font-mono text-[10px] leading-relaxed p-2 rounded-lg bg-[#0B2D3A] border border-white/5 space-y-1">
            <div className="text-slate-300">
              "...the empirical sampling framework was <span className="line-through text-rose-400 bg-rose-950/40 px-1 rounded">haphazardly gathered</span> <span className="text-[#C4DEE3] bg-[#0082A6]/40 px-1 rounded font-semibold">stratified across 4 western UP districts</span> with G*Power verification (p &lt; 0.001)..."
            </div>
          </div>
        </div>

        {/* Bottom Floating Badges */}
        <div className="flex items-center justify-between pt-1 text-[10px] text-[#C4DEE3] font-medium border-t border-white/10">
          <span className="flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-[#86B9C7]" />
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
