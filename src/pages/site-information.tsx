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
          Racklio begins with current provider pricing, product documentation,
          support material, and legal terms. Provider claims remain attributed.
          We do not manufacture testing, benchmarks, ratings, or universal
          winners.
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
          conditional on the buyer’s requirements.
        </p>
      </section>
      <section>
        <h2 className="text-2xl font-semibold">Commercial independence</h2>
        <p className="mt-3">
          Affiliate relationships never determine conclusions, rankings, or
          inclusion. See the{' '}
          <Link href="/affiliate-disclosure">affiliate disclosure</Link> and{' '}
          <Link href="/editorial-standards">editorial standards</Link>.
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
          determine editorial conclusions.
        </p>
      </section>
      <section>
        <h2 className="text-2xl font-semibold">Evidence and corrections</h2>
        <p className="mt-3">
          Factual claims should trace to official sources. Uncertain facts are
          qualified or omitted. Pricing and product rules are dated because they
          can change.
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
      description="How Racklio’s commercial relationships work and how they are kept separate from editorial conclusions."
      canonical="https://racklio.com/affiliate-disclosure"
    >
      <section>
        <h2 className="text-2xl font-semibold">How Racklio may earn revenue</h2>
        <p className="mt-3">
          Racklio may earn a commission when a reader follows an eligible
          provider link and completes a qualifying purchase. This does not
          increase the price solely because the link came from Racklio.
        </p>
      </section>
      <section>
        <h2 className="text-2xl font-semibold">Editorial independence</h2>
        <p className="mt-3">
          Affiliate eligibility does not determine whether a provider is
          recommended, how providers are compared, or what limitations are
          reported. Racklio does not accept payment for rankings.
        </p>
      </section>
      <section>
        <h2 className="text-2xl font-semibold">Current implementation</h2>
        <p className="mt-3">
          Provider buttons currently use safe official destinations unless a
          verified tracking destination has been configured. Racklio does not
          guess or manufacture affiliate URLs.
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
      description="Contact information for Racklio, a brand of Keleva LLC."
      canonical="https://racklio.com/contact"
      noindex
    >
      <section>
        <h2 className="text-2xl font-semibold">
          Editorial and business inquiries
        </h2>
        <p className="mt-3">
          Racklio is operated by Keleva LLC, a U.S. technology company. A
          verified public contact channel must be configured before launch; no
          unverified address is published here.
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
      description="Racklio privacy information."
      canonical="https://racklio.com/privacy"
    >
      <section>
        <h2 className="text-2xl font-semibold">Current site data</h2>
        <p className="mt-3">
          This frontend does not currently include account registration, a
          contact form, or first-party profile collection. Hosting, analytics,
          advertising, consent, and affiliate technologies must be documented
          here before their production activation.
        </p>
      </section>
      <section>
        <h2 className="text-2xl font-semibold">External destinations</h2>
        <p className="mt-3">
          Provider and source links lead to third-party websites governed by
          their own privacy practices.
        </p>
      </section>
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
      title="Terms"
      description="Terms governing use of Racklio’s informational content."
      canonical="https://racklio.com/terms"
    >
      <section>
        <h2 className="text-2xl font-semibold">Informational purpose</h2>
        <p className="mt-3">
          Racklio provides editorial information to support independent buying
          decisions. Content is not a guarantee of provider availability,
          pricing, performance, security, suitability, or contractual terms.
        </p>
      </section>
      <section>
        <h2 className="text-2xl font-semibold">Verify before purchase</h2>
        <p className="mt-3">
          Provider products and terms change. Readers should verify current
          pricing, scope, legal terms, and technical fit directly with the
          provider before purchasing.
        </p>
      </section>
      <p>
        <strong>Manual legal review required:</strong> Keleva LLC should approve
        the final production terms before public launch.
      </p>
    </InformationPage>
  );
}
