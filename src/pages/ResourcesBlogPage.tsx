import React, { useState } from 'react';
import { 
  Clock, 
  Search, 
  ArrowRight, 
  ArrowLeft
} from 'lucide-react';
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
    <div className="space-y-16 sm:space-y-24 pb-20 font-sans text-[#0B2D3A] select-none">
      
      {/* Editorial Minimalist Hero Header */}
      <section className="pt-8 sm:pt-14 px-4 sm:px-8 max-w-5xl mx-auto text-center space-y-4">
        <span className="px-3.5 py-1 rounded-full bg-[#EBF5F8] text-[#0082A6] text-xs font-bold uppercase tracking-wider">
          EDITORIAL GUIDES &amp; ARTICLES
        </span>
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0B2D3A] leading-[1.1]">
          Academic Knowledge &amp; <br />
          <span className="font-serif italic font-normal text-[#2772A0]">Editorial Guides</span>
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Essential guides, Scopus indexation checklists, thesis structuring blueprints, and research ethics guidelines written by our senior academic editors.
        </p>
      </section>

      {/* Main Container */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        {activePost ? (
          /* Single Article Reader View */
          <div className="max-w-3xl mx-auto space-y-6">
            <button
              onClick={() => setActivePost(null)}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0082A6] hover:text-[#006F8E] transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to All Articles</span>
            </button>

            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#CCDDEA] shadow-subtle space-y-6">
              <div className="space-y-3 border-b border-slate-100 pb-5">
                <span className="px-3 py-1 rounded-full bg-[#EBF5F8] text-[#0082A6] text-xs font-bold uppercase tracking-wider inline-block">
                  {activePost.category}
                </span>
                <h1 className="text-2xl sm:text-4xl font-extrabold text-[#0B2D3A] leading-tight">
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
                    <span key={t} className="text-[11px] bg-[#F7F5ED] text-[#0082A6] font-medium px-2.5 py-1 rounded-full border border-slate-200/80">
                      #{t}
                    </span>
                  ))}
                </div>

                <button
                  onClick={onOpenInquiry}
                  className="px-6 py-2.5 rounded-full bg-[#0082A6] hover:bg-[#006F8E] text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-subtle"
                >
                  Consult on This Topic
                </button>
              </div>
            </div>
          </div>
        ) : (
          /* Posts Grid */
          <div className="space-y-8">
            {/* Filter Bar */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white p-4 rounded-3xl border border-[#CCDDEA] shadow-subtle">
              <div className="relative w-full sm:w-80">
                <Search className="w-4 h-4 absolute left-3.5 top-3 text-slate-400" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={e => setSearchTerm(e.target.value)}
                  placeholder="Search articles..."
                  className="w-full pl-10 pr-4 py-2 rounded-full border border-[#CCDDEA] bg-[#F7F5ED]/40 text-xs focus:bg-white focus:border-[#0082A6] focus:outline-none transition-colors"
                />
              </div>

              <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0 text-xs">
                {allTags.map(tag => (
                  <button
                    key={tag}
                    onClick={() => setSelectedTag(tag)}
                    className={`px-3.5 py-1.5 rounded-full font-medium whitespace-nowrap transition-colors ${
                      selectedTag === tag
                        ? 'bg-[#0082A6] text-white shadow-2xs font-bold'
                        : 'text-slate-600 hover:text-[#0082A6] hover:bg-[#EBF5F8]'
                    }`}
                  >
                    {tag === 'all' ? 'All Guides' : tag}
                  </button>
                ))}
              </div>
            </div>

            {/* Articles Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts.map(post => (
                <div
                  key={post.id}
                  onClick={() => setActivePost(post)}
                  className="bg-white rounded-3xl p-6 border border-[#CCDDEA] shadow-subtle hover:border-[#0082A6] cursor-pointer transition-all flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="px-2.5 py-1 rounded-full bg-[#EBF5F8] text-[#0082A6] font-bold text-[10px]">
                        {post.category}
                      </span>
                      <span className="flex items-center gap-1 text-slate-400">
                        <Clock className="w-3 h-3" />
                        <span>{post.read_time}</span>
                      </span>
                    </div>

                    <h3 className="font-extrabold text-lg text-[#0B2D3A] leading-snug line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-[#0082A6] font-bold">
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

    </div>
  );
};
