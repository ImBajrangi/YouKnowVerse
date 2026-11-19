import { useState } from 'react';
import { 
  Clock, 
  Search, 
  ArrowRight, 
  ArrowLeft
} from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { CacheStore } from '../lib/cacheStore';
import { BlogPost } from '../types';

export interface ResourcesBlogPageProps {
  onOpenInquiry: () => void;
}

export const ResourcesBlogPage: React.FC<ResourcesBlogPageProps> = ({ onOpenInquiry }) => {
  const allPosts = CacheStore.getBlogPosts();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState<string>('all');
  const [activePost, setActivePost] = useState<BlogPost | null>(null);

  const allTags = ['all', 'PhD Guidance', 'Scopus', 'UGC-CARE', 'Literature Review', 'Thesis Writing'];

  const filteredPosts = allPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTag = selectedTag === 'all' || post.tags.includes(selectedTag);
    return matchesSearch && matchesTag;
  });

  return (
    <div className="space-y-12 pb-16 font-sans">
      {/* Header */}
      <section className="bg-[#071E46] text-white py-14 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto space-y-4 text-center">
          <Badge variant="gold">Research Resources & Editorial Guides</Badge>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white">
            Academic Knowledge & Methodological Insights
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Essential guides, Scopus indexation checklists, thesis structuring blueprints, and research ethics guidelines written by our senior academic editors.
          </p>
        </div>
      </section>

      {/* Main Container */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        {activePost ? (
          /* Single Article Reader View */
          <div className="max-w-3xl mx-auto space-y-6">
            <button
              onClick={() => setActivePost(null)}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#071E46] hover:text-[#D6A52B] transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to All Articles</span>
            </button>

            <Card padding="lg" className="bg-white border border-slate-200 space-y-6">
              <div className="space-y-3 border-b border-slate-100 pb-4">
                <Badge variant="navy">{activePost.category}</Badge>
                <h1 className="font-serif text-2xl sm:text-3xl font-bold text-[#071E46] leading-tight">
                  {activePost.title}
                </h1>
                <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500">
                  <span>By {activePost.author}</span>
                  <span>•</span>
                  <span>{activePost.published_date}</span>
                  <span>•</span>
                  <span>{activePost.read_time}</span>
                </div>
              </div>

              {/* Body */}
              <div className="prose prose-sm max-w-none text-slate-700 leading-relaxed space-y-4 whitespace-pre-line text-xs sm:text-sm">
                {activePost.content}
              </div>

              {/* Post Footer */}
              <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-2">
                  {activePost.tags.map(t => (
                    <span key={t} className="text-[11px] bg-slate-100 text-slate-600 px-2 py-1 rounded-md">
                      #{t}
                    </span>
                  ))}
                </div>

                <Button variant="gold" size="sm" onClick={onOpenInquiry} className="text-xs font-bold">
                  Get Consultation on This Topic
                </Button>
              </div>
            </Card>
          </div>
        ) : (
          /* Posts Grid */
          <div className="space-y-8">
            {/* Filter Bar */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="relative w-full sm:w-80">
                <Search className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={e => setSearchTerm(e.target.value)}
                  placeholder="Search research topics, Scopus, thesis..."
                  className="w-full pl-9 pr-3 py-2 rounded-xl border border-slate-300 text-xs bg-white"
                />
              </div>

              <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto text-xs">
                {allTags.map(tag => (
                  <button
                    key={tag}
                    onClick={() => setSelectedTag(tag)}
                    className={`px-3 py-1.5 rounded-lg font-medium whitespace-nowrap transition-colors ${
                      selectedTag === tag ? 'bg-[#071E46] text-white' : 'bg-slate-200/70 text-slate-700 hover:bg-slate-300'
                    }`}
                  >
                    {tag === 'all' ? 'All Topics' : tag}
                  </button>
                ))}
              </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts.map(post => (
                <Card
                  key={post.id}
                  padding="md"
                  className="bg-white border border-slate-200 flex flex-col justify-between space-y-4 hover:border-slate-300 transition-colors"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <Badge variant="navy" size="sm">{post.category}</Badge>
                      <span className="text-[11px] text-slate-400 flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>{post.read_time}</span>
                      </span>
                    </div>

                    <h3 className="font-serif font-bold text-base text-[#071E46] leading-snug">
                      {post.title}
                    </h3>

                    <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[11px] text-slate-400">{post.published_date}</span>
                    <button
                      onClick={() => setActivePost(post)}
                      className="text-xs font-bold text-[#071E46] hover:text-[#D6A52B] transition-colors inline-flex items-center gap-1"
                    >
                      <span>Read Guide</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}
      </section>
    </div>
  );
};
