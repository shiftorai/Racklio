import type { ReactNode } from 'react';

import { ProductLogo, RacklioVsBadge } from '@/components/home';
import { Link } from '@/components/ui';
import { cn } from '@/lib/cn';
import {
  getDecisionInitials,
  type DecisionItem,
} from './decision-system-logic';

export function ProductIdentity({
  category,
  contentType,
  name,
}: {
  category: string;
  contentType: string;
  name: string;
}) {
  return (
    <div className="flex items-center gap-4">
      <span
        aria-hidden="true"
        className="grid size-12 shrink-0 place-items-center rounded-xl border border-brand/15 bg-accent-subtle font-mono text-sm font-bold text-brand shadow-card"
      >
        {getDecisionInitials(name)}
      </span>
      <div className="min-w-0">
        <p className="font-semibold tracking-[-0.02em]">{name}</p>
        <div className="mt-1.5 flex flex-wrap items-center gap-2 text-[0.68rem] font-semibold tracking-[0.1em] uppercase">
          <span className="rounded-full bg-accent-subtle px-2.5 py-1 text-brand">
            {category}
          </span>
          <span className="text-muted-foreground">{contentType}</span>
        </div>
      </div>
    </div>
  );
}

export function ComparisonIdentity({
  a,
  b,
  useProductLogos = false,
}: {
  a: string;
  b: string;
  useProductLogos?: boolean;
}) {
  const identity = (name: string, alignRight = false) => (
    <div
      className={cn(
        'flex min-w-0 items-center gap-3',
        alignRight && 'flex-row-reverse text-right',
      )}
    >
      {useProductLogos ? (
        <ProductLogo name={name} size="sm" />
      ) : (
        <span
          aria-hidden="true"
          className="grid size-11 shrink-0 place-items-center rounded-xl border border-brand/15 bg-accent-subtle font-mono text-xs font-bold text-brand"
        >
          {getDecisionInitials(name)}
        </span>
      )}
      <span className="min-w-0 break-words text-sm font-semibold sm:text-base">
        {name}
      </span>
    </div>
  );

  return (
    <div className="grid min-w-0 max-w-full grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-3">
      {identity(a)}
      {useProductLogos ? (
        <RacklioVsBadge className="size-10" />
      ) : (
        <span className="grid size-10 place-items-center rounded-full bg-brand text-xs font-bold tracking-[0.08em] text-white shadow-card">
          VS
        </span>
      )}
      {identity(b, true)}
    </div>
  );
}

export function DecisionSummary({
  footer,
  items,
  title = 'Decision summary',
}: {
  footer?: ReactNode;
  items: DecisionItem[];
  title?: string;
}) {
  return (
    <aside className="primary-decision-card relative min-w-0 overflow-hidden rounded-[1.75rem] border border-brand/20 bg-white/92 p-5 shadow-panel sm:p-6">
      <div
        aria-hidden="true"
        className="absolute inset-y-0 left-0 w-1 bg-brand"
      />
      <p className="text-[0.68rem] font-bold tracking-[0.14em] text-accent-strong uppercase">
        {title}
      </p>
      <dl className="mt-4 grid min-w-0 gap-x-5 gap-y-3 sm:grid-cols-2">
        {items.map((item) => (
          <div
            className="min-w-0 border-t border-border pt-2.5"
            key={item.label}
          >
            <dt className="text-[0.68rem] font-bold tracking-[0.08em] text-muted-foreground uppercase">
              {item.label}
            </dt>
            <dd className="mt-1 break-words text-sm leading-5">{item.text}</dd>
          </div>
        ))}
      </dl>
      {footer ? (
        <div className="mt-4 min-w-0 border-t border-brand/15 pt-3.5">
          {footer}
        </div>
      ) : null}
    </aside>
  );
}

export function VerificationStrip({ date }: { date: string }) {
  return (
    <ul className="grid overflow-hidden rounded-xl border border-border bg-white/75 text-xs sm:grid-cols-2 lg:grid-cols-4">
      {[
        ['✓', 'Official sources verified'],
        ['↻', `Last verified: ${date}`],
        ['≠', 'Provider facts separated from Racklio analysis'],
        ['—', 'No paid rankings'],
      ].map(([symbol, label], index) => (
        <li
          className={cn(
            'flex min-h-12 min-w-0 items-center gap-2.5 px-4 py-3',
            index ? 'border-t border-border sm:border-t-0 sm:border-l' : '',
          )}
          key={label}
        >
          <span aria-hidden="true" className="font-bold text-mint-deep">
            {symbol}
          </span>
          <span className="min-w-0 break-words font-medium leading-5">
            {label}
          </span>
        </li>
      ))}
    </ul>
  );
}

export function SectionNavigation({
  items,
  label,
}: {
  items: string[][];
  label: string;
}) {
  return (
    <nav aria-label={label} className="min-w-0 max-w-full lg:sticky lg:top-6">
      <p className="text-[0.68rem] font-bold tracking-[0.14em] text-accent-strong uppercase">
        On this page
      </p>
      <div className="mt-3 w-full max-w-full overflow-x-auto pb-2">
        <ol className="flex min-w-max gap-2 lg:min-w-0 lg:flex-col lg:gap-1">
          {items.map(([id, title]) => (
            <li key={id}>
              <a
                className="block min-h-10 rounded-lg border border-border bg-white px-3 py-2 text-sm text-muted-foreground transition-colors hover:border-brand/25 hover:bg-accent-subtle hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand lg:border-transparent lg:bg-transparent"
                href={`#${id}`}
              >
                {title}
              </a>
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}

export function EvidenceBlock({
  children,
  label,
  tone,
}: {
  children: ReactNode;
  label: string;
  tone: 'analysis' | 'fact' | 'limitation' | 'takeaway';
}) {
  return (
    <aside
      className={cn(
        'min-w-0 max-w-full rounded-2xl border p-5 sm:p-6',
        tone === 'fact' && 'border-mint-deep/20 bg-mint-subtle/55',
        tone === 'analysis' && 'border-brand/20 bg-accent-subtle/55',
        tone === 'limitation' && 'border-border bg-surface-subtle',
        tone === 'takeaway' && 'border-navy bg-navy text-white',
      )}
    >
      <p
        className={cn(
          'text-[0.68rem] font-bold tracking-[0.14em] uppercase',
          tone === 'fact' && 'text-mint-deep',
          tone === 'analysis' && 'text-accent-strong',
          tone === 'limitation' && 'text-muted-foreground',
          tone === 'takeaway' && 'text-mint',
        )}
      >
        {label}
      </p>
      <div
        className={cn(
          'mt-2 min-w-0 break-words text-sm leading-6',
          tone !== 'takeaway' && 'text-muted-foreground',
          tone === 'takeaway' && 'text-white',
        )}
      >
        {children}
      </div>
    </aside>
  );
}

export function KeyDifference({
  a,
  aText,
  b,
  bText,
  meaning,
}: {
  a: string;
  aText: string;
  b: string;
  bText: string;
  meaning: string;
}) {
  return (
    <section className="min-w-0 max-w-full rounded-[1.75rem] border border-brand/20 bg-white p-6 shadow-card sm:p-7">
      <p className="text-[0.68rem] font-bold tracking-[0.14em] text-accent-strong uppercase">
        Key difference
      </p>
      <div className="mt-5 grid min-w-0 max-w-full gap-4 sm:grid-cols-2">
        {[
          { name: a, text: aText },
          { name: b, text: bText },
        ].map((item) => (
          <div
            className="min-w-0 max-w-full rounded-xl bg-surface-subtle p-4"
            key={item.name}
          >
            <h3 className="flex min-w-0 items-center gap-2 break-words font-semibold">
              <ProductLogo name={item.name} size="sm" />
              <span className="min-w-0 break-words">{item.name}</span>
            </h3>
            <p className="mt-2 break-words text-sm leading-6 text-muted-foreground">
              {item.text}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-4 border-t border-border pt-4">
        <p className="text-[0.68rem] font-bold tracking-[0.1em] text-mint-deep uppercase">
          What it means
        </p>
        <p className="mt-2 break-words text-sm leading-6 text-muted-foreground">
          {meaning}
        </p>
      </div>
    </section>
  );
}

export function TrueCostFactors({ factors }: { factors: string[] }) {
  if (!factors.length) return null;

  return (
    <aside className="min-w-0 max-w-full rounded-2xl border border-brand/20 bg-accent-subtle/70 p-5 shadow-card sm:p-6">
      <p className="text-[0.68rem] font-bold tracking-[0.14em] text-mint-deep uppercase">
        What changes the real cost?
      </p>
      <ul className="mt-4 flex flex-wrap gap-2">
        {factors.map((factor) => (
          <li
            className="max-w-full break-words rounded-full border border-brand/20 bg-white px-3 py-2 text-xs font-semibold text-foreground shadow-sm"
            key={factor}
          >
            {factor}
          </li>
        ))}
      </ul>
    </aside>
  );
}

export function RelatedDecisionLinks({
  links,
}: {
  links: { title: string; href: string }[];
}) {
  if (!links.length) return null;

  return (
    <div className="min-w-0 max-w-full border-t border-border pt-6">
      <p className="text-[0.68rem] font-bold tracking-[0.14em] text-accent-strong uppercase">
        Continue your research
      </p>
      <div className="mt-4 flex min-w-0 flex-wrap gap-x-6 gap-y-3 break-words text-sm">
        {links.map((link) => (
          <Link href={link.href} key={link.href}>
            {link.title}
          </Link>
        ))}
      </div>
    </div>
  );
}
