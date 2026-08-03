import type { HTMLAttributes, ReactNode } from 'react';

import { Container, Link } from '@/components/ui';
import { cn } from '@/lib/cn';

export interface HeaderProps extends HTMLAttributes<HTMLElement> {
  brand?: ReactNode;
  homeHref?: string;
}

export function Header({
  brand = 'Racklio',
  children,
  className,
  homeHref = '/',
  ...props
}: HeaderProps) {
  return (
    <header
      className={cn('border-b border-border bg-surface-raised', className)}
      {...props}
    >
      <Container className="flex min-h-16 flex-col items-stretch justify-center gap-x-6 gap-y-3 py-3 sm:flex-row sm:items-center sm:justify-between">
        <Link
          className="shrink-0 text-base font-semibold tracking-tight text-foreground"
          href={homeHref}
          variant="subtle"
        >
          {brand}
        </Link>
        {children ? (
          <nav
            aria-label="Primary"
            className="flex flex-wrap items-center justify-between gap-x-3 gap-y-2 text-xs [&>a]:inline-flex [&>a]:min-h-8 [&>a]:items-center sm:flex-1 sm:justify-end sm:gap-x-5 sm:text-sm"
          >
            {children}
          </nav>
        ) : null}
      </Container>
    </header>
  );
}
