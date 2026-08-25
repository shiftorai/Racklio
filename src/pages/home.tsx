import { useState, type ReactNode } from 'react';

import {
  CategoryPill,
  EvidenceLabel,
  HomepageSearch,
  ProductLogo,
  RacklioVsBadge,
} from '@/components/home';
import { PageLayout, SiteFooter, SiteHeader } from '@/components/layout';
import {
  ButtonLink,
  ClickableCard,
  Container,
  Link,
  Reveal,
} from '@/components/ui';
import { editorialCoverageCounts } from '@/lib/editorial-coverage';

const categories = [
  {
    code: 'AI',
    name: 'AI Customer Support',
    shortName: 'AI Support',
    href: '/categories/ai-customer-support',
    description:
      'AI agents, help desks, automation, and accountable human handoff.',
    start:
      'Start with resolution scope, knowledge quality, and escalation controls.',
    products: ['Typewise', 'Tidio', 'Gorgias'],
  },
  {
    code: 'VO',
    name: 'Business Phone & Voice AI',
    shortName: 'Business Phone',
    href: '/categories/business-phone-voice-ai',
    description:
      'Cloud calling, virtual numbers, routing, messaging, and voice automation.',
    start:
      'Start with number coverage, usage economics, routing, and integrations.',
    products: ['KrispCall', 'Aircall', 'Calilio'],
  },
  {
    code: 'CH',
    name: 'Live Chat & Messaging',
    shortName: 'Live Chat',
    href: '/categories/live-chat-messaging',
    description:
      'Website chat, WhatsApp, shared inboxes, and omnichannel workflows.',
    start:
      'Start with channel coverage, ownership, automation, and human support.',
    products: ['Tidio', 'respond.io', 'Landbot'],
  },
  {
    code: 'CRM',
    name: 'CRM & Customer Engagement',
    shortName: 'CRM',
    href: '/categories/crm-customer-engagement',
    description:
      'Customer records, lifecycle activity, communication, and engagement.',
    start:
      'Start with pipeline depth, record ownership, automation, and suite breadth.',
    products: ['Pipedrive', 'EngageBay', 'Campaign Monitor'],
  },
] as const;

const reviews = [
  {
    name: 'Tidio',
    category: 'Live Chat & Messaging',
    fit: 'Teams evaluating web chat, help-desk workflows, and Lyro AI with documented usage limits.',
    cue: 'Inspect how conversations, AI usage, and support workflows are packaged.',
    review: '/reviews/tidio',
    compare: '/comparisons/tidio-vs-gorgias',
    alternatives: '/alternatives/tidio-alternatives',
  },
  {
    name: 'respond.io',
    category: 'Live Chat & Messaging',
    fit: 'Omnichannel messaging teams working across WhatsApp and other channels.',
    cue: 'Compare channel operations, active-contact economics, and workflow control.',
    review: '/reviews/respond-io',
    compare: '/comparisons/respond-io-vs-tidio',
    alternatives: '/alternatives/respond-io-alternatives',
  },
  {
    name: 'KrispCall',
    category: 'Business Phone & Voice AI',
    fit: 'Teams evaluating virtual numbers, cloud calling, and usage-based costs.',
    cue: 'Separate seat pricing from numbers, calling, messaging, and usage charges.',
    review: '/reviews/krispcall',
    compare: '/comparisons/krispcall-vs-aircall',
  },
  {
    name: 'Pipedrive',
    category: 'CRM & Customer Engagement',
    fit: 'Sales teams that want a pipeline-first CRM rather than a broader customer suite.',
    cue: 'Map plan scope, add-ons, automation, and configured annual cost.',
    review: '/reviews/pipedrive',
    pricing: '/guides/pipedrive-pricing',
    compare: '/comparisons/pipedrive-vs-engagebay',
    alternatives: '/alternatives/pipedrive-alternatives',
  },
  {
    name: 'Gorgias',
    category: 'AI Customer Support',
    fit: 'Ecommerce support teams evaluating ticket-based help-desk and AI workflows.',
    cue: 'Assess ecommerce depth, ticket economics, automation, and operating fit.',
    review: '/reviews/gorgias',
    compare: '/comparisons/tidio-vs-gorgias',
    alternatives: '/alternatives/gorgias-alternatives',
  },
  {
    name: 'EngageBay',
    category: 'CRM & Customer Engagement',
    fit: 'Smaller teams seeking connected CRM, marketing, sales, and service workflows.',
    cue: 'Decide whether suite breadth or specialist depth matters more.',
    review: '/reviews/engagebay',
    pricing: '/guides/engagebay-pricing',
    compare: '/comparisons/engagebay-vs-hubspot',
    alternatives: '/alternatives/engagebay-alternatives',
  },
] as const;

const comparisons = [
  {
    a: 'Tidio',
    b: 'Gorgias',
    question: 'Web chat and AI support or an ecommerce-centered help desk?',
    distinction:
      'Compare the operating model before comparing individual features.',
    href: '/comparisons/tidio-vs-gorgias',
  },
  {
    a: 'respond.io',
    b: 'Tidio',
    question:
      'Omnichannel messaging operations or web chat and ticket support?',
    distinction: 'Start with channel breadth, ownership, and support workflow.',
    href: '/comparisons/respond-io-vs-tidio',
  },
  {
    a: 'Pipedrive',
    b: 'EngageBay',
    question: 'Pipeline-first CRM or a broader connected customer suite?',
    distinction:
      'Evaluate specialist sales depth against cross-team suite scope.',
    href: '/comparisons/pipedrive-vs-engagebay',
  },
  {
    a: 'Calilio',
    b: 'CallHippo',
    question:
      'How do cloud-phone bundles, usage, routing, and AI scope differ?',
    distinction:
      'Model the configured service, not only the headline subscription.',
    href: '/comparisons/calilio-vs-callhippo',
  },
] as const;

const heroComparisons = [
  {
    label: 'Tidio vs Gorgias',
    a: 'Tidio',
    b: 'Gorgias',
    href: '/comparisons/tidio-vs-gorgias',
    rows: [
      ['Best for', 'Web chat and AI support vs ecommerce-centered help desk'],
      [
        'Core lens',
        'Broader chat workflow vs ticket-centered support operations',
      ],
      [
        'Pricing lens',
        'Inspect usage units and the configured support workflow',
      ],
    ],
  },
  {
    label: 'Pipedrive vs EngageBay',
    a: 'Pipedrive',
    b: 'EngageBay',
    href: '/comparisons/pipedrive-vs-engagebay',
    rows: [
      [
        'Best for',
        'Pipeline-first sales CRM vs broader CRM, marketing, and service suite',
      ],
      ['Core lens', 'Deals and activities vs connected cross-team workflows'],
      [
        'Pricing lens',
        'Map seats and add-ons against broader suite requirements',
      ],
    ],
  },
  {
    label: 'Calilio vs CallHippo',
    a: 'Calilio',
    b: 'CallHippo',
    href: '/comparisons/calilio-vs-callhippo',
    rows: [
      [
        'Best for',
        'Configured calling bundles and usage vs an alternative SMB cloud-phone model',
      ],
      ['Core lens', 'Numbers, routing, wallet use, and usage economics'],
      [
        'Pricing lens',
        'Separate subscription, included bundles, and variable charges',
      ],
    ],
  },
] as const;

const decisionPaths = [
  {
    label: 'Reduce support workload',
    title: 'AI Customer Support',
    description:
      'Evaluate resolution scope, knowledge inputs, escalation, oversight, and usage economics.',
    href: '/categories/ai-customer-support',
    suggestions: [
      ['Typewise review', '/reviews/typewise'],
      ['Tidio vs Gorgias', '/comparisons/tidio-vs-gorgias'],
      ['EazyChat.io alternatives', '/alternatives/eazychat-alternatives'],
    ],
  },
  {
    label: 'Improve sales follow-up',
    title: 'CRM & Customer Engagement',
    description:
      'Compare pipeline ownership, communication, automation, reporting, and broader suite requirements.',
    href: '/categories/crm-customer-engagement',
    suggestions: [
      ['Pipedrive review', '/reviews/pipedrive'],
      ['Pipedrive vs EngageBay', '/comparisons/pipedrive-vs-engagebay'],
      ['EngageBay pricing', '/guides/engagebay-pricing'],
    ],
  },
  {
    label: 'Upgrade business calling',
    title: 'Business Phone & Voice AI',
    description:
      'Evaluate numbers, country coverage, routing, included usage, messaging, AI scope, and integrations.',
    href: '/categories/business-phone-voice-ai',
    suggestions: [
      ['Calilio review', '/reviews/calilio'],
      ['KrispCall vs Aircall', '/comparisons/krispcall-vs-aircall'],
      ['Quo alternatives', '/alternatives/quo-alternatives'],
    ],
  },
  {
    label: 'Manage customer conversations',
    title: 'Live Chat & Messaging',
    description:
      'Compare channel coverage, shared context, routing, automation, and human ownership.',
    href: '/categories/live-chat-messaging',
    suggestions: [
      ['respond.io review', '/reviews/respond-io'],
      ['Landbot vs Tidio', '/comparisons/landbot-vs-tidio'],
      ['Tidio alternatives', '/alternatives/tidio-alternatives'],
    ],
  },
] as const;

const steps = [
  [
    '01',
    'Research',
    'Official pricing, documentation, help centers, and provider-controlled sources.',
  ],
  [
    '02',
    'Verify',
    'Important facts, plan limits, capabilities, and conditions are checked.',
  ],
  [
    '03',
    'Compare',
    'Provider statements remain separate from Racklio analysis.',
  ],
  [
    '04',
    'Explain',
    'Trade-offs become practical buyer scenarios and conditional guidance.',
  ],
] as const;

function Arrow() {
  return (
    <span
      aria-hidden="true"
      className="transition-transform group-hover:translate-x-1"
    >
      →
    </span>
  );
}

function SectionIntro({
  eyebrow,
  title,
  text,
  action,
  headingId,
  tone = 'light',
}: {
  eyebrow: string;
  title: string;
  text: string;
  action?: ReactNode;
  headingId?: string;
  tone?: 'light' | 'dark';
}) {
  return (
    <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
      <div className="max-w-2xl">
        <p
          className={`section-eyebrow ${tone === 'dark' ? 'text-mint' : 'text-accent-strong'}`}
        >
          {eyebrow}
        </p>
        <h2
          className="mt-3 text-3xl leading-tight font-semibold tracking-[-0.045em] sm:text-4xl"
          id={headingId}
        >
          {title}
        </h2>
        <p
          className={`mt-4 max-w-xl leading-7 ${tone === 'dark' ? 'text-stone-200' : 'text-muted-foreground'}`}
        >
          {text}
        </p>
      </div>
      {action}
    </div>
  );
}

function HeroComparisonCard() {
  const [selected, setSelected] = useState(0);
  const current = heroComparisons[selected] ?? heroComparisons[0];

  return (
    <div className="hero-comparison-stage relative mx-auto w-full max-w-xl py-4 sm:px-5 sm:py-6 lg:-translate-y-6">
      <div
        aria-hidden="true"
        className="absolute top-1 right-0 hidden w-52 rotate-3 rounded-2xl border border-brand/10 bg-white/55 p-5 shadow-card sm:block"
      >
        <span className="block h-2 w-20 rounded-full bg-accent-subtle" />
        <span className="mt-3 block h-2 w-28 rounded-full bg-muted" />
      </div>
      <article className="primary-decision-card relative z-10 overflow-hidden rounded-[1.75rem] border border-white/80 bg-white/92 p-5 shadow-panel backdrop-blur-md sm:p-6">
        <div className="flex items-center justify-between gap-3">
          <EvidenceLabel tone="verified">
            Official sources verified
          </EvidenceLabel>
          <span className="text-xs font-semibold text-muted-foreground">
            Decision brief
          </span>
        </div>
        <div
          aria-label="Choose a comparison"
          className="hero-comparison-tabs mt-4 flex gap-1 overflow-x-auto pb-1"
          role="tablist"
        >
          {heroComparisons.map((comparison, index) => (
            <button
              aria-controls="hero-comparison-panel"
              aria-selected={selected === index}
              className={`min-h-10 shrink-0 rounded-lg px-2 text-xs font-semibold sm:px-2.5 ${selected === index ? 'is-selected' : ''}`}
              id={`hero-comparison-tab-${index}`}
              key={comparison.href}
              onClick={() => setSelected(index)}
              role="tab"
              type="button"
            >
              {comparison.label}
            </button>
          ))}
        </div>
        <div
          aria-labelledby={`hero-comparison-tab-${selected}`}
          className="hero-comparison-content"
          id="hero-comparison-panel"
          key={current.href}
          role="tabpanel"
        >
          <div className="mt-5 grid grid-cols-[1fr_auto_1fr] items-center gap-3">
            <div className="flex flex-col items-center text-center">
              <ProductLogo loading="eager" name={current.a} size="lg" />
              <h2 className="mt-3 text-lg font-semibold">{current.a}</h2>
            </div>
            <RacklioVsBadge />
            <div className="flex flex-col items-center text-center">
              <ProductLogo loading="eager" name={current.b} size="lg" />
              <h2 className="mt-3 text-lg font-semibold">{current.b}</h2>
            </div>
          </div>
          <dl className="mt-5 divide-y divide-border border-y border-border text-sm">
            {current.rows.map(([label, value]) => (
              <div
                className="grid grid-cols-[5.25rem_1fr] gap-3 py-2.5"
                key={label}
              >
                <dt className="font-semibold text-muted-foreground">{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
          <Link
            className="group mt-4 inline-flex items-center gap-2 font-semibold text-accent-strong"
            href={current.href}
          >
            View full comparison <Arrow />
          </Link>
        </div>
      </article>
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 hidden w-44 -rotate-3 rounded-2xl border border-mint-deep/10 bg-mint-subtle/65 p-4 shadow-card sm:block"
      >
        <span className="text-[0.65rem] font-bold tracking-[0.1em] text-mint-deep uppercase">
          Decision takeaway
        </span>
        <span className="mt-2 block h-2 w-24 rounded-full bg-mint/25" />
      </div>
    </div>
  );
}

function DecisionExplorer() {
  const [selected, setSelected] = useState(0);
  const current = decisionPaths[selected] ?? decisionPaths[0];
  return (
    <div className="mt-8 grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
      <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-1">
        {decisionPaths.map((path, index) => (
          <button
            aria-controls="decision-result"
            aria-pressed={selected === index}
            className={`decision-filter min-h-14 rounded-xl border px-4 py-3 text-left text-sm font-semibold ${selected === index ? 'is-selected' : 'border-border bg-white hover:border-brand/30'}`}
            key={path.label}
            onClick={() => setSelected(index)}
            type="button"
          >
            <span className="flex items-center justify-between gap-3">
              {path.label}
              <span aria-hidden="true">{selected === index ? '✓' : '→'}</span>
            </span>
          </button>
        ))}
      </div>
      <div
        className="decision-result rounded-[1.5rem] bg-foreground p-6 text-white shadow-panel sm:p-8"
        id="decision-result"
        key={current.label}
      >
        <p className="section-eyebrow text-mint">Suggested research path</p>
        <h3 className="mt-4 text-2xl font-semibold">{current.title}</h3>
        <p className="mt-3 max-w-xl text-sm leading-6 text-stone-300">
          {current.description}
        </p>
        <ul className="mt-6 grid gap-2 sm:grid-cols-3">
          {current.suggestions.map(([label, href]) => (
            <li key={href}>
              <Link
                className="group flex min-h-12 items-center justify-between rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-xs font-semibold text-white hover:bg-white/10"
                href={href}
                variant="unstyled"
              >
                {label}
                <Arrow />
              </Link>
            </li>
          ))}
        </ul>
        <Link
          className="group mt-6 inline-flex items-center gap-2 font-semibold text-mint"
          href={current.href}
          variant="unstyled"
        >
          Explore category <Arrow />
        </Link>
      </div>
    </div>
  );
}

export function Home() {
  const canonical = 'https://racklio.com/';
  const title = 'Racklio — Compare AI Customer Support Software';
  const description =
    'Evidence-based reviews and comparisons of AI customer support, business communications, CRM, and customer engagement software.';
  const schemas = [
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Racklio',
      url: canonical,
      logo: 'https://racklio.com/racklio-mark-v2.svg',
      parentOrganization: { '@type': 'Organization', name: 'Keleva LLC' },
      description,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Racklio',
      url: canonical,
      description,
      publisher: { '@type': 'Organization', name: 'Keleva LLC' },
    },
  ];

  return (
    <PageLayout footer={<SiteFooter />} header={<SiteHeader />}>
      <title>{title}</title>
      <link rel="canonical" href={canonical} />
      <meta name="description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {schemas.map((schema) => (
        <script
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          key={schema['@type']}
          type="application/ld+json"
        />
      ))}

      <section className="homepage-hero relative overflow-hidden border-b border-border py-10 sm:py-16 lg:py-20">
        <div
          aria-hidden="true"
          className="hero-grid absolute inset-0 opacity-70"
        />
        <Container className="relative" size="wide">
          <div className="grid items-center gap-10 lg:grid-cols-[1.04fr_0.96fr] lg:gap-12">
            <div>
              <p className="section-eyebrow text-accent-strong">
                Choose customer software with evidence, not noise.
              </p>
              <h1 className="mt-4 max-w-3xl text-[2.25rem] leading-[1.03] font-semibold tracking-[-0.058em] sm:mt-5 sm:text-[clamp(2.55rem,4.3vw,4rem)] sm:leading-[1.01]">
                Compare Customer Software.
                <span className="block text-accent-strong">
                  Choose With Evidence.
                </span>
              </h1>
              <p className="mt-4 max-w-lg text-base leading-7 text-muted-foreground sm:mt-6 sm:text-lg sm:leading-[1.85]">
                Independent reviews, pricing guides, alternatives, and
                head-to-head comparisons for growing teams.
              </p>
              <p className="mt-2 max-w-2xl text-xs leading-5 text-muted-foreground sm:mt-3 sm:text-sm sm:leading-6">
                AI customer support <span aria-hidden="true">·</span> Business
                phone &amp; voice AI <span aria-hidden="true">·</span> Live chat
                &amp; messaging <span aria-hidden="true">·</span> CRM &amp;
                customer engagement
              </p>
              <div className="hero-conversion-flow flex flex-col">
                <div className="hero-actions order-3 mt-5 flex flex-col gap-3 sm:order-1 sm:mt-8 sm:flex-row">
                  <ButtonLink
                    className="bg-brand hover:bg-accent-hover"
                    href="/#categories"
                    size="lg"
                  >
                    Explore Software <Arrow />
                  </ButtonLink>
                  <ButtonLink
                    href="/#comparisons"
                    size="lg"
                    variant="secondary"
                  >
                    Browse Comparisons <Arrow />
                  </ButtonLink>
                </div>
                <div
                  className="hero-search order-1 sm:order-2"
                  id="software-search"
                >
                  <HomepageSearch />
                </div>
                <div
                  className="hero-intents order-2 mt-3 flex flex-wrap gap-2 sm:order-3 sm:mt-4"
                  aria-label="Quick discovery links"
                >
                  <Link
                    className="hero-intent-chip"
                    href="/comparisons"
                    variant="unstyled"
                  >
                    Compare tools <Arrow />
                  </Link>
                  <Link
                    className="hero-intent-chip"
                    href="/guides"
                    variant="unstyled"
                  >
                    Check pricing <Arrow />
                  </Link>
                  <Link
                    className="hero-intent-chip"
                    href="/alternatives"
                    variant="unstyled"
                  >
                    Browse alternatives <Arrow />
                  </Link>
                </div>
              </div>
            </div>
            <HeroComparisonCard />
          </div>
        </Container>
      </section>

      <section
        aria-label="Why buyers can trust Racklio"
        className="border-b border-border bg-white"
      >
        <Container size="wide">
          <ul className="grid sm:grid-cols-3">
            {[
              [
                '✓',
                'Official sources verified',
                'Provider-controlled documentation',
              ],
              [
                '—',
                'No paid rankings',
                'Commercial relationships do not set conclusions',
              ],
              [
                '↳',
                'Recommendations depend on fit',
                'Workload and trade-offs come first',
              ],
            ].map(([icon, label, detail], index) => (
              <li
                className={`flex min-h-24 items-center gap-3 py-5 sm:px-6 ${index ? 'border-t border-border sm:border-t-0 sm:border-l' : ''}`}
                key={label}
              >
                <span
                  aria-hidden="true"
                  className="grid size-9 shrink-0 place-items-center rounded-full bg-mint-subtle font-bold text-mint-deep"
                >
                  {icon}
                </span>
                <span>
                  <strong className="block text-sm">{label}</strong>
                  <span className="mt-1 block text-xs leading-5 text-muted-foreground">
                    {detail}
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section
        aria-label="Racklio published coverage"
        className="border-b border-border bg-surface-raised/50"
      >
        <Container size="wide">
          <dl className="grid grid-cols-2 lg:grid-cols-5">
            {[
              [editorialCoverageCounts.reviews, 'Published reviews'],
              [editorialCoverageCounts.comparisons, 'Comparisons'],
              [editorialCoverageCounts.pricingGuides, 'Pricing guides'],
              [editorialCoverageCounts.alternativesGuides, 'Alternatives'],
              [editorialCoverageCounts.categories, 'Software categories'],
            ].map(([value, label]) => (
              <div
                className="border-b border-border p-5 even:border-l last:border-b-0 lg:border-b-0 lg:border-l lg:first:border-l-0"
                key={label}
              >
                <dd className="text-3xl font-semibold tracking-tight text-accent-strong">
                  {value}
                </dd>
                <dt className="mt-1 text-xs font-semibold text-muted-foreground">
                  {label}
                </dt>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <Container className="space-y-20 py-16 sm:py-20" size="wide">
        <Reveal>
          <section aria-labelledby="problem-heading">
            <SectionIntro
              eyebrow="Decision paths"
              headingId="problem-heading"
              title="What are you trying to improve?"
              text="Choose the operational problem first. Racklio will surface relevant research without pretending to calculate a universal answer."
            />
            <DecisionExplorer />
          </section>
        </Reveal>

        <Reveal>
          <section id="reviews" aria-labelledby="software-heading">
            <SectionIntro
              eyebrow="Featured research"
              headingId="software-heading"
              title="Software decisions, framed for buyer fit"
              text="Start with the operating requirement, then inspect provider facts, limitations, pricing, and alternatives."
              action={
                <Link className="group" href="/reviews">
                  All reviews <Arrow />
                </Link>
              }
            />
            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {reviews.map((item) => (
                <ClickableCard
                  className="standard-content-card decision-card flex min-h-72 flex-col rounded-2xl border border-border bg-white p-5 shadow-card"
                  href={item.review}
                  key={item.name}
                  label={`Read the ${item.name} review`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <ProductLogo name={item.name} />
                    <CategoryPill>{item.category}</CategoryPill>
                  </div>
                  <h3 className="mt-5 text-xl font-semibold">{item.name}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    <strong className="text-foreground">
                      Best suited for:{' '}
                    </strong>
                    {item.fit}
                  </p>
                  <p className="mt-3 border-l-2 border-mint pl-3 text-xs leading-5 text-muted-foreground">
                    <strong className="text-foreground">Decision cue: </strong>
                    {item.cue}
                  </p>
                  <div className="mt-auto flex flex-wrap gap-x-4 gap-y-2 border-t border-border pt-4 text-sm">
                    <span className="group inline-flex items-center gap-2 font-semibold">
                      Review <Arrow />
                    </span>
                    {'pricing' in item ? (
                      <Link
                        className="relative z-20"
                        href={item.pricing}
                        variant="subtle"
                      >
                        Pricing
                      </Link>
                    ) : null}
                    {'compare' in item ? (
                      <Link
                        className="relative z-20"
                        href={item.compare}
                        variant="subtle"
                      >
                        Compare
                      </Link>
                    ) : null}
                    {'alternatives' in item ? (
                      <Link
                        className="relative z-20"
                        href={item.alternatives}
                        variant="subtle"
                      >
                        Alternatives
                      </Link>
                    ) : null}
                  </div>
                </ClickableCard>
              ))}
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section id="comparisons" aria-labelledby="comparison-heading">
            <SectionIntro
              eyebrow="Comparison explorer"
              headingId="comparison-heading"
              title="Put operating models side by side"
              text="No winner badge. Each comparison clarifies which differences matter for a specific workflow and buyer."
              action={
                <Link className="group" href="/comparisons">
                  All comparisons <Arrow />
                </Link>
              }
            />
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {comparisons.map((item) => (
                <Link
                  className="comparison-card-v2 group block rounded-2xl border border-brand/15 bg-white p-6 shadow-card"
                  href={item.href}
                  key={item.href}
                  variant="unstyled"
                >
                  <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3">
                    <span className="flex items-center gap-2 text-lg font-semibold">
                      <ProductLogo name={item.a} size="sm" />
                      {item.a}
                    </span>
                    <RacklioVsBadge className="size-10" />
                    <span className="flex items-center justify-end gap-2 text-right text-lg font-semibold">
                      {item.b}
                      <ProductLogo name={item.b} size="sm" />
                    </span>
                  </div>
                  <h3 className="mt-6 text-base font-semibold">
                    {item.question}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {item.distinction}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 font-semibold text-accent-strong">
                    Open comparison <Arrow />
                  </span>
                </Link>
              ))}
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section id="categories" aria-labelledby="territories-heading">
            <SectionIntro
              eyebrow="Four focused verticals"
              headingId="territories-heading"
              title="Explore the customer software landscape"
              text="Each category begins with a distinct operational problem and a focused set of evaluation criteria."
            />
            <div className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2">
              {categories.map((item, index) => (
                <ClickableCard
                  className="category-territory rounded-none border-0 bg-surface-raised p-6 sm:p-8"
                  href={item.href}
                  key={item.code}
                  label={`Explore the ${item.name} category`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <span className="font-mono text-xs font-bold text-accent-strong">
                      0{index + 1} / {item.code}
                    </span>
                    <CategoryPill>{item.shortName}</CategoryPill>
                  </div>
                  <h3 className="mt-7 text-2xl font-semibold">{item.name}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    {item.description}
                  </p>
                  <p className="mt-4 text-sm leading-6">
                    <strong>Buyer starting point:</strong> {item.start}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {item.products.map((product) => (
                      <span
                        className="rounded-lg border border-border bg-surface px-2.5 py-1 text-xs font-semibold"
                        key={product}
                      >
                        {product}
                      </span>
                    ))}
                  </div>
                  <span className="group mt-6 inline-flex items-center gap-2 font-semibold">
                    Enter category <Arrow />
                  </span>
                </ClickableCard>
              ))}
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section
            className="overflow-hidden rounded-[2rem] bg-foreground p-7 text-white shadow-panel sm:p-10"
            id="methodology"
            aria-labelledby="process-heading"
          >
            <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
              <div>
                <SectionIntro
                  eyebrow="How Racklio decides"
                  headingId="process-heading"
                  title="Research made inspectable"
                  text="Provider statements, verified facts, limitations, and Racklio analysis remain visibly distinct."
                  tone="dark"
                />
                <div className="mt-7 flex flex-wrap gap-2">
                  <EvidenceLabel tone="fact">Provider fact</EvidenceLabel>
                  <EvidenceLabel tone="analysis">
                    Racklio analysis
                  </EvidenceLabel>
                  <EvidenceLabel tone="limit">Limitation</EvidenceLabel>
                </div>
              </div>
              <ol className="grid gap-5 sm:grid-cols-2">
                {steps.map((step) => (
                  <li
                    className="compact-utility-card rounded-xl border border-white/12 bg-white/5 p-5"
                    key={step[0]}
                  >
                    <span className="grid size-9 place-items-center rounded-full bg-mint font-bold text-foreground">
                      {step[0]}
                    </span>
                    <h3 className="mt-4 font-semibold">{step[1]}</h3>
                    <p className="mt-2 text-xs leading-5 text-stone-300">
                      {step[2]}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink
                className="bg-mint text-foreground hover:bg-mint-hover"
                href="/methodology"
              >
                Read methodology
              </ButtonLink>
              <ButtonLink
                className="border-white/25 bg-white/5 text-white hover:bg-white/10"
                href="/editorial-standards"
                variant="secondary"
              >
                Editorial standards
              </ButtonLink>
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section className="final-decision-panel relative overflow-hidden rounded-[2rem] border border-brand/20 bg-white p-8 shadow-card sm:p-12">
            <div className="relative z-10 max-w-2xl">
              <p className="section-eyebrow text-accent-strong">
                Make the next decision clearer
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.045em] sm:text-4xl">
                Start with the software problem your team needs to solve.
              </h2>
              <p className="mt-4 leading-7 text-muted-foreground">
                Explore focused categories or open an evidence-first comparison
                without a score, ranking, or manufactured winner.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <ButtonLink href="/#categories">
                  Explore categories <Arrow />
                </ButtonLink>
                <ButtonLink href="/comparisons" variant="secondary">
                  Browse comparisons
                </ButtonLink>
              </div>
            </div>
          </section>
        </Reveal>
      </Container>
    </PageLayout>
  );
}
