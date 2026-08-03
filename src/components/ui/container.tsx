import type { HTMLAttributes } from 'react';

import { cn } from '@/lib/cn';

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  size?: 'default' | 'narrow' | 'wide';
}

const sizes = {
  narrow: 'max-w-3xl',
  default: 'max-w-6xl',
  wide: 'max-w-7xl',
} as const;

export function Container({
  className,
  size = 'default',
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn(
        'mx-auto w-full px-5 sm:px-6 lg:px-8',
        sizes[size],
        className,
      )}
      {...props}
    />
  );
}
