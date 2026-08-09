import { useEffect } from 'react';
import { ResearchMarker } from '@/components/brand';
import { PageLayout, SiteFooter, SiteHeader } from '@/components/layout';
import { EvidenceNote, ReviewSection } from '@/components/reviews';
import { getProviderUrl } from '@/lib/provider-links';
import {
  ButtonLink,
  Card,
  CardContent,
  Container,
  Link,
  Section,
} from '@/components/ui';

const canonicalUrl = 'https://racklio.com/comparisons/liquid-web-vs-rocket-net';
const liquidWebUrl = getProviderUrl('liquidWeb');
const rocketNetUrl = getProviderUrl('rocketNet');
const sources = [
  {
    id: 1,
    p: 'Liquid Web',
    t: 'WordPress hosting',
    h: 'https://www.liquidweb.com/wordpress-hosting/',
  },
  {
    id: 2,
    p: 'Liquid Web',
    t: 'Managed WordPress',
    h: 'https://www.liquidweb.com/wordpress-hosting/managed-wordpress/',
  },
  {
    id: 3,
    p: 'Liquid Web',
    t: 'Managed VPS',
    h: 'https://www.liquidweb.com/vps-hosting/managed-vps/',
  },
  {
    id: 4,
    p: 'Liquid Web',
    t: 'Dedicated servers',
    h: 'https://www.liquidweb.com/dedicated-server-hosting/',
  },
  {
    id: 5,
    p: 'Liquid Web',
    t: 'Support',
    h: 'https://www.liquidweb.com/support/',
  },
  {
    id: 6,
    p: 'Rocket.net',
    t: 'Current pricing',
    h: 'https://rocket.net/pricing/',
  },
  {
    id: 7,
    p: 'Rocket.net',
    t: 'Managed WordPress',
    h: 'https://rocket.net/managed-wordpress-hosting/',
  },
  {
    id: 8,
    p: 'Rocket.net',
    t: 'WordPress support',
    h: 'https://rocket.net/features/experienced-wordpress-support/',
  },
  {
    id: 9,
    p: 'Rocket.net',
    t: 'Security platform',
    h: 'https://rocket.net/features/secure-wordpress-hosting/',
  },
  {
    id: 10,
    p: 'Rocket.net',
    t: 'Agency hosting',
    h: 'https://rocket.net/solutions/managed-wordpress-hosting-for-agencies/',
  },
  {
    id: 11,
    p: 'Rocket.net',
    t: 'Terms',
    h: 'https://rocket.net/terms-of-service/',
  },
] as const;
const toc = [
  ['Biggest difference', '#difference'],
  ['WordPress comparison', '#wordpress'],
  ['Pricing', '#pricing'],
  ['Resources', '#resources'],
  ['Infrastructure control', '#control'],
  ['VPS and dedicated', '#infrastructure'],
  ['Architecture', '#architecture'],
  ['Security', '#security'],
  ['Backups', '#backups'],
  ['Workflow and support', '#workflow'],
  ['Agency and workloads', '#fit'],
  ['Limitations', '#limitations'],
  ['Decision matrix', '#decision'],
  ['Final decision', '#final'],
  ['FAQ', '#faq'],
  ['Sources', '#sources'],
] as const;
const rows = [
  [
    'Primary scope',
    'WordPress, VPS, dedicated, broader infrastructure',
    'Specialized managed WordPress',
  ],
  [
    'WordPress entry',
    'Spark Launch: $5 effective; $60 prepaid annually',
    'Starter: $30 monthly; $25 annual-effective; $1 first month',
  ],
  ['Sites', '1 on Spark Launch', '1 on Starter'],
  [
    'Traffic',
    'Unlimited visits; finite bandwidth',
    'Unmetered visitors; finite bandwidth',
  ],
  ['Storage', '15 GB', '10 GB'],
  ['Bandwidth', '2 TB', '50 GB'],
  ['PHP model', '10 workers/site', 'Unlimited PHP workers listed'],
  ['Backups', 'Daily; 7-day Launch retention', 'Daily; 30-day retention'],
  ['Staging', 'Free staging site', 'Staging documented'],
  [
    'Control',
    'Root on applicable VPS/dedicated products',
    'No general-purpose root model',
  ],
  [
    'Support',
    'Across WordPress and server products',
    '24/7/365 WordPress chat/tickets',
  ],
  [
    'Scaling',
    'WordPress to 250 sites plus VPS/dedicated',
    'Managed and Agency WordPress tiers',
  ],
] as const;
const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Liquid Web vs Rocket.net: Managed Hosting Comparison',
  description:
    'Evidence-based Liquid Web vs Rocket.net comparison of WordPress hosting, pricing, resources, infrastructure control, security, backups, support, and fit.',
  datePublished: '2026-08-09',
  dateModified: '2026-08-09',
  mainEntityOfPage: canonicalUrl,
  isAccessibleForFree: true,
  author: { '@type': 'Organization', name: 'Racklio Editorial' },
  publisher: {
    '@type': 'Organization',
    name: 'Keleva LLC',
    brand: { '@type': 'Brand', name: 'Racklio' },
  },
  citation: sources.map((s) => s.h),
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
      name: 'Comparisons',
      item: 'https://racklio.com/comparisons',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Liquid Web vs Rocket.net',
      item: canonicalUrl,
    },
  ],
};
function Cite({ n }: { n: number }) {
  return (
    <sup>
      <a
        aria-label={`Source ${n}`}
        className="ml-1 text-xs font-semibold text-accent-strong underline"
        href={`#source-${n}`}
      >
        [{n}]
      </a>
    </sup>
  );
}
export function LiquidWebVsRocketNet() {
  useEffect(() => {
    const m = document.querySelector<HTMLMetaElement>(
      'meta[name="description"]',
    );
    const p = m?.content;
    if (m)
      m.content =
        'Compare Liquid Web and Rocket.net across WordPress hosting, pricing, resources, infrastructure control, support, and workload fit.';
    return () => {
      if (m && p) m.content = p;
    };
  }, []);
  return (
    <PageLayout header={<SiteHeader />} footer={<SiteFooter />}>
      <title>
        Liquid Web vs Rocket.net (2026): Hosting Comparison | Racklio
      </title>
      <link rel="canonical" href={canonicalUrl} />
      <meta property="og:type" content="article" />
      <meta
        property="og:title"
        content="Liquid Web vs Rocket.net: Managed Hosting Comparison"
      />
      <meta
        property="og:description"
        content="Compare specialized managed WordPress with broader managed infrastructure using current official facts."
      />
      <meta property="og:url" content={canonicalUrl} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content="Liquid Web vs Rocket.net | Racklio" />
      <meta
        name="twitter:description"
        content="Conditional hosting guidance without rankings or scores."
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
          <nav aria-label="Breadcrumb" className="py-3 text-xs">
            <Link href="/">Home</Link> /{' '}
            <Link href="/#comparisons">Comparisons</Link> /{' '}
            <span aria-current="page">Liquid Web vs Rocket.net</span>
          </nav>
        </Container>
      </div>
      <Section className="border-b border-border" spacing="md">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
            <div>
              <ResearchMarker code="CP" label="Provider comparison" />
              <h1 className="mt-6 text-4xl leading-[1.08] font-semibold tracking-[-0.05em] sm:text-5xl lg:text-6xl">
                Liquid Web vs Rocket.net: broader infrastructure or specialized
                WordPress?
              </h1>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                Rocket.net standardizes managed WordPress. Liquid Web offers
                managed WordPress plus VPS and dedicated servers. Compare
                WordPress plans directly; consider broader Liquid Web products
                only when control or non-WordPress scope matters.
              </p>
              <p className="mt-7 text-xs text-muted-foreground">
                Last verified: August 9, 2026 · Official sources reviewed August
                9, 2026
              </p>
            </div>
            <Card>
              <CardContent>
                <ResearchMarker code="QD" label="Quick decision" />
                <dl className="mt-6 space-y-5">
                  <div>
                    <dt className="text-xs font-semibold uppercase">
                      Choose Rocket.net if
                    </dt>
                    <dd className="mt-2 text-sm">
                      A standardized WordPress-only platform, bundled
                      edge/security stack, unmetered visitors, and 30-day
                      backups fit.
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase">
                      Choose Liquid Web if
                    </dt>
                    <dd className="mt-2 text-sm">
                      You need managed WordPress or a path to VPS, root access,
                      custom services, or dedicated infrastructure.
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase">
                      Consider another provider if
                    </dt>
                    <dd className="mt-2 text-sm">
                      Neither management boundary matches your workload or team.
                    </dd>
                  </div>
                </dl>
                <div className="mt-6 flex flex-col gap-3">
                  <ButtonLink
                    href={liquidWebUrl}
                    rel="sponsored nofollow noopener"
                    target="_blank"
                  >
                    Visit Liquid Web Official Website
                  </ButtonLink>
                  <ButtonLink href="#reviews" variant="secondary">
                    Read Individual Reviews
                  </ButtonLink>
                </div>
                <p className="mt-4 text-xs text-muted-foreground">
                  Racklio may earn a commission from certain links at no extra
                  cost to you.
                </p>
              </CardContent>
            </Card>
          </div>
        </Container>
      </Section>
      <Section className="border-b border-border" spacing="sm">
        <Container>
          <h2 className="text-lg font-semibold">
            Why you can trust this comparison
          </h2>
          <p className="mt-4 text-sm text-muted-foreground">
            Current official documentation · Independent editorial analysis · No
            promotional rankings · Commercial relationships do not determine
            recommendations
          </p>
        </Container>
      </Section>
      <Section className="border-b border-border" spacing="sm">
        <Container>
          <h2 className="text-2xl font-semibold">At-a-glance comparison</h2>
          <div
            className="mt-6 overflow-x-auto border border-border"
            tabIndex={0}
            aria-label="Scrollable comparison"
          >
            <table className="min-w-[58rem] w-full text-left text-sm">
              <caption className="sr-only">
                Liquid Web and Rocket.net factual comparison
              </caption>
              <thead>
                <tr>
                  <th className="p-4" scope="col">
                    Factor
                  </th>
                  <th className="p-4" scope="col">
                    Liquid Web
                  </th>
                  <th className="p-4" scope="col">
                    Rocket.net
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr className="border-t border-border" key={r[0]}>
                    <th className="p-4" scope="row">
                      {r[0]}
                    </th>
                    <td className="p-4 text-muted-foreground">{r[1]}</td>
                    <td className="p-4 text-muted-foreground">{r[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </Section>
      <Section spacing="md">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[14rem_minmax(0,1fr)] lg:gap-16">
            <aside>
              <nav aria-label="Comparison contents">
                {toc.map(([l, h]) => (
                  <Link
                    className="block border-b border-border py-3 text-xs"
                    href={h}
                    key={h}
                  >
                    {l}
                  </Link>
                ))}
              </nav>
            </aside>
            <article className="min-w-0">
              <ReviewSection
                code="01"
                id="difference"
                title="The biggest difference"
              >
                <p className="text-base leading-8">
                  <strong>Verified fact:</strong> Rocket.net is
                  WordPress-specific. Liquid Web sells managed WordPress,
                  managed VPS, and dedicated servers.
                  <Cite n={1} />
                  <Cite n={3} />
                  <Cite n={4} />
                  <Cite n={7} />
                </p>
                <p className="mt-4 text-base leading-8">
                  <strong>Racklio analysis:</strong> specialization can reduce
                  operational complexity; broader infrastructure can fit custom
                  stacks and mixed applications. Neither is inherently
                  preferable.
                </p>
              </ReviewSection>
              <ReviewSection
                code="02"
                id="wordpress"
                title="WordPress versus WordPress"
              >
                <p className="text-base leading-8">
                  Liquid Web Spark Launch currently lists one site, 15 GB
                  storage, 2 TB bandwidth, 10 PHP workers, unlimited visits,
                  daily backups with seven-day retention, Cloudflare Enterprise,
                  WAF, DDoS protection, staging, and self-service migration at
                  $5 monthly effective with $60 prepaid annually.
                  <Cite n={1} /> Rocket.net Starter lists one install, 10 GB
                  storage, 50 GB bandwidth, unmetered visitors, unlimited PHP
                  workers, daily backups with 30-day retention, Enterprise CDN,
                  WAF, malware protection, SSL, and migrations at $30 monthly or
                  $25 annual-effective.
                  <Cite n={6} />
                </p>
                <EvidenceNote>
                  Unlimited/unmetered visitors do not mean unlimited resources.
                  Both retain finite transfer, storage, and platform
                  constraints.
                </EvidenceNote>
              </ReviewSection>
              <ReviewSection code="03" id="pricing" title="Pricing compared">
                <p className="text-base leading-8">
                  Liquid Web's detailed plan table—not its conflicting $4
                  summary headline—is used here. Its $5 Spark figure requires
                  annual prepayment. Rocket.net's $1 first month is promotional;
                  ongoing Starter is $30 monthly or $25 annual-effective. Liquid
                  Web managed VPS is a separate product: $36 monthly for two
                  months before the displayed $72 regular price, with 2 vCPU, 4
                  GB RAM, 80 GB SSD, and 3 TB bandwidth.
                  <Cite n={1} />
                  <Cite n={3} />
                  <Cite n={6} />
                </p>
                <EvidenceNote>
                  VPS pricing is not compared with Rocket.net WordPress pricing
                  as an equivalent purchase.
                </EvidenceNote>
              </ReviewSection>
              <ReviewSection
                code="04"
                id="resources"
                title="Traffic, bandwidth, and resources"
              >
                <p className="text-base leading-8">
                  Liquid Web resource models vary by product. Managed WordPress
                  publishes visits, storage, bandwidth, and PHP workers; VPS
                  publishes vCPU, RAM, SSD, and bandwidth. Rocket.net publishes
                  installs, bandwidth, storage, and unlimited PHP workers with
                  unmetered visitors. Rocket.net overages are $2/GB storage and
                  $0.08/GB bandwidth.
                  <Cite n={1} />
                  <Cite n={3} />
                  <Cite n={6} />
                </p>
                <p className="mt-4 text-base leading-8">
                  <strong>Racklio analysis:</strong> vCPU/RAM and PHP-worker
                  disclosures are not equivalent capacity measures.
                </p>
              </ReviewSection>
              <ReviewSection
                code="05"
                id="control"
                title="When infrastructure control matters"
              >
                <p className="text-base leading-8">
                  Applicable Liquid Web VPS and dedicated products list root
                  access, control-panel options, APIs, and broader server
                  configuration.
                  <Cite n={3} />
                  <Cite n={4} /> Rocket.net abstracts infrastructure within
                  managed WordPress.
                  <Cite n={7} />
                </p>
                <p className="mt-4 text-base leading-8">
                  Choose control for non-WordPress software, custom services,
                  heterogeneous applications, or dedicated-resource requirements
                  only when the team can own the added operational
                  responsibility.
                </p>
              </ReviewSection>
              <ReviewSection
                code="06"
                id="infrastructure"
                title="VPS and dedicated scaling"
              >
                <p className="text-base leading-8">
                  Liquid Web provides managed VPS resizing and dedicated
                  single-tenant paths. Exact dedicated pricing is omitted
                  because configurations vary materially. Rocket.net scales
                  through managed and Agency WordPress tiers rather than
                  general-purpose root hosting.
                </p>
              </ReviewSection>
              <ReviewSection
                code="07"
                id="architecture"
                title="CDN, edge, and architecture"
              >
                <p className="text-base leading-8">
                  <strong>Provider claims:</strong> Liquid Web Managed WordPress
                  lists Cloudflare Enterprise, WAF, and DDoS protection.
                  Rocket.net lists Enterprise CDN, WAF, network firewalling,
                  malware protection, SSL, and activity controls.
                  <Cite n={1} />
                  <Cite n={9} />
                </p>
                <EvidenceNote>
                  Racklio has not benchmarked either platform. Architecture
                  descriptions do not prove comparative performance.
                </EvidenceNote>
              </ReviewSection>
              <ReviewSection code="08" id="security" title="Security">
                <p className="text-base leading-8">
                  Security must be scoped by Liquid Web product; Managed
                  WordPress inclusions are not transferred to every VPS or
                  dedicated configuration. Rocket.net's listed controls apply to
                  its managed WordPress platform. Neither is declared globally
                  more secure.
                </p>
              </ReviewSection>
              <ReviewSection
                code="09"
                id="backups"
                title="Backups and recovery"
              >
                <p className="text-base leading-8">
                  Rocket.net lists daily backups with 30-day retention.
                  <Cite n={6} /> Liquid Web Spark Launch lists daily backups
                  with seven-day retention, while Thrive and Elevate list 30
                  days.
                  <Cite n={1} /> VPS and dedicated backup arrangements are not
                  generalized from WordPress plans.
                </p>
              </ReviewSection>
              <ReviewSection
                code="10"
                id="workflow"
                title="Staging, support, and migrations"
              >
                <p className="text-base leading-8">
                  Both WordPress offerings document staging and migrations.
                  Rocket.net lists 24/7/365 chat and ticket support focused on
                  WordPress.
                  <Cite n={8} /> Liquid Web supports WordPress and broader
                  server products, with responsibility depending on the selected
                  management level.
                  <Cite n={5} /> This is a scope comparison, not a
                  support-quality claim.
                </p>
              </ReviewSection>
              <ReviewSection
                code="11"
                id="fit"
                title="Agency, WooCommerce, and workload fit"
              >
                <p className="text-base leading-8">
                  A WordPress-only agency may prefer Rocket.net's standardized
                  workflow and bundled edge/security model. An
                  infrastructure-diverse agency may prefer Liquid Web VPS
                  consolidation or dedicated options. WooCommerce and
                  high-traffic buyers should validate dynamic requests,
                  cacheability, database load, backups, transfer, staging,
                  security, and scaling. For non-WordPress applications, Liquid
                  Web has broader product scope; Rocket.net does not.
                </p>
              </ReviewSection>
              <ReviewSection code="12" id="limitations" title="Limitations">
                <div className="grid gap-px bg-border md:grid-cols-2">
                  <div className="bg-surface-raised p-5">
                    <h3 className="font-semibold">Liquid Web</h3>
                    <ul className="mt-3 space-y-2 text-sm">
                      <li>
                        Unlike products make headline prices easy to misread.
                      </li>
                      <li>VPS promotions expire.</li>
                      <li>More control adds responsibility.</li>
                      <li>Backups and security vary by product.</li>
                    </ul>
                  </div>
                  <div className="bg-surface-raised p-5">
                    <h3 className="font-semibold">Rocket.net</h3>
                    <ul className="mt-3 space-y-2 text-sm">
                      <li>WordPress-only.</li>
                      <li>No root/general-purpose server model.</li>
                      <li>Bandwidth and storage remain finite.</li>
                      <li>No hosted email.</li>
                    </ul>
                  </div>
                </div>
              </ReviewSection>
              <ReviewSection code="13" id="decision" title="Decision matrix">
                <div
                  className="overflow-x-auto border border-border"
                  tabIndex={0}
                >
                  <table className="min-w-[48rem] w-full text-left text-sm">
                    <caption className="sr-only">
                      Workload decision matrix
                    </caption>
                    <thead>
                      <tr>
                        <th className="p-4">Scenario</th>
                        <th className="p-4">Direction</th>
                        <th className="p-4">Reason</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        [
                          'Single WordPress site',
                          'Depends',
                          'Compare term, resources, backups, workflow, and support.',
                        ],
                        [
                          'WordPress agency',
                          'Consider Rocket.net',
                          'Standardized WordPress and agency tooling.',
                        ],
                        [
                          'WooCommerce',
                          'Depends',
                          'Validate dynamic workload and recovery.',
                        ],
                        [
                          'High-traffic publisher',
                          'Depends',
                          'Model transfer and uncached work.',
                        ],
                        [
                          'Mixed applications',
                          'Consider Liquid Web',
                          'VPS supports broader stacks.',
                        ],
                        [
                          'Root control',
                          'Consider Liquid Web',
                          'Applicable VPS/dedicated products list root.',
                        ],
                        [
                          'Dedicated infrastructure',
                          'Consider Liquid Web',
                          'Dedicated products are available.',
                        ],
                        [
                          'Simplified WordPress operations',
                          'Consider Rocket.net',
                          'Infrastructure is abstracted.',
                        ],
                        [
                          'Bundled edge/security',
                          'Depends',
                          'Both WordPress products list bundled controls.',
                        ],
                        [
                          'Non-WordPress application',
                          'Consider Liquid Web',
                          'Broader product scope.',
                        ],
                      ].map((r) => (
                        <tr className="border-t border-border" key={r[0]}>
                          <th className="p-4" scope="row">
                            {r[0]}
                          </th>
                          <td className="p-4">{r[1]}</td>
                          <td className="p-4 text-muted-foreground">{r[2]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </ReviewSection>
              <ReviewSection code="14" id="final" title="Final decision">
                <p className="text-base leading-8">
                  <strong>The Right Choice &gt; The Best Choice.</strong> Choose
                  Rocket.net when WordPress specialization, infrastructure
                  abstraction, bundled edge/security, unmetered visitors, and
                  30-day backups align. Choose Liquid Web when managed WordPress
                  or a future path to VPS, root control, mixed applications, or
                  dedicated infrastructure aligns.
                </p>
                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <ButtonLink
                    href={liquidWebUrl}
                    rel="sponsored nofollow noopener"
                    target="_blank"
                  >
                    Visit Liquid Web
                  </ButtonLink>
                  <ButtonLink
                    href={rocketNetUrl}
                    rel="sponsored nofollow noopener"
                    target="_blank"
                    variant="secondary"
                  >
                    Visit Rocket.net
                  </ButtonLink>
                </div>
              </ReviewSection>
              <ReviewSection
                code="15"
                id="faq"
                title="Frequently asked questions"
              >
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold">
                      Are these equivalent platforms?
                    </h3>
                    <p className="mt-2 text-sm">
                      No. They overlap in WordPress; Liquid Web also provides
                      VPS and dedicated infrastructure.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold">
                      Is Liquid Web VPS cheaper?
                    </h3>
                    <p className="mt-2 text-sm">
                      The $36 figure is a two-month promotion before $72 and
                      buys a different product, so it is not a direct Starter
                      comparison.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold">
                      Does unmetered mean unlimited?
                    </h3>
                    <p className="mt-2 text-sm">
                      No. Rocket.net still limits bandwidth and storage.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold">
                      Which fits non-WordPress workloads?
                    </h3>
                    <p className="mt-2 text-sm">
                      Liquid Web has broader VPS and dedicated scope; Rocket.net
                      is WordPress-focused.
                    </p>
                  </div>
                </div>
              </ReviewSection>
              <section
                id="sources"
                aria-labelledby="sources-heading"
                className="mt-10 border-t border-border pt-10"
              >
                <h2 id="sources-heading" className="text-2xl font-semibold">
                  Sources and methodology
                </h2>
                <p className="mt-4 text-sm text-muted-foreground">
                  Official sources reviewed August 9, 2026. Provider facts are
                  attributed; recommendations are Racklio analysis. No
                  independent benchmarks were performed.
                </p>
                <ol className="mt-6 space-y-3">
                  {sources.map((s) => (
                    <li id={`source-${s.id}`} className="text-sm" key={s.id}>
                      [{s.id}]{' '}
                      <a
                        className="underline"
                        href={s.h}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {s.p} — {s.t}
                      </a>
                    </li>
                  ))}
                </ol>
              </section>
              <aside id="reviews" className="mt-12 border border-border p-6">
                <h2 className="text-2xl font-semibold">
                  Continue with individual evidence.
                </h2>
                <div className="mt-6 flex flex-wrap gap-3">
                  <ButtonLink href="/reviews/liquid-web" variant="secondary">
                    Liquid Web Review
                  </ButtonLink>
                  <ButtonLink href="/reviews/rocket-net" variant="secondary">
                    Rocket.net Review
                  </ButtonLink>
                  <ButtonLink
                    href="/comparisons/liquid-web-vs-wp-engine"
                    variant="secondary"
                  >
                    Liquid Web vs WP Engine
                  </ButtonLink>
                  <ButtonLink
                    href="/comparisons/liquid-web-vs-kinsta"
                    variant="secondary"
                  >
                    Liquid Web vs Kinsta
                  </ButtonLink>
                  <ButtonLink
                    href="/comparisons/rocket-net-vs-wp-engine"
                    variant="secondary"
                  >
                    Rocket.net vs WP Engine
                  </ButtonLink>
                  <ButtonLink
                    href="/comparisons/rocket-net-vs-kinsta"
                    variant="secondary"
                  >
                    Rocket.net vs Kinsta
                  </ButtonLink>
                  <ButtonLink
                    href="/comparisons/rocket-net-vs-pressable"
                    variant="secondary"
                  >
                    Rocket.net vs Pressable
                  </ButtonLink>
                </div>
              </aside>
            </article>
          </div>
        </Container>
      </Section>
    </PageLayout>
  );
}
