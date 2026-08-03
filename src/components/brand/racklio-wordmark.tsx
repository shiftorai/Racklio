import type { HTMLAttributes } from 'react';

import { cn } from '@/lib/cn';

export interface RacklioWordmarkProps extends HTMLAttributes<HTMLSpanElement> {
  tone?: 'light' | 'dark';
}

export function RacklioWordmark({
  className,
  tone = 'light',
  ...props
}: RacklioWordmarkProps) {
  return (
    <span
      className={cn('inline-flex items-center gap-2.5', className)}
      {...props}
    >
      <span
        aria-hidden="true"
        className={cn('brand-mark', tone === 'dark' && 'brand-mark-inverse')}
      >
        <span />
        <span />
        <span />
      </span>
      <span className="text-[1.0625rem] font-semibold tracking-[-0.035em]">
        Racklio
      </span>
    </span>
  );
}
