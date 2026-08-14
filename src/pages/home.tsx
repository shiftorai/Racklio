import { useState, type ReactNode } from 'react';

import { PageLayout, SiteFooter, SiteHeader } from '@/components/layout';
import { ButtonLink, Container, CountUp, Link, Reveal } from '@/components/ui';

const categories = [
  [
    'AI',
    'AI Customer Support',
    '/categories/ai-customer-support',
    'AI agents, help desks, automation, and human handoff.',
  ],
  [
    'VO',
    'Business Phone & Voice AI',
    '/categories/business-phone-voice-ai',
    'Cloud calling, virtual numbers, routing, and voice automation.',
  ],
  [
    'CH',
    'Live Chat & Messaging',
    '/categories/live-chat-messaging',
    'Website chat, WhatsApp, shared inboxes, and omnichannel workflows.',
  ],
  [
    'CRM',
    'CRM & Customer Engagement',
    '/categories/crm-customer-engagement',
    'Customer records, communication, lifecycle activity, and engagement.',
  ],
] as const;

const reviews = [
  [
    'Tidio',
    'Live Chat & Messaging',
    'Web chat, help-desk workflow, and Lyro AI with documented usage limits.',
    '/reviews/tidio',
    '/comparisons/tidio-vs-gorgias',
  ],
  [
    'respond.io',
    'Live Chat & Messaging',
    'Omnichannel messaging teams working across WhatsApp and other channels.',
    '/reviews/respond-io',
    '/comparisons/respond-io-vs-tidio',
  ],
  [
    'KrispCall',
    'Business Phone & Voice AI',
    'Teams evaluating virtual numbers, cloud calling, and usage-based costs.',
    '/reviews/krispcall',
    '/comparisons/krispcall-vs-aircall',
  ],
  [
    'Typewise',
    'AI Customer Support',
    'Established service teams evaluating outcome-priced AI automation.',
    '/reviews/typewise',
    '',
  ],
  [
    'EngageBay',
    'CRM & Customer Engagement',
    'Smaller teams seeking connected CRM, marketing, sales, and service workflows.',
    '/reviews/engagebay',
    '',
  ],
  [
    'EazyChat.io',
    'AI Customer Support',
    'Small teams evaluating AI website chat with human handoff.',
    '/reviews/eazychat',
    '',
  ],
] as const;

const comparisons = [
  [
    'Tidio',
    'Gorgias',
    'Web chat and AI support or an ecommerce-centered help desk?',
    '/comparisons/tidio-vs-gorgias',
  ],
  [
    'respond.io',
    'Tidio',
    'Omnichannel messaging workflows or web chat and ticket support?',
    '/comparisons/respond-io-vs-tidio',
  ],
  [
    'KrispCall',
    'Aircall',
    'Compact cloud calling or a structured team communications platform?',
    '/comparisons/krispcall-vs-aircall',
  ],
  [
    'KrispCall',
    'CallHippo',
    'How do plans, numbers, usage, SMS, and routing differ?',
    '/comparisons/krispcall-vs-callhippo',
  ],
] as const;

const problems = [
  [
    'I need faster customer replies',
    'AI Customer Support',
    'Assess automation scope, knowledge inputs, escalation, and human oversight.',
    '/categories/ai-customer-support',
  ],
  [
    'I need website live chat',
    'Live Chat & Messaging',
    'Start with web-chat deployment, inbox ownership, automation, and pricing units.',
    '/categories/live-chat-messaging',
  ],
  [
    'I need omnichannel messaging',
    'Live Chat & Messaging',
    'Compare supported channels, shared context, routing, and active-contact models.',
    '/categories/live-chat-messaging',
  ],
  [
    'I need a business phone system',
    'Business Phone & Voice AI',
    'Evaluate numbers, countries, routing, included usage, SMS, and integrations.',
    '/categories/business-phone-voice-ai',
  ],
  [
    'I need CRM + customer communication',
    'CRM & Customer Engagement',
    'Map records, ownership, lifecycle activity, communication, and automation.',
    '/categories/crm-customer-engagement',
  ],
  [
    'I want AI handling more conversations',
    'AI Customer Support',
    'Define what AI may resolve, how it escalates, and how usage is charged.',
    '/categories/ai-customer-support',
  ],
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
  ['03', 'Compare', 'Provider statements stay separate from Racklio analysis.'],
  [
    '04',
    'Explain',
    'Trade-offs are translated into practical buyer scenarios.',
  ],
  ['05', 'Update', 'Verification dates make changing product facts visible.'],
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
}: {
  eyebrow: string;
  title: string;
  text: string;
  action?: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
      <div className="max-w-2xl">
        <p className="text-xs font-bold tracking-[0.16em] text-mint-deep uppercase">
          {eyebrow}
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-[-0.045em] sm:text-4xl">
          {title}
        </h2>
        <p className="mt-4 leading-7 text-muted-foreground">{text}</p>
      </div>
      {action}
    </div>
  );
}

function DecisionOrbit() {
  const tiles = [
    'Customer Support',
    'Live Chat',
    'CRM',
    'Business Phone',
    'Omnichannel',
    'AI Service',
  ];
  return (
    <div className="dot-field relative mx-auto min-h-[26rem] w-full max-w-xl overflow-hidden rounded-[2rem] border border-border bg-white/80 p-6 shadow-panel sm:min-h-[31rem] sm:p-8">
      <div className="absolute inset-10 rounded-full border border-dashed border-brand/25" />
      <div className="absolute inset-[28%] rounded-full border border-mint-deep/20 bg-mint-subtle shadow-card" />
      <div className="absolute inset-[36%] grid place-items-center rounded-full bg-foreground text-center text-sm font-bold text-white shadow-panel">
        <span>
          Racklio
          <br />
          <span className="font-normal text-mint">decision lab</span>
        </span>
      </div>
      {tiles.map((tile, index) => {
        const positions = [
          'top-8 left-8',
          'top-12 right-5',
          'top-[43%] right-3',
          'bottom-10 right-8',
          'bottom-7 left-8',
          'top-[43%] left-3',
        ];
        return (
          <div
            className={`absolute ${positions[index]} max-w-36 rounded-xl border border-border bg-white px-3 py-2.5 text-xs font-semibold shadow-card transition-transform duration-300 hover:-translate-y-1 hover:rotate-1`}
            key={tile}
          >
            <span className="mb-2 block size-2 rounded-full bg-mint" />
            {tile}
          </div>
        );
      })}
      <span className="absolute top-[27%] left-[39%] rounded-full bg-violet-100 px-3 py-1 text-[0.65rem] font-bold text-accent-strong">
        VERIFIED
      </span>
      <span className="absolute right-[26%] bottom-[26%] rounded-full bg-mint-subtle px-3 py-1 text-[0.65rem] font-bold text-mint-deep">
        BEST FIT
      </span>
    </div>
  );
}

function ProblemExplorer() {
  const [selected, setSelected] = useState(0);
  const current = problems[selected] ?? problems[0];
  return (
    <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
      <div className="grid gap-2 sm:grid-cols-2">
        {problems.map((problem, index) => (
          <button
            aria-pressed={selected === index}
            className={`min-h-16 rounded-xl border p-4 text-left text-sm font-semibold transition-all ${selected === index ? 'border-brand bg-violet-50 text-accent-strong shadow-card' : 'border-border bg-white hover:border-mint-deep/35 hover:bg-mint-subtle/50'}`}
            key={problem[0]}
            onClick={() => setSelected(index)}
            type="button"
          >
            {problem[0]}
          </button>
        ))}
      </div>
      <div className="relative overflow-hidden rounded-[1.5rem] bg-foreground p-7 text-white shadow-panel sm:p-9">
        <div
          aria-hidden="true"
          className="absolute -right-10 -bottom-10 size-44 rounded-full border-[2rem] border-mint/15"
        />
        <p className="text-xs font-bold tracking-[0.14em] text-mint uppercase">
          Suggested starting point
        </p>
        <h3 className="mt-5 text-2xl font-semibold">{current[1]}</h3>
        <p className="mt-4 max-w-md text-sm leading-6 text-stone-300">
          {current[2]}
        </p>
        <ButtonLink
          className="mt-7 bg-mint text-foreground hover:bg-[#48d8b5]"
          href={current[3]}
        >
          Explore this path <Arrow />
        </ButtonLink>
      </div>
    </div>
  );
}

export function Home() {
  const canonical = 'https://racklio.com/';
  const title = 'Racklio — Compare AI Customer Support Software';
  const description =
    'Evidence-based reviews and comparisons of AI customer support, business communications, CRM, and customer engagement software.';
  const toolCount = new Set([
    ...reviews.map((item) => item[0]),
    ...comparisons.flatMap((item) => [item[0], item[1]]),
  ]).size;
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

      <section className="relative overflow-hidden border-b border-border py-12 sm:py-16 lg:py-20">
        <div
          aria-hidden="true"
          className="absolute top-0 right-0 h-full w-1/2 bg-[radial-gradient(circle_at_50%_30%,rgba(98,230,196,.23),transparent_48%)]"
        />
        <Container className="relative" size="wide">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="inline-flex rounded-full border border-mint-deep/15 bg-mint-subtle px-3 py-1.5 text-xs font-bold tracking-[0.13em] text-mint-deep uppercase">
                Compare. Choose. Grow.
              </p>
              <h1 className="mt-6 max-w-3xl text-[clamp(2.8rem,5.2vw,4.8rem)] leading-[0.98] font-semibold tracking-[-0.06em]">
                Choose customer software with evidence, not noise.
              </h1>
              <p className="mt-7 max-w-xl text-lg leading-8 text-muted-foreground">
                Racklio turns official product facts, pricing limits, and
                meaningful trade-offs into clearer software decisions for
                customer-facing teams.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <ButtonLink className="cta-halo" href="/#categories" size="lg">
                  Explore software <Arrow />
                </ButtonLink>
                <ButtonLink href="/#comparisons" size="lg" variant="secondary">
                  Compare tools <Arrow />
                </ButtonLink>
              </div>
              <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-xs font-semibold text-muted-foreground">
                <span>Official-source research</span>
                <span>•</span>
                <span>No paid rankings</span>
                <span>•</span>
                <span>Conditional guidance</span>
              </div>
            </div>
            <DecisionOrbit />
          </div>
        </Container>
      </section>

      <section
        aria-label="Racklio coverage"
        className="border-b border-border bg-white/65"
      >
        <Container size="wide">
          <dl className="grid grid-cols-2 lg:grid-cols-5">
            {[
              [toolCount, 'Software tools'],
              [reviews.length, 'Published reviews'],
              [comparisons.length, 'Comparisons'],
              [categories.length, 'Active categories'],
            ].map(([value, label]) => (
              <div
                className="border-b border-border p-5 last:border-b-0 even:border-l lg:border-b-0 lg:border-l lg:first:border-l-0"
                key={label}
              >
                <dd className="text-3xl font-semibold tracking-tight">
                  <CountUp value={Number(value)} />
                </dd>
                <dt className="mt-1 text-xs font-semibold text-muted-foreground">
                  {label}
                </dt>
              </div>
            ))}
            <div className="col-span-2 p-5 lg:col-span-1 lg:border-l">
              <dd className="text-lg font-semibold">August 2026</dd>
              <dt className="mt-1 text-xs font-semibold text-muted-foreground">
                Latest editorial update
              </dt>
            </div>
          </dl>
        </Container>
      </section>

      <Container className="space-y-20 py-16 sm:py-20" size="wide">
        <Reveal>
          <section id="categories" aria-labelledby="problem-heading">
            <SectionIntro
              eyebrow="Start with your problem"
              title="What are you trying to improve?"
              text="Choose a real business need. Racklio will take you to relevant research—not pretend to calculate a universal answer."
            />
            <div className="mt-8">
              <ProblemExplorer />
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section aria-labelledby="software-heading">
            <SectionIntro
              eyebrow="Decision cards"
              title="Featured software research"
              text="Concise starting points built from current provider documentation and explicit product limits."
              action={
                <Link className="group" href="/#reviews">
                  All reviews <Arrow />
                </Link>
              }
            />
            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {reviews.map((item) => (
                <article
                  className="decision-card flex min-h-64 flex-col rounded-[1.4rem] border border-border bg-white p-6 shadow-card"
                  key={item[0]}
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className="rounded-full bg-mint-subtle px-3 py-1 text-[0.65rem] font-bold text-mint-deep uppercase">
                      {item[1]}
                    </span>
                    <span
                      aria-hidden="true"
                      className="size-3 rounded-full bg-brand/70"
                    />
                  </div>
                  <h3 className="mt-7 text-2xl font-semibold">{item[0]}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    <strong className="text-foreground">
                      Best suited for:{' '}
                    </strong>
                    {item[2]}
                  </p>
                  <div className="mt-auto flex flex-wrap gap-x-5 gap-y-2 pt-6">
                    <Link className="group" href={item[3]}>
                      Read review <Arrow />
                    </Link>
                    {item[4] ? (
                      <Link className="group" href={item[4]} variant="subtle">
                        Compare <Arrow />
                      </Link>
                    ) : null}
                  </div>
                </article>
              ))}
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section id="comparisons" aria-labelledby="comparison-heading">
            <SectionIntro
              eyebrow="Comparison explorer"
              title="Put the operating models side by side"
              text="Comparison is not a winner badge. It is a structured way to understand which trade-offs matter for your workflow."
              action={
                <Link className="group" href="/#comparisons">
                  All comparisons <Arrow />
                </Link>
              }
            />
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {comparisons.map((item) => (
                <Link
                  className="group decision-card block rounded-[1.4rem] border border-border bg-white p-6 shadow-card"
                  href={item[3]}
                  key={item[3]}
                  variant="unstyled"
                >
                  <div className="flex items-center gap-3 text-xl font-semibold">
                    <span>{item[0]}</span>
                    <span className="grid size-9 place-items-center rounded-full bg-violet-100 text-sm text-brand transition-transform group-hover:rotate-180">
                      ⇄
                    </span>
                    <span>{item[1]}</span>
                  </div>
                  <p className="mt-4 text-sm leading-6 text-muted-foreground">
                    {item[2]}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 font-semibold text-accent-strong">
                    See comparison <Arrow />
                  </span>
                </Link>
              ))}
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section aria-labelledby="territories-heading">
            <SectionIntro
              eyebrow="Category territories"
              title="Explore the customer software landscape"
              text="Each territory starts with a distinct operational problem and a focused set of evaluation criteria."
            />
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {categories.map((item, index) => (
                <article
                  className={`decision-card relative overflow-hidden rounded-[1.5rem] border border-border p-7 shadow-card ${index % 2 ? 'bg-violet-50/65' : 'bg-mint-subtle/75'}`}
                  key={item[0]}
                >
                  <span className="font-mono text-xs font-bold text-muted-foreground">
                    0{index + 1} / {item[0]}
                  </span>
                  <h3 className="mt-8 text-2xl font-semibold">{item[1]}</h3>
                  <p className="mt-3 max-w-lg text-sm leading-6 text-muted-foreground">
                    {item[3]}
                  </p>
                  <Link
                    className="group mt-6 inline-flex items-center gap-2"
                    href={item[2]}
                  >
                    Enter category <Arrow />
                  </Link>
                  <span
                    aria-hidden="true"
                    className="absolute -right-8 -bottom-8 size-32 rounded-full border-[1.5rem] border-white/50"
                  />
                </article>
              ))}
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section
            className="overflow-hidden rounded-[2rem] bg-foreground p-7 text-white shadow-panel sm:p-10"
            aria-labelledby="process-heading"
          >
            <SectionIntro
              eyebrow="How Racklio decides"
              title="Research made inspectable"
              text="A transparent editorial process keeps provider statements, verified facts, and Racklio analysis distinct."
            />
            <ol className="mt-10 grid gap-7 md:grid-cols-5">
              {steps.map((step, index) => (
                <li className="relative" key={step[0]}>
                  <span className="grid size-10 place-items-center rounded-full bg-mint font-bold text-foreground">
                    {step[0]}
                  </span>
                  {index < steps.length - 1 ? (
                    <span
                      aria-hidden="true"
                      className="absolute top-5 left-12 hidden h-px w-[calc(100%-2.25rem)] bg-white/20 md:block"
                    />
                  ) : null}
                  <h3 className="mt-5 font-semibold">{step[1]}</h3>
                  <p className="mt-2 text-xs leading-5 text-stone-300">
                    {step[2]}
                  </p>
                </li>
              ))}
            </ol>
            <div className="mt-9 flex flex-wrap gap-3">
              <ButtonLink
                className="bg-mint text-foreground hover:bg-[#48d8b5]"
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
          <section className="relative overflow-hidden rounded-[2rem] border border-brand/20 bg-[linear-gradient(120deg,#eee9ff,#e4faf4)] p-8 sm:p-12">
            <div className="max-w-2xl">
              <p className="text-xs font-bold tracking-[0.14em] text-accent-strong uppercase">
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
                <ButtonLink href="/#comparisons" variant="secondary">
                  Browse comparisons
                </ButtonLink>
              </div>
            </div>
            <div
              aria-hidden="true"
              className="dot-field absolute top-0 right-0 h-full w-1/3 opacity-60"
            />
          </section>
        </Reveal>
      </Container>
    </PageLayout>
  );
}
