import type { CommercialPageData } from '@/components/commercial';

const verificationDate = 'August 21, 2026';
const campaignMonitorSources = [
  { title: 'Campaign Monitor', href: 'https://www.campaignmonitor.com/' },
  {
    title: 'Campaign Monitor pricing',
    href: 'https://www.campaignmonitor.com/pricing/',
  },
  {
    title: 'Campaign Monitor feature overview',
    href: 'https://www.campaignmonitor.com/features/overview',
  },
  {
    title: 'Campaign Monitor AI features',
    href: 'https://www.campaignmonitor.com/features/ai-features/',
  },
  {
    title: 'Marketing Monitor',
    href: 'https://www.campaignmonitor.com/features/marketing-monitor/',
  },
  {
    title: 'AI Email Booster',
    href: 'https://www.campaignmonitor.com/features/ai-email-booster/',
  },
  {
    title: 'Campaign Monitor integrations',
    href: 'https://www.campaignmonitor.com/integrations/',
  },
  {
    title: 'Campaign Monitor billing overview',
    href: 'https://help.campaignmonitor.com/articles/Knowledge/billing-overview',
  },
  {
    title: 'Campaign Monitor monthly billing',
    href: 'https://help.campaignmonitor.com/articles/Knowledge/monthly-billing',
  },
  {
    title: 'Campaign Monitor monthly plan comparison',
    href: 'https://help.campaignmonitor.com/articles/Knowledge/monthly-plan-feature-comparison',
  },
  {
    title: 'Campaign Monitor pay-per-campaign billing',
    href: 'https://help.campaignmonitor.com/articles/Knowledge/switch-to-pay-per-campaign',
  },
];

export const campaignMonitorPricingData: CommercialPageData = {
  path: '/guides/campaign-monitor-pricing',
  breadcrumbParent: { title: 'Guides', href: '/guides' },
  code: 'CM-P',
  eyebrow: 'Verified pricing guide',
  headline:
    'Campaign Monitor pricing: contact tiers, send allowances, and billing choices',
  dek: 'Campaign Monitor prices Lite, Essentials, and Premier subscriptions by contact count, while Enterprise is custom. A useful estimate must also account for send allowances, AI and optimization availability, annual terms, pay-per-campaign exclusions, and the billing system attached to the account.',
  metaTitle: 'Campaign Monitor Pricing 2026: Plans & Billing | Racklio',
  metaDescription:
    'Campaign Monitor pricing guide covering Lite, Essentials, Premier, Enterprise, contact-based pricing, send allowances, trial, annual discount, AI, and billing.',
  verificationDate,
  schemaDate: '2026-08-21',
  provider: 'Campaign Monitor',
  officialUrl: 'https://www.campaignmonitor.com/pricing/',
  categoryLinks: [
    {
      title: 'CRM & Customer Engagement',
      href: '/categories/crm-customer-engagement',
    },
  ],
  summary: [
    {
      label: 'Lite',
      text: 'Contact-count-dependent subscription with a monthly send allowance equal to five times the subscriber count.',
    },
    {
      label: 'Essentials',
      text: 'Contact-count-dependent subscription with unlimited email sends under current plan terms.',
    },
    {
      label: 'Premier',
      text: 'Contact-count-dependent subscription with unlimited sends and advanced capabilities.',
    },
    {
      label: 'Enterprise',
      text: 'Custom pricing and contract-defined scope.',
    },
    {
      label: 'Pricing rule',
      text: 'Use the official contact selector; a single universal monthly price would misrepresent the current model.',
    },
  ],
  table: {
    caption: 'Campaign Monitor plan and billing boundaries',
    columns: [
      'Option',
      'Price basis',
      'Published allowance',
      'Decision relevance',
    ],
    rows: [
      [
        'Lite',
        'Varies by contact count',
        '5x subscriber emails per month',
        'Model list growth and monthly send frequency before treating Lite as sufficient.',
      ],
      [
        'Essentials',
        'Varies by contact count',
        'Unlimited sends under current terms',
        'Verify included AI, automation, support, preview, and advanced-feature requirements.',
      ],
      [
        'Premier',
        'Varies by contact count',
        'Unlimited sends plus advanced capabilities',
        'Evaluate only when advanced segmentation, optimization, controls, tracking, or support are operational needs.',
      ],
      [
        'Enterprise',
        'Custom quote',
        'Contract-defined',
        'Request written contacts, sends, features, service, security, and billing scope.',
      ],
      [
        'Free trial',
        '30 days',
        '500 contacts / 500 emails',
        'Use for workflow validation; confirm current conversion and eligibility terms.',
      ],
      [
        'Pay per campaign',
        'Per send',
        'No journeys, transactional email, or AI-powered features',
        'Relevant to occasional sending only when the documented exclusions are acceptable.',
      ],
    ],
  },
  sections: [
    {
      id: 'plan-structure',
      code: 'P1',
      title: 'Subscription plan structure',
      description:
        'Contact count sets the pricing context; plan determines send and feature scope.',
      paragraphs: [
        'Verified fact: Campaign Monitor currently presents Lite, Essentials, Premier, and Enterprise. The pricing interface adjusts subscription pricing by contact count rather than presenting one price that applies to every database size.',
        'Lite documents a monthly send allowance equal to five times the subscriber count. Essentials and Premier document unlimited email sends under current terms, while Enterprise uses custom pricing. Racklio therefore omits a universal numeric monthly price and directs buyers to the current contact selector.',
      ],
      evidence:
        'Official pricing pages can change by selected contacts, billing term, and account context. Record the selector inputs and quoted plan terms used for any budget approval.',
    },
    {
      id: 'feature-scope',
      code: 'F1',
      title: 'Plan capability and AI scope',
      description:
        'Unlimited sends do not mean that every capability is available without restriction.',
      paragraphs: [
        'Campaign Monitor documents email creation, templates, signup forms, segmentation, journeys, transactional email, A/B testing, analytics, and integrations. Current plan materials distinguish access to support, inbox preview, optimization, advanced segmentation, template controls, tracking, and other capabilities.',
        'AI Writer, AI Email Booster, Segment Mapper, and Marketing Monitor address different tasks. Essentials currently presents unlimited AI email features, but buyers should confirm which named tools, limits, and workflows that language covers. Do not infer universal unlimited AI availability across Lite, Premier, Enterprise, or pay per campaign.',
      ],
    },
    {
      id: 'contact-economics',
      code: 'C1',
      title: 'Contact count and send economics',
      description: 'List size and send frequency should be modeled together.',
      paragraphs: [
        'Provider fact: subscription pricing is contact-count dependent, and Lite’s send allowance scales as five times the subscriber count each month. Essentials and Premier remove that send-frequency constraint under current terms but remain tied to contact-based pricing.',
        'Racklio analysis: forecast current contacts, growth, cleanup, suppressed or inactive records, campaigns per month, journey traffic, transactional demand, peaks, and internal users. Confirm how Campaign Monitor counts contacts and handles plan movement before comparing annual totals.',
      ],
    },
    {
      id: 'trial-annual',
      code: 'B1',
      title: 'Trial and annual purchase',
      description:
        'The trial validates workflow; annual billing changes commitment economics.',
      paragraphs: [
        'Campaign Monitor documents a 30-day free trial for 500 contacts and 500 emails. Its current pricing page also presents a 10% discount for annual purchase.',
        'Racklio analysis: use the trial to validate template workflow, imports, segmentation, consent handling, testing, journey setup, analytics, and required integrations. Before annual purchase, confirm refund, cancellation, contact-growth, plan-change, tax, and renewal terms in the checkout or agreement.',
      ],
    },
    {
      id: 'pay-per-campaign',
      code: 'B2',
      title: 'Pay-per-campaign option',
      description:
        'A different billing model with material functional exclusions.',
      paragraphs: [
        'Official help documentation describes a pay-per-campaign option for accounts that do not need a recurring monthly subscription. It also states that journeys, transactional email, and AI-powered features are unavailable under this option.',
        'Racklio analysis: compare the actual number and size of planned sends with the subscription model. Pay per campaign can suit intermittent activity, but it is not functionally equivalent to a subscription when automation, transactional messages, or AI assistance matter.',
      ],
      evidence:
        'Confirm current eligibility and per-campaign charges in the applicable account before changing billing. Historical help material may not describe every new-account workflow.',
    },
    {
      id: 'billing-system',
      code: 'B3',
      title: 'New-account billing context',
      description:
        'Account creation date determines which billing documentation is most relevant.',
      paragraphs: [
        'Provider documentation states that new single-team accounts created from August 3, 2026 use Campaign Monitor’s newer Chargebee-powered billing system. Older Help Center material should not be applied universally to those accounts.',
        'Racklio analysis: resolve conflicts in this order: current pricing interface, current or new-account billing documentation, then older help material. Confirm the applicable invoices, payment controls, plan changes, contact adjustments, cancellation, and account ownership inside the actual account or agreement.',
      ],
    },
    {
      id: 'total-cost',
      code: 'T1',
      title: 'Total-cost decision rule',
      description:
        'Choose the lowest-scope plan that supports the complete operating workflow.',
      paragraphs: [
        'Racklio analysis: start with contacts and send frequency, then add the required journeys, transactional messaging, AI tools, preview, optimization, segmentation, support, integrations, and governance. Do not choose a tier from send allowance alone.',
        'Capture the selected contact tier, billing term, trial findings, plan features, migration effort, data cleanup, integration work, and renewal assumptions in the decision record. Verify all material terms directly before purchase.',
      ],
    },
  ],
  scenarios: [
    {
      scenario: 'Recurring program with moderate send frequency',
      guidance: 'Evaluate Lite first',
      why: 'Its five-times-subscriber allowance may fit when contact count and monthly campaign volume remain within the documented boundary.',
    },
    {
      scenario: 'Frequent campaigns, journeys, and broader AI email use',
      guidance: 'Evaluate Essentials',
      why: 'Unlimited sends and broader current feature scope can fit when Lite allowances or capability boundaries are too narrow.',
    },
    {
      scenario:
        'Advanced segmentation, optimization, controls, or service needs',
      guidance: 'Evaluate Premier',
      why: 'Use only after mapping the advanced capabilities that justify the higher contact-tier price.',
    },
    {
      scenario:
        'Occasional campaigns without automation or transactional email',
      guidance: 'Compare pay per campaign',
      why: 'It can avoid a recurring subscription if the documented journey, transactional, and AI exclusions are acceptable.',
    },
  ],
  faqs: [
    {
      question: 'How much does Campaign Monitor cost per month?',
      answer:
        'The current official pricing interface calculates Lite, Essentials, and Premier by contact count. Racklio does not publish one universal monthly number because it would not represent every list size.',
    },
    {
      question: 'Does Lite include unlimited sends?',
      answer:
        'No. Lite currently documents a monthly allowance equal to five times the subscriber count. Essentials and Premier list unlimited sends under current terms.',
    },
    {
      question: 'Can pay-per-campaign accounts use journeys and AI features?',
      answer:
        'No under the current official documentation. Journeys, transactional email, and AI-powered features are listed as unavailable with pay-per-campaign billing.',
    },
    {
      question: 'Which billing documentation applies to a new account?',
      answer:
        'Campaign Monitor states that new single-team accounts created from August 3, 2026 use its newer Chargebee-powered system. Use current new-account documentation rather than assuming older help articles apply.',
    },
  ],
  sources: campaignMonitorSources,
  related: [
    { title: 'Campaign Monitor review', href: '/reviews/campaign-monitor' },
    {
      title: 'Campaign Monitor alternatives',
      href: '/alternatives/campaign-monitor-alternatives',
    },
    {
      title: 'CRM & Customer Engagement',
      href: '/categories/crm-customer-engagement',
    },
  ],
};

export const campaignMonitorAlternativesData: CommercialPageData = {
  path: '/alternatives/campaign-monitor-alternatives',
  breadcrumbParent: { title: 'Alternatives', href: '/alternatives' },
  code: 'CM-A',
  eyebrow: 'Conditional alternatives guide',
  headline:
    'Campaign Monitor alternatives: choose by email workflow and system scope',
  dek: 'The relevant alternative depends on why Campaign Monitor does not fit: broader CRM requirements, support operations, channel breadth, ecommerce specialization, occasional sending, or different automation and governance needs. This guide defines the decision paths without declaring a universal replacement.',
  metaTitle: 'Campaign Monitor Alternatives 2026: Decision Guide | Racklio',
  metaDescription:
    'Compare Campaign Monitor alternative paths by email marketing, CRM, support, messaging, ecommerce, automation, billing, and practical business fit.',
  verificationDate,
  schemaDate: '2026-08-21',
  provider: 'Campaign Monitor',
  officialUrl: 'https://www.campaignmonitor.com/',
  categoryLinks: [
    {
      title: 'CRM & Customer Engagement',
      href: '/categories/crm-customer-engagement',
    },
  ],
  summary: [
    {
      label: 'Stay with Campaign Monitor',
      text: 'When branded email, segmentation, journeys, transactional messages, analytics, and plan-supported AI form the core workflow.',
    },
    {
      label: 'Choose broader CRM scope',
      text: 'When customer records, sales pipeline, service, and cross-functional automation must live in one operating system.',
    },
    {
      label: 'Choose support software',
      text: 'When tickets, live chat, shared inboxes, knowledge, and escalation matter more than campaign production.',
    },
    {
      label: 'Choose occasional sending',
      text: 'When campaigns are infrequent and journeys, transactional email, and AI-powered features are unnecessary.',
    },
  ],
  table: {
    caption: 'Campaign Monitor alternative paths by buying requirement',
    columns: ['Primary requirement', 'Decision path', 'Why', 'Verify'],
    rows: [
      [
        'Email-led marketing program',
        'Keep Campaign Monitor on the shortlist',
        'Its documented scope connects campaigns, segmentation, journeys, transactional email, analytics, AI tools, and integrations.',
        'Contact-tier price, sends, plan features, AI availability, integrations, and billing terms.',
      ],
      [
        'CRM plus marketing, sales, and service',
        'Evaluate EngageBay or another CRM suite',
        'A broader suite can make the customer record and cross-functional workflow the system center.',
        'CRM depth, contact limits, channel scope, automation, migration, ownership, and total cost.',
      ],
      [
        'Customer support operations',
        'Start with support software',
        'Ticketing, chat, shared inbox, knowledge, and escalation solve a different primary problem.',
        'Channels, ticket model, AI limits, handoff, reporting, integrations, and usage pricing.',
      ],
      [
        'Intermittent email campaigns',
        'Evaluate pay per campaign or a simpler sender',
        'A recurring subscription may be unnecessary when automation and transactional scope are not required.',
        'Per-send cost, exclusions, list handling, templates, analytics, consent, and future frequency.',
      ],
      [
        'Omnichannel customer conversations',
        'Start with messaging software',
        'A channel operations platform can align better when WhatsApp, chat, and shared conversations lead the workflow.',
        'Channel support, conversation pricing, inbox ownership, consent, automation, and CRM sync.',
      ],
    ],
  },
  sections: [
    {
      id: 'decision-boundary',
      code: 'D1',
      title: 'Define why Campaign Monitor does not fit',
      description:
        'An alternative is only meaningful when the missing requirement is explicit.',
      paragraphs: [
        'Verified fact: Campaign Monitor is centered on email creation, templates, signup forms, segmentation, automated journeys, transactional email, analytics, AI-assisted email capabilities, and integrations. It should not be treated as a complete sales CRM, help desk, or live-chat system.',
        'Racklio analysis: identify whether the gap is product scope, contact-based economics, send allowance, AI eligibility, channel coverage, governance, integration depth, or billing flexibility. That gap—not a generic feature count—should determine the alternative path.',
      ],
    },
    {
      id: 'broader-crm',
      code: 'A1',
      title: 'When a broader CRM suite is the alternative',
      description:
        'Choose CRM breadth when the customer record and lifecycle workflow are primary.',
      paragraphs: [
        'Racklio analysis: evaluate a broader CRM and customer-engagement suite when sales pipeline, service activity, contact ownership, lifecycle stages, marketing automation, and reporting must operate around one customer record.',
        'EngageBay is one existing Racklio research path for a compact CRM, marketing, sales, and service suite. Compare actual module depth, contacts, users, automation, integration, migration, permissions, and total cost rather than assuming suite breadth improves every email workflow.',
      ],
    },
    {
      id: 'support-messaging',
      code: 'A2',
      title: 'When support or messaging software is the alternative',
      description:
        'Campaign email and customer conversation operations are different categories.',
      paragraphs: [
        'Racklio analysis: start with support software when ticket ownership, live chat, knowledge, service automation, human escalation, and response workflows are central. Start with messaging software when WhatsApp or other channels, shared conversation history, routing, and agent collaboration lead the requirement.',
        'Do not replace an email platform with a support or messaging product unless campaign creation, audience segmentation, consent, automation, and analytics remain covered by another system.',
      ],
    },
    {
      id: 'email-specialization',
      code: 'A3',
      title: 'When another email operating model is the alternative',
      description:
        'Sending frequency, audience, automation, commerce, and governance shape the fit.',
      paragraphs: [
        'Racklio analysis: an occasional sender may prioritize per-campaign economics and simple production. A high-frequency lifecycle team may prioritize automation depth and data triggers. An ecommerce team may prioritize commerce events and catalog context. A larger organization may prioritize permissions, templates, approvals, auditability, identity, and service.',
        'Campaign Monitor itself offers pay-per-campaign billing, but official documentation excludes journeys, transactional email, and AI-powered features from that option. Compare alternatives against the complete workflow rather than the headline send price.',
      ],
      evidence:
        'Racklio does not infer features or pricing for unnamed alternatives. Verify every candidate through its current official product, pricing, and legal documentation.',
    },
    {
      id: 'ai-evaluation',
      code: 'A4',
      title: 'AI and optimization requirements',
      description:
        'Named AI tools should be matched to a defined decision or production task.',
      paragraphs: [
        'Campaign Monitor documents Marketing Monitor, AI Writer, AI Email Booster, and Segment Mapper. Their relevance depends on whether the team needs campaign analysis, writing assistance, email improvement suggestions, or audience-segmentation support.',
        'Racklio analysis: evaluate plan availability, limits, input data, review controls, output ownership, and the decision each tool supports. Do not choose an alternative because it has a larger AI label without comparing the actual governed workflow.',
      ],
    },
    {
      id: 'migration',
      code: 'M1',
      title: 'Migration and operational cost',
      description: 'Changing platforms moves more than contact records.',
      paragraphs: [
        'Racklio analysis: inventory contacts, consent evidence, suppressions, custom fields, segments, templates, journeys, transactional triggers, domains, authentication, integrations, analytics history, permissions, and training. Identify what can be exported and what must be rebuilt.',
        'Run representative campaigns and journeys in a controlled validation process before cutover. Keep the decision conditional until the candidate demonstrates the required data handling, workflow, governance, and commercial terms.',
      ],
    },
  ],
  scenarios: [
    {
      scenario: 'Email is the primary engagement channel',
      guidance: 'Keep Campaign Monitor on the shortlist',
      why: 'Its documented campaign, audience, journey, transactional, analytics, AI, and integration scope matches the problem.',
    },
    {
      scenario: 'One system must cover CRM, marketing, sales, and service',
      guidance: 'Evaluate a broader suite',
      why: 'The customer record and cross-functional operation—not email specialization—become the central requirement.',
    },
    {
      scenario: 'Tickets, chat, and agent workflow are primary',
      guidance: 'Evaluate support software',
      why: 'Those systems are designed around service operations rather than campaign production.',
    },
    {
      scenario: 'Only occasional campaigns are required',
      guidance: 'Compare pay per campaign and simpler senders',
      why: 'A recurring subscription may not be justified if the documented exclusions do not affect the workload.',
    },
  ],
  faqs: [
    {
      question: 'What is the closest Campaign Monitor alternative?',
      answer:
        'There is no universal closest alternative. The correct path depends on whether the requirement is focused email marketing, broader CRM, support operations, omnichannel messaging, ecommerce workflow, or occasional sending.',
    },
    {
      question: 'Should a CRM replace Campaign Monitor?',
      answer:
        'Only when CRM and cross-functional customer workflow are the primary requirements and the chosen system adequately covers campaign production, segmentation, automation, consent, and analytics.',
    },
    {
      question: 'Can pay per campaign replace a monthly plan?',
      answer:
        'It can fit occasional sending, but current Campaign Monitor documentation excludes journeys, transactional email, and AI-powered features. Compare function as well as price.',
    },
    {
      question: 'Does Racklio rank Campaign Monitor alternatives?',
      answer:
        'No. This guide uses conditional decision paths and does not assign ratings, scores, or a universal winner.',
    },
  ],
  sources: campaignMonitorSources,
  related: [
    { title: 'Campaign Monitor review', href: '/reviews/campaign-monitor' },
    {
      title: 'Campaign Monitor pricing',
      href: '/guides/campaign-monitor-pricing',
    },
    { title: 'EngageBay review', href: '/reviews/engagebay' },
    {
      title: 'CRM & Customer Engagement',
      href: '/categories/crm-customer-engagement',
    },
  ],
};
