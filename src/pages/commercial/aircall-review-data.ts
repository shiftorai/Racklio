import type { SoftwareReviewData } from '@/components/reviews/software-review-template';

const officialUrl = 'https://aircall.io/';

export const aircallReviewData: SoftwareReviewData = {
  slug: 'aircall',
  name: 'Aircall',
  category: 'Business phone and voice AI software',
  categoryLinks: [
    {
      title: 'Business Phone & Voice AI',
      href: '/categories/business-phone-voice-ai',
    },
  ],
  headline: 'Aircall Review 2026: Pricing, Features, Limits & Best Fit',
  dek: 'Aircall is a structured cloud-phone and customer-communications platform for teams that need shared calling workflows, routing, integrations, analytics, and plan-dependent AI. It is less suitable when the requirement is a lightweight single-user virtual number, a full CRM, or a universal contact-center replacement.',
  metaTitle: 'Aircall Review 2026: Pricing, Features & Limits | Racklio',
  metaDescription:
    'Evidence-first Aircall review covering plans, three-license minimums, calling, SMS, routing, integrations, analytics, AI, usage costs and buyer fit.',
  officialUrl,
  providerKey: 'aircall',
  verificationDate: 'August 24, 2026',
  schemaDate: '2026-08-24',
  idealUser:
    'Sales, support, and operations teams that need a structured cloud-phone workflow with shared numbers, routing, integrations, analytics, and team call handling.',
  pricingModel:
    'Quote-dependent per-license subscription with plan minimums, included-number scope, calling bundles or usage, SMS and MMS charges, extra units, optional AI and analytics products, and contract terms.',
  summary: [
    {
      label: 'Best fit',
      text: 'Teams with at least three required licenses that value connected calling workflows, routing, integrations, analytics, and collaboration.',
    },
    {
      label: 'Consider if',
      text: 'Your buying process can validate a written quote, contract commitment, destinations, usage, number requirements, add-ons, and data-retention needs.',
    },
    {
      label: 'Look elsewhere if',
      text: 'You primarily need one inexpensive virtual number, a CRM or help desk, or enterprise contact-center depth that has not been verified in the proposed Aircall package.',
    },
    {
      label: 'Main limitation',
      text: 'The public pricing page exposes plan structure but does not reliably render localized numeric license prices, so a quote is required for an accurate total.',
    },
  ],
  fit: [
    'Your team needs shared calling, numbers, routing, IVR, queues, transfers, voicemail, recordings, and connected sales or support workflows.',
    'CRM and help-desk integrations, API access, analytics, live monitoring, or sales-dialer functions are material requirements at the appropriate plan.',
    'You can support the published license minimum and model calling, messaging, numbers, add-ons, international activity, and contract terms together.',
  ],
  notFit: [
    'You need fewer than three licenses and cannot justify Aircall’s current Essentials or Professional minimum.',
    'Your main requirement is a lightweight virtual-number service rather than a structured team communications operation.',
    'You expect the subscription to include every outbound destination, message, AI product, analytics package, number, or add-on without separate terms.',
    'You need a CRM, ticketing system, or enterprise workforce-management suite rather than a communications layer connected to those systems.',
  ],
  strengths: [
    'Essentials documents core phone administration, IVR, recording, click-to-dial, SMS and MMS, softphone apps, integrations, and API access.',
    'Professional adds more structured routing, analytics, live monitoring, sales workflow, Salesforce CTI, and AI Assist capabilities.',
    'The integration catalog and developer API can connect communications data to existing sales, support, and operational systems.',
    'Official documentation makes license minimums, add-on boundaries, messaging billing, trial limits, and contract behavior visible for procurement.',
  ],
  limitations: [
    'Essentials and Professional currently require three licenses; Custom publishes a 25-license minimum.',
    'Public numeric seat prices are not reliably rendered, and final cost can depend on region, billing structure, contract, bundles, usage, numbers, and add-ons.',
    'SMS and MMS are limited by country, number type, destination, carrier, registration, segments, and contract pricing.',
    'AI Voice Agent, AI Assist Pro, Analytics+, WhatsApp, and other advanced products have packaging or usage boundaries outside the core comparison.',
  ],
  capabilities: [
    {
      title: 'Team phone operations',
      description:
        'Shared numbers, users and teams, inbound and outbound calls, internal calls, voicemail, recordings, notes, tags, transfers, and desktop or mobile apps.',
    },
    {
      title: 'Routing and call handling',
      description:
        'IVR and core call handling on Essentials, with Professional adding capabilities such as smart routing, queue callback, live monitoring, and advanced sales workflow.',
    },
    {
      title: 'Connected workflows',
      description:
        'A published integration marketplace and API connect Aircall with CRM, help-desk, ecommerce, recruiting, and workflow tools.',
    },
    {
      title: 'Analytics and AI',
      description:
        'Plan-dependent analytics, monitoring, transcription, summaries, topics, sentiment, actions, AI assistance, and separately scoped AI agent or advanced analytics products.',
    },
  ],
  pricing: [
    {
      plan: 'Essentials',
      basis: 'Quote/localized price required',
      allowance: 'Three-license minimum',
      note: 'Core voice platform, one local or toll-free number, integrations and API, IVR, recording, click-to-dial, SMS/MMS where supported, apps, and current introductory AI Voice Agent allowance.',
    },
    {
      plan: 'Professional',
      basis: 'Quote/localized price required',
      allowance: 'Three-license minimum',
      note: 'Adds Salesforce CTI, mandatory tags, advanced analytics and live monitoring, smart routing, queue callback, Power Dialer, Voicemail Drop, and AI Assist under current plan terms.',
    },
    {
      plan: 'Custom',
      basis: 'Custom pricing',
      allowance: '25-license minimum',
      note: 'Adds custom onboarding, API developer support, SLA, SSO, and contract-defined scope beyond Professional.',
    },
  ],
  sections: [
    {
      id: 'overview',
      code: 'O1',
      title: 'What Aircall is',
      description:
        'Aircall is a communications layer—not a replacement for every customer system.',
      paragraphs: [
        'Provider fact: Aircall presents a cloud business-phone and customer-communications platform with phone numbers, calling, messaging, team administration, routing, recordings, analytics, integrations, API access, and optional or plan-dependent AI products.',
        'Racklio analysis: Aircall is most relevant when a sales or support team wants structured voice operations connected to the CRM, help desk, and other business applications it already uses. It should not be evaluated as a standalone CRM or universal enterprise contact center.',
      ],
    },
    {
      id: 'calling-workflow',
      code: 'C1',
      title: 'Core calling and shared-team workflow',
      description:
        'The operating model is built around licensed users, numbers, teams, and connected conversations.',
      paragraphs: [
        'Provider fact: current plan materials document a local or toll-free number in the plan, inbound and internal calling treatment excluding toll-free, desktop and mobile softphones, click-to-dial, call recording, voicemail, teams, and integrations. Contract, region, and usage conditions determine the final scope.',
        'Racklio analysis: map each number, user role, team, device, business hour, ownership rule, recording policy, voicemail path, transfer destination, and CRM or help-desk record before selecting a plan.',
      ],
    },
    {
      id: 'routing',
      code: 'R1',
      title: 'Routing, queues, and call handling',
      description: 'Advanced operating controls are plan-dependent.',
      paragraphs: [
        'Provider fact: Essentials documents IVR and core call handling. Professional adds smart routing, manual and automated queue callback, live monitoring, mandatory tagging, Power Dialer, Voicemail Drop, and other advanced sales or support capabilities. Custom adds contract-level features including SLA and SSO.',
        'Racklio analysis: verify IVR depth, ring groups, queues, overflow, callbacks, warm and cold transfers, business hours, supervision, permissions, recording consent, and failure handling against the exact quote. A feature name alone does not establish operational fit.',
      ],
    },
    {
      id: 'messaging',
      code: 'M1',
      title: 'SMS, MMS, and messaging boundaries',
      description:
        'Messaging is supported in selected markets and billed under separate conditions.',
      paragraphs: [
        'Provider fact: Aircall documents domestic SMS for supported numbers in selected countries, with US-to-Canada and Canada-to-US support as an exception to the domestic rule. Number types, limited availability, registration, carriers, and destinations affect eligibility. MMS support is narrower.',
        'Provider fact: SMS is billed by segment and MMS by message, with pricing dependent on contract and destination. SMS, MMS, and WhatsApp are excluded from calling bundles. Racklio analysis: forecast segments, encoding, attachments, campaigns, registration, carrier charges, third-party messaging, and retention separately.',
      ],
    },
    {
      id: 'integrations',
      code: 'I1',
      title: 'Integrations and API',
      description:
        'Connected workflow is one of Aircall’s clearest decision criteria.',
      paragraphs: [
        'Provider fact: Aircall publishes more than 200 integrations and highlights connections including Salesforce, HubSpot, Intercom, Zendesk, Pipedrive, and Microsoft Dynamics. Essentials lists integration and API access; Professional adds Salesforce CTI.',
        'Racklio analysis: validate the exact objects, activities, call logs, recordings, notes, tags, dispositions, screen pops, routing inputs, synchronization direction, permissions, retries, API limits, and data residency required by the workflow.',
      ],
    },
    {
      id: 'analytics',
      code: 'A1',
      title: 'Analytics, monitoring, and retention',
      description:
        'Historical depth and advanced reporting vary by plan and add-on.',
      paragraphs: [
        'Provider fact: the current comparison table lists up to six months of Basic Analytics on Essentials, Basic and Advanced Analytics on Professional, and unlimited Analytics+ history on Custom. Professional also lists live monitoring; Analytics+ remains separately available under current documentation.',
        'Racklio analysis: confirm required dashboards, filters, exports, API access, schedule, live supervision, call-recording retention, analytics history, quality processes, and data-governance obligations in writing.',
      ],
    },
    {
      id: 'ai',
      code: 'AI',
      title: 'AI Assist, AI Assist Pro, and AI Voice Agent',
      description:
        'Aircall’s AI products have distinct packaging and usage rules.',
      paragraphs: [
        'Provider fact: beginning in February 2026, AI Assist is included for Professional customers and must be activated and assigned. It documents call summaries, transcript search, sentiment, key topics, action items, and related conversation insights. Essentials customers can trial or purchase AI Assist under current terms. AI Assist Pro remains a separate advanced add-on.',
        'Provider fact: AI Voice Agent is an independently metered product billed by handled minutes. Current plan materials describe 50 free minutes per account per month and 100 additional minutes at sign-up, while the trial applies its own caps. Racklio analysis: do not treat AI Assist, AI Assist Pro, and AI Voice Agent as one unlimited core entitlement.',
      ],
    },
    {
      id: 'pricing',
      code: 'P1',
      title: 'Pricing structure and commercial limits',
      description:
        'A written quote is necessary because public numeric license prices are incomplete.',
      paragraphs: [
        'Provider fact: Aircall publishes Essentials and Professional with three-license minimums and Custom with a 25-license minimum. The public page currently exposes monthly and annual billing controls but does not reliably render localized numeric license prices in its public output. Aircall documentation also describes monthly, annual with monthly invoicing, and annual-upfront structures.',
        'Provider fact: contracted minimum licenses remain billable even when fewer units are active. Added users and numbers can create additional or prorated charges. Racklio analysis: obtain a written quote covering minimums, billing term, users, numbers, bundles, destinations, messages, AI, analytics, WhatsApp, taxes, onboarding, support, and renewal conditions.',
      ],
    },
    {
      id: 'international',
      code: 'G1',
      title: 'International calling and usage economics',
      description:
        'Calling bundles are scoped by region, prefix, destination, and exclusions.',
      paragraphs: [
        'Provider fact: Aircall documents domestic and regional call bundles, with included destinations determined by the selected bundle and billing address. Premium destinations, inbound toll-free calls, SMS, MMS, and WhatsApp are excluded. Caller prefix can affect whether a call qualifies for a bundle.',
        'Racklio analysis: model the actual originating numbers, destination countries, landline and mobile mix, toll-free traffic, premium prefixes, peaks, messaging, and overage. Do not infer universal unlimited international calling from the plan label.',
      ],
    },
    {
      id: 'trial',
      code: 'T1',
      title: 'Trial and procurement checks',
      description:
        'The current seven-day trial has explicit usage and account limits.',
      paragraphs: [
        'Provider fact: the current seven-day trial provides Dashboard and Workspace access, up to three numbers, unlimited trial users, up to three teams, 100 call minutes, and 100 message segments, subject to registration and other limits. Porting, A2P 10DLC registration, and CNAM requests are unavailable during the trial.',
        'Racklio analysis: use the trial to check application setup, network quality, numbers, routing, integrations, call logs, recordings, messaging eligibility, administration, and AI workflow boundaries. Trial limits are not production entitlements.',
      ],
    },
    {
      id: 'recommendation',
      code: 'D1',
      title: 'Conditional recommendation',
      description:
        'Choose Aircall only when its structured communications model fits the workload.',
      paragraphs: [
        'Consider Aircall when a team can support at least three licenses and needs connected calling, routing, integrations, analytics, collaboration, and plan-dependent AI or supervision capabilities. Its operating model is more structured than a lightweight virtual-number tool.',
        'Consider alternatives when the buyer needs one or two inexpensive seats, a different number or country model, simpler administration, a full CRM or help desk, or contact-center capabilities that the proposed Aircall package does not document.',
      ],
    },
  ],
  scenarios: [
    {
      scenario: 'Sales or support team needs CRM-connected calling and routing',
      fit: 'Consider Aircall',
      why: 'Its documented model combines team calling, routing, integrations, API access, analytics, and plan-dependent sales or support controls.',
    },
    {
      scenario: 'One-person business needs a basic virtual number',
      fit: 'Consider a lighter alternative',
      why: 'Essentials and Professional currently publish a three-license minimum.',
    },
    {
      scenario: 'Professional team wants summaries and conversation insights',
      fit: 'Evaluate Aircall Professional and activate AI Assist',
      why: 'AI Assist is included under current Professional terms but requires activation and assignment.',
    },
    {
      scenario: 'Buyer needs predictable international and messaging economics',
      fit: 'Obtain a destination-level written quote',
      why: 'Bundles, prefixes, destinations, SMS segments, MMS, toll-free calls, and add-ons have separate conditions.',
    },
  ],
  alternatives: [
    {
      title: 'KrispCall',
      description:
        'Consider when a compact virtual-number and cloud-phone model with separately modeled usage fits the team better.',
      href: '/reviews/krispcall',
    },
    {
      title: 'CallHippo',
      description:
        'Consider when its number availability, plan allowances, routing, and usage economics align more closely.',
      href: '/reviews/callhippo',
    },
    {
      title: 'Quo',
      description:
        'Consider when a collaborative SMB phone workspace, shared conversation history, and Sona usage model are the stronger fit.',
      href: '/reviews/quo',
    },
  ],
  relatedComparisons: [
    {
      title: 'KrispCall vs Aircall',
      href: '/comparisons/krispcall-vs-aircall',
    },
    {
      title: 'Business Phone & Voice AI',
      href: '/categories/business-phone-voice-ai',
    },
    { title: 'All software reviews', href: '/reviews' },
    { title: 'Software comparisons', href: '/comparisons' },
  ],
  faqs: [
    {
      question: 'How much does Aircall cost?',
      answer:
        'Aircall currently publishes plan structure and license minimums, but numeric localized seat prices do not reliably render in the public page output. Obtain a written quote for the selected region, term, licenses, numbers, usage, and add-ons.',
    },
    {
      question: 'Does Aircall require a minimum number of users?',
      answer:
        'Yes. The current pricing table lists three licenses for Essentials and Professional and 25 licenses for Custom.',
    },
    {
      question: 'Is AI Assist included with Aircall?',
      answer:
        'AI Assist is currently included with Professional and must be activated and assigned. Essentials customers can trial or purchase it; AI Assist Pro remains separately scoped.',
    },
    {
      question: 'Is Aircall AI Voice Agent included without limits?',
      answer:
        'No. AI Voice Agent is a usage-metered product. Current plan materials describe a limited introductory allowance, after which separate minute-based pricing or bundles apply.',
    },
    {
      question: 'Does Aircall include unlimited international calling?',
      answer:
        'No universal assumption is safe. Calling bundles depend on region, billing address, originating prefix, destinations, number type, and exclusions.',
    },
    {
      question: 'Has Racklio tested Aircall hands-on?',
      answer:
        'No. This review uses official Aircall-controlled documentation and does not claim independent call-quality, AI, reliability, support, or performance testing.',
    },
  ],
  sources: [
    { title: 'Aircall pricing', href: 'https://aircall.io/pricing/' },
    {
      title: 'Aircall integrations',
      href: 'https://aircall.io/call-center-software-integrations/',
    },
    {
      title: 'Aircall trial experience',
      href: 'https://support.aircall.io/en-gb/articles/15149698584733',
    },
    {
      title: 'Aircall Professional plan',
      href: 'https://support.aircall.io/en-gb/articles/36790327329053',
    },
    {
      title: 'AI Assist in Professional',
      href: 'https://support.aircall.io/en-gb/articles/33898865366941',
    },
    {
      title: 'Discover AI Assist',
      href: 'https://support.aircall.io/en-gb/articles/13480661185309',
    },
    {
      title: 'Aircall AI Voice Agent overview',
      href: 'https://support.aircall.io/en-gb/articles/25979264664221',
    },
    {
      title: 'Aircall call bundles',
      href: 'https://support.aircall.io/en-gb/articles/19355223566493',
    },
    {
      title: 'Aircall SMS and MMS charges',
      href: 'https://support.aircall.io/en-gb/articles/26285326293149',
    },
    {
      title: 'Aircall business text messaging',
      href: 'https://support.aircall.io/en-gb/articles/10375395914781',
    },
    {
      title: 'Billing additional numbers and users',
      href: 'https://support.aircall.io/en-gb/articles/21703001898013',
    },
    {
      title: 'Purchasing Aircall add-ons',
      href: 'https://support.aircall.io/en-gb/articles/24934967954461',
    },
  ],
};
