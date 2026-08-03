import { RacklioWordmark, ResearchMarker } from '@/components/brand';
import { Footer, Header, PageLayout } from '@/components/layout';
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
  'Independent research',
  'Transparent methodology',
  'Business-focused recommendations',
  'No paid rankings',
] as const;

const providers = [
  {
    name: 'Liquid Web',
    initials: 'LW',
    fit: 'Teams evaluating managed VPS flexibility',
    description:
      'Liquid Web offers managed virtual private server hosting alongside other managed infrastructure products.',
    href: '/reviews/liquid-web',
    category: 'Managed infrastructure',
  },
  {
    name: 'Kinsta',
    initials: 'K',
    fit: 'Businesses considering managed WordPress',
    description:
      'Kinsta offers managed WordPress hosting with infrastructure-level management and daily backups.',
    href: '/reviews/kinsta',
    category: 'Managed WordPress',
  },
  {
    name: 'WP Engine',
    initials: 'WPE',
    fit: 'WordPress teams assessing a specialist platform',
    description:
      'WP Engine specializes in managed hosting and developer tools for websites built with WordPress.',
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

function ResearchWorkspace() {
  return (
    <aside
      aria-label="Example Racklio research workspace"
      className="relative border border-navy-muted bg-surface-raised shadow-panel"
    >
      <span
        aria-hidden="true"
        className="absolute -top-px -left-px size-3 border-t-2 border-l-2 border-accent"
      />
      <div className="flex items-center justify-between border-b border-border px-5 py-4 sm:px-6">
        <RacklioWordmark className="scale-90 origin-left" />
        <span className="font-mono text-[0.625rem] tracking-wider text-muted-foreground uppercase">
          Workspace / 01
        </span>
      </div>

      <div className="grid sm:grid-cols-[0.72fr_1.28fr]">
        <div className="border-b border-border p-5 sm:border-r sm:border-b-0 sm:p-6">
          <ResearchMarker code="RB" label="Research brief" />
          <dl className="mt-6 space-y-5">
            <div>
              <dt className="text-[0.6875rem] tracking-wider text-muted-foreground uppercase">
                Decision
              </dt>
              <dd className="mt-1.5 text-sm font-semibold">
                Select a managed hosting model
              </dd>
            </div>
            <div>
              <dt className="text-[0.6875rem] tracking-wider text-muted-foreground uppercase">
                Context
              </dt>
              <dd className="mt-1.5 text-sm leading-6">
                Business-critical website
              </dd>
            </div>
            <div>
              <dt className="text-[0.6875rem] tracking-wider text-muted-foreground uppercase">
                Constraint
              </dt>
              <dd className="mt-1.5 text-sm leading-6">
                Limited infrastructure operations
              </dd>
            </div>
          </dl>
        </div>
        <div className="p-5 sm:p-6">
          <p className="text-[0.6875rem] font-semibold tracking-[0.14em] text-muted-foreground uppercase">
            Evaluation workspace
          </p>
          <div className="mt-4 border-t border-border">
            {[
              ['01', 'Operating model', 'Define the management boundary'],
              ['02', 'Platform fit', 'Match workload to provider focus'],
              ['03', 'Tradeoffs', 'Compare control, support, and cost'],
              ['04', 'Recommendation', 'Document context and limitations'],
            ].map(([number, label, note]) => (
              <div
                className="grid grid-cols-[1.75rem_1fr] gap-3 border-b border-border py-3.5"
                key={number}
              >
                <span className="font-mono text-[0.625rem] text-accent-strong">
                  {number}
                </span>
                <div>
                  <p className="text-xs font-semibold">{label}</p>
                  <p className="mt-1 text-[0.6875rem] leading-4 text-muted-foreground">
                    {note}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-border px-5 py-3 sm:px-6">
        <span className="text-[0.625rem] text-muted-foreground">
          Evidence before conclusions
        </span>
        <span className="font-mono text-[0.625rem] text-muted-foreground">
          RKL / INTEL
        </span>
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
            <h3 className="text-2xl font-semibold tracking-[-0.035em]">
              {provider.name}
            </h3>
          </div>
          <div className="border-b border-border p-5 sm:p-6 lg:border-r lg:border-b-0">
            <p className="text-[0.6875rem] font-semibold tracking-[0.12em] text-muted-foreground uppercase">
              Provider focus
            </p>
            <p className="mt-3 text-sm font-medium">{provider.category}</p>
          </div>
          <div className="border-b border-border p-5 sm:p-6 lg:border-r lg:border-b-0">
            <p className="text-[0.6875rem] font-semibold tracking-[0.12em] text-muted-foreground uppercase">
              Best fit to evaluate for
            </p>
            <p className="mt-3 text-sm font-medium leading-6">{provider.fit}</p>
          </div>
          <div className="p-5 sm:p-6">
            <p className="text-sm leading-6 text-muted-foreground">
              {provider.description}
            </p>
            <Link className="mt-4 inline-block text-sm" href={provider.href}>
              Read review
            </Link>
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
              Best fit to evaluate for
            </p>
            <p className="mt-3 text-sm font-medium leading-6">{provider.fit}</p>
          </div>
          <div className="p-5 sm:p-6">
            <p className="text-sm leading-6 text-muted-foreground">
              {provider.description}
            </p>
            <Link className="mt-4 inline-block text-sm" href={provider.href}>
              Read review
            </Link>
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
          Best fit to evaluate for
        </p>
        <p className="mt-3 text-sm font-medium leading-6">{provider.fit}</p>
        <p className="mt-5 text-sm leading-6 text-muted-foreground">
          {provider.description}
        </p>
        <Link className="mt-5 inline-block text-sm" href={provider.href}>
          Read review
        </Link>
      </CardContent>
    </Card>
  );
}

const navigation = (
  <>
    <Link href="#research" variant="subtle">
      Reviews
    </Link>
    <Link href="#comparisons" variant="subtle">
      Comparisons
    </Link>
    <Link href="/guides" variant="subtle">
      Buying Guides
    </Link>
    <Link href="#about" variant="subtle">
      About
    </Link>
    <Link
      aria-label="Search Racklio"
      className="grid size-9 place-items-center border border-border"
      href="/search"
      variant="subtle"
    >
      <span aria-hidden="true" className="search-icon" />
    </Link>
  </>
);

const footerLinks = [
  ['Reviews', '#research'],
  ['Comparisons', '#comparisons'],
  ['Buying Guides', '/guides'],
  ['About', '#about'],
  ['Contact', '/contact'],
  ['Privacy', '/privacy'],
  ['Terms', '/terms'],
  ['Affiliate Disclosure', '/affiliate-disclosure'],
] as const;

const footer = (
  <Footer
    brand={<RacklioWordmark tone="dark" />}
    legal={
      <>
        A brand of Keleva LLC
        <br />© {new Date().getFullYear()} Keleva LLC
      </>
    }
    tone="dark"
  >
    {footerLinks.map(([label, href]) => (
      <Link
        className="text-slate-300 hover:text-white"
        href={href}
        key={label}
        variant="unstyled"
      >
        {label}
      </Link>
    ))}
  </Footer>
);

export function Home() {
  return (
    <PageLayout
      footer={footer}
      header={
        <Header brand={<RacklioWordmark />} className="bg-surface">
          {navigation}
        </Header>
      }
    >
      <Section
        className="overflow-hidden border-b border-border py-14 sm:py-16 lg:py-20"
        spacing="none"
      >
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14 xl:gap-20">
            <div>
              <ResearchMarker
                code="R0"
                label="Web infrastructure intelligence"
              />
              <h1 className="mt-6 max-w-3xl text-5xl leading-[1.02] font-semibold tracking-[-0.055em] text-balance sm:text-6xl lg:text-[4.25rem]">
                Choose web infrastructure with confidence.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-muted-foreground">
                Honest reviews, transparent comparisons, and practical buying
                guides for businesses choosing premium hosting and
                infrastructure solutions.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="#research" size="lg">
                  Explore Reviews
                </ButtonLink>
                <ButtonLink href="#comparisons" size="lg" variant="secondary">
                  Compare Providers
                </ButtonLink>
              </div>
            </div>
            <ResearchWorkspace />
          </div>
        </Container>
      </Section>

      <div className="border-b border-border bg-surface-raised">
        <Container>
          <ul className="grid divide-y divide-border md:grid-cols-4 md:divide-x md:divide-y-0">
            {trustCommitments.map((commitment, index) => (
              <li
                className="flex items-center gap-3 py-4 text-sm font-medium md:px-5 md:first:pl-0 md:last:pr-0"
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

      <Section id="research" aria-labelledby="research-heading" spacing="md">
        <Container>
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="Featured research"
              id="research-heading"
              title="Provider analysis for serious business decisions."
              description="Start with the operating model and workload—not a generic winner."
            />
            <Link className="shrink-0 text-sm" href="/reviews">
              View all reviews
            </Link>
          </div>

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
            Fit guidance is editorial context, not a ranking or testing claim.
          </p>
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
              eyebrow="Comparison intelligence"
              id="comparisons-heading"
              title="See the decision behind the difference."
              description="Concise comparison briefs organized around provider focus and business fit."
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
                        vs
                      </span>
                      {comparison.right}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      {comparison.lens}
                    </p>
                  </div>
                  <Link className="text-sm" href={comparison.href}>
                    Compare
                  </Link>
                </article>
              ))}
            </div>
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
            </div>
          </div>
        </Container>
      </Section>
    </PageLayout>
  );
}
