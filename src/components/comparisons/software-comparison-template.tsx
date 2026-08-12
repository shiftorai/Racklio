import { useEffect } from 'react';
import { ResearchMarker } from '@/components/brand';
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

export type ComparisonData = {
  slug: string;
  a: string;
  b: string;
  category: string;
  headline: string;
  dek: string;
  metaTitle: string;
  metaDescription: string;
  aUrl: string;
  bUrl: string;
  aReview?: string;
  bReview?: string;
  summary: { label: string; text: string }[];
  factors: { factor: string; a: string; b: string; relevance: string }[];
  sections: {
    id: string;
    code: string;
    title: string;
    description: string;
    paragraphs: string[];
    evidence?: string;
  }[];
  scenarios: { scenario: string; lean: string; why: string }[];
  faqs: { question: string; answer: string }[];
  sources: { title: string; href: string }[];
};

export function SoftwareComparisonTemplate({ data }: { data: ComparisonData }) {
  const canonical = `https://racklio.com/comparisons/${data.slug}`;
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
      datePublished: '2026-08-13',
      dateModified: '2026-08-13',
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
    <PageLayout footer={<SiteFooter />} header={<SiteHeader />}>
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
      <div className="border-b border-border bg-surface-raised">
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
        className="border-b border-border bg-surface-subtle"
        spacing="md"
      >
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_0.72fr] lg:gap-16">
            <div>
              <ResearchMarker code="CP" label={`${data.category} comparison`} />
              <h1 className="mt-6 text-4xl leading-tight font-semibold tracking-[-0.045em] sm:text-5xl">
                {data.headline}
              </h1>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                {data.dek}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <ButtonLink href="#overview">Compare the evidence</ButtonLink>
                <ButtonLink href="#scenarios" variant="secondary">
                  See scenario guidance
                </ButtonLink>
              </div>
              <p className="mt-4 text-xs leading-5 text-muted-foreground">
                Independent editorial comparison. No paid ranking or score.
                Outbound provider links are not affiliate links at publication.
              </p>
            </div>
            <Card>
              <CardContent>
                <p className="text-xs font-semibold tracking-[0.14em] text-accent-strong uppercase">
                  Decision summary
                </p>
                <dl className="mt-5 space-y-5">
                  {data.summary.map((x) => (
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
              <nav
                aria-label="Comparison sections"
                className="lg:sticky lg:top-6"
              >
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
                code="D0"
                id="overview"
                title="Decision snapshot"
                description={`The documented differences between ${data.a} and ${data.b} that matter most.`}
              >
                <div className="overflow-x-auto border border-border">
                  <table className="w-full min-w-[50rem] text-left text-sm">
                    <caption className="sr-only">
                      {data.a} and {data.b} decision factors
                    </caption>
                    <thead className="bg-muted">
                      <tr>
                        {['Factor', data.a, data.b, 'Decision relevance'].map(
                          (x) => (
                            <th className="p-4" key={x} scope="col">
                              {x}
                            </th>
                          ),
                        )}
                      </tr>
                    </thead>
                    <tbody>
                      {data.factors.map((x) => (
                        <tr className="border-t border-border" key={x.factor}>
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
                <div className="mt-5">
                  <EvidenceNote>
                    Pricing verified: August 2026. Confirm currency, taxes,
                    usage definitions, add-ons, availability, and contract terms
                    directly with each provider.
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
                  {s.evidence ? (
                    <div className="mt-6">
                      <EvidenceNote>{s.evidence}</EvidenceNote>
                    </div>
                  ) : null}
                </ReviewSection>
              ))}
              <ReviewSection
                code="M0"
                id="scenarios"
                title="Scenario-based decision matrix"
                description="Conditional guidance based on documented product scope, billing, and workflow."
              >
                <div className="overflow-x-auto border border-border">
                  <table className="w-full min-w-[38rem] text-left text-sm">
                    <caption className="sr-only">Decision scenarios</caption>
                    <thead className="bg-muted">
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
                          <td className="p-4">{x.lean}</td>
                          <td className="p-4 text-muted-foreground">{x.why}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </ReviewSection>
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
                  Sources accessed August 13, 2026. Provider statements are
                  identified as provider facts; decision guidance is Racklio
                  analysis.
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
                <p className="mt-7 border-l-2 border-accent pl-5 text-sm leading-6 text-muted-foreground">
                  Racklio has not represented this comparison as hands-on
                  testing. Read the <Link href="/methodology">Methodology</Link>
                  , <Link href="/editorial-standards">Editorial Standards</Link>
                  , and{' '}
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
