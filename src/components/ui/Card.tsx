import React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: 'elevated' | 'flat' | 'outline' | 'navy' | 'linen';
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
    elevated: 'bg-white border border-slate-200 shadow-xs',
    flat: 'bg-slate-50 border border-slate-200',
    outline: 'bg-transparent border border-slate-200',
    navy: 'bg-[#0B2D3A] text-white border border-[#134455] shadow-sm',
    linen: 'bg-slate-50 border border-slate-200',
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
