import React from 'react';

interface ButtonProps {
  title: string;
  onClick: () => void;
  color?: 'primary' | 'secondary' | 'accent' | 'success' | 'destructive' | 'healthcare-primary' | 'healthcare-accent';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'solid' | 'outline' | 'ghost';
  disabled?: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  title,
  onClick,
  color = 'primary',
  size = 'md',
  variant = 'solid',
  disabled = false,
  className = ''
}) => {
  // Base styles
  const baseStyles = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50';
  
  // Size styles
  const sizeStyles = {
    sm: 'h-9 px-3 text-sm',
    md: 'h-10 px-4 py-2',
    lg: 'h-11 px-8 text-lg',
    xl: 'h-12 px-10 text-xl'
  };
  
  // Color and variant styles
  const getColorStyles = () => {
    const colorMap = {
      primary: {
        solid: 'bg-primary text-primary-foreground hover:bg-primary/90',
        outline: 'border border-primary text-primary hover:bg-primary hover:text-primary-foreground',
        ghost: 'text-primary hover:bg-primary/10'
      },
      secondary: {
        solid: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        outline: 'border border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground',
        ghost: 'text-secondary hover:bg-secondary/10'
      },
      accent: {
        solid: 'bg-accent text-accent-foreground hover:bg-accent/90',
        outline: 'border border-accent text-accent hover:bg-accent hover:text-accent-foreground',
        ghost: 'text-accent hover:bg-accent/10'
      },
      success: {
        solid: 'bg-success text-success-foreground hover:bg-success/90',
        outline: 'border border-success text-success hover:bg-success hover:text-success-foreground',
        ghost: 'text-success hover:bg-success/10'
      },
      destructive: {
        solid: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline: 'border border-destructive text-destructive hover:bg-destructive hover:text-destructive-foreground',
        ghost: 'text-destructive hover:bg-destructive/10'
      },
      'healthcare-primary': {
        solid: 'bg-healthcare-primary text-white hover:opacity-90',
        outline: 'border border-healthcare-primary text-healthcare-primary hover:bg-healthcare-primary hover:text-white',
        ghost: 'text-healthcare-primary hover:bg-healthcare-primary/10'
      },
      'healthcare-accent': {
        solid: 'bg-healthcare-accent text-white hover:opacity-90',
        outline: 'border border-healthcare-accent text-healthcare-accent hover:bg-healthcare-accent hover:text-white',
        ghost: 'text-healthcare-accent hover:bg-healthcare-accent/10'
      }
    };
    
    return colorMap[color][variant];
  };
  
  const combinedClassName = `${baseStyles} ${sizeStyles[size]} ${getColorStyles()} ${className}`;
  
  return (
    <button
      className={combinedClassName}
      onClick={onClick}
      disabled={disabled}
      type="button"
    >
      {title}
    </button>
  );
};

export default Button;