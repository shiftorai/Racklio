import type { CommercialPageData } from '@/components/commercial';
import type { SoftwareReviewData } from '@/components/reviews/software-review-template';

const officialUrl = 'https://ai-receptionist.com/';
const verificationDate = 'August 31, 2026';
const schemaDate = '2026-08-31';

const sources = [
  { title: 'AI-Receptionist.com', href: officialUrl },
  { title: 'AI-Receptionist.com pricing', href: `${officialUrl}pricing/` },
  { title: 'AI-Receptionist.com features', href: `${officialUrl}features/` },
  { title: 'AI-Receptionist.com help center', href: `${officialUrl}help/` },
  {
    title: 'AI-Receptionist.com terms of service',
    href: `${officialUrl}legal/terms-of-service/`,
  },
  {
    title: 'AI-Receptionist.com privacy policy',
    href: `${officialUrl}legal/privacy-policy/`,
  },
  {
    title: 'AI-Receptionist.com affiliate terms',
    href: `${officialUrl}legal/affiliate-terms/`,
  },
  {
    title: 'AI-Receptionist.com affiliate program',
    href: `${officialUrl}affiliate-program/`,
  },
];

const territory = [
  {
    title: 'Business Phone & Voice AI',
    href: '/categories/business-phone-voice-ai',
  },
];

export const aiReceptionistReviewData: SoftwareReviewData = {
  slug: 'ai-receptionist',
  name: 'AI-Receptionist.com',
  category: 'AI receptionist and voice automation software',
  categoryLinks: territory,
  headline: 'AI Receptionist Review 2026: Plans, Minutes & Buyer Fit',
  dek: 'AI-Receptionist.com is a focused automated phone-answering service for small businesses in the United States and Canada. It combines AI call handling, knowledge-based answers, transfers, transcripts, messaging, and plan-dependent appointment and team workflows; it is not positioned as a general unified-communications suite.',
  metaTitle: 'AI Receptionist Review 2026: Pricing & Buyer Fit | Racklio',
  metaDescription:
    'Evidence-first AI-Receptionist.com review covering plans, minutes, call handling, transfers, calendar workflows, limitations, and small-business fit.',
  officialUrl,
  providerKey: 'aiReceptionist',
  verificationDate,
  schemaDate,
  idealUser:
    'Small businesses in the US or Canada that need automated call answering, routine caller-question handling, appointment workflows, transcripts, and defined transfers without buying a broad team phone platform.',
  pricingModel:
    'Monthly or annual subscription with plan-specific AI voice minutes, transfer and messaging limits, plus booster or market-rate usage charges where applicable.',
  summary: [
    {
      label: 'Best fit',
      text: 'A small business wants a focused AI receptionist with a low public entry price and can operate within the published US/Canada footprint.',
    },
    {
      label: 'Consider if',
      text: 'Call answering, knowledge-based responses, notifications, transfers, transcripts, and plan-supported appointment handling form the primary workflow.',
    },
    {
      label: 'Main limitation',
      text: 'Included AI voice minutes range from 60 to 400 on public plans, while broader phone-system and unsupported specialist workflows require another path.',
    },
    {
      label: 'Pricing boundary',
      text: 'Model subscription, included minutes, transfers, SMS/MMS, outbound activity, booster use, and any custom scope together.',
    },
  ],
  fit: [
    'You serve callers in the United States or Canada and need a focused automated receptionist rather than a broad UCaaS platform.',
    'Your workflow needs call answering, routine knowledge responses, notifications, transcripts, and a defined human-transfer path.',
    'You can forecast monthly AI voice minutes and verify plan-specific calendar, team, storage, and SIP requirements before purchase.',
  ],
  notFit: [
    'You need a broad business-phone platform with generalized team telephony, deep contact-center controls, or a larger verified integration catalog.',
    'You require service outside the provider’s currently published United States and Canada availability.',
    'Your expected volume makes the included-minute limits and $0.25 AI voice-minute booster economics unsuitable.',
  ],
  strengths: [
    'The provider publishes monthly and annual prices, included AI voice minutes, transfer and messaging limits, and booster rates.',
    'The documented workflow covers calls, knowledge inputs, notifications, transcripts, transfers, voicemail, SMS, and plan-dependent calendar functions.',
    'Business documents team accounts, SIP/VoIP integration, linked accounts, multi-number transfers, analytics, and longer storage.',
  ],
  limitations: [
    'The provider currently limits phone-number and service availability to the United States and Canada.',
    'Essential and Starter both include 60 AI voice minutes despite their feature differences; higher usage changes the economics.',
    'Roadmap items on the features page are not current capabilities and should not be treated as included purchasing scope.',
  ],
  capabilities: [
    {
      title: 'Automated call handling',
      description:
        'The provider documents round-the-clock answering, spam filtering, voicemail, notifications, call transfers, transcripts, and configurable AI instructions.',
    },
    {
      title: 'Knowledge and appointment workflows',
      description:
        'Essential supports FAQ and text knowledge; higher public tiers add file and URL inputs plus Google Calendar integration.',
    },
    {
      title: 'Messaging and post-call work',
      description:
        'The provider documents SMS communication and plan-supported post-call actions. Published monthly messaging and transfer limits should be checked by tier.',
    },
    {
      title: 'Business-tier operations',
      description:
        'Business lists five team members, linked accounts, SIP/VoIP integration, multi-number transfers, advanced analytics, and two-year storage.',
    },
  ],
  pricing: [
    {
      plan: 'Essential',
      basis: '$14/month or $140/year',
      allowance: '60 AI voice minutes/month',
      note: 'Basic voice/reasoning; FAQ and text knowledge; single-number transfer; three-month storage.',
    },
    {
      plan: 'Starter',
      basis: '$39/month or $399/year',
      allowance: '60 AI voice minutes/month',
      note: 'Advanced voice/reasoning, Google Calendar, expanded knowledge inputs, two transfer contacts, and six-month storage.',
    },
    {
      plan: 'Solopreneur',
      basis: '$99/month or $999/year',
      allowance: '200 AI voice minutes/month',
      note: 'Five transfer contacts with the documented advanced workflow and six-month storage.',
    },
    {
      plan: 'Business',
      basis: '$199/month or $1,999/year',
      allowance: '400 AI voice minutes/month',
      note: 'Five team members, SIP/VoIP, linked accounts, multi-number transfers, analytics, and two-year storage.',
    },
  ],
  sections: [
    {
      id: 'overview',
      code: 'O1',
      title: 'What AI-Receptionist.com is',
      description: 'A focused automated front door for small-business calls.',
      paragraphs: [
        'Provider fact: AI-Receptionist.com presents a 24/7 automated phone-answering service with configurable AI behavior, knowledge inputs, call transfers, notifications, transcripts, voicemail, SMS, and plan-dependent appointment workflows.',
        'Racklio analysis: evaluate it as a receptionist and voice-agent layer. Do not assume it replaces a broad PBX, contact center, help desk, CRM, or unified-communications platform.',
      ],
    },
    {
      id: 'workflow',
      code: 'W1',
      title: 'Call, knowledge, and handoff workflow',
      description: 'The required caller journey should determine the plan.',
      paragraphs: [
        'Provider fact: Essential supports FAQ and text knowledge, while Starter and above list FAQ, file, URL, and text knowledge plus Google Calendar. The pricing matrix also documents transfers, warm transfer, transcripts, notifications, multilingual support, Boss Mode, and plan-dependent post-call actions.',
        'Racklio analysis: map greeting, questions, source material, scheduling rules, transfer contacts, business hours, notifications, failed handoffs, and human ownership before selecting a tier.',
      ],
    },
    {
      id: 'plans',
      code: 'P1',
      title: 'Plan differentiation',
      description: 'Feature scope changes before included minutes always do.',
      paragraphs: [
        'Provider fact: Essential and Starter both include 60 AI voice minutes, but Starter adds advanced voice and reasoning, Google Calendar, broader knowledge inputs, priority support, multiple notifications, and two transfer contacts. Solopreneur raises included minutes to 200 and transfer contacts to five. Business raises minutes to 400 and adds team, SIP/VoIP, linked-account, multi-number, analytics, and storage scope.',
        'Racklio analysis: the cheapest suitable tier depends on workflow capabilities as well as volume. A 60-minute allowance does not make Essential and Starter operationally equivalent.',
      ],
    },
    {
      id: 'pricing',
      code: 'C1',
      title: 'Pricing and usage economics',
      description: 'Subscription and usage charges belong in one forecast.',
      paragraphs: [
        'Provider fact: current monthly prices are $14, $39, $99, and $199; annual prices are $140, $399, $999, and $1,999. The pricing page lists AI and outbound voice booster minutes at $0.25, inbound MMS images at $0.04, and destination-dependent market rates for transfers and SMS.',
        'Racklio analysis: forecast answered minutes, transfers, outbound actions, SMS segments, MMS, seasonal spikes, and a safety margin. Verify dashboard rates and custom scope before purchase.',
      ],
    },
    {
      id: 'availability',
      code: 'G1',
      title: 'Availability and operational boundaries',
      description: 'Geography and roadmap status can rule out the purchase.',
      paragraphs: [
        'Provider fact: the current pricing FAQ states that phone numbers and service are available in the United States and Canada. The features page separately marks several items as Coming Soon.',
        'Racklio analysis: do not purchase for another country or a roadmap capability without written confirmation that the required production scope is available now.',
      ],
    },
    {
      id: 'recommendation',
      code: 'D1',
      title: 'Conditional recommendation',
      description: 'Fit depends on geography, workflow, and modeled usage.',
      paragraphs: [
        'Consider AI-Receptionist.com when a US- or Canada-based small business needs a focused call-answering and caller-handling workflow, the selected plan contains the required knowledge, calendar, transfer, team, or SIP scope, and expected usage fits the economics.',
        'Look to RingOperator for another narrow voice-agent model, or to Calilio, Quo, KrispCall, CallHippo, or Aircall when the primary need is broader business telephony rather than a receptionist layer.',
      ],
    },
  ],
  scenarios: [
    {
      scenario: 'Low-volume business needs basic answering and transfer',
      fit: 'Consider Essential',
      why: 'It lists 60 minutes with basic voice/reasoning, notifications, voicemail, transcripts, and FAQ/text knowledge.',
    },
    {
      scenario: 'Appointment workflow needs broader knowledge inputs',
      fit: 'Consider Starter or above',
      why: 'Google Calendar and file/URL knowledge are documented from Starter.',
    },
    {
      scenario: 'Team needs SIP and linked accounts',
      fit: 'Verify Business',
      why: 'Those capabilities are documented on Business, alongside five members and 400 minutes.',
    },
    {
      scenario: 'Business operates outside the US or Canada',
      fit: 'Look elsewhere or wait for verified availability',
      why: 'The provider currently publishes service availability only for those two countries.',
    },
  ],
  alternatives: [
    {
      title: 'RingOperator',
      description:
        'Consider another focused AI receptionist with published 100, 500, and 2,000-minute tiers plus booking and waitlist workflows.',
      href: '/reviews/ringoperator',
    },
    {
      title: 'Calilio',
      description:
        'Consider a user-plan cloud-phone model when numbers, routing, monitoring, and bundled communications usage matter.',
      href: '/reviews/calilio',
    },
    {
      title: 'Quo',
      description:
        'Consider shared business numbers, collaborative call and text history, and team communication workflows.',
      href: '/reviews/quo',
    },
    {
      title: 'CallHippo',
      description:
        'Consider broader virtual-number, routing, calling, messaging, and team-phone requirements.',
      href: '/reviews/callhippo',
    },
  ],
  relatedComparisons: [
    {
      title: 'AI-Receptionist.com vs RingOperator',
      href: '/comparisons/ai-receptionist-vs-ringoperator',
    },
  ],
  faqs: [
    {
      question: 'Is AI-Receptionist.com a complete business phone system?',
      answer:
        'Its reviewed positioning is a focused AI receptionist and automated answering service. Verify broader team-phone and contact-center requirements separately.',
    },
    {
      question: 'How many AI voice minutes are included?',
      answer:
        'Essential and Starter list 60 each, Solopreneur 200, and Business 400 per month.',
    },
    {
      question: 'Is there a free trial?',
      answer:
        'The current official pricing page offers a three-day free trial. Confirm current eligibility and conversion terms before signup.',
    },
    {
      question: 'Has Racklio tested its call quality?',
      answer:
        'No. This review relies on provider-controlled documentation and does not claim independent call-quality, latency, accuracy, reliability, security, compliance, or support testing.',
    },
  ],
  sources,
};

export const aiReceptionistPricingData: CommercialPageData = {
  path: '/guides/ai-receptionist-pricing',
  breadcrumbParent: { title: 'Guides', href: '/guides' },
  code: 'AP',
  eyebrow: 'Pricing decision guide',
  headline: 'AI Receptionist Pricing 2026: Plans, Minutes & Usage',
  dek: 'AI-Receptionist.com publishes four self-service plans plus custom arrangements. Choose by required workflow first, then model included AI voice minutes, transfers, messaging, outbound actions, booster use, and billing cycle.',
  metaTitle: 'AI Receptionist Pricing 2026: Plans & Minutes | Racklio',
  metaDescription:
    'Compare AI-Receptionist.com Essential, Starter, Solopreneur and Business pricing, annual billing, included minutes, booster rates, and buyer fit.',
  verificationDate,
  schemaDate,
  provider: 'AI-Receptionist.com',
  providerKey: 'aiReceptionist',
  officialUrl,
  categoryLinks: territory,
  summary: [
    {
      label: 'Entry plan',
      text: 'Essential is $14 monthly or $140 yearly with 60 AI voice minutes.',
    },
    {
      label: 'Feature step',
      text: 'Starter is $39 monthly or $399 yearly and still includes 60 minutes, but adds advanced AI, calendar, knowledge, notification, and transfer scope.',
    },
    {
      label: 'Volume steps',
      text: 'Solopreneur is $99 monthly or $999 yearly with 200 minutes; Business is $199 monthly or $1,999 yearly with 400.',
    },
    {
      label: 'Usage rule',
      text: 'AI and outbound voice booster minutes are $0.25; other transfer/SMS rates can be destination-dependent.',
    },
  ],
  table: {
    caption: 'AI-Receptionist.com pricing verified August 31, 2026',
    columns: ['Plan', 'Monthly', 'Annual', 'Included AI voice minutes'],
    rows: [
      ['Essential', '$14/month', '$140/year', '60/month'],
      ['Starter', '$39/month', '$399/year', '60/month'],
      ['Solopreneur', '$99/month', '$999/year', '200/month'],
      ['Business', '$199/month', '$1,999/year', '400/month'],
      ['Custom', 'Contact provider', 'Custom agreement', 'Custom'],
    ],
  },
  sections: [
    {
      id: 'plans',
      code: 'P1',
      title: 'Four public plans and custom scope',
      description:
        'The visible price and included minutes are only the first layer.',
      paragraphs: [
        'Provider fact: Essential, Starter, Solopreneur, and Business are available monthly or yearly, with published included AI voice minutes of 60, 60, 200, and 400. Custom arrangements are also offered.',
        'Racklio analysis: shortlist by required capabilities, then compare the chosen plan against a realistic usage forecast.',
      ],
    },
    {
      id: 'feature-steps',
      code: 'F1',
      title: 'Why Essential and Starter share 60 minutes',
      description:
        'Starter buys a different workflow, not more included AI voice time.',
      paragraphs: [
        'Provider fact: both plans list 60 AI voice minutes. Starter adds advanced voice/reasoning, Google Calendar, file and URL knowledge, priority support, multiple notifications, two transfer contacts, and longer storage.',
        'Racklio analysis: choose Starter only when those operating capabilities justify the higher fee; do not treat it as a volume upgrade.',
      ],
    },
    {
      id: 'annual',
      code: 'A1',
      title: 'Monthly versus annual billing',
      description:
        'Annual totals should be compared with twelve monthly payments.',
      paragraphs: [
        'Provider fact: annual prices are $140, $399, $999, and $1,999. The provider states that annual billing is discounted.',
        'Racklio calculation: twelve monthly payments would total $168, $468, $1,188, and $2,388 respectively. Compare those calculations with the live annual checkout and renewal terms rather than assuming a fixed percentage discount.',
      ],
    },
    {
      id: 'usage',
      code: 'U1',
      title: 'Booster and usage economics',
      description: 'Extra activity can change the configured cost.',
      paragraphs: [
        'Provider fact: AI Voice Minutes and Outbound Call Minutes are listed at $0.25/minute, Inbound MMS Image at $0.04/image, and transfers or SMS at destination-dependent market rates. Booster minutes do not expire according to the current page.',
        'Racklio analysis: model minutes, transfers, outbound actions, SMS segments, MMS, peaks, and unused carryover before comparing tiers.',
      ],
    },
    {
      id: 'trial',
      code: 'T1',
      title: 'Trial and purchase verification',
      description: 'A trial is a validation window, not performance evidence.',
      paragraphs: [
        'Provider fact: the pricing page currently advertises a three-day free trial with access to the selected plan’s features.',
        'Racklio analysis: use the trial to verify setup, call flow, knowledge behavior, transfer path, calendar rules, notifications, and dashboard controls. Racklio has not independently tested these outcomes.',
      ],
    },
  ],
  scenarios: [
    {
      scenario: 'Basic low-volume answering',
      guidance: 'Model Essential',
      why: 'It provides the lowest listed entry price and 60 AI voice minutes with the basic documented workflow.',
    },
    {
      scenario: 'Calendar and richer knowledge inputs required',
      guidance: 'Compare Starter',
      why: 'It adds those capabilities but not additional included AI voice minutes.',
    },
    {
      scenario: 'Roughly 200 included minutes needed',
      guidance: 'Compare Solopreneur',
      why: 'It raises the allowance and transfer-contact limit without the Business team/SIP scope.',
    },
    {
      scenario:
        'Team, SIP, multi-number transfer, or advanced analytics required',
      guidance: 'Verify Business or custom',
      why: 'Those are documented at the Business tier or through custom arrangements.',
    },
  ],
  faqs: [
    {
      question: 'Which plans include 60 AI voice minutes?',
      answer: 'Essential and Starter both list 60 minutes per month.',
    },
    {
      question: 'What happens beyond the included minutes?',
      answer:
        'The current pricing page lists AI voice booster minutes at $0.25 per minute; verify dashboard rates and usage handling before purchase.',
    },
    {
      question: 'Does AI-Receptionist.com offer annual billing?',
      answer:
        'Yes. The current page lists annual prices for all four public plans.',
    },
  ],
  sources,
  related: [
    { title: 'AI-Receptionist.com review', href: '/reviews/ai-receptionist' },
    {
      title: 'AI-Receptionist.com alternatives',
      href: '/alternatives/ai-receptionist-alternatives',
    },
    {
      title: 'AI-Receptionist.com vs RingOperator',
      href: '/comparisons/ai-receptionist-vs-ringoperator',
    },
  ],
};

export const aiReceptionistAlternativesData: CommercialPageData = {
  path: '/alternatives/ai-receptionist-alternatives',
  breadcrumbParent: { title: 'Alternatives', href: '/alternatives' },
  code: 'AA',
  eyebrow: 'Alternatives decision guide',
  headline: 'AI Receptionist Alternatives 2026: Choose by Call Workflow',
  dek: 'Choose an alternative based on the job: another focused voice agent may fit a receptionist workflow, while a cloud-phone platform may fit teams that actually need users, shared numbers, routing, and broader telephony.',
  metaTitle:
    'AI Receptionist Alternatives 2026: Call Workflow Options | Racklio',
  metaDescription:
    'Compare AI-Receptionist.com alternatives for focused receptionist automation, business calling, shared numbers, routing, usage, and team-phone needs.',
  verificationDate,
  schemaDate,
  provider: 'AI-Receptionist.com',
  providerKey: 'aiReceptionist',
  officialUrl,
  categoryLinks: territory,
  summary: [
    {
      label: 'Stay when',
      text: 'A US/Canada small business needs a focused receptionist workflow and the selected plan’s limits fit.',
    },
    {
      label: 'Choose RingOperator when',
      text: 'Another narrow AI voice-agent model, booking workflow, or its larger published minute tiers fit better.',
    },
    {
      label: 'Choose a phone platform when',
      text: 'Users, shared numbers, team calling, routing, messaging, integrations, or broad telephony lead the decision.',
    },
    {
      label: 'Decision rule',
      text: 'Compare operating models and configured cost; do not rank dissimilar products by entry price.',
    },
  ],
  table: {
    caption: 'Conditional AI-Receptionist.com alternative paths',
    columns: ['Alternative', 'Consider it when', 'Operating distinction'],
    rows: [
      [
        'RingOperator',
        'A second focused AI receptionist and booking model belongs on the shortlist.',
        'Published 100, 500, and 2,000-minute tiers with booking, waitlist, and follow-up scope.',
      ],
      [
        'Calilio',
        'User plans, numbers, routing, bundles, monitoring, and cloud-phone controls matter.',
        'Broader subscription-plus-usage phone platform.',
      ],
      [
        'Quo',
        'Shared business numbers, texting, and team conversation context lead.',
        'Collaborative business-phone workspace.',
      ],
      [
        'CallHippo',
        'Virtual numbers, calling, routing, messaging, and plan configuration lead.',
        'Broader cloud-phone operating model.',
      ],
      [
        'Aircall',
        'Structured team calling, integrations, analytics, and minimum-license rules fit.',
        'Team telephony platform with quote-based scope.',
      ],
    ],
  },
  sections: [
    {
      id: 'boundary',
      code: 'B1',
      title: 'Start with the product boundary',
      description:
        'Receptionist automation and team telephony solve different first problems.',
      paragraphs: [
        'AI-Receptionist.com focuses on automated call answering, knowledge, transfers, transcripts, messaging, and appointment workflows within a published US/Canada footprint.',
        'Racklio analysis: replace it when geography, volume, team telephony, number management, routing depth, integrations, or contact-center controls—not receptionist automation—define the purchase.',
      ],
    },
    {
      id: 'ringoperator',
      code: 'R1',
      title: 'RingOperator for another focused receptionist path',
      description: 'The closest alternative begins from similar buyer intent.',
      paragraphs: [
        'Provider fact: RingOperator documents an AI voice agent with Google Calendar, booking, waitlist, transfer, transcripts/recordings, 30+ languages, notifications, and published 100/500/2,000-minute tiers.',
        'Racklio analysis: compare entry price, included minutes, overage, booking workflow, geographic availability, transfer design, and the exact higher-tier capabilities rather than declaring a universal winner.',
      ],
      contextualLink: {
        title: 'Compare AI-Receptionist.com and RingOperator',
        href: '/comparisons/ai-receptionist-vs-ringoperator',
      },
    },
    {
      id: 'phone-platforms',
      code: 'P1',
      title: 'Calilio, Quo, CallHippo, and Aircall for broader telephony',
      description: 'These options fit a different operating job.',
      paragraphs: [
        'Consider these products when a team needs business-phone users, shared numbers, calling, routing, messaging, analytics, integrations, or broader administration.',
        'Racklio analysis: normalize users, numbers, countries, inbound and outbound usage, messages, routing, add-ons, contracts, and support scope before comparing configured costs.',
      ],
    },
    {
      id: 'recommendation',
      code: 'D1',
      title: 'Conditional recommendation',
      description: 'Keep the narrow tool when the narrow job is sufficient.',
      paragraphs: [
        'Keep AI-Receptionist.com on the shortlist when its call workflow, geography, plan capabilities, and minute model fit.',
        'Choose RingOperator for a directly overlapping voice-agent evaluation, or a broader phone platform when the purchase requirement extends beyond a receptionist layer.',
      ],
    },
  ],
  scenarios: [
    {
      scenario: 'Focused AI receptionist with appointment workflow',
      guidance: 'Compare AI-Receptionist.com and RingOperator',
      why: 'Both document narrow voice-agent and call-handling use cases.',
    },
    {
      scenario: 'Shared team calling and texting',
      guidance: 'Compare Quo or another phone platform',
      why: 'This is a collaborative phone-workspace requirement.',
    },
    {
      scenario: 'User plans, bundles, and phone controls',
      guidance: 'Compare Calilio',
      why: 'Its operating model is broader cloud telephony.',
    },
    {
      scenario: 'Structured team telephony and integrations',
      guidance: 'Compare CallHippo or Aircall',
      why: 'The buying question has moved beyond a narrow receptionist.',
    },
  ],
  faqs: [
    {
      question: 'Is RingOperator the closest alternative?',
      answer:
        'It has the strongest buyer-intent overlap among active Racklio products, but fit still depends on workflow, volume, geography, and plan terms.',
    },
    {
      question:
        'Is a business phone platform automatically a better alternative?',
      answer:
        'No. It may add irrelevant complexity when a focused receptionist workflow is sufficient.',
    },
  ],
  sources: [
    ...sources,
    { title: 'RingOperator', href: 'https://www.ringoperator.com/' },
    {
      title: 'Calilio pricing',
      href: 'https://www.calilio.com/calilio-pricing',
    },
    { title: 'Quo pricing', href: 'https://www.quo.com/pricing' },
    { title: 'CallHippo pricing', href: 'https://callhippo.com/pricing/' },
    { title: 'Aircall pricing', href: 'https://aircall.io/pricing/' },
  ],
  related: [
    { title: 'AI-Receptionist.com review', href: '/reviews/ai-receptionist' },
    {
      title: 'AI-Receptionist.com pricing',
      href: '/guides/ai-receptionist-pricing',
    },
    {
      title: 'AI-Receptionist.com vs RingOperator',
      href: '/comparisons/ai-receptionist-vs-ringoperator',
    },
  ],
};
