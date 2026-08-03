import type { ButtonHTMLAttributes } from 'react';

import { cn } from '@/lib/cn';

import { Link, type LinkProps } from './link';

const variants = {
  primary:
    'border-transparent bg-accent text-accent-foreground shadow-subtle hover:bg-accent-hover',
  secondary:
    'border-border bg-surface text-foreground shadow-subtle hover:bg-muted',
  ghost: 'border-transparent bg-transparent text-foreground hover:bg-muted',
  destructive:
    'border-transparent bg-danger text-danger-foreground shadow-subtle hover:bg-danger-hover',
} as const;

const sizes = {
  sm: 'min-h-9 px-3 text-sm',
  md: 'min-h-10 px-4 text-sm',
  lg: 'min-h-11 px-5 text-base',
} as const;

export type ButtonVariant = keyof typeof variants;
export type ButtonSize = keyof typeof sizes;

function buttonStyles({
  className,
  size = 'md',
  variant = 'primary',
}: {
  className?: string;
  size?: ButtonSize;
  variant?: ButtonVariant;
} = {}) {
  return cn(
    'inline-flex cursor-pointer items-center justify-center gap-2 rounded-md border font-medium whitespace-nowrap transition-colors duration-150 disabled:pointer-events-none disabled:opacity-50',
    variants[variant],
    sizes[size],
    className,
  );
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export function Button({
  className,
  type = 'button',
  variant = 'primary',
  size = 'md',
  ...props
}: ButtonProps) {
  return (
    <button
      className={buttonStyles({ className, size, variant })}
      type={type}
      {...props}
    />
  );
}

export interface ButtonLinkProps extends Omit<LinkProps, 'variant'> {
  size?: ButtonSize;
  variant?: ButtonVariant;
}

export function ButtonLink({
  className,
  size = 'md',
  variant = 'primary',
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      className={buttonStyles({ className, size, variant })}
      variant="unstyled"
      {...props}
    />
  );
}
