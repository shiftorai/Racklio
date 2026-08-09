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
  'https://racklio.com/best/managed-wordpress-hosting-for-saas-websites';

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
    title: 'Managed WordPress documentation',
    href: 'https://kinsta.com/docs/wordpress-hosting/',
  },
  {
    id: 3,
    provider: 'Kinsta',
    title: 'Kinsta API',
    href: 'https://kinsta.com/docs/kinsta-api/',
  },
  {
    id: 4,
    provider: 'Kinsta',
    title: 'DevKinsta',
    href: 'https://kinsta.com/devkinsta/',
  },
  {
    id: 5,
    provider: 'Kinsta',
    title: 'WordPress for B2B SaaS',
    href: 'https://kinsta.com/blog/optimize-wordpress-b2b-saas/',
  },
  {
    id: 6,
    provider: 'Kinsta',
    title: 'Sevalla service boundary',
    href: 'https://kinsta.com/docs/service-information/sevalla-overview/',
  },
  {
    id: 7,
    provider: 'WP Engine',
    title: 'Managed WordPress plans',
    href: 'https://wpengine.com/plans/',
  },
  {
    id: 8,
    provider: 'WP Engine',
    title: 'Managed hosting platform',
    href: 'https://wpengine.com/managed-hosting-platform/',
  },
  {
    id: 9,
    provider: 'WP Engine',
    title: 'Sites and environments',
    href: 'https://wpengine.com/support/environments/',
  },
  {
    id: 10,
    provider: 'WP Engine',
    title: 'SSH Gateway',
    href: 'https://wpengine.com/support/ssh-gateway/',
  },
  {
    id: 11,
    provider: 'WP Engine',
    title: 'Git deployment',
    href: 'https://wpengine.com/support/git/',
  },
  {
    id: 12,
    provider: 'WP Engine',
    title: 'Headless platform',
    href: 'https://wpengine.com/headless-wordpress/',
  },
  {
    id: 13,
    provider: 'Rocket.net',
    title: 'Pricing and resources',
    href: 'https://rocket.net/pricing/',
  },
  {
    id: 14,
    provider: 'Rocket.net',
    title: 'Managed WordPress platform',
    href: 'https://rocket.net/managed-wordpress-hosting/',
  },
  {
    id: 15,
    provider: 'Rocket.net',
    title: 'Platform documentation',
    href: 'https://docs.rocket.net/',
  },
  {
    id: 16,
    provider: 'Pressable',
    title: 'Pricing and resources',
    href: 'https://pressable.com/pricing/',
  },
  {
    id: 17,
    provider: 'Pressable',
    title: 'Platform features',
    href: 'https://pressable.com/features/',
  },
  {
    id: 18,
    provider: 'Pressable',
    title: 'Knowledge base',
    href: 'https://pressable.com/knowledgebase/',
  },
  {
    id: 19,
    provider: 'Pressable',
    title: 'Backup documentation',
    href: 'https://pressable.com/knowledgebase/accessing-backups/',
  },
  {
    id: 20,
    provider: 'Pressable',
    title: 'Sandbox sites',
    href: 'https://pressable.com/knowledgebase/how-sandbox-sites-work-on-pressable/',
  },
  {
    id: 21,
    provider: 'Liquid Web',
    title: 'Managed WordPress hosting',
    href: 'https://www.liquidweb.com/wordpress-hosting/',
  },
  {
    id: 22,
    provider: 'Liquid Web',
    title: 'Managed VPS',
    href: 'https://www.liquidweb.com/vps-hosting/managed-vps/',
  },
  {
    id: 23,
    provider: 'Liquid Web',
    title: 'Dedicated servers',
    href: 'https://www.liquidweb.com/dedicated-server-hosting/',
  },
  {
    id: 24,
    provider: 'Liquid Web',
    title: 'Application hosting',
    href: 'https://www.liquidweb.com/hosting-solutions/application-hosting/',
  },
] as const;

const toc = [
  ['Direct answer', '#direct-answer'],
  ['Decision snapshot', '#snapshot'],
  ['Website vs application', '#boundary'],
  ['Where WordPress fits', '#stack'],
  ['App-like WordPress', '#app-like'],
  ['Methodology', '#methodology'],
  ['Provider analysis', '#providers'],
  ['Pricing', '#pricing'],
  ['Marketing vs portals', '#marketing-portals'],
  ['Traffic models', '#traffic'],
  ['APIs and automation', '#apis'],
  ['Development workflow', '#development'],
  ['Headless WordPress', '#headless'],
  ['Security boundaries', '#security'],
  ['Backup boundaries', '#backups'],
  ['High-traffic content', '#high-traffic'],
  ['Customer portals', '#portals'],
  ['Subscriptions', '#subscriptions'],
  ['Developer teams', '#developers'],
  ['Multiple properties', '#multiple'],
  ['When WordPress is not enough', '#not-enough'],
  ['Application infrastructure', '#infrastructure'],
  ['Limitations', '#limitations'],
  ['Decision matrix', '#matrix'],
  ['How to choose', '#choose'],
  ['FAQ', '#faq'],
  ['Sources', '#sources'],
] as const;

const snapshotRows = [
  [
    'Standardized SaaS marketing/content layer',
    'Kinsta',
    'Managed WordPress, staging, DevKinsta, and a WordPress-focused API can support content operations.',
  ],
  [
    'Structured Production/Staging/Development workflow',
    'WP Engine',
    'Its environment, SSH, Git, and current headless documentation merit evaluation.',
  ],
  [
    'Avoiding visitor-count billing for the WordPress layer',
    'Rocket.net',
    'Visitors are unmetered, while bandwidth and storage remain finite.',
  ],
  [
    'Collaborative or multi-property WordPress operations',
    'Pressable',
    'Published platform tooling includes collaboration, staging/sandbox, SSH, WP-CLI, and automation-oriented workflows.',
  ],
  [
    'Custom backend services or broader server control',
    'Liquid Web infrastructure',
    'VPS, dedicated, and application hosting are separate from managed WordPress and should be evaluated separately.',
  ],
] as const;

const pricingRows = [
  [
    'Kinsta Single 20GB',
    '$35 monthly',
    '$30 effective monthly; $350 prepaid annually',
    '1 install; 10GB storage; 20GB server bandwidth or 35,000 visits; 125GB CDN',
  ],
  [
    'WP Engine Startup',
    'Starts at $30 monthly',
    'Confirm current annual offer directly',
    '1 site; 25,000 estimated visits; 10GB storage; 75GB bandwidth',
  ],
  [
    'Rocket.net Starter',
    '$30 monthly',
    '$25 annual-effective; $1 first month shown',
    '1 install; unmetered visitors; 10GB storage; 50GB bandwidth',
  ],
  [
    'Pressable Signature 1',
    'Monthly option available',
    '$20.83 effective monthly; $250 prepaid annually',
    '1 install; 30,000 visits; 20GB storage; published per-site resources',
  ],
  [
    'Liquid Web Spark Launch',
    'Annual term shown',
    '$5 effective monthly; $60 prepaid annually',
    'Managed WordPress scope; do not compare as equivalent to VPS/application hosting',
  ],
] as const;

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Best Managed WordPress Hosting for SaaS Websites',
  description:
    'An evidence-first guide to managed WordPress hosting for SaaS marketing sites, content systems, portals, and split application architectures.',
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
      name: 'Managed WordPress Hosting for SaaS Websites',
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
  traffic,
  workflow,
  api,
  operations,
  scaling,
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
  traffic: string;
  workflow: string;
  api: string;
  operations: string;
  scaling: string;
  limitation: string;
  analysis: string;
  citations: number[];
}) {
  return (
    <ReviewSection code={code} id={id} title={name}>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <h3 className="text-base font-semibold">SaaS scenario fit</h3>
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
          ['Traffic and resource model', traffic],
          ['Developer workflow', workflow],
          ['API and automation', api],
          ['Staging, backups, and security boundary', operations],
          ['Scaling path', scaling],
          ['Biggest limitation', limitation],
        ].map(([term, detail]) => (
          <div className="grid gap-2 py-4 sm:grid-cols-[12rem_1fr]" key={term}>
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

export function ManagedWordPressHostingForSaasWebsites() {
  useEffect(() => {
    const meta = document.querySelector<HTMLMetaElement>(
      'meta[name="description"]',
    );
    const previous = meta?.content;
    if (meta)
      meta.content =
        'Compare managed WordPress hosting for SaaS marketing sites, portals, headless content, and split application architectures.';
    return () => {
      if (meta && previous) meta.content = previous;
    };
  }, []);
  return (
    <PageLayout footer={<SiteFooter />} header={<SiteHeader />}>
      <title>
        Best Managed WordPress Hosting for SaaS Websites (2026) | Racklio
      </title>
      <link rel="canonical" href={canonicalUrl} />
      <meta property="og:type" content="article" />
      <meta
        property="og:title"
        content="Managed WordPress Hosting for SaaS Websites"
      />
      <meta
        property="og:description"
        content="Choose hosting by whether WordPress is a content layer, dynamic customer experience, or part of a broader SaaS architecture."
      />
      <meta property="og:url" content={canonicalUrl} />
      <meta name="twitter:card" content="summary" />
      <meta
        name="twitter:title"
        content="Managed WordPress Hosting for SaaS Websites"
      />
      <meta
        name="twitter:description"
        content="An evidence-first guide to WordPress in SaaS web stacks."
      />
      <script type="application/ld+json">
        {JSON.stringify(articleSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>
      <nav
        aria-label="Breadcrumb"
        className="border-b border-border bg-surface-raised"
      >
        <Container>
          <ol className="flex flex-wrap items-center gap-2 py-4 text-xs text-muted-foreground">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link href="/#guides">Best For</Link>
            </li>
            <li aria-hidden="true">/</li>
            <li aria-current="page">
              Managed WordPress Hosting for SaaS Websites
            </li>
          </ol>
        </Container>
      </nav>
      <Section className="border-b border-border bg-surface-subtle py-16 sm:py-20 lg:py-24">
        <Container>
          <div className="grid items-start gap-12 lg:grid-cols-[1.08fr_0.92fr]">
            <div>
              <ResearchMarker code="BF" label="SaaS architecture guide" />
              <h1 className="mt-7 max-w-3xl text-4xl font-semibold tracking-[-0.045em] text-balance sm:text-5xl lg:text-6xl">
                Best Managed WordPress Hosting for SaaS Websites
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
                Choose based on whether WordPress is your marketing/content
                layer, a dynamic customer experience, or part of a broader
                application architecture.
              </p>
              <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-xs text-muted-foreground">
                <span>Last verified: August 9, 2026</span>
                <span>{sources.length} official sources reviewed</span>
                <span>Racklio Editorial</span>
              </div>
            </div>
            <Card id="direct-answer">
              <CardContent className="p-0">
                <div className="border-b border-border p-5">
                  <ResearchMarker code="DA" label="Direct answer" />
                </div>
                <div className="p-6">
                  <p className="text-lg font-semibold">
                    There is no single best managed WordPress host for every
                    SaaS company.
                  </p>
                  <p className="mt-4 text-sm leading-7">
                    If WordPress only powers your marketing site, the decision
                    is very different from hosting your actual SaaS application.
                    Managed WordPress can fit content, documentation, and some
                    portal workloads; it is not automatically appropriate for
                    custom runtimes, queues, application databases, or
                    persistent backend services.
                  </p>
                  <ButtonLink
                    className="mt-6 max-w-full whitespace-normal text-center"
                    href="#snapshot"
                  >
                    Map Your SaaS Workload
                  </ButtonLink>
                  <p className="mt-4 text-xs leading-5 text-muted-foreground">
                    Affiliate disclosure: Racklio may earn a commission from
                    qualifying purchases. Commercial relationships do not
                    determine Racklio&apos;s published recommendations.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </Container>
      </Section>
      <Section className="py-10">
        <Container>
          <div className="border border-border p-6">
            <h2 className="text-lg font-semibold">Editorial safeguards</h2>
            <div className="mt-5 grid gap-4 text-sm sm:grid-cols-2">
              {[
                'Current official provider documentation only',
                'WordPress and application hosting kept distinct',
                'No capacity, performance, or compliance assumptions',
                'No rankings, scores, or universal winner',
              ].map((item, index) => (
                <p key={item}>
                  <span className="mr-3 font-mono text-xs text-accent-strong">
                    0{index + 1}
                  </span>
                  {item}
                </p>
              ))}
            </div>
          </div>
        </Container>
      </Section>
      <Section className="pt-0">
        <Container>
          <div className="grid items-start gap-12 lg:grid-cols-[15rem_minmax(0,1fr)]">
            <aside className="lg:sticky lg:top-24">
              <nav aria-label="On this page">
                <p className="text-xs font-semibold tracking-[0.12em] uppercase">
                  On this page
                </p>
                <ol className="mt-4 space-y-2 text-sm">
                  {toc.map(([label, href]) => (
                    <li key={href}>
                      <a
                        className="text-muted-foreground hover:text-foreground focus-visible:text-foreground"
                        href={href}
                      >
                        {label}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            </aside>
            <article className="min-w-0">
              <ReviewSection
                code="01"
                id="snapshot"
                title="SaaS decision snapshot"
              >
                <div
                  className="overflow-x-auto"
                  role="region"
                  aria-label="SaaS hosting decision snapshot"
                  tabIndex={0}
                >
                  <table className="min-w-[48rem] text-left text-sm">
                    <caption className="sr-only">
                      SaaS hosting decision snapshot
                    </caption>
                    <thead>
                      <tr className="border-b border-border">
                        <th className="p-3" scope="col">
                          Requirement
                        </th>
                        <th className="p-3" scope="col">
                          Provider to investigate
                        </th>
                        <th className="p-3" scope="col">
                          Why
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {snapshotRows.map((row) => (
                        <tr className="border-b border-border" key={row[0]}>
                          <th className="p-3 font-medium" scope="row">
                            {row[0]}
                          </th>
                          <td className="p-3">{row[1]}</td>
                          <td className="p-3 text-muted-foreground">
                            {row[2]}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </ReviewSection>
              <ReviewSection
                code="02"
                id="boundary"
                title="A SaaS website and a SaaS application are not the same workload"
              >
                <TwoColumn
                  leftTitle="SaaS website"
                  left={
                    <>
                      <p>
                        Landing pages, pricing, blog, resources, documentation,
                        case studies, SEO content, and some gated resources.
                      </p>
                      <p>
                        These pages can often use WordPress publishing workflows
                        and substantial full-page or edge caching.
                      </p>
                    </>
                  }
                  rightTitle="SaaS application"
                  right={
                    <>
                      <p>
                        Authentication, persistent state, business logic, APIs,
                        queues, application databases, real-time features,
                        custom services, and tenant boundaries.
                      </p>
                      <p>
                        A managed WordPress plan should not be assumed to host
                        this backend unless its documentation explicitly
                        supports the required runtime.
                      </p>
                    </>
                  }
                />
                <EvidenceNote>
                  <strong>Extraction-safe answer:</strong> managed WordPress can
                  host a SaaS company’s website without hosting the SaaS product
                  itself.
                </EvidenceNote>
              </ReviewSection>
              <ReviewSection
                code="03"
                id="stack"
                title="Where WordPress fits in a SaaS stack"
              >
                <p>
                  WordPress can serve marketing, SEO publishing, documentation,
                  lead generation, gated resources, partner content, and
                  selected portal experiences. Kinsta publishes guidance
                  describing WordPress use for B2B SaaS marketing sites, help
                  centers, and gated resources; that is provider guidance, not
                  proof of universal suitability.
                  <Citation source={5} />
                </p>
                <p className="mt-4">
                  A common split places WordPress on managed WordPress hosting
                  while the core product runs on separate application
                  infrastructure. This permits independent scaling,
                  responsibility boundaries, and deployment cycles, but it adds
                  integration and operational coordination.
                </p>
              </ReviewSection>
              <ReviewSection
                code="04"
                id="app-like"
                title="When WordPress becomes app-like"
              >
                <p>
                  Logged-in dashboards, memberships, personalized content,
                  subscriptions, account areas, API integrations, dynamic
                  search, AJAX, and frequent writes shift work from reusable
                  cached output toward PHP, database, session, and integration
                  activity.
                </p>
                <EvidenceNote>
                  <strong>Racklio analysis:</strong> classify each route as
                  public/cacheable, authenticated/personalized, transactional,
                  or asynchronous before comparing plans. Member counts and
                  monthly visits do not establish concurrency capacity.
                </EvidenceNote>
              </ReviewSection>
              <ReviewSection
                code="05"
                id="methodology"
                title="How Racklio evaluates SaaS WordPress hosting"
              >
                <ol className="space-y-3">
                  <li>
                    <strong>1. Define WordPress’s boundary.</strong> Marketing
                    site, docs, portal, headless CMS, or integrated application
                    component.
                  </li>
                  <li>
                    <strong>2. Map runtime requirements.</strong> PHP/WordPress
                    versus custom services, databases, queues, networking, and
                    packages.
                  </li>
                  <li>
                    <strong>3. Preserve resource units.</strong> Visits, server
                    bandwidth, CDN transfer, storage, workers, vCPU, and RAM are
                    not interchangeable.
                  </li>
                  <li>
                    <strong>4. Audit workflow.</strong> Environments, Git, local
                    tools, SSH, WP-CLI, APIs, logs, access, and migration.
                  </li>
                  <li>
                    <strong>5. Separate security and data scope.</strong>{' '}
                    Hosting controls do not replace application security or
                    external database recovery.
                  </li>
                </ol>
              </ReviewSection>
              <div id="providers">
                <ResearchMarker code="06" label="Provider analysis" />
                <h2 className="mt-4 text-2xl font-semibold tracking-[-0.03em]">
                  Five conditional WordPress paths for SaaS companies
                </h2>
                <p className="mt-3 text-muted-foreground">
                  These are scenario mappings, not positions in a ranking.
                </p>
              </div>
              <ProviderBlock
                code="07"
                id="kinsta"
                name="Kinsta"
                fit="SaaS teams using WordPress as a standardized marketing, content, documentation, or gated-resource layer and valuing staging, DevKinsta, monitoring, team access, and API automation."
                notFit="A core SaaS backend requiring arbitrary runtimes, queues, persistent services, or application databases. Those services moved from MyKinsta to Sevalla in February 2026."
                price="Single 20GB is $35 monthly or $30 annual-effective with $350 prepaid; the current page shows a $0 first month. Enterprise starts at $500 monthly."
                traffic="Selectable server-bandwidth or visit accounting, separate CDN allowance, storage, and overages. The entry bandwidth variant publishes 20GB server bandwidth, 10GB storage, and 125GB CDN."
                workflow="Free staging, premium staging add-on, DevKinsta, SSH, WP-CLI, logs, APM, migrations, and flexible users are documented."
                api="The public-beta Kinsta API manages WordPress sites and actions such as site creation, cloning, cache clearing, and PHP restart. Application/database/static endpoints now belong to Sevalla."
                operations="Daily backups, optional higher-frequency backups, WAF, DDoS controls, SSL, malware removal, and WordPress-specific operations are documented; these do not secure an external SaaS app."
                scaling="Higher visit/bandwidth, agency, enterprise, dedicated WordPress, and add-on paths exist."
                limitation="MyKinsta Managed WordPress is not Kinsta application hosting. Sevalla is a separate service and API boundary."
                analysis="Investigate Kinsta when WordPress has a defined content role; evaluate Sevalla or another application platform separately for the product backend."
                citations={[1, 2, 3, 4, 5, 6]}
              />
              <ProviderBlock
                code="08"
                id="wp-engine"
                name="WP Engine"
                fit="SaaS teams prioritizing structured Production, Staging, and Development environments, SSH/WP-CLI, Git deployment, Local tooling, and a currently documented headless platform."
                notFit="Arbitrary SaaS backend services or buyers who assume managed WordPress visit allowances describe application capacity."
                price="Startup starts at $30 monthly; Professional $55; Growth $109; Scale $276; Core starts at $400; Enterprise is custom on the reviewed plan page."
                traffic="Startup publishes 25,000 estimated visits, 10GB storage, and 75GB bandwidth; higher plans publish distinct allowances."
                workflow="Production, Staging, and Development environments, SSH Gateway, WP-CLI, Git push, Local, backups, and migration tooling are documented."
                api="WP Engine documents customer/developer tooling, but API scope should be checked endpoint by endpoint rather than treated as a general infrastructure API."
                operations="WordPress backups, SSL, platform security controls, and environment workflow protect the WordPress property—not an external application database or authorization model."
                scaling="Core and custom Enterprise paths provide higher-scope managed WordPress options; headless is a distinct architecture offering."
                limitation="Managed WordPress and headless tooling do not imply arbitrary backend hosting."
                analysis="Investigate WP Engine when deployment structure or a documented headless WordPress workflow fits the content layer, then select application infrastructure independently."
                citations={[7, 8, 9, 10, 11, 12]}
              />
              <ProviderBlock
                code="09"
                id="rocket"
                name="Rocket.net"
                fit="SaaS teams wanting a managed WordPress marketing/content layer with visitor-count billing avoided, staging, SSH/WP-CLI, backups, and managed edge/security operations."
                notFit="A custom application backend, or a buyer treating unmetered visitors as unlimited bandwidth, storage, PHP execution, or database capacity."
                price="Starter is $30 monthly or $25 annual-effective with a $1 first month shown; Pro $60/$50, Business $100/$83, and Expert $200/$166 monthly/annual-effective."
                traffic="Visitors are unmetered; Starter publishes 10GB storage and 50GB bandwidth. Storage and bandwidth overages remain finite."
                workflow="The current platform documents staging, SSH, WP-CLI, backups, control-panel operations, and developer tooling. Exact API/MCP actions should be verified against current docs before automation design."
                api="Use only documented endpoints and MCP actions; do not treat emerging tooling as unrestricted infrastructure control."
                operations="Managed CDN/WAF/security and backups apply to the WordPress property, not the SaaS product’s authentication, API, or data layer."
                scaling="Higher managed WordPress tiers and enterprise discussions exist, with finite resources on each published plan."
                limitation="Unmetered visitors do not establish dynamic-request or application capacity."
                analysis="Investigate Rocket.net where the WordPress layer is operationally separated and visitor billing is undesirable; validate finite resources and automation scope."
                citations={[13, 14, 15]}
              />
              <ProviderBlock
                code="10"
                id="pressable"
                name="Pressable"
                fit="SaaS teams operating one or several WordPress properties and valuing collaboration, staging/sandbox, SSH, WP-CLI, published per-site resources, and automation-oriented workflows."
                notFit="A non-WordPress SaaS backend or teams requiring root-level services within the managed WordPress product."
                price="Signature 1 is shown at $20.83 effective monthly with $250 prepaid annually; Premium Site starts at $350 monthly."
                traffic="Signature 1 publishes 30,000 visits and 20GB storage. Current plans disclose per-site execution resources and overage terms."
                workflow="Staging, sandbox sites, SSH, WP-CLI, collaborator workflows, backups, and platform management features are documented."
                api="Pressable publishes API and newer MCP-oriented workflows; specific actions and permissions must be confirmed. A customer case study is not treated as universal CI/CD capability."
                operations="Hourly database and daily filesystem backup behavior, platform security, and WordPress operations do not protect an external product database."
                scaling="Higher install/visit plans and Premium Site provide separate paths; suitability remains workload-specific."
                limitation="Published workers or vCPU cannot be converted into a SaaS user-capacity number."
                analysis="Investigate Pressable for collaborative WordPress operations, while validating API permissions, deployment design, and the boundary to the core product."
                citations={[16, 17, 18, 19, 20]}
              />
              <ProviderBlock
                code="11"
                id="liquid-web"
                name="Liquid Web"
                fit="Managed WordPress can serve a content layer; separately, VPS, dedicated, and application hosting merit investigation when custom services or infrastructure control are actual requirements."
                notFit="Buyers seeking a single undifferentiated product comparison. Managed WordPress, VPS, dedicated, and custom application hosting have different scopes and responsibilities."
                price="Spark Launch is currently presented as $5 effective monthly with $60 prepaid annually. VPS, dedicated, and application hosting use separate plans and pricing; they are not equivalent products."
                traffic="Managed WordPress publishes WordPress-specific storage, transfer, and PHP resources. VPS/dedicated publish server resources such as vCPU, RAM, storage, and transfer."
                workflow="Tooling differs by product. Managed WordPress workflow should not be projected onto VPS, dedicated, or application hosting."
                api="Broader server control may support custom deployment automation, but exact APIs and management responsibilities depend on the selected infrastructure product."
                operations="WordPress backups protect WordPress data. A SaaS application requires its own database, service, recovery, access, and security design."
                scaling="Managed WordPress tiers, managed VPS, dedicated servers, and custom application hosting form distinct escalation paths."
                limitation="Co-locating WordPress and the application is not automatically preferable; separation may reduce coupling, while unified infrastructure may suit a deliberately designed smaller system."
                analysis="Investigate Liquid Web when requirements cross product boundaries, but compare each workload against the correct product rather than treating server hosting as managed WordPress parity."
                citations={[21, 22, 23, 24]}
              />
              <ReviewSection
                code="12"
                id="pricing"
                title="Current pricing compared"
              >
                <div
                  className="overflow-x-auto"
                  role="region"
                  aria-label="SaaS WordPress pricing comparison"
                  tabIndex={0}
                >
                  <table className="min-w-[64rem] text-left text-sm">
                    <caption className="sr-only">
                      Current SaaS WordPress entry pricing
                    </caption>
                    <thead>
                      <tr className="border-b border-border">
                        <th className="p-3" scope="col">
                          Plan
                        </th>
                        <th className="p-3" scope="col">
                          Monthly
                        </th>
                        <th className="p-3" scope="col">
                          Annual or promotion
                        </th>
                        <th className="p-3" scope="col">
                          Published scope
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {pricingRows.map((row) => (
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
                <p className="mt-4 text-sm text-muted-foreground">
                  Pricing checked August 9, 2026. Promotions, taxes, terms,
                  resource units, and product scopes remain separate.
                </p>
              </ReviewSection>
              <ReviewSection
                code="13"
                id="marketing-portals"
                title="Marketing sites versus customer portals"
              >
                <TwoColumn
                  leftTitle="Marketing/content"
                  left={
                    <p>
                      Public landing pages, articles, docs, and resources may be
                      highly cacheable and align with standard managed WordPress
                      operations.
                    </p>
                  }
                  rightTitle="Customer experience"
                  right={
                    <p>
                      Accounts, personalization, subscriptions, dashboards,
                      search, and integrations can create uncached PHP and
                      database work. Validate the real plugin and request mix.
                    </p>
                  }
                />
              </ReviewSection>
              <ReviewSection
                code="14"
                id="traffic"
                title="Visits, bandwidth, CDN, and dynamic requests"
              >
                <p>
                  Visits, origin/server bandwidth, CDN transfer, storage, and
                  application execution measure different things. Rocket.net’s
                  unmetered visitors do not mean unlimited resources; Kinsta’s
                  selectable accounting does not erase separate CDN/storage
                  allowances; visit-priced plans do not predict logged-in
                  capacity.
                </p>
              </ReviewSection>
              <ReviewSection code="15" id="apis" title="APIs and automation">
                <p>
                  Kinsta documents WordPress site/environment operations through
                  a public-beta API. WP Engine, Rocket.net, and Pressable
                  publish platform tooling with different scopes. Verify
                  authentication, permissions, rate limits, supported actions,
                  and lifecycle status before building automation.
                </p>
                <EvidenceNote>
                  <strong>Boundary:</strong> a site-management API is not
                  automatically an application-deployment or full infrastructure
                  API.
                </EvidenceNote>
              </ReviewSection>
              <ReviewSection
                code="16"
                id="development"
                title="Staging, development, and CI/CD"
              >
                <p>
                  WP Engine explicitly documents Production, Staging, and
                  Development plus Git push and SSH Gateway. Kinsta documents
                  staging, DevKinsta, SSH/WP-CLI, and API-driven operations.
                  Rocket.net and Pressable document staging and command-line
                  workflows; Pressable also documents sandbox operations.
                </p>
                <p className="mt-4">
                  Do not assume identical Git, GitHub Actions,
                  database-promotion, or rollback behavior. Protect production
                  leads, accounts, subscriptions, and portal data during
                  deployments.
                </p>
              </ReviewSection>
              <ReviewSection
                code="17"
                id="headless"
                title="Headless WordPress for SaaS"
              >
                <p>
                  Headless WordPress separates the WordPress CMS/content API
                  from a separately deployed frontend. WP Engine currently lists
                  a headless platform. Kinsta Managed WordPress can act as a
                  WordPress content backend, while general application/static
                  hosting is now managed through Sevalla.
                  <Citation source={6} />
                  <Citation source={12} />
                </p>
                <EvidenceNote>
                  <strong>Racklio analysis:</strong> headless can fit teams that
                  need independent frontend delivery, but it adds build,
                  preview, caching, authentication, and operational complexity.
                  It does not automatically improve performance.
                </EvidenceNote>
              </ReviewSection>
              <ReviewSection
                code="18"
                id="security"
                title="Marketing website security is not application security"
              >
                <p>
                  SSL, WAF, DDoS controls, malware handling, backups, and
                  managed patching can protect the WordPress property. They do
                  not by themselves provide secure authentication,
                  authorization, tenant isolation, API security, vulnerability
                  management for custom code, or regulatory compliance for the
                  SaaS product.
                </p>
              </ReviewSection>
              <ReviewSection
                code="19"
                id="backups"
                title="WordPress backups and SaaS data boundaries"
              >
                <p>
                  A managed WordPress backup can cover WordPress files and its
                  database according to provider policy. It does not
                  automatically include an external application database, object
                  storage, event stream, queue, secrets system, or third-party
                  service. Define recovery objectives and test each system
                  separately.
                </p>
              </ReviewSection>
              <ReviewSection
                code="20"
                id="high-traffic"
                title="High-traffic SaaS content properties"
              >
                <p>
                  Cacheable SEO libraries and documentation can create large
                  visit/CDN demand, while launches may concentrate origin
                  requests. Model cache hit paths, transfer, bot traffic,
                  publishing operations, and origin peaks.
                </p>
                <ButtonLink
                  className="mt-6"
                  href="/best/managed-wordpress-hosting-for-high-traffic-websites"
                >
                  Read the High-Traffic Guide
                </ButtonLink>
              </ReviewSection>
              <ReviewSection
                code="21"
                id="portals"
                title="SaaS membership and customer portals"
              >
                <p>
                  A WordPress portal can introduce logged-in sessions,
                  personalization, protected content, search, progress,
                  messages, and integration calls. Hosting fit depends on
                  dynamic behavior—not registered accounts.
                </p>
                <ButtonLink
                  className="mt-6"
                  href="/best/managed-wordpress-hosting-for-membership-sites"
                >
                  Read the Membership Guide
                </ButtonLink>
              </ReviewSection>
              <ReviewSection
                code="22"
                id="subscriptions"
                title="SaaS subscriptions and WooCommerce workloads"
              >
                <p>
                  Checkout, account, renewal, webhook, and subscription data
                  require transactional safeguards and intentional cache
                  exclusions. A SaaS billing integration should not be reduced
                  to general marketing-site hosting.
                </p>
                <ButtonLink
                  className="mt-6"
                  href="/best/managed-woocommerce-hosting"
                >
                  Read the WooCommerce Guide
                </ButtonLink>
              </ReviewSection>
              <ReviewSection
                code="23"
                id="developers"
                title="Developer-heavy SaaS teams"
              >
                <p>
                  Compare local development, environments, SSH, WP-CLI, Git, API
                  scope, logs, access controls, database handling, and release
                  rollback. The product backend may require a separate CI/CD
                  system.
                </p>
                <ButtonLink
                  className="mt-6"
                  href="/best/managed-wordpress-hosting-for-developers"
                >
                  Read the Developer Guide
                </ButtonLink>
              </ReviewSection>
              <ReviewSection
                code="24"
                id="multiple"
                title="Multi-site and multi-brand SaaS companies"
              >
                <p>
                  Separate corporate, product, regional, documentation, and
                  partner properties may increase install, access, deployment,
                  and governance requirements. Compare included installs and
                  per-site resource behavior without assuming one shared plan
                  isolates workloads.
                </p>
                <ButtonLink
                  className="mt-6"
                  href="/best/managed-wordpress-hosting-for-multiple-websites"
                >
                  Read the Multiple-Site Guide
                </ButtonLink>
              </ReviewSection>
              <ReviewSection
                code="25"
                id="not-enough"
                title="When managed WordPress hosting is not enough"
              >
                <p>
                  If the core product requires a custom runtime, persistent
                  services, background workers, an application database, non-PHP
                  services, custom networking, arbitrary packages, or root-level
                  configuration, managed WordPress may fit only the web/content
                  layer.
                </p>
                <EvidenceNote>
                  <strong>Decision boundary:</strong> do not force a WordPress
                  provider to solve a non-WordPress workload. Evaluate an
                  application platform, VPS, dedicated environment, or cloud
                  architecture against the backend’s actual requirements.
                </EvidenceNote>
              </ReviewSection>
              <ReviewSection
                code="26"
                id="infrastructure"
                title="VPS, dedicated, and application infrastructure"
              >
                <p>
                  Liquid Web explicitly separates managed WordPress from VPS,
                  dedicated, and application hosting. Kinsta separates Managed
                  WordPress in MyKinsta from application/database/static hosting
                  in Sevalla. These broader products can support different
                  runtime models, but they also change management scope, cost,
                  security responsibility, and deployment design.
                </p>
                <p className="mt-4">
                  A unified server may suit a deliberately small, compatible
                  system. A split architecture can permit independent scaling
                  and releases. Neither is universally preferable.
                </p>
              </ReviewSection>
              <ReviewSection
                code="27"
                id="limitations"
                title="Key limitations by provider"
              >
                <ul className="space-y-3">
                  <li>
                    <strong>Kinsta:</strong> MyKinsta Managed WordPress and
                    Sevalla application hosting are separate.
                  </li>
                  <li>
                    <strong>WP Engine:</strong> managed and headless WordPress
                    capabilities do not imply arbitrary backend hosting.
                  </li>
                  <li>
                    <strong>Rocket.net:</strong> unmetered visitors do not mean
                    unlimited execution or transfer.
                  </li>
                  <li>
                    <strong>Pressable:</strong> published resources cannot be
                    converted into SaaS-user capacity.
                  </li>
                  <li>
                    <strong>Liquid Web:</strong> WordPress, VPS, dedicated, and
                    application products are not equivalent comparison units.
                  </li>
                </ul>
              </ReviewSection>
              <ReviewSection code="28" id="matrix" title="SaaS decision matrix">
                <div
                  className="overflow-x-auto"
                  role="region"
                  aria-label="SaaS hosting fit matrix"
                  tabIndex={0}
                >
                  <table className="min-w-[72rem] text-left text-sm">
                    <caption className="sr-only">
                      Conditional SaaS WordPress hosting fit matrix
                    </caption>
                    <thead>
                      <tr className="border-b border-border">
                        {[
                          'SaaS scenario',
                          'Kinsta',
                          'WP Engine',
                          'Rocket.net',
                          'Pressable',
                          'Liquid Web',
                        ].map((cell) => (
                          <th className="p-3" scope="col" key={cell}>
                            {cell}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        [
                          'Marketing website',
                          'Strong fit',
                          'Strong fit',
                          'Strong fit',
                          'Strong fit',
                          'Strong fit',
                        ],
                        [
                          'Content-heavy SEO property',
                          'Strong fit',
                          'Strong fit',
                          'Strong fit',
                          'Strong fit',
                          'Consider',
                        ],
                        [
                          'Documentation portal',
                          'Strong fit',
                          'Strong fit',
                          'Strong fit',
                          'Strong fit',
                          'Consider',
                        ],
                        [
                          'Gated resource center',
                          'Consider',
                          'Consider',
                          'Consider',
                          'Consider',
                          'Consider',
                        ],
                        [
                          'Customer portal in WordPress',
                          'Depends',
                          'Depends',
                          'Depends',
                          'Depends',
                          'Consider',
                        ],
                        [
                          'WooCommerce/subscription front end',
                          'Consider',
                          'Consider',
                          'Consider',
                          'Consider',
                          'Consider',
                        ],
                        [
                          'Headless WordPress CMS',
                          'Consider',
                          'Strong fit',
                          'Depends',
                          'Depends',
                          'Consider',
                        ],
                        [
                          'WordPress plus separate SaaS app',
                          'Strong fit',
                          'Strong fit',
                          'Strong fit',
                          'Strong fit',
                          'Strong fit',
                        ],
                        [
                          'Multi-brand WordPress portfolio',
                          'Strong fit',
                          'Strong fit',
                          'Strong fit',
                          'Strong fit',
                          'Consider',
                        ],
                        [
                          'Custom backend services',
                          'Not designed for requirement',
                          'Not designed for requirement',
                          'Not designed for requirement',
                          'Not designed for requirement',
                          'Strong fit',
                        ],
                        [
                          'VPS/root control',
                          'Not designed for requirement',
                          'Not designed for requirement',
                          'Not designed for requirement',
                          'Not designed for requirement',
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
                <p className="mt-4 text-sm text-muted-foreground">
                  Statuses express conditional product alignment, not rank,
                  capacity, or measured performance.
                </p>
              </ReviewSection>
              <ReviewSection code="29" id="choose" title="How to choose">
                <ol className="space-y-4">
                  <li>
                    <strong>1. Draw the architecture boundary.</strong> Mark
                    WordPress, frontend, product backend, databases, queues, and
                    third parties.
                  </li>
                  <li>
                    <strong>2. Classify WordPress routes.</strong>{' '}
                    Public/cacheable, authenticated, transactional, or
                    asynchronous.
                  </li>
                  <li>
                    <strong>3. Verify developer operations.</strong>{' '}
                    Environments, Git, SSH, WP-CLI, APIs, logs, access, and
                    rollback.
                  </li>
                  <li>
                    <strong>4. Normalize cost without merging units.</strong>{' '}
                    Plans, terms, visits, transfer, storage, overages, and
                    add-ons.
                  </li>
                  <li>
                    <strong>5. Protect each data system.</strong> WordPress
                    backups do not replace application recovery.
                  </li>
                  <li>
                    <strong>6. Choose product scopes independently.</strong>{' '}
                    Select WordPress and application infrastructure for their
                    own workloads.
                  </li>
                </ol>
                <ButtonLink className="mt-7" href="#related">
                  Continue with Provider Evidence
                </ButtonLink>
              </ReviewSection>
              <ReviewSection
                code="30"
                id="faq"
                title="Frequently asked questions"
              >
                <div className="space-y-7">
                  {[
                    [
                      'What is the best managed WordPress hosting for SaaS websites?',
                      'There is no universal option. Choose by WordPress’s role, traffic model, workflow, dynamic behavior, data boundary, and required application infrastructure.',
                    ],
                    [
                      'Can WordPress host a SaaS application?',
                      'WordPress can power some application-like experiences, but managed WordPress should not be assumed to support arbitrary runtimes, queues, services, or application databases.',
                    ],
                    [
                      'Should a SaaS company use WordPress for its marketing site?',
                      'It can be appropriate when its publishing workflow and integrations fit the team; the product backend can remain separate.',
                    ],
                    [
                      'Should the SaaS app and WordPress site use the same hosting?',
                      'Not automatically. Separate infrastructure can reduce coupling; a unified design may fit a small compatible system.',
                    ],
                    [
                      'Is Kinsta good for SaaS websites?',
                      'Investigate Kinsta for a defined WordPress content layer; use Sevalla or another application platform for non-WordPress services.',
                    ],
                    [
                      'Is WP Engine good for SaaS websites?',
                      'Investigate it when structured environments, Git/SSH workflows, or its current headless platform align with the content architecture.',
                    ],
                    [
                      'Is Rocket.net good for SaaS websites?',
                      'Investigate it when the WordPress layer is managed separately and unmetered visitor accounting is useful within finite resources.',
                    ],
                    [
                      'Is Pressable good for SaaS websites?',
                      'Investigate it for collaborative or multi-property WordPress operations after validating API, deployment, and resource requirements.',
                    ],
                    [
                      'Is Liquid Web good for SaaS websites?',
                      'Investigate the correct product: managed WordPress for content, or separate VPS/dedicated/application hosting for broader runtime needs.',
                    ],
                    [
                      'Can managed WordPress host a customer portal?',
                      'Sometimes, if the portal’s plugins, dynamic requests, database work, integrations, security, and recovery requirements fit.',
                    ],
                    [
                      'Is headless WordPress useful for SaaS?',
                      'It can separate CMS and frontend delivery, but adds build, preview, caching, and operational complexity.',
                    ],
                    [
                      'When does a SaaS company need VPS or application hosting?',
                      'When the product requires runtime, services, packages, databases, networking, or control outside managed WordPress’s documented scope.',
                    ],
                    [
                      'Does managed WordPress provide API or application security?',
                      'Hosting controls protect parts of the WordPress environment; they do not replace application authentication, authorization, tenant isolation, or API security.',
                    ],
                  ].map(([question, answer]) => (
                    <div key={question}>
                      <h3 className="text-lg font-semibold">{question}</h3>
                      <p className="mt-2">{answer}</p>
                    </div>
                  ))}
                </div>
              </ReviewSection>
              <ReviewSection
                code="31"
                id="sources"
                title="Sources and methodology"
              >
                <p>
                  Racklio reviewed these provider-controlled pages on August 9,
                  2026. Pricing and product capabilities can change. Provider
                  guidance is attributed and is not treated as independent
                  performance evidence.
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
                        '/comparisons/rocket-net-vs-kinsta',
                        'Rocket.net vs Kinsta',
                      ],
                      [
                        '/comparisons/pressable-vs-wp-engine',
                        'Pressable vs WP Engine',
                      ],
                      [
                        '/comparisons/liquid-web-vs-rocket-net',
                        'Liquid Web vs Rocket.net',
                      ],
                      [
                        '/best/managed-wordpress-hosting-for-agencies',
                        'Managed WordPress for Agencies',
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
