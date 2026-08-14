import type { ReactNode } from 'react';

import { PageLayout, SiteFooter, SiteHeader } from '@/components/layout';
import { ButtonLink, Container, Link } from '@/components/ui';

const categories = [
  {
    code: '01',
    icon: 'AI',
    title: 'AI Customer Support',
    description:
      'AI agents, automation, help desks, and customer-service platforms.',
  },
  {
    code: '02',
    icon: 'VO',
    title: 'Business Phone & Voice AI',
    description:
      'Cloud phone systems, AI voice agents, contact-center and receptionist software.',
  },
  {
    code: '03',
    icon: 'CH',
    title: 'Live Chat & Messaging',
    description:
      'Live chat, WhatsApp, conversational messaging, and omnichannel communication.',
  },
  {
    code: '04',
    icon: 'CRM',
    title: 'CRM & Customer Engagement',
    description:
      'Software for managing customer relationships, conversations, and engagement.',
  },
] as const;

const featuredResearch = [
  {
    type: 'Review',
    title: 'Tidio Review',
    description:
      'Understand live chat, help-desk workflows, Lyro AI, usage limits, and pricing structure.',
    context: 'Pricing and documentation reviewed August 2026',
    href: '/reviews/tidio',
  },
  {
    type: 'Review',
    title: 'respond.io Review',
    description:
      'Evaluate omnichannel messaging, WhatsApp workflows, AI agents, users, and active-contact pricing.',
    context: 'Official provider sources reviewed August 2026',
    href: '/reviews/respond-io',
  },
  {
    type: 'Comparison',
    title: 'Tidio vs Gorgias',
    description:
      'Compare a live-chat and AI-support model with an ecommerce-oriented help-desk workflow.',
    context: 'Conditional guidance without a universal winner',
    href: '/comparisons/tidio-vs-gorgias',
  },
  {
    type: 'Review',
    title: 'KrispCall Review',
    description:
      'Examine cloud calling, virtual numbers, SMS, per-user plans, and separate usage charges.',
    context: 'Pricing and limitations included',
    href: '/reviews/krispcall',
  },
  {
    type: 'Review',
    title: 'Typewise Review',
    description:
      'Assess outcome-priced AI customer-service automation, integration scope, and deployment fit.',
    context: 'Provider claims separated from Racklio analysis',
    href: '/reviews/typewise',
  },
] as const;

const comparisons = [
  {
    providers: ['Tidio', 'Gorgias'],
    href: '/comparisons/tidio-vs-gorgias',
  },
  {
    providers: ['respond.io', 'Tidio'],
    href: '/comparisons/respond-io-vs-tidio',
  },
  {
    providers: ['KrispCall', 'Aircall'],
    href: '/comparisons/krispcall-vs-aircall',
  },
  {
    providers: ['KrispCall', 'CallHippo'],
    href: '/comparisons/krispcall-vs-callhippo',
  },
] as const;

const researchSteps = [
  {
    title: 'Research',
    description:
      'Use official pricing, product documentation, help centers, security information, terms, and other authoritative provider sources.',
  },
  {
    title: 'Verify',
    description:
      'Check important facts such as pricing, limits, capabilities, and plan conditions.',
  },
  {
    title: 'Compare',
    description:
      'Separate provider facts from editorial analysis and identify meaningful trade-offs.',
  },
  {
    title: 'Recommend',
    description:
      'Explain which type of buyer each product may or may not suit.',
  },
] as const;

const decisionChoices = [
  ['Automate customer support', '/#categories', 'spark'],
  ['Improve business calling', '/#categories', 'phone'],
  ['Manage customer conversations', '/#categories', 'message'],
  ['Add an AI receptionist', '/#categories', 'people'],
  ['Equip a small support team', '/#best', 'support'],
] as const;

const trustItems = [
  ['research', 'Independent', 'Editorial Research'],
  ['method', 'Transparent', 'Methodology'],
  ['rank', 'No Paid', 'Rankings'],
  ['evidence', 'Evidence Before', 'Recommendations'],
] as const;

function LineIcon({ name }: { name: string }) {
  const paths: Record<string, ReactNode> = {
    spark: (
      <path d="m12 3 1.3 4.2L17 9l-3.7 1.8L12 15l-1.3-4.2L7 9l3.7-1.8L12 3Zm6 11 .7 2.3L21 17.5l-2.3 1.2L18 21l-.7-2.3-2.3-1.2 2.3-1.2L18 14Z" />
    ),
    phone: (
      <path d="M7.2 3.8 10 8 8.2 9.8a14.2 14.2 0 0 0 6 6l1.8-1.8 4.2 2.8-1 3c-.3.8-1.1 1.3-2 1.2C9.8 20.2 3.8 14.2 3 6.8c-.1-.9.4-1.7 1.2-2l3-1Z" />
    ),
    message: <path d="M5 5.5h14v10H9l-4 3v-13Z" />,
    people: (
      <>
        <circle cx="9" cy="8" r="3" />
        <circle cx="17" cy="9" r="2.5" />
        <path d="M3.5 20c.5-4 2.4-6 5.5-6s5 2 5.5 6M14 15c3.4-.5 5.6 1.2 6.5 4" />
      </>
    ),
    support: (
      <>
        <circle cx="12" cy="12" r="3" />
        <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1" />
      </>
    ),
    research: (
      <>
        <path d="M6 4h9l3 3v13H6V4Z" />
        <path d="M15 4v4h4M9 12h6M9 16h4" />
      </>
    ),
    method: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v10M7 12h10" />
      </>
    ),
    rank: (
      <>
        <path d="M7 9V7a5 5 0 0 1 10 0v2M5 9h14v11H5V9Z" />
        <path d="M9 4V2M15 4V2" />
      </>
    ),
    evidence: (
      <>
        <path d="M5 5h14v14H5V5Z" />
        <path d="m8 12 2.5 2.5L16 9" />
      </>
    ),
  };

  return (
    <svg
      aria-hidden="true"
      className="size-5"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.6"
      viewBox="0 0 24 24"
    >
      {paths[name]}
    </svg>
  );
}

function DecisionPanel() {
  return (
    <aside
      aria-labelledby="decision-panel-heading"
      className="overflow-hidden rounded-xl border border-border/80 bg-white shadow-panel"
    >
      <div className="grid grid-cols-2 border-b border-border text-center text-sm font-semibold">
        <Link
          className="border-b-2 border-brand px-4 py-4 text-brand"
          href="/#categories"
          variant="unstyled"
        >
          Find My Best Fit
        </Link>
        <Link
          className="px-4 py-4 text-muted-foreground hover:text-foreground"
          href="/#comparisons"
          variant="unstyled"
        >
          Compare Tools
        </Link>
      </div>
      <div className="p-5 sm:p-7">
        <h2
          className="text-xl font-semibold tracking-[-0.035em]"
          id="decision-panel-heading"
        >
          What do you want to improve?
        </h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Choose a starting point for your research.
        </p>
        <ul className="mt-5 grid gap-2">
          {decisionChoices.map(([label, href, icon]) => (
            <li key={label}>
              <Link
                className="group flex min-h-12 items-center gap-3 rounded-md border border-border bg-white px-3.5 text-sm font-semibold shadow-subtle hover:border-brand/40 hover:bg-violet-50/50"
                href={href}
                variant="unstyled"
              >
                <span className="grid size-8 shrink-0 place-items-center rounded-full bg-violet-50 text-brand">
                  <LineIcon name={icon} />
                </span>
                <span className="flex-1">{label}</span>
                <span
                  aria-hidden="true"
                  className="text-muted-foreground transition-transform group-hover:translate-x-0.5"
                >
                  &rarr;
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-xs text-muted-foreground">
          Explore software by your business needs
        </p>
      </div>
    </aside>
  );
}

function SectionHeading({
  action,
  children,
}: {
  action?: ReactNode;
  children: ReactNode;
}) {
  return (
    <div className="flex items-end justify-between gap-5">
      <h2 className="text-2xl font-semibold tracking-[-0.04em] sm:text-3xl">
        {children}
      </h2>
      {action}
    </div>
  );
}

export function Home() {
  const canonical = 'https://racklio.com/';
  const title = 'Racklio \u2014 Compare AI Customer Support Software';
  const description =
    'Evidence-based reviews and comparisons of AI customer support, business communications, CRM, and customer engagement software.';
  const schemas = [
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Racklio',
      url: canonical,
      logo: 'https://racklio.com/racklio-mark.svg',
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

      <section className="relative overflow-hidden border-b border-border bg-white py-10 sm:py-14 lg:py-16">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(circle_at_82%_10%,rgba(124,58,237,.1),transparent_30%),radial-gradient(circle_at_55%_82%,rgba(37,93,229,.08),transparent_28%)]"
        />
        <div
          aria-hidden="true"
          className="absolute -top-20 right-[-8rem] size-[30rem] rounded-full border-[5rem] border-violet-100/60"
        />
        <Container className="relative" size="wide">
          <div className="grid items-center gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16 xl:gap-24">
            <div>
              <p className="text-xs font-semibold tracking-[0.16em] text-brand uppercase">
                Compare. Choose. Grow.
              </p>
              <h1 className="mt-5 max-w-2xl text-5xl leading-[1.04] font-semibold tracking-[-0.055em] text-balance sm:text-6xl lg:text-[4.25rem]">
                Find the right customer service software
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-muted-foreground">
                Independent reviews and side-by-side comparisons to help you
                choose the best tools for your team and your customers.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <ButtonLink
                  className="bg-[linear-gradient(135deg,var(--color-accent),var(--color-brand))] shadow-card hover:brightness-95"
                  href="/#categories"
                  size="lg"
                >
                  Find My Best Fit
                </ButtonLink>
                <ButtonLink href="/#comparisons" size="lg" variant="secondary">
                  Compare Two Tools
                </ButtonLink>
              </div>
              <p className="mt-6 max-w-md text-sm leading-6 text-muted-foreground">
                Independent research based on official sources, transparent
                methodology, and no paid rankings.
              </p>
            </div>
            <DecisionPanel />
          </div>
        </Container>
      </section>

      <section
        aria-label="Racklio editorial principles"
        className="border-b border-border bg-white"
      >
        <Container size="wide">
          <ul className="grid sm:grid-cols-2 lg:grid-cols-4">
            {trustItems.map(([icon, primary, secondary], index) => (
              <li
                className={`flex min-h-20 items-center gap-4 py-4 sm:px-5 ${index > 0 ? 'sm:border-l' : ''}`}
                key={primary}
              >
                <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-violet-50 text-brand">
                  <LineIcon name={icon} />
                </span>
                <p className="text-sm leading-5 font-semibold">
                  {primary}
                  <br />
                  {secondary}
                </p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <div className="bg-surface py-8 sm:py-12">
        <Container className="grid gap-8 sm:gap-10" size="wide">
          <section aria-labelledby="categories-heading">
            <SectionHeading
              action={
                <Link className="hidden sm:inline" href="/#categories">
                  See all categories &rarr;
                </Link>
              }
            >
              <span id="categories-heading">Explore by what you need</span>
            </SectionHeading>
            <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {categories.map((category) => (
                <article
                  className="flex flex-col rounded-lg border border-border bg-white p-5 shadow-card transition-colors hover:border-brand/30 md:min-h-60 xl:min-h-64"
                  key={category.code}
                >
                  <div className="flex items-center gap-3">
                    <span className="grid size-10 place-items-center rounded-lg bg-violet-50 text-xs font-bold text-brand">
                      {category.icon}
                    </span>
                    <h3 className="text-base font-semibold tracking-[-0.02em]">
                      {category.title}
                    </h3>
                  </div>
                  <p className="mt-5 text-sm leading-6 text-muted-foreground">
                    {category.description}
                  </p>
                  <Link className="mt-auto pt-6" href="/#categories">
                    Explore category &rarr;
                  </Link>
                </article>
              ))}
            </div>
          </section>

          <section aria-labelledby="featured-heading">
            <SectionHeading
              action={
                <Link className="hidden sm:inline" href="/#reviews">
                  View all reviews &rarr;
                </Link>
              }
            >
              <span id="featured-heading">Featured software research</span>
            </SectionHeading>
            <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
              {featuredResearch.map((item) => (
                <article
                  className="flex flex-col rounded-lg border border-border bg-white p-5 shadow-card transition-colors hover:border-brand/30 md:min-h-64"
                  key={item.href}
                >
                  <p className="text-[0.6875rem] font-semibold tracking-[0.12em] text-brand uppercase">
                    {item.type}
                  </p>
                  <h3 className="mt-3 text-base font-semibold tracking-[-0.02em]">
                    <Link href={item.href}>{item.title}</Link>
                  </h3>
                  <p className="mt-4 text-sm leading-6 text-muted-foreground">
                    {item.description}
                  </p>
                  <p className="mt-auto pt-6 text-xs leading-5 text-muted-foreground">
                    {item.context}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section aria-labelledby="comparisons-heading">
            <SectionHeading
              action={
                <Link className="hidden sm:inline" href="/#comparisons">
                  See all comparisons &rarr;
                </Link>
              }
            >
              <span id="comparisons-heading">
                Compare software side by side
              </span>
            </SectionHeading>
            <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {comparisons.map((comparison) => (
                <Link
                  className="group grid min-h-24 grid-cols-[1fr_auto_1fr] items-center gap-3 rounded-lg border border-border bg-white p-5 shadow-card transition-colors hover:border-brand/40"
                  href={comparison.href}
                  key={comparison.href}
                  variant="unstyled"
                >
                  <span className="text-sm font-semibold">
                    {comparison.providers[0]}
                  </span>
                  <span className="text-xs text-muted-foreground">vs</span>
                  <span className="text-right text-sm font-semibold">
                    {comparison.providers[1]}
                  </span>
                </Link>
              ))}
            </div>
          </section>

          <section
            aria-labelledby="methodology-heading"
            className="grid gap-7 lg:grid-cols-[0.38fr_1fr] lg:items-stretch"
          >
            <div className="py-3">
              <p className="text-xs font-semibold tracking-[0.14em] text-brand uppercase">
                Our methodology
              </p>
              <h2
                className="mt-4 text-3xl leading-tight font-semibold tracking-[-0.045em] sm:text-4xl"
                id="methodology-heading"
              >
                Software decisions backed by evidence
              </h2>
              <p className="mt-4 max-w-sm text-sm leading-6 text-muted-foreground">
                We follow a clear process so buyers can make confident software
                decisions.
              </p>
              <ButtonLink
                className="mt-6"
                href="/methodology"
                variant="secondary"
              >
                Read our methodology
              </ButtonLink>
            </div>
            <ol className="grid overflow-hidden rounded-lg border border-border bg-white shadow-card md:grid-cols-2 xl:grid-cols-4">
              {researchSteps.map((step, index) => (
                <li
                  className="relative border-b border-border p-5 last:border-b-0 md:odd:border-r xl:border-r xl:border-b-0 xl:last:border-r-0"
                  key={step.title}
                >
                  <span className="grid size-9 place-items-center rounded-full bg-[linear-gradient(135deg,var(--color-accent),var(--color-brand))] text-sm font-semibold text-white">
                    {index + 1}
                  </span>
                  <h3 className="mt-5 font-semibold">{step.title}</h3>
                  <p className="mt-2 text-xs leading-5 text-muted-foreground">
                    {step.description}
                  </p>
                </li>
              ))}
            </ol>
          </section>

          <section
            aria-labelledby="independence-heading"
            className="grid items-center gap-6 rounded-lg border border-violet-200/70 bg-violet-50/70 p-5 shadow-card sm:p-7 lg:grid-cols-[1fr_auto]"
          >
            <div className="grid gap-4 sm:grid-cols-[3rem_1fr]">
              <span className="grid size-11 place-items-center rounded-full border border-violet-200 bg-white text-brand">
                <LineIcon name="evidence" />
              </span>
              <div>
                <h2
                  className="text-base font-semibold"
                  id="independence-heading"
                >
                  Independent research. Transparent business model.
                </h2>
                <p className="mt-2 max-w-4xl text-sm leading-6 text-muted-foreground">
                  Racklio may earn commissions from some links. Affiliate
                  relationships do not determine rankings or conclusions, and
                  Racklio does not sell paid rankings. Important claims are
                  sourced and periodically rechecked; material limitations and
                  reasons not to choose a product remain part of the analysis.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              <ButtonLink href="/editorial-standards" variant="secondary">
                Editorial Standards
              </ButtonLink>
              <ButtonLink href="/methodology" variant="secondary">
                Methodology
              </ButtonLink>
              <ButtonLink href="/affiliate-disclosure" variant="secondary">
                Affiliate Disclosure
              </ButtonLink>
            </div>
          </section>

          <section
            aria-labelledby="final-cta-heading"
            className="relative overflow-hidden rounded-lg border border-violet-200/70 bg-white px-5 py-7 shadow-card sm:px-9"
          >
            <div
              aria-hidden="true"
              className="absolute right-0 bottom-0 h-16 w-1/2 rounded-tl-[100%] border-t border-brand/30 bg-violet-50/60"
            />
            <div className="relative grid items-center gap-6 lg:grid-cols-[1fr_auto]">
              <div>
                <h2
                  className="max-w-xl text-2xl leading-tight font-semibold tracking-[-0.04em] sm:text-3xl"
                  id="final-cta-heading"
                >
                  Start with the software decision you need to make.
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Explore categories or compare tools to find your best fit.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <ButtonLink
                  className="bg-[linear-gradient(135deg,var(--color-accent),var(--color-brand))] hover:brightness-95"
                  href="/#categories"
                  size="lg"
                >
                  Explore Categories
                </ButtonLink>
                <ButtonLink href="/#comparisons" size="lg" variant="secondary">
                  Browse Comparisons
                </ButtonLink>
              </div>
            </div>
          </section>
        </Container>
      </div>
    </PageLayout>
  );
}
