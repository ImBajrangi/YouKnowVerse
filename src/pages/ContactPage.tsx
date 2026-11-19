import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  MessageCircle, 
  Clock, 
  Send, 
  CheckCircle2
} from 'lucide-react';
import { CacheStore } from '../lib/cacheStore';
import confetti from 'canvas-confetti';

export interface ContactPageProps {
  onOpenBooking: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onOpenBooking }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('PhD Thesis Guidance');
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
    <div className="space-y-16 sm:space-y-24 pb-20 font-sans text-[#0B2D3A] select-none">
      
      {/* Editorial Hero Header */}
      <section className="pt-8 sm:pt-14 px-4 sm:px-8 max-w-5xl mx-auto text-center space-y-4">
        <span className="px-3.5 py-1 rounded-full bg-[#EBF5F8] text-[#0082A6] text-xs font-bold uppercase tracking-wider">
          INSTITUTIONAL CONTACT
        </span>
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0B2D3A] leading-[1.1]">
          Connect With <br />
          <span className="font-serif italic font-normal text-[#2772A0]">YouKnowVerse</span>
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Headquartered in Mathura, Uttar Pradesh. Connect with our academic research coordinators in-person or via telephone, WhatsApp, and Google Meet.
        </p>
      </section>

      {/* Main Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Contact Details & Mathura Center (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#CCDDEA] shadow-subtle space-y-6">
              <h2 className="font-extrabold text-xl text-[#0B2D3A] border-b border-slate-100 pb-3">
                Research Office &amp; Contact
              </h2>

              <div className="space-y-4 text-xs">
                <div className="flex items-start gap-3.5">
                  <div className="p-3 rounded-2xl bg-[#EBF5F8] text-[#0082A6] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-bold text-[#0B2D3A] block">Mathura Consulting Office:</span>
                    <span className="text-slate-600 block leading-relaxed mt-0.5">
                      Academic Research Complex, Civil Lines<br />
                      Near Mathura Cantt Railway Station<br />
                      Mathura, Uttar Pradesh 281001, India
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-3 rounded-2xl bg-[#EBF5F8] text-[#0082A6] shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-bold text-[#0B2D3A] block">Telephone Helpline:</span>
                    <a href="tel:+919760498896" className="text-slate-700 font-semibold hover:text-[#0082A6] transition-colors">
                      +91 9760498896
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-3 rounded-2xl bg-emerald-50 text-emerald-600 shrink-0">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-bold text-[#0B2D3A] block">Official WhatsApp Support:</span>
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

                <div className="flex items-start gap-3.5">
                  <div className="p-3 rounded-2xl bg-[#EBF5F8] text-[#0082A6] shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-bold text-[#0B2D3A] block">Email Inquiries:</span>
                    <a href="mailto:support@youknowverseindia.com" className="text-slate-700 hover:text-[#0082A6] transition-colors">
                      support@youknowverseindia.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-3 rounded-2xl bg-[#EBF5F8] text-[#0082A6] shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-bold text-[#0B2D3A] block">Consultation Hours:</span>
                    <span className="text-slate-600 block mt-0.5 leading-relaxed">
                      Monday to Saturday: 09:00 AM – 07:00 PM IST<br />
                      Sunday: Prior appointment only
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-100">
                <button 
                  onClick={onOpenBooking} 
                  className="w-full py-3 rounded-full bg-[#F7F5ED] hover:bg-[#EBF5F8] text-[#0B2D3A] border border-[#CCDDEA] text-xs font-bold uppercase tracking-wider transition-colors"
                >
                  Schedule In-Person Meeting in Mathura
                </button>
              </div>
            </div>
          </div>

          {/* Contact / Quick Message Form (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#CCDDEA] shadow-subtle space-y-6">
              <div>
                <h2 className="font-extrabold text-xl text-[#0B2D3A]">
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
                  <h3 className="font-extrabold text-xl text-[#0B2D3A]">Message Delivered</h3>
                  <p className="text-xs text-slate-600 max-w-md mx-auto">
                    Thank you, {name}! Your query has been logged. An academic consultant from our Mathura office will contact you shortly.
                  </p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-full bg-[#0082A6] text-white text-xs font-bold"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-semibold text-[#0B2D3A] mb-1">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={e => setName(e.target.value)}
                        placeholder="Dr. / Scholar Name"
                        className="w-full px-3.5 py-2.5 rounded-2xl border border-[#CCDDEA] bg-[#F7F5ED]/40 focus:bg-white focus:border-[#0082A6] focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block font-semibold text-[#0B2D3A] mb-1">WhatsApp / Phone Number *</label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
                        placeholder="+91 98765 43210"
                        className="w-full px-3.5 py-2.5 rounded-2xl border border-[#CCDDEA] bg-[#F7F5ED]/40 focus:bg-white focus:border-[#0082A6] focus:outline-none transition-colors"
                      />
                    </div>
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

                  <div>
                    <label className="block font-semibold text-[#0B2D3A] mb-1">Research Area / Subject *</label>
                    <select
                      value={subject}
                      onChange={e => setSubject(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-2xl border border-[#CCDDEA] bg-[#F7F5ED]/40 focus:bg-white focus:border-[#0082A6] focus:outline-none transition-colors"
                    >
                      <option value="PhD Thesis Guidance">PhD Thesis Guidance &amp; Line-Editing</option>
                      <option value="Research Paper Support">Research Paper Support (Scopus / UGC-CARE)</option>
                      <option value="Synopsis & Proposal Defense">Synopsis &amp; RDC Proposal Defense</option>
                      <option value="Statistical Modeling SPSS">Statistical Modeling (SPSS / AMOS / R)</option>
                      <option value="Literature Review Discovery">Literature Review Matrix Discovery</option>
                      <option value="Other Consultation">Other Academic Inquiries</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-semibold text-[#0B2D3A] mb-1">Manuscript / Project Details *</label>
                    <textarea
                      rows={4}
                      required
                      value={message}
                      onChange={e => setMessage(e.target.value)}
                      placeholder="Describe your research topic, university requirements, target deadlines, or specific revisions needed..."
                      className="w-full px-3.5 py-2.5 rounded-2xl border border-[#CCDDEA] bg-[#F7F5ED]/40 focus:bg-white focus:border-[#0082A6] focus:outline-none transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-full bg-[#0082A6] hover:bg-[#006F8E] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-subtle transition-colors"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Confidential Message</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
