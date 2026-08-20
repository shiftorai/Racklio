import type { CommercialPageData } from '@/components/commercial';

const verificationDate = 'August 21, 2026';
export const aweberSources = [
  { title: 'AWeber', href: 'https://www.aweber.com/' },
  { title: 'AWeber pricing', href: 'https://www.aweber.com/pricing.htm' },
  {
    title: 'AWeber integrations',
    href: 'https://www.aweber.com/integrations/',
  },
  {
    title: 'AWeber cost and plan structure',
    href: 'https://docs.aweber.com/getting-started-with-aweber/aweber-information/how-much-does-aweber-cost',
  },
  {
    title: 'AWeber pricing FAQ',
    href: 'https://docs.aweber.com/getting-started-with-aweber/aweber-information/pricing-frequently-asked-questions',
  },
  {
    title: 'AWeber billing documentation',
    href: 'https://docs.aweber.com/getting-started-with-aweber/aweber-information/how-does-the-billing-work',
  },
  {
    title: 'AWeber integration documentation',
    href: 'https://docs.aweber.com/integrations',
  },
];

export const aweberPricingData: CommercialPageData = {
  path: '/guides/aweber-pricing',
  breadcrumbParent: { title: 'Guides', href: '/guides' },
  code: 'AW-P',
  eyebrow: 'Verified pricing guide',
  headline: 'AWeber pricing: subscriber tiers, send multiples, and plan limits',
  dek: 'AWeber combines a free starting plan, subscriber-tiered Lite and Plus pricing, and a flat Unlimited plan. The real cost depends on subscriber count, monthly send volume, billing term, quantity limits, automatic upgrades, and whether a seasonal pause requires the Hold Package.',
  metaTitle: 'AWeber Pricing 2026: Plans, Subscribers & Sends | Racklio',
  metaDescription:
    'AWeber pricing guide covering Free, Lite, Plus, Unlimited, subscriber tiers, send limits, monthly and annual prices, trial, upgrades and Hold Package.',
  verificationDate,
  schemaDate: '2026-08-21',
  provider: 'AWeber',
  officialUrl: 'https://www.aweber.com/pricing.htm',
  categoryLinks: [
    {
      title: 'CRM & Customer Engagement',
      href: '/categories/crm-customer-engagement',
    },
  ],
  summary: [
    {
      label: 'Free',
      text: '$0 for up to 500 subscribers, 3,000 monthly emails, one list, and one workflow automation.',
    },
    {
      label: 'Lite',
      text: 'Starts at $15 monthly or approximately $12.49–$12.50 monthly on annual billing, with a 10x subscriber send allowance.',
    },
    {
      label: 'Plus',
      text: 'Starts at $30 monthly or approximately $19.99–$20 monthly on annual billing, with a 12x subscriber send allowance.',
    },
    {
      label: 'Unlimited',
      text: '$899 monthly, unlimited subscriber capacity, and sends up to 15x subscriber count under current terms.',
    },
  ],
  table: {
    caption: 'AWeber plans, send limits, and decision relevance',
    columns: ['Plan', 'Published price', 'Capacity', 'Decision relevance'],
    rows: [
      [
        'Free',
        '$0',
        '500 subscribers / 3,000 sends; 1 list; 1 workflow',
        'Validate a simple email program without a card requirement.',
      ],
      [
        'Lite — 500 subscribers',
        '$15 monthly / $150 annually',
        '5,000 monthly sends',
        'Entry paid tier; check Lite’s page, automation, user, list, and segment caps.',
      ],
      [
        'Lite — 5,000 subscribers',
        '$60 monthly / $600 annually',
        '50,000 monthly sends',
        'Shows why the advertised entry rate is not the total for every list size.',
      ],
      [
        'Plus — 500 subscribers',
        '$30 monthly / $240 annually',
        '6,000 monthly sends',
        'Adds unlimited lists, pages, automations, segments, and users under current terms.',
      ],
      [
        'Plus — 5,000 subscribers',
        '$90 monthly / $900 annually',
        '60,000 monthly sends',
        'Use representative tier economics when projecting list growth.',
      ],
      [
        'Unlimited',
        '$899 monthly',
        'Unlimited subscribers / up to 15x sends',
        'Evaluate against actual high-volume subscriber and send forecasts.',
      ],
    ],
  },
  sections: [
    {
      id: 'plans',
      code: 'P1',
      title: 'Free, Lite, Plus, and Unlimited',
      description:
        'Each plan combines a different commercial model with capability limits.',
      paragraphs: [
        'Verified fact: Free is $0 for up to 500 subscribers and 3,000 emails monthly. Lite starts at $15 monthly with a 10x subscriber send allowance. Plus starts at $30 monthly with a 12x allowance. Unlimited is $899 monthly with unlimited subscriber capacity and sends up to 15x subscriber count.',
        'Racklio analysis: Free is a controlled starting point. Lite fits a bounded single-list operation. Plus becomes relevant when unlimited lists, pages, automations, segments, and users or its advanced analytics, sales, fee, support, and branding scope matter. Unlimited should be evaluated against a concrete high-volume forecast.',
      ],
    },
    {
      id: 'scaling',
      code: 'S1',
      title: 'Subscriber-tier and send-multiple scaling',
      description:
        'The entry rate applies only to the smallest published subscriber tier.',
      paragraphs: [
        'Official pricing tables show Lite at $15 monthly or $150 annually for 500 subscribers, $35 or $350 for 2,500, $60 or $600 for 5,000, and $100 or $1,000 for 10,000. The corresponding 10x monthly send limits are 5,000, 25,000, 50,000, and 100,000.',
        'Plus is $30 monthly or $240 annually for 500 subscribers, $55 or $550 for 2,500, $90 or $900 for 5,000, and $135 or $1,350 for 10,000. Its 12x send limits are 6,000, 30,000, 60,000, and 120,000.',
        'Racklio analysis: forecast subscriber growth and send frequency together. A larger list can change price even when the campaign workflow stays the same, while high frequency can force a plan or tier change before subscriber growth does.',
      ],
    },
    {
      id: 'annual-display',
      code: 'B1',
      title: 'Monthly and annual display context',
      description:
        'Live annual-effective displays and help-center equivalents differ by cents.',
      paragraphs: [
        'The current public page renders approximately $12.49 monthly for Lite and $19.99 for Plus when billed annually. Official Help Center material describes starting annual equivalents of $12.50 and $20. Racklio treats this as live display and rounding context rather than a substantive contradiction.',
        'Use the checkout total and selected subscriber tier as the purchase source of truth. Annual totals, not rounded monthly equivalents, should be recorded in budget approval.',
      ],
      evidence:
        'Pricing verified August 21, 2026 from AWeber’s public pricing page and official Help Center.',
    },
    {
      id: 'plan-limits',
      code: 'L1',
      title: 'Lite and Plus capability limits',
      description: 'Quantity caps can justify Plus before send volume does.',
      paragraphs: [
        'Lite currently lists one email list, three landing pages, three email automations, three users, one custom segment, 24/7 support, and advanced message analytics. Plus lists unlimited lists, pages, automations, users, and custom segments plus priority support, advanced reporting, advanced landing pages, sales tracking, lower transaction fees, and branding removal.',
        'Racklio analysis: inventory active lists, pages, workflows, segments, users, reporting, sales tracking, branding, and ecommerce fee needs. Choose Plus only when those operational requirements—not a vague preference for a higher tier—justify it.',
      ],
    },
    {
      id: 'trial-billing',
      code: 'B2',
      title: 'Trial, card requirement, and plan changes',
      description:
        'Trial and billing behavior affect evaluation and growth planning.',
      paragraphs: [
        'AWeber’s public page offers a 14-day trial for paid plans. Free does not require a credit card; Lite, Plus, and Unlimited do. AWeber states that it has no setup fees or long-term contracts and that plans can be changed.',
        'Official documentation also states that exceeding subscriber or send limits can trigger automatic upgrade to a higher tier. Downgrades are not automatic and may require contacting Customer Solutions. Set monitoring ownership before the list approaches a threshold.',
      ],
    },
    {
      id: 'hold-package',
      code: 'H1',
      title: 'Hold Package for paused accounts',
      description:
        'A $4.99 monthly option preserves data while sending and automation pause.',
      paragraphs: [
        'Provider fact: AWeber documents a Hold Package at $4.99 per month that retains account data while sending and automations are paused.',
        'Racklio analysis: seasonal businesses should compare holding cost with export completeness, cancellation, re-import, workflow reconstruction, domain configuration, and restart time. Confirm current eligibility and retained data before relying on the package.',
      ],
    },
  ],
  scenarios: [
    {
      scenario: 'Up to 500 subscribers and one simple workflow',
      guidance: 'Start with Free',
      why: 'It provides a no-card evaluation path with 3,000 monthly sends.',
    },
    {
      scenario: 'Single-list operation within Lite caps',
      guidance: 'Model Lite by subscriber tier',
      why: 'The 10x send allowance and capped pages, automations, users, and segment may be sufficient.',
    },
    {
      scenario: 'Multiple lists, workflows, segments, or users',
      guidance: 'Compare Plus',
      why: 'Its published unlimited quantity scope and advanced capabilities address those Lite constraints.',
    },
    {
      scenario: 'Seasonal pause',
      guidance: 'Evaluate the Hold Package',
      why: 'The documented $4.99 monthly option preserves data while sending and automations pause.',
    },
  ],
  faqs: [
    {
      question: 'Is AWeber Lite always $15 per month?',
      answer:
        'No. $15 is the monthly entry rate for the smallest subscriber tier. Lite pricing increases with subscriber count.',
    },
    {
      question: 'Why does AWeber show $12.49 while documentation says $12.50?',
      answer:
        'The live page and Help Center express the annual-effective Lite rate with a one-cent display or rounding difference. Use the annual checkout total for the selected tier.',
    },
    {
      question: 'Can AWeber upgrade an account automatically?',
      answer:
        'Official documentation states subscriber or send-limit overages can trigger an upgrade. Downgrades are not automatic and may require Customer Solutions.',
    },
    {
      question: 'What is the AWeber Hold Package?',
      answer:
        'It is a documented $4.99 monthly option that preserves account data while sending and automations are paused.',
    },
  ],
  sources: aweberSources,
  related: [
    { title: 'AWeber review', href: '/reviews/aweber' },
    { title: 'AWeber alternatives', href: '/alternatives/aweber-alternatives' },
    {
      title: 'Campaign Monitor vs AWeber',
      href: '/comparisons/campaign-monitor-vs-aweber',
    },
  ],
};

export const aweberAlternativesData: CommercialPageData = {
  path: '/alternatives/aweber-alternatives',
  breadcrumbParent: { title: 'Alternatives', href: '/alternatives' },
  code: 'AW-A',
  eyebrow: 'Conditional alternatives guide',
  headline: 'AWeber alternatives: choose by email workflow and growth model',
  dek: 'A useful AWeber alternative depends on whether the unmet need is lower-cost sending, creator specialization, deeper ecommerce automation, a broader CRM, higher-volume economics, simpler workflow, or advanced marketing automation. This guide defines those paths without ranking providers.',
  metaTitle: 'AWeber Alternatives 2026: Conditional Decision Guide | Racklio',
  metaDescription:
    'Compare AWeber alternative paths by cost, creator workflow, ecommerce, CRM breadth, volume, automation, subscriber tiers, and practical business fit.',
  verificationDate,
  schemaDate: '2026-08-21',
  provider: 'AWeber',
  officialUrl: 'https://www.aweber.com/',
  categoryLinks: [
    {
      title: 'CRM & Customer Engagement',
      href: '/categories/crm-customer-engagement',
    },
  ],
  summary: [
    {
      label: 'Stay with AWeber',
      text: 'When explicit subscriber tiers, straightforward campaigns, landing pages, automation, creator commerce, and a free starting plan fit.',
    },
    {
      label: 'Choose another email platform',
      text: 'When team workflow, AI optimization, advanced automation, ecommerce depth, or a different high-volume model is primary.',
    },
    {
      label: 'Choose a broader platform',
      text: 'When CRM records, sales pipeline, service, and cross-functional customer operations must share one system.',
    },
  ],
  table: {
    caption: 'AWeber alternative paths by primary requirement',
    columns: ['Requirement', 'Decision path', 'Why', 'Verify'],
    rows: [
      [
        'Lower-cost email marketing',
        'Compare equivalent subscriber tiers',
        'Entry prices are not equivalent at different list sizes or send allowances.',
        'Subscribers, sends, pages, automations, users, segments, overages, and annual total.',
      ],
      [
        'Creator-focused email',
        'Compare creator workflow depth',
        'Landing pages, forms, courses, memberships, selling, and integrations may matter more than CRM breadth.',
        'Commerce fees, payment flow, automation, templates, audience ownership, and exports.',
      ],
      [
        'Stronger ecommerce automation',
        'Evaluate commerce-specialized tools',
        'Catalog, purchase, cart, lifecycle, and attribution depth may exceed light selling tools.',
        'Store connection, events, segmentation, consent, revenue attribution, and total cost.',
      ],
      [
        'Broader CRM platform',
        'Evaluate EngageBay or another suite',
        'Customer records, pipeline, sales, marketing, and service can become the operating center.',
        'Module depth, contacts, users, migration, permissions, service scope, and integrations.',
      ],
      [
        'Team-oriented email and newer AI tools',
        'Compare Campaign Monitor',
        'Its documented plan structure includes campaign analysis and AI-assisted email optimization tools.',
        'Contact pricing, sends, AI availability, journeys, transactional email, users, and billing.',
      ],
    ],
  },
  sections: [
    {
      id: 'decision-boundary',
      code: 'D1',
      title: 'Define the reason to leave AWeber',
      description:
        'The alternative should solve an explicit operating constraint.',
      paragraphs: [
        'Verified fact: AWeber covers campaigns, list building, landing pages, automation, segmentation, reporting, ecommerce tools, support, and integrations across Free, Lite, Plus, and Unlimited.',
        'Racklio analysis: identify whether the real constraint is subscriber-tier cost, send frequency, Lite quantity caps, automation depth, ecommerce workflow, team governance, CRM scope, or high-volume economics. Do not switch platforms from a generic feature count.',
      ],
    },
    {
      id: 'email-platform',
      code: 'A1',
      title: 'Another dedicated email platform',
      description: 'Compare the operating model, not only the email editor.',
      paragraphs: [
        'Campaign Monitor is a relevant documented comparison when a buyer values dedicated email marketing, team-oriented plan scope, transactional email, and newer AI-assisted campaign analysis and optimization. AWeber remains relevant for explicit subscriber/send tiers, creator and small-business positioning, landing pages, automation, ecommerce tools, and a free plan.',
        'Racklio analysis: compare contact or subscriber counting, send allowance, journeys, transactional email, AI availability, lists, segments, users, pages, integrations, support, annual commitment, and upgrade behavior.',
      ],
    },
    {
      id: 'creator-ecommerce',
      code: 'A2',
      title: 'Creator and ecommerce alternatives',
      description:
        'Creator simplicity and commerce depth are separate requirements.',
      paragraphs: [
        'A creator-focused alternative may prioritize newsletters, paid content, courses, memberships, audience ownership, simple landing pages, and direct selling. An ecommerce-focused alternative may prioritize store events, catalog data, cart behavior, purchase lifecycle, segmentation, and attribution.',
        'Racklio analysis: map the actual sale and post-purchase workflow. AWeber’s documented ecommerce features may be sufficient for light selling, while deeper store automation can justify another category. Verify transaction fees and data movement directly.',
      ],
    },
    {
      id: 'crm-automation',
      code: 'A3',
      title: 'Broader CRM or advanced automation',
      description:
        'A larger system is justified only by a larger operating requirement.',
      paragraphs: [
        'Consider a broader customer platform when records, pipeline, marketing, sales, service, permissions, and reporting must share one operating model. EngageBay is one existing Racklio path for compact all-in-one scope.',
        'Consider advanced marketing automation when branching, scoring, events, lifecycle orchestration, governance, and cross-channel actions exceed the required AWeber workflow. Compare implementation and administration as part of cost.',
      ],
    },
    {
      id: 'migration',
      code: 'M1',
      title: 'Migration and billing safeguards',
      description:
        'Lists, consent, suppressions, automations, and domains all need a plan.',
      paragraphs: [
        'Inventory subscribers, consent evidence, suppressions, tags, segments, lists, templates, landing pages, forms, workflows, domains, tracking, integrations, reports, users, and ecommerce data before selecting an alternative.',
        'AWeber documents automatic upgrades after subscriber or send overages and a $4.99 Hold Package for paused accounts. Account for those options and the target platform’s import, billing, and cancellation terms in the migration decision.',
      ],
    },
  ],
  scenarios: [
    {
      scenario: 'Straightforward creator email program',
      guidance: 'Keep AWeber on the shortlist',
      why: 'Its documented tiers connect campaigns, pages, automation, list building, analytics, ecommerce, and integrations.',
    },
    {
      scenario: 'Team-oriented email plus newer AI optimization',
      guidance: 'Compare Campaign Monitor',
      why: 'The products use different pricing and plan structures and document different AI and team-oriented capabilities.',
    },
    {
      scenario: 'CRM, pipeline, marketing, sales, and service together',
      guidance: 'Evaluate a broader suite',
      why: 'AWeber is not a full CRM or support platform.',
    },
    {
      scenario: 'High-volume list',
      guidance: 'Model all candidate economics',
      why: 'Subscriber tiers, send multiples, flat-rate options, contacts, overages, and annual terms can change total cost materially.',
    },
  ],
  faqs: [
    {
      question: 'What is the closest AWeber alternative?',
      answer:
        'There is no universal closest option. The correct path depends on subscriber volume, creator workflow, ecommerce depth, CRM breadth, automation, team governance, and cost.',
    },
    {
      question: 'Is Campaign Monitor an AWeber alternative?',
      answer:
        'Yes for many email-marketing workloads, but their buyer positioning, pricing models, plan limits, AI capabilities, and team fit differ.',
    },
    {
      question: 'Should a CRM replace AWeber?',
      answer:
        'Only when CRM and cross-functional customer operations are the primary need and the selected platform adequately covers the required email workflow.',
    },
    {
      question: 'Does Racklio rank these alternatives?',
      answer:
        'No. Racklio uses conditional scenarios and does not assign scores, ratings, or a universal winner.',
    },
  ],
  sources: aweberSources,
  related: [
    { title: 'AWeber review', href: '/reviews/aweber' },
    { title: 'AWeber pricing', href: '/guides/aweber-pricing' },
    {
      title: 'Campaign Monitor vs AWeber',
      href: '/comparisons/campaign-monitor-vs-aweber',
    },
    { title: 'EngageBay review', href: '/reviews/engagebay' },
  ],
};
