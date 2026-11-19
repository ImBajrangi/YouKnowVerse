import { useState, useEffect } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { WhatsAppButton } from './components/layout/WhatsAppButton';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { AboutPage } from './pages/AboutPage';
import { HowItWorksPage } from './pages/HowItWorksPage';
import { ResourcesBlogPage } from './pages/ResourcesBlogPage';
import { FAQPage } from './pages/FAQPage';
import { ContactPage } from './pages/ContactPage';
import { PoliciesPage } from './pages/PoliciesPage';
import { QuotationRequestPage } from './pages/QuotationRequestPage';
import { ClientPortal } from './features/portal/ClientPortal';
import { AdminDashboard } from './features/admin/AdminDashboard';
import { BookingModal } from './features/consultations/BookingModal';
import { InquiryFormModal } from './features/inquiries/InquiryFormModal';
import { CacheStore, subscribeToCache } from './lib/cacheStore';

export function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [pageParams, setPageParams] = useState<Record<string, string>>({});
  const [, setTick] = useState(0);

  // Modals
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [inquiryServiceId, setInquiryServiceId] = useState<string | undefined>(undefined);

  useEffect(() => {
    return subscribeToCache(() => setTick(t => t + 1));
  }, []);

  const currentUser = CacheStore.getCurrentUser();

  const handleNavigate = (page: string, params?: Record<string, string>) => {
    setCurrentPage(page);
    setPageParams(params || {});
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenInquiry = (serviceId?: string) => {
    setInquiryServiceId(serviceId);
    setInquiryModalOpen(true);
  };

  const handleSwitchRole = (role: 'client' | 'admin' | 'none') => {
    CacheStore.switchRole(role);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F5ED] text-[#0B2D3A] selection:bg-[#0B2D3A] selection:text-[#0082A6]">
      {/* Sticky Solid Navbar */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        currentUser={currentUser}
        onOpenBooking={() => setBookingModalOpen(true)}
        onOpenInquiry={() => handleOpenInquiry()}
        onSwitchRole={handleSwitchRole}
      />

      {/* Main Page Content */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onOpenBooking={() => setBookingModalOpen(true)}
            onOpenInquiry={handleOpenInquiry}
          />
        )}

        {currentPage === 'services' && (
          <ServicesPage
            onNavigate={handleNavigate}
            onOpenBooking={() => setBookingModalOpen(true)}
            onOpenInquiry={handleOpenInquiry}
          />
        )}

        {currentPage === 'service-detail' && (
          <ServiceDetailPage
            slug={pageParams.slug || 'research-topic-guidance'}
            onNavigate={handleNavigate}
            onOpenBooking={() => setBookingModalOpen(true)}
            onOpenInquiry={handleOpenInquiry}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage
            onNavigate={handleNavigate}
            onOpenBooking={() => setBookingModalOpen(true)}
            onOpenInquiry={() => handleOpenInquiry()}
          />
        )}

        {currentPage === 'how-it-works' && (
          <HowItWorksPage
            onNavigate={handleNavigate}
            onOpenBooking={() => setBookingModalOpen(true)}
            onOpenInquiry={() => handleOpenInquiry()}
          />
        )}

        {currentPage === 'resources' && (
          <ResourcesBlogPage
            onOpenInquiry={() => handleOpenInquiry()}
          />
        )}

        {currentPage === 'faq' && (
          <FAQPage
            onOpenInquiry={() => handleOpenInquiry()}
            onOpenBooking={() => setBookingModalOpen(true)}
          />
        )}

        {currentPage === 'contact' && (
          <ContactPage
            onOpenBooking={() => setBookingModalOpen(true)}
          />
        )}

        {currentPage === 'policies' && (
          <PoliciesPage
            initialTab={(pageParams.tab as any) || 'integrity'}
          />
        )}

        {currentPage === 'quote-request' && (
          <QuotationRequestPage
            onOpenBooking={() => setBookingModalOpen(true)}
          />
        )}

        {currentPage === 'portal' && (
          <ClientPortal
            currentUser={currentUser}
            onNavigate={handleNavigate}
            onOpenBooking={() => setBookingModalOpen(true)}
          />
        )}

        {currentPage === 'admin' && (
          <AdminDashboard />
        )}
      </main>

      {/* Universal Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Floating Instant WhatsApp Button */}
      <WhatsAppButton />

      {/* Universal Modals */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
      />

      <InquiryFormModal
        isOpen={inquiryModalOpen}
        onClose={() => {
          setInquiryModalOpen(false);
          setInquiryServiceId(undefined);
        }}
        preselectedServiceId={inquiryServiceId}
      />
    </div>
  );
}

export default App;
