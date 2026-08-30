import type { HTMLAttributes } from 'react';

import { cn } from '@/lib/cn';
import { getProductBrandAsset } from '@/lib/product-brand-assets';

export function CategoryPill({
  children,
  className,
}: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        'inline-flex rounded-full border border-brand/10 bg-accent-subtle px-2.5 py-1 text-[0.65rem] font-bold tracking-[0.06em] text-accent-strong uppercase',
        className,
      )}
    >
      {children}
    </span>
  );
}

export function ProductLogo({
  name,
  size = 'md',
  loading = 'lazy',
}: {
  name: string;
  size?: 'sm' | 'md' | 'lg';
  loading?: 'eager' | 'lazy';
}) {
  const initials = name
    .split(/[ .]/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join('');
  const dimensions =
    size === 'lg'
      ? 'size-14 text-base'
      : size === 'sm'
        ? 'size-9 text-xs'
        : 'size-11 text-sm';
  const asset = getProductBrandAsset(name);
  return (
    <span
      className={cn(
        'grid shrink-0 place-items-center rounded-xl border border-border bg-surface-raised font-bold text-accent-strong shadow-subtle',
        name === 'RingOperator' && '!border-brand !bg-brand',
        dimensions,
      )}
    >
      {asset ? (
        <img
          alt={`${name} logo`}
          className="size-[70%] object-contain"
          height={size === 'lg' ? 40 : size === 'sm' ? 24 : 32}
          loading={loading}
          src={asset}
          width={size === 'lg' ? 40 : size === 'sm' ? 24 : 32}
        />
      ) : (
        <span aria-label={`${name} initials`}>{initials}</span>
      )}
    </span>
  );
}

export function RacklioVsBadge({ className }: { className?: string }) {
  return (
    <span
      aria-label="versus"
      className={cn(
        'racklio-vs-badge relative z-10 grid size-11 shrink-0 place-items-center rounded-full border border-white/80 text-[0.68rem] font-extrabold tracking-[0.08em] text-white shadow-card',
        className,
      )}
    >
      VS
    </span>
  );
}

export function EvidenceLabel({
  children,
  tone = 'fact',
}: {
  children: React.ReactNode;
  tone?: 'fact' | 'analysis' | 'limit' | 'verified';
}) {
  const styles = {
    fact: 'border-mint-deep/15 bg-mint-subtle text-mint-deep',
    analysis: 'border-brand/15 bg-accent-subtle text-accent-strong',
    limit: 'border-border bg-muted text-foreground',
    verified: 'border-mint-deep/15 bg-mint-subtle text-mint-deep',
  }[tone];
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[0.65rem] font-bold tracking-[0.07em] uppercase',
        styles,
      )}
    >
      {children}
    </span>
  );
}
