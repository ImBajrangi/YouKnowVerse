import { useState } from 'react';
import { ShieldCheck, Lock, FileText, AlertCircle } from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';

export interface PoliciesPageProps {
  initialTab?: 'integrity' | 'privacy' | 'terms' | 'refund';
}

export const PoliciesPage: React.FC<PoliciesPageProps> = ({ initialTab = 'integrity' }) => {
  const [activeTab, setActiveTab] = useState<'integrity' | 'privacy' | 'terms' | 'refund'>(initialTab);

  return (
    <div className="space-y-12 pb-16 font-sans">
      {/* Header */}
      <section className="bg-[#0B2D3A] text-white py-14 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto space-y-4 text-center">
          <Badge variant="gold">Governance & Legal Standards</Badge>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white">
            Policies & Academic Integrity Standards
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
            AcademicPro India upholds the highest standards of research ethics, document confidentiality, and transparent institutional accountability.
          </p>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="max-w-4xl mx-auto px-4 sm:px-8">
        <div className="flex items-center justify-center gap-2 border-b border-slate-200 pb-2 text-xs font-semibold overflow-x-auto">
          {[
            { id: 'integrity', label: 'Academic Integrity Policy', icon: <ShieldCheck className="w-4 h-4" /> },
            { id: 'privacy', label: 'Privacy & NDA Policy', icon: <Lock className="w-4 h-4" /> },
            { id: 'terms', label: 'Terms & Conditions', icon: <FileText className="w-4 h-4" /> },
            { id: 'refund', label: 'Refund & Cancellation', icon: <AlertCircle className="w-4 h-4" /> },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl transition-colors whitespace-nowrap ${
                activeTab === tab.id
                  ? 'bg-[#0B2D3A] text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
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
            <Card padding="lg" className="bg-white border border-slate-200 space-y-6 text-xs sm:text-sm text-slate-700 leading-relaxed">
              <div className="border-b border-slate-100 pb-4">
                <Badge variant="navy">Mandatory Ethics Code</Badge>
                <h2 className="font-serif text-2xl font-bold text-[#0B2D3A] mt-2">
                  Academic Integrity & Ethics Protocol
                </h2>
                <p className="text-xs text-slate-500 mt-1">Effective Date: January 1, 2026 • Governs all consulting agreements</p>
              </div>

              <div className="space-y-4">
                <h3 className="font-serif font-bold text-base text-[#0B2D3A]">1. Purpose & Core Philosophy</h3>
                <p>
                  AcademicPro India operates as an educational, methodological, and editorial consultancy. Our core purpose is to guide researchers in acquiring mastery over scholarly inquiry, literature synthesis, and formal academic expression. We strictly adhere to University Grants Commission (UGC) guidelines and the Committee on Publication Ethics (COPE) Code of Conduct.
                </p>

                <h3 className="font-serif font-bold text-base text-[#0B2D3A]">2. Explicit Prohibitions</h3>
                <div className="space-y-2 p-4 rounded-2xl bg-rose-50/60 border border-rose-200 text-rose-900 text-xs">
                  <div><strong>1. No Contract Cheating or Ghostwriting:</strong> AcademicPro India will never write theses, dissertations, synopsis proposals, or research articles on behalf of a client. Clients must produce their own text; our experts provide critique, developmental editing, grammatical refinement, and structural advice.</div>
                  <div><strong>2. Zero Data Fabrication:</strong> We will never generate fabricated empirical datasets, synthesize fake respondents, or alter statistical test outcomes to falsely support an unproven hypothesis.</div>
                  <div><strong>3. No Publication Guarantees:</strong> We never guarantee acceptance in any indexed journal. Any third-party service promising "guaranteed publication" is engaging in predatory misconduct.</div>
                </div>

                <h3 className="font-serif font-bold text-base text-[#0B2D3A]">3. Permitted Academic Guidance</h3>
                <ul className="space-y-1.5 list-disc pl-5">
                  <li>Detailed substantive developmental editing and line-by-line grammar refinement.</li>
                  <li>Structural review of doctoral synopses according to university research committee guidelines.</li>
                  <li>Statistical methodology consultation, power analysis for sample sizing, and model specification in SPSS, AMOS, SmartPLS, and R.</li>
                  <li>Identification of verified UGC-CARE, Scopus, and Web of Science indexed journals conforming to manuscript scope.</li>
                  <li>Guidance on drafting respectful, point-by-point responses to peer reviewer critiques.</li>
                </ul>
              </div>
            </Card>
          </div>
        )}

        {/* Tab 2: Privacy Policy */}
        {activeTab === 'privacy' && (
          <div className="mt-8">
            <Card padding="lg" className="bg-white border border-slate-200 space-y-6 text-xs sm:text-sm text-slate-700 leading-relaxed">
              <div className="border-b border-slate-100 pb-4">
                <Badge variant="navy">Confidentiality Guarantee</Badge>
                <h2 className="font-serif text-2xl font-bold text-[#0B2D3A] mt-2">
                  Client Privacy & Non-Disclosure (NDA) Policy
                </h2>
                <p className="text-xs text-slate-500 mt-1">Safeguarding intellectual property of Indian and international scholars</p>
              </div>

              <div className="space-y-4">
                <h3 className="font-serif font-bold text-base text-[#0B2D3A]">1. Ownership of Research Data</h3>
                <p>
                  All unpublished research manuscripts, draft synopses, survey findings, datasets, figures, and research ideas provided by clients remain the 100% exclusive intellectual property of the author/researcher. AcademicPro India acquires zero intellectual property rights over any client document.
                </p>

                <h3 className="font-serif font-bold text-base text-[#0B2D3A]">2. Document Vault Security</h3>
                <p>
                  All files uploaded through our platform are stored in private, access-controlled vaults. Documents are never exposed to search engines, public directories, or third-party artificial intelligence training models.
                </p>

                <h3 className="font-serif font-bold text-base text-[#0B2D3A]">3. Mutual Non-Disclosure Agreement (NDA)</h3>
                <p>
                  Before commencing any major thesis or empirical manuscript review, AcademicPro India executes a formal mutual Non-Disclosure Agreement upon request, binding all assigned editors and consultants to strict confidentiality.
                </p>
              </div>
            </Card>
          </div>
        )}

        {/* Tab 3: Terms & Conditions */}
        {activeTab === 'terms' && (
          <div className="mt-8">
            <Card padding="lg" className="bg-white border border-slate-200 space-y-6 text-xs sm:text-sm text-slate-700 leading-relaxed">
              <div className="border-b border-slate-100 pb-4">
                <Badge variant="navy">Service Agreement</Badge>
                <h2 className="font-serif text-2xl font-bold text-[#0B2D3A] mt-2">
                  Terms and Conditions of Engagement
                </h2>
              </div>

              <div className="space-y-4">
                <h3 className="font-serif font-bold text-base text-[#0B2D3A]">1. Quotation & Milestone Validity</h3>
                <p>
                  Quotations issued by AcademicPro India are valid for 14 calendar days from the date of generation. Project timelines commence strictly upon receipt of required milestone payments and all prerequisite institutional guidelines.
                </p>

                <h3 className="font-serif font-bold text-base text-[#0B2D3A]">2. Client Cooperation & Institutional Verification</h3>
                <p>
                  Clients are responsible for verifying that editorial recommendations conform to their specific university department’s style guide. AcademicPro India provides advice based on accepted academic standards (APA, IEEE, Chicago, MLA, Vancouver).
                </p>

                <h3 className="font-serif font-bold text-base text-[#0B2D3A]">3. Post-Delivery Clarification Window</h3>
                <p>
                  Every completed project includes a 14-day review window. During this period, clients may request up to two rounds of editorial clarification or adjustment without additional fee.
                </p>
              </div>
            </Card>
          </div>
        )}

        {/* Tab 4: Refund Policy */}
        {activeTab === 'refund' && (
          <div className="mt-8">
            <Card padding="lg" className="bg-white border border-slate-200 space-y-6 text-xs sm:text-sm text-slate-700 leading-relaxed">
              <div className="border-b border-slate-100 pb-4">
                <Badge variant="navy">Financial Protection</Badge>
                <h2 className="font-serif text-2xl font-bold text-[#0B2D3A] mt-2">
                  Refund & Cancellation Policy
                </h2>
              </div>

              <div className="space-y-4">
                <h3 className="font-serif font-bold text-base text-[#0B2D3A]">1. Cancellation Prior to Work Commencement</h3>
                <p>
                  If a project is cancelled in writing within 24 hours of advance payment and prior to work allocation to a senior editor, a 100% full refund (less payment gateway transaction fees) will be processed within 5-7 business days.
                </p>

                <h3 className="font-serif font-bold text-base text-[#0B2D3A]">2. Milestone Pro-Rata Settlements</h3>
                <p>
                  Because academic research review involves dedicated subject specialist hours, completed milestones are non-refundable. If a project is discontinued mid-way, settlement is strictly pro-rated against delivered milestone stages.
                </p>
              </div>
            </Card>
          </div>
        )}
      </section>
    </div>
  );
};
