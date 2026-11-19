import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'gold' | 'outline' | 'ghost' | 'danger';
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
    primary: "bg-[#071E46] text-white hover:bg-[#102F60] focus:ring-[#071E46] border border-[#071E46]",
    secondary: "bg-[#E7EEF8] text-[#071E46] hover:bg-[#D5E2F4] focus:ring-[#071E46] border border-[#C5D7F0]",
    gold: "bg-[#D6A52B] text-[#071E46] font-semibold hover:bg-[#E4B94C] focus:ring-[#D6A52B] border border-[#C59520] shadow-sm",
    outline: "bg-transparent text-[#071E46] border border-[#CBD5E1] hover:bg-slate-100 hover:border-slate-400 focus:ring-[#071E46]",
    ghost: "bg-transparent text-[#17243A] hover:bg-slate-100 focus:ring-slate-400 border border-transparent",
    danger: "bg-[#C83232] text-white hover:bg-red-700 focus:ring-red-600 border border-red-700",
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
