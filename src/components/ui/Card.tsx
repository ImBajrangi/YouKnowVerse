import React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: 'elevated' | 'flat' | 'outline' | 'navy';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  concentricRadius?: '2xl' | '3xl';
  className?: string;
}

export const Card: React.FC<CardProps> = ({
  children,
  variant = 'elevated',
  padding = 'md',
  concentricRadius = '2xl',
  className = '',
  ...props
}) => {
  // Concentric Rules:
  // outer 2xl (16px) with p-3 (12px) -> child 4px
  // outer 2xl (16px) with p-4 (16px) -> child 0px
  // outer 3xl (24px) with p-4 (16px) -> child 8px (rounded-lg)
  // outer 3xl (24px) with p-6 (24px) -> child 0px
  const radiusClass = concentricRadius === '3xl' ? 'rounded-3xl' : 'rounded-2xl';

  const paddingClasses = {
    none: 'p-0',
    sm: 'p-3',
    md: 'p-5 sm:p-6',
    lg: 'p-6 sm:p-8',
  };

  const variantClasses = {
    elevated: 'bg-white border border-[#E2E8F0] shadow-subtle',
    flat: 'bg-[#F8FAFD] border border-[#E2E8F0]',
    outline: 'bg-transparent border border-[#CBD5E1]',
    navy: 'bg-[#071E46] text-white border border-[#102F60] shadow-premium',
  };

  return (
    <div
      className={`${radiusClass} ${paddingClasses[padding]} ${variantClasses[variant]} transition-colors no-hover-translate ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
