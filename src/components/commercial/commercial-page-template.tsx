import { useEffect } from 'react';
import { ResearchMarker } from '@/components/brand';
import {
  DecisionSummary,
  deriveTrueCostFactors,
  EvidenceBlock,
  ProductIdentity,
  RelatedDecisionLinks,
  SectionNavigation,
  TrueCostFactors,
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
import { getProviderUrl, type CoreProvider } from '@/lib/provider-links';

export type CommercialPageData = {
  path: string;
  breadcrumbParent: { title: string; href: string };
  code: string;
  eyebrow: string;
  headline: string;
  dek: string;
  metaTitle: string;
  metaDescription: string;
  verificationDate: string;
  schemaDate?: string;
  provider: string;
  providerKey?: CoreProvider;
  officialUrl: string;
  categoryLinks: { title: string; href: string }[];
  summary: { label: string; text: string }[];
  table: {
    caption: string;
    columns: string[];
    rows: string[][];
  };
  sections: {
    id: string;
    code: string;
    title: string;
    description: string;
    paragraphs: string[];
    evidence?: string;
    contextualLink?: { title: string; href: string };
  }[];
  scenarios: { scenario: string; guidance: string; why: string }[];
  faqs: { question: string; answer: string }[];
  sources: { title: string; href: string }[];
  related: { title: string; href: string }[];
};

export function CommercialPageTemplate({ data }: { data: CommercialPageData }) {
  const canonical = `https://racklio.com${data.path}`;
  const commercialUrl = data.providerKey
    ? getProviderUrl(data.providerKey)
    : data.officialUrl;
  const usesAffiliateLink = commercialUrl !== data.officialUrl;
  const isPricingGuide = data.path.startsWith('/guides/');
  const isAlternativesGuide = data.path.startsWith('/alternatives/');
  const contentType = isPricingGuide
    ? 'Pricing guide'
    : isAlternativesGuide
      ? 'Alternatives guide'
      : data.eyebrow;
  const commercialText = [
    ...data.table.rows.flat(),
    ...data.summary.flatMap((item) => [item.label, item.text]),
  ]
    .join(' ')
    .toLowerCase();
  const trueCostFactors = deriveTrueCostFactors(commercialText);
  const summaryItems = [
    ...data.summary.slice(0, 4),
    { label: 'Last verified', text: data.verificationDate },
  ];
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
      datePublished: data.schemaDate ?? '2026-08-14',
      dateModified: data.schemaDate ?? '2026-08-14',
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
          name: data.breadcrumbParent.title,
          item: `https://racklio.com${data.breadcrumbParent.href}`,
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: data.headline,
          item: canonical,
        },
      ],
    },
  ];
  const toc = [
    ['overview', 'Decision snapshot'],
    ...data.sections.map((section) => [section.id, section.title]),
    ['scenarios', 'Scenario guidance'],
    ['faq', 'Buyer questions'],
    ['sources', 'Sources reviewed'],
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
      <meta name="twitter:title" content={data.metaTitle} />
      <meta name="twitter:description" content={data.metaDescription} />
      {schemas.map((schema) => (
        <script
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          key={schema['@type']}
          type="application/ld+json"
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
                <Link href={data.breadcrumbParent.href}>
                  {data.breadcrumbParent.title}
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page">{data.provider}</li>
            </ol>
          </nav>
        </Container>
      </div>
      <Section
        className="border-b border-border bg-[linear-gradient(120deg,var(--color-surface),var(--color-mint-subtle))] py-9 sm:py-11 lg:py-12"
        spacing="none"
      >
        <Container>
          <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(22rem,0.85fr)] lg:gap-12">
            <div>
              <ProductIdentity
                category={data.categoryLinks[0]?.title ?? 'Business software'}
                contentType={contentType}
                name={data.provider}
              />
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
              <div className="mt-5">
                <ResearchMarker code={data.code} label={data.eyebrow} />
              </div>
              <h1 className="mt-5 max-w-3xl text-4xl leading-[1.08] font-semibold tracking-[-0.045em] sm:text-5xl">
                {data.headline}
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
                {data.dek}
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <ButtonLink href="#overview">Review the evidence</ButtonLink>
                <ButtonLink href="#scenarios" variant="secondary">
                  See decision scenarios
                </ButtonLink>
              </div>
              <p className="mt-4 text-xs leading-5 text-muted-foreground">
                Independent editorial analysis. No paid ranking or score.
                Pricing verified {data.verificationDate}.
              </p>
            </div>
            <DecisionSummary
              items={summaryItems}
              title={
                isPricingGuide
                  ? 'Pricing decision'
                  : isAlternativesGuide
                    ? 'When alternatives matter'
                    : 'Decision summary'
              }
            />
          </div>
          <div className="mt-8">
            <VerificationStrip date={data.verificationDate} />
          </div>
        </Container>
      </Section>
      <Section spacing="md">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[15rem_minmax(0,1fr)] lg:gap-14">
            <aside>
              <SectionNavigation items={toc} label="Page sections" />
            </aside>
            <article className="min-w-0 space-y-10">
              <ReviewSection
                code="D0"
                description="The published facts and decision implications that matter first."
                id="overview"
                title="Decision snapshot"
              >
                {isPricingGuide ? (
                  <div className="mb-6">
                    <TrueCostFactors factors={trueCostFactors} />
                  </div>
                ) : null}
                {isAlternativesGuide ? (
                  <div className="grid gap-4 md:grid-cols-2">
                    {data.table.rows.map((row) => (
                      <article
                        className="rounded-2xl border border-brand/20 bg-white p-5 shadow-card"
                        key={row[0]}
                      >
                        <p className="text-[0.68rem] font-bold tracking-[0.1em] text-mint-deep uppercase">
                          Alternative path
                        </p>
                        <h3 className="mt-3 text-lg font-semibold">{row[0]}</h3>
                        <dl className="mt-4 space-y-3 text-sm">
                          {row.slice(1).map((cell, index) => (
                            <div
                              className="border-t border-border pt-3"
                              key={`${row[0]}-${data.table.columns[index + 1]}`}
                            >
                              <dt className="text-xs font-semibold text-muted-foreground">
                                {data.table.columns[index + 1]}
                              </dt>
                              <dd className="mt-1.5 leading-6">{cell}</dd>
                            </div>
                          ))}
                        </dl>
                      </article>
                    ))}
                  </div>
                ) : (
                  <div
                    aria-label={`${data.provider} decision table`}
                    className="overflow-x-auto rounded-xl border border-brand/20 bg-white"
                    role="region"
                    tabIndex={0}
                  >
                    <table className="w-full min-w-[46rem] text-left text-sm">
                      <caption className="sr-only">
                        {data.table.caption}
                      </caption>
                      <thead className="bg-accent-subtle">
                        <tr>
                          {data.table.columns.map((column) => (
                            <th className="p-4" key={column} scope="col">
                              {column}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {data.table.rows.map((row) => (
                          <tr className="border-t border-border" key={row[0]}>
                            {row.map((cell, index) =>
                              index === 0 ? (
                                <th className="p-4" key={cell} scope="row">
                                  {cell}
                                </th>
                              ) : (
                                <td
                                  className="p-4 text-muted-foreground"
                                  key={`${row[0]}-${index}`}
                                >
                                  {cell}
                                </td>
                              ),
                            )}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
                <div className="mt-5">
                  <EvidenceNote>
                    Current provider documentation is the factual basis.
                    Pricing, limits, taxes, eligibility, and contract terms can
                    change; verify material terms before purchase.
                  </EvidenceNote>
                </div>
              </ReviewSection>
              {data.sections.map((section) => (
                <ReviewSection
                  code={section.code}
                  description={section.description}
                  id={section.id}
                  key={section.id}
                  title={section.title}
                >
                  {section.paragraphs.map((paragraph) => (
                    <p className="mt-4 first:mt-0 leading-7" key={paragraph}>
                      {paragraph}
                    </p>
                  ))}
                  {section.evidence ? (
                    <div className="mt-6">
                      <EvidenceNote>{section.evidence}</EvidenceNote>
                    </div>
                  ) : null}
                  {section.contextualLink ? (
                    <p className="mt-5 text-sm leading-6">
                      <Link href={section.contextualLink.href}>
                        {section.contextualLink.title} →
                      </Link>
                    </p>
                  ) : null}
                </ReviewSection>
              ))}
              <ReviewSection
                code="M0"
                description="Conditional guidance based on documented scope, pricing, and workflow."
                id="scenarios"
                title="Scenario-based decision guidance"
              >
                <div
                  aria-label="Scenario decision table"
                  className="hidden overflow-x-auto rounded-xl border border-brand/20 bg-white sm:block"
                  role="region"
                  tabIndex={0}
                >
                  <table className="w-full min-w-[38rem] text-left text-sm">
                    <caption className="sr-only">
                      Scenario decision guidance
                    </caption>
                    <thead className="bg-accent-subtle">
                      <tr>
                        {['Scenario', 'Guidance', 'Why'].map((column) => (
                          <th className="p-4" key={column} scope="col">
                            {column}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {data.scenarios.map((item) => (
                        <tr
                          className="border-t border-border"
                          key={item.scenario}
                        >
                          <th className="p-4" scope="row">
                            {item.scenario}
                          </th>
                          <td className="p-4">{item.guidance}</td>
                          <td className="p-4 text-muted-foreground">
                            {item.why}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="grid gap-4 sm:hidden">
                  {data.scenarios.map((item) => (
                    <Card key={item.scenario}>
                      <CardContent>
                        <h3 className="font-semibold">{item.scenario}</h3>
                        <p className="mt-2 text-xs font-bold tracking-[0.1em] text-accent-strong uppercase">
                          {item.guidance}
                        </p>
                        <p className="mt-3 text-sm leading-6 text-muted-foreground">
                          {item.why}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </ReviewSection>
              <ReviewSection
                code="F0"
                description="Direct answers to practical purchasing questions."
                id="faq"
                title="Questions buyers ask before choosing"
              >
                <div className="divide-y divide-border border-y border-border">
                  {data.faqs.map((item) => (
                    <section className="py-6" key={item.question}>
                      <h3 className="font-semibold">{item.question}</h3>
                      <p className="mt-3 text-sm leading-6 text-muted-foreground">
                        {item.answer}
                      </p>
                    </section>
                  ))}
                </div>
              </ReviewSection>
              <ReviewSection
                code="S0"
                description="Official provider-controlled pages used for this analysis."
                id="sources"
                title="Sources reviewed"
              >
                <p className="leading-7">
                  Sources accessed {data.verificationDate}. Provider facts and
                  provider claims are separated from Racklio analysis; no
                  hands-on testing is represented.
                </p>
                <ol className="mt-6 space-y-3 text-sm">
                  {data.sources.map((source, index) => (
                    <li key={source.href}>
                      [{index + 1}]{' '}
                      <a
                        className="underline underline-offset-4"
                        href={source.href}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        {source.title}
                      </a>
                    </li>
                  ))}
                </ol>
                <div className="mt-8 flex flex-wrap gap-3">
                  {usesAffiliateLink ? (
                    <ButtonLink
                      href={commercialUrl}
                      rel="sponsored noopener noreferrer"
                      target="_blank"
                    >
                      Visit {data.provider}
                    </ButtonLink>
                  ) : null}
                  {data.related.slice(0, 2).map((link) => (
                    <ButtonLink
                      href={link.href}
                      key={link.href}
                      variant="secondary"
                    >
                      {link.title}
                    </ButtonLink>
                  ))}
                </div>
                <p className="mt-4 text-xs leading-5 text-muted-foreground">
                  {usesAffiliateLink
                    ? 'Affiliate disclosure: Racklio may earn a commission if you use this commercial link, at no additional cost to you. Editorial conclusions remain independent.'
                    : 'The provider link is not an affiliate link at publication.'}{' '}
                  Read Racklio's{' '}
                  <Link href="/affiliate-disclosure">Affiliate Disclosure</Link>
                  .
                </p>
                <div className="mt-8">
                  <EvidenceBlock label="Decision takeaway" tone="takeaway">
                    Use the documented product scope and cost model to decide
                    whether {data.provider} fits the operating requirement.
                    Verify material terms before purchase.
                  </EvidenceBlock>
                </div>
                <div className="mt-8">
                  <RelatedDecisionLinks links={data.related} />
                </div>
              </ReviewSection>
            </article>
          </div>
        </Container>
      </Section>
    </PageLayout>
  );
}
