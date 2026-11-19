import { useState } from 'react';
import { 
  Search, 
  ChevronDown
} from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
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
    <div className="space-y-12 pb-16 font-sans">
      {/* Header */}
      <section className="bg-[#0B2D3A] text-white py-14 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto space-y-4 text-center">
          <Badge variant="gold">Knowledgebase & Transparency</Badge>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white">
            Frequently Asked Questions
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Clear, honest answers regarding our academic integrity pledge, pricing models, confidential document storage, and revision protocols.
          </p>
        </div>
      </section>

      {/* Main Container */}
      <section className="max-w-4xl mx-auto px-4 sm:px-8 space-y-8">
        {/* Search & Categories */}
        <div className="space-y-4">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3.5 top-3.5 text-slate-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              placeholder="Search by keyword (e.g. publication guarantee, pricing, turnaround, NDA)..."
              className="w-full pl-10 pr-4 py-3 rounded-2xl border border-slate-300 text-xs sm:text-sm bg-white shadow-xs focus:outline-none focus:ring-2 focus:ring-[#0B2D3A]"
            />
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-2 rounded-xl font-medium whitespace-nowrap transition-colors ${
                  selectedCategory === cat.id
                    ? 'bg-[#0B2D3A] text-white shadow-xs'
                    : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.map(item => {
            const isOpen = openIds[item.id] !== undefined ? openIds[item.id] : item.is_featured;
            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-subtle transition-colors"
              >
                <button
                  onClick={() => toggleOpen(item.id)}
                  className="w-full p-4 sm:p-5 text-left flex items-start justify-between gap-4 select-none"
                >
                  <span className="font-serif font-bold text-sm sm:text-base text-[#0B2D3A] leading-snug">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform ${
                      isOpen ? 'rotate-180 text-[#0082A6]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions */}
        <Card padding="lg" className="bg-[#0B2D3A] text-white text-center space-y-4 rounded-3xl">
          <h3 className="font-serif font-bold text-xl text-white">Have a Specific Project Question?</h3>
          <p className="text-xs text-slate-300 max-w-lg mx-auto">
            Our academic coordinators in Mathura are ready to clarify any institutional doubts regarding DRC requirements or custom scopes.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <Button variant="gold" size="sm" onClick={onOpenInquiry} className="text-xs font-bold">
              Submit Direct Question
            </Button>
            <Button variant="secondary" size="sm" onClick={onOpenBooking} className="text-xs">
              Book a Phone Consultation
            </Button>
          </div>
        </Card>
      </section>
    </div>
  );
};
