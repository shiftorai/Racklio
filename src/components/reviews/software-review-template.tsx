import { useEffect } from 'react';
import { ResearchMarker } from '@/components/brand';
import { PageLayout, SiteFooter, SiteHeader } from '@/components/layout';
import { EvidenceNote } from './evidence-note';
import { ReviewSection } from './review-section';
import {
  ButtonLink,
  Card,
  CardContent,
  Container,
  Link,
  Section,
} from '@/components/ui';

export type SoftwareReviewData = {
  slug: string;
  name: string;
  category: string;
  categoryLinks?: { title: string; href: string }[];
  headline: string;
  dek: string;
  metaTitle: string;
  metaDescription: string;
  officialUrl: string;
  summary: { label: string; text: string }[];
  fit: string[];
  notFit: string[];
  pricing: { plan: string; basis: string; allowance: string; note: string }[];
  sections: {
    id: string;
    code: string;
    title: string;
    description: string;
    paragraphs: string[];
    bullets?: string[];
    evidence?: string;
  }[];
  scenarios: { scenario: string; fit: string; why: string }[];
  faqs: { question: string; answer: string }[];
  sources: { title: string; href: string }[];
  relatedComparisons?: { title: string; href: string }[];
  verificationDate?: string;
  idealUser?: string;
  pricingModel?: string;
  strengths?: string[];
  limitations?: string[];
  capabilities?: { title: string; description: string }[];
  alternatives?: { title: string; description: string; href?: string }[];
};

export function SoftwareReviewTemplate({ data }: { data: SoftwareReviewData }) {
  const canonical = `https://racklio.com/reviews/${data.slug}`;
  const verificationDate = data.verificationDate ?? 'August 13, 2026';
  const primaryCategory = data.categoryLinks?.[0];
  const quickDecision = [
    {
      label: 'Best for',
      text: data.idealUser ?? data.fit[0],
    },
    { label: 'Consider if', text: data.fit[0] },
    { label: 'Look elsewhere if', text: data.notFit[0] },
    {
      label: 'Main strength',
      text: data.strengths?.[0] ?? data.summary[0]?.text,
    },
    {
      label: 'Main limitation',
      text:
        data.limitations?.[0] ??
        data.summary.find((item) =>
          /tradeoff|limitation|verify/i.test(item.label),
        )?.text ??
        data.notFit[0],
    },
  ];
  useEffect(() => {
    const meta = document.querySelector<HTMLMetaElement>(
      'meta[name="description"]',
    );
    const old = meta?.content;
    if (meta) meta.content = data.metaDescription;
    return () => {
      if (meta && old) meta.content = old;
    };
  }, [data.metaDescription]);
  const article = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: data.headline,
    description: data.metaDescription,
    datePublished: '2026-08-13',
    dateModified: '2026-08-14',
    mainEntityOfPage: canonical,
    isAccessibleForFree: true,
    author: {
      '@type': 'Organization',
      name: 'Racklio Editorial',
      url: 'https://racklio.com/about',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Keleva LLC',
      url: 'https://racklio.com/',
    },
    about: {
      '@type': 'SoftwareApplication',
      name: data.name,
      applicationCategory: data.category,
      url: data.officialUrl,
    },
    citation: data.sources.map((source) => source.href),
  };
  const breadcrumbs = {
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
        name: primaryCategory?.title ?? data.category,
        item: primaryCategory
          ? `https://racklio.com${primaryCategory.href}`
          : 'https://racklio.com/#categories',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Reviews',
        item: 'https://racklio.com/reviews',
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: `${data.name} Review`,
        item: canonical,
      },
    ],
  };
  const toc = [
    ['overview', 'At a glance'],
    ...(data.capabilities?.length
      ? [['capabilities', 'Key capabilities']]
      : []),
    ['pricing', 'Pricing and billing'],
    ...data.sections.map((s) => [s.id, s.title]),
    ['decision', 'Decision guidance'],
    ...(data.strengths?.length || data.limitations?.length
      ? [['tradeoffs', 'Strengths and limitations']]
      : []),
    ...(data.alternatives?.length ? [['alternatives', 'Alternatives']] : []),
    ['faq', 'Frequently asked questions'],
    ['sources', 'Sources'],
  ];
  return (
    <PageLayout footer={<SiteFooter />} header={<SiteHeader />}>
      <title>{data.metaTitle}</title>
      <link rel="canonical" href={canonical} />
      <meta property="og:type" content="article" />
      <meta property="og:title" content={data.headline} />
      <meta property="og:description" content={data.metaDescription} />
      <meta property="og:url" content={canonical} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={`${data.name} Review | Racklio`} />
      <meta name="twitter:description" content={data.metaDescription} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <div className="border-b border-border bg-surface/80">
        <Container>
          <nav
            aria-label="Breadcrumb"
            className="py-3 text-xs text-muted-foreground"
          >
            <ol className="flex flex-wrap gap-2">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href={primaryCategory?.href ?? '/#categories'}>
                  {primaryCategory?.title ?? data.category}
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/reviews">Reviews</Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page">{data.name}</li>
            </ol>
          </nav>
        </Container>
      </div>
      <Section
        className="border-b border-border bg-[linear-gradient(120deg,var(--color-surface),var(--color-mint-subtle))]"
        spacing="md"
      >
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_0.72fr] lg:gap-16">
            <div>
              <ResearchMarker code="RV" label={`${data.category} review`} />
              {data.categoryLinks?.length ? (
                <nav
                  aria-label="Related software categories"
                  className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm"
                >
                  {data.categoryLinks.map((category) => (
                    <Link href={category.href} key={category.href}>
                      {category.title}
                    </Link>
                  ))}
                </nav>
              ) : null}
              <h1 className="mt-6 text-4xl leading-tight font-semibold tracking-[-0.045em] sm:text-5xl">
                {data.headline}
              </h1>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                {data.dek}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <ButtonLink
                  href={data.officialUrl}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Visit {data.name} Official Website
                </ButtonLink>
                <ButtonLink href="#decision" variant="secondary">
                  Decision Guidance
                </ButtonLink>
              </div>
              <p className="mt-4 text-xs leading-5 text-muted-foreground">
                Official link. No paid ranking or score. Racklio may earn from
                eligible links in the future.
              </p>
              <p className="mt-3 text-xs font-medium text-muted-foreground">
                Facts verified {verificationDate}
              </p>
            </div>
            <Card className="relative overflow-hidden border-brand/25 bg-white/90 shadow-panel before:absolute before:inset-y-0 before:left-0 before:w-1 before:bg-brand">
              <CardContent>
                <p className="text-xs font-semibold tracking-[0.14em] text-accent-strong uppercase">
                  Decision summary
                </p>
                <dl className="mt-5 space-y-5">
                  {quickDecision.map((x) => (
                    <div key={x.label}>
                      <dt className="text-xs font-semibold text-muted-foreground uppercase">
                        {x.label}
                      </dt>
                      <dd className="mt-2 text-sm leading-6">{x.text}</dd>
                    </div>
                  ))}
                </dl>
              </CardContent>
            </Card>
          </div>
        </Container>
      </Section>
      <Section spacing="md">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[15rem_minmax(0,1fr)] lg:gap-14">
            <aside>
              <nav aria-label="Review sections" className="lg:sticky lg:top-6">
                <p className="text-xs font-semibold tracking-[0.14em] text-accent-strong uppercase">
                  On this page
                </p>
                <ol className="mt-4 space-y-2 text-sm">
                  {toc.map(([id, title]) => (
                    <li key={id}>
                      <a
                        className="text-muted-foreground hover:text-foreground"
                        href={`#${id}`}
                      >
                        {title}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            </aside>
            <article className="min-w-0 space-y-10">
              <ReviewSection
                code="A0"
                id="overview"
                title="At a glance"
                description={`Who should consider ${data.name}, and when another category may fit better.`}
              >
                <div className="grid gap-5 md:grid-cols-2">
                  <Card>
                    <CardContent>
                      <h3 className="font-semibold">Consider it when</h3>
                      <ul className="mt-4 space-y-3 text-sm leading-6 text-muted-foreground">
                        {data.fit.map((x) => (
                          <li key={x}>— {x}</li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent>
                      <h3 className="font-semibold">Look elsewhere when</h3>
                      <ul className="mt-4 space-y-3 text-sm leading-6 text-muted-foreground">
                        {data.notFit.map((x) => (
                          <li key={x}>— {x}</li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
                {data.relatedComparisons?.length ? (
                  <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3">
                    {data.relatedComparisons.map((comparison) => (
                      <Link href={comparison.href} key={comparison.href}>
                        {comparison.title}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </ReviewSection>
              {data.capabilities?.length ? (
                <ReviewSection
                  code="C0"
                  id="capabilities"
                  title="Key capabilities"
                  description="Buyer-oriented capability groups documented by the provider."
                >
                  <div className="grid gap-4 sm:grid-cols-2">
                    {data.capabilities.map((capability) => (
                      <Card key={capability.title}>
                        <CardContent>
                          <h3 className="font-semibold">{capability.title}</h3>
                          <p className="mt-3 text-sm leading-6 text-muted-foreground">
                            {capability.description}
                          </p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </ReviewSection>
              ) : null}
              <ReviewSection
                code="P0"
                id="pricing"
                title="Pricing and billing"
                description={`Pricing verified: ${verificationDate}. Review the billing unit, not only the headline price.`}
              >
                <div className="hidden overflow-x-auto rounded-xl border border-border bg-white sm:block">
                  <table className="w-full min-w-[42rem] text-left text-sm">
                    <caption className="sr-only">{data.name} pricing</caption>
                    <thead className="bg-accent-subtle">
                      <tr>
                        {[
                          'Plan',
                          'Billing basis',
                          'Allowance',
                          'Important note',
                        ].map((x) => (
                          <th className="p-4" key={x} scope="col">
                            {x}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {data.pricing.map((x) => (
                        <tr className="border-t border-border" key={x.plan}>
                          <th className="p-4" scope="row">
                            {x.plan}
                          </th>
                          <td className="p-4">{x.basis}</td>
                          <td className="p-4">{x.allowance}</td>
                          <td className="p-4 text-muted-foreground">
                            {x.note}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="grid gap-4 sm:hidden">
                  {data.pricing.map((item) => (
                    <Card key={item.plan}>
                      <CardContent>
                        <h3 className="font-semibold">{item.plan}</h3>
                        <dl className="mt-4 space-y-3 text-sm">
                          <div>
                            <dt className="font-medium">Billing basis</dt>
                            <dd className="mt-1 text-muted-foreground">
                              {item.basis}
                            </dd>
                          </div>
                          <div>
                            <dt className="font-medium">Allowance</dt>
                            <dd className="mt-1 text-muted-foreground">
                              {item.allowance}
                            </dd>
                          </div>
                          <div>
                            <dt className="font-medium">Important note</dt>
                            <dd className="mt-1 text-muted-foreground">
                              {item.note}
                            </dd>
                          </div>
                        </dl>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                <div className="mt-5">
                  <EvidenceNote>
                    Confirm current currency, taxes, billing frequency, usage
                    definitions, add-ons, and contract terms directly with{' '}
                    {data.name}.
                  </EvidenceNote>
                </div>
              </ReviewSection>
              {data.sections.map((s) => (
                <ReviewSection
                  code={s.code}
                  description={s.description}
                  id={s.id}
                  key={s.id}
                  title={s.title}
                >
                  {s.paragraphs.map((p) => (
                    <p className="mt-4 first:mt-0 leading-7" key={p}>
                      {p}
                    </p>
                  ))}
                  {s.bullets ? (
                    <ul className="mt-5 space-y-3 text-sm leading-6 text-muted-foreground">
                      {s.bullets.map((x) => (
                        <li key={x}>— {x}</li>
                      ))}
                    </ul>
                  ) : null}
                  {s.evidence ? (
                    <div className="mt-6">
                      <EvidenceNote>{s.evidence}</EvidenceNote>
                    </div>
                  ) : null}
                </ReviewSection>
              ))}
              <ReviewSection
                code="D0"
                id="decision"
                title="Scenario-based decision guidance"
                description="Use the documented operating model to decide whether this product belongs on the shortlist."
              >
                <div className="hidden overflow-x-auto border border-border sm:block">
                  <table className="w-full min-w-[38rem] text-left text-sm">
                    <caption className="sr-only">Decision scenarios</caption>
                    <thead className="bg-muted">
                      <tr>
                        <th className="p-4" scope="col">
                          Scenario
                        </th>
                        <th className="p-4" scope="col">
                          Fit
                        </th>
                        <th className="p-4" scope="col">
                          Why
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.scenarios.map((x) => (
                        <tr className="border-t border-border" key={x.scenario}>
                          <th className="p-4" scope="row">
                            {x.scenario}
                          </th>
                          <td className="p-4">{x.fit}</td>
                          <td className="p-4 text-muted-foreground">{x.why}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="grid gap-4 sm:hidden">
                  {data.scenarios.map((scenario) => (
                    <Card key={scenario.scenario}>
                      <CardContent>
                        <h3 className="font-semibold">{scenario.scenario}</h3>
                        <p className="mt-2 text-xs font-semibold tracking-wide text-accent-strong uppercase">
                          {scenario.fit}
                        </p>
                        <p className="mt-3 text-sm leading-6 text-muted-foreground">
                          {scenario.why}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </ReviewSection>
              {data.strengths?.length || data.limitations?.length ? (
                <ReviewSection
                  code="T0"
                  id="tradeoffs"
                  title="Strengths and limitations"
                  description="Racklio analysis of where the documented product model helps and where it introduces trade-offs."
                >
                  <div className="grid gap-5 md:grid-cols-2 [&>div:first-child]:border-mint-deep/20 [&>div:last-child]:border-brand/20">
                    <Card>
                      <CardContent>
                        <h3 className="font-semibold">Analytical strengths</h3>
                        <ul className="mt-4 space-y-3 text-sm leading-6 text-muted-foreground">
                          {data.strengths?.map((item) => (
                            <li key={item}>— {item}</li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent>
                        <h3 className="font-semibold">
                          Meaningful limitations
                        </h3>
                        <ul className="mt-4 space-y-3 text-sm leading-6 text-muted-foreground">
                          {data.limitations?.map((item) => (
                            <li key={item}>— {item}</li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </ReviewSection>
              ) : null}
              {data.alternatives?.length ? (
                <ReviewSection
                  code="A1"
                  id="alternatives"
                  title="Alternatives to consider"
                  description="Category overlap does not make products interchangeable; start with the workflow difference."
                >
                  <div className="grid gap-4 sm:grid-cols-2">
                    {data.alternatives.map((alternative) => (
                      <Card key={alternative.title}>
                        <CardContent>
                          <h3 className="font-semibold">
                            {alternative.href ? (
                              <Link href={alternative.href}>
                                {alternative.title}
                              </Link>
                            ) : (
                              alternative.title
                            )}
                          </h3>
                          <p className="mt-3 text-sm leading-6 text-muted-foreground">
                            {alternative.description}
                          </p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </ReviewSection>
              ) : null}
              <ReviewSection
                code="F0"
                id="faq"
                title="Frequently asked questions"
                description="Direct answers to practical buyer questions."
              >
                <div className="divide-y divide-border border-y border-border">
                  {data.faqs.map((x) => (
                    <section className="py-6" key={x.question}>
                      <h3 className="font-semibold">{x.question}</h3>
                      <p className="mt-3 text-sm leading-6 text-muted-foreground">
                        {x.answer}
                      </p>
                    </section>
                  ))}
                </div>
              </ReviewSection>
              <ReviewSection
                code="S0"
                id="sources"
                title="Sources and methodology"
                description="Provider-primary research, not fabricated product testing."
              >
                <p className="leading-7">
                  Sources accessed {verificationDate}. Provider statements
                  remain attributed; Racklio analysis is conditional on the
                  documented facts.
                </p>
                <ol className="mt-6 space-y-3 text-sm">
                  {data.sources.map((x, i) => (
                    <li id={`source-${i + 1}`} key={x.href}>
                      [{i + 1}]{' '}
                      <a
                        className="underline underline-offset-4"
                        href={x.href}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        {x.title}
                      </a>
                    </li>
                  ))}
                </ol>
                <p className="mt-7 border-l-2 border-accent pl-5 text-sm leading-6 text-muted-foreground">
                  Racklio has not represented this review as hands-on testing.
                  Read the <Link href="/methodology">Methodology</Link>,{' '}
                  <Link href="/editorial-standards">Editorial Standards</Link>,
                  and{' '}
                  <Link href="/affiliate-disclosure">Affiliate Disclosure</Link>
                  .
                </p>
              </ReviewSection>
            </article>
          </div>
        </Container>
      </Section>
    </PageLayout>
  );
}
