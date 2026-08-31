import { useEffect } from 'react';
import {
  DecisionSummary,
  deriveTrueCostFactors,
  EvidenceBlock,
  PreferredSourceCTA,
  ProviderAction,
  RelatedDecisionLinks,
  SectionNavigation,
  TrueCostFactors,
  VerificationStrip,
} from '@/components/editorial';
import { ProductLogo } from '@/components/home';
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
import { getProviderUrl, type CoreProvider } from '@/lib/provider-links';
import {
  containsInactiveProductReference,
  getActiveTerritoryLinks,
  isActiveDiscoveryPath,
} from '@/lib/active-software-inventory';

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
  providerKey?: CoreProvider;
  video?: {
    embedUrl: string;
    title: string;
    heading: string;
    description: string;
    eyebrow?: string;
    note?: string;
    sectionId?: string;
    allow?: string;
    referrerPolicy?: 'strict-origin-when-cross-origin';
  };
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
    contextualLink?: { title: string; href: string };
  }[];
  scenarios: { scenario: string; fit: string; why: string }[];
  faqs: { question: string; answer: string }[];
  sources: { title: string; href: string }[];
  relatedComparisons?: { title: string; href: string }[];
  verificationDate?: string;
  schemaDate?: string;
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
  const activeCategoryLinks = getActiveTerritoryLinks([data.name]);
  const primaryCategory = activeCategoryLinks[0] ?? data.categoryLinks?.[0];
  const activeAlternatives = data.alternatives?.filter(
    (alternative) =>
      !containsInactiveProductReference(JSON.stringify(alternative)) &&
      (!alternative.href || isActiveDiscoveryPath(alternative.href)),
  );
  const commercialUrl = data.providerKey
    ? getProviderUrl(data.providerKey)
    : data.officialUrl;
  const usesAffiliateLink = commercialUrl !== data.officialUrl;
  const quickDecision = [
    {
      label: 'Best suited for',
      text:
        data.idealUser ?? data.fit[0] ?? 'Verify the documented business fit',
    },
    {
      label: 'Consider another option if',
      text:
        data.notFit[0] ?? 'Your requirements fall outside the documented scope',
    },
    {
      label: 'Main trade-off',
      text:
        data.limitations?.[0] ??
        data.summary.find((item) =>
          /tradeoff|limitation|verify/i.test(item.label),
        )?.text ??
        data.notFit[0] ??
        'Confirm material limits before purchase',
    },
    {
      label: 'Pricing model',
      text:
        data.pricingModel ?? data.pricing[0]?.basis ?? 'Verify current terms',
    },
    { label: 'Last verified', text: verificationDate },
  ];
  const pricingText = [
    ...data.pricing.flatMap((item) => [item.basis, item.allowance, item.note]),
    data.pricingModel ?? '',
    ...data.summary.map((item) => item.text),
  ]
    .join(' ')
    .toLowerCase();
  const pricingFactors = deriveTrueCostFactors(pricingText);
  const tradeoffsId = data.sections.some(
    (section) => section.id === 'tradeoffs',
  )
    ? 'review-tradeoffs'
    : 'tradeoffs';
  const frameworkSectionIds = new Set([
    ...(data.video?.sectionId ? [data.video.sectionId] : []),
    'overview',
    ...(data.capabilities?.length ? ['capabilities'] : []),
    'pricing',
    'decision',
    ...(data.strengths?.length || data.limitations?.length
      ? [tradeoffsId]
      : []),
    ...(data.alternatives?.length ? ['alternatives'] : []),
    'faq',
    'sources',
  ]);
  const resolvedSections = data.sections.map((section) => {
    let resolvedId = section.id;

    while (frameworkSectionIds.has(resolvedId)) {
      resolvedId = `review-${resolvedId}`;
    }

    frameworkSectionIds.add(resolvedId);
    return { ...section, resolvedId };
  });
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
    datePublished: data.schemaDate ?? '2026-08-13',
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
    ...(data.video?.sectionId ? [[data.video.sectionId, 'Video review']] : []),
    ['overview', 'At a glance'],
    ...(data.capabilities?.length
      ? [['capabilities', 'Key capabilities']]
      : []),
    ['pricing', 'Pricing and billing'],
    ...resolvedSections.map((section) => [section.resolvedId, section.title]),
    ['decision', 'Decision guidance'],
    ...(data.strengths?.length || data.limitations?.length
      ? [[tradeoffsId, 'Strengths and limitations']]
      : []),
    ...(data.alternatives?.length ? [['alternatives', 'Alternatives']] : []),
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
            className="py-2 text-xs text-muted-foreground"
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
        className="border-b border-border bg-[linear-gradient(120deg,var(--color-surface)_0%,var(--color-surface-mint)_52%,var(--color-surface-soft)_100%)] py-5 sm:py-7 lg:py-8"
        spacing="none"
      >
        <Container className="min-w-0 max-w-full">
          <div className="grid min-w-0 max-w-full items-start gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(20rem,0.85fr)] lg:gap-8">
            <div className="min-w-0 max-w-full">
              <div className="flex min-w-0 items-center gap-2.5 rounded-2xl border border-brand/15 bg-white/75 p-2.5 shadow-card sm:gap-3 sm:p-3">
                <ProductLogo loading="eager" name={data.name} size="md" />
                <div className="min-w-0">
                  <p className="font-semibold tracking-[-0.02em]">
                    {data.name}
                  </p>
                  <div className="mt-1 flex flex-wrap items-center gap-2 text-[0.68rem] font-semibold tracking-[0.1em] uppercase">
                    <span className="rounded-full bg-accent-subtle px-2.5 py-0.5 text-brand">
                      {primaryCategory?.title ?? data.category}
                    </span>
                    <span className="text-muted-foreground">
                      Evidence-first review
                    </span>
                  </div>
                </div>
              </div>
              {activeCategoryLinks.length ? (
                <nav
                  aria-label="Related software research areas"
                  className="mt-3 flex flex-wrap gap-x-4 gap-y-1.5 text-sm"
                >
                  {activeCategoryLinks.map((category) => (
                    <Link href={category.href} key={category.href}>
                      {category.title}
                    </Link>
                  ))}
                </nav>
              ) : null}
              <h1 className="mt-4 max-w-3xl break-words text-[clamp(2.25rem,9vw,2.75rem)] leading-[1.05] font-semibold tracking-[-0.04em] sm:text-[clamp(2.625rem,3.75vw,3.5rem)] sm:leading-[1.03]">
                {data.headline}
              </h1>
              <p className="mt-4 max-w-xl break-words text-base leading-7 text-muted-foreground sm:text-lg sm:leading-7">
                {data.dek}
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <ButtonLink href="#overview" variant="secondary">
                  See whether {data.name} fits
                </ButtonLink>
                <ButtonLink href="#decision" variant="secondary">
                  Find your scenario
                </ButtonLink>
              </div>
              <p className="mt-3 break-words text-xs leading-5 text-muted-foreground">
                {usesAffiliateLink
                  ? 'Affiliate disclosure: Racklio may earn a commission if you use this commercial link, at no additional cost to you. Affiliate status does not influence this review.'
                  : 'Official link. No paid ranking or score. Racklio may earn from eligible links in the future.'}
              </p>
            </div>
            <DecisionSummary
              footer={
                <ProviderAction
                  affiliate={usesAffiliateLink}
                  href={commercialUrl}
                  name={data.name}
                  secondaryHref="#pricing"
                  secondaryLabel="See the real cost"
                  variant="compact"
                />
              }
              items={quickDecision}
              title={`Should ${data.name} make your shortlist?`}
            />
          </div>
          <div className="mt-5">
            <VerificationStrip date={verificationDate} />
          </div>
        </Container>
      </Section>
      {data.video ? (
        <Section className="border-b border-border" spacing="sm">
          <Container>
            <section
              aria-labelledby="review-video-heading"
              className="mx-auto max-w-4xl"
              id={data.video.sectionId}
            >
              {data.video.eyebrow ? (
                <p className="mb-3 text-[0.68rem] font-bold tracking-[0.12em] text-mint-deep uppercase">
                  {data.video.eyebrow}
                </p>
              ) : null}
              <h2
                className="text-2xl font-semibold tracking-[-0.03em] sm:text-3xl"
                id="review-video-heading"
              >
                {data.video.heading}
              </h2>
              <p className="mt-3 max-w-3xl leading-7 text-muted-foreground">
                {data.video.description}
              </p>
              <div className="mt-6 aspect-video w-full overflow-hidden rounded-xl border border-brand/20 bg-navy shadow-card">
                <iframe
                  allow={
                    data.video.allow ??
                    'encrypted-media; picture-in-picture; web-share'
                  }
                  allowFullScreen
                  className="h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy={data.video.referrerPolicy}
                  src={data.video.embedUrl}
                  title={data.video.title}
                />
              </div>
              {data.video.note ? (
                <p className="mt-3 text-xs font-medium tracking-[0.04em] text-muted-foreground">
                  {data.video.note}
                </p>
              ) : null}
            </section>
          </Container>
        </Section>
      ) : null}
      <Section spacing="md">
        <Container>
          <div className="grid min-w-0 max-w-full gap-8 lg:grid-cols-[15rem_minmax(0,1fr)] lg:gap-14">
            <aside className="min-w-0 max-w-full">
              <SectionNavigation items={toc} label="Review sections" />
            </aside>
            <article className="min-w-0 max-w-full space-y-8 sm:space-y-9">
              <ReviewSection
                code="A0"
                id="overview"
                title="The short answer"
                description={`See who should shortlist ${data.name}, who should look elsewhere, and why.`}
              >
                <div className="grid min-w-0 max-w-full gap-5 md:grid-cols-2">
                  <Card className="border-mint-deep/20 bg-mint-subtle/30">
                    <CardContent>
                      <p className="text-[0.68rem] font-bold tracking-[0.12em] text-mint-deep uppercase">
                        Best fit
                      </p>
                      <h3 className="mt-2 font-semibold">Consider it when</h3>
                      <ul className="mt-4 min-w-0 space-y-3 break-words text-sm leading-6 text-muted-foreground">
                        {data.fit.map((x) => (
                          <li key={x}>— {x}</li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                  <Card className="border-brand/15 bg-surface-raised">
                    <CardContent>
                      <p className="text-[0.68rem] font-bold tracking-[0.12em] text-muted-foreground uppercase">
                        Watch out
                      </p>
                      <h3 className="mt-2 font-semibold">
                        Look elsewhere when
                      </h3>
                      <ul className="mt-4 min-w-0 space-y-3 break-words text-sm leading-6 text-muted-foreground">
                        {data.notFit.map((x) => (
                          <li key={x}>— {x}</li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </ReviewSection>
              {data.capabilities?.length ? (
                <ReviewSection
                  code="C0"
                  id="capabilities"
                  title="What you are actually buying"
                  description="The provider-documented capabilities that change the operating fit."
                >
                  <div className="grid min-w-0 max-w-full gap-4 sm:grid-cols-2">
                    {data.capabilities.map((capability) => (
                      <Card key={capability.title}>
                        <CardContent>
                          <h3 className="break-words font-semibold">
                            {capability.title}
                          </h3>
                          <p className="mt-3 break-words text-sm leading-6 text-muted-foreground">
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
                title="What it will actually cost"
                description={`Pricing verified: ${verificationDate}. Start with the billing unit, allowances, and conditions—not the headline price alone.`}
              >
                <div className="mb-6">
                  <TrueCostFactors factors={pricingFactors} />
                </div>
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
                <div className="grid min-w-0 max-w-full gap-4 sm:hidden">
                  {data.pricing.map((item) => (
                    <Card key={item.plan}>
                      <CardContent>
                        <h3 className="break-words font-semibold">
                          {item.plan}
                        </h3>
                        <dl className="mt-4 space-y-3 text-sm">
                          <div>
                            <dt className="font-medium">Billing basis</dt>
                            <dd className="mt-1 break-words text-muted-foreground">
                              {item.basis}
                            </dd>
                          </div>
                          <div>
                            <dt className="font-medium">Allowance</dt>
                            <dd className="mt-1 break-words text-muted-foreground">
                              {item.allowance}
                            </dd>
                          </div>
                          <div>
                            <dt className="font-medium">Important note</dt>
                            <dd className="mt-1 break-words text-muted-foreground">
                              {item.note}
                            </dd>
                          </div>
                        </dl>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                <div className="mt-5">
                  <EvidenceNote label="Provider fact">
                    Confirm current currency, taxes, billing frequency, usage
                    definitions, add-ons, and contract terms directly with{' '}
                    {data.name}.
                  </EvidenceNote>
                </div>
              </ReviewSection>
              <ProviderAction
                actionLabel={`See current ${data.name} plans and limits`}
                affiliate={usesAffiliateLink}
                href={commercialUrl}
                name={data.name}
                secondaryHref="#decision"
                secondaryLabel="Match your scenario"
                showDisclosure={false}
                variant="compact"
              />
              {resolvedSections.map((s) => (
                <ReviewSection
                  code={s.code}
                  description={s.description}
                  id={s.resolvedId}
                  key={s.resolvedId}
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
                  {s.bullets ? (
                    <ul className="mt-5 min-w-0 space-y-3 break-words text-sm leading-6 text-muted-foreground">
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
                code="D0"
                id="decision"
                title={`Is ${data.name} right for your situation?`}
                description="Find the scenario closest to your team, then use the documented operating model to decide whether the product belongs on your shortlist."
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
                <div className="grid min-w-0 max-w-full gap-4 sm:hidden">
                  {data.scenarios.map((scenario) => (
                    <Card key={scenario.scenario}>
                      <CardContent>
                        <h3 className="break-words font-semibold">
                          {scenario.scenario}
                        </h3>
                        <p className="mt-2 break-words text-xs font-semibold tracking-wide text-accent-strong uppercase">
                          {scenario.fit}
                        </p>
                        <p className="mt-3 break-words text-sm leading-6 text-muted-foreground">
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
                  id={tradeoffsId}
                  title="Where the fit holds—and where it breaks"
                  description="Racklio analysis of the documented strengths buyers gain and the trade-offs they accept."
                >
                  <div className="grid min-w-0 max-w-full gap-5 md:grid-cols-2">
                    <EvidenceBlock label="Strength" tone="fact">
                      <h3 className="font-semibold text-foreground">
                        Analytical strengths
                      </h3>
                      <ul className="mt-4 min-w-0 space-y-3 break-words text-sm leading-6 text-muted-foreground">
                        {data.strengths?.map((item) => (
                          <li key={item}>— {item}</li>
                        ))}
                      </ul>
                    </EvidenceBlock>
                    <EvidenceBlock label="Limitation" tone="limitation">
                      <h3 className="font-semibold text-foreground">
                        Meaningful limitations
                      </h3>
                      <ul className="mt-4 min-w-0 space-y-3 break-words text-sm leading-6 text-muted-foreground">
                        {data.limitations?.map((item) => (
                          <li key={item}>— {item}</li>
                        ))}
                      </ul>
                    </EvidenceBlock>
                  </div>
                </ReviewSection>
              ) : null}
              {activeAlternatives?.length ? (
                <ReviewSection
                  code="A1"
                  id="alternatives"
                  title="If the fit breaks, look here"
                  description="Research-area overlap does not make products interchangeable. Start with the workflow or cost condition that makes this option a poor fit."
                >
                  <div className="grid min-w-0 max-w-full gap-4 sm:grid-cols-2">
                    {activeAlternatives.map((alternative) => (
                      <Card key={alternative.title}>
                        <CardContent>
                          <h3 className="break-words font-semibold">
                            {alternative.href ? (
                              <Link href={alternative.href}>
                                {alternative.title}
                              </Link>
                            ) : (
                              alternative.title
                            )}
                          </h3>
                          <p className="mt-3 break-words text-sm leading-6 text-muted-foreground">
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
              <ProviderAction
                actionLabel={`Visit ${data.name}`}
                affiliate={usesAffiliateLink}
                fit={data.fit[0]}
                href={commercialUrl}
                name={data.name}
                secondaryHref="#pricing"
                secondaryLabel="See the real cost"
                showDisclosure={false}
                watchOut={data.notFit[0]}
              />
              <ReviewSection
                code="S0"
                id="sources"
                title="Check the evidence"
                description="Provider-primary sources, visible verification dates, and no fabricated product testing."
              >
                <p className="break-words leading-7">
                  Sources accessed {verificationDate}. Provider statements
                  remain attributed; Racklio analysis is conditional on the
                  documented facts.
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
                <EvidenceBlock label="Racklio analysis" tone="analysis">
                  Racklio has not represented this review as hands-on testing.
                  Read the <Link href="/methodology">Methodology</Link>,{' '}
                  <Link href="/editorial-standards">Editorial Standards</Link>,
                  and{' '}
                  <Link href="/affiliate-disclosure">Affiliate Disclosure</Link>
                  .
                </EvidenceBlock>
                <div className="mt-8">
                  <RelatedDecisionLinks links={data.relatedComparisons ?? []} />
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
