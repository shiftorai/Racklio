import { ResearchMarker } from '@/components/brand';
import { PageLayout, SiteFooter, SiteHeader } from '@/components/layout';
import { ButtonLink, Container, Link, Section } from '@/components/ui';

const categories = [
  {
    code: '01',
    title: 'AI Customer Support',
    description:
      'AI agents, automation, help desks, and customer-service platforms.',
    lens: 'Automation / Knowledge / Handoff',
  },
  {
    code: '02',
    title: 'Business Phone & Voice AI',
    description:
      'Cloud phone systems, AI voice agents, contact-center and receptionist software.',
    lens: 'Calling / Routing / Oversight',
  },
  {
    code: '03',
    title: 'Live Chat & Messaging',
    description:
      'Live chat, WhatsApp, conversational messaging, and omnichannel communication.',
    lens: 'Channels / Inbox / Workflow',
  },
  {
    code: '04',
    title: 'CRM & Customer Engagement',
    description:
      'Software for managing customer relationships, conversations, and engagement.',
    lens: 'Context / Coordination / Retention',
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
    title: 'Tidio vs Gorgias',
    description: 'Web support and AI versus commerce-centered help-desk work.',
    href: '/comparisons/tidio-vs-gorgias',
  },
  {
    title: 'respond.io vs Tidio',
    description: 'Omnichannel messaging versus web chat and ticket support.',
    href: '/comparisons/respond-io-vs-tidio',
  },
  {
    title: 'KrispCall vs Aircall',
    description:
      'A compact cloud-phone model versus structured team workflows.',
    href: '/comparisons/krispcall-vs-aircall',
  },
  {
    title: 'KrispCall vs CallHippo',
    description: 'Virtual numbers, calling usage, routing, and plan structure.',
    href: '/comparisons/krispcall-vs-callhippo',
  },
] as const;

const researchSteps = [
  {
    number: '01',
    title: 'Research',
    description:
      'Use official pricing, product documentation, help centers, security information, and terms.',
  },
  {
    number: '02',
    title: 'Verify',
    description:
      'Check material facts such as pricing, limits, capabilities, and plan conditions.',
  },
  {
    number: '03',
    title: 'Compare',
    description:
      'Separate provider facts from editorial analysis and identify meaningful trade-offs.',
  },
  {
    number: '04',
    title: 'Recommend',
    description:
      'Explain which buyer may or may not suit each product without manufacturing a universal winner.',
  },
] as const;

const trustItems = [
  ['01', 'Research-backed'],
  ['02', 'Pricing verified'],
  ['03', 'Limitations included'],
  ['04', 'Affiliate-transparent'],
] as const;

function DecisionPanel() {
  return (
    <aside
      aria-labelledby="decision-panel-heading"
      className="relative border border-white/15 bg-white text-foreground shadow-panel"
    >
      <span
        aria-hidden="true"
        className="absolute -top-px -left-px size-5 border-t-2 border-l-2 border-brand"
      />
      <div className="flex items-center justify-between border-b border-border px-5 py-4 sm:px-7">
        <p className="text-xs font-semibold tracking-[0.14em] text-accent-strong uppercase">
          Decision brief
        </p>
        <span className="font-mono text-[0.625rem] text-muted-foreground">
          RB / 001
        </span>
      </div>
      <div className="px-5 py-6 sm:px-7 sm:py-7">
        <h2
          className="text-2xl font-semibold tracking-[-0.04em]"
          id="decision-panel-heading"
        >
          Find the right fit
        </h2>
        <p className="mt-2 text-sm leading-6 text-muted-foreground">
          Start with the customer workflow, then narrow the software model.
        </p>
        <div className="mt-6 grid gap-px border border-border bg-border sm:grid-cols-3">
          {[
            ['AI', 'Customer support'],
            ['COMMS', 'Business communications'],
            ['CRM', 'Customer engagement'],
          ].map(([code, label]) => (
            <div className="bg-surface-raised p-4" key={code}>
              <span className="font-mono text-[0.625rem] text-accent-strong">
                {code}
              </span>
              <p className="mt-2 text-xs leading-5 font-semibold">{label}</p>
            </div>
          ))}
        </div>
        <dl className="mt-6 divide-y divide-border border-y border-border">
          {[
            ['Example fit', 'Small business'],
            ['Priority', 'AI automation'],
            ['Need', 'Omnichannel support'],
          ].map(([term, detail]) => (
            <div
              className="grid grid-cols-[6.5rem_1fr] gap-4 py-3 text-sm"
              key={term}
            >
              <dt className="text-muted-foreground">{term}</dt>
              <dd className="font-semibold">{detail}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-4 text-xs leading-5 text-muted-foreground">
          Illustrative decision criteria, not a calculated recommendation.
        </p>
        <Link className="mt-5 inline-block" href="/#categories">
          View matching software &rarr;
        </Link>
      </div>
    </aside>
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

      <Section
        className="relative overflow-hidden border-b border-white/10 bg-foreground py-16 text-white sm:py-20 lg:py-24"
        spacing="none"
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-60 [background-image:linear-gradient(to_right,rgba(255,255,255,.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.045)_1px,transparent_1px)] [background-size:42px_42px]"
        />
        <div
          aria-hidden="true"
          className="absolute top-0 right-0 h-full w-1/2 bg-[radial-gradient(circle_at_top_right,rgba(124,58,237,.2),transparent_60%)]"
        />
        <Container className="relative" size="wide">
          <div className="grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16 xl:gap-24">
            <div>
              <p className="text-xs font-semibold tracking-[0.18em] text-blue-300 uppercase">
                Independent software research
              </p>
              <h1 className="mt-6 max-w-3xl text-5xl leading-[1.02] font-semibold tracking-[-0.06em] text-balance sm:text-6xl lg:text-[4.5rem]">
                Choose the right customer software with confidence.
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl sm:leading-9">
                {description}
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="/#categories" size="lg">
                  Explore Software
                </ButtonLink>
                <ButtonLink
                  className="border-white/25 bg-white/5 text-white hover:bg-white/10"
                  href="/#comparisons"
                  size="lg"
                  variant="secondary"
                >
                  Compare Tools
                </ButtonLink>
              </div>
              <p className="mt-6 text-sm text-slate-300">
                Independent research &middot; Official sources &middot; No paid
                rankings
              </p>
            </div>
            <DecisionPanel />
          </div>
        </Container>
      </Section>

      <div className="border-b border-border bg-surface-raised">
        <Container size="wide">
          <ul className="grid border-l border-border sm:grid-cols-2 lg:grid-cols-4">
            {trustItems.map(([code, label]) => (
              <li
                className="flex min-h-14 items-center gap-3 border-r border-b border-border px-4 text-sm font-semibold lg:border-b-0"
                key={code}
              >
                <span className="font-mono text-[0.625rem] text-accent-strong">
                  {code}
                </span>
                {label}
              </li>
            ))}
          </ul>
        </Container>
      </div>

      <Section id="explore" spacing="lg">
        <Container size="wide">
          <ResearchMarker code="EX" label="Explore the market" />
          <div className="mt-5 grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <div>
              <h2 className="text-4xl leading-tight font-semibold tracking-[-0.05em] text-balance sm:text-5xl">
                Explore by what you need
              </h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-muted-foreground">
              Begin with the customer problem or communication capability your
              business needs&mdash;even if you do not yet know which vendor
              belongs on the shortlist.
            </p>
          </div>
          <div className="mt-12 grid gap-px border border-border bg-border md:grid-cols-2">
            {categories.map((category) => (
              <article
                className="group relative bg-surface-raised p-6 sm:p-8"
                key={category.code}
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="font-mono text-xs text-accent-strong">
                    {category.code}
                  </span>
                  <span
                    aria-hidden="true"
                    className="h-px w-12 bg-border group-hover:bg-accent"
                  />
                </div>
                <h3 className="mt-8 text-2xl font-semibold tracking-[-0.035em]">
                  {category.title}
                </h3>
                <p className="mt-3 max-w-lg leading-7 text-muted-foreground">
                  {category.description}
                </p>
                <p className="mt-7 border-t border-border pt-4 text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                  {category.lens}
                </p>
                <Link className="mt-5 inline-block" href="/#categories">
                  Explore category &rarr;
                </Link>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section
        className="border-y border-border bg-surface-raised"
        spacing="lg"
      >
        <Container size="wide">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <ResearchMarker code="FR" label="Editorial coverage" />
              <h2 className="mt-5 text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">
                Featured software research
              </h2>
            </div>
            <Link href="/#reviews">Browse all reviews &rarr;</Link>
          </div>
          <div className="mt-12 grid gap-px border-y border-border bg-border lg:grid-cols-5">
            {featuredResearch.map((item, index) => (
              <article
                className={`bg-surface-raised py-6 lg:px-6 ${index === 0 ? 'lg:pl-0' : ''} ${index === featuredResearch.length - 1 ? 'lg:pr-0' : ''}`}
                key={item.href}
              >
                <p className="text-xs font-semibold tracking-[0.14em] text-accent-strong uppercase">
                  {item.type}
                </p>
                <h3 className="mt-4 text-xl font-semibold tracking-tight">
                  <Link href={item.href}>{item.title}</Link>
                </h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {item.description}
                </p>
                <p className="mt-6 text-xs leading-5 text-muted-foreground">
                  {item.context}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section spacing="lg">
        <Container size="wide">
          <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
            <div>
              <ResearchMarker code="CP" label="Decision comparisons" />
              <h2 className="mt-5 text-4xl leading-tight font-semibold tracking-[-0.05em] sm:text-5xl">
                Compare software side by side
              </h2>
              <p className="mt-5 max-w-lg text-lg leading-8 text-muted-foreground">
                Understand meaningful differences in operating model, pricing,
                limitations, and buyer fit&mdash;not merely longer feature
                lists.
              </p>
              <ButtonLink
                className="mt-8"
                href="/#comparisons"
                variant="secondary"
              >
                Browse Comparisons
              </ButtonLink>
            </div>
            <div className="border-y border-border">
              {comparisons.map((comparison, index) => (
                <article
                  className="grid gap-4 border-b border-border py-6 last:border-b-0 sm:grid-cols-[2rem_1fr_auto] sm:items-center"
                  key={comparison.href}
                >
                  <span className="font-mono text-xs text-accent-strong">
                    0{index + 1}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold">
                      {comparison.title}
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-muted-foreground">
                      {comparison.description}
                    </p>
                  </div>
                  <Link href={comparison.href}>Compare &rarr;</Link>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-foreground text-white" spacing="lg">
        <Container size="wide">
          <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
            <div>
              <ResearchMarker
                code="MT"
                label="Editorial methodology"
                tone="dark"
              />
              <h2 className="mt-5 text-4xl leading-tight font-semibold tracking-[-0.05em] sm:text-5xl">
                Software decisions backed by evidence
              </h2>
              <p className="mt-5 max-w-lg leading-7 text-slate-300">
                Racklio turns official provider information into conditional,
                business-focused guidance while keeping claims and analysis
                distinct.
              </p>
              <ButtonLink
                className="mt-8"
                href="/methodology"
                variant="secondary"
              >
                Read our methodology
              </ButtonLink>
            </div>
            <ol className="grid border-t border-white/20 sm:grid-cols-2">
              {researchSteps.map((step) => (
                <li
                  className="grid grid-cols-[2rem_1fr] gap-4 border-b border-white/20 py-6 sm:odd:pr-7 sm:even:border-l sm:even:pl-7"
                  key={step.number}
                >
                  <span className="font-mono text-xs text-blue-300">
                    {step.number}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold">{step.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      {step.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </Section>

      <Section className="border-b border-border" spacing="lg">
        <Container size="wide">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <ResearchMarker code="EI" label="Editorial independence" />
              <h2 className="mt-5 text-4xl leading-tight font-semibold tracking-[-0.05em] text-balance sm:text-5xl">
                Independent research. Transparent business model.
              </h2>
            </div>
            <div>
              <p className="text-lg leading-8 text-muted-foreground">
                Racklio may earn commissions from some links. Affiliate
                relationships do not determine rankings or conclusions, and
                Racklio does not sell paid rankings. Important claims are
                sourced and periodically rechecked; material limitations and
                reasons not to choose a product remain part of the analysis.
              </p>
              <div className="mt-7 flex flex-wrap gap-x-7 gap-y-3">
                <Link href="/methodology">Methodology</Link>
                <Link href="/editorial-standards">Editorial Standards</Link>
                <Link href="/affiliate-disclosure">Affiliate Disclosure</Link>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section spacing="lg">
        <Container size="wide">
          <div className="relative overflow-hidden border border-border bg-surface-raised px-6 py-10 shadow-card sm:px-10 sm:py-12 lg:px-14">
            <span
              aria-hidden="true"
              className="absolute top-0 left-0 h-1 w-28 bg-[linear-gradient(90deg,var(--color-accent),var(--color-brand))]"
            />
            <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
              <div>
                <p className="text-xs font-semibold tracking-[0.16em] text-accent-strong uppercase">
                  Begin your research
                </p>
                <h2 className="mt-4 max-w-3xl text-3xl leading-tight font-semibold tracking-[-0.045em] sm:text-4xl">
                  Start with the software decision you need to make.
                </h2>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="/#categories" size="lg">
                  Explore Categories
                </ButtonLink>
                <ButtonLink href="/#comparisons" size="lg" variant="secondary">
                  Browse Comparisons
                </ButtonLink>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </PageLayout>
  );
}
