import { useEffect, useMemo, useState } from 'react';
import { ResearchMarker } from '@/components/brand';
import { CategoryHubTemplate } from '@/components/categories';
import { PageLayout, SiteFooter, SiteHeader } from '@/components/layout';
import { Card, CardContent, Container, Link, Section } from '@/components/ui';

import { softwareCategories } from './categories/category-data';

type Entry = {
  title: string;
  description: string;
  href: string;
  relatedLinks?: { title: string; href: string }[];
  suppressLink?: boolean;
};

const reviewEntries: Entry[] = [
  {
    title: 'Typewise Review',
    description:
      'AI customer service automation, outcome pricing, deployment, and security claims.',
    href: '/reviews/typewise',
  },
  {
    title: 'KrispCall Review',
    description:
      'Cloud calling, virtual numbers, SMS, per-user pricing, and usage charges.',
    href: '/reviews/krispcall',
  },
  {
    title: 'Tidio Review',
    description:
      'Live chat, help desk, Lyro AI, automation, and conversation limits.',
    href: '/reviews/tidio',
    relatedLinks: [
      { title: 'Alternatives', href: '/alternatives/tidio-alternatives' },
      { title: 'Compare with Gorgias', href: '/comparisons/tidio-vs-gorgias' },
    ],
  },
  {
    title: 'respond.io Review',
    description:
      'Omnichannel messaging, WhatsApp, AI workflows, users, and active-contact pricing.',
    href: '/reviews/respond-io',
    relatedLinks: [
      { title: 'Alternatives', href: '/alternatives/respond-io-alternatives' },
      { title: 'Compare with Tidio', href: '/comparisons/respond-io-vs-tidio' },
    ],
  },
  {
    title: 'Gorgias Review',
    description:
      'Ecommerce help desk, ticket pricing, AI Agent, channels, and overages.',
    href: '/reviews/gorgias',
    relatedLinks: [
      { title: 'Alternatives', href: '/alternatives/gorgias-alternatives' },
      { title: 'Compare with Tidio', href: '/comparisons/tidio-vs-gorgias' },
    ],
  },
  {
    title: 'EngageBay Review',
    description:
      'CRM, marketing, sales, service workflows, plan limits, and small-business fit.',
    href: '/reviews/engagebay',
    relatedLinks: [
      { title: 'Pricing guide', href: '/guides/engagebay-pricing' },
      { title: 'Alternatives', href: '/alternatives/engagebay-alternatives' },
      {
        title: 'Compare with HubSpot',
        href: '/comparisons/engagebay-vs-hubspot',
      },
    ],
  },
  {
    title: 'EazyChat.io Review',
    description:
      'AI website chat, human handoff, help-desk integration, usage limits, and product maturity.',
    href: '/reviews/eazychat',
    relatedLinks: [
      { title: 'Pricing guide', href: '/guides/eazychat-pricing' },
      { title: 'Alternatives', href: '/alternatives/eazychat-alternatives' },
      { title: 'Compare with Tidio', href: '/comparisons/eazychat-vs-tidio' },
    ],
  },
];

const commercialGuideEntries: Entry[] = [
  {
    title: 'EngageBay Pricing',
    description:
      'Plans, contacts, billing terms, limits, and practical cost decisions.',
    href: '/guides/engagebay-pricing',
    relatedLinks: [
      {
        title: 'EngageBay alternatives',
        href: '/alternatives/engagebay-alternatives',
      },
    ],
  },
  {
    title: 'EazyChat.io Pricing',
    description:
      'Per-user rates, AI conversation allowances, add-ons, and plan fit.',
    href: '/guides/eazychat-pricing',
    relatedLinks: [
      {
        title: 'EazyChat.io alternatives',
        href: '/alternatives/eazychat-alternatives',
      },
    ],
  },
];

const alternativeEntries: Entry[] = [
  {
    title: 'EngageBay Alternatives',
    description:
      'Choose among broader platforms, specialist support, and omnichannel messaging based on operating fit.',
    href: '/alternatives/engagebay-alternatives',
    relatedLinks: [
      { title: 'EngageBay Review', href: '/reviews/engagebay' },
      {
        title: 'EngageBay vs HubSpot',
        href: '/comparisons/engagebay-vs-hubspot',
      },
    ],
  },
  {
    title: 'EazyChat.io Alternatives',
    description:
      'Compare broader help-desk, ecommerce, and omnichannel options with focused AI website chat.',
    href: '/alternatives/eazychat-alternatives',
    relatedLinks: [
      { title: 'EazyChat.io Review', href: '/reviews/eazychat' },
      { title: 'EazyChat.io vs Tidio', href: '/comparisons/eazychat-vs-tidio' },
    ],
  },
  {
    title: 'Tidio Alternatives',
    description:
      'Choose by ecommerce specialization, omnichannel messaging, or a narrower AI-chat model.',
    href: '/alternatives/tidio-alternatives',
    relatedLinks: [
      { title: 'Tidio Review', href: '/reviews/tidio' },
      { title: 'Tidio vs Gorgias', href: '/comparisons/tidio-vs-gorgias' },
    ],
  },
  {
    title: 'Gorgias Alternatives',
    description:
      'Evaluate general support, omnichannel, or CRM paths when ecommerce help-desk depth is not central.',
    href: '/alternatives/gorgias-alternatives',
    relatedLinks: [
      { title: 'Gorgias Review', href: '/reviews/gorgias' },
      { title: 'Tidio vs Gorgias', href: '/comparisons/tidio-vs-gorgias' },
    ],
  },
  {
    title: 'respond.io Alternatives',
    description:
      'Compare website support, CRM, and business-phone paths with omnichannel conversation management.',
    href: '/alternatives/respond-io-alternatives',
    relatedLinks: [
      { title: 'respond.io Review', href: '/reviews/respond-io' },
      {
        title: 'respond.io vs Tidio',
        href: '/comparisons/respond-io-vs-tidio',
      },
    ],
  },
  {
    title: 'HubSpot Alternatives',
    description:
      'Choose by lower-complexity suite, support-first, live-chat, or omnichannel requirements.',
    href: '/alternatives/hubspot-alternatives',
    relatedLinks: [
      {
        title: 'EngageBay vs HubSpot',
        href: '/comparisons/engagebay-vs-hubspot',
      },
      { title: 'EngageBay Pricing', href: '/guides/engagebay-pricing' },
    ],
  },
];

const softwareCategoryEntries: Entry[] = softwareCategories.map((category) => ({
  title: category.shortTitle,
  description: category.definition,
  href: `/categories/${category.slug}`,
}));

const softwareDecisionEntries: Entry[] = [
  {
    title: 'Automate customer support',
    description:
      'Start with AI automation scope, escalation, knowledge, and human oversight.',
    href: '/#categories',
  },
  {
    title: 'Improve business calling',
    description:
      'Evaluate numbers, routing, calling, messaging, administration, and usage costs.',
    href: '/#categories',
  },
  {
    title: 'Manage customer conversations',
    description:
      'Compare channel coverage, shared context, ownership, and workflow automation.',
    href: '/#categories',
  },
  {
    title: 'Add an AI receptionist',
    description:
      'Review answering scope, handoff, operating hours, controls, and billing.',
    href: '/#categories',
  },
  {
    title: 'Equip a small support team',
    description:
      'Focus on inbox, ticketing, live chat, automation, seats, and practical limits.',
    href: '/#categories',
  },
];

const comparisonEntries: Entry[] = [
  {
    title: 'EngageBay vs HubSpot',
    description:
      'A compact customer suite compared with a broader multi-hub platform.',
    href: '/comparisons/engagebay-vs-hubspot',
  },
  {
    title: 'EazyChat.io vs Tidio',
    description:
      'Focused AI website chat compared with a broader support stack.',
    href: '/comparisons/eazychat-vs-tidio',
  },
  {
    title: 'Tidio vs Gorgias',
    description:
      'Live chat and AI support versus an ecommerce help-desk workflow.',
    href: '/comparisons/tidio-vs-gorgias',
  },
  {
    title: 'respond.io vs Tidio',
    description:
      'Omnichannel messaging workflows versus web chat and ticket support.',
    href: '/comparisons/respond-io-vs-tidio',
  },
  {
    title: 'KrispCall vs CallHippo',
    description:
      'Cloud phone plans, virtual numbers, calling usage, and routing.',
    href: '/comparisons/krispcall-vs-callhippo',
  },
  {
    title: 'KrispCall vs Aircall',
    description:
      'A compact business-phone model versus structured communications workflows.',
    href: '/comparisons/krispcall-vs-aircall',
  },
];

function useDescription(content: string) {
  useEffect(() => {
    const meta = document.querySelector<HTMLMetaElement>(
      'meta[name="description"]',
    );
    const previous = meta?.content;
    if (meta) meta.content = content;
    return () => {
      if (meta && previous) meta.content = previous;
    };
  }, [content]);
}

function HubPage({
  code,
  eyebrow,
  title,
  description,
  canonical,
  entries,
  sectionTitle,
  related,
  categoryEntries,
  showReviewMethodology = false,
  structuredData = false,
}: {
  code: string;
  eyebrow: string;
  title: string;
  description: string;
  canonical: string;
  entries: Entry[];
  sectionTitle?: string;
  related: Entry[];
  categoryEntries?: Entry[];
  showReviewMethodology?: boolean;
  structuredData?: boolean;
}) {
  useDescription(description);
  return (
    <PageLayout footer={<SiteFooter />} header={<SiteHeader />}>
      <title>{`${title} | Racklio`}</title>
      <link rel="canonical" href={canonical} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta name="twitter:card" content="summary" />
      {structuredData ? (
        <>
          <script
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'CollectionPage',
                name: title,
                description,
                url: canonical,
                hasPart: entries.map((entry) => ({
                  '@type': 'Article',
                  name: entry.title,
                  url: `https://racklio.com${entry.href}`,
                })),
              }),
            }}
            type="application/ld+json"
          />
          <script
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'BreadcrumbList',
                itemListElement: [
                  {
                    '@type': 'ListItem',
                    position: 1,
                    name: 'Home',
                    item: 'https://racklio.com/',
                  },
                  {
                    '@type': 'ListItem',
                    position: 2,
                    name: title,
                    item: canonical,
                  },
                ],
              }),
            }}
            type="application/ld+json"
          />
        </>
      ) : null}
      <>
        <Section
          className="border-b border-border bg-[linear-gradient(120deg,var(--color-surface),var(--color-mint-subtle))] py-14 sm:py-16 lg:py-14"
          spacing="none"
        >
          <Container>
            <ResearchMarker code={code} label={eyebrow} />
            <h1 className="mt-6 max-w-4xl text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">
              {title}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
              {description}
            </p>
          </Container>
        </Section>
        <Section className="py-14 sm:py-16 lg:py-12" spacing="none">
          <Container>
            {categoryEntries?.length ? (
              <div className="mb-12 border-b border-border pb-12">
                <h2 className="text-2xl font-semibold">Browse by category</h2>
                <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground">
                  Start with the customer workflow, then evaluate the products
                  and trade-offs inside that category.
                </p>
                <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {categoryEntries.map((entry) => (
                    <Card key={entry.href}>
                      <CardContent className="flex h-full flex-col">
                        <h3 className="font-semibold">
                          <Link href={entry.href}>{entry.title}</Link>
                        </h3>
                        <p className="mt-3 text-sm leading-6 text-muted-foreground">
                          {entry.description}
                        </p>
                        <Link
                          className="mt-auto pt-5 text-sm"
                          href={entry.href}
                        >
                          Explore category →
                        </Link>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ) : null}
            {sectionTitle ? (
              <h2 className="mb-7 text-2xl font-semibold">{sectionTitle}</h2>
            ) : null}
            <div className="grid gap-4 md:grid-cols-2">
              {entries.map((entry, index) => (
                <Card key={entry.title}>
                  <CardContent>
                    <p className="font-mono text-[0.625rem] text-accent-strong">
                      {String(index + 1).padStart(2, '0')}
                    </p>
                    {sectionTitle ? (
                      <h3 className="mt-4 text-xl font-semibold tracking-tight">
                        {entry.suppressLink ? (
                          entry.title
                        ) : (
                          <Link href={entry.href}>{entry.title}</Link>
                        )}
                      </h3>
                    ) : (
                      <h2 className="mt-4 text-xl font-semibold tracking-tight">
                        {entry.suppressLink ? (
                          entry.title
                        ) : (
                          <Link href={entry.href}>{entry.title}</Link>
                        )}
                      </h2>
                    )}
                    <p className="mt-3 text-sm leading-6 text-muted-foreground">
                      {entry.description}
                    </p>
                    {!entry.suppressLink ? (
                      <Link
                        className="mt-5 inline-block text-sm font-semibold"
                        href={entry.href}
                      >
                        Open decision page →
                      </Link>
                    ) : null}
                    {entry.relatedLinks?.length ? (
                      <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 border-t border-border pt-4 text-sm">
                        {entry.relatedLinks.map((link) => (
                          <Link href={link.href} key={link.href}>
                            {link.title}
                          </Link>
                        ))}
                      </div>
                    ) : null}
                  </CardContent>
                </Card>
              ))}
            </div>
            {showReviewMethodology ? (
              <div className="mt-14 grid gap-4 border-t border-border pt-10 md:grid-cols-2">
                <Card>
                  <CardContent>
                    <p className="text-xs font-semibold tracking-[0.14em] text-accent-strong uppercase">
                      Research process
                    </p>
                    <h2 className="mt-3 text-xl font-semibold">
                      How Racklio reviews software
                    </h2>
                    <p className="mt-3 text-sm leading-6 text-muted-foreground">
                      Racklio starts with official pricing, product
                      documentation, help centers, legal pages, and other
                      provider-controlled sources. Conclusions remain
                      conditional on buyer needs.
                    </p>
                    <Link className="mt-5 inline-block" href="/methodology">
                      Read the methodology →
                    </Link>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent>
                    <p className="text-xs font-semibold tracking-[0.14em] text-accent-strong uppercase">
                      Editorial independence
                    </p>
                    <h2 className="mt-3 text-xl font-semibold">
                      Evidence before commercial relationships
                    </h2>
                    <p className="mt-3 text-sm leading-6 text-muted-foreground">
                      Racklio does not sell rankings or publish scores.
                      Affiliate relationships do not determine conclusions or
                      product fit.
                    </p>
                    <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
                      <Link href="/editorial-standards">
                        Editorial Standards
                      </Link>
                      <Link href="/affiliate-disclosure">
                        Affiliate Disclosure
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ) : null}
          </Container>
        </Section>
        <Section
          className="border-t border-border bg-surface-subtle"
          spacing="md"
        >
          <Container>
            <h2 className="text-2xl font-semibold">Continue your decision</h2>
            <div className="mt-5 flex flex-wrap gap-x-6 gap-y-3">
              {related.map((entry) => (
                <Link href={entry.href} key={entry.href}>
                  {entry.title}
                </Link>
              ))}
            </div>
          </Container>
        </Section>
      </>
    </PageLayout>
  );
}

export function ReviewsHub() {
  return (
    <HubPage
      code="RV"
      eyebrow="Provider investigation"
      title="Software Reviews for Customer-Facing Teams"
      description="Racklio reviews software used to support customers, manage conversations, improve business communication, and organize customer relationships—using official evidence, explicit limitations, and conditional decision guidance."
      canonical="https://racklio.com/reviews"
      entries={reviewEntries}
      sectionTitle="Customer service software"
      categoryEntries={softwareCategoryEntries}
      showReviewMethodology
      related={[
        { title: 'Compare providers', description: '', href: '/comparisons' },
        { title: 'Choose by workload', description: '', href: '/guides' },
      ]}
    />
  );
}
export function ComparisonsHub() {
  return (
    <HubPage
      code="CP"
      eyebrow="Direct provider comparison"
      title="Customer Service Software Comparisons"
      description="Evidence-first comparisons of AI customer support and business communication software, focused on pricing, capabilities, limitations, and practical business fit."
      canonical="https://racklio.com/comparisons"
      entries={comparisonEntries}
      sectionTitle="Customer service software"
      related={[
        { title: 'Read provider reviews', description: '', href: '/reviews' },
        { title: 'Choose by workload', description: '', href: '/guides' },
      ]}
    />
  );
}
export function BestSoftwareHub() {
  return (
    <HubPage
      code="BS"
      eyebrow="Outcome-based software decisions"
      title="Best Software for Your Business Need"
      description="Start with the outcome your team needs, then evaluate software around verified capabilities, limits, and operating fit."
      canonical="https://racklio.com/#best"
      entries={softwareDecisionEntries}
      related={[
        {
          title: 'Browse software reviews',
          description: '',
          href: '/#reviews',
        },
        { title: 'Explore categories', description: '', href: '/#categories' },
      ]}
    />
  );
}
export function CategoriesHub() {
  return <CategoryHubTemplate categories={softwareCategories} />;
}
export function GuidesHub() {
  return (
    <HubPage
      code="BG"
      eyebrow="Workload-based decisions"
      title="Customer Service Software Guides"
      description="Start with the customer workflow your team needs to improve, then evaluate software around relevant capabilities, limits, and operating fit."
      canonical="https://racklio.com/guides"
      entries={commercialGuideEntries}
      sectionTitle="Pricing and product decisions"
      categoryEntries={softwareCategoryEntries}
      related={[
        { title: 'Read provider reviews', description: '', href: '/reviews' },
        { title: 'Compare providers', description: '', href: '/comparisons' },
      ]}
    />
  );
}

export function AlternativesHub() {
  return (
    <HubPage
      code="AL"
      eyebrow="Scenario-led replacement paths"
      title="Software Alternatives by Business Need"
      description="Alternative guides begin with the reason a product may not fit, then connect buyers to products with a meaningfully different workflow, scope, pricing model, or operating requirement. No universal replacements or paid rankings."
      canonical="https://racklio.com/alternatives"
      entries={alternativeEntries}
      sectionTitle="Current alternative guides"
      categoryEntries={softwareCategoryEntries}
      showReviewMethodology
      structuredData
      related={[
        { title: 'Read software reviews', description: '', href: '/reviews' },
        { title: 'Compare finalists', description: '', href: '/comparisons' },
        { title: 'Understand pricing', description: '', href: '/guides' },
      ]}
    />
  );
}

export function SearchPage() {
  const [query, setQuery] = useState('');
  useDescription(
    'Search Racklio reviews, comparisons, categories, and software buying guidance.',
  );
  const entries = useMemo(
    () => [
      ...reviewEntries,
      ...comparisonEntries,
      ...commercialGuideEntries,
      ...alternativeEntries,
      ...softwareCategoryEntries,
    ],
    [],
  );
  const results = entries.filter((entry) =>
    `${entry.title} ${entry.description}`
      .toLowerCase()
      .includes(query.trim().toLowerCase()),
  );
  return (
    <PageLayout footer={<SiteFooter />} header={<SiteHeader />}>
      <title>Search Racklio</title>
      <link rel="canonical" href="https://racklio.com/search" />
      <meta name="robots" content="noindex,follow" />
      <Section>
        <Container>
          <ResearchMarker code="SR" label="Site search" />
          <h1 className="mt-6 text-4xl font-semibold tracking-[-0.04em]">
            Search Racklio
          </h1>
          <label className="mt-8 block max-w-2xl">
            <span className="text-sm font-semibold">
              Search existing decision content
            </span>
            <input
              className="mt-2 w-full border border-border bg-surface-raised px-4 py-3 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Provider, comparison, or workload"
              type="search"
              value={query}
            />
          </label>
          <p aria-live="polite" className="mt-4 text-sm text-muted-foreground">
            {results.length} {results.length === 1 ? 'result' : 'results'}
          </p>
          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {results.map((entry) => (
              <Link
                className="border border-border p-5"
                href={entry.href}
                key={entry.href}
              >
                <span className="font-semibold">{entry.title}</span>
                <span className="mt-2 block text-sm text-muted-foreground">
                  {entry.description}
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </Section>
    </PageLayout>
  );
}
