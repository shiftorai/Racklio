import type { HTMLAttributes } from 'react';

import { cn } from '@/lib/cn';

const variants = {
  neutral: 'border-border bg-muted text-muted-foreground',
  accent: 'border-accent-subtle bg-accent-subtle text-accent-strong',
  success: 'border-success-subtle bg-success-subtle text-success',
} as const;

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: keyof typeof variants;
}

export function Badge({
  className,
  variant = 'neutral',
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex min-h-6 items-center rounded-full border px-2.5 py-0.5 text-xs leading-none font-medium',
        variants[variant],
        className,
      )}
      {...props}
    />
  );
}
