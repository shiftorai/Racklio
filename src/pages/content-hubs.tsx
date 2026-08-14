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
  },
  {
    title: 'respond.io Review',
    description:
      'Omnichannel messaging, WhatsApp, AI workflows, users, and active-contact pricing.',
    href: '/reviews/respond-io',
  },
  {
    title: 'Gorgias Review',
    description:
      'Ecommerce help desk, ticket pricing, AI Agent, channels, and overages.',
    href: '/reviews/gorgias',
  },
  {
    title: 'EngageBay Review',
    description:
      'CRM, marketing, sales, service workflows, plan limits, and small-business fit.',
    href: '/reviews/engagebay',
  },
  {
    title: 'EazyChat.io Review',
    description:
      'AI website chat, human handoff, help-desk integration, usage limits, and product maturity.',
    href: '/reviews/eazychat',
  },
];

const hostingReviewEntries: Entry[] = [
  {
    title: 'Liquid Web Review',
    description:
      'Managed WordPress, VPS, dedicated infrastructure, and operational tradeoffs.',
    href: '/reviews/liquid-web',
  },
  {
    title: 'Kinsta Review',
    description:
      'Managed WordPress operations, traffic accounting, workflow, and limitations.',
    href: '/reviews/kinsta',
  },
  {
    title: 'WP Engine Review',
    description:
      'Managed WordPress platform workflows, environments, and business fit.',
    href: '/reviews/wp-engine',
  },
  {
    title: 'Rocket.net Review',
    description:
      'Managed WordPress, edge delivery, finite resources, and operational model.',
    href: '/reviews/rocket-net',
  },
  {
    title: 'Pressable Review',
    description:
      'Managed WordPress resources, collaboration, backups, and scaling paths.',
    href: '/reviews/pressable',
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

const hostingComparisonEntries: Entry[] = [
  {
    title: 'Kinsta vs WP Engine',
    description: 'Two managed WordPress operating models.',
    href: '/comparisons/kinsta-vs-wp-engine',
  },
  {
    title: 'Liquid Web vs WP Engine',
    description: 'Infrastructure breadth versus a WordPress-focused platform.',
    href: '/comparisons/liquid-web-vs-wp-engine',
  },
  {
    title: 'Hostinger vs WP Engine',
    description: 'Broad hosting scope versus managed WordPress specialization.',
    href: '/comparisons/hostinger-vs-wp-engine',
  },
  {
    title: 'Rocket.net vs WP Engine',
    description:
      'Managed edge operations versus structured platform workflows.',
    href: '/comparisons/rocket-net-vs-wp-engine',
  },
  {
    title: 'Rocket.net vs Kinsta',
    description:
      'Unmetered visitor accounting versus selectable traffic models.',
    href: '/comparisons/rocket-net-vs-kinsta',
  },
  {
    title: 'Pressable vs WP Engine',
    description:
      'Portfolio collaboration versus structured managed environments.',
    href: '/comparisons/pressable-vs-wp-engine',
  },
  {
    title: 'Liquid Web vs Kinsta',
    description:
      'Infrastructure control versus standardized managed WordPress.',
    href: '/comparisons/liquid-web-vs-kinsta',
  },
  {
    title: 'Pressable vs Kinsta',
    description:
      'Per-site resources and collaboration versus selectable accounting.',
    href: '/comparisons/pressable-vs-kinsta',
  },
  {
    title: 'Rocket.net vs Pressable',
    description:
      'Visitor accounting versus portfolio and resource disclosures.',
    href: '/comparisons/rocket-net-vs-pressable',
  },
  {
    title: 'Liquid Web vs Rocket.net',
    description:
      'Broader infrastructure versus managed WordPress edge operations.',
    href: '/comparisons/liquid-web-vs-rocket-net',
  },
  {
    title: 'Liquid Web vs Pressable',
    description:
      'Server-level options versus managed WordPress portfolio tooling.',
    href: '/comparisons/liquid-web-vs-pressable',
  },
];

const guideEntries: Entry[] = [
  {
    title: 'Managed WordPress Hosting for Small Business',
    description: 'Choose around business risk, workload, support, and cost.',
    href: '/best/managed-wordpress-hosting-for-small-business',
  },
  {
    title: 'Managed WordPress Hosting for Agencies',
    description:
      'Evaluate client operations, permissions, workflow, and portfolio economics.',
    href: '/best/managed-wordpress-hosting-for-agencies',
  },
  {
    title: 'Managed WordPress Hosting for Multiple Websites',
    description:
      'Compare installs, isolation, access, resources, and portfolio management.',
    href: '/best/managed-wordpress-hosting-for-multiple-websites',
  },
  {
    title: 'Managed WordPress Hosting for Developers',
    description:
      'Compare local tools, environments, Git, SSH, WP-CLI, APIs, and deployment.',
    href: '/best/managed-wordpress-hosting-for-developers',
  },
  {
    title: 'Managed WordPress Hosting for Membership Sites',
    description:
      'Evaluate logged-in traffic, cacheability, database activity, and recovery.',
    href: '/best/managed-wordpress-hosting-for-membership-sites',
  },
  {
    title: 'Managed WordPress Hosting for SaaS Websites',
    description:
      'Separate the WordPress content layer from the SaaS application backend.',
    href: '/best/managed-wordpress-hosting-for-saas-websites',
  },
  {
    title: 'Managed WordPress Hosting for Enterprise',
    description:
      'Compare SLA, governance, recovery, support, and infrastructure scope.',
    href: '/best/managed-wordpress-hosting-for-enterprise',
  },
  {
    title: 'Managed WordPress Hosting for Publishers',
    description:
      'Evaluate editorial workflow, traffic shape, bandwidth, and publishing scale.',
    href: '/best/managed-wordpress-hosting-for-publishers',
  },
  {
    title: 'Managed WordPress Hosting for High-Traffic Websites',
    description:
      'Compare cacheability, origin demand, transfer, spikes, and scaling paths.',
    href: '/best/managed-wordpress-hosting-for-high-traffic-websites',
  },
  {
    title: 'Managed WooCommerce Hosting',
    description:
      'Evaluate checkout, dynamic traffic, transactional data, and store operations.',
    href: '/best/managed-woocommerce-hosting',
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
  secondaryEntries,
  secondaryTitle,
  related,
  categoryEntries,
  showReviewMethodology = false,
}: {
  code: string;
  eyebrow: string;
  title: string;
  description: string;
  canonical: string;
  entries: Entry[];
  sectionTitle?: string;
  secondaryEntries?: Entry[];
  secondaryTitle?: string;
  related: Entry[];
  categoryEntries?: Entry[];
  showReviewMethodology?: boolean;
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
      <>
        <Section
          className="border-b border-border bg-surface-subtle py-14 sm:py-16 lg:py-14"
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
            {secondaryEntries?.length && secondaryTitle ? (
              <div className="mt-14 border-t border-border pt-10">
                <h2 className="text-2xl font-semibold">{secondaryTitle}</h2>
                <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground">
                  Racklio&apos;s earlier evidence-first hosting coverage remains
                  available for readers researching web infrastructure.
                </p>
                <div className="mt-7 grid gap-4 md:grid-cols-2">
                  {secondaryEntries.map((entry, index) => (
                    <Card key={entry.href}>
                      <CardContent>
                        <p className="font-mono text-[0.625rem] text-muted-foreground">
                          H{String(index + 1).padStart(2, '0')}
                        </p>
                        <h3 className="mt-4 text-xl font-semibold tracking-tight">
                          <Link href={entry.href}>{entry.title}</Link>
                        </h3>
                        <p className="mt-3 text-sm leading-6 text-muted-foreground">
                          {entry.description}
                        </p>
                        <Link
                          className="mt-5 inline-block text-sm font-semibold"
                          href={entry.href}
                        >
                          Open decision page →
                        </Link>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ) : null}
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
      secondaryEntries={hostingReviewEntries}
      secondaryTitle="Hosting reviews"
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
      secondaryEntries={hostingComparisonEntries}
      secondaryTitle="Hosting comparisons"
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
      title="Hosting Buying Guides"
      description="Choose a hosting model around the workload, operating requirements, and business context that actually shape the decision."
      canonical="https://racklio.com/guides"
      entries={guideEntries}
      related={[
        { title: 'Read provider reviews', description: '', href: '/reviews' },
        { title: 'Compare providers', description: '', href: '/comparisons' },
      ]}
    />
  );
}

export function SearchPage() {
  const [query, setQuery] = useState('');
  useDescription(
    'Search Racklio reviews, comparisons, and workload-based hosting buying guides.',
  );
  const entries = useMemo(
    () => [
      ...reviewEntries,
      ...comparisonEntries,
      ...softwareCategoryEntries,
      ...hostingComparisonEntries,
      ...guideEntries,
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
