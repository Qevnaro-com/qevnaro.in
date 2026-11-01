import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

type Variant = 'primary' | 'ghost' | 'light';
type Size = 'sm' | 'md' | 'lg';

const base =
  'group relative inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-wide ' +
  'transition-all duration-300 touch-manipulation select-none active:scale-[0.98] ' +
  'disabled:opacity-50 disabled:pointer-events-none cursor-pointer';

const sizes: Record<Size, string> = {
  sm: 'px-3.5 py-1.5 text-xs min-h-[36px]',
  md: 'px-5 py-2.5 sm:px-6 sm:py-3 text-sm min-h-[46px]',
  lg: 'px-6 py-3.5 sm:px-8 sm:py-4 text-sm sm:text-base min-h-[50px] sm:min-h-[52px]',
};

const variants: Record<Variant, string> = {
  primary:
    'bg-gradient-to-r from-brand-blue via-[#2e74fe] to-[#1e5bee] text-white ' +
    'border border-white/20 shadow-[0_4px_24px_-2px_rgba(46,110,254,0.6),0_0_35px_rgba(46,110,254,0.25)] ' +
    'hover:shadow-[0_8px_32px_-2px_rgba(46,110,254,0.8)] active:brightness-95',
  ghost:
    'border border-white/12 bg-white/[0.04] text-fg backdrop-blur-md ' +
    'hover:bg-white/[0.08] hover:border-white/25 active:bg-white/[0.12]',
  light:
    'bg-white text-brand-navy hover:bg-slate-100 shadow-[0_4px_20px_rgba(255,255,255,0.2)]',
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
      {(variant === 'primary' || variant === 'ghost') && (
        <span
          className="pointer-events-none absolute inset-x-4 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/35 to-transparent opacity-80"
          aria-hidden="true"
        />
      )}
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
