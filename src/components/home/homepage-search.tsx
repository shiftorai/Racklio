import { useEffect, useId, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router';

import { Link } from '@/components/ui';

import { ProductLogo } from './visual-primitives';

type SearchKind =
  | 'Alternative'
  | 'Category'
  | 'Comparison'
  | 'Pricing guide'
  | 'Product'
  | 'Review';

type SearchEntry = {
  href: string;
  kind: SearchKind;
  label: string;
  product: string;
};

const contentPaths: Record<string, SearchKind> = {
  alternatives: 'Alternative',
  categories: 'Category',
  comparisons: 'Comparison',
  guides: 'Pricing guide',
  reviews: 'Review',
};

const searchKindPriority: Record<SearchKind, number> = {
  Product: 0,
  Review: 1,
  Alternative: 2,
  Category: 2,
  Comparison: 2,
  'Pricing guide': 2,
};

const nameOverrides: Record<string, string> = {
  ai: 'AI',
  aircall: 'Aircall',
  aweber: 'AWeber',
  bookyourdata: 'Bookyourdata',
  callhippo: 'CallHippo',
  eazychat: 'EazyChat.io',
  engagebay: 'EngageBay',
  fireflies: 'Fireflies.ai',
  krispcall: 'KrispCall',
  ninjaone: 'NinjaOne',
  pipedrive: 'Pipedrive',
  quo: 'Quo',
  salesmsg: 'Salesmsg',
  tidio: 'Tidio',
};

function formatSegment(segment: string) {
  return segment
    .split('-')
    .map(
      (part) =>
        nameOverrides[part] ?? `${part[0]?.toUpperCase()}${part.slice(1)}`,
    )
    .join(' ')
    .replace('Respond Io', 'respond.io')
    .replace('Crm', 'CRM');
}

function createEntry(pathname: string): SearchEntry | null {
  const [, root, slug] = pathname.split('/');
  const kind = root ? contentPaths[root] : undefined;
  if (!kind || !slug) return null;

  const cleanSlug = slug.replace(/-alternatives$/, '').replace(/-pricing$/, '');
  const product = formatSegment(cleanSlug);
  const label =
    kind === 'Category'
      ? product
      : kind === 'Comparison'
        ? product.replace(' Vs ', ' vs ')
        : `${product} ${kind}`;

  return { href: pathname, kind, label, product };
}

function normalizeDestination(href: string) {
  const normalizedHref = href.replace(/\/+$/, '');

  return normalizedHref || '/';
}

function deduplicateEntries(entries: SearchEntry[]) {
  const entriesByDestination = new Map<string, SearchEntry>();

  entries.forEach((entry) => {
    const href = normalizeDestination(entry.href);
    const candidate = { ...entry, href };
    const existing = entriesByDestination.get(href);

    if (
      !existing ||
      searchKindPriority[candidate.kind] < searchKindPriority[existing.kind]
    ) {
      entriesByDestination.set(href, candidate);
    }
  });

  return Array.from(entriesByDestination.values());
}

function rankEntry(entry: SearchEntry, query: string) {
  const value = query.toLowerCase();
  const product = entry.product.toLowerCase();
  const label = entry.label.toLowerCase();
  if (product === value || label === value) return 0;
  if (product.startsWith(value)) return 1;
  if (label.startsWith(value)) return 2;
  if (product.includes(value)) return 3;
  return 4;
}

export function HomepageSearch() {
  const navigate = useNavigate();
  const inputId = useId();
  const listId = useId();
  const rootRef = useRef<HTMLDivElement>(null);
  const [entries, setEntries] = useState<SearchEntry[]>([]);
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const controller = new AbortController();
    fetch('/sitemap.xml', { signal: controller.signal })
      .then((response) => (response.ok ? response.text() : ''))
      .then((xml) => {
        const document = new DOMParser().parseFromString(
          xml,
          'application/xml',
        );
        const nextEntries = Array.from(document.querySelectorAll('loc'))
          .map((node) => {
            try {
              return createEntry(new URL(node.textContent ?? '').pathname);
            } catch {
              return null;
            }
          })
          .filter((entry): entry is SearchEntry => entry !== null);
        const products = Array.from(
          new Map(
            nextEntries
              .filter((entry) => entry.kind === 'Review')
              .map((entry) => [
                entry.product,
                {
                  href: entry.href,
                  kind: 'Product' as const,
                  label: entry.product,
                  product: entry.product,
                },
              ]),
          ).values(),
        );
        setEntries(deduplicateEntries([...products, ...nextEntries]));
      })
      .catch((error: unknown) => {
        if (error instanceof DOMException && error.name === 'AbortError')
          return;
      });
    return () => controller.abort();
  }, []);

  useEffect(() => {
    const close = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener('pointerdown', close);
    return () => document.removeEventListener('pointerdown', close);
  }, []);

  const results = useMemo(() => {
    const value = query.trim().toLowerCase();
    if (!value) return [];
    return entries
      .filter((entry) =>
        `${entry.product} ${entry.label} ${entry.kind}`
          .toLowerCase()
          .includes(value),
      )
      .sort(
        (a, b) =>
          rankEntry(a, value) - rankEntry(b, value) ||
          a.label.localeCompare(b.label),
      )
      .slice(0, 8);
  }, [entries, query]);

  const showResults = open && query.trim().length > 0;

  return (
    <div className="relative z-20 mt-7 max-w-2xl" ref={rootRef}>
      <label className="sr-only" htmlFor={inputId}>
        Search Racklio software research
      </label>
      <div className="homepage-search-shell flex items-center gap-3 rounded-2xl border border-white/70 bg-white/92 p-2 shadow-panel backdrop-blur-md">
        <span
          aria-hidden="true"
          className="search-icon ml-3 shrink-0 text-accent-strong"
        />
        <input
          aria-activedescendant={
            showResults && results[activeIndex]
              ? `${listId}-${activeIndex}`
              : undefined
          }
          aria-autocomplete="list"
          aria-controls={listId}
          aria-expanded={showResults}
          className="min-h-12 min-w-0 flex-1 bg-transparent px-1 text-sm text-foreground outline-none placeholder:text-muted-foreground sm:text-base"
          id={inputId}
          onChange={(event) => {
            setQuery(event.target.value);
            setActiveIndex(0);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          onKeyDown={(event) => {
            if (event.key === 'Escape') {
              setOpen(false);
              event.currentTarget.blur();
            }
            if (event.key === 'ArrowDown' && results.length) {
              event.preventDefault();
              setOpen(true);
              setActiveIndex((index) => (index + 1) % results.length);
            }
            if (event.key === 'ArrowUp' && results.length) {
              event.preventDefault();
              setOpen(true);
              setActiveIndex(
                (index) => (index - 1 + results.length) % results.length,
              );
            }
            if (event.key === 'Enter' && showResults && results[activeIndex]) {
              event.preventDefault();
              void navigate(results[activeIndex].href);
            }
          }}
          placeholder="Search software, reviews, comparisons, or categories…"
          role="combobox"
          type="search"
          value={query}
        />
        <kbd className="mr-2 hidden rounded-md border border-border bg-surface px-2 py-1 text-[0.65rem] font-semibold text-muted-foreground sm:block">
          ↵ open
        </kbd>
      </div>

      {showResults ? (
        <div className="absolute top-[calc(100%+0.65rem)] right-0 left-0 z-30 overflow-hidden rounded-2xl border border-border bg-white p-2 shadow-panel">
          <p className="px-3 py-2 text-xs font-bold tracking-[0.12em] text-muted-foreground uppercase">
            {results.length ? 'Research matches' : 'No matching research'}
          </p>
          <ul id={listId} role="listbox">
            {results.map((entry, index) => (
              <li
                aria-selected={activeIndex === index}
                id={`${listId}-${index}`}
                key={entry.href}
                role="option"
              >
                <Link
                  className={`flex min-h-12 items-center justify-between gap-4 rounded-xl px-3 py-2 text-sm hover:bg-accent-subtle ${activeIndex === index ? 'bg-accent-subtle' : ''}`}
                  href={entry.href}
                  onMouseEnter={() => setActiveIndex(index)}
                  variant="unstyled"
                >
                  <span className="flex min-w-0 items-center gap-3">
                    {entry.kind !== 'Category' &&
                    entry.kind !== 'Comparison' ? (
                      <ProductLogo name={entry.product} size="sm" />
                    ) : null}
                    <span className="font-semibold">{entry.label}</span>
                  </span>
                  <span className="shrink-0 text-xs text-muted-foreground">
                    {entry.kind}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
      <p className="mt-3 text-xs leading-5 text-muted-foreground">
        Try:{' '}
        <button
          className="search-example"
          onClick={() => {
            setQuery('Tidio vs Gorgias');
            setOpen(true);
          }}
          type="button"
        >
          Tidio vs Gorgias
        </button>
        {' · '}
        <button
          className="search-example"
          onClick={() => {
            setQuery('Pipedrive pricing');
            setOpen(true);
          }}
          type="button"
        >
          Pipedrive pricing
        </button>
        {' · '}
        <button
          className="search-example"
          onClick={() => {
            setQuery('Business Phone');
            setOpen(true);
          }}
          type="button"
        >
          Business phone
        </button>
      </p>
    </div>
  );
}
