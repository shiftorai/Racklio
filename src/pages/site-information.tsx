import { useEffect, type ReactNode } from 'react';

import { ResearchMarker } from '@/components/brand';
import { PageLayout, SiteFooter, SiteHeader } from '@/components/layout';
import { Container, Link, Section } from '@/components/ui';

function InformationPage({
  code,
  title,
  description,
  canonical,
  children,
  noindex = false,
}: {
  code: string;
  title: string;
  description: string;
  canonical: string;
  children: ReactNode;
  noindex?: boolean;
}) {
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

  return (
    <PageLayout footer={<SiteFooter />} header={<SiteHeader />}>
      <title>{`${title} | Racklio`}</title>
      <link rel="canonical" href={canonical} />
      {noindex ? <meta name="robots" content="noindex,follow" /> : null}
      <Section className="border-b border-border bg-surface-subtle py-16 sm:py-20">
        <Container>
          <ResearchMarker code={code} label="Racklio information" />
          <h1 className="mt-6 text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
            {description}
          </p>
        </Container>
      </Section>
      <Section>
        <Container>
          <article className="max-w-3xl space-y-8 leading-7">
            {children}
          </article>
        </Container>
      </Section>
    </PageLayout>
  );
}

export function AboutPage() {
  return (
    <InformationPage
      code="AB"
      title="About Racklio"
      description="Racklio is an independent hosting decision resource operated by Keleva LLC."
      canonical="https://racklio.com/about"
    >
      <section>
        <h2 className="text-2xl font-semibold">Compare. Choose. Grow.</h2>
        <p className="mt-3">
          Racklio helps businesses understand hosting and web-infrastructure
          choices through provider reviews, conditional comparisons, and
          workload-focused buying guides. Racklio is operated by Keleva LLC;
          Racklio is the publishing brand, not a separate provider or hosting
          company.
        </p>
      </section>
      <section>
        <h2 className="text-2xl font-semibold">How the research works</h2>
        <p className="mt-3">
          Racklio reviews official provider pricing, product documentation,
          support material, and legal or service-level documents where relevant.
          Provider statements are identified as provider claims, while Racklio
          analysis explains how documented terms may fit a particular workload.
          Recommendations are conditional rather than universal rankings.
        </p>
        <p className="mt-3">
          Racklio does not claim to personally test every provider, continuously
          monitor uptime, or publish independent laboratory benchmarks. When no
          independent testing has been performed, the relevant page says so.
        </p>
      </section>
      <section>
        <h2 className="text-2xl font-semibold">How Racklio is funded</h2>
        <p className="mt-3">
          Racklio may earn commissions from eligible provider links. Commercial
          relationships do not determine Racklio&apos;s published rankings or
          recommendations, and Racklio does not sell ranking positions. Read the{' '}
          <Link href="/affiliate-disclosure">Affiliate Disclosure</Link> for
          implementation details.
        </p>
      </section>
      <section>
        <h2 className="text-2xl font-semibold">Limits of the guidance</h2>
        <p className="mt-3">
          Hosting products, pricing, and terms can change after verification.
          Racklio does not guarantee provider performance, availability,
          security, support outcomes, or suitability for every organization.
          Buyers should confirm material terms directly with a provider before
          purchasing.
        </p>
      </section>
    </InformationPage>
  );
}

export function MethodologyPage() {
  return (
    <InformationPage
      code="MT"
      title="Editorial Methodology"
      description="How Racklio evaluates hosting providers and turns official documentation into conditional buying guidance."
      canonical="https://racklio.com/methodology"
    >
      <section>
        <h2 className="text-2xl font-semibold">
          Evidence before recommendation
        </h2>
        <p className="mt-3">
          Racklio begins with provider pricing, product documentation, support
          material, and legal or service-level terms where relevant. Provider
          facts and claims remain attributed; Racklio analysis explains their
          decision implications. We do not manufacture testing, benchmarks,
          ratings, or universal winners.
        </p>
      </section>
      <section>
        <h2 className="text-2xl font-semibold">
          A consistent decision framework
        </h2>
        <p className="mt-3">
          Reviews and comparisons examine platform scope, workload fit,
          resources, traffic accounting, workflow, security boundaries, backups,
          support, scaling, pricing, and limitations. Recommendations remain
          conditional on the buyer&apos;s requirements.
        </p>
      </section>
      <section>
        <h2 className="text-2xl font-semibold">
          Verification dates and source conflicts
        </h2>
        <p className="mt-3">
          Commercial pages identify when their sources were reviewed. When
          official sources conflict, Racklio describes the conflict, qualifies
          the conclusion, or omits the unresolved fact. Provider materials can
          change after verification, so buyers should confirm material terms
          before purchase.
        </p>
      </section>
      <section>
        <h2 className="text-2xl font-semibold">Commercial independence</h2>
        <p className="mt-3">
          Commercial relationships do not determine Racklio&apos;s published
          rankings or recommendations. Affiliate eligibility is not evidence of
          product quality. See the{' '}
          <Link href="/affiliate-disclosure">Affiliate Disclosure</Link> and{' '}
          <Link href="/editorial-standards">Editorial Standards</Link>.
        </p>
      </section>
    </InformationPage>
  );
}

export function EditorialStandardsPage() {
  return (
    <InformationPage
      code="ES"
      title="Editorial Standards"
      description="The principles Racklio uses to protect accuracy, transparency, and buyer trust."
      canonical="https://racklio.com/editorial-standards"
    >
      <section>
        <h2 className="text-2xl font-semibold">Independent conclusions</h2>
        <p className="mt-3">
          Racklio does not sell rankings or allow commercial relationships to
          determine published recommendations.
        </p>
      </section>
      <section>
        <h2 className="text-2xl font-semibold">Evidence and corrections</h2>
        <p className="mt-3">
          Factual claims should trace to official sources. Uncertain facts are
          qualified or omitted. Pricing and product rules are dated because they
          can change. Material source conflicts are disclosed, qualified, or
          left unresolved rather than silently inferred.
        </p>
      </section>
      <section>
        <h2 className="text-2xl font-semibold">No fabricated proof</h2>
        <p className="mt-3">
          Racklio does not invent tests, benchmarks, support experiences, uptime
          measurements, ratings, awards, urgency, or customer testimony.
        </p>
      </section>
      <p>
        Read the complete{' '}
        <Link href="/methodology">evaluation methodology</Link>.
      </p>
    </InformationPage>
  );
}

export function AffiliateDisclosurePage() {
  return (
    <InformationPage
      code="AD"
      title="Affiliate Disclosure"
      description="How Racklio's commercial relationships work and how they are kept separate from editorial conclusions."
      canonical="https://racklio.com/affiliate-disclosure"
    >
      <section>
        <h2 className="text-2xl font-semibold">How Racklio may earn revenue</h2>
        <p className="mt-3">
          Racklio may earn a commission when a reader follows an eligible
          provider link and completes a qualifying purchase, potentially without
          additional cost to the reader. Not every external provider link is an
          affiliate link.
        </p>
      </section>
      <section>
        <h2 className="text-2xl font-semibold">Editorial independence</h2>
        <p className="mt-3">
          Commercial relationships do not determine Racklio&apos;s published
          rankings or recommendations. Affiliate eligibility is not treated as
          evidence, and documented limitations remain part of the analysis.
          Racklio does not sell ranking positions.
        </p>
      </section>
      <section>
        <h2 className="text-2xl font-semibold">Current implementation</h2>
        <p className="mt-3">
          Provider buttons currently use official destinations unless a verified
          tracking destination has been configured. Racklio does not guess or
          manufacture affiliate URLs.
        </p>
      </section>
      <section>
        <h2 className="text-2xl font-semibold">Operator and external terms</h2>
        <p className="mt-3">
          Racklio is operated by Keleva LLC. Providers control their own sites,
          checkout, pricing, eligibility rules, privacy practices, and
          contractual terms. A link from Racklio does not make Racklio the
          provider or seller of the referenced service.
        </p>
        <p className="mt-3">
          Questions about this disclosure can be sent to{' '}
          <Link href="mailto:contact@racklio.com">contact@racklio.com</Link>.
        </p>
      </section>
    </InformationPage>
  );
}

export function ContactPage() {
  return (
    <InformationPage
      code="CT"
      title="Contact Racklio"
      description="Contact information and support boundaries for Racklio, operated by Keleva LLC."
      canonical="https://racklio.com/contact"
      noindex
    >
      <section>
        <h2 className="text-2xl font-semibold">
          Editorial and business inquiries
        </h2>
        <p className="mt-3">
          Racklio is operated by Keleva LLC. No response time is promised.
        </p>
        <p className="mt-3">
          <strong>Email:</strong>{' '}
          <Link href="mailto:contact@racklio.com">contact@racklio.com</Link>.
        </p>
      </section>
      <section>
        <h2 className="text-2xl font-semibold">Provider support</h2>
        <p className="mt-3">
          Racklio is an editorial decision resource and does not provide
          customer support on behalf of hosting companies. Billing, account,
          outage, security-incident, and technical-support requests must be
          directed to the relevant provider.
        </p>
      </section>
      <p>
        For editorial policy, see{' '}
        <Link href="/editorial-standards">Editorial Standards</Link>.
      </p>
    </InformationPage>
  );
}

export function PrivacyPage() {
  return (
    <InformationPage
      code="PR"
      title="Privacy"
      description="How Racklio's current website handles data and external links."
      canonical="https://racklio.com/privacy"
    >
      <section>
        <h2 className="text-2xl font-semibold">
          Operator and current frontend
        </h2>
        <p className="mt-3">
          Racklio is operated by Keleva LLC. The current frontend does not
          include user accounts, contact or newsletter forms, advertising
          pixels, analytics vendors, Microsoft UET, Google Tag Manager,
          first-party profile collection, embedded third-party media, or error
          monitoring. It does not set application cookies or use localStorage or
          sessionStorage.
        </p>
      </section>
      <section>
        <h2 className="text-2xl font-semibold">
          Search and technical delivery
        </h2>
        <p className="mt-3">
          Internal search filters Racklio&apos;s published page inventory in the
          browser and does not submit the query to an analytics service. Like
          any website, production hosting infrastructure may receive technical
          request information needed to deliver and secure the site. Keleva LLC
          must confirm the production host&apos;s logging, retention, and
          processing practices before approving this notice.
        </p>
      </section>
      <section>
        <h2 className="text-2xl font-semibold">External destinations</h2>
        <p className="mt-3">
          Provider and source links lead to third-party websites governed by
          their own privacy and tracking practices. Those sites control their
          own checkout, accounts, cookies, and service terms. Racklio&apos;s
          frontend does not currently contain verified affiliate tracking URLs.
        </p>
      </section>
      <section>
        <h2 className="text-2xl font-semibold">Future tracking changes</h2>
        <p className="mt-3">
          Analytics, advertising measurement, Microsoft UET, affiliate tracking,
          or other non-essential browser technologies must not be activated
          until this notice is updated and applicable consent requirements have
          been reassessed.
        </p>
      </section>
      <p>
        Privacy questions can be sent to{' '}
        <Link href="mailto:contact@racklio.com">contact@racklio.com</Link>.
      </p>
      <p>
        <strong>Manual legal review required:</strong> Keleva LLC should approve
        the final production privacy notice before launch and whenever tracking
        or data processing changes.
      </p>
    </InformationPage>
  );
}

export function TermsPage() {
  return (
    <InformationPage
      code="TR"
      title="Terms of Use"
      description="Terms for using Racklio's informational hosting research."
      canonical="https://racklio.com/terms"
    >
      <section>
        <h2 className="text-2xl font-semibold">Operator and purpose</h2>
        <p className="mt-3">
          Racklio is operated by Keleva LLC and provides informational editorial
          material to support hosting decisions. Racklio is not a hosting
          provider, reseller, or provider support channel.
        </p>
      </section>
      <section>
        <h2 className="text-2xl font-semibold">Accuracy and verification</h2>
        <p className="mt-3">
          Provider products, prices, features, and terms can change after
          publication or verification. Racklio does not guarantee completeness,
          current availability, performance, security, suitability, or
          contractual terms. Readers should verify material details directly
          with the provider before purchasing.
        </p>
      </section>
      <section>
        <h2 className="text-2xl font-semibold">
          No warranty and reasonable liability limits
        </h2>
        <p className="mt-3">
          Content is provided for general informational purposes without a
          guarantee of uninterrupted availability or fitness for a particular
          purpose. To the extent permitted by applicable law, Keleva LLC is not
          responsible for decisions, losses, outages, security events, or
          disputes arising from a provider&apos;s products, external website, or
          contract. Professional legal review is required before relying on this
          language in production.
        </p>
      </section>
      <section>
        <h2 className="text-2xl font-semibold">
          External services and affiliate relationships
        </h2>
        <p className="mt-3">
          External providers control their own websites, offers, checkout,
          privacy practices, service delivery, and contracts. Racklio may earn a
          commission from eligible links, but commercial relationships do not
          determine its published rankings or recommendations.
        </p>
      </section>
      <section>
        <h2 className="text-2xl font-semibold">
          Intellectual property and provider marks
        </h2>
        <p className="mt-3">
          Racklio&apos;s original site content and brand materials may not be
          republished or misrepresented without permission. Provider names,
          product names, and trademarks belong to their respective owners. Their
          appearance does not imply provider ownership, endorsement,
          certification, or sponsorship of Racklio.
        </p>
      </section>
      <section>
        <h2 className="text-2xl font-semibold">Acceptable use and changes</h2>
        <p className="mt-3">
          Users must not misuse the site, interfere with its operation, or
          misrepresent Racklio content. These terms and the site may change as
          the service, law, and business practices evolve. Any governing-law
          provision requires separate business and legal approval before launch.
        </p>
      </section>
      <p>
        Questions about these terms can be sent to{' '}
        <Link href="mailto:contact@racklio.com">contact@racklio.com</Link>.
      </p>
      <p>
        <strong>Manual legal review required:</strong> Keleva LLC should approve
        the final production terms before public launch.
      </p>
    </InformationPage>
  );
}
