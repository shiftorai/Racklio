import type { CommercialPageData } from '@/components/commercial';
import type { SoftwareReviewData } from '@/components/reviews/software-review-template';

const officialUrl = 'https://capsulecrm.com/';
const verificationDate = 'August 25, 2026';
const schemaDate = '2026-08-25';
const categoryLinks = [
  {
    title: 'CRM & Customer Engagement',
    href: '/categories/crm-customer-engagement',
  },
];
const sources = [
  {
    title: 'Capsule CRM pricing and plans',
    href: 'https://capsulecrm.com/signup/',
  },
  {
    title: 'Capsule plan guidance and limits',
    href: 'https://capsulecrm.com/support/setup-and-configuration/getting-started/',
  },
  {
    title: 'Capsule billing',
    href: 'https://capsulecrm.com/support/account-and-security/billing/',
  },
  { title: 'Capsule CRM features', href: 'https://capsulecrm.com/features/' },
  { title: 'Capsule AI features', href: 'https://capsulecrm.com/ai/' },
  { title: 'Capsule free CRM', href: 'https://capsulecrm.com/free-crm/' },
];

export const capsuleCrmReviewData: SoftwareReviewData = {
  slug: 'capsule-crm',
  name: 'Capsule CRM',
  category: 'CRM and customer engagement software',
  categoryLinks,
  headline: 'Capsule CRM Review 2026: Plans, Features, Limits & Buyer Fit',
  dek: 'Capsule CRM is a contact- and pipeline-focused CRM for teams organizing customer records, sales opportunities, tasks, workflows, reporting, email and calendar connections. It is not a help desk, phone platform, or broad customer-service replacement.',
  metaTitle: 'Capsule CRM Review 2026: Plans, Features & Fit | Racklio',
  metaDescription:
    'Evidence-first Capsule CRM review covering plans, contacts, pipelines, tasks, workflows, reporting, AI scope, integrations, limits and buyer fit.',
  officialUrl,
  providerKey: 'capsuleCrm',
  verificationDate,
  schemaDate,
  idealUser:
    'Small and growing teams that need a CRM for contact history, opportunities, tasks, a visual pipeline, and plan-dependent workflow and reporting capability.',
  pricingModel:
    'Free and per-user paid plans, with monthly or annual billing, plan-specific contact and storage limits, and optional marketing scope.',
  summary: [
    {
      label: 'Operating model',
      text: 'A CRM centered on contacts, opportunities, tasks, pipelines, projects, reporting, email and calendar-connected customer work.',
    },
    {
      label: 'Practical starting point',
      text: 'Starter for a paid CRM baseline; compare Growth when workflow automation, multiple pipelines, broader reporting, and expanded AI scope are required.',
    },
    {
      label: 'Cost boundary',
      text: 'Users, billing term, selected plan, contact capacity, storage, optional marketing scope, and future upgrades affect configured cost.',
    },
    {
      label: 'Category boundary',
      text: 'Capsule is evaluated as CRM and sales workflow software, not as a help desk, calling platform, or universal customer-service suite.',
    },
  ],
  fit: [
    'Your primary need is a structured customer/contact record with opportunities, tasks, pipeline stages, and related activity.',
    'You want to evaluate a free entry point or per-user paid CRM with published plan limits.',
    'You can map the exact automation, permissions, reporting, integration, and contact-capacity requirements before selecting a tier.',
  ],
  notFit: [
    'Your central requirement is ticketing, knowledge, omnichannel service operations, or a business phone system.',
    'You require automation, multiple pipelines, or advanced reporting but only plan for an entry-tier evaluation.',
    'You need a broad marketing suite without separately evaluating Capsule’s optional marketing scope.',
  ],
  strengths: [
    'Clear CRM focus around contacts, opportunities, tasks, pipeline visibility, and plan-documented capacity.',
    'Published contact, storage, custom-field, template, and plan progression helps buyers inspect capacity boundaries.',
    'Official documentation covers CRM features, permissions, email/calendar connections, integrations, billing, and AI availability.',
  ],
  limitations: [
    'Workflow automation, multiple pipelines, broader reporting, permissions, and higher quotas are plan-dependent.',
    'The per-user subscription is only part of total cost when contact capacity, storage, billing term, and optional scope change.',
    'Capsule does not replace a dedicated help desk, phone system, or broad customer-service operation.',
  ],
  capabilities: [
    {
      title: 'Contacts and customer context',
      description:
        'Contact records, notes, emails, files, tags, custom fields, lists, and related activity history.',
    },
    {
      title: 'Sales pipeline and tasks',
      description:
        'Opportunities, customizable sales stages, Kanban pipeline workflow, tasks, project boards, and activity follow-up.',
    },
    {
      title: 'Workflow and reporting',
      description:
        'Plan-dependent workflow automation, multiple pipelines, sales dashboards, reporting, user activity reporting, and capacity limits.',
    },
    {
      title: 'Connected CRM work',
      description:
        'Documented email and calendar connections, premium integrations, API-related connectivity, access controls, and team administration within plan scope.',
    },
  ],
  pricing: [
    {
      plan: 'Free',
      basis: '$0; up to 2 users',
      allowance: '250 contacts; 50MB storage',
      note: 'Core contacts, opportunities, one pipeline and limited customization; verify current feature access.',
    },
    {
      plan: 'Starter',
      basis: '$18 per user/month when billed annually',
      allowance: '30,000 contacts; 10GB per user',
      note: 'Paid CRM baseline with published templates, reporting, and premium-integration scope.',
    },
    {
      plan: 'Growth',
      basis: '$36 per user/month when billed annually',
      allowance: '60,000 contacts; 20GB per user',
      note: 'Adds documented automation, multiple pipelines, access controls, broader quotas, and enhanced AI tools.',
    },
    {
      plan: 'Advanced / Ultimate',
      basis: '$54 / $72 per user/month when billed annually',
      allowance: '120,000 / 240,000 contacts; 30GB / 50GB per user',
      note: 'Higher quotas and larger-team administration; Ultimate documentation describes dedicated account-management and training scope.',
    },
  ],
  sections: [
    {
      id: 'what-it-is',
      code: 'O1',
      title: 'What Capsule CRM is',
      description:
        'A CRM for contacts, customer history, sales opportunities, and structured follow-up.',
      paragraphs: [
        'Provider fact: Capsule documents contact management, opportunities, a sales pipeline, tasks, projects, reporting, automation tools, email tools, integrations, customization, security, and permissions.',
        'Racklio analysis: Capsule belongs on a shortlist when the buyer needs a CRM record and sales/workflow structure, rather than a dedicated service desk or communications platform.',
      ],
      evidence:
        'Official feature and support documentation are the factual basis; Racklio does not claim hands-on product testing.',
    },
    {
      id: 'contacts-pipeline',
      code: 'C1',
      title: 'Contacts, opportunities, and pipeline',
      description:
        'Customer records and sales progression are the core objects.',
      paragraphs: [
        'Provider fact: Capsule documents contacts with notes, emails, files, tags, custom fields, and activity history, alongside opportunities and a visual sales pipeline with customizable stages.',
        'Racklio analysis: validate the required record types, field model, ownership, stage rules, reporting definitions, import history, and handoffs before treating a CRM migration as a simple data transfer.',
      ],
    },
    {
      id: 'tasks-workflows',
      code: 'W1',
      title: 'Tasks, workflows, and automation',
      description:
        'Automation becomes materially broader above the entry tier.',
      paragraphs: [
        'Provider fact: Capsule documents task management and automation tools. Its support guidance identifies workflow automation and multiple sales pipelines as Growth-plan capabilities, with quotas increasing at higher tiers.',
        'Racklio analysis: write down the triggers, assignments, approvals, exceptions, pipeline count, and capacity needed. A workflow label alone does not establish the depth of an intended process.',
      ],
    },
    {
      id: 'reporting-integrations',
      code: 'R1',
      title: 'Reporting, integrations, email, and permissions',
      description:
        'Plan scope determines how broadly teams can administer the CRM.',
      paragraphs: [
        'Provider fact: Capsule documents reporting, email tools, calendar connections, integrations, security and permissions. Growth guidance includes record assignment and access controls; published limits vary by plan.',
        'Racklio analysis: verify the needed reports, export fields, sharing rules, mailbox/calendar behavior, accounting or service connections, and access boundaries directly against the live plan.',
      ],
    },
    {
      id: 'pricing-limits',
      code: 'P1',
      title: 'Pricing, limits, and upgrades',
      description:
        'The annual per-user display is not the entire buying decision.',
      paragraphs: [
        'Provider fact: Capsule publishes a Free plan plus Starter, Growth, Advanced, and Ultimate paid plans. Official Capsule material currently shows annual-billing rates of $18, $36, $54, and $72 per user/month; monthly billing is a separate billing option. Paid-plan trials are documented as 14 days.',
        'Provider fact: published plan guidance lists contact limits from 30,000 on Starter to 240,000 on Ultimate and storage from 10GB to 50GB per user. Billing documentation states subscription cost is based on user count and plan price, with annual user changes governed by the annual term.',
        'Racklio analysis: model active, suspended, and pending users where relevant; billing cycle; contact growth; storage; plan-only features; and optional marketing scope before selecting a plan.',
      ],
      contextualLink: {
        title: 'Read the Capsule CRM pricing guide',
        href: '/guides/capsule-crm-pricing',
      },
    },
    {
      id: 'tradeoffs',
      code: 'T1',
      title: 'Strengths and trade-offs',
      description: 'CRM focus is useful when it matches the operating problem.',
      paragraphs: [
        'Consider Capsule when customer records, opportunities, tasks, pipeline visibility, and a scoped CRM operating model are the primary requirements. Consider Pipedrive when a more explicitly pipeline-first sales model is required, or EngageBay when a broader connected marketing, sales, and service suite is central.',
        'Do not choose Capsule merely because it stores contacts if the actual requirement is help-desk workflow, omnichannel support, phone operations, or an all-in-one customer-service stack.',
      ],
      contextualLink: {
        title: 'Explore Capsule CRM alternatives',
        href: '/alternatives/capsule-crm-alternatives',
      },
    },
  ],
  scenarios: [
    {
      scenario: 'Very small team needs CRM basics',
      fit: 'Evaluate Free',
      why: 'Capsule documents up to two users, 250 contacts, core contacts, opportunities, and a sales pipeline.',
    },
    {
      scenario:
        'Team needs automation, multiple pipelines, and access controls',
      fit: 'Evaluate Growth or above',
      why: 'Capsule identifies these as Growth-plan capabilities with plan-dependent quotas.',
    },
    {
      scenario: 'Sales process is highly pipeline-centric',
      fit: 'Compare Capsule with Pipedrive',
      why: 'Both address CRM, contacts, activities, pipeline, automation, reporting, and integrations but organize their product positioning differently.',
    },
    {
      scenario: 'Primary requirement is service tickets or calling',
      fit: 'Consider another category',
      why: 'Those needs are outside Capsule’s CRM center of gravity.',
    },
  ],
  faqs: [
    {
      question: 'Is Capsule CRM a help desk?',
      answer:
        'No. Racklio evaluates it as CRM and sales/workflow software rather than support-ticketing software.',
    },
    {
      question: 'Does the published annual rate equal monthly billing?',
      answer:
        'No. The listed paid-plan figures are annual-billing per-user monthly equivalents; Capsule documents monthly billing separately.',
    },
    {
      question: 'Which plan adds automation?',
      answer:
        'Capsule’s current plan guidance identifies workflow automation and multiple sales pipelines on Growth; verify current live plan scope before purchase.',
    },
    {
      question: 'Has Racklio tested Capsule hands-on?',
      answer:
        'No. This review relies on Capsule-controlled documentation and distinguishes provider facts from Racklio analysis.',
    },
  ],
  alternatives: [
    {
      title: 'Pipedrive',
      description:
        'Consider for a more explicitly pipeline-first sales CRM operating model.',
      href: '/reviews/pipedrive',
    },
    {
      title: 'EngageBay',
      description:
        'Consider when broader CRM, marketing, sales, live chat, and service scope is required.',
      href: '/reviews/engagebay',
    },
    {
      title: 'HubSpot',
      description:
        'Consider when a broader multi-hub platform and ecosystem justify the added configuration decision.',
      href: '/alternatives/hubspot-alternatives',
    },
  ],
  relatedComparisons: [
    {
      title: 'Capsule CRM vs Pipedrive',
      href: '/comparisons/capsule-crm-vs-pipedrive',
    },
  ],
  sources,
};

export const capsuleCrmPricingData: CommercialPageData = {
  path: '/guides/capsule-crm-pricing',
  breadcrumbParent: { title: 'Guides', href: '/guides' },
  code: 'CP',
  eyebrow: 'Pricing decision guide',
  headline: 'Capsule CRM Pricing 2026: Plans, Limits & Team Cost',
  dek: 'Capsule combines a free tier with per-user paid plans, monthly or annual billing, and plan-specific contact, storage, workflow, reporting, and administration limits. This guide separates annual display rates from configured cost.',
  metaTitle: 'Capsule CRM Pricing 2026: Plans & Limits | Racklio',
  metaDescription:
    'Evidence-first Capsule CRM pricing guide covering Free, Starter, Growth, Advanced and Ultimate plans, users, contacts, storage, billing and upgrade boundaries.',
  verificationDate,
  schemaDate,
  provider: 'Capsule CRM',
  providerKey: 'capsuleCrm',
  officialUrl,
  categoryLinks,
  summary: [
    {
      label: 'Published annual rates',
      text: 'Starter $18, Growth $36, Advanced $54, and Ultimate $72 per user/month when billed annually.',
    },
    {
      label: 'Do not omit',
      text: 'Users, billing cycle, contact capacity, storage, plan-only workflows, permissions, and optional marketing scope.',
    },
    {
      label: 'Operational boundary',
      text: 'Growth is the first documented tier for automation, multiple pipelines, access controls, and broader quota scope.',
    },
    {
      label: 'Trial',
      text: 'Capsule documents a 14-day paid-plan trial; verify eligibility and current checkout terms.',
    },
  ],
  table: {
    caption: 'Current Capsule CRM plan display and decision context',
    columns: [
      'Plan',
      'Annual-billing display',
      'Published capacity',
      'Decision boundary',
    ],
    rows: [
      [
        'Free',
        '$0; up to 2 users',
        '250 contacts; 50MB storage',
        'Core CRM baseline with limited capacity',
      ],
      [
        'Starter',
        '$18/user/month',
        '30,000 contacts; 10GB/user',
        'Paid baseline; inspect exact workflow and reporting requirements',
      ],
      [
        'Growth',
        '$36/user/month',
        '60,000 contacts; 20GB/user',
        'Automation, multiple pipelines, access controls, larger quotas',
      ],
      [
        'Advanced',
        '$54/user/month',
        '120,000 contacts; 30GB/user',
        'Higher quotas and broader plan capacity',
      ],
      [
        'Ultimate',
        '$72/user/month',
        '240,000 contacts; 50GB/user',
        'Larger-team support and administration scope; verify live terms',
      ],
    ],
  },
  sections: [
    {
      id: 'billing',
      code: 'B1',
      title: 'Users and billing-cycle economics',
      description:
        'Annual display rates must not be read as monthly-billing prices.',
      paragraphs: [
        'Provider fact: Capsule bills paid subscriptions in advance and documents monthly and annual billing. Subscription cost is based on user count and plan price; annual subscriptions determine the maximum user count for the year.',
        'Racklio analysis: calculate required seats and term first, then model whether user changes, contact growth, storage, workflow needs, and an optional marketing scope will require a plan change.',
      ],
    },
    {
      id: 'limits',
      code: 'L1',
      title: 'Plan limits and upgrade triggers',
      description:
        'Capacity and operational requirements move teams between plans.',
      paragraphs: [
        'Provider fact: Capsule publishes Free, Starter, Growth, Advanced, and Ultimate plans. Current guidance lists ascending contact and storage capacity; Growth introduces automation, multiple pipelines, access controls, and larger quotas.',
        'Racklio analysis: an upgrade may be driven by more than contacts. Check ownership, permissions, pipelines, automation, reporting, templates, shared inbox needs, integration scope, and data retention before choosing an entry tier.',
      ],
    },
    {
      id: 'trial',
      code: 'T1',
      title: 'Trial and purchase checks',
      description:
        'Use the trial to validate configuration, not to infer unlimited access.',
      paragraphs: [
        'Provider fact: Capsule’s billing documentation describes a 14-day trial for a new paid-plan account. Free-to-paid upgrades begin billing when payment details are entered.',
        'Racklio analysis: test a representative import, core fields, pipeline stages, tasks, permissions, reporting, and required integrations. Confirm taxes, currency, renewal, downgrade consequences, and current feature availability at checkout.',
      ],
    },
  ],
  scenarios: [
    {
      scenario: 'Two-user team testing basic CRM',
      guidance: 'Evaluate Free',
      why: 'The documented Free plan includes up to two users and 250 contacts.',
    },
    {
      scenario: 'Team needs automation and multiple pipelines',
      guidance: 'Evaluate Growth',
      why: 'Current Capsule guidance identifies those capabilities on Growth.',
    },
    {
      scenario: 'Contact or storage capacity is near a tier boundary',
      guidance: 'Model the next plan before committing',
      why: 'Published contact and storage limits rise by tier.',
    },
  ],
  faqs: [
    {
      question: 'What is Capsule CRM’s entry paid rate?',
      answer:
        'Current official Capsule material lists Starter at $18 per user/month when billed annually; confirm the live price and currency before purchase.',
    },
    {
      question: 'What changes Capsule’s real cost?',
      answer:
        'Users, billing cycle, plan level, contact and storage needs, plan-only functionality, and any optional scope can change configured cost.',
    },
  ],
  sources,
  related: [
    { title: 'Capsule CRM review', href: '/reviews/capsule-crm' },
    {
      title: 'Capsule CRM alternatives',
      href: '/alternatives/capsule-crm-alternatives',
    },
    { title: 'Pipedrive pricing', href: '/guides/pipedrive-pricing' },
  ],
};

export const capsuleCrmAlternativesData: CommercialPageData = {
  path: '/alternatives/capsule-crm-alternatives',
  breadcrumbParent: { title: 'Alternatives', href: '/alternatives' },
  code: 'CA',
  eyebrow: 'Alternatives decision guide',
  headline: 'Capsule CRM Alternatives: When Another CRM Fits Better',
  dek: 'Alternatives should reflect a different operating model, not a generic list. Compare Capsule with already-covered CRM options when pipeline specialization, suite breadth, or platform scope changes the buyer decision.',
  metaTitle: 'Capsule CRM Alternatives 2026: Decision Guide | Racklio',
  metaDescription:
    'Conditional Capsule CRM alternatives guide covering Pipedrive, EngageBay and HubSpot by CRM operating model, scope and buyer fit.',
  verificationDate,
  schemaDate,
  provider: 'Capsule CRM',
  providerKey: 'capsuleCrm',
  officialUrl,
  categoryLinks,
  summary: [
    {
      label: 'Stay with Capsule when',
      text: 'Contacts, opportunities, tasks, pipelines, and scoped CRM workflow are the primary requirement.',
    },
    {
      label: 'Consider Pipedrive when',
      text: 'A more explicitly pipeline-first sales CRM operating model is central.',
    },
    {
      label: 'Consider EngageBay when',
      text: 'A smaller organization needs broader connected CRM, marketing, sales, chat, and service workflows.',
    },
    {
      label: 'Consider HubSpot when',
      text: 'Broader multi-hub platform scope and ecosystem outweigh added configuration and cost decisions.',
    },
  ],
  table: {
    caption: 'Capsule CRM alternative paths',
    columns: [
      'Alternative',
      'Why consider it',
      'Trade-off',
      'Best-fit scenario',
    ],
    rows: [
      [
        'Pipedrive',
        'Pipeline-first sales CRM focus',
        'Configured add-ons and a more singular sales operating model',
        'Deal stages, activities, forecast workflow, and sales reporting drive the purchase',
      ],
      [
        'EngageBay',
        'Broader connected customer suite',
        'Less singular CRM/pipeline positioning',
        'Small team wants CRM, marketing, sales, chat, and service together',
      ],
      [
        'HubSpot',
        'Broader multi-hub platform and ecosystem',
        'Additional configuration and commercial complexity',
        'Organization needs wider platform scope across customer teams',
      ],
    ],
  },
  sections: [
    {
      id: 'pipedrive',
      code: 'P1',
      title: 'Pipedrive for pipeline-first sales work',
      description:
        'A direct overlap around contacts, deals, activities, automation, reporting, and integrations.',
      paragraphs: [
        'Provider fact: Pipedrive documents visual pipelines, customizable stages, deals, activities, contacts, email workflow, automation, forecasting, reporting, and integrations.',
        'Racklio analysis: consider Pipedrive when sales pipeline discipline is the central operating model. Stay with Capsule when a more scoped CRM record, task, project, and customer relationship workflow better matches the team.',
      ],
      contextualLink: {
        title: 'Compare Capsule CRM vs Pipedrive',
        href: '/comparisons/capsule-crm-vs-pipedrive',
      },
    },
    {
      id: 'engagebay',
      code: 'E1',
      title: 'EngageBay for broader connected scope',
      description: 'A suite choice rather than a like-for-like CRM substitute.',
      paragraphs: [
        'Provider fact: Racklio’s EngageBay coverage documents CRM, marketing, sales, live chat, and service workflows in a connected suite.',
        'Racklio analysis: consider EngageBay when the buyer wants cross-functional consolidation. The trade-off is moving from Capsule’s CRM-centered boundary to a wider platform-selection decision.',
      ],
    },
    {
      id: 'hubspot',
      code: 'H1',
      title: 'HubSpot for multi-hub platform scope',
      description:
        'A broader ecosystem may fit a different organizational model.',
      paragraphs: [
        'Provider fact: Racklio’s existing HubSpot coverage describes Smart CRM and multiple customer-facing hubs.',
        'Racklio analysis: consider HubSpot when broader platform scope is the requirement. It should not be selected merely because it overlaps on contact records and pipeline features.',
      ],
    },
  ],
  scenarios: [
    {
      scenario: 'CRM records, tasks, and a scoped pipeline are sufficient',
      guidance: 'Stay with Capsule',
      why: 'Its documented CRM model directly addresses those needs.',
    },
    {
      scenario: 'Sales pipeline and activity ownership dominate',
      guidance: 'Consider Pipedrive',
      why: 'Pipedrive has a clearer pipeline-first sales operating model.',
    },
    {
      scenario:
        'Small team needs marketing, sales, chat, and service in one suite',
      guidance: 'Consider EngageBay',
      why: 'Its documented scope is broader across customer-facing functions.',
    },
  ],
  faqs: [
    {
      question: 'Is there a universal Capsule CRM alternative?',
      answer:
        'No. The right alternative depends on whether pipeline specialization, broader suite coverage, or multi-hub platform scope is the real requirement.',
    },
  ],
  sources,
  related: [
    { title: 'Capsule CRM review', href: '/reviews/capsule-crm' },
    { title: 'Capsule CRM pricing', href: '/guides/capsule-crm-pricing' },
    {
      title: 'CRM & Customer Engagement',
      href: '/categories/crm-customer-engagement',
    },
  ],
};
