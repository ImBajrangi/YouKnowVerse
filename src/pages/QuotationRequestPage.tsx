import React, { useState } from 'react';
import { CheckCircle2, Send, ShieldCheck } from 'lucide-react';
import { CacheStore } from '../lib/cacheStore';
import confetti from 'canvas-confetti';

export interface QuotationRequestPageProps {
  onOpenBooking?: () => void;
}

export const QuotationRequestPage: React.FC<QuotationRequestPageProps> = () => {
  const [serviceType, setServiceType] = useState('thesis-editing');
  const [wordCount, setWordCount] = useState<number>(45000);
  const [academicLevel, setAcademicLevel] = useState('PhD Research Scholar');
  const [urgency, setUrgency] = useState<'standard' | 'fast' | 'rush'>('standard');
  const [university, setUniversity] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const [submitted, setSubmitted] = useState(false);
  const [inquiryId, setInquiryId] = useState('');

  // Estimate calculation
  const calculateEstimate = () => {
    let base = 0;
    if (serviceType === 'thesis-editing') {
      base = wordCount * 1.40; // ₹1.40/word average
    } else if (serviceType === 'synopsis-review') {
      base = 5500;
    } else if (serviceType === 'topic-guidance') {
      base = 3500;
    } else if (serviceType === 'paper-support') {
      base = 6500;
    } else if (serviceType === 'publication-assistance') {
      base = 7500;
    } else if (serviceType === 'statistical-analysis') {
      base = 6000;
    }

    if (urgency === 'fast') base *= 1.2;
    if (urgency === 'rush') base *= 1.45;

    return Math.round(base);
  };

  const estimatedCost = calculateEstimate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !email.trim() || !phone.trim()) return;

    const newInq = CacheStore.addInquiry({
      full_name: fullName.trim(),
      email: email.trim(),
      phone: phone.trim(),
      academic_level: academicLevel as any,
      university: university.trim() || 'Indian University Scholar',
      research_field: serviceType,
      service_id: 'srv-thesis-editing',
      service_title: `Quotation Request: ${serviceType} (${urgency} timeline)`,
      project_description: `Estimated scope: ${serviceType}, Word count: ${wordCount}, Urgency: ${urgency}. Computed estimate: ₹${estimatedCost}.`,
      expected_deadline: urgency === 'rush' ? 'Rush (3-4 days)' : urgency === 'fast' ? 'Fast (5-7 days)' : 'Standard (10-14 days)',
      budget_range: `₹${estimatedCost}`,
    });

    try {
      confetti({ particleCount: 50, spread: 60, origin: { y: 0.6 } });
    } catch {
      // ignore
    }

    setInquiryId(newInq.inquiry_number);
    setSubmitted(true);
  };

  return (
    <div className="space-y-16 sm:space-y-24 pb-20 font-sans text-[#0B2D3A] select-none">
      
      {/* Editorial Hero Header */}
      <section className="pt-8 sm:pt-14 px-4 sm:px-8 max-w-5xl mx-auto text-center space-y-4">
        <span className="px-3.5 py-1 rounded-full bg-[#EBF5F8] text-[#0082A6] text-xs font-bold uppercase tracking-wider">
          TRANSPARENT SCOPE ESTIMATION
        </span>
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0B2D3A] leading-[1.1]">
          Instant Academic <br />
          <span className="font-serif italic font-normal text-[#2772A0]">Quotation Calculator</span>
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Configure your exact academic service, manuscript word count, and institutional deadline to view instant pricing guidelines.
        </p>
      </section>

      {/* Main Form & Calculator */}
      <section className="max-w-5xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Configuration Form (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#CCDDEA] shadow-subtle space-y-6">
              <h2 className="font-extrabold text-xl text-[#0B2D3A] border-b border-slate-100 pb-3">
                1. Project Parameters
              </h2>

              <div className="space-y-4 text-xs">
                <div>
                  <label className="block font-semibold text-[#0B2D3A] mb-1">Select Service *</label>
                  <select
                    value={serviceType}
                    onChange={e => setServiceType(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-2xl border border-[#CCDDEA] bg-[#F7F5ED]/40 focus:bg-white focus:border-[#0082A6] focus:outline-none transition-colors"
                  >
                    <option value="thesis-editing">Thesis Editing &amp; Formatting (Word Count Based)</option>
                    <option value="synopsis-review">Synopsis Review &amp; Pre-RDC Defense</option>
                    <option value="topic-guidance">Research Topic Formulation &amp; Gap Analysis</option>
                    <option value="paper-support">Research Paper Structuring &amp; Scopus Readiness</option>
                    <option value="publication-assistance">Legitimate Journal Publication Guidance</option>
                    <option value="statistical-analysis">Statistical Analysis &amp; SPSS / R Modeling</option>
                  </select>
                </div>

                {serviceType === 'thesis-editing' && (
                  <div className="bg-[#F7F5ED] p-4 rounded-2xl border border-slate-200/80 space-y-2">
                    <label className="block font-semibold text-[#0B2D3A] flex justify-between">
                      <span>Approximate Word Count *</span>
                      <span className="font-mono text-[#0082A6] font-bold">{wordCount.toLocaleString()} words</span>
                    </label>
                    <input
                      type="range"
                      min={5000}
                      max={120000}
                      step={5000}
                      value={wordCount}
                      onChange={e => setWordCount(parseInt(e.target.value))}
                      className="w-full accent-[#0082A6] cursor-pointer"
                    />
                    <div className="flex justify-between text-[10px] text-slate-400">
                      <span>5,000 words (Chapter)</span>
                      <span>45,000 words (Standard)</span>
                      <span>1,20,000 words (Mega)</span>
                    </div>
                  </div>
                )}

                <div>
                  <label className="block font-semibold text-[#0B2D3A] mb-1">Scholar Academic Level *</label>
                  <select
                    value={academicLevel}
                    onChange={e => setAcademicLevel(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-2xl border border-[#CCDDEA] bg-[#F7F5ED]/40 focus:bg-white focus:border-[#0082A6] focus:outline-none transition-colors"
                  >
                    <option value="PhD Research Scholar">PhD Research Scholar</option>
                    <option value="Post-Doctoral Fellow">Post-Doctoral Fellow</option>
                    <option value="Master's Scholar">Master's / M.Phil Scholar</option>
                    <option value="University Faculty">University Faculty / Assistant Professor</option>
                  </select>
                </div>

                <div>
                  <label className="block font-semibold text-[#0B2D3A] mb-1">Target Turnaround Urgency</label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: 'standard', label: 'Standard', desc: '10-14 days' },
                      { id: 'fast', label: 'Priority (+20%)', desc: '5-7 days' },
                      { id: 'rush', label: 'Express (+45%)', desc: '3-4 days' }
                    ].map(u => (
                      <button
                        type="button"
                        key={u.id}
                        onClick={() => setUrgency(u.id as any)}
                        className={`p-3 rounded-2xl border text-center transition-all ${
                          urgency === u.id
                            ? 'border-[#0082A6] bg-[#EBF5F8] text-[#0082A6] font-bold shadow-2xs'
                            : 'border-slate-200 bg-[#F7F5ED]/50 text-slate-700 hover:bg-[#EBF5F8]'
                        }`}
                      >
                        <div className="text-xs font-semibold">{u.label}</div>
                        <div className="text-[10px] text-slate-400 mt-0.5">{u.desc}</div>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block font-semibold text-[#0B2D3A] mb-1">University / Institute</label>
                  <input
                    type="text"
                    value={university}
                    onChange={e => setUniversity(e.target.value)}
                    placeholder="e.g. GLA University Mathura, AMU, DU, DEI Agra"
                    className="w-full px-3.5 py-2.5 rounded-2xl border border-[#CCDDEA] bg-[#F7F5ED]/40 focus:bg-white focus:border-[#0082A6] focus:outline-none transition-colors"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right: Live Quote Summary & Submission (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#CCDDEA] shadow-premium space-y-6">
              <h2 className="font-extrabold text-xl text-[#0B2D3A] border-b border-slate-100 pb-3">
                2. Live Quotation Summary
              </h2>

              <div className="bg-[#EBF5F8] p-5 rounded-2xl border border-[#C4DEE3] text-center space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">
                  Estimated Transparent Cost
                </span>
                <div className="text-4xl font-black text-[#0B2D3A]">
                  ₹{estimatedCost.toLocaleString('en-IN')}
                </div>
                <p className="text-[11px] text-slate-500">
                  Inclusive of editorial review, DRC formatting, and 14-day revision guarantee.
                </p>
              </div>

              {submitted ? (
                <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-2">
                  <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto" />
                  <h4 className="font-bold text-sm text-emerald-900">Quotation Locked &amp; Submitted!</h4>
                  <p className="text-xs text-emerald-800">
                    Your unique Tracking ID is: <strong className="font-mono">{inquiryId}</strong>
                  </p>
                  <p className="text-[11px] text-slate-600">
                    A copy has been routed to our academic team in Mathura.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3 text-xs">
                  <div>
                    <label className="block font-semibold text-[#0B2D3A] mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={e => setFullName(e.target.value)}
                      placeholder="Dr. / Scholar Name"
                      className="w-full px-3.5 py-2.5 rounded-2xl border border-[#CCDDEA] bg-[#F7F5ED]/40 focus:bg-white focus:border-[#0082A6] focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-[#0B2D3A] mb-1">WhatsApp / Phone *</label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={e => setPhone(e.target.value)}
                      placeholder="+91 97604 98896"
                      className="w-full px-3.5 py-2.5 rounded-2xl border border-[#CCDDEA] bg-[#F7F5ED]/40 focus:bg-white focus:border-[#0082A6] focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-[#0B2D3A] mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      placeholder="scholar@university.edu.in"
                      className="w-full px-3.5 py-2.5 rounded-2xl border border-[#CCDDEA] bg-[#F7F5ED]/40 focus:bg-white focus:border-[#0082A6] focus:outline-none transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-full bg-[#0082A6] hover:bg-[#006F8E] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-subtle transition-colors mt-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Lock &amp; Submit Estimate</span>
                  </button>
                </form>
              )}

              <div className="pt-3 border-t border-slate-100 flex items-center gap-2 text-[11px] text-slate-500">
                <ShieldCheck className="w-4 h-4 text-[#0082A6] shrink-0" />
                <span>Zero advance commitment required until scope agreement.</span>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
