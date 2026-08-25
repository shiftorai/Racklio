import type { HTMLAttributes } from 'react';

import { cn } from '@/lib/cn';

import { Link } from './link';

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'rounded-xl border border-border bg-surface-raised text-foreground shadow-card transition-[border-color,box-shadow,transform] duration-200',
        className,
      )}
      {...props}
    />
  );
}

export function CardHeader({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('p-5 pb-0 sm:p-6 sm:pb-0', className)} {...props} />
  );
}

export function CardContent({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('p-5 sm:p-6', className)} {...props} />;
}

export function CardFooter({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'flex items-center gap-3 p-5 pt-0 sm:p-6 sm:pt-0',
        className,
      )}
      {...props}
    />
  );
}

type ClickableCardProps = HTMLAttributes<HTMLElement> & {
  href: string;
  label: string;
};

export function ClickableCard({
  children,
  className,
  href,
  label,
  ...props
}: ClickableCardProps) {
  return (
    <article
      className={cn(
        'group isolate relative cursor-pointer rounded-xl border border-border bg-surface-raised text-foreground shadow-card transition-[border-color,box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:border-brand/30 hover:shadow-panel active:translate-y-0 motion-reduce:transform-none motion-reduce:transition-none',
        className,
      )}
      {...props}
    >
      <Link
        aria-label={label}
        className="absolute inset-0 z-10 rounded-[inherit] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
        href={href}
        variant="unstyled"
      />
      {children}
    </article>
  );
}
