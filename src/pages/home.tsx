import { useState, type ReactNode } from 'react';

import {
  CategoryPill,
  EvidenceLabel,
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

const decisionTerritories = [
  {
    code: 'COMMUNICATE',
    name: 'Business Phone & Voice AI',
    href: '/categories/business-phone-voice-ai',
    description:
      'Business phone systems, cloud calling, virtual numbers, routing, messaging, and voice AI.',
    start:
      'Start with number coverage, routing, usage economics, and integrations.',
    products: [
      'KrispCall',
      'Aircall',
      'CallHippo',
      'Vida.io',
      'Quo',
      'Calilio',
    ],
  },
  {
    code: 'SUPPORT',
    name: 'AI Customer Support',
    href: '/categories/ai-customer-support',
    description:
      'AI agents, help desks, support automation, chatbots, knowledge workflows, and human handoff.',
    start:
      'Start with resolution scope, knowledge quality, escalation, and human oversight.',
    products: [
      'Typewise',
      'Tidio',
      'Gorgias',
      'EazyChat.io',
      'Landbot',
      'Help Scout',
    ],
  },
  {
    code: 'ENGAGE',
    name: 'Customer Engagement',
    href: '/categories/crm-customer-engagement',
    description:
      'Email, lifecycle communication, campaigns, journeys, and engagement automation.',
    start:
      'Start with the relationship lifecycle, campaign scope, automation, and channels.',
    products: [
      'EngageBay',
      'Campaign Monitor',
      'AWeber',
      'Pipedrive',
      'Capsule CRM',
    ],
  },
] as const;

const reviews = [
  {
    name: 'Tidio',
    category: 'AI Customer Support',
    fit: 'Teams evaluating web chat, help-desk workflows, and Lyro AI with documented usage limits.',
    cue: 'Inspect how conversations, AI usage, and support workflows are packaged.',
    notFor:
      'You need an ecommerce-centered ticket workflow to be the starting point.',
    review: '/reviews/tidio',
    compare: '/comparisons/tidio-vs-gorgias',
    alternatives: '/alternatives/tidio-alternatives',
  },
  {
    name: 'Help Scout',
    category: 'AI Customer Support',
    fit: 'Support teams evaluating a shared inbox, knowledge content, customer-facing assistance, and AI usage economics.',
    cue: 'Inspect inbox scope, user billing, AI Answer usage, and workflow controls.',
    notFor: 'Your primary requirement is an ecommerce-centered help desk.',
    review: '/reviews/help-scout',
    compare: '/comparisons/help-scout-vs-gorgias',
    alternatives: '/alternatives/help-scout-alternatives',
  },
  {
    name: 'KrispCall',
    category: 'Business Phone & Voice AI',
    fit: 'Teams evaluating virtual numbers, cloud calling, and usage-based costs.',
    cue: 'Separate seat pricing from numbers, calling, messaging, and usage charges.',
    notFor: 'You want a customer-support help desk rather than a phone system.',
    review: '/reviews/krispcall',
    compare: '/comparisons/krispcall-vs-aircall',
  },
  {
    name: 'Pipedrive',
    category: 'Customer Engagement',
    fit: 'Sales teams that want a pipeline-first CRM rather than a broader customer suite.',
    cue: 'Map plan scope, add-ons, automation, and configured annual cost.',
    notFor: 'You need a broad marketing and service suite in the same product.',
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
    notFor: 'Ecommerce support is not central to your operating model.',
    review: '/reviews/gorgias',
    compare: '/comparisons/tidio-vs-gorgias',
    alternatives: '/alternatives/gorgias-alternatives',
  },
  {
    name: 'EngageBay',
    category: 'Customer Engagement',
    fit: 'Smaller teams seeking connected CRM, marketing, sales, and service workflows.',
    cue: 'Decide whether suite breadth or specialist depth matters more.',
    notFor: 'Your priority is specialist, pipeline-first sales CRM depth.',
    review: '/reviews/engagebay',
    pricing: '/guides/engagebay-pricing',
    compare: '/comparisons/pipedrive-vs-engagebay',
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
    a: 'Help Scout',
    b: 'Gorgias',
    question: 'Shared-inbox support or an ecommerce-centered help desk?',
    distinction: 'Start with the support operating model and commerce context.',
    href: '/comparisons/help-scout-vs-gorgias',
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

const decisionPaths = [
  {
    label: 'Improve customer communication',
    title: 'Business Phone & Voice AI',
    description:
      'Evaluate business phone systems, cloud calling, virtual numbers, routing, messaging, and voice AI.',
    href: '/categories/business-phone-voice-ai',
    suggestions: [
      ['CallHippo review', '/reviews/callhippo'],
      ['KrispCall vs Aircall', '/comparisons/krispcall-vs-aircall'],
      ['Calilio pricing', '/guides/calilio-pricing'],
    ],
  },
  {
    label: 'Reduce support workload',
    title: 'AI Customer Support',
    description:
      'Evaluate resolution scope, knowledge inputs, escalation, oversight, and support operating economics.',
    href: '/categories/ai-customer-support',
    suggestions: [
      ['Help Scout review', '/reviews/help-scout'],
      ['Tidio vs Gorgias', '/comparisons/tidio-vs-gorgias'],
      ['EazyChat.io alternatives', '/alternatives/eazychat-alternatives'],
    ],
  },
  {
    label: 'Build customer engagement',
    title: 'Customer Engagement',
    description:
      'Compare email, lifecycle communication, campaigns, journeys, and engagement automation.',
    href: '/categories/crm-customer-engagement',
    suggestions: [
      ['EngageBay review', '/reviews/engagebay'],
      ['Campaign Monitor vs AWeber', '/comparisons/campaign-monitor-vs-aweber'],
      ['AWeber pricing', '/guides/aweber-pricing'],
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
    'Plan limits, seat minimums, usage units, and capability claims are checked against documentation.',
  ],
  [
    '03',
    'Compare',
    'Provider statements stay visibly separate from Racklio analysis. You can see which is which.',
  ],
  [
    '04',
    'Explain',
    "Trade-offs become buyer scenarios: who this fits, who it doesn't, and what may limit the fit.",
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
          className="mt-3 text-3xl leading-[1.02] font-semibold tracking-[-0.045em] sm:text-[clamp(2.75rem,4vw,3.75rem)]"
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

function DecisionExplorer() {
  const [selected, setSelected] = useState(0);
  const current = decisionPaths[selected] ?? decisionPaths[0];
  return (
    <div className="grid min-w-0 gap-3 sm:gap-4">
      <div className="grid min-w-0 gap-2 sm:grid-cols-3">
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
        className="decision-result rounded-[1.5rem] bg-foreground p-6 text-white shadow-panel"
        id="decision-result"
        key={current.label}
      >
        <p className="section-eyebrow text-mint">Suggested research path</p>
        <h3 className="mt-3 text-2xl font-semibold">{current.title}</h3>
        <p className="mt-2 max-w-xl text-sm leading-6 text-stone-300">
          {current.description}
        </p>
        <ul className="mt-4 grid gap-2 sm:grid-cols-3">
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
          className="group mt-4 inline-flex items-center gap-2 font-semibold text-mint"
          href={current.href}
          variant="unstyled"
        >
          Explore research <Arrow />
        </Link>
      </div>
    </div>
  );
}

export function Home() {
  const canonical = 'https://racklio.com/';
  const title =
    'Racklio — Customer Communication, Support & Engagement Software';
  const description =
    'Independent reviews, comparisons, pricing guides, and alternatives for customer communication, AI support, business phone, voice AI, and customer engagement software.';
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

      <section className="homepage-hero relative z-10 overflow-visible border-b border-border py-8 sm:py-10 lg:py-9">
        <div
          aria-hidden="true"
          className="hero-grid absolute inset-0 opacity-70"
        />
        <Container className="relative" size="wide">
          <div className="grid items-start gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:gap-10">
            <div className="lg:pt-2">
              <p className="section-eyebrow text-accent-strong">
                Independent software research
              </p>
              <h1 className="mt-3 max-w-[35rem] text-[clamp(2.75rem,11vw,3.25rem)] leading-[1.02] font-semibold tracking-[-0.05em] sm:mt-4 sm:text-[clamp(3.25rem,5vw,4.25rem)]">
                Choose the Right Customer Software.
                <span className="block text-accent-strong">
                  Without the Guesswork.
                </span>
              </h1>
              <p className="mt-4 max-w-lg text-[1.0625rem] leading-7 text-muted-foreground sm:text-lg sm:leading-7">
                Compare pricing, limitations, and real use cases across customer
                communication, support, and engagement software — so you can
                make the right choice before you spend.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <ButtonLink href="#decision-path">
                  Find the Right Software <Arrow />
                </ButtonLink>
                <ButtonLink href="/comparisons" variant="secondary">
                  Compare Tools <Arrow />
                </ButtonLink>
              </div>
            </div>
            <div
              className="rounded-[2rem] border border-border bg-white/90 p-5 shadow-panel sm:p-6"
              id="decision-path"
            >
              <p className="section-eyebrow text-accent-strong">
                Start with your problem
              </p>
              <h2 className="mt-2 text-2xl font-semibold tracking-[-0.035em] sm:text-3xl">
                What are you trying to improve?
              </h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Choose how you need to communicate with, support, or engage
                customers. Racklio will surface the relevant research without
                pretending to calculate a universal answer.
              </p>
              <div className="mt-4">
                <DecisionExplorer />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-border py-14 sm:py-20">
        <Container size="wide">
          <SectionIntro
            eyebrow="The real cost of a bad pick"
            headingId="decision-cost-heading"
            title="The subscription is the cheap part."
            text="The visible plan price is only one part of a software decision. Usage rules, implementation work, team adoption, and contract scope can change the real cost after a choice is made."
          />
          <div
            aria-labelledby="decision-cost-heading"
            className="mt-8 grid gap-4 md:grid-cols-3"
          >
            {[
              [
                'Hidden pricing',
                'Usage units, seat minimums, and configured add-ons may sit outside the headline plan price. Racklio surfaces the documented conditions buyers need to model.',
              ],
              [
                'Sales-led evaluation',
                'A provider demo explains that provider’s product. Independent analysis adds the missing question: where does the operating model stop fitting?',
              ],
              [
                'Switching cost',
                'Migration, retraining, and rebuilt integrations add time and cost beyond the subscription. Fit matters before a contract is signed.',
              ],
            ].map(([heading, body]) => (
              <article
                className="rounded-2xl border border-border bg-surface-raised p-6"
                key={heading}
              >
                <h3 className="text-lg font-semibold">{heading}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {body}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section
        aria-label="Why buyers can trust Racklio"
        className="border-b border-border bg-surface-mint/55"
      >
        <Container size="wide">
          <ul className="grid sm:grid-cols-3">
            {[
              [
                '✓',
                'Official sources verified',
                'Pricing, limits, and capabilities come from provider-controlled documentation.',
              ],
              [
                '—',
                'No paid rankings',
                'Commercial relationships never set ordering, scoring, or conclusions.',
              ],
              [
                '↳',
                'Recommendations based on fit',
                'The right choice depends on workload, team, and operating constraints.',
              ],
            ].map(([icon, label, detail], index) => (
              <li
                className={`flex min-h-28 items-center gap-3 py-5 sm:px-6 ${index ? 'border-t border-border sm:border-t-0 sm:border-l' : ''}`}
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
          <p className="border-t border-border py-4 text-center text-xs font-semibold tracking-[0.02em] text-muted-foreground">
            Every material product fact is traced to provider documentation. No
            sponsored placements. No pay-to-rank.
          </p>
        </Container>
      </section>

      <Container className="space-y-20 py-16 sm:py-24" size="wide">
        <Reveal>
          <section
            className="overflow-hidden rounded-[2rem] bg-foreground p-7 text-white shadow-panel sm:p-10"
            id="methodology"
            aria-labelledby="process-heading"
          >
            <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
              <div>
                <SectionIntro
                  eyebrow="How every page here gets made"
                  headingId="process-heading"
                  title="Research you can inspect, not a score you have to trust."
                  text="Most review sites give you a number and ask you to believe it. Racklio shows the work."
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
            <div className="mt-8 border-t border-white/12 pt-6">
              <p className="max-w-3xl text-sm leading-6 text-stone-200">
                Racklio may earn affiliate commission on some links. It never
                affects rankings, scoring, or which tools appear.{' '}
                <Link
                  className="font-semibold text-mint"
                  href="/affiliate-disclosure"
                  variant="unstyled"
                >
                  Read the disclosure <Arrow />
                </Link>
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
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
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section id="reviews" aria-labelledby="software-heading">
            <SectionIntro
              eyebrow="Featured research"
              headingId="software-heading"
              title="Start with the problem. Not the product."
              text="Every review opens with the operating requirement, then the provider facts, then where the tool stops fitting."
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
                  <p className="mt-3 text-xs leading-5 text-muted-foreground">
                    <strong className="text-foreground">
                      Not for you if:{' '}
                    </strong>
                    {item.notFor}
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
          <section
            id="comparisons"
            aria-labelledby="comparison-heading"
            className="rounded-[2rem] bg-surface-mint/55 p-6 sm:p-10"
          >
            <SectionIntro
              eyebrow="Head to head"
              headingId="comparison-heading"
              title="Two tools, side by side, no winner badge."
              text="Each comparison shows which differences matter for a specific workflow—and which are feature-list noise."
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
              eyebrow="Decision territories"
              headingId="territories-heading"
              title="Start With What You Need to Improve"
              text="Find software based on how your business communicates with, supports, and engages customers."
            />
            <div className="mt-8 grid gap-4 lg:grid-cols-3">
              {decisionTerritories.map((item, index) => (
                <ClickableCard
                  className="category-territory flex min-h-72 flex-col rounded-2xl border border-border bg-surface-raised p-6 sm:p-8"
                  href={item.href}
                  key={item.code}
                  label={`Explore ${item.name} research`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <span className="font-mono text-xs font-bold text-accent-strong">
                      0{index + 1} — {item.code}
                    </span>
                  </div>
                  <h3 className="mt-7 text-2xl font-semibold">{item.name}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    {item.description}
                  </p>
                  <p className="mt-4 text-sm leading-6">
                    <strong>Start with:</strong> {item.start}
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
                  <span className="group mt-auto inline-flex items-center gap-2 pt-6 font-semibold">
                    Explore research <Arrow />
                  </span>
                </ClickableCard>
              ))}
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section aria-labelledby="review-site-questions-heading">
            <SectionIntro
              eyebrow="Editorial transparency"
              headingId="review-site-questions-heading"
              title="Questions you should ask any review site"
              text="The business model, evidence standard, and limits of the coverage should be clear before you rely on a recommendation."
            />
            <div className="mt-8 divide-y divide-border overflow-hidden rounded-2xl border border-border bg-white">
              {[
                {
                  question: 'How do you make money?',
                  answer: (
                    <>
                      Racklio may earn affiliate commission on some links. No
                      vendor can pay for placement, ordering, or a more
                      favorable conclusion. Limitations remain on the page
                      whether a commercial relationship exists or not.{' '}
                      <Link href="/affiliate-disclosure">
                        Read the full disclosure <Arrow />
                      </Link>
                    </>
                  ),
                },
                {
                  question: 'Why is there no “best” tool?',
                  answer:
                    'Because the right choice depends on team size, workflow, channels, constraints, and budget. Racklio explains which operating conditions fit each tool—and which do not—instead of publishing a universal ranking.',
                },
                {
                  question: 'Where does your information come from?',
                  answer: (
                    <>
                      Provider pricing pages, product documentation, help
                      centers, and other provider-controlled sources. Provider
                      facts remain visibly separate from Racklio analysis.{' '}
                      <Link href="/methodology">
                        Review the methodology <Arrow />
                      </Link>
                    </>
                  ),
                },
                {
                  question: 'How current is this?',
                  answer:
                    'Reviews and pricing guides carry verification dates so buyers can see when material product information was last checked. Current terms should still be confirmed directly with the provider before purchase.',
                },
                {
                  question: 'Why this editorial focus?',
                  answer:
                    'Focused coverage makes it possible to examine customer communication, support, and engagement software in greater depth instead of publishing thin summaries across unrelated software markets.',
                },
              ].map((item) => (
                <details
                  className="group px-5 py-5 sm:px-7"
                  key={item.question}
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold marker:content-none">
                    {item.question}
                    <span
                      aria-hidden="true"
                      className="text-accent-strong transition-transform group-open:rotate-45"
                    >
                      +
                    </span>
                  </summary>
                  <div className="mt-4 max-w-3xl text-sm leading-6 text-muted-foreground">
                    {item.answer}
                  </div>
                </details>
              ))}
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section className="final-decision-panel relative overflow-hidden rounded-[2rem] border border-brand/20 bg-surface-mint/55 p-8 shadow-card sm:p-12">
            <div className="relative z-10 max-w-2xl">
              <p className="section-eyebrow text-accent-strong">
                Make the next decision clearer
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.045em] sm:text-4xl">
                What are you trying to fix?
              </h2>
              <p className="mt-4 leading-7 text-muted-foreground">
                Pick the problem. We will show you the tools that fit it, the
                ones that may not, and why.
              </p>
              <div className="mt-7">
                <ButtonLink href="/#decision-path">
                  Start with your problem <Arrow />
                </ButtonLink>
              </div>
              <p className="mt-4 text-xs font-semibold text-muted-foreground">
                Free. No signup. No vendor gets your details.
              </p>
            </div>
          </section>
        </Reveal>
      </Container>
    </PageLayout>
  );
}
