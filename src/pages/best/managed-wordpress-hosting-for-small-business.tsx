import { useEffect, type ReactNode } from 'react';
import { ResearchMarker } from '@/components/brand';
import { PageLayout, SiteFooter, SiteHeader } from '@/components/layout';
import { EvidenceNote, ReviewSection } from '@/components/reviews';
import {
  ButtonLink,
  Card,
  CardContent,
  Container,
  Link,
  Section,
} from '@/components/ui';

const canonicalUrl =
  'https://racklio.com/best/managed-wordpress-hosting-for-small-business';

const sources = [
  {
    id: 1,
    provider: 'Kinsta',
    title: 'WordPress hosting pricing',
    href: 'https://kinsta.com/pricing/',
  },
  {
    id: 2,
    provider: 'Kinsta',
    title: 'Backup documentation',
    href: 'https://kinsta.com/docs/wordpress-hosting/backups/',
  },
  {
    id: 3,
    provider: 'Kinsta',
    title: 'Email hosting guidance',
    href: 'https://kinsta.com/docs/wordpress-hosting/mykinsta-tools/email/',
  },
  {
    id: 4,
    provider: 'WP Engine',
    title: 'Managed WordPress plans',
    href: 'https://wpengine.com/plans/',
  },
  {
    id: 5,
    provider: 'WP Engine',
    title: 'Backup documentation',
    href: 'https://wpengine.com/support/restore/',
  },
  {
    id: 6,
    provider: 'WP Engine',
    title: 'Scope of support',
    href: 'https://wpengine.com/support/wp-engine-scope-of-support/',
  },
  {
    id: 7,
    provider: 'WP Engine',
    title: 'Third-party email guidance',
    href: 'https://wpengine.com/support/using-3rd-party-email-provider-send-mail-wordpress/',
  },
  {
    id: 8,
    provider: 'Rocket.net',
    title: 'Managed WordPress pricing',
    href: 'https://rocket.net/pricing/',
  },
  {
    id: 9,
    provider: 'Rocket.net',
    title: 'Managed WordPress platform',
    href: 'https://rocket.net/managed-wordpress-hosting/',
  },
  {
    id: 10,
    provider: 'Rocket.net',
    title: 'Support',
    href: 'https://rocket.net/support/',
  },
  {
    id: 11,
    provider: 'Pressable',
    title: 'Pricing and plan resources',
    href: 'https://pressable.com/pricing/',
  },
  {
    id: 12,
    provider: 'Pressable',
    title: 'Platform features',
    href: 'https://pressable.com/features/',
  },
  {
    id: 13,
    provider: 'Pressable',
    title: 'Backup documentation',
    href: 'https://pressable.com/knowledgebase/accessing-backups/',
  },
  {
    id: 14,
    provider: 'Liquid Web',
    title: 'WordPress hosting and pricing',
    href: 'https://www.liquidweb.com/wordpress-hosting/',
  },
  {
    id: 15,
    provider: 'Liquid Web',
    title: 'Managed WordPress platform',
    href: 'https://www.liquidweb.com/wordpress-hosting/managed-wordpress/',
  },
  {
    id: 16,
    provider: 'Liquid Web',
    title: 'Support',
    href: 'https://www.liquidweb.com/support/',
  },
  {
    id: 17,
    provider: 'Liquid Web',
    title: 'Managed VPS',
    href: 'https://www.liquidweb.com/vps-hosting/managed-vps/',
  },
] as const;

const toc = [
  ['Direct answer', '#direct-answer'],
  ['Decision snapshot', '#snapshot'],
  ['Do you need premium hosting?', '#need-premium'],
  ['Methodology', '#methodology'],
  ['Provider analysis', '#providers'],
  ['Pricing and commitment', '#pricing'],
  ['Operational value', '#value'],
  ['Traffic and storage', '#resources'],
  ['Backups and recovery', '#backups'],
  ['Security', '#security'],
  ['Support', '#support'],
  ['Email and domains', '#email-domains'],
  ['Migrations and staging', '#workflow'],
  ['WooCommerce', '#woocommerce'],
  ['Growth and multiple sites', '#growth'],
  ['VPS and control', '#control'],
  ['Limitations', '#limitations'],
  ['Decision matrix', '#matrix'],
  ['How to choose', '#choose'],
  ['FAQ', '#faq'],
  ['Sources', '#sources'],
] as const;

const snapshotRows = [
  [
    'Brochure site with modest traffic',
    'A lower-cost host may be sufficient',
    'Premium operations may cost more than the risk they remove.',
  ],
  [
    'Lead-generation or important business site',
    'Kinsta or WP Engine',
    'Consider structured environments, recovery, and support boundaries.',
  ],
  [
    'Traffic-sensitive content site',
    'Rocket.net',
    'Unmetered visitors can simplify traffic accounting; bandwidth and storage remain finite.',
  ],
  [
    'Small site that also needs business email',
    'Pressable',
    'Its current plan table includes Professional Email; confirm mailbox requirements.',
  ],
  [
    'Small WooCommerce store',
    'Compare all four WordPress platforms',
    'Dynamic workload, recovery, support scope, and transaction risk matter more than site count.',
  ],
  [
    'WordPress plus custom server requirements',
    'Liquid Web',
    'Its separate VPS path adds control, responsibility, and cost.',
  ],
] as const;

const pricingRows = [
  [
    'Kinsta Single 20GB',
    '$35 monthly',
    '$30 effective monthly; $350 prepaid annually',
    '$0 first month on the cited page',
    '1 install; 10GB storage; 20GB server bandwidth or visit-based variant',
  ],
  [
    'WP Engine Startup',
    'Starting at $30 monthly',
    'No annual figure used here',
    'None used in this guide',
    '1 site; 25,000 estimated visits; 10GB storage',
  ],
  [
    'Rocket.net Starter',
    '$30 monthly',
    '$25 effective monthly with annual billing',
    '$1 first month on the cited page',
    '1 install; unmetered visitors; 10GB storage; 50GB bandwidth',
  ],
  [
    'Pressable Signature 1',
    'Monthly option available',
    '$20.83 effective monthly; $250 prepaid annually',
    'None used in this guide',
    '1 install; 30,000 visits; 20GB storage',
  ],
  [
    'Liquid Web Spark Launch',
    'Annual commitment shown',
    '$5 effective monthly; $60 prepaid annually',
    'None used in this guide',
    '1 site; 15GB storage; 2TB bandwidth; 10 PHP workers',
  ],
] as const;

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Best Managed WordPress Hosting for Small Business',
  description:
    'An evidence-first guide to deciding whether a small business needs premium managed WordPress hosting and which operating model fits.',
  datePublished: '2026-08-09',
  dateModified: '2026-08-09',
  mainEntityOfPage: canonicalUrl,
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
    brand: { '@type': 'Brand', name: 'Racklio' },
  },
  citation: sources.map((source) => source.href),
};

const breadcrumbSchema = {
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
      name: 'Best For',
      item: 'https://racklio.com/best/',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Managed WordPress Hosting for Small Business',
      item: canonicalUrl,
    },
  ],
};

function Citation({ source }: { source: number }) {
  return (
    <sup>
      <a
        aria-label={`Source ${source}`}
        className="ml-1 rounded-sm text-xs font-semibold text-accent-strong underline underline-offset-2"
        href={`#source-${source}`}
      >
        [{source}]
      </a>
    </sup>
  );
}

function TwoColumn({
  leftTitle,
  left,
  rightTitle,
  right,
}: {
  leftTitle: string;
  left: ReactNode;
  rightTitle: string;
  right: ReactNode;
}) {
  return (
    <div className="grid gap-px border border-border bg-border md:grid-cols-2">
      <div className="bg-surface-raised p-5 sm:p-6">
        <p className="text-[0.6875rem] font-semibold tracking-[0.12em] text-muted-foreground uppercase">
          {leftTitle}
        </p>
        <div className="mt-4 space-y-4 text-sm leading-7">{left}</div>
      </div>
      <div className="bg-surface-raised p-5 sm:p-6">
        <p className="text-[0.6875rem] font-semibold tracking-[0.12em] text-muted-foreground uppercase">
          {rightTitle}
        </p>
        <div className="mt-4 space-y-4 text-sm leading-7">{right}</div>
      </div>
    </div>
  );
}

function ProviderBlock({
  code,
  id,
  name,
  fit,
  notFit,
  price,
  commitment,
  traffic,
  operations,
  limitation,
  analysis,
  citations,
}: {
  code: string;
  id: string;
  name: string;
  fit: string;
  notFit: string;
  price: string;
  commitment: string;
  traffic: string;
  operations: string;
  limitation: string;
  analysis: string;
  citations: number[];
}) {
  return (
    <ReviewSection code={code} id={id} title={name}>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <h3 className="text-base font-semibold">Where it fits</h3>
          <p className="mt-2">{fit}</p>
        </div>
        <div>
          <h3 className="text-base font-semibold">Where it may not fit</h3>
          <p className="mt-2">{notFit}</p>
        </div>
      </div>
      <dl className="mt-6 divide-y divide-border border-y border-border text-sm">
        {[
          ['Current pricing', price],
          ['Commitment context', commitment],
          ['Traffic and resources', traffic],
          ['Operations', operations],
          ['Important limitation', limitation],
        ].map(([term, detail]) => (
          <div className="grid gap-2 py-4 sm:grid-cols-[10rem_1fr]" key={term}>
            <dt className="font-semibold">{term}</dt>
            <dd>{detail}</dd>
          </div>
        ))}
      </dl>
      <EvidenceNote>
        <strong>Racklio analysis:</strong> {analysis}
        {citations.map((source) => (
          <Citation key={source} source={source} />
        ))}
      </EvidenceNote>
    </ReviewSection>
  );
}

export function ManagedWordPressHostingForSmallBusiness() {
  useEffect(() => {
    const meta = document.querySelector<HTMLMetaElement>(
      'meta[name="description"]',
    );
    const previous = meta?.content;
    if (meta)
      meta.content =
        'Decide whether your small business needs premium managed WordPress hosting, then compare Kinsta, WP Engine, Rocket.net, Pressable, and Liquid Web by workload.';
    return () => {
      if (meta && previous) meta.content = previous;
    };
  }, []);

  return (
    <PageLayout footer={<SiteFooter />} header={<SiteHeader />}>
      <title>
        Managed WordPress Hosting for Small Business (2026) | Racklio
      </title>
      <link rel="canonical" href={canonicalUrl} />
      <meta property="og:type" content="article" />
      <meta
        property="og:title"
        content="Managed WordPress Hosting for Small Business"
      />
      <meta
        property="og:description"
        content="A workload-first guide to premium managed WordPress hosting for small businesses, including when not to buy it."
      />
      <meta property="og:url" content={canonicalUrl} />
      <meta name="twitter:card" content="summary" />
      <meta
        name="twitter:title"
        content="Managed WordPress Hosting for Small Business | Racklio"
      />
      <meta
        name="twitter:description"
        content="Compare five hosting models using current official documentation, practical limits, and conditional recommendations."
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="border-b border-border bg-surface-raised">
        <Container>
          <nav
            aria-label="Breadcrumb"
            className="py-3 text-xs text-muted-foreground"
          >
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" variant="subtle">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/#guides" variant="subtle">
                  Best For
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-foreground">
                Managed WordPress Hosting for Small Business
              </li>
            </ol>
          </nav>
        </Container>
      </div>

      <Section className="border-b border-border" spacing="md">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start lg:gap-16">
            <div>
              <ResearchMarker code="BF" label="Small-business decision guide" />
              <h1 className="mt-6 max-w-4xl text-4xl leading-[1.08] font-semibold tracking-[-0.05em] text-balance sm:text-5xl lg:text-6xl">
                Managed WordPress Hosting for Small Business
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
                Start with the cost of operational risk—not a provider list.
                This guide separates simple brochure sites from lead-generation,
                content, WooCommerce, multi-site, and infrastructure-sensitive
                workloads.
              </p>
              <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-xs text-muted-foreground">
                <span>Last verified: August 9, 2026</span>
                <span>17 official sources reviewed</span>
                <span>Racklio Editorial</span>
              </div>
            </div>
            <Card className="overflow-hidden rounded-lg">
              <div className="border-b border-border px-5 py-4 sm:px-6">
                <ResearchMarker code="DA" label="Direct answer" />
              </div>
              <CardContent>
                <p className="text-lg leading-7 font-semibold">
                  There is no single right host for every small business—and
                  some do not need premium managed WordPress at all.
                </p>
                <ul className="mt-5 space-y-3 text-sm leading-6">
                  <li>
                    <strong>Simple brochure site:</strong> start by testing
                    whether lower-cost hosting is sufficient.
                  </li>
                  <li>
                    <strong>Business-critical WordPress:</strong> compare Kinsta
                    and WP Engine workflows.
                  </li>
                  <li>
                    <strong>Traffic-sensitive site:</strong> examine
                    Rocket.net’s visitor and bandwidth model.
                  </li>
                  <li>
                    <strong>Email-inclusive workflow:</strong> examine
                    Pressable’s documented plan inclusion.
                  </li>
                  <li>
                    <strong>Server-level control:</strong> consider Liquid Web’s
                    separate VPS path.
                  </li>
                </ul>
                <ButtonLink className="mt-6" href="#snapshot">
                  Match Your Business Workload
                </ButtonLink>
                <p className="mt-4 text-[0.6875rem] leading-5 text-muted-foreground">
                  Affiliate disclosure: Racklio may earn a commission from
                  qualifying purchases. Commercial relationships do not
                  determine Racklio&apos;s published recommendations.
                </p>
              </CardContent>
            </Card>
          </div>
        </Container>
      </Section>

      <Section
        className="border-b border-border bg-surface-raised"
        spacing="sm"
      >
        <Container>
          <div className="border border-border px-5 py-6 sm:px-7">
            <h2 className="text-lg font-semibold tracking-[-0.02em]">
              Editorial safeguards
            </h2>
            <ul className="mt-5 grid gap-x-8 gap-y-3 text-sm leading-6 text-muted-foreground sm:grid-cols-2">
              {[
                'Current official provider documentation only',
                'Provider facts separated from Racklio analysis',
                'No paid rankings, scores, or performance claims',
                'Prices retain term and promotion context',
              ].map((item, index) => (
                <li className="flex gap-3" key={item}>
                  <span className="font-mono text-[0.625rem] text-accent-strong">
                    0{index + 1}
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      <Section spacing="md">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[15rem_minmax(0,1fr)] lg:gap-16">
            <aside>
              <nav aria-label="On this page" className="lg:sticky lg:top-24">
                <p className="text-xs font-semibold tracking-[0.12em] text-muted-foreground uppercase">
                  On this page
                </p>
                <ol className="mt-4 space-y-2 border-l border-border pl-4 text-sm">
                  {toc.map(([label, href]) => (
                    <li key={href}>
                      <a
                        className="rounded-sm text-muted-foreground hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                        href={href}
                      >
                        {label}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            </aside>
            <article className="min-w-0 space-y-14">
              <ReviewSection
                code="01"
                id="direct-answer"
                title="The purchase starts with business consequence"
              >
                <p>
                  A low-traffic brochure site with infrequent updates may not
                  justify premium managed WordPress pricing. If a short outage,
                  slower recovery, or a manual update would have little business
                  consequence, test a simpler host before buying operational
                  convenience.
                </p>
                <p>
                  Premium management becomes easier to justify when WordPress
                  captures leads, processes orders, supports paid traffic,
                  publishes frequently, or must be restored quickly. The
                  decision is then about reducing maintenance burden and
                  clarifying responsibility—not buying a prestige label.
                </p>
                <EvidenceNote>
                  <strong>Racklio analysis:</strong> classify the cost of
                  failure, internal WordPress skill, and recovery requirement
                  before comparing plan features.
                </EvidenceNote>
              </ReviewSection>

              <ReviewSection code="02" id="snapshot" title="Decision snapshot">
                <div
                  className="overflow-x-auto"
                  tabIndex={0}
                  role="region"
                  aria-label="Small business hosting decision snapshot"
                >
                  <table className="w-full min-w-[46rem] border-collapse text-left text-sm">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="p-4 font-semibold" scope="col">
                          Business scenario
                        </th>
                        <th className="p-4 font-semibold" scope="col">
                          Starting point
                        </th>
                        <th className="p-4 font-semibold" scope="col">
                          Decision logic
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {snapshotRows.map(([scenario, startingPoint, logic]) => (
                        <tr className="border-b border-border" key={scenario}>
                          <th className="p-4 font-medium" scope="row">
                            {scenario}
                          </th>
                          <td className="p-4">{startingPoint}</td>
                          <td className="p-4 text-muted-foreground">{logic}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <ButtonLink className="mt-7" href="#need-premium">
                  Check Whether Premium Hosting Is Necessary
                </ButtonLink>
              </ReviewSection>

              <ReviewSection
                code="03"
                id="need-premium"
                title="When premium managed WordPress is—and is not—necessary"
              >
                <TwoColumn
                  leftTitle="Premium management may be proportionate"
                  left={
                    <>
                      <p>
                        The site directly produces leads, appointments,
                        subscriptions, or sales.
                      </p>
                      <p>
                        Updates, staging, backups, migration, or recovery would
                        otherwise consume scarce staff time.
                      </p>
                      <p>
                        The business needs a documented support boundary and can
                        justify recurring cost.
                      </p>
                    </>
                  }
                  rightTitle="A simpler host may be enough"
                  right={
                    <>
                      <p>
                        The site is a stable brochure with low traffic and a low
                        cost of interruption.
                      </p>
                      <p>
                        A capable owner or contractor already handles updates,
                        backups, and recovery.
                      </p>
                      <p>
                        The premium plan would not remove a meaningful
                        operational risk.
                      </p>
                    </>
                  }
                />
                <p className="mt-6">
                  A local service site running paid campaigns may be more
                  consequential than a larger content site. “Small business”
                  describes company size, not workload risk.
                </p>
                <EvidenceNote>
                  <strong>Decision boundary:</strong> buy premium management
                  only when its workflow, recovery, or support value exceeds the
                  price difference.
                </EvidenceNote>
              </ReviewSection>

              <ReviewSection
                code="04"
                id="methodology"
                title="How Racklio evaluates small-business fit"
              >
                <p>
                  Racklio reviewed current provider-controlled pricing,
                  platform, backup, support, email, and infrastructure pages. We
                  separated displayed facts from provider claims and from our
                  own workload analysis.
                </p>
                <ol className="mt-5 space-y-3">
                  <li>
                    <strong>1. Define the workload:</strong> brochure, lead
                    generation, publishing, WooCommerce, or multiple sites.
                  </li>
                  <li>
                    <strong>2. Normalize money:</strong> ordinary monthly price,
                    annual-effective price, prepayment, and temporary promotion.
                  </li>
                  <li>
                    <strong>3. Map resources:</strong> visits, bandwidth,
                    storage, installs, and execution limits are not
                    interchangeable.
                  </li>
                  <li>
                    <strong>4. Examine operations:</strong> backups, staging,
                    migrations, support scope, email, and recovery.
                  </li>
                  <li>
                    <strong>5. Apply a limitation:</strong> each provider
                    profile states when its model may not fit.
                  </li>
                </ol>
              </ReviewSection>

              <div id="providers" className="scroll-mt-24">
                <ResearchMarker code="05" label="Provider analysis" />
                <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em]">
                  Five different operating models
                </h2>
                <p className="mt-4 max-w-3xl text-muted-foreground">
                  These profiles are decision hypotheses, not positions in a
                  ranking.
                </p>
              </div>

              <ProviderBlock
                code="06"
                id="kinsta"
                name="Kinsta"
                fit="A business that wants one managed WordPress install, a standardized control plane, staging, migrations, security packaging, and chat support."
                notFit="A brochure site that cannot justify the entry price, or a business that expects web hosting and business email in one plan."
                price="$35 on the ordinary monthly term. The cited annual term is $350 prepaid, equivalent to about $30 monthly; a $0 first-month promotion is displayed for select plans."
                commitment="Compare the normal monthly price with the full annual prepayment. Do not treat the temporary first-month offer as the durable cost."
                traffic="Single 20GB publishes one install, 10GB storage, 20GB server bandwidth on the bandwidth variant, and 125GB CDN."
                operations="Unlimited migrations, staging, daily backups with 14-day retention, WAF/DDoS controls, and 24/7 chat are documented. Kinsta says email hosting is not included."
                limitation="The plan separates WordPress hosting from business email; the smallest plan may still exceed a low-consequence brochure site's needs."
                analysis="Investigate Kinsta when operational consistency matters more than bundling. Confirm whether the bandwidth or visit-based plan variant matches the site."
                citations={[1, 2, 3]}
              />

              <ProviderBlock
                code="07"
                id="wp-engine"
                name="WP Engine"
                fit="An important WordPress site that benefits from Production, Staging, and Development environments, transferable-site workflow, backups, and a documented support scope."
                notFit="A business seeking bundled email, DNS nameservers, or general-purpose server control."
                price="Startup is displayed as starting at $30 monthly for one site, 25,000 estimated visits, and 10GB local storage."
                commitment="This guide does not infer an annual price that was not required by the displayed comparison facts. Confirm the selected billing term at checkout."
                traffic="The plan page uses estimated visits and local storage. Buyers should confirm treatment of traffic and any overage or tier-change rules."
                operations="Daily and on-demand backups, SSL, SSH, security patching, staging and development environments, and transferable sites are documented."
                limitation="WP Engine documents that it does not provide email servers or nameservers and directs customers to third-party services and registrar DNS."
                analysis="Investigate WP Engine when a structured WordPress workflow has business value. Treat the support scope as a boundary to understand, not a promise that every WordPress issue is included."
                citations={[4, 5, 6, 7]}
              />

              <ProviderBlock
                code="08"
                id="rocket-net"
                name="Rocket.net"
                fit="A traffic-sensitive WordPress site whose owner prefers unmetered visitor accounting while planning against published bandwidth and storage."
                notFit="A buyer who interprets unmetered visitors as unlimited resources or needs a verified bundled business-email product."
                price="Starter is $30 monthly or $25 effective monthly with annual billing. The cited page displays a $1 first-month promotion."
                commitment="Model the ordinary renewal term, not the introductory month. Confirm the annual amount and current promotion before purchase."
                traffic="Starter publishes one install, unmetered visitors, 10GB storage, 50GB bandwidth, and unlimited PHP workers."
                operations="Migrations, daily backups with 30-day retention, CDN, WAF, malware controls, and 24/7/365 chat and ticket support are documented."
                limitation="Unmetered visitors do not remove finite storage or bandwidth. Bundled business-email inclusion was not verified in the cited plan documentation."
                analysis="Investigate Rocket.net when visitor-count billing creates uncertainty but verify data transfer and storage against real usage. No independent performance conclusion is made here."
                citations={[8, 9, 10]}
              />

              <ProviderBlock
                code="09"
                id="pressable"
                name="Pressable"
                fit="A small WordPress business that can plan around visits and values staging, backups, migrations, support, and a documented Professional Email inclusion."
                notFit="A site that regularly exceeds visit or storage allowances without a comfortable overage model, or one requiring root access."
                price="Signature 1 is displayed at $20.83 effective monthly when $250 is prepaid annually. A monthly option is available; this guide does not state an unverified monthly amount."
                commitment="The lowest displayed effective price requires annual prepayment. Include published overages of $1.20 per 1,000 visits and $1 per GB storage in growth modeling."
                traffic="One install, 30,000 visits, and 20GB storage are published, alongside per-site execution resources."
                operations="Staging/sandbox tooling, migrations, 24/7 WordPress support, Professional Email, hourly database backups and daily filesystem backups when changes are detected are documented."
                limitation="Visit and storage metering require forecasting. Backup frequency is not the same as a guaranteed recovery outcome; test the restore workflow."
                analysis="Investigate Pressable when its inclusion set reduces separate operational tasks. Verify the email product against mailbox count, domain, deliverability, and retention needs."
                citations={[11, 12, 13]}
              />

              <ProviderBlock
                code="10"
                id="liquid-web"
                name="Liquid Web"
                fit="A small business that needs a managed WordPress starting point today and may later require separate VPS or dedicated infrastructure."
                notFit="A straightforward WordPress site whose owner would gain no value from broader infrastructure options or added control."
                price="The detailed Spark Launch table displays $5 effective monthly with $60 prepaid annually for one site. A general page also displays 'starting at $4'; this guide uses the more specific plan table and preserves the conflict."
                commitment="The cited Spark price is tied to an annual term. Liquid Web's separate VPS pricing is not treated as an equivalent WordPress-plan price."
                traffic="Spark Launch publishes one site, 15GB storage, 2TB bandwidth, 10 PHP workers, and unlimited visits. Unlimited visits do not mean unlimited server resources."
                operations="Daily backups with seven-day retention, self migration, staging, Cloudflare Enterprise, DDoS controls, and WAF are listed for Spark Launch."
                limitation="The entry WordPress plan and managed VPS are materially different products. Bundled business email was not verified from the cited WordPress plan table."
                analysis="Investigate Liquid Web when a genuine path to server-level control matters. Do not pay for VPS complexity merely because the business expects to grow."
                citations={[14, 15, 16, 17]}
              />

              <ReviewSection
                code="11"
                id="pricing"
                title="Price, commitment, and promotion context"
              >
                <div
                  className="overflow-x-auto"
                  tabIndex={0}
                  role="region"
                  aria-label="Small business managed WordPress pricing comparison"
                >
                  <table className="w-full min-w-[62rem] border-collapse text-left text-sm">
                    <thead>
                      <tr className="border-b border-border">
                        {[
                          'Plan',
                          'Ordinary monthly',
                          'Annual context',
                          'Promotion',
                          'Published scope',
                        ].map((heading) => (
                          <th
                            className="p-4 font-semibold"
                            scope="col"
                            key={heading}
                          >
                            {heading}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {pricingRows.map((row) => (
                        <tr className="border-b border-border" key={row[0]}>
                          {row.map((cell, index) =>
                            index === 0 ? (
                              <th
                                className="p-4 font-medium"
                                scope="row"
                                key={cell}
                              >
                                {cell}
                              </th>
                            ) : (
                              <td
                                className="p-4 text-muted-foreground"
                                key={cell}
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
                <p className="mt-5 text-sm text-muted-foreground">
                  Prices were verified August 9, 2026 and can change. Tax,
                  add-ons, overages, renewal terms, and checkout selections may
                  alter the actual cost.
                </p>
                <EvidenceNote>
                  <strong>Source conflict:</strong> Liquid Web's general
                  WordPress page displays a $4 starting figure while its
                  detailed Spark Launch table displays $5 effective monthly on a
                  $60 annual prepayment. Racklio uses the detailed plan row and
                  does not reconcile the difference by inference.
                  <Citation source={14} />
                </EvidenceNote>
              </ReviewSection>

              <ReviewSection
                code="12"
                id="value"
                title="Operational value is not the same as feature count"
              >
                <p>
                  A small business receives value when hosting removes work it
                  would otherwise pay for or leave undone. Staging may matter to
                  a frequently updated lead-generation site; it may add little
                  to a static brochure site. A longer backup-retention window
                  matters only if the business can identify and restore the
                  right recovery point.
                </p>
                <TwoColumn
                  leftTitle="Costs to model"
                  left={
                    <>
                      <p>
                        Plan and renewal price, annual cash commitment,
                        traffic/storage overages, email, domains, premium
                        plugins, migration, and specialist help.
                      </p>
                    </>
                  }
                  rightTitle="Work potentially removed"
                  right={
                    <>
                      <p>
                        Updates, staging setup, backup administration, migration
                        execution, security configuration, incident triage, and
                        infrastructure maintenance—subject to each support
                        scope.
                      </p>
                    </>
                  }
                />
                <ButtonLink className="mt-7" href="#matrix">
                  Use the Decision Matrix
                </ButtonLink>
              </ReviewSection>

              <ReviewSection
                code="13"
                id="resources"
                title="Traffic, bandwidth, storage, and execution limits"
              >
                <p>
                  Kinsta offers plan variants based on visits or server
                  bandwidth. WP Engine and Pressable publish visit-based
                  allowances. Rocket.net and Liquid Web publish unmetered or
                  unlimited visits alongside finite bandwidth and storage. These
                  resource languages are not equivalent.
                </p>
                <p>
                  A brochure site may fit every entry plan yet justify none of
                  them. A WooCommerce store with fewer visits can impose more
                  dynamic work than a cached content site with more visits. Ask
                  how the provider counts visits, server bandwidth, CDN traffic,
                  storage, and plan overages.
                </p>
                <EvidenceNote>
                  <strong>Racklio analysis:</strong> “unmetered visitors” and
                  “unlimited visits” describe a visitor meter; they do not mean
                  unlimited bandwidth, storage, CPU, memory, or execution
                  capacity.
                  <Citation source={1} />
                  <Citation source={4} />
                  <Citation source={8} />
                  <Citation source={11} />
                  <Citation source={14} />
                </EvidenceNote>
              </ReviewSection>

              <ReviewSection
                code="14"
                id="backups"
                title="Backups and recovery"
              >
                <p>
                  Kinsta documents daily backups with 14-day retention on the
                  cited entry plan. WP Engine documents daily and on-demand
                  backups. Rocket.net lists daily backups and 30-day retention.
                  Pressable documents hourly database and daily filesystem
                  backups when changes are detected. Liquid Web's Spark Launch
                  table lists daily backups with seven-day retention.
                </p>
                <p>
                  Frequency and retention do not prove that a restore will meet
                  the business's recovery objective. Before purchase, ask what
                  is backed up, where copies are stored, how long they remain,
                  whether on-demand points are available, and how a restore is
                  tested.
                </p>
                <EvidenceNote>
                  <strong>Racklio analysis:</strong> a small WooCommerce store
                  should evaluate order and database recovery differently from a
                  brochure site because recent transactional changes may be
                  consequential.
                  <Citation source={2} />
                  <Citation source={5} />
                  <Citation source={8} />
                  <Citation source={13} />
                  <Citation source={14} />
                </EvidenceNote>
              </ReviewSection>

              <ReviewSection
                code="15"
                id="security"
                title="Security packaging and responsibility"
              >
                <p>
                  All five providers publish managed security controls in
                  different combinations. Examples across cited pages include
                  SSL, WAF, DDoS controls, malware controls, patching, and
                  backups. These are provider-described capabilities, not
                  evidence that incidents cannot occur.
                </p>
                <p>
                  The business still owns account access, user permissions,
                  domain security, payment settings, plugin choices, and its
                  response process. Ask which cleanup work is included, which
                  incidents are excluded, and who acts when a third-party plugin
                  is the cause.
                </p>
                <EvidenceNote>
                  <strong>Provider claim boundary:</strong> Racklio does not
                  convert security feature lists into breach-prevention claims
                  or comparative outcomes.
                </EvidenceNote>
              </ReviewSection>

              <ReviewSection
                code="16"
                id="support"
                title="Support scope matters more than the channel label"
              >
                <p>
                  Kinsta lists 24/7 chat; Rocket.net lists 24/7/365 chat and
                  tickets; Pressable lists 24/7 WordPress support; Liquid Web
                  publishes its support channels; WP Engine documents both
                  support access and detailed scope boundaries.
                </p>
                <p>
                  “24/7” describes availability, not resolution time or coverage
                  of every application issue. Ask whether support covers DNS,
                  email, custom code, plugin conflicts, malware cleanup,
                  performance diagnosis, and migration corrections.
                </p>
                <EvidenceNote>
                  <strong>Racklio analysis:</strong> no support experience or
                  response-time result was fabricated for this guide.
                  <Citation source={1} />
                  <Citation source={6} />
                  <Citation source={10} />
                  <Citation source={12} />
                  <Citation source={16} />
                </EvidenceNote>
              </ReviewSection>

              <ReviewSection
                code="17"
                id="email-domains"
                title="Business email and domain registration"
              >
                <TwoColumn
                  leftTitle="Email"
                  left={
                    <>
                      <p>
                        Kinsta says email hosting is not included and recommends
                        a dedicated provider. WP Engine says it does not provide
                        MX or DKIM for email hosting and recommends third-party
                        email. Pressable's plan table includes Professional
                        Email.
                      </p>
                      <p>
                        Rocket.net and Liquid Web bundled business-email
                        inclusion was not verified in the cited WordPress plan
                        documentation, so budget separately until confirmed.
                      </p>
                    </>
                  }
                  rightTitle="Domains and DNS"
                  right={
                    <>
                      <p>
                        Do not assume a managed WordPress plan includes domain
                        registration. WP Engine explicitly directs DNS
                        management to the domain registrar because it does not
                        provide nameservers.
                      </p>
                      <p>
                        Keep registrar ownership, DNS access, renewal billing,
                        and recovery contacts under business control regardless
                        of host.
                      </p>
                    </>
                  }
                />
                <p className="mt-6">
                  Business mailboxes and WordPress transactional mail are
                  separate requirements. Verify both before migration.
                </p>
                <Citation source={3} />
                <Citation source={6} />
                <Citation source={7} />
                <Citation source={11} />
              </ReviewSection>

              <ReviewSection
                code="18"
                id="workflow"
                title="Migrations, staging, and change control"
              >
                <p>
                  The cited plans publish migration assistance or tooling and
                  staging environments in varying forms. A small business should
                  clarify how many migrations are included, who validates the
                  moved site, whether DNS cutover is handled, and what happens
                  if a plugin or email form fails afterward.
                </p>
                <p>
                  Staging reduces risk only when there is a process: copy
                  production safely, restrict access, test forms and
                  transactions, approve the change, deploy it, and preserve a
                  recovery point.
                </p>
                <EvidenceNote>
                  <strong>Racklio analysis:</strong> a provider's migration or
                  staging feature does not replace acceptance testing by the
                  business or its developer.
                </EvidenceNote>
              </ReviewSection>

              <ReviewSection
                code="19"
                id="woocommerce"
                title="Small WooCommerce workloads"
              >
                <p>
                  A small store should not choose by published visit allowance
                  alone. Product catalog size, logged-in sessions, cart and
                  checkout activity, payment extensions, imports, scheduled
                  tasks, and order recovery all affect the operating
                  requirement.
                </p>
                <p>
                  Compare execution resources, cache exclusions, backup
                  granularity, staging, security responsibility, support
                  boundaries, and growth rules. If store revenue is material,
                  document who can restore service and how recent orders are
                  protected.
                </p>
                <EvidenceNote>
                  <strong>Racklio analysis:</strong> this guide does not claim
                  that any provider will achieve a particular WooCommerce
                  performance result.
                </EvidenceNote>
              </ReviewSection>

              <ReviewSection
                code="20"
                id="growth"
                title="Growth, multiple sites, and changing workloads"
              >
                <p>
                  Growth can mean more traffic, a second brand, a content
                  library, a store, multilingual publishing, or more staff. Each
                  changes the plan differently. Compare the next tier before
                  selecting the entry tier.
                </p>
                <p>
                  For multiple sites, check whether resources are pooled or per
                  site, how staging counts, whether collaborator access is
                  granular, and whether one demanding property can affect the
                  portfolio. Do not assume a “site” has the same definition
                  across providers.
                </p>
                <EvidenceNote>
                  <strong>Racklio analysis:</strong> a growth path is useful
                  only if its next cost and operating model remain
                  proportionate. Migration remains a valid future option.
                </EvidenceNote>
              </ReviewSection>

              <ReviewSection
                code="21"
                id="control"
                title="When VPS or server control is justified"
              >
                <p>
                  Liquid Web's managed VPS catalog is relevant when the business
                  needs root access, a custom stack, multiple application types,
                  control panels, or server-level configuration. Its cited entry
                  VPS and Spark WordPress plan are not equivalent products and
                  should not be compared as if they solve the same requirement.
                </p>
                <p>
                  A managed VPS can add flexibility and responsibility. A
                  growing WordPress site does not automatically need one. Start
                  with the application requirement, not the assumption that
                  server control signals maturity.
                </p>
                <EvidenceNote>
                  <strong>Racklio analysis:</strong> choose a specialized
                  managed WordPress platform when it meets the workload;
                  introduce VPS complexity only for a documented control or
                  software requirement.
                  <Citation source={17} />
                </EvidenceNote>
              </ReviewSection>

              <ReviewSection
                code="22"
                id="limitations"
                title="Important limitations of this guide"
              >
                <ul className="space-y-3">
                  <li>
                    No independent performance, uptime, security, or
                    support-response testing was performed.
                  </li>
                  <li>
                    Displayed prices, promotions, plan names, and limits can
                    change after the verification date.
                  </li>
                  <li>
                    Official documentation describes provider products and may
                    contain marketing claims.
                  </li>
                  <li>
                    Real fit depends on plugins, code, traffic shape, data,
                    staff capability, and business consequence.
                  </li>
                  <li>
                    Business-email inclusion for Rocket.net and Liquid Web
                    managed WordPress was not verified and is intentionally not
                    inferred.
                  </li>
                  <li>
                    No provider is ranked, scored, or declared universally
                    preferable.
                  </li>
                </ul>
              </ReviewSection>

              <ReviewSection
                code="23"
                id="matrix"
                title="Small-business decision matrix"
              >
                <div
                  className="overflow-x-auto"
                  tabIndex={0}
                  role="region"
                  aria-label="Small business hosting fit matrix"
                >
                  <table className="w-full min-w-[66rem] border-collapse text-left text-sm">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="p-3 font-semibold" scope="col">
                          Requirement
                        </th>
                        {[
                          'Kinsta',
                          'WP Engine',
                          'Rocket.net',
                          'Pressable',
                          'Liquid Web',
                        ].map((name) => (
                          <th
                            className="p-3 font-semibold"
                            scope="col"
                            key={name}
                          >
                            {name}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        [
                          'Low-consequence brochure site',
                          'More than this requirement needs',
                          'More than this requirement needs',
                          'More than this requirement needs',
                          'Consider',
                          'Consider',
                        ],
                        [
                          'Business-critical lead generation',
                          'Strong fit',
                          'Strong fit',
                          'Consider',
                          'Consider',
                          'Consider',
                        ],
                        [
                          'Growing content site',
                          'Strong fit',
                          'Strong fit',
                          'Strong fit',
                          'Strong fit',
                          'Consider',
                        ],
                        [
                          'Traffic-accounting simplicity',
                          'Depends',
                          'Depends',
                          'Strong fit',
                          'Depends',
                          'Consider',
                        ],
                        [
                          'Small WooCommerce store',
                          'Consider',
                          'Consider',
                          'Consider',
                          'Consider',
                          'Consider',
                        ],
                        [
                          'Business email in cited plan',
                          'Not designed for this requirement',
                          'Not designed for this requirement',
                          'Depends',
                          'Strong fit',
                          'Depends',
                        ],
                        [
                          'Structured dev environments',
                          'Strong fit',
                          'Strong fit',
                          'Consider',
                          'Consider',
                          'Consider',
                        ],
                        [
                          'Longer cited backup retention',
                          'Consider',
                          'Depends',
                          'Strong fit',
                          'Depends',
                          'Depends',
                        ],
                        [
                          'Multiple WordPress sites',
                          'Consider',
                          'Consider',
                          'Consider',
                          'Consider',
                          'Consider',
                        ],
                        [
                          'General-purpose VPS control',
                          'Not designed for this requirement',
                          'Not designed for this requirement',
                          'Not designed for this requirement',
                          'Not designed for this requirement',
                          'Strong fit',
                        ],
                        [
                          'Lowest annual-effective entry price',
                          'Depends',
                          'Depends',
                          'Depends',
                          'Consider',
                          'Strong fit',
                        ],
                        [
                          'Visit-based planning',
                          'Strong fit',
                          'Strong fit',
                          'Not designed for this requirement',
                          'Strong fit',
                          'Not designed for this requirement',
                        ],
                        [
                          'Finite bandwidth planning',
                          'Strong fit',
                          'Depends',
                          'Strong fit',
                          'Depends',
                          'Strong fit',
                        ],
                      ].map((row) => (
                        <tr className="border-b border-border" key={row[0]}>
                          {row.map((cell, index) =>
                            index === 0 ? (
                              <th
                                className="p-3 font-medium"
                                scope="row"
                                key={cell}
                              >
                                {cell}
                              </th>
                            ) : (
                              <td
                                className="p-3 text-muted-foreground"
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
                <p className="mt-5 text-sm text-muted-foreground">
                  Statuses express conditional workload fit, not quality, rank,
                  or measured outcome.
                </p>
              </ReviewSection>

              <ReviewSection
                code="24"
                id="choose"
                title="How to choose without overbuying"
              >
                <ol className="space-y-5">
                  <li>
                    <strong>1. Classify the site.</strong> Brochure, lead
                    generation, content, WooCommerce, or multi-site.
                  </li>
                  <li>
                    <strong>2. Price the consequence.</strong> Estimate what
                    downtime, lost form submissions, failed checkout, or slow
                    recovery would cost.
                  </li>
                  <li>
                    <strong>3. Inventory operations.</strong> Identify who owns
                    updates, backups, staging, DNS, email, security, and
                    incidents.
                  </li>
                  <li>
                    <strong>4. Normalize the plan.</strong> Compare commitment,
                    renewal, promotion, traffic, bandwidth, storage, overages,
                    and add-ons.
                  </li>
                  <li>
                    <strong>5. Test the boundary.</strong> Ask when the next
                    tier is required and what support will not do.
                  </li>
                  <li>
                    <strong>6. Keep a simple option.</strong> If premium
                    management does not remove meaningful risk or labor, do not
                    buy it yet.
                  </li>
                </ol>
                <ButtonLink className="mt-7" href="#related">
                  Read the Provider Evidence
                </ButtonLink>
              </ReviewSection>

              <ReviewSection
                code="25"
                id="faq"
                title="Frequently asked questions"
              >
                <div className="space-y-8">
                  {[
                    [
                      'Does every small business need managed WordPress hosting?',
                      'No. A stable, low-traffic brochure site with low operational consequence may be well served by a simpler host.',
                    ],
                    [
                      'What makes premium managed WordPress worth paying for?',
                      'It can be proportionate when staging, backups, migration, security packaging, support scope, or reduced maintenance removes meaningful risk or paid labor.',
                    ],
                    [
                      'Which provider is right for a small business?',
                      'There is no universal answer. Match the workload and operating model to the documented plan rather than choosing from a ranking.',
                    ],
                    [
                      'Is Kinsta suitable for a small business?',
                      'Consider it when a standardized WordPress workflow, staging, migrations, and separate specialist email align with the business.',
                    ],
                    [
                      'Is WP Engine suitable for a small business?',
                      'Consider it when structured Production, Staging, and Development environments and a documented support scope have operational value.',
                    ],
                    [
                      'Is Rocket.net suitable for a small business?',
                      'Consider it when unmetered visitor accounting is useful and finite bandwidth and storage fit the workload.',
                    ],
                    [
                      'Is Pressable suitable for a small business?',
                      'Consider it when visit-based planning, backups, staging, migrations, support, and its documented Professional Email inclusion fit.',
                    ],
                    [
                      'Is Liquid Web suitable for a small business?',
                      'Consider its WordPress plan on its own terms, and its separate VPS path only when server-level control is genuinely required.',
                    ],
                    [
                      'Do these plans include business email?',
                      'Kinsta and WP Engine document separate third-party email. Pressable lists Professional Email. Rocket.net and Liquid Web inclusion was not verified here.',
                    ],
                    [
                      'Do these plans include a domain name?',
                      'Do not assume so. Keep registrar ownership and DNS control explicit and verify the selected plan before purchase.',
                    ],
                    [
                      'What matters for a small WooCommerce store?',
                      'Dynamic workload, checkout reliability, backups, restore process, execution resources, security scope, and support boundaries matter more than site count alone.',
                    ],
                    [
                      'Are unmetered visitors the same as unlimited hosting?',
                      'No. Bandwidth, storage, execution capacity, acceptable use, and other plan limits still apply.',
                    ],
                    [
                      'Should a growing WordPress business move to a VPS?',
                      'Only when it needs server-level control, custom software, or a broader workload. Growth alone does not establish that requirement.',
                    ],
                  ].map(([question, answer]) => (
                    <div key={question}>
                      <h3 className="text-lg font-semibold">{question}</h3>
                      <p className="mt-2">{answer}</p>
                    </div>
                  ))}
                </div>
              </ReviewSection>

              <ReviewSection code="26" id="sources" title="Sources reviewed">
                <p>
                  Racklio reviewed these provider-controlled pages on August 9,
                  2026. Pricing and product terms can change. Confirm the
                  selected plan before purchase. Provider marketing statements
                  are not treated as independent outcomes.
                </p>
                <ol className="mt-6 space-y-3 text-sm">
                  {sources.map((source) => (
                    <li
                      className="flex gap-3"
                      id={`source-${source.id}`}
                      key={source.id}
                    >
                      <span className="font-mono text-xs text-muted-foreground">
                        [{source.id}]
                      </span>
                      <a
                        className="font-medium text-accent-strong underline underline-offset-4"
                        href={source.href}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        {source.provider}: {source.title}
                        <span className="sr-only"> (opens in a new tab)</span>
                      </a>
                    </li>
                  ))}
                </ol>
              </ReviewSection>

              <aside className="border-t border-border pt-10" id="related">
                <ResearchMarker code="RD" label="Related decisions" />
                <h2 className="mt-4 text-2xl font-semibold tracking-[-0.03em]">
                  Continue with provider evidence
                </h2>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {(
                    [
                      ['/reviews/kinsta', 'Kinsta Review'],
                      ['/reviews/wp-engine', 'WP Engine Review'],
                      ['/reviews/rocket-net', 'Rocket.net Review'],
                      ['/reviews/pressable', 'Pressable Review'],
                      ['/reviews/liquid-web', 'Liquid Web Review'],
                      [
                        '/comparisons/kinsta-vs-wp-engine',
                        'Kinsta vs WP Engine',
                      ],
                      [
                        '/comparisons/rocket-net-vs-pressable',
                        'Rocket.net vs Pressable',
                      ],
                      [
                        '/comparisons/liquid-web-vs-pressable',
                        'Liquid Web vs Pressable',
                      ],
                      [
                        '/best/managed-woocommerce-hosting',
                        'Managed WooCommerce Hosting',
                      ],
                      [
                        '/best/managed-wordpress-hosting-for-agencies',
                        'Managed WordPress for Agencies',
                      ],
                      [
                        '/best/managed-wordpress-hosting-for-high-traffic-websites',
                        'Managed WordPress for High-Traffic Websites',
                      ],
                    ] as const
                  ).map(([href, label]) => (
                    <Link
                      className="border border-border p-4 font-medium"
                      href={href}
                      key={href}
                    >
                      {label}
                    </Link>
                  ))}
                </div>
                <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm">
                  <Link href="/#comparisons">Comparison hub</Link>
                  <Link href="/#guides">Buying guides</Link>
                  <Link href="/">Racklio homepage</Link>
                </div>
              </aside>
            </article>
          </div>
        </Container>
      </Section>
    </PageLayout>
  );
}
