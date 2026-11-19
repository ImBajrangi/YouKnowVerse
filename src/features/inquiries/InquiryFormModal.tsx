import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Send, 
  UploadCloud, 
  MessageCircle, 
  Sparkles,
  AlertCircle
} from 'lucide-react';
import { Modal } from '../../components/ui/Modal';
import { Button } from '../../components/ui/Button';
import { CacheStore } from '../../lib/cacheStore';
import { AcademicLevel, Inquiry } from '../../types';
import confetti from 'canvas-confetti';

export interface InquiryFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedServiceId?: string;
}

export const InquiryFormModal: React.FC<InquiryFormModalProps> = ({
  isOpen,
  onClose,
  preselectedServiceId,
}) => {
  const services = CacheStore.getServices();

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [academicLevel, setAcademicLevel] = useState<AcademicLevel>('PhD Research Scholar');
  const [university, setUniversity] = useState('');
  const [researchField, setResearchField] = useState('');
  const [serviceId, setServiceId] = useState(preselectedServiceId || services[0]?.id || '');
  const [projectDescription, setProjectDescription] = useState('');
  const [expectedDeadline, setExpectedDeadline] = useState('');
  const [budgetRange, setBudgetRange] = useState('₹5,000 - ₹15,000');
  const [fileName, setFileName] = useState<string | null>(null);

  const [submittedInquiry, setSubmittedInquiry] = useState<Inquiry | null>(null);
  const [errorMsg, setErrorMsg] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Update preselected service if prop changes
  React.useEffect(() => {
    if (preselectedServiceId) {
      setServiceId(preselectedServiceId);
    }
  }, [preselectedServiceId]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.size > 25 * 1024 * 1024) {
        setErrorMsg('File exceeds 25 MB limit. Please select a smaller manuscript or synopsis draft.');
        return;
      }
      setFileName(file.name);
      setErrorMsg('');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!fullName.trim() || !email.trim() || !phone.trim() || !university.trim() || !projectDescription.trim()) {
      setErrorMsg('Please fill in all required fields marked with *');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }

    setIsSubmitting(true);

    try {
      const selectedService = services.find(s => s.id === serviceId);
      const newInquiry = CacheStore.addInquiry({
        full_name: fullName.trim(),
        email: email.trim(),
        phone: phone.trim(),
        academic_level: academicLevel,
        university: university.trim(),
        research_field: researchField.trim() || 'General Academic Discipline',
        service_id: serviceId,
        service_title: selectedService?.title || 'Academic Research Guidance',
        project_description: projectDescription.trim(),
        expected_deadline: expectedDeadline || new Date(Date.now() + 14 * 86400000).toISOString().split('T')[0],
        budget_range: budgetRange,
        internal_notes: fileName ? `Uploaded attachment draft: ${fileName}` : undefined,
      });

      // Fire celebratory confetti
      try {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.6 }
        });
      } catch {
        // ignore if canvas not supported
      }

      setSubmittedInquiry(newInquiry);
    } catch {
      setErrorMsg('An error occurred while submitting your inquiry. Please contact us on WhatsApp directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResetAndClose = () => {
    setSubmittedInquiry(null);
    setFullName('');
    setEmail('');
    setPhone('');
    setUniversity('');
    setProjectDescription('');
    setFileName(null);
    setErrorMsg('');
    onClose();
  };

  const academicLevels: AcademicLevel[] = [
    'PhD Research Scholar',
    'Postgraduate / Master\'s (PG)',
    'Undergraduate (UG)',
    'M.Phil / Pre-PhD',
    'Post-Doctoral Fellow',
    'Faculty / Professor',
    'Independent Researcher',
    'Other'
  ];

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleResetAndClose}
      title={submittedInquiry ? "Inquiry Received Successfully!" : "Submit Research Inquiry & Get Quote"}
      subtitle={submittedInquiry ? "Our academic panel in Mathura will review your scope within 2-4 hours." : "Get transparent pricing, milestone schedules, and direct specialist feedback."}
      maxWidth="2xl"
    >
      {submittedInquiry ? (
        <div className="space-y-6 text-center py-4">
          <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto border-2 border-emerald-200">
            <CheckCircle2 className="w-10 h-10" />
          </div>

          <div className="space-y-2">
            <h4 className="font-serif text-2xl font-bold text-[#071E46]">
              Thank You, {submittedInquiry.full_name}!
            </h4>
            <p className="text-sm text-slate-600 max-w-md mx-auto">
              Your inquiry has been registered in our institutional system. A senior research consultant has been notified.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-[#F5F7FB] border border-[#E2E8F0] max-w-md mx-auto text-left space-y-2 text-xs">
            <div className="flex justify-between py-1 border-b border-slate-200">
              <span className="text-slate-500">Inquiry ID:</span>
              <span className="font-mono font-bold text-[#071E46]">{submittedInquiry.inquiry_number}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-slate-200">
              <span className="text-slate-500">Service:</span>
              <span className="font-semibold text-slate-800">{submittedInquiry.service_title}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-slate-200">
              <span className="text-slate-500">Institution:</span>
              <span className="text-slate-800">{submittedInquiry.university}</span>
            </div>
            <div className="flex justify-between py-1">
              <span className="text-slate-500">Status:</span>
              <span className="font-medium text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">Under Review</span>
            </div>
          </div>

          {/* WhatsApp Direct Option */}
          <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={`https://wa.me/919760498896?text=Hello%20AcademicPro%20India%2C%20I%20have%20submitted%20Inquiry%20${submittedInquiry.inquiry_number}%20for%20${encodeURIComponent(submittedInquiry.service_title)}.%20Please%20review%20my%20requirements.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#25D366] text-white font-semibold text-sm hover:bg-[#20BD5A] transition-colors"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Send Fast WhatsApp Update</span>
            </a>

            <Button variant="primary" onClick={handleResetAndClose}>
              Done & Return
            </Button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {errorMsg && (
            <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0 text-rose-600" />
              <span>{errorMsg}</span>
            </div>
          )}

          {/* Row 1: Name & Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-[#071E46] mb-1">
                Full Name *
              </label>
              <input
                type="text"
                required
                value={fullName}
                onChange={e => setFullName(e.target.value)}
                placeholder="e.g. Dr. Priyadarshini Rao"
                className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#071E46] bg-slate-50/50"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#071E46] mb-1">
                Email Address *
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="e.g. priya.rao@du.ac.in"
                className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#071E46] bg-slate-50/50"
              />
            </div>
          </div>

          {/* Row 2: Phone & Academic Level */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-[#071E46] mb-1">
                Phone / WhatsApp Number *
              </label>
              <input
                type="tel"
                required
                value={phone}
                onChange={e => setPhone(e.target.value)}
                placeholder="+91 9876543210"
                className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#071E46] bg-slate-50/50"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#071E46] mb-1">
                Academic Level *
              </label>
              <select
                value={academicLevel}
                onChange={e => setAcademicLevel(e.target.value as AcademicLevel)}
                className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#071E46] bg-slate-50/50"
              >
                {academicLevels.map(lvl => (
                  <option key={lvl} value={lvl}>{lvl}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Row 3: University & Research Discipline */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-[#071E46] mb-1">
                University / Institution *
              </label>
              <input
                type="text"
                required
                value={university}
                onChange={e => setUniversity(e.target.value)}
                placeholder="e.g. Delhi University / GLA University Mathura"
                className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#071E46] bg-slate-50/50"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#071E46] mb-1">
                Research Field / Subject *
              </label>
              <input
                type="text"
                required
                value={researchField}
                onChange={e => setResearchField(e.target.value)}
                placeholder="e.g. Biotechnology, Economics, AI, Law"
                className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#071E46] bg-slate-50/50"
              />
            </div>
          </div>

          {/* Service Selection */}
          <div>
            <label className="block text-xs font-semibold text-[#071E46] mb-1">
              Required Research Service *
            </label>
            <select
              value={serviceId}
              onChange={e => setServiceId(e.target.value)}
              className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#071E46] bg-slate-50/50"
            >
              {services.map(s => (
                <option key={s.id} value={s.id}>
                  {s.title} ({s.pricing_model === 'per_page' ? 'Per-word/page pricing' : `Starting at ${s.starting_price || 'Quote'}`})
                </option>
              ))}
            </select>
          </div>

          {/* Project Description */}
          <div>
            <label className="block text-xs font-semibold text-[#071E46] mb-1">
              Project Description & Specific Requirements *
            </label>
            <textarea
              required
              rows={3}
              value={projectDescription}
              onChange={e => setProjectDescription(e.target.value)}
              placeholder="Please describe your current stage (e.g. synopsis drafting, thesis chapters 1-4, journal reviewer rebuttal), word count, and key questions..."
              className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#071E46] bg-slate-50/50"
            />
          </div>

          {/* Deadline & Budget */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-[#071E46] mb-1">
                Expected Submission Deadline
              </label>
              <input
                type="date"
                value={expectedDeadline}
                onChange={e => setExpectedDeadline(e.target.value)}
                className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#071E46] bg-slate-50/50"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#071E46] mb-1">
                Approximate Budget Range
              </label>
              <select
                value={budgetRange}
                onChange={e => setBudgetRange(e.target.value)}
                className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#071E46] bg-slate-50/50"
              >
                <option value="Under ₹5,000">Under ₹5,000 (Consultation/Topic)</option>
                <option value="₹5,000 - ₹15,000">₹5,000 - ₹15,000 (Synopsis / Paper)</option>
                <option value="₹15,000 - ₹30,000">₹15,000 - ₹30,000 (Thesis Editing)</option>
                <option value="₹30,000+">₹30,000+ (Full Dissertation / Advanced)</option>
              </select>
            </div>
          </div>

          {/* Optional Manuscript Upload */}
          <div className="p-3 rounded-2xl bg-[#F5F7FB] border border-dashed border-slate-300 text-center">
            <label className="cursor-pointer block">
              <input
                type="file"
                className="hidden"
                accept=".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.csv"
                onChange={handleFileChange}
              />
              <div className="flex items-center justify-center gap-2 text-xs font-medium text-[#071E46]">
                <UploadCloud className="w-4 h-4 text-[#D6A52B]" />
                <span>{fileName ? `Selected: ${fileName}` : 'Attach Draft / Synopsis (PDF, DOCX max 25MB - Optional)'}</span>
              </div>
              <span className="block text-[10px] text-slate-500 mt-0.5">
                Protected by strict Non-Disclosure Agreement (NDA) and encryption
              </span>
            </label>
          </div>

          {/* Submit CTA */}
          <div className="pt-2 flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-[11px] text-slate-500">
              <Sparkles className="w-3.5 h-3.5 text-[#D6A52B]" />
              <span>Free initial scoping & quotation within 4 hours</span>
            </div>

            <Button
              type="submit"
              variant="gold"
              isLoading={isSubmitting}
              icon={<Send className="w-3.5 h-3.5" />}
              className="text-xs font-bold px-6"
            >
              Submit Inquiry
            </Button>
          </div>
        </form>
      )}
    </Modal>
  );
};
