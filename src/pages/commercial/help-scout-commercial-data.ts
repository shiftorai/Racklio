import type { CommercialPageData } from '@/components/commercial';
import type { SoftwareReviewData } from '@/components/reviews/software-review-template';

const officialUrl = 'https://www.helpscout.com/';
const verificationDate = 'August 25, 2026';
const schemaDate = '2026-08-25';
const categoryLinks = [
  { title: 'AI Customer Support', href: '/categories/ai-customer-support' },
];
const sources = [
  {
    title: 'Help Scout billing and plans guide',
    href: 'https://docs.helpscout.com/article/596-billing-and-plans-guide',
  },
  {
    title: 'AI Resolutions pricing',
    href: 'https://docs.helpscout.com/article/1746-ai-resolutions-pricing',
  },
  {
    title: 'Beacon jumpstart guide',
    href: 'https://docs.helpscout.com/article/1250-beacon-jumpstart-guide',
  },
  {
    title: 'Help Scout user roles and permissions',
    href: 'https://docs.helpscout.com/article/15-user-roles-and-permissions',
  },
  {
    title: 'Help Scout Docs reports',
    href: 'https://docs.helpscout.com/article/387-reports-docs',
  },
  {
    title: 'Help Scout AI Agents',
    href: 'https://docs.helpscout.com/article/1757-ai-agents-in-help-scout',
  },
];

export const helpScoutReviewData: SoftwareReviewData = {
  slug: 'help-scout',
  name: 'Help Scout',
  category: 'AI customer support software',
  categoryLinks,
  headline: 'Help Scout Review 2026: Plans, AI, Limits & Buyer Fit',
  dek: 'Help Scout is a customer-support platform built around shared inbox workflows, Docs knowledge bases, Beacon messaging, automation, reporting, integrations, and documented AI Answers economics. It is not a CRM replacement, phone platform, or universal contact-center system.',
  metaTitle: 'Help Scout Review 2026: Plans, AI & Buyer Fit | Racklio',
  metaDescription:
    'Evidence-first Help Scout review covering shared inboxes, Docs, Beacon, AI Answers, workflows, reporting, permissions, plans and buyer fit.',
  officialUrl,
  providerKey: 'helpScout',
  verificationDate,
  schemaDate,
  idealUser:
    'Support teams that need a shared inbox, self-service knowledge, website messaging, workflow controls, reports, and a documented AI Answers model.',
  pricingModel:
    'User-based account plans with monthly or annual billing, plan-specific scope, optional inbox and Docs-site charges, and AI Answers billed per eligible resolution on paid plans.',
  summary: [
    {
      label: 'Operating model',
      text: 'A support system connecting shared inboxes, customer conversation context, Docs knowledge bases, Beacon messaging, workflows, reports, and administration.',
    },
    {
      label: 'Practical starting point',
      text: 'Start by mapping support users, inboxes, Docs sites, Beacon use, permissions, and whether AI Answers will resolve visitor sessions.',
    },
    {
      label: 'Cost boundary',
      text: 'Users, billing cycle, additional inboxes, additional Docs sites, and AI resolutions can affect configured spend.',
    },
    {
      label: 'Category boundary',
      text: 'Help Scout is evaluated as customer-support software, not a CRM, business phone platform, or universal contact-center replacement.',
    },
  ],
  fit: [
    'Your team needs shared customer conversations, support ownership, a knowledge base, and website-facing help in one support operating model.',
    'You can model users, inboxes, Docs sites, permissions, and expected AI Answers resolutions before purchase.',
    'Self-service, human support, and customer context need to work together without treating live chat as the sole product center.',
  ],
  notFit: [
    'Your core requirement is a full CRM, pipeline management, or sales automation system.',
    'Your central channel is business telephony or a broad omnichannel contact-center deployment.',
    'You require AI outcomes without validating the content sources, guardrails, escalation path, and per-resolution economics.',
  ],
  strengths: [
    'A documented shared-inbox, Docs, Beacon, live chat, proactive messages, workflow, reporting, and permissions system.',
    'Beacon combines contact forms, chat, Docs content, proactive messaging, and documented AI Answers in a website/app widget.',
    'Official documentation makes AI Answers billing, spending limits, inbox add-ons, Docs-site add-ons, roles, and plan-dependent permissions inspectable.',
  ],
  limitations: [
    'AI Answers charges $0.75 per resolution on paid plans after the new-customer trial, so model expected resolutions and a spending limit.',
    'Additional inboxes and Docs sites can add recurring charges beyond user plans.',
    'Help Scout’s support focus does not replace a sales CRM, phone system, or a generalized enterprise contact-center assessment.',
  ],
  capabilities: [
    {
      title: 'Shared inbox and customer context',
      description:
        'Team users manage customer conversations, notes, customer profiles, inbox access, workflows, views, saved replies, and collaboration according to roles.',
    },
    {
      title: 'Docs and self-service',
      description:
        'Docs sites, collections, categories, articles, search, and reports support knowledge-led customer self-service.',
    },
    {
      title: 'Beacon and messaging',
      description:
        'The embeddable Beacon can provide contact forms, live chat, Docs help, proactive messages, and AI Answers on websites or apps.',
    },
    {
      title: 'AI, reports, and administration',
      description:
        'AI Answers, AI Agents, reporting, integrations, permissions, and account settings are documented with plan and role boundaries.',
    },
  ],
  pricing: [
    {
      plan: 'User-based plans',
      basis:
        'Monthly or annual per-user pricing shown in the live account/pricing experience',
      allowance: 'Plan availability and features can vary by account',
      note: 'Help Scout documentation directs prospective buyers to the pricing page for current plan details; dynamic pricing is intentionally not stated here.',
    },
    {
      plan: 'Additional inbox',
      basis: '$12/month monthly or $10/month when paid annually',
      allowance: 'Per additional inbox',
      note: 'Documented in the billing guide.',
    },
    {
      plan: 'Additional Docs site',
      basis: '$20/site/month on paid plans',
      allowance: 'Per additional Docs site',
      note: 'At least one Docs site is included in all plans; verify account inclusion.',
    },
    {
      plan: 'AI Answers',
      basis: '$0.75 per AI resolution after trial',
      allowance: 'Billed for an eligible customer session resolved by AI',
      note: 'New Help Scout customers receive a documented three-month AI Answers trial; monthly spending limits are available.',
    },
  ],
  sections: [
    {
      id: 'what-it-is',
      code: 'O1',
      title: 'What Help Scout is',
      description:
        'A customer-support operating model that connects human support and self-service.',
      paragraphs: [
        'Provider fact: Help Scout documents shared inboxes, Docs knowledge bases, Beacon, live chat, proactive messages, workflows, reports, customer profiles, integrations, roles, permissions, and AI Answers.',
        'Racklio analysis: it fits a support operation that needs customer conversations and self-service to share one system boundary. It should not be positioned as a sales CRM or a phone-first platform.',
      ],
      evidence:
        'This page uses Help Scout-controlled documentation; Racklio does not claim independent support-quality or performance testing.',
    },
    {
      id: 'inbox-context',
      code: 'I1',
      title: 'Shared inbox and customer context',
      description:
        'Support work is organized around accessible inboxes and customer conversations.',
      paragraphs: [
        'Provider fact: Help Scout documents user roles, inbox-specific access, conversations, notes, customer profiles, views, workflows, saved replies, teams, and reporting permissions.',
        'Racklio analysis: define which teams need to reply, collaborate, view reports, manage workflows, or administer settings. Permission and inbox design should be tested before rollout.',
      ],
    },
    {
      id: 'docs-beacon',
      code: 'D1',
      title: 'Docs, Beacon, and messaging',
      description:
        'Website help combines knowledge, messaging, and escalation paths.',
      paragraphs: [
        'Provider fact: Beacon can display a contact form, live chat, Docs articles, proactive messages, and AI Answers. All plans include Beacon and at least one Docs site; additional Docs sites and inboxes are separately documented charges.',
        'Racklio analysis: verify whether web chat is a primary channel, whether Docs content is current enough for self-service, and how Beacon should route a visitor when automation cannot help.',
      ],
    },
    {
      id: 'ai-automation',
      code: 'A1',
      title: 'AI Answers, AI Agents, and workflow boundaries',
      description:
        'AI functionality has content, configuration, and usage-cost requirements.',
      paragraphs: [
        'Provider fact: AI Answers is available in paid plans after a documented new-customer three-month trial. Help Scout bills $0.75 for each eligible AI resolution and provides monthly spending limits. AI Agents centralize knowledge, behavior, sources, and guardrails for AI Answers.',
        'Racklio analysis: do not infer accuracy, resolution quality, or savings from an AI label. Evaluate source coverage, changes and resync needs, guardrails, human escalation, monthly spend cap, and the conversation-review process.',
      ],
    },
    {
      id: 'reports-permissions',
      code: 'R1',
      title: 'Reporting, roles, and governance',
      description:
        'Reports and controls should be mapped to real operating ownership.',
      paragraphs: [
        'Provider fact: Help Scout documents Account Owner, Administrator, User, and Light User roles, with plan-dependent custom permissions. Docs reporting has documented data-history limits by plan, and report access requires the applicable permission.',
        'Racklio analysis: validate whether the required managers can view/export reports and whether role, team, inbox, customer-data, and API access match governance requirements.',
      ],
    },
    {
      id: 'pricing-limits',
      code: 'P1',
      title: 'Pricing and billing boundaries',
      description:
        'The displayed plan price is not the whole support-team cost.',
      paragraphs: [
        'Provider fact: Help Scout’s billing guide documents monthly and annual user-based billing, unlimited email volume and storage, Beacon, and mobile apps in all plans. It also documents $12/month monthly or $10/month annual additional inboxes and $20/month additional Docs sites on paid plans.',
        'Provider fact: AI Answers is billed in arrears at $0.75 per eligible resolution after the new-customer trial. Account Owners and Administrators can set a monthly resolution-based spending limit.',
        'Racklio analysis: get current plan pricing directly from Help Scout, then model support users, additional inboxes, Docs sites, AI resolutions, plan capabilities, and annual-payment mechanics.',
      ],
      contextualLink: {
        title: 'Read the Help Scout pricing guide',
        href: '/guides/help-scout-pricing',
      },
    },
    {
      id: 'tradeoffs',
      code: 'T1',
      title: 'Strengths and trade-offs',
      description:
        'Support breadth and ecommerce specialization are different decisions.',
      paragraphs: [
        'Consider Help Scout when a shared inbox, Docs, Beacon, self-service, support collaboration, and controlled AI Answers economics define the desired operating model. Consider Gorgias when ecommerce support context and its product-specific workflow are the central requirement.',
        'Do not choose either without validating channels, integrations, automation, reporting, permissions, plan scope, and configured cost.',
      ],
      contextualLink: {
        title: 'Explore Help Scout alternatives',
        href: '/alternatives/help-scout-alternatives',
      },
    },
  ],
  scenarios: [
    {
      scenario:
        'Support team needs shared inbox, knowledge base, and website help',
      fit: 'Consider Help Scout',
      why: 'Its documented product scope connects Inbox, Docs, Beacon, and support administration.',
    },
    {
      scenario: 'Team expects AI to answer customer questions',
      fit: 'Model AI Answers usage first',
      why: 'Eligible AI resolutions are billed at $0.75 after the trial and can be capped monthly.',
    },
    {
      scenario: 'Ecommerce support workflows are the core requirement',
      fit: 'Compare Gorgias',
      why: 'Gorgias is positioned in Racklio as an ecommerce-centered help desk.',
    },
    {
      scenario: 'Web chat and automation are the central need',
      fit: 'Compare Tidio',
      why: 'Tidio is a more chat- and automation-led support decision.',
    },
  ],
  faqs: [
    {
      question: 'Is Help Scout a CRM?',
      answer:
        'No. Racklio evaluates Help Scout as customer-support software with customer context, not as a sales CRM replacement.',
    },
    {
      question: 'How is AI Answers billed?',
      answer:
        'Help Scout documents $0.75 per eligible AI resolution after a three-month new-customer trial, with a monthly spending limit.',
    },
    {
      question: 'Are extra inboxes included?',
      answer:
        'The billing guide documents additional inboxes at $12/month monthly or $10/month annually; verify your included plan scope.',
    },
    {
      question: 'Has Racklio tested Help Scout hands-on?',
      answer:
        'No. This review relies on Help Scout-controlled sources and distinguishes provider facts from Racklio analysis.',
    },
  ],
  alternatives: [
    {
      title: 'Gorgias',
      description:
        'Consider when ecommerce support context and specialist workflow are central.',
      href: '/reviews/gorgias',
    },
    {
      title: 'Tidio',
      description:
        'Consider when web chat, automation, and AI/chat workflow are the primary decision.',
      href: '/reviews/tidio',
    },
    {
      title: 'respond.io',
      description:
        'Consider when messaging-led multichannel conversation operations are central.',
      href: '/reviews/respond-io',
    },
  ],
  relatedComparisons: [
    {
      title: 'Help Scout vs Gorgias',
      href: '/comparisons/help-scout-vs-gorgias',
    },
  ],
  sources,
};

export const helpScoutPricingData: CommercialPageData = {
  path: '/guides/help-scout-pricing',
  breadcrumbParent: { title: 'Guides', href: '/guides' },
  code: 'HP',
  eyebrow: 'Pricing decision guide',
  headline: 'Help Scout Pricing 2026: Users, AI Resolutions & Real Cost',
  dek: 'Help Scout combines user-based plans with billing-cycle choices, additional inboxes, additional Docs sites, and AI Answers billed per eligible resolution. This guide separates documented charges from current plan pricing that should be confirmed live.',
  metaTitle: 'Help Scout Pricing 2026: Users, AI & Limits | Racklio',
  metaDescription:
    'Evidence-first Help Scout pricing guide covering user billing, additional inboxes, Docs sites, AI Answers resolutions, spending limits and support-team cost.',
  verificationDate,
  schemaDate,
  provider: 'Help Scout',
  providerKey: 'helpScout',
  officialUrl,
  categoryLinks,
  summary: [
    {
      label: 'Plan pricing',
      text: 'Confirm current plan and per-user pricing directly on Help Scout’s live pricing page; account availability can vary.',
    },
    {
      label: 'Documented extras',
      text: 'Additional inboxes: $12 monthly or $10 when paid annually; additional Docs sites: $20/site/month on paid plans.',
    },
    {
      label: 'AI economics',
      text: 'AI Answers costs $0.75 per eligible resolution after the documented new-customer trial.',
    },
    {
      label: 'Cost rule',
      text: 'Model users, billing cycle, inboxes, Docs sites, expected AI resolutions, and plan capability together.',
    },
  ],
  table: {
    caption: 'Help Scout documented cost variables',
    columns: [
      'Cost variable',
      'Published treatment',
      'Buyer check',
      'Decision relevance',
    ],
    rows: [
      [
        'User plans',
        'Monthly or annual per-user pricing shown in current plan experience',
        'Confirm live plan availability and price',
        'User count is a core recurring-cost driver',
      ],
      [
        'Additional inbox',
        '$12/month monthly; $10/month annual',
        'Count required separate inboxes',
        'Multiple support queues can add recurring cost',
      ],
      [
        'Additional Docs site',
        '$20/site/month on paid plans',
        'Confirm included Docs sites and extra sites',
        'Separate brands or knowledge bases can add cost',
      ],
      [
        'AI Answers',
        '$0.75 per eligible resolution after trial',
        'Forecast resolutions and set a spend limit',
        'Usage introduces a variable monthly charge',
      ],
    ],
  },
  sections: [
    {
      id: 'plans',
      code: 'P1',
      title: 'Plans and user billing',
      description:
        'Help Scout directs prospective buyers to live pricing for current available plans.',
      paragraphs: [
        'Provider fact: Help Scout’s billing documentation describes monthly and annual user-based accounts and says available plans may vary by account. The live pricing experience shows current per-user rates when monthly or annual billing is selected.',
        'Racklio analysis: avoid using a remembered headline rate. Confirm plan eligibility, included products, feature boundaries, and the actual checkout total for the intended account.',
      ],
    },
    {
      id: 'ai',
      code: 'A1',
      title: 'AI Answers resolution economics',
      description: 'AI usage is a separately modeled cost variable.',
      paragraphs: [
        'Provider fact: new Help Scout customers receive a three-month AI Answers trial. Afterward, Help Scout bills $0.75 for each eligible AI resolution and bills usage in arrears. Administrators and Account Owners can set a monthly resolution-based spending limit.',
        'Racklio analysis: use a cautious resolution forecast and decide the non-AI Beacon fallback before enabling paid usage.',
      ],
    },
    {
      id: 'extras',
      code: 'E1',
      title: 'Inboxes, Docs sites, and purchase checklist',
      description: 'Support topology can change the configured bill.',
      paragraphs: [
        'Provider fact: Help Scout documents additional inboxes at $12/month monthly or $10/month paid annually, and additional Docs sites at $20/site/month on paid plans.',
        'Racklio analysis: list support brands, queues, languages, public/private knowledge bases, users, light users, reporting access, integrations, AI sources, and escalation workflows before selecting a plan.',
      ],
    },
  ],
  scenarios: [
    {
      scenario:
        'Single support team with one knowledge base and limited AI use',
      guidance: 'Start with the live plan scope and a resolution forecast',
      why: 'The plan, users, and AI resolution count jointly determine cost.',
    },
    {
      scenario:
        'Multiple queues or brands need separate inboxes and Docs sites',
      guidance: 'Model add-ons before purchase',
      why: 'Help Scout documents additional recurring charges for inboxes and Docs sites.',
    },
    {
      scenario: 'AI Answers may handle meaningful visitor volume',
      guidance: 'Set a spending limit and fallback',
      why: 'AI resolutions are billed at $0.75 after the trial and can be capped monthly.',
    },
  ],
  faqs: [
    {
      question: 'What does Help Scout charge for AI Answers?',
      answer:
        'Help Scout documents $0.75 per eligible AI resolution after the new-customer trial.',
    },
    {
      question: 'Does Help Scout price extra inboxes separately?',
      answer:
        'Yes. The billing guide lists $12/month monthly or $10/month when paid annually for each additional inbox.',
    },
  ],
  sources,
  related: [
    { title: 'Help Scout review', href: '/reviews/help-scout' },
    {
      title: 'Help Scout alternatives',
      href: '/alternatives/help-scout-alternatives',
    },
    {
      title: 'Help Scout vs Gorgias',
      href: '/comparisons/help-scout-vs-gorgias',
    },
  ],
};

export const helpScoutAlternativesData: CommercialPageData = {
  path: '/alternatives/help-scout-alternatives',
  breadcrumbParent: { title: 'Alternatives', href: '/alternatives' },
  code: 'HA',
  eyebrow: 'Alternatives decision guide',
  headline: 'Help Scout Alternatives: Choose by Support Operating Model',
  dek: 'A meaningful alternative should solve a different support operating problem. Compare Help Scout with ecommerce help desk, chat-led automation, or messaging-led conversation workflows only when that distinction is real.',
  metaTitle: 'Help Scout Alternatives 2026: Decision Guide | Racklio',
  metaDescription:
    'Conditional Help Scout alternatives guide covering Gorgias, Tidio and respond.io by support workflow, channels, automation and buyer fit.',
  verificationDate,
  schemaDate,
  provider: 'Help Scout',
  providerKey: 'helpScout',
  officialUrl,
  categoryLinks,
  summary: [
    {
      label: 'Stay with Help Scout when',
      text: 'Shared inbox, Docs, Beacon, self-service, support collaboration, and controlled AI Answers economics fit the support model.',
    },
    {
      label: 'Consider Gorgias when',
      text: 'Ecommerce-centered help desk workflows are the central requirement.',
    },
    {
      label: 'Consider Tidio when',
      text: 'Web chat, automation, and AI/chat workflow lead the decision.',
    },
    {
      label: 'Consider respond.io when',
      text: 'Messaging-led multichannel conversation operations are primary.',
    },
  ],
  table: {
    caption: 'Help Scout alternative paths',
    columns: [
      'Alternative',
      'Why consider it',
      'Trade-off',
      'Best-fit scenario',
    ],
    rows: [
      [
        'Gorgias',
        'Ecommerce-centered support workflow',
        'Different product and commerce integration emphasis',
        'Support team is organized around ecommerce customer operations',
      ],
      [
        'Tidio',
        'Web chat, automation, and AI/chat workflow',
        'Chat-led model may not match broader shared-inbox and Docs needs',
        'Website chat and automation are the central operating requirement',
      ],
      [
        'respond.io',
        'Messaging-led customer conversations',
        'Different channel and conversation-operation focus',
        'WhatsApp or other messaging channels lead the support decision',
      ],
    ],
  },
  sections: [
    {
      id: 'gorgias',
      code: 'G1',
      title: 'Gorgias for ecommerce support',
      description:
        'A specialist support choice for a different customer-operation context.',
      paragraphs: [
        'Provider fact: Racklio’s Gorgias coverage evaluates an ecommerce-centered help desk with ticket, support, and AI workflows.',
        'Racklio analysis: compare Gorgias when ecommerce systems and specialist workflow define the buying problem. Stay with Help Scout when shared inbox, Docs, Beacon, and broader self-service support are the clearer operating model.',
      ],
      contextualLink: {
        title: 'Compare Help Scout vs Gorgias',
        href: '/comparisons/help-scout-vs-gorgias',
      },
    },
    {
      id: 'tidio',
      code: 'T1',
      title: 'Tidio for chat-led support',
      description:
        'A chat and automation decision can be different from a support-suite decision.',
      paragraphs: [
        'Racklio analysis: consider Tidio when website chat, chat automation, and AI/chat workflow are the central requirements. Compare the required knowledge, inbox, human handoff, reporting, channel, and usage economics rather than treating chat labels as interchangeable.',
      ],
    },
    {
      id: 'respond',
      code: 'R1',
      title: 'respond.io for messaging-led operations',
      description:
        'Messaging-first teams may need a different system boundary.',
      paragraphs: [
        'Racklio analysis: consider respond.io when messaging channels and shared conversation operations lead the purchase. Stay with Help Scout when Docs, Beacon, shared inbox support, and self-service are the decisive workflow.',
      ],
    },
  ],
  scenarios: [
    {
      scenario:
        'Shared inbox, Docs, website widget, and self-service are central',
      guidance: 'Stay with Help Scout',
      why: 'That combination is part of Help Scout’s documented support operating model.',
    },
    {
      scenario: 'Ecommerce support workflow is primary',
      guidance: 'Consider Gorgias',
      why: 'Gorgias is the more specialist ecommerce support comparison.',
    },
    {
      scenario: 'Website chat and automation are the key customer channel',
      guidance: 'Consider Tidio',
      why: 'Tidio is a more chat-led support decision.',
    },
  ],
  faqs: [
    {
      question: 'Is there a universal Help Scout alternative?',
      answer:
        'No. Choose by ecommerce context, chat automation, messaging channels, knowledge base needs, and support-team operating model.',
    },
  ],
  sources,
  related: [
    { title: 'Help Scout review', href: '/reviews/help-scout' },
    { title: 'Help Scout pricing', href: '/guides/help-scout-pricing' },
    { title: 'AI Customer Support', href: '/categories/ai-customer-support' },
  ],
};
