import { useEffect } from 'react';

import { ProductLogo } from '@/components/home';
import { ComparisonIdentity } from '@/components/editorial';
import { PageLayout, SiteFooter, SiteHeader } from '@/components/layout';
import { ButtonLink, ClickableCard, Container, Link } from '@/components/ui';
import { isCurrentProductBrand } from '@/lib/product-brand-assets';

import { categoryPath } from './category-path';
import { fullCategoryReviewMembership } from '@/pages/categories/category-data';

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
  quickDecision: { label: string; text: string }[];
  scenarios: { scenario: string; consider: string; why: string }[];
  products: CategoryLink[];
  comparisons: CategoryLink[];
  alternativeGuides: CategoryLink[];
  guides: CategoryLink[];
  factors: { title: string; description: string }[];
  tradeoffs: { title: string; description: string }[];
  audience: string[];
  alternatives: string[];
  verificationDate: string;
  sources: { title: string; href: string }[];
  faqs: { question: string; answer: string }[];
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
    <div className="border-b border-border bg-surface/80">
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
    <div className="mt-5 grid min-w-0 gap-4 md:grid-cols-2 xl:grid-cols-3">
      {items.map((item, index) => {
        const comparedNames = item.title.split(' vs ');
        const productName = item.title.replace(
          /\s+(alternatives|pricing|review)$/i,
          '',
        );

        return (
          <ClickableCard
            className="decision-card flex min-w-0 min-h-48 flex-col rounded-2xl border border-border bg-white p-5 shadow-card hover:border-brand/30"
            href={item.href}
            key={item.title}
            label={`Explore ${item.title}`}
          >
            {comparedNames.length === 2 ? (
              <ComparisonIdentity
                a={comparedNames[0] ?? ''}
                b={comparedNames[1] ?? ''}
                useProductLogos
              />
            ) : isCurrentProductBrand(productName) ? (
              <ProductLogo name={productName} size="sm" />
            ) : (
              <span className="font-mono text-[0.625rem] text-accent-strong">
                {String(index + 1).padStart(2, '0')}
              </span>
            )}
            <h3 className="mt-4 break-words text-lg font-semibold tracking-[-0.025em]">
              {item.title}
            </h3>
            <p className="mt-3 break-words text-sm leading-6 text-muted-foreground">
              {item.description}
            </p>
            <span className="mt-auto pt-5 font-semibold">Explore &rarr;</span>
          </ClickableCard>
        );
      })}
    </div>
  );
}

export function CategoryPageTemplate({ data }: { data: SoftwareCategoryData }) {
  useMetaDescription(data.metaDescription);

  return (
    <PageLayout footer={<SiteFooter />} header={<SiteHeader />}>
      <CategoryMetadata data={data} />
      <Breadcrumbs current={data.shortTitle} />

      <section className="relative border-b border-border bg-[linear-gradient(120deg,var(--color-surface),var(--color-mint-subtle))] py-9 sm:py-12 lg:py-14">
        <Container className="relative" size="wide">
          <div className="grid min-w-0 gap-7 lg:grid-cols-[minmax(0,1fr)_minmax(20rem,0.58fr)] lg:items-end lg:gap-12">
            <div className="min-w-0">
              <p className="text-xs font-semibold tracking-[0.16em] text-brand uppercase">
                {data.eyebrow}
              </p>
              <h1 className="mt-5 max-w-4xl break-words text-3xl leading-[1.1] font-semibold tracking-[-0.05em] text-balance sm:text-5xl lg:text-6xl">
                {data.title}
              </h1>
              <p className="mt-5 max-w-3xl break-words text-lg leading-8 text-muted-foreground">
                {data.definition}
              </p>
            </div>
            <div className="min-w-0 rounded-2xl border border-brand/20 bg-white/92 p-5 shadow-panel sm:p-6">
              <p className="text-xs font-semibold tracking-[0.12em] text-brand uppercase">
                Buyer perspective
              </p>
              <p className="mt-3 break-words text-sm leading-6 text-muted-foreground">
                {data.introduction}
              </p>
            </div>
          </div>
        </Container>
      </section>

      <div className="bg-surface py-8 sm:py-12">
        <Container
          className="grid min-w-0 gap-8 sm:gap-10 [&>*]:min-w-0"
          size="wide"
        >
          <section aria-labelledby="quick-decision-heading">
            <SectionHeading
              eyebrow="Quick decision"
              id="quick-decision-heading"
              title="Match the category to the operating need"
            />
            <dl className="mt-5 grid overflow-hidden rounded-lg border border-border bg-white shadow-card md:grid-cols-2">
              {data.quickDecision.map((item) => (
                <div
                  className="min-w-0 border-b border-border p-5 md:odd:border-r"
                  key={item.label}
                >
                  <dt className="text-sm font-semibold">{item.label}</dt>
                  <dd className="mt-2 break-words text-sm leading-6 text-muted-foreground">
                    {item.text}
                  </dd>
                </div>
              ))}
            </dl>
          </section>

          <section aria-labelledby="start-heading">
            <SectionHeading
              eyebrow="Start here"
              id="start-heading"
              title="Choose the decision that matches your need"
            />
            <LinkCards items={data.startPaths} />
          </section>

          <section aria-labelledby="scenario-heading">
            <SectionHeading
              eyebrow="Scenario guidance"
              id="scenario-heading"
              title="Which product model fits which situation?"
            />
            <div
              aria-label={`${data.shortTitle} scenario decision matrix`}
              className="mt-5 overflow-x-auto rounded-lg border border-border bg-white shadow-card focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
              role="region"
              tabIndex={0}
            >
              <table className="w-full min-w-[42rem] text-left text-sm">
                <caption className="sr-only">
                  Scenario-based software guidance for {data.shortTitle}
                </caption>
                <thead className="bg-accent-subtle">
                  <tr>
                    {['Scenario', 'Consider', 'Why'].map((heading) => (
                      <th className="p-4" key={heading} scope="col">
                        {heading}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {data.scenarios.map((item) => (
                    <tr className="border-t border-border" key={item.scenario}>
                      <th className="p-4" scope="row">
                        {item.scenario}
                      </th>
                      <td className="p-4 font-medium">{item.consider}</td>
                      <td className="p-4 text-muted-foreground">{item.why}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
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

          {data.alternativeGuides.length ? (
            <section aria-labelledby="alternatives-heading">
              <SectionHeading
                eyebrow="Replacement paths"
                id="alternatives-heading"
                title="Relevant alternative guides"
              />
              <LinkCards items={data.alternativeGuides} />
            </section>
          ) : null}

          {data.guides.length ? (
            <section aria-labelledby="guides-heading">
              <SectionHeading
                eyebrow="Cost and scope"
                id="guides-heading"
                title="Related buying guides"
              />
              <LinkCards items={data.guides} />
            </section>
          ) : null}

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

          <section aria-labelledby="tradeoffs-heading">
            <SectionHeading
              eyebrow="Decision boundaries"
              id="tradeoffs-heading"
              title="Meaningful trade-offs"
            />
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              {data.tradeoffs.map((item) => (
                <article
                  className="rounded-lg border border-border bg-white p-5 shadow-card"
                  key={item.title}
                >
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </section>

          {data.faqs.length ? (
            <section aria-labelledby="faq-heading">
              <SectionHeading
                eyebrow="Buyer questions"
                id="faq-heading"
                title={`Questions about ${data.shortTitle}`}
              />
              <div className="mt-5 divide-y divide-border border-y border-border">
                {data.faqs.map((item) => (
                  <article className="py-5" key={item.question}>
                    <h3 className="font-semibold">{item.question}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      {item.answer}
                    </p>
                  </article>
                ))}
              </div>
            </section>
          ) : null}

          <section
            aria-labelledby="trust-heading"
            className="grid items-center gap-5 rounded-lg border border-brand/20 bg-accent-subtle/70 p-6 shadow-card lg:grid-cols-[1fr_auto]"
          >
            <div>
              <h2 className="font-semibold" id="trust-heading">
                Evidence before recommendations
              </h2>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">
                Racklio separates official provider facts from editorial
                analysis and does not sell paid rankings. Category evidence was
                reviewed {data.verificationDate}.
              </p>
              <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm">
                {data.sources.map((source) => (
                  <a
                    className="underline underline-offset-4"
                    href={source.href}
                    key={source.href}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {source.title}
                  </a>
                ))}
              </div>
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
  const productCatalog = new Map(
    categories.flatMap((category) =>
      category.products.map((product) => [product.href, product] as const),
    ),
  );
  const categoryMembership = categories.map((category) => ({
    category,
    products: (fullCategoryReviewMembership[category.slug] ?? [])
      .map((href) => productCatalog.get(href))
      .filter((product): product is CategoryLink => Boolean(product)),
  }));

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

      <section className="relative overflow-hidden border-b border-border bg-[linear-gradient(120deg,var(--color-surface),var(--color-mint-subtle))] py-10 sm:py-12">
        <Container className="relative" size="wide">
          <div className="grid min-w-0 items-center gap-7 lg:grid-cols-[minmax(0,0.85fr)_minmax(22rem,0.9fr)] lg:gap-12">
            <div className="min-w-0">
              <p className="text-xs font-semibold tracking-[0.16em] text-brand uppercase">
                Software category map
              </p>
              <h1 className="mt-5 max-w-3xl break-words text-3xl leading-[1.1] font-semibold tracking-[-0.05em] sm:text-5xl">
                Customer Service Software Categories
              </h1>
              <p className="mt-5 max-w-2xl break-words text-lg leading-8 text-muted-foreground">
                Start with the customer workflow your business needs to improve,
                then move into relevant product reviews, direct comparisons, and
                evidence-based buying guidance.
              </p>
            </div>
            <aside className="min-w-0 rounded-2xl border border-brand/20 bg-white/92 p-5 shadow-panel sm:p-6">
              <p className="text-xs font-bold tracking-[0.14em] text-accent-strong uppercase">
                Category decision map
              </p>
              <ol className="mt-4 divide-y divide-border">
                {categoryMembership.map(({ category, products }, index) => (
                  <li
                    className="grid min-w-0 grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 py-3"
                    key={category.slug}
                  >
                    <span className="font-mono text-xs font-bold text-brand">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div className="min-w-0">
                      <p className="break-words text-sm font-semibold">
                        {category.shortTitle}
                      </p>
                      <p className="mt-0.5 break-words text-xs text-muted-foreground">
                        {products
                          .slice(0, 3)
                          .map((product) => product.title)
                          .join(' · ')}
                      </p>
                    </div>
                    <span className="text-xs font-semibold text-mint-deep">
                      {products.length} tools
                    </span>
                  </li>
                ))}
              </ol>
            </aside>
          </div>
        </Container>
      </section>

      <div className="bg-surface py-8 sm:py-12">
        <Container className="grid min-w-0 gap-8 sm:gap-10" size="wide">
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
            <div className="mt-5 grid min-w-0 gap-4 md:grid-cols-2">
              {categoryMembership.map(({ category, products }) => (
                <ClickableCard
                  className="flex min-w-0 min-h-80 flex-col rounded-2xl border border-border bg-white p-6 shadow-card transition-colors hover:border-brand/30"
                  href={categoryPath(category.slug)}
                  key={category.slug}
                  label={`Explore the ${category.shortTitle} category`}
                >
                  <div className="flex min-w-0 items-center justify-between gap-4">
                    <span className="grid size-10 place-items-center rounded-lg bg-accent-subtle text-xs font-bold text-brand">
                      {category.code}
                    </span>
                    <span className="min-w-0 break-words text-right text-xs font-semibold tracking-[0.12em] text-muted-foreground uppercase">
                      Primary category
                    </span>
                  </div>
                  <h3 className="mt-5 break-words text-xl font-semibold tracking-[-0.03em]">
                    {category.shortTitle}
                  </h3>
                  <p className="mt-3 break-words text-sm leading-6 text-muted-foreground">
                    {category.definition}
                  </p>
                  <div className="mt-5 border-t border-border pt-4">
                    <p className="text-[0.68rem] font-bold tracking-[0.1em] text-accent-strong uppercase">
                      Buyer starting point
                    </p>
                    <p className="mt-2 break-words text-sm leading-6 text-muted-foreground">
                      {category.startPaths[0]?.description}
                    </p>
                  </div>
                  <p className="mt-4 break-words text-xs font-medium text-muted-foreground">
                    {products.length} documented products ·{' '}
                    {products
                      .slice(0, 3)
                      .map((product) => product.title)
                      .join(', ')}
                  </p>
                  <span className="mt-auto pt-6 font-semibold">
                    Explore category &rarr;
                  </span>
                </ClickableCard>
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

          <section className="grid items-center gap-5 rounded-lg border border-brand/20 bg-accent-subtle/70 p-6 shadow-card lg:grid-cols-[1fr_auto]">
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
