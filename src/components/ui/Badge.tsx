import React from 'react';

export interface BadgeProps {
  children: React.ReactNode;
  variant?: 'gold' | 'navy' | 'green' | 'amber' | 'red' | 'neutral' | 'blue' | 'teal' | 'ice' | 'cyan';
  size?: 'sm' | 'md';
  dot?: boolean;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'neutral',
  size = 'md',
  dot = false,
  className = '',
}) => {
  const sizeClasses = {
    sm: 'text-[11px] px-2 py-0.5 rounded-md font-medium tracking-wide',
    md: 'text-xs px-2.5 py-1 rounded-lg font-medium',
  };

  const variantClasses = {
    teal: 'bg-[#0082A6]/10 text-[#0082A6] border border-[#0082A6]/30',
    ice: 'bg-[#C4DEE3]/50 text-[#0B2D3A] border border-[#86B9C7]/50',
    cyan: 'bg-[#86B9C7]/25 text-[#0B2D3A] border border-[#86B9C7]/50',
    gold: 'bg-[#C4DEE3]/40 text-[#0082A6] border border-[#86B9C7]/40 font-semibold',
    navy: 'bg-[#0B2D3A]/10 text-[#0B2D3A] border border-[#0B2D3A]/20',
    green: 'bg-emerald-50 text-emerald-800 border border-emerald-200',
    amber: 'bg-amber-50 text-amber-800 border border-amber-200',
    red: 'bg-rose-50 text-rose-800 border border-rose-200',
    neutral: 'bg-[#F7F5ED] text-[#0B2D3A] border border-[#D6E6EB]',
    blue: 'bg-[#C4DEE3]/40 text-[#0082A6] border border-[#86B9C7]/40',
  };

  const dotClasses = {
    teal: 'bg-[#0082A6]',
    ice: 'bg-[#86B9C7]',
    cyan: 'bg-[#86B9C7]',
    gold: 'bg-[#0082A6]',
    navy: 'bg-[#0B2D3A]',
    green: 'bg-emerald-600',
    amber: 'bg-amber-600',
    red: 'bg-rose-600',
    neutral: 'bg-[#86B9C7]',
    blue: 'bg-[#0082A6]',
  };

  return (
    <span className={`inline-flex items-center gap-1.5 shrink-0 ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}>
      {dot && <span className={`w-1.5 h-1.5 rounded-full ${dotClasses[variant]}`} />}
      {children}
    </span>
  );
};
