import type { HTMLAttributes } from 'react';

import { cn } from '@/lib/cn';

export interface ResearchMarkerProps extends HTMLAttributes<HTMLDivElement> {
  code: string;
  label: string;
  tone?: 'light' | 'dark';
}

export function ResearchMarker({
  className,
  code,
  label,
  tone = 'light',
  ...props
}: ResearchMarkerProps) {
  return (
    <div
      className={cn(
        'grid min-w-0 max-w-full grid-cols-[auto_2.25rem_minmax(0,1fr)] items-center gap-3 text-[0.6875rem] font-semibold tracking-[0.15em] uppercase',
        tone === 'dark' ? 'text-mint' : 'text-accent-strong',
        className,
      )}
      {...props}
    >
      <span className="font-mono tracking-normal">{code}</span>
      <span
        aria-hidden="true"
        className={cn(
          "relative h-px after:absolute after:top-1/2 after:right-0 after:size-1.5 after:-translate-y-1/2 after:content-['']",
          tone === 'dark'
            ? 'bg-white/30 after:bg-mint'
            : 'bg-border after:bg-accent',
        )}
      />
      <span className="min-w-0 break-words">{label}</span>
    </div>
  );
}
