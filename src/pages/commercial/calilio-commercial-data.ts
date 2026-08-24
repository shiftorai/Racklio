import type { CommercialPageData } from '@/components/commercial';
import type { SoftwareReviewData } from '@/components/reviews/software-review-template';

const officialUrl = 'https://www.calilio.com/';
const verificationDate = 'August 24, 2026';
const schemaDate = '2026-08-24';

const calilioSources = [
  { title: 'Calilio pricing', href: 'https://www.calilio.com/calilio-pricing' },
  { title: 'Calilio features', href: 'https://www.calilio.com/features' },
  {
    title: 'Calilio business phone system',
    href: 'https://www.calilio.com/business-phone-system',
  },
  {
    title: 'Calilio virtual phone numbers',
    href: 'https://www.calilio.com/virtual-phone-number',
  },
  {
    title: 'Calilio AI call reports',
    href: 'https://www.calilio.com/features/ai-call-report',
  },
  {
    title: 'Calilio AI call summary',
    href: 'https://www.calilio.com/features/ai-call-summary',
  },
  {
    title: 'Calilio sentiment analysis',
    href: 'https://www.calilio.com/features/sentiment-analysis',
  },
  { title: 'Calilio IVR', href: 'https://www.calilio.com/features/ivr' },
  {
    title: 'Calilio live call monitoring',
    href: 'https://www.calilio.com/features/call-monitoring',
  },
  {
    title: 'Calilio power dialer',
    href: 'https://www.calilio.com/features/power-dialer',
  },
  {
    title: 'Calilio call and SMS rates',
    href: 'https://www.calilio.com/calling-rates',
  },
];

export const calilioReviewData: SoftwareReviewData = {
  slug: 'calilio',
  name: 'Calilio',
  category: 'Business phone and voice AI software',
  categoryLinks: [
    {
      title: 'Business Phone & Voice AI',
      href: '/categories/business-phone-voice-ai',
    },
  ],
  headline: 'Calilio Review 2026: Pricing, Features, AI & Best Fit',
  dek: 'Calilio is an SMB cloud-phone platform for virtual numbers, calling, messaging, shared-number workflow, routing, monitoring, analytics, and plan-dependent AI reporting. Its entry subscription is only one cost layer because usage beyond included US/Canada bundles, numbers, and international activity can draw from a separately funded wallet.',
  metaTitle: 'Calilio Review 2026: Pricing, Features & AI | Racklio',
  metaDescription:
    'Evidence-first Calilio review covering plans, minutes, SMS, wallet overage, virtual numbers, routing, monitoring, AI reporting and buyer fit.',
  officialUrl,
  providerKey: 'calilio',
  verificationDate,
  schemaDate,
  idealUser:
    'SMBs and growing teams that need virtual numbers, calling, messaging, shared numbers, routing, monitoring, and call reporting under a published subscription-plus-usage model.',
  pricingModel:
    'Per-user subscription plus included US/Canada usage, wallet-funded overage, separately billed numbers and destination rates, and custom or optional scope.',
  summary: [
    {
      label: 'Best fit',
      text: 'SMBs that can forecast users, US/Canada calling and SMS, numbers, international destinations, and advanced call-management needs.',
    },
    {
      label: 'Cost boundary',
      text: 'Subscription, included bundles, wallet usage, number charges, international rates, AI usage, and add-ons must be modeled separately.',
    },
    {
      label: 'Primary upgrade',
      text: 'Premium adds unlimited users, IVR, business hours, power dialer, monitoring, transfer, bulk SMS, and AI call reporting.',
    },
    {
      label: 'Main limitation',
      text: 'The lowest annual equivalent is not an all-in communications cost and API/webhook access remains labeled Coming Soon.',
    },
  ],
  fit: [
    'You need an SMB cloud phone system with virtual numbers, shared-number workflow, calling, messaging, recordings, and analytics.',
    'Your growing team needs IVR, business hours, power dialing, monitoring, transfers, bulk SMS, and AI call reporting on Premium.',
    'You can forecast included usage, wallet overage, number inventory, destinations, SMS/MMS, and international activity.',
  ],
  notFit: [
    'You expect the $12 or $28 annual equivalent to cover every number, call, message, AI minute, and international destination.',
    'You need a CRM, help desk, or enterprise contact-center replacement rather than a phone-centered communications platform.',
    'Your integration depends on production API or webhook access while the public plan table still labels it Coming Soon.',
  ],
  strengths: [
    'Published monthly and annual prices, user limits, US/Canada bundles, and wallet mechanics make major cost layers visible.',
    'Premium combines inbound routing, outbound dialing, supervision, transfer, bulk messaging, and AI-assisted call reporting.',
    'Virtual-number purchasing or porting is documented across more than 100 countries, subject to availability and requirements.',
  ],
  limitations: [
    'Calls and messages beyond included US/Canada bundles draw from the wallet, while numbers and rates can be billed separately.',
    'Standard is limited to ten users and omits several advanced routing, monitoring, outbound, and AI reporting capabilities.',
    'The AI Voice Agent pricing table is not sufficiently clear to publish a dependable overage rate.',
    'API and webhook access is not presented as currently available in the Enterprise plan table.',
  ],
  capabilities: [
    {
      title: 'Cloud phone and numbers',
      description:
        'Virtual numbers, number porting, calling, voicemail, recordings, forwarding, web and device access, and shared-number workflows.',
    },
    {
      title: 'Messaging and collaboration',
      description:
        'SMS/MMS where supported plus internal team calls, messages, file sharing, contacts, and unified communication history.',
    },
    {
      title: 'Call management',
      description:
        'Premium adds IVR, business hours, transfer, power dialer, dispositions, and live listen, whisper, barge-in, and end-call controls.',
    },
    {
      title: 'AI-assisted reporting',
      description:
        'Premium documents transcription, sentiment analysis, AI call reports, summaries, conclusions, and AI-powered analytics.',
    },
  ],
  pricing: [
    {
      plan: 'Standard',
      basis: '$15/user/month monthly',
      allowance: '$12/user/month annually; $144/year',
      note: 'Up to 10 users; one local US/Canada number; 200 outbound and 100 inbound minutes; 100 outbound and 100 inbound SMS.',
    },
    {
      plan: 'Premium',
      basis: '$35/user/month monthly',
      allowance: '$28/user/month annually; $336/year',
      note: 'Unlimited users; 1,000 outbound and 500 inbound minutes; 500 outbound and 500 inbound SMS; advanced call management and AI reporting.',
    },
    {
      plan: 'Enterprise',
      basis: 'Custom pricing',
      allowance: 'Custom usage and support',
      note: 'Premium scope plus dedicated account and developer support; API/webhook access remains labeled Coming Soon.',
    },
  ],
  sections: [
    {
      id: 'overview',
      code: 'O1',
      title: 'What Calilio is',
      description: 'A phone-centered operating model for SMB communications.',
      paragraphs: [
        'Provider fact: Calilio documents a cloud business phone system with virtual numbers, calling, SMS/MMS, shared numbers, forwarding, recordings, voicemail, routing, monitoring, analytics, internal communication, and AI-assisted call reporting.',
        'Racklio analysis: consider Calilio when telephony is the core purchase. Do not treat it as a CRM, help desk, generic AI platform, or universally unlimited contact center.',
      ],
    },
    {
      id: 'numbers',
      code: 'N1',
      title: 'Virtual numbers and shared-number workflow',
      description:
        'Availability and number cost remain separate buying checks.',
      paragraphs: [
        'Provider fact: Standard includes one local US or Canada number and documents buying or porting virtual numbers in more than 100 countries. Phone number sharing lets multiple users work through a number.',
        'Racklio analysis: verify country availability, number type, identity documents, porting eligibility, recurring price, SMS support, emergency calling, and ownership before rollout.',
      ],
    },
    {
      id: 'calling-messaging',
      code: 'C1',
      title: 'Calling, SMS/MMS, and included bundles',
      description: 'Included usage applies to defined US/Canada activity.',
      paragraphs: [
        'Provider fact: Standard lists 200 outgoing and 100 incoming minutes plus 100 outbound and 100 inbound SMS. Premium lists 1,000 outgoing and 500 incoming minutes plus 500 outbound and 500 inbound SMS. The pricing FAQ scopes these bundles to US/Canada numbers.',
        'Racklio analysis: model direction, destination, minutes, message segments, MMS, peaks, registration, and international activity rather than combining all communications under one “included” label.',
      ],
    },
    {
      id: 'routing-monitoring',
      code: 'R1',
      title: 'Routing, dialer, and monitoring',
      description: 'Premium is the operational step-up.',
      paragraphs: [
        'Provider fact: Premium adds IVR, business hours, power dialer, call disposition, call transfer, bulk SMS, saved replies, and live listen, whisper, barge-in, and end-call controls.',
        'Racklio analysis: validate queues, ring strategy, hours, overflow, dialer compliance, dispositions, supervisor permissions, recording consent, and failure handling against the intended workflow.',
      ],
    },
    {
      id: 'ai',
      code: 'A1',
      title: 'AI call reporting and AI Voice Agent',
      description:
        'Reporting capabilities and voice-agent usage require separate treatment.',
      paragraphs: [
        'Provider fact: Premium documents transcription, sentiment analysis, AI call reports, summaries, call-conclusion analysis, and AI-powered call analytics. These are provider-documented capabilities, not Racklio-tested outcomes.',
        'Provider fact: the plan table presents an AI Voice Agent allowance, but its higher-volume wording is inconsistent. Racklio therefore describes the included allowance conservatively and omits an overage rate until Calilio publishes an unambiguous figure.',
      ],
    },
    {
      id: 'wallet',
      code: 'W1',
      title: 'Wallet and true cost',
      description: 'The subscription is not the complete communications bill.',
      paragraphs: [
        'Provider fact: the subscription includes a complimentary $1 wallet credit. After included call and SMS bundles are exhausted, applicable charges are deducted from the wallet; after the credit is depleted, funds must be loaded for continued applicable usage. Numbers and call/SMS usage can be billed separately.',
        'Racklio analysis: forecast subscription, users, numbers, included bundles, overage, destinations, SMS/MMS, storage, recording, AI usage, registration, taxes, and add-ons together.',
      ],
    },
    {
      id: 'integrations',
      code: 'I1',
      title: 'Integrations and API status',
      description: 'Do not plan around a roadmap label.',
      paragraphs: [
        'Provider fact: Calilio publishes a Pipedrive integration and automation connections including Pabbly Connect. The current Enterprise plan table explicitly labels API and Webhook Access “Coming Soon.”',
        'Racklio analysis: verify every required integration, data object, synchronization direction, trigger, action, permission, retry, and production availability before purchase.',
      ],
    },
    {
      id: 'recommendation',
      code: 'D1',
      title: 'Conditional recommendation',
      description: 'Fit depends on operating depth and total usage.',
      paragraphs: [
        'Consider Standard for up to ten users needing core phone, shared-number, recording, messaging, and basic analytics capabilities with modest US/Canada usage. Consider Premium when routing, dialer, monitoring, transfers, bulk SMS, and AI call analysis are required.',
        'Consider alternatives when another provider’s number geography, usage economics, collaboration model, integration depth, support, or call-center controls better match the business.',
      ],
    },
  ],
  scenarios: [
    {
      scenario: 'Small team needs core calling and shared numbers',
      fit: 'Evaluate Standard',
      why: 'It supports up to ten users with core telephony, messaging, recordings, and basic analytics.',
    },
    {
      scenario: 'Growing team needs IVR, dialer, monitoring, and AI reports',
      fit: 'Evaluate Premium',
      why: 'Those capabilities are documented Premium additions.',
    },
    {
      scenario: 'Usage will exceed the US/Canada bundle',
      fit: 'Model wallet-funded overage',
      why: 'Applicable excess usage draws from the wallet after included allowances.',
    },
    {
      scenario: 'Workflow requires production API/webhooks',
      fit: 'Pause and verify availability',
      why: 'The public Enterprise table still labels API and webhook access Coming Soon.',
    },
  ],
  alternatives: [
    {
      title: 'CallHippo',
      description:
        'Consider another SMB cloud-phone plan, routing, analytics, and usage structure.',
      href: '/reviews/callhippo',
    },
    {
      title: 'KrispCall',
      description:
        'Consider when virtual-number coverage and international communications economics lead the decision.',
      href: '/reviews/krispcall',
    },
    {
      title: 'Quo',
      description:
        'Consider when collaborative shared-phone history and Sona are more central.',
      href: '/reviews/quo',
    },
    {
      title: 'Aircall',
      description:
        'Consider when more structured integrations, analytics, and team call operations justify its minimums and quote.',
      href: '/reviews/aircall',
    },
  ],
  relatedComparisons: [
    {
      title: 'Calilio vs CallHippo',
      href: '/comparisons/calilio-vs-callhippo',
    },
  ],
  faqs: [
    {
      question: 'Is $12 per user Calilio’s complete monthly cost?',
      answer:
        'No. It is the Standard monthly equivalent when billed annually. Usage beyond included bundles, numbers, international activity, wallet funding, taxes, and optional scope can add cost.',
    },
    {
      question: 'How many users does Standard support?',
      answer:
        'The current pricing page lists a ten-user limit. Premium lists unlimited users.',
    },
    {
      question: 'Are API and webhooks currently available?',
      answer:
        'The current Enterprise pricing table labels API and Webhook Access as Coming Soon, so Racklio does not present them as production-ready.',
    },
    {
      question: 'Has Racklio tested Calilio hands-on?',
      answer:
        'No. This review uses official provider-controlled sources and does not claim independent calling, AI, reliability, or support testing.',
    },
  ],
  sources: calilioSources,
};

export const calilioPricingData: CommercialPageData = {
  path: '/guides/calilio-pricing',
  breadcrumbParent: { title: 'Guides', href: '/guides' },
  code: 'CP',
  eyebrow: 'Pricing decision guide',
  headline: 'Calilio Pricing 2026: Plans, Bundles & Wallet Cost',
  dek: 'Calilio’s total cost combines per-user subscription, included US/Canada call and SMS bundles, wallet-funded overage, separately billed numbers, international rates, and optional or custom scope.',
  metaTitle: 'Calilio Pricing 2026: Plans, Wallet & Usage | Racklio',
  metaDescription:
    'Understand Calilio Standard, Premium and Enterprise pricing, included minutes and SMS, wallet overage, number charges and international costs.',
  verificationDate,
  schemaDate,
  provider: 'Calilio',
  providerKey: 'calilio',
  officialUrl,
  categoryLinks: [
    {
      title: 'Business Phone & Voice AI',
      href: '/categories/business-phone-voice-ai',
    },
  ],
  summary: [
    {
      label: 'Standard',
      text: '$15 monthly or $12/user/month billed annually at $144/year; up to ten users.',
    },
    {
      label: 'Premium',
      text: '$35 monthly or $28/user/month billed annually at $336/year; unlimited users.',
    },
    {
      label: 'Usage rule',
      text: 'After the included US/Canada bundle, applicable charges draw from the wallet; $1 complimentary credit is included.',
    },
    {
      label: 'True-cost rule',
      text: 'Add users, numbers, overage, destinations, SMS/MMS, international activity, AI usage, registration, taxes, and custom scope.',
    },
  ],
  table: {
    caption: 'Calilio plan pricing verified August 24, 2026',
    columns: ['Plan', 'Monthly', 'Annual billing', 'Included US/Canada bundle'],
    rows: [
      [
        'Standard',
        '$15/user/month',
        '$12/user/month; $144/year',
        '200 outbound + 100 inbound minutes; 100 outbound + 100 inbound SMS',
      ],
      [
        'Premium',
        '$35/user/month',
        '$28/user/month; $336/year',
        '1,000 outbound + 500 inbound minutes; 500 outbound + 500 inbound SMS',
      ],
      ['Enterprise', 'Custom', 'Custom', 'Custom/additional usage'],
    ],
  },
  sections: [
    {
      id: 'billing',
      code: 'B1',
      title: 'Monthly and annual billing',
      description:
        'Annual equivalents reflect a 20% discount and yearly billing.',
      paragraphs: [
        'Provider fact: Standard is $15 monthly or $12 per user/month billed annually at $144. Premium is $35 monthly or $28 billed annually at $336. Enterprise is custom.',
        'Racklio analysis: compare like billing terms and model seat changes, renewal, taxes, and cancellation—not just monthly equivalents.',
      ],
    },
    {
      id: 'plans',
      code: 'P1',
      title: 'Standard, Premium, and Enterprise',
      description: 'Operational needs determine the tier.',
      paragraphs: [
        'Standard supports up to ten users and core phone, sharing, recording, forwarding, and basic analytics. Premium adds unlimited users, IVR, hours, dialer, monitoring, transfer, bulk SMS, AI reporting, and 24/7 support.',
        'Enterprise adds custom usage and support arrangements; API/webhook access remains labeled Coming Soon.',
      ],
    },
    {
      id: 'bundles',
      code: 'U1',
      title: 'Included US/Canada bundles',
      description:
        'Direction-specific allowances should not be combined into unlimited usage.',
      paragraphs: [
        'Standard includes 200 outgoing and 100 incoming minutes plus 100 outbound and 100 inbound SMS. Premium includes 1,000 outgoing and 500 incoming minutes plus 500 outbound and 500 inbound SMS.',
        'Racklio analysis: forecast each direction separately and verify MMS, segments, destinations, registration, and fair-use conditions.',
      ],
    },
    {
      id: 'wallet',
      code: 'W1',
      title: 'Wallet-funded overage',
      description: 'Included usage transitions to pay-as-you-go economics.',
      paragraphs: [
        'Provider fact: each subscription includes $1 complimentary wallet credit. After included bundles are exhausted, applicable charges draw from the wallet; users must fund it after the credit is depleted.',
        'Racklio analysis: forecast peaks, refill process, balance monitoring, failed-call behavior, owner permissions, and rate changes.',
      ],
    },
    {
      id: 'numbers',
      code: 'N1',
      title: 'Numbers and international costs',
      description: 'Number and destination costs are separate from seats.',
      paragraphs: [
        'Provider fact: one local US/Canada number is included under current plans, while additional number prices and call/SMS rates vary by country and destination.',
        'Racklio analysis: use the live rate table and verify number type, documents, porting, recurring price, inbound/outbound rates, mobile destinations, and taxes.',
      ],
    },
    {
      id: 'ai',
      code: 'A1',
      title: 'AI usage and ambiguity',
      description: 'Do not calculate with an unclear overage figure.',
      paragraphs: [
        'Provider fact: the public table shows an AI Voice Agent allowance, clearly listing 10 minutes per user/month for Standard and appearing to list a larger Premium allowance. The accompanying overage wording is inconsistent.',
        'Racklio omits a numeric AI Voice Agent overage rate until official documentation becomes unambiguous. Confirm current allowance and usage pricing directly.',
      ],
    },
  ],
  scenarios: [
    {
      scenario: 'Up to ten users need core telephony',
      guidance: 'Evaluate Standard',
      why: 'It covers core calling, messaging, sharing, recordings, and basic analytics.',
    },
    {
      scenario: 'Team needs IVR, monitoring, dialer, transfer, or AI reports',
      guidance: 'Evaluate Premium',
      why: 'These are Premium additions.',
    },
    {
      scenario: 'Usage exceeds included bundles',
      guidance: 'Build a wallet forecast',
      why: 'Applicable overage draws from wallet funds.',
    },
    {
      scenario: 'Large deployment needs tailored scope',
      guidance: 'Request Enterprise terms',
      why: 'Enterprise pricing and usage are custom.',
    },
  ],
  faqs: [
    {
      question: 'Are annual prices month-to-month rates?',
      answer:
        'No. $12 and $28 are monthly equivalents billed annually at $144 and $336.',
    },
    {
      question: 'Does the subscription include all calls and SMS?',
      answer:
        'No. It includes defined US/Canada bundles; applicable excess and other destinations can draw from the wallet.',
    },
    {
      question: 'Are phone numbers always free?',
      answer:
        'One local US/Canada number is currently included. Other number types and countries can have separate prices.',
    },
    {
      question: 'What is the AI Voice Agent overage rate?',
      answer:
        'Racklio omits it because the current public pricing table is internally ambiguous. Confirm it directly with Calilio.',
    },
  ],
  sources: calilioSources,
  related: [
    { title: 'Calilio review', href: '/reviews/calilio' },
    {
      title: 'Calilio alternatives',
      href: '/alternatives/calilio-alternatives',
    },
    {
      title: 'Calilio vs CallHippo',
      href: '/comparisons/calilio-vs-callhippo',
    },
  ],
};

export const calilioAlternativesData: CommercialPageData = {
  path: '/alternatives/calilio-alternatives',
  breadcrumbParent: { title: 'Alternatives', href: '/alternatives' },
  code: 'CA',
  eyebrow: 'Conditional alternatives guide',
  headline: 'Calilio Alternatives: Compare SMB Cloud Phone Models',
  dek: 'Compare Calilio alternatives through number geography, calling and messaging economics, routing, supervision, collaboration, AI, integrations, and support—not rankings.',
  metaTitle: 'Calilio Alternatives: CallHippo, KrispCall, Quo & Aircall',
  metaDescription:
    'Compare Calilio alternatives conditionally across virtual numbers, calling, SMS, routing, AI, integrations, usage pricing and business fit.',
  verificationDate,
  schemaDate,
  provider: 'Calilio',
  providerKey: 'calilio',
  officialUrl,
  categoryLinks: [
    {
      title: 'Business Phone & Voice AI',
      href: '/categories/business-phone-voice-ai',
    },
  ],
  summary: [
    {
      label: 'Consider CallHippo when',
      text: 'Another SMB cloud-phone tier, routing, and usage model fits the workload better.',
    },
    {
      label: 'Consider KrispCall when',
      text: 'Virtual-number geography and separately modeled international communications lead the decision.',
    },
    {
      label: 'Consider Quo when',
      text: 'Collaborative shared-phone history and Sona are more important than Calilio’s bundle model.',
    },
    {
      label: 'Consider Aircall when',
      text: 'A more structured integration, analytics, and call-operations model justifies its minimums and quote.',
    },
  ],
  table: {
    caption: 'Conditional Calilio alternatives',
    columns: ['Option', 'Primary fit', 'Why consider', 'Main trade-off'],
    rows: [
      [
        'Calilio',
        'SMB phone plus published bundles',
        'Low entry subscription and Premium call controls',
        'Wallet, numbers, and usage add cost',
      ],
      [
        'CallHippo',
        'SMB cloud phone',
        'Alternative plans and supervisor workflow',
        'Configured usage differs',
      ],
      [
        'KrispCall',
        'Virtual-number-centered phone',
        'Country and usage model',
        'Numbers and communications require forecasting',
      ],
      [
        'Quo',
        'Collaborative SMB phone',
        'Shared history and Sona',
        'Distinct AI and international economics',
      ],
      [
        'Aircall',
        'Structured call teams',
        'Integrations, analytics, routing',
        'Minimums and quote complexity',
      ],
    ],
  },
  sections: [
    {
      id: 'decision',
      code: 'D1',
      title: 'Start with the operating model',
      description: 'Compare the same workload, not entry prices.',
      paragraphs: [
        'Racklio analysis: normalize users, countries, numbers, minutes, messages, routing, recordings, monitoring, AI, integrations, support, implementation, and contract term.',
        'Keep Calilio when its published bundles and Premium operating controls fit. Choose an alternative only when a distinct model fits better.',
      ],
    },
    {
      id: 'callhippo',
      code: 'C1',
      title: 'CallHippo for another SMB cloud-phone model',
      description: 'The closest direct buyer overlap.',
      paragraphs: [
        'Provider fact: Racklio’s CallHippo review documents virtual numbers, calling, SMS, routing, analytics, plans, and usage considerations.',
        'Racklio analysis: compare plan entitlements, included usage, destinations, supervision, integrations, and total cost.',
      ],
      contextualLink: {
        title: 'Compare Calilio vs CallHippo',
        href: '/comparisons/calilio-vs-callhippo',
      },
    },
    {
      id: 'krispcall',
      code: 'K1',
      title: 'KrispCall for virtual-number economics',
      description: 'Country coverage can lead the decision.',
      paragraphs: [
        'Consider KrispCall when number availability, KYC, destinations, and separately priced communication align more closely.',
        'Compare the same users, numbers, minutes, messages, and add-ons.',
      ],
      contextualLink: {
        title: 'Read KrispCall review',
        href: '/reviews/krispcall',
      },
    },
    {
      id: 'quo',
      code: 'Q1',
      title: 'Quo for collaborative phone context',
      description: 'A different shared-workspace and AI model.',
      paragraphs: [
        'Consider Quo when shared conversation history, collaborative numbers, modern routing, and Sona workflows matter more.',
        'Model its users, numbers, Sona, and international usage separately.',
      ],
      contextualLink: { title: 'Read Quo review', href: '/reviews/quo' },
    },
    {
      id: 'aircall',
      code: 'A1',
      title: 'Aircall for structured call operations',
      description: 'A more procurement-heavy team workflow.',
      paragraphs: [
        'Consider Aircall when integrations, analytics, routing, and structured sales or support calling justify its license minimums and quote.',
        'Do not assume broader scope is useful for every SMB.',
      ],
      contextualLink: {
        title: 'Read Aircall review',
        href: '/reviews/aircall',
      },
    },
  ],
  scenarios: [
    {
      scenario: 'SMB wants published bundles and Premium supervision',
      guidance: 'Keep Calilio',
      why: 'Its current plans directly expose those features and allowances.',
    },
    {
      scenario: 'Buyer wants another SMB phone plan structure',
      guidance: 'Consider CallHippo',
      why: 'It has the closest broad operating overlap.',
    },
    {
      scenario: 'International number model is primary',
      guidance: 'Consider KrispCall',
      why: 'Its virtual-number-centered model warrants comparison.',
    },
    {
      scenario: 'Integrated call-team operation is more complex',
      guidance: 'Consider Aircall',
      why: 'Its current positioning emphasizes structured connected workflows.',
    },
  ],
  faqs: [
    {
      question: 'Is CallHippo universally better than Calilio?',
      answer:
        'No. Compare countries, numbers, bundles, wallet usage, routing, supervision, AI, integrations, and support.',
    },
    {
      question: 'Are these products ranked?',
      answer: 'No. They are conditional operating-model alternatives.',
    },
    {
      question: 'Should subscription price decide?',
      answer: 'No. Model the complete configured workload and billing term.',
    },
  ],
  sources: [
    ...calilioSources,
    { title: 'CallHippo pricing', href: 'https://callhippo.com/pricing/' },
    { title: 'KrispCall pricing', href: 'https://krispcall.com/pricing/' },
    { title: 'Quo pricing', href: 'https://www.quo.com/pricing' },
    { title: 'Aircall pricing', href: 'https://aircall.io/pricing/' },
  ],
  related: [
    { title: 'Calilio review', href: '/reviews/calilio' },
    { title: 'Calilio pricing', href: '/guides/calilio-pricing' },
    {
      title: 'Calilio vs CallHippo',
      href: '/comparisons/calilio-vs-callhippo',
    },
  ],
};
