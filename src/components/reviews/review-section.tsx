import type { ReactNode } from 'react';

import { ResearchMarker } from '@/components/brand';
import { cn } from '@/lib/cn';

export interface ReviewSectionProps {
  children: ReactNode;
  className?: string;
  code: string;
  description?: string;
  id: string;
  label?: string;
  title: string;
}

export function ReviewSection({
  children,
  className,
  code,
  description,
  id,
  label = 'Editorial analysis',
  title,
}: ReviewSectionProps) {
  return (
    <section
      aria-labelledby={`${id}-heading`}
      className={cn(
        'min-w-0 max-w-full scroll-mt-28 border-t border-border pt-9',
        className,
      )}
      id={id}
    >
      <ResearchMarker code={code} label={label} />
      <h2
        className="mt-4 text-2xl font-semibold tracking-[-0.03em] sm:text-3xl"
        id={`${id}-heading`}
      >
        {title}
      </h2>
      {description ? (
        <p className="mt-4 max-w-3xl text-base leading-7 text-muted-foreground">
          {description}
        </p>
      ) : null}
      <div className="mt-7 min-w-0 max-w-full">{children}</div>
    </section>
  );
}
