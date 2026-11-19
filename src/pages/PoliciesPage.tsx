import React, { useState } from 'react';
import { ShieldCheck, Lock, FileText, AlertCircle } from 'lucide-react';

export interface PoliciesPageProps {
  initialTab?: 'integrity' | 'privacy' | 'terms' | 'refund';
}

export const PoliciesPage: React.FC<PoliciesPageProps> = ({ initialTab = 'integrity' }) => {
  const [activeTab, setActiveTab] = useState<'integrity' | 'privacy' | 'terms' | 'refund'>(initialTab);

  return (
    <div className="space-y-16 sm:space-y-24 pb-20 font-sans text-[#0B2D3A] select-none">
      
      {/* Editorial Minimalist Hero Header */}
      <section className="pt-8 sm:pt-14 px-4 sm:px-8 max-w-5xl mx-auto text-center space-y-4">
        <span className="px-3.5 py-1 rounded-full bg-[#EBF5F8] text-[#0082A6] text-xs font-bold uppercase tracking-wider">
          GOVERNANCE &amp; LEGAL STANDARDS
        </span>
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0B2D3A] leading-[1.1]">
          Policies &amp; Academic <br />
          <span className="font-serif italic font-normal text-[#2772A0]">Integrity Standards</span>
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto leading-relaxed">
          YouKnowVerse upholds the highest standards of research ethics, document confidentiality, and transparent institutional accountability.
        </p>
      </section>

      {/* Navigation Tabs */}
      <section className="max-w-4xl mx-auto px-4 sm:px-8">
        <div className="flex items-center justify-center gap-2 border-b border-[#CCDDEA] pb-3 text-xs font-semibold overflow-x-auto">
          {[
            { id: 'integrity', label: 'Academic Integrity Policy', icon: <ShieldCheck className="w-4 h-4" /> },
            { id: 'privacy', label: 'Privacy & NDA Policy', icon: <Lock className="w-4 h-4" /> },
            { id: 'terms', label: 'Terms & Conditions', icon: <FileText className="w-4 h-4" /> },
            { id: 'refund', label: 'Refund & Cancellation', icon: <AlertCircle className="w-4 h-4" /> },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full transition-colors whitespace-nowrap ${
                activeTab === tab.id
                  ? 'bg-[#0082A6] text-white shadow-2xs'
                  : 'text-slate-600 hover:text-[#0082A6] hover:bg-[#EBF5F8]'
              }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Tab 1: Academic Integrity Policy */}
        {activeTab === 'integrity' && (
          <div className="mt-8">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#CCDDEA] shadow-subtle space-y-6 text-xs sm:text-sm text-slate-700 leading-relaxed">
              <div className="border-b border-slate-100 pb-4">
                <span className="px-3 py-1 rounded-full bg-[#EBF5F8] text-[#0082A6] text-xs font-bold uppercase tracking-wider inline-block">
                  MANDATORY ETHICS CODE
                </span>
                <h2 className="text-2xl font-extrabold text-[#0B2D3A] mt-2">
                  Academic Integrity &amp; Ethics Protocol
                </h2>
                <p className="text-xs text-slate-500 mt-1">Effective Date: January 1, 2026 • Governs all consulting agreements</p>
              </div>

              <div className="space-y-4">
                <h3 className="font-extrabold text-base text-[#0B2D3A]">1. Purpose &amp; Core Philosophy</h3>
                <p>
                  YouKnowVerse operates as an educational, methodological, and editorial consultancy. Our core purpose is to guide researchers in acquiring mastery over scholarly inquiry, literature synthesis, and formal academic expression. We strictly adhere to University Grants Commission (UGC) guidelines and the Committee on Publication Ethics (COPE) Code of Conduct.
                </p>

                <h3 className="font-extrabold text-base text-[#0B2D3A]">2. Explicit Prohibitions</h3>
                <div className="space-y-2 p-4 rounded-2xl bg-rose-50/60 border border-rose-200 text-rose-900 text-xs">
                  <div><strong>1. No Contract Cheating or Ghostwriting:</strong> YouKnowVerse will never write theses, dissertations, synopsis proposals, or research articles on behalf of a client. Clients must produce their own text; our experts provide critique, developmental editing, grammatical refinement, and structural advice.</div>
                  <div><strong>2. Zero Data Fabrication:</strong> We will never generate fabricated empirical datasets, synthesize fake respondents, or alter statistical test outcomes to falsely support an unproven hypothesis.</div>
                  <div><strong>3. No Publication Guarantees:</strong> We never guarantee acceptance in any indexed journal. Any third-party service promising "guaranteed publication" is engaging in predatory misconduct.</div>
                </div>

                <h3 className="font-extrabold text-base text-[#0B2D3A]">3. Permitted Academic Guidance</h3>
                <ul className="space-y-1.5 list-disc pl-5">
                  <li>Detailed substantive developmental editing and line-by-line grammar refinement.</li>
                  <li>Structural review of doctoral synopses according to university research committee guidelines.</li>
                  <li>Statistical methodology consultation, power analysis for sample sizing, and model specification in SPSS, AMOS, SmartPLS, and R.</li>
                  <li>Identification of verified UGC-CARE, Scopus, and Web of Science indexed journals conforming to manuscript scope.</li>
                  <li>Guidance on drafting respectful, point-by-point responses to peer reviewer critiques.</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Privacy Policy */}
        {activeTab === 'privacy' && (
          <div className="mt-8">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#CCDDEA] shadow-subtle space-y-6 text-xs sm:text-sm text-slate-700 leading-relaxed">
              <div className="border-b border-slate-100 pb-4">
                <span className="px-3 py-1 rounded-full bg-[#EBF5F8] text-[#0082A6] text-xs font-bold uppercase tracking-wider inline-block">
                  CONFIDENTIALITY GUARANTEE
                </span>
                <h2 className="text-2xl font-extrabold text-[#0B2D3A] mt-2">
                  Client Privacy &amp; Non-Disclosure (NDA) Policy
                </h2>
                <p className="text-xs text-slate-500 mt-1">Safeguarding intellectual property of Indian and international scholars</p>
              </div>

              <div className="space-y-4">
                <h3 className="font-extrabold text-base text-[#0B2D3A]">1. Data Ownership &amp; Intellectual Property</h3>
                <p>
                  All manuscripts, research proposals, survey datasets, formulas, and intellectual outputs uploaded to or generated during consultation with YouKnowVerse remain the exclusive, 100% owned intellectual property of the client. YouKnowVerse asserts zero claim or copyright over any scholarly output.
                </p>

                <h3 className="font-extrabold text-base text-[#0B2D3A]">2. Document Handling &amp; Storage Security</h3>
                <p>
                  Files are transferred via encrypted connections (TLS 1.3) and stored in isolated client workspaces. We do not index your manuscripts in public databases or commercial plagiarism repositories like Turnitin, ensuring your preliminary findings are never exposed or flagged prior to formal institutional submission.
                </p>

                <h3 className="font-extrabold text-base text-[#0B2D3A]">3. Mutual Non-Disclosure Agreement (NDA)</h3>
                <p>
                  Upon request, YouKnowVerse issues a formal bilateral Non-Disclosure Agreement signed by our Mathura directorate prior to the transmission of any unreleased dataset, patent disclosure, or unpublished manuscript.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Terms & Conditions */}
        {activeTab === 'terms' && (
          <div className="mt-8">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#CCDDEA] shadow-subtle space-y-6 text-xs sm:text-sm text-slate-700 leading-relaxed">
              <div className="border-b border-slate-100 pb-4">
                <span className="px-3 py-1 rounded-full bg-[#EBF5F8] text-[#0082A6] text-xs font-bold uppercase tracking-wider inline-block">
                  TERMS OF ENGAGEMENT
                </span>
                <h2 className="text-2xl font-extrabold text-[#0B2D3A] mt-2">
                  Client Terms &amp; Conditions
                </h2>
                <p className="text-xs text-slate-500 mt-1">Contractual parameters governing academic advisory deliverables</p>
              </div>

              <div className="space-y-4">
                <h3 className="font-extrabold text-base text-[#0B2D3A]">1. Scope of Engagement</h3>
                <p>
                  Each consulting engagement is governed by an agreed-upon Scope Document generated upon quote confirmation. Deliverables include editorial markup, formatting verification against university rubrics, and methodological advisory notes.
                </p>

                <h3 className="font-extrabold text-base text-[#0B2D3A]">2. Revisions &amp; Clarifications</h3>
                <p>
                  All completed milestone deliveries include 14 calendar days of post-delivery clarification and revision aligned with the original project scope. Additional modifications beyond the original brief will be quoted transparently.
                </p>

                <h3 className="font-extrabold text-base text-[#0B2D3A]">3. Payment Milestones</h3>
                <p>
                  Payments are processed in Indian Rupees (₹) via authorized payment gateways (UPI, Net Banking, Credit/Debit Cards). For multi-chapter dissertations, milestone payment stages are established to align with chapter deliverables.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Tab 4: Refund Policy */}
        {activeTab === 'refund' && (
          <div className="mt-8">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#CCDDEA] shadow-subtle space-y-6 text-xs sm:text-sm text-slate-700 leading-relaxed">
              <div className="border-b border-slate-100 pb-4">
                <span className="px-3 py-1 rounded-full bg-[#EBF5F8] text-[#0082A6] text-xs font-bold uppercase tracking-wider inline-block">
                  FINANCIAL TRANSPARENCY
                </span>
                <h2 className="text-2xl font-extrabold text-[#0B2D3A] mt-2">
                  Refund &amp; Cancellation Policy
                </h2>
                <p className="text-xs text-slate-500 mt-1">Fair, equitable resolution guidelines for research scholars</p>
              </div>

              <div className="space-y-4">
                <h3 className="font-extrabold text-base text-[#0B2D3A]">1. Cancellation Prior to Work Commencement</h3>
                <p>
                  If a consultation or editorial agreement is cancelled within 24 hours of booking and prior to the assignment of subject mentors, a 100% full refund is issued immediately.
                </p>

                <h3 className="font-extrabold text-base text-[#0B2D3A]">2. Quality Guarantee &amp; Remediation</h3>
                <p>
                  If a deliverable fails to conform to the formatting guidelines specified in the agreed Scope Document, our senior editorial board will re-execute the deliverable at zero additional cost within 5 working days. If issues persist, a prorated refund for that milestone will be issued.
                </p>
              </div>
            </div>
          </div>
        )}

      </section>

    </div>
  );
};
