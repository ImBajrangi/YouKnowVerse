import React from 'react';
import { MessageCircle } from 'lucide-react';

export const WhatsAppButton: React.FC = () => {
  const whatsappUrl = "https://wa.me/919760498896?text=Hello%20AcademicPro%20India%2C%20I%20would%20like%20to%20inquire%20about%20your%20academic%20research%20guidance%20services.";

  return (
    <aside aria-label="Direct WhatsApp Contact" className="fixed bottom-5 right-5 z-40 flex items-center group">
      {/* Tooltip on Desktop */}
      <div className="hidden sm:flex items-center mr-3 px-3.5 py-1.5 bg-[#0B2D3A] text-white text-xs font-medium rounded-xl shadow-lg border border-[#134455] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
        <span>Chat with Research Advisor (+91 9760498896)</span>
      </div>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-13 h-13 sm:w-14 sm:h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-elevated border-2 border-white hover:bg-[#20BD5A] transition-colors no-hover-translate active:scale-98"
        aria-label="Direct WhatsApp chat with AcademicPro India"
      >
        <MessageCircle className="w-7 h-7 fill-white text-[#25D366]" />
      </a>
    </aside>
  );
};
