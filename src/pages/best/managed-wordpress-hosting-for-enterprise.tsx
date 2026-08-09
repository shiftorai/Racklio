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
  'https://racklio.com/best/managed-wordpress-hosting-for-enterprise';
const sources = [
  {
    id: 1,
    provider: 'WP Engine',
    title: 'Enterprise managed WordPress',
    href: 'https://wpengine.com/enterprise/',
  },
  {
    id: 2,
    provider: 'WP Engine',
    title: 'Plans and enterprise contract model',
    href: 'https://wpengine.com/plans/',
  },
  {
    id: 3,
    provider: 'WP Engine',
    title: 'Managed hosting platform',
    href: 'https://wpengine.com/managed-hosting-platform/',
  },
  {
    id: 4,
    provider: 'WP Engine',
    title: 'Managed platform developer documentation',
    href: 'https://developers.wpengine.com/docs/managed-hosting-platform/',
  },
  {
    id: 5,
    provider: 'WP Engine',
    title: 'Support documentation',
    href: 'https://wpengine.com/support/',
  },
  {
    id: 6,
    provider: 'WP Engine',
    title: 'Service level agreement',
    href: 'https://wpengine.com/legal/sla/',
  },
  {
    id: 7,
    provider: 'Kinsta',
    title: 'Enterprise WordPress hosting',
    href: 'https://kinsta.com/wordpress-hosting/enterprise/',
  },
  {
    id: 8,
    provider: 'Kinsta',
    title: 'Enterprise pricing and features',
    href: 'https://kinsta.com/pricing/',
  },
  {
    id: 9,
    provider: 'Kinsta',
    title: 'Plan accounting',
    href: 'https://kinsta.com/docs/billing/wordpress-hosting-plans/',
  },
  {
    id: 10,
    provider: 'Kinsta',
    title: 'Support documentation',
    href: 'https://kinsta.com/docs/support/',
  },
  {
    id: 11,
    provider: 'Kinsta',
    title: 'Backup documentation',
    href: 'https://kinsta.com/docs/wordpress-hosting/backups/',
  },
  {
    id: 12,
    provider: 'Rocket.net',
    title: 'Enterprise WordPress hosting',
    href: 'https://rocket.net/solutions/enterprise-wordpress-hosting/',
  },
  {
    id: 13,
    provider: 'Rocket.net',
    title: 'Enterprise pricing and resources',
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
    provider: 'Pressable',
    title: 'Premium and enterprise WordPress',
    href: 'https://pressable.com/managed-wordpress-hosting/premium/',
  },
  {
    id: 16,
    provider: 'Pressable',
    title: 'Plans and Premium Site resources',
    href: 'https://pressable.com/pricing/',
  },
  {
    id: 17,
    provider: 'Pressable',
    title: 'Premium Site plans',
    href: 'https://pressable.com/pricing/premium-sites/',
  },
  {
    id: 18,
    provider: 'Pressable',
    title: 'Service level agreement',
    href: 'https://pressable.com/legal/sla/',
  },
  {
    id: 19,
    provider: 'Pressable',
    title: 'Backup documentation',
    href: 'https://pressable.com/knowledgebase/accessing-backups/',
  },
  {
    id: 20,
    provider: 'Liquid Web',
    title: 'Managed WordPress hosting',
    href: 'https://www.liquidweb.com/wordpress-hosting/',
  },
  {
    id: 21,
    provider: 'Liquid Web',
    title: 'Managed VPS hosting',
    href: 'https://www.liquidweb.com/vps-hosting/',
  },
  {
    id: 22,
    provider: 'Liquid Web',
    title: 'Dedicated servers',
    href: 'https://www.liquidweb.com/dedicated-server-hosting/',
  },
  {
    id: 23,
    provider: 'Liquid Web',
    title: 'Support',
    href: 'https://www.liquidweb.com/support/',
  },
] as const;

const toc = [
  ['Direct answer', '#direct-answer'],
  ['Decision snapshot', '#snapshot'],
  ['Enterprise vs high traffic', '#enterprise-vs-traffic'],
  ['Evaluation framework', '#framework'],
  ['Methodology', '#methodology'],
  ['Provider analysis', '#providers'],
  ['Pricing and contracts', '#pricing'],
  ['SLA commitments', '#sla'],
  ['Availability and isolation', '#availability'],
  ['Security and compliance', '#security'],
  ['Governance', '#governance'],
  ['Backup and recovery', '#recovery'],
  ['Support and onboarding', '#support'],
  ['Migrations', '#migrations'],
  ['Development workflow', '#development'],
  ['Multi-site portfolios', '#portfolios'],
  ['High-traffic enterprise', '#high-traffic'],
  ['Enterprise WooCommerce', '#woocommerce'],
  ['Regulated organizations', '#regulated'],
  ['Managed vs infrastructure', '#infrastructure'],
  ['Limitations', '#limitations'],
  ['Decision matrix', '#matrix'],
  ['How to choose', '#choose'],
  ['FAQ', '#faq'],
  ['Sources', '#sources'],
] as const;

const snapshotRows = [
  [
    'Governance, structured environments, and custom enterprise support',
    'WP Engine',
    'Custom Enterprise combines managed WordPress specialization with permissions, activity logs, deployment tooling, and a dedicated support model.',
  ],
  [
    'Custom capacity with selectable visit or bandwidth accounting',
    'Kinsta',
    'Enterprise starts publicly at $500 and lists custom resources, dedicated virtual machines, access controls, and account management.',
  ],
  [
    'Published dedicated enterprise resource model',
    'Rocket.net',
    'Enterprise tiers publish CPU, RAM, NVMe, transfer, support channels, and a 99.99% uptime guarantee.',
  ],
  [
    'Premium Site resources and contractual availability terms',
    'Pressable',
    'Premium Site starts at $350 and publishes HA, bursting, onboarding, portfolio tools, and an SLA with defined remedies.',
  ],
  [
    'Mixed workloads, root control, or server-specific requirements',
    'Liquid Web VPS or dedicated',
    'Broader infrastructure products should be evaluated separately from managed WordPress.',
  ],
] as const;

const pricingRows = [
  [
    'WP Engine Enterprise',
    'Custom quote',
    'No public enterprise minimum used',
    'Core starts at $400 monthly; Enterprise terms and capacity are consultation-based',
  ],
  [
    'Kinsta Enterprise custom',
    'Starting at $500 monthly',
    'Custom contract/resources',
    'Custom installs, visits or server bandwidth, storage, CDN, dedicated VMs, 30-day backup retention',
  ],
  [
    'Rocket.net Enterprise 1',
    '$649 monthly',
    'Public monthly price',
    '8 CPU cores; 64GB RAM; 1TB NVMe; 1TB bandwidth; provider states unlimited requests/workers',
  ],
  [
    'Pressable Premium Site',
    'Starting at $350 monthly',
    'Sales-scoped resources',
    'Starts at 10 base vCPUs per site; custom storage; bursting path; white-glove onboarding',
  ],
  [
    'Liquid Web infrastructure',
    'Product and configuration dependent',
    'Public configurations plus custom scope',
    'VPS and dedicated resources are not equivalent to managed WordPress plans',
  ],
] as const;

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Best Managed WordPress Hosting for Enterprise Websites',
  description:
    'An evidence-first guide to enterprise WordPress hosting by SLA, governance, recovery, support, resource model, and infrastructure requirements.',
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
  citation: sources.map((s) => s.href),
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
      name: 'Managed WordPress Hosting for Enterprise',
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
  resources,
  sla,
  security,
  recovery,
  support,
  governance,
  scaling,
  boundary,
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
  resources: string;
  sla: string;
  security: string;
  recovery: string;
  support: string;
  governance: string;
  scaling: string;
  boundary: string;
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
          ['Enterprise pricing/model', price],
          ['Resource model', resources],
          ['SLA', sla],
          ['Security boundary', security],
          ['Backups and recovery', recovery],
          ['Support and onboarding', support],
          ['Governance and workflow', governance],
          ['Scaling', scaling],
          ['Infrastructure boundary', boundary],
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
        {citations.map((s) => (
          <Citation key={s} source={s} />
        ))}
      </EvidenceNote>
    </ReviewSection>
  );
}

export function ManagedWordPressHostingForEnterprise() {
  useEffect(() => {
    const meta = document.querySelector<HTMLMetaElement>(
      'meta[name="description"]',
    );
    const previous = meta?.content;
    if (meta)
      meta.content =
        'Compare enterprise WordPress hosting by SLA, governance, resource isolation, security, recovery, support, and infrastructure requirements.';
    return () => {
      if (meta && previous) meta.content = previous;
    };
  }, []);
  return (
    <PageLayout footer={<SiteFooter />} header={<SiteHeader />}>
      <title>
        Best Managed WordPress Hosting for Enterprise (2026) | Racklio
      </title>
      <link rel="canonical" href={canonicalUrl} />
      <meta property="og:type" content="article" />
      <meta
        property="og:title"
        content="Managed WordPress Hosting for Enterprise Websites"
      />
      <meta
        property="og:description"
        content="Choose enterprise WordPress hosting by SLA, governance, recovery, operational workflow, and infrastructure scope."
      />
      <meta property="og:url" content={canonicalUrl} />
      <meta name="twitter:card" content="summary" />
      <meta
        name="twitter:title"
        content="Managed WordPress Hosting for Enterprise"
      />
      <meta
        name="twitter:description"
        content="An evidence-first enterprise WordPress decision guide."
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
              Managed WordPress Hosting for Enterprise
            </li>
          </ol>
        </Container>
      </nav>
      <Section className="border-b border-border bg-surface-subtle py-16 sm:py-20 lg:py-24">
        <Container>
          <div className="grid items-start gap-12 lg:grid-cols-[1.08fr_0.92fr]">
            <div>
              <ResearchMarker code="BF" label="Enterprise decision guide" />
              <h1 className="mt-7 max-w-3xl text-4xl font-semibold tracking-[-0.045em] text-balance sm:text-5xl lg:text-6xl">
                Best Managed WordPress Hosting for Enterprise Websites
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
                Choose based on SLA, governance, resource model, recovery,
                operational workflow and infrastructure requirements—not a
                generic enterprise label.
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
                    enterprise.
                  </p>
                  <p className="mt-4 text-sm leading-7">
                    Enterprise requirements are broader than traffic volume
                    alone. Governance, contractual commitments, security review,
                    recovery, support escalation, portfolios, procurement, and
                    infrastructure control can matter independently of visits.
                  </p>
                  <ButtonLink
                    className="mt-6 max-w-full whitespace-normal text-center"
                    href="#snapshot"
                  >
                    Map Enterprise Requirements
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
                'Current official product, documentation, and legal sources',
                'SLA language kept contractual',
                'Certifications never converted into customer compliance',
                'No rankings, scores, benchmarks, or universal winner',
              ].map((item, i) => (
                <p key={item}>
                  <span className="mr-3 font-mono text-xs text-accent-strong">
                    0{i + 1}
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
                title="Enterprise decision snapshot"
              >
                <div
                  className="overflow-x-auto"
                  role="region"
                  aria-label="Enterprise hosting decision snapshot"
                  tabIndex={0}
                >
                  <table className="min-w-[48rem] text-left text-sm">
                    <caption className="sr-only">
                      Enterprise hosting decision snapshot
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
                id="enterprise-vs-traffic"
                title="Enterprise is not the same as high traffic"
              >
                <TwoColumn
                  leftTitle="Enterprise requirements"
                  left={
                    <>
                      <p>
                        Governance, contracts, security review, organizational
                        workflow, migrations, continuity, escalation,
                        auditability, and procurement.
                      </p>
                      <p>
                        An enterprise portfolio may have moderate traffic but
                        complex responsibility and risk.
                      </p>
                    </>
                  }
                  rightTitle="High-traffic requirements"
                  right={
                    <>
                      <p>
                        Traffic concentration, cacheability, origin load,
                        transfer, database work, and capacity planning.
                      </p>
                      <p>
                        A high-traffic property may use a standard plan if its
                        risk, workflow, and resource profile permit it.
                      </p>
                    </>
                  }
                />
                <ButtonLink
                  className="mt-6"
                  href="/best/managed-wordpress-hosting-for-high-traffic-websites"
                >
                  Read the High-Traffic Guide
                </ButtonLink>
              </ReviewSection>
              <ReviewSection
                code="03"
                id="framework"
                title="What enterprise WordPress buyers should evaluate"
              >
                <div className="grid gap-3 sm:grid-cols-2">
                  {[
                    'Platform scope',
                    'Contractual SLA',
                    'Availability architecture',
                    'Resource isolation',
                    'Scaling model',
                    'Security controls',
                    'Compliance evidence',
                    'Backup and recovery',
                    'Support scope',
                    'Escalation path',
                    'Migration and onboarding',
                    'Deployment environments',
                    'Governance and permissions',
                    'Auditability',
                    'Multi-site and multi-brand',
                    'API and automation',
                    'Custom capacity',
                    'Infrastructure control',
                    'Pricing transparency',
                  ].map((item, i) => (
                    <p
                      className="border-b border-border py-3 text-sm"
                      key={item}
                    >
                      <span className="mr-3 font-mono text-xs text-accent-strong">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      {item}
                    </p>
                  ))}
                </div>
              </ReviewSection>
              <ReviewSection
                code="04"
                id="methodology"
                title="How Racklio evaluates enterprise hosting"
              >
                <ol className="space-y-3">
                  <li>
                    <strong>1. Define business consequences.</strong> Identify
                    properties, users, workflows, data, launch windows, and
                    recovery needs.
                  </li>
                  <li>
                    <strong>2. Read contractual language.</strong> Preserve SLA
                    scope, exclusions, claims, credits, and remedies.
                  </li>
                  <li>
                    <strong>3. Preserve resource units.</strong> Do not merge
                    visits, requests, transfer, workers, CPU, RAM, or dedicated
                    capacity into a score.
                  </li>
                  <li>
                    <strong>4. Audit operations.</strong> Review access, logs,
                    environments, deployment, support, escalation, onboarding,
                    and migrations.
                  </li>
                  <li>
                    <strong>5. Separate evidence from outcomes.</strong>{' '}
                    Certifications and provider architecture claims are
                    inputs—not Racklio measurements or customer compliance.
                  </li>
                </ol>
              </ReviewSection>
              <div id="providers">
                <ResearchMarker code="05" label="Provider analysis" />
                <h2 className="mt-4 text-2xl font-semibold tracking-[-0.03em]">
                  Five conditional enterprise paths
                </h2>
                <p className="mt-3 text-muted-foreground">
                  Enterprise labels are evaluated by documented scope, not
                  reputation or rank.
                </p>
              </div>
              <ProviderBlock
                code="06"
                id="wp-engine"
                name="WP Engine"
                fit="Organizations prioritizing managed WordPress specialization, permissions and activity logs, structured environments, Git/SSH deployment, isolated resources, and a custom enterprise support relationship."
                notFit="Organizations requiring public fixed enterprise pricing, root control, or mixed non-WordPress services on the same managed product."
                price="Enterprise is custom quote. Core starts at $400 monthly and is the lowest public tier currently listing isolated resources and a 99.99% uptime SLA."
                resources="Core lists isolated resources; Enterprise lists high-capacity infrastructure plus high-availability and single-node options. Exact capacity is sales-scoped."
                sla="WP Engine publishes 99.99% SLA language for Core/Enterprise-related plans. Treat it as contractual, subject to the current SLA and exclusions—not measured uptime."
                security="Managed WAF, DDoS controls, patching, monitoring, permissions, and platform certifications are evidence inputs; they do not make a customer compliant."
                recovery="Daily and on-demand backups are included; confirm retention, restore process, failover extension, and negotiated continuity requirements."
                support="Enterprise lists top-tier priority access, a dedicated expert team, ongoing alignment, incident analysis, event preparation, and monitoring."
                governance="Activity log, advanced permissions, staging/development environments, SSH, Git-powered CI/CD, and GitHub Actions are documented."
                scaling="Enterprise capacity, HA/single-node choices, event planning, and extensions are custom-scoped."
                boundary="A standardized managed WordPress platform; not arbitrary server infrastructure."
                limitation="Enterprise price and exact capacity require consultation; SLA and support terms must be read in the executed contract."
                analysis="Investigate WP Engine where governance, release workflow, and enterprise support structure are central, then validate contract and architecture details."
                citations={[1, 2, 3, 4, 5, 6]}
              />
              <ProviderBlock
                code="07"
                id="kinsta"
                name="Kinsta"
                fit="Enterprises wanting a standardized WordPress platform with custom resources, dedicated virtual machines, selectable visit/server-bandwidth accounting, access controls, account management, and migrations."
                notFit="Organizations needing arbitrary system packages, mixed runtimes, root access, or a public fixed resource bundle for enterprise."
                price="Enterprise custom starts at $500 monthly. The current table lists custom installs, visits or server bandwidth, storage, and CDN; taxes are excluded."
                resources="Custom plan resources and dedicated virtual machines are listed; dedicated WordPress servers are also presented separately. Exact allocation is sales-scoped."
                sla="The pricing page advertises up to 99.99% uptime SLA. Eligibility, exclusions, remedies, and contract language require direct review."
                security="WAF, DDoS protection, bot controls, SSL, malware removal, SAML SSO/JIT, SOC 2 Type II and ISO 27001 are provider/platform claims—not customer compliance."
                recovery="Enterprise lists 30-day backup retention; daily backups and optional higher-frequency/external backups are documented."
                support="24/7 support, account managers, expert-support access management, and unlimited migrations are listed."
                governance="Unlimited users, flexible access management, SAML SSO/JIT, staging, site cloning, multisite, and Kinsta API are documented."
                scaling="Custom traffic, storage, CDN, installs, dedicated VMs, and add-ons can be scoped."
                boundary="Managed WordPress remains standardized; dedicated WordPress options are not general root-level infrastructure."
                limitation="The $500 figure is a starting price; the actual contract and capacity remain custom."
                analysis="Investigate Kinsta where standardized governance and selectable accounting fit, then document the exact SLA, dedicated scope, and custom allowances."
                citations={[7, 8, 9, 10, 11]}
              />
              <ProviderBlock
                code="08"
                id="rocket-net"
                name="Rocket.net"
                fit="Enterprises whose WordPress workload aligns with a published dedicated resource bundle, managed edge/security stack, private Slack support, enterprise phone access, and migration assistance."
                notFit="Organizations that require independent benchmark evidence, detailed governance/SSO disclosures, or non-WordPress infrastructure control."
                price="Enterprise 1 is publicly listed at $649 monthly; Enterprise 2 $1,299; Enterprise 3 $1,949; Enterprise 4 $2,599. Custom plans are available by contact."
                resources="Enterprise 1 publishes 8 CPU cores, 64GB RAM, 1TB NVMe and 1TB bandwidth. Higher tiers publish larger bundles. Provider-stated unlimited requests/workers do not mean unlimited capacity."
                sla="Pricing lists a 99.99% uptime guarantee. Contract scope, exclusions, credits, and claim procedure must be confirmed before procurement."
                security="Enterprise CDN, WAF, malware protection, SSL, Redis, Object Cache Pro, and Relay are provider-published features; no Racklio performance outcome is inferred."
                recovery="Automated daily backups and 30-day retention are listed; confirm restore, redundancy, and contractual DR requirements."
                support="Private Slack, enterprise phone support, a provider-stated 60-second response guarantee, and 24/7 availability are published."
                governance="WordPress activity logging and platform management are published; detailed enterprise permission, SSO, and audit requirements require confirmation."
                scaling="Four public enterprise bundles plus custom scope; provider describes dedicated CPU/RAM/NVMe deployment on its managed private cloud."
                boundary="Dedicated managed WordPress resources, not a general root-access server product."
                limitation="The enterprise page contains promotional benchmarks and performance claims that Racklio does not adopt as independent findings."
                analysis="Investigate Rocket.net when its published dedicated bundle and support channels match the workload, then verify legal SLA and governance requirements."
                citations={[12, 13, 14]}
              />
              <ProviderBlock
                code="09"
                id="pressable"
                name="Pressable"
                fit="Mission-critical WordPress sites or portfolios valuing Premium Site resources, geo-redundant provider-described HA, bursting, granular collaborators, staging/sandbox, onboarding, migrations, and contractual availability remedies."
                notFit="Buyers who interpret a 100% guarantee as observed uptime, or enterprises requiring root/server control and mixed workloads."
                price="Premium Site plans start at $350 monthly. Exact storage and higher resource scope are sales-defined; Signature portfolio plans remain separate."
                resources="Premium starts at 10 base vCPUs per site, custom storage, up to 2048MB per worker, and provider-described bursting to 100+ cores."
                sla="The SLA guarantees defined network and infrastructure availability, excluding scheduled maintenance, with eligibility, claims, credits, and remedy limits. It does not establish measured site uptime."
                security="WAF/DDoS controls, Jetpack security, malware tooling, 2FA and activity logs are published. Secure Hosting Alliance certification is not customer compliance."
                recovery="Hourly database and daily filesystem backups are documented. Geo-redundant replication is provider-stated; confirm restore and continuity requirements."
                support="24/7 support, white-glove onboarding, migrations, and Premium Site attention are listed; subjective support quality is not compared."
                governance="Granular collaborator permissions, staging/sandbox, portfolio management, SSH/WP-CLI, and activity logging are documented."
                scaling="Premium Site custom resources and bursting provide a distinct path; no user-capacity outcome is inferred."
                boundary="Managed WordPress only; Premium Site is not a root-access infrastructure service."
                limitation="The 100% wording is contractual and scoped, with exclusions and credits as the sole remedy under the SLA."
                analysis="Investigate Pressable where Premium Site resources, portfolio workflow, HA statements, and its specific SLA fit procurement requirements."
                citations={[15, 16, 17, 18, 19]}
              />
              <ProviderBlock
                code="10"
                id="liquid-web"
                name="Liquid Web"
                fit="Enterprises whose requirements extend from managed WordPress into managed VPS or dedicated infrastructure, including mixed applications, custom configuration, or root/server control."
                notFit="Organizations wanting a single standardized managed WordPress comparison or assuming dedicated infrastructure automatically reduces risk and work."
                price="Managed WordPress, VPS, and dedicated products have separate public configurations and custom options. No blended enterprise price is created here."
                resources="Managed WordPress publishes WordPress-specific resources; VPS and dedicated publish server CPU/vCPU, RAM, storage, and transfer. These are different product scopes."
                sla="Review the SLA tied to the selected product and contract; no cross-product uptime statement is inferred."
                security="Controls and management responsibilities vary by product. Root access increases control and customer responsibility; it does not automatically provide stronger security."
                recovery="Backup and DR design differ across managed WordPress, VPS, and dedicated services. Confirm retention, off-server copies, restore, replication, and recovery ownership."
                support="Liquid Web publishes 24/7 support and managed-service options; exact escalation, account management, and response commitments are contract-dependent."
                governance="Standard WordPress workflow and server-level administration should be evaluated separately; custom infrastructure may require the customer’s own IAM and audit systems."
                scaling="Move within managed WordPress or scope VPS/dedicated resources when the architecture requires them; broader infrastructure is not automatically preferable."
                boundary="The central distinction is managed WordPress versus server infrastructure with different control and responsibility."
                limitation="Product breadth makes incorrect equivalence easy; buyers must compare the exact service and management tier."
                analysis="Investigate Liquid Web when infrastructure control or mixed workloads are real requirements, while keeping WordPress and server procurement separate."
                citations={[20, 21, 22, 23]}
              />
              <ReviewSection
                code="11"
                id="pricing"
                title="Enterprise pricing and contract models"
              >
                <div
                  className="overflow-x-auto"
                  role="region"
                  aria-label="Enterprise pricing comparison"
                  tabIndex={0}
                >
                  <table className="min-w-[64rem] text-left text-sm">
                    <caption className="sr-only">
                      Enterprise WordPress pricing and contract models
                    </caption>
                    <thead>
                      <tr className="border-b border-border">
                        <th className="p-3" scope="col">
                          Provider/product
                        </th>
                        <th className="p-3" scope="col">
                          Public price
                        </th>
                        <th className="p-3" scope="col">
                          Model
                        </th>
                        <th className="p-3" scope="col">
                          Scope note
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {pricingRows.map((row) => (
                        <tr className="border-b border-border" key={row[0]}>
                          {row.map((cell, i) =>
                            i === 0 ? (
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
                                key={`${row[0]}-${i}`}
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
                  Prices verified August 9, 2026. “Starting at,” custom, and
                  quote-based terms are not normalized into a fabricated TCO.
                </p>
              </ReviewSection>
              <ReviewSection
                code="12"
                id="sla"
                title="An SLA is not measured uptime"
              >
                <p>
                  An SLA is a contractual commitment. It may define covered
                  services, exclusions, scheduled maintenance, eligibility,
                  claim deadlines, credits, and exclusive remedies. A 99.99% SLA
                  or 100% uptime guarantee is not evidence that Racklio measured
                  that availability.
                </p>
                <EvidenceNote>
                  <strong>Procurement rule:</strong> read the current legal SLA
                  and executed order form together. Marketing summaries cannot
                  replace the contract.
                </EvidenceNote>
              </ReviewSection>
              <ReviewSection
                code="13"
                id="availability"
                title="High availability and resource isolation"
              >
                <p>
                  WP Engine states isolated resources and offers HA/single-node
                  options. Kinsta lists dedicated virtual machines for
                  Enterprise. Rocket.net publishes dedicated CPU, RAM, and NVMe
                  for Enterprise. Pressable describes geo-redundant HA and
                  automatic failover. These are provider-stated architectures;
                  Racklio does not infer undocumented redundancy or benchmark
                  outcomes.
                </p>
              </ReviewSection>
              <ReviewSection
                code="14"
                id="security"
                title="Enterprise security and compliance boundaries"
              >
                <p>
                  WAF, DDoS controls, TLS, malware tooling, patching,
                  monitoring, access controls, SSO, and certifications can
                  support an enterprise security program. They do not make the
                  customer website GDPR, PCI, SOC, HIPAA, or otherwise
                  compliant. Compliance depends on architecture, configuration,
                  data, people, process, and contracts.
                </p>
              </ReviewSection>
              <ReviewSection
                code="15"
                id="governance"
                title="Governance, permissions, and auditability"
              >
                <p>
                  Map developers, editors, agencies, security, marketing,
                  procurement, and operations to the least privilege required.
                  Verify account/site roles, collaborator boundaries, SSO,
                  activity logs, API credentials, ownership transfer, and
                  offboarding rather than accepting a generic “team access”
                  label.
                </p>
              </ReviewSection>
              <ReviewSection
                code="16"
                id="recovery"
                title="Backups, disaster recovery, and business continuity"
              >
                <p>
                  Backup frequency and retention do not alone define disaster
                  recovery. Confirm restore scope, environment coverage, offsite
                  copies, geographic redundancy, recovery ownership, testing,
                  and acceptable loss/downtime. No RTO or RPO is stated unless
                  contractual.
                </p>
              </ReviewSection>
              <ReviewSection
                code="17"
                id="support"
                title="Support, escalation, and onboarding"
              >
                <p>
                  Enterprise support should be mapped by channel, hours,
                  severity, response target, escalation ownership, account
                  management, incident communication, event preparation, and
                  post-incident review. “24/7” alone does not describe the
                  operating model, and Racklio does not claim subjective
                  superiority.
                </p>
              </ReviewSection>
              <ReviewSection
                code="18"
                id="migrations"
                title="Enterprise migrations"
              >
                <p>
                  Large migrations can require inventory, plugin/runtime review,
                  DNS coordination, data synchronization, freeze windows, launch
                  ownership, validation, rollback, and stakeholder
                  communication. Provider migration or onboarding assistance
                  should be converted into a written responsibility matrix.
                </p>
              </ReviewSection>
              <ReviewSection
                code="19"
                id="development"
                title="Developer and deployment workflows"
              >
                <p>
                  Compare local tools, Production/Staging/Development, SSH,
                  WP-CLI, Git, CI/CD, APIs, database movement, secrets, access
                  review, change approval, rollback, and audit logs. A
                  deployment feature is not a complete enterprise release
                  process.
                </p>
                <ButtonLink
                  className="mt-6"
                  href="/best/managed-wordpress-hosting-for-developers"
                >
                  Read the Developer Guide
                </ButtonLink>
              </ReviewSection>
              <ReviewSection
                code="20"
                id="portfolios"
                title="Multi-site and multi-brand portfolios"
              >
                <p>
                  Corporate multisite, regional sites, franchises, universities,
                  media groups, and multi-brand estates require install
                  accounting, delegated access, templates, shared services,
                  deployment consistency, isolation, and portfolio reporting.
                </p>
                <ButtonLink
                  className="mt-6"
                  href="/best/managed-wordpress-hosting-for-multiple-websites"
                >
                  Read the Multiple-Site Guide
                </ButtonLink>
              </ReviewSection>
              <ReviewSection
                code="21"
                id="high-traffic"
                title="High-traffic enterprise sites"
              >
                <p>
                  Enterprise governance and high-traffic engineering can
                  overlap, but neither implies the other. Evaluate cacheability,
                  origin work, transfer, dynamic peaks, publishing, and events
                  separately from contracts and organizational risk.
                </p>
              </ReviewSection>
              <ReviewSection
                code="22"
                id="woocommerce"
                title="Enterprise WooCommerce"
              >
                <p>
                  Large stores add checkout, account, order, inventory,
                  integration, webhook, subscription, and recovery requirements.
                  Provider WooCommerce positioning is not a substitute for
                  workload testing and transactional continuity design.
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
                id="regulated"
                title="Regulated and security-sensitive organizations"
              >
                <p>
                  Request current audit reports, certifications, data-location
                  terms, subprocessor information, incident obligations,
                  encryption details, access controls, retention, deletion, and
                  contract addenda. Provider certification does not transfer
                  compliance to the customer.
                </p>
              </ReviewSection>
              <ReviewSection
                code="24"
                id="infrastructure"
                title="Managed WordPress versus VPS or dedicated infrastructure"
              >
                <TwoColumn
                  leftTitle="Standardized managed WordPress"
                  left={
                    <>
                      <p>
                        Can reduce server administration and provide
                        WordPress-specific workflows, support, caching,
                        patching, and deployment conventions.
                      </p>
                      <p>
                        Consider it when the application fits the platform
                        boundary.
                      </p>
                    </>
                  }
                  rightTitle="VPS or dedicated infrastructure"
                  right={
                    <>
                      <p>
                        Can provide root control, custom packages, mixed
                        services, and explicit server resources while increasing
                        architecture, security, backup, and operational
                        responsibility.
                      </p>
                      <p>Enterprise does not automatically mean dedicated.</p>
                    </>
                  }
                />
                <Link
                  className="mt-6 inline-block"
                  href="/best/managed-wordpress-hosting-for-saas-websites"
                >
                  See the SaaS infrastructure boundary
                </Link>
              </ReviewSection>
              <ReviewSection
                code="25"
                id="limitations"
                title="Key limitations by provider"
              >
                <ul className="space-y-3">
                  <li>
                    <strong>WP Engine:</strong> Enterprise capacity and price
                    are custom.
                  </li>
                  <li>
                    <strong>Kinsta:</strong> $500 is a starting price; resources
                    and contract are custom.
                  </li>
                  <li>
                    <strong>Rocket.net:</strong> promotional benchmarks are
                    provider claims, not Racklio evidence.
                  </li>
                  <li>
                    <strong>Pressable:</strong> “100%” is scoped contractual SLA
                    language, not measured site uptime.
                  </li>
                  <li>
                    <strong>Liquid Web:</strong> managed WordPress, VPS, and
                    dedicated products cannot be treated as equivalent.
                  </li>
                </ul>
              </ReviewSection>
              <ReviewSection
                code="26"
                id="matrix"
                title="Enterprise decision matrix"
              >
                <div
                  className="overflow-x-auto"
                  role="region"
                  aria-label="Enterprise hosting fit matrix"
                  tabIndex={0}
                >
                  <table className="min-w-[72rem] text-left text-sm">
                    <caption className="sr-only">
                      Conditional enterprise WordPress hosting fit matrix
                    </caption>
                    <thead>
                      <tr className="border-b border-border">
                        {[
                          'Enterprise scenario',
                          'WP Engine',
                          'Kinsta',
                          'Rocket.net',
                          'Pressable',
                          'Liquid Web',
                        ].map((c) => (
                          <th className="p-3" scope="col" key={c}>
                            {c}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        [
                          'Mission-critical corporate site',
                          'Strong fit',
                          'Strong fit',
                          'Strong fit',
                          'Strong fit',
                          'Consider',
                        ],
                        [
                          'Organization requiring contractual SLA',
                          'Strong fit',
                          'Strong fit',
                          'Strong fit',
                          'Strong fit',
                          'Depends',
                        ],
                        [
                          'Governance-heavy organization',
                          'Strong fit',
                          'Strong fit',
                          'Consider',
                          'Strong fit',
                          'Depends',
                        ],
                        [
                          'Multi-brand portfolio',
                          'Strong fit',
                          'Strong fit',
                          'Consider',
                          'Strong fit',
                          'Consider',
                        ],
                        [
                          'High-traffic marketing property',
                          'Strong fit',
                          'Strong fit',
                          'Strong fit',
                          'Strong fit',
                          'Consider',
                        ],
                        [
                          'Enterprise WooCommerce',
                          'Consider',
                          'Consider',
                          'Strong fit',
                          'Strong fit',
                          'Consider',
                        ],
                        [
                          'Developer-heavy enterprise',
                          'Strong fit',
                          'Strong fit',
                          'Consider',
                          'Consider',
                          'Strong fit',
                        ],
                        [
                          'Published dedicated WordPress bundle',
                          'Depends',
                          'Consider',
                          'Strong fit',
                          'Consider',
                          'Consider',
                        ],
                        [
                          'Mixed WordPress/non-WordPress workloads',
                          'Not designed for requirement',
                          'Not designed for requirement',
                          'Not designed for requirement',
                          'Not designed for requirement',
                          'Strong fit',
                        ],
                        [
                          'Root/server control',
                          'Not designed for requirement',
                          'Not designed for requirement',
                          'Not designed for requirement',
                          'Not designed for requirement',
                          'Strong fit',
                        ],
                      ].map((row) => (
                        <tr className="border-b border-border" key={row[0]}>
                          {row.map((cell, i) =>
                            i === 0 ? (
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
                                key={`${row[0]}-${i}`}
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
                  Statuses indicate conditional product alignment—not rank,
                  measured availability, or capacity.
                </p>
              </ReviewSection>
              <ReviewSection
                code="27"
                id="choose"
                title="How to choose enterprise WordPress hosting"
              >
                <ol className="space-y-4">
                  <li>
                    <strong>1. Document requirements and consequences.</strong>{' '}
                    Sites, teams, traffic, data, launches, downtime, and
                    recovery.
                  </li>
                  <li>
                    <strong>2. Build a responsibility matrix.</strong> Provider,
                    internal teams, agency, security, and vendors.
                  </li>
                  <li>
                    <strong>3. Review legal terms.</strong> SLA, exclusions,
                    remedies, security exhibits, data terms, and exit.
                  </li>
                  <li>
                    <strong>4. Validate architecture.</strong> Isolation, HA,
                    scaling, dependencies, environments, and infrastructure
                    boundary.
                  </li>
                  <li>
                    <strong>5. Rehearse operations.</strong> Migration,
                    deployment, escalation, restore, failover, and incident
                    communication.
                  </li>
                  <li>
                    <strong>6. Compare commercial scope.</strong> Starting
                    price, custom resources, add-ons, overages, support, and
                    contract term.
                  </li>
                </ol>
                <ButtonLink className="mt-7" href="#related">
                  Continue with Provider Evidence
                </ButtonLink>
              </ReviewSection>
              <ReviewSection
                code="28"
                id="faq"
                title="Frequently asked questions"
              >
                <div className="space-y-7">
                  {[
                    [
                      'What is the best managed WordPress hosting for enterprise websites?',
                      'There is no universal choice. Evaluate SLA, governance, resource model, recovery, support, workflow, portfolio, and infrastructure requirements.',
                    ],
                    [
                      'What makes WordPress hosting enterprise?',
                      'Enterprise scope can include contractual commitments, governance, security evidence, custom capacity, migration, escalation, continuity, and organizational workflow.',
                    ],
                    [
                      'Is enterprise hosting the same as high-traffic hosting?',
                      'No. High traffic is a workload characteristic; enterprise can also describe governance, contract, procurement, risk, and portfolio complexity.',
                    ],
                    [
                      'What is an uptime SLA?',
                      'A contractual commitment with defined scope, exclusions, claim procedures, credits, and remedy limits—not Racklio-measured uptime.',
                    ],
                    [
                      'Is WP Engine good for enterprise WordPress?',
                      'Investigate it where governance, structured deployment, isolated managed resources, and custom enterprise support are priorities.',
                    ],
                    [
                      'Is Kinsta good for enterprise WordPress?',
                      'Investigate it where custom managed WordPress capacity, selectable accounting, access controls, and account management align.',
                    ],
                    [
                      'Is Rocket.net good for enterprise WordPress?',
                      'Investigate it when its published dedicated resource bundles, enterprise channels, and managed WordPress architecture fit.',
                    ],
                    [
                      'Is Pressable good for enterprise WordPress?',
                      'Investigate Premium Site where its resources, portfolio tooling, HA statements, onboarding, and contractual SLA fit.',
                    ],
                    [
                      'Is Liquid Web good for enterprise WordPress?',
                      'Investigate the correct product when requirements extend from managed WordPress into VPS or dedicated infrastructure.',
                    ],
                    [
                      'Does enterprise WordPress need dedicated servers?',
                      'Not automatically. Dedicated infrastructure should follow resource, isolation, control, or mixed-workload requirements.',
                    ],
                    [
                      'What should enterprises look for in WordPress security?',
                      'Review controls, evidence, access, monitoring, responsibilities, incident terms, data scope, and application configuration.',
                    ],
                    [
                      'Can managed WordPress meet compliance requirements?',
                      'It can support a compliance program, but provider certifications and controls do not make the customer compliant.',
                    ],
                    [
                      'How should enterprises evaluate disaster recovery?',
                      'Review backups, restore testing, dependencies, redundancy, ownership, communication, and contractual RTO/RPO where available.',
                    ],
                    [
                      'What matters when migrating enterprise WordPress?',
                      'Inventory, compatibility, synchronization, DNS, launch ownership, validation, rollback, freeze windows, and stakeholder coordination.',
                    ],
                  ].map(([q, a]) => (
                    <div key={q}>
                      <h3 className="text-lg font-semibold">{q}</h3>
                      <p className="mt-2">{a}</p>
                    </div>
                  ))}
                </div>
              </ReviewSection>
              <ReviewSection
                code="29"
                id="sources"
                title="Sources and methodology"
              >
                <p>
                  Racklio reviewed these provider-controlled product, pricing,
                  documentation, support, and legal pages on August 9, 2026.
                  Provider architecture and performance statements remain
                  attributed; pricing and contracts can change.
                </p>
                <ol className="mt-6 space-y-3 text-sm">
                  {sources.map((s) => (
                    <li className="flex gap-3" id={`source-${s.id}`} key={s.id}>
                      <span className="font-mono text-xs text-muted-foreground">
                        [{s.id}]
                      </span>
                      <a
                        className="font-medium text-accent-strong underline underline-offset-4"
                        href={s.href}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        {s.provider}: {s.title}
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
                      ['/reviews/wp-engine', 'WP Engine Review'],
                      ['/reviews/kinsta', 'Kinsta Review'],
                      ['/reviews/rocket-net', 'Rocket.net Review'],
                      ['/reviews/pressable', 'Pressable Review'],
                      ['/reviews/liquid-web', 'Liquid Web Review'],
                      [
                        '/comparisons/kinsta-vs-wp-engine',
                        'Kinsta vs WP Engine',
                      ],
                      [
                        '/comparisons/rocket-net-vs-wp-engine',
                        'Rocket.net vs WP Engine',
                      ],
                      [
                        '/comparisons/pressable-vs-wp-engine',
                        'Pressable vs WP Engine',
                      ],
                      [
                        '/comparisons/liquid-web-vs-wp-engine',
                        'Liquid Web vs WP Engine',
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
