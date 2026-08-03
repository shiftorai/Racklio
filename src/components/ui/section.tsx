import type { HTMLAttributes } from 'react';

import { cn } from '@/lib/cn';

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  spacing?: 'none' | 'sm' | 'md' | 'lg';
}

const spacing = {
  none: '',
  sm: 'py-10 sm:py-12',
  md: 'py-16 sm:py-20',
  lg: 'py-20 sm:py-24 lg:py-28',
} as const;

export function Section({
  className,
  spacing: sectionSpacing = 'md',
  ...props
}: SectionProps) {
  return (
    <section className={cn(spacing[sectionSpacing], className)} {...props} />
  );
}
