import type { HTMLAttributes } from 'react';

import { cn } from '@/lib/cn';

export interface RacklioLogoProps extends HTMLAttributes<HTMLSpanElement> {
  tone?: 'light' | 'dark';
  variant?: 'full' | 'mark';
}

function RacklioMark() {
  return (
    <img
      alt=""
      aria-hidden="true"
      className="h-8 w-auto shrink-0 transition-transform duration-200 group-hover:-translate-y-px"
      height="32"
      src="/racklio-mark.svg"
      width="32"
    />
  );
}

export function RacklioLogo({
  'aria-label': ariaLabel,
  className,
  role,
  tone = 'light',
  variant = 'full',
  ...props
}: RacklioLogoProps) {
  const isMarkOnly = variant === 'mark';

  return (
    <span
      aria-label={isMarkOnly ? (ariaLabel ?? 'Racklio') : ariaLabel}
      className={cn(
        'group inline-flex items-center',
        !isMarkOnly && 'gap-2.5',
        className,
      )}
      role={isMarkOnly ? (role ?? 'img') : role}
      {...props}
    >
      <RacklioMark />
      {isMarkOnly ? null : (
        <span
          className={cn(
            'text-[1.125rem] font-bold tracking-[-0.04em]',
            tone === 'dark' ? 'text-white' : 'text-foreground',
          )}
        >
          Racklio
        </span>
      )}
    </span>
  );
}
