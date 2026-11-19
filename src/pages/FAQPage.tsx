import React, { useState } from 'react';
import { 
  Search, 
  Plus,
  Minus
} from 'lucide-react';
import { CacheStore } from '../lib/cacheStore';

export interface FAQPageProps {
  onOpenInquiry: () => void;
  onOpenBooking: () => void;
}

export const FAQPage: React.FC<FAQPageProps> = ({ onOpenInquiry, onOpenBooking }) => {
  const allFaqs = CacheStore.getFAQs();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({});

  const toggleOpen = (id: string) => {
    setOpenIds(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const categories = [
    { id: 'all', label: 'All Questions' },
    { id: 'services', label: 'Services & Ethics' },
    { id: 'pricing', label: 'Pricing & Quotations' },
    { id: 'timelines', label: 'Project Timelines' },
    { id: 'confidentiality', label: 'Confidentiality & NDAs' },
    { id: 'payments_revisions', label: 'Payments & Revisions' },
  ];

  const filteredFaqs = allFaqs.filter(faq => {
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-16 sm:space-y-24 pb-20 font-sans text-[#0B2D3A] select-none">
      
      {/* Editorial Minimalist Hero Header */}
      <section className="pt-8 sm:pt-14 px-4 sm:px-8 max-w-5xl mx-auto text-center space-y-4">
        <span className="px-3.5 py-1 rounded-full bg-[#EBF5F8] text-[#0082A6] text-xs font-bold uppercase tracking-wider">
          KNOWLEDGEBASE &amp; TRANSPARENCY
        </span>
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0B2D3A] leading-[1.1]">
          Frequently Asked <br />
          <span className="font-serif italic font-normal text-[#2772A0]">Questions</span>
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Clear, honest answers regarding our academic integrity pledge, pricing models, confidential document storage, and revision protocols.
        </p>
      </section>

      {/* Main Container */}
      <section className="max-w-4xl mx-auto px-4 sm:px-8 space-y-6">
        
        {/* Search & Categories */}
        <div className="space-y-3">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-4 top-3.5 text-slate-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              placeholder="Search by keyword (e.g. publication guarantee, pricing, turnaround, NDA)..."
              className="w-full pl-11 pr-4 py-3 rounded-2xl border border-[#CCDDEA] text-xs sm:text-sm bg-white shadow-subtle focus:outline-none focus:border-[#0082A6] transition-colors"
            />
          </div>

          {/* FAQ Categories Filter Joined Bar */}
          <div className="p-1 rounded-full bg-white/80 border border-[#CCDDEA] shadow-2xs inline-flex items-center gap-1 overflow-x-auto max-w-full text-xs">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-1.5 rounded-full font-semibold whitespace-nowrap transition-colors ${
                  selectedCategory === cat.id
                    ? 'bg-[#0082A6] text-white shadow-xs font-bold'
                    : 'text-[#0B2D3A]/75 hover:bg-[#F7F5ED] hover:text-[#0082A6]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Creatively Joined FAQ Accordion Container */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-[#CCDDEA] shadow-subtle divide-y divide-[#CCDDEA] overflow-hidden">
          {filteredFaqs.map(item => {
            const isOpen = openIds[item.id] !== undefined ? openIds[item.id] : item.is_featured;
            return (
              <div
                key={item.id}
                className={`transition-colors ${
                  isOpen ? 'bg-[#EBF5F8]/60' : 'hover:bg-[#F7F5ED]/50'
                }`}
              >
                <button
                  onClick={() => toggleOpen(item.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-start justify-between gap-4 select-none focus:outline-none"
                >
                  <span className="font-bold text-sm sm:text-base text-[#0B2D3A]">
                    {item.question}
                  </span>
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-colors shadow-2xs mt-0.5 ${
                    isOpen ? 'bg-[#0082A6] text-white' : 'bg-[#EBF5F8] text-[#0082A6]'
                  }`}>
                    {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-[#86B9C7]/30 pt-3">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Help CTA Box */}
        <div className="mt-12 p-8 rounded-3xl bg-white border border-[#CCDDEA] shadow-premium text-center space-y-4">
          <h3 className="font-extrabold text-xl text-[#0B2D3A]">
            Have an Institutional Question Not Listed Here?
          </h3>
          <p className="text-xs text-slate-600 max-w-md mx-auto">
            Our academic advisors in Mathura are available for one-on-one consultation calls to review your guidelines.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              onClick={onOpenBooking}
              className="px-6 py-2.5 rounded-full bg-[#0082A6] hover:bg-[#006F8E] text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-subtle"
            >
              Book Discussion
            </button>
            <button
              onClick={onOpenInquiry}
              className="px-6 py-2.5 rounded-full bg-[#F7F5ED] hover:bg-[#EBF5F8] text-[#0B2D3A] text-xs font-bold uppercase tracking-wider transition-colors border border-[#CCDDEA]"
            >
              Submit Detailed Inquiry
            </button>
          </div>
        </div>

      </section>

    </div>
  );
};
