import { useEffect } from 'react';
import { ResearchMarker } from '@/components/brand';
import { ProductLogo } from '@/components/home';
import {
  ComparisonIdentity,
  DecisionSummary,
  EvidenceBlock,
  KeyDifference,
  PreferredSourceCTA,
  RelatedDecisionLinks,
  SectionNavigation,
  VerificationStrip,
} from '@/components/editorial';
import { PageLayout, SiteFooter, SiteHeader } from '@/components/layout';
import { EvidenceNote } from '@/components/reviews/evidence-note';
import { ReviewSection } from '@/components/reviews/review-section';
import {
  ButtonLink,
  Card,
  CardContent,
  Container,
  Link,
  Section,
} from '@/components/ui';
import {
  getActiveTerritoryLinks,
  isActiveDiscoveryPath,
} from '@/lib/active-software-inventory';

export type ComparisonData = {
  slug: string;
  a: string;
  b: string;
  category: string;
  categoryLinks?: { title: string; href: string }[];
  headline: string;
  dek: string;
  metaTitle: string;
  metaDescription: string;
  aUrl: string;
  bUrl: string;
  aReview?: string;
  bReview?: string;
  verificationDate?: string;
  schemaDate?: string;
  related?: { title: string; href: string }[];
  video?: {
    embedUrl: string;
    title: string;
    heading: string;
    description: string;
  };
  summary: { label: string; text: string }[];
  factors: { factor: string; a: string; b: string; relevance: string }[];
  sections: {
    id: string;
    code: string;
    title: string;
    description: string;
    paragraphs: string[];
    evidence?: string;
    contextualLink?: { title: string; href: string };
  }[];
  scenarios: { scenario: string; lean: string; why: string }[];
  faqs: { question: string; answer: string }[];
  sources: { title: string; href: string }[];
};

export function SoftwareComparisonTemplate({ data }: { data: ComparisonData }) {
  const canonical = `https://racklio.com/comparisons/${data.slug}`;
  const activeCategoryLinks = getActiveTerritoryLinks([data.a, data.b]);
  useEffect(() => {
    const meta = document.querySelector<HTMLMetaElement>(
      'meta[name="description"]',
    );
    const previous = meta?.content;
    if (meta) meta.content = data.metaDescription;
    return () => {
      if (meta && previous) meta.content = previous;
    };
  }, [data.metaDescription]);
  const schemas = [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: data.headline,
      description: data.metaDescription,
      datePublished:
        data.schemaDate ??
        (data.verificationDate ? '2026-08-14' : '2026-08-13'),
      dateModified:
        data.schemaDate ??
        (data.verificationDate ? '2026-08-14' : '2026-08-13'),
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
      about: [
        {
          '@type': 'SoftwareApplication',
          name: data.a,
          applicationCategory: data.category,
          url: data.aUrl,
        },
        {
          '@type': 'SoftwareApplication',
          name: data.b,
          applicationCategory: data.category,
          url: data.bUrl,
        },
      ],
      citation: data.sources.map((source) => source.href),
    },
    {
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
          name: 'Comparisons',
          item: 'https://racklio.com/comparisons',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: `${data.a} vs ${data.b}`,
          item: canonical,
        },
      ],
    },
  ];
  const toc = [
    ['overview', 'Decision snapshot'],
    ...data.sections.map((s) => [s.id, s.title]),
    ['scenarios', 'Scenario matrix'],
    ['faq', 'Frequently asked questions'],
    ['sources', 'Sources'],
  ];
  return (
    <PageLayout
      footer={<SiteFooter showPreferredSource={false} />}
      header={<SiteHeader />}
    >
      <title>{data.metaTitle}</title>
      <link rel="canonical" href={canonical} />
      <meta property="og:type" content="article" />
      <meta property="og:title" content={data.headline} />
      <meta property="og:description" content={data.metaDescription} />
      <meta property="og:url" content={canonical} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={`${data.a} vs ${data.b} | Racklio`} />
      <meta name="twitter:description" content={data.metaDescription} />
      {schemas.map((schema) => (
        <script
          key={schema['@type']}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
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
                <Link href="/comparisons">Comparisons</Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page">
                {data.a} vs {data.b}
              </li>
            </ol>
          </nav>
        </Container>
      </div>
      <Section
        className="border-b border-border bg-[linear-gradient(120deg,var(--color-surface)_0%,var(--color-surface-mint)_52%,var(--color-surface-soft)_100%)] py-7 sm:py-10 lg:py-12"
        spacing="none"
      >
        <Container className="min-w-0 max-w-full">
          <div className="grid min-w-0 max-w-full items-start gap-7 lg:grid-cols-[minmax(0,1fr)_minmax(23rem,0.9fr)] lg:gap-12">
            <div className="min-w-0 max-w-full">
              <div className="rounded-2xl border border-brand/15 bg-white/75 p-3 shadow-card sm:p-4">
                <ComparisonIdentity a={data.a} b={data.b} useProductLogos />
              </div>
              {activeCategoryLinks.length ? (
                <nav
                  aria-label="Related software research areas"
                  className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm"
                >
                  {activeCategoryLinks.map((category) => (
                    <Link href={category.href} key={category.href}>
                      {category.title}
                    </Link>
                  ))}
                </nav>
              ) : null}
              <div className="mt-4">
                <ResearchMarker
                  code="CP"
                  label={`${activeCategoryLinks[0]?.title ?? data.category} comparison`}
                />
              </div>
              <h1 className="mt-4 max-w-4xl break-words text-4xl leading-[1.02] font-semibold tracking-[-0.045em] sm:text-[clamp(3.25rem,5vw,4.75rem)] sm:leading-[0.98]">
                {data.headline}
              </h1>
              <p className="mt-5 max-w-2xl break-words text-lg leading-8 text-muted-foreground sm:text-xl">
                {data.dek}
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <ButtonLink href="#overview" variant="secondary">
                  See the differences that matter
                </ButtonLink>
                <ButtonLink href="#scenarios" variant="secondary">
                  Find your scenario
                </ButtonLink>
              </div>
              <p className="mt-4 break-words text-xs leading-5 text-muted-foreground">
                Independent editorial comparison. No paid ranking or score.
                Outbound provider links are not affiliate links at publication.
              </p>
            </div>
            <DecisionSummary
              items={data.summary}
              title="Which operating model fits?"
            />
          </div>
          <div className="mt-8">
            <VerificationStrip date={data.verificationDate ?? 'August 2026'} />
          </div>
        </Container>
      </Section>
      {data.video ? (
        <Section className="border-b border-border" spacing="sm">
          <Container>
            <section
              aria-labelledby="comparison-video-heading"
              className="mx-auto max-w-4xl"
            >
              <h2
                className="text-2xl font-semibold tracking-[-0.03em] sm:text-3xl"
                id="comparison-video-heading"
              >
                {data.video.heading}
              </h2>
              <p className="mt-3 max-w-3xl leading-7 text-muted-foreground">
                {data.video.description}
              </p>
              <div className="mt-6 aspect-video w-full overflow-hidden rounded-xl border border-brand/20 bg-navy shadow-card">
                <iframe
                  allow="encrypted-media; picture-in-picture; web-share"
                  allowFullScreen
                  className="h-full w-full border-0"
                  loading="lazy"
                  src={data.video.embedUrl}
                  title={data.video.title}
                />
              </div>
            </section>
          </Container>
        </Section>
      ) : null}
      <Section spacing="md">
        <Container>
          <div className="grid min-w-0 max-w-full gap-8 lg:grid-cols-[15rem_minmax(0,1fr)] lg:gap-14">
            <aside className="min-w-0 max-w-full">
              <SectionNavigation items={toc} label="Comparison sections" />
            </aside>
            <article className="min-w-0 max-w-full space-y-9 sm:space-y-10">
              <ReviewSection
                code="D0"
                id="overview"
                title="The decision in one screen"
                description={`The differences between ${data.a} and ${data.b} that can actually change the buying decision.`}
              >
                {data.factors[0] ? (
                  <div className="mb-6">
                    <KeyDifference
                      a={data.a}
                      aText={data.factors[0].a}
                      b={data.b}
                      bText={data.factors[0].b}
                      meaning={data.factors[0].relevance}
                    />
                  </div>
                ) : null}
                <div className="hidden overflow-x-auto rounded-xl border border-brand/20 bg-white sm:block">
                  <table className="w-full min-w-[50rem] text-left text-sm">
                    <caption className="sr-only">
                      {data.a} and {data.b} decision factors
                    </caption>
                    <thead className="bg-accent-subtle">
                      <tr>
                        <th className="p-4" scope="col">
                          Factor
                        </th>
                        {[data.a, data.b].map((name) => (
                          <th className="p-4" key={name} scope="col">
                            <span className="flex items-center gap-2">
                              <ProductLogo name={name} size="sm" />
                              {name}
                            </span>
                          </th>
                        ))}
                        <th className="p-4" scope="col">
                          Decision relevance
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.factors.map((x, index) => (
                        <tr
                          className={
                            index % 2
                              ? 'border-t border-border bg-surface-subtle/70'
                              : 'border-t border-border'
                          }
                          key={x.factor}
                        >
                          <th className="p-4" scope="row">
                            {x.factor}
                          </th>
                          <td className="p-4">{x.a}</td>
                          <td className="p-4">{x.b}</td>
                          <td className="p-4 text-muted-foreground">
                            {x.relevance}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="grid min-w-0 max-w-full gap-3 sm:hidden">
                  {data.factors.map((factor) => (
                    <Card className="border-brand/15" key={factor.factor}>
                      <CardContent className="p-4">
                        <h3 className="break-words font-semibold">
                          {factor.factor}
                        </h3>
                        <dl className="mt-4 space-y-3 text-sm">
                          {[
                            { name: data.a, text: factor.a },
                            { name: data.b, text: factor.b },
                          ].map(({ name, text }) => (
                            <div
                              className="min-w-0 max-w-full border-t border-border pt-3"
                              key={name}
                            >
                              <dt className="flex min-w-0 items-center gap-2 font-semibold">
                                <ProductLogo name={name} size="sm" />
                                <span className="min-w-0 break-words">
                                  {name}
                                </span>
                              </dt>
                              <dd className="mt-1.5 break-words leading-6 text-muted-foreground">
                                {text}
                              </dd>
                            </div>
                          ))}
                          <div className="min-w-0 max-w-full border-t border-border pt-3">
                            <dt className="text-[0.68rem] font-bold tracking-[0.1em] text-mint-deep uppercase">
                              Decision relevance
                            </dt>
                            <dd className="mt-1.5 break-words leading-6 text-muted-foreground">
                              {factor.relevance}
                            </dd>
                          </div>
                        </dl>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                <div className="mt-5">
                  <EvidenceNote>
                    Pricing verified: {data.verificationDate ?? 'August 2026'}.
                    Confirm currency, taxes, usage definitions, add-ons,
                    availability, and contract terms directly with each
                    provider.
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
                    <p
                      className="mt-4 break-words first:mt-0 leading-7"
                      key={p}
                    >
                      {p}
                    </p>
                  ))}
                  {s.evidence ? (
                    <div className="mt-6">
                      <EvidenceNote>{s.evidence}</EvidenceNote>
                    </div>
                  ) : null}
                  {s.contextualLink &&
                  isActiveDiscoveryPath(s.contextualLink.href) ? (
                    <p className="mt-5 text-sm leading-6">
                      <Link href={s.contextualLink.href}>
                        {s.contextualLink.title} →
                      </Link>
                    </p>
                  ) : null}
                </ReviewSection>
              ))}
              <ReviewSection
                code="M0"
                id="scenarios"
                title="Which side fits your situation?"
                description="Match your operating scenario to documented product scope, billing, and workflow—without a universal winner."
              >
                <div className="hidden overflow-x-auto rounded-xl border border-brand/20 bg-white sm:block">
                  <table className="w-full min-w-[38rem] text-left text-sm">
                    <caption className="sr-only">Decision scenarios</caption>
                    <thead className="bg-accent-subtle">
                      <tr>
                        {['Scenario', 'Lean', 'Why'].map((x) => (
                          <th className="p-4" key={x} scope="col">
                            {x}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {data.scenarios.map((x) => (
                        <tr className="border-t border-border" key={x.scenario}>
                          <th className="p-4" scope="row">
                            {x.scenario}
                          </th>
                          <td className="p-4">
                            <span className="inline-flex items-center gap-2">
                              <ProductLogo name={x.lean} size="sm" />
                              {x.lean}
                            </span>
                          </td>
                          <td className="p-4 text-muted-foreground">{x.why}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="grid min-w-0 max-w-full gap-4 sm:hidden">
                  {data.scenarios.map((scenario) => (
                    <Card key={scenario.scenario}>
                      <CardContent>
                        <h3 className="break-words font-semibold">
                          {scenario.scenario}
                        </h3>
                        <p className="mt-3 flex min-w-0 items-center gap-2 break-words text-xs font-bold tracking-[0.1em] text-accent-strong uppercase">
                          <ProductLogo name={scenario.lean} size="sm" />
                          <span className="min-w-0 break-words">
                            Lean: {scenario.lean}
                          </span>
                        </p>
                        <p className="mt-3 break-words text-sm leading-6 text-muted-foreground">
                          {scenario.why}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </ReviewSection>
              <ReviewSection
                code="F0"
                id="faq"
                title="Questions to settle before you choose"
                description="Direct answers to the objections and purchasing conditions that can change the decision."
              >
                <div className="divide-y divide-border border-y border-border">
                  {data.faqs.map((x) => (
                    <section
                      className="min-w-0 max-w-full py-6"
                      key={x.question}
                    >
                      <h3 className="break-words font-semibold">
                        {x.question}
                      </h3>
                      <p className="mt-3 break-words text-sm leading-6 text-muted-foreground">
                        {x.answer}
                      </p>
                    </section>
                  ))}
                </div>
              </ReviewSection>
              <aside className="min-w-0 max-w-full rounded-2xl border border-brand/20 bg-surface-raised p-5 shadow-card sm:p-6">
                <p className="section-eyebrow text-mint-deep">
                  Turn the comparison into a decision
                </p>
                <div className="mt-3 grid min-w-0 gap-4 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
                  <p className="break-words text-sm leading-6 text-muted-foreground">
                    Choose the operating model that matches your workflow, then
                    confirm current scope, pricing, and terms directly with that
                    provider.
                  </p>
                  <div className="flex flex-wrap gap-3 md:justify-end">
                    <ButtonLink
                      data-cta-kind="comparison-provider-action"
                      href={data.aUrl}
                      rel="noopener noreferrer"
                      target="_blank"
                      variant="secondary"
                    >
                      Check {data.a} plans <span aria-hidden="true">↗</span>
                    </ButtonLink>
                    <ButtonLink
                      data-cta-kind="comparison-provider-action"
                      href={data.bUrl}
                      rel="noopener noreferrer"
                      target="_blank"
                      variant="secondary"
                    >
                      Check {data.b} plans <span aria-hidden="true">↗</span>
                    </ButtonLink>
                  </div>
                </div>
              </aside>
              <ReviewSection
                code="S0"
                id="sources"
                title="Check the evidence"
                description="Provider-primary sources, visible verification dates, and no fabricated product testing."
              >
                <p className="break-words leading-7">
                  Sources accessed {data.verificationDate ?? 'August 2026'}.
                  Provider statements are identified as provider facts; decision
                  guidance is Racklio analysis.
                </p>
                <ol className="mt-6 min-w-0 max-w-full space-y-3 break-words text-sm">
                  {data.sources.map((x, i) => (
                    <li
                      className="min-w-0 max-w-full"
                      id={`source-${i + 1}`}
                      key={x.href}
                    >
                      [{i + 1}]{' '}
                      <a
                        className="break-words underline underline-offset-4"
                        href={x.href}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        {x.title}
                      </a>
                    </li>
                  ))}
                </ol>
                <div className="mt-8 flex flex-wrap gap-3">
                  {data.aReview ? (
                    <ButtonLink href={data.aReview} variant="secondary">
                      Read {data.a} review
                    </ButtonLink>
                  ) : (
                    <ButtonLink
                      href={data.aUrl}
                      rel="noopener noreferrer"
                      target="_blank"
                      variant="secondary"
                    >
                      Visit {data.a}
                    </ButtonLink>
                  )}
                  {data.bReview ? (
                    <ButtonLink href={data.bReview} variant="secondary">
                      Read {data.b} review
                    </ButtonLink>
                  ) : (
                    <ButtonLink
                      href={data.bUrl}
                      rel="noopener noreferrer"
                      target="_blank"
                      variant="secondary"
                    >
                      Visit {data.b}
                    </ButtonLink>
                  )}
                </div>
                <div className="mt-8">
                  <EvidenceBlock label="Racklio analysis" tone="analysis">
                    Racklio has not represented this comparison as hands-on
                    testing. Read the{' '}
                    <Link href="/methodology">Methodology</Link>,{' '}
                    <Link href="/editorial-standards">Editorial Standards</Link>
                    , and{' '}
                    <Link href="/affiliate-disclosure">
                      Affiliate Disclosure
                    </Link>
                    .
                  </EvidenceBlock>
                </div>
                <div className="mt-8">
                  <RelatedDecisionLinks links={data.related ?? []} />
                </div>
              </ReviewSection>
              <PreferredSourceCTA />
            </article>
          </div>
        </Container>
      </Section>
    </PageLayout>
  );
}
