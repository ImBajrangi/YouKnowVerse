import React, { useState } from 'react';
import { 
  GraduationCap, 
  Menu, 
  X, 
  PhoneCall, 
  UserCheck, 
  ShieldCheck, 
  ChevronDown,
  LogOut
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
  const [roleSwitcherOpen, setRoleSwitcherOpen] = useState(false);

  const handleNavClick = (pageId: string) => {
    onNavigate(pageId);
    setMobileMenuOpen(false);
  };

  const navItems = [
    { id: 'services', label: 'Services' },
    { id: 'how-it-works', label: 'How It Works' },
    { id: 'quote-request', label: 'Calculator' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-3 z-50 px-4 sm:px-8 select-none">
      {/* Floating Minimalist Capsule Container */}
      <div className="max-w-5xl mx-auto rounded-full bg-white/95 backdrop-blur-md border border-[#C4DEE3]/80 px-4 sm:px-6 py-2.5 flex items-center justify-between shadow-subtle">
        
        {/* Left: Brand Logo & Emblem */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-2.5 focus:outline-none group"
        >
          <div className="w-8 h-8 rounded-full bg-[#0082A6] text-white flex items-center justify-center shadow-xs">
            <GraduationCap className="w-4 h-4 text-white" />
          </div>
          <span className="text-base sm:text-lg font-extrabold tracking-tight text-[#0B2D3A]">
            YouKnow<span className="font-serif italic font-normal text-[#2772A0]">Verse</span>
          </span>
        </button>

        {/* Center: Clean Spacious Text Navigation (No Pill Salad) */}
        <nav className="hidden md:flex items-center gap-1 sm:gap-2">
          {navItems.map((item) => {
            const isActive = currentPage === item.id || (item.id === 'services' && currentPage === 'service-detail');
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide transition-colors ${
                  isActive
                    ? 'bg-[#EBF5F8] text-[#0082A6] font-bold shadow-2xs'
                    : 'text-slate-600 hover:text-[#0082A6] hover:bg-[#F7F5ED]'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Right: Persona Switcher & Single High-Impact Primary CTA */}
        <div className="hidden sm:flex items-center gap-3">
          
          {/* Subtle Role Dropdown */}
          <div className="relative">
            <button
              onClick={() => setRoleSwitcherOpen(!roleSwitcherOpen)}
              className="inline-flex items-center gap-1.5 text-[11px] px-3 py-1 rounded-full bg-[#F7F5ED] hover:bg-[#EBF5F8] text-slate-700 transition-colors border border-slate-200/60"
            >
              <span className="font-medium">
                {currentUser ? (currentUser.role === 'super_admin' ? 'Admin' : 'Scholar') : 'Guest'}
              </span>
              <ChevronDown className="w-2.5 h-2.5 text-slate-400" />
            </button>

            {roleSwitcherOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-2xl border border-[#C4DEE3] shadow-premium py-1.5 z-50 text-xs">
                <div className="px-3 py-1 text-[10px] text-slate-400 uppercase font-semibold">Switch Persona</div>
                <button
                  onClick={() => { onSwitchRole('client'); setRoleSwitcherOpen(false); onNavigate('portal'); }}
                  className="w-full text-left px-3 py-1.5 hover:bg-[#EBF5F8] text-slate-700 flex items-center gap-2"
                >
                  <UserCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Client (PhD Scholar)</span>
                </button>
                <button
                  onClick={() => { onSwitchRole('admin'); setRoleSwitcherOpen(false); onNavigate('admin'); }}
                  className="w-full text-left px-3 py-1.5 hover:bg-[#EBF5F8] text-slate-700 flex items-center gap-2"
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-[#0082A6]" />
                  <span>Admin (Director)</span>
                </button>
                <button
                  onClick={() => { onSwitchRole('none'); setRoleSwitcherOpen(false); }}
                  className="w-full text-left px-3 py-1.5 hover:bg-[#EBF5F8] text-rose-600 flex items-center gap-2"
                >
                  <LogOut className="w-3.5 h-3.5" />
                  <span>Logout</span>
                </button>
              </div>
            )}
          </div>

          {/* Single High-Impact Primary Button (Ocean Blue) */}
          <button
            onClick={onOpenBooking}
            className="px-5 py-2 rounded-full bg-[#0082A6] hover:bg-[#006F8E] text-white text-xs font-bold tracking-wide transition-colors shadow-xs"
          >
            Book Consultation
          </button>
        </div>

        {/* Mobile menu toggle */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={onOpenBooking}
            className="px-3.5 py-1.5 rounded-full bg-[#0082A6] text-white text-xs font-bold"
          >
            Book
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 text-slate-700 hover:text-black rounded-lg"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 max-w-sm mx-auto bg-white rounded-3xl border border-[#C4DEE3] shadow-premium p-4 space-y-2 text-xs">
          <button
            onClick={() => handleNavClick('home')}
            className="w-full text-left px-4 py-2.5 rounded-xl font-bold text-slate-800 hover:bg-[#EBF5F8]"
          >
            Home
          </button>
          <button
            onClick={() => handleNavClick('services')}
            className="w-full text-left px-4 py-2.5 rounded-xl font-bold text-slate-800 hover:bg-[#EBF5F8]"
          >
            Services
          </button>
          <button
            onClick={() => handleNavClick('how-it-works')}
            className="w-full text-left px-4 py-2.5 rounded-xl font-bold text-slate-800 hover:bg-[#EBF5F8]"
          >
            How It Works
          </button>
          <button
            onClick={() => handleNavClick('quote-request')}
            className="w-full text-left px-4 py-2.5 rounded-xl font-bold text-slate-800 hover:bg-[#EBF5F8]"
          >
            Quotation Calculator
          </button>
          <button
            onClick={() => handleNavClick('about')}
            className="w-full text-left px-4 py-2.5 rounded-xl font-bold text-slate-800 hover:bg-[#EBF5F8]"
          >
            About Us
          </button>
          <button
            onClick={() => handleNavClick('contact')}
            className="w-full text-left px-4 py-2.5 rounded-xl font-bold text-slate-800 hover:bg-[#EBF5F8]"
          >
            Contact
          </button>
          <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
            <a href="tel:+919760498896" className="text-[#2772A0] font-bold flex items-center gap-1.5">
              <PhoneCall className="w-3.5 h-3.5" />
              <span>+91 9760498896</span>
            </a>
            <button
              onClick={() => handleNavClick(currentUser?.role === 'super_admin' ? 'admin' : 'portal')}
              className="px-3 py-1 bg-[#F7F5ED] rounded-lg text-slate-700 font-semibold"
            >
              {currentUser?.role === 'super_admin' ? 'Admin Panel' : 'Scholar Portal'}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
