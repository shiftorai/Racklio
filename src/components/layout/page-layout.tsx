import type { HTMLAttributes, ReactNode } from 'react';

import { cn } from '@/lib/cn';

import { Footer } from './footer';
import { Header } from './header';

export interface PageLayoutProps extends HTMLAttributes<HTMLDivElement> {
  footer?: ReactNode;
  header?: ReactNode;
}

export function PageLayout({
  children,
  className,
  footer = <Footer />,
  header = <Header />,
  ...props
}: PageLayoutProps) {
  return (
    <div
      className={cn(
        'flex min-h-dvh flex-col bg-surface text-foreground',
        className,
      )}
      {...props}
    >
      {header}
      <main id="main-content" className="flex-1" tabIndex={-1}>
        {children}
      </main>
      {footer}
    </div>
  );
}
