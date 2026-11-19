import React, { useEffect } from 'react';
import { X } from 'lucide-react';

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '4xl';
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  subtitle,
  children,
  maxWidth = 'xl',
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const widthClasses = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    '2xl': 'max-w-2xl',
    '4xl': 'max-w-4xl',
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-[#061D26]/75 backdrop-blur-xs transition-opacity" 
        onClick={onClose}
        aria-hidden="true" 
      />

      {/* Modal Container: Outer border-radius 24px (rounded-3xl) with p-5 to p-6 */}
      <div className={`relative w-full ${widthClasses[maxWidth]} bg-white rounded-3xl border border-[#D6E6EB] shadow-2xl my-auto z-10 overflow-hidden flex flex-col max-h-[92vh]`}>
        {/* Header */}
        <div className="px-6 py-5 border-b border-[#D6E6EB] bg-[#F7F5ED] flex items-start justify-between gap-4 shrink-0">
          <div>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#0B2D3A]">
              {title}
            </h3>
            {subtitle && (
              <p className="text-xs sm:text-sm text-[#3D6170] mt-1 font-sans">
                {subtitle}
              </p>
            )}
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#3D6170] hover:text-[#0B2D3A] hover:bg-[#C4DEE3]/40 rounded-lg transition-colors no-hover-translate shrink-0"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content Body: padding 24px (p-6) -> internal items use rounded-lg (8px) for concentric rule */}
        <div className="p-6 overflow-y-auto flex-1 font-sans text-sm text-[#0B2D3A]">
          {children}
        </div>
      </div>
    </div>
  );
};
