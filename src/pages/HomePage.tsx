import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Send,
  Plus,
  Minus,
  Check,
  Sparkles,
  Compass
} from 'lucide-react';
import { CacheStore } from '../lib/cacheStore';

export interface HomePageProps {
  onNavigate: (page: string, params?: Record<string, string>) => void;
  onOpenBooking: () => void;
  onOpenInquiry: (serviceId?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenBooking,
  onOpenInquiry,
}) => {
  const faqs = CacheStore.getFAQs().slice(0, 5);

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Hero Interactive Scenario State (Creative Interactive HUD)
  const [heroScenario, setHeroScenario] = useState<'thesis' | 'scopus' | 'synopsis'>('thesis');

  // Interactive Radar State (Section 3 Compass)
  const [radarTarget, setRadarTarget] = useState<'empirical' | 'statistical' | 'literature' | 'qualitative'>('empirical');

  // Interactive Bento Discipline State (Section 2 Gauge)
  const [bentoDiscipline, setBentoDiscipline] = useState<'management' | 'sciences' | 'engineering' | 'social'>('management');

  // Interactive Calculator State
  const [calcService, setCalcService] = useState<'thesis' | 'paper' | 'synopsis' | 'spss'>('thesis');
  const [calcWords, setCalcWords] = useState<number>(15000);
  const [calcUrgency, setCalcUrgency] = useState<'standard' | 'priority'>('standard');

  const calculatePrice = () => {
    let basePerWord = 1.0;
    if (calcService === 'thesis') basePerWord = 1.10;
    if (calcService === 'paper') basePerWord = 1.35;
    if (calcService === 'synopsis') return calcUrgency === 'priority' ? 12500 : 9500;
    if (calcService === 'spss') return calcUrgency === 'priority' ? 10500 : 7500;

    const base = calcWords * basePerWord;
    return calcUrgency === 'priority' ? Math.round(base * 1.25) : Math.round(base);
  };

  const getEstimatedDays = () => {
    if (calcService === 'synopsis') return calcUrgency === 'priority' ? '4-5 Days' : '7-9 Days';
    if (calcService === 'spss') return calcUrgency === 'priority' ? '3-4 Days' : '5-7 Days';
    if (calcWords > 30000) return calcUrgency === 'priority' ? '12-16 Days' : '18-24 Days';
    return calcUrgency === 'priority' ? '6-8 Days' : '10-14 Days';
  };

  // Scenario Data
  const scenarioData = {
    thesis: {
      tag: 'DOCTORAL DISSERTATION',
      user1: 'Review my PhD thesis methodology chapter on Western UP microfinance.',
      ai1: "I've audited your stratified sampling (N=384). Clarified the G*Power formula and standardized citations to APA 7th format.",
      user2: 'Make the econometric regression defensible for DRC viva.',
      ai2: "Aligned multivariate regression equations (β = 0.42, p < 0.001). Added DRC defense notes and confirmed zero predatory citations.",
      image: '/images/hero-scholar.webp',
      badge: 'APA 7th Verified',
      status: '✓ DRC Ready',
      direction: 'Empirical Autonomy',
      percent: '98%',
    },
    scopus: {
      tag: 'SCOPUS Q1 / UGC-CARE MANUSCRIPT',
      user1: 'Rebuttal for Reviewer #2 on our Scopus Q1 submission regarding endogeneity.',
      ai1: "Integrated 2-stage Instrumental Variable (2SLS) analysis and robust standard errors. Formatted response matrix with page citations.",
      user2: 'Verify citation integrity against predatory journal blacklists.',
      ai2: "Audited 52 references in CrossRef & Scopus database. 100% legitimate indexed sources with verified DOIs.",
      image: '/images/research-paper.webp',
      badge: 'COPE Compliant',
      status: '✓ Q1 Cleared',
      direction: 'Publication Rigor',
      percent: '99%',
    },
    synopsis: {
      tag: 'PRE-DOCTORAL SYNOPSIS (RDC DEFENSE)',
      user1: 'Synthesize literature gap across 60 empirical studies on green supply chains.',
      ai1: "Constructed PRISMA 2020 literature matrix with 4 thematic gaps and grounded research questions.",
      user2: 'Align proposal structure with university RDC guidelines.',
      ai2: "Standardized chapterization, sampling justification, and theoretical framework matching GLA / AMU DRC rubrics.",
      image: '/images/synopsis-review.webp',
      badge: 'RDC Formatted',
      status: '✓ Defense Approved',
      direction: 'Conceptual Clarity',
      percent: '96%',
    }
  };

  const activeScenario = scenarioData[heroScenario];

  // Radar Target Data
  const radarCoords = {
    empirical: { cx: 70, cy: 32, label: 'Empirical Rigor', method: 'Hypothesis Testing & G*Power Sizing', desc: 'Quantitative survey modeling ($N=384$) with validated Cronbach alpha.' },
    statistical: { cx: 80, cy: 55, label: 'Statistical Modeling', method: 'SPSS, AMOS & Multi-Regression', desc: 'Structural Equation Modeling (SEM) and regression ($p < 0.001$).' },
    literature: { cx: 28, cy: 35, label: 'Systematic Review', method: 'PRISMA 2020 & Scopus Matrix', desc: 'Curated 60+ peer-reviewed papers mapped across 4 theoretical pillars.' },
    qualitative: { cx: 32, cy: 68, label: 'Thematic Qualitative', method: 'Atlas.ti & Grounded Coding', desc: 'In-depth interview protocols with theoretical saturation analysis.' },
  };

  const activeRadar = radarCoords[radarTarget];

  // Bento Discipline Data
  const bentoData = {
    management: { percent: '98%', rubric: 'GLA / AMU Management DRC Standard', desc: 'APA 7th, empirical hypothesis testing, and regression equation standardization.' },
    sciences: { percent: '96%', rubric: 'Empirical Replicability & Control Norms', desc: 'Vancouver reference format, G*Power verification, and control group design.' },
    engineering: { percent: '99%', rubric: 'IEEE Formatting & Scopus Alignment', desc: 'Mathematical notation, algorithm complexity proofs, and benchmark evaluations.' },
    social: { percent: '97%', rubric: 'UGC-CARE Social Sciences Viva Norms', desc: 'Chicago 17th citation style, stratified demographic audits, and thematic coding.' }
  };

  const activeBento = bentoData[bentoDiscipline];

  return (
    <div className="space-y-16 sm:space-y-24 pb-20 font-sans text-[#0B2D3A] select-none">
      
      {/* =========================================================================
          SECTION 1: HERO & INTERACTIVE ADVISORY REVIEW
      ========================================================================= */}
      <section className="pt-8 sm:pt-14 px-4 sm:px-8 max-w-7xl mx-auto space-y-10">
        
        {/* Title Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#0B2D3A] leading-[1.08]">
            Academic Research, <br />
            <span className="font-serif italic font-normal text-[#2772A0]">Reimagined</span>
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto">
            Turn complex academic inquiries into refined, defense-ready scholarly directions.
          </p>
        </div>

        {/* Hero Visual Scenic Card with Real Meadow Backdrop & Deep Navy Glass HUD */}
        <div className="relative rounded-3xl overflow-hidden p-6 sm:p-12 border border-[#CCDDEA] shadow-subtle">
          <img 
            src="/images/bg-hero-meadow.webp" 
            alt="Scenic sunlight and meadow background" 
            className="absolute inset-0 w-full h-full object-cover"
            loading="eager"
          />

          {/* Centered Glassmorphic Advisory Card */}
          <div className="relative z-10 max-w-3xl mx-auto bg-[#0B2D3A]/95 backdrop-blur-md rounded-2xl sm:rounded-3xl p-5 sm:p-8 text-white border border-[#C4DEE3]/30 shadow-elevated space-y-5">
            
            {/* Top Interactive Scenario Switcher */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs border-b border-white/10 pb-3">
              <span className="font-mono font-bold uppercase tracking-wider text-[#C4DEE3] flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#0082A6]" />
                <span>{activeScenario.tag}</span>
              </span>

              {/* 3 Clickable Scenario Pills */}
              <div className="flex items-center gap-1 bg-black/40 p-1 rounded-full border border-white/10 text-[11px]">
                <button
                  onClick={() => setHeroScenario('thesis')}
                  className={`px-3 py-1 rounded-full transition-colors ${
                    heroScenario === 'thesis'
                      ? 'bg-[#0082A6] text-white font-bold'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  Thesis DRC
                </button>
                <button
                  onClick={() => setHeroScenario('scopus')}
                  className={`px-3 py-1 rounded-full transition-colors ${
                    heroScenario === 'scopus'
                      ? 'bg-[#0082A6] text-white font-bold'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  Scopus Q1
                </button>
                <button
                  onClick={() => setHeroScenario('synopsis')}
                  className={`px-3 py-1 rounded-full transition-colors ${
                    heroScenario === 'synopsis'
                      ? 'bg-[#0082A6] text-white font-bold'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  Synopsis RDC
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              {/* Left Column: Chat Dialogue */}
              <div className="md:col-span-7 space-y-3 text-xs leading-relaxed">
                {/* User Bubble 1 */}
                <div className="flex justify-end">
                  <div className="bg-white/15 px-4 py-2 rounded-2xl rounded-tr-xs text-white max-w-[85%]">
                    {activeScenario.user1}
                  </div>
                </div>

                {/* YouKnowVerse Advisory Response 1 */}
                <div className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-[#0082A6] flex items-center justify-center text-[10px] text-white font-bold shrink-0 mt-0.5">
                    Y
                  </div>
                  <div className="text-slate-200 bg-black/40 px-3.5 py-2 rounded-2xl rounded-tl-xs max-w-[90%] leading-normal">
                    {activeScenario.ai1}
                  </div>
                </div>

                {/* User Bubble 2 */}
                <div className="flex justify-end">
                  <div className="bg-white/15 px-4 py-2 rounded-2xl rounded-tr-xs text-white max-w-[85%]">
                    {activeScenario.user2}
                  </div>
                </div>

                {/* YouKnowVerse Advisory Response 2 */}
                <div className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-[#0082A6] flex items-center justify-center text-[10px] text-white font-bold shrink-0 mt-0.5">
                    Y
                  </div>
                  <div className="text-slate-200 bg-black/40 px-3.5 py-2 rounded-2xl rounded-tl-xs max-w-[90%] leading-normal">
                    {activeScenario.ai2}
                  </div>
                </div>
              </div>

              {/* Right Column: Inset Deliverable Preview */}
              <div className="md:col-span-5 bg-black/30 rounded-2xl p-3.5 border border-white/10 space-y-3">
                <div className="text-[10px] font-bold uppercase tracking-wider text-[#C4DEE3]">
                  Defensible Milestone Output
                </div>
                <img 
                  src={activeScenario.image} 
                  alt="Doctoral scholar reviewing manuscript" 
                  className="w-full h-36 object-cover rounded-xl border border-white/20 shadow-xs"
                />
                <div className="flex items-center justify-between text-[11px] text-slate-300 pt-1">
                  <span>{activeScenario.badge}</span>
                  <span className="text-[#C4DEE3] font-bold">{activeScenario.status}</span>
                </div>
              </div>
            </div>

            {/* Bottom Status & Alignment Slider */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-3 border-t border-white/10 text-xs">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">Research Direction</span>
                <span className="font-bold text-white text-sm">{activeScenario.direction}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] text-slate-300">DRC Alignment: <strong>{activeScenario.percent}</strong></span>
                <div className="w-24 h-2 bg-white/20 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-[#0082A6] rounded-full transition-all duration-300"
                    style={{ width: activeScenario.percent }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            HOW IT WORKS: COMPARISON STEPPER
        ========================================================================= */}
        <div className="space-y-6 pt-4">
          <div className="text-center space-y-2">
            <span className="px-3.5 py-1 rounded-full bg-[#EBF5F8] text-[#0082A6] text-xs font-bold uppercase tracking-wider">
              HOW IT WORKS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2D3A]">
              Your Ideas, <br className="sm:hidden" />
              <span className="font-serif italic font-normal text-[#2772A0]">Understood in Context</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto">
              YouKnowVerse connects your thesis draft, university guidelines, empirical data, and citations to uncover the scholarly rigor behind every study.
            </p>
          </div>

          {/* Stepper Card 1: Creative without context */}
          <div className="bg-white rounded-3xl border border-[#CCDDEA] p-6 sm:p-8 shadow-subtle space-y-4">
            <h3 className="font-bold text-base text-[#0B2D3A]">
              Research without guidance
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2 border-t border-slate-100 text-xs">
              <div className="space-y-1">
                <div className="text-slate-400 font-mono text-[11px]">Step 1</div>
                <div className="font-bold text-slate-800">Start with raw draft</div>
                <div className="text-[11px] text-slate-500">A single idea with limited academic context.</div>
              </div>
              <div className="space-y-1">
                <div className="text-slate-400 font-mono text-[11px]">Step 2</div>
                <div className="font-bold text-slate-800">Submit blindly</div>
                <div className="text-[11px] text-slate-500">Proceed without understanding DRC guidelines.</div>
              </div>
              <div className="space-y-1">
                <div className="text-slate-400 font-mono text-[11px]">Step 3</div>
                <div className="font-bold text-slate-800">Refine manually</div>
                <div className="text-[11px] text-slate-500">Repeat revisions until deadlines approach.</div>
              </div>
              <div className="space-y-1">
                <div className="text-rose-600 font-mono text-[11px]">Step 4</div>
                <div className="font-bold text-rose-700">Inconsistent results</div>
                <div className="text-[11px] text-rose-600/80">Formatting rejection, disconnected direction.</div>
              </div>
            </div>
          </div>

          {/* Stepper Card 2: Creative with intelligence */}
          <div className="relative rounded-3xl overflow-hidden p-6 sm:p-8 text-white shadow-premium border border-[#0082A6]/40">
            <img 
              src="/images/bg-hero-meadow.webp" 
              alt="Meadow backdrop" 
              className="absolute inset-0 w-full h-full object-cover brightness-[0.55]"
            />
            <div className="relative z-10 space-y-4">
              <h3 className="font-bold text-lg text-white">
                Research with YouKnowVerse
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2 border-t border-white/20 text-xs">
                <div className="space-y-1">
                  <div className="text-[#C4DEE3] font-mono text-[11px] font-bold">Step 1</div>
                  <div className="font-bold text-white">Understand your university</div>
                  <div className="text-[11px] text-slate-200">YouKnowVerse learns your specific DRC rules.</div>
                </div>
                <div className="space-y-1">
                  <div className="text-[#C4DEE3] font-mono text-[11px] font-bold">Step 2</div>
                  <div className="font-bold text-white">Read the references</div>
                  <div className="text-[11px] text-slate-200">Analyze peer-reviewed cues that matter.</div>
                </div>
                <div className="space-y-1">
                  <div className="text-[#C4DEE3] font-mono text-[11px] font-bold">Step 3</div>
                  <div className="font-bold text-white">Shape the direction</div>
                  <div className="text-[11px] text-slate-200">Turn context into a focused doctoral concept.</div>
                </div>
                <div className="space-y-1">
                  <div className="text-[#C4DEE3] font-mono text-[11px] font-bold">Step 4</div>
                  <div className="font-bold text-white">Clear with purpose</div>
                  <div className="text-[11px] text-slate-200">Defend visuals and prose aligned with UGC norms.</div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* =========================================================================
          SECTION 2: "FROM CONTEXT TO CREATION" & INTERACTIVE 3-CARD BENTO
      ========================================================================= */}
      <section className="px-4 sm:px-8 max-w-7xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <span className="px-3.5 py-1 rounded-full bg-[#EBF5F8] text-[#0082A6] text-xs font-bold uppercase tracking-wider">
            FROM CONTEXT TO CREATION
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0B2D3A]">
            Ideas Become Clearer with <br />
            <span className="font-serif italic font-normal text-[#2772A0]">The Right Direction</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto">
            Move beyond one-off prompts. YouKnowVerse connects your brief, university brand, and empirical references to build defensible academic direction.
          </p>
        </div>

        {/* 3-Card Bento on Soft Sky Gradient Surface */}
        <div className="relative rounded-3xl p-6 sm:p-10 overflow-hidden border border-[#CCDDEA] shadow-subtle">
          <img 
            src="/images/bg-sky-dots.webp" 
            alt="Soft sky background with dots" 
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Bento Card 1: Understand what makes your research defensible */}
            <div className="bg-white/90 backdrop-blur-md rounded-2xl p-6 border border-white/80 shadow-xs flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <h3 className="text-2xl font-extrabold text-[#0B2D3A] leading-tight">
                  Understand what <br />
                  <span className="font-serif italic font-normal text-[#2772A0]">makes your study defensible.</span>
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  YouKnowVerse learns your department's DRC formatting, citation style, and research gap to build a stronger foundation for every thesis defense.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#0082A6]">
                <span>DRC Formatting Protocols</span>
                <span>→</span>
              </div>
            </div>

            {/* Bento Card 2: Find The Research Gap */}
            <div className="bg-white/90 backdrop-blur-md rounded-2xl p-6 border border-white/80 shadow-xs flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2 justify-center py-2">
                  <img 
                    src="/images/topic-guidance.webp" 
                    alt="Research signal 1" 
                    className="w-16 h-16 object-cover rounded-xl shadow-xs -rotate-6 border border-white"
                  />
                  <img 
                    src="/images/synopsis-review.webp" 
                    alt="Research signal 2" 
                    className="w-20 h-20 object-cover rounded-xl shadow-sm z-10 border-2 border-white"
                  />
                  <img 
                    src="/images/research-paper.webp" 
                    alt="Research signal 3" 
                    className="w-16 h-16 object-cover rounded-xl shadow-xs rotate-6 border border-white"
                  />
                </div>
                <h3 className="font-extrabold text-lg text-[#0B2D3A] pt-2">
                  Find The Research Gap
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  YouKnowVerse analyzes your reference matrix to uncover the methodologies, empirical patterns, and visual cues worth exploring.
                </p>
              </div>
              <div className="pt-2 text-xs font-bold text-[#0082A6] flex items-center justify-between">
                <span>Literature Matrix Engine</span>
                <span>→</span>
              </div>
            </div>

            {/* Bento Card 3: Interactive Arc Gauge Meter with Discipline Selector */}
            <div className="bg-white/90 backdrop-blur-md rounded-2xl p-6 border border-white/80 shadow-xs flex flex-col justify-between space-y-4 text-center">
              <div className="space-y-3">
                {/* Discipline Filter Tabs */}
                <div className="flex items-center justify-center gap-1 bg-[#F7F5ED] p-1 rounded-full text-[10px]">
                  {[
                    { id: 'management', label: 'Mgmt' },
                    { id: 'sciences', label: 'Science' },
                    { id: 'engineering', label: 'Engg' },
                    { id: 'social', label: 'Social' }
                  ].map(d => (
                    <button
                      key={d.id}
                      onClick={() => setBentoDiscipline(d.id as any)}
                      className={`px-2 py-0.5 rounded-full transition-colors ${
                        bentoDiscipline === d.id
                          ? 'bg-[#0082A6] text-white font-bold'
                          : 'text-slate-600 hover:text-black'
                      }`}
                    >
                      {d.label}
                    </button>
                  ))}
                </div>

                {/* SVG Semi-Circle Gauge Meter */}
                <div className="relative w-40 h-24 mx-auto pt-1">
                  <svg viewBox="0 0 100 55" className="w-full h-full">
                    <path
                      d="M 10 50 A 40 40 0 0 1 90 50"
                      fill="none"
                      stroke="#CCDDEA"
                      strokeWidth="8"
                      strokeLinecap="round"
                    />
                    <path
                      d="M 10 50 A 40 40 0 0 1 90 50"
                      fill="none"
                      stroke="#0082A6"
                      strokeWidth="8"
                      strokeDasharray="125.6"
                      strokeDashoffset="8"
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-x-0 bottom-0 text-center">
                    <span className="text-2xl font-black text-[#0B2D3A]">{activeBento.percent}</span>
                  </div>
                </div>

                <div className="flex justify-between text-[10px] font-bold text-slate-400 px-2">
                  <span>RAW DRAFT</span>
                  <span className="text-[#0082A6]">DRC COMPLIANT</span>
                </div>

                <h3 className="font-extrabold text-sm text-[#0B2D3A] pt-1">
                  {activeBento.rubric}
                </h3>
                <p className="text-[11px] text-slate-600 leading-snug">
                  {activeBento.desc}
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: "CREATIVE EXPLORATION" & INTERACTIVE RADAR COMPASS
      ========================================================================= */}
      <section className="px-4 sm:px-8 max-w-7xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <span className="px-3.5 py-1 rounded-full bg-[#EBF5F8] text-[#0082A6] text-xs font-bold uppercase tracking-wider">
            CREATIVE EXPLORATION
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0B2D3A]">
            One Research Direction, <br />
            <span className="font-serif italic font-normal text-[#2772A0]">Endless Ways to Publish</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto">
            YouKnowVerse turns a focused research problem into flexible doctoral chapters, Scopus journal articles, and defense dossiers.
          </p>
          <div className="flex items-center justify-center gap-4 text-xs font-bold text-slate-700 pt-2">
            <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-emerald-600" /> Built from your guidelines</span>
            <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-emerald-600" /> Ready to defend</span>
          </div>
        </div>

        {/* Radar Compass & Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          
          {/* Left 4 Cols: 3 Service Module Cards */}
          <div className="lg:col-span-4 space-y-3">
            {[
              { title: 'PhD Thesis Line-Editing', count: '12 chapters standard', img: '/images/thesis-editing.webp', slug: 'thesis-editing', id: 'srv-003' },
              { title: 'Research Paper Support', count: 'Scopus & UGC-CARE', img: '/images/research-paper.webp', slug: 'research-paper-support', id: 'srv-004' },
              { title: 'Synopsis Review', count: 'Proposal clearance', img: '/images/synopsis-review.webp', slug: 'synopsis-review', id: 'srv-002' }
            ].map((s, idx) => (
              <div 
                key={idx} 
                onClick={() => onNavigate('service-detail', { slug: s.slug })}
                className="bg-white rounded-2xl border border-[#CCDDEA] p-4 shadow-subtle flex items-center justify-between hover:border-[#0082A6] cursor-pointer transition-colors"
              >
                <div className="flex items-center gap-3">
                  <img src={s.img} alt={s.title} className="w-12 h-12 rounded-xl object-cover" />
                  <div>
                    <h4 className="font-bold text-sm text-[#0B2D3A]">{s.title}</h4>
                    <span className="text-[11px] text-slate-500">{s.count}</span>
                  </div>
                </div>
                <button 
                  onClick={(e) => { e.stopPropagation(); onOpenInquiry(s.id); }}
                  className="w-7 h-7 rounded-full bg-[#EBF5F8] text-[#0082A6] hover:bg-[#0082A6] hover:text-white flex items-center justify-center transition-colors"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>

          {/* Center 4 Cols: The Interactive Academic Radar Compass */}
          <div className="lg:col-span-4 bg-[#0B2D3A] text-white rounded-3xl p-6 shadow-premium text-center space-y-4 border border-[#C4DEE3]/20">
            <div className="flex items-center justify-between text-xs">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#C4DEE3] flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5 text-[#0082A6]" />
                <span>INTERACTIVE RADAR</span>
              </span>
              <span className="text-[10px] text-slate-400">Click a quadrant</span>
            </div>

            {/* Compass / Radar Chart SVG */}
            <div className="relative w-48 h-48 mx-auto">
              <svg viewBox="0 0 100 100" className="w-full h-full opacity-90">
                <circle cx="50" cy="50" r="45" fill="none" stroke="rgba(196, 222, 227, 0.2)" strokeWidth="1" />
                <circle cx="50" cy="50" r="30" fill="none" stroke="rgba(196, 222, 227, 0.2)" strokeWidth="1" />
                <circle cx="50" cy="50" r="15" fill="none" stroke="rgba(196, 222, 227, 0.2)" strokeWidth="1" />
                <line x1="50" y1="5" x2="50" y2="95" stroke="rgba(196, 222, 227, 0.25)" strokeWidth="1" />
                <line x1="5" y1="50" x2="95" y2="50" stroke="rgba(196, 222, 227, 0.25)" strokeWidth="1" />
                
                {/* Active Dynamic Data Point */}
                <circle cx={activeRadar.cx} cy={activeRadar.cy} r="4" fill="#0082A6" />
                <circle cx={activeRadar.cx} cy={activeRadar.cy} r="9" fill="rgba(0, 130, 166, 0.35)" />
              </svg>
              
              {/* Interactive Quadrant Buttons */}
              <button 
                onClick={() => setRadarTarget('empirical')}
                className={`absolute top-1 inset-x-0 text-[10px] font-bold transition-colors ${
                  radarTarget === 'empirical' ? 'text-[#C4DEE3] underline' : 'text-slate-400 hover:text-white'
                }`}
              >
                ▲ Empirical
              </button>
              <button 
                onClick={() => setRadarTarget('qualitative')}
                className={`absolute bottom-1 inset-x-0 text-[10px] font-bold transition-colors ${
                  radarTarget === 'qualitative' ? 'text-[#C4DEE3] underline' : 'text-slate-400 hover:text-white'
                }`}
              >
                ▼ Qualitative
              </button>
              <button 
                onClick={() => setRadarTarget('literature')}
                className={`absolute left-0 top-1/2 -translate-y-1/2 text-[10px] font-bold transition-colors ${
                  radarTarget === 'literature' ? 'text-[#C4DEE3] underline' : 'text-slate-400 hover:text-white'
                }`}
              >
                ◄ Literature
              </button>
              <button 
                onClick={() => setRadarTarget('statistical')}
                className={`absolute right-0 top-1/2 -translate-y-1/2 text-[10px] font-bold transition-colors ${
                  radarTarget === 'statistical' ? 'text-[#C4DEE3] underline' : 'text-slate-400 hover:text-white'
                }`}
              >
                Statistical ►
              </button>
            </div>

            <div className="pt-2 border-t border-white/10 space-y-1 text-left">
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-300 font-semibold">{activeRadar.label}:</span>
                <span className="text-[#C4DEE3] font-bold text-[11px]">{activeRadar.method}</span>
              </div>
              <p className="text-[10px] text-slate-400 leading-snug">
                {activeRadar.desc}
              </p>
            </div>
          </div>

          {/* Right 4 Cols: 3 More Service Modules Joined */}
          <div className="lg:col-span-4 bg-white rounded-3xl border border-[#CCDDEA] shadow-subtle divide-y divide-[#CCDDEA] overflow-hidden">
            {[
              { title: 'Statistical Analysis (SPSS)', count: 'ANOVA, Regression, AMOS', img: '/images/topic-guidance.webp', slug: 'statistical-analysis-spss', id: 'srv-007' },
              { title: 'Publication Assistance', count: 'Verified Scopus & UGC-CARE', img: '/images/publication-assistance.webp', slug: 'publication-assistance', id: 'srv-005' },
              { title: 'Literature Discovery Matrix', count: '45+ peer-reviewed papers', img: '/images/literature-search.webp', slug: 'literature-search-support', id: 'srv-006' }
            ].map((s, idx) => (
              <div 
                key={idx} 
                onClick={() => onNavigate('service-detail', { slug: s.slug })}
                className="p-4 flex items-center justify-between hover:bg-[#EBF5F8]/50 cursor-pointer transition-colors"
              >
                <div className="flex items-center gap-3">
                  <img src={s.img} alt={s.title} className="w-12 h-12 rounded-xl object-cover" />
                  <div>
                    <h4 className="font-bold text-sm text-[#0B2D3A]">{s.title}</h4>
                    <span className="text-[11px] text-slate-500">{s.count}</span>
                  </div>
                </div>
                <button 
                  onClick={(e) => { e.stopPropagation(); onOpenInquiry(s.id); }}
                  className="w-7 h-7 rounded-full bg-[#EBF5F8] text-[#0082A6] hover:bg-[#0082A6] hover:text-white flex items-center justify-center transition-colors"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 4: "FROM RESEARCH SCOPE TO DELIVERABLES" & CALCULATOR
      ========================================================================= */}
      <section className="px-4 sm:px-8 max-w-7xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <span className="px-3.5 py-1 rounded-full bg-[#EBF5F8] text-[#0082A6] text-xs font-bold uppercase tracking-wider">
            AI &amp; HUMAN EDITORIAL PRODUCTION
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0B2D3A]">
            From Research Scope to <br />
            <span className="font-serif italic font-normal text-[#2772A0]">Finished Deliverables</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto">
            YouKnowVerse transforms raw research drafts into polished, publication-ready chapters, audited datasets, and campaign-ready assets.
          </p>
        </div>

        {/* Studio Bento with Radiant Card + Live Calculator */}
        <div className="bg-white/80 rounded-3xl p-6 sm:p-10 border border-[#CCDDEA] shadow-subtle space-y-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Center Hero Visual Card with Hardcover Thesis Deliverable */}
            <div className="lg:col-span-5 bg-white rounded-3xl p-6 border border-[#CCDDEA] shadow-subtle space-y-4">
              <div className="flex items-center justify-between text-xs">
                <span className="px-2.5 py-1 rounded-full bg-[#EBF5F8] text-[#0082A6] font-bold uppercase text-[10px]">
                  DEFENSE READY
                </span>
                <span className="font-mono text-xs text-slate-400">DRC-2026-v4</span>
              </div>

              <div className="relative rounded-2xl overflow-hidden border border-slate-200">
                <img 
                  src="/images/thesis-editing.webp" 
                  alt="Doctoral manuscript deliverable" 
                  className="w-full h-56 object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-white">
                  <div className="text-xs font-semibold text-[#C4DEE3]">Hero Deliverable</div>
                  <div className="font-bold text-sm">Full PhD Thesis Dissertation</div>
                </div>
              </div>

              <div className="space-y-1.5 text-xs text-slate-700 pt-1">
                <div className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> 100% Plagiarism &amp; AI Free Guarantee</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> APA 7th Standardized Reference List</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Ready for Immediate RDC / DRC Defense</div>
              </div>
            </div>

            {/* Right 7 Cols: Live Interactive Quotation Estimator */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-[#CCDDEA] shadow-subtle space-y-6">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div>
                  <h3 className="font-extrabold text-xl text-[#0B2D3A]">
                    Instant Research Calculator
                  </h3>
                  <p className="text-xs text-slate-500">Live Indian Rupee (₹) estimation with transparent delivery dates.</p>
                </div>
                <span className="px-3 py-1 rounded-full bg-[#EBF5F8] text-[#0082A6] text-xs font-bold">
                  Zero Hidden Fees
                </span>
              </div>

              {/* Module Buttons */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                  Select Required Academic Module
                </label>
                <div className="p-1 rounded-2xl sm:rounded-full bg-[#F7F5ED] border border-[#CCDDEA] grid grid-cols-2 sm:grid-cols-4 gap-1">
                  {[
                    { id: 'thesis', label: 'PhD Thesis' },
                    { id: 'paper', label: 'Research Paper' },
                    { id: 'synopsis', label: 'Synopsis' },
                    { id: 'spss', label: 'SPSS Analysis' }
                  ].map((s) => (
                    <button
                      key={s.id}
                      onClick={() => setCalcService(s.id as any)}
                      className={`py-2 px-3 rounded-xl sm:rounded-full text-xs font-bold transition-all text-center ${
                        calcService === s.id
                          ? 'bg-[#0082A6] text-white shadow-xs'
                          : 'text-[#0B2D3A]/80 hover:text-[#0082A6] hover:bg-white/80'
                      }`}
                    >
                      {s.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Word Count Slider */}
              {(calcService === 'thesis' || calcService === 'paper') && (
                <div className="space-y-2 bg-[#F7F5ED] p-4 rounded-2xl border border-slate-200/80">
                  <div className="flex justify-between text-xs">
                    <span className="font-bold text-slate-700">Estimated Manuscript Word Count:</span>
                    <span className="font-mono font-black text-sm text-[#0082A6]">
                      {calcWords.toLocaleString()} words
                    </span>
                  </div>
                  <input
                    type="range"
                    min={2000}
                    max={60000}
                    step={1000}
                    value={calcWords}
                    onChange={(e) => setCalcWords(parseInt(e.target.value))}
                    className="w-full accent-[#0082A6] cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400">
                    <span>2,000 words (Paper)</span>
                    <span>30,000 words (Dissertation)</span>
                    <span>60,000 words (Full Thesis)</span>
                  </div>
                </div>
              )}

              {/* Turnaround Speed Toggle */}
              <div className="flex items-center justify-between bg-[#F7F5ED] p-3 rounded-2xl border border-slate-200/80 text-xs">
                <div>
                  <span className="font-bold text-slate-800">Turnaround Speed</span>
                  <p className="text-[11px] text-slate-500">Standard review vs. priority allocation</p>
                </div>
                <div className="flex items-center gap-1 bg-slate-200/70 p-1 rounded-xl">
                  <button
                    onClick={() => setCalcUrgency('standard')}
                    className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                      calcUrgency === 'standard' ? 'bg-white text-black shadow-xs' : 'text-slate-600'
                    }`}
                  >
                    Standard
                  </button>
                  <button
                    onClick={() => setCalcUrgency('priority')}
                    className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                      calcUrgency === 'priority' ? 'bg-[#0082A6] text-white shadow-xs' : 'text-slate-600'
                    }`}
                  >
                    Priority (+25%)
                  </button>
                </div>
              </div>

              {/* Urgency & Live Price Output */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">Estimated Quotation</span>
                  <div className="text-3xl sm:text-4xl font-black text-[#0B2D3A]">
                    ₹{calculatePrice().toLocaleString('en-IN')}
                  </div>
                  <span className="text-[11px] text-slate-500 font-medium">Turnaround: {getEstimatedDays()}</span>
                </div>

                <a
                  href={`https://wa.me/919760498896?text=Hello%20YouKnowVerse%2C%20I%20used%20the%20website%20calculator.%20Service%3A%20${calcService}%2C%20Words%3A%20${calcWords}%2C%20Quote%3A%20%E2%82%B9${calculatePrice()}%20(${getEstimatedDays()}).%20Please%20confirm%20availability.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#0082A6] hover:bg-[#006F8E] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-subtle"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Estimate to WhatsApp</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: "WHAT YOUKNOWVERSE INCLUDES" & ACCORDION
      ========================================================================= */}
      <section className="px-4 sm:px-8 max-w-7xl mx-auto space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left 6 Cols: Feature List */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2D3A] leading-tight">
                Complete Guidance, <br />
                <span className="font-serif italic font-normal text-[#2772A0]">without Starting from Scratch</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-2">
                YouKnowVerse brings your research context, methodology, and creative production into one intelligent workflow.
              </p>
            </div>

            <div className="space-y-3">
              {[
                { title: 'Research Context', desc: 'Bring your university guidelines, past RDC feedback, and drafts together so every edit starts with full institutional context.' },
                { title: 'Methodological Direction', desc: 'Turn scattered notes into a focused problem statement with testable hypotheses and sampling formulas.' },
                { title: 'Statistical Rigor', desc: 'Perform licensed SPSS, AMOS, and R regressions, reliability tests, and APA formatted tables.' },
                { title: 'Indexed Publication', desc: 'Format for Scopus and UGC-CARE journals with point-by-point reviewer rebuttal letters.' },
              ].map((item, idx) => (
                <div key={idx} className="bg-white rounded-2xl border border-[#CCDDEA] p-4 shadow-subtle flex items-start gap-3.5">
                  <div className="w-7 h-7 rounded-xl bg-[#EBF5F8] text-[#0082A6] flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    {idx + 1}
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[#0B2D3A]">{item.title}</h4>
                    <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right 6 Cols: Scenic Photo Showcase Card */}
          <div className="lg:col-span-6 relative rounded-3xl overflow-hidden border border-[#CCDDEA] shadow-subtle">
            <img 
              src="/images/academic-team.webp" 
              alt="YouKnowVerse Senior Academic Mentors in Mathura" 
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent flex flex-col justify-end p-6 text-white space-y-2">
              <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-[10px] font-bold uppercase tracking-wider self-start text-[#C4DEE3]">
                CIVIL LINES, MATHURA FACILITY
              </span>
              <h3 className="font-extrabold text-xl">15+ PhD Subject Mentors &amp; Methodologists</h3>
              <p className="text-xs text-slate-300">Trusted by doctoral scholars across AMU, DEI Agra, DU, BHU, and GLA University.</p>
            </div>
          </div>

        </div>

        {/* Minimalist FAQ Accordion */}
        <div className="space-y-6 pt-8 border-t border-[#CCDDEA]">
          <div className="text-center space-y-2">
            <span className="px-3.5 py-1 rounded-full bg-[#EBF5F8] text-[#0082A6] text-xs font-bold uppercase tracking-wider">
              COMMON QUESTIONS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2D3A]">
              Everything you Might <br />
              <span className="font-serif italic font-normal text-[#2772A0]">Want to Know</span>
            </h2>
          </div>

          <div className="max-w-3xl mx-auto bg-white rounded-3xl border border-[#CCDDEA] shadow-subtle divide-y divide-[#CCDDEA] overflow-hidden">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div 
                  key={faq.id}
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className={`transition-colors cursor-pointer p-5 sm:p-6 select-none ${
                    isOpen 
                      ? 'bg-[#EBF5F8]/60' 
                      : 'hover:bg-[#F7F5ED]/50'
                  }`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <h4 className="font-bold text-sm sm:text-base text-[#0B2D3A]">
                      {faq.question}
                    </h4>
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-colors shadow-2xs ${
                      isOpen ? 'bg-[#0082A6] text-white' : 'bg-[#EBF5F8] text-[#0082A6]'
                    }`}>
                      {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                    </div>
                  </div>
                  {isOpen && (
                    <p className="text-xs sm:text-sm text-slate-600 pt-3 leading-relaxed border-t border-[#86B9C7]/30 mt-3">
                      {faq.answer}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6: "SHAPE IDEAS" CTA BANNER
      ========================================================================= */}
      <section className="px-4 sm:px-8 max-w-7xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden p-8 sm:p-16 text-center space-y-6 border border-[#CCDDEA] shadow-premium">
          {/* Floral / Meadow Backdrop */}
          <img 
            src="/images/bg-cta-floral.webp" 
            alt="Floral meadow CTA background" 
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="relative z-10 max-w-xl mx-auto space-y-3">
            <h2 className="text-4xl sm:text-6xl font-black text-[#0B2D3A] leading-[1.08] tracking-tight">
              Shape Your <br />
              Research
            </h2>
            <p className="text-xs sm:text-sm text-slate-700">
              Bring your ideas and draft to YouKnowVerse, and turn them into a defense-cleared thesis built to go further.
            </p>
          </div>

          {/* Integrated Input Pill */}
          <div className="max-w-md mx-auto bg-white rounded-full p-1.5 shadow-premium border border-[#CCDDEA] flex items-center gap-2">
            <input 
              type="text" 
              placeholder="Enter your phone or WhatsApp..." 
              className="w-full bg-transparent pl-4 text-xs text-[#0B2D3A] placeholder-slate-400 focus:outline-none"
            />
            <button 
              onClick={onOpenBooking}
              className="px-6 py-2.5 rounded-full bg-[#0082A6] hover:bg-[#006F8E] text-white text-xs font-bold uppercase tracking-wider shrink-0 transition-all shadow-xs"
            >
              Start Creating
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
