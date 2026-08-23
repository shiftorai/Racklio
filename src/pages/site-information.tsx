import { useEffect, type ReactNode } from 'react';

import { ResearchMarker } from '@/components/brand';
import { PageLayout, SiteFooter, SiteHeader } from '@/components/layout';
import { Container, Link, Section } from '@/components/ui';

function InformationPage({
  code,
  title,
  description,
  metaDescription,
  canonical,
  children,
  noindex = false,
}: {
  code: string;
  title: string;
  description: string;
  metaDescription?: string;
  canonical: string;
  children: ReactNode;
  noindex?: boolean;
}) {
  useEffect(() => {
    const meta = document.querySelector<HTMLMetaElement>(
      'meta[name="description"]',
    );
    const previous = meta?.content;
    if (meta) meta.content = metaDescription ?? description;
    return () => {
      if (meta && previous) meta.content = previous;
    };
  }, [description, metaDescription]);

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

function PolicyDate() {
  return (
    <p className="text-sm font-medium text-muted-foreground">
      Last updated: August 10, 2026
    </p>
  );
}

export function AboutPage() {
  return (
    <InformationPage
      code="AB"
      title="About Racklio"
      description="Racklio is an independent software decision resource operated by Keleva LLC."
      canonical="https://racklio.com/about"
    >
      <PolicyDate />
      <section>
        <h2 className="text-2xl font-semibold">Compare. Choose. Grow.</h2>
        <p className="mt-3">
          Racklio helps businesses evaluate AI customer support and business
          communication software without turning a complex purchase into a
          universal ranking. The goal is to reduce unnecessary research
          complexity by organizing relevant provider information around business
          fit, operational needs, and the tradeoffs that can affect a buying
          decision.
        </p>
        <p className="mt-3">
          Different teams can require different workflows, communication
          channels, automation, controls, and service models. Racklio therefore
          focuses on the conditions that make an option appropriate rather than
          presenting one provider as the default choice for every organization.
        </p>
      </section>
      <section>
        <h2 className="text-2xl font-semibold">What Racklio covers</h2>
        <p className="mt-3">
          Racklio covers AI customer support, business phone systems, AI
          receptionists, customer messaging, and help desk and live chat
          software. Provider reviews examine documented product scope and
          practical fit; conditional comparisons explain meaningful differences;
          and decision guides organize options around a defined business need.
          Together, these formats help readers move from broad research to a
          more focused shortlist.
        </p>
        <p className="mt-3">
          Racklio is an editorial publisher and decision resource. It is not a
          software vendor, reseller, service operator, or provider support
          channel. Providers remain responsible for their products, pricing,
          service delivery, contracts, and customer support.
        </p>
        <p className="mt-3">
          Coverage is intentionally centered on the information a business can
          use to evaluate fit. A review provides depth on one provider, a
          comparison clarifies a specific choice, and a buying guide starts with
          the business need before considering suitable approaches.
        </p>
      </section>
      <section>
        <h2 className="text-2xl font-semibold">How the research works</h2>
        <p className="mt-3">
          Research begins with official provider sources, including pricing
          pages, product documentation, support materials, and legal or
          service-level documents where relevant. Sources are reviewed for the
          product scope and decision being discussed, and material details are
          checked before publication or an identified verification date.
        </p>
        <p className="mt-3">
          Racklio distinguishes documented facts, provider claims, and editorial
          analysis. It does not fabricate tests, benchmarks, scores, support
          experiences, or performance results. When independent testing has not
          been performed, the content does not imply otherwise. The full process
          is described in the{' '}
          <Link href="/methodology">Editorial Methodology</Link>.
        </p>
      </section>
      <section>
        <h2 className="text-2xl font-semibold">
          How recommendations are formed
        </h2>
        <p className="mt-3">
          Racklio does not select a universal winner. Recommendations are
          conditional on the decision context: the workflow, operational
          requirements, pricing structure, support model, implementation path,
          business constraints, and relevant tradeoffs. A documented strength
          may matter in one context and carry less weight in another.
        </p>
        <p className="mt-3">
          Conclusions are based on the evidence available for the question being
          addressed. Where official sources conflict or leave an important point
          unresolved, Racklio qualifies the conclusion or omits the uncertain
          detail rather than filling the gap with an assumption.
        </p>
        <p className="mt-3">
          The purpose of a recommendation is to explain who should consider an
          option, why it may fit, and when another approach deserves attention.
          Readers should verify any material price, feature, or contractual term
          directly with the provider before purchasing because provider
          information can change after publication.
        </p>
      </section>
      <section>
        <h2 className="text-2xl font-semibold">Editorial independence</h2>
        <p className="mt-3">
          Commercial relationships do not purchase rankings or determine
          editorial conclusions. Racklio does not accept paid placement as an
          editorial ranking, and affiliate eligibility is not treated as
          evidence of product quality or suitability. Documented limitations
          remain part of the analysis when a commercial relationship exists.
        </p>
        <p className="mt-3">
          The principles governing source use, corrections, and commercial
          separation are explained in the{' '}
          <Link href="/editorial-standards">Editorial Standards</Link> and{' '}
          <Link href="/affiliate-disclosure">Affiliate Disclosure</Link>.
        </p>
      </section>
      <section>
        <h2 className="text-2xl font-semibold">How Racklio makes money</h2>
        <p className="mt-3">
          Racklio may earn commissions when readers follow eligible provider
          links and complete qualifying purchases. Not every provider or
          external link is necessarily an affiliate link. Monetization is kept
          separate from the research process and does not determine the
          conclusions published on Racklio.
        </p>
      </section>
      <section>
        <h2 className="text-2xl font-semibold">Who operates Racklio</h2>
        <p className="mt-3">
          Racklio is the publishing brand, and Keleva LLC operates Racklio.
          Racklio is not a separate legal entity, software provider, or
          communications service company. This distinction keeps the
          publisher&apos;s role clear: Racklio provides editorial information,
          while providers control and deliver the services discussed.
        </p>
      </section>
      <section>
        <h2 className="text-2xl font-semibold">Corrections and contact</h2>
        <p className="mt-3">
          Readers can contact Racklio when provider information appears
          outdated, a cited source appears inaccurate, or published analysis
          needs clarification. Include the relevant page and enough detail to
          identify the issue. Corrections and editorial inquiries can be sent to{' '}
          <Link href="mailto:contact@racklio.com">contact@racklio.com</Link>, or
          readers can review the <Link href="/contact">Contact page</Link> for
          Racklio&apos;s support boundaries.
        </p>
      </section>
    </InformationPage>
  );
}

export function PartnerMediaKitPage() {
  return (
    <InformationPage
      code="PM"
      title="Partner & Media Kit"
      description="Racklio is an independent B2B software comparison and buying-guidance publication operated by Keleva LLC. We help SMBs evaluate and choose software through research-based reviews, comparisons, alternatives, pricing guides, and decision-focused content."
      metaDescription="Learn about Racklio's audience, B2B software coverage, editorial approach, promotional channels, and affiliate partnership model."
      canonical="https://racklio.com/partner-media-kit"
    >
      <section>
        <h2 className="text-2xl font-semibold">What Racklio Covers</h2>
        <p className="mt-3">Racklio&apos;s primary coverage areas are:</p>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li>AI Customer Support</li>
          <li>Business Phone &amp; Voice AI</li>
          <li>Live Chat &amp; Messaging</li>
          <li>CRM &amp; Customer Engagement</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Audience</h2>
        <p className="mt-3">
          Racklio primarily serves small and midsize businesses evaluating B2B
          software. Its geographic focus is North America, with a current
          emphasis on the United States. The publication is designed for readers
          with commercial research and software-selection intent.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Content Formats</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li>In-depth software reviews</li>
          <li>Head-to-head comparisons</li>
          <li>Alternatives guides</li>
          <li>Pricing and value guides</li>
          <li>Category and buying guides</li>
          <li>Decision-focused YouTube content</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">
          How Racklio Evaluates Software
        </h2>
        <p className="mt-3">
          Racklio uses a research-based process grounded in official provider
          information, source verification, and a documented editorial
          methodology. Provider facts and claims remain distinct from
          Racklio&apos;s analysis so readers can understand both the available
          evidence and its practical decision relevance.
        </p>
        <p className="mt-3">
          Read the <Link href="/methodology">Editorial Methodology</Link> and{' '}
          <Link href="/editorial-standards">Editorial Standards</Link>.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Partnership Model</h2>
        <p className="mt-3">
          Racklio may work with software providers through affiliate
          partnerships, editorially relevant product inclusion, access to
          accurate product information and approved brand assets, and partner
          updates used for factual verification.
        </p>
        <p className="mt-3">
          A commercial relationship does not guarantee favorable coverage, a
          ranking position, a recommendation, or inclusion in Racklio content.
          Editorial conclusions remain independent.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Promotional Channels</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li>Racklio.com editorial content</li>
          <li>Organic search</li>
          <li>Racklio YouTube content</li>
          <li>Racklio&apos;s LinkedIn company presence</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Editorial Independence</h2>
        <p className="mt-3">
          Recommendations are editorial decisions. Compensation does not
          determine rankings or conclusions, commercial relationships are
          disclosed where appropriate, and material provider claims are checked
          against available official sources.
        </p>
        <p className="mt-3">
          See the <Link href="/affiliate-disclosure">Affiliate Disclosure</Link>{' '}
          and <Link href="/editorial-standards">Editorial Standards</Link> for
          more information.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Work with Racklio</h2>
        <p className="mt-3">
          For partnership, affiliate, media, or factual product-update
          inquiries, contact{' '}
          <Link href="mailto:contact@racklio.com">contact@racklio.com</Link>.
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
      description="How Racklio evaluates business software and turns official documentation into conditional buying guidance."
      canonical="https://racklio.com/methodology"
    >
      <PolicyDate />
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
          Reviews and comparisons examine product scope, business fit,
          workflows, automation boundaries, integrations, security and
          governance, implementation, support, pricing, and limitations.
          Recommendations remain conditional on the buyer&apos;s requirements.
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
      <PolicyDate />
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
      <PolicyDate />
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
      <PolicyDate />
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
          customer support on behalf of software companies. Billing, account,
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
      <PolicyDate />
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
          Search, technical delivery, and email
        </h2>
        <p className="mt-3">
          Internal search filters Racklio&apos;s published page inventory in the
          browser and does not submit the query to an analytics service.
          Racklio&apos;s hosting infrastructure may receive ordinary technical
          request information needed to deliver and secure the site.
        </p>
        <p className="mt-3">
          Messages sent to{' '}
          <Link href="mailto:contact@racklio.com">contact@racklio.com</Link> may
          include the sender&apos;s email address, message content, and ordinary
          message metadata. Keleva LLC uses this information to respond to
          inquiries and operate Racklio.
        </p>
      </section>
      <section>
        <h2 className="text-2xl font-semibold">External destinations</h2>
        <p className="mt-3">
          Provider and source links lead to third-party websites governed by
          their own privacy and tracking practices. Those sites control their
          own checkout, accounts, cookies, and service terms. Some commercial
          provider links use verified affiliate tracking destinations; evidence
          and source citations continue to use direct provider URLs.
        </p>
      </section>
      <section>
        <h2 className="text-2xl font-semibold">Future tracking changes</h2>
        <p className="mt-3">
          Analytics, advertising measurement, Microsoft UET, or other
          non-essential browser technologies must not be activated until this
          notice is updated and applicable consent requirements have been
          reassessed.
        </p>
      </section>
      <p>
        Privacy questions can be sent to{' '}
        <Link href="mailto:contact@racklio.com">contact@racklio.com</Link>.
      </p>
    </InformationPage>
  );
}

export function TermsPage() {
  return (
    <InformationPage
      code="TR"
      title="Terms of Use"
      description="Terms for using Racklio's informational software research."
      canonical="https://racklio.com/terms"
    >
      <PolicyDate />
      <section>
        <h2 className="text-2xl font-semibold">Operator and purpose</h2>
        <p className="mt-3">
          Racklio is operated by Keleva LLC and provides informational editorial
          material to support software decisions. Racklio is not a software
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
          contract.
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
          the service, law, and business practices evolve.
        </p>
      </section>
      <p>
        Questions about these terms can be sent to{' '}
        <Link href="mailto:contact@racklio.com">contact@racklio.com</Link>.
      </p>
    </InformationPage>
  );
}
