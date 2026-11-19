import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'gold' | 'outline' | 'ghost' | 'danger' | 'teal';
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
    primary: "bg-[#0082A6] text-white hover:bg-[#007191] focus:ring-[#0082A6] border border-[#007191] shadow-sm",
    secondary: "bg-[#C4DEE3]/40 text-[#0B2D3A] hover:bg-[#C4DEE3]/80 focus:ring-[#0082A6] border border-[#86B9C7]/60",
    gold: "bg-[#0B2D3A] text-[#F7F5ED] font-semibold hover:bg-[#134455] focus:ring-[#0082A6] border border-[#061D26] shadow-sm",
    teal: "bg-[#0082A6] text-white font-semibold hover:bg-[#007191] focus:ring-[#0082A6] border border-[#007191] shadow-sm",
    outline: "bg-transparent text-[#0B2D3A] border border-[#86B9C7] hover:bg-[#C4DEE3]/30 hover:border-[#0082A6] focus:ring-[#0082A6]",
    ghost: "bg-transparent text-[#0B2D3A] hover:bg-[#C4DEE3]/25 focus:ring-[#86B9C7] border border-transparent",
    danger: "bg-[#BE123C] text-white hover:bg-[#9F1239] focus:ring-red-600 border border-[#9F1239]",
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
