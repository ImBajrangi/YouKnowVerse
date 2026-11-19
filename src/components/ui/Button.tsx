import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'gold' | 'outline' | 'ghost' | 'danger' | 'teal' | 'ocean' | 'cloudy';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  isLoading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  icon,
  iconPosition = 'left',
  isLoading = false,
  className = '',
  disabled,
  ...props
}) => {
  const baseClasses = "inline-flex items-center justify-center font-medium transition-colors select-none focus:outline-none focus:ring-2 focus:ring-offset-2 no-hover-translate active:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed";

  // Concentric radii: small -> 8px, medium -> 10px, large -> 12px
  const sizeClasses = {
    sm: "text-xs px-3 py-1.5 rounded-lg gap-1.5 h-8",
    md: "text-sm px-4 py-2.5 rounded-xl gap-2 h-10",
    lg: "text-base px-6 py-3 rounded-xl gap-2.5 h-12",
  };

  const variantClasses = {
    primary: "bg-[#2772A0] text-white hover:bg-[#1F5C82] focus:ring-[#2772A0] border border-[#1F5C82] shadow-xs font-semibold",
    ocean: "bg-[#2772A0] text-white hover:bg-[#1F5C82] focus:ring-[#2772A0] border border-[#1F5C82] shadow-xs font-semibold",
    teal: "bg-[#0082A6] text-white hover:bg-[#006F8E] focus:ring-[#0082A6] border border-[#006F8E] shadow-xs font-semibold",
    cloudy: "bg-[#CCDDEA] text-[#103852] hover:bg-[#BBD0E0] focus:ring-[#2772A0] border border-[#B0C8DA] font-semibold",
    secondary: "bg-[#CCDDEA] text-[#103852] hover:bg-[#BBD0E0] focus:ring-[#2772A0] border border-[#B0C8DA] font-semibold",
    gold: "bg-[#0082A6] text-white hover:bg-[#006F8E] focus:ring-[#0082A6] border border-[#006F8E] shadow-xs font-semibold",
    outline: "bg-white text-slate-700 border border-slate-300 hover:bg-slate-50 hover:text-slate-900 focus:ring-slate-400 font-medium",
    ghost: "bg-transparent text-slate-700 hover:bg-slate-100 hover:text-slate-900 border border-transparent font-medium",
    danger: "bg-[#BE123C] text-white hover:bg-[#9F1239] focus:ring-red-600 border border-[#9F1239] font-semibold",
  };

  return (
    <button
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <span className="inline-block w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
      ) : (
        <>
          {icon && iconPosition === 'left' && <span className="inline-flex shrink-0">{icon}</span>}
          <span>{children}</span>
          {icon && iconPosition === 'right' && <span className="inline-flex shrink-0">{icon}</span>}
        </>
      )}
    </button>
  );
};
