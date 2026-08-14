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
      className="h-7 w-auto shrink-0"
      height="28"
      src="/racklio-mark.svg"
      width="30"
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
        'inline-flex items-center',
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
            'text-[1.0625rem] font-semibold tracking-[-0.035em]',
            tone === 'dark' ? 'text-white' : 'text-foreground',
          )}
        >
          Racklio
        </span>
      )}
    </span>
  );
}
