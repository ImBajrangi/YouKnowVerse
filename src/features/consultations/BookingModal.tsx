import React, { useState } from 'react';
import { 
  Calendar, 
  Clock, 
  Video, 
  MapPin, 
  Phone, 
  CheckCircle2, 
  AlertCircle
} from 'lucide-react';
import { Modal } from '../../components/ui/Modal';
import { Button } from '../../components/ui/Button';
import { CacheStore } from '../../lib/cacheStore';
import { AcademicLevel, ConsultationType, Consultation } from '../../types';
import confetti from 'canvas-confetti';

export interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const [clientName, setClientName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [academicLevel, setAcademicLevel] = useState<AcademicLevel>('PhD Research Scholar');
  const [university, setUniversity] = useState('');
  const [consultationType, setConsultationType] = useState<ConsultationType>('initial_discussion');
  const [mode, setMode] = useState<'online_video' | 'in_person_mathura' | 'phone_call'>('online_video');
  const [scheduledDate, setScheduledDate] = useState(() => {
    // Tomorrow by default
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  });
  const [scheduledTime, setScheduledTime] = useState('11:00 AM - 11:45 AM');
  const [notes, setNotes] = useState('');

  const [bookedConsultation, setBookedConsultation] = useState<Consultation | null>(null);
  const [errorMsg, setErrorMsg] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const consultationTypes: { type: ConsultationType; label: string; desc: string }[] = [
    { type: 'initial_discussion', label: 'Initial Research Discussion', desc: 'Free 30-min scoping call to review requirements and institutional deadlines.' },
    { type: 'topic_guidance', label: 'Research Topic Consultation', desc: '45-min deep dive evaluating feasibility, research gap, and novel formulation.' },
    { type: 'methodology', label: 'Methodology & Statistical Consultation', desc: 'Detailed review of sampling, hypothesis modeling, SPSS/R, and research design.' },
    { type: 'thesis_review', label: 'Thesis & Synopsis Review', desc: 'Line-by-line critique of draft chapters, structure, and reference compliance.' },
    { type: 'publication_strategy', label: 'Publication & Journal Strategy', desc: 'Targeting Scopus/UGC-CARE journals, handling reviewer queries, and ethics.' }
  ];

  const timeSlots = [
    '10:00 AM - 10:45 AM',
    '11:00 AM - 11:45 AM',
    '02:30 PM - 03:15 PM',
    '04:00 PM - 04:45 PM',
    '05:30 PM - 06:15 PM',
  ];

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!clientName.trim() || !email.trim() || !phone.trim() || !scheduledDate) {
      setErrorMsg('Please complete all required fields.');
      return;
    }

    setIsSubmitting(true);

    try {
      const typeObj = consultationTypes.find(t => t.type === consultationType);
      const newConsultation = CacheStore.bookConsultation({
        client_name: clientName.trim(),
        email: email.trim(),
        phone: phone.trim(),
        academic_level: academicLevel,
        university: university.trim(),
        consultation_type: consultationType,
        consultation_type_label: typeObj?.label || 'Academic Consultation',
        mode,
        scheduled_date: scheduledDate,
        scheduled_time: scheduledTime,
        notes: notes.trim(),
      });

      try {
        confetti({ particleCount: 50, spread: 60, origin: { y: 0.6 } });
      } catch {
        // ignore
      }

      setBookedConsultation(newConsultation);
    } catch {
      setErrorMsg('Failed to book consultation slot. Please call our hotline +91 9760498896 directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResetAndClose = () => {
    setBookedConsultation(null);
    setClientName('');
    setEmail('');
    setPhone('');
    setNotes('');
    setErrorMsg('');
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleResetAndClose}
      title={bookedConsultation ? "Consultation Confirmed!" : "Book a 1-on-1 Academic Consultation"}
      subtitle={bookedConsultation ? "Your appointment is registered in our calendar system." : "Select your preferred date, time slot, and mode (Online or In-Person in Mathura)."}
      maxWidth="2xl"
    >
      {bookedConsultation ? (
        <div className="space-y-6 text-center py-4">
          <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto border-2 border-emerald-200">
            <CheckCircle2 className="w-10 h-10" />
          </div>

          <div className="space-y-1">
            <h4 className="font-serif text-2xl font-bold text-[#0B2D3A]">
              Session Booked for {bookedConsultation.client_name}
            </h4>
            <p className="text-xs sm:text-sm text-slate-600">
              A calendar confirmation has been registered for your session with our research consultant.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-[#F7F5ED] border border-[#D6E6EB] max-w-md mx-auto text-left space-y-2 text-xs">
            <div className="flex justify-between py-1 border-b border-slate-200">
              <span className="text-slate-500">Subject:</span>
              <span className="font-bold text-[#0B2D3A]">{bookedConsultation.consultation_type_label}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-slate-200">
              <span className="text-slate-500">Date & Slot:</span>
              <span className="font-semibold text-slate-800">{bookedConsultation.scheduled_date} at {bookedConsultation.scheduled_time}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-slate-200">
              <span className="text-slate-500">Mode:</span>
              <span className="font-medium text-slate-800 capitalize">
                {bookedConsultation.mode === 'online_video' ? 'Google Meet Video Session' : bookedConsultation.mode === 'in_person_mathura' ? 'In-Person (Mathura Office)' : 'Direct Phone Call'}
              </span>
            </div>
            <div className="flex justify-between py-1">
              <span className="text-slate-500">Meeting Details:</span>
              <span className="text-blue-700 font-mono text-[11px] truncate max-w-[200px]">
                {bookedConsultation.meeting_link}
              </span>
            </div>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={`https://wa.me/919760498896?text=Hello%20AcademicPro%20India%2C%20I%20have%20booked%20a%20consultation%20on%20${bookedConsultation.scheduled_date}%20at%20${encodeURIComponent(bookedConsultation.scheduled_time)}%20for%20${encodeURIComponent(bookedConsultation.consultation_type_label)}.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#25D366] text-white font-semibold text-xs hover:bg-[#20BD5A] transition-colors"
            >
              <span>Confirm on WhatsApp</span>
            </a>

            <Button variant="primary" size="md" onClick={handleResetAndClose}>
              Return to Website
            </Button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleBooking} className="space-y-4">
          {errorMsg && (
            <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0 text-rose-600" />
              <span>{errorMsg}</span>
            </div>
          )}

          {/* Consultation Type Selector */}
          <div>
            <label className="block text-xs font-semibold text-[#0B2D3A] mb-2">
              Choose Consultation Type *
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {consultationTypes.map(item => (
                <button
                  type="button"
                  key={item.type}
                  onClick={() => setConsultationType(item.type)}
                  className={`p-3 text-left rounded-xl border text-xs transition-colors ${
                    consultationType === item.type
                      ? 'border-[#0B2D3A] bg-[#0B2D3A]/5 ring-1 ring-[#0B2D3A]'
                      : 'border-slate-200 hover:border-slate-300 bg-white'
                  }`}
                >
                  <div className="font-bold text-[#0B2D3A]">{item.label}</div>
                  <div className="text-[11px] text-slate-500 mt-1 leading-tight">{item.desc}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Mode Selector */}
          <div>
            <label className="block text-xs font-semibold text-[#0B2D3A] mb-2">
              Consultation Mode *
            </label>
            <div className="grid grid-cols-3 gap-2">
              <button
                type="button"
                onClick={() => setMode('online_video')}
                className={`p-2.5 rounded-xl border text-center flex flex-col items-center gap-1 text-xs transition-colors ${
                  mode === 'online_video'
                    ? 'border-[#0B2D3A] bg-[#0B2D3A] text-white'
                    : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                }`}
              >
                <Video className="w-4 h-4" />
                <span className="font-medium text-[11px]">Online (Google Meet)</span>
              </button>

              <button
                type="button"
                onClick={() => setMode('in_person_mathura')}
                className={`p-2.5 rounded-xl border text-center flex flex-col items-center gap-1 text-xs transition-colors ${
                  mode === 'in_person_mathura'
                    ? 'border-[#0B2D3A] bg-[#0B2D3A] text-white'
                    : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                }`}
              >
                <MapPin className="w-4 h-4" />
                <span className="font-medium text-[11px]">In-Person (Mathura)</span>
              </button>

              <button
                type="button"
                onClick={() => setMode('phone_call')}
                className={`p-2.5 rounded-xl border text-center flex flex-col items-center gap-1 text-xs transition-colors ${
                  mode === 'phone_call'
                    ? 'border-[#0B2D3A] bg-[#0B2D3A] text-white'
                    : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                }`}
              >
                <Phone className="w-4 h-4" />
                <span className="font-medium text-[11px]">Phone Discussion</span>
              </button>
            </div>
          </div>

          {/* Date & Time Slot */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-[#0B2D3A] mb-1 flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-[#0082A6]" />
                <span>Preferred Date *</span>
              </label>
              <input
                type="date"
                required
                value={scheduledDate}
                min={new Date().toISOString().split('T')[0]}
                onChange={e => setScheduledDate(e.target.value)}
                className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0B2D3A] bg-slate-50/50"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#0B2D3A] mb-1 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-[#0082A6]" />
                <span>Available Time Slot *</span>
              </label>
              <select
                value={scheduledTime}
                onChange={e => setScheduledTime(e.target.value)}
                className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0B2D3A] bg-slate-50/50"
              >
                {timeSlots.map(slot => (
                  <option key={slot} value={slot}>{slot}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Scholar Contact Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
            <div>
              <label className="block text-xs font-semibold text-[#0B2D3A] mb-1">
                Your Full Name *
              </label>
              <input
                type="text"
                required
                value={clientName}
                onChange={e => setClientName(e.target.value)}
                placeholder="e.g. Ramesh Chandra, PhD Scholar"
                className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0B2D3A] bg-slate-50/50"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#0B2D3A] mb-1">
                Email Address *
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="e.g. ramesh@university.edu"
                className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0B2D3A] bg-slate-50/50"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
              <label className="block text-xs font-semibold text-[#0B2D3A] mb-1">
                WhatsApp Phone *
              </label>
              <input
                type="tel"
                required
                value={phone}
                onChange={e => setPhone(e.target.value)}
                placeholder="+91 9760498896"
                className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0B2D3A] bg-slate-50/50"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#0B2D3A] mb-1">
                Academic Level
              </label>
              <select
                value={academicLevel}
                onChange={e => setAcademicLevel(e.target.value as AcademicLevel)}
                className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0B2D3A] bg-slate-50/50"
              >
                <option value="PhD Research Scholar">PhD Research Scholar</option>
                <option value="Postgraduate / Master's (PG)">Postgraduate (PG)</option>
                <option value="Undergraduate (UG)">Undergraduate (UG)</option>
                <option value="Faculty / Professor">Faculty / Professor</option>
                <option value="Independent Researcher">Independent Researcher</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#0B2D3A] mb-1">
                University / Institution
              </label>
              <input
                type="text"
                value={university}
                onChange={e => setUniversity(e.target.value)}
                placeholder="e.g. AMU / BHU / GLA Mathura"
                className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0B2D3A] bg-slate-50/50"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#0B2D3A] mb-1">
              Key Discussion Focus & Doubts (Optional)
            </label>
            <textarea
              rows={2}
              value={notes}
              onChange={e => setNotes(e.target.value)}
              placeholder="e.g. Clarification on RDC comments, sample size selection, or Scopus journal response letter..."
              className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0B2D3A] bg-slate-50/50"
            />
          </div>

          <div className="pt-2 flex items-center justify-between border-t border-slate-200">
            <span className="text-[11px] text-slate-500">
              Mathura Center: Civil Lines • Online: Google Meet
            </span>
            <Button
              type="submit"
              variant="gold"
              isLoading={isSubmitting}
              className="text-xs font-bold px-6"
            >
              Confirm Booking
            </Button>
          </div>
        </form>
      )}
    </Modal>
  );
};
