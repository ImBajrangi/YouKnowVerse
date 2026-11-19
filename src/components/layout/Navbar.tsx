import React, { useState } from 'react';
import { 
  GraduationCap, 
  Menu, 
  X, 
  PhoneCall, 
  Calendar, 
  UserCheck, 
  ShieldCheck, 
  ChevronDown,
  Sparkles,
  LogOut
} from 'lucide-react';
import { Button } from '../ui/Button';
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
  onOpenInquiry,
  onSwitchRole,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [roleSwitcherOpen, setRoleSwitcherOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services', hasDropdown: true },
    { id: 'how-it-works', label: 'How It Works' },
    { id: 'resources', label: 'Research Blog' },
    { id: 'about', label: 'About Us' },
    { id: 'contact', label: 'Contact' },
  ];

  const serviceSubItems = [
    { slug: 'research-topic-guidance', title: 'Research Topic Guidance' },
    { slug: 'synopsis-review', title: 'Synopsis Review & Refinement' },
    { slug: 'thesis-editing', title: 'Thesis Editing & Formatting' },
    { slug: 'research-paper-support', title: 'Research Paper Support' },
    { slug: 'publication-assistance', title: 'Publication Assistance' },
    { slug: 'literature-search-support', title: 'Literature Search & Matrix' },
    { slug: 'statistical-analysis-spss', title: 'Statistical Analysis (SPSS/R)' },
  ];

  const handleNavClick = (pageId: string) => {
    onNavigate(pageId);
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  };

  const handleServiceClick = (slug: string) => {
    onNavigate('service-detail', { slug });
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-slate-200/90 shadow-xs select-none">
      {/* Top micro-bar for academic authority & phone */}
      <div className="bg-slate-50 text-slate-600 text-[11px] sm:text-xs py-1.5 px-4 sm:px-8 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="flex items-center gap-1.5 text-[#0082A6] font-medium">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Academic Research Consultancy</span>
            </span>
            <span className="hidden md:inline text-slate-300">•</span>
            <span className="hidden md:inline text-slate-500">Mathura, Uttar Pradesh, India</span>
          </div>

          <div className="flex items-center gap-4">
            <a 
              href="tel:+919760498896" 
              className="flex items-center gap-1.5 hover:text-[#0082A6] transition-colors text-slate-700"
            >
              <PhoneCall className="w-3 h-3 text-[#0082A6]" />
              <span className="font-semibold">+91 9760498896</span>
            </a>

            {/* Quick Demo Role Switcher */}
            <div className="relative">
              <button
                onClick={() => setRoleSwitcherOpen(!roleSwitcherOpen)}
                className="inline-flex items-center gap-1 text-[11px] px-2 py-0.5 rounded-md bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 shadow-xs transition-colors"
              >
                <span>Role: {currentUser ? (currentUser.role === 'super_admin' ? 'Admin' : 'Client') : 'Guest'}</span>
                <ChevronDown className="w-2.5 h-2.5 text-slate-400" />
              </button>

              {roleSwitcherOpen && (
                <div className="absolute right-0 mt-1 w-44 bg-white rounded-xl border border-slate-200 shadow-lg py-1 z-50 text-xs">
                  <div className="px-3 py-1 text-[10px] text-slate-400 uppercase font-semibold">Switch Persona</div>
                  <button
                    onClick={() => { onSwitchRole('client'); setRoleSwitcherOpen(false); onNavigate('portal'); }}
                    className="w-full text-left px-3 py-1.5 hover:bg-slate-50 text-slate-700 flex items-center gap-2"
                  >
                    <UserCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Client (PhD Scholar)</span>
                  </button>
                  <button
                    onClick={() => { onSwitchRole('admin'); setRoleSwitcherOpen(false); onNavigate('admin'); }}
                    className="w-full text-left px-3 py-1.5 hover:bg-slate-50 text-slate-700 flex items-center gap-2"
                  >
                    <ShieldCheck className="w-3.5 h-3.5 text-[#0082A6]" />
                    <span>Admin (Director)</span>
                  </button>
                  <button
                    onClick={() => { onSwitchRole('none'); setRoleSwitcherOpen(false); }}
                    className="w-full text-left px-3 py-1.5 hover:bg-slate-50 text-rose-600 flex items-center gap-2"
                  >
                    <LogOut className="w-3.5 h-3.5" />
                    <span>Logout (Guest)</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3 flex items-center justify-between">
        {/* Brand Logo & Tagline */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3 text-left focus:outline-none group"
        >
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#0082A6] text-white flex items-center justify-center shadow-xs shrink-0">
            <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
          <div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-lg sm:text-xl font-bold tracking-tight text-[#0F172A]">
                AcademicPro
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-[#0082A6]">
                India
              </span>
            </div>
            <p className="text-[10px] text-slate-500 tracking-wide hidden sm:block">
              Research Support • Academic Excellence
            </p>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 text-sm font-medium">
          {navItems.map((item) => {
            if (item.hasDropdown) {
              return (
                <div key={item.id} className="relative group" onMouseLeave={() => setServicesDropdownOpen(false)}>
                  <button
                    onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                    onMouseEnter={() => setServicesDropdownOpen(true)}
                    className={`px-3 py-1.5 rounded-lg flex items-center gap-1 transition-colors ${
                      currentPage === 'services' || currentPage === 'service-detail'
                        ? 'text-[#0082A6] bg-[#EBF5F8] font-semibold'
                        : 'text-slate-600 hover:text-[#0082A6] hover:bg-slate-50'
                    }`}
                  >
                    <span>{item.label}</span>
                    <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
                  </button>

                  {/* Dropdown Menu */}
                  {servicesDropdownOpen && (
                    <div className="absolute top-full left-0 w-72 bg-white border border-slate-200 rounded-2xl shadow-xl p-2 z-50">
                      <div className="px-3 py-1.5 text-[11px] font-semibold text-[#0082A6] uppercase tracking-wider border-b border-slate-100">
                        Primary Advisory Services
                      </div>
                      <div className="py-1">
                        {serviceSubItems.map((s) => (
                          <button
                            key={s.slug}
                            onClick={() => handleServiceClick(s.slug)}
                            className="w-full text-left px-3 py-2 text-xs rounded-lg text-slate-700 hover:text-[#0082A6] hover:bg-[#EBF5F8] transition-colors"
                          >
                            {s.title}
                          </button>
                        ))}
                      </div>
                      <div className="border-t border-slate-100 pt-1.5 mt-1">
                        <button
                          onClick={() => handleNavClick('services')}
                          className="w-full text-center text-xs text-[#0082A6] py-1.5 font-semibold hover:underline"
                        >
                          View All Services & Pricing →
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
                className={`px-3 py-1.5 rounded-lg transition-colors ${
                  currentPage === item.id
                    ? 'text-[#0082A6] bg-[#EBF5F8] font-semibold'
                    : 'text-slate-600 hover:text-[#0082A6] hover:bg-slate-50'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Action CTAs */}
        <div className="hidden sm:flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={onOpenInquiry}
            className="text-xs text-slate-700 border-slate-300 hover:bg-slate-50"
          >
            Request Quote
          </Button>

          <Button
            variant="teal"
            size="sm"
            icon={<Calendar className="w-3.5 h-3.5" />}
            onClick={onOpenBooking}
            className="text-xs shadow-xs"
          >
            Book Consultation
          </Button>

          {/* Portal Button */}
          {currentUser?.role === 'super_admin' ? (
            <Button
              variant="secondary"
              size="sm"
              icon={<ShieldCheck className="w-3.5 h-3.5" />}
              onClick={() => onNavigate('admin')}
              className="text-xs bg-slate-100 text-slate-800 border-slate-200 hover:bg-slate-200"
            >
              Admin Panel
            </Button>
          ) : (
            <Button
              variant="secondary"
              size="sm"
              icon={<UserCheck className="w-3.5 h-3.5" />}
              onClick={() => onNavigate('portal')}
              className="text-xs bg-[#EBF5F8] text-[#0082A6] border border-[#C4DEE3] hover:bg-[#D9EEF3]"
            >
              Client Portal
            </Button>
          )}
        </div>

        {/* Mobile menu toggle */}
        <div className="lg:hidden flex items-center gap-2">
          <button
            onClick={onOpenBooking}
            className="sm:hidden px-2.5 py-1.5 bg-[#0082A6] text-white text-xs font-semibold rounded-lg"
          >
            Book
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-200 px-4 py-4 space-y-2 shadow-xl">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`block w-full text-left px-3 py-2 rounded-xl text-sm font-medium ${
                currentPage === item.id ? 'text-[#0082A6] bg-[#EBF5F8] font-semibold' : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              {item.label}
            </button>
          ))}

          <div className="pt-3 border-t border-slate-100 space-y-2">
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenInquiry(); }}
              className="w-full py-2.5 px-3 rounded-xl border border-slate-300 text-slate-700 text-sm font-medium text-center hover:bg-slate-50"
            >
              Request a Custom Quote
            </button>
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenBooking(); }}
              className="w-full py-2.5 px-3 rounded-xl bg-[#0082A6] text-white text-sm font-bold text-center"
            >
              Book 1-on-1 Consultation
            </button>
            <button
              onClick={() => { setMobileMenuOpen(false); onNavigate(currentUser?.role === 'super_admin' ? 'admin' : 'portal'); }}
              className="w-full py-2.5 px-3 rounded-xl bg-[#EBF5F8] text-[#0082A6] text-sm font-semibold text-center border border-[#C4DEE3]"
            >
              {currentUser?.role === 'super_admin' ? 'Open Admin Panel' : 'Open Client Portal'}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
