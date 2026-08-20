import type { CommercialPageData } from '@/components/commercial';

const sources = [
  {
    title: 'Bookyourdata pricing',
    href: 'https://www.bookyourdata.com/pricing',
  },
  { title: 'Bookyourdata data', href: 'https://www.bookyourdata.com/our-data' },
  {
    title: 'Bookyourdata guarantees',
    href: 'https://www.bookyourdata.com/our-guarantees',
  },
  { title: 'Bookyourdata FAQ', href: 'https://www.bookyourdata.com/faq' },
  {
    title: 'Bookyourdata Prospector',
    href: 'https://www.bookyourdata.com/platform/prospector',
  },
  {
    title: 'Bookyourdata Email Finder',
    href: 'https://www.bookyourdata.com/platform/email-finder',
  },
  {
    title: 'Bookyourdata enrichment',
    href: 'https://www.bookyourdata.com/platform/data-enrichment',
  },
];
const common = {
  verificationDate: 'August 21, 2026',
  schemaDate: '2026-08-21',
  provider: 'Bookyourdata',
  officialUrl: 'https://www.bookyourdata.com/',
  categoryLinks: [
    {
      title: 'CRM & Customer Engagement',
      href: '/categories/crm-customer-engagement',
    },
  ],
  sources,
};

export const bookyourdataPricingData: CommercialPageData = {
  ...common,
  path: '/guides/bookyourdata-pricing',
  breadcrumbParent: { title: 'Guides', href: '/guides' },
  code: 'BYD-P',
  eyebrow: 'Verified pricing guide',
  headline:
    'Bookyourdata pricing: pay-as-you-go credits, volume discounts, and guarantee terms',
  dek: 'Bookyourdata does not require a subscription. Buyers purchase credits that generally reveal or export full contacts, receive lower unit costs at larger volumes, and retain unused purchased credits without expiry or a monthly usage cap.',
  metaTitle: 'Bookyourdata Pricing 2026: Credits & Cost Model | Racklio',
  metaDescription:
    'Bookyourdata pricing guide covering pay-as-you-go credits, free credits, volume discounts, no expiry, guarantee remedies, enrichment and buyer economics.',
  summary: [
    {
      label: 'Commercial model',
      text: 'Pay as you go with no mandatory subscription or contract.',
    },
    {
      label: 'Free evaluation',
      text: 'Ten credits without a card or subscription.',
    },
    {
      label: 'Credit rule',
      text: 'One credit generally equals one full contact in the prospecting workflow.',
    },
    {
      label: 'Retention',
      text: 'Purchased credits do not expire and have no monthly usage cap.',
    },
  ],
  table: {
    caption: 'Bookyourdata pricing boundaries',
    columns: [
      'Option',
      'Published basis',
      'What it covers',
      'Decision relevance',
    ],
    rows: [
      [
        'Free Pack',
        '$0',
        '10 instant credits',
        'Validate search, fields, export, and audience availability.',
      ],
      [
        'Pay-As-You-Go packs',
        'Dynamic pack pricing',
        '1 credit generally equals 1 full contact',
        'Compare effective cost per usable contact at the actual purchase volume.',
      ],
      [
        'Volume purchases',
        'Lower per-credit cost at larger bundles',
        'Non-expiring purchased credits',
        'Useful when forecast volume is credible and future use is likely.',
      ],
      [
        'BeSpoke',
        'From $499 for 1,000 records',
        'Private hand-built list; free 10-row sample',
        'Use when database filters cannot produce the required audience.',
      ],
    ],
  },
  sections: [
    {
      id: 'credit-model',
      code: 'C1',
      title: 'How the credit model works',
      description:
        'Credits purchase deliverable contact records rather than recurring platform access.',
      paragraphs: [
        'Verified fact: Bookyourdata states that one credit reveals one full contact for CSV/Excel or CRM transfer; revealing both email and mobile direct dial for the same contact consumes one credit. Purchased credits never expire, are not locked, and have no monthly usage cap.',
        'Racklio analysis: document which fields define a usable contact, then compare usable-record cost rather than headline credit cost.',
      ],
    },
    {
      id: 'bundle-pricing',
      code: 'P1',
      title: 'Dynamic packs and volume discounts',
      description: 'The current page exposes pack pricing dynamically.',
      paragraphs: [
        'Bookyourdata states that larger purchases reduce per-credit cost. The retrieved public page did not expose stable numeric pack totals, so Racklio does not invent bundle prices.',
        'Obtain the current pack total, credits, unit cost, currency, taxes, and guarantee terms at checkout. Compare several realistic volumes rather than buying solely for the lowest displayed unit rate.',
      ],
    },
    {
      id: 'free-bespoke',
      code: 'F1',
      title: 'Free credits and BeSpoke lists',
      description:
        'Database evaluation and manual research are separate offers.',
      paragraphs: [
        'The Free Pack provides ten database credits without a card. The current pricing page separately documents BeSpoke private list building from $499 for 1,000 records, a free 10-row sample, and delivery up to three business days.',
        'Racklio analysis: use free credits to validate the database workflow. Use a BeSpoke sample only when the audience cannot be produced reliably through available filters; confirm the final specification and remedy in writing.',
      ],
    },
    {
      id: 'guarantee',
      code: 'G1',
      title: 'Replacement and refund-credit mechanics',
      description: 'The remedy is governed by Bookyourdata’s conditions.',
      paragraphs: [
        'Bookyourdata states a 97% deliverability guarantee and says credits are refunded for purchased B2B prospecting records that are wrong or outdated under the guarantee.',
        'Racklio has not tested the 97% figure. Confirm eligibility window, excluded record types, required evidence, submission procedure, measurement method, and whether the remedy is replacement or account credit.',
      ],
      evidence:
        'This is a provider-backed guarantee, not a Racklio performance result.',
    },
    {
      id: 'economics',
      code: 'E1',
      title: 'When pay as you go may fit',
      description:
        'Irregular demand can favor non-expiring credits; continuous demand may justify other models.',
      paragraphs: [
        'Racklio analysis: pay as you go can fit one-off campaigns, seasonal demand, uncertain cadence, or teams avoiding a recurring commitment. Subscription sales-intelligence products may fit when continuous access, intent, workflow, sequencing, or broader intelligence justifies recurring cost.',
        'High-volume buyers should compare pack unit cost, expected valid records, guarantee recovery, enrichment usage, manual operations, and the separate CRM or outreach stack.',
      ],
    },
    {
      id: 'api-boundary',
      code: 'A1',
      title: 'Enrichment API cost boundary',
      description:
        'Only currently documented real-time enrichment API scope is assumed.',
      paragraphs: [
        'Official FAQ and enrichment pages document an API for real-time data enrichment. Some other product surfaces may still describe API experiences as coming soon.',
        'Verify the exact live endpoint, record matching, fields, credits, rate limits, errors, authentication, and contract. Do not budget from an assumed full-platform API.',
      ],
    },
  ],
  scenarios: [
    {
      scenario: 'Irregular campaign',
      guidance: 'Consider pay as you go',
      why: 'Credits do not expire and no subscription is required.',
    },
    {
      scenario: 'Small evaluation',
      guidance: 'Use the ten free credits',
      why: 'Validate audience, fields, verification, suppression, and export before purchase.',
    },
    {
      scenario: 'Large planned purchase',
      guidance: 'Compare effective unit cost',
      why: 'Volume discounts help only when the contacts are likely to be used.',
    },
    {
      scenario: 'Continuous intelligence and outreach',
      guidance: 'Compare subscription platforms',
      why: 'Bookyourdata does not replace sequencing, pipeline, or broader intelligence workflow.',
    },
  ],
  faqs: [
    {
      question: 'Do credits expire?',
      answer:
        'Bookyourdata states purchased credits never expire and have no monthly usage cap.',
    },
    {
      question: 'Is there a subscription?',
      answer:
        'No mandatory subscription is required for the documented pay-as-you-go model.',
    },
    {
      question: 'Are bundle prices published here?',
      answer:
        'No. The current pack selector is dynamic, so Racklio avoids inventing unstable values.',
    },
    {
      question: 'Is the 97% guarantee independently verified?',
      answer:
        'No. It is Bookyourdata’s provider-backed guarantee, subject to its conditions.',
    },
  ],
  related: [
    { title: 'Bookyourdata review', href: '/reviews/bookyourdata' },
    {
      title: 'Bookyourdata alternatives',
      href: '/alternatives/bookyourdata-alternatives',
    },
    {
      title: 'CRM & Customer Engagement',
      href: '/categories/crm-customer-engagement',
    },
  ],
};

export const bookyourdataAlternativesData: CommercialPageData = {
  ...common,
  path: '/alternatives/bookyourdata-alternatives',
  breadcrumbParent: { title: 'Alternatives', href: '/alternatives' },
  code: 'BYD-A',
  eyebrow: 'Conditional alternatives guide',
  headline:
    'Bookyourdata alternatives: choose by data access and sales workflow',
  dek: 'The relevant alternative depends on whether the buyer needs recurring database access, broader sales intelligence, built-in outreach, CRM-native prospecting, lower-volume acquisition, international coverage, or enrichment-first operations.',
  metaTitle: 'Bookyourdata Alternatives 2026: Decision Guide | Racklio',
  metaDescription:
    'Compare Bookyourdata alternative paths by pay-as-you-go versus subscription, sales intelligence, outreach, CRM, enrichment, volume and data requirements.',
  summary: [
    {
      label: 'Stay with Bookyourdata',
      text: 'When pay-as-you-go, non-expiring credits, targeted exports, suppression, and enrichment fit.',
    },
    {
      label: 'Choose a subscription database',
      text: 'When continuous access and broader intelligence justify recurring cost.',
    },
    {
      label: 'Choose outreach or CRM-native tools',
      text: 'When sequencing, engagement, pipeline, and workflow must accompany the data.',
    },
  ],
  table: {
    caption: 'Bookyourdata alternative paths',
    columns: ['Requirement', 'Decision path', 'Why', 'Verify'],
    rows: [
      [
        'Irregular list buying',
        'Keep Bookyourdata on the shortlist',
        'Non-expiring credits avoid mandatory subscription.',
        'Audience coverage, fields, unit cost, suppression, and guarantee.',
      ],
      [
        'Continuous sales intelligence',
        'Evaluate a subscription database',
        'Ongoing access and broader signals can justify recurring cost.',
        'Seats, exports, intent, refresh, credits, contract, and integrations.',
      ],
      [
        'Built-in outreach',
        'Evaluate data-plus-sequencing tools',
        'Prospecting and engagement can share one workflow.',
        'Channels, consent, domains, limits, deliverability controls, and CRM sync.',
      ],
      [
        'CRM-native prospecting',
        'Evaluate CRM marketplace/native data',
        'Records, ownership, deduplication, and actions may stay in one system.',
        'Coverage, matching, writeback, permissions, cost, and portability.',
      ],
      [
        'Enrichment-first use',
        'Evaluate enrichment specialists',
        'Ongoing matching and refresh differ from list acquisition.',
        'Match rate, fields, API, batch handling, credits, and update cadence.',
      ],
    ],
  },
  sections: [
    {
      id: 'boundary',
      code: 'D1',
      title: 'Define the missing capability',
      description:
        'Bookyourdata supplies data; alternatives may add or specialize the surrounding workflow.',
      paragraphs: [
        'Verified fact: Bookyourdata documents prospecting, Email Finder, verification, suppression, exports, and CRM, CSV, and API enrichment under a pay-as-you-go credit model.',
        'Racklio analysis: identify whether the gap is recurring access, deeper intelligence, outreach, CRM-native workflow, lower-volume economics, international audience coverage, or enrichment operations.',
      ],
    },
    {
      id: 'subscription',
      code: 'A1',
      title: 'Subscription versus pay as you go',
      description: 'Cadence and workflow breadth determine the useful model.',
      paragraphs: [
        'Pay as you go can fit irregular campaigns because purchased credits do not expire. A subscription can fit continuous prospecting when ongoing access, signals, workflow, and refresh justify the commitment.',
        'Compare annual effective cost, seats, exports, credits, contact usage, overages, contract, cancellation, and unused capacity—not monthly price alone.',
      ],
    },
    {
      id: 'outreach-crm',
      code: 'A2',
      title: 'Built-in outreach and CRM-native prospecting',
      description:
        'Data availability is not pipeline or engagement capability.',
      paragraphs: [
        'Bookyourdata is not a CRM or sequencer. Buyers that need email or multichannel sequences, task queues, opportunity stages, ownership, reporting, and engagement history may need another platform alongside it.',
        'Racklio analysis: integrated workflow can reduce handoffs, but verify data quality, permissions, suppression, consent, sending controls, portability, and total cost before preferring consolidation.',
      ],
    },
    {
      id: 'enrichment',
      code: 'A3',
      title: 'Enrichment and international requirements',
      description:
        'Match workflow and audience coverage should be sampled directly.',
      paragraphs: [
        'Bookyourdata states coverage across 200+ countries and documents contact/company enrichment through CSV, CRM, and real-time API paths. These are provider claims.',
        'Compare input requirements, match behavior, returned fields, geography, localization, freshness, batch or API operation, credit consumption, errors, and sample results. Do not infer audited coverage from headline scale.',
      ],
    },
    {
      id: 'email-priority',
      code: 'A4',
      title: 'Verified-email priority',
      description:
        'Guarantee wording and operational validity are different evidence layers.',
      paragraphs: [
        'Bookyourdata advertises real-time verification and a 97% deliverability guarantee with credit remedies under documented conditions.',
        'Racklio analysis: compare verification timing, catch-all treatment, guarantee definition, claim window, remedy, suppression, and lawful outreach controls. Racklio does not independently validate candidate accuracy claims.',
      ],
    },
  ],
  scenarios: [
    {
      scenario: 'Seasonal list buying',
      guidance: 'Consider Bookyourdata',
      why: 'Credits remain available without recurring subscription.',
    },
    {
      scenario: 'Daily prospecting with intelligence signals',
      guidance: 'Evaluate subscriptions',
      why: 'Continuous access and broader data can justify recurring economics.',
    },
    {
      scenario: 'Need sequencing and pipeline',
      guidance: 'Evaluate integrated outreach or CRM tools',
      why: 'Bookyourdata provides data rather than the full engagement workflow.',
    },
    {
      scenario: 'Existing records need continuous enrichment',
      guidance: 'Compare enrichment specialists',
      why: 'API and batch matching quality may matter more than list-building filters.',
    },
  ],
  faqs: [
    {
      question: 'What is the closest Bookyourdata alternative?',
      answer:
        'There is no universal closest option; the decision depends on access model, intelligence, outreach, CRM, enrichment, geography, and volume.',
    },
    {
      question: 'Should a CRM replace Bookyourdata?',
      answer:
        'Only if its native data adequately covers the prospecting need; Bookyourdata itself is not a CRM.',
    },
    {
      question: 'Does Racklio rank alternatives?',
      answer:
        'No. Recommendations are conditional and no ratings or universal winner are assigned.',
    },
  ],
  related: [
    { title: 'Bookyourdata review', href: '/reviews/bookyourdata' },
    { title: 'Bookyourdata pricing', href: '/guides/bookyourdata-pricing' },
    {
      title: 'CRM & Customer Engagement',
      href: '/categories/crm-customer-engagement',
    },
  ],
};
