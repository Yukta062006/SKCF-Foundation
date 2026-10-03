import React from 'react';
import { motion } from 'framer-motion';

const buttonVariants = {
  primary: {
    bg: 'bg-teal-700',
    bgHover: 'hover:bg-teal-800',
    text: 'text-cream',
    border: '',
    shadow: 'shadow-soft',
  },
  secondary: {
    bg: 'bg-transparent',
    bgHover: 'hover:bg-teal-50',
    text: 'text-teal-700',
    textHover: 'hover:text-teal-800',
    border: 'border-2 border-teal-700',
    shadow: '',
  },
  ghost: {
    bg: 'bg-transparent',
    text: 'text-teal-700',
    border: '',
    shadow: '',
  },
};

const buttonSizes = {
  sm: 'px-5 py-2.5 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg min-h-[48px]',
};

const iconMap = {
  chevronRight: (
    <svg
      className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  ),
};

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  icon = null,
  className = '',
  href,
  onClick,
  ...props
}) {
  const baseClass = `
    inline-flex items-center justify-center font-bold rounded-pill transition-all duration-300
    focus:outline-none focus:ring-2 focus:ring-teal-700 focus:ring-offset-2 focus:ring-offset-cream
    active:scale-95
  `;

  const variantClass = `
    ${buttonVariants[variant].bg}
    ${buttonVariants[variant].bgHover}
    ${buttonVariants[variant].text}
    ${buttonVariants[variant].textHover}
    ${buttonVariants[variant].border}
    ${buttonVariants[variant].shadow}
    ${buttonSizes[size]}
    ${className}
  `;

  const content = (
    <span className="flex items-center gap-2">
      {children}
      {icon && iconMap[icon]}
    </span>
  );

  if (href) {
    return (
      <a
        href={href}
        className={`${baseClass} ${variantClass}`}
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <motion.button
      whileHover={{ y: -3 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseClass} ${variantClass}`}
      onClick={onClick}
      {...props}
    >
      {content}
    </motion.button>
  );
}

export default Button;
