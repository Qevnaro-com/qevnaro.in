import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

type Variant = 'primary' | 'ghost' | 'light';
type Size = 'sm' | 'md' | 'lg';

const base =
  'btn-sheen group relative inline-flex overflow-hidden items-center justify-center gap-2 rounded-full font-semibold tracking-wide ' +
  'transition-all duration-300 touch-manipulation select-none active:scale-[0.98] ' +
  'disabled:opacity-50 disabled:pointer-events-none cursor-pointer';

const sizes: Record<Size, string> = {
  sm: 'px-3.5 py-1.5 text-xs min-h-[36px]',
  md: 'px-5 py-2.5 sm:px-6 sm:py-3 text-sm min-h-[46px]',
  lg: 'px-6 py-3.5 sm:px-8 sm:py-4 text-sm sm:text-base min-h-[50px] sm:min-h-[52px]',
};

const variants: Record<Variant, string> = {
  primary:
    'bg-gradient-to-b from-[#4a86ff] to-[#2a6af0] text-white ' +
    'border border-white/[0.14] ' +
    'shadow-[inset_0_1px_0_rgba(255,255,255,0.28),0_1px_2px_rgba(4,10,30,0.5),0_8px_20px_-10px_rgba(46,110,254,0.55)] ' +
    'hover:from-[#5a92ff] hover:to-[#3374f6] hover:-translate-y-px ' +
    'hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.34),0_2px_4px_rgba(4,10,30,0.5),0_12px_24px_-10px_rgba(46,110,254,0.6)]',
  ghost:
    'border border-white/[0.12] bg-white/[0.035] text-fg backdrop-blur-md ' +
    'shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] ' +
    'hover:bg-white/[0.07] hover:border-white/[0.22] hover:-translate-y-px',
  light:
    'bg-[#F4F5F7] text-brand-navy border border-white ' +
    'shadow-[inset_0_-1px_0_rgba(12,29,72,0.08),0_1px_2px_rgba(0,0,0,0.3)] hover:bg-white hover:-translate-y-px',
};

interface Props {
  to?: string;
  href?: string;
  variant?: Variant;
  size?: Size;
  arrow?: boolean;
  className?: string;
  children: React.ReactNode;
  type?: 'button' | 'submit';
  disabled?: boolean;
  onClick?: () => void;
}

export const Button: React.FC<Props> = ({
  to,
  href,
  variant = 'primary',
  size = 'md',
  arrow = true,
  className = '',
  children,
  type = 'button',
  disabled,
  onClick,
}) => {
  const cls = `${base} ${sizes[size]} ${variants[variant]} ${className}`;

  const inner = (
    <>
      <span className="relative z-10">{children}</span>
      {arrow && (
        <ArrowRight className="relative z-10 h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-active:translate-x-1" />
      )}
    </>
  );

  if (to) return <Link to={to} className={cls}>{inner}</Link>;
  if (href) return <a href={href} className={cls} target="_blank" rel="noreferrer">{inner}</a>;
  return <button type={type} className={cls} disabled={disabled} onClick={onClick}>{inner}</button>;
};

export default Button;
