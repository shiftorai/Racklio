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
        'min-w-0 max-w-full scroll-mt-28 border-t border-border pt-10 sm:pt-12',
        className,
      )}
      id={id}
    >
      <ResearchMarker code={code} label={label} />
      <h2
        className="mt-4 break-words text-3xl leading-[1.02] font-semibold tracking-[-0.04em] sm:text-4xl"
        id={`${id}-heading`}
      >
        {title}
      </h2>
      {description ? (
        <p className="mt-4 max-w-3xl break-words text-base leading-7 text-muted-foreground">
          {description}
        </p>
      ) : null}
      <div className="mt-7 min-w-0 max-w-full break-words">{children}</div>
    </section>
  );
}
