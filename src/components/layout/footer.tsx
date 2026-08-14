import type { HTMLAttributes, ReactNode } from 'react';

import { Container } from '@/components/ui';
import { cn } from '@/lib/cn';

export interface FooterProps extends HTMLAttributes<HTMLElement> {
  brand?: ReactNode;
  legal?: ReactNode;
  tone?: 'light' | 'dark';
}

export function Footer({
  brand = 'Racklio',
  children,
  className,
  legal,
  tone = 'light',
  ...props
}: FooterProps) {
  return (
    <footer
      className={cn(
        'border-t',
        tone === 'dark'
          ? 'border-white/10 bg-[#272622] text-white'
          : 'border-border',
        className,
      )}
      {...props}
    >
      <Container
        className={cn(
          'flex flex-col gap-8 py-10 text-sm sm:flex-row sm:items-start sm:justify-between sm:py-12',
          tone === 'dark' ? 'text-stone-300' : 'text-muted-foreground',
        )}
      >
        <div>
          <p
            className={cn(
              'font-medium',
              tone === 'dark' ? 'text-white' : 'text-foreground',
            )}
          >
            {brand}
          </p>
          {legal ? (
            <p className="mt-3 max-w-xs text-xs leading-5">{legal}</p>
          ) : null}
        </div>
        {children ? (
          <nav
            aria-label="Footer"
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
          >
            {children}
          </nav>
        ) : null}
      </Container>
    </footer>
  );
}
