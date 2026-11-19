import React from 'react';
import { MapPin } from 'lucide-react';

export const UniversityNetworkGraphic: React.FC = () => {
  const universities = [
    { code: 'DU', name: 'Delhi University', scholars: '120+ Scholars', tag: 'Central Univ' },
    { code: 'AMU', name: 'Aligarh Muslim Univ.', scholars: '85+ Scholars', tag: 'Central Univ' },
    { code: 'BHU', name: 'Banaras Hindu Univ.', scholars: '95+ Scholars', tag: 'Central Univ' },
    { code: 'GLA', name: 'GLA Univ. Mathura', scholars: '140+ Scholars', tag: 'Mathura Hub' },
    { code: 'DBRAU', name: 'Dr. B.R. Ambedkar Univ.', scholars: '70+ Scholars', tag: 'State Univ' },
    { code: 'JNU', name: 'Jawaharlal Nehru Univ.', scholars: '50+ Scholars', tag: 'Central Univ' },
  ];

  return (
    <div className="w-full bg-[#071E46] text-white rounded-3xl border border-[#102F60] p-6 sm:p-8 shadow-premium space-y-6 select-none">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-4">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#D6A52B]">
            Inter-Institutional Research Network
          </span>
          <h3 className="font-serif font-bold text-lg sm:text-xl text-white">
            Trusted Across Premier Universities & Institutes
          </h3>
        </div>

        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#102F60] border border-white/10 text-xs text-amber-200">
          <MapPin className="w-3.5 h-3.5 text-[#D6A52B]" />
          <span>Hub: Mathura, Uttar Pradesh</span>
        </div>
      </div>

      {/* Grid of University Badges */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        {universities.map(u => (
          <div
            key={u.code}
            className="p-3.5 rounded-2xl bg-[#0B2452]/90 border border-white/10 text-center space-y-2 hover:border-[#D6A52B]/40 transition-colors"
          >
            <div className="w-10 h-10 rounded-xl bg-[#071E46] border border-[#D6A52B]/40 text-[#D6A52B] font-serif font-bold text-sm flex items-center justify-center mx-auto shadow-inner">
              {u.code}
            </div>
            <div>
              <div className="font-serif font-bold text-xs text-white truncate">{u.name}</div>
              <div className="text-[10px] text-slate-300 font-mono mt-0.5">{u.scholars}</div>
            </div>
            <span className="inline-block text-[9px] font-semibold px-2 py-0.5 rounded bg-[#102F60] text-amber-200">
              {u.tag}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
