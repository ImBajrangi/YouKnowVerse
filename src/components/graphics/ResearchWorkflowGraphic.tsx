import React from 'react';
import { Compass, FileCheck, BookOpen, Award, CheckCircle2, ArrowRight } from 'lucide-react';

export const ResearchWorkflowGraphic: React.FC = () => {
  const stages = [
    {
      step: '01',
      title: 'Topic & Gap Scoping',
      sub: 'Literature Scoping',
      deliverable: '5 Viable Titles + Gaps Dossier',
      icon: <Compass className="w-5 h-5 text-[#86B9C7]" />,
      badge: 'Step 1'
    },
    {
      step: '02',
      title: 'Synopsis & DRC Defense',
      sub: 'Proposal Rigor',
      deliverable: 'Methodology & Sampling Plan',
      icon: <FileCheck className="w-5 h-5 text-[#86B9C7]" />,
      badge: 'Step 2'
    },
    {
      step: '03',
      title: 'Thesis & Chapter Polish',
      sub: 'Substantive Edit',
      deliverable: 'Tracked Edits + APA Audit',
      icon: <BookOpen className="w-5 h-5 text-[#86B9C7]" />,
      badge: 'Step 3'
    },
    {
      step: '04',
      title: 'Indexed Publication',
      sub: 'Peer-Review Readiness',
      deliverable: 'UGC-CARE / Scopus Submission',
      icon: <Award className="w-5 h-5 text-[#86B9C7]" />,
      badge: 'Step 4'
    }
  ];

  return (
    <div className="w-full select-none">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative">
        {stages.map((stage, idx) => (
          <div
            key={stage.step}
            className="relative bg-white rounded-3xl border border-[#D6E6EB] p-5 shadow-subtle flex flex-col justify-between space-y-4 hover:border-[#86B9C7] transition-colors"
          >
            {/* Top Node Header */}
            <div className="flex items-center justify-between">
              <div className="w-11 h-11 rounded-2xl bg-[#0B2D3A] border border-[#134455] flex items-center justify-center shadow-md shrink-0">
                {stage.icon}
              </div>
              <span className="font-mono font-bold text-xs text-[#86B9C7]">
                {stage.step}
              </span>
            </div>

            {/* Title & Micro description */}
            <div className="space-y-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#0082A6]">
                {stage.sub}
              </span>
              <h3 className="font-serif font-bold text-base text-[#0B2D3A]">
                {stage.title}
              </h3>
            </div>

            {/* Deliverable Pill: Concentric Inner 8px */}
            <div className="p-2.5 rounded-xl bg-[#C4DEE3]/25 border border-[#86B9C7]/40 space-y-1">
              <div className="text-[9px] font-bold text-[#3D6170] uppercase tracking-wide">
                Key Output
              </div>
              <div className="text-[11px] font-semibold text-[#0B2D3A] flex items-center gap-1.5 leading-snug">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#0082A6] shrink-0" />
                <span>{stage.deliverable}</span>
              </div>
            </div>

            {/* Connector arrow on desktop */}
            {idx < stages.length - 1 && (
              <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 p-1 rounded-full bg-white border border-[#86B9C7]/60 shadow-xs text-[#0082A6]">
                <ArrowRight className="w-3 h-3" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
