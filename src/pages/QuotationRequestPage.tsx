import { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
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
    <div className="space-y-12 pb-16 font-sans">
      {/* Header */}
      <section className="bg-[#0B2D3A] text-white py-14 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto space-y-4 text-center">
          <Badge variant="gold">Transparent Scope Estimation</Badge>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white">
            Instant Academic Quotation Calculator
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Configure your exact academic service, manuscript word count, and institutional deadline to view instant pricing guidelines.
          </p>
        </div>
      </section>

      {/* Main Form & Calculator */}
      <section className="max-w-5xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Configuration Form (7 Cols) */}
          <div className="lg:col-span-7">
            <Card padding="lg" className="bg-white border border-slate-200 space-y-6">
              <h2 className="font-serif font-bold text-lg sm:text-xl text-[#0B2D3A] border-b border-slate-100 pb-3">
                1. Project Parameters
              </h2>

              <div className="space-y-4 text-xs">
                <div>
                  <label className="block font-semibold text-[#0B2D3A] mb-1">Select Service *</label>
                  <select
                    value={serviceType}
                    onChange={e => setServiceType(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs bg-slate-50/50"
                  >
                    <option value="thesis-editing">Thesis Editing & Formatting (Word Count Based)</option>
                    <option value="synopsis-review">Synopsis Review & Pre-RDC Defense</option>
                    <option value="topic-guidance">Research Topic Formulation & Gap Analysis</option>
                    <option value="paper-support">Research Paper Structuring & Scopus Readiness</option>
                    <option value="publication-assistance">Legitimate Journal Publication Guidance</option>
                    <option value="statistical-analysis">Statistical Analysis & SPSS / R Modeling</option>
                  </select>
                </div>

                {serviceType === 'thesis-editing' && (
                  <div>
                    <label className="block font-semibold text-[#0B2D3A] mb-1 flex justify-between">
                      <span>Approximate Word Count *</span>
                      <span className="font-mono text-[#0082A6] font-bold">{wordCount.toLocaleString()} words</span>
                    </label>
                    <input
                      type="range"
                      min={5000}
                      max={120000}
                      step={5000}
                      value={wordCount}
                      onChange={e => setWordCount(Number(e.target.value))}
                      className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#0B2D3A]"
                    />
                    <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                      <span>5,000 words (Chapter)</span>
                      <span>50,000 words (Master's)</span>
                      <span>100,000+ words (PhD)</span>
                    </div>
                  </div>
                )}

                <div>
                  <label className="block font-semibold text-[#0B2D3A] mb-1">Academic Level *</label>
                  <select
                    value={academicLevel}
                    onChange={e => setAcademicLevel(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs bg-slate-50/50"
                  >
                    <option value="PhD Research Scholar">PhD Research Scholar</option>
                    <option value="Postgraduate / Master's (PG)">Postgraduate / Master's (PG)</option>
                    <option value="Undergraduate (UG)">Undergraduate (UG)</option>
                    <option value="Faculty / Professor">Faculty / Professor</option>
                    <option value="Independent Researcher">Independent Researcher</option>
                  </select>
                </div>

                <div>
                  <label className="block font-semibold text-[#0B2D3A] mb-1">Timeline & Urgency *</label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: 'standard', label: 'Standard', sub: '10-14 days' },
                      { id: 'fast', label: 'Fast Track', sub: '5-7 days' },
                      { id: 'rush', label: 'Urgent Rush', sub: '3-4 days' },
                    ].map(u => (
                      <button
                        type="button"
                        key={u.id}
                        onClick={() => setUrgency(u.id as any)}
                        className={`p-2.5 rounded-xl border text-center transition-colors text-xs ${
                          urgency === u.id
                            ? 'border-[#0B2D3A] bg-[#0B2D3A] text-white'
                            : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                        }`}
                      >
                        <div className="font-bold">{u.label}</div>
                        <div className="text-[10px] opacity-80">{u.sub}</div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Right: Estimate Display & Submit Form (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <Card padding="lg" className="bg-[#0B2D3A] text-white space-y-5 border border-[#134455] shadow-premium">
              <div className="space-y-1">
                <span className="text-[11px] font-semibold text-[#0082A6] uppercase tracking-wider">Estimated Project Investment</span>
                <div className="font-serif text-3xl sm:text-4xl font-extrabold text-white">
                  ₹{estimatedCost.toLocaleString()}*
                </div>
                <p className="text-[11px] text-slate-300">
                  *Indicative scope estimate. Final quote confirmed after sample review.
                </p>
              </div>

              {submitted ? (
                <div className="p-4 rounded-2xl bg-emerald-950/70 border border-emerald-500/30 text-center space-y-2">
                  <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto" />
                  <div className="font-serif font-bold text-base text-white">Official Quote Logged!</div>
                  <div className="font-mono text-xs text-amber-300">{inquiryId}</div>
                  <p className="text-xs text-slate-300">
                    A formal PDF proposal and milestone schedule will be transmitted to your email within 4 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3 pt-2 text-xs">
                  <div>
                    <label className="block text-slate-300 font-semibold mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={e => setFullName(e.target.value)}
                      placeholder="e.g. Meenakshi Sunderam"
                      className="w-full px-3 py-2 rounded-xl bg-white/10 border border-white/20 text-white placeholder-slate-400 text-xs focus:outline-none focus:ring-1 focus:ring-[#0082A6]"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 font-semibold mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      placeholder="e.g. meenakshi@du.ac.in"
                      className="w-full px-3 py-2 rounded-xl bg-white/10 border border-white/20 text-white placeholder-slate-400 text-xs focus:outline-none focus:ring-1 focus:ring-[#0082A6]"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 font-semibold mb-1">Phone / WhatsApp *</label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={e => setPhone(e.target.value)}
                      placeholder="+91 9760498896"
                      className="w-full px-3 py-2 rounded-xl bg-white/10 border border-white/20 text-white placeholder-slate-400 text-xs focus:outline-none focus:ring-1 focus:ring-[#0082A6]"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 font-semibold mb-1">University / Department</label>
                    <input
                      type="text"
                      value={university}
                      onChange={e => setUniversity(e.target.value)}
                      placeholder="e.g. Banaras Hindu University (BHU)"
                      className="w-full px-3 py-2 rounded-xl bg-white/10 border border-white/20 text-white placeholder-slate-400 text-xs focus:outline-none focus:ring-1 focus:ring-[#0082A6]"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="gold"
                    fullWidth
                    className="text-xs font-bold py-2.5 mt-2"
                  >
                    Lock Estimate & Receive Quotation
                  </Button>
                </form>
              )}
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};
