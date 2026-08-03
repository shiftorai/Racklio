import type { HTMLAttributes, ReactNode } from 'react';

import { Container } from '@/components/ui';
import { cn } from '@/lib/cn';

export interface FooterProps extends HTMLAttributes<HTMLElement> {
  brand?: ReactNode;
  legal?: ReactNode;
}

export function Footer({
  brand = 'Racklio',
  children,
  className,
  legal,
  ...props
}: FooterProps) {
  return (
    <footer className={cn('border-t border-border', className)} {...props}>
      <Container className="flex flex-col gap-5 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-medium text-foreground">{brand}</p>
          {legal ? <p className="mt-1 text-xs">{legal}</p> : null}
        </div>
        {children ? (
          <nav
            aria-label="Footer"
            className="flex flex-wrap items-center gap-5"
          >
            {children}
          </nav>
        ) : null}
      </Container>
    </footer>
  );
}
