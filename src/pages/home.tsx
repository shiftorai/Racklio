import { ResearchMarker, RACKLIO_TAGLINE } from '@/components/brand';
import { PageLayout, SiteFooter, SiteHeader } from '@/components/layout';
import { ButtonLink, Container, Link, Section } from '@/components/ui';

const categories = [
  [
    'AI Customer Support',
    'Automate answers, organize requests, and support customers across growing volumes.',
    'Automation, handoff, knowledge, and control',
  ],
  [
    'Business Phone Systems',
    'Compare modern calling platforms around business workflows, administration, integrations, and team requirements.',
    'Calling, routing, administration, and fit',
  ],
  [
    'AI Receptionists',
    'Understand tools designed to answer calls, capture intent, route conversations, and extend front-desk coverage.',
    'Coverage, escalation, routing, and oversight',
  ],
  [
    'Customer Messaging',
    'Assess how platforms bring customer conversations together across messaging channels and team workflows.',
    'Channels, context, coordination, and continuity',
  ],
  [
    'Help Desk & Live Chat',
    'Choose support software around ticket management, live conversations, collaboration, and operating complexity.',
    'Inbox, live support, workflow, and reporting',
  ],
] as const;

const decisionPaths = [
  ['Automate customer support', 'AI Customer Support'],
  ['Improve business calling', 'Business Phone Systems'],
  ['Manage customer conversations', 'Customer Messaging'],
  ['Add an AI receptionist', 'AI Receptionists'],
  ['Equip a small support team', 'Help Desk & Live Chat'],
] as const;

const trustCommitments = [
  'Independent editorial research',
  'Transparent methodology',
  'No paid rankings',
  'Evidence before recommendations',
] as const;

const framework = [
  [
    '01',
    'Start with the job',
    'Define the customer or team outcome the software must support.',
  ],
  [
    '02',
    'Compare operating models',
    'Understand how each category approaches workflows, automation, and control.',
  ],
  [
    '03',
    'Check practical fit',
    'Evaluate implementation, governance, pricing structure, and limitations.',
  ],
  [
    '04',
    'Choose with context',
    'Use conditional guidance instead of relying on a universal winner.',
  ],
] as const;

function DecisionWorkspace() {
  return (
    <aside
      aria-labelledby="workspace-heading"
      className="relative border border-navy-muted bg-surface-raised shadow-panel"
    >
      <span
        aria-hidden="true"
        className="absolute -top-px -left-px size-3 border-t-2 border-l-2 border-accent"
      />
      <div className="flex items-center justify-between border-b border-border px-5 py-3.5 sm:px-6">
        <ResearchMarker code="DW" label="Decision workspace" />
        <span className="font-mono text-[0.625rem] tracking-wider text-muted-foreground uppercase">
          Category map
        </span>
      </div>
      <div className="border-b border-border px-5 py-5 sm:px-6">
        <p className="text-[0.6875rem] font-semibold tracking-[0.14em] text-accent-strong uppercase">
          First decision
        </p>
        <h2
          className="mt-2 text-2xl font-semibold tracking-[-0.035em]"
          id="workspace-heading"
        >
          What does your business need to improve?
        </h2>
        <p className="mt-2 max-w-md text-sm leading-6 text-muted-foreground">
          Start with the workflow, then narrow the software category and
          evaluation criteria that matter.
        </p>
      </div>
      <ol>
        {decisionPaths.map(([path, category], index) => (
          <li
            className="grid grid-cols-[1.5rem_1fr] gap-3 border-b border-border px-5 py-3.5 last:border-b-0 sm:px-6"
            key={path}
          >
            <span className="font-mono text-[0.625rem] text-accent-strong">
              {String(index + 1).padStart(2, '0')}
            </span>
            <span>
              <span className="block text-sm font-semibold">{path}</span>
              <span className="mt-1 block text-[0.6875rem] leading-4 text-muted-foreground">
                Explore {category}
              </span>
            </span>
          </li>
        ))}
      </ol>
    </aside>
  );
}

export function Home() {
  return (
    <PageLayout footer={<SiteFooter />} header={<SiteHeader />}>
      <title>
        Racklio — Compare AI Customer Support & Business Communication Software
      </title>
      <link rel="canonical" href="https://racklio.com/" />
      <meta
        name="description"
        content="Compare AI customer support, business phone, AI receptionist, customer messaging, and help desk software with clear, evidence-based guidance."
      />
      <meta property="og:type" content="website" />
      <meta
        property="og:title"
        content="Racklio — Compare AI Customer Support & Business Communication Software"
      />
      <meta
        property="og:description"
        content="Clear, evidence-based guidance for choosing customer support and business communication software."
      />
      <meta property="og:url" content="https://racklio.com/" />
      <meta name="twitter:card" content="summary" />
      <meta
        name="twitter:title"
        content="Racklio — Compare AI Customer Support & Business Communication Software"
      />
      <meta
        name="twitter:description"
        content="Clear, evidence-based guidance for choosing customer support and business communication software."
      />

      <Section
        className="overflow-hidden border-b border-border py-14 sm:py-16 lg:py-20"
        spacing="none"
      >
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-[0.98fr_1.02fr] lg:gap-14 xl:gap-20">
            <div>
              <ResearchMarker code="R0" label={RACKLIO_TAGLINE} />
              <h1 className="mt-6 max-w-3xl text-5xl leading-[1.02] font-semibold tracking-[-0.055em] text-balance sm:text-6xl lg:text-[4.25rem]">
                Compare AI customer support and business communication software
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-muted-foreground">
                Racklio helps businesses understand the differences between
                software categories, narrow the right options, and make a more
                confident decision with less unnecessary research.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="#categories" size="lg">
                  Explore Software Categories
                </ButtonLink>
                <ButtonLink
                  href="#decision-paths"
                  size="lg"
                  variant="secondary"
                >
                  Find My Starting Point
                </ButtonLink>
              </div>
            </div>
            <DecisionWorkspace />
          </div>
        </Container>
      </Section>

      <div className="border-b border-border bg-muted">
        <Container>
          <ul className="grid border-l border-border sm:grid-cols-2 lg:grid-cols-4">
            {trustCommitments.map((item, index) => (
              <li
                className="flex items-center gap-3 border-r border-b border-border px-4 py-3.5 text-xs font-semibold"
                key={item}
              >
                <span
                  aria-hidden="true"
                  className="font-mono text-[0.625rem] text-accent-strong"
                >
                  0{index + 1}
                </span>
                {item}
              </li>
            ))}
          </ul>
        </Container>
      </div>

      <Section
        id="categories"
        aria-labelledby="categories-heading"
        spacing="md"
      >
        <Container>
          <ResearchMarker code="CT" label="Software categories" />
          <h2
            className="mt-4 max-w-2xl text-3xl leading-tight font-semibold tracking-[-0.035em] text-balance sm:text-4xl"
            id="categories-heading"
          >
            Start with the business problem, not a product list.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
            Racklio organizes the market into practical categories so teams can
            understand what each type of software is designed to do before
            comparing individual options.
          </p>
          <div className="mt-10 grid gap-px border border-border bg-border md:grid-cols-2 lg:grid-cols-6">
            {categories.map(([title, description, lens], index) => (
              <article
                className={`bg-surface-raised p-5 sm:p-6 ${index < 3 ? 'lg:col-span-2' : 'lg:col-span-3'}`}
                key={title}
              >
                <span className="font-mono text-[0.625rem] text-accent-strong">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-5 text-xl font-semibold tracking-tight">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {description}
                </p>
                <p className="mt-5 border-t border-border pt-4 text-xs font-medium">
                  {lens}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section
        className="border-t border-border"
        id="decision-paths"
        aria-labelledby="decision-paths-heading"
        spacing="md"
      >
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
            <div>
              <ResearchMarker code="DP" label="Popular starting points" />
              <h2
                className="mt-4 text-3xl leading-tight font-semibold tracking-[-0.035em] sm:text-4xl"
                id="decision-paths-heading"
              >
                Choose the outcome closest to your current need.
              </h2>
              <p className="mt-5 text-base leading-7 text-muted-foreground">
                A useful shortlist begins with the work your team needs to
                improve—not with whichever product is most visible.
              </p>
            </div>
            <div className="border-y border-border">
              {decisionPaths.map(([path, category], index) => (
                <article
                  className="grid gap-2 border-b border-border py-5 last:border-b-0 sm:grid-cols-[2rem_1fr_auto] sm:items-center"
                  key={path}
                >
                  <span className="font-mono text-[0.625rem] text-accent-strong">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="font-semibold">{path}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Start with {category}
                    </p>
                  </div>
                  <Link className="text-sm" href="#categories">
                    Review category →
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section
        className="bg-foreground text-white"
        id="research"
        aria-labelledby="research-heading"
        spacing="md"
      >
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
            <div>
              <ResearchMarker
                code="ER"
                label="Evidence-led research"
                tone="dark"
              />
              <h2
                className="mt-4 text-3xl leading-tight font-semibold tracking-[-0.035em] sm:text-4xl"
                id="research-heading"
              >
                A disciplined path from category to decision.
              </h2>
              <p className="mt-5 leading-7 text-slate-300">
                Racklio examines documented product scope, operating models,
                practical tradeoffs, and business fit. Recommendations remain
                conditional on the use case and available evidence.
              </p>
              <ButtonLink
                className="mt-7"
                href="/methodology"
                variant="secondary"
              >
                Read the Methodology
              </ButtonLink>
            </div>
            <ol className="grid border-t border-white/20 sm:grid-cols-2">
              {framework.map(([number, title, description]) => (
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

      <Section
        id="comparisons"
        aria-labelledby="comparisons-heading"
        spacing="md"
      >
        <Container>
          <div className="grid gap-8 border-l-2 border-accent pl-6 md:grid-cols-[0.38fr_1fr] md:pl-10">
            <p className="text-xs font-semibold tracking-[0.16em] text-accent-strong uppercase">
              Independent guidance
            </p>
            <div className="max-w-3xl">
              <h2
                className="text-2xl leading-snug font-semibold tracking-[-0.03em] sm:text-3xl"
                id="comparisons-heading"
              >
                Clear comparisons without a manufactured universal winner.
              </h2>
              <p className="mt-5 leading-7 text-muted-foreground">
                Racklio is building an evidence-first decision resource for AI
                customer support and business communication software. Coverage
                is designed to explain differences, limitations, and fit—not to
                reward paid placement or maximize clicks.
              </p>
              <div className="mt-6 flex flex-wrap gap-5">
                <Link href="/editorial-standards">Editorial Standards</Link>
                <Link href="/about">About Racklio</Link>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </PageLayout>
  );
}
