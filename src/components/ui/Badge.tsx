import React from 'react';

export interface BadgeProps {
  children: React.ReactNode;
  variant?: 'gold' | 'navy' | 'green' | 'amber' | 'red' | 'neutral' | 'blue';
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
    gold: 'bg-[#FBF2D9] text-[#8C6409] border border-[#ECD9A5]',
    navy: 'bg-[#071E46]/10 text-[#071E46] border border-[#071E46]/20',
    green: 'bg-emerald-50 text-emerald-800 border border-emerald-200',
    amber: 'bg-amber-50 text-amber-800 border border-amber-200',
    red: 'bg-rose-50 text-rose-800 border border-rose-200',
    neutral: 'bg-slate-100 text-slate-700 border border-slate-200',
    blue: 'bg-blue-50 text-blue-800 border border-blue-200',
  };

  const dotClasses = {
    gold: 'bg-[#D6A52B]',
    navy: 'bg-[#071E46]',
    green: 'bg-emerald-600',
    amber: 'bg-amber-600',
    red: 'bg-rose-600',
    neutral: 'bg-slate-500',
    blue: 'bg-blue-600',
  };

  return (
    <span className={`inline-flex items-center gap-1.5 shrink-0 ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}>
      {dot && <span className={`w-1.5 h-1.5 rounded-full ${dotClasses[variant]}`} />}
      {children}
    </span>
  );
};
