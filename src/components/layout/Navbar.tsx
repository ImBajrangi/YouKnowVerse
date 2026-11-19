import React, { useState, useEffect } from 'react';
import { 
  GraduationCap, 
  Menu, 
  X, 
  PhoneCall, 
  Calendar, 
  UserCheck, 
  ShieldCheck, 
  ChevronDown, 
  LogOut,
  BookOpen,
  FileText,
  Calculator,
  Compass,
  ArrowRight,
  MessageCircle,
  MapPin
} from 'lucide-react';
import { UserProfile } from '../../types';

export interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string, params?: Record<string, string>) => void;
  currentUser: UserProfile | null;
  onOpenBooking: () => void;
  onOpenInquiry: () => void;
  onSwitchRole: (role: 'client' | 'admin' | 'none') => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  currentUser,
  onOpenBooking,
  onSwitchRole,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [roleSwitcherOpen, setRoleSwitcherOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Monitor scroll for Company-style dynamic header elevation
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open for seamless mobile UX
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (pageId: string, params?: Record<string, string>) => {
    onNavigate(pageId, params);
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    setRoleSwitcherOpen(false);
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services', hasDropdown: true },
    { id: 'how-it-works', label: 'How It Works' },
    { id: 'quote-request', label: 'Calculator' },
    { id: 'resources', label: 'Research Blog' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];

  const quickServices = [
    { slug: 'research-topic-guidance', title: 'Topic Guidance & Gap Analysis', icon: Compass },
    { slug: 'synopsis-review', title: 'Doctoral Synopsis Review', icon: FileText },
    { slug: 'thesis-editing', title: 'PhD Thesis Editing & Formatting', icon: GraduationCap },
    { slug: 'research-paper-support', title: 'Scopus & UGC-CARE Publishing', icon: BookOpen },
    { slug: 'statistical-analysis-spss', title: 'Statistical Analysis (SPSS/R)', icon: Calculator },
  ];

  return (
    <header 
      className={`sticky top-0 z-50 w-full transition-all duration-300 select-none ${
        isScrolled 
          ? 'bg-[#F7F5ED]/95 backdrop-blur-xl border-b border-[#CCDDEA] shadow-[0_4px_24px_-4px_rgba(11,45,58,0.08)] py-3' 
          : 'bg-[#F7F5ED]/90 backdrop-blur-md border-b border-[#CCDDEA]/60 py-3.5 sm:py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between gap-4">
        
        {/* =========================================================================
            LEFT: Brand Identity (Logo + Emblem + Mathura Heritage Tag)
            Modeled after Company/index.html .logo
        ========================================================================= */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3 text-left focus:outline-none group shrink-0"
          aria-label="YouKnowVerse Home"
        >
          {/* Logo Emblem */}
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-gradient-to-tr from-[#0082A6] to-[#2772A0] text-white flex items-center justify-center shadow-xs border border-white/20 transition-transform group-hover:scale-105">
            <GraduationCap className="w-5 h-5 text-white" />
          </div>

          {/* Typography + Location Tag */}
          <div className="flex flex-col">
            <div className="flex items-baseline gap-0.5">
              <span className="text-lg sm:text-xl font-extrabold tracking-tight text-[#0B2D3A]">
                YouKnow
              </span>
              <span className="text-lg sm:text-xl font-serif italic font-normal text-[#2772A0]">
                Verse
              </span>
            </div>
            <div className="hidden sm:flex items-center gap-1.5 text-[10px] uppercase font-bold tracking-wider text-[#0082A6]/80 -mt-0.5">
              <span>Mathura, UP</span>
              <span className="text-[#86B9C7]">•</span>
              <span>Academic Advisory</span>
            </div>
          </div>
        </button>

        {/* =========================================================================
            CENTER: Creatively Joined Unified Navigation Bar (.main-nav)
            Modeled after Company/index.html .main-nav:
            Instead of loose distributed pills, all links are joined inside ONE 
            continuous, sleek glass track with concentric border radius.
        ========================================================================= */}
        <div className="hidden lg:flex items-center">
          <nav 
            className="inline-flex items-center p-1 rounded-full bg-white/80 border border-[#CCDDEA] backdrop-blur-md shadow-2xs"
            aria-label="Main Navigation"
          >
            {navItems.map((item) => {
              const isActive = currentPage === item.id || (item.id === 'services' && currentPage === 'service-detail');

              if (item.hasDropdown) {
                return (
                  <div 
                    key={item.id} 
                    className="relative"
                    onMouseEnter={() => setServicesDropdownOpen(true)}
                    onMouseLeave={() => setServicesDropdownOpen(false)}
                  >
                    <button
                      onClick={() => handleNavClick('services')}
                      className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-colors flex items-center gap-1 ${
                        isActive
                          ? 'bg-[#0082A6] text-white shadow-xs font-bold'
                          : 'text-[#0B2D3A]/75 hover:text-[#0082A6] hover:bg-[#F7F5ED]'
                      }`}
                    >
                      <span>{item.label}</span>
                      <ChevronDown className={`w-3 h-3 transition-transform ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>

                    {/* Joined Service Flyout Menu */}
                    {servicesDropdownOpen && (
                      <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-2xl border border-[#CCDDEA] shadow-premium p-2 z-50 text-xs">
                        <div className="px-3 py-1.5 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                          Doctoral & Master's Services
                        </div>
                        {quickServices.map((svc) => {
                          const IconComp = svc.icon;
                          return (
                            <button
                              key={svc.slug}
                              onClick={() => handleNavClick('service-detail', { slug: svc.slug })}
                              className="w-full text-left px-3 py-2 rounded-xl hover:bg-[#EBF5F8] text-[#0B2D3A] flex items-center gap-2.5 transition-colors group"
                            >
                              <div className="w-6 h-6 rounded-lg bg-[#EBF5F8] group-hover:bg-[#0082A6] group-hover:text-white text-[#0082A6] flex items-center justify-center shrink-0 transition-colors">
                                <IconComp className="w-3.5 h-3.5" />
                              </div>
                              <span className="font-semibold text-xs leading-tight line-clamp-1">{svc.title}</span>
                            </button>
                          );
                        })}
                        <div className="mt-1 pt-1 border-t border-slate-100">
                          <button
                            onClick={() => handleNavClick('services')}
                            className="w-full text-center py-1.5 text-xs font-bold text-[#0082A6] hover:text-[#2772A0] flex items-center justify-center gap-1"
                          >
                            <span>Browse All 7 Academic Services</span>
                            <ArrowRight className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-colors ${
                    isActive
                      ? 'bg-[#0082A6] text-white shadow-xs font-bold'
                      : 'text-[#0B2D3A]/75 hover:text-[#0082A6] hover:bg-[#F7F5ED]'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>
        </div>

        {/* =========================================================================
            RIGHT: Unified Control & Action Hub (.header-right)
            Modeled after Company/index.html .header-right:
            - Phone helpline link
            - User Auth / Persona Switcher (#user-auth-btn)
            - Single high-impact Primary CTA (Book Consultation)
            - Mobile Menu Hamburger Toggle (.menu button)
        ========================================================================= */}
        <div className="flex items-center gap-2 sm:gap-3">
          
          {/* Quick Direct Call Helpline (Desktop) */}
          <a 
            href="tel:+919760498896" 
            className="hidden xl:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-slate-700 hover:text-[#0082A6] hover:bg-white/80 transition-colors border border-transparent hover:border-[#CCDDEA]"
            title="Mathura Advisory Office Helpline"
          >
            <PhoneCall className="w-3.5 h-3.5 text-[#0082A6]" />
            <span className="font-bold text-[#0B2D3A]">+91 9760498896</span>
          </a>

          {/* User Auth / Persona Switcher (#user-auth-btn equivalent) */}
          <div className="relative">
            <button
              onClick={() => setRoleSwitcherOpen(!roleSwitcherOpen)}
              className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full bg-white/80 hover:bg-[#EBF5F8] text-[#0B2D3A] transition-colors border border-[#CCDDEA] shadow-2xs"
              aria-label="User Persona Switcher"
            >
              <div className="w-4 h-4 rounded-full bg-[#0082A6]/10 text-[#0082A6] flex items-center justify-center">
                {currentUser?.role === 'super_admin' ? (
                  <ShieldCheck className="w-3 h-3 text-[#0082A6]" />
                ) : (
                  <UserCheck className="w-3 h-3 text-[#0082A6]" />
                )}
              </div>
              <span className="font-bold hidden sm:inline">
                {currentUser ? (currentUser.role === 'super_admin' ? 'Director' : 'Scholar') : 'Guest'}
              </span>
              <ChevronDown className="w-2.5 h-2.5 text-slate-400" />
            </button>

            {roleSwitcherOpen && (
              <div className="absolute right-0 mt-2 w-52 bg-white rounded-2xl border border-[#CCDDEA] shadow-premium py-2 z-50 text-xs">
                <div className="px-3 py-1 text-[10px] text-slate-400 uppercase font-bold tracking-wider">
                  Academic Portals
                </div>
                <button
                  onClick={() => { onSwitchRole('client'); setRoleSwitcherOpen(false); onNavigate('portal'); }}
                  className="w-full text-left px-3 py-2 hover:bg-[#EBF5F8] text-slate-700 flex items-center gap-2.5 transition-colors"
                >
                  <UserCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <div>
                    <div className="font-bold text-[#0B2D3A]">PhD Scholar Portal</div>
                    <div className="text-[10px] text-slate-500">Track drafts, milestone reviews & deliverables</div>
                  </div>
                </button>
                <button
                  onClick={() => { onSwitchRole('admin'); setRoleSwitcherOpen(false); onNavigate('admin'); }}
                  className="w-full text-left px-3 py-2 hover:bg-[#EBF5F8] text-slate-700 flex items-center gap-2.5 transition-colors"
                >
                  <ShieldCheck className="w-4 h-4 text-[#0082A6] shrink-0" />
                  <div>
                    <div className="font-bold text-[#0B2D3A]">Director Console</div>
                    <div className="text-[10px] text-slate-500">Manage inquiries, coordinators & reports</div>
                  </div>
                </button>
                <div className="my-1 border-t border-slate-100" />
                <button
                  onClick={() => { onSwitchRole('none'); setRoleSwitcherOpen(false); }}
                  className="w-full text-left px-3 py-1.5 hover:bg-rose-50 text-rose-600 flex items-center gap-2 text-xs"
                >
                  <LogOut className="w-3.5 h-3.5" />
                  <span>Reset / Logout</span>
                </button>
              </div>
            )}
          </div>

          {/* Single High-Impact Primary CTA */}
          <button
            onClick={onOpenBooking}
            className="hidden sm:inline-flex items-center gap-1.5 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-[#0082A6] hover:bg-[#006F8E] text-white text-xs font-bold tracking-wide transition-colors shadow-xs"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Book Consultation</span>
          </button>

          {/* Mobile Menu Toggle Button (Company hamburger style) */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-10 h-10 rounded-full flex items-center justify-center bg-white/80 border border-[#CCDDEA] text-[#0B2D3A] hover:bg-[#EBF5F8] transition-colors focus:outline-none"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5 text-[#0082A6]" />
            ) : (
              <Menu className="w-5 h-5 text-[#0B2D3A]" />
            )}
          </button>
        </div>

      </div>

      {/* =========================================================================
          MOBILE NAVIGATION DRAWER (nav:not(.main-nav) Company-style)
          100% Mobile Friendly, Thumb-Ergonomic, Smooth Backdrop & Transitions
      ========================================================================= */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop Blur Overlay */}
          <div 
            className="fixed inset-0 top-[65px] bg-[#0B2D3A]/40 backdrop-blur-xs z-40 lg:hidden"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Mobile Drawer Sheet */}
          <nav 
            className="fixed inset-x-0 top-[65px] max-h-[calc(100dvh-65px)] overflow-y-auto bg-[#F7F5ED] border-b border-[#CCDDEA] shadow-2xl z-50 lg:hidden p-4 sm:p-6 space-y-5"
            aria-label="Mobile Navigation"
          >
            {/* Primary Navigation Links with Comfortable 48px Tap Targets */}
            <div className="bg-white rounded-2xl border border-[#CCDDEA] p-2 space-y-1 shadow-2xs">
              {navItems.map((item) => {
                const isActive = currentPage === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`w-full text-left px-4 py-3 rounded-xl font-bold text-sm flex items-center justify-between transition-colors ${
                      isActive 
                        ? 'bg-[#EBF5F8] text-[#0082A6]' 
                        : 'text-[#0B2D3A] hover:bg-[#F7F5ED]'
                    }`}
                  >
                    <span>{item.label}</span>
                    <ArrowRight className="w-4 h-4 text-slate-300" />
                  </button>
                );
              })}
            </div>

            {/* Quick Services Jump Grid */}
            <div className="space-y-2">
              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 px-1">
                Popular Academic Services
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {quickServices.map((svc) => {
                  const IconComp = svc.icon;
                  return (
                    <button
                      key={svc.slug}
                      onClick={() => handleNavClick('service-detail', { slug: svc.slug })}
                      className="text-left p-3 rounded-xl bg-white border border-[#CCDDEA] hover:border-[#0082A6] text-xs font-semibold text-[#0B2D3A] flex items-center gap-2.5 transition-colors"
                    >
                      <div className="w-7 h-7 rounded-lg bg-[#EBF5F8] text-[#0082A6] flex items-center justify-center shrink-0">
                        <IconComp className="w-4 h-4" />
                      </div>
                      <span className="line-clamp-1">{svc.title}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Mathura Advisory Office & Direct Contact Card */}
            <div className="bg-white rounded-2xl border border-[#CCDDEA] p-4 space-y-3 shadow-2xs">
              <div className="flex items-center gap-2 text-xs font-bold text-[#0B2D3A]">
                <MapPin className="w-4 h-4 text-[#0082A6]" />
                <span>Civil Lines, Mathura, Uttar Pradesh, India</span>
              </div>
              <div className="text-[11px] text-slate-500">
                In-person scholar consultations available Mon–Sat (9:30 AM – 6:30 PM IST).
              </div>
              <div className="grid grid-cols-2 gap-2 pt-1">
                <a
                  href="tel:+919760498896"
                  className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-[#EBF5F8] text-[#0082A6] font-bold text-xs hover:bg-[#CCDDEA] transition-colors"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  <span>Call Office</span>
                </a>
                <a
                  href="https://wa.me/919760498896?text=Hello%20YouKnowVerse%2C%20I%20would%20like%20to%20discuss%20my%20academic%20research%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-[#25D366]/10 text-emerald-800 font-bold text-xs hover:bg-[#25D366]/20 transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Mobile Persona Switcher & Direct CTA */}
            <div className="space-y-2 pt-1">
              <div className="grid grid-cols-2 gap-2 text-xs font-bold">
                <button
                  onClick={() => { onSwitchRole('client'); handleNavClick('portal'); }}
                  className="py-2.5 px-3 rounded-xl bg-white border border-[#CCDDEA] text-slate-700 flex items-center justify-center gap-1.5"
                >
                  <UserCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Scholar Portal</span>
                </button>
                <button
                  onClick={() => { onSwitchRole('admin'); handleNavClick('admin'); }}
                  className="py-2.5 px-3 rounded-xl bg-white border border-[#CCDDEA] text-slate-700 flex items-center justify-center gap-1.5"
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-[#0082A6]" />
                  <span>Admin Console</span>
                </button>
              </div>

              <button
                onClick={() => { setMobileMenuOpen(false); onOpenBooking(); }}
                className="w-full py-3 px-4 rounded-xl bg-[#0082A6] hover:bg-[#006F8E] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-xs transition-colors"
              >
                <Calendar className="w-4 h-4" />
                <span>Book In-Person or Online Consultation</span>
              </button>
            </div>
          </nav>
        </>
      )}
    </header>
  );
};
