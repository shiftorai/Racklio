import { ResearchMarker, RACKLIO_TAGLINE } from '@/components/brand';
import { PageLayout, SiteFooter, SiteHeader } from '@/components/layout';
import {
  ButtonLink,
  Card,
  CardContent,
  Container,
  Divider,
  Link,
  Section,
} from '@/components/ui';

const trustCommitments = [
  'Independent editorial research',
  'Transparent methodology',
  'No paid rankings',
  'Evidence before recommendations',
  'Business-focused evaluations',
] as const;

const scenarios = [
  [
    'Business Website',
    'Find a dependable platform for a business-critical site',
    '/guides/business-website-hosting',
  ],
  [
    'WooCommerce',
    'Evaluate hosting built around an online store workload',
    '/guides/woocommerce-hosting',
  ],
  [
    'WordPress',
    'Compare managed platforms focused on WordPress',
    '/guides/wordpress-hosting',
  ],
  [
    'Agency',
    'Explore options for managing multiple client websites',
    '/guides/agency-hosting',
  ],
  [
    'SaaS',
    'Assess infrastructure for an evolving software product',
    '/guides/saas-hosting',
  ],
  [
    'High Traffic',
    'Review platforms for demanding traffic requirements',
    '/guides/high-traffic-hosting',
  ],
  [
    'Managed VPS',
    'Compare managed servers with greater infrastructure control',
    '/guides/managed-vps-hosting',
  ],
] as const;

const decisionSteps = [
  [
    '01',
    'Describe your workload',
    'Start with what the website or application needs to do. Racklio narrows the research to relevant buying guides.',
  ],
  [
    '02',
    'Compare providers',
    'Compare operating models and tradeoffs in business context—not according to popularity.',
  ],
  [
    '03',
    'Read the recommendation',
    'Review the evidence, fit, and limitations before making the final choice.',
  ],
] as const;

const providers = [
  {
    name: 'Liquid Web',
    initials: 'LW',
    fit: 'Managed VPS flexibility',
    audience:
      'Businesses considering more infrastructure control with managed operations.',
    description:
      'Liquid Web offers managed virtual private server hosting alongside other managed infrastructure products.',
    reason:
      'Consider it when managed server options and infrastructure flexibility are central to the decision.',
    caution:
      'It may be less relevant when your shortlist is limited to WordPress-only platforms.',
    href: '/reviews/liquid-web',
    category: 'Managed infrastructure',
  },
  {
    name: 'Kinsta',
    initials: 'K',
    fit: 'Managed WordPress operations',
    audience:
      'Teams seeking a focused managed environment for WordPress websites.',
    description:
      'Kinsta offers managed WordPress hosting with infrastructure-level management and daily backups.',
    reason:
      'Consider it when you want a focused managed environment for WordPress operations.',
    caution:
      'It may be less relevant when you need general-purpose server control outside a managed WordPress model.',
    href: '/reviews/kinsta',
    category: 'Managed WordPress',
  },
  {
    name: 'WP Engine',
    initials: 'WPE',
    fit: 'WordPress platform workflows',
    audience:
      'WordPress teams evaluating a specialist platform and developer tooling.',
    description:
      'WP Engine specializes in managed hosting and developer tools for websites built with WordPress.',
    reason:
      'Consider it when WordPress-specific workflows and platform tooling matter to your team.',
    caution:
      'It may be less relevant when the workload does not use WordPress.',
    href: '/reviews/wp-engine',
    category: 'WordPress platform',
  },
] as const;

const comparisons = [
  {
    left: 'Liquid Web',
    right: 'Kinsta',
    lens: 'Infrastructure flexibility vs. WordPress specialization',
    href: '/comparisons/liquid-web-vs-kinsta',
  },
  {
    left: 'Liquid Web',
    right: 'WP Engine',
    lens: 'Managed server options vs. a WordPress-focused platform',
    href: '/comparisons/liquid-web-vs-wp-engine',
  },
  {
    left: 'Kinsta',
    right: 'WP Engine',
    lens: 'Two managed WordPress approaches for business teams',
    href: '/comparisons/kinsta-vs-wp-engine',
  },
] as const;

const methodology = [
  ['01', 'Performance', 'Architecture, delivery, and workload fit'],
  ['02', 'Reliability', 'Operational resilience and service commitments'],
  ['03', 'Support', 'Access, scope, and quality of assistance'],
  ['04', 'Security', 'Platform controls and customer responsibilities'],
  ['05', 'Scalability', 'Paths for growth in traffic and complexity'],
  ['06', 'Pricing and value', 'Total cost in the context of business needs'],
] as const;

function SectionHeading({
  eyebrow,
  id,
  title,
  description,
}: {
  eyebrow: string;
  id: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-2xl">
      <ResearchMarker code={id.slice(0, 2).toUpperCase()} label={eyebrow} />
      <h2
        className="mt-4 text-3xl leading-tight font-semibold tracking-[-0.035em] text-balance sm:text-4xl"
        id={id}
      >
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}

function DecisionAssistant() {
  return (
    <aside
      aria-labelledby="decision-assistant-heading"
      className="relative border border-navy-muted bg-surface-raised shadow-panel"
    >
      <span
        aria-hidden="true"
        className="absolute -top-px -left-px size-3 border-t-2 border-l-2 border-accent"
      />
      <div className="flex items-center justify-between border-b border-border px-5 py-3.5 sm:px-6">
        <ResearchMarker code="DA" label="Decision assistant" />
        <span className="font-mono text-[0.625rem] tracking-wider text-muted-foreground uppercase">
          Start here
        </span>
      </div>

      <div className="border-b border-border px-5 py-5 sm:px-6">
        <p className="text-[0.6875rem] font-semibold tracking-[0.14em] text-accent-strong uppercase">
          Step 1
        </p>
        <h2
          className="mt-2 text-2xl font-semibold tracking-[-0.035em]"
          id="decision-assistant-heading"
        >
          Choose your workload.
        </h2>
        <p className="mt-2 max-w-md text-sm leading-6 text-muted-foreground">
          Select the option closest to your needs. Racklio will guide you toward
          the comparison and research most relevant to that decision.
        </p>
      </div>

      <div className="grid sm:grid-cols-2">
        {scenarios.map(([title, description, href], index) => (
          <Link
            className="group grid min-h-18 grid-cols-[1.5rem_1fr_auto] items-center gap-3 border-b border-border px-5 py-3.5 hover:bg-muted/60 sm:px-6 sm:odd:border-r sm:last:col-span-2 sm:last:border-b-0"
            href={href}
            key={title}
            variant="unstyled"
          >
            <span className="font-mono text-[0.625rem] text-accent-strong">
              {String(index + 1).padStart(2, '0')}
            </span>
            <span>
              <span className="block text-sm font-semibold">{title}</span>
              <span className="mt-1 block text-[0.6875rem] leading-4 text-muted-foreground">
                {description}
              </span>
            </span>
            <span
              aria-hidden="true"
              className="text-xs text-muted-foreground group-hover:text-accent-strong"
            >
              →
            </span>
          </Link>
        ))}
      </div>

      <div className="flex items-center gap-3 px-5 py-3 sm:px-6">
        <span aria-hidden="true" className="size-1.5 bg-accent" />
        <p className="text-[0.625rem] leading-4 text-muted-foreground">
          Next: compare relevant providers and read the supporting evidence.
        </p>
      </div>
    </aside>
  );
}

function ProviderResearchCard({
  index,
  provider,
}: {
  index: number;
  provider: (typeof providers)[number];
}) {
  if (index === 2) {
    return (
      <Card className="overflow-hidden rounded-lg lg:col-span-12">
        <div className="grid lg:grid-cols-[0.7fr_0.8fr_1fr_1.35fr] lg:items-stretch">
          <div className="flex items-center gap-4 border-b border-border p-5 sm:p-6 lg:border-r lg:border-b-0">
            <span
              aria-hidden="true"
              className="grid h-10 min-w-10 place-items-center border border-navy-muted bg-muted px-2 font-mono text-xs font-semibold"
            >
              {provider.initials}
            </span>
            <div>
              <p className="text-[0.625rem] tracking-wider text-muted-foreground uppercase">
                {provider.category}
              </p>
              <h3 className="mt-1 text-2xl font-semibold tracking-[-0.035em]">
                {provider.name}
              </h3>
              <p className="mt-3 text-xs leading-5 text-muted-foreground">
                {provider.description}
              </p>
            </div>
          </div>
          <div className="border-b border-border p-5 sm:p-6 lg:border-r lg:border-b-0">
            <p className="text-[0.6875rem] font-semibold tracking-[0.12em] text-muted-foreground uppercase">
              Best for
            </p>
            <p className="mt-3 text-sm font-medium">{provider.fit}</p>
          </div>
          <div className="border-b border-border p-5 sm:p-6 lg:border-r lg:border-b-0">
            <p className="text-[0.6875rem] font-semibold tracking-[0.12em] text-muted-foreground uppercase">
              Who should consider it
            </p>
            <p className="mt-3 text-sm leading-6">{provider.audience}</p>
          </div>
          <div className="p-5 sm:p-6">
            <p className="text-[0.6875rem] font-semibold tracking-[0.12em] text-muted-foreground uppercase">
              Why choose it
            </p>
            <p className="mt-3 text-sm leading-6">{provider.reason}</p>
            <p className="mt-5 text-[0.6875rem] font-semibold tracking-[0.12em] text-muted-foreground uppercase">
              When it may not fit
            </p>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              {provider.caution}
            </p>
            <ButtonLink
              className="mt-4"
              href={provider.href}
              size="sm"
              variant="secondary"
            >
              See Why →
            </ButtonLink>
          </div>
        </div>
      </Card>
    );
  }

  if (index === 1) {
    return (
      <Card className="overflow-hidden rounded-lg lg:col-span-7">
        <div className="flex items-end justify-between gap-5 p-5 sm:p-6">
          <div>
            <ResearchMarker code="02" label={provider.category} />
            <h3 className="mt-8 text-3xl font-semibold tracking-[-0.04em]">
              {provider.name}
            </h3>
          </div>
          <span
            aria-hidden="true"
            className="font-mono text-4xl font-semibold tracking-[-0.08em] text-muted"
          >
            {provider.initials}
          </span>
        </div>
        <div className="grid border-t border-border md:grid-cols-2">
          <div className="border-b border-border p-5 sm:p-6 md:border-r md:border-b-0">
            <p className="text-[0.6875rem] font-semibold tracking-[0.12em] text-muted-foreground uppercase">
              Best for
            </p>
            <p className="mt-3 text-sm font-medium leading-6">{provider.fit}</p>
            <p className="mt-5 text-[0.6875rem] font-semibold tracking-[0.12em] text-muted-foreground uppercase">
              Who should consider it
            </p>
            <p className="mt-3 text-sm leading-6">{provider.audience}</p>
          </div>
          <div className="p-5 sm:p-6">
            <p className="text-[0.6875rem] font-semibold tracking-[0.12em] text-muted-foreground uppercase">
              Why choose it
            </p>
            <p className="mt-3 text-sm leading-6">{provider.reason}</p>
            <p className="mt-4 text-xs leading-5 text-muted-foreground">
              {provider.description}
            </p>
            <p className="mt-5 text-[0.6875rem] font-semibold tracking-[0.12em] text-muted-foreground uppercase">
              When it may not fit
            </p>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              {provider.caution}
            </p>
            <ButtonLink
              className="mt-4"
              href={provider.href}
              size="sm"
              variant="secondary"
            >
              See Why →
            </ButtonLink>
          </div>
        </div>
      </Card>
    );
  }

  return (
    <Card className="overflow-hidden rounded-lg lg:col-span-5">
      <div className="flex items-center justify-between border-b border-border p-5 sm:p-6">
        <ResearchMarker code="01" label={provider.category} />
        <span
          aria-hidden="true"
          className="grid h-9 min-w-9 place-items-center border border-navy-muted bg-muted px-2 font-mono text-[0.625rem] font-semibold"
        >
          {provider.initials}
        </span>
      </div>
      <CardContent>
        <h3 className="text-3xl font-semibold tracking-[-0.04em]">
          {provider.name}
        </h3>
        <p className="mt-7 text-[0.6875rem] font-semibold tracking-[0.12em] text-muted-foreground uppercase">
          Best for
        </p>
        <p className="mt-3 text-sm font-medium leading-6">{provider.fit}</p>
        <p className="mt-5 text-[0.6875rem] font-semibold tracking-[0.12em] text-muted-foreground uppercase">
          Who should consider it
        </p>
        <p className="mt-3 text-sm leading-6">{provider.audience}</p>
        <p className="mt-5 text-[0.6875rem] font-semibold tracking-[0.12em] text-muted-foreground uppercase">
          Why choose it
        </p>
        <p className="mt-3 text-sm leading-6">{provider.reason}</p>
        <p className="mt-4 text-xs leading-5 text-muted-foreground">
          {provider.description}
        </p>
        <p className="mt-5 text-[0.6875rem] font-semibold tracking-[0.12em] text-muted-foreground uppercase">
          When it may not fit
        </p>
        <p className="mt-3 text-sm leading-6 text-muted-foreground">
          {provider.caution}
        </p>
        <ButtonLink
          className="mt-5"
          href={provider.href}
          size="sm"
          variant="secondary"
        >
          See Why →
        </ButtonLink>
      </CardContent>
    </Card>
  );
}

export function Home() {
  return (
    <PageLayout footer={<SiteFooter />} header={<SiteHeader />}>
      <Section
        className="overflow-hidden border-b border-border py-14 sm:py-16 lg:py-20"
        spacing="none"
      >
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14 xl:gap-20">
            <div>
              <ResearchMarker code="R0" label={RACKLIO_TAGLINE} />
              <h1 className="mt-6 max-w-3xl text-5xl leading-[1.02] font-semibold tracking-[-0.055em] text-balance sm:text-6xl lg:text-[4.25rem]">
                Choose the right hosting—without second-guessing the decision.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-muted-foreground">
                Racklio turns complex provider research into clear,
                evidence-based guidance so you can narrow the options, avoid a
                poor fit, and choose with confidence in less time.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="#decision-assistant-heading" size="lg">
                  Choose My Workload
                </ButtonLink>
                <ButtonLink href="#research" size="lg" variant="secondary">
                  Explore Provider Reviews
                </ButtonLink>
              </div>
            </div>
            <DecisionAssistant />
          </div>
        </Container>
      </Section>

      <div className="border-b border-border bg-muted">
        <Container>
          <ul className="grid border-l border-border sm:grid-cols-2 lg:grid-cols-5">
            {trustCommitments.map((commitment, index) => (
              <li
                className="flex items-center gap-3 border-r border-b border-border px-4 py-3.5 text-xs font-semibold"
                key={commitment}
              >
                <span
                  aria-hidden="true"
                  className="font-mono text-[0.625rem] text-accent-strong"
                >
                  0{index + 1}
                </span>
                {commitment}
              </li>
            ))}
          </ul>
        </Container>
      </div>

      <section
        aria-labelledby="decision-path-heading"
        className="border-b border-border bg-surface-raised py-12 sm:py-14"
        id="decision-path"
      >
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start lg:gap-16">
            <div>
              <ResearchMarker code="DP" label="Guided decision path" />
              <h2
                className="mt-4 text-3xl leading-tight font-semibold tracking-[-0.035em]"
                id="decision-path-heading"
              >
                A clearer path to the right provider.
              </h2>
              <p className="mt-4 text-sm leading-6 text-muted-foreground">
                Racklio reduces research time by organizing the decision around
                workload, business context, and evidence—not popularity or paid
                placement.
              </p>
              <ButtonLink className="mt-6" href="/guides" size="sm">
                Explore Buying Guides
              </ButtonLink>
            </div>
            <ol className="grid gap-px bg-border sm:grid-cols-3">
              {decisionSteps.map(([number, title, description]) => (
                <li className="bg-surface-raised p-5" key={number}>
                  <span className="font-mono text-[0.625rem] text-accent-strong">
                    {number}
                  </span>
                  <h3 className="mt-4 text-sm font-semibold">{title}</h3>
                  <p className="mt-2 text-xs leading-5 text-muted-foreground">
                    {description}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </section>

      <Section id="research" aria-labelledby="research-heading" spacing="md">
        <Container>
          <SectionHeading
            eyebrow="Provider reviews"
            id="research-heading"
            title="Which provider fits your operating model?"
            description="Start with the operating model and workload—not a generic winner."
          />

          <div className="mt-10 grid gap-5 lg:grid-cols-12">
            {providers.map((provider, index) => (
              <ProviderResearchCard
                index={index}
                key={provider.name}
                provider={provider}
              />
            ))}
          </div>
          <p className="mt-5 max-w-3xl text-xs leading-5 text-muted-foreground">
            Provider descriptions summarize publicly stated product positioning.
            Fit guidance is editorial context, not a ranking, promotional score,
            or testing claim.
          </p>
          <div className="mt-7">
            <ButtonLink href="/reviews" variant="secondary">
              Explore Provider Reviews
            </ButtonLink>
          </div>
        </Container>
      </Section>

      <Divider />

      <Section
        id="comparisons"
        aria-labelledby="comparisons-heading"
        spacing="md"
      >
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
            <SectionHeading
              eyebrow="Provider comparisons"
              id="comparisons-heading"
              title="Choose between these providers."
              description="Start with the pair closest to your shortlist, then compare provider focus and business fit."
            />

            <div className="border-y border-border">
              {comparisons.map((comparison, index) => (
                <article
                  className="grid gap-4 border-b border-border py-6 last:border-b-0 sm:grid-cols-[2rem_1fr_auto] sm:items-center"
                  key={comparison.href}
                >
                  <span className="font-mono text-xs text-muted-foreground">
                    0{index + 1}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold tracking-tight">
                      {comparison.left}
                      <span className="mx-2 font-normal text-muted-foreground">
                        {' vs '}
                      </span>
                      {comparison.right}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      {comparison.lens}
                    </p>
                  </div>
                  <ButtonLink
                    href={comparison.href}
                    size="sm"
                    variant="secondary"
                  >
                    Read the Comparison
                  </ButtonLink>
                </article>
              ))}
            </div>
          </div>
          <div className="mt-8 flex justify-end">
            <ButtonLink href="/comparisons">
              Explore Provider Comparisons
            </ButtonLink>
          </div>
        </Container>
      </Section>

      <Section
        className="bg-foreground text-white"
        id="methodology"
        aria-labelledby="methodology-heading"
        spacing="md"
      >
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
            <div>
              <ResearchMarker code="M0" label="Methodology" tone="dark" />
              <h2
                className="mt-4 text-3xl leading-tight font-semibold tracking-[-0.035em] text-balance sm:text-4xl"
                id="methodology-heading"
              >
                A consistent lens for every provider.
              </h2>
              <p className="mt-5 leading-7 text-slate-300">
                Racklio organizes research around the factors that shape an
                infrastructure decision. Conclusions remain specific to the use
                case and available evidence.
              </p>
              <Link
                className="mt-6 inline-block text-sm text-blue-300 underline decoration-white/30 underline-offset-4 hover:text-white"
                href="/methodology"
                variant="unstyled"
              >
                Understand Our Methodology →
              </Link>
            </div>
            <ol className="grid border-t border-white/20 sm:grid-cols-2">
              {methodology.map(([number, title, description]) => (
                <li
                  className="grid grid-cols-[2rem_1fr] gap-4 border-b border-white/20 py-5 sm:odd:pr-6 sm:even:border-l sm:even:pl-6"
                  key={number}
                >
                  <span className="font-mono text-xs text-blue-300">
                    {number}
                  </span>
                  <div>
                    <h3 className="font-semibold">{title}</h3>
                    <p className="mt-1 text-sm leading-6 text-slate-300">
                      {description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </Section>

      <Section id="about" aria-labelledby="about-heading" spacing="md">
        <Container>
          <div className="grid gap-8 border-l-2 border-accent pl-6 md:grid-cols-[0.38fr_1fr] md:items-start md:pl-10">
            <p className="text-xs font-semibold tracking-[0.16em] text-accent-strong uppercase">
              Company
            </p>
            <div className="max-w-3xl">
              <h2
                className="text-2xl leading-snug font-semibold tracking-[-0.03em] sm:text-3xl"
                id="about-heading"
              >
                Racklio is a brand of Keleva LLC, a U.S. technology company
                building trusted digital businesses.
              </h2>
              <p className="mt-5 leading-7 text-muted-foreground">
                Our purpose is to make complex infrastructure choices easier to
                understand through clear research and transparent editorial
                standards.
              </p>
              <Link
                className="mt-6 inline-block text-sm"
                href="/editorial-standards"
              >
                Read Editorial Standards
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </PageLayout>
  );
}
