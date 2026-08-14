import { useEffect } from 'react';

import { PageLayout, SiteFooter, SiteHeader } from '@/components/layout';
import { ButtonLink, Container, Link } from '@/components/ui';

import { categoryPath } from './category-path';

function useMetaDescription(description: string) {
  useEffect(() => {
    const meta = document.querySelector<HTMLMetaElement>(
      'meta[name="description"]',
    );
    const previous = meta?.content;
    if (meta) meta.content = description;
    return () => {
      if (meta && previous) meta.content = previous;
    };
  }, [description]);
}

export type CategoryLink = {
  title: string;
  description: string;
  href: string;
};

export type SoftwareCategoryData = {
  slug: string;
  code: string;
  title: string;
  shortTitle: string;
  eyebrow: string;
  definition: string;
  introduction: string;
  metaTitle: string;
  metaDescription: string;
  startPaths: CategoryLink[];
  products: CategoryLink[];
  comparisons: CategoryLink[];
  factors: { title: string; description: string }[];
  audience: string[];
  alternatives: string[];
};

function CategoryMetadata({ data }: { data: SoftwareCategoryData }) {
  const canonical = `https://racklio.com${categoryPath(data.slug)}`;
  const schemas = [
    {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: data.title,
      description: data.metaDescription,
      url: canonical,
      isPartOf: {
        '@type': 'WebSite',
        name: 'Racklio',
        url: 'https://racklio.com/',
      },
      publisher: { '@type': 'Organization', name: 'Keleva LLC' },
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
          name: 'Categories',
          item: 'https://racklio.com/#categories',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: data.shortTitle,
          item: canonical,
        },
      ],
    },
  ];

  return (
    <>
      <title>{data.metaTitle}</title>
      <link rel="canonical" href={canonical} />
      <meta name="description" content={data.metaDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={data.metaTitle} />
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
    </>
  );
}

function Breadcrumbs({ current }: { current: string }) {
  return (
    <div className="border-b border-border bg-white">
      <Container size="wide">
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
              <Link href="/#categories">Categories</Link>
            </li>
            <li aria-hidden="true">/</li>
            <li aria-current="page">{current}</li>
          </ol>
        </nav>
      </Container>
    </div>
  );
}

function SectionHeading({
  eyebrow,
  id,
  title,
}: {
  eyebrow: string;
  id: string;
  title: string;
}) {
  return (
    <div>
      <p className="text-xs font-semibold tracking-[0.14em] text-brand uppercase">
        {eyebrow}
      </p>
      <h2
        className="mt-3 text-2xl font-semibold tracking-[-0.04em] sm:text-3xl"
        id={id}
      >
        {title}
      </h2>
    </div>
  );
}

function LinkCards({ items }: { items: CategoryLink[] }) {
  return (
    <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {items.map((item) => (
        <article
          className="flex min-h-48 flex-col rounded-lg border border-border bg-white p-5 shadow-card transition-colors hover:border-brand/30"
          key={item.title}
        >
          <h3 className="text-lg font-semibold tracking-[-0.025em]">
            {item.title}
          </h3>
          <p className="mt-3 text-sm leading-6 text-muted-foreground">
            {item.description}
          </p>
          <Link className="mt-auto pt-5" href={item.href}>
            Explore &rarr;
          </Link>
        </article>
      ))}
    </div>
  );
}

export function CategoryPageTemplate({ data }: { data: SoftwareCategoryData }) {
  useMetaDescription(data.metaDescription);

  return (
    <PageLayout footer={<SiteFooter />} header={<SiteHeader />}>
      <CategoryMetadata data={data} />
      <Breadcrumbs current={data.shortTitle} />

      <section className="relative overflow-hidden border-b border-border bg-white py-10 sm:py-14 lg:py-16">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(circle_at_85%_15%,rgba(124,58,237,.1),transparent_32%)]"
        />
        <Container className="relative" size="wide">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.5fr] lg:items-end lg:gap-16">
            <div>
              <p className="text-xs font-semibold tracking-[0.16em] text-brand uppercase">
                {data.eyebrow}
              </p>
              <h1 className="mt-5 max-w-4xl text-4xl leading-tight font-semibold tracking-[-0.05em] text-balance sm:text-5xl lg:text-6xl">
                {data.title}
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
                {data.definition}
              </p>
            </div>
            <div className="rounded-lg border border-violet-200/70 bg-violet-50/70 p-5 shadow-card">
              <p className="text-xs font-semibold tracking-[0.12em] text-brand uppercase">
                Buyer perspective
              </p>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                {data.introduction}
              </p>
            </div>
          </div>
        </Container>
      </section>

      <div className="bg-surface py-8 sm:py-12">
        <Container className="grid gap-8 sm:gap-10" size="wide">
          <section aria-labelledby="start-heading">
            <SectionHeading
              eyebrow="Start here"
              id="start-heading"
              title="Choose the decision that matches your need"
            />
            <LinkCards items={data.startPaths} />
          </section>

          <section aria-labelledby="software-heading">
            <SectionHeading
              eyebrow="Current coverage"
              id="software-heading"
              title="Featured software research"
            />
            {data.products.length ? (
              <LinkCards items={data.products} />
            ) : (
              <div className="mt-5 rounded-lg border border-border bg-white p-6 shadow-card">
                <p className="font-semibold">
                  Dedicated Racklio reviews are not yet published for this
                  category.
                </p>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">
                  Racklio will add products only after evidence-first coverage
                  is complete. Affiliate availability does not determine
                  inclusion.
                </p>
              </div>
            )}
          </section>

          <section aria-labelledby="comparison-heading">
            <SectionHeading
              eyebrow="Decision comparisons"
              id="comparison-heading"
              title="Relevant comparisons"
            />
            {data.comparisons.length ? (
              <LinkCards items={data.comparisons} />
            ) : (
              <div className="mt-5 rounded-lg border border-border bg-white p-6 shadow-card">
                <p className="font-semibold">
                  No dedicated comparison is currently published for this
                  category.
                </p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  Browse the existing software research while this category is
                  developed.
                </p>
                <Link className="mt-4 inline-block" href="/#reviews">
                  Browse reviews &rarr;
                </Link>
              </div>
            )}
          </section>

          <section aria-labelledby="factors-heading">
            <SectionHeading
              eyebrow="Evaluation framework"
              id="factors-heading"
              title="What to compare"
            />
            <div className="mt-5 grid overflow-hidden rounded-lg border border-border bg-white shadow-card sm:grid-cols-2 lg:grid-cols-3">
              {data.factors.map((factor, index) => (
                <article
                  className="border-b border-border p-5 sm:odd:border-r lg:border-r lg:nth-[3n]:border-r-0"
                  key={factor.title}
                >
                  <p className="text-xs font-semibold text-brand">
                    {String(index + 1).padStart(2, '0')}
                  </p>
                  <h3 className="mt-3 font-semibold">{factor.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {factor.description}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section className="grid gap-4 lg:grid-cols-2">
            <article className="rounded-lg border border-border bg-white p-6 shadow-card">
              <h2 className="text-xl font-semibold tracking-[-0.03em]">
                Who this category is for
              </h2>
              <ul className="mt-5 grid gap-3 text-sm leading-6 text-muted-foreground">
                {data.audience.map((item) => (
                  <li className="border-l-2 border-brand pl-4" key={item}>
                    {item}
                  </li>
                ))}
              </ul>
            </article>
            <article className="rounded-lg border border-border bg-white p-6 shadow-card">
              <h2 className="text-xl font-semibold tracking-[-0.03em]">
                Who may need something else
              </h2>
              <ul className="mt-5 grid gap-3 text-sm leading-6 text-muted-foreground">
                {data.alternatives.map((item) => (
                  <li className="border-l-2 border-border pl-4" key={item}>
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </section>

          <section
            aria-labelledby="trust-heading"
            className="grid items-center gap-5 rounded-lg border border-violet-200/70 bg-violet-50/70 p-6 shadow-card lg:grid-cols-[1fr_auto]"
          >
            <div>
              <h2 className="font-semibold" id="trust-heading">
                Evidence before recommendations
              </h2>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">
                Racklio separates official provider facts from editorial
                analysis and does not sell paid rankings.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <ButtonLink href="/methodology" variant="secondary">
                Methodology
              </ButtonLink>
              <ButtonLink href="/editorial-standards" variant="secondary">
                Editorial Standards
              </ButtonLink>
            </div>
          </section>

          <section
            aria-labelledby="next-heading"
            className="rounded-lg border border-border bg-white p-6 shadow-card sm:p-8"
          >
            <div className="grid items-center gap-6 lg:grid-cols-[1fr_auto]">
              <div>
                <h2
                  className="text-2xl font-semibold tracking-[-0.04em]"
                  id="next-heading"
                >
                  Continue your software decision
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Move from category fit to product evidence and direct
                  comparisons.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="/#reviews">Browse Reviews</ButtonLink>
                <ButtonLink href="/#comparisons" variant="secondary">
                  Browse Comparisons
                </ButtonLink>
                <ButtonLink href="/#best" variant="secondary">
                  Best Software
                </ButtonLink>
              </div>
            </div>
          </section>
        </Container>
      </div>
    </PageLayout>
  );
}

export function CategoryHubTemplate({
  categories,
}: {
  categories: SoftwareCategoryData[];
}) {
  const canonical = 'https://racklio.com/#categories';
  const title = 'Customer Service Software Categories | Racklio';
  const description =
    'Explore Racklio categories for AI customer support, business phone and voice AI, live chat and messaging, and CRM customer engagement software.';
  useMetaDescription(description);
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Customer Service Software Categories',
    description,
    url: canonical,
    hasPart: categories.map((category) => ({
      '@type': 'CollectionPage',
      name: category.title,
      url: `https://racklio.com${categoryPath(category.slug)}`,
    })),
  };

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
      <script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        type="application/ld+json"
      />

      <section className="relative overflow-hidden border-b border-border bg-white py-10 sm:py-14 lg:py-16">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(circle_at_85%_10%,rgba(124,58,237,.1),transparent_34%)]"
        />
        <Container className="relative" size="wide">
          <p className="text-xs font-semibold tracking-[0.16em] text-brand uppercase">
            Software category map
          </p>
          <h1 className="mt-5 max-w-4xl text-4xl leading-tight font-semibold tracking-[-0.05em] sm:text-5xl lg:text-6xl">
            Customer Service Software Categories
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
            Start with the customer workflow your business needs to improve,
            then move into relevant product reviews, direct comparisons, and
            evidence-based buying guidance.
          </p>
        </Container>
      </section>

      <div className="bg-surface py-8 sm:py-12">
        <Container className="grid gap-8 sm:gap-10" size="wide">
          <section aria-labelledby="taxonomy-heading">
            <div className="grid gap-5 lg:grid-cols-[0.55fr_1fr] lg:items-end">
              <div>
                <p className="text-xs font-semibold tracking-[0.14em] text-brand uppercase">
                  Racklio taxonomy
                </p>
                <h2
                  className="mt-3 text-2xl font-semibold tracking-[-0.04em] sm:text-3xl"
                  id="taxonomy-heading"
                >
                  Explore by what you need
                </h2>
              </div>
              <p className="max-w-3xl text-sm leading-6 text-muted-foreground">
                These categories stay focused on software businesses use to
                communicate with, support, engage, and manage relationships with
                customers.
              </p>
            </div>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              {categories.map((category) => (
                <article
                  className="flex min-h-64 flex-col rounded-lg border border-border bg-white p-6 shadow-card transition-colors hover:border-brand/30"
                  key={category.slug}
                >
                  <div className="flex items-center justify-between gap-4">
                    <span className="grid size-10 place-items-center rounded-lg bg-violet-50 text-xs font-bold text-brand">
                      {category.code}
                    </span>
                    <span className="text-xs font-semibold tracking-[0.12em] text-muted-foreground uppercase">
                      Primary category
                    </span>
                  </div>
                  <h3 className="mt-5 text-xl font-semibold tracking-[-0.03em]">
                    {category.shortTitle}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    {category.definition}
                  </p>
                  <Link
                    className="mt-auto pt-6"
                    href={categoryPath(category.slug)}
                  >
                    Explore category &rarr;
                  </Link>
                </article>
              ))}
            </div>
          </section>

          <section className="grid gap-4 lg:grid-cols-3">
            {[
              [
                '1',
                'Choose a category',
                'Identify the workflow and customer interaction your team needs to improve.',
              ],
              [
                '2',
                'Review the evidence',
                'Read product scope, pricing, limitations, and conditional business-fit analysis.',
              ],
              [
                '3',
                'Compare the shortlist',
                'Use direct comparisons to evaluate meaningful differences without a universal winner.',
              ],
            ].map(([number, heading, copy]) => (
              <article
                className="rounded-lg border border-border bg-white p-5 shadow-card"
                key={number}
              >
                <span className="grid size-8 place-items-center rounded-full bg-brand text-sm font-semibold text-white">
                  {number}
                </span>
                <h2 className="mt-4 font-semibold">{heading}</h2>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {copy}
                </p>
              </article>
            ))}
          </section>

          <section className="grid items-center gap-5 rounded-lg border border-violet-200/70 bg-violet-50/70 p-6 shadow-card lg:grid-cols-[1fr_auto]">
            <div>
              <h2 className="font-semibold">
                Categories built around buyer decisions
              </h2>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">
                Products are included for category relevance and documented
                buyer value, not affiliate availability or paid placement.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <ButtonLink href="/methodology" variant="secondary">
                Methodology
              </ButtonLink>
              <ButtonLink href="/editorial-standards" variant="secondary">
                Editorial Standards
              </ButtonLink>
            </div>
          </section>
        </Container>
      </div>
    </PageLayout>
  );
}
