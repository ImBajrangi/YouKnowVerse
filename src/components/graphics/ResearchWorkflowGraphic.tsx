import React from 'react';
import { Compass, FileCheck, BookOpen, Award, CheckCircle2, ArrowRight } from 'lucide-react';

export const ResearchWorkflowGraphic: React.FC = () => {
  const stages = [
    {
      step: '01',
      title: 'Topic & Gap Scoping',
      sub: 'Literature Feasibility',
      deliverable: '5 Viable Titles + Research Gap Dossier',
      icon: <Compass className="w-5 h-5 text-[#0082A6]" />,
    },
    {
      step: '02',
      title: 'Synopsis & DRC Defense',
      sub: 'Proposal Rigor',
      deliverable: 'Methodology & Sampling Verification',
      icon: <FileCheck className="w-5 h-5 text-[#0082A6]" />,
    },
    {
      step: '03',
      title: 'Thesis Line-Editing',
      sub: 'Substantive Polish',
      deliverable: 'Tracked Edits + APA 7th Standardized',
      icon: <BookOpen className="w-5 h-5 text-[#0082A6]" />,
    },
    {
      step: '04',
      title: 'Indexed Publication',
      sub: 'Peer-Review Readiness',
      deliverable: 'UGC-CARE / Scopus Submission Dossier',
      icon: <Award className="w-5 h-5 text-[#0082A6]" />,
    }
  ];

  return (
    <div className="w-full select-none font-sans">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative">
        {stages.map((stage, idx) => (
          <div
            key={stage.step}
            className="relative bg-white rounded-3xl border border-slate-200 p-4 sm:p-5 shadow-xs flex flex-col justify-between space-y-4 hover:border-[#0082A6] transition-colors"
          >
            {/* Top Node Header */}
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-xl bg-[#EBF5F8] border border-[#C4DEE3] flex items-center justify-center shadow-xs shrink-0">
                {stage.icon}
              </div>
              <span className="font-mono font-bold text-xs text-[#0082A6]">
                Step {stage.step}
              </span>
            </div>

            {/* Title & Sub */}
            <div className="space-y-1">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-[#0082A6]">
                {stage.sub}
              </span>
              <h3 className="font-bold text-base text-[#0F172A]">
                {stage.title}
              </h3>
            </div>

            {/* Deliverable Pill: Concentric Inner 8px */}
            <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/90 space-y-1">
              <div className="text-[10px] font-semibold text-slate-500 uppercase tracking-wide">
                Key Output Deliverable
              </div>
              <div className="text-xs font-medium text-slate-800 flex items-center gap-1.5 leading-snug">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>{stage.deliverable}</span>
              </div>
            </div>

            {/* Connector arrow on desktop */}
            {idx < stages.length - 1 && (
              <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 p-1 rounded-full bg-white border border-slate-300 shadow-xs text-slate-400">
                <ArrowRight className="w-3 h-3" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
