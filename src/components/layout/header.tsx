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
      <Container className="flex min-h-16 items-center justify-between gap-6">
        <Link
          className="shrink-0 text-base font-semibold tracking-tight text-foreground"
          href={homeHref}
          variant="subtle"
        >
          {brand}
        </Link>
        {children ? (
          <nav aria-label="Primary" className="flex items-center gap-5 text-sm">
            {children}
          </nav>
        ) : null}
      </Container>
    </header>
  );
}
