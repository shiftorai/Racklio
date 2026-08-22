import type { CommercialPageData } from '@/components/commercial';

const verificationDate = 'August 14, 2026';
const engageBaySources = [
  {
    title: 'EngageBay All-in-One pricing',
    href: 'https://www.engagebay.com/pricing/all-in-one',
  },
  {
    title: 'EngageBay Marketing product',
    href: 'https://www.engagebay.com/products/marketing',
  },
  {
    title: 'EngageBay integrations',
    href: 'https://www.engagebay.com/integrations/',
  },
  { title: 'EngageBay API', href: 'https://www.engagebay.com/api' },
  { title: 'EngageBay Help Center', href: 'https://www.engagebay.com/support' },
];
const eazyChatSources = [
  { title: 'EazyChat.io homepage', href: 'https://eazychat.io/' },
  { title: 'EazyChat.io pricing', href: 'https://eazychat.io/pricing' },
  { title: 'EazyChat.io products', href: 'https://eazychat.io/products' },
  { title: 'EazyChat.io product FAQ', href: 'https://eazychat.io/contact' },
];

export const engageBayPricingData: CommercialPageData = {
  path: '/guides/engagebay-pricing',
  breadcrumbParent: { title: 'Guides', href: '/guides' },
  code: 'EP',
  eyebrow: 'Verified pricing guide',
  headline: 'EngageBay pricing: plans, contact limits, and cost decisions',
  dek: 'EngageBay offers a free All-in-One tier and paid per-user plans whose contact allowances and feature limits change substantially by tier. The practical cost depends on users, contacts, selected product bay, billing term, and required automation or reporting.',
  metaTitle: 'EngageBay Pricing 2026: Plans, Limits & Cost | Racklio',
  metaDescription:
    'EngageBay pricing guide covering current All-in-One plans, annual per-user rates, contact limits, feature differences, cost drivers, and buyer fit.',
  verificationDate,
  provider: 'EngageBay',
  providerKey: 'engageBay',
  officialUrl: 'https://www.engagebay.com/pricing/all-in-one',
  categoryLinks: [
    {
      title: 'CRM & Customer Engagement',
      href: '/categories/crm-customer-engagement',
    },
  ],
  summary: [
    {
      label: 'Published entry point',
      text: 'All-in-One Free is listed at $0 per user per month for 250 contacts.',
    },
    {
      label: 'Paid annual pricing',
      text: 'Basic is $14.99, Growth $64.99, and Pro $119.99 per user per month when paid yearly.',
    },
    {
      label: 'Main cost driver',
      text: 'The required contact allowance and feature tier can matter as much as seat count.',
    },
    {
      label: 'Decision rule',
      text: 'Choose a tier only after mapping contacts, users, automation, reporting, storage, and service requirements.',
    },
  ],
  table: {
    caption: 'EngageBay All-in-One pricing and contact allowances',
    columns: ['Plan', 'Annual per-user rate', 'Contacts', 'Decision relevance'],
    rows: [
      [
        'Free',
        '$0/month',
        '250',
        'Useful for limited evaluation or a very small contact base.',
      ],
      [
        'Basic',
        '$14.99/month',
        '500',
        'Low paid entry point, but the contact ceiling is narrow.',
      ],
      [
        'Growth',
        '$64.99/month',
        '5,000',
        'Broader automation and reporting for a growing operation.',
      ],
      [
        'Pro',
        '$119.99/month',
        '50,000',
        'Higher limits and administrative controls for more complex use.',
      ],
    ],
  },
  sections: [
    {
      id: 'billing',
      code: 'B1',
      title: 'How EngageBay billing works',
      description:
        'Plan, product bay, users, contacts, and commitment period shape the bill.',
      paragraphs: [
        'Verified fact: EngageBay publishes separate pricing for All-in-One, Marketing, CRM & Sales, and Service Bay. The All-in-One figures on this page use the annual rates displayed by the official pricing page, not a lowest-price headline detached from its commitment.',
        'Racklio analysis: a buyer comparing EngageBay with a specialist tool should compare equivalent scope. A bundled CRM, marketing, sales, live-chat, and help-desk package is not directly equivalent to a single-purpose inbox or chat subscription.',
      ],
      evidence:
        'The official page displays lower effective rates for longer commitments. Because commitment labels and checkout terms can change, Racklio does not present those lower figures as the default price.',
      contextualLink: {
        title: 'Read the full EngageBay review',
        href: '/reviews/engagebay',
      },
    },
    {
      id: 'plans',
      code: 'P1',
      title: 'What changes between plans',
      description:
        'The upgrade decision is about capability and limits, not only contact volume.',
      paragraphs: [
        'Basic raises the contact allowance from the free tier and adds paid-plan functionality. Growth expands the contact allowance to 5,000 and documents broader automation, reporting, site messaging, and sales or service capabilities. Pro raises the allowance to 50,000 and lists controls including role management, SSO, goals, and custom reporting.',
        'Plan comparison is dense. Before choosing, record the required lists, forms, workflows, workflow nodes, email volume, storage, service views, macros, reports, and administrative controls, then confirm each item against the current plan table.',
      ],
    },
    {
      id: 'cost-drivers',
      code: 'C1',
      title: 'Limits and costs beyond the headline rate',
      description:
        'A low seat rate can be misleading when the required contact or feature tier is higher.',
      paragraphs: [
        'A team may need Growth or Pro because of contacts, workflow depth, reporting, storage, governance, or service controls even when it has few users. Conversely, a larger team with simple requirements still multiplies the per-user subscription across every required seat.',
        'Taxes, implementation work, data cleanup, external email or telephony services, and connected applications are not established by the plan headline. Ask which services are included, which have their own contracts, and how data moves between them.',
      ],
      contextualLink: {
        title: 'Compare EngageBay and HubSpot',
        href: '/comparisons/engagebay-vs-hubspot',
      },
    },
    {
      id: 'value',
      code: 'V1',
      title: 'When EngageBay can represent good value',
      description:
        'The suite is economically relevant when several included functions are genuinely used.',
      paragraphs: [
        'Racklio analysis: EngageBay is more compelling when a smaller business wants shared contacts across CRM, marketing, sales, live chat, and service workflows and can operate within one documented tier. Consolidation can reduce tool switching, but only if the included modules meet the actual requirements.',
        'A specialist product may make more sense when one department needs deeper case management, advanced contact-center operations, or a channel-specific workflow. Do not pay for suite breadth if the organization will retain separate core systems anyway.',
      ],
      contextualLink: {
        title: 'Explore EngageBay alternatives by workflow',
        href: '/alternatives/engagebay-alternatives',
      },
    },
  ],
  scenarios: [
    {
      scenario: 'Two-person team with under 250 contacts',
      guidance: 'Evaluate Free',
      why: 'The published allowance can support a limited proof of concept without a subscription.',
    },
    {
      scenario: 'Five users needing Growth',
      guidance: 'Example: $324.95/month',
      why: 'Five × $64.99 is a Racklio calculation using the annual effective rate; taxes and other costs are excluded.',
    },
    {
      scenario: 'Small team needing specialist help-desk depth',
      guidance: 'Compare alternatives',
      why: 'Suite breadth does not establish that Service Bay meets advanced service requirements.',
    },
  ],
  faqs: [
    {
      question: 'Does EngageBay have a free plan?',
      answer:
        'Yes. All-in-One Free was listed at $0 per user per month with 250 contacts at verification.',
    },
    {
      question: 'Is EngageBay priced only by users?',
      answer:
        'No. The subscription is per user, while contact allowances and feature availability also vary by plan.',
    },
    {
      question: 'Are the example totals provider quotes?',
      answer:
        'No. They are clearly labeled Racklio calculations using published rates and stated assumptions.',
    },
  ],
  sources: engageBaySources,
  related: [
    { title: 'Read the EngageBay review', href: '/reviews/engagebay' },
    {
      title: 'Compare EngageBay vs HubSpot',
      href: '/comparisons/engagebay-vs-hubspot',
    },
    {
      title: 'Explore EngageBay alternatives',
      href: '/alternatives/engagebay-alternatives',
    },
  ],
};

export const eazyChatPricingData: CommercialPageData = {
  path: '/guides/eazychat-pricing',
  breadcrumbParent: { title: 'Guides', href: '/guides' },
  code: 'EZ',
  eyebrow: 'Verified pricing guide',
  headline: 'EazyChat.io pricing: users, AI conversations, and plan limits',
  dek: 'EazyChat.io charges per user and includes a finite monthly AI-conversation allowance. Human chats are described as unlimited, but AI usage, websites, widgets, EazyDesk access, and add-on conversations vary by plan.',
  metaTitle: 'EazyChat.io Pricing 2026: Plans & AI Limits | Racklio',
  metaDescription:
    'EazyChat.io pricing guide covering monthly and annual rates, AI conversation allowances, sites, EazyDesk, add-ons, and practical cost scenarios.',
  verificationDate,
  provider: 'EazyChat.io',
  officialUrl: 'https://eazychat.io/pricing',
  categoryLinks: [
    { title: 'AI Customer Support', href: '/categories/ai-customer-support' },
    { title: 'Live Chat & Messaging', href: '/categories/live-chat-messaging' },
  ],
  summary: [
    {
      label: 'Monthly plans',
      text: 'Launch is $29.99, Pro $59.99, and Infinity $79.99 per user per month.',
    },
    {
      label: 'Annual effective rates',
      text: 'The provider lists $23.99, $47.99, and $63.99 per user per month respectively.',
    },
    {
      label: 'Usage unit',
      text: 'Plans include 100, 1,000, or 20,000 AI conversations per month; human chats are listed as unlimited.',
    },
    {
      label: 'Important boundary',
      text: 'EazyVoice is marked as coming soon and is not treated as a current capability.',
    },
  ],
  table: {
    caption: 'EazyChat.io pricing and AI conversation limits',
    columns: [
      'Plan',
      'Monthly / annual-effective',
      'AI conversations',
      'Scope',
    ],
    rows: [
      [
        'Launch',
        '$29.99 / $23.99 per user',
        '100/month',
        '1 site and widget; EazyDesk optional.',
      ],
      [
        'Pro',
        '$59.99 / $47.99 per user',
        '1,000/month',
        '3 sites and widgets; EazyDesk included.',
      ],
      [
        'Infinity',
        '$79.99 / $63.99 per user',
        '20,000/month',
        'Unlimited sites/widgets; EazyDesk included.',
      ],
      [
        'AI add-ons',
        '$10 / $39 / $99',
        '+100 / +500 / +2,000',
        'Confirm recurrence and eligibility before purchase.',
      ],
    ],
  },
  sections: [
    {
      id: 'billing',
      code: 'B1',
      title: 'How EazyChat.io billing works',
      description:
        'Seat count and AI-conversation volume are separate cost dimensions.',
      paragraphs: [
        'Verified fact: each public plan has a per-user rate and a monthly AI-conversation allowance. The pricing page separately describes unlimited human chats. If the AI allowance is exhausted, the provider FAQ says conversations bypass AI and move to human operators until an add-on is purchased or a new billing cycle begins.',
        'Racklio analysis: this model requires both usage forecasting and staffing planning. A finite AI quota can change workload rather than simply stop the customer conversation.',
      ],
    },
    {
      id: 'plans',
      code: 'P1',
      title: 'Plan-by-plan decision analysis',
      description:
        'Choose around AI volume, deployment footprint, and help-desk requirements.',
      paragraphs: [
        'Launch fits one site or widget and a small AI allowance. Pro materially increases AI usage, supports three sites or widgets, and includes EazyDesk. Infinity raises the published allowance to 20,000 AI conversations and removes the site/widget count ceiling.',
        'The plan name Infinity does not mean unlimited AI usage. Buyers should use the published 20,000-conversation allowance as the budgeting boundary unless a current contract states otherwise.',
      ],
      evidence:
        'EazyVoice appears as “soon” in official material. Racklio intentionally excludes voice from current plan-value analysis.',
    },
    {
      id: 'extras',
      code: 'C1',
      title: 'Add-ons, limits, and cost risk',
      description:
        'AI conversation add-ons can alter the effective unit economics.',
      paragraphs: [
        'The pricing page lists add-ons of 100, 500, and 2,000 AI conversations. Confirm whether an add-on recurs, when it expires, whether unused capacity rolls over, and which accounts can purchase it. Racklio does not infer those terms from the listed quantities.',
        'Implementation, knowledge preparation, human coverage, taxes, and unsupported integrations can add operational cost. Public technical, security, and integration documentation is limited, so contract-level verification is important for procurement-sensitive teams.',
      ],
    },
    {
      id: 'value',
      code: 'V1',
      title: 'When the economics fit',
      description:
        'Value depends on whether the included AI allowance offsets useful human workload.',
      paragraphs: [
        'Racklio analysis: EazyChat.io is worth considering for a small website-support team that can estimate AI conversation volume and values content-based AI answers plus human takeover. Pro may be the practical comparison point when EazyDesk and more than one website matter.',
        'A more established support platform may make sense when multichannel depth, a larger integration ecosystem, extensive public documentation, or mature help-desk administration matters more than the entry price.',
      ],
    },
  ],
  scenarios: [
    {
      scenario: 'Two Launch users billed monthly',
      guidance: 'Example: $59.98/month',
      why: 'Two × $29.99 is a Racklio calculation before taxes, add-ons, and implementation.',
    },
    {
      scenario: 'Three Pro users billed annually',
      guidance: 'Example: $143.97/month effective',
      why: 'Three × $47.99 uses the published annual-effective rate.',
    },
    {
      scenario: 'Voice-first support requirement',
      guidance: 'Do not select on voice',
      why: 'EazyVoice is marked as upcoming, not currently available.',
    },
  ],
  faqs: [
    {
      question: 'Are EazyChat.io AI conversations unlimited?',
      answer:
        'No. The current plans list monthly allowances of 100, 1,000, and 20,000 AI conversations.',
    },
    {
      question: 'What happens when the AI allowance is used?',
      answer:
        'The provider FAQ says conversations bypass AI and go to human operators unless capacity is added or the billing cycle resets.',
    },
    {
      question: 'Is EazyDesk included?',
      answer:
        'It is optional on Launch and listed as included on Pro and Infinity.',
    },
  ],
  sources: eazyChatSources,
  related: [
    { title: 'Read the EazyChat.io review', href: '/reviews/eazychat' },
    {
      title: 'Compare EazyChat.io vs Tidio',
      href: '/comparisons/eazychat-vs-tidio',
    },
    {
      title: 'Explore EazyChat.io alternatives',
      href: '/alternatives/eazychat-alternatives',
    },
  ],
};

export const engageBayAlternativesData: CommercialPageData = {
  path: '/alternatives/engagebay-alternatives',
  breadcrumbParent: { title: 'EngageBay Review', href: '/reviews/engagebay' },
  code: 'EA',
  eyebrow: 'Scenario-led alternatives',
  headline:
    'EngageBay alternatives: choose by workflow, depth, and operating model',
  dek: 'Consider an EngageBay alternative when a broader enterprise platform, a specialist service tool, or an omnichannel messaging workspace fits better than an integrated small-business suite. EngageBay remains relevant when connected breadth and simpler consolidation are the priority.',
  metaTitle: 'EngageBay Alternatives: HubSpot, Tidio & respond.io | Racklio',
  metaDescription:
    'Compare meaningful EngageBay alternatives by CRM scope, support depth, messaging workflow, pricing model, complexity, and practical business fit.',
  verificationDate,
  provider: 'EngageBay',
  providerKey: 'engageBay',
  officialUrl: 'https://www.engagebay.com/',
  categoryLinks: [
    {
      title: 'CRM & Customer Engagement',
      href: '/categories/crm-customer-engagement',
    },
  ],
  summary: [
    {
      label: 'Choose HubSpot when',
      text: 'A broader customer platform, larger app ecosystem, and more advanced packaging justify greater cost and complexity.',
    },
    {
      label: 'Choose Tidio when',
      text: 'Web chat, ticketing, automation, and AI conversation handling are the main requirement.',
    },
    {
      label: 'Choose respond.io when',
      text: 'WhatsApp and omnichannel conversation workflows matter more than broad CRM-suite coverage.',
    },
    {
      label: 'Stay with EngageBay when',
      text: 'A smaller team wants CRM, marketing, sales, and service context in one comparatively compact suite.',
    },
  ],
  table: {
    caption: 'EngageBay alternative decision matrix',
    columns: ['Option', 'Center of gravity', 'Pricing model', 'Consider when'],
    rows: [
      [
        'EngageBay',
        'CRM, marketing, sales, and service suite',
        'Per user; contacts and tier limits',
        'Connected breadth is the objective.',
      ],
      [
        'HubSpot',
        'Multi-hub customer platform',
        'Seats, editions, credits, and add-ons',
        'Ecosystem and advanced scope justify complexity.',
      ],
      [
        'Tidio',
        'Live chat, help desk, automation, AI',
        'Plans plus conversation/AI usage',
        'Support workflow is the primary need.',
      ],
      [
        'respond.io',
        'Omnichannel conversation management',
        'Plans, users, active contacts, channel fees',
        'Messaging channels drive the operation.',
      ],
    ],
  },
  sections: [
    {
      id: 'why-switch',
      code: 'W1',
      title: 'Why buyers consider EngageBay alternatives',
      description: 'Suite breadth can be an advantage or a boundary.',
      paragraphs: [
        'Verified fact: EngageBay combines CRM, marketing, sales, live chat, and Service Bay functions, with contact and capability limits that change by tier. A buyer may look elsewhere when one department needs deeper tooling, governance, integration, or channel coverage than the selected tier documents.',
        'Racklio analysis: changing products is not automatically an upgrade. It is justified when a specific workflow gap matters more than the cost and disruption of operating another platform.',
      ],
      contextualLink: {
        title: 'Read the baseline EngageBay review',
        href: '/reviews/engagebay',
      },
    },
    {
      id: 'hubspot',
      code: 'A1',
      title: 'HubSpot for broader platform scope',
      description:
        'HubSpot is relevant when ecosystem and multi-hub depth outweigh simpler packaging.',
      paragraphs: [
        'HubSpot officially packages Marketing, Sales, Service, Content, Data, Commerce, and Smart CRM capabilities across free and paid editions. Its pricing can combine seats, editions, credits, add-ons, and annual commitments, so it should not be reduced to a single headline rate.',
        'Choose HubSpot when the organization can govern a broader platform and needs its documented ecosystem or advanced hub capabilities. Stay with EngageBay when a smaller connected suite is sufficient and the required features fit a published plan.',
      ],
      contextualLink: {
        title: 'See the EngageBay vs HubSpot comparison',
        href: '/comparisons/engagebay-vs-hubspot',
      },
    },
    {
      id: 'specialists',
      code: 'A2',
      title: 'Tidio and respond.io for specialist workflows',
      description:
        'Specialist products solve narrower customer-communication problems.',
      paragraphs: [
        'Tidio centers on live chat, help desk, automation, and Lyro AI. It is the more direct candidate when website support rather than broad lifecycle CRM is the purchasing problem. Its billable conversations, Lyro usage, seats, and add-ons require separate modeling.',
        'respond.io centers on omnichannel conversations and documents WhatsApp, messaging, shared inbox, workflows, and AI on eligible tiers. It is relevant for messaging-led B2C operations, but subscription, users, Monthly Active Contacts, and channel-provider fees can all affect cost.',
      ],
    },
    {
      id: 'decision',
      code: 'D1',
      title: 'How to choose without overbuying',
      description:
        'Start with the operating model, not the longest feature list.',
      paragraphs: [
        'Document the system of record, customer channels, workflow owners, automation boundaries, reporting, governance, integrations, and forecast usage. Then compare the smallest configuration that satisfies those requirements.',
        'The defensible choice may still be EngageBay. Its broader bundle can reduce handoffs for a smaller team when specialist depth is not required.',
      ],
      contextualLink: {
        title: 'Review EngageBay pricing and plan limits',
        href: '/guides/engagebay-pricing',
      },
    },
  ],
  scenarios: [
    {
      scenario: 'Small business consolidating CRM and engagement',
      guidance: 'Stay with EngageBay',
      why: 'Connected suite breadth is the stated need.',
    },
    {
      scenario: 'Web-support team adding AI chat',
      guidance: 'Consider Tidio',
      why: 'Its documented center is live chat, help desk, automation, and Lyro.',
    },
    {
      scenario: 'WhatsApp-led B2C operation',
      guidance: 'Consider respond.io',
      why: 'Its shared messaging and active-contact model aligns more directly.',
    },
    {
      scenario: 'Organization needing a broad customer-platform ecosystem',
      guidance: 'Evaluate HubSpot',
      why: 'Its multi-hub platform and app marketplace may justify added complexity.',
    },
  ],
  faqs: [
    {
      question: 'Is HubSpot always a direct EngageBay replacement?',
      answer:
        'No. Product packaging, ecosystem, implementation, and cost can differ materially. Compare the required hubs and workflows, not brand category alone.',
    },
    {
      question: 'Should a support team choose Tidio instead?',
      answer:
        'Possibly, when live chat, ticketing, automation, and AI support are the primary requirements rather than broad CRM and marketing coverage.',
    },
    {
      question: 'When should a buyer stay with EngageBay?',
      answer:
        'When its documented CRM, marketing, sales, and service scope meets requirements within an acceptable plan and contact allowance.',
    },
  ],
  sources: [
    ...engageBaySources,
    {
      title: 'HubSpot customer platform pricing',
      href: 'https://www.hubspot.com/pricing/suite',
    },
    { title: 'Tidio pricing', href: 'https://www.tidio.com/pricing/' },
    { title: 'respond.io pricing', href: 'https://respond.io/pricing' },
  ],
  related: [
    { title: 'Read the EngageBay review', href: '/reviews/engagebay' },
    {
      title: 'Understand EngageBay pricing',
      href: '/guides/engagebay-pricing',
    },
    {
      title: 'Compare EngageBay vs HubSpot',
      href: '/comparisons/engagebay-vs-hubspot',
    },
  ],
};

export const eazyChatAlternativesData: CommercialPageData = {
  path: '/alternatives/eazychat-alternatives',
  breadcrumbParent: { title: 'EazyChat.io Review', href: '/reviews/eazychat' },
  code: 'EX',
  eyebrow: 'Scenario-led alternatives',
  headline:
    'EazyChat.io alternatives: compare support scope, maturity, and usage models',
  dek: 'Consider an EazyChat.io alternative when you need more established help-desk operations, ecommerce specialization, or broader messaging-channel coverage. EazyChat.io remains relevant for smaller website-chat deployments with forecastable AI usage.',
  metaTitle: 'EazyChat.io Alternatives: Tidio, Gorgias & respond.io | Racklio',
  metaDescription:
    'Compare EazyChat.io alternatives by AI chat, help desk, ecommerce context, messaging channels, pricing model, documentation, and business fit.',
  verificationDate,
  provider: 'EazyChat.io',
  officialUrl: 'https://eazychat.io/',
  categoryLinks: [
    { title: 'AI Customer Support', href: '/categories/ai-customer-support' },
    { title: 'Live Chat & Messaging', href: '/categories/live-chat-messaging' },
  ],
  summary: [
    {
      label: 'Choose Tidio when',
      text: 'You need a more established combination of web chat, ticketing, automation, integrations, and Lyro AI.',
    },
    {
      label: 'Choose Gorgias when',
      text: 'Ecommerce order context and a ticket-based support operation are central.',
    },
    {
      label: 'Choose respond.io when',
      text: 'WhatsApp and omnichannel conversation workflows matter more than website-centered chat.',
    },
    {
      label: 'Stay with EazyChat.io when',
      text: 'A smaller team needs website AI chat, human takeover, and predictable plan allowances without broader scope.',
    },
  ],
  table: {
    caption: 'EazyChat.io alternative decision matrix',
    columns: ['Option', 'Primary scope', 'Usage model', 'Decision relevance'],
    rows: [
      [
        'EazyChat.io',
        'AI website chat and human handoff',
        'Users plus AI conversations',
        'Focused small-team website support.',
      ],
      [
        'Tidio',
        'Chat, help desk, automation, and Lyro',
        'Plans plus several usage meters',
        'Broader web-support operation.',
      ],
      [
        'Gorgias',
        'Ecommerce help desk and AI Agent',
        'Tickets plus AI and channel usage',
        'Commerce context drives service.',
      ],
      [
        'respond.io',
        'Omnichannel conversations and workflows',
        'Users, active contacts, channel fees',
        'Messaging-led B2C teams.',
      ],
    ],
  },
  sections: [
    {
      id: 'why-switch',
      code: 'W1',
      title: 'Why buyers consider EazyChat.io alternatives',
      description:
        'Documentation depth, channel scope, and operational maturity can change the shortlist.',
      paragraphs: [
        'Verified fact: EazyChat.io documents website-based AI chat, human conversations, knowledge inputs, EazyDesk, Shopify and API integrations, and finite monthly AI allowances. Its public technical and security documentation is comparatively limited, and EazyVoice is marked as coming soon.',
        'Racklio analysis: an alternative becomes relevant when procurement needs are broader than the documented product boundary—not because a larger feature list is inherently better.',
      ],
    },
    {
      id: 'tidio',
      code: 'A1',
      title: 'Tidio for a broader web-support stack',
      description:
        'Tidio combines chat, tickets, automation, and an independently metered AI product.',
      paragraphs: [
        'Tidio publishes Free, Starter, Growth, Plus, and Premium options plus standalone Lyro pricing. It documents billable conversations, Lyro conversations, Flows usage, seats, integrations, and a security page. This produces a broader but more layered buying decision.',
        'Choose Tidio when the mature support stack and documentation are important. Stay with EazyChat.io when its simpler website-centered scope and published AI allowance fit without requiring those additional layers.',
      ],
    },
    {
      id: 'specialists',
      code: 'A2',
      title: 'Gorgias and respond.io for different operating models',
      description:
        'Commerce help desk and omnichannel messaging are distinct alternatives.',
      paragraphs: [
        'Gorgias connects support tickets with ecommerce context and prices around ticket volume, with AI Agent and channels adding separate usage. It is relevant when orders, returns, and store actions are core to service rather than incidental integrations.',
        'respond.io brings messaging channels into a shared conversation workspace with workflows and AI on eligible plans. It is relevant when WhatsApp or other messaging channels are the operational center; it is not a like-for-like website-chat substitute.',
      ],
    },
    {
      id: 'decision',
      code: 'D1',
      title: 'When EazyChat.io remains the appropriate choice',
      description: 'Focused scope can be preferable to a broader platform.',
      paragraphs: [
        'Stay with EazyChat.io when the required workflow is AI website chat trained from documented content, human takeover, and optional EazyDesk, and when the organization can verify security, integrations, and plan terms directly.',
        'Do not choose it for a current voice requirement based on roadmap language. The provider marks EazyVoice as coming soon, so voice should be evaluated separately until official availability is established.',
      ],
    },
  ],
  scenarios: [
    {
      scenario: 'Small website with forecastable AI chat',
      guidance: 'Consider EazyChat.io',
      why: 'Its published plans directly address this narrow workload.',
    },
    {
      scenario:
        'Team needing chat, tickets, automation, and public documentation',
      guidance: 'Consider Tidio',
      why: 'Its official materials establish a broader current support stack.',
    },
    {
      scenario: 'Shopify support centered on orders and returns',
      guidance: 'Consider Gorgias',
      why: 'Commerce context is central to its documented workflow.',
    },
    {
      scenario: 'WhatsApp-led support and engagement',
      guidance: 'Consider respond.io',
      why: 'Its omnichannel conversation model aligns more directly.',
    },
  ],
  faqs: [
    {
      question: 'Is Tidio a direct EazyChat.io replacement?',
      answer:
        'It overlaps in web chat and AI support but has a broader documented help-desk, automation, integration, and usage model.',
    },
    {
      question: 'Should ecommerce teams choose Gorgias?',
      answer:
        'Only when ecommerce context and ticket workflow justify its pricing and specialization.',
    },
    {
      question: 'Does EazyChat.io currently include voice?',
      answer:
        'Racklio does not treat it as available because official pages mark EazyVoice as coming soon.',
    },
  ],
  sources: [
    ...eazyChatSources,
    { title: 'Tidio pricing', href: 'https://www.tidio.com/pricing/' },
    {
      title: 'Tidio Lyro limits',
      href: 'https://help.tidio.com/hc/en-us/articles/13924459295900-The-Lyro-AI-agent-limit',
    },
    { title: 'Gorgias pricing', href: 'https://www.gorgias.com/pricing' },
    { title: 'respond.io pricing', href: 'https://respond.io/pricing' },
  ],
  related: [
    { title: 'Read the EazyChat.io review', href: '/reviews/eazychat' },
    {
      title: 'Understand EazyChat.io pricing',
      href: '/guides/eazychat-pricing',
    },
    {
      title: 'Compare EazyChat.io vs Tidio',
      href: '/comparisons/eazychat-vs-tidio',
    },
  ],
};
