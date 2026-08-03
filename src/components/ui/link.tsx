import type { AnchorHTMLAttributes } from 'react';
import { Link as RouterLink } from 'react-router';

import { cn } from '@/lib/cn';

const variants = {
  default:
    'text-foreground underline decoration-border underline-offset-4 hover:decoration-foreground',
  accent:
    'text-accent-strong underline decoration-accent-subtle underline-offset-4 hover:decoration-accent',
  subtle: 'text-muted-foreground no-underline hover:text-foreground',
} as const;

export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  variant?: keyof typeof variants;
}

export function Link({
  children,
  className,
  href,
  rel,
  target,
  variant = 'default',
  ...props
}: LinkProps) {
  const classes = cn(
    'rounded-sm font-medium transition-colors duration-150',
    variants[variant],
    className,
  );
  const isExternal = /^(https?:)?\/\//.test(href);

  if (isExternal) {
    return (
      <a
        className={classes}
        href={href}
        rel={target === '_blank' ? (rel ?? 'noreferrer') : rel}
        target={target}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <RouterLink className={classes} to={href} {...props}>
      {children}
    </RouterLink>
  );
}
