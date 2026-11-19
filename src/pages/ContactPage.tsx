import { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  MessageCircle, 
  Clock, 
  Send, 
  CheckCircle2
} from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { CacheStore } from '../lib/cacheStore';
import confetti from 'canvas-confetti';

export interface ContactPageProps {
  onOpenBooking: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onOpenBooking }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('Research Inquiry');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !phone.trim() || !message.trim()) return;

    CacheStore.addInquiry({
      full_name: name.trim(),
      email: email.trim(),
      phone: phone.trim(),
      academic_level: 'PhD Research Scholar',
      university: 'Inquiry via Contact Page',
      research_field: subject,
      service_id: 'srv-topic-guidance',
      service_title: subject,
      project_description: message.trim(),
      expected_deadline: new Date(Date.now() + 14 * 86400000).toISOString().split('T')[0],
      budget_range: 'General Consultation',
    });

    try {
      confetti({ particleCount: 50, spread: 60, origin: { y: 0.6 } });
    } catch {
      // ignore
    }

    setSubmitted(true);
  };

  return (
    <div className="space-y-16 pb-16 font-sans">
      {/* Hero */}
      <section className="bg-[#0B2D3A] text-white py-14 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto space-y-4 text-center">
          <Badge variant="gold">Institutional Contact</Badge>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white">
            Connect With AcademicPro India
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Headquartered in Mathura, Uttar Pradesh. Connect with our academic research coordinators in-person or via phone, WhatsApp, and Google Meet.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Contact Details & Mathura Center (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <Card padding="lg" className="bg-white space-y-6 border border-slate-200">
              <h2 className="font-serif font-bold text-xl text-[#0B2D3A] border-b border-slate-100 pb-3">
                Research Office & Contact
              </h2>

              <div className="space-y-4 text-xs">
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-[#0B2D3A]/5 text-[#0082A6] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 block">Mathura Consulting Office:</span>
                    <span className="text-slate-600 block leading-relaxed mt-0.5">
                      Academic Research Complex, Civil Lines<br />
                      Near Mathura Cantt Railway Station<br />
                      Mathura, Uttar Pradesh 281001, India
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-[#0B2D3A]/5 text-[#0082A6] shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 block">Telephone Hotline:</span>
                    <a href="tel:+919760498896" className="text-slate-700 font-semibold hover:text-[#0082A6] transition-colors">
                      +91 9760498896
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-600 shrink-0">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 block">Official WhatsApp Support:</span>
                    <a 
                      href="https://wa.me/919760498896" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-emerald-700 font-semibold hover:underline"
                    >
                      +91 9760498896 (Direct Chat)
                    </a>
                    <span className="block text-[11px] text-slate-400 mt-0.5">Fast reply within 15-30 minutes</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-[#0B2D3A]/5 text-[#0082A6] shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 block">Email Inquiries:</span>
                    <a href="mailto:support@academicproindia.com" className="text-slate-700 hover:text-[#0082A6] transition-colors">
                      support@academicproindia.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-[#0B2D3A]/5 text-[#0082A6] shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 block">Consultation Hours:</span>
                    <span className="text-slate-600 block">
                      Monday to Saturday: 09:00 AM – 07:00 PM IST<br />
                      Sunday: Prior appointment only
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-100">
                <Button variant="secondary" fullWidth size="sm" onClick={onOpenBooking} className="text-xs font-semibold">
                  Schedule In-Person Meeting in Mathura
                </Button>
              </div>
            </Card>
          </div>

          {/* Contact / Quick Message Form (7 Cols) */}
          <div className="lg:col-span-7">
            <Card padding="lg" className="bg-white border border-slate-200 space-y-6">
              <div>
                <h2 className="font-serif font-bold text-xl text-[#0B2D3A]">
                  Send a Direct Research Message
                </h2>
                <p className="text-xs text-slate-500 mt-1">
                  Our academic coordinator will acknowledge and route your query to the appropriate subject mentor.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 text-center space-y-4">
                  <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto border-2 border-emerald-200">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif font-bold text-xl text-[#0B2D3A]">Message Delivered</h3>
                  <p className="text-xs text-slate-600 max-w-md mx-auto">
                    Thank you, {name}! Your query has been logged. An academic consultant from our Mathura office will contact you shortly.
                  </p>
                  <Button variant="primary" size="sm" onClick={() => setSubmitted(false)} className="text-xs">
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-semibold text-[#0B2D3A] mb-1">Your Name *</label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={e => setName(e.target.value)}
                        placeholder="e.g. Anand Dixit"
                        className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs bg-slate-50/50"
                      />
                    </div>

                    <div>
                      <label className="block font-semibold text-[#0B2D3A] mb-1">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        placeholder="e.g. anand@university.edu"
                        className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs bg-slate-50/50"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-semibold text-[#0B2D3A] mb-1">Phone / WhatsApp *</label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
                        placeholder="+91 9760498896"
                        className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs bg-slate-50/50"
                      />
                    </div>

                    <div>
                      <label className="block font-semibold text-[#0B2D3A] mb-1">Subject / Area *</label>
                      <input
                        type="text"
                        value={subject}
                        onChange={e => setSubject(e.target.value)}
                        placeholder="e.g. Synopsis defense query / Thesis formatting"
                        className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs bg-slate-50/50"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-semibold text-[#0B2D3A] mb-1">Detailed Message *</label>
                    <textarea
                      required
                      rows={4}
                      value={message}
                      onChange={e => setMessage(e.target.value)}
                      placeholder="Please outline your research discipline, university guidelines, timeline, or any specific concerns..."
                      className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs bg-slate-50/50"
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <span className="text-[11px] text-slate-500">
                      Confidentiality guaranteed under institutional NDA
                    </span>
                    <Button
                      type="submit"
                      variant="gold"
                      icon={<Send className="w-3.5 h-3.5" />}
                      className="text-xs font-bold px-6"
                    >
                      Send Message
                    </Button>
                  </div>
                </form>
              )}
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};
